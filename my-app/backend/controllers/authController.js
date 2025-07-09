const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const twilio = require('twilio');
const nodemailer = require('nodemailer');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const generateInviteCode = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 10; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
};

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.getInviteCode = async (req, res) => {
  let inviteCode;
  let isUnique = false;
  while (!isUnique) {
    inviteCode = generateInviteCode();
    const exists = await User.findOne({ inviteCode });
    if (!exists) isUnique = true;
  }
  res.status(200).json({ inviteCode });
};

exports.signup = async (req, res) => {
  const { phone, email, password, inviteCode, referredBy } = req.body;
  try {
    const existingUser = await User.findOne({ phone });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ userId: phone }, JWT_SECRET, { expiresIn: '7d' });
    const otp = generateOTP();

    const newUser = new User({
      phone,
      email,
      password: hashedPassword,
      inviteCode,
      referredBy,
      token,
      otp,
    });

    await newUser.save();
    try {
      const recipient = phone.startsWith('+91') ? phone : `+91${phone}`;
     await twilioClient.messages.create({
  body: ` Tiranga OTP: ${otp}\n You have registered successfully!`,
  from: process.env.TWILIO_PHONE,
  to: recipient,
  text:"login succesfully",
});

    } catch (err) {
      console.error('Twilio OTP error:', err.message);
    }
    if (email) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Your Tiranga OTP',
          text: `Your Tiranga OTP is: ${otp}`,
        });
      } catch (err) {
        console.error('Nodemailer error:', err.message);
      }
    }

    if (referredBy) {
      const referrer = await User.findOne({ inviteCode: referredBy });
      if (referrer) {
        referrer.wallet += 20;
        referrer.inviteUsedBy.push(phone);
        await referrer.save();

        try {
          const recipient = referrer.phone.startsWith('+91') ? referrer.phone : `+91${referrer.phone}`;
          await twilioClient.messages.create({
            body: `🎉 ₹20 added to your wallet! Someone used your referral code.`,
            from: process.env.TWILIO_PHONE,
            to: recipient,
          });
        } catch (err) {
          console.error('Twilio Notify error:', err.message);
        }
      }
    }

    res.status(200).json({ message: 'Signup successful. OTP sent.', token, inviteCode });
  } catch (err) {
    console.error('Signup error:', err.message);
    res.status(500).json({ message: 'Server error during signup' });
  }
};

exports.login = async (req, res) => {
  const { phone, password } = req.body;

  try {
    const user = await User.findOne({ phone });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });
    user.token = token;
    await user.save();

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: 'Server error during login' });
  }
};
  