import React from 'react';
import './MobileNav.css';
import {Link } from 'react-router-dom';
const MobileNav = ({isOpen, toggleMenu}) => {
  return (
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}
      onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <p className='logo'>Portfolio</p>

<ul>
    <li><Link className='menu-item' to="/">Home</Link></li>
    <li><Link className='menu-item' to="/skills">Skills</Link></li>
    <li><Link className='menu-item' to="/projects">Projects</Link></li>
    <li><Link className='menu-item' to="/contact">Contact Me</Link></li>
    <button className='contact-btn'>hire Me</button>
</ul>
      </div>
    </div>
  )
}

export default MobileNav
