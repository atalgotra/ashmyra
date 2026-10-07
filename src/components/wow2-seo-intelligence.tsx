"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Search, 
  Globe, 
  BarChart3, 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Sparkles,
  FileCode,
  Layers,
  Cpu
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Wow2SeoIntelligence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [planGenerated, setPlanGenerated] = useState(false);
  const [activeStage, setActiveStage] = useState(3); // Default to Recommend

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stages = [
    { num: "01", name: "CRAWL", desc: "Full-site DOM & waterfall scan" },
    { num: "02", name: "DETECT", desc: "Flag technical & semantic gaps" },
    { num: "03", name: "UNDERSTAND", desc: "Search intent & LLM citations" },
    { num: "04", name: "RECOMMEND", desc: "Developer execution blueprints" },
    { num: "05", name: "GENERATE", desc: "Production JSON-LD & executive briefs" },
  ];

  return (
    <section
      ref={sectionRef}
      id="wow-2"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-b border-white/[0.06] overflow-hidden"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-sky-900/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header (Requirement 8) */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs text-sky-300 font-mono">
            <span className="font-bold">WOW 02</span>
            <span>&bull;</span>
            <span>AGENTIC SEO INTELLIGENCE SPECIALIST</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            SEO THAT DOESN&apos;T JUST AUDIT.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-200 to-white">
              IT EXPLAINS WHAT TO FIX.
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Not just an audit. A complete multi-agent intelligence system with step-by-step verified code solutions.
          </p>

          {/* Unified Input Stream Bar (Requirement 8) */}
          <div className="pt-2">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 p-2.5 rounded-2xl bg-[#090c16] border border-white/[0.08] text-xs font-mono">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.03] text-neutral-300">
                <Globe className="w-3.5 h-3.5 text-sky-400" /> GSC
              </span>
              <span className="text-neutral-600">+</span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.03] text-neutral-300">
                <BarChart3 className="w-3.5 h-3.5 text-indigo-400" /> GA4
              </span>
              <span className="text-neutral-600">+</span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.03] text-neutral-300">
                <Activity className="w-3.5 h-3.5 text-emerald-400" /> Crawler
              </span>
              <span className="text-neutral-500 font-bold">&rarr;</span>
              <span className="px-3 py-1 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold">
                Multiple Specialized Agents
              </span>
            </div>
          </div>
        </div>

        {/* 5-Step Stage Progression Bar (Requirement 8) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {stages.map((st, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={st.name}
                onClick={() => setActiveStage(idx)}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  isActive
                    ? "bg-sky-500/[0.1] border-sky-400 text-white shadow-lg shadow-sky-500/10"
                    : "bg-[#090c16] border-white/[0.06] text-neutral-400 hover:border-white/[0.15]"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className={isActive ? "text-sky-400 font-bold" : "text-neutral-500"}>
                    STEP {st.num}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />}
                </div>
                <div className="text-sm font-bold text-white mt-1 uppercase font-mono">{st.name}</div>
                <div className="text-[10px] text-neutral-400 mt-0.5 line-clamp-1">{st.desc}</div>
              </button>
            );
          })}
        </div>

        {/* The WOW 2 Large Visual Asset Showcase (Requirement 8) */}
        <div 
          ref={visualRef}
          className="relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#090c16] shadow-[0_25px_80px_rgba(0,0,0,0.85)]"
        >
          {/* Top Bar */}
          <div className="p-4 bg-[#05070a]/90 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-neutral-300">
              <Search className="w-4 h-4 text-sky-400" />
              <span className="font-bold text-white">Ashmyra SEO Intelligence Specialist</span>
            </div>
            <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
              DEMO DATA
            </span>
          </div>

          {/* Large Image Foundation */}
          <div className="relative w-full aspect-[16/9] min-h-[420px] bg-black">
            <Image
              src="/wow/wow2-seo-intelligence.png"
              alt="Ashmyra SEO Intelligence Specialist"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-center filter contrast-[1.03]"
            />
          </div>

          {/* Bottom Stream Transition Connector (Requirement 26) */}
          <div className="p-3 bg-[#05070a] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>&gt;&gt; SEO crawler paths merging into Central Orchestrator</span>
            <span className="text-indigo-400 font-semibold">&rarr; The Agentic Brain</span>
          </div>
        </div>

        {/* Section 9: SEO WOW MOMENT (Interactive Issue & Fix Blueprint) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sky-950/30 via-[#090c18] to-indigo-950/30 border border-sky-500/20 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
                THE ASHMYRA DIFFERENTIATOR
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                From Problem Detection to Executable Code
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 font-mono text-xs">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>ISSUE DETECTED: Render-Blocking CSS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-2xl bg-black/60 border border-white/[0.08]">
            {/* Left: Why it Matters */}
            <div className="md:col-span-5 space-y-3">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                WHY IT MATTERS:
              </span>
              <p className="text-sm text-neutral-200 leading-relaxed font-sans">
                Blocks the browser parser, delaying First Contentful Paint (FCP) by 420ms and degrading mobile Core Web Vitals.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setPlanGenerated(true)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all ${
                    planGenerated
                      ? "bg-emerald-600 text-white font-bold"
                      : "bg-sky-600 hover:bg-sky-500 text-white font-semibold"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{planGenerated ? "Plan Injected & Validated" : "Generate Implementation Plan"}</span>
                </button>
              </div>
            </div>

            {/* Right: How to Fix (5 Developer Steps) */}
            <div className="md:col-span-7 space-y-2">
              <span className="text-xs font-mono text-sky-300 uppercase tracking-wider block font-semibold">
                HOW TO FIX:
              </span>
              <div className="space-y-1.5 font-mono text-xs text-neutral-300">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center gap-2">
                  <span className="text-sky-400 font-bold">01</span>
                  <span>Identify stylesheet dependencies in critical viewport</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center gap-2">
                  <span className="text-sky-400 font-bold">02</span>
                  <span>Extract critical CSS for above-the-fold layout</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center gap-2">
                  <span className="text-sky-400 font-bold">03</span>
                  <span>Inline critical CSS directly in document &lt;head&gt;</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center gap-2">
                  <span className="text-sky-400 font-bold">04</span>
                  <span>Defer remaining CSS asynchronously via preload handler</span>
                </div>
                <div className={`p-2.5 rounded-lg transition-colors flex items-center gap-2 ${
                  planGenerated 
                    ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-200"
                    : "bg-white/[0.02] border border-white/[0.05]"
                }`}>
                  <span className="text-emerald-400 font-bold">05</span>
                  <span>Test and validate performance (+420ms FCP speed lift)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
