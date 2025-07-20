import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';
import Modal from '../components/Modal';
import ContactForm from '../components/ContactForm';
import '../styles/catalog.css';

const CarwashPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar avec le même style que la page d'accueil */}
      <Navbar logo={assets.logoNav} siteName="Station Multi-Services" forceBlackBg={false} />
      
      {/* Hero Section avec parallax */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
        style={{ transform: `translateY(${-scrollY}px)` }}
      >
        {/* Background Image avec Overlay et Parallax */}
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            {/* Image pour petits écrans */}
            <img 
              src="/laveauto picci.jpg"
              alt={t('carwash.hero.image.alt')}
              className="w-full h-full object-cover object-center opacity-40 block md:hidden"
            />
            {/* Image pour grands écrans */}
            <img 
              src="/Picci_8.jpg"
              alt={t('carwash.hero.image.alt')}
              className="w-full h-full object-cover object-center opacity-40 hidden md:block"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10"></div>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
            <span className="text-white">{t('carwash.hero.title.come')}</span> 
            <span className="block text-blue-400">{t('carwash.hero.title.care')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-6">
            {t('carwash.hero.subtitle')}
          </p>
          <Link
            to="#services"
            onClick={scrollToServices}
            className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full text-lg shadow-lg hover:scale-105 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            {t('carwash.hero.cta')}
          </Link>
        </div>

        {/* Dégradé en bas du Hero */}
        <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-20">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          
          {/* Indicateur de scroll en forme de souris */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="w-5 h-8 border-2 border-blue-400/50 rounded-full p-1">
              <div className="w-1 h-2 bg-blue-400/80 rounded-full mx-auto animate-bounce"></div>
            </div>
          </div>
        </div>

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
      </section>

      {/* Section Services avec animation au scroll */}
      <section id="services" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Effet de particules en arrière-plan */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={`bg-particle-${i}`}
              className="absolute w-2 h-2 bg-blue-500 rounded-full animate-pulse"
          style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 transform transition-all duration-700 hover:scale-105">
            <h2 className="text-6xl font-bold text-white mb-6">{t('carwash.services.title')}</h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              {t('carwash.services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Colonne 1 - LAVAGE EXTÉRIEUR */}
            <div className="transform transition-all duration-500 hover:translate-y-[-10px]">
              <h3 className="text-2xl font-bold text-white mb-8 text-center relative catalog-column-title">
                {t('carwash.services.exterior.title')}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500"></div>
              </h3>
              
              <div className="space-y-8 mt-12">
                {/* Fiat - Mini */}
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold catalog-item-name">{t('carwash.services.exterior.fiat_mini.name')}</h4>
                    <span className="text-blue-500 font-bold catalog-item-price">{t('carwash.services.exterior.fiat_mini.price')}</span>
                  </div>
                  <div className="mt-4 h-px bg-gray-800"></div>
                </div>

                {/* Voiture */}
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold catalog-item-name">{t('carwash.services.exterior.voiture.name')}</h4>
                    <span className="text-blue-500 font-bold catalog-item-price">{t('carwash.services.exterior.voiture.price')}</span>
                  </div>
                  <div className="mt-4 h-px bg-gray-800"></div>
                </div>

                {/* Jeep */}
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold catalog-item-name">{t('carwash.services.exterior.jeep.name')}</h4>
                    <span className="text-blue-500 font-bold catalog-item-price">{t('carwash.services.exterior.jeep.price')}</span>
                  </div>
                  <div className="mt-4 h-px bg-gray-800"></div>
                </div>

                {/* 7 Passagers */}
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold catalog-item-name">{t('carwash.services.exterior.seven_pass.name')}</h4>
                    <span className="text-blue-500 font-bold catalog-item-price">{t('carwash.services.exterior.seven_pass.price')}</span>
                  </div>
                  <div className="mt-4 h-px bg-gray-800"></div>
                </div>

                {/* Pick-up */}
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold catalog-item-name">{t('carwash.services.exterior.pickup.name')}</h4>
                    <span className="text-blue-500 font-bold catalog-item-price">{t('carwash.services.exterior.pickup.price')}</span>
                  </div>
                  <div className="mt-4 h-px bg-gray-800"></div>
                </div>

                {/* Hummer - Escalade */}
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold catalog-item-name">{t('carwash.services.exterior.hummer.name')}</h4>
                    <span className="text-blue-500 font-bold catalog-item-price">{t('carwash.services.exterior.hummer.price')}</span>
                  </div>
                  <div className="mt-4 h-px bg-gray-800"></div>
                </div>

                {/* Camion - Fourgonnette */}
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold catalog-item-name">{t('carwash.services.exterior.camion.name')}</h4>
                    <span className="text-blue-500 font-bold catalog-item-price">{t('carwash.services.exterior.camion.price')}</span>
                  </div>
                  <div className="mt-4 h-px bg-gray-800"></div>
                </div>
              </div>
            </div>

            {/* Colonne 2 - LAVAGE INT. & EXT. */}
            <div className="transform transition-all duration-500 hover:translate-y-[-10px]">
              <h3 className="text-2xl font-bold text-white mb-8 text-center relative catalog-column-title">
                {t('carwash.services.interior.title')}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500"></div>
              </h3>
              
              <div className="space-y-8 mt-12">
                {/* Fiat - Mini */}
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold catalog-item-name">{t('carwash.services.interior.fiat_mini.name')}</h4>
                    <span className="text-blue-500 font-bold catalog-item-price">{t('carwash.services.interior.fiat_mini.price')}</span>
                  </div>
                  <div className="mt-4 h-px bg-gray-800"></div>
                </div>

                {/* Voiture */}
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold catalog-item-name">{t('carwash.services.interior.voiture.name')}</h4>
                    <span className="text-blue-500 font-bold catalog-item-price">{t('carwash.services.interior.voiture.price')}</span>
                  </div>
                  <div className="mt-4 h-px bg-gray-800"></div>
                </div>

                {/* Jeep */}
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold catalog-item-name">{t('carwash.services.interior.jeep.name')}</h4>
                    <span className="text-blue-500 font-bold catalog-item-price">{t('carwash.services.interior.jeep.price')}</span>
                  </div>
                  <div className="mt-4 h-px bg-gray-800"></div>
                </div>

                {/* 7 Passagers */}
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold catalog-item-name">{t('carwash.services.interior.seven_pass.name')}</h4>
                    <span className="text-blue-500 font-bold catalog-item-price">{t('carwash.services.interior.seven_pass.price')}</span>
                  </div>
                  <div className="mt-4 h-px bg-gray-800"></div>
                </div>

                {/* Pick-up */}
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold catalog-item-name">{t('carwash.services.interior.pickup.name')}</h4>
                    <span className="text-blue-500 font-bold catalog-item-price">{t('carwash.services.interior.pickup.price')}</span>
                  </div>
                  <div className="mt-4 h-px bg-gray-800"></div>
                </div>

                {/* Hummer - Escalade */}
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold catalog-item-name">{t('carwash.services.interior.hummer.name')}</h4>
                    <span className="text-blue-500 font-bold catalog-item-price">{t('carwash.services.interior.hummer.price')}</span>
                  </div>
                  <div className="mt-4 h-px bg-gray-800"></div>
                </div>

                {/* Camion - Fourgonnette */}
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold catalog-item-name">{t('carwash.services.interior.camion.name')}</h4>
                    <span className="text-blue-500 font-bold catalog-item-price">{t('carwash.services.interior.camion.price')}</span>
                  </div>
                  <div className="mt-4 h-px bg-gray-800"></div>
                </div>
              </div>
            </div>

            {/* Colonne 3 - SERVICES EXTRA */}
            <div className="transform transition-all duration-500 hover:translate-y-[-10px]">
              <h3 className="text-2xl font-bold text-white mb-8 text-center relative catalog-column-title">
                Services Extra
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500"></div>
              </h3>
              
              <div className="space-y-8 mt-12">
                {/* Armor All */}
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold catalog-item-name">{t('carwash.services.extra.armorall.name')}</h4>
                    <span className="text-green-500 font-bold catalog-item-price">{t('carwash.services.extra.armorall.price')}</span>
                  </div>
                  <p className="text-gray-400 text-sm catalog-item-description">{t('carwash.services.extra.armorall.description')}</p>
                  <div className="mt-4 h-px bg-gray-800"></div>
                </div>

                {/* Pneus */}
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold catalog-item-name">{t('carwash.services.extra.tires.name')}</h4>
                    <span className="text-green-500 font-bold catalog-item-price">{t('carwash.services.extra.tires.price')}</span>
                  </div>
                  <p className="text-gray-400 text-sm catalog-item-description">{t('carwash.services.extra.tires.description')}</p>
                  <div className="mt-4 h-px bg-gray-800"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bouton Rendez-vous avec animation */}
          <div className="text-center mt-16">
            <button 
              onClick={handleOpenContactModal}
              className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full text-lg shadow-lg hover:scale-105 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 group"
            >
              {t('carwash.services.cta')}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Section Processus avec animation */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 transform transition-all duration-700 hover:scale-105">{t('carwash.process.title')}</h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              {t('carwash.process.subtitle')}
            </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Étapes avec animation au survol */}
            {[
              { number: "1", titleKey: "carwash.process.step1.title", descKey: "carwash.process.step1.description" },
              { number: "2", titleKey: "carwash.process.step2.title", descKey: "carwash.process.step2.description" },
              { number: "3", titleKey: "carwash.process.step3.title", descKey: "carwash.process.step3.description" },
              { number: "4", titleKey: "carwash.process.step4.title", descKey: "carwash.process.step4.description" }
            ].map((step, index) => (
              <div 
                key={index} 
                className="text-center transform transition-all duration-500 hover:translate-y-[-10px]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:scale-110">
                  <span className="text-2xl">{step.number}</span>
                 </div>
                  <h3 className="text-xl font-bold text-white mb-4">{t(step.titleKey)}</h3>
                  <p className="text-gray-400">{t(step.descKey)}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modal de contact */}
      <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}>
        <ContactForm onClose={() => setIsContactModalOpen(false)} />
      </Modal>
    </div>
  );
};

// Ajout des styles d'animation
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
  }
  
  .animate-fadeInDown {
    animation: fadeInDown 1s ease-out forwards;
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 1s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default CarwashPage; 