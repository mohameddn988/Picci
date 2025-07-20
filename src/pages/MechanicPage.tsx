import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';
import { mechanicServicesData, mechanicServiceCategories } from '../data/mechanicServicesData';
import '../styles/catalog.css';

// Catégories de services
const serviceCategories = mechanicServiceCategories;

const MechanicPage: React.FC = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrollY, setScrollY] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Préchargement des images avec gestion d'erreurs
  useEffect(() => {
    const preloadImages = () => {
      const imageNumbers = Array.from({ length: 30 }, (_, i) => i + 1);
      let loadedCount = 0;
      let errorCount = 0;
      
      imageNumbers.forEach(num => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          console.log(`✅ Preloaded: /mecano/${num}.jpeg (${loadedCount}/30)`);
        };
        img.onerror = () => {
          errorCount++;
          console.log(`❌ Failed to preload: /mecano/${num}.jpeg (${errorCount} errors)`);
        };
        img.src = `/mecano/${num}.jpeg`;
      });
    };
    
    preloadImages();
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Optimized video loading with intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowVideo(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour obtenir les services filtrés
  const getFilteredServices = () => {
    if (activeCategory === 'all') {
      return Object.values(mechanicServicesData).flat();
    }
    return mechanicServicesData[activeCategory] || [];
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
        <Navbar logo={assets.logoNav} siteName="Picci Mécanique" />

        {/* HERO SECTION */}
        <section 
          className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
          style={{ transform: `translateY(${-scrollY}px)` }}
        >
          {/* Background video with optimization */}
          <div className="absolute inset-0 z-0">
            {/* Optimized video */}
            {showVideo && !videoError && (
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                preload="auto"
                className="w-full h-full object-cover opacity-40"
                onError={(e) => {
                  console.log('❌ Video failed to load, using gradient background only');
                  setVideoError(true);
                  e.currentTarget.style.display = 'none';
                }}
                onLoadStart={() => {
                  console.log('🎬 Video loading started');
                }}
                onCanPlay={() => {
                  console.log('✅ Video can play');
                  setVideoLoaded(true);
                }}
                onLoadedData={() => {
                  console.log('📹 Video data loaded');
                  setVideoLoaded(true);
                }}
              >
                <source src="/mecanicbg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 z-10"></div>
          </div>

          {/* Hero content */}
          <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
              {t('mechanic.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-6">
              {t('mechanic.hero.subtitle')}
            </p>
          </div>
              
          {/* Dégradé en bas du Hero */}
          <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-20">
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            
            {/* Indicateur de scroll en forme de souris */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="w-5 h-8 border-2 border-yellow-400/50 rounded-full p-1">
                <div className="w-1 h-2 bg-yellow-400/80 rounded-full mx-auto animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-16 sm:py-20 bg-black relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('mechanic.services.title')}</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {t('mechanic.services.subtitle')}
              </p>
              <p className="text-md text-yellow-400 mt-4">
                {t('mechanic.services.priceNote')}
              </p>
            </div>
            
            {/* Filtre de catégories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory('all')}
              >
                {t('mechanic.all')}
              </button>
              {serviceCategories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-yellow-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {t(`mechanic.categories.${category}`)}
                </button>
              ))}
            </div>
            
            {/* Services Grid */}
            <div className="max-w-7xl mx-auto">
              {/* Titre de la catégorie sélectionnée */}
              {activeCategory !== 'all' && (
                <div className="text-center mb-12">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-wider catalog-column-title">
                    {t(`mechanic.categories.${activeCategory}`)}
                  </h3>
                  <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
                </div>
              )}

              {/* Grille de services */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredServices().map((service, index) => (
                  <div
                      key={service.id}
                    className={`relative p-6 transition-all duration-500 transform ${
                      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      }`}
                    style={{
                      borderBottom: '1px solid rgba(75, 85, 99, 0.3)'
                    }}
                    >
                    <div className="mb-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-bold text-white catalog-item-name">{t(service.nameKey)}</h4>
                        {activeCategory === 'all' && (
                          <span className="inline-block px-3 py-1 bg-yellow-500/20 rounded-full text-xs font-medium text-yellow-400 catalog-item-name">
                            {t(`mechanic.categories.${Object.keys(mechanicServicesData).find(key => mechanicServicesData[key].some(s => s.id === service.id))}`)}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 catalog-item-description">{t(service.descriptionKey)}</p>
                    <div className="flex items-center text-sm text-gray-500 catalog-item-description">
                      <svg className="w-4 h-4 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {t(service.timeKey)}
                    </div>
                  </div>
                  ))}
              </div>
            </div>
            
            {/* Note sur les prix */}
            {/* <div className="mt-12 text-sm text-gray-400 text-center">
              * Les prix indiqués sont estimatifs et peuvent varier selon le modèle et l'année du véhicule. 
              <br />Contactez-nous pour un devis précis adapté à votre véhicule.
            </div> */}
          </div>
        </section>
        
        {/* SECTION EXPERTS EN ACTION */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Titre et description */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('mechanic.experts.title')}</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {t('mechanic.experts.description')}
              </p>
            </div>
            
            {/* Grid de photos avec animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto h-[80vh] overflow-hidden">
              {/* Colonne gauche - Photos verticales */}
              <div className="flex flex-col gap-4 animate-scroll-down">
                {[
                  // Répétition 1
                  '1.jpeg', '3.jpeg', '5.jpeg', '7.jpeg', '9.jpeg', 
                  '11.jpeg', '13.jpeg', '15.jpeg', '17.jpeg', '19.jpeg',
                  '21.jpeg',
                  // Répétition 2
                  '1.jpeg', '3.jpeg', '5.jpeg', '7.jpeg', '9.jpeg', 
                  '11.jpeg', '13.jpeg', '15.jpeg', '17.jpeg', '19.jpeg',
                  '21.jpeg',
                  // Répétition 3
                  '1.jpeg', '3.jpeg', '5.jpeg', '7.jpeg', '9.jpeg', 
                  '11.jpeg', '13.jpeg', '15.jpeg', '17.jpeg', '19.jpeg',
                  '21.jpeg',
                  // Répétition 4
                  '1.jpeg', '3.jpeg', '5.jpeg', '7.jpeg', '9.jpeg', 
                  '11.jpeg', '13.jpeg', '15.jpeg', '17.jpeg', '19.jpeg',
                  '21.jpeg'
                ].map((photo, index) => (
                  <div
                    key={`left-${index}`}
                    className="relative rounded-lg overflow-hidden shadow-xl group flex-shrink-0 bg-gray-800"
                    style={{ minHeight: '250px' }}
                  >
                    <img
                      src={`/mecano/${photo}`}
                      alt={`Mécanicien au travail`}
                      className="w-full h-full object-cover will-change-transform transition-transform duration-300 group-hover:scale-105"
                      loading="eager"
                      decoding="async"
                      onError={(e) => {
                        console.log(`❌ Error loading image: /mecano/${photo}`);
                        // Garder le container mais masquer l'image
                        e.currentTarget.style.visibility = 'hidden';
                      }}
                      onLoad={(e) => {
                        console.log(`✅ Successfully loaded: /mecano/${photo}`);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
              
              {/* Colonne centrale - Photos horizontales */}
              <div className="flex flex-col gap-4 animate-scroll-down-delayed">
                {[
                  // Répétition 1
                  '2.jpeg', '4.jpeg', '6.jpeg', '8.jpeg', '10.jpeg', 
                  '12.jpeg', '14.jpeg', '16.jpeg',   '20.jpeg',
                  // Répétition 2
                  '2.jpeg', '4.jpeg', '6.jpeg', '8.jpeg', '10.jpeg', 
                  '12.jpeg', '14.jpeg', '16.jpeg',   '20.jpeg',
                  
                  // Répétition 3
                  '2.jpeg', '4.jpeg', '6.jpeg', '8.jpeg', '10.jpeg', 
                  '12.jpeg', '14.jpeg', '16.jpeg',   '20.jpeg',
                  
                  // Répétition 4
                  '2.jpeg', '4.jpeg', '6.jpeg', '8.jpeg', '10.jpeg', 
                  '12.jpeg', '14.jpeg', '16.jpeg',   '20.jpeg',
                  
                ].map((photo, index) => (
                  <div
                    key={`center-${index}`}
                    className="relative rounded-lg overflow-hidden shadow-xl group flex-shrink-0 bg-gray-800"
                    style={{ minHeight: '200px' }}
                  >
                    <img
                      src={`/mecano/${photo}`}
                      alt={`Mécanicien au travail`}
                      className="w-full h-full object-cover will-change-transform transition-transform duration-300 group-hover:scale-105"
                      loading="eager"
                      decoding="async"
                      onError={(e) => {
                        console.log(`❌ Error loading image: /mecano/${photo}`);
                        // Garder le container mais masquer l'image
                        e.currentTarget.style.visibility = 'hidden';
                      }}
                      onLoad={(e) => {
                        console.log(`✅ Successfully loaded: /mecano/${photo}`);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
              
              {/* Colonne droite - Photos verticales */}
              <div className="flex flex-col gap-4 animate-scroll-down-slow">
                {[
                  // Répétition 1
                   
                   '21.jpeg',
                  '20.jpeg', '19.jpeg',   '17.jpeg', '16.jpeg',
                  // Répétition 2
                   
                   '21.jpeg',
                  '20.jpeg', '19.jpeg',   '17.jpeg', '16.jpeg',
                  // Répétition 3
                   
                   '21.jpeg',
                  '20.jpeg', '19.jpeg',   '17.jpeg', '16.jpeg',
                  // Répétition 4
                   
                   '21.jpeg',
                  '20.jpeg', '19.jpeg',   '17.jpeg', '16.jpeg'
                ].map((photo, index) => (
                  <div
                    key={`right-${index}`}
                    className="relative rounded-lg overflow-hidden shadow-xl group flex-shrink-0 bg-gray-800"
                    style={{ minHeight: '250px' }}
                  >
                    <img
                      src={`/mecano/${photo}`}
                      alt={`Mécanicien au travail`}
                      className="w-full h-full object-cover will-change-transform transition-transform duration-300 group-hover:scale-105"
                      loading="eager"
                      decoding="async"
                      onError={(e) => {
                        console.log(`❌ Error loading image: /mecano/${photo}`);
                        // Garder le container mais masquer l'image
                        e.currentTarget.style.visibility = 'hidden';
                      }}
                      onLoad={(e) => {
                        console.log(`✅ Successfully loaded: /mecano/${photo}`);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* SECTION POURQUOI NOUS CHOISIR */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Animations de fond */}
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('mechanic.why.title')}</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {t('mechanic.why.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Avantage 1 */}
              <div className={`bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-500 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '100ms' }}>
                <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('mechanic.why.certified')}</h3>
                <p className="text-gray-300">{t('mechanic.why.certified.desc')}</p>
              </div>
              
              {/* Avantage 2 */}
              <div className={`bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-500 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('mechanic.why.equipment')}</h3>
                <p className="text-gray-300">{t('mechanic.why.equipment.desc')}</p>
              </div>
              
              {/* Avantage 3 */}
              <div className={`bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-500 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '300ms' }}>
                <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('mechanic.why.fast')}</h3>
                <p className="text-gray-300">{t('mechanic.why.fast.desc')}</p>
              </div>
              
              {/* Avantage 4 */}
              <div className={`bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-500 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '400ms' }}>
                <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('mechanic.why.pricing')}</h3>
                <p className="text-gray-300">{t('mechanic.why.pricing.desc')}</p>
              </div>
              
              {/* Avantage 5 */}
              <div className={`bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-500 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '500ms' }}>
                <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('mechanic.why.warranty')}</h3>
                <p className="text-gray-300">{t('mechanic.why.warranty.desc')}</p>
              </div>
              
              {/* Avantage 6 */}
              <div className={`bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-500 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '600ms' }}>
                <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('mechanic.why.emergency')}</h3>
                <p className="text-gray-300">{t('mechanic.why.emergency.desc')}</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default MechanicPage; 