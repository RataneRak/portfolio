import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUp, FiMail } from "react-icons/fi";
import { navItems, profile } from "../../data/portfolio";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#accueil" className="logo">
            <span className="logo-mark">{profile.initials}</span>
            <span className="logo-text">{profile.shortName}</span>
          </a>
          <p>{profile.role} basé à {profile.location}.</p>
        </div>

        <nav className="footer-nav" aria-label="Navigation du pied de page">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="E-mail">
            <FiMail />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {currentYear} {profile.lastName} {profile.firstName}. Tous droits réservés.
        </p>
        <a href="#accueil" className="back-to-top">
          Haut de page <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
