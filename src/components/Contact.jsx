import React, { useState } from 'react';

const Contact = ({ t, language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t.contact.validation.name;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t.contact.validation.email;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t.contact.validation.email;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t.contact.validation.message;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const res = await fetch('https://formspree.io/f/mpwlejak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _language: language
        })
      });
      
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-text">
              {t.contact.text}
            </p>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-details">
                <h3>{t.contact.email}</h3>
                <a href="mailto:santiagolehnert2016@gmail.com">santiagolehnert2016@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>{t.contact.location}</h3>
                <span>Neuquen Capital, Argentina</span>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">{t.contact.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.contact.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.contact.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <p className="form-error">{errors.message}</p>}
            </div>
            <button 
              type="submit" 
              className="btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? t.contact.sending : t.contact.send}
            </button>
            
            {submitStatus === 'success' && (
              <p className="form-success">{t.contact.success}</p>
            )}
            {submitStatus === 'error' && (
              <p className="form-error">{t.contact.error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;