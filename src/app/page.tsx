import React from "react";
import type { Metadata } from "next";
import { HeroPhase6 } from "@/components/hero-phase6";
import { WowShowcasePhase6 } from "@/components/wow-showcase-phase6";
import { CapabilityProof } from "@/components/capability-proof";
import { PeopleSection } from "@/components/people-section";
import { FinalCtaPhase6 } from "@/components/final-cta-phase6";

export const metadata: Metadata = {
  title: "Ashmyra | We Build Intelligent Systems That Act | AI-Native Technology",
  description:
    "Ashmyra Technologies engineers AI agents, agentic automation, enterprise SaaS, HRMS, CRM, and data intelligence platforms. Founded by Ashish Talgotra. Based in Delhi NCR, India. Serving enterprises globally. AI agents that act. Data systems that decide. Software that evolves.",
  keywords: [
    "Ashmyra",
    "Ashmyra Technologies",
    "AI Technology Company India",
    "Agentic AI Systems",
    "Enterprise Software Delhi NCR",
    "Ashish Talgotra AI",
    "GEO Optimization India",
    "Generative Engine Optimization",
    "Ashmyra HRMS",
    "Ashmyra AI Platform",
    "AI Automation India",
    "Intelligent Business Software",
  ],
  alternates: {
    canonical: "https://ashmyra.com",
  },
  openGraph: {
    title: "Ashmyra | We Build Intelligent Systems That Act",
    description:
      "AI-native technology company engineering autonomous agent swarms, GEO intelligence, enterprise HRMS, CRM, and data pipelines. Founded by Ashish Talgotra. Delhi NCR, India.",
    url: "https://ashmyra.com",
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
