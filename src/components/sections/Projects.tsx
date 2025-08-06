import { useState, useEffect } from "react";
import { SectionHeader, Button } from "../ui";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const element = document.getElementById("projets");
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

  const projects = [
    {
      id: 3,
      title: "Site de Revendeur de Voiture",
      description:
        "Création d'un site web moderne pour un revendeur de voitures : gestion de catalogue, recherche avancée, prise de contact, et interface d'administration intuitive. Frontend en React.js & Tailwind CSS, backend Node.js/Express, base MongoDB.",
      image: "/revendeur.jpeg",
      category: "web",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "React Router",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Material UI",
        "Git",
        "Vite",
      ],
      link: "#",
      github: "#",
      featured: true,
    },
    {
      id: 1,
      title: "Site E-commerce Maki Company",
      description:
        "Refonte complète du site e-commerce avec NodeJs et React. Intégration de nouvelles fonctionnalités : système de paiement en ligne, chatbot IA pour l'assistance client, et gestion avancée des stocks.",
      image: "🛒",
      category: "ecommerce",
      technologies: ["NodeJs", "React", "PHP", "MySQL", "JavaScript"],
      link: "#",
      github: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Site E-commerce PHP MVC",
      description:
        "Développement d'un site e-commerce complet en PHP MVC (sans framework) pour la gestion des ventes en ligne. Fonctionnalités : catalogue de produits, gestion des commandes, interface administrateur.",
      image: "🛍️",
      category: "ecommerce",
      technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "MVC"],
      link: "#",
      github: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Site Éducatif - Lycée La Lumière",
      description:
        "Site éducatif destiné à la digitalisation des services scolaires à Madagascar. Interface utilisateur simple et efficace pour la gestion des cours et des inscriptions.",
      image: "🎓",
      category: "education",
      technologies: ["PHP", "MySQL", "HTML/CSS", "MVC Architecture"],
      link: "#",
      github: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio Personnel",
      description:
        "Portfolio moderne et responsive avec animations et design optimisé. Développé avec React et TypeScript.",
      image: "🎨",
      category: "web",
      technologies: ["React", "TypeScript", "CSS3", "Vite"],
      link: "#",
      github: "#",
      featured: false,
    },
  ];

  const filters = [
    { id: "all", label: "Tous" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "education", label: "Éducation" },
    { id: "web", label: "Web" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projets" className="projects">
      <div className="projects-container">
        <div className={`projects-content ${isVisible ? "visible" : ""}`}>
          <SectionHeader title="Mes Projets" />

          <div className="projects-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${
                  activeFilter === filter.id ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${project.featured ? "featured" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">
                  {project.image && project.image.endsWith(".jpeg") ? (
                    <img
                      src={project.image}
                      alt={project.title + " couverture"}
                      className="project-cover-image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div className="project-icon">{project.image}</div>
                  )}
                  {project.featured && (
                    <div className="featured-badge">Projet Vedette</div>
                  )}
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.link}
                      className="project-link-btn primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Voir le projet"
                      title="Voir le projet"
                    >
                      <FaExternalLinkAlt />
                      <span className="visually-hidden">Voir le projet</span>
                    </a>
                    <a
                      href={project.github}
                      className="project-link-btn secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Code source"
                      title="Code source"
                    >
                      <FaGithub />
                      <span className="visually-hidden">Code source</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="projects-cta">
            <h3>Vous avez un projet en tête ?</h3>
            <p>
              Je serais ravi de discuter de vos idées et de vous aider à les
              concrétiser.
            </p>
            <Button
              variant="primary"
              size="large"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Parlons de votre projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
