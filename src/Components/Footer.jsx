import React from "react";
import "../Style/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="#" className="footer-link">
          Home
        </a>
        <a href="#" className="footer-link">
          Features
        </a>
        <a href="#" className="footer-link">
          Pricing
        </a>
        <a href="#" className="footer-link">
          Contact
        </a>
        <a href="#" className="footer-link">
          About
        </a>
      </nav>
      <hr className="footer-divider" />
      <p className="footer-text">&copy; 2025 naaz, Inc</p>
    </footer>
  );
};

export default Footer;
