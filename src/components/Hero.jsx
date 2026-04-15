import React from 'react';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const Hero = ({ t, language }) => {
  const cvUrl = `${import.meta.env.BASE_URL}img/Santiago_Lehnert_Programador_CV.pdf`;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 dark:bg-[#31C48D]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 dark:bg-[#31C48D]/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="section-container">
        <div className="max-w-4xl">
          <p className="text-accent dark:text-[#31C48D] text-lg md:text-2xl font-medium mb-4 md:mb-6 uppercase tracking-wider flex items-center gap-4">
            <span className="w-12 md:w-16 h-0.5 bg-accent dark:bg-[#31C48D]"></span>
            {t.hero.subtitle}
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-text-primary dark:text-[#E5FAEF] mb-4 leading-tight">
            {t.hero.title1}
          </h1>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-r from-accent to-accent-light dark:from-[#31C48D] dark:to-[#1A633A] bg-clip-text text-transparent mb-6 md:mb-8 animate-gradient-shift bg-[length:200%_auto]">
            {t.hero.title2}
          </h2>
          
          <p className="text-text-secondary dark:text-[#94A3B8] text-base md:text-lg lg:text-xl max-w-2xl mb-8 md:mb-12 leading-relaxed border-l-4 border-accent dark:border-[#31C48D] pl-6">
            {language === 'es' 
              ? 'Desarrollador Full Stack con enfoque en soluciones eficientes y experiencia de usuario.'
              : 'Full Stack Developer focused on efficient solutions and user experience.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="#projects" className="btn-primary group">
              {t.hero.viewProjects}
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href={cvUrl}
              download={`CV_Santiago_Lehnert_${language.toUpperCase()}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <FaDownload className="mr-2 group-hover:-translate-y-0.5 transition-transform" />
              {t.hero.downloadCV}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;