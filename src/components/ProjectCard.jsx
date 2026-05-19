import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

const ProjectCard = ({ project, language, t }) => {
  const title = typeof project.title === 'object' ? project.title[language] : project.title;
  const description = typeof project.description === 'object' ? project.description[language] : project.description;
  const features = project.features || [];

  return (
    <article className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 bg-gradient-to-br from-accent to-accent-light dark:from-[#31C48D] dark:to-[#1A633A]">
        {project.image ? (
          <img src={project.image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-4xl"><FaPlay /></div>
        )}
        {project.video && (
          <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <FaPlay size={10} /> Video
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-heading font-bold text-text-primary dark:text-[#E5FAEF] mb-2">{title}</h3>
        <p className="text-text-secondary dark:text-[#94A3B8] text-sm mb-3 line-clamp-3">{description}</p>
        
        {features.length > 0 && (
          <ul className="mb-4 space-y-1">
            {features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary dark:text-[#94A3B8]">
                <span className="text-accent dark:text-[#31C48D] mt-1">▹</span>
                {t.projects.features[feat] || feat}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-accent/10 dark:bg-[#31C48D]/10 text-accent dark:text-[#31C48D] text-xs px-3 py-1 rounded-full font-medium">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-text-secondary dark:text-[#94A3B8] hover:text-accent dark:hover:text-[#31C48D] transition-colors text-sm font-medium">
            <FaGithub /> Código
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-text-secondary dark:text-[#94A3B8] hover:text-accent dark:hover:text-[#31C48D] transition-colors text-sm font-medium">
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;