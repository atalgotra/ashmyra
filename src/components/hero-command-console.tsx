"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Brain,
  Zap,
  Globe,
  ShieldCheck,
  Activity,
  Terminal,
  Sparkles,
  Search,
  Cpu,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Workflow
} from "lucide-react";

interface AgentNode {
  id: string;
  name: string;
  category: string;
  color: string;
  glow: string;
  icon: React.ElementType;
  metric: string;
  metricLabel: string;
  activeLog: string;
}

const AGENTS: AgentNode[] = [
  {
    id: "swarm",
    name: "Autonomous Swarm",
    category: "COGNITIVE REASONING",
    color: "#818cf8",
    glow: "rgba(129, 140, 248, 0.4)",
    icon: Brain,
    metric: "18 Active",
    metricLabel: "Autonomous Agents",
    activeLog: "Agent Swarm consensus: 18 agents verified across 4 platforms",
  },
  {
    id: "geo",
    name: "GEO Intelligence",
    category: "GENERATIVE SEARCH",
    color: "#22d3ee",
    glow: "rgba(34, 211, 238, 0.4)",
    icon: Search,
    metric: "+340% Surge",
    metricLabel: "AI Answer Citations",
    activeLog: "GEO Engine: Citations verified on Perplexity & ChatGPT Search",
  },
  {
    id: "data",
    name: "Real-Time Data",
    category: "STREAMING PIPELINE",
    color: "#34d399",
    glow: "rgba(52, 211, 153, 0.4)",
    icon: Activity,
    metric: "2.4M/sec",
    metricLabel: "Telemetry Ingestion",
    activeLog: "Data Pipeline: 2.4M events ingested with p99 latency under 18ms",
  },
  {
    id: "security",
    name: "Deterministic Mesh",
    category: "ENTERPRISE GUARDRAILS",
    color: "#f472b6",
    glow: "rgba(244, 114, 182, 0.4)",
    icon: ShieldCheck,
    metric: "100% Deterministic",
    metricLabel: "Audit & Human-in-Loop",
    activeLog: "Guardrails: Strict schema enforcement active, 0 drift detected",
  },
];

const SIGNALS = [
  {
    badge: "GEO SURGE",
    text: "#AgenticAI velocity surging +340% on AI Answer Engines",
    color: "#22d3ee",
    icon: TrendingUp,
  },
  {
    badge: "SWARM EXECUTION",
    text: "4 agents reconciled ERP invoices across 840 enterprise accounts",
    color: "#818cf8",
    icon: Workflow,
  },
  {
    badge: "GUARDRAIL SHIELD",
    text: "Deterministic schema validated · Zero prompt injection drift",
    color: "#f472b6",
    icon: ShieldCheck,
  },
  {
    badge: "DATA PIPELINE",
    text: "Real-time telemetry streaming at 2.4M events/min with 18ms p99",
    color: "#34d399",
    icon: Activity,
  },
];

export function HeroCommandConsole() {
  const [selectedAgent, setSelectedAgent] = useState<AgentNode>(AGENTS[0]);
  const [activeSignalIdx, setActiveSignalIdx] = useState(0);
  const [latency, setLatency] = useState(18);

  // Cycle signals every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSignalIdx((prev) => (prev + 1) % SIGNALS.length);
      setLatency(Math.floor(16 + Math.random() * 5));
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const currentSignal = SIGNALS[activeSignalIdx];
  const SignalIcon = currentSignal.icon;

  return (
    <div className="relative w-full max-w-[580px] rounded-3xl bg-[#080b15]/95 backdrop-blur-2xl border border-white/[0.12] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9),0_0_60px_-15px_rgba(99,102,241,0.25)] overflow-hidden transition-all duration-300">
      
      {/* ── Ambient Backlight Blooms ────────────────────────────────────── */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* ── Window Header & Status Bar ──────────────────────────────────── */}
      <div className="relative z-10 flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-white/[0.02]">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]/90 border border-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.5)]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 border border-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.5)]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]/90 border border-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.5)]" />
          <span className="ml-2 text-[10px] font-mono tracking-wider text-neutral-400 font-medium">
            ASHMYRA_CORE_ENGINE v2.4
          </span>
        </div>

        {/* Live Status Pill */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold">SWARM: LIVE</span>
          </div>
          <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
            p99: {latency}ms
          </span>
        </div>
      </div>

      {/* ── Dynamic Signal Broadcast Strip ─────────────────────────────── */}
      <div className="relative z-10 px-5 py-2.5 bg-gradient-to-r from-indigo-950/30 via-slate-900/40 to-cyan-950/30 border-b border-white/[0.06] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className="p-1 rounded-md shrink-0 flex items-center justify-center"
            style={{ backgroundColor: `${currentSignal.color}20`, color: currentSignal.color }}
          >
            <SignalIcon className="w-3.5 h-3.5" />
          </div>
          <div className="text-xs truncate">
            <span
              className="text-[10px] font-mono font-bold tracking-wider mr-2 uppercase"
              style={{ color: currentSignal.color }}
            >
              [{currentSignal.badge}]
            </span>
            <span className="text-neutral-300 font-sans text-[11px] sm:text-xs">
              {currentSignal.text}
            </span>
          </div>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
      </div>

      {/* ── Interactive Swarm Visual Canvas ─────────────────────────────── */}
      <div className="relative z-10 p-5 sm:p-6">
        
        {/* Core Hub Visual */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#0b0f1e] to-[#060810] border border-white/[0.08] p-5 sm:p-6 overflow-hidden">
          
          {/* Subtle Radar Background Grid */}
          <div className="absolute inset-0 dot-bg opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(99,102,241,0.12)_0%,transparent_70%)] pointer-events-none" />

          {/* Central Neural Kernel */}
          <div className="relative flex items-center justify-center py-6 sm:py-8">
            
            {/* Outer Pulsing Aura Ring */}
            <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-indigo-500/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-cyan-400/25 border-dashed animate-[spin_12s_linear_infinite_reverse]" />
            
            {/* Center Core Button */}
            <div
              className="relative z-10 w-20 h-20 sm:w-22 sm:h-22 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 shadow-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(34,211,238,0.2) 100%)",
                border: "2px solid rgba(129, 140, 248, 0.6)",
                boxShadow: "0 0 30px rgba(99,102,241,0.35)",
              }}
            >
              <Cpu className="w-7 h-7 text-white animate-pulse" />
              <span className="text-[9px] font-mono font-bold tracking-widest text-indigo-200 mt-1 uppercase">
                NEURAL CORE
              </span>
            </div>

            {/* Connecting Data Packets (SVGs) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
              <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="rgba(129,140,248,0.3)" strokeWidth="1" strokeDasharray="3 4" />
              <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="rgba(34,211,238,0.3)" strokeWidth="1" strokeDasharray="3 4" />
              <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="rgba(52,211,153,0.3)" strokeWidth="1" strokeDasharray="3 4" />
              <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="rgba(244,114,182,0.3)" strokeWidth="1" strokeDasharray="3 4" />
            </svg>
          </div>

          {/* 4 Interactive Agent Pillars */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-2">
            {AGENTS.map((agent) => {
              const Icon = agent.icon;
              const isSelected = selectedAgent.id === agent.id;

              return (
                <button
                  key={agent.id}
                  type="button"
                  onClick={() => setSelectedAgent(agent)}
                  className={`relative text-left p-3 rounded-xl transition-all duration-200 border ${
                    isSelected
                      ? "bg-white/[0.08] border-white/30 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${agent.color}20`, border: `1px solid ${agent.color}40` }}
                      >
                        <Icon className="w-3.5 h-3.5" style={{ color: agent.color }} />
                      </div>
                      <span className="text-xs font-bold text-white font-display leading-tight truncate">
                        {agent.name}
                      </span>
                    </div>
                    {isSelected && (
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: agent.color, boxShadow: `0 0 6px ${agent.color}` }}
                      />
                    )}
                  </div>

                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-[11px] font-mono font-bold" style={{ color: agent.color }}>
                      {agent.metric}
                    </span>
                    <span className="text-[9px] font-mono text-neutral-400">
                      {agent.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>

      {/* ── Bottom Live Terminal Log ────────────────────────────────────── */}
      <div className="relative z-10 px-5 py-3 border-t border-white/[0.08] bg-[#05060b]/90 flex items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-2 text-neutral-400 min-w-0">
          <Terminal className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
          <span className="text-emerald-400 text-[11px] font-semibold shrink-0">EXEC:</span>
          <span className="text-[11px] text-neutral-300 truncate">
            {selectedAgent.activeLog}
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 text-[10px] text-neutral-500">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span>AUTONOMOUS</span>
        </div>
      </div>

    </div>
  );
}
