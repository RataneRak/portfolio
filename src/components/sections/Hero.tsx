import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowDown, FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { profile } from "../../data/portfolio";
import { Button } from "../ui";
import "./Hero.css";

const Hero = () => (
  <section id="accueil" className="hero">
    <div className="hero-bg" aria-hidden="true">
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
    </div>

    <div className="container hero-inner">
      <div className="hero-text stagger is-visible">
        <span className="hero-badge">
          <span className="pulse-dot" aria-hidden="true" />
          {profile.availability}
        </span>

        <h1 className="hero-title">{profile.displayName}</h1>
        <p className="hero-role gradient-text">{profile.role}</p>
        <p className="hero-description">{profile.tagline}</p>

        <div className="hero-actions">
          <Button href="#projets" size="large">
            Voir les réalisations <FiArrowRight aria-hidden="true" />
          </Button>
          {profile.cvUrl ? (
            <Button href={profile.cvUrl} variant="secondary" size="large" external>
              <FiDownload aria-hidden="true" /> Télécharger le CV
            </Button>
          ) : (
            <Button href="#contact" variant="secondary" size="large">
              Prendre contact
            </Button>
          )}
        </div>

        <div className="hero-meta">
          <span className="hero-location">
            <FiMapPin aria-hidden="true" /> {profile.location}
          </span>
          <span className="hero-divider" aria-hidden="true" />
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-photo-ring">
          <img
            src={profile.photo}
            alt={`${profile.firstName} ${profile.lastName}`}
            className="hero-photo"
            width={720}
            height={720}
            fetchPriority="high"
          />
        </div>
        <div className="hero-chip hero-chip-1">
          <span className="chip-dot" />
          {profile.heroStack.slice(0, 2).join(" · ")}
        </div>
        <div className="hero-chip hero-chip-2">
          <span className="chip-dot" />
          {profile.heroStack.slice(2).join(" · ")}
        </div>
      </div>
    </div>

    <a href="#apropos" className="scroll-hint" aria-label="Défiler vers la section À propos">
      <FiArrowDown />
    </a>
  </section>
);

export default Hero;
