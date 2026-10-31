"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Database, Globe, Layers, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

const CAPABILITIES = [
  {
    id: "ai-engineering",
    icon: Cpu,
    title: "AI ENGINEERING",
    tagline: "Autonomous Agent Swarms & LLM Systems",
    description:
      "We build multi-agent architectures that execute complex, multi-step workflows. Backed by strict schema validation, auditable execution traces, and deterministic guardrails.",
    deliverables: [
      "Autonomous Multi-Agent Swarms",
      "Deterministic Schema Enforcement",
      "Context-Aware Retrieval (RAG)",
      "Continuous Evaluation & Telemetry",
    ],
    href: "/products/ai",
    accent: "#818cf8",
  },
  {
    id: "data-intelligence",
    icon: Database,
    title: "DATA INTELLIGENCE",
    tagline: "High-Throughput Pipelines & Analytics",
    description:
      "We design real-time data streaming architectures that ingest, validate, and normalize enterprise data at scale, providing actionable operational intelligence.",
    deliverables: [
      "Real-Time Stream Processing",
      "Automated Anomaly Detection",
      "Enterprise Data Lake Integration",
      "Executive Telemetry Dashboards",
    ],
    href: "/products/analytics",
    accent: "#22d3ee",
  },
  {
    id: "software-engineering",
    icon: Globe,
    title: "SOFTWARE ENGINEERING",
    tagline: "Enterprise SaaS & Resilient APIs",
    description:
      "We engineer production-grade enterprise software platforms, cloud microservices, and high-concurrency APIs built for fault tolerance, security, and scalability.",
    deliverables: [
      "Microservices & Cloud Infrastructure",
      "Enterprise SaaS Architectures",
      "High-Concurrency REST & gRPC APIs",
      "Zero-Downtime Deployment Pipelines",
    ],
    href: "/services/software-development",
    accent: "#38bdf8",
  },
  {
    id: "digital-experiences",
    icon: Layers,
    title: "DIGITAL EXPERIENCES",
    tagline: "High-Performance Edge Surfaces",
    description:
      "We build edge-rendered digital interfaces with sub-second page loads, accessible design systems, and Generative Engine Optimization (GEO) architecture.",
    deliverables: [
      "Edge-Rendered Next.js Applications",
      "Generative Engine Optimization (GEO)",
      "Accessible Design Systems (WCAG)",
      "Performance & Conversion Engineering",
    ],
    href: "/services/web-apps",
    accent: "#c084fc",
  },
];

export function EngineeringCapabilitiesPhase7() {
  return (
    <section className="relative bg-[#05070c] py-20 sm:py-24 lg:py-28 overflow-hidden text-white border-b border-white/[0.06]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-[11px] font-mono font-semibold tracking-wider text-indigo-400 uppercase">
              Core Capabilities
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            ENGINEERING COMPLEXITY
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              INTO CLARITY.
            </span>
          </h2>
          <p className="text-base text-neutral-300 leading-relaxed font-sans">
            We focus on four foundational pillars of modern technology engineering. Each capability is backed by rigorous architectural standards, verifiable code quality, and production delivery.
          </p>
        </div>

        {/* ── Four Capabilities Grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.id}
                className="p-8 sm:p-10 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                      style={{
                        background: `${cap.accent}15`,
                        border: `1px solid ${cap.accent}30`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: cap.accent }} />
                    </div>
                    <span
                      className="text-[11px] font-mono tracking-wider font-semibold uppercase"
                      style={{ color: cap.accent }}
                    >
                      {cap.title}
                    </span>
                  </div>

                  <h3
                    className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {cap.tagline}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed font-sans mb-6">
                    {cap.description}
                  </p>

                  {/* Verifiable Deliverables */}
                  <ul className="space-y-2 mb-8 pt-6 border-t border-white/[0.06]">
                    {cap.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-xs font-mono text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: cap.accent }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={cap.href}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-neutral-300 group-hover:text-white transition-colors uppercase tracking-wider"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
