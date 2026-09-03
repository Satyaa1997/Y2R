import { ArrowUpRight, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECT_INFO } from '../../data/projectData';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import TiltCard from '../TiltCard/TiltCard';
import ArchitecturalBg from '../ArchitecturalBg/ArchitecturalBg';
import './CTASection.css';

export default function CTASection({
  title = "Ready to Explore Y2R Heights?",
  subtitle = "Direct Commercial Consultation",
  description = "Connect with our advisory team for customized floor layouts, pricing structures, and unit availability.",
  theme = "white",
  className = ""
}) {
  return (
    <section className={`cta-section-wrapper theme-${theme} theme-section-white ${className}`}>
      <div className="cta-container">
        <RevealOnScroll animation="zoom-in" duration={800}>
          <TiltCard maxTilt={6} scale={1.01} className="cta-tilt-card">
            <div className="cta-card-inner architectural-grid-gold">
              <ArchitecturalBg variant="cta_banner" />
              <div className="cta-content">
                <div className="cta-badge">
                  <Sparkles size={14} className="text-gold" />
                  <span>Strategic Lucknow Address</span>
                </div>

                <h2 className="cta-title">{title}</h2>
                <p className="cta-subtitle">{subtitle}</p>
                <p className="cta-description">{description}</p>

                <div className="cta-buttons-wrap">
                  <Link to="/contact" className="btn-primary cta-action-btn">
                    <span>Connect With Advisory Team</span>
                    <ArrowUpRight size={16} />
                  </Link>

                  <a
                    href={`tel:${PROJECT_INFO.tollFree.replace(/\s+/g, '')}`}
                    className="btn-secondary cta-phone-btn"
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
          </TiltCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}

