import { useEffect, useState } from 'react';
import { SectionHeader } from '../ui';
import './Skills.css';

const Skills = () => {
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

    const element = document.getElementById('competences');
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

  const technicalSkills = [
    { name: 'PHP', level: 90, icon: '🐘' },
    { name: 'NodeJs', level: 85, icon: '🔥' },
    { name: 'React', level: 80, icon: '⚛️' },
    { name: 'JavaScript', level: 85, icon: '🟨' },
    { name: 'HTML/CSS', level: 90, icon: '🎨' },
    { name: 'MySQL', level: 80, icon: '🗄️' },
    { name: 'Git', level: 75, icon: '📚' },
    { name: 'MVC Architecture', level: 85, icon: '🏗️' }
  ];

  const softSkills = [
    { name: 'Communication', level: 85 },
    { name: 'Travail d\'équipe', level: 90 },
    { name: 'Résolution de problèmes', level: 88 },
    { name: 'Gestion de projet', level: 80 },
    { name: 'Adaptabilité', level: 92 },
    { name: 'Créativité', level: 85 }
  ];

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Composer', icon: '📦' },
    { name: 'npm', icon: '📦' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'MySQL Workbench', icon: '🗄️' },
    { name: 'Postman', icon: '📮' },
    { name: 'Figma', icon: '🎨' },
    { name: 'XAMPP', icon: '🖥️' }
  ];

  return (
    <section id="competences" className="skills">
      <div className="skills-container">
        <div className={`skills-content ${isVisible ? 'visible' : ''}`}>
          <SectionHeader title="Mes Compétences" />

          <div className="skills-grid">
            <div className="skills-section">
              <h3>Compétences Techniques</h3>
              <div className="skills-list">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-section">
              <h3>Compétences Transversales</h3>
              <div className="skills-list">
                {softSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="tools-section">
            <h3>Outils & Technologies</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-card">
                  <div className="tool-icon">{tool.icon}</div>
                  <div className="tool-name">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="certifications-section">
            <h3>Domaines d'Expertise</h3>
            <div className="certifications-grid">
              <div className="certification-card">
                <div className="certification-icon">🛒</div>
                <h4>E-commerce</h4>
                <p>Développement de sites de vente en ligne</p>
                <span className="certification-date">Expérience confirmée</span>
              </div>
              <div className="certification-card">
                <div className="certification-icon">🎓</div>
                <h4>Applications Éducatives</h4>
                <p>Digitalisation des services scolaires</p>
                <span className="certification-date">Projet réalisé</span>
              </div>
              <div className="certification-card">
                <div className="certification-icon">🤖</div>
                <h4>Intelligence Artificielle</h4>
                <p>Intégration de chatbots IA</p>
                <span className="certification-date">Nouvelle compétence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 