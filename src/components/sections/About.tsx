import type { CSSProperties } from "react";
import { profile, stats } from "../../data/portfolio";
import { useInView } from "../../hooks";
import { SectionHeader } from "../ui";
import "./About.css";

const About = () => {
  const intro = useInView<HTMLDivElement>();

  const personalInfo = [
    { label: "Nom", value: `${profile.lastName} ${profile.firstName}` },
    { label: "Formation", value: "Master en Ingénierie Informatique" },
    { label: "Localisation", value: profile.location },
    { label: "Disponibilité", value: profile.availability },
  ];

  return (
    <section id="apropos" className="section section-alt about" aria-labelledby="apropos-title">
      <div className="container">
        <SectionHeader
          id="apropos-title"
          index="01"
          eyebrow="À propos"
          title="Profil"
          subtitle="Concevoir, développer et tester : transformer des besoins métier en produits web fiables, rapides et agréables à utiliser."
        />

        <div ref={intro.ref} className={`about-intro reveal ${intro.inView ? "is-visible" : ""}`}>
          <div className="about-text">
            <p>
              Développeur Full Stack et <strong>Testeur QA</strong>, spécialisé dans la conception
              d'applications web <strong>performantes</strong>, <strong>maintenables</strong> et
              pensées pour leurs utilisateurs. De la plateforme e-commerce au back-office métier,
              intervention sur l'ensemble du cycle&nbsp;: analyse du
              besoin, architecture, développement et mise en production.
            </p>
            <p>
              Environnement technique&nbsp;: <strong>React</strong> et <strong>Next.js</strong>{" "}
              côté interface, <strong>Node.js</strong> et <strong>PHP</strong> côté serveur, avec des
              bases <strong>SQL (MySQL, PostgreSQL)</strong> et <strong>NoSQL (MongoDB)</strong>.
              Travail en équipe avec <strong>Git</strong> et en méthode <strong>Agile</strong>, avec
              une attention constante portée à la qualité du code.
            </p>
            <p>
              Côté <strong>assurance qualité</strong>&nbsp;: rédaction de plans et de cas de test,
              tests fonctionnels, de régression et d'API, documentation claire et reproductible des
              anomalies. Une double compétence qui permet de détecter les problèmes au plus tôt et
              de livrer un produit fiable.
            </p>

            <dl className="info-list stagger">
              {personalInfo.map((info) => (
                <div key={info.label} className="info-item">
                  <dt>{info.label}</dt>
                  <dd>{info.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="stats-grid stagger" style={{ "--stagger-base": "150ms" } as CSSProperties}>
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card spotlight">
                <span className="stat-value gradient-text">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
