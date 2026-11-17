import React from "react";
import { useInView } from "../../hooks";
import "./SectionHeader.css";

interface SectionHeaderProps {
  /** Numéro de section affiché devant le sur-titre (ex. « 01 »). */
  index?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ index, eyebrow, title, subtitle, id }) => {
  const { ref, inView } = useInView<HTMLElement>(0.3);

  return (
    <header ref={ref} className={`section-header stagger ${inView ? "is-visible" : ""}`}>
      {eyebrow && (
        <span className="section-eyebrow">
          {index && <span className="eyebrow-index">{index}</span>}
          {eyebrow}
        </span>
      )}
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  );
};

export default SectionHeader;
