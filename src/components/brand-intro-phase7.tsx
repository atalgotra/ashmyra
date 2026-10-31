"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, ShieldCheck, Zap } from "lucide-react";

export function BrandIntroPhase7() {
  const tenets = [
    {
      num: "01",
      tag: "ARCHITECTURE",
      icon: Cpu,
      title: "Applied Intelligence",
      desc: "Every system connects directly to live enterprise data, databases, and operational APIs. Zero toy demonstrations.",
      telemetryLabel: "Telemetry",
      telemetryVal: "200 OK · 38ms",
      accent: "#818cf8",
      accentGlow: "rgba(129, 140, 248, 0.25)",
    },
    {
      num: "02",
      tag: "RELIABILITY",
      icon: ShieldCheck,
      title: "Deterministic Guardrails",
      desc: "Autonomous reasoning backed by strict schema enforcement, auditable traces, and human-in-the-loop controls.",
      telemetryLabel: "Type Schema",
      telemetryVal: "100% Auditable",
      accent: "#22d3ee",
      accentGlow: "rgba(34, 211, 238, 0.25)",
    },
    {
      num: "03",
      tag: "VELOCITY",
      icon: Zap,
      title: "Execution Velocity",
      desc: "Direct engineering leadership moves systems from blueprint to live production with speed and precision.",
      telemetryLabel: "Partner Direct",
      telemetryVal: "Zero Agency Lag",
      accent: "#a78bfa",
      accentGlow: "rgba(167, 139, 250, 0.25)",
    },
  ];

  return (
    <section className="relative bg-[#07090e] border-t border-b border-white/[0.06] overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Subtle ambient lighting backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[320px]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99, 102, 241, 0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="absolute inset-0 dot-bg opacity-10" />
      </div>

      <div className="relative z-10 max-w-[1480px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">

          {/* Left Column: Vision Statement */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Glowing Eyebrow Pill */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.12)]">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-[11px] font-mono font-semibold tracking-[0.22em] text-indigo-300 uppercase">
                  Engineering Discipline
                </span>
              </div>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.08] mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Engineering practitioners.{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #818cf8 0%, #22d3ee 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Not advisors.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans mb-7 max-w-lg">
              Ashmyra is built by software engineers and data practitioners who focus on real-world execution. We architect and deploy autonomous AI agents, enterprise software platforms, and high-concurrency systems that solve fundamental operational bottlenecks.
            </p>

            <div>
              <Link
                href="/team"
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-neutral-200 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] hover:border-indigo-500/40 transition-all duration-300 shadow-sm"
              >
                <span>Meet the Leadership Team</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-400 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Three Interactive Tactile Tenets */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {tenets.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative p-6 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg"
                  style={{
                    boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {/* Top glowing accent highlight on hover */}
                  <div
                    className="absolute top-0 inset-x-4 h-[1.5px] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
                    }}
                  />

                  <div>
                    {/* Header: Hardware Icon & Index Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                        style={{
                          background: `${item.accent}15`,
                          border: `1px solid ${item.accent}35`,
                          boxShadow: `0 0 16px -4px ${item.accentGlow}`,
                        }}
                      >
                        <Icon className="w-4 h-4" style={{ color: item.accent }} />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-neutral-500 group-hover:text-neutral-400 transition-colors">
                        {item.num} // {item.tag}
                      </span>
                    </div>

                    <h3
                      className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>

                  {/* Technical Proof Telemetry Tag */}
                  <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono">
                    <span className="flex items-center gap-1.5" style={{ color: item.accent }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: item.accent }}
                      />
                      {item.telemetryLabel}
                    </span>
                    <span className="text-neutral-500 font-medium">
                      {item.telemetryVal}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
