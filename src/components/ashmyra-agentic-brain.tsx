"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Cpu, 
  Workflow, 
  Search, 
  Share2, 
  Database, 
  Users, 
  Kanban, 
  MessageSquare, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Activity,
  Sliders,
  Sparkles
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Connected AI Systems (Requirement 10 & 12)
interface BrainSystem {
  id: string;
  name: string;
  short: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  subAgents: string[];
  role: string;
}

const BRAIN_SYSTEMS: BrainSystem[] = [
  {
    id: "social",
    name: "SOCIAL AI",
    short: "Social",
    icon: Share2,
    color: "#38bdf8",
    role: "Trend mining & omni-channel strategy",
    subAgents: ["Trend Agent", "Competitor Agent", "Audience Agent", "Content Agent", "Publishing Agent", "Analytics Agent"],
  },
  {
    id: "seo",
    name: "SEO AI",
    short: "SEO",
    icon: Search,
    color: "#818cf8",
    role: "Continuous crawl & code generation",
    subAgents: ["Crawler", "Technical Agent", "Content Agent", "Keyword Agent", "Internal Linking Agent", "Schema Agent", "Reporting Agent"],
  },
  {
    id: "project",
    name: "PROJECT AI",
    short: "Project",
    icon: Kanban,
    color: "#f59e0b",
    role: "Contextual task breakdown & routing",
    subAgents: ["Requirements Parser", "Dependency Router", "Velocity Predictor", "Risk Radar", "QA Evaluator"],
  },
  {
    id: "hr",
    name: "HR AI",
    short: "HR",
    icon: Users,
    color: "#10b981",
    role: "Talent lifecycle & payroll automation",
    subAgents: ["Recruitment Agent", "Onboarding Agent", "Support Agent", "Attendance Agent", "Payroll Engine", "Performance Agent"],
  },
  {
    id: "data",
    name: "DATA AI",
    short: "Data",
    icon: Database,
    color: "#a855f7",
    role: "Raw telemetry to verified accounts",
    subAgents: ["Collection", "Cleaning", "Enrichment", "Analysis", "Scoring", "Segmentation", "Action Dispatch"],
  },
  {
    id: "communication",
    name: "COMMUNICATION AI",
    short: "Comm",
    icon: MessageSquare,
    color: "#ec4899",
    role: "Contextual messaging & audio/video sync",
    subAgents: ["Meeting Summarizer", "Task Inferrer", "Presence Telemetry", "Bandwidth Scaler"],
  },
  {
    id: "automation",
    name: "AUTOMATION",
    short: "Automate",
    icon: Zap,
    color: "#22d3ee",
    role: "Self-healing enterprise workflows",
    subAgents: ["Event Webhooks", "Deterministic Guardrails", "Human-in-Loop Escalation", "Audit Logger"],
  },
];

// Pipeline Stages (Requirement 11)
const PIPELINE_STAGES = [
  { name: "INPUT", desc: "Telemetry Ingestion" },
  { name: "REASON", desc: "Context Synthesis" },
  { name: "PLAN", desc: "Task Decomposition" },
  { name: "COLLABORATE", desc: "Peer Consensus" },
  { name: "ACT", desc: "Deterministic Execution" },
  { name: "VERIFY", desc: "Human & Guardrail Check" },
];

export function AshmyraAgenticBrain() {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<SVGSVGElement>(null);
  const [activeSystemId, setActiveSystemId] = useState<string>("seo");
  const [pipelineStep, setPipelineStep] = useState(0);

  const activeSystem = BRAIN_SYSTEMS.find((s) => s.id === activeSystemId) || BRAIN_SYSTEMS[1];

  // Pipeline execution cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setPipelineStep((prev) => (prev + 1) % PIPELINE_STAGES.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  // GSAP Entrance and node sequencing
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      tl.from(".brain-core-node", {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      })
      .from(".brain-system-node", {
        scale: 0.5,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5")
      .from(".brain-path", {
        strokeDashoffset: 1000,
        opacity: 0,
        stagger: 0.08,
        duration: 1.2,
        ease: "power2.out",
      }, "-=0.6");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="agentic-brain"
      className="relative py-36 px-4 sm:px-6 lg:px-8 bg-[#04060a] border-b border-white/[0.08] overflow-hidden"
    >
      {/* Background Volumetric Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-indigo-900/15 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header (Requirement 10) */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>SIGNATURE CENTERPIECE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.02]">
            THE ASHMYRA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-white">
              AGENTIC BRAIN
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal">
            The central intelligence mesh that unifies marketing, engineering, workforce, and operational systems under one autonomous consensus protocol.
          </p>
        </div>

        {/* 6-Stage Execution Pipeline Ribbon (Requirement 11: INPUT → REASON → PLAN → COLLABORATE → ACT → VERIFY) */}
        <div className="p-3.5 rounded-2xl bg-[#090c16]/90 border border-white/[0.08] backdrop-blur-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-mono">
            {PIPELINE_STAGES.map((st, idx) => {
              const isCurrent = idx === pipelineStep;
              return (
                <div
                  key={st.name}
                  className={`p-2.5 rounded-xl border transition-all text-center ${
                    isCurrent
                      ? "bg-indigo-600/20 border-indigo-400 text-white shadow-md shadow-indigo-500/20 scale-[1.02]"
                      : "bg-white/[0.02] border-white/[0.04] text-neutral-400"
                  }`}
                >
                  <div className="text-[10px] text-indigo-400 font-bold">
                    STAGE 0{idx + 1}
                  </div>
                  <div className="font-extrabold mt-0.5 text-white">{st.name}</div>
                  <div className="text-[9px] text-neutral-400 mt-0.5">{st.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Agentic Brain Network (SVG Mesh + Interactive Nodes) */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-[#060812] border border-white/[0.1] shadow-2xl overflow-hidden min-h-[500px]">
          
          {/* Animated SVG Network Mesh connecting systems to central orchestrator */}
          <div className="absolute inset-0 pointer-events-none">
            <svg ref={networkRef} className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="brainPulseLine" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Connecting lines from center to nodes */}
              <line x1="50%" y1="42%" x2="15%" y2="25%" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" className="brain-path" />
              <line x1="50%" y1="42%" x2="38%" y2="18%" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" className="brain-path" />
              <line x1="50%" y1="42%" x2="62%" y2="18%" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" className="brain-path" />
              <line x1="50%" y1="42%" x2="85%" y2="25%" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" className="brain-path" />
              <line x1="50%" y1="42%" x2="22%" y2="65%" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" className="brain-path" />
              <line x1="50%" y1="42%" x2="50%" y2="72%" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" className="brain-path" />
              <line x1="50%" y1="42%" x2="78%" y2="65%" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" className="brain-path" />

              {/* Highlight active pulse line */}
              <circle cx="50%" cy="42%" r="90" fill="none" stroke="rgba(99,102,241,0.15)" strokeWidth="1" strokeDasharray="4 4" className="animate-spin" />
            </svg>
          </div>

          {/* Central Ashmyra Intelligence Core Node (Requirement 10) */}
          <div className="brain-core-node relative z-20 flex flex-col items-center justify-center my-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-sky-500 p-[2px] shadow-[0_0_50px_rgba(99,102,241,0.5)]">
              <div className="w-full h-full bg-[#090c18] rounded-[22px] flex flex-col items-center justify-center text-center p-2">
                <Cpu className="w-8 h-8 text-sky-400 animate-pulse" />
                <span className="text-[10px] font-mono font-black text-white mt-1 uppercase tracking-wider">
                  ASHMYRA
                </span>
                <span className="text-[8px] font-mono text-indigo-300 uppercase">
                  Brain Core
                </span>
              </div>
            </div>
            <div className="text-[11px] font-mono text-neutral-400 mt-2 bg-black/60 px-3 py-1 rounded-full border border-white/[0.08]">
              Consensus Latency: 38ms &bull; Zero Drift
            </div>
          </div>

          {/* Connected System Nodes (Requirement 10 & 12) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative z-20 pt-8 border-t border-white/[0.06]">
            {BRAIN_SYSTEMS.map((sys) => {
              const Icon = sys.icon;
              const isSelected = sys.id === activeSystemId;

              return (
                <button
                  key={sys.id}
                  onClick={() => setActiveSystemId(sys.id)}
                  onMouseEnter={() => setActiveSystemId(sys.id)}
                  className={`brain-system-node p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between h-28 ${
                    isSelected
                      ? "bg-[#11172e] border-indigo-400 shadow-lg shadow-indigo-500/25 scale-105"
                      : "bg-[#090c16]/80 border-white/[0.06] hover:border-white/[0.15] opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div
                      className="p-1.5 rounded-lg"
                      style={{ backgroundColor: `${sys.color}20`, color: sys.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </div>

                  <div>
                    <div className="text-xs font-bold text-white font-mono uppercase tracking-tight">
                      {sys.name}
                    </div>
                    <div className="text-[9px] text-neutral-400 mt-0.5 line-clamp-1">
                      {sys.subAgents.length} Agents
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Isolated System Detail Inspector (Requirement 12) */}
          <div className="mt-8 p-6 rounded-2xl bg-[#090c16]/95 border border-white/[0.1] relative z-20 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <span 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: activeSystem.color }}
                />
                <h4 className="text-lg font-bold text-white font-mono">
                  {activeSystem.name} &bull; Multi-Agent Architecture
                </h4>
              </div>
              <span className="text-xs font-mono text-neutral-400">
                {activeSystem.role}
              </span>
            </div>

            {/* Sub-Agent Constellation */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                Specialized Autonomous Sub-Agents in this Swarm:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeSystem.subAgents.map((ag) => (
                  <span
                    key={ag}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-neutral-200 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{ag}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Stream Transition Connector (Requirement 26) */}
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>&gt;&gt; Central Brain consensus feeding into Project Execution Engine</span>
            <span className="text-amber-400 font-semibold">&rarr; WOW 03 Next</span>
          </div>

        </div>

      </div>
    </section>
  );
}
