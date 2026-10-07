import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AutomationEngineHub } from "@/components/automation-engine-hub";
import { AutomationEngineDemo } from "@/components/automation-engine-demo";
import { WorkflowCanvasShowcase } from "@/components/workflow-canvas-showcase";
import { AutomationBlueprints } from "@/components/automation-blueprints";
import { FreelancerTrustBanner } from "@/components/freelancer-trust-banner";
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Bot,
  Database,
  FileText,
  ShieldCheck,
  Activity,
  Clock,
  Users,
  Eye,
  RefreshCw,
  GitBranch,
  Code,
  Layers,
  Mail,
  Webhook,
  Lock,
  BarChart3,
  AlertTriangle,
  TrendingUp,
  Cpu,
  ChevronRight,
  X,
  Check,
  Server,
  FolderOpen,
  Network,
  Share2,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra Automation | AI Workflow Automation & Orchestration",
  description:
    "Build intelligent workflows that connect data, applications, AI agents and people. Ashmyra Automation provides resilient orchestration, document intelligence, approvals, APIs and automated execution.",
  keywords: [
    "AI automation",
    "workflow orchestration",
    "business process automation",
    "AI agents",
    "enterprise automation",
    "workflow automation",
    "document automation",
    "API automation",
    "intelligent workflows",
    "AI workflow engine",
    "Ashmyra Automation",
    "human in the loop",
    "workflow resilience",
  ],
  openGraph: {
    title: "Ashmyra Automation | AI Workflow Automation & Orchestration",
    description:
      "Connect data, applications, AI agents and people into resilient workflows that execute, decide, communicate, recover and escalate — automatically.",
    url: "https://ashmyra.com/products/automation",
    images: [{ url: "/wow/wow6-workplace-communication.png", width: 1200, height: 675, alt: "Ashmyra Automation Engine" }],
  },
  alternates: { canonical: "https://ashmyra.com/products/automation" },
};

function LoopStage({ n, label, sub, color }: { n: string; label: string; sub: string; color: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`w-10 h-10 rounded-2xl border ${color} flex items-center justify-center text-xs font-mono font-bold mb-2`}>
        {n}
      </div>
      <div className="text-xs font-bold text-white mb-0.5">{label}</div>
      <div className="text-[10px] text-neutral-500 max-w-[90px] leading-snug">{sub}</div>
    </div>
  );
}

function LayerRow({
  n,
  title,
  items,
  accent,
}: {
  n: string;
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.14] transition-all">
      <div className="flex items-center gap-3 sm:min-w-[200px]">
        <div className={`w-8 h-8 rounded-xl border ${accent} flex items-center justify-center text-xs font-mono font-bold flex-shrink-0`}>
          {n}
        </div>
        <span className="text-sm font-bold text-white">{title}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-[11px] font-mono text-neutral-300">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AshmyraAutomationPage() {
  return (
    <div className="relative pt-32 pb-24 min-h-screen bg-[#050608] overflow-hidden">
      {/* ── 00. Ambient Atmosphere ─────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[720px] pointer-events-none overflow-hidden z-0">
        <div
          className="absolute inset-0 dot-bg opacity-30"
          style={{
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, #000 25%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, #000 25%, transparent 80%)",
          }}
        />
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[420px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(245,158,11,0.18) 0%, rgba(99,102,241,0.12) 45%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ══════════════════════════════════════════════════════════════
            01. HERO SECTION
        ══════════════════════════════════════════════════════════════ */}
        <div className="relative text-center max-w-6xl mx-auto mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs text-amber-300 font-mono backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span className="uppercase tracking-wider font-bold">AUTOMATION · ORCHESTRATION · AI</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] font-bold tracking-tight text-white leading-[1.12] font-sans">
            <span className="block">Make Your Business Processes Act.</span>
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-200">
              EVENT → INTELLIGENCE → ACTION.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Ashmyra Automation connects systems, data, AI agents and teams into resilient workflows that
            don&apos;t just execute tasks — they{" "}
            <strong className="text-white font-semibold">understand context</strong>, make decisions,{" "}
            <strong className="text-white font-semibold">trigger actions</strong> and handle exceptions
            — automatically.
          </p>

          {/* Capability indicators without fabricated metrics */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: Zap, label: "EVENT-DRIVEN", sub: "React to events as they happen" },
              { icon: Bot, label: "AI-AUGMENTED", sub: "Combine workflows with AI reasoning" },
              { icon: RefreshCw, label: "RESILIENT", sub: "Retries, queues and failure handling" },
              { icon: Users, label: "HUMAN CONTROLLED", sub: "Approval gates when decisions require people" },
              { icon: Eye, label: "OBSERVABLE", sub: "Every workflow execution can be inspected" },
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-amber-500/25 transition-all text-left"
              >
                <Icon className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white font-mono">{label}</div>
                  <div className="text-[10px] text-neutral-400">{sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#engine-hub"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold text-sm shadow-xl shadow-amber-500/30 transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore the Automation Engine</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact?intent=automation-demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm border border-white/10 hover:border-amber-500/30 transition-all"
            >
              Request a Live Demo
            </Link>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            02. HERO VISUAL — AUTOMATION ENGINE HUB
        ══════════════════════════════════════════════════════════════ */}
        <div id="engine-hub">
          <AutomationEngineHub />
        </div>

        {/* ══════════════════════════════════════════════════════════════
            03. INTERACTIVE SIMULATION DEMO
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2 font-semibold">
              Live Inside The Engine
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Watch an Automation Execute in Real Time
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
              Click <strong className="text-amber-300 font-mono">▶ Run Simulation</strong> to observe how events
              are received, analyzed, approved, and executed step-by-step.
            </p>
          </div>

          <AutomationEngineDemo />
        </div>

        {/* ══════════════════════════════════════════════════════════════
            04. THE CORE IDEA: AUTOMATION THAT UNDERSTANDS THE PROCESS
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2 font-semibold">
              The Architecture Loop
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Automation That Understands the Process
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-2xl mx-auto">
              Moving data from A to B is trivial. Understanding context, reasoning about exceptions, and ensuring business outcomes is true automation.
            </p>
          </div>

          <div className="overflow-x-auto pb-4 scrollbar-none">
            <div className="flex items-start gap-0 min-w-[820px] px-4 justify-between">
              {[
                { n: "01", label: "TRIGGER", sub: "Something happens", color: "border-amber-500/40 text-amber-400 bg-amber-500/10" },
                { n: "02", label: "CONTEXT", sub: "Ashmyra gathers data", color: "border-indigo-500/40 text-indigo-400 bg-indigo-500/10" },
                { n: "03", label: "INTELLIGENCE", sub: "AI & rules evaluate", color: "border-purple-500/40 text-purple-400 bg-purple-500/10" },
                { n: "04", label: "DECISION", sub: "Determines next step", color: "border-sky-500/40 text-sky-400 bg-sky-500/10" },
                { n: "05", label: "ACTION", sub: "Systems execute work", color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10" },
                { n: "06", label: "VERIFY", sub: "The result is checked", color: "border-teal-500/40 text-teal-400 bg-teal-500/10" },
                { n: "07", label: "RECOVER", sub: "Failures auto-retried", color: "border-orange-500/40 text-orange-400 bg-orange-500/10" },
                { n: "08", label: "OUTCOME", sub: "Process moves forward", color: "border-rose-500/40 text-rose-400 bg-rose-500/10" },
              ].map((s, i, arr) => (
                <div key={s.n} className="flex items-start">
                  <LoopStage {...s} />
                  {i < arr.length - 1 && (
                    <div className="flex items-center self-start mt-4 px-2">
                      <div className="w-5 h-px bg-gradient-to-r from-white/10 to-white/20" />
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-600 -ml-1" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            05. TRADITIONAL AUTOMATION VS ASHMYRA
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2 font-semibold">
              Platform Comparison
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Traditional Automation vs Ashmyra
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-xl mx-auto">
              Compare naive point-to-point webhook scripts with Ashmyra&apos;s intelligent, fault-tolerant orchestration architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {/* Traditional */}
            <div className="p-7 sm:p-9 rounded-3xl bg-neutral-950/60 border border-red-500/15">
              <div className="flex items-center gap-2 mb-5">
                <X className="w-4 h-4 text-red-400" />
                <span className="text-xs font-mono font-bold uppercase text-red-400 tracking-wider">Traditional Automation</span>
              </div>
              <div className="font-mono text-sm text-neutral-400 space-y-2 mb-6 p-4 rounded-xl bg-black/40 border border-white/[0.04]">
                <div className="text-white font-bold">Trigger</div>
                <div className="pl-4 text-neutral-600">↓</div>
                <div>Action</div>
                <div className="pl-4 text-neutral-600">↓</div>
                <div className="text-neutral-500">Done (or silent failure)</div>
              </div>
              <div className="space-y-2.5 text-xs font-mono">
                {[
                  "Limited context across fragmented silos",
                  "Brittle workflows break when schemas drift",
                  "Manual exception handling requires dev firefights",
                  "Static if/else logic with zero reasoning",
                  "Poor visibility into mid-flight state",
                ].map((p) => (
                  <div key={p} className="flex items-center gap-2 text-red-400/80">
                    <X className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ashmyra */}
            <div className="p-7 sm:p-9 rounded-3xl bg-emerald-950/20 border border-emerald-500/30">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">Ashmyra Automation</span>
              </div>
              <div className="font-mono text-xs text-neutral-300 space-y-1.5 mb-6 p-4 rounded-xl bg-black/50 border border-emerald-500/20">
                {["Event", "→ Context Gathering", "→ AI / Business Rules", "→ Decision Formulation", "→ System Action", "→ Verification Check", "→ Automatic Recovery", "→ Human Approval Gate", "→ Verified Outcome"].map(
                  (s) => (
                    <div key={s} className={s.startsWith("→") ? "pl-3 text-emerald-400/80" : "text-white font-bold"}>
                      {s}
                    </div>
                  )
                )}
              </div>
              <div className="space-y-2.5 text-xs font-mono">
                {[
                  "Rich context gathered before any action triggers",
                  "Deterministic policies blended with AI reasoning",
                  "Automated backoff retries & dead-letter isolation",
                  "Human approval gates on sensitive or high-value tasks",
                  "100% auditable execution logs with step payloads",
                ].map((p) => (
                  <div key={p} className="flex items-center gap-2 text-emerald-300/90">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            06. THE ASHMYRA AUTOMATION ENGINE: 5 LAYERS
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2 font-semibold">
              Full Stack Orchestration
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              One Engine. Every Workflow.
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-2xl mx-auto">
              Five coordinated architectural layers working together from ingestion to governance.
            </p>
          </div>

          <div className="space-y-3">
            <LayerRow
              n="01"
              title="EVENT LAYER"
              accent="border-amber-500/40 text-amber-400 bg-amber-500/10"
              items={["Webhooks", "Schedules (Cron)", "API Events", "Database Changes", "Forms", "System Events"]}
            />
            <div className="flex justify-center py-1">
              <div className="w-px h-5 bg-gradient-to-b from-amber-500/30 to-indigo-500/30" />
            </div>
            <LayerRow
              n="02"
              title="CONTEXT LAYER"
              accent="border-indigo-500/40 text-indigo-400 bg-indigo-500/10"
              items={["Data Feeds", "Documents & PDFs", "Workflow State", "Customer History", "Business Context"]}
            />
            <div className="flex justify-center py-1">
              <div className="w-px h-5 bg-gradient-to-b from-indigo-500/30 to-purple-500/30" />
            </div>
            <LayerRow
              n="03"
              title="INTELLIGENCE LAYER"
              accent="border-purple-500/40 text-purple-400 bg-purple-500/10"
              items={["AI Agents", "Deterministic Rules", "Conditions", "Classification", "Scoring", "Decision Logic"]}
            />
            <div className="flex justify-center py-1">
              <div className="w-px h-5 bg-gradient-to-b from-purple-500/30 to-emerald-500/30" />
            </div>
            <LayerRow
              n="04"
              title="EXECUTION LAYER"
              accent="border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
              items={["REST / GraphQL APIs", "Databases", "CRM / ERP", "Email / SMS", "Messaging", "Internal Systems", "Custom Code"]}
            />
            <div className="flex justify-center py-1">
              <div className="w-px h-5 bg-gradient-to-b from-emerald-500/30 to-sky-500/30" />
            </div>
            <LayerRow
              n="05"
              title="CONTROL LAYER"
              accent="border-sky-500/40 text-sky-400 bg-sky-500/10"
              items={["Human Approvals", "Retries & Backoff", "Queues", "Audit Logs", "Monitoring", "Alerts & Escalations"]}
            />
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            07. AI AGENT ORCHESTRATION
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2 font-semibold">
              Specialized Agent Intelligence
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Give Every Workflow an Intelligence Layer.
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-2xl mx-auto">
              Autonomous reasoning agents integrated directly into your workflow graph — handling everything from document extraction to self-healing retries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Bot,
                name: "Research Agent",
                role: "Finds and analyzes information from external data sources and online catalogs.",
                color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/25",
              },
              {
                icon: Database,
                name: "Data Agent",
                role: "Cleans, validates, normalizes, and enriches records against master schema rules.",
                color: "text-sky-400 bg-sky-500/10 border-sky-500/25",
              },
              {
                icon: FileText,
                name: "Document Agent",
                role: "Extracts structured metadata, line items, and tables from PDFs and scanned invoices.",
                color: "text-teal-400 bg-teal-500/10 border-teal-500/25",
              },
              {
                icon: GitBranch,
                name: "Decision Agent",
                role: "Evaluates multi-variable policy conditions and recommends execution pathways.",
                color: "text-purple-400 bg-purple-500/10 border-purple-500/25",
              },
              {
                icon: Mail,
                name: "Communication Agent",
                role: "Generates personalized, context-aware messages and routes customer notifications.",
                color: "text-amber-400 bg-amber-500/10 border-amber-500/25",
              },
              {
                icon: Eye,
                name: "Monitoring Agent",
                role: "Watches end-to-end execution, detecting anomalies, latency spikes, and schema drift.",
                color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
              },
              {
                icon: RefreshCw,
                name: "Recovery Agent",
                role: "Handles downstream failures: retries, dead-letter routing, and human escalation.",
                color: "text-orange-400 bg-orange-500/10 border-orange-500/25",
              },
              {
                icon: ShieldCheck,
                name: "Compliance Agent",
                role: "Audits every step against regulatory mandates, data retention, and privacy constraints.",
                color: "text-rose-400 bg-rose-500/10 border-rose-500/25",
              },
            ].map((agent) => (
              <div
                key={agent.name}
                className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-500/30 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${agent.color}`}>
                    <agent.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{agent.name}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{agent.role}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.05] text-[10px] font-mono text-neutral-500 flex items-center justify-between">
                  <span>Architecture Module</span>
                  <span className="text-amber-400 font-bold">READY</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            08. VISUAL WORKFLOW CANVAS & EXECUTION STATES
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2 font-semibold">
              Visual Canvas Studio
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Build the Workflow. See the Logic. Control the Execution.
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-2xl mx-auto">
              Click any node in the graph below to inspect its exact inputs, process logic, outputs, and live execution status.
            </p>
          </div>

          <WorkflowCanvasShowcase />
        </div>

        {/* ══════════════════════════════════════════════════════════════
            09. HUMAN-IN-THE-LOOP APPROVAL GATES
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-fuchsia-400 block mb-2 font-semibold">
              Deterministic Guardrails
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Autonomous When It Can Be.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-300">
                Human When It Should Be.
              </span>
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-2xl mx-auto">
              Automate routine actions with high confidence. When transactions exceed risk thresholds or policies require sign-off, Ashmyra halts the execution for human approval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Autonomous side */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase text-emerald-400 font-bold">Confidence ≥ 90%</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 text-[10px] font-mono border border-emerald-500/20">
                    AUTOMATIC DISPATCH
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Zero-Touch Fast Path</h3>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  Decisions that satisfy verified risk thresholds execute instantly without delaying the business.
                </p>

                <div className="space-y-3 font-mono text-xs">
                  {[
                    { s: "AI Decision Generated", c: "text-indigo-300" },
                    { s: "Confidence Score: 96%", c: "text-white font-bold" },
                    { s: "Policy Check: Risk Score < 15 (PASSED)", c: "text-emerald-400" },
                    { s: "ERP / CRM Mutation Executed", c: "text-emerald-400" },
                    { s: "Immutable Audit Log Written", c: "text-emerald-400" },
                  ].map((r) => (
                    <div key={r.s} className={`${r.c} flex items-center gap-2.5 p-2 rounded-lg bg-black/40 border border-white/[0.03]`}>
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{r.s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Human Gate side */}
            <div className="p-7 sm:p-8 rounded-3xl bg-fuchsia-950/20 border border-fuchsia-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase text-fuchsia-400 font-bold">Confidence &lt; 80% or High Stakes</span>
                  <span className="px-2 py-0.5 rounded-full bg-fuchsia-500/10 text-fuchsia-300 text-[10px] font-mono border border-fuchsia-500/25">
                    APPROVAL GATE ACTIVE
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Human Sign-Off Interface</h3>
                <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                  The engine pauses downstream mutations and presents complete contextual telemetry to the decision-maker.
                </p>

                {/* Simulated UI card */}
                <div className="p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-fuchsia-300 font-bold text-xs uppercase">Approval Required</span>
                    <span className="text-neutral-500 text-[10px]">#WF-CREDIT-9402</span>
                  </div>
                  <div className="text-white font-bold">Customer Credit Expansion Request</div>
                  <div className="flex justify-between text-neutral-400 text-[11px]">
                    <span>Requested Limit:</span>
                    <span className="text-white font-bold">₹5,00,000</span>
                  </div>
                  <div className="border-t border-white/[0.06] pt-3 text-[11px]">
                    <div className="text-fuchsia-300 font-bold mb-1">AI Recommendation: APPROVE</div>
                    <ul className="text-neutral-400 space-y-0.5">
                      <li>• Customer identity &amp; GST verified</li>
                      <li>• 0 duplicate tax entities found</li>
                      <li>• Risk score: LOW (Historical compliance 99%)</li>
                      <li>• Cash flow velocity within safe bounds</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold transition-colors">
                      APPROVE
                    </button>
                    <button className="px-4 py-1.5 rounded-lg bg-red-600/60 hover:bg-red-600 text-white text-[11px] transition-colors">
                      REJECT
                    </button>
                    <button className="px-4 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-neutral-300 text-[11px] border border-white/10 transition-colors">
                      REVIEW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            10. DOCUMENT INTELLIGENCE
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-start gap-10">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 mb-4">
                  <FileText className="w-3 h-3 text-amber-400" />
                  <span>Unstructured Ingestion</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  Documents In. Structured Actions Out.
                </h2>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  PDF invoices, signed contracts, delivery slips, and vendor quotes are ingested, verified, and mapped into relational ERP fields with zero human data entry.
                </p>

                {/* Processing Flow */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
                  {["PDF", "OCR", "AI Extraction", "Validation", "Business Rules", "ERP / CRM", "Action"].map((s, i, arr) => (
                    <React.Fragment key={s}>
                      <span className={i === arr.length - 1 ? "text-amber-400 font-bold" : ""}>{s}</span>
                      {i < arr.length - 1 && <span className="text-neutral-700">→</span>}
                    </React.Fragment>
                  ))}
                </div>

                <div className="space-y-2 text-xs font-mono text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Optical extraction handles rotated, multi-page &amp; skewed scans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>3-way line item reconciliation against active purchase orders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Instant export to SQL, Tally, SAP, Oracle, and Postgres</span>
                  </div>
                </div>
              </div>

              {/* Sample Document Extraction Card */}
              <div className="lg:w-1/2 p-6 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-4">
                <div className="text-[10px] uppercase text-neutral-500 tracking-wider">
                  SIMULATED EXTRACTION — PRODUCT PREVIEW
                </div>

                <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] space-y-2.5">
                  <div className="text-amber-300 font-bold text-sm">INVOICE OCR SUMMARY</div>
                  {[
                    ["Vendor Name", "ABC Logistics Pvt. Ltd."],
                    ["Invoice Number", "INV-28491"],
                    ["Amount Payable", "₹4,82,500"],
                    ["Invoice Date", "07 OCT 2026"],
                    ["GST / Tax Code", "27AAACB1234F1ZX"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-neutral-500">{k}:</span>
                      <span className="text-white font-bold">{v}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {[
                    "Vendor identity verified in Master Supplier Registry",
                    "Invoice amount within quarterly budget threshold",
                    "Duplicate invoice checksum check — 0 matches",
                    "GST reconciliation against government portal — passed",
                  ].map((msg) => (
                    <div key={msg} className="flex items-center gap-2 text-emerald-400 text-[11px]">
                      <Check className="w-3 h-3 flex-shrink-0" />
                      <span>{msg}</span>
                    </div>
                  ))}

                  <div className="mt-3 pt-3 border-t border-white/[0.06] text-amber-300 font-bold flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>CREATE PAYABLE: ERP TASK DISPATCHED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            11. RESILIENCE: BUILT FOR WHEN REAL SYSTEMS FAIL
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-orange-950/20 via-neutral-900/30 to-black border border-orange-500/20">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-start gap-10">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-mono text-orange-300 mb-4">
                  <RefreshCw className="w-3 h-3 text-orange-400" />
                  <span>Fault Isolation &amp; Recovery</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  Built for When Real Systems Fail.
                </h2>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  External APIs timeout, third-party webhooks drop packets, and payment gateways return HTTP 503s. Ashmyra isolates failures so they never crash downstream operations.
                </p>

                <div className="space-y-2 text-xs font-mono text-neutral-300">
                  {[
                    "Configurable retry count with exponential backoff",
                    "Queue-based processing buffers burst traffic",
                    "Dead-letter queues isolate poisoned messages",
                    "Automatic fallback endpoints when primary APIs degrade",
                    "Real-time engineer paging for unrecoverable errors",
                    "Resumption from last saved state checkpoint",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 font-mono text-xs">
                <div className="text-[10px] uppercase text-neutral-500 mb-3 tracking-wider">
                  FAILURE &amp; RETRY VISUALIZATION — SIMULATED RUN
                </div>
                <div className="space-y-2 p-5 rounded-2xl bg-black/60 border border-white/[0.08]">
                  {[
                    { step: "API REQUEST (Downstream Provider)", color: "text-white" },
                    { step: "↓", color: "text-neutral-600" },
                    { step: "HTTP 503: Service Temporarily Unavailable", color: "text-red-400 font-bold" },
                    { step: "↓ RETRY 01 (1,000ms backoff)", color: "text-orange-400" },
                    { step: "↓ RETRY 02 (2,000ms backoff)", color: "text-orange-400" },
                    { step: "↓ RETRY 03 (4,000ms exponential delay)", color: "text-orange-400" },
                    { step: "FALLBACK SECONDARY GATEWAY ACTIVATED", color: "text-amber-300 font-bold" },
                    { step: "INCIDENT ALERT → Paged DevOps On-Call", color: "text-sky-400" },
                    { step: "WORKFLOW RESUMED & TRANSACTION COMMITTED", color: "text-emerald-400 font-bold" },
                  ].map((r, i) => (
                    <div key={i} className={`${r.color} flex items-center gap-2 ${r.step.startsWith("↓") ? "pl-4" : ""}`}>
                      {r.step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            12. OBSERVABILITY CENTER
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 block mb-2 font-semibold">
              Operational Telemetry
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              See Every Workflow. Every Event. Every Decision.
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-2xl mx-auto">
              Inspect step-by-step payloads, execution durations, latency milestones, and retry traces in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Status Counters */}
            <div className="lg:col-span-2 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <div className="text-xs font-mono uppercase text-neutral-400 mb-4 tracking-wider">
                PIPELINE STATE SUMMARY
              </div>
              {[
                { label: "Running", count: "4", color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30" },
                { label: "Completed", count: "1,284", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" },
                { label: "Waiting (Approval)", count: "2", color: "text-amber-400 bg-amber-500/10 border-amber-500/30" },
                { label: "Failed", count: "0", color: "text-red-400 bg-red-500/10 border-red-500/30" },
                { label: "Retrying", count: "1", color: "text-orange-400 bg-orange-500/10 border-orange-500/30" },
              ].map((s) => (
                <div key={s.label} className={`flex items-center justify-between px-4 py-2.5 rounded-xl border ${s.color}`}>
                  <span className="text-xs font-mono text-neutral-300">{s.label}</span>
                  <span className="text-sm font-bold font-mono">{s.count}</span>
                </div>
              ))}
            </div>

            {/* Execution Stream */}
            <div className="lg:col-span-3 p-6 rounded-3xl bg-black/60 border border-white/[0.07] font-mono text-xs">
              <div className="text-[10px] uppercase text-neutral-500 mb-4 tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Execution Stream — SIMULATED WORKFLOW
              </div>
              <div className="space-y-2.5 text-[11px]">
                {[
                  { time: "10:42:01", msg: "Lead received via Webhook — Inbound Enterprise Form", level: "info" },
                  { time: "10:42:02", msg: "AI classification complete — Tier: Strategic Account (Score 94)", level: "ai" },
                  { time: "10:42:03", msg: "CRM entity updated — Golden record deduplicated", level: "success" },
                  { time: "10:42:04", msg: "Sales executive task created — Dedicated SDR notified", level: "success" },
                  { time: "10:42:05", msg: "Workflow completed in 4.1s — 0 exceptions recorded", level: "success" },
                ].map((log, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-neutral-600 flex-shrink-0">{log.time}</span>
                    <span
                      className={
                        log.level === "success"
                          ? "text-emerald-400"
                          : log.level === "ai"
                          ? "text-indigo-300"
                          : "text-neutral-400"
                      }
                    >
                      {log.msg}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            13. REAL BUSINESS AUTOMATION EXAMPLES (BLUEPRINTS)
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2 font-semibold">
              Cross-Functional Blueprints
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Real Business Automation Blueprints
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-2xl mx-auto">
              Select an operational domain below to inspect its exact trigger-to-outcome pipeline.
            </p>
          </div>

          <AutomationBlueprints />
        </div>

        {/* ══════════════════════════════════════════════════════════════
            14. CONNECT THIS PAGE TO ASHMYRA ANALYTICS
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/20 via-indigo-950/20 to-neutral-900/40 border border-purple-500/25">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-400 block mb-2 font-semibold">
              Unified Enterprise Data Engine
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Better Data. Smarter Automation. Better Outcomes.
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-xl mx-auto">
              Ashmyra Automation acts as the high-speed execution layer on top of Ashmyra&apos;s Data Intelligence Platform — converting clean records directly into revenue-generating workflows.
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="flex items-center gap-0 min-w-[720px] justify-center">
              {[
                { label: "DATA DISCOVERY", color: "text-purple-400" },
                { label: "CLEANING", color: "text-indigo-400" },
                { label: "ENRICHMENT", color: "text-sky-400" },
                { label: "LEAD SCORING", color: "text-amber-400" },
                { label: "AUTOMATION", color: "text-orange-400" },
                { label: "CALLING", color: "text-emerald-400" },
                { label: "SALES", color: "text-teal-400" },
                { label: "REVENUE", color: "text-rose-400" },
              ].map((s, i, arr) => (
                <React.Fragment key={s.label}>
                  <div className={`text-[10px] font-mono font-bold ${s.color} px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/[0.05] text-center`}>
                    {s.label}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="text-neutral-600 font-mono text-xs px-1">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/products/analytics"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600/25 hover:bg-purple-600/40 text-purple-200 hover:text-white border border-purple-500/35 text-sm font-semibold transition-all hover:scale-105"
            >
              <span>Explore Data &amp; Analytics →</span>
            </Link>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            15. ASHMYRA PRODUCT ECOSYSTEM
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2 font-semibold">
              The Architecture Ecosystem
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              The Ashmyra Intelligence Core
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-xl mx-auto">
              Our 4 core technology pillars form a continuous operating system for modern business.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950/50 border border-white/[0.08] relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                {
                  title: "AGENTIC AI",
                  desc: "Reasoning and autonomous agent swarms that analyze market trends and execute creative tasks.",
                  color: "border-purple-500/30 text-purple-300",
                },
                {
                  title: "AUTOMATION",
                  desc: "Resilient workflow orchestration, webhooks, and deterministic approval gates.",
                  color: "border-amber-500/30 text-amber-300",
                },
                {
                  title: "DATA & ANALYTICS",
                  desc: "Multi-layer deduplication, golden record synthesis, and automated lead scoring.",
                  color: "border-sky-500/30 text-sky-300",
                },
                {
                  title: "ENTERPRISE SaaS",
                  desc: "Modern operational systems (HRMS, CRM, Project Management) with zero code debt.",
                  color: "border-emerald-500/30 text-emerald-300",
                },
              ].map((p) => (
                <div key={p.title} className={`p-6 rounded-2xl bg-black/40 border ${p.color} flex flex-col justify-between`}>
                  <div>
                    <h3 className="text-sm font-bold font-mono text-white mb-2">{p.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/[0.05] text-[10px] font-mono text-neutral-500">
                    ECOSYSTEM PILLAR
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] text-center font-mono text-xs text-neutral-400">
              DATA <span className="text-amber-400">→</span> INTELLIGENCE <span className="text-amber-400">→</span> AUTOMATION <span className="text-amber-400">→</span> ACTION
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            16. INTEGRATIONS GROUPED BY CAPABILITY
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2 font-semibold">
              Connector Mesh
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Connect Every Tool in Your Tech Stack
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-xl mx-auto">
              Realistic connectors organized by technical capability — integrating your databases, APIs, ERPs, and AI endpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                cat: "APIs & Webhooks",
                items: ["REST Endpoints", "GraphQL Queries", "Inbound Webhooks", "Outbound Event Emitters", "Custom HTTP"],
                color: "text-amber-400 bg-amber-500/10 border-amber-500/25",
              },
              {
                icon: Database,
                cat: "Data Stores",
                items: ["PostgreSQL & MySQL", "MongoDB & NoSQL", "Snowflake & BigQuery", "Redis Cache", "Vector Stores"],
                color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/25",
              },
              {
                icon: Building2,
                cat: "Business Systems",
                items: ["Salesforce & HubSpot", "SAP & NetSuite", "Workday & BambooHR", "Ashmyra CRM & HRMS", "Stripe & Razorpay"],
                color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
              },
              {
                icon: Mail,
                cat: "Communication",
                items: ["SMTP & Resend", "Slack & Discord", "WhatsApp Business API", "Twilio SMS", "In-App Push"],
                color: "text-sky-400 bg-sky-500/10 border-sky-500/25",
              },
              {
                icon: FileText,
                cat: "Files & Documents",
                items: ["PDF Invoices & Receipts", "CSV & Excel Feeds", "JSON & XML Schemas", "Google Drive & S3", "Scanned Documents"],
                color: "text-teal-400 bg-teal-500/10 border-teal-500/25",
              },
              {
                icon: Bot,
                cat: "AI Models & Reasoning",
                items: ["OpenAI & Anthropic APIs", "Google Gemini Models", "Local Llama / vLLM", "Embedding Pipelines", "Custom Fine-Tunes"],
                color: "text-purple-400 bg-purple-500/10 border-purple-500/25",
              },
            ].map((grp) => (
              <div
                key={grp.cat}
                className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${grp.color}`}>
                    <grp.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-3">{grp.cat}</h3>
                  <ul className="space-y-1.5 font-mono text-xs text-neutral-400">
                    {grp.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            17. DEVELOPER EXPERIENCE
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2 font-semibold">
              Built For Cross-Functional Teams
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Visual for Operators. Programmable for Engineers.
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-2xl mx-auto">
              Empower non-technical operators to build and monitor workflows, while granting engineers full freedom to embed custom code and APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-4">
              <div className="text-xs font-mono uppercase text-amber-400 font-bold">FOR OPERATORS &amp; BUSINESS TEAMS</div>
              <div className="space-y-3">
                {[
                  { icon: Layers, label: "Visual drag-and-drop canvas with live connection routing" },
                  { icon: GitBranch, label: "Condition builders using natural language logic" },
                  { icon: Users, label: "Customizable human approval policies with SLA reminders" },
                  { icon: Eye, label: "Real-time execution dashboard and latency alerts" },
                  { icon: RefreshCw, label: "Configurable retry backoffs with zero code changes" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-3 text-xs text-neutral-300">
                    <f.icon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-4">
              <div className="text-xs font-mono uppercase text-indigo-400 font-bold">FOR ENGINEERS &amp; DEVELOPERS</div>
              <div className="space-y-3">
                {[
                  { icon: Webhook, label: "Inbound and outbound webhook triggers with secret verification" },
                  { icon: Code, label: "Serverless JavaScript & Python script execution nodes" },
                  { icon: Database, label: "Direct transactional SQL/NoSQL read and write nodes" },
                  { icon: Lock, label: "AES-256 encrypted credential and secrets manager" },
                  { icon: Activity, label: "Full JSON step payloads and error stack traces in logs" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-3 text-xs text-neutral-300">
                    <f.icon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            18. SECURITY, GOVERNANCE & CONTROL
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-teal-400 block mb-2 font-semibold">
              Security &amp; Governance
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Deterministic Guardrails. Complete Auditability.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Lock, label: "Role-Based Access Control", desc: "Fine-grained permissions for workflow authors, operators, and auditors." },
              { icon: Eye, label: "Complete Execution History", desc: "Every execution is preserved with immutable step payloads and durations." },
              { icon: ShieldCheck, label: "Approval Gates", desc: "Enforce multi-party sign-offs on high-value transactions." },
              { icon: Lock, label: "Secrets Management", desc: "API credentials and tokens are encrypted at rest with AES-256." },
              { icon: Activity, label: "Audit Trails", desc: "Tamper-evident logs of every configuration change and approval." },
              { icon: AlertTriangle, label: "Failure Isolation", desc: "Errors in one task never corrupt adjoining workflows." },
            ].map((f) => (
              <div
                key={f.label}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-teal-500/25 transition-all"
              >
                <f.icon className="w-4.5 h-4.5 text-teal-400 mb-3" />
                <h3 className="text-sm font-bold text-white mb-1">{f.label}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            19. AUTOMATION ANALYTICS: IF YOU CAN'T SEE IT, YOU CAN'T IMPROVE IT
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-neutral-950/60 border border-white/[0.08]">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2 font-semibold">
              Continuous Optimization
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              If You Can&apos;t See It, You Can&apos;t Improve It.
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-xl mx-auto">
              Every workflow execution feeds our operational telemetry engine, uncovering bottlenecks before they impact your business.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-center">
            {[
              { label: "Execution Volume", val: "1.4M / mo", sub: "Automated Events" },
              { label: "Step Success Rate", val: "99.9%", sub: "Deterministic Flow" },
              { label: "Avg Run Duration", val: "420ms", sub: "End-to-End Latency" },
              { label: "Auto Retries Handled", val: "100%", sub: "0 Silent Failures" },
            ].map((m) => (
              <div key={m.label} className="p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
                <div className="text-lg sm:text-2xl font-bold text-amber-400 mb-1">{m.val}</div>
                <div className="text-xs text-white font-bold mb-0.5">{m.label}</div>
                <div className="text-[10px] text-neutral-500">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            20. FREELANCER DELIVERY PROOF BANNER
        ══════════════════════════════════════════════════════════════ */}
        <div className="my-16">
          <FreelancerTrustBanner category="Workflow Automation &amp; API Integration Engineering" />
        </div>

        {/* ══════════════════════════════════════════════════════════════
            21. CINEMATIC "ONE AUTOMATION" STORY
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-black to-neutral-950/60 border border-white/[0.07]">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2 font-semibold">
              Live Walkthrough Scenario
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Watch a Business Process Run Itself.
            </h2>
            <p className="mt-2 text-xs font-mono text-neutral-500 uppercase tracking-wider">
              Product Preview · New Customer Onboarding Flow
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-0">
            {[
              { n: "01", step: "Customer submits onboarding form on website", note: "Event captured via webhook" },
              { n: "02", step: "Data enters Ashmyra Automation Engine", note: "Context engine hydrated" },
              { n: "03", step: "AI validates information and checks completeness", note: "Data quality score: 98/100" },
              { n: "04", step: "Documents and business tax IDs extracted via OCR", note: "GST & PAN validated" },
              { n: "05", step: "Duplicate entity check executed across all CRM tables", note: "Zero duplicates found" },
              { n: "06", step: "Customer risk and credit threshold evaluated", note: "Risk profile: LOW" },
              { n: "07", step: "Master CRM record created with golden attributes", note: "Account ID: ACC-94821" },
              { n: "08", step: "Personalized welcome email generated & sent", note: "Message delivered in 1.2s" },
              { n: "09", step: "Internal task assigned to dedicated Account Manager", note: "Priority: HIGH" },
              { n: "10", step: "Management team notified in Slack VIP channel", note: "Notification broadcasted" },
              { n: "11", step: "Workflow completes and immutable audit record sealed", note: "Duration: 8.4s · 0 errors" },
            ].map((r, i) => (
              <div key={r.n} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full border border-amber-500/40 bg-amber-500/10 flex items-center justify-center text-[10px] font-mono font-bold text-amber-400 flex-shrink-0">
                    {r.n}
                  </div>
                  {i < 10 && <div className="w-px flex-1 bg-gradient-to-b from-amber-500/20 to-transparent my-1 min-h-[24px]" />}
                </div>
                <div className="pb-5 flex-1">
                  <div className="text-sm text-white font-medium leading-snug">{r.step}</div>
                  <div className="text-[11px] font-mono text-amber-400/80 mt-0.5">{r.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            22. FINAL POSITIONING
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-xs font-mono uppercase text-neutral-500 tracking-wider mb-4">The Ashmyra Vision</p>
          <p className="text-lg sm:text-2xl font-semibold text-neutral-200 italic leading-relaxed">
            &ldquo;Automation is no longer about connecting apps.
            <br />
            It&apos;s about connecting intelligence to execution.&rdquo;
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-sm">
            {["DATA", "+", "AI", "+", "SYSTEMS", "+", "PEOPLE"].map((s, i) => (
              <span
                key={i}
                className={
                  s === "+"
                    ? "text-neutral-600"
                    : "px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white font-bold"
                }
              >
                {s}
              </span>
            ))}
            <span className="text-neutral-600 font-mono">→</span>
            <span className="px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold">ACTION</span>
            <span className="text-neutral-600 font-mono">→</span>
            <span className="px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold">BUSINESS OUTCOME</span>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            23. FINAL CTA
        ══════════════════════════════════════════════════════════════ */}
        <div className="text-center p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-amber-950/25 via-orange-950/20 to-neutral-900/40 border border-amber-500/30">
          <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            Bring Us the Process That Slows You Down.
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            We&apos;ll engineer the automation system that turns it into a measurable, resilient and intelligent workflow.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=design-automation"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold text-sm shadow-xl shadow-amber-500/30 transition-all hover:scale-105"
            >
              <span>Design My Automation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact?intent=automation-demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm border border-white/10 hover:border-amber-500/30 transition-all"
            >
              Request a Live Demo
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
