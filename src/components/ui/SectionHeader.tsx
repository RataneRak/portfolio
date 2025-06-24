import React from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  const headerClasses = [
    'section-header',
    centered ? 'section-header-centered' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={headerClasses}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="section-line"></div>
    </div>
  );
};

export default SectionHeader; 