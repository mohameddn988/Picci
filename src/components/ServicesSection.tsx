import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Réinitialiser l'état au montage
    setVisibleCards([]);
    setIsLoaded(false);

    // Déclencher l'animation d'apparition immédiatement
    setIsLoaded(true);

    // Ajouter les cartes une par une
    services.forEach((service, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, service.id]);
      }, index * 100); // Réduire le délai entre chaque carte
    });
  }, []);

  const services = [
    {
      id: 1,
      title: t('home.services.barbershop.title'),
      description: t('home.services.barbershop.description'),
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"></path>
        </svg>
      ),
      path: "/barbershop",
      color: "from-red-600 to-red-800",
      hoverColor: "from-red-500 to-red-700",
      bgImage: "/Picci_9.jpg",
      accentColor: "red"
    },
    {
      id: 2,
      title: t('home.services.carwash.title'),
      description: t('home.services.carwash.description'),
      icon: (
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      ),
      path: "/carwash",
      color: "from-blue-600 to-blue-800",
      hoverColor: "from-blue-500 to-blue-700",
      bgImage: "/Picci_8.jpg",
      accentColor: "blue"
    },
    {
      id: 3,
      title: t('home.services.cars.title'),
      description: t('home.services.cars.description'),
      icon: (
        <svg className="w-10 h-10 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      path: "/cars",
      color: "from-amber-900 to-yellow-900",
      hoverColor: "from-amber-700 to-yellow-800",
      bgImage: "/Picci_14.jpg",
      accentColor: "amber"
    },
    {
      id: 4,
      title: t('home.services.mechanic.title'),
      description: t('home.services.mechanic.description'),
      icon: (
        <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      path: "/mechanic",
      color: "from-yellow-600 to-yellow-800",
      hoverColor: "from-yellow-500 to-yellow-700",
      bgImage: "/back.png",
      accentColor: "yellow"
    },
    {
      id: 5,
      title: t('home.services.financing.title'),
      description: t('home.services.financing.description'),
      icon: (
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V6c0-2.21 3.582-4 8-4s8 1.79 8 4v8c0 2.21-3.582 4-8 4z"></path>
        </svg>
      ),
      path: "/financement",
      color: "from-gray-700 to-gray-900",
      hoverColor: "from-gray-600 to-gray-800",
      bgImage: "/Picci_14.jpg",
      accentColor: "gray"
    },
    {
      id: 6,
      title: t('home.services.tct.title'),
      description: t('home.services.tct.description'),
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8M12 8v8" />
        </svg>
      ),
      path: "/cars#tct",
      color: "from-gray-800 to-gray-950",
      hoverColor: "from-gray-700 to-gray-900",
      bgImage: "/Picci_14.jpg",
      accentColor: "slate"
    }
  ];

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  const getAccentColorClass = (accentColor: string) => {
    switch (accentColor) {
      case 'red':
        return 'border-red-500 shadow-red-500/20';
      case 'blue':
        return 'border-blue-500 shadow-blue-500/20';
      case 'green':
        return 'border-green-500 shadow-green-500/20';
      case 'yellow':
        return 'border-yellow-500 shadow-yellow-500/20';
      case 'amber':
        return 'border-amber-700 shadow-amber-700/20';
      case 'fuchsia':
        return 'border-fuchsia-500 shadow-fuchsia-500/20';
      case 'cyan':
        return 'border-cyan-500 shadow-cyan-500/20';
      case 'gray':
        return 'border-gray-400 shadow-gray-400/20';
      case 'slate':
        return 'border-gray-600 shadow-gray-600/20';
      default:
        return 'border-blue-500 shadow-blue-500/20';
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            {t('home.services.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('home.services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative group overflow-hidden rounded-xl transition-all duration-500 transform 
              ${visibleCards.includes(service.id) ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
              hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl cursor-pointer bg-gray-900/40 backdrop-blur-sm
              border-2 border-transparent ${
                service.accentColor === 'red' ? 'hover:border-red-500 active:border-red-600' :
                service.accentColor === 'blue' ? 'hover:border-blue-500 active:border-blue-600' :
                service.accentColor === 'yellow' ? 'hover:border-yellow-500 active:border-yellow-600' :
                service.accentColor === 'amber' ? 'hover:border-amber-700 active:border-amber-800' :
                service.accentColor === 'gray' ? 'hover:border-gray-400 active:border-gray-500' :
                service.accentColor === 'slate' ? 'hover:border-gray-600 active:border-gray-700' :
                'hover:border-fuchsia-500 active:border-fuchsia-600'
              }
              active:scale-[0.98]`}
              style={{ 
                height: '450px'
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(service.path)}
            >
              {/* Background image with overlay */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <img 
                  src={service.bgImage} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-60 group-hover:opacity-70 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                {/* Border glow effect */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 group-hover:shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] group-active:shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]`}></div>
              </div>

              {/* Card content with animation */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div>
                  <div className={`w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 
                    transition-all duration-500 transform 
                    ${hoveredCard === service.id ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
                    ${
                      service.accentColor === 'red' ? 'group-hover:shadow-red-500/20' :
                      service.accentColor === 'blue' ? 'group-hover:shadow-blue-500/20' :
                      service.accentColor === 'yellow' ? 'group-hover:shadow-yellow-500/20' :
                      service.accentColor === 'amber' ? 'group-hover:shadow-amber-700/20' :
                      service.accentColor === 'gray' ? 'group-hover:shadow-gray-400/20' :
                      service.accentColor === 'slate' ? 'group-hover:shadow-gray-600/20' :
                      'group-hover:shadow-fuchsia-500/20'
                    }
                    group-active:scale-95 group-active:rotate-0`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 transform transition-all duration-500 group-hover:translate-x-1">{service.title}</h3>
                  <div className={`w-12 h-1 rounded-full mb-4 transition-all duration-500 transform 
                    ${hoveredCard === service.id ? 'w-20 scale-x-110' : 'w-12 scale-x-100'}
                    ${
                      service.accentColor === 'red' ? 'bg-red-500' :
                      service.accentColor === 'blue' ? 'bg-blue-500' :
                      service.accentColor === 'yellow' ? 'bg-yellow-500' :
                      service.accentColor === 'amber' ? 'bg-amber-700' :
                      service.accentColor === 'gray' ? 'bg-gray-400' :
                      service.accentColor === 'slate' ? 'bg-gray-600' :
                      'bg-fuchsia-500'
                    }
                    group-active:w-24 group-active:scale-x-90`}></div>
                  <p className="text-gray-200 leading-relaxed text-lg transform transition-all duration-500 group-hover:translate-x-1">{service.description}</p>
                </div>

                {/* Bottom action area */}
                <div className="mt-6">
                  <div className={`flex items-center text-white font-semibold transition-all duration-500 transform
                    ${hoveredCard === service.id ? 'translate-x-2' : 'translate-x-0'}
                    group-active:translate-x-3`}>
                    <span className="mr-2">{t('home.services.learnMore')}</span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-500 transform 
                        ${hoveredCard === service.id ? 'translate-x-2' : 'translate-x-0'}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;