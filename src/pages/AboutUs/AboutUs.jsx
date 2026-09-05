import { useState, useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Store,
  Briefcase,
  Home,
  UtensilsCrossed,
  ArrowRight,
  Image as ImageIcon
} from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';

// Asset Images & Video
import locationVideo from '../../assets/locationvedio.mp4';
import buildingImage from '../../assets/Building.JPG';
import highStreetImage from '../../assets/High-Street.jpg';
import boutiqueImage from '../../assets/Boutique.jpg';
import studioImage from '../../assets/Building1.JPG';
import foodCourtImage from '../../assets/FoodCourt2.jpg';

import './AboutUs.css';

export default function AboutUs({ onOpenEnquiry, onOpenBrochure }) {
  const [heroTextFaded, setHeroTextFaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroTextFaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  // Project Space Highlights with Image Slots
  const projectSpaces = [
    {
      id: 'retail',
      title: 'High-Street Retail',
      level: 'Lower & Upper Ground Floor',
      image: highStreetImage,
      imageLabel: 'Retail Promenade & Double-Height Frontage',
      icon: Store,
      points: [
        'Massive road-facing frontage with grand arrival promenade',
        'Double-height showrooms ideal for national & international anchor brands',
        'Direct escalator connectivity and pedestrian friendly boulevards'
      ]
    },
    {
      id: 'offices',
      title: 'Boutique Office Suites',
      level: '1st & Commercial Floors',
      image: boutiqueImage,
      imageLabel: 'Corporate Suites & Workspaces',
      icon: Briefcase,
      points: [
        '100% Vastu-compliant layout with maximum natural daylight',
        'Self-contained units with private washrooms & pantry provisions',
        'Double-glazed acoustic façade ensuring quiet working environment'
      ]
    },
    {
      id: 'studios',
      title: 'Contemporary Studio Suites',
      level: '3rd to 7th Floor',
      image: studioImage,
      imageLabel: 'Modern Living Suites & Private Balconies',
      icon: Home,
      points: [
        'Smartly designed self-contained suites with open private balconies',
        'Premium sanitary fittings (Grohe/Jaquar/Roca) & modern kitchenette',
        'Dedicated residential high-speed elevators & intercom security'
      ]
    },
    {
      id: 'food-court',
      title: 'Food Court & Rooftop Terrace',
      level: '8th Floor & Open Terrace',
      image: foodCourtImage,
      imageLabel: 'Culinary Concourse & Sky Lounge',
      icon: UtensilsCrossed,
      points: [
        'Vibrant culinary hub with dedicated kitchen exhausts & grease traps',
        'Spacious communal seating with panoramic city skyline views',
        'Open-air rooftop terrace suitable for premium casual dining concepts'
      ]
    }
  ];

  return (
    <div className="about-us-page-root">
      {/* Hero Section with locationvedio.mp4 */}
      <section
        className="page-hero-section about-hero-section theme-section-dark"
        onClick={() => setHeroTextFaded((prev) => !prev)}
      >
        <div className="about-hero-bg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="about-hero-video"
          >
            <source src={locationVideo} type="video/mp4" />
          </video>
          <div className={`about-hero-overlay ${heroTextFaded ? 'hero-mobile-faded' : ''}`} />
        </div>
        <div className="container-custom page-hero-content about-hero-content">
          <div className={`about-hero-text-wrap ${heroTextFaded ? 'hero-mobile-faded' : ''}`}>
            <h1 className="page-hero-title">
              About Y2R Heights. <br />
              <span className="about-hero-highlight">Where Vision Meets Value.</span>
            </h1>
            <p className="page-hero-desc">
              Lucknow’s landmark G+8 commercial and lifestyle destination on Kursi Road, Jankipuram Scheme — crafted for businesses that demand high visibility, functional excellence, and long-term stature.
            </p>
            <div className="page-hero-meta">
              <span className="meta-item">
                <MapPin size={16} /> Kursi Road | Jankipuram Scheme, Lucknow
              </span>
              <span className="meta-sep">•</span>
              <span className="meta-item">
                <ShieldCheck size={16} /> UP RERA: {PROJECT_INFO.reraNumber}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: Short Official Project Overview */}
      <section className="section-padding theme-section-light about-overview-section">
        <div className="container-custom">
          <div className="about-overview-grid">
            {/* Main Project Elevation Image Slot */}
            <RevealOnScroll animation="fade-right" className="about-media-col">
              <TiltCard maxTilt={5} scale={1.01} className="about-tilt">
                <div className="about-image-frame">
                  <img
                    src={buildingImage}
                    alt="Y2R Heights Official Building View"
                    className="about-img"
                  />
                  <div className="about-image-badge">
                    <span className="about-badge-title">G+8 Architectural Marvel</span>
                    <span className="about-badge-sub">3 Sides Open Corner Plot • Kursi Road</span>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>

            {/* Concise Overview Text */}
            <div className="about-text-col">
              <RevealOnScroll animation="fade-left">
                <SectionHeading
                  number="01"
                  badge="Executive Summary"
                  title="A Landmark Business & Lifestyle Destination"
                  subtitle="Short Overview of Lucknow's Next Commercial Powerhouse"
                  align="left"
                  theme="light"
                />

                <div className="about-story-content">
                  <p className="lead-paragraph">
                    <strong>Y2R Heights</strong> is an 11-storey contemporary marvel (G+8 Floors with Double Basement Parking) strategically situated at the junction of <strong>Kursi Road and Jankipuram Scheme</strong> in Lucknow.
                  </p>
                  <p className="body-paragraph">
                    Conceived as a unified destination for commerce, enterprise, and urban living, the project features high-visibility street-level retail, Grade-A corporate office suites, private residential studio apartments, and a top-floor food court with terrace dining.
                  </p>

                  <div className="about-key-bullets">
                    <div className="bullet-item">
                      <CheckCircle2 size={18} className="bullet-icon text-gold" />
                      <div>
                        <strong>Prominent 3-Sides Open Corner:</strong> Unmatched brand frontage on 60M and 18M wide arterial roads.
                      </div>
                    </div>
                    <div className="bullet-item">
                      <CheckCircle2 size={18} className="bullet-icon text-gold" />
                      <div>
                        <strong>Double Basement Parking:</strong> 2 dedicated levels of secure parking with smooth ramp circulation.
                      </div>
                    </div>
                    <div className="bullet-item">
                      <CheckCircle2 size={18} className="bullet-icon text-gold" />
                      <div>
                        <strong>6 High-Speed Elevators:</strong> Rapid vertical transit for shoppers, corporate staff, and residents.
                      </div>
                    </div>
                    <div className="bullet-item">
                      <CheckCircle2 size={18} className="bullet-icon text-gold" />
                      <div>
                        <strong>100% Legal & Approved:</strong> UP RERA Registered (<code>{PROJECT_INFO.reraNumber}</code>) & approved by Canara Bank.
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Spatial Breakdown with Image Slots */}
      <section className="section-padding theme-section-dark about-spaces-section">
        <ArchitecturalBg variant="project_vision" />
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Spatial Formats"
            title="Intelligently Stacked Floors & Amenities"
            subtitle="Explore the core segments of Y2R Heights across all 11 levels."
            align="center"
            theme="dark"
          />

          <div className="about-spaces-grid">
            {projectSpaces.map((space, idx) => {
              const IconComp = space.icon;
              return (
                <RevealOnScroll key={space.id} animation="fade-up" delay={idx * 100}>
                  <div className="space-feature-card">
                    {/* Image Slot Container */}
                    <div className="space-card-image-wrap">
                      <img
                        src={space.image}
                        alt={space.title}
                        className="space-card-img"
                      />
                      <div className="space-image-tag">
                        <ImageIcon size={13} className="text-gold" />
                        <span>{space.imageLabel}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-card-body">
                      <div className="space-card-header">
                        <div className="space-icon-box">
                          <IconComp size={20} className="text-gold" />
                        </div>
                        <span className="space-level-badge">{space.level}</span>
                      </div>

                      <h3 className="space-card-title">{space.title}</h3>

                      <ul className="space-points-list">
                        {space.points.map((pt, pIdx) => (
                          <li key={pIdx}>
                            <span className="gold-dot" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 03: Strategic Connectivity & Key Numbers */}
      <section className="section-padding theme-section-light about-connectivity-section">
        <div className="container-custom">
          <SectionHeading
            number="03"
            badge="Strategic Advantage"
            title="Prime Location & Seamless City Connectivity"
            subtitle="Positioned right at the center of Northern Lucknow's high-growth corridor."
            align="center"
            theme="light"
          />

          <div className="connectivity-fast-grid">
            <div className="fast-stat-box">
              <span className="fast-stat-val">4 Min</span>
              <span className="fast-stat-name">Sitapur Road Highway</span>
            </div>
            <div className="fast-stat-box">
              <span className="fast-stat-val">5 Min</span>
              <span className="fast-stat-name">Vikas Nagar & Tedhi Pulia</span>
            </div>
            <div className="fast-stat-box">
              <span className="fast-stat-val">7 Min</span>
              <span className="fast-stat-name">Outer Ring Road (Kisan Path)</span>
            </div>
            <div className="fast-stat-box">
              <span className="fast-stat-val">8 Min</span>
              <span className="fast-stat-name">Munshi Pulia Metro Station</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Official Credentials Box */}
      <section className="about-credentials-section">
        <div className="container-custom">
          <div className="about-credentials-card">
            <div className="credentials-icon-col">
              <ShieldCheck size={36} className="text-gold" />
            </div>
            <div className="credentials-text-col">
              <span className="credentials-sub">Statutory Compliance & Banking</span>
              <h3 className="credentials-title">UP RERA Registered & Project Approved by Canara Bank</h3>
              <p className="credentials-desc">
                Registration No: <strong>{PROJECT_INFO.reraNumber}</strong> (Verify at www.up-rera.in) • Official Collection Account at Canara Bank Mohanlalganj Branch (A/c: <code>{PROJECT_INFO.bankAccount.accountNumber}</code>, IFSC: <code>{PROJECT_INFO.bankAccount.ifsc}</code>).
              </p>
            </div>
            <div className="credentials-action-col">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('About Us Overview')}
                className="btn-primary"
              >
                <span>Request Project Dossier</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <CTASection
        badge="Connect With Us"
        title="Looking for the Ideal Commercial Space?"
        subtitle="Speak directly with our project advisory and leasing desk for floor allocations, customized layouts, and walkthroughs."
        primaryBtnText="Enquire Now"
        primaryBtnAction={() => onOpenEnquiry && onOpenEnquiry('General')}
        secondaryBtnText="Download Brochure"
        secondaryBtnAction={onOpenBrochure}
      />
    </div>
  );
}
