"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Cpu,
  Database,
  Globe,
  Zap,
  ArrowUpRight,
  ArrowRight,
  Layers,
  Clock,
  TrendingUp,
  Sparkles,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CAPS = [
  {
    icon: Cpu,
    title: "AI Engineering",
    desc: "Multi-agent systems, LLM pipelines and autonomous decision loops built for enterprise scale.",
    accent: "#818cf8",
    tag: "Agentic AI",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    desc: "Real-time pipelines, anomaly detection, executive dashboards and deep insight layers.",
    accent: "#34d399",
    tag: "Data",
  },
  {
    icon: Globe,
    title: "Software Engineering",
    desc: "Enterprise platforms, SaaS products and scalable APIs engineered to last.",
    accent: "#38bdf8",
    tag: "SaaS",
  },
  {
    icon: Zap,
    title: "Digital Experiences",
    desc: "3D interfaces, high-performance web and interactive product design that wows.",
    accent: "#c084fc",
    tag: "Web",
  },
];

const PROJECTS = [
  { name: "FMO", cat: "Fashion & 3D Web", accent: "#c084fc", year: "2024" },
  { name: "1A Veda", cat: "Ayurveda & Wellness", accent: "#34d399", year: "2023" },
  { name: "Ramaroma Herbs", cat: "Natural Products", accent: "#38bdf8", year: "2024" },
  { name: "Divagam", cat: "Spiritual & Lifestyle", accent: "#f59e0b", year: "2025" },
];

const METRICS = [
  {
    value: "100+",
    label: "Projects Delivered",
    detail: "Production web, AI & data platforms",
    icon: Layers,
    accent: "#818cf8",
  },
  {
    value: "14+",
    label: "Years Experience",
    detail: "Enterprise systems & applied AI",
    icon: Clock,
    accent: "#22d3ee",
  },
  {
    value: "7",
    label: "Intelligent Products",
    detail: "Autonomous agentic frameworks",
    icon: Cpu,
    accent: "#a78bfa",
  },
  {
    value: "3×",
    label: "Average ROI Lift",
    detail: "Workflow velocity & automation",
    icon: TrendingUp,
    accent: "#10b981",
  },
];

export function CapabilityProof() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="capability"
      className="relative bg-[#040508] overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* ── Background Atmosphere & Ambient Lighting (No Flat Black Voids) ─ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 dot-bg opacity-35" />
        {/* Top radial indigo glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[350px]"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        {/* Right side cyan accent */}
        <div
          className="absolute top-1/3 right-0 w-[40vw] h-[400px]"
          style={{
            background: "radial-gradient(ellipse 50% 50% at 100% 50%, rgba(34,211,238,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* ── Tight, cohesive container with zero dead gaps ────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-6 sm:pt-8 pb-16 sm:pb-20 space-y-12 sm:space-y-14">

        {/* ── 01: Elevated World-Class Metrics Frame ─────────────────────── */}
        <div className="metric-card relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#090c16]/90 via-[#070912]/80 to-[#05060a]/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_-10px_rgba(99,102,241,0.15)]">
          {/* Top subtle badge */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-mono font-semibold tracking-wider text-indigo-300 uppercase">
                Proven Track Record
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Engineered for Production Velocity</span>
            </div>
          </div>

          {/* 4 Metrics grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.06]">
            {METRICS.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className={`flex flex-col ${idx !== 0 ? "pt-5 lg:pt-0 lg:pl-8" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: `${m.accent}15`, border: `1px solid ${m.accent}30` }}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color: m.accent }} />
                    </div>
                    <span className="text-xs font-mono text-neutral-400 tracking-wide uppercase">
                      {m.label}
                    </span>
                  </div>
                  <div
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight my-1"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      background: "linear-gradient(135deg, #ffffff 0%, #c7d2fe 60%, #818cf8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {m.value}
                  </div>
                  <p className="text-xs text-neutral-500 font-sans mt-0.5 leading-relaxed">
                    {m.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 02: Capabilities Grid ─────────────────────────────────────────── */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono font-semibold tracking-wider text-indigo-400 uppercase">
                  Engineering Discipline
                </span>
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Built to Solve Complex Problems
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-sans">
              From multi-agent reasoning to real-time high-throughput software pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAPS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="cap-card group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-[#0b0e1b]/80 to-[#070912]/80 backdrop-blur-md border border-white/[0.08] hover:border-white/20 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8)]"
                >
                  {/* Top: icon + tag */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${c.accent}15`, border: `1px solid ${c.accent}35` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: c.accent }} />
                    </div>
                    <span
                      className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                      style={{
                        color: c.accent,
                        background: `${c.accent}10`,
                        border: `1px solid ${c.accent}30`,
                      }}
                    >
                      {c.tag}
                    </span>
                  </div>

                  <div
                    className="text-base font-semibold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {c.title}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">{c.desc}</p>

                  {/* Hover inner glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                    style={{ background: `radial-gradient(ellipse at top left, ${c.accent}12 0%, transparent 65%)` }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 03: Selected Work ─────────────────────────────────────────────── */}
        <div>
          <div className="flex items-end justify-between mb-6 sm:mb-8">
            <div>
              <div className="text-[11px] font-mono font-semibold tracking-wider text-indigo-400 uppercase mb-2">
                Verified Implementations
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Selected Work
              </h3>
            </div>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-indigo-300 transition-colors uppercase tracking-wider"
            >
              All Projects <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROJECTS.map((p) => (
              <div
                key={p.name}
                className="proj-card group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-[#0b0e1b]/80 to-[#070912]/80 backdrop-blur-md border border-white/[0.08] hover:border-white/20 overflow-hidden"
              >
                {/* Year tag & accent indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-neutral-500">{p.year}</span>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.accent }} />
                </div>

                <div
                  className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {p.name}
                </div>
                <div className="text-xs font-mono" style={{ color: `${p.accent}dd` }}>{p.cat}</div>

                {/* Arrow on hover */}
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-4 h-4 text-neutral-400" />
                </div>

                {/* Hover subtle glow */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at bottom right, ${p.accent}12 0%, transparent 65%)` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── 04: Tight Integrated CTA Strip ───────────────────────────────── */}
        <div
          className="rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(34,211,238,0.06) 100%)",
            border: "1px solid rgba(99,102,241,0.25)",
            boxShadow: "0 20px 50px -10px rgba(0,0,0,0.8), 0 0 30px -5px rgba(99,102,241,0.15)",
          }}
        >
          <div>
            <div className="text-[11px] font-mono font-semibold tracking-wider text-indigo-300 uppercase mb-2">
              Ready to Build?
            </div>
            <h3
              className="text-2xl sm:text-3xl font-bold text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Bring us the hard problem.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-sans">
              We&apos;ll engineer the system that solves it with speed and precision.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white transition-all hover:scale-[1.03] active:scale-[0.97] whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, #6366f1, #818cf8)",
              boxShadow: "0 0 0 1px rgba(99,102,241,0.5), 0 8px 30px -4px rgba(99,102,241,0.6)",
            }}
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
