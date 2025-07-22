import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { useLanguage } from '../contexts/LanguageContext';

interface CarDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: {
    id: string;
    name: string;
    description: string;
    price: string;
    year: number;
    mileage: string;
    fuel: string;
    brand: string;
    images: {
      main: string;
      gallery: string[];
    };
  };
  images: {
    main: string;
    gallery: string[];
  };
  contactButtonLabel?: string;
}

const CarDetailsModal: React.FC<CarDetailsModalProps> = ({ isOpen, onClose, car, images, contactButtonLabel }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [thumbPage, setThumbPage] = useState(0);
  const galleryImages = images.gallery;
  const { t } = useLanguage();

  const THUMBS_PER_PAGE = 7;
  const totalThumbPages = Math.ceil(galleryImages.length / THUMBS_PER_PAGE);
  const getThumbPageForIndex = (idx: number) => Math.floor(idx / THUMBS_PER_PAGE);
  const startIdx = thumbPage * THUMBS_PER_PAGE;
  const endIdx = startIdx + THUMBS_PER_PAGE;
  const visibleThumbs = galleryImages.slice(startIdx, endIdx);

  const nextImage = () => {
    setCurrentImageIndex((prev) => {
      const nextIdx = (prev + 1) % galleryImages.length;
      setThumbPage(getThumbPageForIndex(nextIdx));
      return nextIdx;
    });
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => {
      const prevIdx = (prev - 1 + galleryImages.length) % galleryImages.length;
      setThumbPage(getThumbPageForIndex(prevIdx));
      return prevIdx;
    });
  };

  const goToThumbPage = (page: number) => {
    setThumbPage(page);
    setCurrentImageIndex(page * THUMBS_PER_PAGE);
  };

  const handleThumbClick = (idx: number) => {
    setCurrentImageIndex(idx);
    setThumbPage(getThumbPageForIndex(idx));
  };

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setThumbPage(0);
    }
  }, [isOpen, images.gallery]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-black p-6 rounded-xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={galleryImages[currentImageIndex]}
                alt={t('cars.modal.gallery.alt', { number: currentImageIndex + 2 })}
                className="w-full h-full object-cover"
              />
              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {/* Thumbnails - auto-paging, no manual nav buttons */}
            <div className="flex gap-2 mt-4" style={{ minWidth: `${7 * 5}rem`, maxWidth: `${7 * 5}rem` }}>
              {visibleThumbs.map((img, idx) => {
                const realIdx = startIdx + idx;
                return (
                  <button
                    key={realIdx}
                    onClick={() => handleThumbClick(realIdx)}
                    className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === realIdx ? 'border-red-500' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={t('cars.modal.gallery.alt', { number: realIdx + 2 })} className="w-full h-full object-cover" />
                  </button>
                );
              })}
              {/* Render empty slots if less than 7 thumbnails to keep width constant */}
              {Array.from({ length: Math.max(0, 7 - visibleThumbs.length) }).map((_, i) => (
                <div key={`empty-${i}`} className="w-20 h-16" />
              ))}
            </div>
          </div>

          {/* Car Details */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-2">{car.name}</h2>
            <div className="inline-block bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {car.brand}
            </div>
            <p className="text-gray-300 mb-6">{car.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-gray-400 text-sm">{t('cars.card.year')}</div>
                <div className="text-white font-semibold">{car.year}</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-gray-400 text-sm">{t('cars.card.mileage')}</div>
                <div className="text-white font-semibold">{car.mileage}</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-gray-400 text-sm">{t('cars.card.fuel')}</div>
                <div className="text-white font-semibold">{t(`cars.fuel.${car.fuel.toLowerCase()}`)}</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-gray-400 text-sm">{t('cars.card.price')}</div>
                <div className="text-white font-semibold">{car.price}</div>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                window.location.href = '/';
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300"
            >
              {contactButtonLabel || t('contactForm.form.submit')}
            </button>

            {/* Carfax Link */}
            <div className="mt-6 text-center">
              {(() => {
                let carfaxUrl = '';
                if (car.id === 'C') {
                  carfaxUrl = 'https://vhr.carfax.ca/?id=%2FbKin%20dnOPJU7PBQovOLg2e8XiTcc%20Y%2F';
                } else if (car.id === 'A') {
                  carfaxUrl = 'https://vhr.carfax.ca/?id=%2FYx3EKAxXFLqDentlV8jRD5hGV6lw2Cj';
                } else {
                  carfaxUrl = 'https://vhr.carfax.ca/?id=%2FbKin%20dnOPJU7PBQovOLg2e8XiTcc%20Y%2F';
                }
                return (
                  <a
                    href={carfaxUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-blue-400 hover:text-blue-600 underline text-lg font-semibold transition-colors duration-200"
                  >
                    Voir le rapport Carfax
                  </a>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CarDetailsModal; 