"use client";

import React from "react";
import Image from "next/image";
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
  ShieldCheck,
  Zap,
} from "lucide-react";

const INDUSTRY_METADATA = [
  {
    image: "/industries/logistics.jpg",
    accent: "#f59e0b",
    accentBorder: "group-hover:border-amber-500/50",
    accentGlow: "from-amber-500/25",
    tag: "Document AI & Automated OCR",
    sla: "400ms OCR // Zero Data Loss",
    badgeColor: "text-amber-300 bg-amber-500/10 border-amber-500/25",
  },
  {
    image: "/industries/edtech.jpg",
    accent: "#38bdf8",
    accentBorder: "group-hover:border-sky-500/50",
    accentGlow: "from-sky-500/25",
    tag: "LMS & Lifecycle Telemetry",
    sla: "Adaptive AI // Real-Time Grading",
    badgeColor: "text-sky-300 bg-sky-500/10 border-sky-500/25",
  },
  {
    image: "/industries/healthcare.jpg",
    accent: "#f43f5e",
    accentBorder: "group-hover:border-rose-500/50",
    accentGlow: "from-rose-500/25",
    tag: "HIPAA Compliance & Rostering",
    sla: "HIPAA Enclave // 256-bit KMS",
    badgeColor: "text-rose-300 bg-rose-500/10 border-rose-500/25",
  },
  {
    image: "/industries/retail.jpg",
    accent: "#10b981",
    accentBorder: "group-hover:border-emerald-500/50",
    accentGlow: "from-emerald-500/25",
    tag: "Omnichannel Sync & AI Agents",
    sla: "10k Req/s // Zero Cart Drop",
    badgeColor: "text-emerald-300 bg-emerald-500/10 border-emerald-500/25",
  },
  {
    image: "/industries/proservices.jpg",
    accent: "#818cf8",
    accentBorder: "group-hover:border-indigo-500/50",
    accentGlow: "from-indigo-500/25",
    tag: "Time Vaults & CRM Pipelines",
    sla: "Automated Invoicing // CRM Sync",
    badgeColor: "text-indigo-300 bg-indigo-500/10 border-indigo-500/25",
  },
  {
    image: "/industries/manufacturing.jpg",
    accent: "#06b6d4",
    accentBorder: "group-hover:border-cyan-500/50",
    accentGlow: "from-cyan-500/25",
    tag: "Preventive Telemetry & IoT",
    sla: "Sub-5ms IoT // Edge Gateway",
    badgeColor: "text-cyan-300 bg-cyan-500/10 border-cyan-500/25",
  },
  {
    image: "/industries/fintech.jpg",
    accent: "#a855f7",
    accentBorder: "group-hover:border-purple-500/50",
    accentGlow: "from-purple-500/25",
    tag: "KYC & Anomaly Radar",
    sla: "SOC2 Ready // Immutable Ledger",
    badgeColor: "text-purple-300 bg-purple-500/10 border-purple-500/25",
  },
  {
    image: "/industries/realestate.jpg",
    accent: "#3b82f6",
    accentBorder: "group-hover:border-blue-500/50",
    accentGlow: "from-blue-500/25",
    tag: "Listing Syndication & Leases",
    sla: "Auto-Lease // Real-time MLS",
    badgeColor: "text-blue-300 bg-blue-500/10 border-blue-500/25",
  },
  {
    image: "/industries/tech.jpg",
    accent: "#14b8a6",
    accentBorder: "group-hover:border-teal-500/50",
    accentGlow: "from-teal-500/25",
    tag: "Multi-Tenant SaaS Stack",
    sla: "K8s Pods // Zero-Downtime CI/CD",
    badgeColor: "text-teal-300 bg-teal-500/10 border-teal-500/25",
  },
];

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

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs text-cyan-300 font-mono mb-4 shadow-sm">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>Cross-Sector Production Deployments</span>
        </div>
        <h2
          className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Domain Expertise Across Modern Verticals
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          Every industry has distinct regulatory gates, legacy data formats, and concurrency demands. We engineer purpose-built architectures without generic buzzwords.
        </p>
      </div>

      {/* 9-Tile Bento Grid with Cinematic Schematics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDUSTRIES.map((ind, i) => {
          const meta = INDUSTRY_METADATA[i] || INDUSTRY_METADATA[0];

          return (
            <div
              key={i}
              className={`group relative p-7 rounded-3xl bg-[#06080f] border border-white/[0.08] ${meta.accentBorder} transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl hover:-translate-y-1`}
            >
              {/* Background 3D Cybernetic Schematic with Gradient Mask */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image
                  src={meta.image}
                  alt={`${ind.name} schematic architecture`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-25 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Dark Gradient Overlay for Maximum Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080f] via-[#06080f]/80 to-[#06080f]/35" />
                {/* Ambient Top-Right Radial Glow Flare */}
                <div
                  className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${meta.accentGlow} to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>

              {/* Content Above Image */}
              <div className="relative z-10">
                {/* Top Row: Icon + Index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#090d19]/90 border border-white/[0.12] backdrop-blur-md flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                    {getIndustryIcon(i)}
                  </div>
                  <span className="text-xs font-mono text-neutral-400 font-semibold px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                    0{i + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 transition-colors">
                  {ind.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                  {ind.desc}
                </p>

                {/* SLA & Engineering Credential Badge */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 border border-white/[0.1] text-[10px] font-mono text-neutral-300 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span>{meta.sla}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Tag & Direct Action */}
              <div className="relative z-10 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                <span
                  className={`text-[10px] font-mono px-2.5 py-1 rounded-md border font-medium ${meta.badgeColor}`}
                >
                  {meta.tag}
                </span>

                <Link
                  href={`/contact?industry=${encodeURIComponent(ind.name)}`}
                  className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1 font-mono text-xs font-semibold group/link"
                >
                  <span>Architect</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform text-cyan-400" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
