import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Server, Key, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Security Architecture | Ashmyra",
  description: "Enterprise security architecture, data isolation, encryption standards, and agentic AI guardrails at Ashmyra.",
  alternates: {
    canonical: "https://ashmyra.com/legal/security",
  },
};

export default function SecurityPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#040508]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Ashmyra</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 font-mono text-xs w-max mb-4 border border-emerald-500/25">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Enterprise Defense &amp; Compliance</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Security Architecture
        </h1>
        <p className="text-xs text-neutral-500 font-mono mb-12">
          Document Version 2.4 &bull; Updated for Production Runtimes
        </p>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <Lock className="w-5 h-5 text-indigo-400 mb-2" />
            <div className="text-sm font-bold text-white mb-1">Zero-Trust Network</div>
            <p className="text-xs text-neutral-400">Strict perimeter separation, mutual TLS, and least-privilege token access.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <Key className="w-5 h-5 text-cyan-400 mb-2" />
            <div className="text-sm font-bold text-white mb-1">AES-256 &amp; TLS 1.3</div>
            <p className="text-xs text-neutral-400">End-to-end cryptographic encryption at rest and in transit across all systems.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <Eye className="w-5 h-5 text-purple-400 mb-2" />
            <div className="text-sm font-bold text-white mb-1">Agentic Guardrails</div>
            <p className="text-xs text-neutral-400">Deterministic schema validations and immutable audit trails for every AI step.</p>
          </div>
        </div>

        <div className="space-y-8 text-sm text-neutral-300 leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Multi-Tenant Data Isolation</h2>
            <p>
              Ashmyra enforces strict physical and logical isolation across all enterprise tenants. Customer data processed through autonomous agents or data intelligence layers is segregated at the runtime, cache, and database layers, preventing any cross-tenant data bleed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Model Safety &amp; Non-Retention</h2>
            <p>
              Customer data, proprietary prompt configurations, and enterprise documents passed into LLM pipelines are never retained for model training. API transactions leverage private zero-retention enterprise endpoints with SOC-2 compliant cloud partners.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Deterministic Execution &amp; Human-in-the-Loop</h2>
            <p>
              Autonomous swarms operate with deterministic boundaries. Any high-impact action (e.g. database schema migrations, financial transfers, external email broadcasts) requires configurable human authorization workflows before execution.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Incident Response &amp; SLA Commitment</h2>
            <p>
              Our infrastructure maintains automated health monitoring, distributed failovers, and 24/7 anomaly alerting with an enterprise target SLA of 99.99% uptime.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
