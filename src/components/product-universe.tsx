"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Cpu, 
  Search, 
  Users, 
  Zap, 
  BarChart3, 
  Target, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Activity
} from "lucide-react";

interface ProductUniverseItem {
  id: string;
  name: string;
  shortHeadline: string;
  badge: string;
  href: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  uiPreview: {
    title: string;
    kpi1: { label: string; value: string };
    kpi2: { label: string; value: string };
    kpi3: { label: string; value: string };
    feed: { title: string; subtitle: string; tag: string }[];
  };
}

const UNIVERSE_PRODUCTS: ProductUniverseItem[] = [
  {
    id: "ai",
    name: "ASHMYRA AI",
    shortHeadline: "Autonomous agentic orchestration for enterprise operations.",
    badge: "AI-Native",
    href: "/products/ai",
    color: "#818cf8",
    icon: Cpu,
    uiPreview: {
      title: "Agent Orchestration Command Mesh",
      kpi1: { label: "Active Agents", value: "24 Units" },
      kpi2: { label: "Task Success", value: "99.98%" },
      kpi3: { label: "Autonomous Latency", value: "48ms" },
      feed: [
        { title: "Financial Reconciliation", subtitle: "Audited 1,420 ledger entries", tag: "Completed" },
        { title: "RAG Retrieval Pipeline", subtitle: "Indexed 85k compliance documents", tag: "Live" },
        { title: "Cross-System Dispatch", subtitle: "Routed webhook to ERP API", tag: "Executing" }
      ],
    },
  },
  {
    id: "seo",
    name: "ASHMYRA SEO",
    shortHeadline: "Search intelligence & GEO optimization for the AI engine era.",
    badge: "Next-Gen",
    href: "/products/seo",
    color: "#38bdf8",
    icon: Search,
    uiPreview: {
      title: "Generative Engine Optimization (GEO) Radar",
      kpi1: { label: "AI Search Share", value: "68.4%" },
      kpi2: { label: "Keyword Clusters", value: "3,820" },
      kpi3: { label: "SERP Velocity", value: "+34% MoM" },
      feed: [
        { title: "ChatGPT Citations", subtitle: "Brand cited in 82% top queries", tag: "Prime Rank" },
        { title: "Perplexity Knowledge Graph", subtitle: "Authority index calibrated", tag: "Indexed" },
        { title: "Content Semantic Gap", subtitle: "Discovered 14 high-conversion nodes", tag: "Optimized" }
      ],
    },
  },
  {
    id: "hrms",
    name: "ASHMYRA HRMS",
    shortHeadline: "The intelligent workforce platform: ATS, payroll & AI assistant.",
    badge: "12+ Modules",
    href: "/products/hrms",
    color: "#10b981",
    icon: Users,
    uiPreview: {
      title: "Intelligent Workforce Operations Matrix",
      kpi1: { label: "Team Velocity", value: "94.2%" },
      kpi2: { label: "Payroll Accuracy", value: "100.0%" },
      kpi3: { label: "Time-to-Hire", value: "12 Days" },
      feed: [
        { title: "Automated Payroll Run", subtitle: "Disbursed 240 employee salaries & tax filings", tag: "Processed" },
        { title: "KRA / KPI Milestone", subtitle: "Q3 reviews calibrated with AI rubric", tag: "Synchronized" },
        { title: "Biometric & Geo-Fence", subtitle: "Realtime attendance logs across 4 hubs", tag: "Verified" }
      ],
    },
  },
  {
    id: "automation",
    name: "ASHMYRA AUTOMATION",
    shortHeadline: "Visual workflow builder with human-in-the-loop safety loops.",
    badge: "Enterprise",
    href: "/products/automation",
    color: "#fbbf24",
    icon: Zap,
    uiPreview: {
      title: "Self-Healing Workflow Canvas",
      kpi1: { label: "Active Pipelines", value: "1,240" },
      kpi2: { label: "Manual Hours Saved", value: "4,800 hrs/mo" },
      kpi3: { label: "Failure Rate", value: "0.001%" },
      feed: [
        { title: "Contract Extraction Flow", subtitle: "Parsed 48 vendor agreements via OCR", tag: "Success" },
        { title: "Human Approval Loop", subtitle: "CFO signoff received via Slack", tag: "Resolved" },
        { title: "ERP Database Sync", subtitle: "Zero mismatch across PostgreSQL replica", tag: "Archived" }
      ],
    },
  },
  {
    id: "analytics",
    name: "ASHMYRA ANALYTICS",
    shortHeadline: "Predictive BI dashboards, anomaly detection & executive KPIs.",
    badge: "Telemetry",
    href: "/products/analytics",
    color: "#c084fc",
    icon: BarChart3,
    uiPreview: {
      title: "Predictive Enterprise Telemetry Deck",
      kpi1: { label: "Forecast Accuracy", value: "98.2%" },
      kpi2: { label: "Events Ingested", value: "14.2M/day" },
      kpi3: { label: "Anomaly Detection", value: "Realtime" },
      feed: [
        { title: "Customer Churn Forecast", subtitle: "Intervention triggered for 3 accounts", tag: "Mitigated" },
        { title: "Gross Margin Telemetry", subtitle: "Projected 32% EBITDA lift next quarter", tag: "Paced" },
        { title: "Infrastructure Cost Optimization", subtitle: "Saved $18k on idle GPU instances", tag: "Executed" }
      ],
    },
  },
  {
    id: "crm",
    name: "ASHMYRA CRM",
    shortHeadline: "Deal pipeline automation, lead scoring & AI sales intelligence.",
    badge: "Pipeline",
    href: "/products/crm",
    color: "#f43f5e",
    icon: Target,
    uiPreview: {
      title: "Neural Sales Pipeline & Deal Velocity",
      kpi1: { label: "Pipeline Value", value: "$4.8M" },
      kpi2: { label: "Win Rate", value: "41.6%" },
      kpi3: { label: "Outreach ROI", value: "7.4x" },
      feed: [
        { title: "Series-B SaaS Deal", subtitle: "Stage moved: Security Review Passed", tag: "Closing" },
        { title: "Smart Lead Enrichment", subtitle: "12 high-intent accounts identified today", tag: "Enriched" },
        { title: "AI Voice Summary", subtitle: "Sales call parsed into action items", tag: "Logged" }
      ],
    },
  },
  {
    id: "web",
    name: "ASHMYRA WEB",
    shortHeadline: "Ultra-fast digital platforms, Next.js SaaS & conversion engines.",
    badge: "High-Perf",
    href: "/products/web",
    color: "#22d3ee",
    icon: Globe,
    uiPreview: {
      title: "Edge Digital Platform Telemetry",
      kpi1: { label: "Lighthouse Performance", value: "99/100" },
      kpi2: { label: "Edge TTFB", value: "22ms" },
      kpi3: { label: "Core Web Vitals", value: "100% Pass" },
      feed: [
        { title: "Global CDN Edge Nodes", subtitle: "320 points of presence active", tag: "Online" },
        { title: "Zero Layout Shift (CLS)", subtitle: "CLS: 0.000 across all viewports", tag: "Optimal" },
        { title: "Conversion Engine", subtitle: "Instant checkout experience loaded", tag: "Active" }
      ],
    },
  },
];

export function ProductUniverse() {
  const [activeProduct, setActiveProduct] = useState<ProductUniverseItem>(UNIVERSE_PRODUCTS[0]);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-b border-white/[0.06] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-sky-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs text-sky-300 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Product Universe</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            THE ASHMYRA PLATFORM.
          </h2>

          <p className="text-xs sm:text-sm font-mono text-neutral-400 uppercase tracking-widest">
            A cohesive suite of intelligent business software.
          </p>
        </div>

        {/* Orbit System Bar (Selectable Tabs) */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-12">
          {UNIVERSE_PRODUCTS.map((prod) => {
            const isSelected = activeProduct.id === prod.id;
            const Icon = prod.icon;

            return (
              <button
                key={prod.id}
                onClick={() => setActiveProduct(prod)}
                data-cursor="explore"
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isSelected
                    ? "bg-[#0d1222] border-indigo-400 text-white shadow-lg shadow-indigo-500/30 scale-105"
                    : "bg-[#090c14]/70 border-white/[0.08] hover:border-white/20 text-neutral-400 hover:text-white"
                }`}
              >
                <div
                  className="p-1 rounded-md"
                  style={{ backgroundColor: `${prod.color}20`, color: prod.color }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span>{prod.name.replace("ASHMYRA ", "")}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Expanded Product UI Experience */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/[0.1] bg-[#080b14]/90 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Concise Narrative & Explore Action */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold" style={{ backgroundColor: `${activeProduct.color}20`, color: activeProduct.color }}>
                <activeProduct.icon className="w-3.5 h-3.5" />
                <span>{activeProduct.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {activeProduct.name}
              </h3>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                {activeProduct.shortHeadline}
              </p>

              <div className="pt-2">
                <Link
                  href={activeProduct.href}
                  data-cursor="explore"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-black hover:bg-neutral-200 font-bold text-xs uppercase font-mono tracking-wider transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Explore Product</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: High-Fidelity Product UI Simulator */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/[0.08] bg-[#05070a] p-5 sm:p-6 shadow-inner space-y-6">
                
                {/* HUD Title Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeProduct.color }} />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      {activeProduct.uiPreview.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">
                    Live Demo Telemetry
                  </span>
                </div>

                {/* 3 Prominent KPI Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase">
                      {activeProduct.uiPreview.kpi1.label}
                    </span>
                    <span className="text-base sm:text-xl font-bold text-white mt-1 block">
                      {activeProduct.uiPreview.kpi1.value}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase">
                      {activeProduct.uiPreview.kpi2.label}
                    </span>
                    <span className="text-base sm:text-xl font-bold text-indigo-300 mt-1 block">
                      {activeProduct.uiPreview.kpi2.value}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase">
                      {activeProduct.uiPreview.kpi3.label}
                    </span>
                    <span className="text-base sm:text-xl font-bold text-emerald-300 mt-1 block">
                      {activeProduct.uiPreview.kpi3.value}
                    </span>
                  </div>
                </div>

                {/* Live Task Feed Cards */}
                <div className="space-y-2 pt-1">
                  {activeProduct.uiPreview.feed.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.04] transition-colors"
                    >
                      <div>
                        <span className="text-xs font-bold text-white block">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-neutral-400 font-mono">
                          {item.subtitle}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-neutral-300">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
