import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: { fr: string; en: string };
}

// Traductions temporaires - à compléter avec le contenu barbershop
const translations: Translations = {
  // Navigation
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.catalog': { fr: 'Services', en: 'Services' },
  'nav.products': { fr: 'Produits', en: 'Products' },
  'nav.about': { fr: 'À Propos', en: 'About' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  'nav.language': { fr: 'EN', en: 'FR' },
  'nav.barbershop': { fr: 'Barbershop', en: 'Barbershop' },
  'nav.carwash': { fr: 'Lave-Auto', en: 'Carwash' },
  'nav.cars': { fr: 'Vente d\'autos', en: 'Car Sales' },
  'nav.mechanic': { fr: 'Mécanique', en: 'Mechanic' },
  'nav.financing': { fr: 'Financement', en: 'Financing' },
  'nav.tct': { fr: 'TCT', en: 'TCT' },

  // Hero section - Carwash
  'hero.title': { fr: 'Clean. Shine. Drive.', en: 'Clean. Shine. Drive.' },
  'hero.heading': { fr: 'Clean. Shine. Drive.', en: 'Clean. Shine. Drive.' },
  'hero.subtitle': { fr: 'Offrez à votre véhicule l\'éclat qu\'il mérite, chaque jour', en: 'Give your vehicle the shine it deserves, every day' },
  'hero.description': { fr: 'Découvrez l\'excellence du lavage automobile avec nos techniques modernes et notre service premium.', en: 'Discover excellence in car washing with our modern techniques and premium service.' },
  'hero.cta': { fr: 'Faites-la briller maintenant', en: 'Make it shine now' },
  'hero.cta.scrollDown': { fr: 'Découvrir nos services', en: 'Discover our services' },

  // About section - Ricci Carwash
  'about.title': { fr: 'Plus qu\'un lavage, une tradition.', en: 'More than a wash, a tradition.' },
  'about.description': { fr: "Depuis plus de 10 ans, Picci Carwash transforme chaque lavage en rituel.", en: "For over 10 years, Picci Carwash transforms every wash into a ritual." },
  'about.description2': { fr: "Mousse riche, finition miroir, et technologie de pointe s'unissent pour révéler l'éclat authentique de votre voiture.", en: "Rich foam, mirror finish, and cutting-edge technology unite to reveal your car's authentic shine." },
  'about.slogan': { fr: "Mousse riche, finition miroir, et technologie de pointe s'unissent pour révéler l'éclat authentique de votre voiture.", en: "Rich foam, mirror finish, and cutting-edge technology unite to reveal your car's authentic shine." },
  'about.motto': { fr: "Speed. Style. Satisfaction.", en: "Speed. Style. Satisfaction." },
  'about.experience.text': { fr: "Vivez une expérience rapide, efficace et toujours au top, parce que votre voiture mérite mieux qu'un simple rinçage.", en: "Experience speed, efficiency and always top quality, because your car deserves better than a simple rinse." },
  'about.cta': { fr: "➤ Repartez propres. Brillez sur la route.", en: "➤ Leave clean. Shine on the road." },
  'about.stats.expertise.number': { fr: "+10 ans", en: "+10 years" },
  'about.stats.expertise.text': { fr: "d'expertise – De confiance dans le detailing auto", en: "of expertise – Trusted in auto detailing" },
  'about.stats.expertise.label': { fr: "Expertise", en: "Expertise" },
  'about.stats.vehicles.number': { fr: "+4000", en: "+4000" },
  'about.stats.vehicles.text': { fr: "véhicules lavés – Et toujours en croissance", en: "vehicles washed – And still growing" },
  'about.stats.vehicles.label': { fr: "Véhicules traités", en: "Vehicles Treated" },
  'about.stats.satisfaction.number': { fr: "99%", en: "99%" },
  'about.stats.satisfaction.text': { fr: "de clients satisfaits – Et ils reviennent !", en: "satisfied customers – And they come back!" },
  'about.stats.satisfaction.label': { fr: "Clients satisfaits", en: "Satisfied Customers" },
  'about.imageAlt': { fr: "Intérieur du centre de lavage Picci Carwash", en: "Inside Picci Carwash center" },

  // Features section - Barbershop
  'features.title': { fr: 'L\'Expertise Barbier : Votre Garantie de Style', en: 'Barber Expertise: Your Style Guarantee' },
  'features.subtitle': { fr: 'Trois piliers qui font notre réputation', en: 'Three pillars that make our reputation' },
  'features.experience.title': { fr: 'Maîtrise Artisanale', en: 'Artisan Mastery' },
  'features.experience.description': { fr: 'Des barbiers expérimentés qui maîtrisent l\'art traditionnel de la coiffure masculine.', en: 'Experienced barbers who master the traditional art of men\'s grooming.' },
  'features.quality.title': { fr: 'Produits Premium', en: 'Premium Products' },
  'features.quality.description': { fr: 'Nous utilisons exclusivement des produits haut de gamme pour des résultats exceptionnels.', en: 'We exclusively use high-end products for exceptional results.' },
  'features.quality.desc': { fr: 'Nous utilisons exclusivement des produits haut de gamme pour des résultats exceptionnels.', en: 'We exclusively use high-end products for exceptional results.' },
  'features.price.title': { fr: 'Tarifs Transparents', en: 'Transparent Pricing' },
  'features.price.desc': { fr: 'Des prix justes et transparents pour tous nos services, sans surprise.', en: 'Fair and transparent prices for all our services, no surprises.' },
  'features.service.title': { fr: 'Service Personnalisé', en: 'Personalized Service' },
  'features.service.description': { fr: 'Chaque client reçoit une attention particulière et des conseils sur mesure.', en: 'Each client receives special attention and tailor-made advice.' },
  'features.service.desc': { fr: 'Chaque client reçoit une attention particulière et des conseils sur mesure.', en: 'Each client receives special attention and tailor-made advice.' },

  // Catalog section - Services
  'catalog.title': { fr: 'Nos Services', en: 'Our Services' },
  'catalog.subtitle': { fr: 'Découvrez notre gamme complète de services de barbier professionnel', en: 'Discover our complete range of professional barber services' },
  'catalog.viewAllServices': { fr: 'Voir Tous les Services', en: 'View All Services' },

  // Contact section
  'contact.title': { fr: 'Prenons Rendez-vous', en: 'Let\'s Schedule' },
  'contact.subtitle': { fr: 'Réservez votre créneau dès maintenant', en: 'Book your slot now' },
  'contact.form.title': { fr: 'Formulaire de Contact', en: 'Contact Form' },
  'contact.form.name': { fr: 'Votre nom complet', en: 'Your full name' },
  'contact.form.namePlaceholder': { fr: 'Entrez votre nom complet', en: 'Enter your full name' },
  'contact.form.email': { fr: 'Votre adresse email', en: 'Your email address' },
  'contact.form.emailPlaceholder': { fr: 'Entrez votre adresse email', en: 'Enter your email address' },
  'contact.form.phone': { fr: 'Votre numéro de téléphone', en: 'Your phone number' },
  'contact.form.phonePlaceholder': { fr: 'Entrez votre numéro de téléphone', en: 'Enter your phone number' },
  'contact.form.service': { fr: 'Service souhaité', en: 'Desired service' },
  'contact.form.message': { fr: 'Votre message', en: 'Your message' },
  'contact.form.messagePlaceholder': { fr: 'Précisez vos préférences ou questions...', en: 'Specify your preferences or questions...' },
  'contact.form.submit': { fr: 'Prendre Rendez-vous', en: 'Book Appointment' },
  'contact.form.sending': { fr: 'Envoi en cours...', en: 'Sending...' },
  'contact.form.successMessage': { fr: 'Message envoyé avec succès !', en: 'Message sent successfully!' },
  'contact.info.title': { fr: 'Informations de Contact', en: 'Contact Information' },
  'contact.info.address': { fr: '123 Rue Principale, Montréal, QC H2X 1Y4', en: '123 Main Street, Montreal, QC H2X 1Y4' },
  'contact.info.address.title': { fr: 'Adresse', en: 'Address' },
  'contact.info.address.line1': { fr: '123 Rue Principale', en: '123 Main Street' },
  'contact.info.address.line2': { fr: 'Montréal, QC H2X 1Y4', en: 'Montreal, QC H2X 1Y4' },
  'contact.info.address.line3': { fr: 'Canada', en: 'Canada' },
  'contact.info.phone': { fr: '+1 (514) 123-4567', en: '+1 (514) 123-4567' },
  'contact.info.phone.title': { fr: 'Téléphone', en: 'Phone' },
  'contact.info.phone.number': { fr: '+1 (514) 123-4567', en: '+1 (514) 123-4567' },
  'contact.info.email.label': { fr: 'Email', en: 'Email' },
  'contact.info.email.title': { fr: 'Email', en: 'Email' },
  'contact.info.email.address': { fr: 'contact@barbershop.com', en: 'contact@barbershop.com' },
  'contact.info.hours': { fr: 'Horaires d\'ouverture', en: 'Opening Hours' },
  'contact.info.hours.title': { fr: 'Horaires d\'ouverture', en: 'Opening Hours' },
  'contact.info.hours.weekdays': { fr: 'Lun - Ven: 9h00 - 18h00', en: 'Mon - Fri: 9:00 AM - 6:00 PM' },
  'contact.info.hours.weekend': { fr: 'Sam: 8h00 - 17h00, Dim: Fermé', en: 'Sat: 8:00 AM - 5:00 PM, Sun: Closed' },
  'contact.info.hours.saturday': { fr: 'Samedi: 8h00 - 17h00', en: 'Saturday: 8:00 AM - 5:00 PM' },
  'contact.info.hours.sunday': { fr: 'Dimanche: Fermé', en: 'Sunday: Closed' },

  // HomePage sections
  'home.hero.title.line1': { fr: 'Fier de vous servir', en: 'Proud to serve you' },
  'home.hero.title.line2': { fr: 'depuis 1986', en: 'since 1986' },
  'home.hero.description': { fr: 'Un centre complet qui répond à tous vos besoins automobiles : lavage, mécanique, barbier et vente de véhicules', en: 'A complete station that meets all your automotive needs: car wash, mechanics, barber and vehicle sales' },
  'home.hero.cta': { fr: 'Découvrir Nos Services', en: 'Discover Our Services' },
  
  // Catalog section
  'home.catalog.title': { fr: 'Nos Services', en: 'Our Services' },
  'home.catalog.cta': { fr: 'Voir tous les services', en: 'View all services' },
  
  // About section
  'home.about.title': { fr: 'Un centre complet à votre service', en: 'A complete station at your service' },
  'home.about.description1': { fr: 'Notre station multi-services a été conçue pour répondre à tous vos besoins automobiles en un seul endroit. Que vous souhaitiez entretenir votre véhicule, lui redonner son éclat d\'origine, changer de look, ou même acquérir une nouvelle voiture, notre équipe de professionnels est là pour vous.', en: 'Our multi-service station was designed to meet all your automotive needs in one place. Whether you want to maintain your vehicle, restore its original shine, change your look, or even acquire a new car, our team of professionals is here for you.' },
  'home.about.description2': { fr: 'Avec plus de 10 ans d\'expertise dans le secteur automobile, nous mettons notre savoir-faire à votre service pour vous offrir une expérience complète et personnalisée.', en: 'With over 10 years of expertise in the automotive sector, we put our know-how at your service to offer you a complete and personalized experience.' },
  'home.about.motto': { fr: 'Qualité. Expertise. Satisfaction.', en: 'Quality. Expertise. Satisfaction.' },
  'home.about.stats.satisfaction.title': { fr: 'Satisfaction', en: 'Satisfaction' },
  'home.about.stats.satisfaction.description': { fr: '99% de nos clients sont satisfaits et nous recommandent à leurs proches.', en: '99% of our clients are satisfied and recommend us to their loved ones.' },
  'home.about.stats.expertise.title': { fr: 'Expertise', en: 'Expertise' },
  'home.about.stats.expertise.description': { fr: 'Plus de 20 professionnels qualifiés à votre service pour tous vos besoins.', en: 'More than 20 qualified professionals at your service for all your needs.' },
  'home.about.stats.innovation.title': { fr: 'Innovation', en: 'Innovation' },
  'home.about.stats.innovation.description': { fr: 'Des équipements modernes et des techniques avancées pour des résultats exceptionnels.', en: 'Modern equipment and advanced techniques for exceptional results.' },
  'home.about.stats.service.title': { fr: 'Service Client', en: 'Customer Service' },
  'home.about.stats.service.description': { fr: 'Un service client disponible 7j/7 pour répondre à toutes vos questions et besoins.', en: 'Customer service available 7 days a week to answer all your questions and needs.' },
  
  // Contact section
  'home.contact.title': { fr: 'Contactez-nous', en: 'Contact Us' },
  'home.contact.subtitle': { fr: 'Une question ? Un besoin spécifique ? Notre équipe est à votre écoute pour vous accompagner.', en: 'A question? A specific need? Our team is here to help you.' },
  'home.contact.form.title': { fr: 'Envoyez-nous un message', en: 'Send us a message' },
  'home.contact.form.name.label': { fr: 'Votre nom', en: 'Your name' },
  'home.contact.form.name.placeholder': { fr: 'Entrez votre nom', en: 'Enter your name' },
  'home.contact.form.email.label': { fr: 'Votre email', en: 'Your email' },
  'home.contact.form.email.placeholder': { fr: 'Entrez votre email', en: 'Enter your email' },
  'home.contact.form.message.label': { fr: 'Votre message', en: 'Your message' },
  'home.contact.form.message.placeholder': { fr: 'Comment pouvons-nous vous aider ?', en: 'How can we help you?' },
  'home.contact.form.submit': { fr: 'Envoyer le message', en: 'Send message' },

  'home.contact.info.title': { fr: 'Nos coordonnées', en: 'Our contact information' },
  'home.contact.info.address.title': { fr: 'Adresse', en: 'Address' },
  'home.contact.info.address.line1': { fr: '11770 5e Avenue', en: '11770 5e Avenue' },
  'home.contact.info.address.line2': { fr: 'Montreal, QC H1E 2X4', en: 'Montreal, QC H1E 2X4' },
  'home.contact.info.address.directions': { fr: 'Obtenir l\'itinéraire', en: 'Get directions' },
  'home.contact.info.phone.title': { fr: 'Téléphone', en: 'Phone' },
  'home.contact.info.phone.number': { fr: '(514) 494-3795', en: '(514) 494-3795' },

  'home.contact.hours.title': { fr: 'Heures d\'ouverture', en: 'Opening Hours' },
  'home.contact.hours.everyday': { fr: 'Tous les jours', en: 'Every day' },
  'home.contact.hours.time': { fr: '8:00 - 18:00', en: '8:00 - 18:00' },
  'home.contact.hours.open': { fr: 'Ouvert maintenant', en: 'Open now' },
  
  // Products section
  'home.products.title': { fr: 'Produits Premium', en: 'Premium Products' },
  'home.products.description': { fr: 'Prolongez l\'expérience barbershop chez vous avec notre sélection de produits haut de gamme. Qualité professionnelle pour un style impeccable au quotidien.', en: 'Extend the barbershop experience at home with our selection of high-end products. Professional quality for impeccable style every day.' },
  'home.products.cta': { fr: 'Découvrir tous nos produits', en: 'Discover all our products' },
  
  // Product Display
  'products.title': { fr: 'PRODUITS', en: 'PRODUCTS' },
  'products.description': { fr: 'Découvrez notre sélection de {count} produits premium pour le styling professionnel', en: 'Discover our selection of {count} premium products for professional styling' },
  'products.categories.coiffage': { fr: 'COIFFAGE', en: 'STYLING' },
  'products.categories.soins': { fr: 'SOINS', en: 'CARE' },
  'products.categories.nettoyage': { fr: 'NETTOYAGE', en: 'CLEANING' },
  
  // Cut Card
  'cutCard.duration': { fr: 'Durée', en: 'Duration' },
  'cutCard.book': { fr: 'Réserver', en: 'Book' },
  'cutCard.difficulty.easy': { fr: 'Facile', en: 'Easy' },
  'cutCard.difficulty.intermediate': { fr: 'Intermédiaire', en: 'Intermediate' },
  'cutCard.difficulty.advanced': { fr: 'Avancé', en: 'Advanced' },
  'cutCard.category.Homme': { fr: 'Homme', en: 'Men' },
  'cutCard.category.Enfant': { fr: 'Enfant', en: 'Child' },
  'cutCard.category.Femme': { fr: 'Femme', en: 'Women' },
  'cutCard.category.Classique': { fr: 'Classique', en: 'Classic' },
  'cutCard.category.Modern': { fr: 'Moderne', en: 'Modern' },
  'cutCard.category.Barber': { fr: 'Barbier', en: 'Barber' },
  
  // Navbar
  'navbar.siteName': { fr: 'BarberShop', en: 'BarberShop' },
  'navbar.menuLabel': { fr: 'Menu principal', en: 'Main menu' },
  
  // Common
  'common.seeMore': { fr: 'En savoir plus', en: 'Learn more' },
  'common.loading': { fr: 'Chargement...', en: 'Loading...' },
  'common.viewAll': { fr: 'Voir tous nos services', en: 'View all our services' },
  'common.learnMore': { fr: 'En savoir plus →', en: 'Learn more →' },
  
  // Footer
  'footer.brandName': { fr: 'Picci', en: 'Picci' },
  'footer.slogan': { fr: 'Peu importe l\'état, repartez propres', en: 'No matter the condition, leave clean' },
  'footer.description': { fr: 'Votre centre de lavage de confiance pour une expérience automobile authentique et moderne.', en: 'Your trusted car wash center for an authentic and modern automotive experience.' },
  'footer.quickLinks': { fr: 'Liens Rapides', en: 'Quick Links' },
  'footer.services': { fr: 'Services', en: 'Services' },
  'footer.contact': { fr: 'Contact', en: 'Contact' },
  'footer.followUs': { fr: 'Suivez-nous', en: 'Follow Us' },
  'footer.rights': { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
  'footer.email': { fr: 'contact@piccicarwash.com', en: 'contact@piccicarwash.com' },
  'footer.home': { fr: 'Accueil', en: 'Home' },
  'footer.carwash': { fr: 'Lave-Auto', en: 'Car Wash' },
  'footer.barbershop': { fr: 'Barbershop', en: 'Barbershop' },
  'footer.mechanic': { fr: 'Mécanique', en: 'Mechanic' },
  'footer.carSales': { fr: 'Vente d\'autos', en: 'Car Sales' },
  'footer.financing': { fr: 'Financement', en: 'Financing' },
  'footer.tct': { fr: 'TCT', en: 'TCT' },
  'footer.openingHours': { fr: 'Heures d\'ouverture', en: 'Opening Hours' },
  'footer.everyDay': { fr: 'Tous les jours', en: 'Every day' },
  'footer.openNow': { fr: 'Ouvert maintenant', en: 'Open now' },
  'footer.contactUs': { fr: 'Nous contacter', en: 'Contact us' },
  'footer.copyright': { fr: 'Tous droits réservés.', en: 'All rights reserved.' },

  // Social Media
  'social.follow': { fr: 'Suivre sur {platform}', en: 'Follow on {platform}' },

  // Service Categories
  'services.category.cutting': { fr: 'COUPE', en: 'CUTTING' },
  'services.category.beard': { fr: 'BARBE', en: 'BEARD' },
  'services.category.others': { fr: 'AUTRES', en: 'OTHERS' },

  // Services - CUTTING
  'services.cut.name': { fr: 'Coupe', en: 'Cut' },
  'services.cut.description': { fr: 'Coupe incluant l\'entretien des poils d\'oreilles et sourcils', en: 'Cutting including ear hair/eyebrow touching up' },
  'services.cutBeard.name': { fr: 'Coupe + Barbe', en: 'Cut + Beard' },
  'services.cutBeard.description': { fr: 'Coupe et barbe incluant poils d\'oreilles/sourcils', en: 'Cutting and beard including ear hair/eyebrows' },
  'services.cutChild.name': { fr: 'Coupe jusqu\'à 13 ans', en: 'Cutting up to 13 years' },
  'services.cutChild.description': { fr: 'Coupe pour enfants jusqu\'à 13 ans', en: 'Cutting for children up to 13 years old' },
  'services.cut60.name': { fr: 'Coupe 60+', en: 'Cut 60+' },
  'services.cut60.description': { fr: 'Coupe pour personnes de 60 ans ou plus', en: 'Cutting for people 60 years or older' },
  'services.clipper.name': { fr: 'Tondeuse 1 longueur', en: 'Hair clipper 1 length' },
  'services.clipper.description': { fr: 'Un réglage de tondeuse sur toute la tête', en: 'One clipper setting full head' },

  // Services - BEARD
  'services.beard.name': { fr: 'Barbe', en: 'Beard' },
  'services.beard.description': { fr: 'Façonnage et rasage de la barbe', en: 'Shaping and shaving the beard' },
  'services.classicShaving.name': { fr: 'Rasage Classique', en: 'Classic Shaving' },
  'services.classicShaving.description': { fr: 'Un rasage traditionnel', en: 'A classic shave' },
  'services.beardTrim.name': { fr: 'Taille Barbe + Styling', en: 'Beard Trim + Styling' },
  'services.beardTrim.description': { fr: 'Taille professionnelle et styling de barbe', en: 'Professional beard trimming and styling' },
  'services.mustache.name': { fr: 'Taille Moustache', en: 'Mustache Trim' },
  'services.mustache.description': { fr: 'Taille et façonnage précis de moustache', en: 'Precision mustache trimming and shaping' },

  // Services - OTHERS
  'services.vip.name': { fr: 'Traitement VIP', en: 'VIP Treatment' },
  'services.vip.description': { fr: 'Lavage, coupe, barbe, épilation oreilles et nez, choix de cire', en: 'Wash, cut, beard, wax ears and nose, choice of wax' },
  'services.hairWash.name': { fr: 'Lavage Cheveux + Styling', en: 'Hair Wash + Styling' },
  'services.hairWash.description': { fr: 'Service professionnel de lavage et styling', en: 'Professional hair wash and styling service' },
  'services.eyebrow.name': { fr: 'Épilation Sourcils', en: 'Eyebrow Trimming' },
  'services.eyebrow.description': { fr: 'Façonnage et épilation précise des sourcils', en: 'Precise eyebrow shaping and trimming' },
  'services.hotTowel.name': { fr: 'Traitement Serviette Chaude', en: 'Hot Towel Treatment' },
  'services.hotTowel.description': { fr: 'Traitement facial relaxant à la serviette chaude', en: 'Relaxing hot towel facial treatment' },

  // === CARWASH SERVICES ===
  'services.express.name': { fr: 'Lavage Express', en: 'Express Wash' },
  'services.express.description': { fr: 'Lavage extérieur complet avec séchage à la main', en: 'Full exterior wash with hand drying' },
  'services.premium.name': { fr: 'Lavage Premium', en: 'Premium Wash' },
  'services.premium.description': { fr: 'Lavage extérieur + protection céramique express', en: 'Exterior wash + express ceramic protection' },
  'services.polish.name': { fr: 'Polish & Cire', en: 'Polish & Wax' },
  'services.polish.description': { fr: 'Polish complet de la carrosserie + protection cire', en: 'Full body polish + wax protection' },
  'services.wheels.name': { fr: 'Traitement Jantes', en: 'Wheel Treatment' },
  'services.wheels.description': { fr: 'Nettoyage approfondi des jantes et pneus', en: 'Deep cleaning of wheels and tires' },
  'services.ceramic.name': { fr: 'Protection Céramique', en: 'Ceramic Protection' },
  'services.ceramic.description': { fr: 'Application protection céramique longue durée', en: 'Long-lasting ceramic protection application' },

  'services.vacuum.name': { fr: 'Aspiration Complète', en: 'Full Vacuum' },
  'services.vacuum.description': { fr: 'Aspiration approfondie de l\'habitacle et coffre', en: 'Deep vacuuming of cabin and trunk' },
  'services.seats.name': { fr: 'Nettoyage Sièges', en: 'Seat Cleaning' },
  'services.seats.description': { fr: 'Nettoyage en profondeur des sièges et tissus', en: 'Deep cleaning of seats and fabrics' },
  'services.sanitize.name': { fr: 'Désinfection', en: 'Sanitization' },
  'services.sanitize.description': { fr: 'Désinfection complète de l\'habitacle', en: 'Full cabin sanitization' },
  'services.leather.name': { fr: 'Cuir Treatment', en: 'Leather Treatment' },
  'services.leather.description': { fr: 'Nettoyage et protection des surfaces en cuir', en: 'Cleaning and protection of leather surfaces' },

  'services.detailing.name': { fr: 'Détailing Complet', en: 'Full Detailing' },
  'services.detailing.description': { fr: 'Service complet intérieur/extérieur avec protection', en: 'Full interior/exterior service with protection' },
  'services.engine.name': { fr: 'Nettoyage Moteur', en: 'Engine Cleaning' },
  'services.engine.description': { fr: 'Nettoyage et dégraissage du compartiment moteur', en: 'Engine compartment cleaning and degreasing' },
  'services.paint.name': { fr: 'Correction Peinture', en: 'Paint Correction' },
  'services.paint.description': { fr: 'Correction des défauts de peinture et micro-rayures', en: 'Correction of paint defects and micro-scratches' },
  'services.winter.name': { fr: 'Protection Hivernale', en: 'Winter Protection' },
  'services.winter.description': { fr: 'Protection complète pour l\'hiver', en: 'Complete winter protection' },

  // Product descriptions
  'products.descriptions.level3HairConditioner': { fr: 'Après-shampoing nourrissant pour tous types de cheveux. Il revitalise, hydrate et adoucit la fibre capillaire.', en: 'Nourishing conditioner for all hair types. It revitalizes, hydrates and softens the hair fiber.' },
  'products.descriptions.bullfrogBotanicalButter': { fr: 'Beurre nourrissant pour barbe et cheveux, enrichi en extraits botaniques. Apporte douceur, éclat et protection.', en: 'Nourishing butter for beard and hair, enriched with botanical extracts. Provides softness, shine and protection.' },
  'products.descriptions.daimonBarberTextureClay': { fr: 'Argile coiffante à tenue forte et fini mat. Idéal pour les coiffures structurées avec effet naturel.', en: 'Styling clay with strong hold and matte finish. Ideal for structured hairstyles with natural effect.' },
  'products.descriptions.layriteNaturalMatteCream': { fr: 'Crème coiffante à finition mate, tenue moyenne. Look naturel, souple et propre.', en: 'Styling cream with matte finish, medium hold. Natural, flexible and clean look.' },
  'products.descriptions.layriteOriginalPomade': { fr: 'Pomade classique à brillance modérée et tenue moyenne. S\'élimine à l\'eau, parfaite pour les styles rétro.', en: 'Classic pomade with moderate shine and medium hold. Water-soluble, perfect for retro styles.' },
  'products.descriptions.layriteSuperholdPomade': { fr: 'Tenue extrême pour cheveux épais ou difficiles à coiffer. Brillance moyenne, fixation longue durée.', en: 'Extreme hold for thick or difficult-to-style hair. Medium shine, long-lasting fixation.' },
  'products.descriptions.layriteSupershineCream': { fr: 'Crème coiffante haute brillance, tenue souple. Pour des styles lissés et élégants.', en: 'High-shine styling cream, flexible hold. For sleek and elegant styles.' },
  'products.descriptions.bullfrogSecretPotion': { fr: 'Gel douche multi-usage cheveux, barbe et corps. Nettoyage doux et parfum signature Bullfrog.', en: 'Multi-use hair, beard and body wash gel. Gentle cleansing and signature Bullfrog fragrance.' },
  'products.descriptions.captainFawcettSeaSaltSpray': { fr: 'Spray texturisant aux minéraux marins. Apporte volume et mouvement naturel sans alourdir.', en: 'Texturizing spray with marine minerals. Provides volume and natural movement without weighing down.' },
  'products.descriptions.dapperDanHairBodyShampoo': { fr: 'Shampoing 2-en-1 pour cheveux et corps. Mousse riche, nettoyage efficace et parfum vintage.', en: '2-in-1 shampoo for hair and body. Rich lather, effective cleansing and vintage fragrance.' },
  'products.descriptions.uppercutDeluxeClearScalp': { fr: 'Shampoing purifiant. Nettoie le cuir chevelu en profondeur tout en éliminant les résidus de coiffage.', en: 'Purifying shampoo. Deep cleanses the scalp while removing styling residue.' },
  'products.descriptions.reuzelSurfTonic': { fr: 'Tonique texturisant effet plage. Volume naturel, finition mate, parfaite base avant coiffage.', en: 'Beach-effect texturizing tonic. Natural volume, matte finish, perfect base before styling.' },
  'products.descriptions.oilCanGroomingStylingPowder': { fr: 'Poudre coiffante pour donner du volume, de la texture et une finition mate. Tenue légère et modulable.', en: 'Styling powder to add volume, texture and matte finish. Light and buildable hold.' },

  // Services section - Home
  'home.services.title': { fr: 'Nos Services', en: 'Our Services' },
  'home.services.subtitle': { fr: 'Un centre multi-service complet pour répondre à tous vos besoins automobiles', en: 'A complete multi-service station to meet all your automotive needs' },
  'home.services.learnMore': { fr: 'En savoir plus', en: 'Learn more' },

  // Service Cards
  'home.services.barbershop.title': { fr: 'Barbershop', en: 'Barbershop' },
  'home.services.barbershop.description': { fr: 'Notre équipe de barbiers professionnels vous offre des coupes stylées et soignées dans un cadre élégant et convivial.', en: 'Our team of professional barbers offers stylish and neat cuts in an elegant and friendly setting.' },

  'home.services.carwash.title': { fr: 'Carwash', en: 'Carwash' },
  'home.services.carwash.description': { fr: 'Nos services de lavage premium redonnent à votre véhicule son éclat d\'origine avec des équipements de dernière génération.', en: 'Our premium washing services restore your vehicle\'s original shine with state-of-the-art equipment.' },

  'home.services.cars.title': { fr: 'Vente d\'autos', en: 'Car Sales' },
  'home.services.cars.description': { fr: 'Découvrez notre sélection de véhicules d\'occasion soigneusement inspectés et garantis pour répondre à tous vos besoins.', en: 'Discover our selection of carefully inspected and guaranteed used vehicles to meet all your needs.' },

  'home.services.mechanic.title': { fr: 'Mécanique Auto', en: 'Auto Mechanic' },
  'home.services.mechanic.description': { fr: 'Notre atelier mécanique offre diagnostic, entretien et réparation par des techniciens certifiés et expérimentés.', en: 'Our mechanical workshop offers diagnosis, maintenance and repair by certified and experienced technicians.' },

  'home.services.financing.title': { fr: 'Financement', en: 'Financing' },
  'home.services.financing.description': { fr: 'Solutions de financement flexibles et adaptées à votre budget pour l\'achat de votre véhicule ou service.', en: 'Flexible financing solutions adapted to your budget for the purchase of your vehicle or service.' },

  'home.services.tct.title': { fr: 'TCT', en: 'TCT' },
  'home.services.tct.description': { fr: 'Acheter une voiture sans stress ? C\'est possible. Avec TCT, vous choisissez, on s\'occupe du reste.', en: 'Buy a car without stress? It\'s possible. With TCT, you choose, we take care of the rest.' },

  // Barbershop Page
  'barbershop.hero.title.style': { fr: 'Style.', en: 'Style.' },
  'barbershop.hero.title.elegance': { fr: 'Élégance.', en: 'Elegance.' },
  'barbershop.hero.title.confidence': { fr: 'Confiance.', en: 'Confidence.' },
  'barbershop.hero.subtitle': { fr: 'Des services de coiffure premium pour révéler votre meilleur style', en: 'Premium hairdressing services to reveal your best style' },
  'barbershop.hero.image.alt': { fr: 'Picci Barbershop - Services de coiffure premium', en: 'Picci Barbershop - Premium hairdressing services' },

  'barbershop.services.title': { fr: 'Fais ton pick, on s\'occupe du reste', en: 'Make your pick, we\'ll take care of the rest' },
  'barbershop.services.subtitle': { fr: 'Découvrez notre gamme complète de services de barbier professionnel', en: 'Discover our complete range of professional barber services' },

  // Service Categories
  'barbershop.services.categories.cutting': { fr: 'COUPE', en: 'CUTTING' },
  'barbershop.services.categories.beard': { fr: 'BARBE', en: 'BEARD' },
  'barbershop.services.categories.others': { fr: 'AUTRES', en: 'OTHERS' },

  // Cutting Services
  'barbershop.services.cutting.haircut.name': { fr: 'Coupe de cheveux', en: 'Haircut' },
  'barbershop.services.cutting.haircut.description': { fr: 'Coupe incluant l\'entretien des poils d\'oreilles et sourcils', en: 'Haircut including ear hair and eyebrow maintenance' },
  'barbershop.services.cutting.haircut.price': { fr: '35 $', en: '$35' },

  'barbershop.services.cutting.haircut_beard.name': { fr: 'Cire et masque', en: 'Wax and mask' },
  'barbershop.services.cutting.haircut_beard.description': { fr: 'Soin du visage avec cire et masque', en: 'Facial care with wax and mask' },
  'barbershop.services.cutting.haircut_beard.price': { fr: '20 $', en: '$20' },

  'barbershop.services.cutting.kids.name': { fr: 'Enfant', en: 'Child' },
  'barbershop.services.cutting.kids.description': { fr: 'Coupe pour enfants', en: 'Haircut for children' },
  'barbershop.services.cutting.kids.price': { fr: '30 $', en: '$30' },

  'barbershop.services.cutting.senior.name': { fr: 'Barbe', en: 'Beard' },
  'barbershop.services.cutting.senior.description': { fr: 'Taille de la barbe', en: 'Beard trim' },
  'barbershop.services.cutting.senior.price': { fr: '25 $', en: '$25' },

  'barbershop.services.cutting.clipper.name': { fr: 'Coupe de cheveux: service V.I.P', en: 'Haircut: VIP service' },
  'barbershop.services.cutting.clipper.description': { fr: 'Coupe de cheveux + Barbe + Lavage + Massage facial + Masque noir', en: 'Haircut + Beard + Wash + Facial massage + Black mask' },
  'barbershop.services.cutting.clipper.price': { fr: '50 $', en: '$50' },


  // Barbershop Page - Additional Sections
  'barbershop.booking.button': { fr: 'Prendre rendez-vous', en: 'Book an appointment' },
  'barbershop.art.title': { fr: 'L\'art du barbershop', en: 'The art of barbershop' },
  'barbershop.art.description': { fr: 'Chez Picci, nous croyons que chaque coupe est une œuvre d\'art. Notre équipe de barbiers passionnés combine expertise traditionnelle et tendances modernes pour créer votre style unique.', en: 'At Picci, we believe that every cut is a work of art. Our team of passionate barbers combines traditional expertise with modern trends to create your unique style.' },
  'barbershop.art.experience': { fr: 'ans d\'expérience', en: 'years of experience' },
  'barbershop.art.clients': { fr: 'clients satisfaits', en: 'satisfied clients' },
  'barbershop.art.styles': { fr: 'styles différents', en: 'different styles' },

  // Carwash Page
  'carwash.hero.title.come': { fr: 'Venez comme vous êtes,', en: 'Come as you are,' },
  'carwash.hero.title.care': { fr: 'on s\'en occupe', en: 'we\'ll take care of it' },
  'carwash.hero.subtitle': { fr: 'L\'excellence du lavage automobile à votre service. Une expérience premium pour votre véhicule.', en: 'Automotive washing excellence at your service. A premium experience for your vehicle.' },
  'carwash.hero.cta': { fr: 'Découvrir nos services', en: 'Discover our services' },
  'carwash.hero.image.alt': { fr: 'Lave-auto Picci', en: 'Picci Carwash' },

  'carwash.services.title': { fr: 'NOS SERVICES', en: 'OUR SERVICES' },
  'carwash.services.subtitle': { fr: 'Découvrez notre gamme complète de services de lavage professionnel', en: 'Discover our complete range of professional washing services' },

  // Exterior Washing Services
 // Exterior and Interior Car Wash Services

'carwash.services.exterior.title': { fr: 'LAVAGE EXTÉRIEUR', en: 'EXTERIOR WASHING' },

'carwash.services.exterior.fiat_mini.name': { fr: 'Fiat - Mini', en: 'Fiat - Mini' },
'carwash.services.exterior.fiat_mini.price': { fr: '15 $', en: '$15' },

'carwash.services.exterior.voiture.name': { fr: 'Voiture', en: 'Car' },
'carwash.services.exterior.voiture.price': { fr: '17 $', en: '$17' },

'carwash.services.exterior.jeep.name': { fr: 'Jeep', en: 'Jeep' },
'carwash.services.exterior.jeep.price': { fr: '20 $', en: '$20' },

'carwash.services.exterior.seven_pass.name': { fr: '7 Passagers', en: '7 Passengers' },
'carwash.services.exterior.seven_pass.price': { fr: '20 $', en: '$20' },

'carwash.services.exterior.pickup.name': { fr: 'Pick-up', en: 'Pickup' },
'carwash.services.exterior.pickup.price': { fr: '25 $', en: '$25' },

'carwash.services.exterior.hummer.name': { fr: 'Hummer - Escalade', en: 'Hummer - Escalade' },
'carwash.services.exterior.hummer.price': { fr: '25 $', en: '$25' },

'carwash.services.exterior.camion.name': { fr: 'Camion - Fourgonnette', en: 'Truck - Van' },
'carwash.services.exterior.camion.price': { fr: '35 $', en: '$35' },


'carwash.services.interior.title': { fr: 'LAVAGE INT. & EXT.', en: 'INT. & EXT. WASH' },

'carwash.services.interior.fiat_mini.name': { fr: 'Fiat - Mini', en: 'Fiat - Mini' },
'carwash.services.interior.fiat_mini.price': { fr: '20 $', en: '$20' },

'carwash.services.interior.voiture.name': { fr: 'Voiture', en: 'Car' },
'carwash.services.interior.voiture.price': { fr: '25 $', en: '$25' },

'carwash.services.interior.jeep.name': { fr: 'Jeep', en: 'Jeep' },
'carwash.services.interior.jeep.price': { fr: '30 $', en: '$30' },

'carwash.services.interior.seven_pass.name': { fr: '7 Passagers', en: '7 Passengers' },
'carwash.services.interior.seven_pass.price': { fr: '35 $', en: '$35' },

'carwash.services.interior.pickup.name': { fr: 'Pick-up', en: 'Pickup' },
'carwash.services.interior.pickup.price': { fr: '40 $', en: '$40' },

'carwash.services.interior.hummer.name': { fr: 'Hummer - Escalade', en: 'Hummer - Escalade' },
'carwash.services.interior.hummer.price': { fr: '40 $', en: '$40' },

'carwash.services.interior.camion.name': { fr: 'Camion - Fourgonnette', en: 'Truck - Van' },
'carwash.services.interior.camion.price': { fr: '50 $', en: '$50' },


// Extra Service

'carwash.services.extra.armorall.name': { fr: 'Armor All', en: 'Armor All' },
'carwash.services.extra.armorall.description': { fr: 'Pneu extérieur', en: 'Exterior tire' },
'carwash.services.extra.armorall.price': { fr: 'GRATUIT', en: 'FREE' },

'carwash.services.extra.tires.name': { fr: 'Pneus', en: 'Tires' },
'carwash.services.extra.tires.description': { fr: 'Pneu intérieur et extérieur', en: 'Interior and exterior tire' },
'carwash.services.extra.tires.price': { fr: '2 $', en: '$2' },


  'carwash.services.cta': { fr: 'PRENDRE RENDEZ-VOUS', en: 'BOOK AN APPOINTMENT' },

  // Carwash Process Section
  'carwash.process.title': { fr: 'NOTRE PROCESSUS', en: 'OUR PROCESS' },
  'carwash.process.subtitle': { fr: 'Un service minutieux en 4 étapes pour des résultats exceptionnels', en: 'A meticulous 4-step service for exceptional results' },

  'carwash.process.step1.title': { fr: 'Inspection', en: 'Inspection' },
  'carwash.process.step1.description': { fr: 'Évaluation détaillée de l\'état du véhicule et identification des zones nécessitant une attention particulière', en: 'Detailed assessment of the vehicle\'s condition and identification of areas requiring special attention' },

  'carwash.process.step2.title': { fr: 'Préparation', en: 'Preparation' },
  'carwash.process.step2.description': { fr: 'Pré-lavage et décontamination pour éliminer les saletés tenaces et les contaminants de surface', en: 'Pre-wash and decontamination to remove stubborn dirt and surface contaminants' },

  'carwash.process.step3.title': { fr: 'Nettoyage', en: 'Cleaning' },
  'carwash.process.step3.description': { fr: 'Lavage minutieux avec des produits premium et techniques spécialisées selon le type de surface', en: 'Thorough washing with premium products and specialized techniques according to surface type' },

  'carwash.process.step4.title': { fr: 'Protection', en: 'Protection' },
  'carwash.process.step4.description': { fr: 'Application de protections adaptées pour préserver l\'éclat et la durabilité du traitement', en: 'Application of suitable protections to preserve the shine and durability of the treatment' },

  // === TCT PAGE ===
  'tct.comingSoon': { fr: 'Bientôt Disponible', en: 'Coming Soon' },
  'tct.description.1': { fr: 'Oubliez tout ce que vous pensiez savoir sur l\'achat automobile.', en: 'Forget everything you thought you knew about car buying.' },
  'tct.description.2': { fr: 'Tiger Canada Trust LTD redéfinit les règles du jeu.', en: 'Tiger Canada Trust LTD is redefining the rules of the game.' },
  'tct.description.3': { fr: 'Une plateforme innovante, une transparence totale, et un service haut de gamme — tout cela pour une expérience fluide, rapide et sans stress.', en: 'An innovative platform, total transparency, and premium service — all for a smooth, fast, and stress-free experience.' },
  'tct.description.4': { fr: 'Que vous achetiez ou vendiez, vous êtes entre de bonnes mains.', en: 'Whether you\'re buying or selling, you\'re in good hands.' },
  'tct.description.5': { fr: 'Préparez-vous à entrer dans une nouvelle dimension de confiance, de technologie et de performance.', en: 'Prepare to enter a new dimension of trust, technology, and performance.' },
  'tct.description.6': { fr: 'L\'avenir de l\'automobile commence ici. Et il porte un nom : Tiger Canada Trust LTD', en: 'The future of automotive begins here. And it has a name: Tiger Canada Trust LTD' },
  'tct.video.browserNotSupported': { fr: 'Votre navigateur ne supporte pas la lecture de vidéos.', en: 'Your browser does not support video playback.' },
  'tct.contact.title': { fr: 'Contactez-nous pour en savoir plus', en: 'Contact us to learn more' },
  'tct.contact.subtitle': { fr: 'Laissez-nous vos coordonnées et nous vous recontacterons dès que notre plateforme sera disponible', en: 'Leave us your contact information and we will get back to you as soon as our platform is available' },
  'tct.contact.name': { fr: 'Nom', en: 'Name' },
  'tct.contact.email': { fr: 'Email', en: 'Email' },
  'tct.contact.message': { fr: 'Message', en: 'Message' },
  'tct.contact.submit': { fr: 'Envoyer', en: 'Submit' },
  'tct.contact.success': { fr: 'Votre message a été envoyé avec succès !', en: 'Your message has been sent successfully!' },

  // === FINANCING PAGE ===
  'financing.hero.title.1': { fr: 'Garantie', en: 'Financing' },
  'financing.hero.title.2': { fr: 'aux financements', en: 'guarantee' },
  'financing.hero.title.3': { fr: 'pour protéger votre achat', en: 'available to protect your purchase' },
  'financing.hero.subtitle': { fr: 'Des options de financement flexibles et adaptées à votre budget', en: 'Flexible financing options tailored to your budget' },
  'financing.cta.discuss': { fr: 'Discuter de mon financement', en: 'Discuss my financing' },
  'financing.options.title': { fr: 'Nos Options de Financement', en: 'Our Financing Options' },
  'financing.options.subtitle': { fr: 'Découvrez nos solutions adaptées à vos besoins', en: 'Discover our solutions tailored to your needs' },
  'financing.options.standard.title': { fr: 'Prêt Auto Standard', en: 'Standard Auto Loan' },
  'financing.options.standard.description': { fr: 'Financement classique avec des taux compétitifs et des durées flexibles de 12 à 84 mois.', en: 'Classic financing with competitive rates and flexible terms from 12 to 84 months.' },
  'financing.options.standard.features.1': { fr: 'Taux d\'intérêt avantageux', en: 'Advantageous interest rates' },
  'financing.options.standard.features.2': { fr: 'Durée de remboursement flexible', en: 'Flexible repayment term' },
  'financing.options.standard.features.3': { fr: 'Pas de pénalité de remboursement anticipé', en: 'No early repayment penalty' },
  'financing.options.standard.features.4': { fr: 'Montant de financement jusqu\'à 50 000 $', en: 'Financing amount up to $50,000' },
  'financing.options.lease.title': { fr: 'Location avec Option d\'Achat', en: 'Lease with Purchase Option' },
  'financing.options.lease.description': { fr: 'Profitez d\'une voiture neuve avec des mensualités réduites et la possibilité d\'achat en fin de contrat.', en: 'Enjoy a new car with reduced monthly payments and the option to purchase at the end of the contract.' },
  'financing.options.lease.features.1': { fr: 'Mensualités plus basses', en: 'Lower monthly payments' },
  'financing.options.lease.features.2': { fr: 'Option d\'achat à la fin du contrat', en: 'Purchase option at the end of the contract' },
  'financing.options.lease.features.3': { fr: 'Garantie véhicule neuf', en: 'New vehicle warranty' },
  'financing.options.lease.features.4': { fr: 'Possibilité de changer de véhicule régulièrement', en: 'Possibility to change vehicles regularly' },
  'financing.options.flexible.title': { fr: 'Financement Flexible', en: 'Flexible Financing' },
  'financing.options.flexible.description': { fr: 'Solutions adaptées pour les situations particulières avec des options de paiement personnalisées.', en: 'Customized solutions for special situations with personalized payment options.' },
  'financing.options.flexible.features.1': { fr: 'Acceptation plus facile', en: 'Easier acceptance' },
  'financing.options.flexible.features.2': { fr: 'Plans de paiement personnalisés', en: 'Personalized payment plans' },
  'financing.options.flexible.features.3': { fr: 'Possibilité de reporter des paiements', en: 'Possibility to defer payments' },
  'financing.options.flexible.features.4': { fr: 'Refinancement possible', en: 'Refinancing possible' },
  'financing.process.title': { fr: 'Notre Processus', en: 'Our Process' },
  'financing.process.subtitle': { fr: 'Simple, rapide et transparent', en: 'Simple, fast and transparent' },
  'financing.process.step1.title': { fr: 'Évaluation Financière', en: 'Financial Assessment' },
  'financing.process.step1.description': { fr: 'Analyse complète de votre situation financière pour déterminer la meilleure option.', en: 'Complete analysis of your financial situation to determine the best option.' },
  'financing.process.step2.title': { fr: 'Choix du Programme', en: 'Program Selection' },
  'financing.process.step2.description': { fr: 'Sélection du programme de financement le plus adapté à vos besoins.', en: 'Selection of the financing program best suited to your needs.' },
  'financing.process.step3.title': { fr: 'Documentation', en: 'Documentation' },
  'financing.process.step3.description': { fr: 'Préparation et signature des documents nécessaires.', en: 'Preparation and signing of necessary documents.' },
  'financing.process.step4.title': { fr: 'Approbation', en: 'Approval' },
  'financing.process.step4.description': { fr: 'Validation rapide de votre dossier par nos partenaires financiers.', en: 'Quick validation of your file by our financial partners.' },

  // === MECHANIC PAGE ===
  'mechanic.title': { fr: 'Services de Mécanique Automobile', en: 'Automotive Mechanical Services' },
  'mechanic.subtitle': { fr: 'Expertise et professionnalisme pour l\'entretien et la réparation de votre véhicule', en: 'Expertise and professionalism for the maintenance and repair of your vehicle' },
  'mechanic.search': { fr: 'Rechercher un service...', en: 'Search for a service...' },
  'mechanic.all': { fr: 'Tous les services', en: 'All services' },
  
  // Catégories
  'mechanic.categories.regular': { fr: 'Entretien Régulier', en: 'Regular Maintenance' },
  'mechanic.categories.brakes': { fr: 'Système de Freinage', en: 'Brake System' },
  'mechanic.categories.tires': { fr: 'Pneus et Roues', en: 'Tires and Wheels' },
  'mechanic.categories.suspension': { fr: 'Suspension et Direction', en: 'Suspension and Steering' },
  'mechanic.categories.electrical': { fr: 'Système Électrique', en: 'Electrical System' },
  'mechanic.categories.ac': { fr: 'Climatisation', en: 'Air Conditioning' },
  'mechanic.categories.transmission': { fr: 'Transmission', en: 'Transmission' },
  'mechanic.categories.engine': { fr: 'Moteur', en: 'Engine' },
  'mechanic.categories.emergency': { fr: 'Services d\'Urgence', en: 'Emergency Services' },
  'mechanic.categories.premium': { fr: 'Services Premium', en: 'Premium Services' },

  // Services - Entretien Régulier
  'mechanic.services.oil.name': { fr: 'Changement d\'huile', en: 'Oil Change' },
  'mechanic.services.oil.description': { fr: 'Vidange d\'huile avec filtre premium et inspection des niveaux.', en: 'Oil change with premium filter and fluid level inspection.' },
  'mechanic.services.tuneup.name': { fr: 'Mise au point complète', en: 'Complete Tune-up' },
  'mechanic.services.tuneup.description': { fr: 'Remplacement des bougies, filtres, et ajustement des systèmes.', en: 'Spark plugs and filters replacement, systems adjustment.' },
  'mechanic.services.inspection.name': { fr: 'Inspection multipoint', en: 'Multipoint Inspection' },
  'mechanic.services.inspection.description': { fr: 'Inspection complète de 50 points incluant tous les systèmes.', en: 'Complete 50-point inspection including all systems.' },

  // Services - Freins
  'mechanic.services.brakes.pads.name': { fr: 'Plaquettes avant', en: 'Front Brake Pads' },
  'mechanic.services.brakes.pads.description': { fr: 'Remplacement des plaquettes et inspection du système.', en: 'Brake pads replacement and system inspection.' },
  'mechanic.services.brakes.rotors.name': { fr: 'Disques et plaquettes', en: 'Rotors and Pads' },
  'mechanic.services.brakes.rotors.description': { fr: 'Remplacement complet des disques et plaquettes.', en: 'Complete replacement of rotors and pads.' },
  'mechanic.services.brakes.fluid.name': { fr: 'Purge des freins', en: 'Brake Fluid Flush' },
  'mechanic.services.brakes.fluid.description': { fr: 'Remplacement du liquide et purge du système.', en: 'Brake fluid replacement and system flush.' },

  // Services - Pneus
  'mechanic.services.tires.rotation.name': { fr: 'Changement saisonnier', en: 'Seasonal Change' },
  'mechanic.services.tires.rotation.description': { fr: 'Montage, équilibrage et installation des pneus.', en: 'Tire mounting, balancing and installation.' },
  'mechanic.services.alignment.name': { fr: 'Alignement 4 roues', en: '4-Wheel Alignment' },
  'mechanic.services.alignment.description': { fr: 'Alignement complet avec technologie 3D.', en: 'Complete alignment with 3D technology.' },

  // Services - Électrique
  'mechanic.services.diagnostic.name': { fr: 'Diagnostic électronique', en: 'Electronic Diagnostic' },
  'mechanic.services.diagnostic.description': { fr: 'Analyse complète des systèmes avec équipement pro.', en: 'Complete system analysis with pro equipment.' },
  'mechanic.services.battery.name': { fr: 'Batterie', en: 'Battery' },
  'mechanic.services.battery.description': { fr: 'Test et remplacement si nécessaire.', en: 'Testing and replacement if needed.' },

  // Services - Moteur
  'mechanic.services.cooling.name': { fr: 'Système de refroidissement', en: 'Cooling System' },
  'mechanic.services.cooling.description': { fr: 'Service complet du système de refroidissement.', en: 'Complete cooling system service.' },
  'mechanic.services.exhaust.name': { fr: 'Système d\'échappement', en: 'Exhaust System' },
  'mechanic.services.exhaust.description': { fr: 'Inspection et réparation du système d\'échappement.', en: 'Exhaust system inspection and repair.' },

  // Interface utilisateur
  'mechanic.duration.range': { fr: '{min}-{max} heures', en: '{min}-{max} hours' },
  'mechanic.duration.single': { fr: '{time} heure(s)', en: '{time} hour(s)' },
  'mechanic.book': { fr: 'Prendre rendez-vous', en: 'Book Appointment' },
  'mechanic.contact.title': { fr: 'Besoin d\'un service non listé ?', en: 'Need a service not listed?' },
  'mechanic.contact.description': { fr: 'Contactez-nous directement pour discuter de vos besoins spécifiques.', en: 'Contact us directly to discuss your specific needs.' },
  'mechanic.contact.button': { fr: 'Nous contacter', en: 'Contact us' },
  
  // Avantages
  'mechanic.advantages.fast.title': { fr: 'Service rapide', en: 'Fast Service' },
  'mechanic.advantages.fast.description': { fr: 'Nous valorisons votre temps et nous efforçons d\'offrir un service efficace sans compromettre la qualité du travail.', en: 'We value your time and strive to provide efficient service without compromising quality.' },

  // === CARS PAGE ===
  'cars.title': { fr: 'Trouvez.', en: 'Find.' },
  'cars.subtitle': { fr: 'Choisissez.', en: 'Choose.' },
  'cars.hero.title.find': { fr: 'Trouvez.', en: 'Find.' },
  'cars.hero.title.choose': { fr: 'Choisissez.', en: 'Choose.' },
  'cars.hero.title.drive': { fr: 'Roulez.', en: 'Drive.' },
  'cars.hero.subtitle': { fr: 'Découvrez notre sélection de véhicules d\'occasion soigneusement inspectés et garantis pour répondre à tous vos besoins.', en: 'Discover our selection of carefully inspected and guaranteed used vehicles to meet all your needs.' },
  'cars.hero.image.alt': { fr: 'Voiture d\'occasion à vendre', en: 'Used car for sale' },
  'cars.filters.title': { fr: 'Filtres', en: 'Filters' },
  'cars.filters.price.label': { fr: 'Prix maximum', en: 'Max price' },
  'cars.filters.price.all': { fr: 'Tous les prix', en: 'All prices' },
  'cars.filters.brand.label': { fr: 'Marque', en: 'Brand' },
  'cars.filters.brand.all': { fr: 'Toutes les marques', en: 'All brands' },
  'cars.filters.mileage.label': { fr: 'Kilométrage maximum', en: 'Max mileage' },
  'cars.filters.mileage.all': { fr: 'Tout kilométrage', en: 'All mileage' },
  'cars.filters.reset': { fr: 'Réinitialiser', en: 'Reset' },
  'cars.card.details': { fr: 'Voir détails', en: 'View details' },
  'cars.card.mileage': { fr: 'Kilométrage', en: 'Mileage' },
  'cars.card.fuel': { fr: 'Carburant', en: 'Fuel' },
  'cars.card.year': { fr: 'Année', en: 'Year' },
  'cars.card.price': { fr: 'Prix', en: 'Price' },

  'cars.catalog.title': { fr: 'Nos Véhicules Disponibles', en: 'Our Available Vehicles' },
  'cars.catalog.subtitle': { fr: 'Explorez notre sélection de voitures d\'occasion premium, toutes inspectées et garanties.', en: 'Explore our selection of premium used cars, all inspected and guaranteed.' },
  'cars.results.count': { fr: '{count} résultats trouvés', en: '{count} results found' },
  'cars.results.none': { fr: 'Aucun véhicule trouvé. Veuillez modifier vos filtres.', en: 'No vehicles found. Please modify your filters.' },
  'cars.contact.title': { fr: 'Vous ne trouvez pas ce que vous cherchez ?', en: 'Can\'t find what you\'re looking for?' },
  'cars.contact.description': { fr: 'Dites-nous ce que vous voulez, et nous le trouverons pour vous.', en: 'Tell us what you want, and we\'ll find it for you.' },
  'cars.contact.button': { fr: 'Nous contacter', en: 'Contact us' },

  // Opening Hours Component
  'openingHours.title': { fr: 'Heures d\'ouverture', en: 'Opening Hours' },
  'openingHours.open': { fr: 'Ouvert maintenant', en: 'Open now' },
  'openingHours.closed': { fr: 'Fermé', en: 'Closed' },
  'openingHours.everyday': { fr: 'Tous les jours', en: 'Every day' },

  // === MECHANIC PAGE ===
  'mechanic.hero.title': { fr: 'Expertise. Fiabilité. Performance.', en: 'Expertise. Reliability. Performance.' },
  'mechanic.hero.subtitle': { fr: 'Des services mécaniques professionnels pour maintenir votre véhicule en parfait état', en: 'Professional mechanical services to keep your vehicle in perfect condition' },
  'mechanic.services.title': { fr: 'Nos Services Mécaniques', en: 'Our Mechanical Services' },
  'mechanic.services.subtitle': { fr: "Une expertise complète pour l'entretien et la réparation de votre véhicule", en: 'Comprehensive expertise for the maintenance and repair of your vehicle' },
  'mechanic.services.priceNote': { fr: 'Prix disponibles sur demande - Contactez-nous pour un devis personnalisé selon votre véhicule', en: 'Prices available on request - Contact us for a personalized quote for your vehicle' },
  'mechanic.categories.Entretien Régulier': { fr: 'Entretien Régulier', en: 'Regular Maintenance' },
  'mechanic.categories.Système de Freinage': { fr: 'Système de Freinage', en: 'Brake System' },
  'mechanic.categories.Pneus et Roues': { fr: 'Pneus et Roues', en: 'Tires and Wheels' },
  'mechanic.categories.Suspension et Direction': { fr: 'Suspension et Direction', en: 'Suspension and Steering' },
  'mechanic.categories.Système Électrique': { fr: 'Système Électrique', en: 'Electrical System' },
  'mechanic.categories.Climatisation': { fr: 'Climatisation', en: 'Air Conditioning' },
  'mechanic.categories.Transmission': { fr: 'Transmission', en: 'Transmission' },
  'mechanic.categories.Moteur': { fr: 'Moteur', en: 'Engine' },
  'mechanic.categories.Services d\'Urgence': { fr: 'Services d\'Urgence', en: 'Emergency Services' },
  'mechanic.categories.Services Premium': { fr: 'Services Premium', en: 'Premium Services' },
  // Services (exemples, à compléter selon la liste)
  'mechanic.service.Changement d\'huile': { fr: "Changement d'huile", en: 'Oil Change' },
  'mechanic.service.Mise au point complète': { fr: 'Mise au point complète', en: 'Complete Tune-up' },
  'mechanic.service.Inspection multipoint': { fr: 'Inspection multipoint', en: 'Multipoint Inspection' },
  'mechanic.service.Plaquettes avant': { fr: 'Plaquettes avant', en: 'Front Brake Pads' },
  'mechanic.service.Disques et plaquettes': { fr: 'Disques et plaquettes', en: 'Rotors and Pads' },
  'mechanic.service.Purge des freins': { fr: 'Purge des freins', en: 'Brake Fluid Flush' },
  'mechanic.service.Changement saisonnier': { fr: 'Changement saisonnier', en: 'Seasonal Change' },
  'mechanic.service.Alignement 4 roues': { fr: 'Alignement 4 roues', en: '4-Wheel Alignment' },
  'mechanic.service.Réparation crevaison': { fr: 'Réparation crevaison', en: 'Flat Tire Repair' },
  'mechanic.service.Amortisseurs avant': { fr: 'Amortisseurs avant', en: 'Front Shocks' },
  'mechanic.service.Rotules de suspension': { fr: 'Rotules de suspension', en: 'Suspension Ball Joints' },
  'mechanic.service.Direction assistée': { fr: 'Direction assistée', en: 'Power Steering' },
  'mechanic.service.Diagnostic électronique': { fr: 'Diagnostic électronique', en: 'Electronic Diagnostic' },
  'mechanic.service.Batterie': { fr: 'Batterie', en: 'Battery' },
  'mechanic.service.Alternateur': { fr: 'Alternateur', en: 'Alternator' },
  'mechanic.service.Recharge A/C': { fr: 'Recharge A/C', en: 'A/C Recharge' },
  'mechanic.service.Service complet A/C': { fr: 'Service complet A/C', en: 'Full A/C Service' },
  'mechanic.service.Filtre habitacle': { fr: 'Filtre habitacle', en: 'Cabin Filter' },
  'mechanic.service.Vidange transmission': { fr: 'Vidange transmission', en: 'Transmission Flush' },
  'mechanic.service.Embrayage': { fr: 'Embrayage', en: 'Clutch' },
  'mechanic.service.Service 4x4': { fr: 'Service 4x4', en: '4x4 Service' },
  'mechanic.service.Courroie distribution': { fr: 'Courroie distribution', en: 'Timing Belt' },
  'mechanic.service.Joints d\'étanchéité': { fr: "Joints d'étanchéité", en: 'Seals Replacement' },
  'mechanic.service.Nettoyage injection': { fr: 'Nettoyage injection', en: 'Injection Cleaning' },
  'mechanic.service.Dépannage routier': { fr: 'Dépannage routier', en: 'Roadside Assistance' },
  'mechanic.service.Démarrage d\'urgence': { fr: "Démarrage d'urgence", en: 'Emergency Start' },
  'mechanic.service.Remorquage': { fr: 'Remorquage', en: 'Towing' },
  'mechanic.service.Diagnostic avancé': { fr: 'Diagnostic avancé', en: 'Advanced Diagnostic' },
  'mechanic.service.Protection céramique': { fr: 'Protection céramique', en: 'Ceramic Protection' },
  'mechanic.service.Programme VIP': { fr: 'Programme VIP', en: 'VIP Program' },
  
  // Descriptions des services
  'mechanic.service.Changement d\'huile.description': { fr: 'Vidange d\'huile avec filtre premium et inspection des niveaux.', en: 'Oil change with premium filter and fluid level inspection.' },
  'mechanic.service.Changement d\'huile.time': { fr: '30-45 minutes', en: '30-45 minutes' },
  'mechanic.service.Mise au point complète.description': { fr: 'Remplacement des bougies, filtres, et ajustement des systèmes.', en: 'Spark plugs and filters replacement, systems adjustment.' },
  'mechanic.service.Mise au point complète.time': { fr: '2-3 heures', en: '2-3 hours' },
  'mechanic.service.Inspection multipoint.description': { fr: 'Inspection complète de 50 points incluant tous les systèmes.', en: 'Complete 50-point inspection including all systems.' },
  'mechanic.service.Inspection multipoint.time': { fr: '1 heure', en: '1 hour' },
  'mechanic.service.Plaquettes avant.description': { fr: 'Remplacement des plaquettes et inspection du système.', en: 'Brake pads replacement and system inspection.' },
  'mechanic.service.Plaquettes avant.time': { fr: '1-2 heures', en: '1-2 hours' },
  'mechanic.service.Disques et plaquettes.description': { fr: 'Remplacement complet des disques et plaquettes.', en: 'Complete replacement of rotors and pads.' },
  'mechanic.service.Disques et plaquettes.time': { fr: '2-3 heures', en: '2-3 hours' },
  'mechanic.service.Purge des freins.description': { fr: 'Remplacement du liquide et purge du système.', en: 'Brake fluid replacement and system flush.' },
  'mechanic.service.Purge des freins.time': { fr: '1 heure', en: '1 hour' },
  'mechanic.service.Changement saisonnier.description': { fr: 'Montage, équilibrage et installation des pneus.', en: 'Tire mounting, balancing and installation.' },
  'mechanic.service.Changement saisonnier.time': { fr: '1 heure', en: '1 hour' },
  'mechanic.service.Alignement 4 roues.description': { fr: 'Alignement complet avec technologie 3D.', en: 'Complete alignment with 3D technology.' },
  'mechanic.service.Alignement 4 roues.time': { fr: '1-1.5 heures', en: '1-1.5 hours' },
  'mechanic.service.Réparation crevaison.description': { fr: 'Réparation ou remplacement du pneu endommagé.', en: 'Repair or replacement of damaged tire.' },
  'mechanic.service.Réparation crevaison.time': { fr: '30-45 minutes', en: '30-45 minutes' },
  'mechanic.service.Amortisseurs avant.description': { fr: 'Remplacement des amortisseurs et inspection.', en: 'Shock absorbers replacement and inspection.' },
  'mechanic.service.Amortisseurs avant.time': { fr: '2-3 heures', en: '2-3 hours' },
  'mechanic.service.Rotules de suspension.description': { fr: 'Remplacement des rotules et alignement.', en: 'Ball joints replacement and alignment.' },
  'mechanic.service.Rotules de suspension.time': { fr: '2-3 heures', en: '2-3 hours' },
  'mechanic.service.Direction assistée.description': { fr: 'Service complet du système de direction.', en: 'Complete power steering system service.' },
  'mechanic.service.Direction assistée.time': { fr: '1-2 heures', en: '1-2 hours' },
  'mechanic.service.Diagnostic électronique.description': { fr: 'Analyse complète des systèmes avec équipement pro.', en: 'Complete system analysis with professional equipment.' },
  'mechanic.service.Diagnostic électronique.time': { fr: '1 heure', en: '1 hour' },
  'mechanic.service.Batterie.description': { fr: 'Test et remplacement si nécessaire.', en: 'Testing and replacement if needed.' },
  'mechanic.service.Batterie.time': { fr: '30 minutes', en: '30 minutes' },
  'mechanic.service.Alternateur.description': { fr: 'Diagnostic et remplacement.', en: 'Diagnosis and replacement.' },
  'mechanic.service.Alternateur.time': { fr: '2-3 heures', en: '2-3 hours' },
  'mechanic.service.Recharge A/C.description': { fr: 'Test d\'étanchéité et recharge du système.', en: 'Leak test and system recharge.' },
  'mechanic.service.Recharge A/C.time': { fr: '1 heure', en: '1 hour' },
  'mechanic.service.Service complet A/C.description': { fr: 'Diagnostic, recharge et désinfection.', en: 'Diagnosis, recharge and disinfection.' },
  'mechanic.service.Service complet A/C.time': { fr: '1.5-2 heures', en: '1.5-2 hours' },
  'mechanic.service.Filtre habitacle.description': { fr: 'Remplacement du filtre à air de l\'habitacle.', en: 'Cabin air filter replacement.' },
  'mechanic.service.Filtre habitacle.time': { fr: '30 minutes', en: '30 minutes' },
  'mechanic.service.Vidange transmission.description': { fr: 'Vidange complète avec fluide synthétique.', en: 'Complete flush with synthetic fluid.' },
  'mechanic.service.Vidange transmission.time': { fr: '1.5-2 heures', en: '1.5-2 hours' },
  'mechanic.service.Embrayage.description': { fr: 'Remplacement complet de l\'embrayage.', en: 'Complete clutch replacement.' },
  'mechanic.service.Embrayage.time': { fr: '4-6 heures', en: '4-6 hours' },
  'mechanic.service.Service 4x4.description': { fr: 'Entretien des différentiels et transfert.', en: 'Differential and transfer case maintenance.' },
  'mechanic.service.Service 4x4.time': { fr: '2-3 heures', en: '2-3 hours' },
  'mechanic.service.Courroie distribution.description': { fr: 'Remplacement courroie et composants.', en: 'Belt and components replacement.' },
  'mechanic.service.Courroie distribution.time': { fr: '4-6 heures', en: '4-6 hours' },
  'mechanic.service.Joints d\'étanchéité.description': { fr: 'Remplacement des joints qui fuient.', en: 'Leaking gaskets replacement.' },
  'mechanic.service.Joints d\'étanchéité.time': { fr: 'Varie selon localisation', en: 'Varies by location' },
  'mechanic.service.Nettoyage injection.description': { fr: 'Nettoyage du système d\'injection.', en: 'Fuel injection system cleaning.' },
  'mechanic.service.Nettoyage injection.time': { fr: '1-2 heures', en: '1-2 hours' },
  'mechanic.service.Dépannage routier.description': { fr: 'Assistance routière avec diagnostic mobile.', en: 'Roadside assistance with mobile diagnostic.' },
  'mechanic.service.Dépannage routier.time': { fr: 'Variable', en: 'Variable' },
  'mechanic.service.Démarrage d\'urgence.description': { fr: 'Boost de batterie et diagnostic.', en: 'Battery boost and diagnosis.' },
  'mechanic.service.Démarrage d\'urgence.time': { fr: '30 minutes', en: '30 minutes' },
  'mechanic.service.Remorquage.description': { fr: 'Service de remorquage professionnel.', en: 'Professional towing service.' },
  'mechanic.service.Remorquage.time': { fr: 'Variable', en: 'Variable' },
  'mechanic.service.Diagnostic avancé.description': { fr: 'Analyse approfondie multi-systèmes.', en: 'In-depth multi-system analysis.' },
  'mechanic.service.Diagnostic avancé.time': { fr: '1.5-2 heures', en: '1.5-2 hours' },
  'mechanic.service.Protection céramique.description': { fr: 'Application de protection moteur céramique.', en: 'Ceramic engine protection application.' },
  'mechanic.service.Protection céramique.time': { fr: '2-3 heures', en: '2-3 hours' },
  'mechanic.service.Programme VIP.description': { fr: 'Service prioritaire et tarifs préférentiels.', en: 'Priority service and preferential rates.' },
  'mechanic.service.Programme VIP.time': { fr: 'Variable', en: 'Variable' },
  
  // Experts en action section
  'mechanic.experts.title': { fr: 'Experts en action', en: 'Experts in Action' },
  'mechanic.experts.description': { fr: 'Des pros à l\'œuvre, du savoir-faire sous le capot. Chaque geste compte, chaque détail fait la différence.', en: 'Professionals at work, expertise under the hood. Every gesture counts, every detail makes a difference.' },
  
  // Avantages
  'mechanic.why.title': { fr: 'Pourquoi Nous Choisir', en: 'Why Choose Us' },
  'mechanic.why.subtitle': { fr: 'Un service mécanique automobile d\'exception dans la région', en: 'Exceptional automotive mechanical service in the region' },
  'mechanic.why.certified': { fr: 'Techniciens certifiés', en: 'Certified Technicians' },
  'mechanic.why.certified.desc': { fr: "Notre équipe est composée exclusivement de techniciens certifiés avec des années d'expérience dans l'industrie automobile.", en: 'Our team consists exclusively of certified technicians with years of experience in the automotive industry.' },
  'mechanic.why.equipment': { fr: 'Équipement de pointe', en: 'State-of-the-art Equipment' },
  'mechanic.why.equipment.desc': { fr: 'Nous utilisons les équipements et les outils de diagnostic les plus avancés pour une précision maximale dans nos interventions.', en: 'We use the most advanced equipment and diagnostic tools for maximum precision in our work.' },
  'mechanic.why.fast': { fr: 'Service rapide', en: 'Fast Service' },
  'mechanic.why.fast.desc': { fr: 'Nous valorisons votre temps et nous efforçons d\'offrir un service efficace sans compromettre la qualité du travail.', en: 'We value your time and strive to provide efficient service without compromising quality.' },
  'mechanic.why.pricing': { fr: 'Prix transparents', en: 'Transparent Pricing' },
  'mechanic.why.pricing.desc': { fr: "Aucune surprise désagréable - nous vous fournissons un devis détaillé avant d'effectuer tout travail sur votre véhicule.", en: 'No unpleasant surprises - we provide you with a detailed quote before performing any work on your vehicle.' },
  'mechanic.why.warranty': { fr: 'Garantie sur les travaux', en: 'Work Warranty' },
  'mechanic.why.warranty.desc': { fr: "Nous garantissons toutes nos réparations pour votre tranquillité d'esprit et votre satisfaction totale.", en: 'We guarantee all our repairs for your peace of mind and total satisfaction.' },
  'mechanic.why.emergency': { fr: "Service d'urgence", en: 'Emergency Service' },
  'mechanic.why.emergency.desc': { fr: "Assistance disponible pour les urgences mécaniques avec un service de dépannage rapide et efficace.", en: 'Assistance available for mechanical emergencies with fast and efficient breakdown service.' },

  // === CONTACT FORM ===
  'contactForm.form.title': { fr: 'Formulaire de contact', en: 'Contact Form' },
  'contactForm.form.name': { fr: 'Nom complet', en: 'Full Name' },
  'contactForm.form.name.placeholder': { fr: 'Entrez votre nom', en: 'Enter your name' },
  'contactForm.form.email': { fr: 'Adresse email', en: 'Email address' },
  'contactForm.form.email.placeholder': { fr: 'Entrez votre email', en: 'Enter your email' },
  'contactForm.form.message': { fr: 'Votre message', en: 'Your message' },
  'contactForm.form.message.placeholder': { fr: 'Écrivez votre message ici...', en: 'Write your message here...' },
  'contactForm.form.submit': { fr: 'Envoyer', en: 'Send' },
  'contactForm.success': { fr: 'Message envoyé avec succès !', en: 'Message sent successfully!' },
  'contactForm.info.title': { fr: 'Informations de contact', en: 'Contact Information' },
  'contactForm.info.address.title': { fr: 'Adresse', en: 'Address' },
  'contactForm.info.address.directions': { fr: 'Obtenir l\'itinéraire', en: 'Get directions' },
  'contactForm.info.phone.title': { fr: 'Téléphone', en: 'Phone' },
  'contactForm.info.social.instagram': { fr: 'Instagram', en: 'Instagram' },
  'cars.why.title': { fr: 'Pourquoi choisir TigerBec ?', en: 'Why choose TigerBec?' },
  'cars.why.subtitle': { fr: 'Votre tranquillité d\'esprit est notre priorité. Découvrez nos avantages exclusifs.', en: 'Your peace of mind is our priority. Discover our exclusive benefits.' },
  'cars.why.warranty.title': { fr: 'Garantie incluse', en: 'Included Warranty' },
  'cars.why.warranty.desc': { fr: 'Tous nos véhicules sont couverts par une garantie pour une conduite sans souci.', en: 'All our vehicles are covered by a warranty for worry-free driving.' },
  'cars.why.inspection.title': { fr: 'Inspection complète', en: 'Full Inspection' },
  'cars.why.inspection.desc': { fr: 'Chaque voiture est minutieusement inspectée par nos experts avant la vente.', en: 'Each car is thoroughly inspected by our experts before sale.' },
  'cars.why.financing.title': { fr: 'Financement flexible', en: 'Flexible Financing' },
  'cars.why.financing.desc': { fr: 'Des solutions de financement adaptées à votre budget et à vos besoins.', en: 'Financing solutions tailored to your budget and needs.' },
  // === CARS NAMES & FUELS ===
  'cars.names.A': { fr: 'Chrysler 300', en: 'Chrysler 300' },
  'cars.names.B': { fr: 'Ford Fusion', en: 'Ford Fusion' },
  'cars.names.C': { fr: 'HUMMER H3', en: 'HUMMER H3' },
  'cars.names.D': { fr: 'Nissan Versa', en: 'Nissan Versa' },
  'cars.names.E': { fr: 'Hyundai Elantra', en: 'Hyundai Elantra' },
  'cars.fuel.gasoline': { fr: 'Essence', en: 'Gasoline' },
  'cars.fuel.electric': { fr: 'Électrique', en: 'Electric' },
  'cars.brands.chrysler': { fr: 'Chrysler', en: 'Chrysler' },
  'cars.brands.ford': { fr: 'Ford', en: 'Ford' },
  'cars.brands.hummer': { fr: 'Hummer', en: 'Hummer' },
  'cars.brands.nissan': { fr: 'Nissan', en: 'Nissan' },
  'cars.brands.hyundai': { fr: 'Hyundai', en: 'Hyundai' },
  'cars.descriptions.chrysler': { fr: 'Berline élégante et puissante, idéale pour la route et la ville.', en: 'Elegant and powerful sedan, ideal for road and city.' },
  'cars.descriptions.ford': { fr: 'Berline confortable, économique et fiable, parfaite pour la famille.', en: 'Comfortable, economical and reliable sedan, perfect for families.' },
  'cars.descriptions.hummer': { fr: 'SUV électrique robuste, design unique et performances tout-terrain.', en: 'Robust electric SUV, unique design and off-road performance.' },
  'cars.descriptions.nissan': { fr: 'Compacte pratique, faible kilométrage et entretien facile.', en: 'Practical compact, low mileage and easy maintenance.' },
  'cars.descriptions.hyundai': { fr: 'Berline moderne, faible consommation et conduite agréable.', en: 'Modern sedan, low consumption and pleasant driving.' },
  'cars.modal.contact': { fr: 'Nous contacter', en: 'Contact' },
};

interface LanguageContextType {
  currentLanguage: Language;
  setCurrentLanguage: (language: Language) => void;
  t: (key: string, params?: { [key: string]: string | number }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Lire la langue depuis localStorage ou utiliser 'fr' par défaut
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
    return (stored === 'fr' || stored === 'en') ? stored : 'fr';
  });

  // Sauvegarder la langue à chaque changement
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', currentLanguage);
    }
  }, [currentLanguage]);

  const t = (key: string, params?: { [key: string]: string | number }): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    let text = translation[currentLanguage];
    if (params) {
      Object.keys(params).forEach(paramKey => {
        text = text.replace(`{${paramKey}}`, String(params[paramKey]));
      });
    }
    return text;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 