import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { SEOHead } from '../utils/SEO';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      date: 'June 2024 - Present',
      role: 'Web Developer ',
      company: 'Exiliensoft Consulting Pvt. Ltd.',
      description: 'Building and maintaining responsive websites, WordPress features, custom plugin work, and React interfaces for production projects.',
      highlights: ['React Development', 'WordPress Development', 'Plugin Development', 'PHP', 'Performance Optimization'],
    },
    {
      id: 2,
      date: 'March 2025 - June 2025',
      role: 'WordPress Developer',
      company: 'Goa Tek Inc.',
      description: 'Created responsive pages, customized WordPress features, supported plugin-level changes, and collaborated on UI improvements.',
      highlights: ['HTML', 'CSS', 'PHP', 'JavaScript', 'WordPress', 'UI Collaboration'],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <>
      <SEOHead
        title="Experience - Amit Dixit | Web Developer Timeline"
        description="View Amit Dixit's professional experience in web development, WordPress development, React interfaces, PHP, and responsive website work."
        keywords="experience, web developer, wordpress developer, react developer, php"
        ogImage="https://amitdixit9368.github.io/portfolio/og-experience.jpg"
        url="https://amitdixit9368.github.io/portfolio/experience"
      />
      <motion.section
        className="experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="experience-content">
          <motion.div
            className="section-header"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2>Experience</h2>
            <p>1.5+ years of practical web, WordPress, and frontend development work</p>
          </motion.div>

          <motion.div
            className="timeline"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="timeline-marker">
                  <FaBriefcase />
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.role}</h3>
                    <span className="timeline-date">{exp.date}</span>
                  </div>
                  <p className="company">{exp.company}</p>
                  <p className="description">{exp.description}</p>
                  <div className="highlights">
                    {exp.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-tag">{highlight}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Experience;
