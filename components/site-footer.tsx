export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
              <span className="font-mono text-[10px] font-bold text-primary-foreground">
                {"{ }"}
              </span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              DNA-Lang Quantum-Biological Computing Platform
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Research Paper
            </a>
          </div>
        </div>
        <div className="mt-8 text-center font-mono text-xs text-muted-foreground/50">
          Organism Status: Living / Coherence: 99.97% / Generation: 4,291
        </div>
      </div>
    </footer>
  );
}
