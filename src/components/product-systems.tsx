"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Cpu, 
  Search, 
  Users, 
  Kanban, 
  MessageSquare, 
  Database, 
  Server, 
  Globe, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  PhoneCall, 
  Video, 
  Share2, 
  Calendar, 
  Filter, 
  BarChart3, 
  Bot,
  Activity,
  Zap,
  Target
} from "lucide-react";

interface ProductSystem {
  num: string;
  id: string;
  name: string;
  tagline: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  previewType: "agentic" | "seo" | "hrms" | "pm" | "comm" | "data" | "enterprise" | "digital";
}

const SYSTEMS: ProductSystem[] = [
  {
    num: "01",
    id: "agentic-ai",
    name: "AGENTIC AI",
    tagline: "Autonomous Agent Swarms & Goal-Driven Execution",
    desc: "Multi-agent coordination protocols that decompose high-level business goals into sub-tasks with deterministic safety guardrails.",
    icon: Cpu,
    color: "#818cf8",
    previewType: "agentic",
  },
  {
    num: "02",
    id: "seo-intelligence",
    name: "SEO INTELLIGENCE",
    tagline: "Continuous Search Telemetry & Code Patch Generation",
    desc: "An AI-native approach to search audits, PageRank rebalancing, semantic clustering, and Generative Engine Optimization.",
    icon: Search,
    color: "#38bdf8",
    previewType: "seo",
  },
  {
    num: "03",
    id: "hrms",
    name: "HRMS & WORKFORCE",
    tagline: "Complete Lifecycle Intelligence: Recruit to Grow",
    desc: "Unified talent platform covering the 7-stage lifecycle with integrated biometric sync, AI HR assistant, and automated payroll.",
    icon: Users,
    color: "#10b981",
    previewType: "hrms",
  },
  {
    num: "04",
    id: "project-management",
    name: "PROJECT MANAGEMENT",
    tagline: "Project Management, Reimagined.",
    desc: "An intelligent project management platform designed around automation, context, and AI. Seamless dependency tracking and predictive velocity.",
    icon: Kanban,
    color: "#f59e0b",
    previewType: "pm",
  },
  {
    num: "05",
    id: "communication",
    name: "COMMUNICATION PLATFORM",
    tagline: "Communication Built Around the Modern Workplace",
    desc: "Unified enterprise messaging, voice calling, video calling, screen sharing, and presence without third-party data leaks.",
    icon: MessageSquare,
    color: "#ec4899",
    previewType: "comm",
  },
  {
    num: "06",
    id: "data-intelligence",
    name: "DATA & LEAD INTELLIGENCE",
    tagline: "Data → Intelligence → Opportunity",
    desc: "End-to-end enrichment pipeline: scraping, cleaning, validation, classification, and scoring into verified qualified accounts.",
    icon: Database,
    color: "#a855f7",
    previewType: "data",
  },
  {
    num: "07",
    id: "enterprise-software",
    name: "ENTERPRISE SOFTWARE",
    tagline: "Mission-Critical Core Business Platforms",
    desc: "Custom high-throughput ERP architectures, microservices, and secure transaction infrastructure engineered for enterprise resilience.",
    icon: Server,
    color: "#6366f1",
    previewType: "enterprise",
  },
  {
    num: "08",
    id: "digital-experiences",
    name: "DIGITAL EXPERIENCES",
    tagline: "Ultra-Fast Next.js Architectures & 3D Web",
    desc: "100/100 Lighthouse performance, design systems, and responsive interactive web applications built for conversion.",
    icon: Globe,
    color: "#22d3ee",
    previewType: "digital",
  }
];

export function ProductSystems() {
  const [activeSystemId, setActiveSystemId] = useState<string>("agentic-ai");
  const activeSystem = SYSTEMS.find((s) => s.id === activeSystemId) || SYSTEMS[0];

  return (
    <section 
      id="systems"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-b border-white/[0.06] overflow-hidden"
    >
      {/* Background Volumetric Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-indigo-900/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header (Requirement 15: "WE BUILD SYSTEMS ACROSS THE BUSINESS.") */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Progressive System Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            WE BUILD SYSTEMS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-white">
              ACROSS THE BUSINESS.
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Not fragmented point tools. Cohesive, intelligent platforms engineered to handle every critical layer of modern enterprise operations.
          </p>
        </div>

        {/* 8 Progressive Product Selector Grid (Requirement 15) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {SYSTEMS.map((system) => {
            const Icon = system.icon;
            const isSelected = system.id === activeSystemId;

            return (
              <button
                key={system.id}
                onClick={() => setActiveSystemId(system.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-28 ${
                  isSelected
                    ? "bg-[#101426] border-indigo-400/80 shadow-lg shadow-indigo-500/20 scale-[1.03]"
                    : "bg-[#080b15] border-white/[0.06] hover:border-white/[0.15] opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] font-mono font-bold text-neutral-500">
                    {system.num}
                  </span>
                  <div
                    className="p-1.5 rounded-lg"
                    style={{ backgroundColor: `${system.color}15`, color: system.color }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="text-xs font-bold text-white uppercase tracking-tight line-clamp-2">
                  {system.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected System Interactive Proof Stage */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#080b15] border border-white/[0.1] shadow-2xl space-y-8">
          
          {/* Header of Active System */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
                <span>SYSTEM {activeSystem.num}</span>
                <span>&bull;</span>
                <span className="text-neutral-400">{activeSystem.tagline}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                {activeSystem.name}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
                {activeSystem.desc}
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white text-xs font-mono uppercase tracking-wider transition-all self-start lg:self-auto"
            >
              <span>Explore Deployment</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* REAL VISUAL PREVIEW BASED ON TYPE (Requirements 16, 17, 18, 19) */}

          {/* 1. AGENTIC AI PREVIEW */}
          {activeSystem.previewType === "agentic" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#060810] border border-white/[0.06] space-y-2">
                <span className="text-[10px] font-mono text-indigo-400 uppercase">Swarm Status</span>
                <div className="text-2xl font-extrabold text-white font-mono">18 Active Agents</div>
                <p className="text-xs text-neutral-400">Collaborating across marketing, engineering, and data pipelines.</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#060810] border border-white/[0.06] space-y-2">
                <span className="text-[10px] font-mono text-sky-400 uppercase">Execution Latency</span>
                <div className="text-2xl font-extrabold text-white font-mono">48ms Average</div>
                <p className="text-xs text-neutral-400">Deterministic decision loops with zero LLM drift guardrails.</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#060810] border border-white/[0.06] space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 uppercase">Task Completion</span>
                <div className="text-2xl font-extrabold text-white font-mono">99.8% Success</div>
                <p className="text-xs text-neutral-400">Autonomous retry strategies with human-in-the-loop escalation.</p>
              </div>
            </div>
          )}

          {/* 2. SEO INTELLIGENCE PREVIEW */}
          {activeSystem.previewType === "seo" && (
            <div className="p-6 rounded-2xl bg-[#060810] border border-white/[0.06] space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-sky-300">Continuous GEO &amp; Core Web Vitals Monitor</span>
                <span className="text-emerald-400">Audit Status: 100/100 Validated</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-neutral-500 text-[10px]">CRAWL HEALTH</div>
                  <div className="text-white font-bold mt-1">99.4%</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-neutral-500 text-[10px]">AI CITATIONS</div>
                  <div className="text-white font-bold mt-1">82.1% (LLM)</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-neutral-500 text-[10px]">INTERNAL EDGES</div>
                  <div className="text-white font-bold mt-1">1,420 Paths</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-neutral-500 text-[10px]">AUTO-FIXES</div>
                  <div className="text-emerald-400 font-bold mt-1">14 Applied</div>
                </div>
              </div>
            </div>
          )}

          {/* 3. HRMS PREVIEW (Requirement 18: Recruit, Onboard, Manage, Develop, Perform, Pay, Grow) */}
          {activeSystem.previewType === "hrms" && (
            <div className="space-y-6">
              {/* 7 Lifecycle Stages */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                  UNIFIED 7-STAGE EMPLOYEE LIFECYCLE
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-xs font-mono text-center">
                  {["Recruit", "Onboard", "Manage", "Develop", "Perform", "Pay", "Grow"].map((stage, idx) => (
                    <div key={stage} className="p-2.5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20 text-emerald-300">
                      <span className="text-[9px] text-neutral-500 block">0{idx + 1}</span>
                      <span className="font-bold">{stage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* HR Modules Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-[#060810] border border-white/[0.06]">
                  <span className="text-[10px] text-emerald-400">MODULE 01</span>
                  <div className="text-white font-bold mt-0.5">AI HR Assistant</div>
                  <div className="text-[11px] text-neutral-400 mt-1">Automated query resolution</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#060810] border border-white/[0.06]">
                  <span className="text-[10px] text-emerald-400">MODULE 02</span>
                  <div className="text-white font-bold mt-0.5">Performance &amp; KRA/KPI</div>
                  <div className="text-[11px] text-neutral-400 mt-1">Quarterly goal calibration</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#060810] border border-white/[0.06]">
                  <span className="text-[10px] text-emerald-400">MODULE 03</span>
                  <div className="text-white font-bold mt-0.5">Attendance &amp; Biometrics</div>
                  <div className="text-[11px] text-neutral-400 mt-1">Geo-fenced device sync</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#060810] border border-white/[0.06]">
                  <span className="text-[10px] text-emerald-400">MODULE 04</span>
                  <div className="text-white font-bold mt-0.5">Automated Payroll</div>
                  <div className="text-[11px] text-neutral-400 mt-1">One-click compliant payouts</div>
                </div>
              </div>
            </div>
          )}

          {/* 4. PROJECT MANAGEMENT PREVIEW (Requirement 16: Project Management, Reimagined) */}
          {activeSystem.previewType === "pm" && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#060810] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-amber-400 font-semibold">
                  <Kanban className="w-4 h-4" />
                  <span>PROJECT MANAGEMENT, REIMAGINED</span>
                </div>
                <span className="text-neutral-400">AI Context &bull; Autonomous Dependency Routing</span>
              </div>

              {/* Kanban Mockup Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                  <div className="text-neutral-400 font-bold text-[11px] flex justify-between">
                    <span>BACKLOG &amp; ISSUES</span>
                    <span className="text-neutral-600">3</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] text-neutral-300">
                    <div>#PM-104: Vector pipeline shard</div>
                    <span className="text-[10px] text-amber-400">AI Context Tagged</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                  <div className="text-indigo-400 font-bold text-[11px] flex justify-between">
                    <span>IN PROGRESS (WORKFLOW)</span>
                    <span className="text-indigo-500">2</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-white">
                    <div>#PM-102: Agent consensus protocol</div>
                    <span className="text-[10px] text-indigo-300">Predictive Velocity: 98%</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                  <div className="text-emerald-400 font-bold text-[11px] flex justify-between">
                    <span>VERIFIED &amp; DEPLOYED</span>
                    <span className="text-emerald-500">8</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-white">
                    <div>#PM-098: Multi-tenant tenant auth</div>
                    <span className="text-[10px] text-emerald-300">Automated QA Passed</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. COMMUNICATION PLATFORM PREVIEW (Requirement 17: Communication Built Around Modern Workplace) */}
          {activeSystem.previewType === "comm" && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#060810] border border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-pink-400 font-bold">
                  <MessageSquare className="w-4 h-4" />
                  <span>COMMUNICATION BUILT AROUND THE MODERN WORKPLACE</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-400 text-[11px]">
                  <span className="flex items-center gap-1"><PhoneCall className="w-3 h-3 text-emerald-400" /> Voice Calling</span>
                  <span className="flex items-center gap-1"><Video className="w-3 h-3 text-sky-400" /> Video Calling</span>
                  <span className="flex items-center gap-1"><Share2 className="w-3 h-3 text-purple-400" /> Screen Sharing</span>
                </div>
              </div>

              {/* Chat & Presence Mockup */}
              <div className="p-4 rounded-2xl bg-[#060810] border border-white/[0.06] space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-neutral-400">
                  <span>#engineering-core (Channel)</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> 14 Active Presence
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5 text-neutral-300">
                    <div className="w-6 h-6 rounded-md bg-indigo-600/30 text-indigo-300 flex items-center justify-center font-bold text-[10px]">
                      AT
                    </div>
                    <div>
                      <span className="text-white font-bold text-[11px]">Ashish: </span>
                      <span>The real-time audio pipeline and screen sharing latency is clocked at 22ms. Ready for production.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-neutral-300">
                    <div className="w-6 h-6 rounded-md bg-sky-600/30 text-sky-300 flex items-center justify-center font-bold text-[10px]">
                      AI
                    </div>
                    <div>
                      <span className="text-sky-300 font-bold text-[11px]">Ashmyra Copilot: </span>
                      <span>Audio channel bandwidth auto-scaled. Summary transcript generated and synced to project board.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 6. DATA & LEAD INTELLIGENCE PREVIEW (Requirement 19: DATA → INTELLIGENCE → OPPORTUNITY) */}
          {activeSystem.previewType === "data" && (
            <div className="space-y-4">
              <div className="text-center py-2">
                <span className="text-xs font-mono text-purple-400 font-bold tracking-widest uppercase">
                  DATA &rarr; INTELLIGENCE &rarr; OPPORTUNITY
                </span>
              </div>

              {/* Pipeline Flow Stages */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-xs font-mono text-center">
                {[
                  "Data Sources",
                  "Scraping",
                  "Cleaning",
                  "Enrichment",
                  "Validation",
                  "Classification",
                  "Scoring",
                  "Qualified Deals"
                ].map((step, idx) => (
                  <div key={step} className="p-2.5 rounded-xl bg-purple-500/[0.06] border border-purple-500/20 text-purple-200">
                    <span className="text-[9px] text-neutral-500 block">STEP 0{idx + 1}</span>
                    <span className="font-semibold text-[11px]">{step}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#060810] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Output Target:</span>
                <span className="text-emerald-400 font-bold">High-Intent Enterprise Accounts Verified &amp; Routed</span>
              </div>
            </div>
          )}

          {/* 7. ENTERPRISE SOFTWARE PREVIEW */}
          {activeSystem.previewType === "enterprise" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#060810] border border-white/[0.06] space-y-1">
                <span className="text-indigo-400 text-[10px]">ARCHITECTURE</span>
                <div className="text-white font-bold">Microservice Mesh</div>
                <p className="text-neutral-400 text-[11px]">Resilient event-driven microservices with zero downtime deployments.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#060810] border border-white/[0.06] space-y-1">
                <span className="text-indigo-400 text-[10px]">INTEGRATION</span>
                <div className="text-white font-bold">Legacy ERP Bridges</div>
                <p className="text-neutral-400 text-[11px]">Two-way transactional synchronization with SAP, Oracle, and internal databases.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#060810] border border-white/[0.06] space-y-1">
                <span className="text-indigo-400 text-[10px]">SECURITY</span>
                <div className="text-white font-bold">SOC-2 &bull; RBAC</div>
                <p className="text-neutral-400 text-[11px]">Role-based access control, cryptographic audit logs, and granular tenant isolation.</p>
              </div>
            </div>
          )}

          {/* 8. DIGITAL EXPERIENCES PREVIEW */}
          {activeSystem.previewType === "digital" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#060810] border border-white/[0.06] text-center">
                <span className="text-cyan-400 text-2xl font-black block">100</span>
                <span className="text-neutral-400 text-[10px] mt-1 block">LIGHTHOUSE PERFORMANCE</span>
              </div>
              <div className="p-4 rounded-xl bg-[#060810] border border-white/[0.06] text-center">
                <span className="text-cyan-400 text-2xl font-black block">0ms</span>
                <span className="text-neutral-400 text-[10px] mt-1 block">LAYOUT SHIFT (CLS)</span>
              </div>
              <div className="p-4 rounded-xl bg-[#060810] border border-white/[0.06] text-center">
                <span className="text-cyan-400 text-2xl font-black block">60 FPS</span>
                <span className="text-neutral-400 text-[10px] mt-1 block">GSAP HARDWARE ACCELERATED</span>
              </div>
              <div className="p-4 rounded-xl bg-[#060810] border border-white/[0.06] text-center">
                <span className="text-cyan-400 text-2xl font-black block">EDGE</span>
                <span className="text-neutral-400 text-[10px] mt-1 block">GLOBAL LOW-LATENCY CDN</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
