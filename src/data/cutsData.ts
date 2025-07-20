export interface Cut {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: 'Classic' | 'Modern' | 'Beard' | 'Complete';
  imageSrc: string;
  difficulty: 'Facile' | 'Intermédiaire' | 'Avancé';
  popularity: number; // 1-5 étoiles
}

// Données des coupes - à remplacer par de vraies données et images
export const cuts: Cut[] = [
  {
    id: 'coupe-classique',
    name: 'Coupe Classique',
    description: 'Une coupe intemporelle qui met en valeur votre style personnel. Parfaite pour un look professionnel et élégant.',
    price: '35 CAD $',
    duration: '45 min',
    category: 'Classic',
    imageSrc: '/images/cuts/classic-cut.jpg', // À remplacer par une vraie image
    difficulty: 'Facile',
    popularity: 5
  },
  {
    id: 'coupe-moderne',
    name: 'Coupe Moderne',
    description: 'Un style contemporain avec des lignes nettes et des dégradés précis. Idéal pour un look branché.',
    price: '40 CAD $',
    duration: '50 min',
    category: 'Modern',
    imageSrc: '/images/cuts/modern-cut.jpg', // À remplacer par une vraie image
    difficulty: 'Intermédiaire',
    popularity: 4
  },
  {
    id: 'barbe-complete',
    name: 'Taille de Barbe Complète',
    description: 'Taille, forme et soin complet de votre barbe par nos experts. Inclut le nettoyage et l\'hydratation.',
    price: '25 CAD $',
    duration: '30 min',
    category: 'Beard',
    imageSrc: '/images/cuts/beard-trim.jpg', // À remplacer par une vraie image
    difficulty: 'Intermédiaire',
    popularity: 5
  },
  {
    id: 'coupe-barbe',
    name: 'Coupe + Barbe',
    description: 'Le service complet pour un look parfaitement coordonné. Coupe de cheveux et taille de barbe incluses.',
    price: '50 CAD $',
    duration: '75 min',
    category: 'Complete',
    imageSrc: '/images/cuts/cut-and-beard.jpg', // À remplacer par une vraie image
    difficulty: 'Avancé',
    popularity: 5
  },
  {
    id: 'fade-degrade',
    name: 'Fade Dégradé',
    description: 'Un dégradé progressif pour un style moderne et net. Technique de précision pour un résultat impeccable.',
    price: '38 CAD $',
    duration: '55 min',
    category: 'Modern',
    imageSrc: '/images/cuts/fade-cut.jpg', // À remplacer par une vraie image
    difficulty: 'Avancé',
    popularity: 4
  },
  {
    id: 'coupe-enfant',
    name: 'Coupe Enfant',
    description: 'Coupe spécialement adaptée aux enfants avec patience et délicatesse. Ambiance détendue garantie.',
    price: '20 CAD $',
    duration: '30 min',
    category: 'Classic',
    imageSrc: '/images/cuts/kid-cut.jpg', // À remplacer par une vraie image
    difficulty: 'Facile',
    popularity: 4
  }
];

// Fonctions utilitaires
export const getCutById = (id: string): Cut | undefined => {
  return cuts.find(cut => cut.id === id);
};

export const getCutsByCategory = (category: Cut['category']): Cut[] => {
  return cuts.filter(cut => cut.category === category);
};

export const getPopularCuts = (limit: number = 3): Cut[] => {
  return cuts
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, limit);
};

export const searchCuts = (query: string): Cut[] => {
  const lowercaseQuery = query.toLowerCase();
  return cuts.filter(cut => 
    cut.name.toLowerCase().includes(lowercaseQuery) ||
    cut.description.toLowerCase().includes(lowercaseQuery) ||
    cut.category.toLowerCase().includes(lowercaseQuery)
  );
}; 