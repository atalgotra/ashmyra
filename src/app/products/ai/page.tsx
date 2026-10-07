import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductWowPreview } from "@/components/product-wow-preview";
import { FreelancerTrustBanner } from "@/components/freelancer-trust-banner";
import { 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Terminal, 
  Workflow, 
  Database,
  Lock,
  Zap,
  Activity,
  Layers,
  ArrowUpRight,
  TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra AI | Autonomous Agentic Orchestration & Enterprise AI Workers",
  description:
    "Software that doesn't just execute — it thinks, acts, and learns. Ashmyra AI coordinates specialized autonomous agent swarms with custom API toolsets, deterministic guardrails, and enterprise memory.",
  keywords: [
    "Ashmyra AI",
    "Agentic AI Core",
    "Autonomous Agent Swarms",
    "Enterprise AI Workers",
    "Deterministic Guardrails",
    "Multi-Agent Orchestration",
    "Tool-Calling AI Engine",
    "LLM Architecture India",
  ],
  openGraph: {
    title: "Ashmyra AI | Autonomous Agentic Orchestration",
    description:
      "Enterprise-grade agentic AI orchestration. Deploy specialized autonomous agents that handle complex multi-step workflows with deterministic safety guardrails.",
    url: "https://ashmyra.com/products/ai",
    images: [{ url: "/wow/wow1-social-intelligence.png", width: 1200, height: 675, alt: "Ashmyra AI Autonomous Architecture" }],
  },
  alternates: {
    canonical: "https://ashmyra.com/products/ai",
  },
};

export default function AshmyraAiPage() {
  const product = PRODUCTS.find((p) => p.id === "ai")!;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 01. Hero Header ────────────────────────────────────────── */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono mb-6">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Agentic AI Core Operating System · Enterprise Production Ready</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] font-sans">
            Software That Doesn&apos;t Just Execute.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">
              It Thinks, Acts and Learns.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ashmyra AI transforms static software into proactive, reasoning systems. Using state-of-the-art multi-agent orchestration, it coordinates specialized autonomous workers equipped with deterministic safety guardrails.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=ai-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Deploy Ashmyra AI in Your Stack
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources/agentic-ai-vs-chatbots"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-neutral-200 text-sm border border-white/[0.1] transition-all hover:scale-[1.02]"
            >
              Read Agentic AI Whitepaper
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </Link>
          </div>
        </div>

        {/* ── 02. WOW Visual Showcase ─────────────────────────────────── */}
        <ProductWowPreview
          imageSrc="/wow/wow1-social-intelligence.png"
          imageAlt="Ashmyra AI Multi-Agent Swarm Orchestrator"
          productName="Ashmyra AI Swarm Orchestrator"
          productTagline="Autonomous agents continuously analyzing signals, routing decisions, and invoking enterprise APIs in real time."
          accentColor="#818cf8"
          badgeText="Autonomous Multi-Agent Swarm Active"
          telemetry={[
            { label: "Deterministic Accuracy", value: "99.8%", detail: "Schema-checked execution with zero hallucination loops" },
            { label: "Tool Call Latency", value: "14ms", detail: "High-speed sandboxed API and database execution" },
            { label: "Autonomous Throughput", value: "24/7", detail: "Self-healing distributed agent workers" },
            { label: "Production Delivery", value: "100+", detail: "Enterprise systems deployed and running live" },
          ]}
          capabilities={[
            {
              title: "Autonomous Multi-Agent Swarms",
              description: "Coordinated micro-agents collaborate dynamically on multi-step workflows with strict delegation protocols.",
            },
            {
              title: "Sandboxed Tool-Calling Runtime",
              description: "Agents invoke internal APIs, read/write SQL queries, and trigger external webhooks safely within enforced policy bounds.",
            },
            {
              title: "Human-in-the-Loop Clearance",
              description: "High-stakes transactions (payments, user deletions, broadcasts) require one-click human verification before execution.",
            },
          ]}
        />

        {/* ── 03. Freelancer.com 100+ Delivery Proof Banner ─────────────── */}
        <div className="my-16">
          <FreelancerTrustBanner category="Agentic AI & Autonomous Systems" />
        </div>

        {/* ── 04. System Architecture Grid ────────────────────────────── */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-2 font-semibold">
              System Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              The 4 Pillars of Ashmyra AI Orchestration
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Engineered from the ground up for zero hallucinations and enterprise uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.modules?.map((mod, i) => (
              <div
                key={i}
                className="rounded-3xl p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-indigo-500/40 hover:bg-white/[0.04]"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-5 font-mono font-bold text-base shadow-inner">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{mod.title}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-indigo-300">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-indigo-400" />
                    Deterministic Policy Enforced
                  </span>
                  <span className="text-neutral-500">Live Layer</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 05. 5-Stage Execution Pipeline ───────────────────────────── */}
        <div className="mb-24 rounded-3xl p-8 sm:p-12 bg-white/[0.02] border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-2 font-semibold">
              Execution Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              From Goal Ingestion to Deterministic Production Action
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Every workflow step is audited, validated, and recorded with full telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {product.workflowSteps.map((s, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-black/40 border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-indigo-400 font-bold block mb-2">
                    STEP {s.step}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2">{s.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 06. Key Capabilities Check List ──────────────────────────── */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-2 font-semibold">
              Enterprise Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Production Capabilities Built for Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.keyCapabilities.map((cap, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex items-start gap-3.5 hover:bg-white/[0.04] transition-colors"
              >
                <div className="p-1 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5 flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm text-neutral-300 leading-snug">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 07. Final Bottom CTA ────────────────────────────────────── */}
        <div
          className="rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(30, 27, 75, 0.4))",
            border: "1px solid rgba(99, 102, 241, 0.3)",
          }}
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-300 block mb-3 font-semibold">
              Deploy Ashmyra AI
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to automate cognitive workflows with autonomous agents?
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed">
              Join enterprise teams who have scaled their operations without expanding headcount. Book an engineering consultation today.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact?intent=ai-demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
              >
                Schedule an Engineering Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold text-sm border border-white/10 transition-colors"
              >
                Contact Ashmyra Team
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
