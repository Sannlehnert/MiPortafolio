import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = ({ t, language }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white/50 dark:bg-[#121C16]/80 backdrop-blur-md border-t border-border-light dark:border-[#2A3A2F]">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Columna izquierda - Marca */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <span className="w-12 h-12 rounded-full bg-accent-gradient dark:bg-dark-accent-gradient text-white flex items-center justify-center text-xl font-bold group-hover:rotate-12 transition-transform">
                SL
              </span>
              <span className="text-xl font-heading font-bold text-text-primary dark:text-[#E5FAEF]">
                Santiago Lehnert
              </span>
            </a>
            <p className="text-text-secondary dark:text-[#94A3B8] text-sm leading-relaxed max-w-xs relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-accent dark:after:bg-[#31C48D]">
              {t.footer.description}
            </p>
          </div>
          
          {/* Columna derecha - Social y contacto */}
          <div className="md:text-right">
            <h4 className="text-lg font-heading font-bold text-text-primary dark:text-[#E5FAEF] mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 md:after:left-auto md:after:right-0 after:w-8 after:h-0.5 after:bg-accent dark:after:bg-[#31C48D]">
              {t.footer.connect}
            </h4>
            <div className="flex gap-3 mb-4 md:justify-end">
              <a href="https://github.com/Sannlehnert" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-text-secondary dark:text-[#94A3B8] hover:text-accent dark:hover:text-[#31C48D] hover:-translate-y-1 transition-all">
                <FaGithub size={18} />
              </a>
              <a href="http://www.linkedin.com/in/santiago-agust%C3%ADn-lehnert-a0ab28378" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-text-secondary dark:text-[#94A3B8] hover:text-accent dark:hover:text-[#31C48D] hover:-translate-y-1 transition-all">
                <FaLinkedin size={18} />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <a href="mailto:santiagolehnert2016@gmail.com" className="flex items-center gap-2 md:justify-end text-text-secondary dark:text-[#94A3B8] hover:text-accent dark:hover:text-[#31C48D] transition-colors">
                <FaEnvelope size={14} />
                santiagolehnert2016@gmail.com
              </a>
              <p className="flex items-center gap-2 md:justify-end text-text-secondary dark:text-[#94A3B8]">
                <FaMapMarkerAlt size={14} />
                Neuquén Capital, Argentina
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border-light dark:border-[#2A3A2F] mt-10 pt-6 text-center">
          <p className="text-text-secondary dark:text-[#94A3B8] text-sm">
            © {currentYear} Santiago Agustin Lehnert. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;