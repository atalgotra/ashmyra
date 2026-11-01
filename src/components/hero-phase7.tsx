"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, ArrowUpRight, Cpu, Database, Layers } from "lucide-react";
import { AshmyraHeroShowreel } from "@/components/hero-showreel";

export function HeroPhase7() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.15
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power4.out" },
          0.25
        )
        .fromTo(
          copyRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.45
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.6
        )
        .fromTo(
          capabilitiesRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.75
        )
        .fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.97, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "power3.out" },
          0.35
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-center pt-20 sm:pt-24 lg:pt-24 pb-6 lg:pb-8 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* ── Editorial Background Atmosphere ─────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft radial background depth */}
        <div
          className="absolute top-1/4 right-0 w-[55vw] h-[65vh]"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 75% 40%, rgba(99, 102, 241, 0.1) 0%, rgba(34, 211, 238, 0.04) 45%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[45vw] h-[45vh]"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 20% 80%, rgba(99, 102, 241, 0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Restrained subtle dot grid */}
        <div className="absolute inset-0 dot-bg opacity-15" />
      </div>

      <div className="relative z-10 max-w-[1480px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        {/* ── Two-Column Editorial Layout (Left ~42%, Right ~58% for expansive video) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

          {/* ── Left Column: Value Proposition & CTAs ──────────────────────── */}
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col justify-center">

            {/* Eyebrow & Positioning Kicker */}
            <div ref={eyebrowRef} className="mb-4">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md mb-2.5 shadow-sm transition-colors duration-300"
                style={{
                  background: "var(--theme-pill-bg)",
                  border: "1px solid var(--theme-pill-border)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent)" }} />
                <span className="text-[11px] font-mono font-semibold tracking-[0.22em] uppercase" style={{ color: "var(--accent)" }}>
                  AI • DATA • SOFTWARE • AUTOMATION
                </span>
              </div>
              <p className="text-[12px] font-mono tracking-wide" style={{ color: "var(--text-muted)" }}>
                We engineer intelligent autonomous systems that drive enterprise advantage.
              </p>
            </div>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl xs:text-5xl sm:text-6xl lg:text-[3.4rem] xl:text-[3.85rem] font-bold tracking-tight leading-[1.05] mb-4 sm:mb-5 transition-colors duration-300"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
            >
              WE ENGINEER
              <br />
              <span
                style={{
                  background: "var(--hero-headline-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                WHAT&apos;S NEXT.
              </span>
            </h1>

            {/* Supporting Statement */}
            <p
              ref={copyRef}
              className="text-sm sm:text-base lg:text-[1.05rem] leading-relaxed font-sans mb-6 sm:mb-7 max-w-lg transition-colors duration-300"
              style={{ color: "var(--text-muted)" }}
            >
              Agentic AI, intelligent software and data-driven systems engineered to solve real business problems.
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6 sm:mb-7 w-full sm:w-auto"
            >
              <Link
                href="/our-work"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent-light))",
                  boxShadow:
                    "0 0 0 1px var(--border-glow), 0 8px 24px -6px var(--border-glow)",
                }}
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/contact?intent=discovery"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 text-center group hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "var(--theme-pill-bg)",
                  border: "1px solid var(--theme-pill-border)",
                  color: "var(--text)",
                }}
              >
                <span>Book Technical Discovery</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-inherit group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Unified Executive Capability Ribbon (Single Cohesive Row) */}
            <div
              ref={capabilitiesRef}
              className="pt-5"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <div
                className="inline-flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl backdrop-blur-md shadow-sm transition-colors duration-300"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="flex items-center gap-2 text-xs font-mono">
                  <Cpu className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--accent)" }} />
                  <span className="font-medium" style={{ color: "var(--text)" }}>Agentic AI</span>
                </div>
                <span className="w-1 h-1 rounded-full hidden sm:inline shrink-0" style={{ backgroundColor: "var(--border-strong)" }} />
                <div className="flex items-center gap-2 text-xs font-mono">
                  <Database className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--accent-cyan)" }} />
                  <span className="font-medium" style={{ color: "var(--text)" }}>Data Intelligence</span>
                </div>
                <span className="w-1 h-1 rounded-full hidden sm:inline shrink-0" style={{ backgroundColor: "var(--border-strong)" }} />
                <div className="flex items-center gap-2 text-xs font-mono">
                  <Layers className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--accent-violet)" }} />
                  <span className="font-medium" style={{ color: "var(--text)" }}>Enterprise Software</span>
                </div>
              </div>
            </div>

          </div>

          {/* ── Right Column: The Cinematic Ashmyra Showreel (~57%: 7 cols / 12) ── */}
          <div ref={visualRef} className="lg:col-span-7 flex items-center justify-center">
            <AshmyraHeroShowreel />
          </div>

        </div>
      </div>
    </section>
  );
}
