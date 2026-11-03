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
      className="relative py-16 sm:py-20 bg-[#06080F] border-t border-white/[0.06] overflow-hidden scroll-mt-36"
    >
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(14,165,233,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase mb-4 font-semibold" style={{ backgroundColor: "rgba(2, 132, 199, 0.1)", border: "1px solid var(--border)", color: "#0284c7" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#0284c7" }} />
            ENGINEERING STACK & FOUNDATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
            Structured for Production Reliability.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed font-light" style={{ color: "var(--text-muted)" }}>
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
                className="group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-[1.01] scroll-mt-28"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                {/* Header of Card */}
                <div className="flex items-start justify-between gap-4 mb-6 pb-5" style={{ borderBottom: "1px solid var(--border)" }}>
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300" style={{ backgroundColor: "rgba(2, 132, 199, 0.1)", border: "1px solid var(--border)", color: "#0284c7" }}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-wider uppercase font-semibold" style={{ color: "#0284c7" }}>
                        {item.discipline}
                      </span>
                      <h3 className="text-lg font-bold tracking-tight mt-0.5" style={{ color: "var(--text)" }}>
                        {item.category}
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-md" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                    {item.badge}
                  </span>
                </div>

                {/* Architecture Role Description */}
                <p className="text-sm leading-relaxed mb-6 font-normal" style={{ color: "var(--text-muted)" }}>
                  {item.description}
                </p>

                {/* Technology List (Restrained Editorial Rows) */}
                <div className="space-y-3">
                  <div className="text-[10px] font-mono uppercase tracking-wider mb-2 font-semibold" style={{ color: "var(--text-muted)" }}>
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
                        className={`flex items-start justify-between gap-3 p-2.5 rounded-lg transition-colors ${anchorId ? "scroll-mt-28" : ""}`}
                        style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}
                      >
                        <div className="flex items-start gap-2.5 min-w-0">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#0284c7" }} />
                          <div className="min-w-0">
                            <span className="text-xs font-semibold block truncate" style={{ color: "var(--text)" }}>
                              {tech.name}
                            </span>
                            <span className="text-[11px] block truncate font-normal" style={{ color: "var(--text-muted)" }}>
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
