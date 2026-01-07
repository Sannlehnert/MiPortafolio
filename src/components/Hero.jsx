import React from 'react';

const Hero = ({ t, language }) => {
  // Ruta corregida usando import.meta.env para Vite
  const cvUrl = `${import.meta.env.BASE_URL}img/Santiago_Lehnert_Programador_CV.pdf`;

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h4 className="hero-subtitle">{t.hero.subtitle}</h4>
          <h1 className="hero-title">{t.hero.title1}</h1>
          <h2 className="hero-title">{t.hero.title2}</h2>
          <div className="hero-cta">
            <a href="#projects" className="btn">{t.hero.viewProjects}</a>
            
            {/* Enlace mejorado */}
            <a 
              href={cvUrl} 
              download={`CV_Santiago_Lehnert_${language.toUpperCase()}.pdf`}
              className="btn secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.downloadCV}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;