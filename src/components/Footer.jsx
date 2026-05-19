import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = ({ t }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/50 dark:bg-[#121C16]/80 backdrop-blur-md border-t border-border-light dark:border-[#2A3A2F]">
      <div className="section-container py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Marca + tagline */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 group mb-2">
              <span className="w-10 h-10 rounded-full bg-accent-gradient dark:bg-dark-accent-gradient text-white flex items-center justify-center text-lg font-bold group-hover:rotate-12 transition-transform">
                SL
              </span>
              <span className="text-lg font-heading font-bold text-text-primary dark:text-[#E5FAEF]">
                Santiago Lehnert
              </span>
            </a>
            <p className="text-text-secondary dark:text-[#94A3B8] text-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Social y contacto */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex gap-3">
              <a
                href="https://github.com/Sannlehnert"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-text-secondary dark:text-[#94A3B8] hover:text-accent dark:hover:text-[#31C48D] hover:-translate-y-1 transition-all"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/santiago-agust%C3%ADn-lehnert-a0ab28378"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-text-secondary dark:text-[#94A3B8] hover:text-accent dark:hover:text-[#31C48D] hover:-translate-y-1 transition-all"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
            <div className="text-sm text-text-secondary dark:text-[#94A3B8] space-y-1">
              <a
                href="mailto:santiagolehnert2016@gmail.com"
                className="flex items-center gap-1.5 hover:text-accent dark:hover:text-[#31C48D] transition-colors"
              >
                <FaEnvelope size={12} />
                santiagolehnert2016@gmail.com
              </a>
              <span className="flex items-center gap-1.5">
                <FaMapMarkerAlt size={12} />
                Neuquén Capital, Argentina
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-border-light dark:border-[#2A3A2F] mt-6 pt-4 text-center">
          <p className="text-text-secondary dark:text-[#94A3B8] text-xs">
            © {currentYear} Santiago Agustin Lehnert. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;