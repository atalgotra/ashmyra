"use client";

import React, { useState } from "react";
import { 
  Search, 
  TrendingUp, 
  BarChart2, 
  ShieldCheck, 
  Zap, 
  Globe, 
  ArrowUpRight, 
  Sparkles,
  Bot,
  Activity,
  Layers,
  CheckCircle2
} from "lucide-react";

type SeoMode = "competitor" | "geo" | "keywords" | "health";

export function SeoExperience() {
  const [mode, setMode] = useState<SeoMode>("competitor");

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-b border-white/[0.06] overflow-hidden">
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-sky-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header (Show Don't Tell) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs text-sky-300 font-mono">
            <Search className="w-3.5 h-3.5 text-sky-400" />
            <span>Interactive SaaS Interface</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            SEARCH INTELLIGENCE FOR THE AI ERA.
          </h2>

          <p className="text-xs sm:text-sm font-mono text-neutral-400 uppercase tracking-widest">
            GEO, SERP Telemetry &amp; Competitor Radar
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/[0.1] bg-[#090c16]/95 shadow-2xl space-y-6">
          
          {/* Dashboard Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs font-mono text-neutral-400">
                app.ashmyra.com/intelligence/seo
              </span>
            </div>

            {/* Interactive Modes Navigation */}
            <div className="flex items-center gap-2 bg-[#05070a] p-1.5 rounded-xl border border-white/[0.08]">
              <button
                onClick={() => setMode("competitor")}
                data-cursor="explore"
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  mode === "competitor"
                    ? "bg-indigo-600 text-white font-bold shadow"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Competitor Intelligence
              </button>
              <button
                onClick={() => setMode("geo")}
                data-cursor="explore"
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  mode === "geo"
                    ? "bg-indigo-600 text-white font-bold shadow"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                AI Visibility (GEO)
              </button>
              <button
                onClick={() => setMode("keywords")}
                data-cursor="explore"
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  mode === "keywords"
                    ? "bg-indigo-600 text-white font-bold shadow"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Keyword Clusters
              </button>
              <button
                onClick={() => setMode("health")}
                data-cursor="explore"
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  mode === "health"
                    ? "bg-indigo-600 text-white font-bold shadow"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Technical Health
              </button>
            </div>
          </div>

          {/* Mode 1: Competitor Intelligence */}
          {mode === "competitor" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">Tracked Competitors</span>
                  <div className="text-2xl font-bold text-white mt-1">12 Domains</div>
                  <span className="text-[11px] text-emerald-400 font-mono mt-1 block">Full Graph Monitored</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">Ashmyra Keyword Overlap</span>
                  <div className="text-2xl font-bold text-indigo-300 mt-1">74.2%</div>
                  <span className="text-[11px] text-indigo-400 font-mono mt-1 block">1,840 Mutual SERP Targets</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">Content Opportunities</span>
                  <div className="text-2xl font-bold text-sky-300 mt-1">48 High-Impact</div>
                  <span className="text-[11px] text-sky-400 font-mono mt-1 block">Zero Competitor Defense</span>
                </div>
              </div>

              {/* Competitor Comparison Rows */}
              <div className="rounded-2xl border border-white/[0.06] bg-[#05070a] p-5 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-neutral-500 text-[10px] pb-2 border-b border-white/[0.06]">
                  <span>COMPETITOR TARGET</span>
                  <span>SEARCH SHARE</span>
                  <span>CONTENT GAP</span>
                  <span>SERP MOVEMENT</span>
                </div>

                {[
                  { domain: "Legacy-HRMS.io", share: "34%", gap: "8 Modules", move: "+6 Positions", up: true },
                  { domain: "CloudERP-Global.com", share: "28%", gap: "14 Entities", move: "+11 Positions", up: true },
                  { domain: "AgentFlow-SaaS.ai", share: "42%", gap: "4 Workflows", move: "+2 Positions", up: true },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                    <span className="text-white font-bold">{row.domain}</span>
                    <span className="text-neutral-300">{row.share}</span>
                    <span className="text-amber-400">{row.gap}</span>
                    <span className="text-emerald-400 font-bold">{row.move}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mode 2: AI Visibility (GEO) */}
          {mode === "geo" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { engine: "ChatGPT Search", score: "84.2%", citations: "4,120 citations/mo" },
                  { engine: "Perplexity AI", score: "91.0%", citations: "5,840 citations/mo" },
                  { engine: "Google AI Overviews", score: "76.4%", citations: "12,400 impressions" },
                  { engine: "Claude Citations", score: "82.8%", citations: "3,100 citations/mo" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">{item.engine}</span>
                    <div className="text-2xl font-bold text-sky-300 mt-1">{item.score}</div>
                    <span className="text-[11px] text-neutral-400 font-mono mt-1 block">{item.citations}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-neutral-300 flex items-center justify-between">
                <span>Generative Citation Health: <strong>OPTIMAL</strong> (100% brand entity accuracy across LLMs)</span>
                <span className="text-indigo-400 font-bold">DEMO TELEMETRY</span>
              </div>
            </div>
          )}

          {/* Mode 3: Keyword Clusters */}
          {mode === "keywords" && (
            <div className="space-y-4 animate-in fade-in duration-300 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-neutral-400 text-[10px] uppercase">Cluster: Autonomous HRMS</span>
                  <div className="text-lg font-bold text-white mt-1">42 Keywords</div>
                  <span className="text-emerald-400 text-[11px]">Vol: 24,000 / mo</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-neutral-400 text-[10px] uppercase">Cluster: Agentic AI Workflow</span>
                  <div className="text-lg font-bold text-white mt-1">68 Keywords</div>
                  <span className="text-emerald-400 text-[11px]">Vol: 48,000 / mo</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-neutral-400 text-[10px] uppercase">Cluster: GEO Architecture</span>
                  <div className="text-lg font-bold text-white mt-1">19 Keywords</div>
                  <span className="text-emerald-400 text-[11px]">Vol: 14,200 / mo</span>
                </div>
              </div>
            </div>
          )}

          {/* Mode 4: Technical Health */}
          {mode === "health" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in duration-300 font-mono text-center">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] text-neutral-400 uppercase">Core Web Vitals</span>
                <div className="text-2xl font-bold text-emerald-400 mt-1">100 / 100</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] text-neutral-400 uppercase">Schema Validation</span>
                <div className="text-2xl font-bold text-emerald-400 mt-1">Valid (0 Errors)</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] text-neutral-400 uppercase">Crawl Efficiency</span>
                <div className="text-2xl font-bold text-sky-400 mt-1">99.8% Index Rate</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] text-neutral-400 uppercase">SSL &amp; Security</span>
                <div className="text-2xl font-bold text-indigo-400 mt-1">A+ Grade</div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
