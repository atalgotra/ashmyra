import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, ENGINEERING_PROCESS } from "@/data/services";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Cpu, 
  Search, 
  Globe, 
  Layers, 
  ShieldCheck 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services & 7-Stage Process",
  description:
    "Ashmyra partners with enterprises to architect, design, build, and scale custom software, Agentic AI, high-volume APIs, and generative search systems.",
  alternates: {
    canonical: "https://ashmyra.com/services",
  },
};

export default function ServicesPage() {
  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case "software-development":
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case "ai-development":
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case "seo":
        return <Search className="w-5 h-5 text-sky-400" />;
      default:
        return <Globe className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Disciplined Software Engineering</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            From Idea to Production.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-400 leading-relaxed">
            We architect and build bespoke software, AI systems, and cloud platforms for organizations that value technical excellence and long-term architectural integrity over quick hacks.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12 mb-24">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="glass-panel rounded-3xl p-8 sm:p-10 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      {getServiceIcon(service.slug)}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        {service.title}
                      </h2>
                      <p className="text-xs text-neutral-400 font-mono mt-0.5">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {service.longDesc}
                  </p>

                  {/* Deliverables */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                      Core Engineering Deliverables:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.deliverables.map((del, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/25 transition-all"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Tech Stack & Use Cases */}
                <div className="lg:col-span-5 bg-[#07090e] border border-white/[0.06] rounded-2xl p-6 space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                      Representative Use Cases
                    </span>
                    <div className="space-y-3">
                      {service.useCases.map((uc, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                          <span className="text-xs font-semibold text-white block mb-0.5">{uc.title}</span>
                          <span className="text-[11px] text-neutral-400 leading-relaxed block">{uc.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                      Primary Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((tech, i) => (
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

        {/* 7-Stage Process Framework */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-2">
              Delivery Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              The Ashmyra 7-Stage Engineering Process
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              From initial discovery to continuous scaling with observable telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ENGINEERING_PROCESS.map((stage) => (
              <div
                key={stage.step}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10">
                      {stage.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-neutral-500">
                      {stage.phase}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{stage.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">{stage.desc}</p>
                </div>
                <div className="pt-3 border-t border-white/[0.05]">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                    Outputs:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {stage.outputs.slice(0, 2).map((out, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.04] text-neutral-300 font-mono"
                      >
                        {out}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-10 rounded-3xl bg-indigo-950/20 border border-indigo-500/30">
          <h3 className="text-2xl font-bold text-white mb-2">
            Have a mission-critical software project to build?
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Schedule an initial engineering consultation with our technical leads.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all"
          >
            <span>Start an Engineering Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
