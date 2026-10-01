"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Bot, 
  TrendingUp, 
  Radio, 
  Users, 
  PenTool, 
  Search, 
  Calendar, 
  Sparkles, 
  ArrowRight,
  Activity,
  Layers,
  CheckCircle2
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Interactive Hotspots (Requirement 7)
const HOTSPOTS = [
  {
    id: "trend",
    name: "TREND AGENT",
    desc: "3 emerging topics detected.",
    sub: "Live API ingestion across TikTok, X & YouTube Shorts",
    top: "32%",
    left: "35%",
    color: "#38bdf8",
  },
  {
    id: "competitor",
    name: "COMPETITOR AGENT",
    desc: "12 competitor campaigns analyzed.",
    sub: "Semantic gap identified in executive B2B carousels",
    top: "36%",
    left: "26%",
    color: "#818cf8",
  },
  {
    id: "content",
    name: "CONTENT AGENT",
    desc: "7 content opportunities generated.",
    sub: "Hooks, multi-part scripts, and retention angles",
    top: "48%",
    left: "23%",
    color: "#f43f5e",
  },
  {
    id: "publishing",
    name: "PUBLISHING AGENT",
    desc: "Recommended posting window identified.",
    sub: "Optimal engagement window calculated at 10:00 AM",
    top: "65%",
    left: "38%",
    color: "#34d399",
  },
];

// Workflow Steps (Requirement 6)
const FLOW_STEPS = [
  "Social Platforms (YouTube, LinkedIn, Instagram, Facebook)",
  "Trend Signals",
  "Competitor Signals",
  "Audience Signals",
  "AI Agent Collaboration",
  "Content Strategy",
  "Hook + Script",
  "Hashtags",
  "Best Posting Time",
  "Content Calendar",
];

export function Wow1SocialIntelligence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<string>("trend");

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(visualRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        scale: 0.94,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".flow-pill", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
        opacity: 0,
        x: -20,
        stagger: 0.05,
        duration: 0.6,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeSpot = HOTSPOTS.find((h) => h.id === activeHotspot) || HOTSPOTS[0];

  return (
    <section
      ref={sectionRef}
      id="wow-1"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-b border-white/[0.06] overflow-hidden"
    >
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-indigo-900/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header (Requirement 6) */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono">
            <span className="font-bold">WOW 01</span>
            <span>&bull;</span>
            <span>AGENTIC SOCIAL MEDIA INTELLIGENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            &ldquo;WHAT SHOULD WE POST NEXT?&rdquo;
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal">
            Multiple AI agents turn market signals into a complete content strategy.
          </p>
        </div>

        {/* Visual Workflow Steps Chain (Requirement 6) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 px-1">
            <span className="text-indigo-400 font-bold uppercase tracking-wider">
              Autonomous Synthesis Sequence
            </span>
            <span className="text-[10px] text-neutral-500">
              End-to-End Execution Flow
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2">
            {FLOW_STEPS.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flow-pill flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-[11px] font-mono text-neutral-300 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>{step}</span>
                </div>
                {idx < FLOW_STEPS.length - 1 && (
                  <span className="text-neutral-600 font-mono text-xs">&rarr;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* The WOW 1 Image Showcase with Interactive Hotspots (Requirements 6 & 7) */}
        <div 
          ref={visualRef}
          className="relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#090c16] shadow-[0_25px_80px_rgba(0,0,0,0.85)] group"
        >
          {/* Top Bar with Demo Data Notice */}
          <div className="p-4 bg-[#05070a]/90 backdrop-blur-md border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-neutral-300">
              <Bot className="w-4 h-4 text-indigo-400" />
              <span className="font-bold text-white">Ashmyra Social Media Manager</span>
              <span className="text-neutral-500">| Multi-Agent Consensus Interface</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
                DEMO DATA
              </span>
              <span className="text-neutral-400 text-[11px] hidden sm:inline">
                Hover or click nodes below to inspect agent telemetry
              </span>
            </div>
          </div>

          {/* Large Image Foundation */}
          <div className="relative w-full aspect-[16/9] min-h-[420px] bg-black">
            <Image
              src="/wow/wow1-social-intelligence.png"
              alt="Ashmyra Agentic AI Social Media Manager"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-center filter contrast-[1.03]"
            />

            {/* Interactive Hotspot Buttons (Requirement 7) */}
            {HOTSPOTS.map((spot) => {
              const isSelected = spot.id === activeHotspot;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot.id)}
                  onMouseEnter={() => setActiveHotspot(spot.id)}
                  style={{ top: spot.top, left: spot.left }}
                  aria-label={`Inspect ${spot.name}`}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group/btn transition-transform duration-300 ${
                    isSelected ? "scale-125" : "scale-100 hover:scale-110"
                  }`}
                >
                  <span className="relative flex h-6 w-6">
                    <span 
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: spot.color }}
                    />
                    <span 
                      className="relative inline-flex rounded-full h-6 w-6 border-2 border-white items-center justify-center text-[9px] font-black font-mono text-black shadow-lg"
                      style={{ backgroundColor: spot.color }}
                    >
                      +
                    </span>
                  </span>
                </button>
              );
            })}

            {/* Active Hotspot Intelligent Overlay (Requirement 7) */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md z-30 p-5 rounded-2xl bg-[#090c18]/95 backdrop-blur-xl border border-white/[0.15] shadow-2xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: activeSpot.color }}
                  />
                  {activeSpot.name}
                </span>
                <span className="text-[10px] font-mono text-neutral-400 bg-white/[0.04] px-2 py-0.5 rounded">
                  DEMO DATA
                </span>
              </div>
              <div className="text-sm font-semibold text-white">
                &ldquo;{activeSpot.desc}&rdquo;
              </div>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                {activeSpot.sub}
              </p>
            </div>

          </div>

          {/* Bottom Stream Transition Connector (Requirement 26) */}
          <div className="p-3 bg-[#05070a] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>&gt;&gt; Social data streams entering SEO crawler engine</span>
            <span className="text-sky-400 font-semibold">&rarr; WOW 02 Next</span>
          </div>

        </div>

      </div>
    </section>
  );
}
