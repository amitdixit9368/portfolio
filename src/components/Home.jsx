import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { SEOHead } from '../utils/SEO';
import './Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <>
      <SEOHead 
        title="Amit Dixit - Full Stack Developer & React Specialist | Portfolio"
        description="Welcome to my portfolio. I'm a Full Stack Developer specializing in React with expertise in modern web technologies and clean code practices."
        keywords="developer, react, full stack, web development, portfolio"
        ogImage="https://amitdixit9368.github.io/portfolio/og-image.jpg"
        url="https://amitdixit9368.github.io/portfolio/"
      />
      <motion.section
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>

        <motion.div
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="hero-text"
          >
            <motion.div className="greeting-badge">
              <span>👋 Welcome to my portfolio</span>
            </motion.div>
            
            <h1>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hi, I'm{' '}
              </motion.span>
              <motion.span
                className="highlight name-highlight"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
              >
                Amit Dixit
              </motion.span>
            </h1>

            <div className="typing-wrapper">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1500,
                  'React Specialist',
                  1500,
                  'Web Innovator',
                  1500,
                  'Problem Solver',
                  1500,
                  'Tech Enthusiast',
                  1500,
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Infinity}
                className="typing-animation"
                speed={50}
              />
            </div>

            <motion.p
              variants={itemVariants}
              className="hero-description"
            >
              Crafting extraordinary web experiences with cutting-edge technologies. 
              I specialize in React, Node.js, and modern web architecture. 
              <span className="gradient-text"> Let's build something amazing together.</span>
            </motion.p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="hero-actions"
          >
            <motion.a
              href="#contact"
              className="cta-button primary"
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(102, 126, 234, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
              <div className="button-glow"></div>
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download
            >
              <FaDownload /> Download CV
            </motion.a>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="social-links"
          >
            {[
              { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
              { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                whileHover={{ y: -5, scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="social-icon"
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p>Scroll to explore</p>
            <FaArrowDown />
          </motion.div>
        </motion.div>
        
        <div className="hero-image">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, type: 'spring' }}
            className="profile-placeholder"
          >
            <div className="profile-circle">
              <div className="glow-ring"></div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;