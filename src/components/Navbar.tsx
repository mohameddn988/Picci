import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  logo: string;
  siteName?: string;
  forceBlackBg?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ logo, siteName, forceBlackBg }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const { currentLanguage, setCurrentLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServicesDropdown = () => setIsServicesDropdownOpen(!isServicesDropdownOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ferme le dropdown lorsqu'on clique en dehors
  useEffect(() => {
    const closeDropdown = () => {
      if (isServicesDropdownOpen) setIsServicesDropdownOpen(false);
    };

    document.body.addEventListener('click', closeDropdown);
    
    return () => {
      document.body.removeEventListener('click', closeDropdown);
    };
  }, [isServicesDropdownOpen]);

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'fr' ? 'en' : 'fr');
  };

  // Fonction pour scroll vers le haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fonction pour scroll vers une section
  const scrollToSection = (sectionId: string) => {
    // Si on n'est pas sur la page d'accueil, y naviguer d'abord
    if (location.pathname !== '/') {
      navigate('/');
      // Attendre que la page se charge puis scroller
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si on est déjà sur la page d'accueil, scroller directement
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Fonction pour naviguer vers une page
  const navigateToPage = (path: string) => {
    navigate(path);
  };

  // Fonction pour gérer les clics sur les liens
  const handleNavClick = (item: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Empêcher la propagation pour éviter de fermer le dropdown

    // Ne fermer le menu mobile que si ce n'est pas le dropdown des services
    if (item.type !== 'services-dropdown') {
      setIsMenuOpen(false);
    }

    switch (item.type) {
      case 'scroll-top':
        scrollToTop();
        break;
      case 'scroll-section':
        scrollToSection(item.target);
        break;
      case 'navigate':
        navigateToPage(item.href);
        break;
      case 'services-dropdown':
        toggleServicesDropdown();
        break;
    }
  };

  // Services dropdown click handler
  const handleServiceClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsServicesDropdownOpen(false);
    setIsMenuOpen(false);
    navigateToPage(path);
  };

  const navItems = [
    { 
      label: t('nav.home'), 
      type: location.pathname === '/' ? 'scroll-top' : 'navigate',
      href: '/',
      isActive: location.pathname === '/'
    },
    { 
      label: t('nav.catalog'), 
      type: 'services-dropdown',
      isActive: ['/barbershop', '/carwash', '/cars', '/mechanic', '/financement'].includes(location.pathname)
    },
    {
      label: 'TCT',
      type: 'navigate',
      href: '/tct',
      isActive: location.pathname === '/tct'
    },
    { 
      label: t('nav.about'), 
      type: 'scroll-section', 
      target: 'about',
      isActive: false // TODO: Détecter si on est dans la section about
    },
    { 
      label: t('nav.contact'), 
      type: 'scroll-section', 
      target: 'contact',
      isActive: false // TODO: Détecter si on est dans la section contact
    },
  ];

  // Options du dropdown de services
  const serviceOptions = [
    {
      label: t('nav.barbershop'),
      path: '/barbershop',
      isActive: location.pathname === '/barbershop'
    },
    {
      label: t('nav.carwash'),
      path: '/carwash',
      isActive: location.pathname === '/carwash'
    },
    {
      label: t('nav.cars'),
      path: '/cars',
      isActive: location.pathname === '/cars'
    },
    {
      label: t('nav.mechanic'),
      path: '/mechanic',
      isActive: location.pathname === '/mechanic'
    },
    {
      label: t('nav.financing'),
      path: '/financement',
      isActive: location.pathname === '/financement'
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed z-50 transition-all duration-700 ease-out ${
        forceBlackBg
          ? 'top-0 left-0 right-0 bg-black !bg-opacity-100 !backdrop-blur-none !shadow-none'
          : isScrolled 
            ? 'top-4 left-8 right-8 bg-black/20 backdrop-blur-2xl rounded-2xl shadow-xl shadow-black/30 scale-95 transform' 
            : 'top-0 left-0 right-0 bg-transparent scale-100 transform'
      }`}>
        {/* Gradient overlay for scrolled state */}
        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 rounded-2xl pointer-events-none"></div>
        )}
        
        {/* Glass effect background */}
        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-white/3 to-transparent rounded-2xl pointer-events-none"></div>
        )}

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
           <div className={`flex justify-between items-center transition-all duration-700 ease-out ${
             isScrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-18'
           }`}>
            
            {/* Logo Section - Enhanced */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={logo} 
                  alt={`Logo ${siteName}`}
                  className={`object-contain filter brightness-110 transition-all duration-700 ease-out ${
                    isScrolled ? 'h-8 w-8 lg:h-10 lg:w-10' : 'h-10 w-10 lg:h-12 lg:w-12'
                  }`} 
                />
              </div>
              
              <button 
                onClick={scrollToTop}
                className="group bg-transparent"
                style={{ background: 'none', border: 'none', boxShadow: 'none' }}
              >
                {/* Texte du nom du site supprimé, ne laisse que le logo */}
              </button>
            </div>

            {/* Desktop Navigation and Language */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Navigation Links */}
              {navItems.map((item, index) => (
                <div key={item.label} className="relative">
                  <button 
                    onClick={(e) => handleNavClick(item, e)}
                    className={`relative py-2 font-medium transition-all duration-700 ease-out group bg-transparent border-none outline-none ${
                      isScrolled ? 'text-sm lg:text-base' : 'text-base lg:text-lg'
                    } ${
                      item.isActive 
                        ? 'text-red-500' 
                        : 'text-gray-300 hover:text-red-500'
                    }`}
                    style={{ background: 'none', border: 'none', boxShadow: 'none' }}
                  >
                    {/* Text */}
                    <span className="tracking-wide relative z-10 transition-all duration-500 ease-out group-hover:scale-105 group-hover:drop-shadow-lg">
                      {item.label}
                    </span>
                    
                    {/* Animated underline from center */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-red-500 via-red-600 to-yellow-400 transition-all duration-500 ease-out shadow-lg shadow-red-500/50 ${
                      item.isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}></div>

                    {/* Dropdown arrow for services */}
                    {item.type === 'services-dropdown' && (
                      <span className="ml-1 inline-block transform transition-transform duration-300">
                        <svg 
                          className={`h-4 w-4 text-gray-300 group-hover:text-red-500 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    )}
                  </button>

                  {/* Services Dropdown */}
                  {item.type === 'services-dropdown' && isServicesDropdownOpen && (
                    <div 
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-gray-900/90 backdrop-blur-lg rounded-lg border border-gray-700 shadow-lg shadow-black/50 z-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {serviceOptions.map(service => (
                        <button
                          key={service.path}
                          onClick={(e) => handleServiceClick(service.path, e)}
                          className={`block w-full text-left px-4 py-3 text-sm transition-colors duration-300 ${
                            service.isActive 
                              ? 'text-red-500 bg-gray-800/50' 
                              : 'text-gray-300 hover:bg-gray-800/70 hover:text-red-500'
                          } first:rounded-t-lg last:rounded-b-lg border-b border-gray-700 last:border-0`}
                        >
                          {service.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
               
              {/* Language Toggle - Bordered Style */}
              <button
                onClick={toggleLanguage}
                className={`relative font-medium transition-all duration-700 ease-out group text-gray-300 hover:text-red-500 bg-transparent border border-gray-600 hover:border-red-500 rounded-lg outline-none ${
                  isScrolled ? 'px-3 py-1 text-xs lg:text-sm' : 'px-4 py-2 text-sm lg:text-base'
                }`}
              >
                <span className="tracking-wide relative z-10 transition-all duration-500 ease-out group-hover:scale-105 group-hover:drop-shadow-lg">
                  {currentLanguage === 'fr' ? 'EN' : 'FR'}
                </span>
              </button>
            </div>

            {/* Mobile Section - Enhanced */}
            <div className="lg:hidden flex items-center space-x-4">
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`font-medium transition-all duration-700 ease-out text-gray-300 hover:text-red-500 hover:scale-105 bg-transparent border border-gray-600 hover:border-red-500 rounded-lg outline-none ${
                  isScrolled ? 'px-2 py-1 text-xs' : 'px-3 py-2 text-sm'
                }`}
              >
                {currentLanguage === 'fr' ? 'EN' : 'FR'}
              </button>
              
              {/* Hamburger Menu - Clean */}
              <button
                onClick={toggleMenu}
                className={`transition-all duration-700 ease-out group bg-transparent border-none outline-none hover:scale-110 ${
                  isScrolled ? 'p-1' : 'p-2'
                }`}
                style={{ background: 'none', border: 'none', boxShadow: 'none' }}
                aria-expanded={isMenuOpen}
                aria-label={t('navbar.menuLabel')}
              >
                <svg
                  className={`text-gray-300 group-hover:text-red-500 transition-all duration-700 ease-out group-hover:scale-110 group-hover:drop-shadow-lg ${
                    isScrolled ? 'h-5 w-5' : 'h-6 w-6'
                  }`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Enhanced */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-40 bg-black/90 backdrop-blur-lg transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex justify-end p-6">
            <button
              onClick={toggleMenu}
              className={`text-gray-300 hover:text-red-500 focus:outline-none`}
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
          <div className="flex-grow flex flex-col justify-center items-center space-y-8 px-6 pb-16">
            {/* Main Nav Items */}
            {navItems.map((item) => (
              <div key={item.label} className="w-full">
                {item.type === 'services-dropdown' ? (
                  <div>
                    <button
                      onClick={(e) => handleNavClick(item, e)}
                      className={`w-full text-center text-2xl font-semibold py-2 ${
                        item.isActive ? 'text-red-500' : 'text-white hover:text-red-500'
                      } transition-colors duration-300 flex items-center justify-center`}
                    >
                      {item.label}
                      <svg 
                        className={`h-5 w-5 ml-2 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Mobile Services Submenu */}
                    {isServicesDropdownOpen && (
                      <div className="mt-4 space-y-3 bg-gray-800/30 rounded-lg py-4">
                        {serviceOptions.map(service => (
                          <button
                            key={service.path}
                            onClick={(e) => handleServiceClick(service.path, e)}
                            className={`w-full text-center text-xl py-2 ${
                              service.isActive ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
                            } transition-colors duration-300`}
                          >
                            {service.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={(e) => handleNavClick(item, e)}
                    className={`w-full text-center text-2xl font-semibold py-2 ${
                      item.isActive ? 'text-red-500' : 'text-white hover:text-red-500'
                    } transition-colors duration-300`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            
            {/* Additional elements can go here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar; 