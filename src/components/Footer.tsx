import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaHeart } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/services', label: 'Services' },
    { to: '/skills', label: 'Skills' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Amit Dixit</h3>
          <p>Building responsive websites, WordPress solutions, and practical frontend experiences.</p>
          <div className="social-links">
            <a href="https://github.com/amitdixit9368" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/amit-kumar-dixit-2a648b2b0" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.threads.net/@amit_dixit_22" target="_blank" rel="noopener noreferrer" aria-label="Threads">
              <FaThreads />
            </a>
            <a href="https://instagram.com/amit_dixit_22" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/919528368232" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-quick-links">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>React Development</li>
            <li>WordPress Development</li>
            <li>PHP & API Integration</li>
            <li>Website Optimization</li>
            <li>Maintenance & Fixes</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Noida, India</p>
          <p>amitdixit9368@gmail.com</p>
          <p>+91 9528368232</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Amit Dixit. All rights reserved.</p>
        <p>Made with <FaHeart className="heart-icon" /> by Amit Dixit</p>
      </div>
    </footer>
  );
};

export default Footer;
