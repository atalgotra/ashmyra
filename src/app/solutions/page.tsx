import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SolutionsCinematicShowcase } from "@/components/solutions-cinematic-showcase";
import { SolutionsIndustryGrid } from "@/components/solutions-industry-grid";
import { Breadcrumb } from "@/components/breadcrumb";
import { ArrowRight, Sparkles, ShieldCheck, Terminal, Layers, Cloud } from "lucide-react";

export const metadata: Metadata = {
  title: "Intelligent Business Solutions",
  description:
    "Engineering bespoke software and intelligent architectures aligned with your enterprise goals. From SaaS platforms to modern enterprise automation.",
  alternates: {
    canonical: "https://www.ashmyra.com/solutions",
  },
  openGraph: {
    title: "Intelligent Business Solutions | Ashmyra",
    description:
      "Engineering bespoke software and intelligent architectures aligned with your enterprise goals. From SaaS platforms to modern enterprise automation.",
    url: "https://www.ashmyra.com/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div
      className="pb-20 min-h-screen relative overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* Ambient Radial Glow Lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-64 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* ── 1. CINEMATIC FULL-WIDTH HERO WITH 3D HOLOGRAPHIC ARCHITECTURE BLUEPRINT ── */}
      <section
        aria-label="Solutions Hero"
        data-dark-chassis="true"
        className="relative w-full min-h-[720px] sm:min-h-[800px] lg:min-h-[860px] flex flex-col justify-center items-center pt-32 pb-44 sm:pt-40 sm:pb-56 text-center overflow-hidden transition-colors duration-300"
        style={{ background: "#05070e" }}
      >
        {/* Full-bleed 3D Holographic Architecture Backdrop Image */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/solutions-hero.jpg"
            alt="Ashmyra Solutions Holographic Architecture Blueprint"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center scale-105 opacity-85 transition-opacity duration-500"
          />
          {/* Subtle radial center vignette to ensure text readability while keeping full holographic visibility */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 75% 70% at 50% 48%, rgba(5, 7, 14, 0.6) 0%, rgba(5, 7, 14, 0.85) 100%)",
            }}
          />
          {/* Smooth non-linear bottom edge blend into the page canvas */}
          <div
            className="absolute inset-x-0 bottom-0 h-72 sm:h-96 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom in oklab, transparent 0%, color-mix(in oklab, var(--bg) 4%, transparent) 20%, color-mix(in oklab, var(--bg) 16%, transparent) 40%, color-mix(in oklab, var(--bg) 42%, transparent) 65%, color-mix(in oklab, var(--bg) 75%, transparent) 85%, var(--bg) 100%)",
            }}
          />
        </div>

        {/* Ambient Radial Lighting Accents */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[350px] bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation Trail */}
          <div className="mb-6 flex justify-center">
            <Breadcrumb items={[{ name: "Solutions" }]} />
          </div>

          {/* Badge: BUSINESS SOLUTIONS */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm backdrop-blur-md transition-colors"
            style={{
              backgroundColor: "rgba(212, 175, 55, 0.12)",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              color: "#E6C665",
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E6C665]" />
            <span>BUSINESS SOLUTIONS</span>
          </div>

          {/* Main Title */}
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.15] text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FFFFFF" }}
          >
            Intelligent Solutions. Built for Your Business.
          </h1>

          {/* Subtitle */}
          <div
            className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: "linear-gradient(135deg, #FAF7F2 0%, #D4AF37 50%, #C5A059 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            From Startup to Enterprise.
          </div>

          {/* Body Paragraph */}
          <p
            className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-normal text-slate-200"
            style={{ color: "rgba(226, 232, 240, 0.9)" }}
          >
            Whether you&apos;re launching a SaaS product, streamlining growing business operations, or modernising enterprise systems, Ashmyra engineers intelligent solutions aligned with your business goals.
          </p>

          {/* 3 Metric Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 max-w-3xl mx-auto">
            <div
              className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl border backdrop-blur-md shadow-xl transition-all duration-300 hover:border-cyan-500/40"
              style={{
                backgroundColor: "rgba(10, 15, 29, 0.75)",
                borderColor: "rgba(255, 255, 255, 0.12)",
                color: "#FFFFFF",
              }}
            >
              <Layers className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold text-xs sm:text-sm tracking-tight text-white">7 Solution Areas</span>
            </div>
            <div
              className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl border backdrop-blur-md shadow-xl transition-all duration-300 hover:border-emerald-500/40"
              style={{
                backgroundColor: "rgba(10, 15, 29, 0.75)",
                borderColor: "rgba(255, 255, 255, 0.12)",
                color: "#FFFFFF",
              }}
            >
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold text-xs sm:text-sm tracking-tight text-white">Security by Design</span>
            </div>
            <div
              className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl border backdrop-blur-md shadow-xl transition-all duration-300 hover:border-amber-500/40"
              style={{
                backgroundColor: "rgba(10, 15, 29, 0.75)",
                borderColor: "rgba(255, 255, 255, 0.12)",
                color: "#FFFFFF",
              }}
            >
              <Cloud className="w-5 h-5 text-amber-400" />
              <span className="font-semibold text-xs sm:text-sm tracking-tight text-white">Flexible Deployment</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. DUAL-COLUMN GSAP VIDEO SHOWCASE (OPTION B) ─────────── */}
      <SolutionsCinematicShowcase />

      {/* ── 3. INDUSTRY VERTICALS BENTO MATRIX ────────────────────── */}
      <SolutionsIndustryGrid />

      {/* ── 4. FINAL ARCHITECTURAL CONSULTATION CALL-TO-ACTION ─────── */}
      <section className="pb-24 pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className="rounded-3xl p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden border shadow-2xl transition-colors duration-300"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
            boxShadow: "0 25px 70px -15px rgba(0,0,0,0.1), 0 0 50px -15px var(--border-glow)",
          }}
        >
          {/* 3D Blueprint Background Image */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/solutions-cta.jpg"
              alt="Ashmyra Architectural Blueprint Consultation Nexus"
              fill
              quality={95}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center opacity-10 dark:opacity-40 scale-105 transition-opacity"
            />
            {/* Scrim gradients for contrast and seamless edge blending */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 30%, var(--bg-card) 90%)",
              }}
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h3
              className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
            >
              Discuss Your Specific Operational Requirements
            </h3>

            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Our principal systems engineers will review your existing manual workflows, data silos, and technical bottlenecks, delivering an architectural blueprint tailored to your company scale.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
                  boxShadow: "0 10px 25px -5px var(--border-glow)",
                }}
              >
                <span>Request Architecture Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm border backdrop-blur-md transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--theme-pill-bg)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
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
