import { useRef, useEffect } from 'react';
import './Commercial3DAnimation.css';

export default function Commercial3DAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse interactive camera target
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      mouse.targetX = x * 0.5;
      mouse.targetY = y * 0.35;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Floating Gold Particles
    const particleCount = 70;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 1400,
        y: (Math.random() - 0.5) * 600 - 50,
        z: Math.random() * 900 + 50,
        size: Math.random() * 2.5 + 1,
        speed: Math.random() * 0.6 + 0.3,
        pulse: Math.random() * Math.PI * 2
      });
    }

    // 3D Point Projection Helper
    const project = (x, y, z, rotX, rotY, fov = 520) => {
      // Rotate around Y-axis
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY - z * sinY;
      const z1 = z * cosY + x * sinY;

      // Rotate around X-axis
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = z1 * cosX + y * sinX;

      const depth = z2 + 620;
      if (depth <= 10) return null;

      const scale = fov / depth;
      return {
        x: width / 2 + x1 * scale,
        y: height / 2 + y2 * scale,
        scale,
        depth
      };
    };

    let time = 0;
    let currentRotX = 0.22;
    let currentRotY = 0;

    const render = () => {
      time += 0.015;

      // Smooth camera interpolation
      currentRotX += (0.22 + mouse.y * 0.22 - currentRotX) * 0.05;
      currentRotY += (mouse.x * 0.3 - currentRotY) * 0.05;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // 100% Pure White Background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      // 1. Draw 3D Isometric Golden Wave Ground Grid across full width
      const gridSize = 16;
      const gridSpacing = 75;
      ctx.lineWidth = 0.9;

      for (let ix = -gridSize; ix <= gridSize; ix++) {
        ctx.beginPath();
        let started = false;
        for (let iz = 0; iz <= gridSize * 2; iz++) {
          const gx = ix * gridSpacing;
          const gz = iz * gridSpacing - 220;
          const wave = Math.sin(time * 1.5 + ix * 0.28 + iz * 0.28) * 8;
          const gy = 210 + wave;

          const p = project(gx, gy, gz, currentRotX, currentRotY);
          if (p) {
            if (!started) {
              ctx.moveTo(p.x, p.y);
              started = true;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          }
        }
        ctx.strokeStyle = `rgba(175, 125, 9, ${0.16 * Math.max(0, 1 - Math.abs(ix) / gridSize)})`;
        ctx.stroke();
      }

      for (let iz = 0; iz <= gridSize * 2; iz++) {
        ctx.beginPath();
        let started = false;
        for (let ix = -gridSize; ix <= gridSize; ix++) {
          const gx = ix * gridSpacing;
          const gz = iz * gridSpacing - 220;
          const wave = Math.sin(time * 1.5 + ix * 0.28 + iz * 0.28) * 8;
          const gy = 210 + wave;

          const p = project(gx, gy, gz, currentRotX, currentRotY);
          if (p) {
            if (!started) {
              ctx.moveTo(p.x, p.y);
              started = true;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          }
        }
        ctx.strokeStyle = `rgba(175, 125, 9, ${0.16 * Math.max(0, 1 - iz / (gridSize * 2))})`;
        ctx.stroke();
      }

      // 2. Draw 3D Floating Gold Dust & Energy Particles
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -380) p.y = 280;

        const pulseSize = p.size + Math.sin(time * 3 + p.pulse) * 0.6;
        const pt = project(p.x, p.y, p.z, currentRotX, currentRotY);

        if (pt) {
          const alpha = Math.min(1, Math.max(0.15, (1100 - pt.depth) / 800));
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, Math.max(0.7, pulseSize * pt.scale), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(175, 125, 9, ${alpha * 0.55})`;
          ctx.shadowColor = 'rgba(175, 125, 9, 0.25)';
          ctx.shadowBlur = 3;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="commercial-3d-canvas-container">
      <canvas ref={canvasRef} className="commercial-3d-canvas" />
    </div>
  );
}
