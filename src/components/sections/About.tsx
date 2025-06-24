import { useEffect, useState } from 'react';
import { SectionHeader } from '../ui';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const element = document.getElementById('apropos');
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
      year: 'Mai 2024 - Septembre 2024',
      title: 'Développeur Full Stack',
      company: 'Maki Company',
      description: 'Refonte complète du site existant en utilisant NodeJs pour le back-end et React pour le front-end. Optimisation des performances, modernisation de l\'interface utilisateur et intégration de nouvelles fonctionnalités : système de paiement en ligne, chatbot IA pour l\'assistance client, et gestion avancée des stocks.'
    },
    {
      year: 'Mars 2023 - Juin 2023',
      title: 'Développeur Web',
      company: 'Magasin Maki Company, Analakely et Behoririka',
      description: 'Développement d\'un site e-commerce complet en PHP MVC (sans framework) pour la gestion des ventes en ligne. Mise en place des fonctionnalités essentielles : catalogue de produits, gestion des commandes, interface administrateur et espace client.'
    },
    {
      year: 'Juin 2022 - Août 2022',
      title: 'Stagiaire Développeur Web',
      company: 'Lycée Privé La Lumière Ambatolampy',
      description: 'Développement d\'un site éducatif destiné à la digitalisation des services scolaires à Madagascar. Conception en PHP avec une architecture MVC, assurant une interface utilisateur simple et efficace pour la gestion des cours et des inscriptions.'
    }
  ];

  const education = [
    {
      year: '2024',
      degree: 'Master en Ingénierie Informatique (en cours)',
      school: 'Ecole Supérieure de Management et d\'informatique Appliquée (ESMIA)',
      description: 'Formation en cours spécialisée en ingénierie informatique'
    },
    {
      year: '2023',
      degree: 'Licence en Sciences Informatiques',
      school: 'Ecole Supérieure de Management et d\'informatique Appliquée (ESMIA)',
      description: 'Formation générale en sciences informatiques'
    }
  ];

  return (
    <section id="apropos" className="about">
      <div className="about-container">
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <SectionHeader title="À propos de moi" />

          <div className="about-grid">
            <div className="about-text">
              <h3>Qui suis-je ?</h3>
              <p>
                Je suis un développeur passionné par la création d'expériences numériques 
                exceptionnelles. Avec une solide formation en informatique et plusieurs 
                années d'expérience dans le développement web, je combine créativité et 
                expertise technique pour transformer vos idées en réalité.
              </p>
              <p>
                Mon approche se concentre sur l'écriture de code propre, maintenable et 
                performant, tout en créant des interfaces utilisateur intuitives et 
                esthétiques. Je suis constamment à l'affût des nouvelles technologies 
                et des meilleures pratiques pour offrir des solutions innovantes.
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
                <div className="stat-number">3+</div>
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