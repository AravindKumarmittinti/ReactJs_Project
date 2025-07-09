// /components/Login.js
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password) {
      setError('Password cannot be empty.');
      return;
    }

    setError('');
    navigate('/home');
  };

  return (
    <div style={container}>
      {/* Left Side with color */}
      <div style={leftPanel}>
        <h1 style={{ color: 'white', fontSize: '2rem' }}>Welcome Back!</h1>
        <p style={{ color: '#eee' }}>Login to access your dashboard.</p>
      </div>

      {/* Right Side Login Form */}
      <div style={rightPanel}>
        <form onSubmit={handleLogin} style={formBox}>
          <h2 style={{ marginBottom: '20px' }}>Login</h2>

          {error && <p style={errorStyle}>{error}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>Login</button>

          <div style={footerLinks}>
              <span style={linkStyle} onClick={() => navigate('/ForgetPassword')}>Forgot Password?</span>
              <span style={{ color: '#999' }}>|</span>
              <span style={linkStyle} onClick={() => navigate('/signup')}>Sign Up</span>
          </div>

        </form>
      </div>
    </div>
  );
};

const container = {
  display: 'flex',
  height: '100vh',
  fontFamily: 'Arial, sans-serif'
};

const leftPanel = {
  flex: 1,
  background: 'linear-gradient(to right, #4facfe, #00f2fe)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px'
};

const rightPanel = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f9f9f9'
};

const formBox = {
  width: '80%',
  maxWidth: '400px',
  padding: '40px',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  textAlign: 'center'
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  margin: '10px 0',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#4facfe',
  border: 'none',
  color: 'white',
  fontSize: '16px',
  borderRadius: '4px',
  marginTop: '10px',
  cursor: 'pointer'
};

const footerLinks = {
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
  gap: '10px'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#007bff',
  fontWeight: 500
};

const errorStyle = {
  color: 'red',
  fontSize: '14px',
  marginBottom: '10px'
};


export default Login;
