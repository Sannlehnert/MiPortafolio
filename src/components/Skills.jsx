import React from 'react';
import { FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';

const Skills = ({ t }) => {
  const skills = [
    {
      title: t.skills.frontend,
      description: t.skills.frontendDesc,
      icon: FaLaptopCode
    },
    {
      title: t.skills.backend,
      description: t.skills.backendDesc,
      icon: FaServer
    },
    {
      title: t.skills.tools,
      description: t.skills.toolsDesc,
      icon: FaTools
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-bg-secondary/50 dark:bg-[#1A261F]/30">
      <div className="section-container">
        <h2 className="section-title">{t.skills.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 md:p-10 text-center group hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 dark:bg-[#31C48D]/10 text-accent dark:text-[#31C48D] mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon size={40} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-text-primary dark:text-[#E5FAEF] mb-4 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-accent dark:after:bg-[#31C48D]">
                  {skill.title}
                </h3>
                <p className="text-text-secondary dark:text-[#94A3B8] text-base">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;