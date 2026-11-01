"use client";

import React, { useRef } from "react";
import { 
  Compass, 
  Layers, 
  PenTool, 
  Code2, 
  ShieldCheck, 
  Activity 
} from "lucide-react";

interface LifecycleStage {
  step: string;
  name: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  deliverables: string[];
}

const PROCESS_STAGES: LifecycleStage[] = [
  {
    step: "01",
    name: "DISCOVER",
    icon: Compass,
    tagline: "Scope & Business Alignment",
    description: "Understand business objectives, user journeys, data constraints, and technical feasibility before a single line of code is written.",
    deliverables: ["Technical Feasibility Assessment", "Data & API Audit", "Architecture Roadmap"],
  },
  {
    step: "02",
    name: "ARCHITECT",
    icon: Layers,
    tagline: "System Boundaries & Models",
    description: "Define database schemas, multi-tenant boundaries, API contracts, AI prompt evaluation pipelines, and security protocols.",
    deliverables: ["Entity & Schema Specifications", "API Integration Contracts", "Security & Auth Blueprint"],
  },
  {
    step: "03",
    name: "DESIGN",
    icon: PenTool,
    tagline: "Workflows & Interaction Systems",
    description: "Create interactive prototypes, stateful design tokens, component hierarchies, and responsive UX tailored for technical clarity.",
    deliverables: ["Interactive Component Specs", "Design Token Library", "User Flow Prototypes"],
  },
  {
    step: "04",
    name: "ENGINEER",
    icon: Code2,
    tagline: "Iterative Sprint Execution",
    description: "Develop full-stack applications, asynchronous background workers, agent tool-call handlers, and performant user interfaces.",
    deliverables: ["Type-Safe Codebases", "Asynchronous Workers", "Production APIs"],
  },
  {
    step: "05",
    name: "VALIDATE",
    icon: ShieldCheck,
    tagline: "Quality, Security & Concurrency",
    description: "Execute end-to-end integration tests, load testing, model hallucination evaluations, accessibility audits, and vulnerability scans.",
    deliverables: ["Automated Test Suites", "Core Web Vitals Verification", "Latency Benchmarks"],
  },
  {
    step: "06",
    name: "DEPLOY & EVOLVE",
    icon: Activity,
    tagline: "Release & Observability",
    description: "Release through deterministic containerized CI/CD, configure continuous monitoring and observability, and iterate on usage feedback.",
    deliverables: ["Deterministic CI/CD Pipelines", "Telemetry Dashboards", "Ongoing Iteration Cycles"],
  },
];

export function CapabilitiesProcess() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="engineering-process"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-[#04060B] border-t border-white/[0.06] overflow-hidden scroll-mt-28"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/[0.05] text-[11px] font-mono tracking-wider text-indigo-400 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            ENGINEERING LIFECYCLE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
            How We Take Systems From Idea to Production.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed font-light">
            A disciplined, six-stage engineering methodology designed to mitigate technical debt, validate assumptions early, and deliver durable software systems.
          </p>
        </div>

        {/* 6 Stages Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative">
          {PROCESS_STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.step}
                className="group relative rounded-2xl border border-white/[0.07] bg-[#0A0D18]/80 hover:bg-[#0D1222] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/[0.02]"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-mono font-bold text-white/10 group-hover:text-indigo-400/30 transition-colors">
                      {stage.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-slate-300 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-medium">
                    {stage.tagline}
                  </span>
                  <h3 className="text-lg font-semibold text-white tracking-tight mt-1 mb-3">
                    {stage.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">
                    {stage.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-white/[0.05]">
                  <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider block mb-2">
                    Key Outputs
                  </span>
                  <ul className="space-y-1.5">
                    {stage.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-indigo-400/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
