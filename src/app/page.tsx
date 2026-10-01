import React from "react";
import type { Metadata } from "next";
import { HeroPhase6 } from "@/components/hero-phase6";
import { WowShowcasePhase6 } from "@/components/wow-showcase-phase6";
import { CapabilityProof } from "@/components/capability-proof";
import { PeopleSection } from "@/components/people-section";
import { FinalCtaPhase6 } from "@/components/final-cta-phase6";

export const metadata: Metadata = {
  title: "Ashmyra | We Build Intelligent Systems That Act",
  description:
    "AI agents. Data intelligence. Enterprise software. Automation. Ashmyra engineers AI agents, software platforms and data systems that turn complex business problems into executable workflows.",
  alternates: {
    canonical: "https://ashmyra.com",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090e] selection:bg-indigo-500/30 selection:text-indigo-200">

      {/* 01 — HERO: Split composition, cinematic visual right */}
      <HeroPhase6 />

      {/* 02 — WHAT WE BUILD: Full-screen cinematic slideshow */}
      <WowShowcasePhase6 />

      {/* 03 — CAPABILITY PROOF + SELECTED WORK */}
      <CapabilityProof />

      {/* 04 — PEOPLE */}
      <PeopleSection />

      {/* 05 — FINAL CTA */}
      <FinalCtaPhase6 />

    </div>
  );
}
