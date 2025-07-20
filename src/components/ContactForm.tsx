import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import OpeningHours from './OpeningHours';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Formulaire de contact */}
      <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-800/50">
        <h3 className="text-2xl font-bold text-white mb-6">{t('contactForm.form.title')}</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              {t('contactForm.form.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
              placeholder={t('contactForm.form.name.placeholder')}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              {t('contactForm.form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
              placeholder={t('contactForm.form.email.placeholder')}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              {t('contactForm.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30 h-32"
              placeholder={t('contactForm.form.message.placeholder')}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg shadow-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          >
            {t('contactForm.form.submit')}
          </button>

          {isSubmitted && (
            <div className="mt-4 p-4 bg-green-500/20 text-green-400 rounded-lg text-center">
              {t('contactForm.success')}
            </div>
          )}
        </form>
      </div>

      {/* Informations de contact */}
      <div className="space-y-8">
        <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
          <h3 className="text-2xl font-bold text-white mb-6">{t('contactForm.info.title')}</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">{t('contactForm.info.address.title')}</h4>
                <p className="text-gray-300">11770 5e Avenue</p>
                <p className="text-gray-300">Montreal, QC H1E 2X4</p>
                <a 
                  href="https://www.google.com/maps/dir//11770+5e+Avenue+Montreal,+QC+H1E+2X4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 inline-flex items-center mt-2 transition-colors duration-300"
                >
                  <span>{t('contactForm.info.address.directions')}</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">{t('contactForm.info.phone.title')}</h4>
                <a 
                  href="tel:+15144943795" 
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                >
                  (514) 494-3795
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">{t('contactForm.info.social.instagram')}</h4>
                <a 
                  href="https://www.instagram.com/piccifranchise/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 inline-flex items-center"
                >
                  @piccifranchise
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Heures d'ouverture */}
        <OpeningHours openingTime="08:00" closingTime="18:00" />
      </div>
    </div>
  );
};

export default ContactForm; 