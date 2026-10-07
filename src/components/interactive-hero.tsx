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
  Zap
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FLOATING_SIGNALS = [
  {
    id: "trend",
    title: "TREND DETECTED",
    detail: "#AgenticWorkflows +340% velocity",
    icon: TrendingUp,
    color: "#38bdf8",
    top: "14%",
    left: "6%",
  },
  {
    id: "competitor",
    title: "COMPETITOR SIGNAL",
    detail: "Latency spike detected in rival node",
    icon: Radio,
    color: "#818cf8",
    top: "76%",
    left: "8%",
  },
  {
    id: "content",
    title: "CONTENT OPPORTUNITY",
    detail: "High-intent B2B carousel identified",
    icon: Sparkles,
    color: "#c084fc",
    top: "16%",
    right: "6%",
  },
  {
    id: "seo",
    title: "SEO ISSUE FOUND",
    detail: "Render-blocking CSS in critical path",
    icon: Search,
    color: "#fb923c",
    top: "82%",
    right: "10%",
  },
  {
    id: "agent",
    title: "AGENT COLLABORATION",
    detail: "Trend Agent → Strategy Agent synced",
    icon: Workflow,
    color: "#10b981",
    top: "48%",
    left: "2%",
  },
  {
    id: "strategy",
    title: "STRATEGY GENERATED",
    detail: "Omni-channel calendar verified",
    icon: CheckCircle2,
    color: "#34d399",
    top: "52%",
    right: "4%",
  }
];

export function InteractiveHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const compositionRef = useRef<HTMLDivElement>(null);
  const personRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const signalsRef = useRef<HTMLDivElement>(null);
  const bridgeRef = useRef<HTMLDivElement>(null);

  const [activeSignalIndex, setActiveSignalIndex] = useState(0);

  // Cycling active signal badge every 2.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSignalIndex((prev) => (prev + 1) % FLOATING_SIGNALS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // GSAP 3D Parallax on Mouse Move + Scroll Transformation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // 1. Mouse Move Subtle 3D Perspective Tilt
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const rect = container.getBoundingClientRect();
        const xNorm = (clientX - rect.left) / rect.width - 0.5;
        const yNorm = (clientY - rect.top) / rect.height - 0.5;

        // Dashboard perspective tilt (restrained, luxury)
        if (dashboardRef.current) {
          gsap.to(dashboardRef.current, {
            rotationY: xNorm * 8,
            rotationX: -yNorm * 6,
            transformPerspective: 1200,
            duration: 0.8,
            ease: "power2.out",
          });
        }

        // Person remains mostly stable, slight subtle anchor shift
        if (personRef.current) {
          gsap.to(personRef.current, {
            x: xNorm * 12,
            y: yNorm * 8,
            duration: 1.2,
            ease: "power2.out",
          });
        }

        // Floating signals move at higher parallax depth
        if (signalsRef.current) {
          gsap.to(signalsRef.current.children, {
            x: (i) => xNorm * (20 + i * 5),
            y: (i) => yNorm * (16 + i * 4),
            duration: 1.4,
            ease: "power2.out",
          });
        }
      };

      container.addEventListener("mousemove", handleMouseMove);

      // 2. Initial Entrance Animation
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(compositionRef.current, {
        opacity: 0,
        scale: 0.94,
        y: 30,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.4,
      });

      // 3. Scroll Transformation (Requirement 6)
      // "As the visitor scrolls: The hero visual slowly moves toward center.
      // The person shifts slightly to one side. The dashboard expands.
      // The headline moves away. The product interface becomes dominant.
      // Then transitions directly into: 'ONE SYSTEM. MANY INTELLIGENT AGENTS.'"
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(headlineRef.current, {
        opacity: 0,
        y: -60,
        scale: 0.95,
        duration: 0.4,
        ease: "power2.inOut",
      })
      .to(personRef.current, {
        x: -90,
        scale: 0.92,
        opacity: 0.85,
        duration: 0.6,
        ease: "power2.out",
      }, "<")
      .to(dashboardRef.current, {
        scale: 1.15,
        y: -40,
        rotationY: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "power2.out",
      }, "<")
      .to(".hero-signal-badge", {
        opacity: 0,
        scale: 0.8,
        stagger: 0.05,
        duration: 0.3,
      }, "<0.2")
      .fromTo(bridgeRef.current, {
        opacity: 0,
        y: 60,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      }, ">-0.2");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#07090e] text-white flex flex-col justify-between overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Neural / Constellation Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep ambient gradients */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-indigo-900/20 via-purple-950/15 to-transparent blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-sky-950/15 blur-[120px] rounded-full" />

        {/* Constellation Grid SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="heroNodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
            <line x1="15%" y1="20%" x2="45%" y2="35%" />
            <line x1="45%" y1="35%" x2="75%" y2="25%" />
            <line x1="45%" y1="35%" x2="50%" y2="70%" />
            <line x1="75%" y1="25%" x2="85%" y2="60%" />
            <line x1="20%" y1="65%" x2="50%" y2="70%" />
          </g>
          {/* Subtle glowing nodes */}
          <circle cx="15%" cy="20%" r="4" fill="#818cf8" className="animate-pulse" />
          <circle cx="45%" cy="35%" r="6" fill="#38bdf8" />
          <circle cx="75%" cy="25%" r="4" fill="#c084fc" className="animate-pulse" />
          <circle cx="50%" cy="70%" r="5" fill="#34d399" />
          <circle cx="85%" cy="60%" r="4" fill="#fb923c" />
        </svg>

        {/* Micro-dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      {/* Top Headline Block (Requirements 1 & 3) */}
      <div ref={headlineRef} className="relative z-20 max-w-5xl mx-auto text-center space-y-5">
        
        {/* Supporting Microcopy Pill */}
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

        {/* Engineering Positioning Statement (Requirement 1) */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-300 font-normal leading-relaxed">
          From autonomous multi-agent swarms to enterprise platforms, we engineer software that understands, analyzes, and executes.
        </p>

        {/* Action CTAs */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#agentic-systems"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white text-black font-bold text-sm uppercase tracking-wider font-mono hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95"
          >
            <span>Explore What We Build</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.12] font-semibold text-sm uppercase tracking-wider font-mono transition-all hover:scale-105 active:scale-95"
          >
            <span>Start a Conversation</span>
          </Link>
        </div>
      </div>

      {/* Hero Visual Composition: Person (Foreground) + Product Dashboard (Behind) + Floating Intelligence Signals (Requirements 3, 4, 5) */}
      <div 
        ref={compositionRef} 
        className="relative z-10 w-full max-w-6xl mx-auto my-6 sm:my-10"
        style={{ perspective: "1400px" }}
      >
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[560px] rounded-3xl overflow-hidden border border-white/[0.12] bg-[#090c16]/95 shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
          
          {/* Subtle Ambient Rim Light */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/40 via-transparent to-sky-950/30 pointer-events-none" />

          {/* LAYER 1: The Product Dashboard (Requirement 3: "Dashboard should sit behind") */}
          <div 
            ref={dashboardRef}
            className="absolute inset-0 w-full h-full transform-gpu transition-transform duration-300"
          >
            {/* Real Dashboard Visual from Asset */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/hero/agentic-ai-poster.jpg"
                alt="Ashmyra Agentic AI System"
                fill
                priority
                className="object-cover object-right opacity-90 filter contrast-[1.05] brightness-95"
              />
              {/* Subtle luxury overlay to blend seamlessly */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#07090e]/80 via-transparent to-[#07090e]/40 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Interactive Live Telemetry HUD Overlays */}
            <div className="absolute top-4 right-5 hidden sm:flex items-center gap-3 z-10">
              <div className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/[0.1] text-[11px] font-mono text-neutral-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>18 AGENTS ACTIVE</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/[0.1] text-[11px] font-mono text-indigo-300">
                2.4M SIGNALS / SEC
              </div>
            </div>

            {/* Subtle Active Radar Scan Line */}
            <div className="absolute inset-y-0 right-1/4 w-[1px] bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent pointer-events-none animate-pulse" />
          </div>

          {/* LAYER 2: Real Person (Ashish) in Foreground (Requirement 3: "Person should appear in the foreground") */}
          <div 
            ref={personRef}
            className="absolute -bottom-4 left-2 sm:left-10 md:left-14 w-[240px] sm:w-[320px] md:w-[390px] h-[90%] sm:h-[95%] z-20 pointer-events-none select-none"
          >
            <div className="relative w-full h-full">
              {/* Real person portrait preserved cleanly from approved asset */}
              <Image
                src="/hero/ashish-hero-crop.png"
                alt="Ashish Talgotra - Ashmyra Engineering"
                fill
                priority
                className="object-contain object-bottom filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]"
              />

              {/* Verified Identity Badge */}
              <div className="absolute bottom-6 left-2 sm:left-4 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/[0.15] text-[10px] sm:text-xs font-mono shadow-2xl">
                <div className="flex items-center gap-1.5 text-white font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                  <span>ASHISH</span>
                  <span className="text-neutral-400 font-normal">| AI Engineer</span>
                </div>
              </div>
            </div>
          </div>

          {/* LAYER 3: Floating Intelligence Signals (Requirement 5) */}
          <div ref={signalsRef} className="absolute inset-0 pointer-events-none z-30">
            {FLOATING_SIGNALS.map((signal, index) => {
              const Icon = signal.icon;
              const isActive = index === activeSignalIndex;

              return (
                <div
                  key={signal.id}
                  className={`hero-signal-badge absolute transition-all duration-700 ease-out hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-xl backdrop-blur-xl border shadow-xl ${
                    isActive
                      ? "bg-[#0b0e1b]/95 border-white/[0.25] scale-105 shadow-indigo-500/20"
                      : "bg-[#080b14]/75 border-white/[0.08] opacity-70 scale-95"
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
                    <span className="text-[11px] text-neutral-300 font-sans">
                      {signal.detail}
                    </span>
                  </div>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping ml-1" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Modern Subtle Frame Border Highlight */}
          <div className="absolute inset-0 rounded-3xl border border-white/[0.08] pointer-events-none" />
        </div>
      </div>

      {/* Scroll Bridge Transition to "ONE SYSTEM. MANY INTELLIGENT AGENTS." (Requirement 6) */}
      <div 
        ref={bridgeRef}
        id="hero-bridge"
        className="relative z-20 text-center pt-8 pb-4 opacity-0 transition-opacity"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-indigo-400 mb-2">
          <Activity className="w-3.5 h-3.5" />
          <span>Entering Ashmyra Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          ONE SYSTEM.
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-sky-200">
            {" "}MANY INTELLIGENT AGENTS.
          </span>
        </h2>
      </div>

    </div>
  );
}
