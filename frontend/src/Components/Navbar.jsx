import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/ComponentStyle/Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">Shaun Sebastian</div>
      <ul className="navbar-links">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/about" className="navbar-link">About</Link></li>
        <li><Link to="/projects" className="navbar-link">Projects</Link></li>
        <li><Link to="/contact" className="navbar-link">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
