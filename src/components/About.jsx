import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { icon: <FaCode />, number: '50+', label: 'Projects Completed' },
    { icon: <FaRocket />, number: '3+', label: 'Years Experience' },
    { icon: <FaUsers />, number: '100+', label: 'Happy Clients' }
  ];

  return (
    <motion.section
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      data-aos="fade-up"
    >
      <div className="about-content">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          data-aos="fade-up"
        >
          About Me
        </motion.h2>
        
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            data-aos="fade-right"
          >
            <p>
              I'm a passionate full-stack developer with over 3 years of experience creating
              digital solutions that make a difference. My journey in tech started with curiosity
              and has evolved into a career dedicated to crafting exceptional user experiences.
            </p>
            <p>
              I specialize in modern web technologies, with expertise in React, Node.js, and cloud
              platforms. I love turning complex problems into simple, beautiful designs.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>
          
          <motion.div
            className="stats-grid"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            data-aos="fade-left"
          >
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;