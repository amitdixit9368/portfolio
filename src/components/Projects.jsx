import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Task+Manager',
      tech: ['React', 'Firebase', 'Material-UI'],
      category: 'frontend',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Weather+App',
      tech: ['React', 'OpenWeather API', 'Chart.js'],
      category: 'frontend',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'API Gateway Service',
      description: 'A scalable API gateway built with Node.js and Express, featuring rate limiting, authentication, and comprehensive logging.',
      image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=API+Gateway',
      tech: ['Node.js', 'Express', 'Redis', 'JWT'],
      category: 'backend',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and advanced animations. Features dark mode and smooth scrolling.',
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Portfolio',
      tech: ['React', 'Framer Motion', 'CSS3'],
      category: 'frontend',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with WebSocket integration, file sharing, and group chat functionality.',
      image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Chat+App',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      github: '#',
      demo: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <motion.section
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      data-aos="fade-up"
    >
      <div className="projects-content">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          data-aos="fade-up"
        >
          My Projects
        </motion.h2>
        
        <motion.div
          className="filter-buttons"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          data-aos="fade-up"
        >
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
        
        <motion.div
          className="projects-grid"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              layout
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;