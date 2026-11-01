import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { DEMO_PRODUCTS, DemoProduct } from "@/data/demos";
import { ProductsCinematicHero } from "@/components/products-cinematic-hero";
import { ProductsNavigationStrip } from "@/components/products-navigation-strip";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Layers,
  Zap,
  Lock,
  Server,
  Workflow,
  Cpu,
  Mail,
  Target,
  Share2,
  Eye,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra Products | Intelligent Software Engineered for Real Business",
  description:
    "Explore Ashmyra's suite of 5 live production software platforms: MailFlow, Prospect IQ, Omnira, Unveil, and Veyrix. Autonomous AI, search intelligence, and revenue infrastructure.",
  keywords: [
    "Ashmyra Products",
    "MailFlow",
    "Prospect IQ",
    "Omnira",
    "Unveil",
    "Veyrix",
    "Agentic AI Software",
    "Enterprise AI India",
    "GEO Intelligence Platform",
    "B2B Lead Intelligence",
    "Cold Email Deliverability",
    "Search Intelligence Engine",
  ],
  openGraph: {
    title: "Ashmyra Products | Intelligent Software Engineered for Real Business",
    description:
      "Explore Ashmyra's suite of 5 live production software platforms: MailFlow, Prospect IQ, Omnira, Unveil, and Veyrix.",
    url: "https://www.ashmyra.com/products",
    images: [
      {
        url: "/brand/ashmyra-og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashmyra Intelligent Software Products",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ashmyra.com/products",
  },
};

const PRODUCT_IMAGE_MAP: Record<string, string> = {
  mailflow: "/products/mailflow.png",
  prospectiq: "/products/prospectiq.png",
  omnira: "/products/omnira.png",
  unveil: "/products/unveil.png",
  veyrix: "/products/veyrix.png",
};

export default function ProductsPage() {
  const getProductIcon = (id: string, cls = "w-6 h-6") => {
    switch (id) {
      case "mailflow":
        return <Mail className={cls} style={{ color: "#818cf8" }} />;
      case "prospectiq":
        return <Target className={cls} style={{ color: "#06b6d4" }} />;
      case "omnira":
        return <Share2 className={cls} style={{ color: "#10b981" }} />;
      case "unveil":
        return <Eye className={cls} style={{ color: "#f59e0b" }} />;
      case "veyrix":
        return <Search className={cls} style={{ color: "#38bdf8" }} />;
      default:
        return <Sparkles className={cls} style={{ color: "#818cf8" }} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#050608] text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* ── 1. CINEMATIC SPLIT HERO (45% Left / 55% Right) ──────────────── */}
      <ProductsCinematicHero />

      {/* ── 2. PRODUCT NAVIGATION STRIP (5 Live Platforms) ─────────────── */}
      <ProductsNavigationStrip />

      {/* ── 3. PRODUCT PORTFOLIO SECTION: "Explore Our Products" ────────── */}
      <section id="explore-products" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs text-cyan-300 font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Verified Production Portfolio</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Explore Our Products
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Purpose-built software for connected, intelligent business operations.
          </p>
        </div>

        {/* ── 5 Verified Live Product Showcases ──────────────────────────── */}
        <div className="space-y-16 sm:space-y-24">
          {DEMO_PRODUCTS.map((prod: DemoProduct, idx: number) => {
            const isReversed = idx % 2 === 1;
            const previewImage =
              PRODUCT_IMAGE_MAP[prod.id] || "/wow/wow1-social-intelligence.png";

            return (
              <div
                key={prod.id}
                id={prod.id}
                className="rounded-3xl p-7 sm:p-10 lg:p-12 relative overflow-hidden transition-all duration-300 border border-white/[0.08] hover:border-white/[0.18]"
                style={{
                  backgroundColor: "#07090E",
                  boxShadow: `0 24px 60px -20px rgba(0,0,0,0.9), 0 0 40px -15px rgba(${prod.accentRgb}, 0.12)`,
                }}
              >
                {/* Ambient Top Line */}
                <div
                  className="absolute top-0 inset-x-10 h-[1px] opacity-40 pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${prod.accent}, transparent)`,
                  }}
                />

                {/* Top Identification Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `rgba(${prod.accentRgb}, 0.12)`,
                        border: `1px solid rgba(${prod.accentRgb}, 0.3)`,
                      }}
                    >
                      {getProductIcon(prod.id, "w-6 h-6")}
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          {prod.name}
                        </h3>
                        <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live Production
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-400 font-mono">
                          {prod.category}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-medium">
                        {prod.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={prod.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
                      style={{
                        background: `linear-gradient(135deg, ${prod.accent}, #4f46e5)`,
                      }}
                    >
                      <span>Launch Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Two-Column Editorial Rhythm */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual Interface Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#05070B] border border-white/[0.12] shadow-2xl group">
                      <Image
                        src={previewImage}
                        alt={`${prod.name} Production Interface`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                        priority={idx === 0}
                      />
                    </div>
                  </div>

                  {/* Product Details Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Key Capabilities */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 font-semibold">
                        Verified Architecture &amp; Capabilities:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {prod.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2.5 text-xs text-neutral-300 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                          >
                            <CheckCircle2
                              className="w-3.5 h-3.5 shrink-0 mt-0.5"
                              style={{ color: prod.accent }}
                            />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Telemetry Metrics */}
                    <div className="pt-2">
                      <div className="grid grid-cols-3 gap-2.5 text-center">
                        {prod.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                          >
                            <div
                              className="text-sm sm:text-base font-bold font-mono"
                              style={{ color: prod.accent }}
                            >
                              {m.value}
                            </div>
                            <div className="text-[10px] text-neutral-400 mt-0.5 truncate">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 pt-2">
                      <a
                        href={prod.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-white hover:text-cyan-300 flex items-center gap-1.5 transition-colors underline underline-offset-4"
                      >
                        <span>Test {prod.name} Sandbox ↗</span>
                      </a>
                      <span className="text-neutral-600">·</span>
                      <Link
                        href={`/contact?product=${prod.id}`}
                        className="text-xs text-neutral-400 hover:text-white transition-colors"
                      >
                        Request Private VPC Deployment →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 4. FEATURED PRODUCT EXPERIENCES: Problem & Workflow Mapping ── */}
      <section className="py-20 bg-[#07090e] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono mb-4">
              <Workflow className="w-3.5 h-3.5 text-indigo-400" />
              <span>Operational Problem Architecture</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              How Our Platforms Solve Core Business Friction
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Real software engineering targets deterministic business bottlenecks: customer acquisition latency, manual data scraping, and domain visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Box 1: Outbound & Revenue Engine */}
            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-5 text-cyan-400">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Outbound Revenue Engine
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Prospect IQ identifies verified decision-maker emails with waterfall verification; MailFlow executes warm multi-mailbox sequences with zero spam-folder risk.
                </p>
                <div className="space-y-2 text-xs text-neutral-300 pt-2 border-t border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-mono">01.</span>
                    <span>Waterfall email verification across 50M+ B2B records</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-mono">02.</span>
                    <span>Dynamic multi-inbox rotation &amp; automated warmup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-mono">03.</span>
                    <span>99.4% deliverability guarantee to primary inboxes</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>Prospect IQ + MailFlow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Box 2: Search & Spider Forensics */}
            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center mb-5 text-sky-400">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Search &amp; Spider Forensics
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Veyrix crawls website forensics with deep spider auditing, GSC/GA4 live telemetry, and AI citation radar across Perplexity, ChatGPT, and Gemini.
                </p>
                <div className="space-y-2 text-xs text-neutral-300 pt-2 border-t border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="text-sky-400 font-mono">01.</span>
                    <span>Deep spider crawler auditing 2,450+ URLs for 404s &amp; broken links</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sky-400 font-mono">02.</span>
                    <span>Core Web Vitals HUD (LCP, CLS, INP) &amp; keyword cannibalization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sky-400 font-mono">03.</span>
                    <span>24/7 automated revenue safeguard &amp; instant regression alerts</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-sky-400">
                <span>Veyrix Intelligence</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Box 3: Autonomous Media Swarm */}
            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-5 text-emerald-400">
                  <Share2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Autonomous Multi-Channel Swarm
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Omnira acts like a 7–8 person creative agency: continuously tracking competitor viral trends, producing full asset packages, and managing cross-channel dispatch.
                </p>
                <div className="space-y-2 text-xs text-neutral-300 pt-2 border-t border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-mono">01.</span>
                    <span>Cross-platform agents (YouTube, LinkedIn, FB, IG)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-mono">02.</span>
                    <span>End-to-end timed reel scripts &amp; carousel slide decks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-mono">03.</span>
                    <span>1-click human-in-the-loop clearance gate</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-emerald-400">
                <span>Omnira Platform</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CONNECTED PRODUCT ECOSYSTEM ─────────────────────────────── */}
      <section id="ecosystem" className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0a0e1c] via-[#070912] to-[#050608] border border-white/[0.1] relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs text-cyan-300 font-mono mb-4">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Modular Architecture Architecture</span>
            </div>
            <h2
              className="text-2xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Connected Product Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Ashmyra platforms are designed as autonomous modular microservices. Deploy any individual engine or orchestrate them together with unified enterprise telemetry.
            </p>
          </div>

          {/* Architecture Pipeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider block mb-2 font-semibold">
                Phase 01 · Search &amp; Spider Radar
              </span>
              <h4 className="text-base font-bold text-white mb-2">Veyrix</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Ingests technical site health, crawls deep regressions, and tracks generative AI search engine visibility across Perplexity and ChatGPT.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-2 font-semibold">
                Phase 02 · Audience &amp; Lead Pipeline
              </span>
              <h4 className="text-base font-bold text-white mb-2">Prospect IQ &amp; MailFlow</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Discovers target ICP contacts, enriches company tech stacks, and waterfalls email verification with deliverability-monitored cold outreach.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-2 font-semibold">
                Phase 03 · Media &amp; Campaign Distribution
              </span>
              <h4 className="text-base font-bold text-white mb-2">Omnira &amp; Unveil</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Omnira coordinates multi-platform viral distribution while Unveil erases moving watermarks, noise, and unwanted objects from photo and video assets.
              </p>
            </div>
          </div>

          {/* Security & Deployment Notice */}
          <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>All platforms deployable into Dedicated VPC, AWS GovCloud, or On-Premise Air-Gapped Clusters.</span>
            </div>
            <Link
              href="/contact?intent=vpc"
              className="text-white hover:text-cyan-300 font-semibold underline underline-offset-4 transition-colors shrink-0"
            >
              Discuss Dedicated VPC Deployment →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. FINAL ENTERPRISE CALL-TO-ACTION ─────────────────────────── */}
      <section className="pb-24 pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl p-10 sm:p-14 text-center bg-gradient-to-r from-indigo-950/40 via-cyan-950/30 to-indigo-950/40 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold block">
              Enterprise Software Discovery
            </span>
            <h3
              className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Need a Custom Platform Engineered for Your Stack?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Beyond our 5 live platforms, Ashmyra engineers bespoke agentic AI swarms, high-concurrency SaaS architectures, and internal enterprise operating systems.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Schedule Architecture Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/demos"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.12] text-sm font-semibold transition-all"
              >
                <span>Explore All Live Sandboxes</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
