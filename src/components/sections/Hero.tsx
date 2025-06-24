import { useEffect, useState } from 'react';
import { Button } from '../ui';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="hero">
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-text">
            <h1 className="hero-title">
              Bonjour, je suis <span className="highlight">RAKOTOARISOA Tanjona Nomenjanahary</span>
            </h1>
            <h2 className="hero-subtitle">Développeur Full Stack</h2>
            <p className="hero-description">
              Passionné par la création d'applications web modernes et performantes. 
              Spécialisé dans le développement e-commerce et les applications éducatives 
              avec PHP, NodeJs et React.
            </p>
            <div className="hero-buttons">
              <Button variant="primary" size="large" onClick={scrollToContact}>
                Me contacter
              </Button>
              <Button 
                variant="secondary" 
                size="large"
                onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Voir mes projets
              </Button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  <span>👨‍💻</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>Développeur Full Stack</h3>
                <p>PHP • NodeJs • React • JavaScript</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 