import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
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
  Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra AI | Autonomous Agentic Orchestration & AI Workers",
  description:
    "Ashmyra AI coordinates specialized autonomous agents equipped with custom API tools and deterministic validation to execute mission-critical enterprise workflows.",
  alternates: {
    canonical: "https://ashmyra.com/products/ai",
  },
};

export default function AshmyraAiPage() {
  const product = PRODUCTS.find((p) => p.id === "ai")!;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono mb-6">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Agentic AI Core Operating System</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Software That Doesn&apos;t Just Execute.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">
              It Thinks, Acts and Learns.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ashmyra AI transforms static software into proactive, reasoning systems. Using state-of-the-art multi-agent orchestration, it coordinates specialized autonomous workers with deterministic safety guardrails.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=ai-demo"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all"
            >
              Deploy Ashmyra AI in Your Stack
            </Link>
            <Link
              href="/resources/agentic-ai-vs-chatbots"
              className="px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-neutral-200 text-xs border border-white/[0.08] transition-all"
            >
              Read Agentic AI Whitepaper
            </Link>
          </div>
        </div>

        {/* Architecture Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-2">
              System Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              The 4 Pillars of Ashmyra AI Orchestration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.modules?.map((mod, i) => (
              <div
                key={i}
                className="glass-panel rounded-3xl p-7 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 font-mono font-bold text-sm">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{mod.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/[0.05] flex items-center gap-2 text-[11px] font-mono text-indigo-300">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Deterministic Policy Verification
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Step Workflow Pipeline */}
        <div className="bg-[#090d16] border border-white/[0.08] rounded-3xl p-8 sm:p-12 mb-20">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
              Execution Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              How Ashmyra Agents Complete Complex Goals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {product.workflowSteps.map((ws) => (
              <div
                key={ws.step}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 mb-3 inline-block">
                    {ws.step}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2">{ws.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">{ws.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Specs & Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Built for Enterprise Security &amp; Zero Hallucinations
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Autonomous execution requires more than just statistical next-token prediction. Ashmyra embeds sandboxed tool runtime environments with strict role-based controls and rollback mechanisms.
            </p>

            <div className="space-y-3">
              {product.keyCapabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-200">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#07090e] border border-white/[0.08] font-mono text-xs text-neutral-300 space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-neutral-500">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                agent_orchestrator.ts
              </span>
              <span>v3.4-prod</span>
            </div>
            <pre className="text-indigo-300 overflow-x-auto">
{`const orchestrator = new AshmyraAgentCore({
  pipelineId: "supply-chain-resolution",
  verificationPolicy: "strict-human-gate",
  maxSubagentRecursion: 4,
  telemetryStream: true
});

await orchestrator.executeWorkflow({
  goal: "Reconcile vendor invoices and flag variance > 5%",
  tools: [OcrReader, ErpConnector, TaxValidator],
  approvalThresholdUSD: 5000
});`}
            </pre>
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400">
              <span>Status: State Synchronized</span>
              <span className="text-emerald-400 font-bold">Passing All Security Tests</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-10 rounded-3xl bg-indigo-950/20 border border-indigo-500/30">
          <h3 className="text-2xl font-bold text-white mb-2">
            Ready to deploy autonomous AI agents in your operations?
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Consult with our AI architects to evaluate workflows suitable for agentic automation with deterministic reliability.
          </p>
          <Link
            href="/contact?intent=ai"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all"
          >
            <span>Schedule Technical Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
