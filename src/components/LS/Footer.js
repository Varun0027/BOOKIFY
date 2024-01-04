import React from 'react';
import '../../Assets/Css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} BOOKIFY</p>
        <p>CONTACT: varun@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
