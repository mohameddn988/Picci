import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';
import CutCard from '../components/CutCard';
import { getPopularCuts } from '../data/cutsData';
import Modal from '../components/Modal';
import ContactForm from '../components/ContactForm';
import '../styles/catalog.css';



// Données des services de barbier selon la maquette
const barbershopServices = {
  coupe: [
    {
      nameKey: "barbershop.services.cutting.clipper.name",
      priceKey: "barbershop.services.cutting.clipper.price",
      descriptionKey: "barbershop.services.cutting.clipper.description"
    },
    {
      nameKey: "barbershop.services.cutting.haircut.name",
      priceKey: "barbershop.services.cutting.haircut.price",
      descriptionKey: "barbershop.services.cutting.haircut.description"
    }, 
    {
      nameKey: "barbershop.services.cutting.kids.name",
      priceKey: "barbershop.services.cutting.kids.price",
      descriptionKey: "barbershop.services.cutting.kids.description"
    }, 
  ],
  barbe: [
    {
      nameKey: "barbershop.services.cutting.senior.name",
      priceKey: "barbershop.services.cutting.senior.price",
      descriptionKey: "barbershop.services.cutting.senior.description"
    },
  ],
  autres: [
    {
      nameKey: "barbershop.services.cutting.haircut_beard.name",
      priceKey: "barbershop.services.cutting.haircut_beard.price",
      descriptionKey: "barbershop.services.cutting.haircut_beard.description"
    },
  ]
};

const BarbershopPage: React.FC = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Récupérer les données
  const popularCuts = getPopularCuts();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



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
        <Navbar logo={assets.logoNav} siteName="Picci Barbershop" />

        {/* HERO SECTION */}
        <section 
          className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
          style={{ transform: `translateY(${-scrollY}px)` }}
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <div className="relative h-full w-full">
            <img 
              src="/Picci_7.jpg" 
              alt={t('barbershop.hero.image.alt')}
              className="w-full h-full object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10"></div>
            </div>
          </div>

          {/* Hero content */}
          <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
              <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">{t('barbershop.hero.title.style')}</span> 
              <span className="text-white">{t('barbershop.hero.title.elegance')}</span> 
              <span className="block text-red-400">{t('barbershop.hero.title.confidence')}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-6">
              {t('barbershop.hero.subtitle')}
            </p>
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

        {/* SECTION NOS SERVICES */}
        <section className="py-16 sm:py-20 bg-black relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* En-tête de section */}
            <div className="text-center mb-16">
              <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 transform transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {t('barbershop.services.title')}
              </h2>
              <p className={`text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto transform transition-all duration-1000 delay-150 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {t('barbershop.services.subtitle')}
              </p>
            </div>

            {/* Grille des services - 3 colonnes */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Colonne COUPE */}
              <div className={`transform transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-wider catalog-column-title">
                    {t('barbershop.services.categories.cutting')}
                  </h3>
                  <div className="w-16 h-1 bg-red-500 mx-auto rounded-full"></div>
                </div>
                <div className="space-y-6">
                  {barbershopServices.coupe.map((service, index) => (
                    <div key={index} className="border-b border-gray-800 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-white catalog-item-name">{t(service.nameKey)}</h4>
                        <span className="text-red-500 font-bold text-lg ml-4 flex-shrink-0 catalog-item-price">
                          {t(service.priceKey)}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed catalog-item-description">{t(service.descriptionKey)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Colonne BARBE */}
              <div className={`transform transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '300ms' }}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-wider catalog-column-title">
                    {t('barbershop.services.categories.beard')}
                  </h3>
                  <div className="w-16 h-1 bg-red-500 mx-auto rounded-full"></div>
                </div>
                <div className="space-y-6">
                  {barbershopServices.barbe.map((service, index) => (
                    <div key={index} className="border-b border-gray-800 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-white catalog-item-name">{t(service.nameKey)}</h4>
                        <span className="text-red-500 font-bold text-lg ml-4 flex-shrink-0 catalog-item-price">
                          {t(service.priceKey)}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed catalog-item-description">{t(service.descriptionKey)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Colonne AUTRES */}
              <div className={`transform transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '400ms' }}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-wider catalog-column-title">
                    {t('barbershop.services.categories.others')}
                  </h3>
                  <div className="w-16 h-1 bg-red-500 mx-auto rounded-full"></div>
                </div>
                <div className="space-y-6">
                  {barbershopServices.autres.map((service, index) => (
                    <div key={index} className="border-b border-gray-800 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-white catalog-item-name">{t(service.nameKey)}</h4>
                        <span className="text-red-500 font-bold text-lg ml-4 flex-shrink-0 catalog-item-price">
                          {t(service.priceKey)}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed catalog-item-description">{t(service.descriptionKey)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bouton Prendre rendez-vous */}
            <div className="text-center mt-16">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-200 transform hover:scale-105"
              >
                {t('barbershop.booking.button')}
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Modal de contact */}
        <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}>
          <ContactForm onClose={() => setIsContactModalOpen(false)} />
        </Modal>

        <Footer />
      </div>
    </div>
  );
};

export default BarbershopPage; 