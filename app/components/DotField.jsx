"use client";

import { useEffect, useRef } from "react";

export const DotField = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let raf;
    let w = 0;
    let h = 0;

    const resize = () => {
      const r = canvas.parentElement.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const gap = 30;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const rect = canvas.getBoundingClientRect();
      if (rect.bottom < 0) {
        raf = requestAnimationFrame(draw);
        return;
      }
      for (let x = gap / 2; x < w; x += gap) {
        for (let y = gap / 2; y < h; y += gap) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const d = Math.hypot(dx, dy) || 1;
          let ox = 0;
          let oy = 0;
          let r = 1;
          let accent = false;
          if (d < 140) {
            const f = (140 - d) / 140;
            ox = (dx / d) * f * 16;
            oy = (dy / d) * f * 16;
            r = 1 + f * 1.5;
            accent = d < 70;
          }
          ctx.beginPath();
          ctx.arc(x + ox, y + oy, r, 0, Math.PI * 2);
          ctx.fillStyle = accent
            ? "rgba(255, 59, 0, 0.5)"
            : "rgba(255, 255, 255, 0.2)";
          ctx.fill();
        }
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      data-testid="hero-3d-canvas"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full -z-1"
    />
  );
};
