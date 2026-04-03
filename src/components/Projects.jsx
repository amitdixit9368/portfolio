import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ProjectModal from './ProjectModal';
import projectsData from '../data/projects.json';
import { SEOHead } from '../utils/SEO';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <>
      <SEOHead 
        title="Projects - Amit Dixit | React & Full Stack Developer"
        description="Explore my portfolio of professional projects including e-commerce platforms, web applications, and full-stack solutions. View my work in React, Node.js, and modern web technologies."
        keywords="projects, portfolio, react projects, full stack, web development portfolio"
        ogImage="https://amitdixit9368.github.io/portfolio/og-projects.jpg"
        url="https://amitdixit9368.github.io/portfolio/projects"
      />
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
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              layout
            >
              <div className="project-image">
                {project.featured && <span className="featured-badge">Featured</span>}
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
                <div className="project-actions">
                  <button
                    className="project-details-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.section>
    </>
  );
};

export default Projects;