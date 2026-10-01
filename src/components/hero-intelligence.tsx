"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Database, 
  Zap, 
  Search, 
  Users, 
  BarChart3, 
  Layers,
  Activity,
  Terminal,
  Compass
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface IntelligenceNode {
  id: string;
  name: string;
  code: string;
  status: string;
  angle: number; // in degrees for circular orbital layout
  radius: number; // orbital distance
  icon: React.ComponentType<{ className?: string }>;
  metric: string;
  color: string;
}

const NODES: IntelligenceNode[] = [
  { id: "ai", name: "AI AGENTS", code: "AGENTIC.01", status: "AUTONOMOUS", angle: -90, radius: 240, icon: Cpu, metric: "24k ops/s", color: "#818cf8" },
  { id: "data", name: "DATA CORE", code: "VECTOR.02", status: "STREAMING", angle: -38, radius: 250, icon: Database, metric: "1.2ms latency", color: "#38bdf8" },
  { id: "auto", name: "AUTOMATION", code: "WORKFLOW.03", status: "DISPATCHING", angle: 18, radius: 260, icon: Zap, metric: "99.98% SLA", color: "#fbbf24" },
  { id: "seo", name: "SEARCH & GEO", code: "GEO.04", status: "SYNCHRONIZED", angle: 75, radius: 245, icon: Search, metric: "Realtime SERP", color: "#a78bfa" },
  { id: "hr", name: "WORKFORCE", code: "HRMS.05", status: "ACTIVE", angle: 135, radius: 255, icon: Users, metric: "Multi-tenant", color: "#34d399" },
  { id: "bi", name: "ANALYTICS", code: "PREDICT.06", status: "INFERRING", angle: 195, radius: 240, icon: BarChart3, metric: "Live Telemetry", color: "#f472b6" },
  { id: "core", name: "SOFTWARE", code: "PLATFORM.07", status: "DEPLOYED", angle: 245, radius: 250, icon: Layers, metric: "Zero Friction", color: "#60a5fa" },
];

export function HeroIntelligence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const coreHubRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement>(null);
  const svgLinesRef = useRef<SVGSVGElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const transitionStoryRef = useRef<HTMLDivElement>(null);

  const [activeNode, setActiveNode] = useState<IntelligenceNode | null>(NODES[0]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Timeline for Intro sequence:
      // 0-1s: mark appears
      // 1-2s: energy data signal begins
      // 2-4s: system nodes form
      // 4-6s: core hub aura & center text
      // 6-8s: connected lines glow & headlines emerge
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        markRef.current,
        { scale: 0.7, opacity: 0, filter: "blur(12px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.2 }
      )
        .fromTo(
          svgLinesRef.current,
          { opacity: 0 },
          { opacity: 0.9, duration: 1.2 },
          "-=0.5"
        )
        .fromTo(
          ".hero-orbit-node",
          { scale: 0, opacity: 0, filter: "blur(8px)" },
          { 
            scale: 1, 
            opacity: 1, 
            filter: "blur(0px)", 
            duration: 1.2, 
            stagger: 0.08,
            ease: "back.out(1.4)" 
          },
          "-=0.8"
        )
        .fromTo(
          textContentRef.current,
          { opacity: 0, y: 35, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2 },
          "-=0.6"
        );

      // ScrollTrigger: Hero system compresses and transforms into Story Transition
      if (containerRef.current && transitionStoryRef.current) {
        gsap.to(coreHubRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom center",
            scrub: 1.2,
          },
          scale: 0.75,
          y: 80,
          opacity: 0.4,
          filter: "blur(4px)",
        });

        gsap.fromTo(
          transitionStoryRef.current,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            scrollTrigger: {
              trigger: transitionStoryRef.current,
              start: "top 80%",
              end: "top 35%",
              scrub: 1,
            },
            opacity: 1,
            y: 0,
            scale: 1,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#07090e] overflow-hidden select-none">
      {/* Background Ambience & Deep Glow */}
      <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-b from-indigo-600/15 via-sky-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      
      {/* ===================================================================== */}
      {/* HERO STAGE                                                            */}
      {/* ===================================================================== */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        
        {/* Living Visual Constellation & Center Logo Hub */}
        <div ref={coreHubRef} className="relative w-[340px] h-[340px] sm:w-[580px] sm:h-[580px] flex items-center justify-center my-6">
          
          {/* Concentric Ambient Energy Rings */}
          <div className="absolute inset-0 rounded-full border border-indigo-500/15 animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-8 sm:inset-14 rounded-full border border-dashed border-sky-400/20 animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-20 sm:inset-32 rounded-full border border-white/[0.06]" />

          {/* Dynamic SVG Data Streams from center to nodes */}
          <svg
            ref={svgLinesRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 580 580"
          >
            <defs>
              <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {NODES.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              // Scale radius for responsive canvas
              const r = 210;
              const x2 = 290 + r * Math.cos(rad);
              const y2 = 290 + r * Math.sin(rad);
              const isSelected = activeNode?.id === node.id;

              return (
                <g key={node.id}>
                  <line
                    x1="290"
                    y1="290"
                    x2={x2}
                    y2={y2}
                    stroke="url(#streamGrad)"
                    strokeWidth={isSelected ? "2" : "1"}
                    strokeDasharray={isSelected ? "4 4" : "none"}
                    className={isSelected ? "animate-pulse" : "opacity-40"}
                  />
                  <circle
                    cx={x2}
                    cy={y2}
                    r={isSelected ? "5" : "3"}
                    fill={node.color}
                    className="filter drop-shadow-[0_0_6px_rgba(99,102,241,0.8)]"
                  />
                </g>
              );
            })}
          </svg>

          {/* Central Ashmyra Core Emblem (1.5x-2x Large Prominence) */}
          <div
            ref={markRef}
            className="relative z-10 w-28 h-28 sm:w-44 sm:h-44 rounded-3xl p-1 bg-gradient-to-b from-indigo-500/40 via-sky-500/20 to-purple-600/40 border border-indigo-400/40 shadow-[0_0_80px_rgba(99,102,241,0.35)] backdrop-blur-xl flex flex-col items-center justify-center text-center group transition-transform duration-500 hover:scale-105"
          >
            <div className="w-full h-full rounded-[22px] bg-[#07090e]/90 flex flex-col items-center justify-center p-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent pointer-events-none" />
              
              {/* Official 3D Ashmyra Emblem */}
              <div className="relative w-16 h-16 sm:w-24 sm:h-24 filter drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]">
                <Image
                  src="/brand/ashmyra-icon.png"
                  alt="Ashmyra Core Emblem"
                  width={96}
                  height={96}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-white mt-1 uppercase">
                ASHMYRA
              </span>
              <span className="text-[7px] sm:text-[8px] font-mono tracking-widest text-indigo-300 uppercase">
                INTELLIGENCE
              </span>
            </div>
          </div>

          {/* Orbiting System Nodes */}
          <div ref={nodesRef} className="absolute inset-0 pointer-events-auto">
            {NODES.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              // Coordinates on 580x580 plane
              const r = 210;
              const x = 290 + r * Math.cos(rad);
              const y = 290 + r * Math.sin(rad);
              const isSelected = activeNode?.id === node.id;
              const Icon = node.icon;

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  data-cursor="explore"
                  style={{
                    left: `${(x / 580) * 100}%`,
                    top: `${(y / 580) * 100}%`,
                  }}
                  className={`hero-orbit-node absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 group ${
                    isSelected ? "scale-110 z-20" : "scale-95 opacity-80 hover:opacity-100 hover:scale-105"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl backdrop-blur-xl border transition-all ${
                      isSelected
                        ? "bg-[#0d1222] border-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.4)] text-white"
                        : "bg-[#080b14]/80 border-white/[0.08] hover:border-white/20 text-neutral-300"
                    }`}
                  >
                    <div
                      className="p-1 rounded-md"
                      style={{ backgroundColor: `${node.color}15`, color: node.color }}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] sm:text-[11px] font-mono font-bold tracking-wider leading-none">
                        {node.name}
                      </span>
                      <span className="text-[7px] sm:text-[8px] font-mono text-neutral-400 leading-none mt-0.5">
                        {node.metric}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Node Telemetry HUD Bar (Microcopy, Show Don't Tell) */}
        {activeNode && (
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-xs font-mono text-neutral-300 mb-6 animate-in fade-in duration-200">
            <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: activeNode.color }} />
            <span className="text-white font-bold">{activeNode.name}</span>
            <span className="text-neutral-500">|</span>
            <span className="text-indigo-300">{activeNode.code}</span>
            <span className="text-neutral-500">|</span>
            <span className="text-emerald-400 font-semibold">{activeNode.status}</span>
          </div>
        )}

        {/* Cinematic Typography & Clean Narrative Action (Reduced Visible Copy) */}
        <div ref={textContentRef} className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
            TECHNOLOGY THAT THINKS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-indigo-100">
              BEYOND SOFTWARE.
            </span>
          </h1>

          <p className="text-sm sm:text-lg font-mono text-neutral-400 tracking-wider uppercase max-w-xl mx-auto">
            AI &bull; Software &bull; Automation &bull; Intelligence
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              data-cursor="explore"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm shadow-[0_0_35px_rgba(99,102,241,0.4)] hover:shadow-[0_0_45px_rgba(99,102,241,0.6)] transition-all hover:scale-[1.02]"
            >
              <span>Explore Ashmyra</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              data-cursor="start"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/25 text-neutral-200 hover:text-white font-semibold text-sm backdrop-blur-xl transition-all"
            >
              <span>Build with us</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex flex-col items-center gap-2 text-neutral-500 font-mono text-[10px] uppercase tracking-widest animate-bounce">
          <span>Scroll to explore</span>
          <div className="w-4 h-7 rounded-full border border-neutral-600 flex items-start justify-center p-1">
            <div className="w-1 h-1.5 rounded-full bg-indigo-400" />
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 7: HERO -> STORY CINEMATIC TRANSITION                         */}
      {/* ===================================================================== */}
      <section
        ref={transitionStoryRef}
        className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-b border-white/[0.06] bg-gradient-to-b from-[#07090e] via-[#0a0d16] to-[#07090e]"
      >
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono">
            <Compass className="w-3.5 h-3.5 text-indigo-400" />
            <span>The Unified Platform Architecture</span>
          </div>

          {/* Minimal Editorial Statement */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Software shouldn&apos;t just run.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-300 to-purple-300">
              It should think.
            </span>
          </h2>

          {/* Connected Equation */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono text-neutral-400">
            <span className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white font-bold">
              AI AGENTS
            </span>
            <span className="text-indigo-400 font-bold text-lg">+</span>
            <span className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white font-bold">
              SOFTWARE
            </span>
            <span className="text-indigo-400 font-bold text-lg">+</span>
            <span className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white font-bold">
              DATA
            </span>
            <span className="text-indigo-400 font-bold text-lg">+</span>
            <span className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white font-bold">
              AUTOMATION
            </span>
            <span className="text-sky-400 font-bold text-lg">=</span>
            <span className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500/20 to-sky-500/20 border border-indigo-500/40 text-white font-bold tracking-widest shadow-lg shadow-indigo-500/20">
              ASHMYRA
            </span>
          </div>

          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Autonomous agentic workflows designed to remove operational friction so humans focus on high-impact strategy.
          </p>
        </div>
      </section>
    </div>
  );
}
