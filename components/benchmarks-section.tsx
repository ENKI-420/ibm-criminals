const benchmarks = [
  {
    metric: "State Updates",
    dnaLang: "0.003ms",
    react: "0.8ms",
    improvement: "267x",
  },
  {
    metric: "Error Recovery",
    dnaLang: "Auto-heal",
    react: "Manual",
    improvement: "N/A",
  },
  {
    metric: "Search Complexity",
    dnaLang: "O(\u221An)",
    react: "O(n)",
    improvement: "Quadratic",
  },
  {
    metric: "Memory Efficiency",
    dnaLang: "DNA-encoded",
    react: "V8 Heap",
    improvement: "10^6x",
  },
  {
    metric: "Optimization",
    dnaLang: "Evolutionary",
    react: "Static",
    improvement: "Continuous",
  },
];

export function BenchmarksSection() {
  return (
    <section id="benchmarks" className="border-t border-border py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Performance
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Beyond Traditional Benchmarks
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            DNA-Lang leverages quantum parallelism and biological optimization
            to achieve performance metrics impossible in conventional frameworks.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 font-mono text-xs font-medium text-muted-foreground">
                  Metric
                </th>
                <th className="px-4 py-3 font-mono text-xs font-medium text-primary">
                  DNA-Lang
                </th>
                <th className="px-4 py-3 font-mono text-xs font-medium text-muted-foreground">
                  Traditional
                </th>
                <th className="px-4 py-3 font-mono text-xs font-medium text-muted-foreground">
                  Improvement
                </th>
              </tr>
            </thead>
            <tbody>
              {benchmarks.map((row) => (
                <tr
                  key={row.metric}
                  className="border-b border-border/50 last:border-0"
                >
                  <td className="px-4 py-3 text-foreground">{row.metric}</td>
                  <td className="px-4 py-3 font-mono text-primary">
                    {row.dnaLang}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {row.react}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-accent">
                    {row.improvement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
