import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ProjectModal from './ProjectModal';
import projectsData from '../data/projects.json';
import { SEOHead } from '../utils/SEO';
import type { Project } from '../types';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'wordpress', label: 'WordPress' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const typedProjects = projectsData as Project[];

  const filteredProjects = filter === 'all' 
    ? typedProjects
    : typedProjects.filter((project) => project.category === filter);

  return (
    <>
      <SEOHead 
        title="Projects - Amit Dixit | Web, React & WordPress Developer"
        description="Explore Amit Dixit's web development project work including React interfaces, WordPress customization, PHP, API integration, and responsive website builds."
        keywords="projects, portfolio, react projects, wordpress projects, web development portfolio"
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
          Project Work
        </motion.h2>

        <motion.p
          className="projects-intro"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Selected web, WordPress, and frontend work focused on practical business outcomes.
        </motion.p>
        
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
          {filteredProjects.map((project, index) => {
            const hasLinks = Boolean(project.demo || project.github);

            return (
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
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="project-fallback" aria-label={`${project.title} visual`}>
                      <span>{project.category}</span>
                      <strong>{project.title}</strong>
                    </div>
                  )}
                  {hasLinks && (
                    <div className="project-overlay">
                      <div className="project-links">
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                            <FaExternalLinkAlt />
                          </a>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`}>
                            <FaGithub />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="project-info">
                  {project.role && <span className="project-role">{project.role}</span>}
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.impact && <p className="project-impact">{project.impact}</p>}
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
                      View Case Study
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
