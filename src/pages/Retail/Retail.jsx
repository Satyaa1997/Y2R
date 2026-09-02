import { Store, Eye, Sparkles, Layers, ArrowRight } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import './Retail.css';

export default function Retail({ onOpenEnquiry }) {
  const retailFeatures = [
    {
      title: "Double-Height Frontage",
      desc: "Commanding road visibility along Main Kursi Road for prominent brand identity.",
      icon: Eye
    },
    {
      title: "Dual Ground Levels",
      desc: "Strategically split across Lower Ground and Upper Ground floors to maximize footfall flow.",
      icon: Layers
    },
    {
      title: "Versatile Formats",
      desc: "Designed for flagship retail, high-end boutiques, salons, cafés and wellness centers.",
      icon: Store
    },
    {
      title: "Customer Promenade",
      desc: "Wide architectural corridors, natural light penetration and grand arrival lobbies.",
      icon: Sparkles
    }
  ];

  return (
    <div className="retail-page-root">
      {/* Page Hero */}
      <section className="page-hero-section theme-section-light architectural-grid">
        <ArchitecturalBg variant="retail_hero" />
        <div className="container-custom page-hero-content">
          <RevealOnScroll animation="fade-up">
            <span className="gold-badge">Commercial Retail</span>
            <h1 className="page-hero-title">
              Made for Brands That <br />
              <span className="gold-gradient-text">Want to Be Seen.</span>
            </h1>
            <p className="page-hero-desc">
              Premium retail spaces with efficient layouts, strong frontage and high visibility in Lucknow's expanding Kursi Road corridor.
            </p>
            <div className="hero-cta-group">
              <button
                onClick={() => onOpenEnquiry("Retail")}
                className="btn-primary"
              >
                <span>Reserve Retail Space</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Feature Showcase */}
      <section className="section-padding theme-section-dark retail-showcase-section">
        <ArchitecturalBg variant="retail_showcase" />
        <div className="container-custom">
          <div className="retail-grid">
            <div className="retail-text-col">
              <SectionHeading
                number="01"
                badge="Frontage & Visibility"
                title="More Visibility. More Possibility."
                subtitle="Engineered for customer attraction and seamless daily operations."
                align="left"
                theme="dark"
              />

              <RevealOnScroll animation="fade-up" delay={150}>
                <p className="retail-p">
                  Premium retail spaces with efficient layouts, strong frontage and high visibility.
                </p>
                <p className="retail-p">
                  From flagship stores and boutiques to cafés, restaurants, salons and wellness concepts, Y2R Heights offers spaces designed to strengthen your brand presence and simplify day-to-day operations.
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fade-up" delay={250}>
                <div className="retail-level-badges">
                  <div className="level-badge-card">
                    <span className="lvl-name">Lower Ground Floor</span>
                    <span className="lvl-desc">Anchor Retail & High-Footfall Concourse</span>
                  </div>
                  <div className="level-badge-card">
                    <span className="lvl-name">Upper Ground Floor</span>
                    <span className="lvl-desc">Prime Street Frontage & Boutique Showcases</span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll animation="fade-left" className="retail-media-col">
              <TiltCard maxTilt={8} scale={1.02} className="retail-tilt">
                <div className="retail-image-box">
                  <img
                    src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1400&auto=format&fit=crop"
                    alt="Y2R Heights Retail Frontage"
                    className="retail-img"
                  />
                  <div className="retail-img-caption">
                    <span className="gold-badge">High Frontage Promenade</span>
                    <p>Direct Kursi Road Catchment</p>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 4 Key Retail Features */}
      <section className="section-padding theme-section-white retail-features-section">
        <ArchitecturalBg variant="retail_features" />
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Retail Specifications"
            title="Strategic Advantages for Retailers"
            subtitle="Meticulously planned infrastructure to support modern commercial ventures."
            align="center"
            theme="light"
          />

          <div className="retail-cards-grid">
            {retailFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <RevealOnScroll
                  key={feat.title}
                  animation="fade-up"
                  delay={idx * 80}
                  className="retail-card-col"
                >
                  <TiltCard maxTilt={8} scale={1.02} className="retail-feat-card">
                    <div className="retail-feat-inner">
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
        title="Establish Your Brand at Y2R Heights"
        subtitle="Where Vision Meets Value."
        description="Connect with our commercial leasing desk to review retail floor layouts and available shop dimensions."
        onOpenEnquiry={() => onOpenEnquiry("Retail")}
      />
    </div>
  );
}

