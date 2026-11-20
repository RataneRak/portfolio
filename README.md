# Portfolio — Tanjona RAKOTOARISOA

Portfolio personnel présentant mon profil, mes expériences, mes compétences et mes projets, avec une interface responsive en thème clair/sombre.

**Démo :** [portfolio-ratane.vercel.app](https://portfolio-ratane.vercel.app)

![React](https://img.shields.io/badge/React-19-087ea4?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss&logoColor=white)

## Aperçu

Ce portfolio met en avant mon parcours de développeur Full Stack et testeur QA.

Il présente :

- mon profil et mes informations de contact ;
- mes expériences professionnelles ;
- mon parcours académique ;
- mes compétences techniques ;
- une sélection de projets ;
- un formulaire de contact ;
- les modes clair et sombre ;
- une navigation adaptée aux mobiles ;
- des animations d'apparition au défilement ;
- une mise en page optimisée pour l'accessibilité.

## Fonctionnalités

- Navigation fixe avec suivi de la section active
- Menu responsive pour mobile
- Thème clair et sombre avec transition circulaire
- Effet « spotlight » suivant le pointeur
- Défilement fluide avec Lenis
- Animations et apparitions progressives
- Bandeau défilant des technologies
- Filtres par catégorie de projet
- Liens conditionnels vers les projets et dépôts GitHub
- Téléchargement optionnel du CV
- Formulaire de contact via Formspree
- Compatibilité avec `prefers-reduced-motion`
- Lien d'accès rapide vers le contenu principal

## Stack technique

| Technologie | Usage |
|---|---|
| React 19 | Interface utilisateur |
| TypeScript | Typage et logique applicative |
| Vite | Développement et build |
| Tailwind CSS | Intégration de styles |
| CSS | Design, thèmes, animations et responsive |
| Lenis | Défilement fluide |
| React Icons | Icônes de l'interface |
| Formspree | Transmission des messages du formulaire |
| ESLint | Analyse statique du code |

## Structure du projet

```text
portfolio/
├── public/
│   ├── favicon.svg
│   ├── profile.webp
│   ├── photo.webp
│   └── revendeur.webp
├── src/
│   ├── components/
│   │   ├── layout/       # En-tête, pied de page et effet Liquid Glass
│   │   ├── sections/     # Sections du portfolio
│   │   └── ui/           # Boutons et titres réutilisables
│   ├── data/
│   │   └── portfolio.ts  # Contenu principal du portfolio
│   ├── hooks/
│   │   └── use*.ts       # Thème, défilement, navigation et animations
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── scroll-effects.css
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Sections

- **Accueil** : présentation, photo, rôle et technologies principales
- **À propos** : profil, localisation et statistiques
- **Expérience** : parcours professionnel et missions
- **Compétences** : technologies et compétences techniques
- **Projets** : réalisations filtrables avec descriptions et liens
- **Contact** : coordonnées et formulaire de contact
- **Pied de page** : réseaux sociaux et navigation

## Installation

### Prérequis

- Node.js 20 ou supérieur
- npm

### Cloner le projet

```bash
git clone https://github.com/RataneRak/portfolio.git
cd portfolio
```

### Installer les dépendances

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Vite affiche ensuite l'adresse locale du projet, généralement :

```text
http://localhost:5173
```

### Générer une version de production

```bash
npm run build
```

### Prévisualiser le build

```bash
npm run preview
```

### Vérifier le code avec ESLint

```bash
npm run lint
```

## Personnalisation

La majorité du contenu est centralisée dans :

```text
src/data/portfolio.ts
```

Vous pouvez y modifier :

- le nom, le rôle et la photo ;
- le titre professionnel ;
- les coordonnées ;
- les liens GitHub et LinkedIn ;
- les statistiques ;
- les expériences ;
- la formation ;
- les compétences ;
- les projets ;
- les filtres de projets ;
- le lien vers le CV ;
- le point d'accès du formulaire.

### Ajouter un CV

Placez le fichier PDF dans `public/`, puis renseignez son chemin dans `src/data/portfolio.ts` :

```ts
cvUrl: "/cv-tanjona-rakotoarisoa.pdf",
```

### Ajouter un projet

Dans `projects`, ajoutez une entrée contenant par exemple :

```ts
{
  id: "nouveau-projet",
  title: "Nom du projet",
  year: "2026",
  context: "Projet personnel",
  description: "Description courte du projet.",
  category: "web",
  technologies: ["React", "TypeScript"],
  image: "/projet.webp",
  link: "https://example.com",
  github: "https://github.com/utilisateur/projet",
  featured: true,
}
```

Les boutons **Voir le site** et **Code source** apparaissent uniquement lorsque les propriétés correspondantes sont renseignées.

### Modifier les couleurs

Les variables de thème se trouvent dans `src/index.css`.

```css
:root {
  --accent: #5b5bf0;
  --accent-2: #06b6d4;
}

:root[data-theme="dark"] {
  --accent: #8b8bff;
  --accent-2: #22d3ee;
}
```

## Déploiement

Le projet peut être déployé sur Vercel, Netlify ou GitHub Pages.

Exemple avec Vercel :

1. Importez le dépôt depuis votre compte Vercel.
2. Configurez le framework sur **Vite**.
3. Utilisez la commande de build `npm run build`.
4. Définissez `dist` comme répertoire de sortie.

## Contact

- **Email :** [rakotoarisoaratane@gmail.com](mailto:rakotoarisoaratane@gmail.com)
- **GitHub :** [github.com/RataneRak](https://github.com/RataneRak)
- **LinkedIn :** [Tanjona RAKOTOARISOA](https://linkedin.com/in/ratane-rakotoarisoa-b26b22286)
- **Portfolio :** [portfolio-ratane.vercel.app](https://portfolio-ratane.vercel.app)
