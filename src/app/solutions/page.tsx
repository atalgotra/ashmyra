import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SOLUTIONS, INDUSTRIES } from "@/data/solutions";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Building, 
  Rocket, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Zap, 
  Briefcase 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions | Tailored for Startups, SMEs, Enterprises & Teams",
  description:
    "Discover how Ashmyra solves operational bottlenecks for Startups, SMEs, Enterprises, HR teams, Marketing teams, and Operations leaders.",
  alternates: {
    canonical: "https://ashmyra.com/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Targeted Business Outcomes</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Solutions Built for Your Scale &amp; Team
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Whether you are launching an early-stage SaaS product, automating mid-market operations, or modernizing enterprise legacy infrastructure, Ashmyra provides targeted architecture.
          </p>
        </div>

        {/* Primary Solutions Grid */}
        <div className="space-y-12 mb-24">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              id={sol.id}
              className="glass-panel rounded-3xl p-8 sm:p-10 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-mono">
                      {sol.badge}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      {sol.targetAudience}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {sol.title}
                  </h2>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold block mb-1">
                        Core Challenge
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {sol.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-indigo-500/[0.04] border border-indigo-500/20">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-300 font-bold block mb-1">
                        Ashmyra Solution Architecture
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {sol.ashmyraSolution}
                      </p>
                    </div>
                  </div>

                  {/* Operational Benefit */}
                  <div className="p-4 rounded-2xl bg-[#07090e] border border-white/[0.06]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                      Expected Operational Benefit
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-200 font-medium">
                      {sol.operationalBenefit}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/contact?solution=${sol.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/25 transition-all"
                    >
                      <span>Consult on {sol.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Workflow Column */}
                <div className="lg:col-span-5 bg-[#07090e] border border-white/[0.06] rounded-2xl p-6 space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                      Implementation Workflow
                    </span>
                    <div className="space-y-3">
                      {sol.workflow.map((wf, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                          <span className="w-5 h-5 rounded-full bg-indigo-500/15 text-indigo-300 flex items-center justify-center shrink-0 font-mono text-[10px] font-bold mt-0.5">
                            {i + 1}
                          </span>
                          <span>{wf}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                      Core Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sol.technology.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.06] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Solutions Matrix */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-2">
              Industry Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Domain Expertise Across Modern Verticals
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              Solving real business bottlenecks without generic buzzwords or hollow promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-400 block mb-2">
                    0{i + 1}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">{ind.name}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-10 rounded-3xl bg-indigo-950/20 border border-indigo-500/30">
          <h3 className="text-2xl font-bold text-white mb-2">
            Discuss your company&apos;s specific operational requirements
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Our systems engineers will review your workflows and provide an architectural blueprint tailored to your scale.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all"
          >
            <span>Request Solution Architecture Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
