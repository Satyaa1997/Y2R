import { useEffect, useState } from 'react';
import y2rLogo from '../../assets/y2r.png';
import './LoadingScreen.css';

export default function LoadingScreen({ onLoadingComplete }) {
  const [stage, setStage] = useState(1);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(2), 400);
    const t2 = setTimeout(() => setStage(3), 1100);
    const t3 = setTimeout(() => {
      setIsDismissed(true);
      if (onLoadingComplete) onLoadingComplete();
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onLoadingComplete]);

  if (isDismissed) return null;

  return (
    <div className={`loading-screen-wrap ${stage === 3 ? 'is-exiting' : ''}`}>
      <div className="loading-grid-bg architectural-grid" />

      <div className="loading-center-content">
        {/* Brand Official Logo */}
        <div className={`loading-logo-box ${stage >= 1 ? 'show-symbol' : ''}`}>
          <img src={y2rLogo} alt="Y2R Heights" className="loading-logo-img" />
        </div>

        {/* Brand Name */}
        <h1 className={`loading-brand-name ${stage >= 1 ? 'show-text' : ''}`}>
          Y2R HEIGHTS
        </h1>

        {/* Expanding Gold Architectural Line */}
        <div className={`loading-line-track ${stage >= 2 ? 'expand-line' : ''}`}>
          <div className="loading-line-fill" />
        </div>

        {/* Tagline */}
        <p className={`loading-tagline ${stage >= 2 ? 'show-tagline' : ''}`}>
          Where Vision Meets Value.
        </p>
        
        <span className={`loading-location ${stage >= 2 ? 'show-location' : ''}`}>
          KURSI ROAD | JANKIPURAM EXTENSION, LUCKNOW
        </span>
      </div>
    </div>
  );
}
