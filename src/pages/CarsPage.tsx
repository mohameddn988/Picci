import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';
import { Transition } from '@headlessui/react';
import { carsData } from '../data/carsData';
import CarDetailsModal from '../components/CarDetailsModal';
import Modal from '../components/Modal';
import ContactForm from '../components/ContactForm';

// Obtenir les marques uniques
const uniqueBrands = [...new Set(carsData.map(car => car.brand))].sort();

interface CarCardProps {
  car: typeof carsData[0];
  delay: number;
  isVisible: boolean;
  onViewDetails: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, delay, isVisible, onViewDetails }) => {
  const { t } = useLanguage();
  return (
    <div 
      className={`bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500/30 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:shadow-lg hover:shadow-red-500/10 group`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Car Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={car.images.main}
          alt={t('cars.names.' + car.id, car.name)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-sm font-bold">
          {car.year}
        </div>
      </div>
      
      {/* Car Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
          {t('cars.names.' + car.id, car.name)}
        </h3>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-gray-500 text-xs mb-1">{t('cars.card.price')}</div>
            <div className="text-red-500 font-bold">{car.price}</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">{t('cars.card.mileage')}</div>
            <div className="text-white">{car.mileage}</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">{t('cars.card.fuel')}</div>
            <div className="text-white">{t('cars.fuel.' + car.fuel.toLowerCase(), car.fuel)}</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">{t('cars.card.year')}</div>
            <div className="text-white">{car.year}</div>
          </div>
        </div>
        
        <button 
          onClick={onViewDetails}
          className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-2 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 font-medium"
        >
          {t('cars.card.details')}
        </button>
      </div>
    </div>
  );
};

const CarsPage: React.FC = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [filters, setFilters] = useState({ brand: '', mileage: '', price: '' });
  const [selectedCar, setSelectedCar] = useState<typeof carsData[0] | null>(null);
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

  // Filtres dynamiques
  const filteredCars = carsData.filter(car => {
    let ok = true;
    if (filters.brand && car.brand !== filters.brand) ok = false;
    if (filters.mileage && parseInt(car.mileage) > parseInt(filters.mileage)) ok = false;
    if (filters.price && parseInt(car.price.replace(/[^0-9]/g, '')) > parseInt(filters.price)) ok = false;
    return ok;
  });

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
        <Navbar logo={assets.logoNav} siteName="TigerBec Cars" />

        {/* HERO SECTION */}
        <section 
          className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
          style={{ transform: `translateY(${-scrollY}px)` }}
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <div className="relative h-full w-full">
              <img 
                src="/Picci_9.jpg"
                alt={t('cars.hero.image.alt')}
                className="w-full h-full object-cover object-center opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10"></div>
            </div>
          </div>

          {/* Hero content */}
          <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              <span className="block text-white animate-fade-in-down" style={{animationDelay: '0ms', animationDuration: '700ms'}}>{t('cars.hero.title.find')}</span>
              <span className="block text-blue-500 animate-fade-in-down" style={{animationDelay: '300ms', animationDuration: '700ms'}}>{t('cars.hero.title.choose')}</span>
              <span className="block text-red-500 animate-fade-in-down" style={{animationDelay: '600ms', animationDuration: '700ms'}}>{t('cars.hero.title.drive')}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-6">
              {t('cars.hero.subtitle')}
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

        {/* CARS LISTING SECTION */}
        <section className="py-16 sm:py-20 bg-black relative overflow-hidden" id="catalog">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Nos Véhicules Disponibles
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Explorez notre sélection de voitures d'occasion premium, toutes inspectées et garanties.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Panel */}
              <div className="lg:w-64 lg:shrink-0">
                <div className="bg-gradient-to-b from-black via-gray-900 to-black border border-red-700/30 rounded-xl p-6 lg:sticky lg:top-24">
                  <h3 className="text-xl font-bold text-red-500 mb-6">{t('cars.filters.title')}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:space-y-6 lg:gap-0">
                    <div>
                      <label className="block text-gray-300 mb-2">{t('cars.filters.price.label')}</label>
                      <select 
                        className="w-full rounded bg-gray-800 text-white p-2 border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-200" 
                        value={filters.price} 
                        onChange={e => setFilters(f => ({...f, price: e.target.value}))}
                      >
                        <option value="">{t('cars.filters.price.all')}</option>
                        <option value="10000">10 000 $</option>
                        <option value="15000">15 000 $</option>
                        <option value="20000">20 000 $</option>
                        <option value="50000">50 000 $</option>
                        <option value="100000">100 000 $</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">{t('cars.filters.brand.label')}</label>
                      <select 
                        className="w-full rounded bg-gray-800 text-white p-2 border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-200" 
                        value={filters.brand} 
                        onChange={e => setFilters(f => ({...f, brand: e.target.value}))}
                      >
                        <option value="">{t('cars.filters.brand.all')}</option>
                        {uniqueBrands.map(brand => (
                          <option key={brand} value={brand}>{brand}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">{t('cars.filters.mileage.label')}</label>
                      <select 
                        className="w-full rounded bg-gray-800 text-white p-2 border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-200" 
                        value={filters.mileage} 
                        onChange={e => setFilters(f => ({...f, mileage: e.target.value}))}
                      >
                        <option value="">{t('cars.filters.mileage.all')}</option>
                        <option value="20000">20 000 km</option>
                        <option value="30000">30 000 km</option>
                        <option value="40000">40 000 km</option>
                        <option value="50000">50 000 km</option>
                      </select>
                    </div>
                    <div className="col-span-2 sm:col-span-3 lg:col-span-1">
                      <button 
                        className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold shadow-lg transition-all duration-300 focus:outline-none mt-2 lg:mt-0" 
                        onClick={() => setFilters({ brand: '', mileage: '', price: '' })}
                      >
                        {t('cars.filters.reset')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cars Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCars.map((car, index) => (
                    <CarCard 
                      key={car.id} 
                      car={car}
                      delay={index * 100}
                      isVisible={isLoaded}
                      onViewDetails={() => setSelectedCar(car)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('cars.why.title')}
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                {t('cars.why.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Garantie */}
              <div className={`bg-gray-900 p-6 rounded-lg border border-gray-800 transform transition-all duration-500 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '100ms' }}>
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('cars.why.warranty.title')}</h3>
                <p className="text-gray-400">
                  {t('cars.why.warranty.desc')}
                </p>
              </div>

              {/* Inspection */}
              <div className={`bg-gray-900 p-6 rounded-lg border border-gray-800 transform transition-all duration-500 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('cars.why.inspection.title')}</h3>
                <p className="text-gray-400">
                  {t('cars.why.inspection.desc')}
                </p>
              </div>

              {/* Financement */}
              <div className={`bg-gray-900 p-6 rounded-lg border border-gray-800 transform transition-all duration-500 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '300ms' }}>
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('cars.why.financing.title')}</h3>
                <p className="text-gray-400">
                  {t('cars.why.financing.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Modals */}
      {selectedCar && (
        <CarDetailsModal
          isOpen={!!selectedCar}
          onClose={() => setSelectedCar(null)}
          car={{
            ...selectedCar,
            name: t('cars.names.' + selectedCar.id, selectedCar.name),
            brand: t('cars.brands.' + selectedCar.brand.toLowerCase(), selectedCar.brand),
            description: t('cars.descriptions.' + selectedCar.brand.toLowerCase(), selectedCar.description),
            fuel: t('cars.fuel.' + selectedCar.fuel.toLowerCase(), selectedCar.fuel),
          }}
          images={selectedCar.images}
          contactButtonLabel={t('cars.modal.contact')}
        />
      )}

      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      >
        <ContactForm />
      </Modal>
    </div>
  );
};

export default CarsPage; 