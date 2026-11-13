import { useEffect, useRef, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { navItems, profile } from "../../data/portfolio";
import { useActiveSection, useTheme } from "../../hooks";
import "./Header.css";

const sectionIds = navItems.map((item) => item.id);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
      // Barre de progression : mise à jour directe du style, sans re-rendu React
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current?.style.setProperty("--progress", String(max > 0 ? window.scrollY / max : 0));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled || isMenuOpen ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#accueil" className="logo" aria-label="Retour à l'accueil">
          <span className="logo-mark">{profile.initials}</span>
          <span className="logo-text">{profile.shortName}</span>
        </a>

        <nav
          id="main-nav"
          className={`nav ${isMenuOpen ? "nav-open" : ""}`}
          aria-label="Navigation principale"
        >
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? "active" : ""}
                  aria-current={activeSection === item.id ? "true" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
            }}
            aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"}
            title={theme === "dark" ? "Thème clair" : "Thème sombre"}
          >
            <span className="theme-icon" key={theme}>
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </span>
          </button>
          <button
            className="icon-btn menu-toggle"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="main-nav"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
    </header>
  );
};

export default Header;
