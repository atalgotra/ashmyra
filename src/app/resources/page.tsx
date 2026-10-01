import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES, CASE_STUDY_PREVIEWS } from "@/data/resources";
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  Clock, 
  FileText, 
  CheckCircle2, 
  Layers 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources & Insights | AI Architecture, SEO in AI Search & Workforce Tech",
  description:
    "Explore in-depth technical guides, engineering perspectives, and architectural case studies from the engineers at Ashmyra.",
  alternates: {
    canonical: "https://ashmyra.com/resources",
  },
};

export default function ResourcesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono mb-4">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>Knowledge Base &amp; Technical Perspectives</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Engineering Insights &amp; Blueprints
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Practical analyses on Agentic AI orchestration, Generative Engine Optimization (GEO), modern workforce architectures, and scalable cloud engineering.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
            <h2 className="text-xl font-bold text-white">Featured Technical Articles</h2>
            <span className="text-xs text-neutral-500 font-mono">Continuous updates</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <div
                key={article.slug}
                className="glass-panel rounded-3xl p-7 flex flex-col justify-between space-y-4 hover:border-indigo-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-3">
                    <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <span className="text-[10px] text-neutral-500 font-mono">{article.date}</span>
                  <Link
                    href={`/resources/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Case Studies & Blueprints (Grounded, non-fabricated) */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-1">
                Verified Architectural Blueprints
              </span>
              <h2 className="text-2xl font-bold text-white">System Deployments &amp; Case Studies</h2>
            </div>
            <span className="text-xs text-neutral-500 font-mono">
              Transparent Problem &bull; Approach &bull; Outcome
            </span>
          </div>

          <div className="space-y-8">
            {CASE_STUDY_PREVIEWS.map((cs) => (
              <div
                key={cs.id}
                className="glass-panel rounded-3xl p-8 sm:p-10 relative overflow-hidden space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
                  <div>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-mono border border-emerald-500/20">
                      {cs.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                      {cs.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-neutral-400 font-mono block">{cs.industry}</span>
                    <span className="text-[11px] text-emerald-400 font-mono">{cs.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold block mb-1.5">
                      The Operational Challenge
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-indigo-500/[0.03] border border-indigo-500/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-300 font-bold block mb-1.5">
                      Engineering Approach
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {cs.approach}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1.5">
                      Deployed Solution
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.technologies.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/contact?blueprint=${cs.id}`}
                    className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    <span>Request Architectural Discussion</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
