"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Code, Layers, Sparkles } from "lucide-react";

interface VerifiedProject {
  id: string;
  name: string;
  discipline: string;
  context: string;
  engineered: string;
  tags: string[];
  accentColor: string;
}

const APPROVED_PROJECTS: VerifiedProject[] = [
  {
    id: "fmo",
    name: "FMO",
    discipline: "Modern Web & 3D Graphics",
    context: "Digital fashion platform requiring modern visual presentation and high-performance interactive surface rendering.",
    engineered: "Architected 3D product visualization using Three.js / WebGL, dynamic catalog interfaces in Next.js, and responsive edge-cached asset delivery.",
    tags: ["3D WebGL", "Next.js", "Edge Caching", "Responsive Layouts"],
    accentColor: "from-cyan-500/20 to-indigo-500/10",
  },
  {
    id: "1a-veda",
    name: "1A Veda",
    discipline: "SaaS & Web Platform",
    context: "Ayurvedic wellness ecosystem connecting consultations, health education content, and personalized product recommendations.",
    engineered: "Engineered scalable web platform architecture, structured consultation scheduling workflows, and transactional database integrity.",
    tags: ["Full-Stack Architecture", "Relational Modeling", "Workflow Automation"],
    accentColor: "from-emerald-500/20 to-cyan-500/10",
  },
  {
    id: "ramaroma-herbs",
    name: "Ramaroma Herbs",
    discipline: "Digital Operations & Commerce",
    context: "Natural herbal product company scaling digital distribution, customer channels, and inventory synchronization.",
    engineered: "Implemented real-time inventory management synchronization, order fulfillment pipelines, and resilient digital storefront architecture.",
    tags: ["Inventory Sync", "API Integration", "High-Availability Storefront"],
    accentColor: "from-sky-500/20 to-blue-500/10",
  },
  {
    id: "divagam",
    name: "Divagam",
    discipline: "Enterprise Portal & Media Architecture",
    context: "Multi-format lifestyle and spiritual community platform delivering rich audio, video, and community interactions.",
    engineered: "Engineered media streaming architecture with edge delivery, community portal interfaces, and optimized Core Web Vitals.",
    tags: ["Media Streaming", "Edge Delivery", "Semantic Structure"],
    accentColor: "from-amber-500/20 to-indigo-500/10",
  },
];

export function CapabilitiesSelectedWork() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="selected-work"
      ref={containerRef}
      className="relative py-20 sm:py-24 bg-[#06080F] border-t border-white/[0.06] overflow-hidden scroll-mt-28"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/[0.05] text-[11px] font-mono tracking-wider text-cyan-400 uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              APPROVED CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
              Selected Engineering Deployments.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 font-light">
              Demonstrated technical implementations across web architecture, real-time sync, and digital platforms.
            </p>
          </div>

          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group shrink-0"
          >
            <span>View All Engineering Work</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {APPROVED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl border border-white/[0.07] bg-[#0A0D18]/90 hover:bg-[#0D1222] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/[0.03]"
            >
              <div>
                {/* Discipline Tag & Status */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/[0.08] px-2.5 py-1 rounded-md border border-cyan-500/20">
                    {project.discipline}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Client Deployment
                  </span>
                </div>

                {/* Project Name */}
                <h3 className="text-2xl font-semibold text-white tracking-tight mb-3">
                  {project.name}
                </h3>

                {/* Context */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 block mb-1">
                    Project Context
                  </span>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {project.context}
                  </p>
                </div>

                {/* What Was Engineered */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 block mb-1">
                    What Was Engineered
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {project.engineered}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="pt-5 border-t border-white/[0.06] flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded border border-white/[0.05]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
