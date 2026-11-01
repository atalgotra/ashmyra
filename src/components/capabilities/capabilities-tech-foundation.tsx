"use client";

import React, { useRef } from "react";
import { 
  Bot, 
  Server, 
  Layout, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

interface TechGroup {
  discipline: string;
  category: string;
  icon: React.ElementType;
  description: string;
  badge: string;
  technologies: {
    name: string;
    description: string;
  }[];
}

const TECH_FOUNDATION: TechGroup[] = [
  {
    discipline: "AI & MACHINE LEARNING",
    category: "Intelligent Systems",
    icon: Bot,
    badge: "Reasoning & Retrieval",
    description: "Production LLM integration pipelines, agent runtimes, and grounded retrieval architectures designed for deterministic business execution.",
    technologies: [
      { name: "LLM Integration", description: "Multi-provider SDKs, structured function outputs & fallback orchestration" },
      { name: "RAG Systems", description: "Hybrid lexical/dense vector search, chunking & contextual reranking" },
      { name: "Agent Orchestration", description: "Stateful agent DAGs, multi-step planning & tool validation" },
      { name: "Vector Search", description: "High-dimensional embedding storage, index caching & similarity search" },
      { name: "Model Evaluation", description: "Automated regression testing, hallucination scoring & guardrails" },
    ],
  },
  {
    discipline: "BACKEND & APPLICATION ENGINEERING",
    category: "Services & APIs",
    icon: Server,
    badge: "Core Architecture",
    description: "Modular microservices and monolithic backends engineered for strict concurrency, ACID transactional guarantees, and secure data isolation.",
    technologies: [
      { name: "Python & FastAPI", description: "Asynchronous microservices, high-throughput model endpoints & data APIs" },
      { name: "Node.js & TypeScript", description: "Event-driven microservices, real-time gateways & serverless functions" },
      { name: "REST & Streaming APIs", description: "Idempotent resource APIs, Server-Sent Events & WebSocket channels" },
      { name: "PostgreSQL", description: "Relational modeling, multi-tenant schemas & transactional integrity" },
      { name: "MongoDB", description: "Flexible document schemas, time-series telemetry & log retention" },
    ],
  },
  {
    discipline: "FRONTEND & DIGITAL EXPERIENCES",
    category: "User Interfaces",
    icon: Layout,
    badge: "Interactive Surfaces",
    description: "Modern, type-safe web applications engineered for sub-second page loads, accessibility compliance, and editorial visual immersion.",
    technologies: [
      { name: "React & Next.js", description: "App Router, Server Components, dynamic ISR & edge rendering" },
      { name: "TypeScript", description: "Strict end-to-end type safety from database schemas to UI props" },
      { name: "Tailwind CSS", description: "Custom utility-first token architecture and zero-runtime CSS" },
      { name: "Three.js & WebGL", description: "Interactive 3D geometry, GPU-accelerated shaders & camera paths" },
      { name: "GSAP Animation", description: "ScrollTrigger timelines, physics-based micro-interactions & SVG transforms" },
    ],
  },
  {
    discipline: "DATA & INFRASTRUCTURE",
    category: "Cloud Operations",
    icon: Cpu,
    badge: "DevOps & Cloud",
    description: "Containerized deployments, deterministic CI/CD pipelines, and active observability foundations ensuring enterprise resilience.",
    technologies: [
      { name: "Data Pipelines", description: "ETL ingestion pipelines, scheduled batch transformations & event validation" },
      { name: "Cloud Architecture & VPC", description: "Scalable compute, automated VPC routing & managed container services" },
      { name: "Object Storage & Lakes", description: "Encrypted asset buckets, signed access URLs & geo-distributed caching" },
      { name: "Containers & Docker", description: "Deterministic container runtimes, multi-stage builds & health-check probes" },
      { name: "CI/CD & Observability", description: "Automated test runners, distributed tracing & proactive log monitoring" },
    ],
  },
];

export function CapabilitiesTechFoundation() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="tech-foundation"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-[#06080F] border-t border-white/[0.06] overflow-hidden scroll-mt-28"
    >
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(14,165,233,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/[0.05] text-[11px] font-mono tracking-wider text-cyan-400 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            ENGINEERING STACK & FOUNDATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
            Structured for Production Reliability.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed font-light">
            Every tool in our engineering ecosystem is chosen for enterprise stability, strict concurrency, and maintainability. We don't chase transient trends—we build with proven, verified technologies.
          </p>
        </div>

        {/* 4 Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TECH_FOUNDATION.map((item, index) => {
            const Icon = item.icon;
            const isDataInfra = item.discipline.includes("DATA");
            const cardId = isDataInfra ? "data-engineering" : undefined;

            return (
              <div
                key={item.discipline}
                id={cardId}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#0A0D18]/90 hover:bg-[#0C1020] p-6 sm:p-8 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/[0.03] scroll-mt-28"
              >
                {/* Header of Card */}
                <div className="flex items-start justify-between gap-4 mb-6 pb-5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-wider text-cyan-400 uppercase font-medium">
                        {item.discipline}
                      </span>
                      <h3 className="text-lg font-semibold text-white tracking-tight mt-0.5">
                        {item.category}
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">
                    {item.badge}
                  </span>
                </div>

                {/* Architecture Role Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                {/* Technology List (Restrained Editorial Rows) */}
                <div className="space-y-3">
                  <div className="text-[10px] font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Verified Capabilities
                  </div>
                  {item.technologies.map((tech) => {
                    let anchorId: string | undefined = undefined;
                    if (tech.name.includes("Cloud Architecture")) anchorId = "cloud-architecture";
                    else if (tech.name.includes("Data Pipelines")) anchorId = "data-pipelines";
                    else if (tech.name.includes("CI/CD & Observability")) anchorId = "infrastructure-integration";
                    else if (tech.name.includes("Analytics") || tech.name.includes("PostgreSQL")) anchorId = "analytics-systems";

                    return (
                      <div
                        key={tech.name}
                        id={anchorId}
                        className={`flex items-start justify-between gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors ${anchorId ? "scroll-mt-28" : ""}`}
                      >
                        <div className="flex items-start gap-2.5 min-w-0">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400/80 shrink-0 mt-0.5" />
                          <div className="min-w-0">
                            <span className="text-xs font-medium text-slate-200 block truncate">
                              {tech.name}
                            </span>
                            <span className="text-[11px] text-slate-300 block truncate font-light">
                              {tech.description}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
