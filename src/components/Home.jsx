import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="home-content">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="hero-text"
        >
          <h1>Hi, I'm <span className="highlight">[Your Name]</span></h1>
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'React Specialist',
              2000,
              'UI/UX Enthusiast',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="typing-animation"
          />
          <p>
            I create amazing web experiences with modern technologies.
            Passionate about clean code and user-centric design.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hero-actions"
        >
          <a href="#contact" className="cta-button primary">
            Get In Touch
          </a>
          <a href="/resume.pdf" className="cta-button secondary" download>
            <FaDownload /> Download CV
          </a>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="social-links"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </motion.div>
      </div>
      
      <div className="hero-image">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.8, type: "spring" }}
          className="profile-placeholder"
        >
          {/* Replace with actual profile image */}
          <div className="profile-circle"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;