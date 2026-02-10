import { QuantumField } from "./quantum-field";

const features = [
  {
    title: "Quantum State Management",
    description:
      "Replace Redux with quantum superposition states. Components exist in all possible states simultaneously until observed.",
    code: `quantum_state AppState {
  superposition: [loading, ready, error]
  collapse_on: user_observation
  entangle: [SessionState, UIState]
}`,
  },
  {
    title: "Cellular Regeneration",
    description:
      "Self-healing components that detect damage and regenerate through mitotic division, eliminating runtime errors.",
    code: `organism WebComponent {
  membrane: reactive_boundary
  on_damage(error) {
    initiate_mitosis()
    regenerate_from(stem_cells)
  }
}`,
  },
  {
    title: "Evolutionary Routing",
    description:
      "Routes that optimize through natural selection. High-traffic paths strengthen while unused routes atrophy.",
    code: `ecosystem Router {
  species: ["/home", "/api/*", "/auth"]
  fitness_function: response_time
  mutation_rate: 0.01
  evolve_every: 1000_requests
}`,
  },
  {
    title: "Protein Synthesis Pipeline",
    description:
      "Transform data through ribosomal processing. mRNA templates encode transformation logic for type-safe data flow.",
    code: `ribosome transform(data: mRNA) {
  amino_acids = translate(data.codons)
  protein = fold(amino_acids)
  return protein.active_form
}`,
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Core Paradigms
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Biological Computing Primitives
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Every construct in DNA-Lang maps to biological processes, creating
            software that behaves like living organisms.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <pre className="overflow-x-auto rounded-md bg-background p-4 font-mono text-xs leading-relaxed text-primary/80">
                <code>{feature.code}</code>
              </pre>
              {/* Hover glow */}
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>

      {/* Background particle field */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <QuantumField />
      </div>
    </section>
  );
}
