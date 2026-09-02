import { MapPin, Clock } from 'lucide-react';
import { PROJECT_INFO, CONNECTIVITY_DATA } from '../../data/projectData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TiltCard from '../../components/TiltCard/TiltCard';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import Location3DMap from '../../components/Location3DMap/Location3DMap';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import './Location.css';

export default function Location({ onOpenEnquiry }) {
  return (
    <div className="location-page-root">
      {/* Page Hero */}
      <section className="page-hero-section theme-section-light architectural-grid">
        <ArchitecturalBg variant="location_hero" />
        <div className="container-custom page-hero-content">
          <RevealOnScroll animation="fade-up">
            <span className="gold-badge">Strategic Nexus</span>
            <h1 className="page-hero-title">
              Strategically Centered. <br />
              <span className="gold-gradient-text">Seamlessly Connected.</span>
            </h1>
            <p className="page-hero-desc">
              A location that keeps business closer to everything that matters — situated near Sector-J Extension, Jankipuram Extension Scheme, Lucknow.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3D Radar Constellation Section */}
      <section className="section-padding theme-section-dark location-radar-section">
        <ArchitecturalBg variant="location_radar" />
        <div className="container-custom">
          <SectionHeading
            number="01"
            badge="Transit Constellation"
            title="Arterial Network & Travel Times"
            subtitle="Rapid connectivity across Northern Lucknow and major highways."
            align="center"
            theme="dark"
          />

          <RevealOnScroll animation="zoom-in">
            <Location3DMap />
          </RevealOnScroll>
        </div>
      </section>

      {/* Connectivity Table / Grid */}
      <section className="section-padding theme-section-white connectivity-detail-section">
        <ArchitecturalBg variant="location_connectivity" />
        <div className="container-custom">
          <SectionHeading
            number="02"
            badge="Catchment Corridors"
            title="Direct Transit Milestones"
            subtitle="Calculated travel times from Y2R Heights."
            align="center"
            theme="light"
          />

          <div className="connectivity-cards-grid">
            {CONNECTIVITY_DATA.map((item, idx) => (
              <RevealOnScroll
                key={item.destination}
                animation="fade-up"
                delay={idx * 60}
                className="conn-col"
              >
                <TiltCard maxTilt={8} scale={1.02} className="conn-tilt-card">
                  <div className="conn-card-inner">
                    <div className="conn-header">
                      <Clock size={18} className="text-gold" />
                      <span className="conn-time-badge">{item.time}</span>
                    </div>

                    <h3 className="conn-dest-title">{item.destination}</h3>
                    <div className="conn-footer">
                      <span className="conn-dist">{item.distance}</span>
                      <span className="conn-type-tag">{item.type}</span>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>

          <div className="location-notes-box">
            <MapPin size={20} className="text-gold flex-shrink-0" />
            <div>
              <h4 className="notes-title">Site Sales & Location Address:</h4>
              <p className="notes-text">{PROJECT_INFO.siteOffice}</p>
              <span className="notes-sub">Near Sector-J Extension, Jankipuram Extension Scheme, Kursi Road, Lucknow – 226021</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Visit The Site at Kursi Road"
        subtitle="Where Vision Meets Value."
        description="Schedule a guided site visit with our property specialists to experience the location advantage firsthand."
        onOpenEnquiry={() => onOpenEnquiry("Location / Site Visit")}
      />
    </div>
  );
}

