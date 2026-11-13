# Structure du projet

```
src/
├── data/portfolio.ts   # TOUT le contenu (profil, expériences, projets…) — à modifier ici
├── hooks/              # useInView (animations), useActiveSection (menu), useTheme (clair/sombre)
├── components/
│   ├── layout/         # Header, Footer
│   ├── sections/       # Hero, About, Skills, Projects, Contact
│   └── ui/             # Button, SectionHeader
└── index.css           # Variables de design (couleurs, ombres, rayons) + thème sombre
```

- **Couleurs** : modifiez les variables `--accent`, `--accent-2`… dans `src/index.css`
  (bloc `:root` pour le thème clair, `:root[data-theme="dark"]` pour le sombre).
- **Projets** : ajoutez `link` et/ou `github` dans `src/data/portfolio.ts` ; les boutons
  « Voir le site » / « Code source » n'apparaissent que si le lien existe.
- **Compétences** : la liste (avec les icônes) est en haut de `sections/Skills.tsx`.
