import React from "react";
import { useInView } from "../../hooks";
import "./SectionHeader.css";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, subtitle, id }) => {
  const { ref, inView } = useInView<HTMLElement>(0.3);

  return (
    <header ref={ref} className={`section-header stagger ${inView ? "is-visible" : ""}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title" id={id}>
        <span className="title-fill">{title}</span>
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  );
};

export default SectionHeader;
