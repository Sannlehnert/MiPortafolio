import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress, SiMysql, SiPostman, SiVite, SiCss3, SiHtml5, SiGithub, SiApifox } from 'react-icons/si';

const Skills = ({ t }) => {
  const skillCategories = [
    {
      title: t.skills.frontend,
      items: [
        { name: 'React', icon: FaReact },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'HTML', icon: SiHtml5 },
        { name: 'CSS', icon: SiCss3 },
        { name: 'Tailwind', icon: SiTailwindcss },
        { name: 'Vite', icon: SiVite }
      ]
    },
    {
      title: t.skills.backend,
      items: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express', icon: SiExpress },
        { name: 'MySQL', icon: SiMysql }
      ]
    },
    {
      title: t.skills.tools,
      items: [
        { name: 'Git', icon: FaGitAlt },
        { name: 'GitHub', icon: SiGithub },
        { name: 'Postman', icon: SiPostman }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-bg-secondary/30 dark:bg-[#1A261F]/20">
      <div className="section-container">
        <h2 className="section-title">{t.skills.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-card p-6 md:p-8 group hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-heading font-bold text-text-primary dark:text-[#E5FAEF] mb-6 pb-3 border-b border-border-light dark:border-[#2A3A2F]">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <li key={i} className="flex items-center gap-3 text-text-secondary dark:text-[#94A3B8] group-hover:text-text-primary dark:group-hover:text-[#E5FAEF] transition-colors">
                      {Icon ? <Icon className="text-xl text-accent dark:text-[#31C48D]" /> : <span className="w-5 h-0.5 bg-accent dark:bg-[#31C48D] rounded-full" />}
                      <span className="text-base font-medium">{tech.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;