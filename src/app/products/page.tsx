import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { DEMO_PRODUCTS, DemoProduct } from "@/data/demos";
import { ProductsCinematicHero } from "@/components/products-cinematic-hero";
import { ProductsNavigationStrip } from "@/components/products-navigation-strip";
import { ProductsFrictionBento } from "@/components/products-friction-bento";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
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
  title: "Enterprise Software & AI Suites",
  description:
    "Explore Ashmyra's suite of 5 live production platforms: MailFlow, Prospect IQ, Omnira, Unveil, and Veyrix. Autonomous AI and revenue infrastructure.",
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
    title: "Enterprise Software & AI Suites | Ashmyra",
    description:
      "Explore Ashmyra's suite of 5 live production platforms: MailFlow, Prospect IQ, Omnira, Unveil, and Veyrix.",
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
  prospectiq: "/products/prospectiq-widescreen.png",
  omnira: "/products/omnira.png",
  unveil: "/products/unveil-widescreen.png",
  veyrix: "/products/veyrix-widescreen.png",
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
                className="rounded-3xl p-7 sm:p-10 lg:p-12 relative overflow-hidden transition-all duration-300 border"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                  boxShadow: `0 24px 60px -20px rgba(0,0,0,0.08), 0 0 40px -15px rgba(${prod.accentRgb}, 0.12)`,
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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b" style={{ borderColor: "var(--border)" }}>
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
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
                          {prod.name}
                        </h3>
                        <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live Production
                        </span>
                        <span
                          className="text-xs px-2.5 py-0.5 rounded-full border font-mono"
                          style={{
                            backgroundColor: "var(--theme-pill-bg)",
                            borderColor: "var(--border)",
                            color: "var(--text-muted)",
                          }}
                        >
                          {prod.category}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm mt-1 font-medium" style={{ color: "var(--text-muted)" }}>
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

      {/* ── 4. FEATURED PRODUCT EXPERIENCES: Interactive Friction vs. Solution Bento Grid ── */}
      <ProductsFrictionBento />

      {/* ── 5. FINAL ENTERPRISE CALL-TO-ACTION ─────────────────────────── */}
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
