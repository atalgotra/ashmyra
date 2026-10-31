"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, ArrowUpRight, CheckCircle2, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

export interface EngineerCapability {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
  accent: string;
  accentGlow: string;
  href: string;
  tags: string[];
}

export const CAPABILITIES: EngineerCapability[] = [
  {
    id: "01",
    num: "01",
    title: "DIGITAL EXPERIENCES",
    subtitle: "High-Performance 3D & GSAP Web Applications",
    description:
      "Bespoke digital surfaces built with WebGL, Three.js, and kinetic GSAP animations. Engineered for sub-second edge loads, fluid micro-interactions, and unquestioned visual distinction.",
    videoSrc: "/videos/showreel/01-digital-experiences.mp4",
    posterSrc: "/videos/showreel/01-digital-experiences.jpg",
    accent: "#818cf8",
    accentGlow: "rgba(129, 140, 248, 0.22)",
    href: "/services/web-apps",
    tags: ["WebGL / Three.js", "GSAP Motion", "Next.js App Router", "Sub-second LCP"],
  },
  {
    id: "02",
    num: "02",
    title: "MOBILE APPLICATIONS",
    subtitle: "Native & Hybrid Cross-Platform Mobile Platforms",
    description:
      "Production-ready iOS and Android applications built with Swift, Kotlin, and Flutter. Designed for extreme fluid responsiveness, offline-first sync, and biometric security.",
    videoSrc: "/videos/showreel/02-mobile-engineering.mp4",
    posterSrc: "/videos/showreel/02-mobile-engineering.jpg",
    accent: "#38bdf8",
    accentGlow: "rgba(56, 189, 248, 0.22)",
    href: "/services/software-development",
    tags: ["iOS / Swift", "Android / Kotlin", "Flutter", "Real-Time Telemetry"],
  },
  {
    id: "03",
    num: "03",
    title: "CRM & BUSINESS PLATFORMS",
    subtitle: "Intelligent Pipeline & Revenue Operations",
    description:
      "Unified customer intelligence systems with automated lead scoring, multi-channel attribution, and real-time CRM workflow orchestration without sales friction.",
    videoSrc: "/videos/showreel/03-crm-platforms.mp4",
    posterSrc: "/videos/showreel/03-crm-platforms.jpg",
    accent: "#f43f5e",
    accentGlow: "rgba(244, 63, 94, 0.22)",
    href: "/products/crm",
    tags: ["Pipeline Telemetry", "Predictive Scoring", "Multi-channel Routing", "Zero-Latency Sync"],
  },
  {
    id: "04",
    num: "04",
    title: "ENTERPRISE SAAS",
    subtitle: "Mission-Critical Workforce & ERP Platforms",
    description:
      "Enterprise-grade SaaS architectures spanning statutory HRMS, talent parsing, automated payroll, and multi-tenant billing infrastructure.",
    videoSrc: "/videos/showreel/04-enterprise-saas.mp4",
    posterSrc: "/videos/showreel/04-enterprise-saas.jpg",
    accent: "#a78bfa",
    accentGlow: "rgba(167, 139, 250, 0.22)",
    href: "/products/hrms",
    tags: ["Multi-Tenant SaaS", "Statutory Payroll", "Automated HRMS", "SOC2 Compliance"],
  },
  {
    id: "05",
    num: "05",
    title: "AGENTIC AI",
    subtitle: "Autonomous Multi-Agent Swarms & Cognitive Workflows",
    description:
      "Deterministic multi-agent swarms engineered for reasoning, tool execution, and self-healing consensus. Moving enterprise operations from copilot prompts to autonomous execution.",
    videoSrc: "/videos/showreel/05-agentic-ai.mp4",
    posterSrc: "/videos/showreel/05-agentic-ai.jpg",
    accent: "#22d3ee",
    accentGlow: "rgba(34, 211, 238, 0.22)",
    href: "/products/ai",
    tags: ["Multi-Agent Consensus", "RAG Pipelines", "Autonomous Tool Calling", "Audit Guardrails"],
  },
  {
    id: "06",
    num: "06",
    title: "DATA INTELLIGENCE",
    subtitle: "Real-Time Streaming Pipelines & Semantic Radar",
    description:
      "High-concurrency streaming lakehouses, anomaly detection engines, and Generative Engine Optimization (GEO) citation radars across global LLM answer engines.",
    videoSrc: "/videos/showreel/06-data-intelligence.mp4",
    posterSrc: "/videos/showreel/06-data-intelligence.jpg",
    accent: "#34d399",
    accentGlow: "rgba(52, 211, 153, 0.22)",
    href: "/products/analytics",
    tags: ["Streaming Ingestion", "Golden Record Synthesis", "LLM Citation Radar", "Anomaly Analytics"],
  },
  {
    id: "07",
    num: "07",
    title: "SOFTWARE ECOSYSTEMS",
    subtitle: "Synchronized Multi-Surface Enterprise Infrastructure",
    description:
      "End-to-end digital ecosystems unifying web, mobile, desktop, and edge APIs into one coherent operational surface for modern global enterprises.",
    videoSrc: "/videos/showreel/07-technology-ecosystem.mp4",
    posterSrc: "/videos/showreel/07-technology-ecosystem.jpg",
    accent: "#fbbf24",
    accentGlow: "rgba(251, 191, 36, 0.22)",
    href: "/services/software-development",
    tags: ["Unified API Mesh", "Multi-Surface Sync", "Edge Rendering", "Cloud-Native Scaling"],
  },
];

export function WhatWeEngineerShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const current = CAPABILITIES[activeIndex];

  // Switch video smoothly on active index change
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    gsap.fromTo(
      video,
      { opacity: 0.4, scale: 0.985 },
      { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" }
    );
    video.currentTime = 0;
    video.play().catch(() => {});
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : CAPABILITIES.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < CAPABILITIES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      ref={sectionRef}
      id="what-we-engineer"
      className="relative w-full bg-[#05070c] text-white py-16 sm:py-20 lg:py-24 border-t border-white/[0.06]"
    >
      {/* Dynamic Background Atmosphere */}
      <div
        className="absolute top-1/3 right-1/4 w-[50vw] h-[50vh] pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${current.accentGlow} 0%, transparent 70%)`,
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-[1480px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: current.accent }}
            />
            <span className="text-[11px] font-mono tracking-[0.24em] text-indigo-400 uppercase font-semibold">
              CAPABILITY PORTFOLIO
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.08]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                WHAT WE ENGINEER.
              </h2>
              <p className="text-base sm:text-lg text-neutral-400 mt-2 max-w-xl font-sans">
                From intelligent agents to complete enterprise platforms.
              </p>
            </div>

            {/* Interactive capability navigation controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-xl">
                <span className="text-white font-bold">{current.num}</span>
                <span>/</span>
                <span>07</span>
                <span className="ml-1 text-[10px] uppercase text-neutral-300 hidden sm:inline truncate max-w-[180px]">
                  {current.title}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-neutral-300 hover:text-white transition-all active:scale-95"
                  aria-label="Previous capability"
                  title="Previous capability"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-neutral-300 hover:text-white transition-all active:scale-95"
                  aria-label="Next capability"
                  title="Next capability"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Desktop Pinned Interactive Layout (lg+) ──────────────────────── */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start">

          {/* Left Column: Interactive Capability Selector List (~45%: 5 cols) */}
          <div className="col-span-5 space-y-2">
            {CAPABILITIES.map((cap, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={cap.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-white/[0.06] border shadow-lg"
                      : "bg-transparent border border-transparent hover:bg-white/[0.02]"
                  }`}
                  style={{
                    borderColor: isActive ? `${cap.accent}44` : "transparent",
                  }}
                >
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-mono font-bold transition-colors ${
                          isActive ? "text-white" : "text-neutral-500"
                        }`}
                        style={{ color: isActive ? cap.accent : undefined }}
                      >
                        {cap.num}
                      </span>
                      <h3
                        className={`text-base font-bold tracking-tight transition-colors ${
                          isActive ? "text-white" : "text-neutral-400"
                        }`}
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {cap.title}
                      </h3>
                    </div>

                    {isActive && (
                      <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ background: cap.accent }}
                      />
                    )}
                  </div>

                  {isActive && (
                    <div className="mt-2 pl-7 animate-fadeIn">
                      <p className="text-xs text-neutral-300 leading-relaxed font-sans mb-3">
                        {cap.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {cap.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[9.5px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={cap.href}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold transition-colors hover:text-white"
                        style={{ color: cap.accent }}
                      >
                        <span>Explore Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Large Pinned Cinematic Video Viewport (~55%: 7 cols) */}
          <div className="col-span-7 sticky top-28">
            <div
              className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-700"
              style={{
                background: "linear-gradient(160deg, rgba(12, 16, 28, 0.96) 0%, rgba(5, 7, 12, 0.98) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: `0 25px 70px -15px rgba(0, 0, 0, 0.95), 0 0 50px -10px ${current.accentGlow}`,
              }}
            >
              {/* Header Bar */}
              <div
                className="px-5 py-3 flex items-center justify-between border-b backdrop-blur-md"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.07)",
                  background: "rgba(0, 0, 0, 0.35)",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: current.accent }}
                  />
                  <span className="text-xs font-mono font-bold text-white tracking-wider">
                    {current.num} / 07 — {current.title}
                  </span>
                </div>

                <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Cinematic Architecture Reel</span>
                </div>
              </div>

              {/* Video Player */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#04060a]">
                <Image
                  src={current.posterSrc}
                  alt={current.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center pointer-events-none"
                />

                <video
                  ref={videoRef}
                  key={current.videoSrc}
                  src={current.videoSrc}
                  poster={current.posterSrc}
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="relative z-10 w-full h-full object-cover object-center"
                />

                <div
                  className="absolute inset-0 z-20 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(4, 6, 10, 0.6) 0%, transparent 20%), linear-gradient(to bottom, rgba(4, 6, 10, 0.25) 0%, transparent 12%)",
                  }}
                />

                <div className="absolute bottom-4 left-5 z-30 pointer-events-none">
                  <span
                    className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded bg-black/60 border backdrop-blur-md"
                    style={{
                      color: current.accent,
                      borderColor: `${current.accent}44`,
                    }}
                  >
                    {current.subtitle}
                  </span>
                </div>
              </div>

              {/* Footer info bar */}
              <div
                className="px-5 py-3.5 flex items-center justify-between text-xs font-mono text-neutral-400 border-t"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.06)",
                  background: "rgba(0, 0, 0, 0.3)",
                }}
              >
                <span>Production Architecture Proof</span>
                <Link
                  href={current.href}
                  className="text-white hover:underline flex items-center gap-1 font-medium transition-colors"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* ── Mobile Stacked Presentation (< lg) ───────────────────────────── */}
        <div className="lg:hidden space-y-6">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className="rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02]"
            >
              {/* Video Viewport */}
              <div className="relative aspect-[16/10] w-full bg-[#04060a]">
                <video
                  src={cap.videoSrc}
                  poster={cap.posterSrc}
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 z-20">
                  <span
                    className="text-[9.5px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-black/70 border backdrop-blur-md"
                    style={{
                      color: cap.accent,
                      borderColor: `${cap.accent}44`,
                    }}
                  >
                    {cap.num} / 07
                  </span>
                </div>
              </div>

              {/* Info panel */}
              <div className="p-5">
                <h3
                  className="text-lg font-bold text-white mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {cap.title}
                </h3>
                <p className="text-xs text-indigo-300 font-mono mb-2">
                  {cap.subtitle}
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {cap.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cap.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={cap.href}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-white"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
