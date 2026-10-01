"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Cpu, 
  Code2, 
  Database, 
  Zap, 
  Globe, 
  ArrowUpRight, 
  Sparkles 
} from "lucide-react";

interface ServiceCapability {
  id: string;
  name: string;
  category: string;
  tagline: string;
  spec: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const CAPABILITIES: ServiceCapability[] = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    category: "CAPABILITY.01",
    tagline: "Autonomous agent swarms, deterministic LLM orchestration & enterprise RAG architectures.",
    spec: "Sub-100ms Inference &bull; Verified Guardrails &bull; Multi-Model",
    href: "/services/ai-development",
    icon: Cpu,
    color: "#818cf8",
  },
  {
    id: "software",
    name: "Software Engineering",
    category: "CAPABILITY.02",
    tagline: "Bespoke SaaS platforms, high-throughput microservices & resilient cloud infrastructures.",
    spec: "Zero Downtime &bull; 99.99% Availability &bull; API First",
    href: "/services/software-development",
    icon: Code2,
    color: "#38bdf8",
  },
  {
    id: "data",
    name: "Data & Vector Systems",
    category: "CAPABILITY.03",
    tagline: "Real-time streaming telemetry, high-dimensional vector graphs & predictive pipelines.",
    spec: "HNSW Indexing &bull; Sub-10ms Similarity &bull; Scalable ETL",
    href: "/services",
    icon: Database,
    color: "#a855f7",
  },
  {
    id: "automation",
    name: "Autonomous Automation",
    category: "CAPABILITY.04",
    tagline: "Self-healing enterprise workflows, automated reconciliations & human-in-the-loop controls.",
    spec: "Event-Driven &bull; SOC-2 Ready &bull; Audit Trail",
    href: "/services",
    icon: Zap,
    color: "#fbbf24",
  },
  {
    id: "products",
    name: "Digital Products & Web",
    category: "CAPABILITY.05",
    tagline: "Ultra-fast Next.js digital platforms, high-conversion web apps & design systems.",
    spec: "100/100 Lighthouse &bull; Edge Computing &bull; Global CDN",
    href: "/services/seo",
    icon: Globe,
    color: "#22d3ee",
  },
];

export function ServicesMinimal() {
  const [hoveredId, setHoveredId] = useState<string | null>(CAPABILITIES[0].id);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-b border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Minimal Hero Header */}
        <div className="max-w-4xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Engineering Philosophy</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.08]">
            WE BUILD WHAT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-indigo-100">
              DOESN&apos;T EXIST YET.
            </span>
          </h2>
        </div>

        {/* Minimal Expandable Stack */}
        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {CAPABILITIES.map((cap) => {
            const isHovered = hoveredId === cap.id;
            const Icon = cap.icon;

            return (
              <div
                key={cap.id}
                onMouseEnter={() => setHoveredId(cap.id)}
                className={`py-8 sm:py-10 transition-all duration-300 group cursor-pointer ${
                  isHovered ? "bg-white/[0.02] px-4 -mx-4 rounded-2xl" : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  
                  {/* Category and Title */}
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-neutral-500 font-semibold w-24">
                      {cap.category}
                    </span>
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2 rounded-xl transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${cap.color}15`, color: cap.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl sm:text-3xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                        {cap.name}
                      </h3>
                    </div>
                  </div>

                  {/* Microcopy & Spec */}
                  <div className="lg:max-w-md space-y-1 pl-28 lg:pl-0">
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {cap.tagline}
                    </p>
                    <span
                      className="text-[10px] font-mono text-neutral-500 block"
                      dangerouslySetInnerHTML={{ __html: cap.spec }}
                    />
                  </div>

                  {/* Explore Link Arrow */}
                  <div className="hidden sm:flex items-center justify-end pl-28 lg:pl-0">
                    <Link
                      href={cap.href}
                      data-cursor="explore"
                      className="p-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
