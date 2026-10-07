"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, Zap, Sparkles, Filter, CheckCircle2, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 7-Stage Pipeline (Requirement 15)
const DATA_PIPELINE = [
  { step: "01", name: "COLLECT", desc: "20+ Multi-source Ingestion" },
  { step: "02", name: "CLEAN", desc: "Deduplicate & Remove Noise" },
  { step: "03", name: "ENRICH", desc: "Firmographics & Tech Stack" },
  { step: "04", name: "ANALYZE", desc: "Intent Signals & Patterns" },
  { step: "05", name: "SCORE", desc: "High-Intent Prioritization" },
  { step: "06", name: "SEGMENT", desc: "Cluster by ICP Velocity" },
  { step: "07", name: "ACT", desc: "Automated CRM Dispatch" },
];

export function Wow5DataIntelligence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      ref={sectionRef}
      id="wow-5"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header (Requirement 15) */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs text-purple-300 font-mono">
            <span className="font-bold">WOW 05</span>
            <span>&bull;</span>
            <span>DATA INTELLIGENCE PLATFORM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            TURN RAW DATA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-200 to-white">
              INTO INTELLIGENCE.
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            AI agents collect, clean, enrich, analyze, and deliver high-quality, actionable intelligence for your enterprise.
          </p>
        </div>

        {/* 7-Stage Visual Pipeline (Requirement 15) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {DATA_PIPELINE.map((st) => (
            <div
              key={st.name}
              className="p-3 rounded-2xl bg-[#090c16] border border-white/[0.06] text-center space-y-1"
            >
              <span className="text-[10px] font-mono text-purple-400 font-bold block">
                {st.step}
              </span>
              <div className="text-xs font-bold font-mono text-white uppercase">
                {st.name}
              </div>
              <div className="text-[10px] text-neutral-400 line-clamp-1">
                {st.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Data Transformation Chain (Requirement 15: RAW DATA → CLEAN DATA → ENRICHED DATA → INSIGHT → OPPORTUNITY) */}
        <div className="p-4 rounded-2xl bg-[#090c16]/80 border border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-xl bg-white/[0.03] text-neutral-400">01 RAW DATA</span>
          <span className="text-neutral-600">&rarr;</span>
          <span className="px-3 py-1.5 rounded-xl bg-white/[0.03] text-neutral-300">02 CLEAN DATA</span>
          <span className="text-neutral-600">&rarr;</span>
          <span className="px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/20">03 ENRICHED DATA</span>
          <span className="text-neutral-600">&rarr;</span>
          <span className="px-3 py-1.5 rounded-xl bg-sky-500/10 text-sky-300 border border-sky-500/20">04 INSIGHT</span>
          <span className="text-neutral-600">&rarr;</span>
          <span className="px-4 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
            05 QUALIFIED OPPORTUNITY
          </span>
        </div>

        {/* WOW 5 Large Visual Asset Showcase (Requirement 15) */}
        <div 
          ref={visualRef}
          className="relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#090c16] shadow-[0_25px_80px_rgba(0,0,0,0.85)]"
        >
          {/* Top Bar */}
          <div className="p-4 bg-[#05070a]/90 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-neutral-300">
              <Database className="w-4 h-4 text-purple-400" />
              <span className="font-bold text-white">Ashmyra Data Intelligence Engine</span>
            </div>
            <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
              DEMO DATA
            </span>
          </div>

          {/* Large Image Foundation */}
          <div className="relative w-full aspect-[16/9] min-h-[420px] bg-black">
            <Image
              src="/wow/wow5-data-intelligence.png"
              alt="Ashmyra Data Intelligence Platform"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-center filter contrast-[1.03]"
            />
          </div>

          {/* Bottom Stream Transition Connector (Requirement 26) */}
          <div className="p-3 bg-[#05070a] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>&gt;&gt; Qualified opportunities feeding into Workplace Communication streams</span>
            <span className="text-pink-400 font-semibold">&rarr; WOW 06 Next</span>
          </div>
        </div>

      </div>
    </section>
  );
}
