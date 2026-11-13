import type { CSSProperties } from "react";
import { FiBookOpen, FiBriefcase } from "react-icons/fi";
import { education, experiences } from "../../data/portfolio";
import { useInView } from "../../hooks";
import { SectionHeader } from "../ui";
import "./Experience.css";

const Experience = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader
          id="experience-title"
          eyebrow="Expérience"
          title="Parcours professionnel"
          subtitle="Des missions en entreprise, en stage et en indépendant, complétées par une formation en ingénierie informatique."
        />

        <div ref={ref} className={`career reveal ${inView ? "is-visible" : ""}`}>
          <div className="career-column">
            <h3 className="career-title">
              <FiBriefcase aria-hidden="true" /> Expérience
            </h3>
            <ol className="timeline stagger">
              {experiences.map((exp) => (
                <li key={exp.title + exp.period} className="timeline-item">
                  <span className="timeline-period">{exp.period}</span>
                  <h4>{exp.title}</h4>
                  <p className="timeline-company">{exp.company}</p>
                  <ul className="timeline-missions">
                    {exp.missions.map((mission) => (
                      <li key={mission}>{mission}</li>
                    ))}
                  </ul>
                  <div className="timeline-tags">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="career-column">
            <h3 className="career-title">
              <FiBookOpen aria-hidden="true" /> Formation
            </h3>
            <div className="education-list stagger" style={{ "--stagger-base": "200ms" } as CSSProperties}>
              {education.map((edu) => (
                <article key={edu.degree} className="education-card">
                  <span className="timeline-period">{edu.period}</span>
                  <h4>{edu.degree}</h4>
                  <p>{edu.school}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
