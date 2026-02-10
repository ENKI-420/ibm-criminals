"use client";

import { useState } from "react";

const navLinks = [
  { label: "Paradigms", href: "#paradigms" },
  { label: "Architecture", href: "#architecture" },
  { label: "Benchmarks", href: "#benchmarks" },
  { label: "Docs", href: "#docs" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
            <span className="font-mono text-xs font-bold text-primary-foreground">
              {"{ }"}
            </span>
          </div>
          <span className="font-mono text-sm font-bold text-foreground">
            DNA-Lang
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="inline-flex h-8 items-center rounded-md bg-primary px-4 font-mono text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {mobileOpen ? (
              <path d="M4 4l8 8M12 4l-8 8" />
            ) : (
              <path d="M2 4h12M2 8h12M2 12h12" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 font-mono text-xs font-medium text-primary-foreground"
            >
              Get Started
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
