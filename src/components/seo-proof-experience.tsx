"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Search, 
  Globe, 
  BarChart3, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Network, 
  Terminal, 
  Share2, 
  Download,
  Check,
  RefreshCw,
  Code2
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 5 Workflow Steps (Requirement 11)
const WORKFLOW_STEPS = [
  {
    step: "01",
    id: "crawl",
    name: "CRAWL",
    title: "Continuous High-Velocity Stream",
    desc: "Autonomous crawler parsing DOM trees, asset waterfalls, and HTTP status codes in sub-50ms cycles.",
    pages: [
      { url: "/home", status: 200, time: "42ms", domSize: "28KB" },
      { url: "/services", status: 200, time: "64ms", domSize: "36KB" },
      { url: "/about", status: 200, time: "38ms", domSize: "22KB" },
      { url: "/blog/seo-audit", status: 200, time: "85ms", domSize: "54KB" },
      { url: "/products/agentic-ai", status: 200, time: "52ms", domSize: "44KB" },
      { url: "/solutions/enterprise", status: 200, time: "60ms", domSize: "39KB" }
    ]
  },
  {
    step: "02",
    id: "detect",
    name: "DETECT",
    title: "Precision Vulnerability Engine",
    desc: "Isolates critical bottlenecks before they degrade crawl budget or Core Web Vitals.",
    flags: [
      { label: "Render-blocking resources", count: 2, severity: "HIGH" },
      { label: "Uncompressed asset payloads", count: 1, severity: "MEDIUM" },
      { label: "Missing structured metadata", count: 3, severity: "MEDIUM" },
      { label: "Broken anchor refs", count: 0, severity: "CLEAN" },
      { label: "Duplicate canonical tags", count: 0, severity: "CLEAN" },
      { label: "Keyword cannibalization nodes", count: 1, severity: "LOW" },
      { label: "Technical TTFB variance", count: 0, severity: "CLEAN" }
    ]
  },
  {
    step: "03",
    id: "understand",
    name: "UNDERSTAND",
    title: "Semantic & GEO Intent Calibration",
    desc: "Evaluates content not just for search bots, but for Perplexity, ChatGPT, and Google AI Overviews.",
    metrics: [
      { metric: "Search Intent Alignment", value: "98.4%", badge: "High Commercial" },
      { metric: "Content Depth & Quality", value: "94/100", badge: "Technical Depth" },
      { metric: "AI Engine Visibility (GEO)", value: "88.2%", badge: "Cited in LLMs" },
      { metric: "Competitor Semantic Gap", value: "+32%", badge: "Opportunity Mapped" }
    ]
  },
  {
    step: "04",
    id: "recommend",
    name: "RECOMMEND",
    title: "Actionable Implementation Blueprint",
    desc: "Translates raw errors into deterministic developer tasks with exact file locations and code snippets.",
    activeIssue: {
      problem: "Render-blocking CSS in critical viewport path",
      why: "Delays first meaningful render (FCP) by 420ms, increasing mobile bounce rate.",
      priority: "CRITICAL / HIGH",
      steps: [
        "01 Identify critical CSS extracted for above-the-fold components",
        "02 Split monolithic stylesheet into core layout and deferred modules",
        "03 Inline critical styles directly in head payload",
        "04 Defer remaining CSS via rel='preload' or non-blocking load",
        "05 Validate Performance via Lighthouse audit webhook"
      ]
    }
  },
  {
    step: "05",
    id: "generate",
    name: "GENERATE",
    title: "Deterministic Artifact Synthesis",
    desc: "Compiles production-ready Schema.org JSON-LD, internal linking graphs, and executive white-label dossiers.",
    artifacts: [
      { name: "Schema.org Organization & SoftwareApplication JSON-LD", type: "Code", ready: true },
      { name: "PageRank Rebalance Matrix & Link Suggestions", type: "Graph", ready: true },
      { name: "Content Brief: Generative Engine Optimization", type: "Doc", ready: true },
      { name: "Executive SEO Intelligence Dossier", type: "White-Label", ready: true }
    ]
  }
];

export function SeoProofExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [linkGraphOptimized, setLinkGraphOptimized] = useState(false);
  const [exportNotice, setExportNotice] = useState<string | null>(null);

  const currentStep = WORKFLOW_STEPS[activeStepIndex];

  const handleExport = (format: "PDF" | "DOCX") => {
    setExportNotice(`Compiling ${format} Executive SEO Dossier...`);
    setTimeout(() => {
      setExportNotice(`${format} Dossier Ready & Verified.`);
      setTimeout(() => setExportNotice(null), 3000);
    }, 1200);
  };

  return (
    <section 
      ref={sectionRef}
      id="seo-intelligence"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-b border-white/[0.06] overflow-hidden"
    >
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-900/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        
        {/* Section 10: Hero Title & Input Feeds */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs text-sky-300 font-mono">
            <Search className="w-3.5 h-3.5 text-sky-400" />
            <span>Engineering Proof: Continuous Search Intelligence</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            SEO THAT DOESN&apos;T JUST AUDIT.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-200 to-white">
              IT EXPLAINS WHAT TO FIX.
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Traditional SEO tools dump hundreds of warning alerts with zero context. Ashmyra ingests search telemetry, diagnoses root causes, and generates verified code solutions.
          </p>

          {/* Unified Input Stream Pipeline (Requirement 10) */}
          <div className="pt-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 p-3 rounded-2xl bg-[#090c16] border border-white/[0.08] shadow-xl text-xs font-mono">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-neutral-300">
                <Globe className="w-3.5 h-3.5 text-sky-400" />
                <span>Google Search Console</span>
              </div>
              <span className="text-neutral-600">+</span>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-neutral-300">
                <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Google Analytics 4</span>
              </div>
              <span className="text-neutral-600">+</span>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-neutral-300">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ashmyra Live Crawler</span>
              </div>
              <span className="text-neutral-500 font-bold">&rarr;</span>
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600/30 to-sky-600/30 border border-sky-400/40 text-white font-bold">
                <Cpu className="w-3.5 h-3.5 text-sky-300" />
                <span>ASHMYRA SEO INTELLIGENCE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 11: 5-Step Live-Looking Interface */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#090c16]/95 border border-white/[0.1] shadow-2xl space-y-8">
          
          {/* Top Interface Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs font-mono text-neutral-400">
                app.ashmyra.com/intelligence/engine-v4
              </span>
            </div>

            {/* 5 Step Selector */}
            <div className="flex items-center gap-1.5 bg-[#05070a] p-1.5 rounded-2xl border border-white/[0.08] overflow-x-auto">
              {WORKFLOW_STEPS.map((ws, idx) => (
                <button
                  key={ws.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
                    activeStepIndex === idx
                      ? "bg-sky-600 text-white font-bold shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <span className="text-[10px] opacity-70">{ws.step}</span>
                  <span>{ws.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Current Step Showcase */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
                  STEP {currentStep.step} &bull; {currentStep.name}
                </span>
                <h3 className="text-2xl font-bold text-white mt-0.5">{currentStep.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
                {currentStep.desc}
              </p>
            </div>

            {/* Step 1 Visual: Live Crawl Stream */}
            {currentStep.id === "crawl" && currentStep.pages && (
              <div className="p-4 rounded-2xl bg-[#060810] border border-white/[0.06] font-mono text-xs space-y-2 overflow-x-auto">
                <div className="grid grid-cols-12 gap-2 text-neutral-500 pb-2 border-b border-white/[0.06] text-[10px] uppercase">
                  <span className="col-span-5">Route Path</span>
                  <span className="col-span-2">HTTP Status</span>
                  <span className="col-span-3">Latency</span>
                  <span className="col-span-2 text-right">DOM Size</span>
                </div>
                {currentStep.pages.map((p) => (
                  <div key={p.url} className="grid grid-cols-12 gap-2 text-neutral-300 py-1.5 hover:bg-white/[0.02] rounded px-1">
                    <span className="col-span-5 text-sky-300">{p.url}</span>
                    <span className="col-span-2 text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {p.status} OK
                    </span>
                    <span className="col-span-3 text-neutral-400">{p.time}</span>
                    <span className="col-span-2 text-right text-neutral-400">{p.domSize}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Step 2 Visual: Detect Flags */}
            {currentStep.id === "detect" && currentStep.flags && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {currentStep.flags.map((f) => (
                  <div key={f.label} className="p-4 rounded-2xl bg-[#060810] border border-white/[0.06] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                        f.severity === "HIGH" ? "bg-rose-500/20 text-rose-300 border border-rose-500/30" :
                        f.severity === "MEDIUM" ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" :
                        f.severity === "LOW" ? "bg-sky-500/20 text-sky-300 border border-sky-500/30" :
                        "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      }`}>
                        {f.severity}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        {f.count} {f.count === 1 ? "Issue" : "Issues"}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-white">{f.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 3 Visual: Understand Metrics */}
            {currentStep.id === "understand" && currentStep.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentStep.metrics.map((m) => (
                  <div key={m.metric} className="p-5 rounded-2xl bg-[#060810] border border-white/[0.06] space-y-2">
                    <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider block">
                      {m.badge}
                    </span>
                    <div className="text-3xl font-extrabold text-white font-mono">{m.value}</div>
                    <div className="text-xs text-neutral-400">{m.metric}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 4 Visual: Exact Recommendation Blueprint */}
            {currentStep.id === "recommend" && currentStep.activeIssue && (
              <div className="p-6 rounded-2xl bg-[#060810] border border-white/[0.06] space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-mono font-bold">
                      {currentStep.activeIssue.priority}
                    </span>
                    <h4 className="text-base font-bold text-white">
                      {currentStep.activeIssue.problem}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">Diagnosis Code: #PERF-FCP-09</span>
                </div>
                <p className="text-xs text-neutral-300">
                  <strong className="text-white">Why it matters:</strong> {currentStep.activeIssue.why}
                </p>
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">
                    Step-by-Step Fix Roadmap:
                  </span>
                  {currentStep.activeIssue.steps.map((st, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-mono text-neutral-300 bg-white/[0.02] p-2 rounded-lg border border-white/[0.04]">
                      <span className="text-sky-400 font-bold">&bull;</span>
                      <span>{st}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5 Visual: Generated Artifacts */}
            {currentStep.id === "generate" && currentStep.artifacts && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentStep.artifacts.map((art) => (
                  <div key={art.name} className="p-4 rounded-2xl bg-[#060810] border border-white/[0.06] flex items-center justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        {art.type}
                      </span>
                      <div className="text-xs font-medium text-white">{art.name}</div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* Section 12: Major Differentiator Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-indigo-950/40 via-[#0a0d18] to-sky-950/40 border border-indigo-500/25 shadow-2xl space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
              THE ASHMYRA ADVANTAGE
            </span>
            <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-[1.08]">
              MOST TOOLS TELL YOU WHAT IS WRONG.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-200">
                ASHMYRA SHOWS YOU HOW TO FIX IT.
              </span>
            </h3>
          </div>

          {/* Concrete Visual Proof Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-2xl bg-black/60 border border-white/[0.1] backdrop-blur-xl">
            <div className="md:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 font-mono text-xs">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>ISSUE DETECTED: Render-blocking CSS</span>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-neutral-400">Severity: <strong className="text-rose-400">HIGH</strong></div>
                <div className="text-xs text-neutral-300">
                  <strong>Why:</strong> Delays first meaningful render.
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-2">
              <span className="text-[11px] font-mono text-sky-300 uppercase tracking-wider font-semibold block">
                How to fix:
              </span>
              <div className="space-y-1 font-mono text-xs text-neutral-300">
                <div className="p-2 rounded bg-white/[0.03] border border-white/[0.04]">01 Identify stylesheet</div>
                <div className="p-2 rounded bg-white/[0.03] border border-white/[0.04]">02 Split critical CSS</div>
                <div className="p-2 rounded bg-white/[0.03] border border-white/[0.04]">03 Inline critical styles</div>
                <div className="p-2 rounded bg-white/[0.03] border border-white/[0.04]">04 Defer remaining CSS</div>
                <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                  05 Validate performance (+420ms speed lift)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 13: Internal Linking / PageRank Visual (Interactive WOW moment) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
                INTERNAL LINKING / PAGERANK VISUAL
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Autonomous Link Equity &amp; Orphan Healing
              </h3>
            </div>
            
            {/* Interactive Trigger Button */}
            <button
              onClick={() => setLinkGraphOptimized(!linkGraphOptimized)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all shadow-lg ${
                linkGraphOptimized
                  ? "bg-emerald-600 text-white font-bold shadow-emerald-500/25"
                  : "bg-sky-600 hover:bg-sky-500 text-white font-semibold"
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${linkGraphOptimized ? "animate-spin" : ""}`} />
              <span>{linkGraphOptimized ? "Link Injected & PageRank Balanced" : "Simulate Link Recommendation"}</span>
            </button>
          </div>

          {/* Interactive SVG Node Graph */}
          <div className="relative rounded-3xl p-8 bg-[#080b15] border border-white/[0.1] shadow-2xl overflow-hidden min-h-[380px] flex flex-col justify-between">
            
            {/* Node graph canvas with SVG edges */}
            <div className="relative w-full h-64">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Static Edge lines */}
                <line x1="20%" y1="35%" x2="50%" y2="25%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <line x1="50%" y1="25%" x2="80%" y2="40%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <line x1="20%" y1="35%" x2="35%" y2="75%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                
                {/* DYNAMIC RECOMMENDED EDGE */}
                {linkGraphOptimized && (
                  <line 
                    x1="35%" 
                    y1="75%" 
                    x2="70%" 
                    y2="80%" 
                    stroke="#10b981" 
                    strokeWidth="3" 
                    strokeDasharray="4 4"
                    className="animate-pulse"
                  />
                )}
              </svg>

              {/* Node 1: High Authority /home */}
              <div className="absolute top-[25%] left-[15%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-indigo-600/30 border-2 border-indigo-400 flex items-center justify-center text-white font-mono font-bold text-xs shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                  92
                </div>
                <span className="text-[11px] font-mono text-white mt-1">/home</span>
                <span className="text-[9px] text-indigo-300 font-mono">High Authority</span>
              </div>

              {/* Node 2: /services/seo */}
              <div className="absolute top-[18%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-sky-600/30 border-2 border-sky-400 flex items-center justify-center text-white font-mono font-bold text-xs shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                  78
                </div>
                <span className="text-[11px] font-mono text-white mt-1">/services/seo</span>
                <span className="text-[9px] text-sky-300 font-mono">Active Hub</span>
              </div>

              {/* Node 3: /products */}
              <div className="absolute top-[32%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.2] flex items-center justify-center text-neutral-300 font-mono text-xs">
                  64
                </div>
                <span className="text-[11px] font-mono text-neutral-300 mt-1">/products</span>
                <span className="text-[9px] text-neutral-400 font-mono">Standard</span>
              </div>

              {/* Node 4: /services/seo-sub */}
              <div className="absolute top-[75%] left-[35%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-11 h-11 rounded-full bg-sky-600/30 border-2 border-sky-400 flex items-center justify-center text-white font-mono text-xs">
                  71
                </div>
                <span className="text-[11px] font-mono text-white mt-1">/services/seo</span>
                <span className="text-[9px] text-sky-300 font-mono">Source Node</span>
              </div>

              {/* Node 5: ORPHAN PAGE → HEALED PAGE */}
              <div className="absolute top-[80%] left-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold transition-all duration-700 ${
                  linkGraphOptimized 
                    ? "bg-emerald-600/30 border-emerald-400 text-emerald-200 shadow-[0_0_25px_rgba(16,185,129,0.5)] scale-110" 
                    : "bg-amber-500/20 border-amber-400/80 text-amber-300 animate-pulse"
                }`}>
                  {linkGraphOptimized ? "68" : "14"}
                </div>
                <span className="text-[11px] font-mono text-white mt-1">/seo-audit</span>
                <span className={`text-[9px] font-mono ${linkGraphOptimized ? "text-emerald-400 font-bold" : "text-amber-400"}`}>
                  {linkGraphOptimized ? "Authority Rebalanced" : "Orphan Page (0 Inlinks)"}
                </span>
              </div>

            </div>

            {/* Live Recommendation Ribbon */}
            <div className="p-3.5 rounded-2xl bg-black/60 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span className="text-neutral-400">Ashmyra Engine Recommends:</span>
                <span className="text-white font-semibold">
                  &ldquo;Add contextual link from /services/seo &rarr; /seo-audit&rdquo;
                </span>
              </div>
              <div className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                linkGraphOptimized ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-sky-500/10 text-sky-300"
              }`}>
                {linkGraphOptimized ? "Equity Flowing: +28% Crawl Lift" : "Pending Implementation"}
              </div>
            </div>

          </div>
        </div>

        {/* Section 14: White-Label Executive Audit Document Preview */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
                ENTERPRISE DELIVERABLE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                White-Label Executive Audit Dossier
              </h3>
            </div>

            {/* Export Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleExport("PDF")}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-mono border border-white/[0.1] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export PDF</span>
              </button>
              <button
                onClick={() => handleExport("DOCX")}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-mono border border-white/[0.1] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export DOCX</span>
              </button>
            </div>
          </div>

          {exportNotice && (
            <div className="p-3 rounded-xl bg-sky-500/20 border border-sky-500/30 text-sky-200 text-xs font-mono text-center animate-fade-in">
              {exportNotice}
            </div>
          )}

          {/* Animated Document Preview */}
          <div className="rounded-3xl p-6 sm:p-10 bg-[#060810] border border-white/[0.1] shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mx-auto space-y-6">
              
              {/* Document Header */}
              <div className="border-b border-white/[0.08] pb-6 flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest block">
                    CONFIDENTIAL TECHNICAL BRIEF
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mt-1 font-sans">
                    ASHMYRA EXECUTIVE SEO INTELLIGENCE DOSSIER
                  </h4>
                  <div className="text-xs font-mono text-neutral-400 mt-1">
                    Telemetry Run: Verified &bull; Hash: #ASH-SEO-9842
                  </div>
                </div>
                <div className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300">
                  Version 4.2
                </div>
              </div>

              {/* Document 9 Key Sections (Requirement 14) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-[10px] text-sky-400">SECTION 01</span>
                  <div className="text-white font-semibold mt-0.5">Executive Summary</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-[10px] text-sky-400">SECTION 02</span>
                  <div className="text-white font-semibold mt-0.5">Technical Health</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-[10px] text-sky-400">SECTION 03</span>
                  <div className="text-white font-semibold mt-0.5">Organic Performance</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-[10px] text-sky-400">SECTION 04</span>
                  <div className="text-white font-semibold mt-0.5">Keyword Strategy</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-[10px] text-sky-400">SECTION 05</span>
                  <div className="text-white font-semibold mt-0.5">Content Quality</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-[10px] text-sky-400">SECTION 06</span>
                  <div className="text-white font-semibold mt-0.5">AI Search Visibility</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-[10px] text-sky-400">SECTION 07</span>
                  <div className="text-white font-semibold mt-0.5">Priority Issues</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-[10px] text-sky-400">SECTION 08</span>
                  <div className="text-white font-semibold mt-0.5">Recommended Actions</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-[10px] text-sky-400">SECTION 09</span>
                  <div className="text-white font-semibold mt-0.5">Implementation Roadmap</div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
