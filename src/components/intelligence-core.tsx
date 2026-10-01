"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS, ProductDetail } from "@/data/products";
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
  Layers
} from "lucide-react";

export function IntelligenceCore() {
  const [activeProductId, setActiveProductId] = useState<string>("ai");

  const activeProduct: ProductDetail = 
    PRODUCTS.find((p) => p.id === activeProductId) || PRODUCTS[0];

  const getProductIcon = (id: string) => {
    switch (id) {
      case "ai":
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case "seo":
        return <Search className="w-5 h-5 text-sky-400" />;
      case "hrms":
        return <Users className="w-5 h-5 text-emerald-400" />;
      case "automation":
        return <Zap className="w-5 h-5 text-amber-400" />;
      case "analytics":
        return <BarChart3 className="w-5 h-5 text-purple-400" />;
      case "crm":
        return <Target className="w-5 h-5 text-pink-400" />;
      case "web":
        return <Globe className="w-5 h-5 text-teal-400" />;
      default:
        return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section className="relative py-24 bg-[#07090e] border-y border-white/[0.08] overflow-hidden">
      {/* Background ambient grid and glow */}
      <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] core-mesh-glow blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Interactive Architecture Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            One Technology Partner.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">
              Many Intelligent Systems.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Ashmyra Intelligence serves as the unified orchestration core connecting AI agents, search visibility, workforce operations, and business automation.
          </p>
        </div>

        {/* The Interactive Intelligence Core & Connected Nodes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left / Center: Interactive Node Map */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-[#0a0d16]/70 border border-white/[0.08] rounded-3xl backdrop-blur-xl relative shadow-2xl">
            {/* Center Core Beacon */}
            <div className="relative mb-8 text-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 p-[2px] shadow-2xl shadow-indigo-500/40 mx-auto animate-core-pulse flex items-center justify-center">
                <div className="w-full h-full bg-[#07090e] rounded-[14px] flex flex-col items-center justify-center p-2 text-center">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-1">
                    <Sparkles className="w-4 h-4 text-indigo-300" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-white uppercase">
                    ASHMYRA
                  </span>
                  <span className="text-[8px] font-mono text-indigo-300 tracking-tight">
                    INTELLIGENCE
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 mt-2 font-mono">
                Click a node to inspect architecture
              </p>
            </div>

            {/* Product Selector Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full">
              {PRODUCTS.map((prod) => {
                const isSelected = activeProductId === prod.id;
                return (
                  <button
                    key={prod.id}
                    onClick={() => setActiveProductId(prod.id)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all relative overflow-hidden ${
                      isSelected
                        ? "bg-indigo-600/15 border-indigo-500/60 shadow-lg shadow-indigo-500/20 text-white"
                        : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-neutral-300 hover:text-white"
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 to-sky-400" />
                    )}
                    <div className={`p-1.5 rounded-lg ${isSelected ? "bg-indigo-500/20" : "bg-white/[0.05]"}`}>
                      {getProductIcon(prod.id)}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold truncate">{prod.name.replace("Ashmyra ", "")}</div>
                      <div className="text-[10px] text-neutral-400 truncate">{prod.badge}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Dynamic Interactive Architecture Preview Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              {/* Product Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
                    {getProductIcon(activeProduct.id)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {activeProduct.name}
                      </h3>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-mono">
                        {activeProduct.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                      {activeProduct.tagline}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/products/${activeProduct.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02]"
                >
                  <span>Explore Product</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Problem Solved & AI Advantage */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-1 mb-1.5">
                    Problem Eliminated
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {activeProduct.problemSolved}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-indigo-500/[0.04] border border-indigo-500/20">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-300 font-semibold flex items-center gap-1 mb-1.5">
                    <Sparkles className="w-3 h-3" />
                    AI-Native Architecture
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {activeProduct.aiAdvantage}
                  </p>
                </div>
              </div>

              {/* Dynamic Execution Workflow Pipeline */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                    Execution Workflow
                  </span>
                  <span className="text-[11px] text-neutral-500 font-mono">
                    Deterministic 5-Step Pipeline
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProduct.workflowSteps.slice(0, 4).map((w) => (
                    <div
                      key={w.step}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-2.5"
                    >
                      <span className="text-[10px] font-mono font-bold text-indigo-400 px-1.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                        {w.step}
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-medium text-white truncate">{w.title}</div>
                        <div className="text-[11px] text-neutral-400 leading-normal line-clamp-2 mt-0.5">
                          {w.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Realistic Telemetry (Clearly labeled Demo Data) */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.06] text-neutral-400 font-mono uppercase tracking-wider">
                    Demo Telemetry
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <div>
                    <span className="block text-base font-bold text-white font-mono">
                      {activeProduct.demoDataSummary.metric1.value}
                    </span>
                    <span className="text-[10px] text-neutral-400">
                      {activeProduct.demoDataSummary.metric1.label}
                    </span>
                  </div>
                  <div>
                    <span className="block text-base font-bold text-emerald-400 font-mono">
                      {activeProduct.demoDataSummary.metric2.value}
                    </span>
                    <span className="text-[10px] text-neutral-400">
                      {activeProduct.demoDataSummary.metric2.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
