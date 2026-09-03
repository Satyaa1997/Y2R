import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import './SectionHeading.css';

export default function SectionHeading({
  title = '',
  subtitle = '',
  description = '',
  align = 'center',
  theme = 'dark',
  className = ''
}) {
  return (
    <div className={`section-heading align-${align} theme-${theme} ${className}`}>
      <RevealOnScroll animation="fade-up" delay={100}>
        <h2 className="section-title">
          {title}
        </h2>
      </RevealOnScroll>

      {subtitle && (
        <RevealOnScroll animation="fade-up" delay={250}>
          <p className="section-subtitle">{subtitle}</p>
        </RevealOnScroll>
      )}

      {description && (
        <RevealOnScroll animation="fade-up" delay={300}>
          <p className="section-description">{description}</p>
        </RevealOnScroll>
      )}

      <div className="section-divider" aria-hidden="true">
        <span className="divider-line" />
        <span className="divider-diamond" />
        <span className="divider-line" />
      </div>
    </div>
  );
}

