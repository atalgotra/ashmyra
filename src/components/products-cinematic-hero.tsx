"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { DEMO_PRODUCTS, DemoProduct } from "@/data/demos";
import {
  Mail,
  Target,
  Share2,
  Eye,
  Search,
  ArrowRight,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Pause,
  Play,
  Activity,
  Terminal,
  Zap,
  Cpu,
  Database,
  Globe,
  Radio,
  Check,
} from "lucide-react";

export function ProductsCinematicHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const activeProduct: DemoProduct = DEMO_PRODUCTS[activeIndex] || DEMO_PRODUCTS[0];

  // Auto-cycle through products every 6.5s unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DEMO_PRODUCTS.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Entrance motion with GSAP
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: "power2.out" }
        );
      }
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { opacity: 0, scale: 0.97, y: 16 },
          { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.1 }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Card transition motion on index change
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0.88, y: 6 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );
  }, [activeIndex]);

  const getProductIcon = (id: string, cls = "w-4 h-4") => {
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

  /* ──────────────────────────────────────────────────────────────────────────
     TAILORED INTERACTIVE PRODUCT SIMULATORS
     Authentic, code-rendered hardware telemetry for all 5 verified platforms
  ─────────────────────────────────────────────────────────────────────────── */
  const renderProductSimulator = (id: string) => {
    switch (id) {
      // 1. MailFlow — Cold Email & Warmup Deliverability Engine
      case "mailflow":
        return (
          <div className="h-full flex flex-col justify-between p-4 sm:p-5 font-mono text-xs select-none">
            {/* Top Status Indicators */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-semibold">14 Mailboxes Rotating</span>
                <span className="text-neutral-500 text-[10px]">· Google + Outlook 365</span>
              </div>
              <span className="text-[10px] text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 px-2 py-0.5 rounded">
                SPF / DKIM / DMARC: 100% Validated
              </span>
            </div>

            {/* Warmup Ramp Visual Graph & Rotation Stream */}
            <div className="space-y-3 py-2">
              <div className="p-3 rounded-xl bg-black/50 border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-neutral-400">Warmup Delivery Ramp:</span>
                  <span className="text-emerald-400 font-bold">99.4% Inbox Placement</span>
                </div>
                {/* SVG Warmup Progress Bar */}
                <div className="w-full bg-white/[0.06] h-2 rounded-full overflow-hidden relative">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: "92%",
                      background: "linear-gradient(90deg, #818cf8, #38bdf8, #34d399)",
                    }}
                  />
                </div>
                <div className="flex justify-between text-[9px] text-neutral-500 pt-0.5">
                  <span>Day 1 (DNS Handshake)</span>
                  <span>Day 7 (Gradual Ingestion)</span>
                  <span className="text-emerald-400 font-semibold">Day 14 (Full Velocity)</span>
                </div>
              </div>

              {/* Real-time Rotation Stream */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-[11px]">
                <div className="flex items-center gap-2 text-indigo-200 truncate">
                  <Activity className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="text-neutral-400">Next Scheduled Pool:</span>
                  <span className="text-white font-semibold">outreach-04@domain.com</span>
                </div>
                <span className="text-[10px] text-neutral-400 font-mono shrink-0">
                  Zero Spam Risk
                </span>
              </div>
            </div>

            {/* Footer Telemetry Snippet */}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>AI Subject Optimization: 94/100 conversion score</span>
              </span>
              <span className="text-indigo-400">Multi-Stage Followups Active</span>
            </div>
          </div>
        );

      // 2. Prospect IQ — B2B Lead Intelligence & Waterfall Scraper
      case "prospectiq":
        return (
          <div className="h-full flex flex-col justify-between p-4 sm:p-5 font-mono text-xs select-none">
            {/* Top Query Filter Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-white font-semibold">Active ICP Search Pipeline</span>
              </div>
              <span className="text-[10px] text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded">
                50M+ Verified Records
              </span>
            </div>

            {/* Waterfall Enrichment Execution Simulator */}
            <div className="space-y-2 py-2">
              <div className="p-2.5 rounded-xl bg-black/50 border border-white/[0.06] flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-neutral-400">Target Role:</span>
                  <span className="text-cyan-200 font-semibold">&quot;VP Engineering&quot; · Series A-C SaaS</span>
                </div>
                <span className="text-[10px] text-neutral-400 font-mono">1.2s</span>
              </div>

              {/* Waterfall Verification Stages */}
              <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-1.5 text-[10px]">
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-cyan-400" />
                    <span>Waterfall Layer 1: Corporate Domain Verification</span>
                  </span>
                  <span className="text-cyan-300">Valid</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-cyan-400" />
                    <span>Waterfall Layer 2: SMTP MX Handshake &amp; Catch-All Resolution</span>
                  </span>
                  <span className="text-cyan-300">Deliverable</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>Tech Stack Enrichment: AWS, PostgreSQL, Next.js, FastAPI</span>
                  </span>
                  <span className="text-emerald-400 font-bold">98.7% Confirmed</span>
                </div>
              </div>
            </div>

            {/* Footer Quick Action */}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] text-neutral-400">
              <span>Auto-Enriched Tech Profiles</span>
              <span className="text-cyan-400 font-semibold">1-Click CRM Sync Ready</span>
            </div>
          </div>
        );

      // 3. Omnira — Autonomous Agentic AI Social Media Manager
      case "omnira":
        return (
          <div className="h-full flex flex-col justify-between p-4 sm:p-5 font-mono text-xs select-none">
            {/* Top Multi-Platform Network Status */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-semibold">Autonomous Swarm Team (4 Channels)</span>
              </div>
              <span className="text-[10px] text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded">
                YouTube · LinkedIn · FB · IG
              </span>
            </div>

            {/* Micro-Agent Activity Waterfall */}
            <div className="space-y-2 py-2">
              <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.06] flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">[Agent 1 - Radar]:</span>
                  <span className="text-neutral-300">Ingested 14 competitor hooks &amp; viral market news</span>
                </div>
                <span className="text-emerald-400 text-[9px]">Active</span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.06] flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">[Agent 2 - Script]:</span>
                  <span className="text-neutral-300">Drafted 0-60s timed Reel script with visual stage cues</span>
                </div>
                <span className="text-emerald-400 text-[9px]">Finished</span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.06] flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">[Agent 3 - Tags]:</span>
                  <span className="text-neutral-300">24 targeted hashtag clusters with 1.4M audience reach</span>
                </div>
                <span className="text-emerald-400 text-[9px]">Ready</span>
              </div>
            </div>

            {/* Clearance Gate Status */}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px]">
              <span className="text-neutral-400">1-Click Human Clearance Gate:</span>
              <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
                Editorial Calendar Synchronized
              </span>
            </div>
          </div>
        );

      // 4. Unveil — Generative Engine Optimization (GEO) Radar
      case "unveil":
        return (
          <div className="h-full flex flex-col justify-between p-4 sm:p-5 font-mono text-xs select-none">
            {/* Top Query & GEO Score Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-white font-semibold">Generative Search Radar (GEO)</span>
              </div>
              <span className="text-[10px] text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded font-bold">
                GEO Score: 96/100
              </span>
            </div>

            {/* AI Engine Citations Breakdown */}
            <div className="space-y-2 py-2">
              <div className="p-2.5 rounded-xl bg-black/50 border border-white/[0.06] flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-amber-400 font-bold">ChatGPT / GPT-4o:</span>
                  <span className="text-neutral-300 truncate">Cited in top brand recommendations</span>
                </div>
                <span className="text-emerald-400 text-[10px] font-semibold shrink-0">Rank #1</span>
              </div>

              <div className="p-2.5 rounded-xl bg-black/50 border border-white/[0.06] flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-cyan-400 font-bold">Perplexity AI:</span>
                  <span className="text-neutral-300 truncate">Sourced in 4 verified answer syntheses</span>
                </div>
                <span className="text-emerald-400 text-[10px] font-semibold shrink-0">Direct Source</span>
              </div>

              <div className="p-2.5 rounded-xl bg-black/50 border border-white/[0.06] flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-indigo-400 font-bold">Google AI Overviews:</span>
                  <span className="text-neutral-300 truncate">Cluster entity presence confirmed</span>
                </div>
                <span className="text-emerald-400 text-[10px] font-semibold shrink-0">Included</span>
              </div>
            </div>

            {/* Schema Fixes Telemetry */}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] text-neutral-400">
              <span>Schema.org JSON-LD Entities: 100% Validated</span>
              <span className="text-amber-400">Audit Latency: &lt;8s</span>
            </div>
          </div>
        );

      // 5. Veyrix — Search Intelligence & Spider Forensics
      case "veyrix":
        return (
          <div className="h-full flex flex-col justify-between p-4 sm:p-5 font-mono text-xs select-none">
            {/* Top Crawler Status */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-white font-semibold">Deep Spider Crawl Forensics</span>
              </div>
              <span className="text-[10px] text-sky-300 bg-sky-500/15 border border-sky-500/30 px-2 py-0.5 rounded">
                GSC + GA4 Live Stream
              </span>
            </div>

            {/* Live Streaming Crawl Waterfall & Core Web Vitals */}
            <div className="space-y-2 py-2">
              <div className="p-2.5 rounded-xl bg-black/50 border border-white/[0.06] space-y-1.5 text-[10px]">
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-sky-300">Spider Status:</span>
                  <span className="text-emerald-400 font-semibold">2,450 URLs Audited · 0 Errors</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span>Render-Blocking Resources:</span>
                  <span className="text-white font-semibold">0 Detected · Optimized</span>
                </div>
              </div>

              {/* Core Web Vitals HUD */}
              <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                <div className="p-2 rounded-lg bg-sky-950/20 border border-sky-500/20">
                  <div className="text-sky-300 font-bold font-mono">0.8s</div>
                  <div className="text-[9px] text-neutral-400">LCP (Fast)</div>
                </div>
                <div className="p-2 rounded-lg bg-sky-950/20 border border-sky-500/20">
                  <div className="text-emerald-400 font-bold font-mono">0.001</div>
                  <div className="text-[9px] text-neutral-400">CLS (Stable)</div>
                </div>
                <div className="p-2 rounded-lg bg-sky-950/20 border border-sky-500/20">
                  <div className="text-cyan-300 font-bold font-mono">24ms</div>
                  <div className="text-[9px] text-neutral-400">INP (Instant)</div>
                </div>
              </div>
            </div>

            {/* Footer Keyword Cannibalization Status */}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] text-neutral-400">
              <span>Canonical &amp; PageRank Equity Map: Active</span>
              <span className="text-sky-400">₹0.25 ($0.0025) / Page</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden bg-[#050608]"
    >
      {/* Background Lighting Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-8 left-1/4 w-[500px] h-[300px] rounded-full blur-[130px] opacity-25"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.5), rgba(6,182,212,0.3), transparent 70%)",
          }}
        />
        <div
          className="absolute top-16 right-10 w-[450px] h-[300px] rounded-full blur-[120px] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(16,185,129,0.3), transparent 70%)",
          }}
        />
        {/* Subtle engineering grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Split Layout: 45% Left / 55% Right (Clean Viewport Fitted) ───── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* ── Left Column (~45%) ─────────────────────────────────────────── */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-5 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-[11px] text-indigo-300 font-mono tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>ASHMYRA PRODUCT ECOSYSTEM</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.08]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Intelligent Products.
              <span
                className="block mt-1"
                style={{
                  background:
                    "linear-gradient(135deg, #818cf8 0%, #38bdf8 50%, #67e8f9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Engineered for Real Business.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-lg">
              Explore Ashmyra&apos;s suite of intelligent software products,
              designed to simplify complex workflows, connect business
              operations and turn technology into practical outcomes.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#explore-products"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/contact?intent=demo"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.12] hover:border-white/[0.25] font-semibold text-xs sm:text-sm transition-all"
              >
                <span>Request a Demo</span>
              </Link>
            </div>

            {/* Integrated Platform Switcher Strip */}
            <div className="pt-3 border-t border-white/[0.08]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Select Live Platform:
                </span>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 hover:text-white transition-colors"
                  aria-label={isPaused ? "Play showcase" : "Pause showcase"}
                >
                  {isPaused ? (
                    <>
                      <Play className="w-2.5 h-2.5 text-emerald-400" />
                      <span>Resume Auto-Play</span>
                    </>
                  ) : (
                    <>
                      <Pause className="w-2.5 h-2.5 text-cyan-400" />
                      <span>Pause Auto-Play</span>
                    </>
                  )}
                </button>
              </div>

              {/* 5 Product Pills with active indicators */}
              <div className="grid grid-cols-5 gap-1.5">
                {DEMO_PRODUCTS.map((prod, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={prod.id}
                      onClick={() => {
                        setActiveIndex(idx);
                        setIsPaused(true);
                      }}
                      className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-200 border text-center ${
                        isActive
                          ? "bg-white/[0.08] border-cyan-500/50 shadow-md shadow-cyan-500/10 text-white"
                          : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] text-neutral-400 hover:text-neutral-200"
                      }`}
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        {getProductIcon(prod.id, "w-3.5 h-3.5")}
                      </div>
                      <span className="text-[10.5px] font-semibold truncate w-full">
                        {prod.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reassurance Line */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400 pt-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>5 Live Platforms • Dedicated VPC &amp; On-Premise Deployable</span>
            </div>
          </div>

          {/* ── Right Column (~55%): Viewport-Fitted Glass Hardware Terminal ── */}
          <div
            ref={rightColRef}
            className="lg:col-span-7 relative flex items-center justify-center"
          >
            {/* Ambient Backlight Glow tailored to active product accent */}
            <div
              className="absolute -inset-2 rounded-3xl blur-3xl opacity-25 transition-all duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 60% 40%, ${activeProduct.accent}, transparent 65%)`,
              }}
            />

            {/* ── Hardware Terminal Frame (Linear / Raycast Caliber) ──── */}
            <div
              ref={cardRef}
              className="relative w-full rounded-2xl border transition-all duration-300 overflow-hidden"
              style={{
                backgroundColor: "#0B0E17",
                borderColor: `rgba(${activeProduct.accentRgb}, 0.35)`,
                boxShadow: `0 24px 60px -15px rgba(0,0,0,0.95), 0 0 40px -10px rgba(${activeProduct.accentRgb}, 0.2)`,
              }}
            >
              {/* Terminal Top Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#07090F]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/25 border border-red-500/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/25 border border-amber-500/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/25 border border-emerald-500/40" />
                  </div>
                  <span className="text-neutral-500 text-xs mx-1 font-mono">|</span>
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                    <div className="w-4 h-4 flex items-center justify-center">
                      {getProductIcon(activeProduct.id, "w-3.5 h-3.5")}
                    </div>
                    <span className="font-semibold text-white">{activeProduct.name}</span>
                    <span className="text-neutral-500 text-[10px] hidden sm:inline">
                      · {activeProduct.tagline}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Production Active
                  </span>

                  <a
                    href={activeProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-white transition-all shadow-md hover:scale-[1.02]"
                    style={{
                      background: `linear-gradient(135deg, ${activeProduct.accent}, #4f46e5)`,
                    }}
                  >
                    <span>Launch Sandbox</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* ── Interactive Simulator Screen (Height-fitted, razor-sharp) ── */}
              <div className="h-[250px] sm:h-[265px] bg-[#05070C] overflow-hidden">
                {renderProductSimulator(activeProduct.id)}
              </div>

              {/* Bottom Telemetry Metrics Strip */}
              <div className="p-3.5 sm:p-4 bg-[#07090F] border-t border-white/[0.08]">
                <div className="grid grid-cols-3 gap-2 text-center">
                  {activeProduct.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="p-2 sm:p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]"
                    >
                      <div
                        className="text-xs sm:text-sm font-bold font-mono"
                        style={{ color: activeProduct.accent }}
                      >
                        {m.value}
                      </div>
                      <div className="text-[10px] text-neutral-400 mt-0.5 truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Sandbox Button */}
                <div className="mt-3 pt-2.5 border-t border-white/[0.06] sm:hidden">
                  <a
                    href={activeProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${activeProduct.accent}, #4f46e5)`,
                    }}
                  >
                    <span>Launch {activeProduct.name} Sandbox</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
