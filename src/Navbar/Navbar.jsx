import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Navbar.css';

import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import Project from './Projects/Project';
import MobileNav from './MobileNav/MobileNav';
import Contact from './Contact/Contact';


const NavbarF = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Router>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

        <nav className="nav-wrapper">
          <div className="nav-content">
            <Link to="/" className="logo">
              Portfolio
            </Link>
                      
            <ul>
              <li>
                <Link to="/" className="menu-item">
                  Hero
                </Link>
              </li>
              <li>
                <Link to="/skills" className="menu-item">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" className="menu-item">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="menu-item">
                  Contact Me
                </Link>
              </li>
              <button className="contact-btn">Hire Me</button>
            </ul>

            <button className="menu-btn" onClick={toggleMenu}>
              <span
                className={"material-symbols-outlined"}
                style={{ fontSize: '1.8rem' }}
              >
                {openMenu ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>

        <Routes>
          {/* <Route path="/" element={<Hero />} /> */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default NavbarF;
