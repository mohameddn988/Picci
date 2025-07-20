import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  // Fonction pour gérer le scroll vers des sections spécifiques sur la page d'accueil
  const scrollToSection = (sectionId: string) => {
    // Si on n'est pas sur la page d'accueil, naviguer d'abord vers celle-ci
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // Si on est déjà sur la page d'accueil, faire le scroll
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-cyan-400">
              {t('footer.brandName')}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              {t('footer.slogan')}
            </p>
            <div className="space-y-2">
              {/* Adresse cliquable */}
              <p className="text-white text-sm sm:text-base flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a 
                  href="https://www.google.com/maps/dir//11770+5e+Avenue+Montreal,+QC+H1E+2X4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-400 transition-colors duration-300 underline decoration-1 underline-offset-2"
                >
                  11770 5e Avenue, Montreal, QC H1E 2X4
                </a>
              </p>
              {/* Téléphone cliquable */}
              <p className="text-white text-sm sm:text-base flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:+15144943795" 
                  className="text-white hover:text-red-400 transition-colors duration-300 underline decoration-1 underline-offset-2"
                >
                  (514) 494-3795
                </a>
              </p>
              <p className="text-white text-sm sm:text-base flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:info@piccicarwash.ca" 
                  className="text-white hover:text-red-400 transition-colors duration-300 underline decoration-1 underline-offset-2"
                >
                  info@piccicarwash.ca
                </a>
              </p>
              <p className="text-white text-sm sm:text-base flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a 
                  href="https://www.instagram.com/piccifranchise/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-400 transition-colors duration-300 underline decoration-1 underline-offset-2"
                >
                  @piccifranchise
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/carwash" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  {t('footer.carwash')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/barbershop" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  {t('footer.barbershop')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/mechanic" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  {t('footer.mechanic')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/cars" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  {t('footer.carSales')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/financement" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  {t('footer.financing')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/tct" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  {t('footer.tct')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">
              {t('footer.openingHours')}
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm sm:text-base">{t('footer.everyDay')}</span>
                <span className="text-white text-sm sm:text-base font-medium">8:00 - 18:00</span>
              </div>
              <div className="mt-4 py-2 px-3 bg-green-500/20 rounded-lg inline-flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">{t('footer.openNow')}</span>
              </div>
            </div>
            
            {/* Contact Button */}
            <div className="mt-6">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                {t('footer.contactUs')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Picci. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 