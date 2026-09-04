import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import spaceVideo from '../../assets/Space.mp4';
import { SPACES_CATEGORIES } from '../../data/projectData';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import './Spaces.css';

export default function Spaces({ onOpenEnquiry }) {
  return (
    <div className="spaces-page-root">
      {/* 1. Page Hero (Clear Visible Background Video) */}
      <section className="page-hero-section spaces-hero-section theme-section-dark">
        {/* Background Video & Soft Overlay for Clear Visibility */}
        <div className="spaces-hero-video-bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="spaces-hero-video"
          >
            <source src={spaceVideo} type="video/mp4" />
          </video>
          <div className="spaces-hero-video-overlay" />
        </div>

        <div className="container-custom page-hero-content spaces-hero-content">
          <RevealOnScroll animation="fade-up">
            <h1 className="page-hero-title">
              Spaces Designed <br />
              Around Possibility.
            </h1>
            <p className="page-hero-desc">
              From high-visibility retail storefronts and self-contained boutique offices to contemporary studio suites and vibrant culinary floors, discover thoughtful spaces tailored for performance.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. Alternating Showcase Sections (White <-> Dark) */}
      {SPACES_CATEGORIES.map((space, idx) => {
        const isDark = idx % 2 === 1; // 0: White (Retail), 1: Dark (Offices), 2: White (Studios), 3: Dark (Food Court)
        const isReverse = idx % 2 === 1;

        return (
          <section
            key={space.id}
            id={space.slug.replace('/', '')}
            className={`space-showcase-section ${
              isDark ? 'theme-section-dark' : 'theme-section-white'
            }`}
          >
            <ArchitecturalBg variant={`spaces_${space.id}`} />
            <div className="container-custom">
              <RevealOnScroll animation="fade-up">
                <div
                  className={`space-stack-card ${
                    isDark ? 'space-card-dark' : 'space-card-white'
                  } ${isReverse ? 'row-reverse' : ''}`}
                >
                  {/* Media Column */}
                  <div className="space-stack-media">
                    <TiltCard maxTilt={5} scale={1.01} className="space-stack-tilt">
                      <div className="space-stack-img-wrap">
                        <img src={space.image} alt={space.title} />
                        <span className="space-stack-badge">{space.badge}</span>
                      </div>
                    </TiltCard>
                  </div>

                  {/* Content Column */}
                  <div className="space-stack-content">
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
                        <span>Explore {space.id === 'fnb' ? 'Food Court' : space.id.charAt(0).toUpperCase() + space.id.slice(1)}</span>
                        <ArrowRight size={15} />
                      </Link>
                      <Link
                        to={space.floorPlanSlug || "/floor-plans"}
                        className="btn-secondary"
                      >
                        <span>View Blueprint</span>
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </section>
        );
      })}

      {/* 3. CTA Section (Golden Box inside Clean Luxury White Section) */}
      <CTASection
        title="Find The Ideal Space for Your Brand"
        subtitle="Where Vision Meets Value."
        description="Speak directly with our commercial leasing team for tailored space recommendations."
        theme="gold"
        onOpenEnquiry={() => onOpenEnquiry("Commercial Spaces")}
      />
    </div>
  );
}

