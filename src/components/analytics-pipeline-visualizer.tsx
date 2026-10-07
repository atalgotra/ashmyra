"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Database, 
  PhoneCall, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Activity, 
  Flame, 
  Zap, 
  Filter, 
  RefreshCw,
  Search,
  Check,
  Award,
  ChevronRight
} from "lucide-react";

interface PipelineStage {
  id: number;
  name: string;
  category: "data" | "intelligence" | "activation" | "revenue" | "learning";
  tagline: string;
  input: string;
  action: string;
  output: string;
  telemetry: string;
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 1,
    name: "01. Discover",
    category: "data",
    tagline: "24/7 Multi-Source Exploration",
    input: "Permitted public sources, company registries, directories, competitor web signals",
    action: "Autonomous crawlers scan target sectors, geographies, and verticals on scheduled cycles",
    output: "Raw data feeds continuously streaming into secure staging buffers",
    telemetry: "24/7 Automated Discovery Active",
  },
  {
    id: 2,
    name: "02. Collect",
    category: "data",
    tagline: "Automated Multi-Source Extraction",
    input: "Unstructured HTML, tables, business filings, social/public profile signals",
    action: "Extracts company attributes, contact channels, location, metadata, and service lines",
    output: "Structured raw JSON entities tagged with source timestamps and lineage metadata",
    telemetry: "125,000+ Records Harvested / Week",
  },
  {
    id: 3,
    name: "03. Clean",
    category: "data",
    tagline: "AI Anomaly & Garbage Removal",
    input: "Messy, malformed raw strings, special characters, formatting inconsistencies",
    action: "Detects missing values, validates email syntax, standardizes phone/country codes and company names",
    output: "Normalized, error-free dataset conforming to a unified global schema",
    telemetry: "99.4% Parsing & Sanitization Rate",
  },
  {
    id: 4,
    name: "04. Deduplicate",
    category: "data",
    tagline: "4-Layer Fuzzy & ML Deduplication",
    input: "Fragmented records across multiple sources with naming variations (Pvt Ltd vs Private Limited)",
    action: "Evaluates exact match, normalized match, Levenshtein distance, and multi-attribute ML clustering",
    output: "Single consolidated Master Golden Record with match confidence ratings (98%, 85%)",
    telemetry: "6 Duplicate Profiles Consolidated into 1",
  },
  {
    id: 5,
    name: "05. Validate",
    category: "data",
    tagline: "Deep Entity & Channel Verification",
    input: "Consolidated Master Record with unverified phone numbers, emails, and tax IDs",
    action: "Real-time SMTP handshakes, MX record checks, telecom carrier pings, and registry lookup",
    output: "Verified contactability status with fraud and suspicious pattern flags",
    telemetry: "Zero Bounce Rate Guarantee",
  },
  {
    id: 6,
    name: "06. Enrich",
    category: "intelligence",
    tagline: "AI Gap Discovery & Automated Queues",
    input: "Validated records with missing mobile numbers, decision-maker names, or revenue tiers",
    action: "Generates prioritized enrichment tasks automatically ('Find mobile for 4,250 records')",
    output: "Fully populated 360° entity profile with firmographics and verified decision-maker info",
    telemetry: "Data Completeness Boosted to 94%",
  },
  {
    id: 7,
    name: "07. Score",
    category: "intelligence",
    tagline: "AI Dynamic Lead Scoring (0–100)",
    input: "Enriched Golden Record profile + historical conversion characteristics",
    action: "Evaluates company size, industry intent, phone availability, and conversion probability",
    output: "Real-time Lead Score: 🔥 Hot (90–100), 🟡 Warm (70–89), 🔵 Cold (<50)",
    telemetry: "Hot Lead Score: 94/100 Flagged",
  },
  {
    id: 8,
    name: "08. Segment",
    category: "intelligence",
    tagline: "Smart Dynamic Audience Buckets",
    input: "Scored leads across all categories and territories",
    action: "Auto-groups leads into dynamic segments (Logistics, Exporters, Delhi NCR, Revenue > ₹10 Cr)",
    output: "Self-updating audience queues that enroll new matching records in real time",
    telemetry: "14 Dynamic Segments Live",
  },
  {
    id: 9,
    name: "09. Assign",
    category: "activation",
    tagline: "Intelligent Workload Routing",
    input: "Segmented high-priority lead batches ready for outreach",
    action: "Distributes records based on caller expertise, availability, and historical conversion performance",
    output: "Balanced personal caller queues with strict SLA assignment locks",
    telemetry: "Zero Idle Queue Slippage",
  },
  {
    id: 10,
    name: "10. Call",
    category: "activation",
    tagline: "Built-in Caller CRM ('Call These 500 First')",
    input: "Assigned caller queue prioritized by: Conversion Probability × Data Quality × Value",
    action: "One-click dialing, call script guidance, live customer profile 360°, and conversation notes",
    output: "Logged outbound calls with talk duration and recording telemetry",
    telemetry: "340% Higher Connection Rate",
  },
  {
    id: 11,
    name: "11. Qualify",
    category: "activation",
    tagline: "Intelligent Call Disposition & Triggering",
    input: "Completed caller conversation with prospect",
    action: "Caller marks disposition: Interested, Call Back Later, Meeting Requested, or Not Interested",
    output: "Automatic instant lead movement: 'Interested' immediately escalates to Sales Queue",
    telemetry: "Zero Delay Between Call & Sales Handshake",
  },
  {
    id: 12,
    name: "12. Sell",
    category: "revenue",
    tagline: "Built-in Executive Sales CRM",
    input: "Pre-qualified high-intent leads handed off directly from the calling floor",
    action: "Account executives manage deal stages: Qualified → Requirement → Quotation → Won",
    output: "Signed agreements, issued quotations, and booked commercial contracts",
    telemetry: "$4.8M Active Deal Pipeline",
  },
  {
    id: 13,
    name: "13. Track",
    category: "revenue",
    tagline: "Automated Follow-Up & Revenue Lineage",
    input: "Open proposals and quotations pending client sign-off",
    action: "Automated follow-up engine triggers alerts: 'Quotation sent 4 days ago with no activity'",
    output: "Protected revenue pipeline with zero stalled opportunities or lost leads",
    telemetry: "98% Follow-Up Compliance Rate",
  },
  {
    id: 14,
    name: "14. Analyze",
    category: "learning",
    tagline: "Closed-Loop Attribution & MIS",
    input: "All won customers and historical conversion touchpoints",
    action: "Analyzes common traits of closed clients: which source, segment, caller, and attributes won",
    output: "Full ROI visibility: exactly which data sources generate real money vs waste time",
    telemetry: "Source ROI & Conversion Transparency",
  },
  {
    id: 15,
    name: "15. Improve",
    category: "learning",
    tagline: "Autonomous Flywheel Optimization",
    input: "Closed-loop conversion intelligence and win-loss data",
    action: "Feeds insights back to Stage 01 (Scraping) and Stage 07 (Lead Scoring) to refine algorithms",
    output: "Continuously improving lead selection with higher conversion probability every week",
    telemetry: "Self-Learning Revenue Flywheel",
  },
];

export function AnalyticsPipelineVisualizer() {
  const [selectedStageId, setSelectedStageId] = useState<number>(4); // Default to Deduplication / Golden Record
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const selectedStage = PIPELINE_STAGES.find(s => s.id === selectedStageId) || PIPELINE_STAGES[0];

  const handleRunSimulation = () => {
    setIsSimulating(true);
    let current = 1;
    const interval = setInterval(() => {
      setSelectedStageId(current);
      current++;
      if (current > 15) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 700);
  };

  return (
    <div className="relative rounded-3xl bg-[#090b10] border border-white/[0.08] shadow-2xl overflow-hidden">
      
      {/* Top Header */}
      <div className="p-6 sm:p-8 border-b border-white/[0.06] bg-gradient-to-r from-purple-950/20 via-indigo-950/15 to-neutral-900/30">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                Continuous Revenue Operating Engine
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs font-mono text-neutral-400">
                15-Stage Data-to-Revenue Pipeline
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              From Raw Data &rarr; Golden Records &rarr; Calls &rarr; Sales &rarr; Revenue
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
              Your data does not just sit in a static database. Ashmyra moves records automatically across 15 intelligent stages, continuously learning from won deals to refine future collection.
            </p>
          </div>

          <button
            onClick={handleRunSimulation}
            disabled={isSimulating}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-mono text-xs font-bold shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? "animate-spin" : ""}`} />
            <span>{isSimulating ? "Simulating Flywheel..." : "Simulate 15-Stage Flywheel"}</span>
          </button>
        </div>

        {/* 15-Stage Interactive Pill Track */}
        <div className="mt-6 pt-4 border-t border-white/[0.04] overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-[980px]">
            {PIPELINE_STAGES.map((stage) => {
              const isSelected = stage.id === selectedStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStageId(stage.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    isSelected
                      ? "bg-purple-500/25 border border-purple-500/50 text-white font-bold shadow-lg shadow-purple-950/50"
                      : "bg-white/[0.02] border border-white/[0.06] text-neutral-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? "bg-purple-400" : "bg-neutral-600"
                    }`}
                  />
                  <span>{stage.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Stage Detail Showcase */}
      <div className="p-6 sm:p-8 bg-black/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Stage Info & Operation */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 mb-3">
                <span className="uppercase tracking-wider font-bold">Stage {selectedStage.id} of 15</span>
                <span>•</span>
                <span>{selectedStage.category.toUpperCase()} PHASE</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {selectedStage.name}: {selectedStage.tagline}
              </h4>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed font-mono">
                {selectedStage.action}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1 flex items-center gap-1.5">
                  <Database className="w-3 h-3 text-purple-400" />
                  <span>Incoming Stage Input</span>
                </div>
                <div className="text-xs text-neutral-200 font-mono leading-relaxed">
                  {selectedStage.input}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] font-mono uppercase text-emerald-400 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Autonomous Output</span>
                </div>
                <div className="text-xs text-neutral-200 font-mono leading-relaxed">
                  {selectedStage.output}
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/25 flex items-center justify-between text-xs font-mono text-purple-300">
              <span className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-purple-400" />
                <span>Live Telemetry Impact:</span>
              </span>
              <strong className="text-white font-bold">{selectedStage.telemetry}</strong>
            </div>
          </div>

          {/* Right Column: Visual Graphic & Quick Stats */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-black border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <span className="text-xs font-mono uppercase text-neutral-400">Autonomous Execution HUD</span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <Zap className="w-3 h-3 text-emerald-400" />
                Zero Manual Friction
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/[0.04]">
                <span className="text-neutral-400">Processing Latency:</span>
                <span className="text-white font-bold">&lt; 140ms per record</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/[0.04]">
                <span className="text-neutral-400">AI Confidence Threshold:</span>
                <span className="text-purple-300 font-bold">&gt; 85% Auto-Commit</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/[0.04]">
                <span className="text-neutral-400">Next Stage Handoff:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span>Stage {(selectedStage.id % 15) + 1}</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono text-neutral-500 leading-normal">
              *Continuous Feedback: Every customer won at Stage 12 trains Stage 01 and Stage 07 to discover higher-intent leads.
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
