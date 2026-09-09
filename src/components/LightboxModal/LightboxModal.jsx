import { useState, useEffect, useRef, useCallback } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';
import './LightboxModal.css';

export default function LightboxModal({
  items = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onPrev,
  onNext,
  onSelectIndex
}) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails] = useState(true);

  const containerRef = useRef(null);
  const activeThumbRef = useRef(null);
  const touchStartRef = useRef(null);

  // Reset zoom & pan when image changes
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [currentIndex]);

  // Scroll active thumbnail into center view
  useEffect(() => {
    if (activeThumbRef.current && showThumbnails) {
      activeThumbRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [currentIndex, showThumbnails, isOpen]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Zoom helpers
  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + 0.5, 3.5));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const handleResetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      const el = containerRef.current || document.documentElement;
      if (el.requestFullscreen) {
        el.requestFullscreen().catch(() => {});
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }, []);

  // Double click on image to toggle 2x zoom
  const handleImageDoubleClick = useCallback(() => {
    setScale((prev) => {
      if (prev > 1) {
        setPosition({ x: 0, y: 0 });
        return 1;
      }
      return 2;
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'f' || e.key === 'F') {
        handleToggleFullscreen();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-' || e.key === '_') {
        handleZoomOut();
      } else if (e.key === '0') {
        handleResetZoom();
      }
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
  }, [
    isOpen,
    onClose,
    onPrev,
    onNext,
    handleToggleFullscreen,
    handleZoomIn,
    handleZoomOut,
    handleResetZoom
  ]);

  // Pan / Drag handlers when zoomed in
  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || scale <= 1) return;
    e.preventDefault();
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch Swipe for Mobile
  const handleTouchStart = (e) => {
    if (scale === 1 && e.touches.length === 1) {
      touchStartRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (scale === 1 && touchStartRef.current !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartRef.current - touchEndX;
      if (diff > 50) {
        onNext();
      } else if (diff < -50) {
        onPrev();
      }
      touchStartRef.current = null;
    }
  };

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <div
      ref={containerRef}
      className={`lightbox-backdrop ${isFullscreen ? 'is-fullscreen-mode' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Full-screen image viewer"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="lightbox-root-layout" onClick={(e) => e.stopPropagation()}>
        {/* =================================================================
            TOP LUXURY FLOATING HEADER BAR
            ================================================================= */}
        <header className="lightbox-top-bar">
          <div className="lightbox-header-left">
            <span className="lightbox-gold-badge">{currentItem.categoryLabel}</span>
            <div className="lightbox-counter-pill">
              <span className="counter-current">{currentIndex + 1}</span>
              <span className="counter-sep">/</span>
              <span className="counter-total">{items.length}</span>
            </div>
            <span className="lightbox-header-title">{currentItem.title}</span>
          </div>

          <div className="lightbox-header-actions">
            {/* Zoom Controls */}
            <div className="lightbox-zoom-group">
              <button
                type="button"
                className="lightbox-tool-btn"
                onClick={handleZoomOut}
                disabled={scale <= 1}
                title="Zoom Out (-)"
                aria-label="Zoom Out"
              >
                <ZoomOut size={18} />
              </button>
              <span className="lightbox-zoom-indicator">{Math.round(scale * 100)}%</span>
              <button
                type="button"
                className="lightbox-tool-btn"
                onClick={handleZoomIn}
                disabled={scale >= 3.5}
                title="Zoom In (+)"
                aria-label="Zoom In"
              >
                <ZoomIn size={18} />
              </button>
              {scale > 1 && (
                <button
                  type="button"
                  className="lightbox-tool-btn reset-btn"
                  onClick={handleResetZoom}
                  title="Reset Zoom (0)"
                  aria-label="Reset Zoom"
                >
                  <RotateCcw size={16} />
                </button>
              )}
            </div>

            {/* Fullscreen Toggle */}
            <button
              type="button"
              className="lightbox-tool-btn"
              onClick={handleToggleFullscreen}
              title={isFullscreen ? 'Exit Fullscreen (F)' : 'Fullscreen (F)'}
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>

            {/* Close Button */}
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={onClose}
              title="Close (Esc)"
              aria-label="Close Lightbox"
            >
              <X size={22} />
            </button>
          </div>
        </header>

        {/* =================================================================
            PREV & NEXT NAVIGATION CONTROLS
            ================================================================= */}
        <button
          type="button"
          className="lightbox-nav-btn nav-prev"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous Image"
          title="Previous (Left Arrow)"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          type="button"
          className="lightbox-nav-btn nav-next"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next Image"
          title="Next (Right Arrow)"
        >
          <ChevronRight size={32} />
        </button>

        {/* =================================================================
            MAIN FULL-SCREEN IMAGE VIEWPORT
            ================================================================= */}
        <div
          className={`lightbox-stage ${scale > 1 ? 'is-zoomed' : ''} ${isDragging ? 'is-dragging' : ''}`}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onDoubleClick={handleImageDoubleClick}
        >
          <div
            className="lightbox-image-container"
            style={{
              transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
              transition: isDragging ? 'none' : 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)'
            }}
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="lightbox-main-img"
              draggable={false}
            />
          </div>
        </div>

        {/* =================================================================
            BOTTOM THUMBNAIL CAROUSEL STRIP
            ================================================================= */}
        {showThumbnails && items.length > 1 && (
          <div className="lightbox-thumbs-bar" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-thumbs-track">
              {items.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={item.id || idx}
                    ref={isActive ? activeThumbRef : null}
                    type="button"
                    className={`lightbox-thumb-item ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      if (typeof onSelectIndex === 'function') {
                        onSelectIndex(idx);
                      }
                    }}
                    title={item.title}
                    aria-label={`View ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="lightbox-thumb-img"
                      loading="lazy"
                    />
                    <span className="lightbox-thumb-number">{idx + 1}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


