"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, ShieldCheck, Zap } from "lucide-react";

export function BrandIntroPhase7() {
  return (
    <section className="relative bg-[#07090e] border-t border-b border-white/[0.06] overflow-hidden py-20 sm:py-24">
      {/* Subtle ambient light */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[300px]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Vision Statement */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-[11px] font-mono font-semibold tracking-wider text-indigo-400 uppercase">
                Engineering Discipline
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.08] mb-6"
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
            <p className="text-base text-neutral-300 leading-relaxed font-sans mb-8">
              Ashmyra is built by software engineers and data practitioners who focus on real-world execution. We architect and deploy autonomous AI agents, enterprise software platforms, and high-concurrency systems that solve fundamental operational bottlenecks.
            </p>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-indigo-300 hover:text-white transition-colors uppercase tracking-wider"
            >
              <span>Meet the Leadership Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right Column: Three Tenets */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: Cpu,
                title: "Applied Intelligence",
                desc: "Every system connects directly to live enterprise data, databases, and operational APIs. Zero toy demonstrations.",
                accent: "#818cf8",
              },
              {
                icon: ShieldCheck,
                title: "Deterministic Guardrails",
                desc: "Autonomous reasoning backed by strict schema enforcement, auditable traces, and human-in-the-loop controls.",
                accent: "#22d3ee",
              },
              {
                icon: Zap,
                title: "Execution Velocity",
                desc: "Direct engineering leadership moves systems from blueprint to live production with speed and precision.",
                accent: "#a78bfa",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.14] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: `${item.accent}15`,
                        border: `1px solid ${item.accent}30`,
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: item.accent }} />
                    </div>
                    <h3
                      className="text-base font-bold text-white mb-2 tracking-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                      {item.desc}
                    </p>
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
