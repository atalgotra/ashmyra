import React from "react";
import type { Metadata } from "next";
import { CapabilitiesHero } from "@/components/capabilities/capabilities-hero";
import { CapabilitiesNavStrip } from "@/components/capabilities/capabilities-nav-strip";
import { CapabilitiesShowcase } from "@/components/capabilities/capabilities-showcase";
import { CapabilitiesTechFoundation } from "@/components/capabilities/capabilities-tech-foundation";
import { CapabilitiesProcess } from "@/components/capabilities/capabilities-process";
import { CapabilitiesCTA } from "@/components/capabilities/capabilities-cta";

export const metadata: Metadata = {
  title: "Engineering Capabilities | Ashmyra Technologies",
  description:
    "We build intelligent systems that act. Explore Ashmyra Technologies' engineering capabilities across custom SaaS platforms, agentic AI systems, technical search & GEO, and high-performance web experiences.",
  alternates: {
    canonical: "https://www.ashmyra.com/capabilities",
  },
  openGraph: {
    title: "Engineering Capabilities | Ashmyra Technologies",
    description:
      "We build intelligent systems that act. Explore Ashmyra Technologies' engineering capabilities across custom SaaS platforms, agentic AI systems, technical search & GEO, and high-performance web experiences.",
    url: "https://www.ashmyra.com/capabilities",
    siteName: "Ashmyra Technologies",
    type: "website",
  },
};

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-[#030408] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Phase 3: Split-Layout Hero */}
      <CapabilitiesHero />

      {/* Phase 4: Sticky Compact Capability Overview Navigation */}
      <CapabilitiesNavStrip />

      {/* Phase 5, 6, 7: Distinctive Capability Showcases (4 Pillars) */}
      <CapabilitiesShowcase />

      {/* Phase 8: Structured Technology Foundation */}
      <CapabilitiesTechFoundation />

      {/* Phase 9: 6-Stage Engineering Process Lifecycle */}
      <CapabilitiesProcess />

      {/* Phase 11: Final Conversion CTA */}
      <CapabilitiesCTA />
    </main>
  );
}
