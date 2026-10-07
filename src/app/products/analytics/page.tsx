import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { ProductWowPreview } from "@/components/product-wow-preview";
import { FreelancerTrustBanner } from "@/components/freelancer-trust-banner";
import { AnalyticsPipelineVisualizer } from "@/components/analytics-pipeline-visualizer";
import { 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Activity, 
  Database, 
  PhoneCall, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Clock, 
  BarChart3, 
  RefreshCw, 
  Users, 
  Filter, 
  Search, 
  Flame, 
  Check, 
  X, 
  Award, 
  Lock, 
  FileText, 
  Bot, 
  Radar, 
  FolderGit2, 
  Sliders
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra Analytics | Data Intelligence & Revenue Operations Platform",
  description:
    "Turn raw data into revenue-ready intelligence. An end-to-end Data Intelligence & Revenue Operations platform: 24/7 collection, 4-layer AI deduplication, Golden Records, lead scoring, built-in calling CRM, sales pipeline, and closed-loop revenue intelligence.",
  keywords: [
    "Ashmyra Analytics",
    "Data Intelligence Platform",
    "Revenue Operations",
    "Data to Revenue Engine",
    "Golden Record Creation",
    "AI Deduplication",
    "Fuzzy Matching Engine",
    "Lead Scoring 94/100",
    "Built-in Calling CRM",
    "Sales Pipeline CRM",
    "Closed-Loop Revenue Intelligence",
    "Multi-Source Data Collection",
    "Data Quality Score",
  ],
  openGraph: {
    title: "Ashmyra Analytics | Data Intelligence & Revenue Operations Platform",
    description:
      "From Raw Data to Revenue — Automatically. Replace fragmented scrapers, spreadsheets, calling software, and CRMs with one continuous operating engine.",
    url: "https://ashmyra.com/products/analytics",
    images: [{ url: "/analytics/analytics-pipeline-engine.jpg", width: 1200, height: 675, alt: "Ashmyra Analytics Data-to-Revenue Engine" }],
  },
  alternates: {
    canonical: "https://ashmyra.com/products/analytics",
  },
};

export default function AshmyraAnalyticsPage() {
  const product = PRODUCTS.find((p) => p.id === "analytics")!;

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
            background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.22) 0%, rgba(99, 102, 241, 0.16) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div
          className="absolute top-28 left-1/2 -translate-x-1/2 w-[480px] h-[260px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.16) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 01. Hero Header (Wider Width & Exactly 2 Clean Lines) ───── */}
        <div className="relative text-center max-w-6xl mx-auto mb-12">

          {/* Status & Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs text-purple-300 font-mono backdrop-blur-sm">
              <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
              <span>Data Intelligence &amp; Revenue Operations</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono backdrop-blur-sm shadow-sm">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-white font-semibold">15-Stage Engine:</span>
              <span>Discover &rarr; Sell &rarr; Learn</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300 font-mono backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>4-Layer AI Deduplication &amp; Golden Records</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs text-sky-300 font-mono backdrop-blur-sm">
              <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
              <span>Built-in Calling &amp; Sales CRM</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs text-amber-300 font-mono backdrop-blur-sm">
              <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
              <span>Closed-Loop Conversion Flywheel</span>
            </div>
          </div>

          {/* Headline - Exactly Two Clean Lines */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] font-bold tracking-tight text-white leading-[1.12] font-sans">
            <span className="block">Turn Raw Data Into Revenue-Ready Intelligence,</span>
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-sky-200 animate-[shimmer_6s_linear_infinite] bg-[length:200%_auto]">
              The Complete Autonomous Revenue Engine.
            </span>
          </h1>

          {/* Adjusted Paragraph Text */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Stop juggling disconnected scrapers, messy Excel sheets, enrichment credits, external lead scoring, calling software, and sales CRMs. Ashmyra unites the entire journey into one continuous operating layer: <strong className="text-white font-semibold">Discover &rarr; Collect &rarr; Clean &rarr; Deduplicate &rarr; Validate &rarr; Enrich &rarr; Score &rarr; Segment &rarr; Assign &rarr; Call &rarr; Qualify &rarr; Sell &rarr; Track &rarr; Analyze &rarr; Improve</strong>.
          </p>

          {/* Primary Tagline Highlight */}
          <div className="mt-5 inline-block px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm font-mono text-purple-200">
            &ldquo;From Raw Data to Revenue — Automatically.&rdquo;
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=analytics-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <span>Request Data-to-Revenue Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#flywheel"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <Cpu className="w-4 h-4 text-purple-300" />
              <span>Explore 15-Stage Architecture</span>
            </a>
          </div>
        </div>

        {/* ── 02. WOW Visual Showcase ─────────────────────────────────── */}
        <ProductWowPreview
          imageSrc="/analytics/analytics-pipeline-engine.jpg"
          imageAlt="Ashmyra Analytics Automated Data-to-Revenue Engine"
          productName="Ashmyra Analytics & RevOps Engine"
          productTagline="Continuous automated data pipeline from multi-source 24/7 extraction to closed deals and feedback learning."
          accentColor="#8b5cf6"
          badgeText="15-Stage Data-to-Revenue Engine Active"
          telemetry={[
            { label: "Data Pipeline Scope", value: "15 Stages", detail: "Discover to Closed-Loop Revenue" },
            { label: "Deduplication Rate", value: "98.8%", detail: "4-layer exact, normalized, fuzzy & ML" },
            { label: "Lead Scoring Index", value: "94/100", detail: "Hot lead conversion probability" },
            { label: "Outbound Calling Lift", value: "+340%", detail: "Prioritized 'Call These 500 First' queue" },
          ]}
          capabilities={[
            {
              title: "Continuous 15-Stage Autonomous Pipeline",
              description: "Data never sits idle in a database. It moves seamlessly through collection, ingestion, cleaning, multi-tier deduplication, enrichment, scoring, calling, and closed sales.",
            },
            {
              title: "AI Golden Record Master Synthesis",
              description: "Consolidates up to 10 fragmented and partial records across multiple sources into a single pristine Golden Master Record with verified phone, email, and quality scores.",
            },
            {
              title: "Closed-Loop Revenue Flywheel",
              description: "Closed customer attributes automatically loop back to re-train scraping targets and scoring weights, continuously upgrading lead acquisition quality.",
            },
          ]}
        />

        {/* ── 03. Interactive 15-Stage Pipeline Engine ────────────────── */}
        <div id="flywheel" className="my-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-400 block mb-2 font-semibold">
              The Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              The Complete Data-to-Revenue Engine
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
              Click any of the 15 stages below to inspect inputs, autonomous actions, output datasets, and real-time telemetry impacts.
            </p>
          </div>

          <AnalyticsPipelineVisualizer />
        </div>

        {/* ── 04. Deep Dive 1: 24/7 Collection & Intelligent Ingestion ── */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08]">
          <div className="max-w-5xl mx-auto space-y-12">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/[0.06] pb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-mono text-purple-300 mb-3">
                  <Database className="w-3.5 h-3.5 text-purple-400" />
                  <span>Stages 01 &bull; 02 &bull; 03</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  24/7 Multi-Source Collection &amp; Intelligent Ingestion
                </h3>
                <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
                  Your pipeline never sleeps. Automatically harvest, normalize, and sanitize data across all permitted open and enterprise sources.
                </p>
              </div>

              {/* Schedule Badge */}
              <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10 text-xs font-mono text-neutral-300 min-w-[240px]">
                <div className="text-[10px] text-purple-400 uppercase font-bold mb-1">Smart Collection Scheduler</div>
                <div>Every 1h &rarr; Every 6h &rarr; Daily &rarr; Custom</div>
                <div className="text-[11px] text-emerald-400 mt-1">&bull; Automatic incremental sync</div>
              </div>
            </div>

            {/* Grid of Capabilities */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono font-bold text-xs mb-3">
                    01
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Multi-Source Discovery</h4>
                  <ul className="space-y-1.5 text-xs text-neutral-400 font-mono">
                    <li>&bull; Business directories &amp; public portals</li>
                    <li>&bull; Industry &amp; location categorization</li>
                    <li>&bull; Competitor movements &amp; intelligence</li>
                    <li>&bull; Website metadata &amp; public signals</li>
                    <li>&bull; Source freshness &amp; reliability scoring</li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.05] text-[11px] font-mono text-purple-300">
                  Continuous 24/7 Background Harvester
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono font-bold text-xs mb-3">
                    02
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Schema Normalization</h4>
                  <ul className="space-y-1.5 text-xs text-neutral-400 font-mono">
                    <li>&bull; Automated field &amp; column mapping</li>
                    <li>&bull; Country/city/state standardized</li>
                    <li>&bull; Phone &amp; E.164 normalization</li>
                    <li>&bull; Company name legal suffix alignment</li>
                    <li>&bull; 20 sources &rarr; 1 common model</li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.05] text-[11px] font-mono text-indigo-300">
                  Universal Entity Modeling
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 font-mono font-bold text-xs mb-3">
                    03
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">AI Data Cleaning</h4>
                  <ul className="space-y-1.5 text-xs text-neutral-400 font-mono">
                    <li>&bull; Missing &amp; invalid value scrubbing</li>
                    <li>&bull; Garbage character &amp; syntax cleanup</li>
                    <li>&bull; SMTP &amp; carrier reachability check</li>
                    <li>&bull; Outlier &amp; anomaly detection</li>
                    <li>&bull; Suspicious record quarantining</li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.05] text-[11px] font-mono text-sky-300">
                  99.4% Verified Clean Data
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ── 05. Deep Dive 2: 4-Layer Deduplication & Golden Records ─── */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block mb-2 font-semibold">
              Stages 04 &bull; 05 &bull; 06 &bull; 07
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              4-Layer Deduplication Engine &amp; AI Golden Records
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
              Duplicate records destroy sales efficiency. Ashmyra synthesizes fragmented entity records from multiple sources into a single consolidated master Golden Record.
            </p>
          </div>

          {/* Visual Showcase Card with Generated Asset */}
          <div className="mb-10 rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl">
            <div className="relative aspect-video w-full">
              <Image
                src="/analytics/analytics-golden-record.jpg"
                alt="Ashmyra AI Golden Record Creation & Deduplication Studio"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 4 Matching Layers Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase mb-2">
                Layer 1: Exact Match
              </div>
              <p className="text-xs text-neutral-300 mb-3">
                Instant identification of identical keys:
              </p>
              <div className="text-[11px] font-mono text-neutral-400 space-y-1">
                <div>&bull; Email address match</div>
                <div>&bull; Phone/Mobile number</div>
                <div>&bull; Corporate registration ID</div>
                <div>&bull; Tax / GST identifier</div>
              </div>
              <div className="mt-4 pt-2 border-t border-white/[0.05] text-[10px] font-mono text-emerald-300">
                Match Confidence: 100%
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase mb-2">
                Layer 2: Normalized Match
              </div>
              <p className="text-xs text-neutral-300 mb-3">
                Detects identical entities despite formatting variations:
              </p>
              <div className="text-[11px] font-mono text-neutral-400 space-y-1">
                <div>&bull; ABC Pvt. Ltd.</div>
                <div>&bull; ABC PRIVATE LIMITED</div>
                <div>&bull; A.B.C. Pvt Ltd</div>
              </div>
              <div className="mt-4 pt-2 border-t border-white/[0.05] text-[10px] font-mono text-emerald-300">
                Match Confidence: 98%
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase mb-2">
                Layer 3: Fuzzy Algorithms
              </div>
              <p className="text-xs text-neutral-300 mb-3">
                Evaluates string distance and phonetic similarity:
              </p>
              <div className="text-[11px] font-mono text-neutral-400 space-y-1">
                <div>&bull; Levenshtein distance</div>
                <div>&bull; Jaro-Winkler metric</div>
                <div>&bull; Token sort &amp; set ratio</div>
                <div>&bull; Double Metaphone phonetics</div>
              </div>
              <div className="mt-4 pt-2 border-t border-white/[0.05] text-[10px] font-mono text-emerald-300">
                Match Confidence: 85% &ndash; 94%
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase mb-2">
                Layer 4: ML Multi-Attribute
              </div>
              <p className="text-xs text-neutral-300 mb-3">
                Evaluates complex entity correlation vectors:
              </p>
              <div className="text-[11px] font-mono text-neutral-400 space-y-1">
                <div>&bull; Name + Address + Domain</div>
                <div>&bull; Phone + Email domain</div>
                <div>&bull; Industry + Geo coordinates</div>
                <div>&bull; Decision-maker overlap</div>
              </div>
              <div className="mt-4 pt-2 border-t border-white/[0.05] text-[10px] font-mono text-emerald-300">
                Neural Clustering Model
              </div>
            </div>

          </div>

          {/* Golden Record Table & Completeness Engine */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Table Example */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Golden Record Synthesis Example</span>
              </h4>
              <p className="text-xs text-neutral-400 mb-4">
                Instead of 3 incomplete duplicate records, Ashmyra extracts the highest-quality value per field to forge 1 Golden Master Record:
              </p>
              <div className="overflow-x-auto text-xs font-mono">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-neutral-400">
                      <th className="py-2">Field</th>
                      <th className="py-2">Source A</th>
                      <th className="py-2">Source B</th>
                      <th className="py-2">Source C</th>
                      <th className="py-2 text-emerald-400">Golden Master</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.05] text-neutral-300">
                    <tr>
                      <td className="py-2 font-bold text-white">Company</td>
                      <td>Apex Tech Ltd</td>
                      <td>Apex Technologies</td>
                      <td>Apex Tech Pvt</td>
                      <td className="text-emerald-400 font-bold">Apex Technologies Inc.</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-white">Email</td>
                      <td className="text-red-400">&mdash;</td>
                      <td className="text-emerald-400">info@apex.com</td>
                      <td className="text-emerald-400">john@apex.com</td>
                      <td className="text-emerald-400 font-bold">john.d@apextech.com</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-white">Phone</td>
                      <td className="text-emerald-400">+1 555-0123</td>
                      <td className="text-red-400">&mdash;</td>
                      <td className="text-emerald-400">+1 555-0123</td>
                      <td className="text-emerald-400 font-bold">+1 555-0123 (Verified)</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-white">Website</td>
                      <td className="text-emerald-400">apex.com</td>
                      <td className="text-emerald-400">apextech.com</td>
                      <td className="text-red-400">&mdash;</td>
                      <td className="text-emerald-400 font-bold">apextech.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Data Quality & Completeness Engine */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-purple-400" />
                  <span>AI Data Completeness Engine</span>
                </h4>
                <p className="text-xs text-neutral-400 mb-4">
                  Ashmyra doesn&apos;t just flag incomplete data—it automatically generates precise enrichment work orders:
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-purple-400 font-bold text-base">32,000</div>
                    <div className="text-[11px] text-neutral-400">Missing Mobiles Queued</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-indigo-400 font-bold text-base">18,500</div>
                    <div className="text-[11px] text-neutral-400">Missing Emails Queued</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-sky-400 font-bold text-base">24,000</div>
                    <div className="text-[11px] text-neutral-400">Decision Makers Identified</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-emerald-400 font-bold text-base">95/100</div>
                    <div className="text-[11px] text-neutral-400">Avg Quality Score</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.05] text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                <span>🟢 90&ndash;100: Excellent</span>
                <span>🟡 50&ndash;74: Needs Enrichment</span>
                <span>🔴 &lt;50: Poor Quality</span>
              </div>
            </div>

          </div>

        </div>

        {/* ── 06. Deep Dive 3: AI Lead Scoring & Dynamic Prioritization ─ */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/20 via-indigo-950/20 to-neutral-900/40 border border-purple-500/30">
          <div className="max-w-5xl mx-auto space-y-10">
            
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400 block mb-2 font-semibold">
                Stages 08 &bull; 09 &bull; 10 &bull; 11
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                AI Lead Prioritization: &ldquo;Call These 500 First&rdquo;
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-300">
                Instead of giving your calling team 10,000 random unverified records, Ashmyra dynamically calculates:
                <br />
                <strong className="text-white font-mono text-sm">Conversion Probability &times; Data Quality &times; Business Value &times; Contactability</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-black/50 border border-red-500/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-red-400 uppercase flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-red-500 animate-pulse" />
                    Hot Lead (90&ndash;100)
                  </span>
                  <span className="text-xs font-mono text-white px-2 py-0.5 rounded bg-red-500/20 border border-red-500/40">
                    Lead Score: 94
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Priority 1 Call Queue</h4>
                <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                  Verified mobile, CXO identified, company revenue &gt; ₹10 Cr, active competitor transition signal.
                </p>
                <div className="text-[11px] font-mono text-red-300">
                  Est. Close Probability: 42.8%
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-black/50 border border-amber-500/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-amber-400" />
                    Warm Lead (70&ndash;89)
                  </span>
                  <span className="text-xs font-mono text-white px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40">
                    Lead Score: 76
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Priority 2 Call Queue</h4>
                <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                  Verified landline, general manager contact, good website signals, high industry intent.
                </p>
                <div className="text-[11px] font-mono text-amber-300">
                  Est. Close Probability: 21.4%
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-black/50 border border-sky-500/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase flex items-center gap-1.5">
                    <RefreshCw className="w-4 h-4 text-sky-400" />
                    Cold Lead (&lt;50)
                  </span>
                  <span className="text-xs font-mono text-white px-2 py-0.5 rounded bg-sky-500/20 border border-sky-500/40">
                    Lead Score: 38
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Auto-Enrichment Queue</h4>
                <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                  Missing decision-maker and mobile number. Auto-routed to enrichment bots before calling.
                </p>
                <div className="text-[11px] font-mono text-sky-300">
                  Saves 60+ Hours of Dead Calling
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ── 07. Deep Dive 4: Built-In Calling CRM & Sales CRM ───────── */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 block mb-2 font-semibold">
              Stages 10 &bull; 11 &bull; 12 &bull; 13
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Dual Workspaces: Built-In Calling CRM &amp; Executive Sales Pipeline
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
              No separate dialer licenses, no WhatsApp spreadsheets. The calling team logs outcomes in real time, and qualified deals automatically advance to Account Executives.
            </p>
          </div>

          {/* Visual Showcase Card with Generated Asset */}
          <div className="mb-10 rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl">
            <div className="relative aspect-video w-full">
              <Image
                src="/analytics/analytics-calling-sales.jpg"
                alt="Ashmyra Calling CRM and Executive Sales Pipeline Interface"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Dual CRM Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Calling CRM */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase mb-3">
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Workspace 1: Calling CRM</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Caller Workspace &amp; Intelligent Dispositions
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Callers view their assigned hot leads with dynamic conversation scripts, company firmographics, and previous contact attempts.
                </p>

                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05] flex items-center justify-between">
                    <span className="text-emerald-400 font-bold">&bull; INTERESTED:</span>
                    <span className="text-neutral-300">Auto-transfers immediately to Sales Queue</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05] flex items-center justify-between">
                    <span className="text-amber-400 font-bold">&bull; CALL BACK LATER:</span>
                    <span className="text-neutral-300">Auto-schedules in personal Follow-Up Queue</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05] flex items-center justify-between">
                    <span className="text-red-400 font-bold">&bull; NOT INTERESTED:</span>
                    <span className="text-neutral-300">Closed &amp; feeds negative pattern to AI</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05] flex items-center justify-between">
                    <span className="text-purple-400 font-bold">&bull; HIGHLY INTERESTED:</span>
                    <span className="text-neutral-300">Flags Priority Escalation to Sales Lead</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-amber-300">
                Zero Excel File Handoffs &bull; Instant Routing
              </div>
            </div>

            {/* Sales CRM */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase mb-3">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                  <span>Workspace 2: Executive Sales CRM</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Deal Pipeline &amp; Automated Follow-Up Engine
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Account executives receive warm, pre-qualified leads with full 360° company history, communication records, and AI next-best action recommendations.
                </p>

                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05]">
                    <div className="text-emerald-400 font-bold mb-1">Sales Stage Pipeline:</div>
                    <div className="text-neutral-300 text-[11px]">
                      Qualified &rarr; Requirement &rarr; Quotation &rarr; Negotiation &rarr; Won &rarr; Customer
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05]">
                    <div className="text-sky-400 font-bold mb-1">Automated Follow-Up Radar:</div>
                    <div className="text-neutral-300 text-[11px]">
                      Flags stalled quotations after 4 days; auto-generates follow-up tasks
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05]">
                    <div className="text-purple-400 font-bold mb-1">AI Next-Best Action:</div>
                    <div className="text-neutral-300 text-[11px]">
                      Recommends ideal contact hour, custom contract terms, and objection handling
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-emerald-300">
                Active Opportunity Value Tracking in Real Time
              </div>
            </div>

          </div>

        </div>

        {/* ── 08. Deep Dive 5: Closed-Loop Revenue Intelligence ───────── */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-purple-950/20 via-black to-black border border-purple-500/25">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
                <RefreshCw className="w-3.5 h-3.5 text-purple-400 animate-spin" />
                <span>Stages 14 &bull; 15: The Autonomous Flywheel</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Closed-Loop Intelligence: Learning from Real Customers
              </h2>
              <p className="mt-2 text-sm text-neutral-400 max-w-2xl mx-auto">
                Most platforms stop at Won Deal. Ashmyra analyzes what your paying customers had in common to refine the entire pipeline.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/50 border border-white/10 font-mono text-xs sm:text-sm text-neutral-300 space-y-3">
              <div className="flex items-center gap-2 text-purple-300 font-bold">
                <span>10,000 Leads Collected</span>
                <span>&rarr;</span>
                <span>1,000 Qualified</span>
                <span>&rarr;</span>
                <span>300 Interested</span>
                <span>&rarr;</span>
                <span>80 Opportunities</span>
                <span>&rarr;</span>
                <span className="text-emerald-400">20 Won Customers</span>
              </div>
              <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs space-y-1.5">
                <div className="text-white font-bold font-sans text-sm">Autonomous Flywheel Feedback:</div>
                <div className="text-neutral-300">• Discovers that 16 of 20 won clients had revenue &gt; ₹15 Cr in logistics &amp; manufacturing.</div>
                <div className="text-neutral-300">• Discovers that Data Source C had a 4.2x higher conversion rate than Data Source A.</div>
                <div className="text-emerald-400">• Automatically increases scraping weight on Source C and boosts Lead Scores for logistics firms!</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-purple-400 font-bold uppercase mb-1">Source Performance</div>
                <div className="text-neutral-400">Measures true revenue ROI per source, not just raw scrape volume.</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-indigo-400 font-bold uppercase mb-1">Data Freshness Tiers</div>
                <div className="text-neutral-400">Tracks record age (&lt;30d, 30&ndash;90d, &gt;180d) with auto re-verification.</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-sky-400 font-bold uppercase mb-1">AI Anomaly Alerts</div>
                <div className="text-neutral-400">Proactively warns of duplicate spikes, collection drops, or SLA breaches.</div>
              </div>
            </div>

          </div>
        </div>

        {/* ── 09. Executive Command Center & Governance ───────────────── */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-400 block mb-2 font-semibold">
              Executive Governance &amp; Security
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Executive Command Center &amp; Granular RBAC
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
              Complete organizational visibility for founders and executives, backed by strict role-based access control and tamper-proof audit trails.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Executive MIS</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Founders see total records, clean percentage, active calls, qualified pipeline, and closed revenue in one view.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3">
                <Lock className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Granular RBAC</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Separate workspaces for Data Team, Calling Floor, and Sales Closers. Sensitive phone numbers shielded per policy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                <FileText className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Complete Audit Trail</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Tracks who changed what, when, from which IP, and previous vs new values for full compliance and governance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3">
                <Bot className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Natural Language Query</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Ask in plain English: &ldquo;Show top 5 sources by revenue&rdquo; or &ldquo;Which industry converted highest this month?&rdquo;
              </p>
            </div>

          </div>
        </div>

        {/* ── 10. Core 14 Product Modules Matrix ──────────────────────── */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-400 block mb-2 font-semibold">
              The Product Matrix
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              14 Integrated Core Product Modules
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
              Every stage of your revenue pipeline delivered as a dedicated, production-grade module.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            {[
              { id: "01", title: "Data Discovery", desc: "Automated 24/7 multi-source collection" },
              { id: "02", title: "Data Engine", desc: "Cleaning, normalization & validation" },
              { id: "03", title: "Deduplication Engine", desc: "Exact, fuzzy & ML-powered matching" },
              { id: "04", title: "Enrichment Studio", desc: "AI-generated automated gap work queues" },
              { id: "05", title: "Data Quality Engine", desc: "Completeness, accuracy & freshness ratings" },
              { id: "06", title: "Lead Intelligence", desc: "AI lead scoring, qualification & priority" },
              { id: "07", title: "Segmentation Engine", desc: "Dynamic audience and vertical filtering" },
              { id: "08", title: "Calling CRM", desc: "Calling queues, dispositions & telemetry" },
              { id: "09", title: "Sales CRM", desc: "Pipeline, opportunities & deal tracking" },
              { id: "10", title: "Workflow Automation", desc: "Custom business rules and auto triggers" },
              { id: "11", title: "Intelligence Layer", desc: "Predictive analytics & next-best action" },
              { id: "12", title: "Executive MIS", desc: "CEO, Founder & executive dashboards" },
              { id: "13", title: "Governance & Security", desc: "Roles, permissions & immutable audit logs" },
              { id: "14", title: "Revenue Intelligence", desc: "Closed-loop conversion and source ROI" },
            ].map((mod) => (
              <div
                key={mod.id}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-all"
              >
                <div className="text-purple-400 font-bold mb-1">{mod.id} &bull; {mod.title}</div>
                <div className="text-neutral-400 text-[11px] font-sans">{mod.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 11. Freelancer.com 100+ Enterprise Delivery Proof Banner ─── */}
        <div className="my-16">
          <FreelancerTrustBanner category="Data Intelligence Platforms &amp; Revenue Operations" />
        </div>

        {/* ── 12. Bottom Call to Action ───────────────────────────────── */}
        <div className="text-center p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-purple-950/25 via-indigo-950/20 to-neutral-900/40 border border-purple-500/30">
          <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            From the first byte of data to the final rupee of revenue.
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Eliminate tool fragmentation. Unite collection, deduplication, golden records, calling, and closed sales into one intelligent revenue engine.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=analytics-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 transition-all hover:scale-105"
            >
              <span>Schedule Architecture Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact?intent=custom-data-pipeline"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <span>Request Pipeline Assessment</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
