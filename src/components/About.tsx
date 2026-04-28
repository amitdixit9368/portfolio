import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaUsers } from 'react-icons/fa';
import { SEOHead } from '../utils/SEO';
import './About.css';

const About = () => {
  const stats = [
    { icon: <FaCode />, number: '10+', label: 'Web Builds' },
    { icon: <FaBriefcase />, number: '1.5+', label: 'Years Experience' },
    { icon: <FaUsers />, number: '5+', label: 'Clients & Teams' },
  ];

  const snapshots = [
    {
      title: 'Responsive UI',
      subtitle: 'Clean HTML, CSS, JavaScript and React screens',
    },
    {
      title: 'WordPress Builds',
      subtitle: 'Theme customization and plugin-level work',
    },
    {
      title: 'API Ready',
      subtitle: 'REST integrations, forms and dynamic content',
    },
    {
      title: 'Reliable Delivery',
      subtitle: 'Clear updates, testing and deployment support',
    },
  ];

  const stackFocus = [
    { technology: 'HTML, CSS + Responsive UI', level: 92 },
    { technology: 'JavaScript + React', level: 86 },
    { technology: 'WordPress + PHP', level: 88 },
    { technology: 'REST API Integrations', level: 80 },
    { technology: 'Git, Debugging + Deployment', level: 78 },
  ];

  return (
    <>
      <SEOHead
        title="About Me - Amit Dixit | Web Developer"
        description="Learn about Amit Dixit, a web developer with 1.5+ years of experience in React, WordPress, PHP, responsive UI, and API integrations."
        keywords="about, web developer, react, wordpress, php, frontend"
        ogImage="https://amitdixit9368.github.io/portfolio/og-about.jpg"
        url="https://amitdixit9368.github.io/portfolio/about"
      />
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
                I am a web developer with 1.5+ years of hands-on experience building responsive
                websites, WordPress solutions, and React-based interfaces for real business needs.
              </p>
              <p>
                My work sits between frontend quality and practical implementation: clean layouts,
                reusable components, PHP/WordPress customization, form flows, and REST API integrations.
              </p>
              <p>
                I care about maintainable code, clear communication, and websites that feel polished
                on mobile and desktop. I am especially interested in Web Developer, Frontend Developer,
                and WordPress Developer roles.
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

          <motion.div
            className="about-advanced"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3>What I Bring To A Team</h3>
            <div className="snapshot-grid">
              {snapshots.map((item, index) => (
                <div key={index} className="snapshot-card">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              ))}
            </div>

            <div className="skill-progress">
              <h4>Hands-On Stack</h4>
              {stackFocus.map((skill, index) => (
                <div key={index} className="progress-item">
                  <div className="progress-header">
                    <span>{skill.technology}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-filled"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="timeline-context">
              <h4>What I am focusing on now</h4>
              <ul>
                <li>Building cleaner React components with reusable UI patterns</li>
                <li>Creating faster WordPress pages with practical performance fixes</li>
                <li>Improving API-driven forms, dashboards, and admin workflows</li>
                <li>Writing clearer code that is easier for teams to maintain</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
