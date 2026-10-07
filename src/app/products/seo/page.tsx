import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  ArrowUpRight,
  Zap,
  Code,
  FileText,
  Link2,
  Radio,
  FileCheck,
  DollarSign,
  Check,
  X,
  Activity,
  AlertTriangle,
  Bot
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra SEO | Real-Time GSC/GA4 Sync, Code-Level Audits & GEO at ₹3–₹7/Page",
  description:
    "First-in-market SEO intelligence connecting directly to GSC & GA4 APIs. Real-time streaming crawler, code-level fixes, keyword cannibalization detection, auto-generated Schema.org JSON-LD, and GEO at ₹3–₹7 INR per page.",
  keywords: [
    "Ashmyra SEO",
    "GSC Direct API SEO",
    "GA4 Real Time SEO",
    "Generative Engine Optimization",
    "Keyword Cannibalization Detector",
    "Real Time Streaming Crawler",
    "Auto Schema Generator",
    "Technical SEO Audit with Code Fixes",
    "Semrush Alternative India",
    "PageRank Internal Linking Optimization",
  ],
  openGraph: {
    title: "Ashmyra SEO | Real-Time GSC/GA4 API Sync & GEO Intelligence Platform",
    description:
      "Full website technical audits with code-level fixes, keyword cannibalization detection, and GEO citation tracking at just ₹3 to ₹7 INR per page. Better than Semrush and Ahrefs.",
    url: "https://ashmyra.com/products/seo",
    images: [{ url: "/products/seo/seo-geo-studio.jpg", width: 1200, height: 675, alt: "Ashmyra SEO & GEO Intelligence Suite" }],
  },
  alternates: {
    canonical: "https://ashmyra.com/products/seo",
  },
};

export default function AshmyraSeoPage() {
  const product = PRODUCTS.find((p) => p.id === "seo")!;

  return (
    <div className="relative pt-32 pb-24 min-h-screen bg-[#050608] overflow-hidden">

      {/* ── 00. Atmospheric Ambient Glow & Perspective Radial Grid ───── */}
      <div className="absolute top-0 left-0 right-0 h-[720px] pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute inset-0 dot-bg opacity-35" 
          style={{
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 25%, #000 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 25%, #000 30%, transparent 80%)",
          }}
        />
        
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[380px] rounded-full animate-pulse-glow"
          style={{
            background: "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.22) 0%, rgba(99, 102, 241, 0.12) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div
          className="absolute top-28 left-1/2 -translate-x-1/2 w-[480px] h-[260px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(ellipse at center, rgba(34, 211, 238, 0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 01. Hero Header (Wider Width & Exactly 2 Clean Lines) ───── */}
        <div className="relative text-center max-w-6xl mx-auto mb-12">

          {/* Status & Real-Time Connection Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs text-sky-300 font-mono backdrop-blur-sm">
              <Search className="w-3.5 h-3.5 text-sky-400" />
              <span>AI-Native Search &amp; GEO Core</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300 font-mono backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              <span className="text-white font-semibold">Direct API:</span>
              <span>GSC &amp; GA4 Synced</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs text-amber-300 font-mono backdrop-blur-sm">
              <DollarSign className="w-3.5 h-3.5 text-amber-400" />
              <span>Just ₹3–₹7 INR / Page Flat Rate</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-neutral-300 font-mono backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Zero Monthly Lock-In</span>
            </div>
          </div>

          {/* Headline - Exactly Two Clean Lines */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] font-bold tracking-tight text-white leading-[1.12] font-sans">
            <span className="block">SEO Intelligence, Built for the</span>
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-sky-200 animate-[shimmer_6s_linear_infinite] bg-[length:200%_auto]">
              Generative Search Era.
            </span>
          </h1>

          {/* Adjusted Paragraph Text */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            The first unified platform combining <strong className="text-white font-semibold">direct GSC &amp; GA4 API telemetry</strong>, real-time streaming page crawls, automated code-level fixes, keyword cannibalization detection, and Generative Engine Optimization (GEO)—delivered at an industry-disrupting <strong className="text-white font-semibold">₹3 to ₹7 INR per page</strong>.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=seo-audit"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-xl shadow-sky-600/30 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Request Full Audit at ₹3–₹7/Page
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources/seo-in-the-age-of-generative-engines"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-neutral-200 text-sm border border-white/[0.1] transition-all hover:scale-[1.02]"
            >
              Read Generative Search Whitepaper
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </Link>
          </div>

          {/* Micro-Proof Spec Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Real-Time Live Streaming Crawler</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <Code className="w-3.5 h-3.5 text-sky-400" />
              <span>Full Solutions with Copy-Paste Code</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>95% Cheaper than Semrush &amp; Ahrefs</span>
            </div>
          </div>
        </div>

        {/* ── 02. WOW Visual Showcase ─────────────────────────────────── */}
        <ProductWowPreview
          imageSrc="/products/seo/seo-geo-studio.jpg"
          imageAlt="Ashmyra SEO & GEO Intelligence Suite"
          productName="Ashmyra SEO & GEO Intelligence Suite"
          productTagline="Direct GSC/GA4 API sync, live streaming crawler with code-level fixes, cannibalization resolver, and GEO citation radar at ₹3–₹7/page."
          accentColor="#38bdf8"
          badgeText="GSC & GA4 Direct API Connected • 24/7 Live Stream"
          telemetry={[
            { label: "Cost Advantage", value: "₹3–₹7 / Pg", detail: "Pay-as-you-go flat rate with zero recurring lock-in" },
            { label: "API Sync Latency", value: "Real-Time", detail: "Direct 2-way Google Search Console and GA4 pipe" },
            { label: "Code Fix Accuracy", value: "100%", detail: "Production-ready HTML, Next.js & Schema.org JSON-LD diffs" },
            { label: "GEO AI Citations", value: "96.4%", detail: "Live citation tracking across ChatGPT, Perplexity & Gemini" },
          ]}
          capabilities={[
            {
              title: "Direct GSC & GA4 API Sync with Actionable Keyword Fixes",
              description: "Pipes verified Google clicks, impressions, and queries into real-time dashboards. Pinpoints exactly which keywords to improve with actionable steps to win rankings.",
            },
            {
              title: "Live Streaming Crawler with Instant Code-Level Fixes",
              description: "Streams crawled pages to the UI in real time, detecting render-blocking resources, uncompressed images, missing H1/alt tags, and generating direct code solutions.",
            },
            {
              title: "Keyword Cannibalization & PageRank Equity Optimization",
              description: "Detects internal pages competing for identical queries with automated canonical solutions, while rebalancing internal links for maximum topical authority.",
            },
          ]}
        />

        {/* ── 03. Freelancer.com 100+ Delivery Proof Banner ─────────────── */}
        <div className="my-16">
          <FreelancerTrustBanner category="SEO, GEO & Enterprise Search Architecture" />
        </div>

        {/* ── 04. Comprehensive 6-Pillar Architectural Matrix ─────────── */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 block mb-2 font-semibold">
              Enterprise Feature Matrix
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              First in the Market to Deliver Everything in One Place
            </h2>
            <p className="text-base text-neutral-300 mt-3 leading-relaxed">
              From real-time Google API telemetry to automated code fixes and generative engine optimization—engineered to outperform legacy suites at a tiny fraction of the cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Feature 1: GSC & GA4 Real-Time Direct API Sync */}
            <div 
              className="p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:border-sky-500/50 hover:bg-white/[0.04] group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                border: "1px solid rgba(56, 189, 248, 0.2)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 font-mono font-bold text-sm">
                    01
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                    Direct Google API
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  Direct GSC &amp; GA4 Real-Time Sync
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  Connects directly to Google Search Console and Google Analytics 4 APIs. View verified visitors, impressions, CTR, and average position in real-time—eliminating 3rd-party estimation guesswork.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-sky-300 flex items-center justify-between">
                <span>Verified First-Party Data</span>
                <span className="text-emerald-400">Zero Lag</span>
              </div>
            </div>

            {/* Feature 2: Actionable Keyword Telemetry & Real-Time Solutions */}
            <div 
              className="p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:border-sky-500/50 hover:bg-white/[0.04] group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                border: "1px solid rgba(56, 189, 248, 0.2)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 font-mono font-bold text-sm">
                    02
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/25">
                    Actionable Solutions
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  Keyword Rankings &amp; Live Improvement Solutions
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  Doesn&apos;t just show ranking numbers. Specifically diagnoses <strong className="text-white">which</strong> keywords to improve and <strong className="text-white">how</strong> to improve them, generating real-time title rewrites, content expansion, and snippet tweaks.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-sky-300 flex items-center justify-between">
                <span>Prescriptive Fixes</span>
                <span className="text-neutral-400">High CTR Focus</span>
              </div>
            </div>

            {/* Feature 3: Keyword Cannibalization Detector & Resolver */}
            <div 
              className="p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:border-sky-500/50 hover:bg-white/[0.04] group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                border: "1px solid rgba(56, 189, 248, 0.2)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 font-mono font-bold text-sm">
                    03
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/25">
                    Collision Resolver
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  Keyword Cannibalization Detector
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  Automatically detects internal URLs fighting against each other for the same query. Provides clear solutions: exact canonical tag placements, content consolidation plans, or intent re-targeting.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-sky-300 flex items-center justify-between">
                <span>Automatic Canonical Fix</span>
                <span className="text-amber-400">Zero SERP Dilution</span>
              </div>
            </div>

            {/* Feature 4: Live Streaming Crawler with Full Code-Level Fixes */}
            <div 
              className="p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:border-sky-500/50 hover:bg-white/[0.04] group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                border: "1px solid rgba(56, 189, 248, 0.2)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 font-mono font-bold text-sm">
                    04
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                    Real-Time Stream
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  Live Streaming Crawler &amp; Code Solutions
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  Streams crawled pages to the frontend in real time. Analyzes missing H1s, improper tag hierarchy, missing image alt tags, and GEO issues—providing ready-to-copy code snippets for each issue.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-sky-300 flex items-center justify-between">
                <span>Copy-Paste Code Diff</span>
                <span className="text-cyan-400">Instant Execution</span>
              </div>
            </div>

            {/* Feature 5: Render-Blocking Resources & Uncompressed Images */}
            <div 
              className="p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:border-sky-500/50 hover:bg-white/[0.04] group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                border: "1px solid rgba(56, 189, 248, 0.2)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 font-mono font-bold text-sm">
                    05
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/25">
                    Core Web Vitals
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  Render-Blocking Scripts &amp; Heavy Images
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  Detects JavaScript and CSS slowing down First Contentful Paint (FCP). Pinpoints uncompressed PNG/JPEG assets, calculating exact byte savings and outputting WebP/AVIF migration code.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-sky-300 flex items-center justify-between">
                <span>Speed Optimization</span>
                <span className="text-purple-400">Byte-Level Audit</span>
              </div>
            </div>

            {/* Feature 6: Auto-Generating Schema.org JSON-LD Hierarchy */}
            <div 
              className="p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:border-sky-500/50 hover:bg-white/[0.04] group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                border: "1px solid rgba(56, 189, 248, 0.2)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 font-mono font-bold text-sm">
                    06
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/25">
                    Programmatic Schema
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  Auto-Generating Schema.org JSON-LD
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  Programmatically generates validated JSON-LD structured data for TechArticle, Organization, Product, BreadcrumbList, and FAQPage. Ready for single-click injection into your codebase.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-sky-300 flex items-center justify-between">
                <span>Rich Snippets Guaranteed</span>
                <span className="text-indigo-400">Zero Syntax Errors</span>
              </div>
            </div>

          </div>
        </div>

        {/* ── 05. Advanced Studio: Intent, Internal Links & Humanized Generator */}
        <div className="mb-24 rounded-3xl p-8 sm:p-12 bg-white/[0.02] border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 block mb-2 font-semibold">
              Proprietary AI Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Deep Intent Scoring, Internal Linking &amp; Humanized Content
            </h2>
            <p className="text-sm text-neutral-300 mt-2">
              Going far beyond raw crawl numbers to engineer true topical authority and user engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Box A: Search Intent & AI Quality Score */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Search Intent &amp; AI Content Score
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Scans content against user search intent (Informational, Commercial, Transactional). Evaluates readability, semantic depth, and outputs an AI quality score (e.g. 96/100) with concrete expansion recommendations.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-sky-300">
                Intent Alignment: 96% Match
              </div>
            </div>

            {/* Box B: PageRank Equity Internal Linking */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                  <Link2 className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  PageRank Equity Internal Linking
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Automated internal linking recommendations based on graph centrality algorithms. Suggests exact source-to-target URL pairings and contextual anchor text to eliminate orphan pages.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-emerald-300">
                Link Equity Optimization
              </div>
            </div>

            {/* Box C: Humanized Blog & Meta Studio */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                  <FileText className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Humanized Blog &amp; Meta Generator
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Dedicated AI generator that drafts natural, humanized blog articles and high-CTR meta titles and descriptions. Engineered for both Google SERP CTR and conversational LLM citation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-purple-300">
                Zero AI Artifact Cadence
              </div>
            </div>

          </div>

          {/* White-Label Dossier Banner */}
          <div className="mt-6 p-4 rounded-2xl bg-sky-950/30 border border-sky-500/25 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileCheck className="w-5 h-5 text-sky-400" />
              <div>
                <strong className="text-sm text-white block">White-Label Executive PDF / DOCX Audit Dossier Included</strong>
                <span className="text-xs text-neutral-300">Export branded, client-ready audit reports with one click at zero extra cost.</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 font-mono text-xs border border-sky-500/30">
              Agency Ready
            </span>
          </div>
        </div>

        {/* ── 06. Live Copilot Interactive Showcase ────────────────────── */}
        <div className="mb-24">
          <InteractiveCopilot />
        </div>

        {/* ── 07. World-Class Competitive Comparison & Cost Breakdown ──── */}
        <div className="bg-[#090d16] border border-sky-500/25 rounded-3xl p-6 sm:p-12 mb-24 overflow-hidden relative shadow-2xl shadow-sky-950/20">

          {/* Glow backdrop inside table container */}
          <div 
            className="absolute -top-24 right-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 block mb-2 font-semibold">
              Disruptive Market Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ashmyra SEO vs. Semrush, Ahrefs &amp; Screaming Frog
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-2">
              Why pay $1,500 – $6,000 every year for outdated legacy software when you can get direct Google API accuracy and code-level fixes at ₹3–₹7 per page?
            </p>
          </div>

          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-left text-xs min-w-[720px]">
              <thead>
                <tr className="border-b border-white/[0.1] text-neutral-400 font-mono text-[11px] uppercase">
                  <th className="py-4 px-4 w-[28%]">Feature / Metric</th>
                  <th className="py-4 px-4 w-[28%] text-sky-300 bg-sky-950/40 border-x border-t border-sky-500/30 rounded-t-xl font-bold">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                      Ashmyra SEO Intelligence
                    </div>
                  </th>
                  <th className="py-4 px-4 w-[16%]">Semrush</th>
                  <th className="py-4 px-4 w-[16%]">Ahrefs</th>
                  <th className="py-4 px-4 w-[12%]">Screaming Frog</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-neutral-300">

                {/* Row 1: Pricing */}
                <tr className="bg-sky-500/[0.02]">
                  <td className="py-4 px-4 font-semibold text-white">
                    Pricing &amp; Contract Model
                  </td>
                  <td className="py-4 px-4 bg-sky-950/30 border-x border-sky-500/30 text-emerald-300 font-mono font-bold text-sm">
                    ₹3 – ₹7 INR / page
                    <span className="block text-[10px] text-neutral-400 font-normal">Pay-per-crawl • ₹0 monthly lock-in</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400 font-mono">
                    $139.95 – $499.95/mo
                    <span className="block text-[10px] text-neutral-500">(~₹11,600 – ₹41,500/mo)</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400 font-mono">
                    $129 – $999/mo
                    <span className="block text-[10px] text-neutral-500">(Credits expire monthly)</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400 font-mono">
                    £259 / year
                    <span className="block text-[10px] text-neutral-500">(Desktop license only)</span>
                  </td>
                </tr>

                {/* Row 2: Direct GSC & GA4 API */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Direct GSC &amp; GA4 Real-Time Sync
                  </td>
                  <td className="py-4 px-4 bg-sky-950/30 border-x border-sky-500/30 text-sky-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> Native 2-Way Direct API
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="flex items-center gap-1 text-amber-400 text-[11px]">
                      <AlertTriangle className="w-3.5 h-3.5" /> Delayed 24h sync
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="flex items-center gap-1 text-amber-400 text-[11px]">
                      <AlertTriangle className="w-3.5 h-3.5" /> Limited connector
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="flex items-center gap-1 text-neutral-500 text-[11px]">
                      Local OAuth config
                    </span>
                  </td>
                </tr>

                {/* Row 3: GEO Tracking */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Generative Engine Optimization (GEO)
                  </td>
                  <td className="py-4 px-4 bg-sky-950/30 border-x border-sky-500/30 text-sky-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> ChatGPT, Perplexity &amp; Gemini
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Not Supported
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Not Supported
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Not Supported
                    </span>
                  </td>
                </tr>

                {/* Row 4: Code-Level Solutions */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Actionable Code-Level Fix Snippets
                  </td>
                  <td className="py-4 px-4 bg-sky-950/30 border-x border-sky-500/30 text-sky-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> Ready-to-Copy HTML/JSON-LD
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Generic text advice only
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> No code solutions
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Raw CSV tables only
                    </span>
                  </td>
                </tr>

                {/* Row 5: Live Streaming Crawler */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Live Streaming Crawler (Frontend Stream)
                  </td>
                  <td className="py-4 px-4 bg-sky-950/30 border-x border-sky-500/30 text-sky-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> Real-Time UI Streaming
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Queued batch (5–30 min delay)</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Queued batch delay</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-amber-400">Slow local desktop app</span>
                  </td>
                </tr>

                {/* Row 6: Keyword Cannibalization */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Keyword Cannibalization Resolution
                  </td>
                  <td className="py-4 px-4 bg-sky-950/30 border-x border-sky-500/30 text-sky-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> Auto-Detect + Canonical Fix
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Manual filter check</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Manual SERP compare</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Not available
                    </span>
                  </td>
                </tr>

                {/* Row 7: Auto Schema Generator */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Auto-Generating Schema.org JSON-LD
                  </td>
                  <td className="py-4 px-4 bg-sky-950/30 border-x border-sky-500/30 text-sky-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> 1-Click Code Generation
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="text-[11px] text-neutral-500">Syntax validator only</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="text-[11px] text-neutral-500">Syntax validator only</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="text-[11px] text-neutral-500">Validation only</span>
                  </td>
                </tr>

                {/* Row 8: Render-Blocking & Image Compression */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Render-Blocking &amp; Image Byte Analysis
                  </td>
                  <td className="py-4 px-4 bg-sky-950/30 border-x border-sky-500/30 text-sky-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> Exact Byte Savings &amp; Diffs
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Basic site speed flag</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Basic speed score</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Manual filter export</span>
                  </td>
                </tr>

                {/* Row 9: Internal Linking PageRank */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    PageRank Internal Linking Optimization
                  </td>
                  <td className="py-4 px-4 bg-sky-950/30 border-x border-sky-500/30 text-sky-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> Graph Map + Anchor Pairings
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Basic link count</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Link opportunity list</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Raw inlink count</span>
                  </td>
                </tr>

                {/* Row 10: Humanized Blog Generator */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Humanized AI Blog &amp; Meta Generator
                  </td>
                  <td className="py-4 px-4 bg-sky-950/30 border-x border-sky-500/30 text-sky-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> Built-In Intent Studio
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-amber-400">Paid Add-on (+$20/mo)</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Not available
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Not available
                    </span>
                  </td>
                </tr>

                {/* Row 11: White-Label Dossiers */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    White-Label Executive PDF/DOCX Export
                  </td>
                  <td className="py-4 px-4 bg-sky-950/30 border-x border-b border-sky-500/30 rounded-b-xl text-sky-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> Included at ₹3–₹7/Page
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-amber-400">Agency Kit (+$249/mo)</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Enterprise only ($999/mo)</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Raw CSV export only
                    </span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Pricing Transparent Callout Box */}
          <div className="mt-8 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase text-sky-400 block mb-1 font-semibold">
                Transparent Pay-Per-Page Math:
              </span>
              <p className="text-sm text-neutral-200">
                A 100-page website audit costs just <strong className="text-white">₹300 – ₹700 INR ($3.60 – $8.40 USD)</strong> on Ashmyra SEO, compared to paying <strong className="text-red-400">$139.95 USD (~₹11,600 INR)</strong> every month on Semrush.
              </p>
            </div>
            <Link
              href="/contact?intent=seo-pricing"
              className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs whitespace-nowrap shadow-lg shadow-sky-600/30 transition-all hover:scale-105"
            >
              Start Auditing at ₹3–₹7/Page
            </Link>
          </div>

        </div>

        {/* ── 08. 5-Stage Execution Pipeline ───────────────────────────── */}
        <div className="mb-24 rounded-3xl p-8 sm:p-12 bg-white/[0.02] border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 block mb-2 font-semibold">
              Execution Lifecycle
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              From Direct Google API Ingestion to Production Code Fix
            </h2>
            <p className="text-sm text-neutral-300 mt-2">
              Every workflow step is audited, streamed, validated, and recorded with full telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {product.workflowSteps.map((s, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-black/40 border border-white/[0.08] flex flex-col justify-between hover:border-sky-500/40 transition-colors"
              >
                <div>
                  <span className="text-xs font-mono text-sky-400 font-bold block mb-2">
                    STEP {s.step}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">{s.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Guard
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 09. Bottom CTA ──────────────────────────────────────────── */}
        <div 
          className="text-center p-10 sm:p-16 rounded-3xl relative overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(15, 23, 42, 0.6))",
            border: "1px solid rgba(56, 189, 248, 0.3)",
          }}
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-300 block mb-3 font-semibold">
              Deploy Ashmyra SEO Intelligence
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Ready to replace expensive legacy suites with real-time accuracy?
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Get an instant real-time audit of your domain with direct GSC/GA4 API sync, keyword cannibalization detection, and code-level fixes at just ₹3 to ₹7 INR per page.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact?intent=seo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-xl shadow-sky-600/30 transition-all hover:scale-105"
              >
                <span>Book Real-Time SEO Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold text-sm border border-white/10 transition-colors"
              >
                Contact Engineering Team
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
