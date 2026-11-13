// Contenu du portfolio : modifiez ce fichier pour mettre à jour le site.

export const profile = {
  firstName: "Tanjona Nomenjanahary",
  lastName: "RAKOTOARISOA",
  displayName: "Tanjona RAKOTOARISOA", // nom affiché en grand sur l'accueil
  shortName: "Tanjona R.",
  initials: "TR",
  role: "Développeur Full Stack & Testeur QA",
  tagline:
    "Conception, développement et test d'applications web fiables et performantes avec React, Next.js et Node.js — de l'API à l'interface, avec la qualité comme exigence.",
  photo: "/profile.webp",
  location: "Antananarivo, Madagascar",
  birthYear: 2001, // l'âge affiché est calculé automatiquement à partir de l'année
  availability: "Ouvert aux opportunités",
  // Déposez votre CV dans /public (ex. /cv-tanjona-rakotoarisoa.pdf) et renseignez son chemin :
  // le bouton « Télécharger le CV » apparaîtra automatiquement.
  cvUrl: undefined as string | undefined,
  email: "rakotoarisoaratane@gmail.com",
  phone: "+261 34 78 606 75",
  phoneLink: "tel:+261347860675",
  github: "https://github.com/RataneRak",
  linkedin: "https://linkedin.com/in/ratane-rakotoarisoa-b26b22286",
  formspreeEndpoint: "https://formspree.io/f/xzzgvreb",
  heroStack: ["Next.js", "React", "Node.js", "Tests QA"],
};

export const navItems = [
  { id: "accueil", label: "Accueil" },
  { id: "apropos", label: "À propos" },
  { id: "experience", label: "Expérience" },
  { id: "competences", label: "Compétences" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
] as const;

// Chiffres factuels uniquement : un recruteur doit pouvoir les vérifier.
export const stats = [
  { value: "4", label: "Expériences professionnelles" },
  { value: "5", label: "Projets livrés" },
  { value: "Dev + QA", label: "Double compétence" },
  { value: "Master", label: "Ingénierie informatique" },
];

export const experiences = [
  {
    period: "2025",
    title: "Développeur Full Stack — Plateforme automobile",
    company: "Projet indépendant",
    missions: [
      "Conception et développement de bout en bout d'une plateforme pour un revendeur automobile.",
      "Catalogue de véhicules avec recherche multicritère et formulaire de prise de contact.",
      "Back-office d'administration (React, Material UI) pour la gestion autonome du catalogue.",
      "API REST Node.js / Express et base de données MongoDB.",
    ],
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Material UI"],
  },
  {
    period: "Mai 2024 — Sept. 2024",
    title: "Développeur Full Stack",
    company: "Maki Company",
    missions: [
      "Refonte complète de la plateforme e-commerce de l'entreprise avec React et Node.js.",
      "Intégration du paiement en ligne et d'un chatbot IA d'assistance client.",
      "Mise en place d'une gestion avancée des stocks.",
      "Optimisation des performances et modernisation de l'interface utilisateur.",
    ],
    tags: ["React", "Node.js", "MySQL"],
  },
  {
    period: "Mars 2023 — Juin 2023",
    title: "Développeur Web",
    company: "Maki Company — Analakely & Behoririka",
    missions: [
      "Développement d'une boutique en ligne complète en PHP natif, architecture MVC.",
      "Catalogue produits, gestion des commandes et espace client.",
      "Interface d'administration pour le suivi des ventes.",
    ],
    tags: ["PHP", "MVC", "MySQL"],
  },
  {
    period: "Juin 2022 — Août 2022",
    title: "Développeur Web — Stage",
    company: "Lycée Privé La Lumière, Ambatolampy",
    missions: [
      "Participation à la digitalisation des services de l'établissement.",
      "Développement d'une application web de gestion des cours et des inscriptions (PHP, MVC).",
    ],
    tags: ["PHP", "MVC", "MySQL"],
  },
];

export const education = [
  {
    period: "2024 — 2025",
    degree: "Master en Ingénierie Informatique",
    school: "ESMIA — École Supérieure de Management et d'Informatique Appliquée",
  },
  {
    period: "2023",
    degree: "Licence en Sciences Informatiques",
    school: "ESMIA — École Supérieure de Management et d'Informatique Appliquée",
  },
];

export type ProjectCategory = "ecommerce" | "education" | "web";

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: ProjectCategory;
  technologies: string[];
  year: string;
  context: string;
  highlights?: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

// Ajoutez `link` et `github` quand les URLs sont disponibles : les boutons
// n'apparaissent que si le lien est renseigné.
export const projects: Project[] = [
  {
    id: "revendeur",
    title: "Plateforme de revendeur automobile",
    year: "2025",
    context: "Projet indépendant",
    description:
      "Plateforme complète permettant à un revendeur de présenter son stock et de recevoir des demandes de clients.",
    highlights: [
      "Recherche multicritère dans le catalogue",
      "Back-office d'administration autonome",
      "API REST Node.js / Express + MongoDB",
    ],
    image: "/revendeur.webp",
    category: "web",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Material UI"],
    featured: true,
  },
  {
    id: "maki",
    title: "E-commerce Maki Company",
    year: "2024",
    context: "Maki Company",
    description:
      "Refonte de la plateforme de vente en ligne de l'entreprise, de l'interface jusqu'au back-end.",
    highlights: [
      "Paiement en ligne intégré",
      "Chatbot IA d'assistance client",
      "Gestion avancée des stocks",
    ],
    category: "ecommerce",
    technologies: ["Node.js", "React", "MySQL"],
    featured: true,
  },
  {
    id: "php-mvc",
    title: "Boutique en ligne PHP MVC",
    year: "2023",
    context: "Maki Company",
    description:
      "Boutique en ligne développée en PHP natif, sans framework, sur une architecture MVC.",
    highlights: [
      "Catalogue produits et gestion des commandes",
      "Espace client et interface d'administration",
    ],
    category: "ecommerce",
    technologies: ["PHP", "MySQL", "JavaScript", "MVC"],
  },
  {
    id: "lycee",
    title: "Application scolaire — Lycée La Lumière",
    year: "2022",
    context: "Stage",
    description:
      "Application web pour digitaliser les services d'un établissement scolaire à Madagascar.",
    highlights: ["Gestion des cours", "Gestion des inscriptions"],
    category: "education",
    technologies: ["PHP", "MySQL", "MVC"],
  },
  {
    id: "portfolio",
    title: "Portfolio personnel",
    year: "2025",
    context: "Projet personnel",
    description:
      "Le site que vous consultez, conçu et développé de A à Z.",
    highlights: [
      "Responsive, thème clair / sombre",
      "Accessibilité et performances soignées",
    ],
    category: "web",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    github: "https://github.com/RataneRak",
  },
];

export const projectFilters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "education", label: "Éducation" },
  { id: "web", label: "Web" },
];
