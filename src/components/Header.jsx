import React, { useState, useEffect } from 'react';

const Header = ({ darkMode, toggleDarkMode, toggleLanguage, language, activeSection, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear el scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Cerrar menú al cambiar de sección
  useEffect(() => {
    closeMenu();
  }, [activeSection]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav" role="navigation">
          <a href="#home" className="logo" aria-label={t.nav.home}>
            SL
          </a>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={activeSection === link.id ? 'nav-link active' : 'nav-link'}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="language-toggle"
              onClick={toggleLanguage}
              aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label={darkMode ? t.theme.light : t.theme.dark}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button
              className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-controls="mobile-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>
      
      {/* Menú móvil */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'mobile-nav-link active' : 'mobile-nav-link'}
              aria-current={activeSection === link.id ? 'page' : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          
          {/* Botones de idioma y tema para móvil */}
          <button
            className="language-toggle-mobile"
            onClick={() => {
              toggleLanguage();
              closeMenu();
            }}
            aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            {language === 'es' ? '🌐 English' : '🌐 Español'}
          </button>
          <button
            className="theme-toggle-mobile"
            onClick={() => {
              toggleDarkMode();
              closeMenu();
            }}
            aria-label={darkMode ? t.theme.light : t.theme.dark}
          >
            {darkMode ? '☀️ ' + t.theme.light : '🌙 ' + t.theme.dark}
          </button>
        </div>
      </div>
      
      {/* Overlay para cerrar el menú */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;