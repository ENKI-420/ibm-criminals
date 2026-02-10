"use client";

import { useEffect, useRef } from "react";

export function DnaHelix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.clearRect(0, 0, w, h);

      const strands = 20;
      const amplitude = 40;
      const centerX = w / 2;

      for (let i = 0; i < strands; i++) {
        const y = (i / strands) * h;
        const offset = time + (i / strands) * Math.PI * 4;

        const x1 = centerX + Math.sin(offset) * amplitude;
        const x2 = centerX - Math.sin(offset) * amplitude;

        const depth1 = (Math.cos(offset) + 1) / 2;
        const depth2 = (Math.cos(offset + Math.PI) + 1) / 2;

        // Base pair connectors
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.strokeStyle = `rgba(0, 230, 138, ${0.08 + depth1 * 0.12})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Strand 1 nodes
        ctx.beginPath();
        ctx.arc(x1, y, 2 + depth1 * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 230, 138, ${0.3 + depth1 * 0.7})`;
        ctx.fill();

        // Strand 2 nodes
        ctx.beginPath();
        ctx.arc(x2, y, 2 + depth2 * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 200, 230, ${0.3 + depth2 * 0.7})`;
        ctx.fill();
      }

      // Floating particles
      for (let i = 0; i < 8; i++) {
        const px =
          centerX +
          Math.sin(time * 0.5 + i * 1.2) * (amplitude + 20 + i * 5);
        const py = ((time * 20 + i * 80) % h);
        const alpha = 0.2 + Math.sin(time + i) * 0.15;

        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 230, 180, ${alpha})`;
        ctx.fill();
      }

      time += 0.02;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
