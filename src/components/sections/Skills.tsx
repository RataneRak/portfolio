import { useEffect, useState } from "react";
import { SectionHeader } from "../ui";
import {
  FaPhp,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaTerminal,
  FaBootstrap,
  FaSitemap,
  FaRegLightbulb,
  FaUserFriends,
  FaComments,
  FaTasks,
  FaPuzzlePiece,
  FaSyncAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiJson,
} from "react-icons/si";
import { MdDevices } from "react-icons/md";
import "./Skills.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const element = document.getElementById("competences");
    if (element) {
      observer.observe(element);
    }

    // Fallback: rendre visible après un délai si l'observer ne fonctionne pas
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Toutes les compétences sous forme de grille
  const allSkills = [
    // Langages & Frameworks
    {
      name: "PHP",
      icon: <FaPhp color="#777bb4" />,
      level: "avancé",
      tooltip: "Développement back-end avancé et scripts serveur.",
      category: "Langages & Frameworks",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript color="#f7df1e" />,
      level: "avancé",
      tooltip: "Langage de script pour le web interactif.",
      category: "Langages & Frameworks",
    },
    {
      name: "React.js",
      icon: <FaReact color="#61dafb" />,
      level: "avancé",
      tooltip: "Développement d'interfaces dynamiques et SPA.",
      category: "Langages & Frameworks",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs color="#3c873a" />,
      level: "bon niveau",
      tooltip: "Serveur JavaScript pour applications web rapides.",
      category: "Langages & Frameworks",
    },
    {
      name: "HTML / CSS",
      icon: <FaHtml5 color="#e34c26" />,
      level: "avancé",
      tooltip: "Structuration et style des pages web modernes.",
      category: "Langages & Frameworks",
    },
    // Bases de données
    {
      name: "MySQL",
      icon: <FaDatabase color="#00758f" />,
      tooltip: "Base de données relationnelle populaire.",
      category: "Bases de données",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql color="#336791" />,
      tooltip: "Base de données relationnelle avancée et open source.",
      category: "Bases de données",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb color="#47a248" />,
      tooltip: "Base de données NoSQL orientée documents.",
      category: "Bases de données",
    },
    // Outils & Environnement
    {
      name: "Git",
      icon: <FaGitAlt color="#f34f29" />,
      tooltip: "Gestion de version collaborative et suivi de code.",
      category: "Outils & Environnement",
    },
    {
      name: "GitHub",
      icon: <FaGithub color="#333" />,
      tooltip: "Hébergement de code, collaboration et CI/CD.",
      category: "Outils & Environnement",
    },
    {
      name: "VS Code",
      icon: <FaCode color="#0078d7" />,
      tooltip: "Éditeur de code moderne et extensible.",
      category: "Outils & Environnement",
    },
    {
      name: "Postman",
      icon: <SiPostman color="#ff6c37" />,
      tooltip: "Test des API REST et automatisation de requêtes.",
      category: "Outils & Environnement",
    },
    {
      name: "Terminal",
      icon: <FaTerminal color="#4facfe" />,
      tooltip: "Interface en ligne de commande pour développeur.",
      category: "Outils & Environnement",
    },
    {
      name: "API REST / JSON",
      icon: <SiJson color="#f7df1e" />,
      tooltip: "Échange de données entre applications web.",
      category: "Outils & Environnement",
    },
    {
      name: "Méthodologie Agile (Scrum)",
      icon: <FaSitemap color="#4facfe" />,
      tooltip: "Gestion de projet agile et itérative.",
      category: "Outils & Environnement",
    },
    // Intégration & UI
    {
      name: "Responsive design",
      icon: <MdDevices color="#4facfe" />,
      tooltip: "Sites adaptés à tous les écrans et appareils.",
      category: "Intégration & UI",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap color="#7952b3" />,
      tooltip: "Framework CSS pour UI responsive et rapide.",
      category: "Intégration & UI",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss color="#38bdf8" />,
      tooltip: "Framework CSS utilitaire pour design moderne.",
      category: "Intégration & UI",
    },
    // Soft skills
    {
      name: "Communication",
      icon: <FaComments color="#4facfe" />,
      level: "avancé",
      tooltip: "Clarté, écoute et transmission efficace des idées.",
      category: "Compétences Transversales",
    },
    {
      name: "Travail d'équipe",
      icon: <FaUserFriends color="#4facfe" />,
      level: "avancé",
      tooltip: "Collaboration efficace et esprit d'équipe.",
      category: "Compétences Transversales",
    },
    {
      name: "Résolution de problèmes",
      icon: <FaPuzzlePiece color="#4facfe" />,
      level: "avancé",
      tooltip: "Trouver des solutions rapidement et efficacement.",
      category: "Compétences Transversales",
    },
    {
      name: "Gestion de projet",
      icon: <FaTasks color="#4facfe" />,
      level: "bon niveau",
      tooltip: "Organisation, planification et suivi des tâches.",
      category: "Compétences Transversales",
    },
    {
      name: "Adaptabilité",
      icon: <FaSyncAlt color="#4facfe" />,
      level: "avancé",
      tooltip: "S'adapter rapidement aux changements et nouveautés.",
      category: "Compétences Transversales",
    },
    {
      name: "Créativité",
      icon: <FaRegLightbulb color="#4facfe" />,
      level: "bon niveau",
      tooltip: "Proposer des idées innovantes et originales.",
      category: "Compétences Transversales",
    },
  ];

  // Catégories à afficher dans l'ordre
  const categories = [
    "Langages & Frameworks",
    "Bases de données",
    "Outils & Environnement",
    "Intégration & UI",
    "Compétences Transversales",
  ];

  return (
    <section id="competences" className="skills">
      <div className="skills-container">
        <div className={`skills-content ${isVisible ? "visible" : ""}`}>
          <SectionHeader title="Mes Compétences" />
          {categories.map((cat) => (
            <div key={cat} className="skills-grid-block">
              <h3 className="skills-grid-title">{cat}</h3>
              <div className="skills-icon-grid">
                {allSkills
                  .filter((s) => s.category === cat)
                  .map((skill, idx) => (
                    <div className="skill-icon-card" key={idx} tabIndex={0}>
                      {skill.level && (
                        <span
                          className={`skill-badge ${
                            skill.level === "avancé"
                              ? "badge-advanced"
                              : "badge-good"
                          }`}
                        >
                          {skill.level}
                        </span>
                      )}
                      <div className="skill-icon-main">{skill.icon}</div>
                      <div className="skill-icon-name">{skill.name}</div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
