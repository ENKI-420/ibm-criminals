"use client";

import { Laptop, Smartphone, Server } from "lucide-react";

const MASTER_LAPTOP = "5CD140K4SF";

interface MeshNode {
  id: string;
  name: string;
  type: string;
  status: string;
  density: number;
}

interface MeshTopologyProps {
  nodes: MeshNode[];
}

export function MeshTopology({ nodes }: MeshTopologyProps) {
  return (
    <div className="flex flex-1 gap-6 overflow-hidden lg:gap-8">
      {/* Mesh Visualization */}
      <div className="relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-primary/10 bg-card/40 p-6 lg:p-8">
        <div className="pointer-events-none absolute right-0 top-0 p-8 text-muted-foreground/5">
          <svg
            width="200"
            height="200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>

        <h2 className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground lg:mb-8">
          Node Configuration & Discovery
        </h2>

        <div className="relative flex flex-1 items-center justify-center">
          {/* Orbit ring */}
          <div className="relative h-64 w-64 rounded-full border border-primary/5 lg:h-80 lg:w-80">
            {/* Orbit animation - slow subtle pulse */}
            <div className="absolute inset-0 animate-pulse-glow rounded-full border border-primary/[0.03]" />

            {/* Master node - top */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-primary/40 bg-background p-3 shadow-[0_0_15px_hsl(var(--primary)/0.1)]">
              <Laptop size={20} className="text-primary" />
            </div>

            {/* Mobile node - bottom-left */}
            <div className="absolute bottom-0 left-0 translate-y-1/2 rounded-xl border border-secondary/30 bg-background p-3">
              <Smartphone size={20} className="text-secondary" />
            </div>

            {/* Station node - bottom-right */}
            <div className="absolute bottom-0 right-0 translate-y-1/2 rounded-xl border border-accent/20 bg-background p-3">
              <Server size={20} className="text-accent" />
            </div>
          </div>

          {/* Center label */}
          <div className="absolute flex flex-col items-center">
            <span className="text-xl font-black tracking-tighter text-primary lg:text-2xl">
              z3braMesh
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">
              CONVERGENCE_STABLE
            </span>
          </div>
        </div>

        {/* Auto-config banner */}
        <div className="mt-6 flex items-center justify-between rounded-lg border border-primary/10 bg-primary/5 p-3 lg:mt-8 lg:p-4">
          <div className="flex items-center gap-3 text-xs text-foreground">
            <Smartphone className="text-secondary" size={14} />
            <span>
              Termux Node detected via Scimitar Elite Bridge.
              Auto-configuring...
            </span>
          </div>
          <button className="rounded border border-primary/30 px-3 py-1 font-mono text-[10px] font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            Sync Device
          </button>
        </div>
      </div>

      {/* Node sidebar */}
      <div className="flex w-72 flex-col gap-4 overflow-y-auto lg:w-80 lg:gap-5">
        {nodes.map((node) => (
          <div
            key={node.id}
            className="rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/30 lg:p-5"
          >
            <div className="mb-3 flex items-start justify-between lg:mb-4">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-foreground">
                  {node.name}
                </h3>
                <div className="font-mono text-[9px] text-muted-foreground">
                  {node.id}
                </div>
              </div>
              <div
                className={`rounded px-2 py-0.5 text-[8px] font-bold ${
                  node.status === "ONLINE"
                    ? "bg-primary/20 text-primary"
                    : node.status === "AUTO_ACQUIRED"
                      ? "bg-secondary/20 text-secondary"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {node.status}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <div>
                Type: <span className="text-foreground">{node.type}</span>
              </div>
              <div>
                Density: <span className="text-primary">{node.density}</span>
              </div>
            </div>
            <div className="mt-3 flex justify-between border-t border-border pt-3 lg:mt-4 lg:pt-4">
              <button className="text-[9px] text-muted-foreground transition-colors hover:text-primary">
                Configure Firmware
              </button>
              <button className="text-[9px] text-muted-foreground transition-colors hover:text-secondary">
                Osiris Link
              </button>
            </div>
          </div>
        ))}

        {/* Partnership area */}
        <div className="mt-auto flex flex-col items-center gap-3 rounded-xl border border-dashed border-border bg-card/20 p-5 text-center">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Partnership Ready
          </div>
          <div className="flex gap-4 text-muted-foreground/20">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
            <Smartphone size={20} />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="18" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <path d="M13 6h3a2 2 0 0 1 2 2v7" />
              <path d="M11 18H8a2 2 0 0 1-2-2V9" />
            </svg>
          </div>
          <p className="font-mono text-[9px] italic text-muted-foreground/50">
            Awaiting Substrate Collaboration
          </p>
        </div>
      </div>
    </div>
  );
}
