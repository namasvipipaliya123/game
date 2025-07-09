import React, { useState, useEffect } from 'react';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';

const API = 'http://localhost:5000/api/auth';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [form, setForm] = useState({
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    inviteCode: '',
        referredBy: '',
    agreed: false,
  });

  // Fetch invite code on page load
  useEffect(() => {
    getInviteCode();
  }, []);

  // 🔄 Regenerate invite code
  const getInviteCode = async () => {
    try {
      const res = await fetch(`${API}/invite-code`);
      const data = await res.json();
      setForm((prev) => ({ ...prev, inviteCode: data.inviteCode }));
    } catch (err) {
      alert("Failed to fetch invite code");
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleRegister = async () => {
    if (!form.agreed) return alert('Please agree to the privacy policy');
    if (!form.phone || !form.email || !form.password || !form.confirmPassword)
      return alert('Please fill all required fields');
    if (form.password !== form.confirmPassword)
      return alert('Passwords do not match');

    try {
      const res = await fetch(`${API}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);

      if (data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = '/';
      }
    } catch (err) {
      alert('Registration failed.');
      console.error(err);
    }
  };

  const handleLogin = async () => {
    try {
      const res = await fetch(`${API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: form.phone, password: form.password }),
      });

      const data = await res.json();
      alert(data.message);

      if (data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = '/';
      }
    } catch (err) {
      alert('Login failed.');
      console.error(err);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="p-4 rounded w-100"
        style={{ maxWidth: '400px', background: '#162447', color: '#fff' }}
      >
        <div className="text-center mb-3">
          <h4 className="mb-1 text-info">{isLogin ? 'Login' : 'Register'}</h4>
          <small>
            {isLogin
              ? 'Login with your phone and password'
              : 'Please register with phone, email, and password'}
          </small>
        </div>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <InputGroup>
              <InputGroup.Text>+91</InputGroup.Text>
              <Form.Control
                name="phone"
                placeholder="Enter phone number"
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>

          {!isLogin && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </Form.Group>
            </>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>

          {!isLogin && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  onChange={handleChange}
                />
              </Form.Group>
               <Form.Group className="mb-3">
            <Form.Label className="text-white">Referral Code (optional)</Form.Label>
            <Form.Control
              name="referredBy"
              onChange={handleChange}
              value={form.referredBy}
              placeholder="Enter referral code"
            />
          </Form.Group>

              <Form.Group className="mb-3 text-start text-white">
                <Form.Label>Invite Code</Form.Label>
                <div className="d-flex gap-2">
                  <Form.Control
                    name="inviteCode"
                    value={form.inviteCode}
                    readOnly
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Check
                  name="agreed"
                  type="checkbox"
                  checked={form.agreed}
                  onChange={handleChange}
                />
                <span className="ms-2 text-danger">
                  I agree to the <span className="text-warning">Privacy Policy</span>
                </span>
              </Form.Group>
            </>
          )}

          <Button
            className="w-100"
            onClick={isLogin ? handleLogin : handleRegister}
          >
            {isLogin ? 'Login' : 'Register'}
          </Button>

          <div className="text-center mt-2">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="btn btn-link p-0 m-0"
                  style={{ color: '#0dcaf0', textDecoration: 'underline' }}
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already registered?{' '}
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="btn btn-link p-0 m-0"
                  style={{ color: '#0dcaf0', textDecoration: 'underline' }}
                >
                  Login
                </button>
              </>
            )}
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default AuthPage;
