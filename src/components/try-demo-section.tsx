"use client";

import React from "react";
import Link from "next/link";
import { DEMO_PRODUCTS, DemoProduct } from "@/data/demos";
import {
  Mail,
  Target,
  MessageSquare,
  Share2,
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
        return <Share2 className={cls} style={{ color: accent }} />;
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
      className="relative py-20 sm:py-28 overflow-hidden border-t transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
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
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] mb-5 transition-colors duration-300"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
          >
            Try Our Working Demos.{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 50%, var(--accent-emerald) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Zero Waiting.
            </span>
          </h2>

          <p className="text-sm sm:text-base leading-relaxed transition-colors duration-300" style={{ color: "var(--text-muted)" }}>
            Test live Ashmyra platforms right now in your browser. Every system
            is connected to live infrastructure, autonomous agent pipelines,
            and real-time data engines.
          </p>
        </div>

        {/* Demo Cards Grid (6-column responsive layout: 3 top + 2 centered bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {DEMO_PRODUCTS.map((demo: DemoProduct, idx: number) => {
            // Dynamic column spanning for perfect 3 top + 2 centered layout
            const gridColClasses =
              idx < 3
                ? "lg:col-span-2 md:col-span-1"
                : idx === 3
                ? "lg:col-span-2 lg:col-start-2 md:col-span-1"
                : "lg:col-span-2 md:col-span-2 md:max-w-md md:mx-auto lg:max-w-none w-full";

            return (
              <div
                key={demo.id}
                className={`group relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.015] ${gridColClasses}`}
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: `1px solid rgba(${demo.accentRgb}, 0.28)`,
                  boxShadow: "0 20px 50px -15px rgba(0, 0, 0, 0.08), 0 0 0 1px var(--border)",
                }}
              >
                {/* Top Glowing Laser Hairline */}
                <div
                  className="absolute top-0 inset-x-8 h-[1px] opacity-40 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${demo.accent}, transparent)`,
                  }}
                />

                {/* Ambient Card Corner Bloom */}
                <div
                  className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none group-hover:opacity-35 transition-opacity"
                  style={{ background: demo.accent }}
                />

                {/* Card Top Content Container */}
                <div>
                  {/* Top Row: Icon + Title + Live Badge */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-start gap-3.5 min-w-0">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-md shrink-0 mt-0.5"
                        style={{
                          background: `rgba(${demo.accentRgb}, 0.12)`,
                          border: `1px solid rgba(${demo.accentRgb}, 0.35)`,
                          boxShadow: `0 0 25px rgba(${demo.accentRgb}, 0.15)`,
                        }}
                      >
                        {getDemoIcon(demo.id, demo.accent)}
                      </div>
                      <div className="min-w-0">
                        <h3
                          className="text-xl sm:text-2xl font-bold tracking-tight leading-snug line-clamp-1 transition-colors"
                          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
                          title={demo.name}
                        >
                          {demo.name}
                        </h3>
                        <p
                          className="text-[11px] font-mono mt-1 tracking-wider uppercase truncate"
                          style={{ color: demo.accent }}
                          title={demo.category}
                        >
                          {demo.category}
                        </p>
                      </div>
                    </div>

                    {/* Live status badge */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-500 shrink-0">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      <span className="font-semibold uppercase tracking-wider text-[9px]">Live App</span>
                    </div>
                  </div>

                  {/* Tagline (Fixed min-height for mathematical alignment) */}
                  <div className="min-h-[44px] flex items-center mb-3">
                    <h4
                      className="text-sm font-semibold leading-snug line-clamp-2"
                      style={{ color: "var(--text)" }}
                    >
                      {demo.tagline}
                    </h4>
                  </div>

                  {/* Description (Fixed min-height for uniform horizontal divider baseline) */}
                  <div className="min-h-[72px] sm:min-h-[76px] mb-5">
                    <p
                      className="text-xs sm:text-[13px] leading-relaxed line-clamp-3"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {demo.description}
                    </p>
                  </div>

                  {/* Key Features / Superpowers (Full width, zero ugly truncation) */}
                  <div className="pt-4 mb-6" style={{ borderTop: "1px solid var(--border)" }}>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-[10px] font-mono uppercase tracking-widest font-semibold"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Platform Capabilities
                      </span>
                      <span
                        className="text-[9px] font-mono px-2 py-0.5 rounded"
                        style={{
                          background: "rgba(16, 185, 129, 0.12)",
                          color: "var(--accent-emerald)",
                          border: "1px solid rgba(16, 185, 129, 0.25)",
                        }}
                      >
                        Production Ready
                      </span>
                    </div>
                    <div className="space-y-2.5">
                      {demo.features.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-xs group/feat"
                        >
                          <CheckCircle2
                            className="w-3.5 h-3.5 mt-0.5 shrink-0 transition-colors"
                            style={{ color: demo.accent }}
                          />
                          <span
                            className="leading-snug transition-colors"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Telemetry Metrics strip (Hardware module style) */}
                  <div
                    className="grid grid-cols-3 gap-2 mb-6 p-3 rounded-2xl border transition-all duration-300"
                    style={{
                      background: "var(--theme-pill-bg)",
                      borderColor: `rgba(${demo.accentRgb}, 0.22)`,
                    }}
                  >
                    {demo.metrics.map((m, idx) => (
                      <div key={idx} className="text-center px-1">
                        <div
                          className="text-sm sm:text-base font-bold font-mono tracking-tight"
                          style={{ color: idx === 0 ? demo.accent : "var(--text)" }}
                        >
                          {m.value}
                        </div>
                        <div
                          className="text-[9.5px] font-mono mt-0.5 truncate tracking-tight uppercase"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div
                  className="pt-4 flex items-center justify-between gap-3 mt-auto"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-2 text-xs font-mono min-w-0">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: demo.accent }}
                    />
                    <span className="truncate text-[11px]" style={{ color: "var(--text-muted)" }}>
                      {demo.highlight}
                    </span>
                  </div>

                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.04] active:scale-[0.98] shadow-md shrink-0 group/btn"
                    style={{
                      background: `linear-gradient(135deg, ${demo.accent}, rgba(${demo.accentRgb}, 0.85))`,
                      boxShadow: `0 8px 24px -6px rgba(${demo.accentRgb}, 0.4)`,
                    }}
                  >
                    <span>Try Demo</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Bottom Banner for Custom Enterprise Deployments */}
        <div
          className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md transition-colors duration-300"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex items-start sm:items-center gap-4">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background: "var(--theme-pill-bg)",
                border: "1px solid var(--theme-pill-border)",
                color: "var(--accent)",
              }}
            >
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div
                className="text-base sm:text-lg font-bold mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
              >
                Need custom on-premise or VPC deployment?
              </div>
              <p className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>
                All platforms can be customized and deployed into your private cloud
                (AWS, GCP, Azure) with dedicated enterprise SLA and custom LLMs.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white transition-all hover:scale-105 shrink-0"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-light))",
              boxShadow: "0 0 0 1px var(--border-glow), 0 4px 16px -2px var(--border-glow)",
            }}
          >
            <span>Request Enterprise Access</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
