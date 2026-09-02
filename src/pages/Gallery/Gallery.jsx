import { useState } from 'react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../../data/galleryData';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import './Gallery.css';

export default function Gallery({ onSelectGalleryItem, onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="gallery-page-root">
      {/* Page Hero */}
      <section className="page-hero-section theme-section-light architectural-grid">
        <ArchitecturalBg variant="gallery_hero" />
        <div className="container-custom page-hero-content">
          <RevealOnScroll animation="fade-up">
            <span className="gold-badge">Visual Showcase</span>
            <h1 className="page-hero-title">
              See The Vision <br />
              <span className="gold-gradient-text">Take Shape.</span>
            </h1>
            <p className="page-hero-desc">
              Explore the architectural elevations, grand retail frontage, boutique office floors, modern studio living, and dining environments of Y2R Heights.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section-padding theme-section-dark gallery-main-section">
        <ArchitecturalBg variant="gallery_main" />
        <div className="container-custom">
          <div className="gallery-filter-tabs">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`gallery-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="gallery-masonry-grid">
            {filteredItems.map((item, idx) => {
              const globalIdx = GALLERY_ITEMS.findIndex((g) => g.id === item.id);

              return (
                <RevealOnScroll
                  key={item.id}
                  animation="zoom-in"
                  delay={idx * 60}
                  className={`gallery-tile aspect-${item.aspect}`}
                >
                  <div
                    className="gallery-tile-inner"
                    onClick={() => onSelectGalleryItem(globalIdx >= 0 ? globalIdx : 0)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="gallery-tile-img"
                      loading="lazy"
                    />
                    <div className="gallery-tile-overlay">
                      <span className="gold-badge">{item.categoryLabel}</span>
                      <h3 className="gallery-tile-title">{item.title}</h3>
                      <p className="gallery-tile-caption">{item.caption}</p>
                      <span className="gallery-view-hint">Click to enlarge view</span>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Experience Y2R Heights in Person"
        subtitle="Where Vision Meets Value."
        description="Arrange an on-site consultation to explore commercial and residential opportunities with our advisory team."
        onOpenEnquiry={() => onOpenEnquiry("Gallery / Site Visit")}
      />
    </div>
  );
}

