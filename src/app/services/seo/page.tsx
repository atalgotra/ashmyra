import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Globe, 
  BarChart2, 
  Code 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Search & Generative Engine Optimization (GEO) Services",
  description:
    "Engineering maximum search visibility for both Google and AI answer engines like ChatGPT, Perplexity, and Gemini.",
  alternates: {
    canonical: "https://ashmyra.com/services/seo",
  },
};

export default function SeoServicePage() {
  const service = SERVICES.find((s) => s.slug === "seo")!;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs text-sky-300 font-mono mb-6">
            <Search className="w-3.5 h-3.5 text-sky-400" />
            <span>Search &amp; Generative Engine Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Search &amp; Generative Engine
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-sky-200">
              Optimization (GEO) Engineering.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            {service.longDesc}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=seo-eng"
              className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-lg shadow-sky-600/30 transition-all"
            >
              Consult with Search &amp; GEO Engineers
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="glass-panel rounded-3xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">Search Engineering Deliverables</h2>
            <div className="space-y-3">
              {service.deliverables.map((del, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-300">{del}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">Core Technology &amp; Standards</h2>
            <div className="grid grid-cols-2 gap-3">
              {service.technologies.map((tech, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <span className="text-xs font-mono font-bold text-sky-300">{tech}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed pt-2">
              Combining technical SEO audits, Core Web Vitals optimization, semantic schema graphs, and generative citation tracking.
            </p>
          </div>
        </div>

        <div className="text-center p-10 rounded-3xl bg-sky-950/20 border border-sky-500/30">
          <h3 className="text-2xl font-bold text-white mb-2">
            Secure top search authority in both Google &amp; AI answer engines
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Request an audit of your technical architecture and knowledge graph entities.
          </p>
          <Link
            href="/contact?intent=seo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-lg shadow-sky-600/30 transition-all"
          >
            <span>Request Enterprise SEO Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
