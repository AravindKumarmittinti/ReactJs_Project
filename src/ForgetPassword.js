// /components/ForgotPassword.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMsg("Email is required.");
      return;
    }
    setMsg("If this email is registered, a reset link will be sent.");
  };

  return (
    <div style={formWrapper}>
      <form onSubmit={handleSubmit} style={formBox}>
        <h2>Forgot Password</h2>
        {msg && <p style={errorStyle}>{msg}</p>}
        <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
        <button type="submit" style={buttonStyle}>Send Reset Link</button>
        <p style={{ marginTop: 10 }}>
          Back to <span style={linkStyle} onClick={() => navigate('/')}>Login</span>
        </p>
      </form>
    </div>
  );
};

const formWrapper = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f7f9fc'
};

const formBox = {
  width: '90%',
  maxWidth: '400px',
  backgroundColor: 'white',
  padding: '40px',
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
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  cursor: 'pointer'
};

const errorStyle = {
  color: 'red',
  fontSize: '14px',
  marginBottom: '10px'
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'underline',
  cursor: 'pointer'
};


export default ForgetPassword;
