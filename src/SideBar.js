import { NavLink, useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear session/localStorage if needed
    navigate('/');
  };

  return (
    <nav style={navBar}>
      <div style={navContainer}>
        <div style={leftGroup}>
          <div style={logoStyle}>My App</div>
          <div style={navLinks}>
            <NavLink to="/home" style={navLinkStyle}>Home</NavLink>
            <NavLink to="/blog" style={navLinkStyle}>Blog</NavLink>
            <NavLink to="/contact-us" style={navLinkStyle}>Contact</NavLink>
          </div>
        </div>

        <button style={logoutButton} onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

// 🔧 Styles
const navBar = {
  backgroundColor: '#f5f5f5',
  padding: '12px 0',
  boxShadow: '0 1px 5px rgba(0,0,0,0.1)'
};

const navContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 30px'
};

const leftGroup = {
  display: 'flex',
  alignItems: 'center',
  gap: '40px'
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333'
};

const navLinks = {
  display: 'flex',
  gap: '25px'
};

const navLinkStyle = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: 'none',
  fontWeight: 500,
  paddingBottom: '4px',
  borderBottom: isActive ? '2px solid #007bff' : 'none',
  transition: 'all 0.2s ease'
});

const logoutButton = {
  backgroundColor: '#e63946',
  color: '#fff',
  padding: '8px 16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 500
};

export default SideBar;
