import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Petit délai pour s'assurer que tout est monté
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implémenter l'envoi du formulaire
    alert(t('home.contact.form.success'));
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background animations globales */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Particules flottantes petites */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          />
        ))}
        
        {/* Particules moyennes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`mid-${i}`}
            className="absolute w-1 h-1 bg-cyan-500/15 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 10}s`
            }}
          />
        ))}
        
        {/* Orbes de gradient */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/2 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/1 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '12s' }}></div>
      </div>

      <div className="relative z-10">
        <Navbar logo={assets.logoNav} siteName="Station Multi-Services" />

        {/* HERO SECTION */}
        <section 
          className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
          style={{ transform: `translateY(${-scrollY}px)` }}
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <div className="relative h-full w-full">
              <img 
                src="/Picci_14.jpg"
                alt="Station Multi-Services - Vue principale"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10"></div>
            </div>
          </div>

          {/* Hero content */}
          <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
              <span className="text-white">{t('home.hero.title.line1')}</span>
              <span className="block text-white">{t('home.hero.title.line2')}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-6">
              {t('home.hero.description')}
            </p>
            <button 
              onClick={scrollToServices}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg shadow-lg 
              hover:scale-105 hover:from-red-700 hover:to-red-600 
              transition-all duration-300 
              focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black
              relative group overflow-hidden"
            >
              <span className="relative z-10">{t('home.hero.cta')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700/50 to-red-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Dégradé en bas du Hero */}
          <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-20">
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            
            {/* Indicateur de scroll en forme de souris */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="w-5 h-8 border-2 border-red-400/50 rounded-full p-1">
                <div className="w-1 h-2 bg-red-400/80 rounded-full mx-auto animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION SERVICES - Affichage des 4 services disponibles */}
        <ServicesSection />

        {/* SECTION À PROPOS */}
        <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          {/* Animations de bulles et éclaboussures */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-cyan-400/10 animate-bubble"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${24 + Math.random() * 32}px`,
                  height: `${24 + Math.random() * 32}px`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${6 + Math.random() * 8}s`,
                  filter: 'blur(1.5px)'
                }}
              />
            ))}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Contenu texte */}
              <div className="space-y-6">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                    {t('home.about.title')}
                  </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {t('home.about.description1')}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {t('home.about.description2')}
                </p>
                
                {/* Motto en gras avec style moderne */}
                <div className="relative my-8">
                  <p className="text-2xl sm:text-3xl font-bold text-white text-center py-4 relative z-10">
                    {t('home.about.motto')}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent rounded-lg"></div>
                </div>
              </div>
              
              {/* Statistiques */}
              <div className="mt-6 lg:mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Satisfaction */}
                  <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-cyan-500/40 transition-all duration-500 hover:bg-gray-800/50 group">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">{t('home.about.stats.satisfaction.title')}</h3>
                    </div>
                    <p className="text-gray-300">{t('home.about.stats.satisfaction.description')}</p>
                  </div>
                  
                  {/* Expertise */}
                  <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-cyan-500/40 transition-all duration-500 hover:bg-gray-800/50 group">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm5 2a2 2 0 11-4 0 2 2 0 014 0zm-4 7a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zm10 10v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">{t('home.about.stats.expertise.title')}</h3>
                    </div>
                    <p className="text-gray-300">{t('home.about.stats.expertise.description')}</p>
                  </div>
                  
                  {/* Innovation */}
                  <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-cyan-500/40 transition-all duration-500 hover:bg-gray-800/50 group">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">{t('home.about.stats.innovation.title')}</h3>
                    </div>
                    <p className="text-gray-300">{t('home.about.stats.innovation.description')}</p>
                  </div>
                  
                  {/* Service Client */}
                  <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-cyan-500/40 transition-all duration-500 hover:bg-gray-800/50 group">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">{t('home.about.stats.service.title')}</h3>
                    </div>
                    <p className="text-gray-300">{t('home.about.stats.service.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION CONTACT */}
        <section id="contact" className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('home.contact.title')}</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {t('home.contact.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Formulaire de contact */}
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-800/50">
                <h3 className="text-2xl font-bold text-white mb-6">{t('home.contact.form.title')}</h3>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">{t('home.contact.form.name.label')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
                      placeholder={t('home.contact.form.name.placeholder')}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">{t('home.contact.form.email.label')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
                      placeholder={t('home.contact.form.email.placeholder')}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">{t('home.contact.form.message.label')}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30 h-32"
                      placeholder={t('home.contact.form.message.placeholder')}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg shadow-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                  >
                    {t('home.contact.form.submit')}
                  </button>
                </form>
              </div>

              {/* Informations de contact */}
              <div className="space-y-8">
                <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
                  <h3 className="text-2xl font-bold text-white mb-6">{t('home.contact.info.title')}</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{t('home.contact.info.address.title')}</h4>
                        <p className="text-gray-300">{t('home.contact.info.address.line1')}</p>
                        <p className="text-gray-300">{t('home.contact.info.address.line2')}</p>
                        <a 
                          href="https://www.google.com/maps/dir//11770+5e+Avenue+Montreal,+QC+H1E+2X4" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-red-400 hover:text-red-300 inline-flex items-center mt-2 transition-colors duration-300"
                        >
                          <span>{t('home.contact.info.address.directions')}</span>
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
                        <h4 className="text-lg font-semibold text-white mb-1">{t('home.contact.info.phone.title')}</h4>
                        <a 
                          href="tel:+15144943795" 
                          className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                        >
                          {t('home.contact.info.phone.number')}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
                  <h3 className="text-2xl font-bold text-white mb-6">{t('home.contact.hours.title')}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">{t('home.contact.hours.everyday')}</span>
                    <span className="text-white">{t('home.contact.hours.time')}</span>
                  </div>
                  <div className="mt-4 py-1 px-3 bg-green-500/20 rounded-full inline-flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-green-400 text-sm">{t('home.contact.hours.open')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <Footer />
      </div>
    </div>
  );
};

export default HomePage; 