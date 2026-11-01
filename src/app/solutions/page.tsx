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
        className="relative w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[760px] flex flex-col justify-center items-center pt-32 pb-24 sm:pt-40 sm:pb-32 text-center overflow-hidden transition-colors duration-300"
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
            className="object-cover object-center scale-105 opacity-15 dark:opacity-90 transition-opacity duration-500"
          />
          {/* Theme-aware smooth scrims for seamless edge blend & crystal-clear text readability */}
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(to bottom, var(--bg) 0%, transparent 25%, transparent 75%, var(--bg) 100%)",
            }}
          />
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(to right, var(--bg) 0%, transparent 25%, transparent 75%, var(--bg) 100%)",
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
              backgroundColor: "var(--theme-pill-bg)",
              border: "1px solid var(--theme-pill-border)",
              color: "var(--accent)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
            <span>BUSINESS SOLUTIONS</span>
          </div>

          {/* Main Title */}
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.15]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
          >
            Intelligent Solutions. Built for Your Business.
          </h1>

          {/* Subtitle */}
          <div
            className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: "var(--hero-headline-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            From Startup to Enterprise.
          </div>

          {/* Body Paragraph */}
          <p
            className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-normal"
            style={{ color: "var(--text-muted)" }}
          >
            Whether you&apos;re launching a SaaS product, streamlining growing business operations, or modernising enterprise systems, Ashmyra engineers intelligent solutions aligned with your business goals.
          </p>

          {/* 3 Metric Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 max-w-3xl mx-auto">
            <div
              className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl border backdrop-blur-md shadow-lg transition-colors"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
            >
              <Layers className="w-5 h-5" style={{ color: "var(--accent-cyan)" }} />
              <span className="font-semibold text-xs sm:text-sm tracking-tight">7 Solution Areas</span>
            </div>
            <div
              className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl border backdrop-blur-md shadow-lg transition-colors"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
            >
              <ShieldCheck className="w-5 h-5" style={{ color: "var(--accent-emerald)" }} />
              <span className="font-semibold text-xs sm:text-sm tracking-tight">Security by Design</span>
            </div>
            <div
              className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl border backdrop-blur-md shadow-lg transition-colors"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
            >
              <Cloud className="w-5 h-5" style={{ color: "var(--accent)" }} />
              <span className="font-semibold text-xs sm:text-sm tracking-tight">Flexible Deployment</span>
            </div>
          </div>
        </div>

        {/* Soft bottom edge transition to next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none z-10 transition-colors"
          style={{
            background: "linear-gradient(to top, var(--bg), transparent)",
          }}
        />
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
