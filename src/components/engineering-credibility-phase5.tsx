"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Cpu,
  Database,
  Globe,
  Smartphone,
  Box,
  Zap,
  Layers,
  Cloud,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Minimal Capability Categories (Requirement 19)
const CRED_CATEGORIES = [
  { name: "AI", icon: Cpu },
  { name: "Data", icon: Database },
  { name: "Web", icon: Globe },
  { name: "Mobile", icon: Smartphone },
  { name: "3D", icon: Box },
  { name: "Automation", icon: Zap },
  { name: "Enterprise", icon: Layers },
  { name: "Cloud", icon: Cloud },
];

// Approved Real Projects Only (Requirement 20)
const GALLERY_PROJECTS = [
  {
    name: "FMO",
    category: "Fashion & 3D Web",
    desc: "Luxury e-commerce ecosystem featuring 3D product visualization and automated order workflows.",
    accent: "#c084fc",
  },
  {
    name: "1A Veda",
    category: "Ayurveda & Wellness Platform",
    desc: "Digital wellness platform with automated subscription models and intelligent customer journeys.",
    accent: "#34d399",
  },
  {
    name: "Ramaroma Herbs",
    category: "Natural Products & Distribution",
    desc: "B2B distributor platform with synchronized inventory pipelines and automated SEO content distribution.",
    accent: "#38bdf8",
  },
  {
    name: "Divagam",
    category: "Spiritual & Lifestyle Commerce",
    desc: "Omnichannel marketplace with real-time stock sync and personalized digital engagement.",
    accent: "#f59e0b",
  },
];

export function EngineeringCredibilityPhase5() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="credibility"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 space-y-20">

        {/* Section 19: Headline & 3 Powerful Statements */}
        <div ref={headlineRef} className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Engineering Discipline</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            &ldquo;WE DON&apos;T JUST TALK ABOUT TECHNOLOGY.&rdquo;
          </h2>

          {/* Three Clean Statements (Requirement 19) */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-2 font-mono text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wider">
            <span className="text-white">WE ENGINEER IT.</span>
            <span className="text-indigo-400">&bull;</span>
            <span className="text-sky-300">WE INTEGRATE IT.</span>
            <span className="text-indigo-400">&bull;</span>
            <span className="text-emerald-300">WE SHIP IT.</span>
          </div>

          {/* Minimal Capability Categories (Requirement 19) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-6">
            {CRED_CATEGORIES.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.07] text-xs font-mono text-neutral-300"
                >
                  <Icon className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{c.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 18: Verified Real Metrics Proof */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-[#090c16] border border-white/[0.08] flex items-center gap-6">
            <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300 font-mono">
              100+
            </div>
            <div className="space-y-1">
              <div className="text-sm font-mono uppercase tracking-wider text-white font-bold">
                Digital Experiences Built
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Engineered web applications, high-performance platforms, and interactive client systems.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#090c16] border border-white/[0.08] flex items-center gap-6">
            <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300 font-mono">
              14+
            </div>
            <div className="space-y-1">
              <div className="text-sm font-mono uppercase tracking-wider text-white font-bold">
                Years Technical Experience
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Data Science &bull; AI Architecture &bull; Prompt Engineering &bull; Intelligent Systems.
              </p>
            </div>
          </div>
        </div>

        {/* Section 20: Real Projects Interactive Gallery (Horizontal Grid) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">
                VERIFIED PROJECT IMPLEMENTATIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Real Digital Platforms in Production
              </h3>
            </div>
            <div className="text-xs font-mono text-neutral-400">
              Approved Client Implementations
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_PROJECTS.map((proj) => (
              <div
                key={proj.name}
                className="p-6 rounded-3xl bg-[#090c16] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]"
                      style={{ color: proj.accent }}
                    >
                      {proj.category}
                    </span>
                  </div>

                  <h4 className="text-2xl font-black text-white group-hover:text-indigo-200 transition-colors font-sans">
                    {proj.name}
                  </h4>

                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    {proj.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
