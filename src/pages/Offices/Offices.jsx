import { Briefcase, Sun, LayoutGrid, ArrowRight } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import './Offices.css';

export default function Offices({ onOpenEnquiry }) {
  const officePillars = [
    {
      title: "Customisable Offices",
      desc: "Flexible modular layouts that adapt effortlessly to executive cabins, open collaborative desks or meeting rooms.",
      icon: LayoutGrid
    },
    {
      title: "Natural Light",
      desc: "Architecturally oriented floor plates maximizing daylight penetration to foster employee well-being and productivity.",
      icon: Sun
    },
    {
      title: "Efficient Floor Plans",
      desc: "Engineered core zones and minimal dead-space corridors ensuring optimal usable carpet area for every square foot.",
      icon: Briefcase
    }
  ];

  return (
    <div className="offices-page-root">
      {/* Page Hero */}
      <section className="page-hero-section theme-section-light architectural-grid">
        <ArchitecturalBg variant="offices_hero" />
        <div className="container-custom page-hero-content">
          <RevealOnScroll animation="fade-up">
            <span className="gold-badge">Commercial Workspaces</span>
            <h1 className="page-hero-title">
              More Than an Office. <br />
              <span className="gold-gradient-text">A Statement.</span>
            </h1>
            <p className="page-hero-desc">
              Workspaces designed around productivity, flexibility and a premium business experience in Lucknow's high-growth corridor.
            </p>
            <div className="hero-cta-group">
              <button
                onClick={() => onOpenEnquiry("Offices")}
                className="btn-primary"
              >
                <span>Reserve Office Suite</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="section-padding theme-section-dark office-narrative-section">
        <ArchitecturalBg variant="offices_narrative" />
        <div className="container-custom">
          <div className="office-grid">
            <div className="office-text-col">
              <SectionHeading
                number="01"
                badge="Productivity & Prestige"
                title="A Distinction in Corporate Workspaces"
                subtitle="Customisable Offices • Natural Light • Efficient Floor Plans"
                align="left"
                theme="dark"
              />

              <RevealOnScroll animation="fade-up" delay={150}>
                <p className="office-p">
                  Workspaces designed around productivity, flexibility and a premium business experience.
                </p>
                <p className="office-p">
                  Y2R Heights offers self-contained office units, flexible configurations, natural light and layouts designed to minimise wasted space—suited to founders, consultants, professionals and growing businesses.
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fade-up" delay={250}>
                <div className="office-ideal-for">
                  <h4 className="ideal-title">Tailored For:</h4>
                  <div className="ideal-tags">
                    <span>Founders & Startups</span>
                    <span>Consultants & Legal Firms</span>
                    <span>Corporate Branch Offices</span>
                    <span>Financial Advisors</span>
                    <span>Creative Agencies</span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll animation="fade-left" className="office-media-col">
              <TiltCard maxTilt={8} scale={1.02} className="office-tilt">
                <div className="office-img-frame">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop"
                    alt="Boutique Offices at Y2R Heights"
                    className="office-img"
                  />
                  <div className="office-img-caption">
                    <span className="gold-badge">Boutique Executive Floors</span>
                    <p>Designed for Focus & Prestige</p>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3 Core Office Pillars */}
      <section className="section-padding theme-section-white office-pillars-section">
        <ArchitecturalBg variant="offices_pillars" />
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Workspace Pillars"
            title="Engineered Around Modern Business"
            subtitle="The three core foundations of Y2R Heights commercial suites."
            align="center"
            theme="light"
          />

          <div className="office-pillars-grid">
            {officePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <RevealOnScroll
                  key={pillar.title}
                  animation="fade-up"
                  delay={idx * 100}
                  className="pillar-col"
                >
                  <TiltCard maxTilt={8} scale={1.02} className="pillar-card">
                    <div className="pillar-inner">
                      <div className="pillar-icon-box">
                        <IconComp size={26} className="text-gold" />
                      </div>
                      <h3 className="pillar-title">{pillar.title}</h3>
                      <p className="pillar-desc">{pillar.desc}</p>
                    </div>
                  </TiltCard>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Elevate Your Corporate Presence"
        subtitle="Where Vision Meets Value."
        description="Schedule a private consultation to view available office floor plates and flexible suite sizes."
        onOpenEnquiry={() => onOpenEnquiry("Offices")}
      />
    </div>
  );
}

