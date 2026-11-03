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
      className="relative py-16 sm:py-20 overflow-hidden scroll-mt-36"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", borderTop: "1px solid var(--border)" }}
    >
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle at bottom left, var(--accent, #4f46e5), transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase mb-4 font-semibold" style={{ backgroundColor: "var(--theme-pill-bg, rgba(79,70,229,0.1))", border: "1px solid var(--border)", color: "var(--accent, #4f46e5)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent, #4f46e5)" }} />
            ENGINEERING LIFECYCLE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
            How We Take Systems From Idea to Production.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed font-light" style={{ color: "var(--text-muted)" }}>
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
                className="group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-mono font-extrabold opacity-40 transition-colors" style={{ color: "var(--text-muted)" }}>
                      {stage.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all" style={{ backgroundColor: "var(--theme-pill-bg, rgba(79,70,229,0.1))", border: "1px solid var(--border)", color: "var(--accent, #4f46e5)" }}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold" style={{ color: "var(--accent, #4f46e5)" }}>
                    {stage.tagline}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight mt-1 mb-3" style={{ color: "var(--text)" }}>
                    {stage.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed font-normal mb-6" style={{ color: "var(--text-muted)" }}>
                    {stage.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <span className="text-[10px] font-mono uppercase tracking-wider block mb-2 font-semibold" style={{ color: "var(--text-muted)" }}>
                    Key Outputs
                  </span>
                  <ul className="space-y-1.5">
                    {stage.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent, #4f46e5)" }} />
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
