import { ShieldCheck, TrendingUp, Building2, MapPin, ArrowRight } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import './Investment.css';

export default function Investment({ onOpenEnquiry }) {
  const valueDrivers = [
    {
      title: "Strategic Corridor Catchment",
      desc: "Directly located on Kursi Road in close proximity to Sector-J Extension, Vikas Nagar, Sitapur Road and Outer Ring Road.",
      icon: MapPin
    },
    {
      title: "Diversified Asset Formats",
      desc: "Multi-utility zoning across high-street retail, corporate boutique offices, dining food courts and residential studios.",
      icon: Building2
    },
    {
      title: "Future-Ready Planning",
      desc: "Contemporary architecture, structural glass façade, dual basement parking and integrated high-speed elevator systems.",
      icon: TrendingUp
    },
    {
      title: "UP RERA Registered",
      desc: `Complete regulatory compliance and transparency under UP RERA Registration Reference: ${PROJECT_INFO.reraNumber}.`,
      icon: ShieldCheck
    }
  ];

  return (
    <div className="investment-page-root">
      {/* Page Hero */}
      <section className="page-hero-section theme-section-light architectural-grid">
        <ArchitecturalBg variant="investment_hero" />
        <div className="container-custom page-hero-content">
          <RevealOnScroll animation="fade-up">
            <span className="gold-badge">Commercial Real Estate</span>
            <h1 className="page-hero-title">
              An Address Designed <br />
              <span className="gold-gradient-text">for Tomorrow.</span>
            </h1>
            <p className="page-hero-desc">
              For investors and end-users alike, Y2R Heights combines location, versatile commercial formats and contemporary infrastructure in one emerging business destination.
            </p>
            <div className="hero-cta-group">
              <button
                onClick={() => onOpenEnquiry("Investment")}
                className="btn-primary"
              >
                <span>Request Investment Details</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="section-padding theme-section-dark investment-overview-section">
        <ArchitecturalBg variant="investment_overview" />
        <div className="container-custom">
          <div className="investment-grid">
            <div className="investment-text-col">
              <SectionHeading
                number="01"
                badge="Value Proposition"
                title="Own a Space Where Growth Takes Centre Stage."
                subtitle="A prime commercial destination positioned for visibility and sustained utility."
                align="left"
                theme="dark"
              />

              <RevealOnScroll animation="fade-up" delay={150}>
                <p className="invest-p">
                  For investors and end-users alike, Y2R Heights combines location, versatile commercial formats and contemporary infrastructure in one emerging business destination.
                </p>
                <p className="invest-p">
                  Situated along Lucknow’s expanding Northern corridor, the project delivers high-visibility frontage on Kursi Road, serving dense residential catchments and major transit routes across Jankipuram Extension, Sitapur Road, and Outer Ring Road.
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fade-up" delay={250}>
                <div className="invest-rera-badge-box">
                  <ShieldCheck size={24} className="text-gold flex-shrink-0" />
                  <div>
                    <span className="invest-rera-title">UP RERA Registered Project</span>
                    <p className="invest-rera-num">{PROJECT_INFO.reraNumber}</p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll animation="fade-left" className="investment-media-col">
              <TiltCard maxTilt={8} scale={1.02} className="invest-tilt">
                <div className="invest-img-box">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop"
                    alt="Y2R Heights Architecture"
                    className="invest-img"
                  />
                  <div className="invest-img-caption">
                    <span className="gold-badge">Commercial Landmark</span>
                    <p>Kursi Road • Jankipuram Extension</p>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 4 Value Pillars Grid */}
      <section className="section-padding theme-section-white investment-pillars-section">
        <ArchitecturalBg variant="investment_pillars" />
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Strategic Fundamentals"
            title="Key Drivers of Value"
            subtitle="Built on tangible architectural and locational merits."
            align="center"
            theme="light"
          />

          <div className="pillars-grid">
            {valueDrivers.map((driver, idx) => {
              const IconComp = driver.icon;
              return (
                <RevealOnScroll
                  key={driver.title}
                  animation="fade-up"
                  delay={idx * 80}
                  className="driver-col"
                >
                  <TiltCard maxTilt={8} scale={1.02} className="driver-card">
                    <div className="driver-inner">
                      <div className="driver-icon-box">
                        <IconComp size={24} className="text-gold" />
                      </div>
                      <h3 className="driver-title">{driver.title}</h3>
                      <p className="driver-desc">{driver.desc}</p>
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
        title="Speak With Our Property Advisory Team"
        subtitle="Where Vision Meets Value."
        description="Receive detailed commercial specifications, spatial availability, and project documentation."
        onOpenEnquiry={() => onOpenEnquiry("Investment")}
      />
    </div>
  );
}

