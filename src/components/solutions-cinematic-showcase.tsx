"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SOLUTIONS, SolutionItem } from "@/data/solutions";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Shield,
  Activity,
  Workflow,
  Cpu,
  BarChart3,
  TrendingUp,
  Play,
  Pause,
  Maximize2,
  Flame,
  Zap,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SolutionsCinematicShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<"all" | "company-stage" | "role">("all");
  const [playingStates, setPlayingStates] = useState<Record<string, boolean>>({
    startups: true,
    smes: true,
    enterprises: true,
    sales: true,
    marketing: true,
    operations: true,
    "hr-teams": true,
  });

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const togglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingStates((prev) => ({ ...prev, [id]: true }));
      } else {
        video.pause();
        setPlayingStates((prev) => ({ ...prev, [id]: false }));
      }
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".solution-cinematic-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Subtly animate the video chassis on enter
        const videoChassis = card.querySelector(".video-chassis");
        if (videoChassis) {
          gsap.fromTo(
            videoChassis,
            { scale: 0.96, opacity: 0.85 },
            {
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeCategory]);

  const filteredSolutions = SOLUTIONS.filter((sol) => {
    if (activeCategory === "all") return true;
    return sol.category === activeCategory;
  });

  const getAccentColorStyles = (color: SolutionItem["accentColor"]) => {
    switch (color) {
      case "indigo":
        return {
          pill: "bg-indigo-500/10 border-indigo-500/25 text-indigo-300",
          glow: "from-indigo-500/20 via-indigo-500/5 to-transparent",
          border: "hover:border-indigo-500/40",
          statBg: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
          stepNum: "bg-indigo-500/20 text-indigo-300",
        };
      case "cyan":
        return {
          pill: "bg-cyan-500/10 border-cyan-500/25 text-cyan-300",
          glow: "from-cyan-500/20 via-cyan-500/5 to-transparent",
          border: "hover:border-cyan-500/40",
          statBg: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
          stepNum: "bg-cyan-500/20 text-cyan-300",
        };
      case "sky":
        return {
          pill: "bg-sky-500/10 border-sky-500/25 text-sky-300",
          glow: "from-sky-500/20 via-sky-500/5 to-transparent",
          border: "hover:border-sky-500/40",
          statBg: "bg-sky-500/15 text-sky-300 border-sky-500/30",
          stepNum: "bg-sky-500/20 text-sky-300",
        };
      case "emerald":
        return {
          pill: "bg-emerald-500/10 border-emerald-500/25 text-emerald-300",
          glow: "from-emerald-500/20 via-emerald-500/5 to-transparent",
          border: "hover:border-emerald-500/40",
          statBg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
          stepNum: "bg-emerald-500/20 text-emerald-300",
        };
      case "violet":
        return {
          pill: "bg-violet-500/10 border-violet-500/25 text-violet-300",
          glow: "from-violet-500/20 via-violet-500/5 to-transparent",
          border: "hover:border-violet-500/40",
          statBg: "bg-violet-500/15 text-violet-300 border-violet-500/30",
          stepNum: "bg-violet-500/20 text-violet-300",
        };
      case "amber":
        return {
          pill: "bg-amber-500/10 border-amber-500/25 text-amber-300",
          glow: "from-amber-500/20 via-amber-500/5 to-transparent",
          border: "hover:border-amber-500/40",
          statBg: "bg-amber-500/15 text-amber-300 border-amber-500/30",
          stepNum: "bg-amber-500/20 text-amber-300",
        };
      case "rose":
        return {
          pill: "bg-rose-500/10 border-rose-500/25 text-rose-300",
          glow: "from-rose-500/20 via-rose-500/5 to-transparent",
          border: "hover:border-rose-500/40",
          statBg: "bg-rose-500/15 text-rose-300 border-rose-500/30",
          stepNum: "bg-rose-500/20 text-rose-300",
        };
      default:
        return {
          pill: "bg-indigo-500/10 border-indigo-500/25 text-indigo-300",
          glow: "from-indigo-500/20 via-indigo-500/5 to-transparent",
          border: "hover:border-indigo-500/40",
          statBg: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
          stepNum: "bg-indigo-500/20 text-indigo-300",
        };
    }
  };

  const scrollToSolution = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* ── STICKY QUICK-NAVIGATION & CATEGORY FILTER BAR ── */}
      <div className="sticky top-20 z-30 mb-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="p-2 sm:p-2.5 rounded-2xl bg-[#090d16]/90 backdrop-blur-xl border border-white/[0.1] shadow-2xl flex flex-wrap items-center justify-between gap-3">
            {/* Left: Category Scope Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === "all"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                All 7 Solutions
              </button>
              <button
                onClick={() => setActiveCategory("company-stage")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === "company-stage"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                By Company Scale
              </button>
              <button
                onClick={() => setActiveCategory("role")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === "role"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                By Functional Team
              </button>
            </div>

            {/* Right: Quick Jump Solutions Strip */}
            <div className="hidden xl:flex items-center gap-1.5 overflow-x-auto py-0.5">
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mr-1">
                Jump To:
              </span>
              {filteredSolutions.map((sol) => (
                <button
                  key={sol.id}
                  onClick={() => scrollToSolution(sol.id)}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium text-neutral-400 hover:text-cyan-300 hover:bg-white/[0.05] transition-all shrink-0"
                >
                  #{sol.title.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 7 DUAL-COLUMN CINEMATIC SHOWCASE CARDS ── */}
      <div className="space-y-20 sm:space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredSolutions.map((sol, index) => {
          const styles = getAccentColorStyles(sol.accentColor);
          const isEven = index % 2 === 0;

          return (
            <section
              key={sol.id}
              id={sol.id}
              className="solution-cinematic-card scroll-mt-28 rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-[#090d19] via-[#070a12] to-[#04060a] border border-white/[0.08] relative overflow-hidden shadow-2xl transition-all duration-300"
            >
              {/* Subtle ambient lighting spot behind video */}
              <div
                className={`absolute top-0 ${
                  isEven ? "right-0" : "left-0"
                } w-[600px] h-[600px] bg-gradient-to-br ${styles.glow} rounded-full blur-[140px] pointer-events-none opacity-40`}
              />

              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* ── COLUMN A: CONTENT & ARCHITECTURE (7 Cols) ── */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    !isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Category & Badge Header */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${styles.pill}`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{sol.badge}</span>
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {sol.targetAudience}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {sol.title}
                  </h2>

                  {/* Operational Bottleneck vs Ashmyra Solution Architecture */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* The Friction */}
                    <div className="p-5 rounded-2xl bg-rose-500/[0.04] border border-rose-500/20 space-y-2">
                      <div className="flex items-center gap-2 text-rose-400">
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        <span className="text-[11px] font-mono uppercase tracking-wider font-bold">
                          The Operational Friction
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {sol.problem}
                      </p>
                    </div>

                    {/* The Architecture */}
                    <div className="p-5 rounded-2xl bg-indigo-500/[0.05] border border-indigo-500/25 space-y-2">
                      <div className="flex items-center gap-2 text-indigo-300">
                        <Cpu className="w-4 h-4 shrink-0" />
                        <span className="text-[11px] font-mono uppercase tracking-wider font-bold">
                          Engineered Architecture
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {sol.ashmyraSolution}
                      </p>
                    </div>
                  </div>

                  {/* 3-Step Execution Pipeline */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#06080e] border border-white/[0.07] space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-2">
                        <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Deterministic Execution Pipeline</span>
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500">
                        Phased Rollout
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {sol.workflow.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 font-mono text-[10px] font-bold mt-0.5 ${styles.stepNum}`}
                          >
                            0{idx + 1}
                          </span>
                          <span className="leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expected Quantified Benefit & CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`px-3.5 py-1.5 rounded-xl border font-mono font-bold text-sm sm:text-base shrink-0 ${styles.statBg}`}
                      >
                        {sol.statHighlight.value}
                      </div>
                      <div className="text-xs text-neutral-300 font-medium">
                        <span className="block text-white font-semibold">
                          {sol.statHighlight.label}
                        </span>
                        <span className="text-neutral-400 text-[11px]">
                          {sol.operationalBenefit.slice(0, 75)}...
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/contact?solution=${sol.id}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all shrink-0 hover:translate-x-0.5"
                    >
                      <span>Architect {sol.title.split(" ")[0]} Stack</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-2 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase mr-1">
                      Target Stack:
                    </span>
                    {sol.technology.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-neutral-400 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── COLUMN B: HIGH-IMPACT 1080P VIDEO STAGE (5 Cols) ── */}
                <div
                  className={`lg:col-span-5 ${
                    !isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="video-chassis group relative rounded-2xl p-2 sm:p-2.5 bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-black/60 border border-white/[0.15] shadow-2xl overflow-hidden backdrop-blur-md">
                    {/* Simulated OS / Terminal Window Header */}
                    <div className="flex items-center justify-between px-3 py-2 bg-[#090c14]/90 rounded-t-xl border-b border-white/[0.08] mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="text-[10px] font-mono text-neutral-400 ml-2 truncate max-w-[140px] sm:max-w-[200px]">
                          ashmyra://{sol.id}.engine
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[9px] font-mono text-emerald-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>60 FPS</span>
                        </div>

                        <button
                          onClick={() => togglePlay(sol.id)}
                          className="p-1 rounded hover:bg-white/[0.1] text-neutral-400 hover:text-white transition-colors"
                          aria-label={playingStates[sol.id] ? "Pause Video" : "Play Video"}
                        >
                          {playingStates[sol.id] ? (
                            <Pause className="w-3 h-3" />
                          ) : (
                            <Play className="w-3 h-3 fill-current" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* 16:9 Video Container with Rounded Mask */}
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black">
                      <video
                        ref={(el) => {
                          videoRefs.current[sol.id] = el;
                        }}
                        src={sol.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover select-none"
                      />

                      {/* Glass Glare Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />

                      {/* Bottom Live Telemetry Overlay Pill */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 p-2 rounded-xl bg-[#070a12]/85 backdrop-blur-md border border-white/[0.12] text-white">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
                          <div className="min-w-0">
                            <span className="text-[10px] font-mono text-cyan-300 font-semibold block truncate">
                              {sol.hudMetrics[0]?.label}: {sol.hudMetrics[0]?.value}
                            </span>
                            <span className="text-[9px] font-mono text-neutral-400 block truncate">
                              {sol.hudMetrics[0]?.sublabel}
                            </span>
                          </div>
                        </div>

                        <div className="shrink-0 text-right">
                          <span className="text-[9px] font-mono text-emerald-400 font-bold block">
                            VERIFIED
                          </span>
                          <span className="text-[8px] font-mono text-neutral-400 block">
                            99.9% Uptime
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Metrics Bar Below Video */}
                    <div className="grid grid-cols-2 gap-2 mt-2 pt-1 px-1">
                      {sol.hudMetrics.slice(1, 3).map((metric, mi) => (
                        <div
                          key={mi}
                          className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between"
                        >
                          <div>
                            <span className="text-[9px] font-mono text-neutral-400 block">
                              {metric.label}
                            </span>
                            <span className="text-[10px] font-mono text-white font-semibold block truncate">
                              {metric.value}
                            </span>
                          </div>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
