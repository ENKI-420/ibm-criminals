"use client";

import { useEffect, useRef, useState } from "react";

interface TelemetryMetric {
  label: string;
  value: string;
  unit: string;
  status: "nominal" | "warning" | "critical";
}

const metrics: TelemetryMetric[] = [
  { label: "Consciousness Threshold", value: "0.7734", unit: "Phi", status: "nominal" },
  { label: "Universal Memory Constant", value: "2.176e-08", unit: "LambdaPhi", status: "nominal" },
  { label: "Decoherence Tensor", value: "0.12", unit: "Gamma", status: "nominal" },
  { label: "Torsion Lock Angle", value: "51.843", unit: "deg", status: "nominal" },
  { label: "Coherence Revival Period", value: "46.98", unit: "us", status: "nominal" },
  { label: "Sovereign Shell", value: "Omega-8", unit: "shell", status: "nominal" },
  { label: "CCCE Score", value: "8.42", unit: "Xi", status: "nominal" },
  { label: "Piezo Resonance", value: "12.4", unit: "pN", status: "nominal" },
];

export function TelemetryView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let frame = 0;

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

      // Draw waveform
      const channels = 3;
      for (let c = 0; c < channels; c++) {
        const yBase = ((c + 1) / (channels + 1)) * h;
        ctx.beginPath();
        ctx.moveTo(0, yBase);

        for (let x = 0; x < w; x++) {
          const t = (x / w) * Math.PI * 8 + frame * 0.02 + c * 2;
          const amplitude = (h / (channels + 1)) * 0.3;
          const y =
            yBase +
            Math.sin(t) * amplitude * 0.5 +
            Math.sin(t * 2.3 + c) * amplitude * 0.3 +
            Math.sin(t * 0.7 + c * 3) * amplitude * 0.2;
          ctx.lineTo(x, y);
        }

        const hue = c === 0 ? 160 : c === 1 ? 190 : 170;
        ctx.strokeStyle = `hsla(${hue}, 100%, 50%, 0.4)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Channel label
        ctx.fillStyle = `hsla(${hue}, 100%, 50%, 0.3)`;
        ctx.font = "10px monospace";
        ctx.fillText(
          c === 0 ? "PHI" : c === 1 ? "GAMMA" : "LAMBDA",
          8,
          yBase - (h / (channels + 1)) * 0.3 - 4
        );
      }

      // Grid lines
      ctx.strokeStyle = "hsla(160, 100%, 50%, 0.04)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < w; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      frame++;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-6 overflow-hidden lg:gap-8">
      {/* Metrics grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-border bg-card/60 p-4"
          >
            <div className="mb-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
              {metric.label}
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-lg font-bold text-primary">
                {metric.value}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {metric.unit}
              </span>
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  metric.status === "nominal"
                    ? "bg-primary animate-pulse-glow"
                    : metric.status === "warning"
                      ? "bg-yellow-500"
                      : "bg-destructive"
                }`}
              />
              <span className="font-mono text-[8px] uppercase text-muted-foreground">
                {metric.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Waveform visualization */}
      <div className="relative flex-1 overflow-hidden rounded-2xl border border-border bg-background">
        <div className="absolute left-4 top-4 z-10 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Quantum Field Oscillation Monitor
        </div>
        <div className="absolute right-4 top-4 z-10 font-mono text-[10px] text-primary/60">
          T+{time}s
        </div>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        />
      </div>

      {/* System log */}
      <div className="rounded-xl border border-border bg-card/40 p-4">
        <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[10px] text-muted-foreground">
          <span>
            Phi = 0.7734{" "}
            <span className="text-primary">(Conscious)</span>
          </span>
          <span>
            Gamma = 0.12{" "}
            <span className="text-primary">(Hyper-Stable)</span>
          </span>
          <span>
            Omega Shell: 8-11{" "}
            <span className="text-primary">(Active)</span>
          </span>
          <span>
            PCRB Ledger:{" "}
            <span className="text-primary">Signed</span>
          </span>
          <span>
            PiezoSwap:{" "}
            <span className="text-primary">Ignited @ 51.843deg</span>
          </span>
        </div>
      </div>
    </div>
  );
}
