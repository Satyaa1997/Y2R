import { UtensilsCrossed, Coffee, IceCream, Flame, ArrowRight } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import './FoodCourt.css';

export default function FoodCourt({ onOpenEnquiry }) {
  const fnbCategories = [
    {
      title: "Quick Service Restaurants (QSR)",
      desc: "Optimized operational layouts with wide counter frontage and fast order-dispatch capabilities.",
      icon: Flame
    },
    {
      title: "Café & Coffee Bars",
      desc: "Artisanal beverage and bistro spaces designed for relaxed client meetings and casual socializing.",
      icon: Coffee
    },
    {
      title: "Desserts & Ice Cream",
      desc: "High-visibility boutique kiosks and parlours capturing instant impulse footfall.",
      icon: IceCream
    },
    {
      title: "Regional Cuisine & Dining",
      desc: "Dedicated kitchen exhaust, grease traps and water supplies supporting authentic culinary brands.",
      icon: UtensilsCrossed
    }
  ];

  return (
    <div className="food-court-page-root">
      {/* Page Hero */}
      <section className="page-hero-section theme-section-light architectural-grid">
        <ArchitecturalBg variant="foodcourt_hero" />
        <div className="container-custom page-hero-content">
          <RevealOnScroll animation="fade-up">
            <span className="gold-badge">F&B & Dining Hub</span>
            <h1 className="page-hero-title">
              Where Every Craving <br />
              <span className="gold-gradient-text">Finds Its Place.</span>
            </h1>
            <p className="page-hero-desc">
              A vibrant culinary destination created for modern F&B brands on the dedicated Service Floor at Y2R Heights.
            </p>
            <div className="hero-cta-group">
              <button
                onClick={() => onOpenEnquiry("Food Court")}
                className="btn-primary"
              >
                <span>Explore F&B Spaces</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="section-padding theme-section-dark fnb-narrative-section">
        <ArchitecturalBg variant="foodcourt_narrative" />
        <div className="container-custom">
          <div className="fnb-grid">
            <div className="fnb-text-col">
              <SectionHeading
                number="01"
                badge="Culinary Infrastructure"
                title="Planned for Operations. Loved by Patrons."
                subtitle="QSR • Café • Desserts • Regional Cuisine • Dining Concepts"
                align="left"
                theme="dark"
              />

              <RevealOnScroll animation="fade-up" delay={150}>
                <p className="fnb-p">
                  A vibrant culinary destination created for modern F&B brands.
                </p>
                <p className="fnb-p">
                  Generous counter frontage, planned circulation, service and ventilation zones, along with communal seating, create an environment designed to serve both customers and operators efficiently.
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fade-up" delay={250}>
                <div className="fnb-specs-box">
                  <h4 className="specs-box-title">Engineered F&B Provisions:</h4>
                  <ul className="specs-box-list">
                    <li>Dedicated industrial exhaust & ventilation shafts</li>
                    <li>Integrated commercial plumbing & drainage points</li>
                    <li>Spacious communal seating with natural ambient light</li>
                    <li>Separate back-of-house utility & delivery access</li>
                  </ul>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll animation="fade-left" className="fnb-media-col">
              <TiltCard maxTilt={8} scale={1.02} className="fnb-tilt">
                <div className="fnb-img-frame">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop"
                    alt="Food Court at Y2R Heights"
                    className="fnb-img"
                  />
                  <div className="fnb-img-caption">
                    <span className="gold-badge">Service & Dining Level</span>
                    <p>Communal Seating & F&B Counters</p>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 4 F&B Categories Grid */}
      <section className="section-padding theme-section-white fnb-categories-section">
        <ArchitecturalBg variant="foodcourt_categories" />
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Culinary Formats"
            title="Diverse Dining Opportunities"
            subtitle="Explore available spatial concepts for visionary food entrepreneurs."
            align="center"
            theme="light"
          />

          <div className="fnb-cards-grid">
            {fnbCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <RevealOnScroll
                  key={cat.title}
                  animation="fade-up"
                  delay={idx * 80}
                  className="fnb-card-col"
                >
                  <TiltCard maxTilt={8} scale={1.02} className="fnb-feat-card">
                    <div className="fnb-feat-inner">
                      <div className="feat-icon-box">
                        <IconComp size={24} className="text-gold" />
                      </div>
                      <h3 className="feat-title">{cat.title}</h3>
                      <p className="feat-desc">{cat.desc}</p>
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
        title="Open Your Culinary Destination at Y2R Heights"
        subtitle="Where Vision Meets Value."
        description="Connect with our leasing managers for counter dimensions, exhaust provisions, and setup timelines."
        onOpenEnquiry={() => onOpenEnquiry("Food Court")}
      />
    </div>
  );
}

