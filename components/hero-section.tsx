"use client";

import { DnaHelix } from "./dna-helix";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      {/* DNA Helix animation */}
      <div className="pointer-events-none absolute right-8 top-0 h-full w-32 opacity-40 md:right-16 md:w-48 lg:right-24 lg:w-56">
        <DnaHelix />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Tag */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
          <span className="h-2 w-2 animate-pulse-glow rounded-full bg-primary" />
          <span className="font-mono text-xs tracking-wider text-primary">
            QUANTUM-BIOLOGICAL RUNTIME v1.0
          </span>
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Living Software That{" "}
          <span className="text-primary">Evolves</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          DNA-Lang transcends traditional frameworks through biological computing
          paradigms. Build self-healing, quantum-enhanced applications that adapt
          and optimize through natural selection.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-8 font-mono text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            <span className="h-2 w-2 rounded-full bg-primary-foreground/60" />
            Initialize Organism
          </button>
          <button className="inline-flex h-12 items-center gap-2 rounded-lg border border-border bg-card px-8 font-mono text-sm font-medium text-foreground transition-colors hover:bg-muted">
            Explore Documentation
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: "O(\u221An)", label: "Search Complexity" },
            { value: "Self-Healing", label: "Error Recovery" },
            { value: "Quantum", label: "State Management" },
            { value: "Evolutionary", label: "Optimization" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-lg font-bold text-primary md:text-xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
