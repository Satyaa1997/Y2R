import { useRef, useEffect } from 'react';
import './SiteOfficeAnimation.css';

/**
 * SiteOfficeAnimation
 * High-end architectural GPS radar, pulsating sonar waves,
 * golden telemetry coordinates, and interactive floating particles.
 */
export default function SiteOfficeAnimation() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!container || !canvas) return;
      width = container.offsetWidth;
      height = container.offsetHeight;
      if (!width || !height) return;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse tracking for subtle parallax & particle displacement
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2, isHovered: false };
    const onMouseMove = (e) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovered = true;
    };
    const onMouseLeave = () => {
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
      mouse.isHovered = false;
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    // Particles setup
    const particleCount = 45;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * (width || 800),
        y: Math.random() * (height || 400),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // Sonar wave pulses
    const pulseCount = 3;
    const pulses = [];
    for (let i = 0; i < pulseCount; i++) {
      pulses.push({
        radius: (i * 110) % 350,
        speed: 0.85,
        maxRadius: 360
      });
    }

    let angle = 0;
    let time = 0;

    const render = () => {
      time += 0.02;
      angle += 0.012; // Radar rotation speed

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Draw Architectural Grid Lines
      ctx.lineWidth = 1;
      const step = 60;
      const offsetX = (mouse.x - centerX) * 0.04;
      const offsetY = (mouse.y - centerY) * 0.04;

      ctx.strokeStyle = 'rgba(175, 125, 9, 0.07)';
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x + offsetX, 0);
        ctx.lineTo(x + offsetX, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y + offsetY);
        ctx.lineTo(width, y + offsetY);
        ctx.stroke();
      }

      // 2. Draw Concentric Radar Rings & Crosshairs
      const ringRadii = [60, 130, 210, 300, 400];

      ringRadii.forEach((r, idx) => {
        ctx.beginPath();
        ctx.arc(centerX + offsetX, centerY + offsetY, r, 0, Math.PI * 2);
        if (idx % 2 === 0) {
          ctx.setLineDash([4, 4]);
          ctx.strokeStyle = 'rgba(175, 125, 9, 0.16)';
        } else {
          ctx.setLineDash([]);
          ctx.strokeStyle = 'rgba(175, 125, 9, 0.1)';
        }
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Axis crosshairs with dashes
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(175, 125, 9, 0.15)';
      ctx.setLineDash([6, 6]);
      // Horizontal
      ctx.moveTo(0, centerY + offsetY);
      ctx.lineTo(width, centerY + offsetY);
      // Vertical
      ctx.moveTo(centerX + offsetX, 0);
      ctx.lineTo(centerX + offsetX, height);
      ctx.stroke();
      ctx.setLineDash([]);

      // 3. Pulsating Sonar Waves
      pulses.forEach((p) => {
        p.radius += p.speed;
        if (p.radius > p.maxRadius) {
          p.radius = 20;
        }
        const opacity = Math.max(0, (1 - p.radius / p.maxRadius) * 0.28);
        ctx.beginPath();
        ctx.arc(centerX + offsetX, centerY + offsetY, p.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(175, 125, 9, ${opacity})`;
        ctx.lineWidth = 1.8;
        ctx.stroke();
      });

      // 4. Rotating Radar Scan Cone Beam
      ctx.save();
      ctx.translate(centerX + offsetX, centerY + offsetY);
      ctx.rotate(angle);

      // Gradient scan trail
      const radarGradient = ctx.createRadialGradient(0, 0, 10, 0, 0, 380);
      radarGradient.addColorStop(0, 'rgba(175, 125, 9, 0.18)');
      radarGradient.addColorStop(0.7, 'rgba(175, 125, 9, 0.05)');
      radarGradient.addColorStop(1, 'rgba(175, 125, 9, 0)');

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, 380, -0.4, 0);
      ctx.closePath();
      ctx.fillStyle = radarGradient;
      ctx.fill();

      // Leading scan beam line
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(380, 0);
      ctx.strokeStyle = 'rgba(175, 125, 9, 0.45)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // 5. Ambient Gold Floating Nodes & Particle Connections
      particles.forEach((pt, i) => {
        pt.x += pt.vx;
        pt.y += pt.vy;

        if (pt.x < 0) pt.x = width;
        if (pt.x > width) pt.x = 0;
        if (pt.y < 0) pt.y = height;
        if (pt.y > height) pt.y = 0;

        const pulseAlpha = pt.alpha + Math.sin(time + pt.pulseOffset) * 0.15;
        const finalAlpha = Math.min(1, Math.max(0.1, pulseAlpha));

        // Connect nearby particles with subtle lines
        for (let j = i + 1; j < particles.length; j++) {
          const pt2 = particles[j];
          const dx = pt.x - pt2.x;
          const dy = pt.y - pt2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            const lineAlpha = (1 - dist / 90) * 0.12;
            ctx.beginPath();
            ctx.moveTo(pt.x, pt.y);
            ctx.lineTo(pt2.x, pt2.y);
            ctx.strokeStyle = `rgba(175, 125, 9, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(175, 125, 9, ${finalAlpha})`;
        ctx.shadowColor = 'rgba(175, 125, 9, 0.4)';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 6. Corner Architectural Tech Bracket Accents
      const bracketSize = 18;
      const pad = 20;
      ctx.strokeStyle = 'rgba(175, 125, 9, 0.35)';
      ctx.lineWidth = 1.5;

      // Top-Left
      ctx.beginPath();
      ctx.moveTo(pad, pad + bracketSize);
      ctx.lineTo(pad, pad);
      ctx.lineTo(pad + bracketSize, pad);
      ctx.stroke();

      // Top-Right
      ctx.beginPath();
      ctx.moveTo(width - pad - bracketSize, pad);
      ctx.lineTo(width - pad, pad);
      ctx.lineTo(width - pad, pad + bracketSize);
      ctx.stroke();

      // Bottom-Left
      ctx.beginPath();
      ctx.moveTo(pad, height - pad - bracketSize);
      ctx.lineTo(pad, height - pad);
      ctx.lineTo(pad + bracketSize, height - pad);
      ctx.stroke();

      // Bottom-Right
      ctx.beginPath();
      ctx.moveTo(width - pad - bracketSize, height - pad);
      ctx.lineTo(width - pad, height - pad);
      ctx.lineTo(width - pad, height - pad - bracketSize);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="site-office-anim-container" aria-hidden="true">
      <canvas ref={canvasRef} className="site-office-anim-canvas" />
      
      {/* Decorative GPS Coordinates Overlay Badges */}
      <div className="site-anim-telemetry-badge top-left">
        <span className="site-telemetry-dot" />
        <span>GPS: 26.9387° N, 80.9521° E</span>
      </div>
      <div className="site-anim-telemetry-badge top-right">
        <span>ELEVATION: +123M MSL</span>
      </div>
      <div className="site-anim-telemetry-badge bottom-left">
        <span>CORRIDOR: KURSI RD MAIN AXIS</span>
      </div>
      <div className="site-anim-telemetry-badge bottom-right">
        <span>ZONE: JANKIPURAM SEC-J</span>
      </div>
    </div>
  );
}

