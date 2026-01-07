import React from 'react';

const About = ({ t }) => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
            <p>{t.about.text3}</p>
          </div>
          <div className="about-image">
            <img
              src="/img/profile.jpg"
              alt="Santiago Lehnert"
              loading="lazy"
              width="400"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;