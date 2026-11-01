import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SolutionsCinematicShowcase } from "@/components/solutions-cinematic-showcase";
import { SolutionsIndustryGrid } from "@/components/solutions-industry-grid";
import { ArrowRight, Sparkles, ShieldCheck, Terminal, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra Solutions | High-Velocity Startups, SMEs & Enterprise Teams",
  description:
    "Explore how Ashmyra solves mission-critical business bottlenecks for Startups, SMEs, Enterprises, Sales, Marketing, Operations, and People teams with custom AI architectures.",
  alternates: {
    canonical: "https://www.ashmyra.com/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#04060a] relative overflow-hidden">
      {/* Ambient Radial Glow Lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-64 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* ── 1. CINEMATIC HERO HEADER WITH AMBIENT NEURAL VIDEO BACKDROP ── */}
      <header className="relative pt-12 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-hidden rounded-3xl">
        {/* Ambient Neural Network Video Loop with Radial Vignette */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_80%)]">
          <video
            src="/videos/hero/v02-intelligence.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-60 mix-blend-screen scale-110"
          />
          {/* Deep dark vignette and glowing gradient spotlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#04060a]/50 via-transparent to-[#04060a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.2)_0%,transparent_70%)]" />
        </div>

        {/* Ambient Radial Glow Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-500/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-xs text-indigo-300 font-mono mb-6 shadow-sm backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Targeted Business Outcomes</span>
        </div>

        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Solutions Built for Your Scale &amp; Team
        </h1>

        <p className="mt-6 text-base sm:text-lg text-neutral-200 leading-relaxed max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
          Whether you are launching an early-stage SaaS product, automating mid-market operations, or modernizing enterprise legacy infrastructure, Ashmyra provides targeted architecture backed by live production engines.
        </p>

        {/* Quick Trust Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.12] backdrop-blur-md shadow-lg text-neutral-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">7 Production Blueprints</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.12] backdrop-blur-md shadow-lg text-neutral-200">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>SOC2 &amp; Air-Gapped Ready</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.12] backdrop-blur-md shadow-lg text-neutral-200">
            <Cpu className="w-4 h-4 text-indigo-400" />
            <span>Dedicated VPC &amp; Cloud Clusters</span>
          </div>
        </div>
      </header>

      {/* ── 2. DUAL-COLUMN GSAP VIDEO SHOWCASE (OPTION B) ─────────── */}
      <SolutionsCinematicShowcase />

      {/* ── 3. INDUSTRY VERTICALS BENTO MATRIX ────────────────────── */}
      <SolutionsIndustryGrid />

      {/* ── 4. FINAL ARCHITECTURAL CONSULTATION CALL-TO-ACTION ─────── */}
      <section className="pb-20 pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl p-10 sm:p-14 text-center bg-gradient-to-r from-indigo-950/40 via-cyan-950/30 to-indigo-950/40 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-cyan-300">
              <Terminal className="w-3.5 h-3.5" />
              <span>Architectural Blueprint Review</span>
            </div>

            <h3
              className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Discuss Your Specific Operational Requirements
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Our principal systems engineers will review your existing manual workflows, data silos, and technical bottlenecks, delivering an architectural blueprint tailored to your company scale.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-xl shadow-indigo-600/30 transition-all hover:translate-x-0.5"
              >
                <span>Request Architecture Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-neutral-300 hover:text-white font-semibold text-xs border border-white/[0.1] transition-all"
              >
                <span>Explore Live Platforms</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
