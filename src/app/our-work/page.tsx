import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CapabilityProof } from "@/components/capability-proof";
import { ScrollToTopOnMount } from "@/components/scroll-to-top-on-mount";
import { CASE_STUDY_PREVIEWS } from "@/data/resources";
import { ArrowRight, CheckCircle2, Layers, Cpu, Database, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work | Ashmyra Technologies",
  description:
    "Explore Ashmyra's engineering capabilities — AI systems, data intelligence, agentic automation, and enterprise software built for real-world execution.",
  alternates: { canonical: "https://www.ashmyra.com/our-work" },
};

export default function OurWorkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090e] text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <ScrollToTopOnMount />

      {/* Page header */}
      <div className="relative bg-[#050608] border-b border-white/[0.06] pt-28 pb-12 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(99,102,241,0.09)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono tracking-widest text-indigo-300 uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Engineering Proof
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Our Work
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl mx-auto">
            Systems we&apos;ve engineered — AI architectures, data pipelines, and enterprise
            platforms built for production, at scale.
          </p>
        </div>
      </div>

      {/* Full capability + selected work section */}
      <CapabilityProof />

      {/* Enterprise Case Studies & Technical Milestones */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-white/[0.08]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Production Architecture Deep Dives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Enterprise Deployments &amp; Case Studies
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Detailed technical breakdowns of real-world enterprise engagements where Ashmyra engineered resilient, high-concurrency systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {CASE_STUDY_PREVIEWS.map((study) => (
            <div
              key={study.id}
              className="glass-panel p-8 rounded-3xl border border-white/[0.08] hover:border-indigo-500/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
                    {study.industry}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {study.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white leading-snug">
                  {study.title}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="font-semibold text-neutral-200 block mb-1">Challenge:</span>
                    <p className="text-neutral-400 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="font-semibold text-neutral-200 block mb-1">Architecture &amp; Approach:</span>
                    <p className="text-neutral-400 leading-relaxed">{study.approach}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="font-semibold text-neutral-200 block mb-1">Delivered Solution:</span>
                    <p className="text-neutral-400 leading-relaxed">{study.solution}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.08]">
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2 font-semibold">
                  Integrated Technologies:
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-neutral-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Standards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl border border-white/[0.08] text-center space-y-3">
            <Cpu className="w-6 h-6 text-indigo-400 mx-auto" />
            <h3 className="text-base font-bold text-white">Deterministic Agent Loops</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Strict schema contracts, error recovery boundaries, and human-in-the-loop triggers ensure zero hallucination in critical transactional paths.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/[0.08] text-center space-y-3">
            <Database className="w-6 h-6 text-emerald-400 mx-auto" />
            <h3 className="text-base font-bold text-white">Resilient Data Ingestion</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              High-throughput streaming queues, automated schema migrations, and idempotent pipeline workers ensure zero data loss during high spikes.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/[0.08] text-center space-y-3">
            <ShieldCheck className="w-6 h-6 text-cyan-400 mx-auto" />
            <h3 className="text-base font-bold text-white">Enterprise Security &amp; Compliance</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Role-based access control, encrypted telemetry logs, SOC-2 readiness patterns, and automated secrets rotation across all deployments.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-10 rounded-3xl bg-indigo-950/20 border border-indigo-500/30 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Have a Complex Engineering Architecture to Build?
          </h2>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Consult directly with our principal engineers to scope technical architectures, timelines, and deployment targets.
          </p>
          <Link
            href="/contact?intent=enterprise-architecture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all"
          >
            <span>Book a Technical Architecture Review</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
