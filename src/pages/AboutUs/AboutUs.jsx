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
  Compass,
  Layers,
  Sparkles
} from 'lucide-react';
import { PROJECT_INFO, WHY_Y2R_POINTS } from '../../data/projectData';
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
import studioImage from '../../assets/Building.JPG';
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
      description: 'Massive road-facing frontage with grand arrival promenade, double-height anchor showrooms, and direct escalator connectivity.',
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
      description: '100% Vastu-compliant commercial suites with maximum daylight, private washrooms, and double-glazed acoustic façade.',
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
      description: 'Smartly designed self-contained suites with open private balconies, modern kitchenette provisions, and high-speed elevators.',
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
      description: 'Vibrant culinary hub with dedicated kitchen exhausts, grease traps, spacious communal seating, and open-air skyline terrace dining.',
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
            {projectSpaces.map((space, idx) => (
              <RevealOnScroll key={space.id} animation="fade-up" delay={idx * 100}>
                <div className="card akshat-card">
                  <div className="card-image-container akshat-card-image-container">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="akshat-card-img"
                    />
                    <span className="akshat-card-badge">{space.level}</span>
                  </div>
                  <p className="card-title akshat-card-title">{space.title}</p>
                  <p className="card-des akshat-card-des">
                    {space.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
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

      {/* Section 05: Core Advantages / Why Y2R Heights */}
      <section className="section-padding theme-section-dark why-section">
        <ArchitecturalBg variant="project_why" />
        <div className="container-custom">
          <SectionHeading
            number="05"
            badge="Core Advantages"
            title="A Location to Grow. A Presence to Remember."
            subtitle="Strategic Location • Versatile Spaces • Premium Planning • Business Visibility"
            align="center"
            theme="dark"
          />

          <div className="why-grid">
            {WHY_Y2R_POINTS.map((pt, idx) => {
              const whyIcons = [Compass, Layers, ShieldCheck, Sparkles];
              const IconComp = whyIcons[idx] || Sparkles;
              return (
                <RevealOnScroll
                  key={pt.id}
                  animation="fade-up"
                  delay={idx * 80}
                  className="why-col"
                >
                  <div className="jubayer-card" role="article" aria-label={`${pt.title} - ${pt.description}`}>
                    <div className="jubayer-badge-circle">
                      <p className="jubayer-badge-num">{pt.id}</p>
                    </div>

                    <div className="jubayer-icon-box">
                      <IconComp size={38} className="jubayer-icon-svg" />
                    </div>

                    <h3 className="jubayer-title">{pt.title}</h3>
                    <p className="jubayer-desc">{pt.description}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <CTASection
        badge="Site Visit & Consultation"
        title="Schedule a Personalized Project Walkthrough"
        subtitle="Where Vision Meets Value."
        description="Connect with our site advisory team to review floor plans, spatial zoning, and availability at Y2R Heights."
        primaryBtnText="Connect With Advisory Team"
        primaryBtnAction={() => onOpenEnquiry && onOpenEnquiry("About Us Walkthrough")}
        secondaryBtnText="Download Full Brochure"
        secondaryBtnAction={onOpenBrochure}
      />
    </div>
  );
}