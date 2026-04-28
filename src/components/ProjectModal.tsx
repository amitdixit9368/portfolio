import { FaTimes } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import { useEffect, type MouseEvent } from 'react';
import type { Project } from '../types';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [project]);

  if (!project) return null;

  const hasLinks = Boolean(project.demo || project.github);

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>
        {project.role && <span className="modal-role">{project.role}</span>}
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.impact && <p className="modal-impact">{project.impact}</p>}
        <div className="modal-tech-list">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="modal-tech-item">{tech}</span>
          ))}
        </div>
        {hasLinks ? (
          <div className="modal-links">
            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          </div>
        ) : (
          <p className="modal-note">Project links available on request.</p>
        )}
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
