import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
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
    { to: '/testimonials', label: 'Testimonials' },
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
          <span className="logo-text">𝔸𝕸𝕴𝕿</span>
        </Link>
        <div className="navbar-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
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
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle dark mode">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;