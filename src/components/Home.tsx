import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaCheckCircle, FaCode, FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SEOHead } from '../utils/SEO';
import './Home.css';

const Home = () => {
  const roleBadges = ['React', 'WordPress', 'PHP', 'REST APIs', 'Responsive UI'];

  const proofPoints = [
    { icon: <FaBriefcase />, value: '1.5+ Years', label: 'Professional experience' },
    { icon: <FaCode />, value: '10+ Builds', label: 'Websites, plugins and apps' },
    { icon: <FaCheckCircle />, value: 'Open', label: 'Web Developer roles' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <>
      <SEOHead 
        title="Amit Dixit - Web Developer | React, WordPress & PHP"
        description="Amit Dixit is a web developer focused on responsive React interfaces, WordPress development, PHP, API integrations, and maintainable business websites."
        keywords="web developer, react developer, wordpress developer, php developer, portfolio"
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
        <div className="home-inner">

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
            {/* <motion.div className="greeting-badge">
              <span>👋 Welcome to my portfolio</span>
            </motion.div> */}
            
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
                  'Frontend Developer',
                  1500,
                  'WordPress Developer',
                  1500,
                  'React Developer',
                  1500,
                  'PHP Developer',
                  1500,
                  'API Integration Specialist',
                  1500,
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Infinity}
                className="typing-animation"
                speed={50}
              />
            </div>

            <motion.div
              variants={itemVariants}
              className="hero-badges"
              aria-label="Core development skills"
            >
              {roleBadges.map((badge) => (
                <span key={badge} className="role-badge">{badge}</span>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="hero-description"
            >
              I build responsive websites and business web apps with clean UI, reliable functionality, and practical performance in mind.
              My stack includes HTML, CSS, JavaScript, React, PHP, WordPress, and API integrations.
              <span className="gradient-text"> I am ready to contribute to web developer roles and client projects.</span>
            </motion.p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="hero-actions"
          >
            <motion.div
              className="cta-button primary"
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(102, 126, 234, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">
                <span>Get In Touch</span>
                <div className="button-glow"></div>
              </Link>
            </motion.div>
            
            <motion.a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download="Amit-Dixit-Web-development.pdf"
            >
              <FaDownload /> Download CV
            </motion.a>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="social-links"
          >
            {[
              { icon: FaGithub, url: 'https://github.com/amitdixit9368', label: 'GitHub' },
              { icon: FaLinkedin, url: 'https://linkedin.com/in/amit-kumar-dixit-2a648b2b0', label: 'LinkedIn' },
              { icon: FaEnvelope, url: 'mailto:amitdixit9368@gmail.com', label: 'Email' },
              { icon: FaWhatsapp, url: 'https://wa.me/919528368232', label: 'WhatsApp' },
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
            variants={itemVariants}
            className="hero-proof-list"
          >
            {proofPoints.map((point) => (
              <div className="proof-item" key={point.label}>
                <span className="proof-icon">{point.icon}</span>
                <div>
                  <strong>{point.value}</strong>
                  <span>{point.label}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p>Scroll to explore</p>
            <FaArrowDown />
          </motion.div> */}
        </motion.div>
        
        <div className="hero-image">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, type: 'spring' }}
            className="profile-placeholder"
          >
            <div className="profile-circle">
              <img 
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Amit Dixit Profile" 
                className="profile-image"
              />
              <div className="glow-ring"></div>
            </div>
          </motion.div>
        </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
