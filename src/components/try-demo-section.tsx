"use client";

import React from "react";
import Link from "next/link";
import { DEMO_PRODUCTS, DemoProduct } from "@/data/demos";
import {
  Mail,
  Target,
  MessageSquare,
  Eye,
  Search,
  ExternalLink,
  ArrowUpRight,
  Activity,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function TryDemoSection() {
  const getDemoIcon = (id: string, accent: string) => {
    const cls = "w-6 h-6";
    switch (id) {
      case "mailflow":
        return <Mail className={cls} style={{ color: accent }} />;
      case "prospectiq":
        return <Target className={cls} style={{ color: accent }} />;
      case "omnira":
        return <MessageSquare className={cls} style={{ color: accent }} />;
      case "unveil":
        return <Eye className={cls} style={{ color: accent }} />;
      case "veyrix":
        return <Search className={cls} style={{ color: accent }} />;
      default:
        return <Sparkles className={cls} style={{ color: accent }} />;
    }
  };

  return (
    <section
      id="try-demo"
      className="relative py-20 sm:py-28 overflow-hidden bg-[#04060a] border-t border-white/[0.08]"
    >
      {/* Background Ambient Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none rounded-full blur-[140px] opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.5), rgba(6,182,212,0.3), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-[500px] h-[300px] pointer-events-none rounded-full blur-[120px] opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.4), transparent 70%)",
        }}
      />

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold tracking-wider uppercase text-[11px]">
              Live Production Deployments
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-300">Instant Access</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-5"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Try Our Working Demos.{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #818cf8 0%, #38bdf8 50%, #34d399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Zero Waiting.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Test live Ashmyra platforms right now in your browser. Every system
            is connected to live infrastructure, autonomous agent pipelines,
            and real-time data engines.
          </p>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DEMO_PRODUCTS.map((demo: DemoProduct) => {
            return (
              <div
                key={demo.id}
                className="group relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:border-white/25 last:md:col-span-2 last:lg:col-span-1"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(11, 15, 25, 0.96), rgba(7, 9, 16, 0.98))",
                  border: `1px solid rgba(${demo.accentRgb}, 0.22)`,
                  boxShadow: `0 20px 60px -20px rgba(0,0,0,0.8), 0 0 40px -15px rgba(${demo.accentRgb}, 0.15)`,
                }}
              >
                {/* Ambient Card Corner Bloom */}
                <div
                  className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"
                  style={{ background: demo.accent }}
                />

                {/* Top Row: Icon + Title + Live Badge */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-13 h-13 p-3 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
                        style={{
                          background: `rgba(${demo.accentRgb}, 0.12)`,
                          border: `1px solid rgba(${demo.accentRgb}, 0.35)`,
                          boxShadow: `0 0 25px rgba(${demo.accentRgb}, 0.2)`,
                        }}
                      >
                        {getDemoIcon(demo.id, demo.accent)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3
                            className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-white transition-colors"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {demo.name}
                          </h3>
                        </div>
                        <p
                          className="text-xs font-mono mt-0.5"
                          style={{ color: demo.accent }}
                        >
                          {demo.category}
                        </p>
                      </div>
                    </div>

                    {/* Live status badge */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live App</span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <div className="text-sm font-semibold text-neutral-200 mb-2">
                    {demo.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                    {demo.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.06]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                      Platform Capabilities:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {demo.features.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-neutral-300"
                        >
                          <CheckCircle2
                            className="w-3.5 h-3.5 shrink-0"
                            style={{ color: demo.accent }}
                          />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Telemetry Metrics strip */}
                  <div className="grid grid-cols-3 gap-2.5 mb-7 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    {demo.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div
                          className="text-sm sm:text-base font-bold font-mono"
                          style={{ color: idx === 0 ? demo.accent : "#ffffff" }}
                        >
                          {m.value}
                        </div>
                        <div className="text-[9.5px] text-neutral-400 font-mono mt-0.5 truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono truncate">
                    <Activity className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{demo.highlight}</span>
                  </div>

                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.04] active:scale-[0.98] shadow-lg shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${demo.accent}, rgba(${demo.accentRgb}, 0.8))`,
                      boxShadow: `0 8px 24px -6px rgba(${demo.accentRgb}, 0.5)`,
                    }}
                  >
                    <span>Try Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Bottom Banner for Custom Enterprise Deployments */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-950/30 via-slate-900/40 to-indigo-950/30 border border-indigo-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center shrink-0 text-indigo-400">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div
                className="text-base sm:text-lg font-bold text-white mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Need custom on-premise or VPC deployment?
              </div>
              <p className="text-xs sm:text-sm text-neutral-300">
                All platforms can be customized and deployed into your private cloud
                (AWS, GCP, Azure) with dedicated enterprise SLA and custom LLMs.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all hover:scale-105 shrink-0"
          >
            <span>Request Enterprise Access</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
