import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';
import Modal from '../components/Modal';
import ContactForm from '../components/ContactForm';

const FinancementPage: React.FC = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
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

  const financingOptions = [
    {
      title: t('financing.options.standard.title'),
      description: t('financing.options.standard.description'),
      features: [
        t('financing.options.standard.features.1'),
        t('financing.options.standard.features.2'),
        t('financing.options.standard.features.3'),
        t('financing.options.standard.features.4')
      ]
    },
    {
      title: t('financing.options.lease.title'),
      description: t('financing.options.lease.description'),
      features: [
        t('financing.options.lease.features.1'),
        t('financing.options.lease.features.2'),
        t('financing.options.lease.features.3'),
        t('financing.options.lease.features.4')
      ]
    },
    {
      title: t('financing.options.flexible.title'),
      description: t('financing.options.flexible.description'),
      features: [
        t('financing.options.flexible.features.1'),
        t('financing.options.flexible.features.2'),
        t('financing.options.flexible.features.3'),
        t('financing.options.flexible.features.4')
      ]
    }
  ];

  const steps = [
    {
      number: 1,
      title: t('financing.process.step1.title'),
      description: t('financing.process.step1.description')
    },
    {
      number: 2,
      title: t('financing.process.step2.title'),
      description: t('financing.process.step2.description')
    },
    {
      number: 3,
      title: t('financing.process.step3.title'),
      description: t('financing.process.step3.description')
    },
    {
      number: 4,
      title: t('financing.process.step4.title'),
      description: t('financing.process.step4.description')
    }
  ];

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
        <Navbar logo={assets.logoNav} siteName="TigerBec Financement" />

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
                alt="TigerBec Financement"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10"></div>
            </div>
          </div>

          {/* Hero content */}
          <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
              <span className="text-gray-400 drop-shadow-[0_0_15px_rgba(156,163,175,0.5)]">{t('financing.hero.title.1')}</span>
              <span className="text-white"> {t('financing.hero.title.2')}</span>
              <span className="block text-gray-300">{t('financing.hero.title.3')}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-6">
              {t('financing.hero.subtitle')}
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-gray-400 to-gray-300 text-gray-900 font-bold rounded-lg shadow-lg hover:from-gray-500 hover:to-gray-400 transition-all duration-300 transform hover:scale-105"
            >
              {t('financing.cta.discuss')}
            </button>
          </div>

          {/* Dégradé en bas du Hero */}
          <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-20">
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            
            {/* Indicateur de scroll en forme de souris */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="w-5 h-8 border-2 border-gray-400/50 rounded-full p-1">
                <div className="w-1 h-2 bg-gray-400/80 rounded-full mx-auto animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>

        {/* OPTIONS DE FINANCEMENT */}
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">{t('financing.options.title')}</h2>
              <p className="text-xl text-gray-300">{t('financing.options.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {financingOptions.map((option, index) => (
                <div 
                  key={option.title}
                  className={`bg-gray-800 rounded-xl p-8 border border-gray-300/20 transform transition-all duration-500 hover:scale-105 hover:border-gray-300/40 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{option.title}</h3>
                  <p className="text-gray-300 mb-6">{option.description}</p>
                  <ul className="space-y-3">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-gray-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESSUS */}
        <section className="py-20 bg-black relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">{t('financing.process.title')}</h2>
              <p className="text-xl text-gray-300">{t('financing.process.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`relative transform transition-all duration-500 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-gray-800 rounded-xl p-8 border border-gray-300/20 h-full">
                    <div className="text-5xl font-bold text-gray-300 mb-4">{step.number}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-px bg-gray-300/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Modal */}
        <Modal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        >
          <ContactForm />
        </Modal>

        <Footer />
      </div>
    </div>
  );
};

export default FinancementPage; 