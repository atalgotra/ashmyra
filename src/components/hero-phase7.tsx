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
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#05070c] text-white flex flex-col justify-center pt-28 sm:pt-32 pb-16 lg:pb-24 overflow-hidden"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* ── Two-Column Editorial Layout (Left ~43%, Right ~57%) ───────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">

          {/* ── Left Column (~43% on desktop: 5 cols / 12) ─────────────────── */}
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col justify-center">

            {/* Eyebrow & Positioning Kicker */}
            <div ref={eyebrowRef} className="mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-[11px] font-mono font-semibold tracking-[0.22em] text-indigo-300 uppercase">
                  AI • DATA • SOFTWARE • AUTOMATION
                </span>
              </div>
              <p className="text-[12.5px] font-mono text-neutral-400 tracking-wide">
                We engineer intelligent autonomous systems that drive enterprise advantage.
              </p>
            </div>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl xs:text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.25rem] font-bold tracking-tight text-white leading-[1.04] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              WE ENGINEER
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #cbd5e1 55%, #818cf8 100%)",
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
              className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans mb-8 max-w-lg"
            >
              Agentic AI, intelligent software and data-driven systems engineered to solve real business problems.
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10 w-full sm:w-auto"
            >
              <Link
                href="/our-work"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #818cf8)",
                  boxShadow:
                    "0 0 0 1px rgba(99, 102, 241, 0.45), 0 8px 24px -6px rgba(99, 102, 241, 0.5)",
                }}
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/contact?intent=discovery"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-neutral-200 hover:text-white transition-all duration-300 hover:bg-white/[0.08] hover:border-white/25 text-center group"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <span>Book Technical Discovery</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Three Concise Capability Labels */}
            <div
              ref={capabilitiesRef}
              className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 text-xs font-mono"
            >
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <Cpu className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="text-neutral-300 font-medium truncate">Agentic AI</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <Database className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-neutral-300 font-medium truncate">Data Systems</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <Layers className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="text-neutral-300 font-medium truncate">Enterprise SaaS</span>
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
