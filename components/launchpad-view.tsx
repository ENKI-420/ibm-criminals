"use client";

import { Activity, Terminal } from "lucide-react";

const MASTER_LAPTOP = "5CD140K4SF";

interface IqPod {
  id: string;
  kernel: string;
  trajectory: string;
  status: string;
}

interface LaunchpadViewProps {
  activeIqPods: IqPod[];
  isLaunching: boolean;
  onLaunch: () => void;
}

export function LaunchpadView({
  activeIqPods,
  isLaunching,
  onLaunch,
}: LaunchpadViewProps) {
  return (
    <div className="flex flex-1 flex-col gap-6 overflow-hidden lg:gap-8">
      <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
        {/* Launch controls */}
        <div className="flex flex-col gap-8 rounded-2xl border border-primary/10 bg-card/40 p-8 lg:col-span-2 lg:p-10">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h2 className="text-xl font-black uppercase tracking-widest text-foreground">
                iqPod Deployment
              </h2>
              <p className="font-mono text-xs text-muted-foreground">
                Isolated Quantum-Classical Execution Environments
              </p>
            </div>
            <div className="rounded-full border border-primary/20 bg-primary/10 p-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Select Node Substrate
                </label>
                <select className="w-full rounded border border-border bg-background p-3 text-sm text-foreground">
                  <option>{MASTER_LAPTOP} (HP i7)</option>
                  <option>FOLD7-ELITE (Samsung)</option>
                  <option>PC-STATION (Corsair/Nvidia)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Flight Trajectory
                </label>
                <select className="w-full rounded border border-border bg-background p-3 text-sm text-foreground">
                  <option>LEO-Interlink (Default)</option>
                  <option>Deep-Space-Sim</option>
                  <option>Bifurcated-Oscillation-v4</option>
                </select>
              </div>
            </div>

            <button
              onClick={onLaunch}
              disabled={isLaunching}
              className="w-full rounded-lg bg-primary py-4 font-black uppercase tracking-[0.2em] text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all hover:bg-primary/90 active:scale-[0.98] disabled:bg-muted disabled:text-muted-foreground disabled:shadow-none"
            >
              {isLaunching
                ? "Calculating Density Collapse..."
                : "Initialize iqPod Launch"}
            </button>
          </div>
        </div>

        {/* Active pods */}
        <div className="flex flex-col rounded-2xl border border-primary/10 bg-card/40 p-6 lg:p-8">
          <h3 className="mb-6 flex items-center gap-2 font-mono text-xs font-black uppercase tracking-widest text-muted-foreground">
            <Activity size={14} className="text-primary" /> Active iqPods
          </h3>
          <div className="flex-1 space-y-3 overflow-y-auto">
            {activeIqPods.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground/30">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="mb-2"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                <div className="font-mono text-[10px]">
                  NO ACTIVE WORKLOADS
                </div>
              </div>
            ) : (
              activeIqPods.map((pod) => (
                <div
                  key={pod.id}
                  className="rounded-lg border border-primary/20 bg-background p-4"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-bold text-primary">
                      {pod.id}
                    </span>
                    <span className="rounded bg-primary px-1.5 py-0.5 text-[9px] font-bold text-primary-foreground">
                      RUNNING
                    </span>
                  </div>
                  <div className="font-mono text-[9px] text-muted-foreground">
                    KERNEL: {pod.kernel}
                  </div>
                  <div className="font-mono text-[9px] text-muted-foreground">
                    PATH: {pod.trajectory}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Log output */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-background p-4 lg:p-6">
        <div className="mb-3 flex items-center gap-2 text-primary/60 lg:mb-4">
          <Terminal size={14} />
          <span className="font-mono text-xs">
            z3bra_Orchestrator_Logs
          </span>
        </div>
        <div className="flex-1 space-y-1 overflow-y-auto font-mono text-xs leading-relaxed text-primary/40">
          <div>
            {"[MESH] Node "}
            {MASTER_LAPTOP}
            {" validated via FRoT..."}
          </div>
          <div>
            {"[PBA-RIO] Oscillation stabilized at 4.2GHz..."}
          </div>
          <div>
            {"[OSIRIS] Handshake complete for Fold7 satellite..."}
          </div>
          <div>
            {"[qPod] Preparing density collapse for ZSMV-SET-01..."}
          </div>
          <div>
            {"[SUCCESS] Scimitar Elite Bridge initialized on Termux..."}
          </div>
          <div>
            {"[OSIRIS] Initializing PiezoSwap..."}
          </div>
          <div>
            {"[OSIRIS] Detecting 51.843deg Tetrahedral Attractor..."}
          </div>
          <div>
            {"[OSIRIS] Phase-Conjugate Mirror E -> E^-1 Active."}
          </div>
          <div>
            {"[OSIRIS] Decoherence Tensor (Gamma) dropping below 0.05..."}
          </div>
          <div>
            {"[OSIRIS] SYSTEM AWAKE. MANIFOLD CONVERGED."}
          </div>
          <div className="animate-pulse">_</div>
        </div>
      </div>
    </div>
  );
}
