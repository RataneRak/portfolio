import { useEffect, useState } from "react";
import { SectionHeader } from "../ui";
import "./About.css";

const About = () => {
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

    const element = document.getElementById("apropos");
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

  const experiences = [
    {
      year: "2025",
      title: "Création d'un site de revendeur de voiture",
      company: "Projet personnel",
      description:
        "Conception et développement d'un site web pour un revendeur de voitures : gestion de catalogue, recherche avancée, prise de contact, et interface d'administration intuitive. Pour ce projet, j'ai utilisé React.js, Tailwind CSS et React Router pour le frontend, tandis que le backend repose sur Node.js et Express.js. L'interface d'administration a été réalisée avec React.js et Material UI. Les données sont stockées dans une base MongoDB. Enfin, j'ai utilisé Git et GitHub pour la gestion de version, ainsi que Vite pour le bundling et l'optimisation du projet.",
    },
    {
      year: "Mai 2024 - Septembre 2024",
      title: "Développeur Full Stack",
      company: "Maki Company",
      description:
        "Refonte complète du site existant en utilisant NodeJs pour le back-end et React pour le front-end. Optimisation des performances, modernisation de l'interface utilisateur et intégration de nouvelles fonctionnalités : système de paiement en ligne, chatbot IA pour l'assistance client, et gestion avancée des stocks.",
    },
    {
      year: "Mars 2023 - Juin 2023",
      title: "Développeur Web",
      company: "Magasin Maki Company, Analakely et Behoririka",
      description:
        "Développement d'un site e-commerce complet en PHP MVC (sans framework) pour la gestion des ventes en ligne. Mise en place des fonctionnalités essentielles : catalogue de produits, gestion des commandes, interface administrateur et espace client.",
    },
    {
      year: "Juin 2022 - Août 2022",
      title: "Stagiaire Développeur Web",
      company: "Lycée Privé La Lumière Ambatolampy",
      description:
        "Développement d'un site éducatif destiné à la digitalisation des services scolaires à Madagascar. Conception en PHP avec une architecture MVC, assurant une interface utilisateur simple et efficace pour la gestion des cours et des inscriptions.",
    },
  ];

  const education = [
    {
      year: "2024",
      degree: "Master en Ingénierie Informatique (en cours)",
      school:
        "Ecole Supérieure de Management et d'informatique Appliquée (ESMIA)",
      description: "Formation en cours spécialisée en ingénierie informatique",
    },
    {
      year: "2023",
      degree: "Licence en Sciences Informatiques",
      school:
        "Ecole Supérieure de Management et d'informatique Appliquée (ESMIA)",
      description: "Formation générale en sciences informatiques",
    },
  ];

  return (
    <section id="apropos" className="about">
      <div className="about-container">
        <div className={`about-content ${isVisible ? "visible" : ""}`}>
          <SectionHeader title="À propos de moi" />

          <div className="about-grid">
            <div className="about-text">
              <h3>Qui suis-je ?</h3>
              <p>
                Développeur Full Stack passionné, je suis spécialisé dans la
                création d'applications web performantes et d'expériences
                numériques intuitives. Mes projets, comme la{" "}
                <strong>
                  création d'un site pour un revendeur de voitures
                </strong>{" "}
                ou la <strong>refonte de plateformes e-commerce</strong>, m'ont
                permis d'acquérir une expertise solide des technologies
                modernes.
              </p>
              <p>
                Je maîtrise aussi bien le back-end avec <strong>Node.js</strong>{" "}
                que le front-end avec <strong>React</strong>, et je m'appuie sur
                un large éventail de compétences incluant{" "}
                <strong>
                  PHP, JavaScript, SQL (MySQL, PostgreSQL) et NoSQL (MongoDB)
                </strong>
                . Des outils comme <strong>Git</strong> et des méthodologies{" "}
                <strong>Agiles</strong> font partie de mon quotidien pour mener
                à bien mes projets. Mon objectif est de transformer des idées
                complexes en solutions techniques élégantes et fonctionnelles.
              </p>

              <div className="personal-info">
                <div className="info-item">
                  <strong>Nom :</strong> RAKOTOARISOA Tanjona Nomenjanahary
                </div>
                <div className="info-item">
                  <strong>Âge :</strong> 24 ans
                </div>
                <div className="info-item">
                  <strong>Localisation :</strong> Madagascar
                </div>
                <div className="info-item">
                  <strong>Disponibilité :</strong> Ouvert aux opportunités
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-label">Années d'expérience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4+</div>
                <div className="stat-label">Projets réalisés</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">8+</div>
                <div className="stat-label">Technologies maîtrisées</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfaction client</div>
              </div>
            </div>
          </div>

          <div className="experience-section">
            <h3>Expérience Professionnelle</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">{exp.year}</div>
                    <h4>{exp.title}</h4>
                    <div className="timeline-company">{exp.company}</div>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h3>Formation</h3>
            <div className="education-grid">
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <div className="education-year">{edu.year}</div>
                  <h4>{edu.degree}</h4>
                  <div className="education-school">{edu.school}</div>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
