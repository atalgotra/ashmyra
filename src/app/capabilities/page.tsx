import React from "react";
import type { Metadata } from "next";
import { CapabilitiesHero } from "@/components/capabilities/capabilities-hero";
import { CapabilitiesNavStrip } from "@/components/capabilities/capabilities-nav-strip";
import { CapabilitiesShowcase } from "@/components/capabilities/capabilities-showcase";
import { CapabilitiesTechFoundation } from "@/components/capabilities/capabilities-tech-foundation";
import { CapabilitiesProcess } from "@/components/capabilities/capabilities-process";
import { CapabilitiesProjectGallery } from "@/components/capabilities/capabilities-project-gallery";
import { CapabilitiesCTA } from "@/components/capabilities/capabilities-cta";

export const metadata: Metadata = {
  title: "Engineering Capabilities",
  description:
    "We build intelligent systems that act. Explore Ashmyra's engineering capabilities across SaaS platforms, agentic AI, GEO search, and edge web apps.",
  alternates: {
    canonical: "https://www.ashmyra.com/capabilities",
  },
  openGraph: {
    title: "Engineering Capabilities | Ashmyra",
    description:
      "We build intelligent systems that act. Explore Ashmyra's engineering capabilities across SaaS platforms, agentic AI, GEO search, and edge web apps.",
    url: "https://www.ashmyra.com/capabilities",
    siteName: "Ashmyra Technologies",
    type: "website",
  },
};

export default function CapabilitiesPage() {
  return (
    <main
      className="min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
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

      {/* Phase 8/10: Editorial Project Gallery (Approved Engagements) */}
      <CapabilitiesProjectGallery />

      {/* Phase 11: Final Conversion CTA */}
      <CapabilitiesCTA />
    </main>
  );
}
