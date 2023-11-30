import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menu-links">
        <Link to="/home" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/section1" onClick={toggleMenu}>
          Student Details
        </Link>
        <Link to="/section2" onClick={toggleMenu}>
          Faculty Details
        </Link>
        <Link to="/section3" onClick={toggleMenu}>
          College Instructions
        </Link>
      </div>
    </div>
  );
}

export default Menu;
