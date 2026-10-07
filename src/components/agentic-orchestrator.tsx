"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Bot, 
  Search, 
  Cpu, 
  Target, 
  Users, 
  BarChart3, 
  PenTool, 
  Database, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Activity,
  Terminal,
  ShieldCheck,
  Layers
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Agent {
  id: string;
  name: string;
  role: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  workflow: string[];
  liveTask: string;
  latency: string;
  logs: string[];
}

const AGENTS: Agent[] = [
  {
    id: "seo",
    name: "SEO Agent",
    role: "Search & GEO Engine Intelligence",
    icon: Search,
    color: "#38bdf8",
    workflow: ["Discover", "Analyze", "Recommend", "Execute", "Measure"],
    liveTask: "Clustering 4,200 search intents across AI engine citations",
    latency: "140ms",
    logs: [
      "[09:41:02] Querying Perplexity & ChatGPT citation graphs",
      "[09:41:03] Semantic gap detected: 'Agentic HRMS workflow'",
      "[09:41:04] Auto-generating structured technical schema",
      "[09:41:05] SERP authority score lifted +18.4%"
    ],
  },
  {
    id: "research",
    name: "Research Agent",
    role: "Deep Knowledge Synthesis",
    icon: Cpu,
    color: "#818cf8",
    workflow: ["Ingest", "Synthesize", "Fact-Check", "Cluster", "Brief"],
    liveTask: "Synthesizing real-time market data across 40+ competitor repos",
    latency: "210ms",
    logs: [
      "[09:41:01] Parsing technical documentation & arXiv preprints",
      "[09:41:02] Cross-verifying claims via retrieval augmented index",
      "[09:41:03] Distilling executive synthesis dossier",
      "[09:41:04] Ready for executive dispatch"
    ],
  },
  {
    id: "sales",
    name: "Sales Agent",
    role: "Revenue Intelligence & Outreach",
    icon: Target,
    color: "#f43f5e",
    workflow: ["Identify", "Enrich", "Score", "Outreach", "Book Demo"],
    liveTask: "High-intent enterprise lead scored at 98/100, drafting bespoke brief",
    latency: "95ms",
    logs: [
      "[09:40:55] Webhook triggered: enterprise inbound from Tier-1 bank",
      "[09:40:56] Company revenue, headcount, tech-stack enriched",
      "[09:40:57] Hyper-personalized value proposition compiled",
      "[09:40:58] Demo slot held with CEO calendar"
    ],
  },
  {
    id: "hr",
    name: "HR Agent",
    role: "Autonomous Talent & Lifecycle",
    icon: Users,
    color: "#10b981",
    workflow: ["Screen CV", "Match KRA", "Schedule", "Onboard", "Provision"],
    liveTask: "Analyzing 120 candidate profiles against Senior Systems Architect rubric",
    latency: "180ms",
    logs: [
      "[09:40:40] 120 CVs evaluated against core role rubric",
      "[09:40:42] 4 top-tier candidates flagged for interview",
      "[09:40:43] Automated interviewer schedule invitations sent",
      "[09:40:44] Slack notification sent to Hiring Manager"
    ],
  },
  {
    id: "analytics",
    name: "Analytics Agent",
    role: "Predictive BI & Anomaly Detection",
    icon: BarChart3,
    color: "#a855f7",
    workflow: ["Ingest", "Profile", "Detect", "Model", "Alert"],
    liveTask: "Realtime anomaly detection across 1.4M cloud database events",
    latency: "45ms",
    logs: [
      "[09:40:10] Scanning multi-tenant API event pipelines",
      "[09:40:11] Anomaly detected: payment endpoint latency spike",
      "[09:40:12] Auto-scaled replica cluster to absorb 5x load",
      "[09:40:13] System telemetry normalized to 12ms"
    ],
  },
  {
    id: "content",
    name: "Content Agent",
    role: "Generative Engine Optimization",
    icon: PenTool,
    color: "#fb923c",
    workflow: ["Ideate", "Outline", "Draft", "GEO-Tune", "Publish"],
    liveTask: "Crafting technical deep-dive on deterministic AI execution",
    latency: "320ms",
    logs: [
      "[09:39:50] Keyword clustering finished: 8 primary entities",
      "[09:39:52] Technical copy generated with live code demonstrations",
      "[09:39:54] Semantic schema validation: 100/100 score",
      "[09:39:55] Published to CMS with instant index ping"
    ],
  },
  {
    id: "data",
    name: "Data Agent",
    role: "ETL & Vector Embedding",
    icon: Database,
    color: "#38bdf8",
    workflow: ["Extract", "Cleanse", "Embed", "Index", "Sync"],
    liveTask: "Vectorizing enterprise knowledge base into high-dimensional cache",
    latency: "80ms",
    logs: [
      "[09:39:20] Chunking 5,000 PDF & Markdown enterprise docs",
      "[09:39:22] Generating 1,536-dim vector embeddings",
      "[09:39:23] Building HNSW hierarchical search graph",
      "[09:39:24] Sub-10ms similarity lookup verified"
    ],
  },
  {
    id: "automation",
    name: "Automation Agent",
    role: "Self-Healing Workflow Execution",
    icon: Zap,
    color: "#eab308",
    workflow: ["Trigger", "Evaluate", "Guardrail", "Execute", "Verify"],
    liveTask: "Reconciling cross-system billing with human-in-the-loop signoff",
    latency: "60ms",
    logs: [
      "[09:39:01] Event: End-of-month financial reconciliation",
      "[09:39:02] Verified bank statements against ledger entries",
      "[09:39:03] Guardrails satisfied: zero discrepancies found",
      "[09:39:04] Audit certificate signed and archived"
    ],
  },
];

export function AgenticOrchestrator() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedAgent, setSelectedAgent] = useState<Agent>(AGENTS[0]);
  const [activeStep, setActiveStep] = useState<number>(2);

  // Cycle through workflow steps visually to show animation without heavy text
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 1800);
    return () => clearInterval(timer);
  }, [selectedAgent]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.from(".agent-card-item", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          opacity: 0,
          y: 20,
          stagger: 0.06,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-b border-white/[0.06] overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Heading (Short, Punchy) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono">
            <Bot className="w-3.5 h-3.5 text-indigo-400" />
            <span>Agentic Orchestration</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase">
            SOFTWARE THAT ACTS.
          </h2>

          <p className="text-xs sm:text-sm font-mono text-neutral-400 uppercase tracking-widest">
            Specialized autonomous agents collaborating in real time.
          </p>
        </div>

        {/* ================================================================= */}
        {/* INTERACTIVE AGENT ORCHESTRATION CONSOLE                           */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 8 Autonomous Agents Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {AGENTS.map((agent) => {
              const isSelected = selectedAgent.id === agent.id;
              const Icon = agent.icon;

              return (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent)}
                  data-cursor="explore"
                  className={`agent-card-item p-4 rounded-2xl border text-left transition-all duration-300 group ${
                    isSelected
                      ? "bg-[#0d1222] border-indigo-400 shadow-lg shadow-indigo-500/20"
                      : "bg-[#090c14]/80 border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="p-2 rounded-xl transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${agent.color}15`, color: agent.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: agent.color }} />
                  </div>

                  <h3 className="text-xs font-bold text-white tracking-wide uppercase font-mono">
                    {agent.name}
                  </h3>
                  <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5 font-sans">
                    {agent.role}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Orchestrator Execution Monitor */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-indigo-500/30 bg-[#090c16]/90 shadow-2xl relative overflow-hidden">
              
              {/* Header HUD */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div
                    className="p-3 rounded-2xl"
                    style={{ backgroundColor: `${selectedAgent.color}20`, color: selectedAgent.color }}
                  >
                    <selectedAgent.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-white tracking-tight">
                        {selectedAgent.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold uppercase">
                        Active Agent
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">
                      Orchestrator Latency: <strong className="text-indigo-300">{selectedAgent.latency}</strong>
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">
                  <Activity className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                  <span>Autonomous Feed</span>
                </div>
              </div>

              {/* Visual Workflow Steps (Show Don't Tell: Discover -> Analyze -> Recommend -> Execute -> Measure) */}
              <div className="my-8">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-4">
                  Execution Pipeline &bull; Step {activeStep + 1} of 5
                </span>

                <div className="grid grid-cols-5 gap-2 sm:gap-3">
                  {selectedAgent.workflow.map((step, idx) => {
                    const isPassed = idx < activeStep;
                    const isCurrent = idx === activeStep;

                    return (
                      <div
                        key={step}
                        className={`p-3 rounded-xl border text-center transition-all duration-300 ${
                          isCurrent
                            ? "bg-indigo-600/25 border-indigo-400 text-white shadow-lg shadow-indigo-500/30 scale-105"
                            : isPassed
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                            : "bg-white/[0.02] border-white/[0.06] text-neutral-500"
                        }`}
                      >
                        <div className="flex items-center justify-center mb-1">
                          {isPassed ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <span className="text-[10px] font-mono font-bold">0{idx + 1}</span>
                          )}
                        </div>
                        <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase block truncate">
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Live Task Banner */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-6 space-y-1">
                <span className="text-[10px] font-mono uppercase text-indigo-400 tracking-wider">
                  Current Execution Goal:
                </span>
                <p className="text-xs sm:text-sm text-white font-medium">
                  {selectedAgent.liveTask}
                </p>
              </div>

              {/* Neural Command Terminal Stream */}
              <div className="rounded-2xl bg-[#05070a] border border-white/[0.06] p-4 font-mono text-[11px] space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-neutral-500 text-[10px]">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-indigo-400" />
                    <span>ORCHESTRATOR TELEMETRY LOGS</span>
                  </span>
                  <span className="text-emerald-400">100% Deterministic</span>
                </div>
                <div className="space-y-1.5 pt-1 text-neutral-300">
                  {selectedAgent.logs.map((log, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-indigo-400 select-none">&gt;</span>
                      <span className={i === selectedAgent.logs.length - 1 ? "text-sky-300 font-semibold" : ""}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
