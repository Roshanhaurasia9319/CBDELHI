import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
       <a href="/"> <img src="/images/logo.png" alt="Logo" height="100" width="350"   /></a>
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="bettingSites">Betting Sites <span className="tag top">Top</span></a>
        <a href="bettingApp">Betting Apps</a>
        <a href="IPL">IPL 2024</a>
        <a href="fantasyApp">Fantasy App <span className="tag best">Best</span></a>
        <a href="casinoGameApp">Casino Games Online</a>
        <a href="blogs">Blogs</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
