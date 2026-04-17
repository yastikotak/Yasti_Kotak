import { useEffect, useRef } from 'react';

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

export default function Galaxy({
  mouseRepulsion = true,
  mouseInteraction = true,
  density = 1,
  glowIntensity = 0.3,
  saturation = 1,
  hueShift = 220,
  twinkleIntensity = 0.3,
  rotationSpeed = 0.1,
  repulsionStrength = 2,
  autoCenterRepulsion = 0,
  starSpeed = 0.5,
  speed = 1,
}) {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const random = (min, max) => min + Math.random() * (max - min);
    const mouse = mouseRef.current;
    let width = 1;
    let height = 1;
    let cx = 0;
    let cy = 0;
    let dpr = 1;
    let time = 0;

    const setupCanvas = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      width = window.innerWidth;
      height = window.innerHeight;
      cx = width * 0.5;
      cy = height * 0.5;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const buildStars = () => {
      const area = (width * height) / 8000;
      const count = Math.floor(clamp(area * density * 14, 150, 1200));
      const stars = [];

      for (let i = 0; i < count; i += 1) {
        stars.push({
          r: random(6, Math.max(width, height) * 0.62),
          a: random(0, Math.PI * 2),
          size: random(0.4, 2.3),
          twinklePhase: random(0, Math.PI * 2),
          twinkleSpeed: random(0.15, 1.2),
          depth: random(0.45, 1.6),
        });
      }

      starsRef.current = stars;
    };

    const draw = () => {
      time += 0.01 * speed;
      const stars = starsRef.current;

      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * 0.9);
      grd.addColorStop(0, 'rgba(19, 24, 64, 0.95)');
      grd.addColorStop(0.5, 'rgba(8, 10, 28, 0.98)');
      grd.addColorStop(1, 'rgba(2, 3, 10, 1)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i += 1) {
        const s = stars[i];
        const angularVel = (rotationSpeed * 0.0018 + (1 / s.r) * 0.0012) * starSpeed;
        s.a += angularVel * speed;

        let px = cx + Math.cos(s.a + time * 0.06) * s.r;
        let py = cy + Math.sin(s.a + time * 0.06) * s.r * 0.86;

        const coreRepulsion = autoCenterRepulsion * (1 / Math.max(1, s.r * 0.04));
        if (coreRepulsion > 0) {
          const dx = px - cx;
          const dy = py - cy;
          const dist = Math.max(1, Math.hypot(dx, dy));
          px += (dx / dist) * coreRepulsion;
          py += (dy / dist) * coreRepulsion;
        }

        if (mouseRepulsion && mouseInteraction && mouse.active) {
          const mdx = px - mouse.x;
          const mdy = py - mouse.y;
          const md = Math.hypot(mdx, mdy);
          const influence = 170 * repulsionStrength;
          if (md < influence && md > 0.01) {
            const force = ((influence - md) / influence) ** 1.35 * (11 * repulsionStrength);
            px += (mdx / md) * force;
            py += (mdy / md) * force;
          }
        }

        const twinkle = 0.7 + Math.sin(time * s.twinkleSpeed + s.twinklePhase) * twinkleIntensity;
        const alpha = clamp(0.3 + twinkle * 0.7, 0.08, 1);
        const radius = s.size * twinkle * s.depth * 0.75;
        const hue = (hueShift + s.r * 0.09) % 360;
        const sat = clamp(saturation * 70, 0, 100);
        const light = clamp(65 + glowIntensity * 20, 45, 92);

        ctx.beginPath();
        ctx.fillStyle = `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`;
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      frameRef.current = window.requestAnimationFrame(draw);
    };

    const onPointerMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const onPointerLeave = () => {
      mouse.active = false;
    };

    setupCanvas();
    buildStars();
    draw();

    const onResize = () => {
      setupCanvas();
      buildStars();
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerleave', onPointerLeave);

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [
    autoCenterRepulsion,
    density,
    glowIntensity,
    hueShift,
    mouseInteraction,
    mouseRepulsion,
    repulsionStrength,
    rotationSpeed,
    saturation,
    speed,
    starSpeed,
    twinkleIntensity,
  ]);

  return <canvas ref={canvasRef} className="galaxy-canvas" />;
}
