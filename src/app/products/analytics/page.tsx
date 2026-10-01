import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  ShieldAlert, 
  Activity, 
  PieChart 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra Analytics | Real-Time BI & Telemetry Engine",
  description:
    "Real-time business intelligence and telemetry platform with predictive forecasting, AI anomaly detection, and executive summaries.",
  alternates: {
    canonical: "https://ashmyra.com/products/analytics",
  },
};

export default function AshmyraAnalyticsPage() {
  const product = PRODUCTS.find((p) => p.id === "analytics")!;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs text-purple-300 font-mono mb-6">
            <BarChart3 className="w-3.5 h-3.5 text-purple-400" />
            <span>Telemetry &amp; Business Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Understand What Changes.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-sky-300 to-purple-200">
              Act on What Matters.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ashmyra Analytics turns massive operational data streams into actionable intelligence. Connect transactional databases, event logs, and web telemetry into unified real-time dashboards with automated AI anomaly alerts.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=analytics-demo"
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-lg shadow-purple-600/30 transition-all"
            >
              Request Telemetry Platform Demo
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {product.keyCapabilities.map((cap, i) => (
            <div key={i} className="glass-panel rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-purple-400 block mb-2">0{i + 1}</span>
                <h3 className="text-base font-bold text-white mb-2">{cap}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Real-time aggregation with sub-second P99 query latency, providing continuous visibility to executive and operational teams.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center p-10 rounded-3xl bg-purple-950/20 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-2">
            Gain immediate visibility into your core business telemetry
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Eliminate stale weekly spreadsheets with unified real-time executive dashboards.
          </p>
          <Link
            href="/contact?intent=analytics"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-lg shadow-purple-600/30 transition-all"
          >
            <span>Connect With Analytics Architects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
