import React from 'react';

const About = ({ t }) => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container">
        <h2 className="section-title">{t.about.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <p className="text-text-secondary dark:text-[#94A3B8] text-base md:text-lg leading-relaxed pl-6 border-l-4 border-accent dark:border-[#31C48D]">
              {t.about.text1}
            </p>
            <p className="text-text-secondary dark:text-[#94A3B8] text-base md:text-lg leading-relaxed pl-6 border-l-4 border-accent/60 dark:border-[#31C48D]/60">
              {t.about.text2}
            </p>
            <p className="text-text-secondary dark:text-[#94A3B8] text-base md:text-lg leading-relaxed pl-6 border-l-4 border-accent/30 dark:border-[#31C48D]/30">
              {t.about.text3}
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-accent-gradient dark:bg-dark-accent-gradient rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20 dark:border-[#2A3A2F]">
              <img
                src="/img/profile.jpg"
                alt="Santiago Lehnert"
                className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
                width="500"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;