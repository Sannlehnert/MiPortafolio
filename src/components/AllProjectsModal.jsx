import React, { useState, useRef, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaPlay, FaPause } from 'react-icons/fa';

const AllProjectsModal = ({ projects, isOpen, onClose, language, t }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying, selectedProject]);

  useEffect(() => {
    if (selectedProject) {
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }
  }, [selectedProject]);

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
  };

  if (!isOpen) return null;

  const getLocalized = (obj) => typeof obj === 'object' ? obj[language] : obj;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={handleOverlayClick}
      />

      <div
        ref={modalRef}
        className="relative w-full max-w-6xl max-h-[90vh] bg-bg-primary dark:bg-[#121C16] rounded-2xl shadow-2xl border border-border-light dark:border-[#2A3A2F] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm text-text-primary dark:text-white hover:bg-accent dark:hover:bg-[#31C48D] transition-colors z-10"
          aria-label="Cerrar"
        >
          <FaTimes size={20} />
        </button>

        <div className="p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary dark:text-[#E5FAEF] mb-6 text-center">
            {language === 'es' ? 'Todos los Proyectos' : 'All Projects'}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {projects.map((project) => {
              const title = getLocalized(project.title);
              const description = getLocalized(project.description);
              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedProject?.id === project.id
                      ? 'border-accent dark:border-[#31C48D] bg-accent/5 dark:bg-[#31C48D]/5 shadow-lg'
                      : 'border-border-light dark:border-[#2A3A2F] hover:border-accent/50 dark:hover:border-[#31C48D]/50'
                  }`}
                >
                  <div className="h-32 bg-accent/10 dark:bg-[#1A261F] rounded-lg mb-3 overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={title} className="w-full h-full object-cover" loading="lazy" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-accent dark:text-[#31C48D]">
                        <FaPlay size={24} />
                      </div>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-text-primary dark:text-[#E5FAEF] mb-1">{title}</h3>
                  <p className="text-text-secondary dark:text-[#94A3B8] text-sm line-clamp-2">{description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs bg-accent/10 dark:bg-[#31C48D]/10 text-accent dark:text-[#31C48D] px-2 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {selectedProject && (
            <div className="border-t border-border-light dark:border-[#2A3A2F] pt-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl font-heading font-bold text-text-primary dark:text-[#E5FAEF]">
                  {getLocalized(selectedProject.title)}
                </h3>
                <div className="flex gap-2">
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2">
                      <FaExternalLinkAlt className="mr-1" /> Demo
                    </a>
                  )}
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2">
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative rounded-xl overflow-hidden bg-black/20">
                  {selectedProject.video ? (
                    <div className="relative">
                      <video
                        ref={videoRef}
                        src={selectedProject.video}
                        loop
                        muted
                        playsInline
                        className="w-full h-auto"
                      />
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-accent dark:hover:bg-[#31C48D] transition-colors"
                      >
                        {isPlaying ? <FaPause /> : <FaPlay />}
                      </button>
                    </div>
                  ) : (
                    <img
                      src={selectedProject.image}
                      alt={getLocalized(selectedProject.title)}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="space-y-4">
                  <p className="text-text-secondary dark:text-[#94A3B8]">
                    {getLocalized(selectedProject.detailedDescription) || getLocalized(selectedProject.description)}
                  </p>

                  {selectedProject.features?.length > 0 && (
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary dark:text-[#E5FAEF] mb-2">
                        {language === 'es' ? 'Funcionalidades' : 'Features'}
                      </h4>
                      <ul className="space-y-1">
                        {selectedProject.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary dark:text-[#94A3B8]">
                            <span className="text-accent dark:text-[#31C48D] mt-1">▹</span>
                            {t?.projects?.features?.[feat] || feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="font-heading font-semibold text-text-primary dark:text-[#E5FAEF] mb-2">
                      {language === 'es' ? 'Tecnologías' : 'Technologies'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="bg-accent/10 dark:bg-[#31C48D]/10 text-accent dark:text-[#31C48D] px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProjectsModal;