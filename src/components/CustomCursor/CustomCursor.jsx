import { useEffect, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  const isTouch = typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches;

  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouch]);

  // Smooth lagging outer ring animation frame
  useEffect(() => {
    if (isTouch) return;
    let animationFrame;

    const followMouse = () => {
      setTrailingPos((prev) => {
        const dx = pos.x - prev.x;
        const dy = pos.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18
        };
      });
      animationFrame = requestAnimationFrame(followMouse);
    };

    animationFrame = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrame);
  }, [pos, isTouch]);

  // Event listener delegation for interactive elements
  useEffect(() => {
    if (isTouch) return;

    const handleOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor], .gallery-card, .tilt-card-container');
      if (!target) {
        setCursorState('default');
        return;
      }

      const customCursorType = target.getAttribute('data-cursor');
      if (customCursorType) {
        setCursorState(customCursorType);
      } else if (target.closest('.gallery-card') || target.closest('.lightbox-trigger')) {
        setCursorState('view');
      } else if (target.closest('.cta-action-btn') || target.closest('.navbar-enquire-btn') || target.closest('.floating-enquire-btn')) {
        setCursorState('enquire');
      } else {
        setCursorState('hover');
      }
    };

    document.addEventListener('mouseover', handleOver);
    return () => document.removeEventListener('mouseover', handleOver);
  }, [isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
        }}
      />
      <div
        className={`cursor-ring state-${cursorState}`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`
        }}
      >
        {cursorState === 'view' && <span className="cursor-text">VIEW</span>}
        {cursorState === 'enquire' && <span className="cursor-text">ENQUIRE</span>}
      </div>
    </>
  );
}

