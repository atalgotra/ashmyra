import React from "react";
import type { Metadata } from "next";
import { HeroPhase7 } from "@/components/hero-phase7";
import { BrandIntroPhase7 } from "@/components/brand-intro-phase7";
import { ShowcasePhase7 } from "@/components/showcase-phase7";
import { EngineeringCapabilitiesPhase7 } from "@/components/engineering-capabilities-phase7";
import { SelectedWorkPhase7 } from "@/components/selected-work-phase7";
import { PeopleSection } from "@/components/people-section";
import { FinalCtaPhase7 } from "@/components/final-cta-phase7";

export const metadata: Metadata = {
  title: "Ashmyra | We Engineer What's Next | AI, Data & Enterprise Software",
  description:
    "Ashmyra Technologies engineers autonomous multi-agent AI systems, real-time data intelligence platforms, and enterprise software designed to solve real business problems. Delhi NCR, India. Serving clients globally.",
  keywords: [
    "Ashmyra",
    "Ashmyra Technologies",
    "AI Technology Company India",
    "Agentic AI Systems",
    "Enterprise Software Engineering",
    "Generative Engine Optimization",
    "GEO Optimization India",
    "Autonomous Agent Swarms",
    "Data Intelligence Platform",
    "Enterprise AI Solutions",
  ],
  alternates: {
    canonical: "https://www.ashmyra.com",
  },
  openGraph: {
    title: "Ashmyra | We Engineer What's Next",
    description:
      "Agentic AI, intelligent software and data-driven systems engineered to solve real business problems.",
    url: "https://www.ashmyra.com",
    images: [
      {
        url: "/brand/ashmyra-og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashmyra Technologies - AI-Native Technology Company",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#05070c] selection:bg-indigo-500/30 selection:text-indigo-200">

      {/* 01 — HERO: Two-column editorial layout (~43% left, ~57% right) */}
      <HeroPhase7 />

      {/* 02 — SHORT BRAND INTRODUCTION: Engineering practitioners. Not advisors. */}
      <BrandIntroPhase7 />

      {/* 03 — WHAT WE BUILD: Seven-image interactive capability reel */}
      <ShowcasePhase7 />

      {/* 04 — ENGINEERING CREDIBILITY: Engineering Complexity Into Clarity */}
      <EngineeringCapabilitiesPhase7 />

      {/* 05 — SELECTED WORK: Refined project gallery (FMO, 1A Veda, Ramaroma Herbs, Divagam) */}
      <SelectedWorkPhase7 />

      {/* 06 — LEADERSHIP & TEAM: Swati (Founder), Ashish (AI Engineer / Data Scientist), Prince Rehan (Head - IT) */}
      <PeopleSection />

      {/* 07 — FINAL CTA: Premium editorial closing section */}
      <FinalCtaPhase7 />

    </div>
  );
}
