import React, { useEffect, useRef } from 'react';

// Premium, performant canvas mesh background with aurora layers and mouse parallax.
export const MeshBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const container = containerRef.current!;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // Particle grid
    const cols = Math.max(6, Math.floor(width / 160));
    const rows = Math.max(4, Math.floor(height / 160));
    const points: { x: number; y: number; ox: number; oy: number; phase: number }[] = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const px = (i + 0.5) * (width / cols) + (Math.random() - 0.5) * 40;
        const py = (j + 0.5) * (height / rows) + (Math.random() - 0.5) * 40;
        points.push({ x: px, y: py, ox: px, oy: py, phase: Math.random() * Math.PI * 2 });
      }
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX - container.getBoundingClientRect().left;
      mouseY = e.clientY - container.getBoundingClientRect().top;
    };
    window.addEventListener('mousemove', handleMove);

    let raf = 0;
    let last = performance.now();

    const draw = (now: number) => {
      const dt = Math.min(60, now - last);
      last = now;

      // subtle background
      ctx.clearRect(0, 0, width, height);
      // gradient wash
      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, 'rgba(6,182,212,0.04)');
      g.addColorStop(0.5, 'rgba(131,58,180,0.03)');
      g.addColorStop(1, 'rgba(99,102,241,0.02)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      // aurora blobs (cheap)
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = 'rgba(6,182,212,0.06)';
      ctx.beginPath();
      ctx.ellipse(width * 0.12, height * 0.15, Math.max(width, height) * 0.35, Math.max(width, height) * 0.35, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(131,58,180,0.06)';
      ctx.beginPath();
      ctx.ellipse(width * 0.88, height * 0.85, Math.max(width, height) * 0.38, Math.max(width, height) * 0.38, 0, 0, Math.PI * 2);
      ctx.fill();

      // particle movement
      for (let p of points) {
        // subtle breathing using sin phase
        p.phase += dt * 0.002;
        const nx = p.ox + Math.sin(p.phase * 1.2) * 8 + (mouseX - width / 2) * 0.02;
        const ny = p.oy + Math.cos(p.phase * 1.1) * 8 + (mouseY - height / 2) * 0.02;
        p.x += (nx - p.x) * 0.08;
        p.y += (ny - p.y) * 0.08;
      }

      // draw connections
      ctx.lineWidth = 1;
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const alpha = 1 - dist / 140;
            ctx.strokeStyle = `rgba(99,102,241,${0.12 * alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // draw points
      for (let p of points) {
        const distToMouse = Math.hypot(p.x - mouseX, p.y - mouseY);
        const size = 1.2 + Math.max(0, (140 - distToMouse) / 80) * 1.6;
        ctx.fillStyle = 'rgba(255,255,255,0.06)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-50 overflow-hidden bg-[#020205]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Aurora CSS layers for extra depth */}
      <div className="absolute top-[-12%] left-[-12%] w-[60vw] h-[60vw] rounded-full bg-cyan-500/8 blur-[140px] animate-aurora-1 pointer-events-none" />
      <div className="absolute bottom-[-12%] right-[-12%] w-[70vw] h-[70vw] rounded-full bg-purple-600/8 blur-[160px] animate-aurora-2 pointer-events-none" />
    </div>
  );
};

export default MeshBackground;
