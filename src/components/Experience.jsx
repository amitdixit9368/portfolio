import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { SEOHead } from '../utils/SEO';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      date: '2023 - Present',
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      description: 'Lead development of scalable web applications, manage team of 3 developers, implement best practices and architecture.',
      highlights: ['Team Leadership', 'Architecture Design', 'Code Review', 'DevOps']
    },
    {
      id: 2,
      date: '2021 - 2023',
      role: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed and maintained 10+ production applications, improved performance by 40%, mentored junior developers.',
      highlights: ['React Development', 'Node.js Backend', 'Performance Optimization', 'Mentoring']
    },
    {
      id: 3,
      date: '2020 - 2021',
      role: 'Frontend Developer',
      company: 'Web Studios Co.',
      description: 'Created responsive UI components, implemented state management solutions, worked with design teams.',
      highlights: ['React', 'Redux', 'CSS3', 'UI Design']
    },
    {
      id: 4,
      date: '2019 - 2020',
      role: 'Junior Web Developer',
      company: 'StartUp Ventures',
      description: 'Started web development journey, worked on HTML/CSS/JavaScript projects, learned modern stack.',
      highlights: ['HTML5', 'CSS3', 'JavaScript', 'Git Basics']
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
