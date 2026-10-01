import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { 
  ArrowRight, 
  Cpu, 
  Search, 
  Users, 
  Zap, 
  BarChart3, 
  Target, 
  Globe, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Layers
} from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Intelligent Systems",
  description:
    "Explore the Ashmyra software ecosystem: Ashmyra AI, Ashmyra SEO, Ashmyra HRMS, Ashmyra Automation, Ashmyra Analytics, Ashmyra CRM, and Ashmyra Web.",
  alternates: {
    canonical: "https://ashmyra.com/products",
  },
};

export default function ProductsPage() {
  const getProductIcon = (id: string) => {
    switch (id) {
      case "ai":
        return <Cpu className="w-6 h-6 text-indigo-400" />;
      case "seo":
        return <Search className="w-6 h-6 text-sky-400" />;
      case "hrms":
        return <Users className="w-6 h-6 text-emerald-400" />;
      case "automation":
        return <Zap className="w-6 h-6 text-amber-400" />;
      case "analytics":
        return <BarChart3 className="w-6 h-6 text-purple-400" />;
      case "crm":
        return <Target className="w-6 h-6 text-pink-400" />;
      case "web":
        return <Globe className="w-6 h-6 text-teal-400" />;
      default:
        return <Layers className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Intelligent Product Suite</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Software Engineered for the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">
              Autonomous Business Era
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Ashmyra develops AI-native SaaS products and modular platforms designed to eliminate operational friction and accelerate enterprise growth.
          </p>
        </div>

        {/* Product Catalog Cards */}
        <div className="space-y-12">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              id={product.id}
              className="glass-panel rounded-3xl p-8 sm:p-10 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Description Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      {getProductIcon(product.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                          {product.name}
                        </h2>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-mono">
                          {product.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-400 font-mono mt-0.5">
                        {product.category}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {product.longDesc}
                  </p>

                  {/* Capabilities List */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                      Key Capabilities &amp; Architecture:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {product.keyCapabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/25 transition-all"
                    >
                      <span>Explore {product.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/contact?intent=demo"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-neutral-300 hover:text-white text-xs border border-white/[0.08] transition-all"
                    >
                      <span>Request Live Demo</span>
                    </Link>
                  </div>
                </div>

                {/* Right Telemetry & Workflow Column */}
                <div className="lg:col-span-5 bg-[#07090e] border border-white/[0.06] rounded-2xl p-6 space-y-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                      Target Operational Problem
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {product.problemSolved}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 block mb-1">
                      AI-Native Differentiation
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {product.aiAdvantage}
                    </p>
                  </div>

                  {/* Demo Metrics */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase">
                        Product Telemetry Benchmark
                      </span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/[0.04] text-neutral-500 font-mono">
                        DEMO DATA
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                        <span className="text-xs sm:text-sm font-bold font-mono text-white block">
                          {product.demoDataSummary.metric1.value}
                        </span>
                        <span className="text-[9px] text-neutral-400 block mt-0.5">
                          {product.demoDataSummary.metric1.label}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                        <span className="text-xs sm:text-sm font-bold font-mono text-emerald-400 block">
                          {product.demoDataSummary.metric2.value}
                        </span>
                        <span className="text-[9px] text-neutral-400 block mt-0.5">
                          {product.demoDataSummary.metric2.label}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                        <span className="text-xs sm:text-sm font-bold font-mono text-sky-400 block">
                          {product.demoDataSummary.metric3.value}
                        </span>
                        <span className="text-[9px] text-neutral-400 block mt-0.5">
                          {product.demoDataSummary.metric3.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
