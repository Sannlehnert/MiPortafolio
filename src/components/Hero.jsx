import React from 'react';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const Hero = ({ t, language }) => {
  const cvUrl = `${import.meta.env.BASE_URL}img/Santiago_Lehnert_Programador_CV.pdf`;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden">
      {/* Fondo sutil con círculos */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 dark:bg-[#31C48D]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 dark:bg-[#31C48D]/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container w-full">
        <div className="max-w-3xl">
          <p className="text-accent dark:text-[#31C48D] text-lg md:text-xl font-medium mb-6 tracking-wide">
            {t.hero.role}
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-text-primary dark:text-[#E5FAEF] mb-6 leading-tight">
            {t.hero.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary dark:text-[#94A3B8] mb-4 font-medium">
            {t.hero.stackLine}
          </p>
          
          <p className="text-base md:text-lg text-text-secondary dark:text-[#94A3B8] max-w-xl mb-10 border-l-4 border-accent dark:border-[#31C48D] pl-5">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="btn-primary group text-sm md:text-base">
              {t.hero.viewProjects}
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={cvUrl}
              download={`CV_Santiago_Lehnert_${language.toUpperCase()}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group text-sm md:text-base"
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