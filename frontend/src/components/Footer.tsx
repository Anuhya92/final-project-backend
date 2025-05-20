import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="https://github.com" target="" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://twitter.com" target="" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://instagram.com" target="" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <p>&copy; {new Date().getFullYear()} Final Project Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
