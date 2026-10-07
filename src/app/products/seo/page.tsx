import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductWowPreview } from "@/components/product-wow-preview";
import { FreelancerTrustBanner } from "@/components/freelancer-trust-banner";
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
  keywords: [
    "Ashmyra SEO",
    "GEO Platform",
    "Generative Engine Optimization",
    "AI Search Engine Optimization",
    "ChatGPT Citation Tracking",
    "Perplexity AI Rank Tracking",
    "Technical SEO Audit",
    "Semantic Graph Clustering",
  ],
  openGraph: {
    title: "Ashmyra SEO | Generative Search & GEO Intelligence Platform",
    description:
      "Dominate search across Google and conversational AI answer engines with automated audits, semantic clustering, and real-time GEO citation telemetry.",
    url: "https://ashmyra.com/products/seo",
    images: [{ url: "/wow/wow2-seo-intelligence.png", width: 1200, height: 675, alt: "Ashmyra SEO Platform Preview" }],
  },
  alternates: {
    canonical: "https://ashmyra.com/products/seo",
  },
};

export default function AshmyraSeoPage() {
  const product = PRODUCTS.find((p) => p.id === "seo")!;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 01. Hero Header ────────────────────────────────────────── */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs text-sky-300 font-mono mb-6">
            <Search className="w-3.5 h-3.5 text-sky-400" />
            <span>AI-Native Search &amp; GEO Intelligence Platform</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            SEO Intelligence, Built for the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-sky-200">
              Generative Search Era.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Legacy SEO suites were built for ten blue links. Ashmyra SEO tracks traditional Google and Bing rankings alongside Generative Engine Optimization (GEO)—measuring brand citations across ChatGPT, Perplexity, Gemini, and Claude.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=seo-audit"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-xl shadow-sky-600/30 transition-all hover:scale-105 active:scale-95"
            >
              Request Enterprise SEO Intelligence Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources/seo-in-the-age-of-generative-engines"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-neutral-200 text-sm border border-white/[0.1] transition-all"
            >
              Read Generative Search Guide
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </Link>
          </div>
        </div>

        {/* ── 02. WOW Visual Showcase ─────────────────────────────────── */}
        <ProductWowPreview
          imageSrc="/wow/wow2-seo-intelligence.png"
          imageAlt="Ashmyra SEO Intelligence & GEO Suite"
          productName="Ashmyra SEO & GEO Intelligence Suite"
          productTagline="Continuous web crawler, PageRank rebalancer, and Generative Engine Optimization citation monitor."
          accentColor="#22d3ee"
          badgeText="Real-Time Search Telemetry Online"
          telemetry={[
            { label: "GEO Citation Rate", value: "94.2%", detail: "AI answer engine recommendation accuracy" },
            { label: "Index Health Score", value: "99/100", detail: "Zero technical canonical or crawl budget leaks" },
            { label: "SERP Rebalancing", value: "<1 Hr", detail: "Automated internal link & anchor patch deployment" },
            { label: "Enterprise Proven", value: "100+", detail: "SEO architectures delivered via Freelancer.com" },
          ]}
          capabilities={[
            {
              title: "Generative Engine Optimization (GEO)",
              description: "Monitors and engineers brand entity prominence so LLMs cite your website as the authoritative primary source.",
            },
            {
              title: "Autonomous Site Health Crawler",
              description: "Continuous background audits flag canonical traps, Core Web Vitals regressions, and Schema mismatches in real time.",
            },
            {
              title: "Semantic Vector Clustering",
              description: "Clusters keywords using deep semantic embeddings rather than obsolete literal strings, uncovering untapped search intent.",
            },
          ]}
        />

        {/* ── 03. Freelancer.com 100+ Delivery Proof Banner ─────────────── */}
        <div className="my-16">
          <FreelancerTrustBanner category="SEO, GEO & Enterprise Search Architecture" />
        </div>

        {/* ── 04. Live Copilot Interactive Showcase ────────────────────── */}
        <div className="mb-20">
          <InteractiveCopilot />
        </div>

        {/* ── 05. Platform Modules Grid ───────────────────────────────── */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 block mb-2 font-semibold">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
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

        {/* ── 06. Comparison Table ─────────────────────────────────────── */}
        <div className="bg-[#090d16] border border-white/[0.08] rounded-3xl p-8 sm:p-12 mb-20 overflow-x-auto">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2 font-semibold">
              Architectural Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
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
                <td className="py-4 px-4 text-sky-300 font-mono font-bold">Native LLM citation &amp; Perplexity tracking</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-white">Keyword Grouping</td>
                <td className="py-4 px-4 text-neutral-500">Exact string match lists</td>
                <td className="py-4 px-4 text-sky-300 font-mono font-bold">Semantic entity clustering with vector embeddings</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-white">Issue Diagnostics</td>
                <td className="py-4 px-4 text-neutral-500">Static reports with hundreds of confusing rows</td>
                <td className="py-4 px-4 text-sky-300 font-mono font-bold">Interactive AI Copilot that pinpoints exact root causes</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-white">Schema Automation</td>
                <td className="py-4 px-4 text-neutral-500">Manual copy-paste code snippets</td>
                <td className="py-4 px-4 text-sky-300 font-mono font-bold">Automated programmatic JSON-LD hierarchy generation</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── 07. Bottom CTA ──────────────────────────────────────────── */}
        <div className="text-center p-10 sm:p-14 rounded-3xl bg-sky-950/20 border border-sky-500/30">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Accelerate your search visibility in Google &amp; AI answer engines
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Get an in-depth audit of your domain&apos;s technical health, entity citations, and high-value keyword opportunities.
          </p>
          <Link
            href="/contact?intent=seo"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-xl shadow-sky-600/30 transition-all hover:scale-105"
          >
            <span>Book SEO Intelligence Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
