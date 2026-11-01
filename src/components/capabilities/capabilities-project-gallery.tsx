"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Layers } from "lucide-react";

interface ProjectItem {
  id: string;
  name: string;
  domain: string;
  discipline: string;
  engineered: string;
  accent: string;
}

const APPROVED_PROJECTS: ProjectItem[] = [
  {
    id: "fmo",
    name: "FMO",
    domain: "Fashion & Lifestyle",
    discipline: "Modern Web & 3D WebGL",
    engineered: "Interactive 3D product showcase, responsive Next.js architecture, and edge-cached catalog delivery.",
    accent: "text-purple-400",
  },
  {
    id: "1a-veda",
    name: "1A Veda",
    domain: "Ayurveda & Wellness",
    discipline: "SaaS & Platform Engineering",
    engineered: "Full-stack wellness platform, consultation booking workflows, and transactional database integrity.",
    accent: "text-emerald-400",
  },
  {
    id: "ramaroma-herbs",
    name: "Ramaroma Herbs",
    domain: "Natural Products",
    discipline: "Operations & Commerce",
    engineered: "Resilient digital storefront, distributor synchronization APIs, and automated inventory tracking.",
    accent: "text-cyan-400",
  },
  {
    id: "divagam",
    name: "Divagam",
    domain: "Spiritual & Media",
    discipline: "Portal & Media Architecture",
    engineered: "Edge-delivered media streaming infrastructure, community portal workflows, and Core Web Vitals optimization.",
    accent: "text-amber-400",
  },
];

export function CapabilitiesProjectGallery() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      id="selected-work"
      ref={containerRef}
      className="relative py-16 sm:py-20 bg-[#05070E] border-t border-white/[0.06] overflow-hidden scroll-mt-36"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/[0.05] text-[11px] font-mono tracking-wider text-cyan-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              APPROVED CLIENT ENGAGEMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
              Systems Engineered in Production.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              Real-world software architectures, 3D web graphics, and operational platforms engineered for confirmed client deployments.
            </p>
          </div>

          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors group shrink-0"
          >
            <span>Explore All Client Work</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Cinematic Visual Chassis with Approved Composite Screenshot */}
        <div className="rounded-2xl sm:rounded-3xl border border-white/[0.1] bg-[#070A14] overflow-hidden shadow-2xl mb-8">
          {/* OS Window Titlebar */}
          <div className="px-4 py-2.5 bg-[#0A0E1D] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-slate-300 text-[11px]">ashmyra-client-showcase.runtime.png</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-slate-400">
              <span>FMO</span>
              <span>•</span>
              <span>1A VEDA</span>
              <span>•</span>
              <span>RAMAROMA</span>
              <span>•</span>
              <span>DIVAGAM</span>
            </div>
          </div>

          {/* Genuine Composite Visual Asset */}
          <div className="relative w-full aspect-[21/9] min-h-[260px] sm:min-h-[380px] bg-black">
            <Image
              src="/wow/wow7-engineering-playground.png"
              alt="Ashmyra Technologies Client Deployments - FMO, 1A Veda, Ramaroma Herbs, Divagam"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-center filter contrast-[1.02]"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A14] via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>

          {/* 4 Clean Editorial Columns Strip */}
          <div className="p-5 sm:p-6 bg-[#080C1A] border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {APPROVED_PROJECTS.map((proj) => (
              <div
                key={proj.name}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                    <span className={proj.accent}>{proj.discipline}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {proj.name}
                  </h3>
                  <div className="text-[11px] font-mono text-slate-400 mb-2">
                    {proj.domain}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {proj.engineered}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/[0.04]">
                  <Link
                    href="/our-work"
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-white transition-colors group/p"
                  >
                    <span>View Case Details</span>
                    <ArrowRight className="w-3 h-3 group-hover/p:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
