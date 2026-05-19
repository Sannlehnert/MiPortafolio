import React, { useState, useEffect } from 'react';
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

  const allProjects = [
    {
      id: 1,
      title: { es: "FitBox - Gestión de Gimnasio", en: "FitBox - Gym Management" },
      description: {
        es: "Plataforma para administrar membresías, pagos y asistencia de gimnasios.",
        en: "Platform to manage gym memberships, payments and attendance."
      },
      detailedDescription: {
        es: "Aplicación web full‑stack con autenticación, gestión de pagos, control de asistencia y panel administrativo. Permite manejar múltiples sucursales.",
        en: "Full‑stack web app with authentication, payment management, attendance tracking and admin dashboard. Supports multiple branches."
      },
      features: ['auth', 'crud', 'dashboard', 'payments', 'database'],
      technologies: ["React", "Node.js", "MySQL", "Express", "JWT"],
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
        es: "Extensión de navegador que bloquea rastreadores y protege la privacidad.",
        en: "Browser extension that blocks trackers and protects privacy."
      },
      features: ['responsive'],
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
        es: "Landing page para venta de espejos artesanales.",
        en: "Landing page for handmade mirror sales."
      },
      features: ['responsive'],
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
        es: "Sistema de turnos para barbería con gestión de clientes.",
        en: "Appointment system for barbershops with client management."
      },
      features: ['crud', 'auth'],
      technologies: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "MySQL"],
      github: "https://github.com/Sannlehnert/FrontendGridBarbers",
      demo: "https://gridbarbers.netlify.app/",
      image: "/img/GridBarber.jpg",
      video: "/video/gridbarber.mp4",
      featured: false
    },
    {
      id: 5,
      title: { es: "Devise Latam - Premium Landing", en: "Devise Latam - Premium Landing" },
      description: {
        es: "Landing page de alto impacto visual con animaciones fluidas.",
        en: "High‑impact visual landing page with smooth animations."
      },
      features: ['responsive'],
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
        es: "Sistema full‑stack para pedidos en tiempo real con WebSockets.",
        en: "Full‑stack real‑time ordering system with WebSockets."
      },
      features: ['realtime', 'dashboard', 'crud', 'api', 'database'],
      technologies: ["React", "Node.js", "Express", "Socket.io", "MySQL", "Tailwind CSS"],
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
      features: ['responsive'],
      technologies: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/Sannlehnert/Cooperativa-Figueroa",
      demo: "https://cooperativafigueroa.netlify.app/",
      image: "/img/figueroa.jpeg",
      video: "/video/figueroa.mp4",
      featured: false
    }
  ];

  const featuredProjects = allProjects.filter(p => p.featured);

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  const t = translations[language];

  return (
    <div className={`app ${isMounted ? 'mounted' : ''}`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white px-4 py-2 z-50 rounded"
      >
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