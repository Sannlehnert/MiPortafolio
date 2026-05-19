import React from 'react';
import { FaUser, FaCode, FaGraduationCap, FaServer } from 'react-icons/fa';

const About = ({ t }) => {
  const highlights = [
    { icon: FaUser, label: t.about.highlights.age },
    { icon: FaCode, label: t.about.highlights.stack },
    { icon: FaGraduationCap, label: t.about.highlights.studies },
    { icon: FaServer, label: t.about.highlights.focus }
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container">
        <h2 className="section-title">{t.about.title}</h2>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Texto + highlights (ocupa 3 columnas en md) */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-text-secondary dark:text-[#94A3B8] text-lg leading-relaxed">
              {t.about.intro}
            </p>
            <p className="text-text-secondary dark:text-[#94A3B8] text-lg leading-relaxed">
              {t.about.stack}
            </p>
            <p className="text-text-secondary dark:text-[#94A3B8] text-lg leading-relaxed">
              {t.about.projects}
            </p>
            <p className="text-text-secondary dark:text-[#94A3B8] text-lg leading-relaxed">
              {t.about.future}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="glass-card p-3 text-center hover:-translate-y-1 transition-transform">
                    <Icon className="text-accent dark:text-[#31C48D] text-xl mx-auto mb-1" />
                    <span className="text-xs md:text-sm font-medium text-text-primary dark:text-[#E5FAEF]">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Foto (2 columnas en md) */}
          <div className="md:col-span-2 relative group">
            <div className="absolute -inset-1 bg-accent-gradient dark:bg-dark-accent-gradient rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-white/10 dark:border-[#2A3A2F]">
              <img
                src="/img/profile.jpg"
                alt="Santiago Lehnert"
                className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
                width="400"
                height="500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;