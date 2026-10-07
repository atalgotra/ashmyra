"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  Zap,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Layers,
  Terminal,
} from "lucide-react";

const PRINCIPLES = [
  {
    icon: Cpu,
    title: "Applied Intelligence Over Toys",
    desc: "Zero speculative demos. Every agent is built to connect to live enterprise databases, ERPs, and revenue operations from day one.",
    accent: "#818cf8",
  },
  {
    icon: ShieldCheck,
    title: "Deterministic Guardrails",
    desc: "Autonomous reasoning backed by strict schema enforcement, transparent audit logs, and bulletproof human-in-the-loop controls.",
    accent: "#22d3ee",
  },
  {
    icon: Zap,
    title: "Extreme Execution Velocity",
    desc: "No layers of agency bloat. Founders lead system architecture directly, moving platforms from blueprint to live production in weeks.",
    accent: "#a78bfa",
  },
];

export function PeopleSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="people"
      className="relative bg-[#030406] overflow-hidden"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
    >
      {/* ── Background Atmosphere & Ambient Light Blooms ─────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-bg opacity-30" />
        {/* Center top ambient bloom */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px]"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Bottom corner glow */}
        <div
          className="absolute bottom-0 right-0 w-[50vw] h-[450px]"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 100% 100%, rgba(34,211,238,0.06) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-12 sm:pt-16 pb-16 sm:pb-20">

        {/* ── Section Header (Full-width, editorial balance) ───────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-mono font-semibold tracking-wider text-indigo-400 uppercase">
                Leadership &amp; Technical Foundation
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Built by people who&apos;ve{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #818cf8 0%, #22d3ee 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                lived the problem.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 font-sans max-w-xl leading-relaxed">
            Ashmyra was founded by engineering practitioners — leaders who have spent over a decade
            building AI architectures, data platforms, and high-concurrency systems for real-world enterprise operations.
          </p>
        </div>

        {/* ── Executive Leadership Cards (Full 50/50 Grid, Zero Empty Space) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">

          {/* ─ 01: Ashish Talgotra — Founder & Lead AI Architect ────────────── */}
          <div
            className="group relative rounded-3xl p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-[#0b0e1e]/90 via-[#070914]/90 to-[#04050a]/90 backdrop-blur-xl border border-indigo-500/30 hover:border-indigo-400/60 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85),0_0_35px_-5px_rgba(99,102,241,0.2)] overflow-hidden"
          >
            {/* Top row: Avatar + Verified Badge */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                {/* Photo Portrait */}
                <div
                  className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden shrink-0"
                  style={{
                    border: "2px solid rgba(99,102,241,0.6)",
                    boxShadow: "0 0 25px rgba(99,102,241,0.35)",
                  }}
                >
                  <Image
                    src="/hero/ashish-portrait.png"
                    alt="Ashish Talgotra"
                    fill
                    sizes="88px"
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Ashish Talgotra
                  </h3>
                  <div className="text-xs sm:text-sm font-mono font-medium text-indigo-400 mt-1 whitespace-nowrap">
                    Founder &bull; Lead AI Architect
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-neutral-300 leading-relaxed font-sans mb-6">
              14+ years architecting autonomous multi-agent systems, deep data intelligence layers,
              and enterprise platforms. Specializes in transforming complex enterprise friction into
              deterministic, self-executing software engines that scale.
            </p>

            {/* Expertise Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Agent Swarm Architecture", "Enterprise AI & LLMs", "Real-Time Data Systems", "14+ Yrs Tech"].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-indigo-200 bg-indigo-500/10 border border-indigo-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Footer Row */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>Core System Architecture</span>
              </div>
              <Link
                href="https://www.linkedin.com/in/atalgotra/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-400/40 transition-all"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
              </Link>
            </div>

            {/* Ambient inner glow */}
            <div
              className="absolute -top-12 -right-12 w-48 h-48 pointer-events-none rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
          </div>

          {/* ─ 02: Swati — Co-Founder & Strategy Lead ───────────────────────── */}
          <div
            className="group relative rounded-3xl p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-[#0b0e1e]/90 via-[#070914]/90 to-[#04050a]/90 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85),0_0_35px_-5px_rgba(34,211,238,0.15)] overflow-hidden"
          >
            {/* Top row: Avatar + Verified Badge */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                {/* Executive Stylized Monogram Avatar */}
                <div
                  className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, rgba(99,102,241,0.35) 0%, rgba(34,211,238,0.25) 50%, rgba(167,139,250,0.3) 100%)",
                    border: "2px solid rgba(34,211,238,0.5)",
                    boxShadow: "0 0 25px rgba(34,211,238,0.25)",
                  }}
                >
                  <span
                    className="text-3xl sm:text-4xl font-extrabold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    S
                  </span>
                </div>
                <div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Swati
                  </h3>
                  <div className="text-xs sm:text-sm font-mono font-medium text-cyan-400 mt-1 whitespace-nowrap">
                    Co-Founder &bull; Business Strategy
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-neutral-300 leading-relaxed font-sans mb-6">
              Directs executive strategy, enterprise market delivery, and commercial alliances.
              Ensures that every Ashmyra product and engagement is grounded in clear business ROI,
              frictionless client execution, and measurable revenue acceleration.
            </p>

            {/* Expertise Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Enterprise Strategy", "GTM & Market Scale", "Strategic Alliances", "Operational Delivery"].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-cyan-200 bg-cyan-500/10 border border-cyan-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Footer Row */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Commercial Scale &amp; Delivery</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">
                Ashmyra Leadership
              </span>
            </div>

            {/* Ambient inner glow */}
            <div
              className="absolute -top-12 -right-12 w-48 h-48 pointer-events-none rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
          </div>

        </div>

        {/* ── Engineering Tenets Strip (Fills the Width & Anchors Credibility) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {PRINCIPLES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.015] border border-white/[0.08] hover:border-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${item.accent}15`, border: `1px solid ${item.accent}30` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: item.accent }} />
                  </div>
                  <h4
                    className="text-sm sm:text-base font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
