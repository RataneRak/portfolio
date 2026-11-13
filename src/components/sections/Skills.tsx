import type { CSSProperties, ReactNode } from "react";
import {
  FaComments,
  FaPuzzlePiece,
  FaRegLightbulb,
  FaSitemap,
  FaSyncAlt,
  FaTasks,
  FaTerminal,
  FaUserFriends,
} from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import {
  SiBootstrap,
  SiFastapi,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbBug, TbChecklist, TbDevices, TbFileDescription, TbRefresh, TbTestPipe } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { useInView } from "../../hooks";
import { SectionHeader } from "../ui";
import "./Skills.css";

type Level = "Avancé" | "Bon niveau";

/** Animation jouée au survol, choisie selon l'identité de chaque technologie (voir Skills.css). */
type Effect =
  | "spin" | "bounce" | "type" | "flip" | "sway" | "heartbeat" | "zap" | "build"
  | "dive" | "stomp" | "leaf" | "resize" | "wind" | "kick" | "branch" | "jump"
  | "code" | "ping" | "blink" | "cycle" | "bubble" | "rewind" | "check" | "crawl"
  | "launch" | "stamp" | "talk" | "snap" | "idea";

interface Skill {
  name: string;
  fx: Effect;
  icon: ReactNode;
  color: string;
  level?: Level;
  description: string;
}

const skillGroups: { title: string; description: string; skills: Skill[] }[] = [
  {
    title: "Langages & Frameworks",
    description: "Le socle technique du quotidien.",
    skills: [
      { name: "React", fx: "spin", icon: <SiReact />, color: "#61dafb", level: "Avancé", description: "Interfaces dynamiques et SPA" },
      { name: "JavaScript", fx: "bounce", icon: <SiJavascript />, color: "#f7df1e", level: "Avancé", description: "Web interactif, ES6+" },
      { name: "TypeScript", fx: "type", icon: <SiTypescript />, color: "#3178c6", level: "Bon niveau", description: "Code typé et maintenable" },
      { name: "Next.js", fx: "flip", icon: <SiNextdotjs />, color: "#181717", description: "SSR, App Router, API routes" },
      { name: "PHP", fx: "sway", icon: <SiPhp />, color: "#777bb4", level: "Avancé", description: "Back-end natif, architecture MVC" },
      { name: "Node.js", fx: "heartbeat", icon: <SiNodedotjs />, color: "#5fa04e", level: "Bon niveau", description: "Serveurs et API rapides" },
      { name: "FastAPI", fx: "zap", icon: <SiFastapi />, color: "#009688", description: "API REST performantes en Python" },
      { name: "HTML / CSS", fx: "build", icon: <SiHtml5 />, color: "#e34f26", level: "Avancé", description: "Intégration sémantique" },
    ],
  },
  {
    title: "Bases de données",
    description: "Relationnel et documents.",
    skills: [
      { name: "MySQL", fx: "dive", icon: <SiMysql />, color: "#4479a1", description: "Base relationnelle" },
      { name: "PostgreSQL", fx: "stomp", icon: <SiPostgresql />, color: "#4169e1", description: "Relationnel avancé" },
      { name: "MongoDB", fx: "leaf", icon: <SiMongodb />, color: "#47a248", description: "NoSQL orienté documents" },
    ],
  },
  {
    title: "Interface & intégration",
    description: "Des interfaces soignées sur tous les écrans.",
    skills: [
      { name: "Responsive design", fx: "resize", icon: <MdDevices />, color: "var(--accent)", description: "Mobile first" },
      { name: "Tailwind CSS", fx: "wind", icon: <SiTailwindcss />, color: "#38bdf8", description: "CSS utilitaire" },
      { name: "Bootstrap", fx: "kick", icon: <SiBootstrap />, color: "#7952b3", description: "UI responsive rapide" },
    ],
  },
  {
    title: "Outils & méthodes",
    description: "Pour livrer proprement, en équipe.",
    skills: [
      { name: "Git", fx: "branch", icon: <SiGit />, color: "#f05032", description: "Gestion de version" },
      { name: "GitHub", fx: "jump", icon: <SiGithub />, color: "#181717", description: "Collaboration, CI/CD" },
      { name: "VS Code", fx: "code", icon: <VscVscode />, color: "#0a7bd6", description: "Éditeur de code" },
      { name: "API REST / JSON", fx: "ping", icon: <TbApi />, color: "var(--accent)", description: "Échange de données" },
      { name: "Terminal", fx: "blink", icon: <FaTerminal />, color: "var(--accent-2)", description: "Ligne de commande" },
      { name: "Agile (Scrum)", fx: "cycle", icon: <FaSitemap />, color: "var(--accent)", description: "Gestion itérative" },
    ],
  },
  {
    title: "Qualité & Tests (QA)",
    description: "Garantir la fiabilité du produit avant chaque mise en production.",
    skills: [
      { name: "Tests fonctionnels", fx: "bubble", icon: <TbTestPipe />, color: "var(--accent)", description: "Vérification des fonctionnalités face au besoin" },
      { name: "Tests de régression", fx: "rewind", icon: <TbRefresh />, color: "var(--accent-2)", description: "Non-régression après chaque évolution" },
      { name: "Plans & cas de test", fx: "check", icon: <TbChecklist />, color: "var(--accent)", description: "Conception et rédaction des scénarios de test" },
      { name: "Rapports d'anomalies", fx: "crawl", icon: <TbBug />, color: "#e5484d", description: "Bugs documentés, priorisés et reproductibles" },
      { name: "Tests d'API (Postman)", fx: "launch", icon: <SiPostman />, color: "#ff6c37", description: "Validation des endpoints REST" },
      { name: "Tests multi-supports", fx: "resize", icon: <TbDevices />, color: "var(--accent-2)", description: "Navigateurs, mobile et responsive" },
      { name: "Recette & validation", fx: "stamp", icon: <TbFileDescription />, color: "var(--accent)", description: "Recette fonctionnelle avant livraison" },
    ],
  },
];

const softSkills: { name: string; fx: Effect; icon: ReactNode }[] = [
  { name: "Communication", fx: "talk", icon: <FaComments /> },
  { name: "Travail d'équipe", fx: "bounce", icon: <FaUserFriends /> },
  { name: "Résolution de problèmes", fx: "snap", icon: <FaPuzzlePiece /> },
  { name: "Gestion de projet", fx: "check", icon: <FaTasks /> },
  { name: "Adaptabilité", fx: "rewind", icon: <FaSyncAlt /> },
  { name: "Créativité", fx: "idea", icon: <FaRegLightbulb /> },
];

const Skills = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.05);

  return (
    <section id="competences" className="section section-alt skills" aria-labelledby="competences-title">
      <div className="container">
        <SectionHeader
          id="competences-title"
          eyebrow="Compétences"
          title="Boîte à outils"
          subtitle="Technologies et méthodes au service de la conception, du développement, des tests et de la livraison."
        />

        <div ref={ref} className={`skills-groups stagger ${inView ? "is-visible" : ""}`}>
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-group">
              <header className="skill-group-header">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </header>
              <ul className="skill-list stagger" style={{ "--stagger-base": "250ms" } as CSSProperties}>
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={`skill-item fx-${skill.fx}`}
                    title={skill.description}
                    style={{ "--brand": skill.color } as CSSProperties}
                  >
                    <span className="skill-icon" aria-hidden="true">
                      {skill.icon}
                    </span>
                    <span className="skill-name">{skill.name}</span>
                    {skill.level && (
                      <span
                        className={`skill-level ${skill.level === "Avancé" ? "level-advanced" : "level-good"}`}
                      >
                        {skill.level}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <article className="skill-group soft-skills">
            <header className="skill-group-header">
              <h3>Compétences transversales</h3>
            </header>
            <ul className="soft-list stagger" style={{ "--stagger-base": "250ms" } as CSSProperties}>
              {softSkills.map((skill) => (
                <li key={skill.name} className={`soft-item fx-${skill.fx}`}>
                  <span className="soft-icon" aria-hidden="true">
                    {skill.icon}
                  </span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
