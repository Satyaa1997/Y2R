import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SPACES_CATEGORIES } from '../../data/projectData';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import './Spaces.css';

export default function Spaces({ onOpenEnquiry }) {
  return (
    <div className="spaces-page-root">
      {/* Page Hero */}
      <section className="page-hero-section theme-section-light architectural-grid">
        <ArchitecturalBg variant="spaces_hero" />
        <div className="container-custom page-hero-content">
          <RevealOnScroll animation="fade-up">
            <span className="gold-badge">Spatial Ecosystem</span>
            <h1 className="page-hero-title">
              Spaces Designed <br />
              <span className="gold-gradient-text">Around Possibility.</span>
            </h1>
            <p className="page-hero-desc">
              From high-visibility retail storefronts and self-contained boutique offices to contemporary studio suites and vibrant culinary floors, discover thoughtful spaces tailored for performance.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Spaces Listing */}
      <section className="section-padding theme-section-white spaces-list-section">
        <ArchitecturalBg variant="spaces_list" />
        <div className="container-custom">
          <div className="spaces-detailed-stack">
            {SPACES_CATEGORIES.map((space, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <RevealOnScroll
                  key={space.id}
                  animation="fade-up"
                  className="space-stack-row"
                >
                  <div className={`space-stack-card ${isEven ? 'row-reverse' : ''}`}>
                    {/* Media Column */}
                    <div className="space-stack-media">
                      <TiltCard maxTilt={6} scale={1.01} className="space-stack-tilt">
                        <div className="space-stack-img-wrap">
                          <img src={space.image} alt={space.title} />
                          <span className="space-stack-badge">{space.badge}</span>
                        </div>
                      </TiltCard>
                    </div>

                    {/* Content Column */}
                    <div className="space-stack-content">
                      <div className="space-num-tag">0{idx + 1}</div>
                      <h2 className="space-stack-title">{space.title}</h2>
                      <p className="space-stack-tagline">{space.tagline}</p>
                      <p className="space-stack-desc">{space.description}</p>

                      <div className="space-stack-features">
                        <h4 className="features-subhead">Key Highlights</h4>
                        <ul className="features-list">
                          {space.features.map((feat, fIdx) => (
                            <li key={fIdx}>
                              <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-stack-actions">
                        <Link to={space.slug} className="btn-primary">
                          <span>{space.ctaText}</span>
                          <ArrowRight size={16} />
                        </Link>
                        <button
                          onClick={() => onOpenEnquiry(space.shortTitle)}
                          className="btn-secondary"
                        >
                          <span>Enquire For This Space</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Find The Ideal Space for Your Brand"
        subtitle="Where Vision Meets Value."
        description="Speak directly with our commercial leasing team for tailored space recommendations."
        onOpenEnquiry={() => onOpenEnquiry("Commercial Spaces")}
      />
    </div>
  );
}

