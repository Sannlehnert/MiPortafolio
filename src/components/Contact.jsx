import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = ({ t, language }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t.contact.validation.name;
    if (!formData.email.trim() || !validateEmail(formData.email)) newErrors.email = t.contact.validation.email;
    if (!formData.message.trim()) newErrors.message = t.contact.validation.message;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/mpwlejak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, _language: language })
      });
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="section-container">
        <h2 className="section-title">{t.contact.title}</h2>

        <div className="max-w-2xl mx-auto">
          <p className="text-text-secondary dark:text-[#94A3B8] text-lg mb-10 text-center">
            {t.contact.text}
          </p>

          {/* Tarjetas de contacto */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {/* Email clickeable */}
            <a
              href="mailto:santiagolehnert2016@gmail.com"
              className="glass-card p-4 flex items-center gap-3 hover:-translate-y-1 transition-transform group"
            >
              <FaEnvelope className="text-accent dark:text-[#31C48D] text-xl shrink-0" />
              <span className="text-text-primary dark:text-[#E5FAEF] font-medium group-hover:underline">
                santiagolehnert2016@gmail.com
              </span>
            </a>

            {/* Ubicación (no clickeable) */}
            <div className="glass-card p-4 flex items-center gap-3">
              <FaMapMarkerAlt className="text-accent dark:text-[#31C48D] text-xl shrink-0" />
              <span className="text-text-primary dark:text-[#E5FAEF] font-medium">
                Neuquén Capital, Argentina
              </span>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="block text-text-primary dark:text-[#E5FAEF] font-medium mb-2">
                {t.contact.name} <span className="text-accent dark:text-[#31C48D]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-border-light dark:border-[#2A3A2F]'
                } bg-white dark:bg-[#1A261F] text-text-primary dark:text-[#E5FAEF] focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-[#31C48D]`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-text-primary dark:text-[#E5FAEF] font-medium mb-2">
                {t.contact.email} <span className="text-accent dark:text-[#31C48D]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-border-light dark:border-[#2A3A2F]'
                } bg-white dark:bg-[#1A261F] text-text-primary dark:text-[#E5FAEF] focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-[#31C48D]`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-text-primary dark:text-[#E5FAEF] font-medium mb-2">
                {t.contact.message} <span className="text-accent dark:text-[#31C48D]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-border-light dark:border-[#2A3A2F]'
                } bg-white dark:bg-[#1A261F] text-text-primary dark:text-[#E5FAEF] focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-[#31C48D] resize-none`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full group"
            >
              {isSubmitting ? t.contact.sending : (
                <>
                  {t.contact.send}
                  <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <p className="text-accent dark:text-[#31C48D] text-center font-medium p-3 bg-accent/10 dark:bg-[#31C48D]/10 rounded-lg">
                {t.contact.success}
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center font-medium p-3 bg-red-500/10 rounded-lg">
                {t.contact.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;