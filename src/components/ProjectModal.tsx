import { FaTimes } from 'react-icons/fa';
import type { MouseEvent } from 'react';
import type { Project } from '../types';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="modal-tech-list">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="modal-tech-item">{tech}</span>
          ))}
        </div>
        <div className="modal-links">
          <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
