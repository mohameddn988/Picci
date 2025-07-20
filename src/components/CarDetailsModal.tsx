import React, { useState } from 'react';
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
  const galleryImages = images.gallery;
  const { t } = useLanguage();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
            {/* Thumbnails */}
            <div className="flex gap-2 mt-4">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index ? 'border-red-500' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={t('cars.modal.gallery.alt', { number: index + 2 })} className="w-full h-full object-cover" />
                </button>
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
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CarDetailsModal; 