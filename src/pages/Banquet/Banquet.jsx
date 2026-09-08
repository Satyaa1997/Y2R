import { PartyPopper, Users, Sparkles, ArrowRight, Layers, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import banquetHallImg from '../../assets/Banwuet hall.jpg';
import './Banquet.css';

export default function Banquet({ onOpenEnquiry }) {
  const banquetFeatures = [
    {
      title: "620.22 SQ.M. Column-Free Space",
      desc: "Expansive unobstructed hall floor plate ensuring 100% sightlines for banquets, exhibitions, and corporate AGMs.",
      icon: Layers
    },
    {
      title: "Grand Pre-Function Foyer",
      desc: "Dedicated spacious welcome concourse for guest reception, cocktail staging, registration counters, and networking.",
      icon: Users
    },
    {
      title: "Backstage Catering & Utility Access",
      desc: "Discreet secondary corridors and service lifts for seamless catering supply, backstage green rooms, and AV production.",
      icon: PartyPopper
    },
    {
      title: "Acoustic Insulation & VIP Elevators",
      desc: "High-spec acoustic ceiling treatments, decorative lighting fixtures, and dedicated high-speed guest elevators.",
      icon: Sparkles
    }
  ];

  return (
    <div className="banquet-page-root">
      {/* 1. Page Hero */}
      <section className="page-hero-section theme-section-dark architectural-grid">
        <ArchitecturalBg variant="spaces_banquet" />
        <div className="container-custom page-hero-content">
          <RevealOnScroll animation="fade-up" className="hero-center-wrapper">
            <span className="gold-badge">Dedicated 2nd Floor (620.22 SQ.M.)</span>
            <h1 className="page-hero-title">
              Expansive Formats for <br />
              <span className="gold-gradient-text">Grand Milestones.</span>
            </h1>
            <p className="page-hero-desc">
              Spanning 620.22 SQ.M. on the dedicated Second Floor, this expansive column-free banquet and commercial venue is engineered for landmark corporate summits, celebrations, and hospitality ventures.
            </p>
            <div className="hero-cta-group">
              <button
                onClick={() => onOpenEnquiry("Banquet")}
                className="btn-primary"
              >
                <span>Reserve Banquet Space</span>
                <ArrowRight size={16} />
              </button>
              <Link to="/floor-plans/2nd" className="btn-secondary">
                <FileText size={16} />
                <span>View 2nd Floor CAD Plan</span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. Main Narrative Showcase */}
      <section className="section-padding theme-section-white banquet-narrative-section">
        <ArchitecturalBg variant="spaces_hero" />
        <div className="container-custom">
          <div className="banquet-grid">
            <div className="banquet-text-col">
              <SectionHeading
                number="01"
                badge="Grand Event Floor"
                title="Engineered for Memorable Gatherings."
                subtitle="A premier hospitality venue on Kursi Road, Lucknow."
                align="left"
                theme="light"
              />

              <RevealOnScroll animation="fade-up" delay={150}>
                <p className="banquet-p">
                  Y2R Heights Second Floor introduces an expansive <strong>620.22 SQ.M.</strong> column-free banquet hall tailored for premium corporate summits, luxury weddings, product launches, and private exhibitions.
                </p>
                <p className="banquet-p">
                  Crafted with generous ceiling clearance, pre-function reception foyers, and dedicated backstage food preparation access, the hall ensures effortless crowd management and pristine guest experiences.
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fade-up" delay={250}>
                <div className="banquet-specs-box">
                  <h4 className="specs-box-title">Hall Architectural Specifications</h4>
                  <ul className="specs-box-list">
                    <li><strong>Total Floor Area:</strong> 620.22 SQ.M. column-free unobstructed layout</li>
                    <li><strong>Level:</strong> Dedicated 2nd Floor with direct elevator ingress</li>
                    <li><strong>Acoustic Spec:</strong> Sound-dampened ceilings & acoustic wall treatments</li>
                    <li><strong>Utility Provisions:</strong> High-capacity commercial 3-phase power & HVAC risers</li>
                  </ul>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll animation="fade-left" className="banquet-media-col">
              <TiltCard maxTilt={6} scale={1.01} className="banquet-tilt">
                <div className="banquet-img-frame">
                  <img
                    src={banquetHallImg}
                    alt="Y2R Heights Banquet & Commercial Hall"
                    className="banquet-img"
                  />
                  <div className="banquet-img-caption">
                    <span className="gold-badge">2nd Floor Event Hall</span>
                    <p>620.22 SQ.M. Column-Free Luxury Hall</p>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. 4 Core Pillars Grid */}
      <section className="section-padding theme-section-dark banquet-pillars-section">
        <ArchitecturalBg variant="spaces_banquet" />
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Venue Capabilities"
            title="Designed for Flawless Execution"
            subtitle="Explore the key structural and logistical advantages of our grand banquet hall."
            align="left"
            theme="dark"
          />

          <div className="banquet-cards-grid">
            {banquetFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <RevealOnScroll
                  key={feat.title}
                  animation="fade-up"
                  delay={idx * 80}
                  className="banquet-card-col"
                >
                  <TiltCard maxTilt={8} scale={1.02} className="banquet-feat-card">
                    <div className="banquet-feat-inner">
                      <div className="feat-icon-box">
                        <IconComp size={24} className="text-gold" />
                      </div>
                      <h3 className="feat-title">{feat.title}</h3>
                      <p className="feat-desc">{feat.desc}</p>
                    </div>
                  </TiltCard>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <CTASection
        title="Host Your Next Landmark Event at Y2R Heights"
        subtitle="Where Vision Meets Value."
        description="Speak with our venue coordinators to check available dates, seating layouts, and commercial leasing terms for the 2nd floor banquet hall."
        onOpenEnquiry={() => onOpenEnquiry("Banquet")}
      />
    </div>
  );
}

