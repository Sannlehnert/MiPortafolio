import React, { useState, useEffect } from 'react';
import './App.css';

// Componentes
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './i18n';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('es');

  // Datos de proyectos actualizados
  const allProjects = [
    {
      id: 1,
      title: language === 'es' ? "FitBox - Gestión de Gimnasio" : "FitBox - Gym Management",
      description: language === 'es' 
        ? "Sistema completo para gestión de membresías, pagos y asistencia con panel administrativo y sistema de reportes."
        : "Complete system for membership, payment and attendance management with admin panel and reporting system.",
      detailedDescription: language === 'es'
        ? "Aplicación web full-stack para gimnasios con autenticación de usuarios, gestión de pagos, control de asistencia y dashboard administrativo. Sistema modular que permite administrar múltiples sucursales."
        : "Full-stack web application for gyms with user authentication, payment management, attendance control and administrative dashboard. Modular system that allows managing multiple branches.",
      tags: ["React", "Node.js", "MySQL", "Express", "JWT"],
      technologies: ["React", "Node.js", "Express", "MySQL", "JWT", "CSS3"],
      github: "https://github.com/Sannlehnert/FrontendFitBox",
      demo: "https://fit-box.netlify.app/",
      image: "/img/fitbox.jpg",
      video: "/video/fitbox.mp4",
      featured: true
    },
    {
      id: 2,
      title: "Privacy Shield",
      description: language === 'es'
        ? "Extensión de navegador para bloquear rastreadores y proteger privacidad."
        : "Browser extension to block trackers and protect privacy.",
      detailedDescription: language === 'es'
        ? "Extensión desarrollada para Chrome y Firefox que bloquea cookies de rastreo, scripts maliciosos y mejora la privacidad del usuario. Incluye configuración personalizada y estadísticas de bloqueo."
        : "Extension developed for Chrome and Firefox that blocks tracking cookies, malicious scripts and improves user privacy. Includes custom settings and blocking statistics.",
      tags: language === 'es' ? ["JavaScript", "HTML5", "CSS"] : ["JavaScript", "HTML5", "CSS"],
      technologies: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/Sannlehnert/Privacy-Shield",
      demo: "https://privacishield.netlify.app/",
      image: "/img/privacyshield.jpg",
      video: "/video/privacyshield.mp4",
      featured: false
    },
    {
      id: 3,
      title: "RomaMora",
      description: language === 'es'
        ? "Landing Page de ventas de espejos artesanales para comercio fisico."
        : "Landing page for handmade mirrors sales for physical commerce.",
      detailedDescription: language === 'es'
        ? "Sitio web responsivo con diseño moderno para empresa de espejos artesanales. Incluye galería interactiva."
        : "Responsive website with modern design for handmade mirrors company. Includes interactive gallery.",
      tags: language === 'es' ? ["React", "Vite", "CSS", "Responsivo"] : ["React", "Vite", "CSS", "Responsive"],
      technologies: ["React", "Vite", "CSS3"],
      github: "https://github.com/Sannlehnert/RomaMora-Mejorado",
      demo: "https://romamora.netlify.app/",
      image: "/img/romamora.jpg",
      video: "/video/romamora.mp4",
      featured: true
    },
    {
      id: 4,
      title: language === 'es' ? "Grid Barbers" : "Grid Barbers",
      description: language === 'es'
        ? "Sistema de turnos para barberia local."
        : "Appointment system for local barbershop.",
      detailedDescription: language === 'es'
        ? "Turnero para barbería con gestión de clientes y horarios. Permite a los usuarios reservar, modificar y cancelar turnos fácilmente desde cualquier dispositivo. Actualmente guarda los datos en LocalStorage."
        : "Barber shop appointment scheduling system with customer and schedule management. Allows users to easily book, modify, and cancel appointments from any device. Currently stores data in LocalStorage.",
      tags: language === 'es' ? ["React", "TailwindCSS", "Node.js"] : ["React", "TailwindCSS", "Node.js"],
      technologies: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "MySQL"],
      github: "https://github.com/Sannlehnert/FrontendGridBarbers",
      demo: "https://gridbarbers.netlify.app/",
      image: "/img/GridBarber.jpg",
      video: "/video/gridbarber.mp4",
      featured: false
    }
  ];

  // Obtener proyectos destacados
  const featuredProjects = allProjects.filter(project => project.featured);

  // Efecto para persistencia de tema oscuro
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedLanguage = localStorage.getItem('language');
    const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setDarkMode(savedDarkMode ? JSON.parse(savedDarkMode) : prefers);
    setLanguage(savedLanguage || 'es');
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.classList.toggle('dark', darkMode);
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
      localStorage.setItem('language', language);
    }
  }, [darkMode, language, isMounted]);

  // Observador de secciones
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = translations[language];

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'} ${isMounted ? 'mounted' : ''}`}>
      <a href="#main" className="skip-link">
        {language === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        toggleLanguage={toggleLanguage}
        language={language}
        activeSection={activeSection}
        t={t}
      />
      <main id="main">
        <Hero t={t} language={language} />
        <About t={t} />
        <Skills t={t} />
        <Projects 
          featuredProjects={featuredProjects} 
          allProjects={allProjects}
          t={t} 
          language={language}
        />
        <Contact t={t} language={language} />
      </main>
      <Footer t={t} language={language} />
    </div>
  );
};

export default App;

