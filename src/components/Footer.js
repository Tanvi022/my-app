import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Digital Heritage</h3>
          <p>
            Digital Heritage is dedicated to preserving and sharing the rich cultural heritage of the world through modern digital technology.
          </p>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-envelope"></i> info@digitalheritage.com
          </p>
          <p>
            <i className="fas fa-phone"></i> +91 1234567890
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Digital Heritage | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
