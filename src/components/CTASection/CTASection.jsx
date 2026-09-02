import { ArrowUpRight, Phone, Sparkles } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import TiltCard from '../TiltCard/TiltCard';
import ArchitecturalBg from '../ArchitecturalBg/ArchitecturalBg';
import './CTASection.css';

export default function CTASection({
  title = "Your Next Business Address Starts Here.",
  subtitle = "Where Vision Meets Value.",
  description = "Looking for retail, office, studio or commercial investment opportunities at Y2R Heights? Speak with our advisory team and discover the space that fits your requirement.",
  onOpenEnquiry
}) {
  return (
    <section className="cta-section-wrapper">
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
                  <button onClick={onOpenEnquiry} className="btn-primary cta-action-btn">
                    <span>Schedule a Consultation</span>
                    <ArrowUpRight size={16} />
                  </button>

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

