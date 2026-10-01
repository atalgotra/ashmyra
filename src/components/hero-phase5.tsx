"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ArrowRight, 
  Sparkles, 
  Bot, 
  Radio, 
  Cpu, 
  TrendingUp, 
  Search, 
  Layers, 
  Activity,
  CheckCircle2,
  Workflow,
  ShieldCheck,
  ChevronDown
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HERO_SIGNALS = [
  { id: "s1", title: "TREND DETECTED", value: "#AgenticWorkflows +340%", icon: TrendingUp, color: "#38bdf8", top: "14%", left: "4%" },
  { id: "s2", title: "AGENT CONSENSUS", value: "8 Agents Synced • 42ms", icon: Workflow, color: "#818cf8", top: "72%", left: "6%" },
  { id: "s3", title: "CONTENT OPPORTUNITY", value: "High-Intent B2B Carousel", icon: Sparkles, color: "#c084fc", top: "16%", right: "4%" },
  { id: "s4", title: "SEO ACTION PLAN", value: "Critical Path Inlined", icon: Search, color: "#34d399", top: "76%", right: "6%" },
];

export function HeroPhase5() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const visualWrapperRef = useRef<HTMLDivElement>(null);
  const [activeSignal, setActiveSignal] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSignal((prev) => (prev + 1) % HERO_SIGNALS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance sequence
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(visualWrapperRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 30,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.4,
      });

      // Mouse Parallax on visual
      const handleMouseMove = (e: MouseEvent) => {
        if (!visualWrapperRef.current) return;
        const rect = visualWrapperRef.current.getBoundingClientRect();
        const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
        const yNorm = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(visualWrapperRef.current, {
          rotationY: xNorm * 5,
          rotationX: -yNorm * 4,
          transformPerspective: 1400,
          duration: 0.7,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#07090e] text-white flex flex-col justify-between overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06]"
    >
      {/* Background Volumetric Aura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-indigo-900/20 via-purple-950/15 to-transparent blur-[160px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[400px] bg-sky-950/15 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* Main Headline Block (Requirements 1 & 4) */}
      <div ref={headlineRef} className="relative z-20 max-w-5xl mx-auto text-center space-y-6 pt-4 sm:pt-8">
        
        {/* Supporting Microcopy */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md shadow-lg shadow-black/40">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-mono tracking-widest text-indigo-200 uppercase font-semibold">
            AI &bull; DATA &bull; SOFTWARE &bull; AUTOMATION
          </span>
        </div>

        {/* Massive Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02] uppercase text-white font-sans">
          WE BUILD
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-sky-200">
            INTELLIGENT SYSTEMS
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">
            THAT ACT.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-300 font-normal leading-relaxed">
          From autonomous multi-agent swarms to enterprise platforms, we engineer software that understands, analyzes, and executes.
        </p>

        {/* CTAs */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#philosophy"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-black font-extrabold text-sm uppercase tracking-wider font-mono hover:bg-neutral-200 transition-all shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95"
          >
            <span>Explore What We Build</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.12] font-semibold text-sm uppercase tracking-wider font-mono transition-all hover:scale-105 active:scale-95"
          >
            <span>Start a Conversation</span>
          </Link>
        </div>
      </div>

      {/* Hero Visual: Approved Master Visual with Interactive Signals */}
      <div 
        ref={visualWrapperRef}
        className="relative z-10 w-full max-w-6xl mx-auto my-8 sm:my-12 transform-gpu"
        style={{ perspective: "1400px" }}
      >
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[580px] rounded-3xl overflow-hidden border border-white/[0.12] bg-[#090c16]/95 shadow-[0_25px_80px_rgba(0,0,0,0.85)] group">
          
          <Image
            src="/hero/ashmyra-hero-master.png"
            alt="Ashmyra Intelligent Systems - Agentic AI Master System"
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center filter contrast-[1.03] brightness-[0.98]"
          />

          {/* Luxury Rim & Subtle Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090e]/30 via-transparent to-[#07090e]/30 pointer-events-none" />

          {/* Floating Intelligence Hotspot Panels (Requirement 5) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            {HERO_SIGNALS.map((signal, index) => {
              const Icon = signal.icon;
              const isActive = index === activeSignal;

              return (
                <div
                  key={signal.id}
                  className={`absolute transition-all duration-700 ease-out flex items-center gap-2.5 px-3.5 py-2 rounded-xl backdrop-blur-xl border shadow-xl ${
                    isActive
                      ? "bg-[#0b0e1b]/95 border-white/[0.25] scale-105 shadow-indigo-500/20"
                      : "bg-[#080b14]/75 border-white/[0.08] opacity-75 scale-95"
                  }`}
                  style={{
                    top: signal.top,
                    left: signal.left,
                    right: signal.right,
                  }}
                >
                  <div
                    className="p-1 rounded-lg"
                    style={{ backgroundColor: `${signal.color}20`, color: signal.color }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-white">
                      {signal.title}
                    </span>
                    <span className="text-[11px] text-neutral-300 font-sans font-medium">
                      {signal.value}
                    </span>
                  </div>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping ml-1" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Live System Counter Telemetry */}
          <div className="absolute top-4 right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/[0.1] text-[11px] font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Autonomous Intelligence Engine Online</span>
          </div>

        </div>
      </div>

      {/* Gentle Scroll Indicator */}
      <div className="relative z-20 flex justify-center pt-2">
        <a 
          href="#philosophy" 
          aria-label="Scroll to introduction"
          className="flex flex-col items-center gap-1.5 text-neutral-500 hover:text-neutral-300 transition-colors text-[10px] font-mono uppercase tracking-widest"
        >
          <span>Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-indigo-400" />
        </a>
      </div>

    </section>
  );
}
