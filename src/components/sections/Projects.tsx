import { useState } from "react";
import type { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight, FiCheck, FiCode, FiExternalLink, FiShoppingCart } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import {
  projectFilters,
  projects,
  type Project,
  type ProjectCategory,
} from "../../data/portfolio";
import { useInView } from "../../hooks";
import { Button, SectionHeader } from "../ui";
import "./Projects.css";

const categoryIcons: Record<ProjectCategory, IconType> = {
  ecommerce: FiShoppingCart,
  education: LuGraduationCap,
  web: FiCode,
};

const categoryLabels: Record<ProjectCategory, string> = {
  ecommerce: "E-commerce",
  education: "Éducation",
  web: "Web",
};

const ProjectCard = ({ project }: { project: Project }) => {
  const Icon = categoryIcons[project.category];

  return (
    <article className={`project-card ${project.featured ? "is-featured" : ""}`}>
      <div className={`project-media media-${project.category}`}>
        {project.image ? (
          <img src={project.image} alt={`Aperçu : ${project.title}`} loading="lazy" />
        ) : (
          <Icon className="project-media-icon" aria-hidden="true" />
        )}
        {project.featured && <span className="project-badge">À la une</span>}
      </div>

      <div className="project-body">
        <div className="project-meta">
          <span className="project-category">{categoryLabels[project.category]}</span>
          <span className="project-context">
            {project.context} · {project.year}
          </span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {project.highlights && (
          <ul className="project-highlights">
            {project.highlights.map((item) => (
              <li key={item}>
                <FiCheck aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>
        )}

        <ul className="project-tech" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>

        {(project.link || project.github) && (
          <div className="project-links">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FiExternalLink aria-hidden="true" /> Voir le site
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub aria-hidden="true" /> Code source
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]["id"]>("all");
  const { ref, inView } = useInView<HTMLDivElement>(0.05);

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projets" className="section projects" aria-labelledby="projets-title">
      <div className="container">
        <SectionHeader
          id="projets-title"
          eyebrow="Projets"
          title="Réalisations"
          subtitle="Une sélection de projets menés en entreprise, en stage et en indépendant — du e-commerce aux applications métier."
        />

        <div ref={ref} className={`reveal ${inView ? "is-visible" : ""}`}>
          <div className="projects-filters" role="group" aria-label="Filtrer les projets">
            {projectFilters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
                aria-pressed={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className={`projects-grid stagger ${inView ? "is-visible" : ""}`} key={activeFilter}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="projects-cta">
            <div>
              <h3>Un projet ou un poste à pourvoir&nbsp;?</h3>
              <p>Discutons de vos besoins en développement ou en assurance qualité.</p>
            </div>
            <Button href="#contact" size="large">
              Parlons-en <FiArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
