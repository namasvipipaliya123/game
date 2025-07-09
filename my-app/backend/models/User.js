const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  email: { type: String },
  password: { type: String, required: true },
  inviteCode: { type: String, required: true, unique: true },
  referredBy: { type: String },
  inviteUsedBy: { type: [String], default: [] },
  wallet: { type: Number, default: 0 },
  token: { type: String },
  otp: { type: String }
});

module.exports = mongoose.model('User', userSchema);
