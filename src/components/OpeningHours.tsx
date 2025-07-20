import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface OpeningHoursProps {
  openingTime: string; // format "HH:mm"
  closingTime: string; // format "HH:mm"
}

const OpeningHours: React.FC<OpeningHoursProps> = ({ openingTime, closingTime }) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const currentTime = now.getHours() * 60 + now.getMinutes();
      
      const [openHours, openMinutes] = openingTime.split(':').map(Number);
      const [closeHours, closeMinutes] = closingTime.split(':').map(Number);
      
      const openTimeInMinutes = openHours * 60 + openMinutes;
      const closeTimeInMinutes = closeHours * 60 + closeMinutes;
      
      setIsOpen(currentTime >= openTimeInMinutes && currentTime <= closeTimeInMinutes);
    };

    // Vérifier immédiatement
    checkIfOpen();

    // Mettre à jour toutes les minutes
    const interval = setInterval(checkIfOpen, 60000);

    return () => clearInterval(interval);
  }, [openingTime, closingTime]);

  return (
    <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">{t('openingHours.title')}</h3>
        <p className="text-gray-400">
          {t('openingHours.everyday')} {openingTime} - {closingTime}
        </p>
      </div>
      <div
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          isOpen
            ? 'bg-green-500/20 text-green-400'
            : 'bg-red-500/20 text-red-400'
        }`}
      >
        {isOpen ? t('openingHours.open') : t('openingHours.closed')}
      </div>
    </div>
  );
};

export default OpeningHours; 