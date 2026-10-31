import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/data/resources";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Terminal,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Blog & Technical Insights | Ashmyra Technologies",
  description:
    "In-depth architectural guides, engineering perspectives, and technical breakdowns on Agentic AI swarms, Generative Engine Optimization (GEO), and enterprise platform design.",
  alternates: {
    canonical: "https://www.ashmyra.com/blog",
  },
  openGraph: {
    title: "Engineering Blog & Technical Insights | Ashmyra Technologies",
    description:
      "In-depth architectural guides and engineering perspectives on Agentic AI swarms, GEO, and enterprise software.",
    url: "https://www.ashmyra.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-24 min-h-screen bg-[#05070c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={[{ label: "Engineering Blog" }]} />
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono mb-4 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>Architecture &amp; Engineering Insights</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-5"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Engineering Insights &amp;{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #cbd5e1 40%, #818cf8 80%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              System Blueprints.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans">
            Rigorous technical breakdowns on Autonomous Agentic Swarms, Generative
            Engine Optimization (GEO), and resilient enterprise systems written directly
            by our engineering practitioners.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:scale-[1.015] hover:border-white/25 overflow-hidden"
              style={{
                background:
                  "linear-gradient(160deg, rgba(14, 18, 30, 0.96) 0%, rgba(6, 8, 14, 0.98) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 20px 50px -15px rgba(0, 0, 0, 0.8)",
              }}
            >
              {/* Top Accent Hairline */}
              <div
                className="absolute top-0 inset-x-8 h-[1px] opacity-30 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #818cf8, transparent)",
                }}
              />

              {/* Ambient Hover Bloom */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none group-hover:opacity-35 transition-opacity"
                style={{ background: "#818cf8" }}
              />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/25">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2
                  className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-indigo-200 transition-colors mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {article.title}
                </h2>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans line-clamp-3 mb-6">
                  {article.summary}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{article.date}</span>
                </div>

                <div className="flex items-center gap-1 text-indigo-400 group-hover:text-indigo-300 font-semibold transition-colors">
                  <span>Read Blueprint</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Global CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-indigo-950/40 via-slate-900/40 to-indigo-950/30 border border-indigo-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl">
          <div>
            <div className="text-xs font-mono font-semibold text-indigo-300 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Engineering Practicum</span>
            </div>
            <h3
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Have a complex technical system to architect?
            </h3>
            <p className="text-sm text-neutral-300 max-w-xl">
              Engage directly with our core engineering practitioners. We move systems from
              whiteboard specification to resilient production scale.
            </p>
          </div>

          <Link
            href="/contact?intent=discovery"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-sm transition-all duration-200 hover:scale-105 shadow-lg shadow-indigo-500/25 shrink-0"
          >
            <span>Book Technical Discovery</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
