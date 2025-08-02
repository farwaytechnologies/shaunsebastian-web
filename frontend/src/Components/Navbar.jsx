import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Styles/ComponentStyle/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const adminToken = localStorage.getItem('adminToken');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">Shaun Sebastian</div>
      <ul className="navbar-links">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/about" className="navbar-link">About</Link></li>
        <li><Link to="/projects" className="navbar-link">Projects</Link></li>
        <li><Link to="/contact" className="navbar-link">Contact</Link></li>
        {adminToken && (
          <>
            <li><Link to="/admin/dashboard" className="navbar-link">Dashboard</Link></li>
            <li><button onClick={handleLogout} className="navbar-link logout-btn">Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
