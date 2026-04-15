import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

const ProjectCard = ({ project, language }) => {
  const title = typeof project.title === 'object' ? project.title[language] : project.title;
  const description = typeof project.description === 'object' ? project.description[language] : project.description;

  return (
    <article className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-300">
      <div className="relative h-52 bg-gradient-to-br from-accent to-accent-light dark:from-[#31C48D] dark:to-[#1A633A]">
        {project.image ? (
          <img
            src={project.image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-white">
            <FaPlay size={40} className="mb-2" />
            <span className="text-sm font-medium uppercase tracking-wider">Video Demo</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-heading font-bold text-text-primary dark:text-[#E5FAEF]">
            {title}
          </h3>
          {project.featured && (
            <span className="bg-accent dark:bg-[#31C48D] text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
              {language === 'es' ? 'Destacado' : 'Featured'}
            </span>
          )}
        </div>
        
        <p className="text-text-secondary dark:text-[#94A3B8] text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="bg-accent/10 dark:bg-[#31C48D]/10 text-accent dark:text-[#31C48D] text-xs px-3 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 text-text-secondary dark:text-[#94A3B8] hover:text-accent dark:hover:text-[#31C48D] transition-colors text-sm font-medium"
          >
            <FaGithub /> GitHub
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-text-secondary dark:text-[#94A3B8] hover:text-accent dark:hover:text-[#31C48D] transition-colors text-sm font-medium"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;