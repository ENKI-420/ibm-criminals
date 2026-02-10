import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ArchitectureSection } from "@/components/architecture-section";
import { BenchmarksSection } from "@/components/benchmarks-section";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <section id="paradigms">
          <FeaturesSection />
        </section>
        <section id="architecture">
          <ArchitectureSection />
        </section>
        <BenchmarksSection />
      </main>
      <SiteFooter />
    </>
  );
}
