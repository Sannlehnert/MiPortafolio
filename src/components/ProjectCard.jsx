import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, language }) => {
  return (
    <article className="project-card" role="article">
      <div className="project-image">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            width="600"
            height="400"
          />
        ) : (
          <div className="video-placeholder">
            <span className="play-icon">▶️</span>
            <span className="video-label">Video Demo</span>
          </div>
        )}
        {project.video && <div className="video-indicator">🎥</div>}
      </div>
      
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-badge">
            {language === 'es' ? 'Destacado' : 'Featured'}
          </span>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        
        <div className="project-links">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link github-link"
          >
            <FaGithub /> GitHub
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link demo-link"
            >
              <FaExternalLinkAlt /> {language === 'es' ? 'Demo' : 'Demo'}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
