import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductWowPreview } from "@/components/product-wow-preview";
import { FreelancerTrustBanner } from "@/components/freelancer-trust-banner";
import { 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  ShieldAlert, 
  Activity, 
  PieChart,
  Database,
  Layers,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra Analytics | Real-Time Data Pipelines & BI Telemetry Engine",
  description:
    "Real-time business intelligence and data telemetry platform with predictive forecasting, AI anomaly detection, multi-source ETL pipelines, and executive dashboards.",
  keywords: [
    "Ashmyra Analytics",
    "Data Intelligence",
    "Real-Time Data Pipelines",
    "Predictive Forecasting",
    "AI Anomaly Detection",
    "Executive Dashboards India",
    "Streaming Telemetry Engine",
  ],
  openGraph: {
    title: "Ashmyra Analytics | Data Intelligence & Telemetry Engine",
    description:
      "Turn massive operational data streams into real-time decision intelligence with automated anomaly alerts and high-throughput pipelines.",
    url: "https://ashmyra.com/products/analytics",
    images: [{ url: "/wow/wow5-data-intelligence.png", width: 1200, height: 675, alt: "Ashmyra Analytics Platform Preview" }],
  },
  alternates: {
    canonical: "https://ashmyra.com/products/analytics",
  },
};

export default function AshmyraAnalyticsPage() {
  const product = PRODUCTS.find((p) => p.id === "analytics")!;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 01. Hero Header ────────────────────────────────────────── */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs text-purple-300 font-mono mb-6">
            <BarChart3 className="w-3.5 h-3.5 text-purple-400" />
            <span>Streaming Data Pipelines &amp; Real-Time Business Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Understand What Changes.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-sky-300 to-purple-200">
              Act on What Matters.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ashmyra Analytics turns massive operational data streams into actionable intelligence. Connect transactional databases, event logs, and web telemetry into unified real-time dashboards with automated AI anomaly alerts.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=analytics-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 transition-all hover:scale-105 active:scale-95"
            >
              Request Telemetry Platform Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ── 02. WOW Visual Showcase ─────────────────────────────────── */}
        <ProductWowPreview
          imageSrc="/wow/wow5-data-intelligence.png"
          imageAlt="Ashmyra Analytics & Data Intelligence Platform"
          productName="Ashmyra Data Intelligence & Telemetry"
          productTagline="Multi-source scraping, streaming ETL, and predictive executive dashboards in real time."
          accentColor="#a78bfa"
          badgeText="Real-Time Data Pipelines Online"
          telemetry={[
            { label: "Data Pipeline Ingestion", value: "Sub-Second", detail: "Real-time streaming ETL from distributed events" },
            { label: "Anomaly Detection", value: "Instant", detail: "Statistical & machine learning drift alerts" },
            { label: "Query Execution", value: "<8ms", detail: "Optimized column-store caches and fast aggregates" },
            { label: "Delivered via Freelancer", value: "100+", detail: "Production data architectures operating 24/7" },
          ]}
          capabilities={[
            {
              title: "Unified Multi-Source ETL",
              description: "Ingests from PostgreSQL, MongoDB, Stripe, ClickHouse, and third-party APIs into clean semantic schemas.",
            },
            {
              title: "Predictive Anomaly Detection",
              description: "Detects revenue dips, user churn signals, and server degradation before they impact bottom-line metrics.",
            },
            {
              title: "Executive Intelligence Dashboards",
              description: "Role-tailored interfaces allowing founders, VPs, and ops leaders to see unvarnished truth at a glance.",
            },
          ]}
        />

        {/* ── 03. Freelancer.com 100+ Delivery Proof Banner ─────────────── */}
        <div className="my-16">
          <FreelancerTrustBanner category="Real-Time Data Pipelines & Analytics" />
        </div>

        {/* ── 04. Capabilities Grid ───────────────────────────────────── */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-400 block mb-2 font-semibold">
              Telemetry Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Enterprise Data Architecture Built for Speed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.keyCapabilities.map((cap, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-purple-500/35 transition-all flex flex-col justify-between hover:bg-white/[0.04]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 font-mono font-bold text-sm">
                    0{i + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{cap}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Designed to transform complex raw metrics into clear executive direction without latency.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[10px] font-mono text-purple-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Real-Time Verified
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 05. Bottom CTA ──────────────────────────────────────────── */}
        <div className="text-center p-10 sm:p-14 rounded-3xl bg-purple-950/20 border border-purple-500/30">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Unlock complete data visibility across your organization
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Connect with an Ashmyra data architect to review your schema and deploy custom business intelligence dashboards.
          </p>
          <Link
            href="/contact?intent=analytics"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 transition-all hover:scale-105"
          >
            <span>Book Data Architecture Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
