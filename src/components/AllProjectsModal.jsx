import React, { useState, useRef, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaPlay, FaPause } from 'react-icons/fa';

const AllProjectsModal = ({ projects, isOpen, onClose, language }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const modalContentRef = useRef(null);

  // Controlar el video con ref
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, selectedProject]);

  // Restablecer el video cuando cambia el proyecto
  useEffect(() => {
    if (selectedProject) {
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }
  }, [selectedProject]);

  // Cerrar modal con ESC
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Bloquear scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto'; // Restaurar scroll
    };
  }, [isOpen, onClose]);

  // Cerrar al hacer click fuera del modal
  const handleOverlayClick = (e) => {
    if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const toggleVideoPlayback = () => {
    setIsPlaying(!isPlaying);
  };

  // Manejar errores de video
  const handleVideoError = () => {
    console.error('Error al cargar el video');
    // Aquí podrías mostrar un mensaje de error o una imagen por defecto
  };

  return (
    <div className="projects-modal">
      <div 
        className="modal-overlay" 
        onClick={handleOverlayClick}
        role="button"
        tabIndex={0}
        aria-label="Cerrar modal"
      ></div>
      
      <div 
        className="modal-content" 
        ref={modalContentRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Cerrar"
        >
          <FaTimes />
        </button>

        <h2 id="modal-title" className="modal-title">
          {language === 'es' ? 'Todos los Proyectos' : 'All Projects'}
        </h2>

        <div className="modal-grid">
          {projects.map(project => (
            <div 
              key={project.id} 
              className={`modal-project-card ${selectedProject?.id === project.id ? 'active' : ''}`}
              onClick={() => handleProjectClick(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleProjectClick(project);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Ver detalles de ${project.title}`}
            >
              <div className="modal-project-image">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                  />
                ) : project.video ? (
                  <div className="video-placeholder">
                    <FaPlay />
                    <span className="video-text">Video Demo</span>
                  </div>
                ) : (
                  <div className="default-placeholder">
                    <span className="placeholder-icon">💻</span>
                    <span className="placeholder-text">{project.title}</span>
                  </div>
                )}
                {project.video && <div className="video-badge">🎥 Video</div>}
              </div>
              
              <div className="modal-project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="modal-project-tags">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Panel de detalles del proyecto seleccionado */}
        {selectedProject && (
          <div className="project-details-panel">
            <div className="details-header">
              <h3>{selectedProject.title}</h3>
              <div className="details-actions">
                {selectedProject.demo && (
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn"
                    aria-label={`Ver demo de ${selectedProject.title}`}
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn secondary"
                  aria-label={`Ver código de ${selectedProject.title} en GitHub`}
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>

            <div className="details-content">
              {/* Video o imagen */}
              <div className="media-container">
                {selectedProject.video ? (
                  <div className="video-wrapper">
                    <video 
                      ref={videoRef}
                      src={selectedProject.video} 
                      loop
                      muted
                      playsInline
                      onError={handleVideoError}
                      aria-label={`Video demostrativo de ${selectedProject.title}`}
                    />
                    <button 
                      className="video-control" 
                      onClick={toggleVideoPlayback}
                      aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
                    >
                      {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <div className="video-indicator">
                      {isPlaying ? 'Reproduciendo' : 'Pausado'}
                    </div>
                  </div>
                ) : (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="project-image-large"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/img/placeholder.jpg";
                    }}
                  />
                )}
              </div>

              {/* Descripción detallada */}
              <div className="details-info">
                <div className="description-section">
                  <h4>{language === 'es' ? 'Descripción' : 'Description'}</h4>
                  <p>{selectedProject.detailedDescription}</p>
                </div>

                <div className="technologies-section">
                  <h4>{language === 'es' ? 'Tecnologías' : 'Technologies'}</h4>
                  <div className="technologies-grid">
                    {selectedProject.technologies.map((tech, index) => (
                      <div key={index} className="tech-item">
                        <span className="tech-name">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="project-features">
                  <h4>{language === 'es' ? 'Características' : 'Features'}</h4>
                  <ul className="features-list">
                    {selectedProject.tags.map((tag, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-bullet">✓</span>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjectsModal;