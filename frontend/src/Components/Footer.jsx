import React from 'react';
import '../Styles/ComponentStyle/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <p className="footer-text">© {new Date().getFullYear()} Sino John Philip. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
