"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Bot, 
  Sparkles, 
  Workflow, 
  TrendingUp, 
  Users, 
  Radio, 
  PenTool, 
  Search, 
  Calendar, 
  Send, 
  BarChart3, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Play, 
  Copy,
  ChevronRight,
  Activity
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 8 Specialized Autonomous Agents (Requirement 7)
const AGENTS_LIST = [
  { id: "trend", name: "Trend Intelligence Agent", short: "Trend Agent", icon: TrendingUp, color: "#38bdf8", status: "Scanning live APIs" },
  { id: "competitor", name: "Competitor Intelligence Agent", short: "Competitor Agent", icon: Radio, color: "#818cf8", status: "Benchmarking 14 rivals" },
  { id: "audience", name: "Audience Intelligence Agent", short: "Audience Agent", icon: Users, color: "#a855f7", status: "Segmenting ICP resonance" },
  { id: "strategy", name: "Content Strategy Agent", short: "Strategy Agent", icon: Workflow, color: "#ec4899", status: "Synthesizing narrative angle" },
  { id: "script", name: "Script Agent", short: "Script Agent", icon: PenTool, color: "#f43f5e", status: "Compiling hook & retainers" },
  { id: "seo", name: "SEO / Hashtag Agent", short: "SEO Agent", icon: Search, color: "#fb923c", status: "Ranking semantic tags" },
  { id: "publish", name: "Publishing Strategy Agent", short: "Publisher Agent", icon: Calendar, color: "#34d399", status: "Optimizing release window" },
  { id: "analytics", name: "Analytics Agent", short: "Analytics Agent", icon: BarChart3, color: "#10b981", status: "Calibrating feedback loop" },
];

// Interactive Demo Calendar Items (Requirement 8 - clearly marked DEMO DATA)
interface CalendarItem {
  day: string;
  platform: string;
  format: string;
  time: string;
  hook: string;
  script: string;
  caption: string;
  hashtags: string[];
  cta: string;
}

const DEMO_CALENDAR: CalendarItem[] = [
  {
    day: "MONDAY",
    platform: "LinkedIn",
    format: "Thought Leadership",
    time: "9:15 AM",
    hook: "The era of clicking 20 software buttons is ending. Autonomous agents that act on goals are here.",
    script: "1. The legacy SaaS trap: Humans as glue between APIs.\n2. The architectural shift: Multi-agent swarms resolving end-to-end tasks.\n3. The result: 90% latency reduction in operational decision loops.",
    caption: "Stop treating engineers and marketers as manual copy-paste workers. Here is how autonomous orchestration changes executive execution in 2026.",
    hashtags: ["#AgenticAI", "#EnterpriseSoftware", "#AutonomousWorkflows", "#EngineeringProof"],
    cta: "What is your biggest operational bottleneck today? Drop a comment below.",
  },
  {
    day: "TUESDAY",
    platform: "Instagram",
    format: "Technical Carousel",
    time: "7:30 PM",
    hook: "5 Architectural Layers Behind Real Autonomous AI Systems (Swipe)",
    script: "Slide 1: Ingestion & Signal Mining\nSlide 2: Context Window Orchestration\nSlide 3: Tool Invocation & Guardrails\nSlide 4: Peer Agent Consensus Protocol\nSlide 5: Deterministic Execution",
    caption: "Most 'AI companies' are just wrapper APIs. Real systems require multi-agent protocols, verified deterministic boundaries, and self-healing error recovery.",
    hashtags: ["#SystemArchitecture", "#AIPlatform", "#SoftwareEngineering", "#TechStack"],
    cta: "Save this blueprint for your next systems architecture review.",
  },
  {
    day: "WEDNESDAY",
    platform: "YouTube",
    format: "Short / Video Breakdown",
    time: "6:45 PM",
    hook: "Why SEO audits that just list 500 errors are useless.",
    script: "[0:00-0:05] 'Your website has 43 render-blocking scripts.' Okay, now what?\n[0:05-0:20] Watch Ashmyra SEO parse the critical rendering path, generate the inline CSS, and defer secondary bundles in real time.\n[0:20-0:30] That is the difference between an audit tool and an intelligent engineering system.",
    caption: "Most tools tell you what is broken. Ashmyra shows you exactly how to fix it with verified code patches.",
    hashtags: ["#SEOIntelligence", "#WebDev", "#FullStack", "#PerformanceOptimization"],
    cta: "Watch the full walkthrough on our channel.",
  },
  {
    day: "THURSDAY",
    platform: "Facebook",
    format: "Case Study & Architecture Brief",
    time: "1:15 PM",
    hook: "How autonomous HR lifecycle intelligence reduced payroll reconciliation time from 4 days to 14 minutes.",
    script: "Enterprise case study: 240 employee distributed workforce, 4 biometric hubs, geo-fenced attendance, zero manual calculations.",
    caption: "When HRMS, attendance, and payroll are unified under an autonomous reasoning layer, human error drops to absolute zero.",
    hashtags: ["#HRTech", "#PayrollAutomation", "#EnterpriseOps", "#IntelligentSystems"],
    cta: "Explore the live HRMS architecture on our platform.",
  },
  {
    day: "FRIDAY",
    platform: "LinkedIn",
    format: "Deep Engineering Breakdown",
    time: "11:00 AM",
    hook: "From Raw Scraped Data to High-Intent Qualified Deals: The Lead Intelligence Engine.",
    script: "Deconstructing the 6-stage enrichment pipeline: scraping → semantic cleaning → entity resolution → intent scoring → automated dispatch.",
    caption: "Data without synthesis is noise. Autonomous pipeline turns 50,000 raw signals into 80 qualified executive conversations.",
    hashtags: ["#DataIntelligence", "#LeadGeneration", "#PipelineEngineering", "#AI"],
    cta: "Request the engineering whitepaper in the link above.",
  },
];

export function AgenticSocialPlatform() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const selectedItem = DEMO_CALENDAR[selectedDayIndex];

  // Auto-cycle through agent collaboration steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % AGENTS_LIST.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${selectedItem.hook}\n\n${selectedItem.caption}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      ref={sectionRef}
      id="agentic-systems"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-b border-white/[0.06] overflow-hidden"
    >
      {/* Background Volumetric Glows */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-indigo-900/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-sky-900/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* Section Headline (Requirement 7) */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono">
            <Bot className="w-3.5 h-3.5 text-indigo-400" />
            <span>Autonomous Social &amp; Content Platform</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            ONE QUESTION.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-indigo-100">
              WHAT SHOULD WE POST NEXT?
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Not a template generator. An autonomous intelligence engine that mines signals, coordinates specialized agents, and executes omni-channel publishing.
          </p>
        </div>

        {/* Visual Workflow: PLATFORMS → SIGNALS → AGENT COLLABORATION → OUTPUT (Requirement 7) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-3xl bg-[#090c16]/80 border border-white/[0.08] backdrop-blur-xl">
          
          {/* STEP 1: PLATFORMS */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="text-indigo-400 font-bold">01 / PLATFORMS</span>
              <Activity className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            </div>
            <h4 className="text-white font-bold text-base">Channel Ingestion</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-neutral-300">
              <span className="px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/[0.06] text-center">LinkedIn</span>
              <span className="px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/[0.06] text-center">YouTube</span>
              <span className="px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/[0.06] text-center">Instagram</span>
              <span className="px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/[0.06] text-center">Facebook</span>
            </div>
          </div>

          {/* STEP 2: SIGNALS */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="text-sky-400 font-bold">02 / SIGNALS</span>
              <Radio className="w-3.5 h-3.5 text-sky-400" />
            </div>
            <h4 className="text-white font-bold text-base">Continuous Telemetry</h4>
            <div className="space-y-1.5 text-xs text-neutral-400">
              <div className="flex justify-between items-center">
                <span>Trending Topics</span>
                <span className="text-emerald-400 font-mono text-[10px]">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Competitor Content Velocity</span>
                <span className="text-indigo-400 font-mono text-[10px]">Realtime</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Audience Intent Shifts</span>
                <span className="text-sky-400 font-mono text-[10px]">Calibrated</span>
              </div>
            </div>
          </div>

          {/* STEP 3: AGENT COLLABORATION */}
          <div className="p-5 rounded-2xl bg-indigo-500/[0.06] border border-indigo-500/20 space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-indigo-300">
              <span className="font-bold">03 / COLLABORATION</span>
              <Workflow className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
            </div>
            <h4 className="text-white font-bold text-base">8 Agent Swarm</h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Trend, Competitor, Audience, Script, SEO, and Publishing agents resolve consensus protocols in &lt;140ms.
            </p>
          </div>

          {/* STEP 4: OUTPUT */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="text-emerald-400 font-bold">04 / OUTPUT</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <h4 className="text-white font-bold text-base">Production Assets</h4>
            <div className="text-xs font-mono text-neutral-300 space-y-1">
              <div>&bull; Verified Hooks &amp; Scripts</div>
              <div>&bull; High-Engagement Captions</div>
              <div>&bull; Calibrated Hashtags &amp; Timing</div>
            </div>
          </div>

        </div>

        {/* AGENT COLLABORATION VISUAL WITH ANIMATED SVG CONNECTIONS (Requirement 9) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">
                MULTI-AGENT CONSENSUS MESH
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                How Specialized Agents Collaborate In Real Time
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Active Agent Protocol: {AGENTS_LIST[activeStep].short}</span>
            </div>
          </div>

          {/* Interactive Agent Mesh Visual with SVG Data Paths */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-[#080b15] border border-white/[0.1] shadow-2xl overflow-hidden">
            
            {/* Animated SVG Connection Lines between Agents */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="agentGradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <path
                  d="M 120 70 Q 320 30 520 70 T 920 70"
                  fill="none"
                  stroke="url(#agentGradientLine)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  className="animate-pulse"
                />
                <path
                  d="M 120 180 Q 320 220 520 180 T 920 180"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* Agent Nodes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 relative z-10">
              {AGENTS_LIST.map((agent, index) => {
                const Icon = agent.icon;
                const isCurrent = index === activeStep;

                return (
                  <div
                    key={agent.id}
                    onClick={() => setActiveStep(index)}
                    className={`p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col items-center text-center space-y-2.5 ${
                      isCurrent
                        ? "bg-[#11162a] border-indigo-400 shadow-lg shadow-indigo-500/20 scale-105"
                        : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.15]"
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform"
                      style={{ backgroundColor: `${agent.color}20`, color: agent.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[11px] font-mono font-bold text-white leading-tight">
                        {agent.short}
                      </div>
                      <div className="text-[9px] font-mono text-neutral-400 line-clamp-1">
                        {agent.status}
                      </div>
                    </div>
                    {isCurrent && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Live Message Dispatch Stream */}
            <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-neutral-400">
                <span className="text-indigo-400 font-bold">&gt;&gt;</span>
                <span>Active Handshake:</span>
                <span className="text-white font-semibold">{AGENTS_LIST[activeStep].name}</span>
                <span className="text-neutral-500">&rarr; Strategy Synthesis Mesh</span>
              </div>
              <div className="text-[11px] text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
                Consensus latency: 42ms &bull; Zero Hallucination Guardrail
              </div>
            </div>

          </div>
        </div>

        {/* ANIMATED CONTENT CALENDAR & ASSET GENERATOR (Requirement 8) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold mb-1">
                <span>LIVE GENERATION PREVIEW</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px]">
                  DEMO DATA
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Dynamic Content Calendar &amp; Script Engine
              </h3>
            </div>
            
            {/* Days Selector Tabs */}
            <div className="flex items-center gap-1.5 bg-[#090c16] p-1.5 rounded-2xl border border-white/[0.08] overflow-x-auto">
              {DEMO_CALENDAR.map((item, idx) => (
                <button
                  key={item.day}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                    selectedDayIndex === idx
                      ? "bg-indigo-600 text-white font-bold shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {item.day.slice(0, 3)}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar Display Card + Agent Generated Assets */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left 4 Cols: Day Card Telemetry */}
            <div className="lg:col-span-4 rounded-3xl p-6 bg-[#090c16] border border-white/[0.1] space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-300">
                    {selectedItem.day}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-400">
                    {selectedItem.platform}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white">{selectedItem.format}</h4>
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mt-1">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Scheduled for: {selectedItem.time}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                    Calibrated By
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-white">
                    <Bot className="w-4 h-4 text-sky-400" />
                    <span>Publishing Strategy Agent</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    Calculated optimal engagement window based on 45,000 industry impression events.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <button
                  onClick={handleCopy}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs font-mono uppercase tracking-wider border border-white/[0.1] transition-all"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? "Copied Content" : "Copy Complete Post"}</span>
                </button>
              </div>
            </div>

            {/* Right 8 Cols: Generated Post Breakdown (HOOK, SCRIPT, CAPTION, HASHTAGS, CTA) */}
            <div className="lg:col-span-8 rounded-3xl p-6 sm:p-8 bg-[#090c16] border border-white/[0.1] space-y-6">
              
              {/* Telemetry bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-300">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Agent Generation Payload &bull; Instant Calibration</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  Status: Ready to Publish
                </div>
              </div>

              {/* 1. HOOK */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400">
                  01 / HIGH-RETENTION HOOK
                </span>
                <div className="p-3.5 rounded-xl bg-[#060810] border border-white/[0.06] text-white font-medium text-sm leading-snug">
                  &ldquo;{selectedItem.hook}&rdquo;
                </div>
              </div>

              {/* 2. SCRIPT / OUTLINE */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">
                  02 / STRUCTURED SCRIPT / OUTLINE
                </span>
                <div className="p-3.5 rounded-xl bg-[#060810] border border-white/[0.06] text-neutral-300 font-mono text-xs whitespace-pre-line leading-relaxed">
                  {selectedItem.script}
                </div>
              </div>

              {/* 3. CAPTION */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400">
                  03 / CONVERSION CAPTION
                </span>
                <div className="p-3.5 rounded-xl bg-[#060810] border border-white/[0.06] text-neutral-300 text-xs leading-relaxed">
                  {selectedItem.caption}
                </div>
              </div>

              {/* 4. HASHTAGS & CTA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                    04 / RANKED HASHTAGS
                  </span>
                  <div className="flex flex-wrap gap-1.5 p-3 rounded-xl bg-[#060810] border border-white/[0.06]">
                    {selectedItem.hashtags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                    05 / INTENT CTA
                  </span>
                  <div className="p-3 rounded-xl bg-[#060810] border border-white/[0.06] text-xs text-neutral-300">
                    {selectedItem.cta}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
