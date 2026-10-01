import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Bot, 
  Terminal, 
  Network 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Agentic AI & Machine Learning Engineering Services",
  description:
    "Architecting autonomous AI agents, enterprise RAG pipelines, fine-tuned domain models, and intelligent business automations.",
  alternates: {
    canonical: "https://ashmyra.com/services/ai-development",
  },
};

export default function AiDevelopmentServicePage() {
  const service = SERVICES.find((s) => s.slug === "ai-development")!;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs text-purple-300 font-mono mb-6">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Agentic Systems &amp; Cognitive Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Agentic AI &amp; Machine Learning
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-sky-300 to-purple-200">
              Systems Built for Real Business.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            {service.longDesc}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=agentic-ai-eng"
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-lg shadow-purple-600/30 transition-all"
            >
              Consult with AI Systems Engineers
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="glass-panel rounded-3xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">Specialized AI Deliverables</h2>
            <div className="space-y-3">
              {service.deliverables.map((del, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-300">{del}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">AI Ecosystem &amp; Frameworks</h2>
            <div className="grid grid-cols-2 gap-3">
              {service.technologies.map((tech, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <span className="text-xs font-mono font-bold text-purple-300">{tech}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed pt-2">
              All agentic deployments include deterministic verification guardrails and role-based human signoff mechanisms for mission-critical reliability.
            </p>
          </div>
        </div>

        <div className="text-center p-10 rounded-3xl bg-purple-950/20 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-2">
            Ready to integrate autonomous reasoning into your workflows?
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Schedule an AI architecture discussion with our engineering team.
          </p>
          <Link
            href="/contact?intent=ai-systems"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-lg shadow-purple-600/30 transition-all"
          >
            <span>Discuss Agentic Automation Scope</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
