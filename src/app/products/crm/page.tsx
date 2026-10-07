import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductWowPreview } from "@/components/product-wow-preview";
import { FreelancerTrustBanner } from "@/components/freelancer-trust-banner";
import { 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Kanban, 
  Mail, 
  PhoneCall, 
  TrendingUp,
  ShieldCheck,
  Zap,
  Clock,
  Layers
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra CRM & AI Project Management | High-Velocity Pipeline Intelligence",
  description:
    "A clutter-free CRM and contextual project management platform engineered for high-velocity teams with automated pipeline progression, task dependency routing, and AI follow-up copilot.",
  keywords: [
    "Ashmyra CRM",
    "AI Project Management",
    "Pipeline Intelligence",
    "Automated Lead Scoring",
    "Kanban Project Velocity",
    "Enterprise Deal Management",
  ],
  openGraph: {
    title: "Ashmyra CRM & AI Project Management",
    description:
      "Context-aware planning, pipeline automation, and deal intelligence woven into a single unified operating layer.",
    url: "https://ashmyra.com/products/crm",
    images: [{ url: "/wow/wow3-project-management.png", width: 1200, height: 675, alt: "Ashmyra CRM Platform Preview" }],
  },
  alternates: {
    canonical: "https://ashmyra.com/products/crm",
  },
};

export default function AshmyraCrmPage() {
  const product = PRODUCTS.find((p) => p.id === "crm")!;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 01. Hero Header ────────────────────────────────────────── */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/25 text-xs text-pink-300 font-mono mb-6">
            <Target className="w-3.5 h-3.5 text-pink-400" />
            <span>AI Project Management &amp; High-Velocity Deal Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Build Deeper Relationships.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-amber-200">
              Close Faster with AI Intelligence.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ashmyra CRM eliminates bloated enterprise clutter. Teams get contextual task breakdown, automated deal progression, firmographic data enrichment, and AI-assisted personalized communication workflows.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=crm-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-semibold text-sm shadow-xl shadow-pink-600/30 transition-all hover:scale-105 active:scale-95"
            >
              Request Sales Pipeline Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ── 02. WOW Visual Showcase ─────────────────────────────────── */}
        <ProductWowPreview
          imageSrc="/wow/wow3-project-management.png"
          imageAlt="Ashmyra CRM & AI Project Management Platform"
          productName="Ashmyra CRM & AI Project Velocity"
          productTagline="Contextual task breakdown, dependency routing, and predictive velocity analytics in real time."
          accentColor="#f43f5e"
          badgeText="Pipeline Intelligence Active"
          telemetry={[
            { label: "Deal Velocity Lift", value: "+42%", detail: "Automated trigger follow-ups and stage progressions" },
            { label: "Pipeline Telemetry", value: "Real-Time", detail: "Live conversion attribution across lead sources" },
            { label: "Lead Enrichment", value: "Instant", detail: "Automated firmographic and intent scoring" },
            { label: "Freelancer Deliveries", value: "100+", detail: "Enterprise CRM and workflow engines shipped" },
          ]}
          capabilities={[
            {
              title: "Autonomous Pipeline Automation",
              description: "Deals transition stages based on verified customer actions (email replies, document views, payment links) without manual data entry.",
            },
            {
              title: "Contextual Task Breakdown",
              description: "Complex projects decompose into dependency-checked milestones with automatic developer and team allocation.",
            },
            {
              title: "Predictive Win Probability",
              description: "Machine learning models analyze historic deal velocity to alert account executives to at-risk revenue opportunities.",
            },
          ]}
        />

        {/* ── 03. Freelancer.com 100+ Delivery Proof Banner ─────────────── */}
        <div className="my-16">
          <FreelancerTrustBanner category="CRM Platforms & AI Project Management" />
        </div>

        {/* ── 04. Core Capabilities ───────────────────────────────────── */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-pink-400 block mb-2 font-semibold">
              Features &amp; Modules
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Engineered to Drive Measurable Revenue
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.keyCapabilities.map((cap, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-pink-500/35 transition-all flex flex-col justify-between hover:bg-white/[0.04]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4 font-mono font-bold text-sm">
                    0{i + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{cap}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Designed to eliminate friction between deal origination and signed contracts with full auditability.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[10px] font-mono text-pink-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Live Module
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 05. Bottom CTA ──────────────────────────────────────────── */}
        <div className="text-center p-10 sm:p-14 rounded-3xl bg-pink-950/20 border border-pink-500/30">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Supercharge your pipeline velocity today
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Schedule a personalized walkthrough of Ashmyra CRM tailored to your sales cycle.
          </p>
          <Link
            href="/contact?intent=crm"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-semibold text-sm shadow-xl shadow-pink-600/30 transition-all hover:scale-105"
          >
            <span>Book Pipeline Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
