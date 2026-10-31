import React from "react";
import type { Metadata } from "next";
import { HeroPhase7 } from "@/components/hero-phase7";
import { BrandIntroPhase7 } from "@/components/brand-intro-phase7";
import { WhatWeEngineerShowcase } from "@/components/what-we-engineer-showcase";
import { TryDemoSection } from "@/components/try-demo-section";
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

      {/* 01 — HERO: Two-column editorial layout (~43% left, ~57% right: Cinematic Ashmyra Showreel) */}
      <HeroPhase7 />

      {/* 02 — SHORT BRAND INTRODUCTION: Engineering practitioners. Not advisors. */}
      <BrandIntroPhase7 />

      {/* 03 — WHAT WE ENGINEER: Complete Scroll-Driven Technical Architecture & Video Showcase */}
      <WhatWeEngineerShowcase />

      {/* 04 — LIVE PRODUCTION DEMOS: Interactive Software Applications */}
      <TryDemoSection />

      {/* 05 — LEADERSHIP & TEAM: Ashish Talgotra (Founder & Lead AI Architect), Prince Rehan, Bella */}
      <PeopleSection />

      {/* 06 — FINAL CTA: WHAT SHOULD WE BUILD NEXT? + Working Enquiry Form */}
      <FinalCtaPhase7 />

    </div>
  );
}
