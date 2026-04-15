import React, { useState, useEffect } from 'react';
// Componentes (se irán actualizando)
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

  // Datos de proyectos actualizados con los tres nuevos
  const allProjects = [
    {
      id: 1,
      title: { es: "FitBox - Gestión de Gimnasio", en: "FitBox - Gym Management" },
      description: {
        es: "Sistema completo para gestión de membresías, pagos y asistencia con panel administrativo y reportes.",
        en: "Complete system for membership, payment and attendance management with admin panel and reporting system."
      },
      detailedDescription: {
        es: "Aplicación web full-stack para gimnasios con autenticación de usuarios, gestión de pagos, control de asistencia y dashboard administrativo. Sistema modular que permite administrar múltiples sucursales.",
        en: "Full-stack web application for gyms with user authentication, payment management, attendance control and administrative dashboard. Modular system that allows managing multiple branches."
      },
      tags: ["React", "Node.js", "MySQL", "Express", "JWT"],
      technologies: ["React", "Node.js", "Express", "MySQL", "JWT", "CSS3"],
      github: "https://github.com/Sannlehnert/FrontendFitBox",
      demo: "https://fit-box.netlify.app/",
      image: "/img/fitbox.jpeg",
      video: "/video/fitbox.mp4",
      featured: true
    },
    {
      id: 2,
      title: { es: "Privacy Shield", en: "Privacy Shield" },
      description: {
        es: "Extensión de navegador para bloquear rastreadores y proteger privacidad.",
        en: "Browser extension to block trackers and protect privacy."
      },
      detailedDescription: {
        es: "Extensión desarrollada para Chrome y Firefox que bloquea cookies de rastreo, scripts maliciosos y mejora la privacidad del usuario. Incluye configuración personalizada y estadísticas de bloqueo.",
        en: "Extension developed for Chrome and Firefox that blocks tracking cookies, malicious scripts and improves user privacy. Includes custom settings and blocking statistics."
      },
      tags: ["JavaScript", "HTML5", "CSS"],
      technologies: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/Sannlehnert/Privacy-Shield",
      demo: "https://privacishield.netlify.app/",
      image: "/img/privacyshield.jpg",
      video: "/video/privacyshield.mp4",
      featured: false
    },
    {
      id: 3,
      title: { es: "RomaMora", en: "RomaMora" },
      description: {
        es: "Landing Page de ventas de espejos artesanales para comercio físico.",
        en: "Landing page for handmade mirrors sales for physical commerce."
      },
      detailedDescription: {
        es: "Sitio web responsivo con diseño moderno para empresa de espejos artesanales. Incluye galería interactiva.",
        en: "Responsive website with modern design for handmade mirrors company. Includes interactive gallery."
      },
      tags: ["React", "Vite", "CSS", "Responsivo"],
      technologies: ["React", "Vite", "CSS3"],
      github: "https://github.com/Sannlehnert/RomaMora-Mejorado",
      demo: "https://romamora.netlify.app/",
      image: "/img/romamora.jpg",
      video: "/video/romamora.mp4",
      featured: false
    },
    {
      id: 4,
      title: { es: "Grid Barbers", en: "Grid Barbers" },
      description: {
        es: "Sistema de turnos para barbería local.",
        en: "Appointment system for local barbershop."
      },
      detailedDescription: {
        es: "Turnero para barbería con gestión de clientes y horarios. Permite a los usuarios reservar, modificar y cancelar turnos fácilmente desde cualquier dispositivo.",
        en: "Barber shop appointment scheduling system with customer and schedule management. Allows users to easily book, modify, and cancel appointments from any device."
      },
      tags: ["React", "TailwindCSS", "Node.js"],
      technologies: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "MySQL"],
      github: "https://github.com/Sannlehnert/FrontendGridBarbers",
      demo: "https://gridbarbers.netlify.app/",
      image: "/img/GridBarber.jpg",
      video: "/video/gridbarber.mp4",
      featured: false
    },
    // NUEVOS PROYECTOS
    {
      id: 5,
      title: { es: "Devise Latam - Premium Landing", en: "Devise Latam - Premium Landing" },
      description: {
        es: "Landing page de alta gama enfocada en impacto visual y conversión.",
        en: "High-end landing page focused on visual impact and conversion."
      },
      detailedDescription: {
        es: "Landing page de alta gama enfocada en impacto visual y conversión. Implementa animaciones fluidas y una arquitectura escalable para futuros servicios e integraciones.",
        en: "High-end landing page focused on visual impact and conversion. Implements smooth animations and scalable architecture for future services and integrations."
      },
      tags: ["React", "Vite", "Tailwind", "Framer Motion", "EmailJS"],
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "EmailJS"],
      github: "https://github.com/Sannlehnert/Devise",
      demo: "https://deviselatam.netlify.app/",
      image: "/img/devise.jpeg",
      video: "/video/devise.mp4",
      featured: false
    },
    {
      id: 6,
      title: { es: "Smash House - Sistema de Pedidos", en: "Smash House - Order System" },
      description: {
        es: "Sistema Full Stack para flujo de pedidos con paneles sincronizados en tiempo real.",
        en: "Full Stack system for order flow with real-time synchronized panels."
      },
      detailedDescription: {
        es: "Sistema Full Stack para el flujo de pedidos de un comercio gastronómico. Incluye paneles sincronizados para Cajero y Cocina (KDS) mediante WebSockets para actualizaciones instantáneas sin recarga.",
        en: "Full Stack system for order flow of a food business. Includes synchronized panels for Cashier and Kitchen (KDS) via WebSockets for instant updates without reload."
      },
      tags: ["React", "Node.js", "Socket.io", "MySQL", "Tailwind"],
      technologies: ["React", "Node.js", "Express", "Socket.io", "MySQL", "Tailwind CSS", "IndexedDB"],
      github: "https://github.com/Sannlehnert/CarritoComidasFrontend",
      demo: "https://smash-house-ten.vercel.app/",
      image: "/img/smash.jpeg",
      video: "/video/smash.mp4",
      featured: true
    },
    {
      id: 7,
      title: { es: "C. Figueroa - Mantenimiento Integral", en: "C. Figueroa - Integral Maintenance" },
      description: {
        es: "Plataforma corporativa para servicios de mantenimiento en barrios privados.",
        en: "Corporate platform for maintenance services in private neighborhoods."
      },
      detailedDescription: {
        es: "Solución web corporativa diseñada para una cooperativa de servicios en barrios privados. Prioriza la arquitectura de la información y la presentación profesional de servicios de mantenimiento y limpieza.",
        en: "Corporate web solution designed for a service cooperative in private neighborhoods. Prioritizes information architecture and professional presentation of maintenance and cleaning services."
      },
      tags: ["React", "Vite", "Tailwind CSS"],
      technologies: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/Sannlehnert/Cooperativa-Figueroa",
      demo: "https://cooperativafigueroa.netlify.app/",
      image: "/img/figueroa.jpeg",
      video: "/video/figueroa.mp4",
      featured: false
    }
  ];

  const featuredProjects = allProjects.filter(project => project.featured);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedLanguage = localStorage.getItem('language');
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(prev => prev === 'es' ? 'en' : 'es');
  const t = translations[language];

  return (
    <div className={`app ${isMounted ? 'mounted' : ''}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white px-4 py-2 z-50 rounded">
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