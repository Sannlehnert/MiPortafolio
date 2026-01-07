import React from 'react';

const Skills = ({ t }) => {
  const skills = [
    {
      title: t.skills.frontend,
      description: t.skills.frontendDesc,
      icon: "💻"
    },
    {
      title: t.skills.backend,
      description: t.skills.backendDesc,
      icon: "🔧"
    },
    {
      title: t.skills.tools,
      description: t.skills.toolsDesc,
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">{t.skills.title}</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;