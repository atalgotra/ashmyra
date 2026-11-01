"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
    subtitle: "Edge-Rendered Next.js, WebGL & Kinetic GSAP",
    description:
      "Ultra-fast React digital surfaces with custom WebGL shaders, Three.js kinetic scenes, and GSAP ScrollTrigger timelines. Engineered for sub-second LCP, Generative Engine Optimization (GEO), and unquestioned visual distinction.",
    videoSrc: "/videos/capabilities/01-digital-experiences.mp4",
    posterSrc: "/videos/capabilities/01-digital-experiences.jpg",
    accent: "#818cf8",
    accentGlow: "rgba(129, 140, 248, 0.25)",
    href: "/capabilities/web-apps",
    tags: ["WebGL / Three.js", "GSAP Motion", "Next.js App Router", "GEO Optimization", "Sub-second LCP"],
  },
  {
    id: "02",
    num: "02",
    title: "MOBILE APPLICATIONS",
    subtitle: "Native iOS, Android & Flutter Multi-Surface",
    description:
      "Production-ready mobile architectures designed for fluid 120Hz gesture interaction, biometric authentication, offline-first cloud sync, and low-latency push infrastructure.",
    videoSrc: "/videos/capabilities/02-mobile-applications.mp4",
    posterSrc: "/videos/capabilities/02-mobile-applications.jpg",
    accent: "#38bdf8",
    accentGlow: "rgba(56, 189, 248, 0.25)",
    href: "/capabilities/software-development",
    tags: ["iOS / Swift", "Android / Kotlin", "Flutter", "120Hz Haptics", "Offline Sync"],
  },
  {
    id: "03",
    num: "03",
    title: "CRM & BUSINESS PLATFORMS",
    subtitle: "Intelligent Pipeline & Revenue Operations",
    description:
      "Unified customer intelligence systems with automated lead scoring, multi-channel attribution, predictive forecasting, and deterministic event-driven workflow orchestration without sales friction.",
    videoSrc: "/videos/capabilities/03-crm-platforms.mp4",
    posterSrc: "/videos/capabilities/03-crm-platforms.jpg",
    accent: "#f43f5e",
    accentGlow: "rgba(244, 63, 94, 0.25)",
    href: "/products/crm",
    tags: ["Pipeline Telemetry", "Predictive Scoring", "Multi-Channel Attribution", "Event Automation"],
  },
  {
    id: "04",
    num: "04",
    title: "ENTERPRISE SAAS",
    subtitle: "Mission-Critical Workforce & ERP Platforms",
    description:
      "Enterprise-grade SaaS architectures engineered for 99.99% uptime, multi-tenant isolation, statutory HRMS, talent parsing, automated payroll, and SOC2 compliance.",
    videoSrc: "/videos/capabilities/04-enterprise-saas.mp4",
    posterSrc: "/videos/capabilities/04-enterprise-saas.jpg",
    accent: "#a78bfa",
    accentGlow: "rgba(167, 139, 250, 0.25)",
    href: "/products/hrms",
    tags: ["Multi-Tenant SaaS", "Statutory Payroll", "Automated HRMS", "99.99% Uptime", "SOC2 Compliance"],
  },
  {
    id: "05",
    num: "05",
    title: "AGENTIC AI",
    subtitle: "Autonomous Swarms & Task Consensus",
    description:
      "Self-healing multi-agent swarms engineered for reasoning, tool execution, and task consensus. Custom fine-tuned LLM runtimes, vector indexing, and low-latency inference pipelines with deterministic guardrails.",
    videoSrc: "/videos/capabilities/05-agentic-ai.mp4",
    posterSrc: "/videos/capabilities/05-agentic-ai.jpg",
    accent: "#22d3ee",
    accentGlow: "rgba(34, 211, 238, 0.25)",
    href: "/products/ai",
    tags: ["Multi-Agent Consensus", "Fine-Tuned LLMs", "Autonomous Tool Calling", "RAG Pipelines", "Audit Guardrails"],
  },
  {
    id: "06",
    num: "06",
    title: "DATA INTELLIGENCE",
    subtitle: "Real-Time Streaming Lakehouses & Predictive Radar",
    description:
      "Statistical machine learning, anomaly detection, predictive forecasting, and unified enterprise golden-record lakes with sub-second analytical querying across massive operational datasets.",
    videoSrc: "/videos/capabilities/06-data-intelligence.mp4",
    posterSrc: "/videos/capabilities/06-data-intelligence.jpg",
    accent: "#34d399",
    accentGlow: "rgba(52, 211, 153, 0.25)",
    href: "/products/analytics",
    tags: ["Streaming Ingestion", "Golden Record Synthesis", "Vector Lakehouse", "Predictive ML", "Sub-second Queries"],
  },
  {
    id: "07",
    num: "07",
    title: "SOFTWARE ECOSYSTEMS",
    subtitle: "Resilient Microservices, Cloud & API Mesh",
    description:
      "Kubernetes orchestration, serverless edge networks, secure gRPC/REST APIs, and continuous delivery pipelines connecting web, mobile, desktop, and edge into one unified operational surface.",
    videoSrc: "/videos/capabilities/07-software-ecosystems.mp4",
    posterSrc: "/videos/capabilities/07-software-ecosystems.jpg",
    accent: "#fbbf24",
    accentGlow: "rgba(251, 191, 36, 0.25)",
    href: "/capabilities/software-development",
    tags: ["Distributed Systems", "Kubernetes / Cloud", "gRPC / REST Mesh", "Zero-Downtime CI/CD", "High Concurrency"],
  },
];

export function WhatWeEngineerShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const current = CAPABILITIES[activeIndex];

  // Smooth cross-fade on active index change
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    gsap.fromTo(
      video,
      { opacity: 0.35, scale: 0.985 },
      { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" }
    );
    video.currentTime = 0;
    video.play().catch(() => {});
  }, [activeIndex]);

  // GSAP ScrollTrigger Viewport Observer: activates as user naturally scrolls
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        cardRefs.current.forEach((card, idx) => {
          if (!card) return;

          ScrollTrigger.create({
            trigger: card,
            start: "top 55%",
            end: "bottom 45%",
            onEnter: () => setActiveIndex(idx),
            onEnterBack: () => setActiveIndex(idx),
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Smooth click navigation to glide to a specific card
  const scrollToCard = (idx: number) => {
    const card = cardRefs.current[idx];
    if (card) {
      const yOffset = -140; // account for sticky header
      const y = card.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setActiveIndex(idx);
  };

  const handlePrev = () => {
    const nextIdx = activeIndex > 0 ? activeIndex - 1 : CAPABILITIES.length - 1;
    scrollToCard(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex < CAPABILITIES.length - 1 ? activeIndex + 1 : 0;
    scrollToCard(nextIdx);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section
      ref={sectionRef}
      id="what-we-engineer"
      className="relative w-full bg-[#05070c] text-white py-16 sm:py-20 lg:py-24 border-t border-white/[0.06]"
    >
      {/* Dynamic Background Atmosphere */}
      <div
        className="absolute top-1/3 right-1/4 w-[55vw] h-[55vh] pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${current.accentGlow} 0%, transparent 70%)`,
          filter: "blur(110px)",
        }}
      />
      <div className="absolute inset-0 dot-bg opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-[1480px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 w-full">

        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-1.5 h-1.5 rounded-full transition-colors duration-500"
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

            {/* Quick interactive navigation controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-xl">
                <span className="text-white font-bold">{current.num}</span>
                <span>/</span>
                <span>07</span>
                <span className="ml-1 text-[10px] uppercase text-neutral-300 hidden sm:inline truncate max-w-[200px]">
                  {current.title}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
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

        {/* ── Desktop Apple-Style Layout: Scroll Spine (Left) + Sticky Canvas (Right) ── */}
        <div className="hidden lg:grid grid-cols-12 gap-10 xl:gap-14 items-start relative">

          {/* Left Column: Natural Scroll Spine of 7 Story Cards (~42%: 5 cols) */}
          <div className="col-span-5 flex flex-col gap-6 lg:gap-8 pb-32">
            {CAPABILITIES.map((cap, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={cap.id}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  onClick={() => scrollToCard(idx)}
                  className={`p-6 sm:p-7 rounded-2xl cursor-pointer transition-all duration-500 relative select-none ${
                    isActive
                      ? "bg-white/[0.05] border shadow-2xl opacity-100 scale-[1.01]"
                      : "bg-white/[0.015] border border-white/[0.05] opacity-40 hover:opacity-75 hover:bg-white/[0.03] scale-100"
                  }`}
                  style={{
                    borderColor: isActive ? `${cap.accent}66` : "rgba(255, 255, 255, 0.06)",
                    boxShadow: isActive ? `0 20px 50px -15px ${cap.accentGlow}` : "none",
                  }}
                >
                  {/* Active Card Top Accent Highlight */}
                  {isActive && (
                    <div
                      className="absolute top-0 inset-x-6 h-[2px] rounded-full"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${cap.accent}, transparent)`,
                        boxShadow: `0 0 10px ${cap.accent}`,
                      }}
                    />
                  )}

                  <div className="flex items-center justify-between gap-3 mb-2">
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
                        className={`text-lg font-bold tracking-tight transition-colors ${
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

                  <p className="text-xs font-mono text-indigo-300 mb-3">
                    {cap.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans mb-4">
                    {cap.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cap.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={cap.href}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold transition-colors hover:text-white"
                    style={{ color: cap.accent }}
                  >
                    <span>Explore Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Cinema Canvas (~58%: 7 cols) */}
          <div className="col-span-7 sticky top-24 lg:top-28 self-start">
            {/* Ambient Ambilight Glow */}
            <div
              className="absolute -inset-4 rounded-3xl pointer-events-none transition-all duration-700 opacity-60 -z-10"
              style={{
                background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${current.accent} 0%, transparent 70%)`,
                filter: "blur(65px)",
              }}
            />

            {/* Hardware Chassis */}
            <div
              className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 select-none"
              style={{
                background:
                  "linear-gradient(160deg, rgba(12, 16, 28, 0.96) 0%, rgba(5, 7, 12, 0.98) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: `0 30px 80px -20px rgba(0, 0, 0, 0.95), 0 0 50px -10px ${current.accentGlow}`,
              }}
            >
              {/* Cinematic Video Viewport (Full Bleed to Top Rounded Corners) */}
              <div
                onClick={togglePlay}
                className="relative aspect-[16/9] w-full overflow-hidden bg-[#04060a] cursor-pointer group"
              >
                {/* Poster Fallback */}
                <Image
                  src={current.posterSrc}
                  alt={current.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center pointer-events-none"
                />

                <video
                  ref={videoRef}
                  key={current.videoSrc}
                  src={current.videoSrc}
                  poster={current.posterSrc}
                  autoPlay
                  muted={isMuted}
                  playsInline
                  loop
                  className="relative z-10 w-full h-full object-cover object-center transition-transform duration-700"
                />

                {/* Cinematic Vignette */}
                <div
                  className="absolute inset-0 z-20 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(4, 6, 10, 0.75) 0%, transparent 28%), linear-gradient(to bottom, rgba(4, 6, 10, 0.3) 0%, transparent 15%)",
                  }}
                />

                {/* Bottom Left Label */}
                <div className="absolute bottom-4 left-5 z-30 pointer-events-none max-w-[65%]">
                  <span
                    className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-md bg-black/70 border backdrop-blur-md inline-block mb-1.5"
                    style={{
                      color: current.accent,
                      borderColor: `${current.accent}55`,
                    }}
                  >
                    {current.subtitle}
                  </span>
                  <h3
                    className="text-lg sm:text-2xl font-bold tracking-tight text-white drop-shadow-md truncate"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {current.title}
                  </h3>
                </div>

                {/* Bottom Right Floating Media Controls */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-4 right-5 z-30 flex items-center gap-1.5 p-1.5 rounded-full bg-black/65 hover:bg-black/85 border border-white/20 backdrop-blur-xl shadow-2xl transition-all"
                >
                  {/* Audio */}
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    title={isMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </button>

                  <span className="w-[1px] h-3.5 bg-white/20" />

                  {/* Play / Pause */}
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-full text-neutral-200 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                    aria-label={isPlaying ? "Pause playback" : "Resume playback"}
                    title={isPlaying ? "Pause playback" : "Resume playback"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>

                  <span className="w-[1px] h-3.5 bg-white/20" />

                  {/* Prev */}
                  <button
                    onClick={handlePrev}
                    className="p-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                    aria-label="Previous capability"
                    title="Previous capability"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>

                  {/* Next */}
                  <button
                    onClick={handleNext}
                    className="p-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                    aria-label="Next capability"
                    title="Next capability"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Footer Info Bar */}
              <div
                className="px-5 py-3.5 flex items-center justify-between text-xs font-mono text-neutral-400 border-t"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.08)",
                  background: "rgba(0, 0, 0, 0.4)",
                }}
              >
                <span>Production Architecture Proof</span>
                <Link
                  href={current.href}
                  className="text-white hover:underline flex items-center gap-1 font-medium transition-colors"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* ── Mobile Stacked Presentation (< lg) ───────────────────────────── */}
        <div className="lg:hidden space-y-8">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className="rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02]"
            >
              {/* Video Viewport */}
              <div className="relative aspect-[16/9] w-full bg-[#04060a]">
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
