import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            HOME
          </Link></li>
          <li>    
        </li>
      
      </ul>
    </nav>
  );
};

export default Navbar;