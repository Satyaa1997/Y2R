import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './LightboxModal.css';

export default function LightboxModal({
  items = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onPrev,
  onNext
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="lightbox-close-btn" onClick={onClose} aria-label="Close Lightbox">
          <X size={24} />
        </button>

        {/* Navigation Prev */}
        <button
          className="lightbox-nav-btn nav-prev"
          onClick={onPrev}
          aria-label="Previous Image"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Main Image View */}
        <div className="lightbox-media-wrapper">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="lightbox-image"
          />

          <div className="lightbox-caption-bar">
            <div className="lightbox-meta">
              <span className="gold-badge">{currentItem.categoryLabel}</span>
              <span className="lightbox-counter">
                {currentIndex + 1} / {items.length}
              </span>
            </div>
            <h3 className="lightbox-title">{currentItem.title}</h3>
            {currentItem.caption && (
              <p className="lightbox-caption">{currentItem.caption}</p>
            )}
          </div>
        </div>

        {/* Navigation Next */}
        <button
          className="lightbox-nav-btn nav-next"
          onClick={onNext}
          aria-label="Next Image"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}

