import React from "react";
import type { Metadata } from "next";
import { HeroPhase6 } from "@/components/hero-phase6";
import { WowShowcasePhase6 } from "@/components/wow-showcase-phase6";
import { CapabilityProof } from "@/components/capability-proof";
import { FinalCtaPhase6 } from "@/components/final-cta-phase6";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ashmyra | We Build Intelligent Systems That Act | AI-Native Technology",
  description:
    "Ashmyra Technologies engineers AI agents, agentic automation, enterprise SaaS, HRMS, CRM, and data intelligence platforms. Based in Delhi NCR, India. Serving enterprises globally.",
  keywords: [
    "Ashmyra",
    "Ashmyra Technologies",
    "AI Technology Company India",
    "Agentic AI Systems",
    "Enterprise Software Delhi NCR",
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
      "AI-native technology company engineering autonomous agent swarms, GEO intelligence, enterprise HRMS, CRM, and data pipelines. Delhi NCR, India.",
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

      {/* 04 — WHO WE ARE: Compact philosophy strip — no personal names on homepage */}
      <section className="relative bg-[#030406] border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-14 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left — statement */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-indigo-400">
                  Who We Are
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Engineering practitioners.{" "}
                <span style={{
                  background: "linear-gradient(135deg, #818cf8 0%, #22d3ee 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Not advisors.
                </span>
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
                Ashmyra was built by people who spent over a decade inside the problem —
                designing AI architectures, data platforms, and enterprise systems that had to work
                in production, at scale, under real business pressure.
              </p>
            </div>
            {/* Right — tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {[
                { label: "Applied Intelligence", desc: "Every system connects to live enterprise data from day one. Zero demos." },
                { label: "Deterministic Guardrails", desc: "Autonomous reasoning backed by audit logs and human-in-the-loop controls." },
                { label: "Extreme Execution Velocity", desc: "Blueprint to live production in weeks. No agency layers. No bloat." },
              ].map((item) => (
                <div key={item.label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-indigo-500/30 transition-all"
                >
                  <div className="w-1 h-full min-h-[36px] rounded-full bg-indigo-500/40 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.label}</div>
                    <div className="text-[11px] text-neutral-500 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Meet the team CTA */}
          <div className="mt-10 pt-8 border-t border-white/[0.06] flex items-center justify-between">
            <p className="text-xs text-neutral-500 font-mono">Delhi NCR, India · Serving enterprises globally</p>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-indigo-300 hover:text-white bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 hover:border-indigo-400/40 transition-all"
            >
              Meet the Team →
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — FINAL CTA */}
      <FinalCtaPhase6 />

    </div>
  );
}
