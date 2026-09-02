import { useRef, useState } from 'react';
import './TiltCard.css';

export default function TiltCard({
  children,
  className = '',
  maxTilt = 12,
  scale = 1.02,
  perspective = 1000,
  glare = true,
  onClick = null,
  style = {}
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  const handleMouseMove = (e) => {
    if (isTouchDevice || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Calculate 3D rotations
    const rotateX = -mouseY * maxTilt;
    const rotateY = mouseX * maxTilt;

    setTransformStyle(
      `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1) translateZ(12px)`
    );

    if (glare) {
      const glareX = ((e.clientX - rect.left) / width) * 100;
      const glareY = ((e.clientY - rect.top) / height) * 100;
      setGlareStyle({
        opacity: 0.35,
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(213, 183, 121, 0.4) 0%, rgba(255,255,255,0.05) 50%, transparent 80%)`
      });
    }
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setTransformStyle(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)`);
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: transformStyle,
        ...style
      }}
    >
      <div className="tilt-card-inner">
        {children}
        {glare && !isTouchDevice && (
          <div className="tilt-card-glare" style={glareStyle} aria-hidden="true" />
        )}
      </div>
    </div>
  );
}

