"use client";

import React from "react";
import Link from "next/link";
import { INDUSTRIES } from "@/data/solutions";
import {
  Truck,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Briefcase,
  Factory,
  Landmark,
  Building,
  Code2,
  ArrowUpRight,
  Layers,
  Sparkles,
} from "lucide-react";

export function SolutionsIndustryGrid() {
  const getIndustryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Truck className="w-5 h-5 text-amber-400" />;
      case 1:
        return <GraduationCap className="w-5 h-5 text-sky-400" />;
      case 2:
        return <HeartPulse className="w-5 h-5 text-rose-400" />;
      case 3:
        return <ShoppingBag className="w-5 h-5 text-emerald-400" />;
      case 4:
        return <Briefcase className="w-5 h-5 text-indigo-400" />;
      case 5:
        return <Factory className="w-5 h-5 text-cyan-400" />;
      case 6:
        return <Landmark className="w-5 h-5 text-violet-400" />;
      case 7:
        return <Building className="w-5 h-5 text-blue-400" />;
      case 8:
        return <Code2 className="w-5 h-5 text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  const getIndustryTag = (index: number) => {
    const tags = [
      "Document AI & OCR",
      "LMS & Lifecycle Telemetry",
      "HIPAA Compliance & Rostering",
      "Omnichannel Sync & AI Agents",
      "Time Vaults & CRM Pipelines",
      "Preventive Telemetry & IoT",
      "KYC & Anomaly Radar",
      "Listing Syndication & Leases",
      "Multi-Tenant SaaS Stack",
    ];
    return tags[index] || "Bespoke Engineering";
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs text-cyan-300 font-mono mb-4">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>Cross-Sector Production Deployments</span>
        </div>
        <h2
          className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Domain Expertise Across Modern Verticals
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
          Every industry has distinct regulatory gates, legacy data formats, and concurrency demands. We engineer purpose-built architectures without generic buzzwords.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDUSTRIES.map((ind, i) => (
          <div
            key={i}
            className="group relative p-7 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Top Row: Icon + Index */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIndustryIcon(i)}
                </div>
                <span className="text-xs font-mono text-neutral-500 font-semibold">
                  0{i + 1}
                </span>
              </div>

              {/* Title & Tag */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {ind.name}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                {ind.desc}
              </p>
            </div>

            {/* Bottom Tag & Quick Action */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-[10px] font-mono text-cyan-300/80 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                {getIndustryTag(i)}
              </span>

              <Link
                href={`/contact?industry=${encodeURIComponent(ind.name)}`}
                className="text-neutral-400 group-hover:text-white transition-colors flex items-center gap-1 font-mono text-[11px]"
              >
                <span>Architect</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
