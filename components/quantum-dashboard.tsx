"use client";

import { useState, useCallback } from "react";
import { Zap, Shield } from "lucide-react";
import { MeshTopology } from "./mesh-topology";
import { LaunchpadView } from "./launchpad-view";
import { TelemetryView } from "./telemetry-view";

const MASTER_LAPTOP = "5CD140K4SF";

type View = "mesh" | "launchpad" | "telemetry";

const viewLabels: { key: View; label: string }[] = [
  { key: "mesh", label: "z3braMesh" },
  { key: "launchpad", label: "Launchpad" },
  { key: "telemetry", label: "Telemetry" },
];

const initialNodes = [
  {
    id: MASTER_LAPTOP,
    name: "HP i7 Iris Xe",
    type: "MASTER",
    status: "ONLINE",
    density: 0.994,
  },
  {
    id: "FOLD7-ELITE",
    name: "Samsung Fold X",
    type: "MOBILE",
    status: "AUTO_ACQUIRED",
    density: 0.982,
  },
  {
    id: "PC-STATION",
    name: "Corsair Scimitar Node",
    type: "STATION",
    status: "LOCKED",
    density: 1.0,
  },
];

interface IqPod {
  id: string;
  kernel: string;
  trajectory: string;
  status: string;
}

export function QuantumDashboard() {
  const [view, setView] = useState<View>("mesh");
  const [activeIqPods, setActiveIqPods] = useState<IqPod[]>([]);
  const [isLaunching, setIsLaunching] = useState(false);

  const launchIqPod = useCallback(() => {
    setIsLaunching(true);
    setTimeout(() => {
      const newPod: IqPod = {
        id: `pod-${Math.floor(Math.random() * 1000)}`,
        kernel: "Zebra0S-Scimitar-Elite",
        trajectory: "LEO-Interlink",
        status: "OSCILLATING",
      };
      setActiveIqPods((prev) => [...prev, newPod]);
      setIsLaunching(false);
    }, 2000);
  }, []);

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      {/* Top navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between border-b border-border/50 bg-background/80 px-6 backdrop-blur-xl lg:h-16 lg:px-8">
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] lg:h-8 lg:w-8">
            <Zap size={16} />
          </div>
          <h1 className="font-mono text-xs font-black uppercase tracking-[0.3em] text-primary lg:text-sm">
            Quantum-Advantage.dev
          </h1>
        </div>

        <div className="flex items-center gap-6 lg:gap-8">
          <div className="flex gap-3 lg:gap-4">
            {viewLabels.map((v) => (
              <button
                key={v.key}
                onClick={() => setView(v.key)}
                className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${
                  view === v.key
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
          <div className="hidden rounded border border-border bg-muted px-3 py-1 font-mono text-[9px] text-primary sm:block">
            FIRMWARE_ROOT: {MASTER_LAPTOP}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex flex-1 flex-col overflow-hidden px-6 pb-12 pt-20 lg:px-8 lg:pt-24">
        {view === "mesh" && <MeshTopology nodes={initialNodes} />}
        {view === "launchpad" && (
          <LaunchpadView
            activeIqPods={activeIqPods}
            isLaunching={isLaunching}
            onLaunch={launchIqPod}
          />
        )}
        {view === "telemetry" && <TelemetryView />}
      </main>

      {/* Footer status bar */}
      <footer className="fixed bottom-0 left-0 right-0 flex h-9 items-center justify-between border-t border-border/50 bg-background/90 px-6 font-mono text-[9px] uppercase tracking-widest text-muted-foreground backdrop-blur-md lg:h-10 lg:px-8">
        <div className="flex gap-4 lg:gap-6">
          <span className="flex items-center gap-1.5">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
            >
              <circle cx="18" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <path d="M13 6h3a2 2 0 0 1 2 2v7" />
              <path d="M11 18H8a2 2 0 0 1-2-2V9" />
            </svg>
            Mesh_Protocol: Z3bra_v2.1
          </span>
          <span className="flex items-center gap-1.5">
            <Shield size={10} className="text-primary" />
            Post-Quantum_Hardened
          </span>
        </div>
        <div className="hidden gap-6 sm:flex">
          <span>Substrate: {MASTER_LAPTOP}</span>
          <span>
            UTC: {new Date().toISOString().split("T")[0]}
          </span>
        </div>
      </footer>
    </div>
  );
}
