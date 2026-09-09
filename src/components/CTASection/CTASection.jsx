import { ArrowUpRight, Phone, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PROJECT_INFO } from '../../data/projectData';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import SiteOfficeAnimation from '../SiteOfficeAnimation/SiteOfficeAnimation';
import './CTASection.css';

export default function CTASection({
  badge,
  title = "Ready to Explore Y2R Heights?",
  subtitle = "Direct Commercial Consultation",
  description = "Connect with our advisory team for customized floor layouts, pricing structures, and unit availability.",
  theme = "white",
  className = "",
  onOpenEnquiry,
  buttonText = "Connect With Advisory Team"
}) {
  const navigate = useNavigate();

  const handleActionClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof onOpenEnquiry === 'function') {
      onOpenEnquiry();
    } else {
      navigate('/contact');
    }
  };

  return (
    <section className={`cta-section-wrapper theme-${theme} ${className}`}>
      <div className="cta-container">
        <RevealOnScroll animation="zoom-in" duration={800}>
          <div className={`cta-card-inner cta-card-${theme} architectural-grid-gold`}>
            <SiteOfficeAnimation />
            <div className="cta-content">
              {badge && (
                <div className="cta-badge">
                  <Sparkles size={12} className="text-gold" />
                  <span>{badge}</span>
                </div>
              )}
              <h2 className="cta-title">{title}</h2>
              <p className="cta-subtitle">{subtitle}</p>
              <p className="cta-description">{description}</p>

              <div className="cta-buttons-wrap">
                <button
                  type="button"
                  onClick={handleActionClick}
                  className="btn-primary cta-action-btn"
                  aria-label={buttonText}
                >
                  <span>{buttonText}</span>
                  <ArrowUpRight size={16} />
                </button>

                <a
                  href={`tel:${PROJECT_INFO.tollFree.replace(/\s+/g, '')}`}
                  className="btn-secondary cta-phone-btn"
                  aria-label={`Call ${PROJECT_INFO.tollFree}`}
                >
                  <Phone size={15} className="text-gold" />
                  <span>Call {PROJECT_INFO.tollFree}</span>
                </a>
              </div>

              <div className="cta-footnote">
                <span>Kursi Road | Jankipuram Extension, Lucknow</span>
                <span className="dot-sep">•</span>
                <span>RERA: {PROJECT_INFO.reraNumber}</span>
              </div>
            </div>

            {/* Decorative Corner Accents */}
            <div className="cta-corner cta-corner-tl" />
            <div className="cta-corner cta-corner-br" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
