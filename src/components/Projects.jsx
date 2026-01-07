import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import AllProjectsModal from './AllProjectsModal';

const Projects = ({ featuredProjects, allProjects, t, language }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="projects" className="section projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t.projects.title}</h2>
            <p className="section-subtitle">
              {language === 'es' 
                ? 'Mis mejores proyectos destacados' 
                : 'My featured projects'}
            </p>
          </div>
          
          <div className="projects-grid">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} language={language} />
            ))}
          </div>

          <div className="projects-actions">
            <button 
              className="btn secondary view-all-btn"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="btn-icon">📁</span>
              {t.projects.viewAll}
            </button>
            
            <a 
              href="https://github.com/Sannlehnert" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn github-btn"
            >
              <span className="btn-icon">🐙</span>
              {t.projects.moreProjects}
            </a>
          </div>
        </div>
      </section>

      <AllProjectsModal 
        projects={allProjects}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        language={language}
      />
    </>
  );
};

export default Projects;
