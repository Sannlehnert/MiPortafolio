import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    closeMenu();
  }, [activeSection]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'h-16 md:h-20 bg-white/80 dark:bg-[#121C16]/90 backdrop-blur-md shadow-md border-b border-border-light dark:border-[#2A3A2F]' 
        : 'h-20 md:h-24 bg-transparent'
    }`}>
      <div className="section-container h-full flex items-center justify-between">
        <a href="#home" className="text-2xl md:text-3xl font-heading font-bold text-accent dark:text-[#31C48D] relative group">
          SL
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent dark:bg-[#31C48D] group-hover:w-full transition-all duration-300"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative text-base lg:text-lg font-medium uppercase tracking-wide transition-colors ${
                activeSection === link.id 
                  ? 'text-accent dark:text-[#31C48D]' 
                  : 'text-text-primary dark:text-[#E5FAEF] hover:text-accent dark:hover:text-[#31C48D]'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent dark:bg-[#31C48D] transition-all duration-300 ${
                activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={toggleLanguage}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/60 dark:bg-[#1A261F]/60 backdrop-blur-sm border border-border-light dark:border-[#2A3A2F] text-text-primary dark:text-[#E5FAEF] hover:bg-accent dark:hover:bg-[#31C48D] hover:text-white transition-all duration-300 text-sm md:text-base font-bold"
            aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/60 dark:bg-[#1A261F]/60 backdrop-blur-sm border border-border-light dark:border-[#2A3A2F] text-text-primary dark:text-[#E5FAEF] hover:bg-accent dark:hover:bg-[#31C48D] hover:text-white transition-all duration-300 text-xl"
            aria-label={darkMode ? t.theme.light : t.theme.dark}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/60 dark:bg-[#1A261F]/60 backdrop-blur-sm border border-border-light dark:border-[#2A3A2F] text-text-primary dark:text-[#E5FAEF] hover:bg-accent dark:hover:bg-[#31C48D] hover:text-white transition-all duration-300"
            aria-label="Menú"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-bg-primary dark:bg-[#121C16] border-r border-border-light dark:border-[#2A3A2F] z-50 transform transition-transform duration-300 ease-out md:hidden ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-6 pt-24">
          <nav className="flex flex-col gap-4">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMenu}
                className={`text-xl font-heading font-medium py-2 px-4 rounded-lg transition-colors ${
                  activeSection === link.id 
                    ? 'bg-accent/10 text-accent dark:bg-[#31C48D]/10 dark:text-[#31C48D]' 
                    : 'text-text-primary dark:text-[#E5FAEF] hover:bg-accent/5 dark:hover:bg-[#31C48D]/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-8 space-y-3">
            <button
              onClick={() => { toggleLanguage(); closeMenu(); }}
              className="w-full py-3 px-4 rounded-lg bg-white/60 dark:bg-[#1A261F]/60 border border-border-light dark:border-[#2A3A2F] text-text-primary dark:text-[#E5FAEF] hover:bg-accent dark:hover:bg-[#31C48D] hover:text-white transition-all duration-300 font-medium"
            >
              {language === 'es' ? '🌐 English' : '🌐 Español'}
            </button>
            <button
              onClick={() => { toggleDarkMode(); closeMenu(); }}
              className="w-full py-3 px-4 rounded-lg bg-white/60 dark:bg-[#1A261F]/60 border border-border-light dark:border-[#2A3A2F] text-text-primary dark:text-[#E5FAEF] hover:bg-accent dark:hover:bg-[#31C48D] hover:text-white transition-all duration-300 font-medium flex items-center justify-center gap-2"
            >
              {darkMode ? <><FaSun className="mr-2" /> {t.theme.light}</> : <><FaMoon className="mr-2" /> {t.theme.dark}</>}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;