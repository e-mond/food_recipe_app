// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Recipe Management System</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
