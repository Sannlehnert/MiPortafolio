import React, { useState, lazy, Suspense } from 'react';
import ProjectCard from './ProjectCard';
import { FaFolderOpen, FaGithub } from 'react-icons/fa';

const AllProjectsModal = lazy(() => import('./AllProjectsModal'));

const Projects = ({ featuredProjects, allProjects, t, language }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="projects" className="py-20 md:py-28">
        <div className="section-container">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="section-title">{t.projects.title}</h2>
            <p className="text-text-secondary dark:text-[#94A3B8] text-lg md:text-xl mt-2">
              {language === 'es' 
                ? 'Mis mejores proyectos destacados' 
                : 'My featured projects'}
            </p>
          </div>
          
          <div className={`grid gap-8 ${
            featuredProjects.length < 3 
              ? 'md:grid-cols-2 place-items-center' 
              : 'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {featuredProjects.map(project => (
              <div key={project.id} className="w-full max-w-md">
                <ProjectCard project={project} language={language} />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-12 md:mt-16">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary group"
            >
              <FaFolderOpen className="mr-2 group-hover:-translate-y-0.5 transition-transform" />
              {t.projects.viewAll}
            </button>
            
            <a 
              href="https://github.com/Sannlehnert" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <FaGithub className="mr-2 group-hover:rotate-12 transition-transform" />
              {t.projects.moreProjects}
            </a>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <Suspense fallback={
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100]">
            <div className="bg-white dark:bg-[#1A261F] p-6 rounded-xl shadow-xl flex items-center gap-3">
              <div className="w-6 h-6 border-3 border-accent dark:border-[#31C48D] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-text-primary dark:text-[#E5FAEF]">Cargando proyectos...</span>
            </div>
          </div>
        }>
          <AllProjectsModal 
            projects={allProjects}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            language={language}
          />
        </Suspense>
      )}
    </>
  );
};

export default Projects;