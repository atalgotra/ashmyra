"use client";

import React from "react";
import Link from "next/link";
import {
  Cpu,
  Database,
  Bot,
  Layers,
  Globe,
  Smartphone,
  Palette,
  Zap,
  Cloud,
  ArrowRight,
} from "lucide-react";

export interface TechCapabilityPillar {
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  accent: string;
  href: string;
}

export const TECHNICAL_PILLARS: TechCapabilityPillar[] = [
  {
    title: "AI ENGINEERING",
    tagline: "Fine-Tuned Models & LLM Runtimes",
    description: "Productionizing custom LLMs, SLMs, vector indexing, and low-latency inference pipelines with deterministic guardrails.",
    icon: Cpu,
    accent: "#818cf8",
    href: "/capabilities/ai-development",
  },
  {
    title: "DATA SCIENCE",
    tagline: "Predictive Analytics & Master Synthesis",
    description: "Statistical machine learning, anomaly detection, predictive forecasting, and unified enterprise golden-record lakes.",
    icon: Database,
    accent: "#22d3ee",
    href: "/capabilities/software-development",
  },
  {
    title: "AGENTIC AI",
    tagline: "Autonomous Swarms & Task Consensus",
    description: "Self-healing multi-agent swarms executing complex multi-system workflows without manual supervision.",
    icon: Bot,
    accent: "#a78bfa",
    href: "/capabilities/ai-development",
  },
  {
    title: "ENTERPRISE SOFTWARE",
    tagline: "High-Concurrency SaaS & ERP",
    description: "Mission-critical architectures engineered for 99.99% uptime, multi-tenant security, and automated statutory payroll.",
    icon: Layers,
    accent: "#38bdf8",
    href: "/capabilities/software-development",
  },
  {
    title: "WEB DEVELOPMENT",
    tagline: "Edge-Rendered Next.js Digital Surfaces",
    description: "Ultra-fast server-rendered React applications with accessible design systems and Generative Engine Optimization (GEO).",
    icon: Globe,
    accent: "#34d399",
    href: "/capabilities/web-apps",
  },
  {
    title: "MOBILE ENGINEERING",
    tagline: "Native iOS, Android & Flutter Systems",
    description: "High-performance mobile architectures designed for fluid 120Hz gesture interaction and offline-first cloud sync.",
    icon: Smartphone,
    accent: "#f43f5e",
    href: "/capabilities/software-development",
  },
  {
    title: "3D / GSAP",
    tagline: "Interactive Kinetic WebGL & Motion",
    description: "Studio-grade WebGL shaders, Three.js kinetic scenes, and GSAP ScrollTrigger timelines creating immersive digital distinction.",
    icon: Palette,
    accent: "#ec4899",
    href: "/capabilities/web-apps",
  },
  {
    title: "AUTOMATION",
    tagline: "Event-Driven Workflow Orchestration",
    description: "Eliminating manual enterprise overhead through deterministic event buses, document parsing, and approval gates.",
    icon: Zap,
    accent: "#fbbf24",
    href: "/capabilities/software-development",
  },
  {
    title: "CLOUD & INTEGRATIONS",
    tagline: "Resilient Microservices & API Mesh",
    description: "Kubernetes orchestration, serverless edge networks, secure gRPC/REST APIs, and continuous delivery pipelines.",
    icon: Cloud,
    accent: "#60a5fa",
    href: "/capabilities/software-development",
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
              Technical Disciplines
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            ENGINEERING CAPABILITIES.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
            Nine specialized engineering disciplines engineered into one unified technology practice. No agency layers. Direct production execution.
          </p>
        </div>

        {/* ── 9 Capabilities Clean 3x3 Grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.16] hover:bg-white/[0.04] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="p-3 rounded-xl transition-transform group-hover:scale-105"
                      style={{
                        background: `${pillar.accent}14`,
                        border: `1px solid ${pillar.accent}30`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: pillar.accent }} />
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3
                    className="text-lg font-bold text-white mb-1 tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {pillar.title}
                  </h3>

                  <div
                    className="text-xs font-mono font-medium mb-3"
                    style={{ color: pillar.accent }}
                  >
                    {pillar.tagline}
                  </div>

                  <p className="text-xs sm:text-[12.5px] text-neutral-300 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-neutral-400 group-hover:text-neutral-200">
                  <span>Explore Practice</span>
                  <span className="text-neutral-500 group-hover:text-white">→</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
