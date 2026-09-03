import { MapPin } from 'lucide-react';
import { PROJECT_INFO, VICINITY_LANDMARKS } from '../../data/projectData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
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
            title="Strategically Centered. Seamlessly Connected."
            subtitle="Situating your enterprise within minutes of Northern Lucknow’s key educational, healthcare, and arterial nodes."
            align="center"
            theme="light"
          />

          {/* Categorized Vicinity Matrix */}
          <div className="vicinity-categories-grid">
            {/* 1. Highways & Connectivity */}
            <div className="vicinity-category-card">
              <div className="vicinity-cat-header">
                <span className="vicinity-cat-pill">Transit Corridors</span>
                <h3 className="vicinity-cat-title">Highway & City Access</h3>
              </div>
              <div className="vicinity-items-list">
                {VICINITY_LANDMARKS.connectivity.map((item, idx) => (
                  <div key={idx} className="vicinity-row">
                    <span className="v-name">{item.name}</span>
                    <span className="v-time-pill">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Schools & Universities */}
            <div className="vicinity-category-card">
              <div className="vicinity-cat-header">
                <span className="vicinity-cat-pill">Education & Research</span>
                <h3 className="vicinity-cat-title">Schools & Universities</h3>
              </div>
              <div className="vicinity-items-list">
                {VICINITY_LANDMARKS.education.map((item, idx) => (
                  <div key={idx} className="vicinity-row">
                    <span className="v-name">{item.name}</span>
                    <span className="v-time-pill">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Hotels & Hospitality */}
            <div className="vicinity-category-card">
              <div className="vicinity-cat-header">
                <span className="vicinity-cat-pill">Hospitality & Lifestyle</span>
                <h3 className="vicinity-cat-title">Hotels & Recreation</h3>
              </div>
              <div className="vicinity-items-list">
                {VICINITY_LANDMARKS.hospitality.map((item, idx) => (
                  <div key={idx} className="vicinity-row">
                    <span className="v-name">{item.name}</span>
                    <span className="v-time-pill">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Healthcare & Hospitals */}
            <div className="vicinity-category-card">
              <div className="vicinity-cat-header">
                <span className="vicinity-cat-pill">Medical Infrastructure</span>
                <h3 className="vicinity-cat-title">Hospitals & Clinics</h3>
              </div>
              <div className="vicinity-items-list">
                {VICINITY_LANDMARKS.healthcare.map((item, idx) => (
                  <div key={idx} className="vicinity-row">
                    <span className="v-name">{item.name}</span>
                    <span className="v-time-pill">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="location-notes-box">
            <MapPin size={20} className="text-gold flex-shrink-0" />
            <div>
              <h4 className="notes-title">Site Sales & Location Address:</h4>
              <p className="notes-text">{PROJECT_INFO.siteOffice}</p>
              <span className="notes-sub">Engineering College Crossing, Near Sector-J Extension, Jankipuram Scheme, Kursi Road, Lucknow – 226021</span>
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

