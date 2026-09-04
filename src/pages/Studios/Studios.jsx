import { Home as HomeIcon, Sparkles, Bed, ShieldCheck, ArrowRight } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import './Studios.css';

export default function Studios({ onOpenEnquiry }) {
  const studioFeatures = [
    {
      title: "Located on 3rd–7th Floors",
      desc: "Elevated residential floors ensuring peaceful privacy, uninterrupted panoramic horizon views and clean airflow.",
      icon: HomeIcon
    },
    {
      title: "Smart Ergonomic Living",
      desc: "Contemporary layouts optimized for effortless functionality, personal relaxation and productive remote work.",
      icon: Sparkles
    },
    {
      title: "Urban Professionals & Guests",
      desc: "Created for ambitious professionals, corporate travellers, consultants and modern city lifestyles.",
      icon: Bed
    },
    {
      title: "Dedicated Lifts & Security",
      desc: "Fast vertical transit, secure access control and 24x7 security for total peace of mind.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="studios-page-root">
      {/* Page Hero */}
      <section className="page-hero-section theme-section-dark architectural-grid">
        <ArchitecturalBg variant="studios_hero" />
        <div className="container-custom page-hero-content">
          <RevealOnScroll animation="fade-up">
            <span className="gold-badge">Contemporary Living (3rd–7th Floors)</span>
            <h1 className="page-hero-title">
              Smart Spaces for <br />
              <span className="gold-gradient-text">Modern Living.</span>
            </h1>
            <p className="page-hero-desc">
              Thoughtfully planned studio apartments combining contemporary design, functionality and everyday convenience in Lucknow.
            </p>
            <div className="hero-cta-group">
              <button
                onClick={() => onOpenEnquiry("Studio Apartments")}
                className="btn-primary"
              >
                <span>Explore Studio Apartments</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="section-padding theme-section-white studio-narrative-section">
        <ArchitecturalBg variant="studios_narrative" />
        <div className="container-custom">
          <div className="studio-grid">
            <div className="studio-text-col">
              <SectionHeading
                number="01"
                badge="Urban Residence"
                title="A Residence Designed for Seamless Convenience"
                subtitle="3rd to 7th Floors • Contemporary Design • Everyday Ease"
                align="left"
                theme="light"
              />

              <RevealOnScroll animation="fade-up" delay={150}>
                <p className="studio-p">
                  Thoughtfully planned studio apartments combining contemporary design, functionality and everyday convenience.
                </p>
                <p className="studio-p">
                  Ideal for professionals, business travellers and modern urban lifestyles. Studio/service apartments are strategically situated on the 3rd to 7th floors to provide an elevated, quiet residential sanctuary above the commercial podium.
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fade-up" delay={250}>
                <div className="studio-tier-card">
                  <div className="tier-tag">Dedicated Residential Tiers</div>
                  <span className="tier-title">3rd, 4th, 5th, 6th & 7th Floors</span>
                  <p className="tier-desc">Seamlessly serviced with dedicated high-speed elevators and 24x7 security surveillance.</p>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll animation="fade-left" className="studio-media-col">
              <TiltCard maxTilt={8} scale={1.02} className="studio-tilt">
                <div className="studio-img-frame">
                  <img
                    src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1400&auto=format&fit=crop"
                    alt="Studio Apartments at Y2R Heights"
                    className="studio-img"
                  />
                  <div className="studio-img-caption">
                    <span className="gold-badge">Modern Studio Suite</span>
                    <p>3rd to 7th Floor Elevation</p>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 4 Studio Features */}
      <section className="section-padding theme-section-dark studio-features-section">
        <ArchitecturalBg variant="studios_features" />
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Living Highlights"
            title="Engineered for Urban Comfort"
            subtitle="Smart design choices that elevate everyday lifestyle."
            align="center"
            theme="dark"
          />

          <div className="studio-cards-grid">
            {studioFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <RevealOnScroll
                  key={feat.title}
                  animation="fade-up"
                  delay={idx * 80}
                  className="studio-card-col"
                >
                  <TiltCard maxTilt={8} scale={1.02} className="studio-feat-card">
                    <div className="studio-feat-inner">
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

      {/* CTA */}
      <CTASection
        title="Discover Contemporary Living at Y2R Heights"
        subtitle="Where Vision Meets Value."
        description="Speak with our residential consultants to learn more about the studio apartments located on 3rd to 7th floors."
        onOpenEnquiry={() => onOpenEnquiry("Studio Apartments")}
      />
    </div>
  );
}

