import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductWowPreview } from "@/components/product-wow-preview";
import { FreelancerTrustBanner } from "@/components/freelancer-trust-banner";
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
  Bot,
  MessageSquare
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra Automation | Enterprise Workflow Automation & Communication Engine",
  description:
    "Low-latency workflow automation platform: visual drag-and-drop logic builder, AI document processing, webhooks, intelligent workplace chat, and human approval gates.",
  keywords: [
    "Ashmyra Automation",
    "Workflow Orchestration",
    "Business Process Automation",
    "Enterprise Webhooks",
    "AI Document Processing",
    "Low-Code Logic Builder",
  ],
  openGraph: {
    title: "Ashmyra Automation | Enterprise Workflow Orchestration",
    description:
      "Turn manual business operations into resilient, automated pipelines with scheduled triggers and human approval gates.",
    url: "https://ashmyra.com/products/automation",
    images: [{ url: "/wow/wow6-workplace-communication.png", width: 1200, height: 675, alt: "Ashmyra Automation Platform Preview" }],
  },
  alternates: {
    canonical: "https://ashmyra.com/products/automation",
  },
};

export default function AshmyraAutomationPage() {
  const product = PRODUCTS.find((p) => p.id === "automation")!;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 01. Hero Header ────────────────────────────────────────── */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs text-amber-300 font-mono mb-6">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Resilient Workflow Orchestration &amp; Communication Engine</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Turn Manual Operations Into
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-300 to-amber-200">
              Automated, Reliable Workflows.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ashmyra Automation bridges disconnected SaaS platforms, internal databases, and team communication. Build resilient logic-driven pipelines with scheduled triggers, document extraction, conditional routing, and human-in-the-loop approvals.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=automation-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm shadow-xl shadow-amber-600/30 transition-all hover:scale-105 active:scale-95"
            >
              Explore Automation Workflows
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ── 02. WOW Visual Showcase ─────────────────────────────────── */}
        <ProductWowPreview
          imageSrc="/wow/wow6-workplace-communication.png"
          imageAlt="Ashmyra Automation & Workplace Communication Engine"
          productName="Ashmyra Automation & Workplace Mesh"
          productTagline="Intelligent chat, calling, in-stream task creation, and automated cross-tool event routing."
          accentColor="#fbbf24"
          badgeText="Event Routing Mesh Active"
          telemetry={[
            { label: "Trigger Dispatch Time", value: "<10ms", detail: "Immediate event-driven webhook propagation" },
            { label: "Execution Success Rate", value: "99.98%", detail: "Automated retry backoff & dead-letter queueing" },
            { label: "Manual Effort Reduced", value: "85%", detail: "Routine data-entry & routing completely eliminated" },
            { label: "Deliveries on Freelancer", value: "100+", detail: "Complex integrations shipped across all industries" },
          ]}
          capabilities={[
            {
              title: "Event-Driven Webhook Mesh",
              description: "Connects ERP, CRM, payment processors, and communication channels into a unified reactive event bus.",
            },
            {
              title: "AI Document & Invoice OCR",
              description: "Extracts key data from PDF invoices, contracts, and receipts and writes structured fields straight to SQL/ERP.",
            },
            {
              title: "Deterministic Fallbacks & Alerts",
              description: "Guaranteed at-least-once delivery with exponential backoff retries and instant incident notifications.",
            },
          ]}
        />

        {/* ── 03. Freelancer.com 100+ Delivery Proof Banner ─────────────── */}
        <div className="my-16">
          <FreelancerTrustBanner category="Workflow Automation & API Integrations" />
        </div>

        {/* ── 04. Capabilities Grid ───────────────────────────────────── */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2 font-semibold">
              Orchestration Features
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Enterprise Resilience Without Code Debt
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.keyCapabilities.map((cap, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-500/35 transition-all flex flex-col justify-between hover:bg-white/[0.04]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 font-mono font-bold text-sm">
                    0{i + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{cap}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Designed to execute with zero downtime and complete observability across every trigger step.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[10px] font-mono text-amber-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Deterministic Execution
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 05. Bottom CTA ──────────────────────────────────────────── */}
        <div className="text-center p-10 sm:p-14 rounded-3xl bg-amber-950/20 border border-amber-500/30">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Automate your operational bottlenecks today
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Talk to our engineering team to design custom workflow orchestrations for your internal tech stack.
          </p>
          <Link
            href="/contact?intent=automation"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm shadow-xl shadow-amber-600/30 transition-all hover:scale-105"
          >
            <span>Design Custom Automation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
