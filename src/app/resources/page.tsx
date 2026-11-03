import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES, CASE_STUDY_PREVIEWS } from "@/data/resources";
import { Breadcrumb } from "@/components/breadcrumb";
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
  title: "AI Architecture & GEO Insights",
  description:
    "Technical guides, engineering perspectives, and architectural case studies on agentic AI, generative search (GEO), and modern workforce technology.",
  alternates: {
    canonical: "https://www.ashmyra.com/resources",
  },
  openGraph: {
    title: "AI Architecture & GEO Insights | Ashmyra",
    description:
      "Technical guides, engineering perspectives, and architectural case studies on agentic AI, generative search (GEO), and modern workforce technology.",
    url: "https://www.ashmyra.com/resources",
  },
};

export default function ResourcesPage() {
  return (
    <div
      className="pt-32 pb-24 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Breadcrumb Navigation Trail */}
          <div className="mb-6 flex justify-center">
            <Breadcrumb items={[{ name: "Resources & Insights" }]} />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono mb-4" style={{ backgroundColor: "var(--theme-pill-bg, rgba(79,70,229,0.1))", border: "1px solid var(--border)", color: "var(--accent, #4f46e5)" }}>
            <BookOpen className="w-3.5 h-3.5" style={{ color: "var(--accent, #4f46e5)" }} />
            <span className="font-semibold">Knowledge Base &amp; Technical Perspectives</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
            Engineering Insights &amp; Blueprints
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Practical analyses on Agentic AI orchestration, Generative Engine Optimization (GEO), modern workforce architectures, and scalable cloud engineering.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8 pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
            <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>Featured Technical Articles</h2>
            <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>Continuous updates</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <div
                key={article.slug}
                className="rounded-3xl p-7 flex flex-col justify-between space-y-4 transition-all hover:scale-[1.01]"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3" style={{ color: "var(--text-muted)" }}>
                    <span className="px-2 py-0.5 rounded font-semibold" style={{ backgroundColor: "var(--theme-pill-bg, rgba(79,70,229,0.1))", color: "var(--accent, #4f46e5)" }}>
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 leading-snug" style={{ color: "var(--text)" }}>
                    {article.title}
                  </h3>

                  <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between" style={{ borderTop: "1px solid var(--border)" }}>
                  <span className="text-[10px] font-mono" style={{ color: "var(--text-muted)" }}>{article.date}</span>
                  <Link
                    href={`/resources/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold hover:underline"
                    style={{ color: "var(--accent, #4f46e5)" }}
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider block mb-1 font-bold" style={{ color: "var(--accent, #4f46e5)" }}>
                Verified Architectural Blueprints
              </span>
              <h2 className="text-2xl font-bold" style={{ color: "var(--text)" }}>System Deployments &amp; Case Studies</h2>
            </div>
            <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
              Transparent Problem &bull; Approach &bull; Outcome
            </span>
          </div>

          <div className="space-y-8">
            {CASE_STUDY_PREVIEWS.map((cs) => (
              <div
                key={cs.id}
                className="rounded-3xl p-8 sm:p-10 relative overflow-hidden space-y-6"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
                  <div>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full font-mono font-semibold" style={{ backgroundColor: "rgba(5, 150, 105, 0.1)", border: "1px solid rgba(5, 150, 105, 0.3)", color: "#059669" }}>
                      {cs.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-2" style={{ color: "var(--text)" }}>
                      {cs.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono block" style={{ color: "var(--text-muted)" }}>{cs.industry}</span>
                    <span className="text-[11px] font-mono font-semibold" style={{ color: "#059669" }}>{cs.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold block mb-1.5" style={{ color: "#e11d48" }}>
                      The Operational Challenge
                    </span>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {cs.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold block mb-1.5" style={{ color: "var(--accent, #4f46e5)" }}>
                      Engineering Approach
                    </span>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {cs.approach}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold block mb-1.5" style={{ color: "#059669" }}>
                      Deployed Solution
                    </span>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {cs.solution}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.technologies.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded font-mono font-medium" style={{ backgroundColor: "var(--theme-pill-bg, rgba(79,70,229,0.1))", border: "1px solid var(--border)", color: "var(--text)" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/contact?blueprint=${cs.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
                    style={{ color: "var(--accent, #4f46e5)" }}
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
