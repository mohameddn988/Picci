# Station Multi-Services Website

Ce projet est un site web unifié pour une station de services qui propose quatre services distincts :

## 🌟 Services intégrés

### 💈 Barbershop
Service de coiffure et barbier professionnel avec des coiffeurs expérimentés.
- Page dédiée : `/barbershop`

### 🚗 Lavage auto (Carwash)
Services de lavage et detailing automobile premium.
- Page dédiée : `/carwash`

### 🛻 Vente de voitures d'occasion
Sélection de véhicules d'occasion vérifiés et garantis.
- Page dédiée : `/cars`

### 🔧 Mécanique auto (En développement)
Services de réparation et d'entretien automobile à venir.
- Page dédiée : `/mechanic`

## 🧩 Structure du projet

Le site est construit avec React, TypeScript et Tailwind CSS. La structure des dossiers est organisée pour faciliter l'intégration de multiples services :

- `/components` : Composants partagés et spécifiques aux services
  - `ServicesSection.tsx` : Section affichant les quatre services
  - Autres composants spécifiques à chaque service

- `/pages` : Pages principales du site
  - `HomePage.tsx` : Page d'accueil présentant tous les services
  - `BarbershopPage.tsx` : Page dédiée au service de barbier
  - `CarwashPage.tsx` : Page dédiée au service de lavage auto
  - `CarsPage.tsx` : Page dédiée à la vente de voitures
  - `MechanicPage.tsx` : Page "Coming soon" pour le service de mécanique

## 🎨 Caractéristiques de design

- Thème sombre avec accents de couleur noir/rouge/bleu
- Animations fluides et effets visuels modernes
- Design responsive et mobile-friendly
- Interface unifiée pour tous les services

## 🚀 Pour démarrer

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Construction pour la production
npm run build
```

## 📱 Fonctionnalités

- Navigation intuitive avec menu dropdown pour les services
- Pages de service dédiées avec contenu spécifique
- Animations de transition entre les pages
- Support multilingue (FR/EN)

## 🛠️ Technologies

- **React 18** avec TypeScript
- **Vite** pour le build rapide
- **Tailwind CSS** pour le styling
- **React Router** pour la navigation
- **Context API** pour la gestion d'état

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
├── pages/              # Pages principales
├── contexts/           # Contextes React (langues, etc.)
├── data/               # Données des coupes et produits
├── config/             # Configuration (assets, thème, etc.)
└── styles/             # Styles globaux

public/
├── images/
│   ├── cuts/           # Images des coupes
│   └── products/       # Images des produits
└── fonts/              # Polices personnalisées
```

## 🎨 Thème visuel

- **Couleurs principales** : Noir (#000), Rouge (#DC2626)
- **Effets** : Particules flottantes, dégradés animés
- **Police** : American Captain (custom) + Inter
- **Animations** : Transitions fluides, hover effects

## 📝 Contenu

### Services disponibles
- Coupe Classique (35 CAD $)
- Coupe Moderne (40 CAD $)
- Taille de Barbe (25 CAD $)
- Coupe + Barbe (50 CAD $)
- Fade Dégradé (38 CAD $)
- Coupe Enfant (20 CAD $)

### Produits
- Pomade Classique
- Huile à Barbe Premium
- Shampoing Homme
- Cire Coiffante
- Baume Après-Rasage
- Gel Coiffant Fort

## 🚀 Installation et développement

```bash
# Installation des dépendances
npm install

# Lancement en mode développement
npm run dev

# Build de production
npm run build

# Aperçu du build
npm run preview
```

## 📸 Images

**Important** : Remplacez les images placeholder dans `/public/images/` par de vraies photos :
- Format recommandé : JPG/PNG, haute résolution
- Coupes : ratio 4:3, minimum 600x400px
- Produits : ratio 1:1, minimum 600x600px

## 🌐 Déploiement

Le projet est prêt pour le déploiement sur :
- Vercel
- Netlify  
- GitHub Pages
- Tout hébergeur statique

## 📱 Responsive

- **Mobile** : Navigation optimisée, grilles adaptatives
- **Tablet** : Layouts intermédiaires
- **Desktop** : Expérience complète avec animations

## 🎯 Prochaines étapes

1. Ajouter de vraies images de coupes et produits
2. Intégrer un système de réservation
3. Connecter le formulaire de contact
4. Ajouter une galerie photo
5. Implémenter un système de paiement pour les produits

---

Développé avec ❤️ pour offrir une expérience barbershop moderne et professionnelle.