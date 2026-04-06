import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { SEOHead } from '../utils/SEO';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      date: '2025 - Present', 
      role: 'Web Developer & Wordpress Developer',
      company: 'Exiliensoft Consultiong Pvt. Ltd.',
      description: 'Developed and maintained 10+ production applications, improved performance by 40%, mentored junior developers.',
      highlights: ['React Development', 'Wordpress Development','Plugin Development', 'Performance Optimization', 'Mentoring']
    },
    {
      id: 2,
      date: '2025 (April - July)',
      role: 'Wordpress Developer',
      company: 'Goa Tek Inc.',
      description: 'Created responsive UI components, implemented state management solutions, Custom plugin development, worked with design teams.',
      highlights: ['HTML', 'CSS', 'PHP', 'JavaScript', 'WordPress', 'UI/UX Collaboration']
    },
    {
      id: 3,
      date: '2022 - 2025',
      role: 'College Intern',
      company: 'RATM College',
      description: 'Started Learning web development journey, worked on HTML/CSS/JavaScript projects, learned modern stack.',
      highlights: ['HTML5', 'CSS3', 'JavaScript','PHP', 'C', 'C++', 'Git Basics', 'Project Collaboration', 'Problem Solving']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <>
      <SEOHead 
        title="My Experience - Amit Dixit | Developer Timeline"
        description="View my professional experience journey from Junior Developer to Senior Full Stack Developer with 5+ years in web development."
        keywords="experience, career, developer journey, professional background"
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
            <h2>My Experience</h2>
            <p>5+ years of professional web development journey</p>
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
