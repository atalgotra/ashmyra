import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { InteractiveCopilot } from "@/components/interactive-copilot";
import { 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  BarChart2, 
  Globe, 
  Cpu,
  Layers,
  ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra SEO | AI-Native SEO Intelligence Platform & GEO Suite",
  description:
    "An AI-native SEO intelligence platform designed for modern search: Google, Bing, Generative Engine Optimization (GEO), ChatGPT citations, and autonomous site health audits.",
  alternates: {
    canonical: "https://ashmyra.com/products/seo",
  },
};

export default function AshmyraSeoPage() {
  const product = PRODUCTS.find((p) => p.id === "seo")!;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs text-sky-300 font-mono mb-6">
            <Search className="w-3.5 h-3.5 text-sky-400" />
            <span>AI-Native Search Intelligence Platform</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            SEO Intelligence, Built for the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-sky-200">
              Generative Search Era.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Legacy SEO suites were created for ten blue links. Ashmyra SEO tracks traditional Google and Bing rankings alongside Generative Engine Optimization (GEO)—measuring brand citations across ChatGPT, Perplexity, Gemini, and AI answer engines.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=seo-audit"
              className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-lg shadow-sky-600/30 transition-all"
            >
              Request Enterprise SEO Intelligence Audit
            </Link>
            <Link
              href="/resources/seo-in-the-age-of-generative-engines"
              className="px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-neutral-200 text-xs border border-white/[0.08] transition-all"
            >
              Read Generative Search Guide
            </Link>
          </div>
        </div>

        {/* Live Copilot Showcase */}
        <div className="mb-20">
          <InteractiveCopilot />
        </div>

        {/* Platform Modules */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 block mb-2">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              End-to-End Search &amp; Answer Engine Domination
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Generative Engine Optimization (GEO)",
                desc: "Track how AI models synthesize and cite your brand entities across conversational answer engines.",
                badge: "LLM Visibility",
              },
              {
                title: "Semantic Topic Clustering",
                desc: "Cluster search terms using vector semantic embeddings to build complete topical authority pages.",
                badge: "Semantic Graph",
              },
              {
                title: "Autonomous Site Health Crawl",
                desc: "Continuous deep-crawl inspection flagging canonical traps, Core Web Vitals regressions, and Schema issues.",
                badge: "Technical SEO",
              },
              {
                title: "Competitor Displacement Engine",
                desc: "Identify high-value keywords and content voids that competitors are failing to address.",
                badge: "Gap Intelligence",
              },
              {
                title: "Real-Time SERP Volatility",
                desc: "Monitor rank changes hourly to detect algorithm updates before organic conversions drop.",
                badge: "SERP Telemetry",
              },
              {
                title: "Automated Schema.org Mesh",
                desc: "Dynamically generate and validate JSON-LD structured data for products, articles, FAQs, and organizations.",
                badge: "Structured Data",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-sky-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-sky-400">
                      0{i + 1}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-300 font-mono">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison: Traditional SEO vs AI-Native SEO */}
        <div className="bg-[#090d16] border border-white/[0.08] rounded-3xl p-8 sm:p-12 mb-20 overflow-x-auto">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
              Architectural Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Legacy SEO Platforms vs. Ashmyra SEO
            </h2>
          </div>

          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/[0.08] text-neutral-400 font-mono text-[11px] uppercase">
                <th className="py-3 px-4">Feature &amp; Metric</th>
                <th className="py-3 px-4">Traditional SEO Suites</th>
                <th className="py-3 px-4 text-sky-400 font-bold">Ashmyra SEO Intelligence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04] text-neutral-300">
              <tr>
                <td className="py-4 px-4 font-semibold text-white">AI Search &amp; GEO Tracking</td>
                <td className="py-4 px-4 text-neutral-500">Not supported or primitive add-on</td>
                <td className="py-4 px-4 text-sky-300 font-mono">Native LLM citation &amp; Perplexity tracking</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-white">Keyword Grouping</td>
                <td className="py-4 px-4 text-neutral-500">Exact string match lists</td>
                <td className="py-4 px-4 text-sky-300 font-mono">Semantic entity clustering with vector embeddings</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-white">Issue Diagnostics</td>
                <td className="py-4 px-4 text-neutral-500">Static reports with hundreds of confusing rows</td>
                <td className="py-4 px-4 text-sky-300 font-mono">Interactive AI Copilot that pinpoints exact root causes</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-white">Schema Automation</td>
                <td className="py-4 px-4 text-neutral-500">Manual copy-paste code snippets</td>
                <td className="py-4 px-4 text-sky-300 font-mono">Automated programmatic JSON-LD hierarchy generation</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center p-10 rounded-3xl bg-sky-950/20 border border-sky-500/30">
          <h3 className="text-2xl font-bold text-white mb-2">
            Accelerate your search visibility in Google &amp; AI answer engines
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Get an in-depth audit of your domain&apos;s technical health, entity citations, and high-value keyword opportunities.
          </p>
          <Link
            href="/contact?intent=seo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-lg shadow-sky-600/30 transition-all"
          >
            <span>Book SEO Intelligence Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
