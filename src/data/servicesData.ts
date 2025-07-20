export interface Service {
  name: string;
  price: string;
  description: string;
  nameKey: string;
  descriptionKey: string;
}

export interface ServiceCategory {
  title: string;
  titleKey: string;
  services: Service[];
}

export const servicesData: ServiceCategory[] = [
  {
    title: "LAVAGE EXTÉRIEUR",
    titleKey: "services.category.exterior",
    services: [
      {
        name: "Lavage Express",
        nameKey: "services.express.name",
        price: "25 CAD $",
        description: "Lavage extérieur complet avec séchage à la main",
        descriptionKey: "services.express.description"
      },
      {
        name: "Lavage Premium",
        nameKey: "services.premium.name",
        price: "35 CAD $",
        description: "Lavage extérieur + protection céramique express",
        descriptionKey: "services.premium.description"
      },
      {
        name: "Polish & Cire",
        nameKey: "services.polish.name",
        price: "120 CAD $",
        description: "Polish complet de la carrosserie + protection cire",
        descriptionKey: "services.polish.description"
      },
      {
        name: "Traitement Jantes",
        nameKey: "services.wheels.name",
        price: "30 CAD $",
        description: "Nettoyage approfondi des jantes et pneus",
        descriptionKey: "services.wheels.description"
      },
      {
        name: "Protection Céramique",
        nameKey: "services.ceramic.name",
        price: "250 CAD $",
        description: "Application protection céramique longue durée",
        descriptionKey: "services.ceramic.description"
      }
    ]
  },
  {
    title: "LAVAGE INTÉRIEUR",
    titleKey: "services.category.interior",
    services: [
      {
        name: "Aspiration Complète",
        nameKey: "services.vacuum.name",
        price: "30 CAD $",
        description: "Aspiration approfondie de l'habitacle et coffre",
        descriptionKey: "services.vacuum.description"
      },
      {
        name: "Nettoyage Sièges",
        nameKey: "services.seats.name",
        price: "45 CAD $",
        description: "Nettoyage en profondeur des sièges et tissus",
        descriptionKey: "services.seats.description"
      },
      {
        name: "Désinfection",
        nameKey: "services.sanitize.name",
        price: "35 CAD $",
        description: "Désinfection complète de l'habitacle",
        descriptionKey: "services.sanitize.description"
      },
      {
        name: "Cuir Treatment",
        nameKey: "services.leather.name",
        price: "55 CAD $",
        description: "Nettoyage et protection des surfaces en cuir",
        descriptionKey: "services.leather.description"
      }
    ]
  },
  {
    title: "SERVICES PREMIUM",
    titleKey: "services.category.premium",
    services: [
      {
        name: "Détailing Complet",
        nameKey: "services.detailing.name",
        price: "250 CAD $",
        description: "Service complet intérieur/extérieur avec protection",
        descriptionKey: "services.detailing.description"
      },
      {
        name: "Nettoyage Moteur",
        nameKey: "services.engine.name",
        price: "75 CAD $",
        description: "Nettoyage et dégraissage du compartiment moteur",
        descriptionKey: "services.engine.description"
      },
      {
        name: "Correction Peinture",
        nameKey: "services.paint.name",
        price: "180 CAD $",
        description: "Correction des défauts de peinture et micro-rayures",
        descriptionKey: "services.paint.description"
      },
      {
        name: "Protection Hivernale",
        nameKey: "services.winter.name",
        price: "150 CAD $",
        description: "Protection complète pour l'hiver",
        descriptionKey: "services.winter.description"
      }
    ]
  }
];

// Fonction utilitaire pour obtenir les 3 premiers services de chaque catégorie
export const getMiniServices = (): ServiceCategory[] => {
  return servicesData.map(category => ({
    ...category,
    services: category.services.slice(0, 3)
  }));
}; 