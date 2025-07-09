// /components/SignUp.js
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setError('');
    // Perform registration logic here
    alert("Signed up successfully!");
    navigate('/');
  };

  return (
    <div style={formWrapper}>
      <form onSubmit={handleSignup} style={formBox}>
        <h2>Sign Up</h2>
        {error && <p style={errorStyle}>{error}</p>}
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="Confirm Password" value={confirm} onChange={e => setConfirm(e.target.value)} style={inputStyle} />
        <button type="submit" style={buttonStyle}>Create Account</button>
        <p style={{ marginTop: 10 }}>
          Already have an account? <span style={linkStyle} onClick={() => navigate('/')}>Login</span>
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

export default SignUp;
