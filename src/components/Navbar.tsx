import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/services', label: 'Services' },
    { to: '/experience', label: 'Experience' },
    { to: '/skills', label: 'Skills' },
    { to: '/testimonials', label: 'Feedback' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Amit Dixit Logo" className="logo-image" />
        </Link>

        <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
          <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul className="navbar-menu">
            {menuItems.map((item) => (
              <li key={item.to}>
                <NavLink 
                  to={item.to} 
                  onClick={closeMenu}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
