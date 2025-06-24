# Structure des Composants

Ce dossier contient tous les composants React organisés de manière logique pour faciliter la maintenance et le développement.

## 📁 Organisation

```
src/components/
├── layout/           # Composants de mise en page
│   ├── Header.tsx    # Navigation principale
│   ├── Footer.tsx    # Pied de page
│   └── index.ts      # Exports des composants layout
├── sections/         # Sections principales du portfolio
│   ├── Hero.tsx      # Section d'accueil
│   ├── About.tsx     # Section "À propos"
│   ├── Skills.tsx    # Section compétences
│   ├── Projects.tsx  # Section projets
│   ├── Contact.tsx   # Section contact
│   └── index.ts      # Exports des composants sections
├── ui/               # Composants UI réutilisables
│   ├── Button.tsx    # Bouton personnalisable
│   ├── Card.tsx      # Carte avec variantes
│   ├── SectionHeader.tsx # En-tête de section
│   └── index.ts      # Exports des composants UI
└── README.md         # Ce fichier
```

## 🎯 Composants Layout

### Header
- Navigation fixe avec menu hamburger responsive
- Navigation fluide entre les sections
- Design moderne avec backdrop blur

### Footer
- Informations de contact
- Liens de navigation
- Liens vers les réseaux sociaux

## 📄 Composants Sections

### Hero
- Section d'accueil avec présentation
- Call-to-action buttons
- Animations et effets visuels

### About
- Informations personnelles
- Expérience professionnelle avec timeline
- Formation et statistiques

### Skills
- Compétences techniques avec barres de progression
- Compétences transversales
- Outils et technologies
- Certifications

### Projects
- Portfolio de projets avec filtres
- Cartes de projets interactives
- Liens vers les projets et code source

### Contact
- Formulaire de contact fonctionnel
- Informations de contact
- Liens vers les réseaux sociaux

## 🧩 Composants UI

### Button
- Variantes : `primary`, `secondary`
- Tailles : `small`, `medium`, `large`
- États : `disabled`, `loading`
- Option `fullWidth`

### Card
- Variantes : `default`, `elevated`, `outlined`
- Padding : `small`, `medium`, `large`
- Options : `hoverable`, `clickable`

### SectionHeader
- Titre et sous-titre optionnels
- Ligne décorative
- Option de centrage

## 🔧 Utilisation

### Import des composants
```tsx
// Import des composants layout
import { Header, Footer } from './components/layout';

// Import des composants sections
import { Hero, About, Skills, Projects, Contact } from './components/sections';

// Import des composants UI
import { Button, Card, SectionHeader } from './components/ui';
```

### Exemple d'utilisation des composants UI
```tsx
// Bouton
<Button variant="primary" size="large" onClick={handleClick}>
  Cliquez ici
</Button>

// Carte
<Card variant="elevated" hoverable>
  <h3>Contenu de la carte</h3>
</Card>

// En-tête de section
<SectionHeader title="Mon Titre" subtitle="Sous-titre optionnel" />
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans les fichiers CSS :
- Couleur primaire : `#4facfe` (Bleu ciel)
- Couleur secondaire : `#00f2fe` (Cyan)
- Couleur d'accent : `#3a9bfe` (Bleu plus foncé)
- Couleur de fond : `#f8f9fa` (Gris très clair)

### Styles
Chaque composant a son propre fichier CSS pour faciliter la personnalisation.

### Responsive
Tous les composants sont responsives et s'adaptent aux différentes tailles d'écran.

## 📝 Bonnes pratiques

1. **Imports** : Utilisez les fichiers d'index pour les imports
2. **Props** : Documentez les props avec TypeScript
3. **Styles** : Gardez les styles spécifiques dans les fichiers CSS des composants
4. **Réutilisabilité** : Créez des composants UI génériques pour les éléments récurrents
5. **Accessibilité** : Incluez les attributs ARIA et la navigation au clavier 