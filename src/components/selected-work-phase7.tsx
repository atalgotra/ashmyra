"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ExternalLink } from "lucide-react";

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  focus: string;
  description: string;
  tags: string[];
  year: string;
  accent: string;
}

const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: "fmo",
    name: "FMO",
    category: "Fashion & 3D Web",
    focus: "Interactive 3D Digital Experience",
    description:
      "Engineering a modern, high-performance digital fashion surface featuring 3D product visualization, interactive web graphics, and responsive mobile architecture.",
    tags: ["3D WebGL", "Next.js", "Performance Optimization", "Digital Commerce"],
    year: "2024",
    accent: "#c084fc",
  },
  {
    id: "1a-veda",
    name: "1A Veda",
    category: "Ayurveda & Wellness",
    focus: "Holistic Health Digital Ecosystem",
    description:
      "Architecting a scalable web platform connecting users with authentic Ayurvedic wellness resources, personalized health consultations, and direct fulfillment workflows.",
    tags: ["Platform Architecture", "Cloud Infrastructure", "Full-Stack Web"],
    year: "2023",
    accent: "#34d399",
  },
  {
    id: "ramaroma-herbs",
    name: "Ramaroma Herbs",
    category: "Natural Products",
    focus: "Digital Commerce & Inventory Operations",
    description:
      "Developing a resilient digital presence and inventory management pipeline for natural herbal products, supporting multi-channel customer engagement and streamlined operations.",
    tags: ["Inventory Sync", "Web Platform", "Operational Automation"],
    year: "2024",
    accent: "#38bdf8",
  },
  {
    id: "divagam",
    name: "Divagam",
    category: "Spiritual & Lifestyle",
    focus: "Community & Content Architecture",
    description:
      "Designing and engineering an immersive digital platform for spiritual community engagement, multi-format media streaming, and structured lifestyle guidance.",
    tags: ["Content Delivery", "Edge Performance", "Community Portal"],
    year: "2025",
    accent: "#f59e0b",
  },
];

export function SelectedWorkPhase7() {
  return (
    <section className="relative bg-[#07090e] py-20 sm:py-24 lg:py-28 overflow-hidden text-white border-b border-white/[0.06]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-[11px] font-mono font-semibold tracking-wider text-indigo-400 uppercase">
                Selected Work
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Engineered Client Engagements
            </h2>
          </div>

          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-neutral-300 hover:text-white transition-colors uppercase tracking-wider"
          >
            <span>View All Implementations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── Project Grid (2x2 Editorial Layout) ────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SELECTED_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="p-8 sm:p-10 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[11px] font-mono font-semibold uppercase px-2.5 py-0.5 rounded-md"
                    style={{
                      color: proj.accent,
                      background: `${proj.accent}15`,
                      border: `1px solid ${proj.accent}30`,
                    }}
                  >
                    {proj.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">{proj.year}</span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {proj.name}
                </h3>

                <div className="text-xs font-mono text-neutral-300 mb-4 font-medium">
                  {proj.focus}
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed font-sans mb-6">
                  {proj.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono text-neutral-300 bg-white/[0.04] border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">
                  Engineering Architecture
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-neutral-300 group-hover:text-white transition-colors"
                >
                  <span>Discuss Similar System</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
