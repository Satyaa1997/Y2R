import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../../data/galleryData';
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import CTASection from '../../components/CTASection/CTASection';
import ArchitecturalBg from '../../components/ArchitecturalBg/ArchitecturalBg';
import contactBanner from '../../assets/contactbanner.png';
import './Gallery.css';

export default function Gallery({ onSelectGalleryItem, onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="gallery-page-root">
      {/* Page Hero with contactbanner.png Background & Overlay */}
      <section className="page-hero-section gallery-hero-section theme-section-dark">
        <div className="gallery-hero-bg">
          <img
            src={contactBanner}
            alt="Y2R Heights Visual Showcase Banner"
            className="gallery-hero-img"
          />
          <div className="gallery-hero-overlay">
            <div className="container-custom page-hero-content">
              <div className="gallery-hero-center-wrap">
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
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Display */}
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

          {/* Mosaic Artistic Grid */}
          <div className={`gallery-mosaic-grid ${activeCategory !== 'all' ? 'gallery-filtered-grid' : ''}`}>
            {filteredItems.map((item, idx) => {
              const globalIdx = GALLERY_ITEMS.findIndex((g) => g.id === item.id);

              return (
                <div
                  key={item.id}
                  className="gallery-mosaic-item"
                  onClick={() => onSelectGalleryItem(globalIdx >= 0 ? globalIdx : 0)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${item.title} - Click to view fullscreen`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectGalleryItem(globalIdx >= 0 ? globalIdx : 0);
                    }
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-mosaic-img"
                    loading="lazy"
                  />
                  <div className="gallery-mosaic-overlay">
                    <div className="gallery-mosaic-top-row">
                      <span className="gallery-mosaic-badge">{item.categoryLabel}</span>
                      <span className="gallery-mosaic-zoom-icon" title="View Fullscreen">
                        <Maximize2 size={13} />
                      </span>
                    </div>
                    <h3 className="gallery-mosaic-title">{item.title}</h3>
                  </div>
                </div>
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
        onOpenEnquiry={() => {
          if (typeof onOpenEnquiry === 'function') {
            onOpenEnquiry("Gallery / Site Visit");
          }
        }}
      />
    </div>
  );
}
