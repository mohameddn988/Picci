import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';

const TctPage: React.FC = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background animé professionnel */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Grille animée */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Particules flottantes high-tech */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}

        {/* Lignes de données qui défilent */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            style={{
              width: '200px',
              top: `${20 + i * 15}%`,
              left: '-200px',
              animation: `data-stream 8s linear infinite`,
              animationDelay: `${i * 1.3}s`
            }}
          />
        ))}

        {/* Orbes de lumière technologique */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-cyan-500/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/2 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '12s' }}></div>

        {/* Effet de scan */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{
              animation: 'scan 6s ease-in-out infinite',
              filter: 'blur(2px)'
            }}
          />
        </div>
      </div>

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes data-stream {
          0% { left: -200px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes scan {
          0%, 100% { top: 0%; }
          50% { top: 100%; }
        }
      `}</style>

      <div className="relative z-10">
        <Navbar logo={assets.logoNav} siteName="Tiger Canada Trust LTD" />

        {/* HERO SECTION - Descendu */}
        <section className="pt-32 pb-16 min-h-[80vh] flex items-center justify-center relative overflow-hidden">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Titre Coming Soon */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8">
                <span className="text-white">{t('tct.comingSoon')}</span>
              </h1>
            </div>

            {/* Contenu principal responsive */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Description */}
              <div className={`space-y-4 sm:space-y-6 order-2 xl:order-1 transform transition-all duration-1000 ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}>
                <p className="text-base sm:text-lg xl:text-xl text-gray-300 leading-relaxed">
                  {t('tct.description.1')}
                </p>
                <p className="text-base sm:text-lg xl:text-xl text-gray-300 leading-relaxed">
                  <span className="text-red-400 font-bold">Tiger Canada Trust LTD</span> {t('tct.description.2')}
                </p>
                <p className="text-base sm:text-lg xl:text-xl text-gray-300 leading-relaxed">
                  {t('tct.description.3')}
                </p>
                <p className="text-base sm:text-lg xl:text-xl text-gray-300 leading-relaxed">
                  {t('tct.description.4')}
                </p>
                <p className="text-base sm:text-lg xl:text-xl text-gray-300 leading-relaxed">
                  {t('tct.description.5')}
                </p>
                <p className="text-base sm:text-lg xl:text-xl text-gray-300 leading-relaxed">
                  {t('tct.description.6')}
                </p>
              </div>

              {/* Vidéo avec effets */}
              <div className={`order-1 xl:order-2 transform transition-all duration-1000 ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`} style={{ transitionDelay: '300ms' }}>
                <div className="relative group">
                  {/* Container vidéo avec effets */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 transform transition-all duration-500 group-hover:scale-105">
                    {/* Effet de lueur */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 animate-gradient-x"></div>
                    
                    {/* Vidéo */}
                    <div className="relative">
                      <video 
                        ref={videoRef}
                        className="w-full h-auto rounded-xl cursor-pointer"
                        onEnded={handleVideoEnded}
                        onPlay={() => setIsVideoPlaying(true)}
                        onPause={() => setIsVideoPlaying(false)}
                        onClick={handleVideoClick}
                      >
                        <source src="/TCT.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                      </video>

                      {/* Overlay de lecture */}
                      {!isVideoPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity group-hover:bg-black/40">
                          <button 
                            onClick={handleVideoClick}
                            className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                          >
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default TctPage; 