import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Workflow, 
  FileCheck, 
  Clock, 
  ShieldCheck,
  Webhook,
  SlidersHorizontal,
  Bot
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra Automation | Business Workflow & Process Automation",
  description:
    "Low-latency workflow automation platform: visual drag-and-drop logic builder, AI document processing, webhooks, and human approval gates.",
  alternates: {
    canonical: "https://ashmyra.com/products/automation",
  },
};

export default function AshmyraAutomationPage() {
  const product = PRODUCTS.find((p) => p.id === "automation")!;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs text-amber-300 font-mono mb-6">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Resilient Workflow Orchestration</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Turn Manual Operations Into
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-sky-300 to-amber-200">
              Automated, Reliable Workflows.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ashmyra Automation bridges disconnected SaaS platforms and databases. Build resilient logic-driven pipelines with scheduled triggers, document extraction, conditional routing, and human-in-the-loop approvals.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=automation-demo"
              className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs shadow-lg shadow-amber-600/30 transition-all"
            >
              Explore Automation Workflows
            </Link>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {product.keyCapabilities.map((cap, i) => (
            <div key={i} className="glass-panel rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 block mb-2">0{i + 1}</span>
                <h3 className="text-base font-bold text-white mb-2">{cap}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Engineered with sub-200ms execution latency and automatic retry buffers to handle mission-critical corporate throughput.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-10 rounded-3xl bg-amber-950/20 border border-amber-500/30">
          <h3 className="text-2xl font-bold text-white mb-2">
            Ready to eliminate repetitive administrative manual work?
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Our automation architects will map your current business processes and demonstrate an automated blueprint.
          </p>
          <Link
            href="/contact?intent=automation"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs shadow-lg shadow-amber-600/30 transition-all"
          >
            <span>Book Automation Scoping Session</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
