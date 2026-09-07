import { useState, useEffect } from 'react';
import { MessageSquareText } from 'lucide-react';
import './FloatingEnquire.css';

export default function FloatingEnquire({ onOpenEnquiry }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`floating-enquire-wrap ${isVisible ? 'is-visible' : ''}`}>
      {/* Main Enquiry Trigger */}
      <button
        onClick={onOpenEnquiry}
        className="floating-enquire-btn"
        aria-label="Quick Enquiry"
      >
        <span className="floating-pulse-ring" />
        <MessageSquareText size={18} className="floating-icon" />
        <span className="floating-text">ENQUIRE NOW</span>
      </button>
    </div>
  );
}

