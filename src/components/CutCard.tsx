import React from 'react';
import type { Cut } from '../data/cutsData';
import { useLanguage } from '../contexts/LanguageContext';

interface CutCardProps {
  cut: Cut;
  onSelect: () => void;
}

const CutCard: React.FC<CutCardProps> = ({ cut, onSelect }) => {
  const { t } = useLanguage();
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return 'bg-green-600/90';
      case 'Intermédiaire': return 'bg-yellow-600/90';
      case 'Avancé': return 'bg-red-600/90';
      default: return 'bg-gray-600/90';
    }
  };

  const translateDifficulty = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return t('cutCard.difficulty.easy');
      case 'Intermédiaire': return t('cutCard.difficulty.intermediate');
      case 'Avancé': return t('cutCard.difficulty.advanced');
      default: return difficulty;
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-3 h-3 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div 
      className="group bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/20 cursor-pointer transform hover:scale-[1.02]" 
      onClick={onSelect}
    >
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={cut.imageSrc} 
            alt={cut.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="absolute top-3 left-3">
          <span className={`${getDifficultyColor(cut.difficulty)} backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-semibold`}>
            {translateDifficulty(cut.difficulty)}
          </span>
        </div>

        <div className="absolute top-3 right-3">
          <span className="bg-red-600/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-semibold">
            {t('cutCard.category.' + cut.category, cut.category)}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 flex items-center space-x-1">
          {renderStars(cut.popularity)}
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
          {t(cut.nameKey, cut.name)}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
          {t(cut.descriptionKey, cut.description)}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">{t('cutCard.duration')}</span>
            <span className="text-white text-sm font-semibold">{cut.duration}</span>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-red-400 mb-1">{cut.price}</div>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-all duration-300 transform hover:scale-105">
              {t('cutCard.book')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CutCard; 