import type { IconType } from "react-icons";
import {
  SiGit,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import "./TechMarquee.css";

const technologies: { name: string; icon: IconType }[] = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PHP", icon: SiPhp },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "Postman", icon: SiPostman },
];

const TechList = ({ hidden = false }: { hidden?: boolean }) => (
  <ul className="marquee-list" aria-hidden={hidden || undefined}>
    {technologies.map(({ name, icon: Icon }) => (
      <li key={name}>
        <Icon aria-hidden="true" />
        {name}
      </li>
    ))}
  </ul>
);

/** Bandeau défilant des technologies (la 2e liste, décorative, assure la boucle continue). */
const TechMarquee = () => (
  <section className="marquee" aria-label="Technologies utilisées">
    <div className="marquee-track">
      <TechList />
      <TechList hidden />
    </div>
  </section>
);

export default TechMarquee;
