import React from 'react';
import './Navbar.css'; // Ensure you have this file for Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="navbar-logo-text">Digital Heritage</span>
      </div>
      <div className="navbar-buttons">
        <button className="login-button">
          <span>Login</span>
        </button>
        <div className="dropdown">
          <button className="dropdown-button">
            Language
            <svg viewBox="0 0 360 360">
              <path
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </svg>
          </button>
          <div className="dropdown-content">
            <a href="#" className="dropdown-link">English</a>
            <a href="#" className="dropdown-link">Hindi</a>
            <a href="#" className="dropdown-link">Marathi</a>
            <a href="#" className="dropdown-link">Spanish</a>
            <a href="#" className="dropdown-link">French</a>
            <a href="#" className="dropdown-link">German</a>
            <a href="#" className="dropdown-link">Chinese</a>
            <a href="#" className="dropdown-link">Japanese</a>
            <a href="#" className="dropdown-link">Arabic</a>
            <a href="#" className="dropdown-link">Russian</a>
          </div>
        </div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;


