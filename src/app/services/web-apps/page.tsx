import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Zap, 
  Layers, 
  ShieldCheck 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Modern Web & Enterprise Portal Engineering Services",
  description:
    "Engineering high-performance web applications, enterprise portals, and conversion-optimized digital surfaces with Next.js, React, and TypeScript.",
  alternates: {
    canonical: "https://ashmyra.com/services/web-apps",
  },
};

export default function WebAppsServicePage() {
  const service = SERVICES.find((s) => s.slug === "web-apps")!;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300 font-mono mb-6">
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>Digital Surfaces &amp; Portal Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Modern Web &amp; Enterprise Portal
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-200">
              Engineering That Converts.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            {service?.longDesc}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=web-eng"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2"
            >
              <span>Consult with Web Engineers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="glass-panel rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">Core Engineering Deliverables</h2>
            </div>
            <div className="space-y-3.5">
              {service?.deliverables.map((d) => (
                <div key={d} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-300">{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                <Code2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">Technology Stack &amp; Edge Delivery</h2>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {service?.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-white/[0.08] space-y-3">
              <div className="text-xs font-mono uppercase text-neutral-500 font-semibold tracking-wider">
                Enterprise Standards
              </div>
              <div className="flex items-center gap-4 text-xs text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Sub-second TTFB</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WCAG 2.2 AA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 font-bold block mb-2">
              Real-World Applications
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Bespoke Web Platforms Built for Scale
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service?.useCases.map((uc) => (
              <div key={uc.title} className="glass-panel rounded-2xl p-6 space-y-2">
                <h3 className="text-base font-bold text-white">{uc.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-[#07090e] border border-emerald-500/20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ready for Production</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-xl mx-auto">
            Ready to upgrade your web architecture?
          </h2>
          <p className="text-sm text-neutral-400 max-w-lg mx-auto">
            Let&apos;s build an ultra-fast, conversion-focused digital surface tailored to your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-600/30 transition-all"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
