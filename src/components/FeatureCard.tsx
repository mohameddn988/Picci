import React from 'react';

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, title, description }) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 md:p-8 hover:border-red-500/50 transition-all duration-300 group hover:transform hover:scale-105">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 group-hover:text-red-400 transition-colors duration-300">{number}</div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-red-400 transition-colors duration-300">{title}</h3>
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard; 