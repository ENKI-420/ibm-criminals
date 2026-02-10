const layers = [
  {
    name: "Quantum Layer",
    description: "Superposition state management and entangled networking",
    status: "active",
  },
  {
    name: "Cellular Layer",
    description: "Self-healing components with mitotic regeneration",
    status: "active",
  },
  {
    name: "Evolutionary Layer",
    description: "Natural selection routing and adaptive optimization",
    status: "active",
  },
  {
    name: "Immune Layer",
    description: "Biological security with antibody pattern matching",
    status: "active",
  },
  {
    name: "Photosynthetic Layer",
    description: "Light-driven rate limiting and energy management",
    status: "standby",
  },
];

export function ArchitectureSection() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left column - description */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Architecture
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Layered Organism Stack
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              DNA-Lang applications are structured as living organisms with
              distinct biological layers. Each layer operates autonomously while
              communicating through chemical signaling pathways.
            </p>
            <div className="mt-8 rounded-lg border border-border bg-card p-4">
              <pre className="font-mono text-xs leading-relaxed text-foreground">
                <code>{`organism DNALangApp {
  genome: "app.dna"
  
  layers: [
    QuantumLayer    -> state
    CellularLayer   -> components
    EvolutionLayer  -> routing
    ImmuneLayer     -> security
    PhotoLayer      -> resources
  ]
  
  lifecycle: autonomous
  healing:   enabled
}`}</code>
              </pre>
            </div>
          </div>

          {/* Right column - layer visualization */}
          <div className="flex flex-col gap-3">
            {layers.map((layer, i) => (
              <div
                key={layer.name}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted font-mono text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-mono text-sm font-medium text-foreground">
                      {layer.name}
                    </h3>
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        layer.status === "active"
                          ? "bg-primary animate-pulse-glow"
                          : "bg-muted-foreground"
                      }`}
                    />
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {layer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
