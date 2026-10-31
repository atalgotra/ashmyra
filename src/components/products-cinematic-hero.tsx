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
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const dynamicContentRef = useRef<HTMLDivElement>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const activeProduct: DemoProduct = DEMO_PRODUCTS[activeIndex] || DEMO_PRODUCTS[0];

  // Auto-cycle through products every 2.8s unless paused or hovered
  useEffect(() => {
    if (isPaused || isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DEMO_PRODUCTS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPaused, isHovered]);

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
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
        );
      }
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { opacity: 0, scale: 0.98, y: 14 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.06 }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Snappy transition on index change for both left dynamic copy and right card
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    if (dynamicContentRef.current) {
      gsap.fromTo(
        dynamicContentRef.current,
        { opacity: 0.45, y: 3 },
        { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" }
      );
    }

    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0.82, y: 4 },
        { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  const handleSelectProduct = (idx: number) => {
    setActiveIndex(idx);
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    // Auto-resume after 3.5s of inactivity
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3500);
  };

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
     TAILORED INTERACTIVE PRODUCT SIMULATORS (Compact & Precision Fitted)
  ─────────────────────────────────────────────────────────────────────────── */
  const renderProductSimulator = (id: string) => {
    switch (id) {
      // 1. MailFlow — Cold Email & Warmup Deliverability Engine
      case "mailflow":
        return (
          <div className="h-full flex flex-col justify-between p-3.5 sm:p-4 select-none font-sans text-xs">
            {/* Top Status & Health Badge */}
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-semibold text-[12px]">Outbound Campaign Hub</span>
                <span className="text-neutral-500 text-[10.5px]">· 14 Mailboxes Connected</span>
              </div>
              <span className="text-[10px] text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                99.4% Inbox Placement
              </span>
            </div>

            {/* Visual Campaign Performance Card */}
            <div className="space-y-2 py-0.5">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2">
                {/* Email Subject & Reply Rate */}
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2 min-w-0">
                    <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span className="text-neutral-200 font-medium truncate">
                      AI Pipeline &amp; Enterprise Architecture for Q4
                    </span>
                  </div>
                  <span className="text-indigo-300 font-semibold bg-indigo-500/15 border border-indigo-500/30 px-2 py-0.5 rounded text-[10px] shrink-0">
                    28.4% Reply Rate
                  </span>
                </div>

                {/* Visual Health Gauge Meter */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-neutral-400">Primary Inbox Delivery Rate</span>
                    <span className="text-emerald-400 font-semibold">99.4% Delivered</span>
                  </div>
                  <div className="w-full bg-white/[0.06] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: "99.4%",
                        background: "linear-gradient(90deg, #818cf8 0%, #38bdf8 50%, #34d399 100%)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Feature Highlights Row */}
              <div className="grid grid-cols-2 gap-2 text-[10.5px]">
                <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Auto-Rotated &amp; Spam Protected</span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="truncate">AI Subject Score: 94/100</span>
                </div>
              </div>
            </div>

            {/* Footer Status */}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10.5px] text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Active Warmup &amp; Automated Followups</span>
              </span>
              <span className="text-indigo-400 font-medium">Google + Outlook 365</span>
            </div>
          </div>
        );

      // 2. Prospect IQ — B2B Lead Intelligence & Prospect Discovery Platform
      case "prospectiq":
        return (
          <div className="h-full flex flex-col justify-between p-3.5 sm:p-4 select-none font-sans text-xs">
            {/* Top Status & Lead Pool Badge */}
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-white font-semibold text-[12px]">Verified Prospect Discovery</span>
                <span className="text-neutral-500 text-[10.5px]">· ICP Filter</span>
              </div>
              <span className="text-[10px] text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 px-2.5 py-0.5 rounded-full font-medium">
                50M+ B2B Contacts
              </span>
            </div>

            {/* Visual Prospect Profile Card */}
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2 py-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-sm">
                    AC
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-semibold text-[11.5px] flex items-center gap-1.5">
                      <span>Alex Chen</span>
                      <span className="text-[9px] text-emerald-400 bg-emerald-500/15 px-1.5 py-0.2 rounded border border-emerald-500/30 font-medium">
                        Verified
                      </span>
                    </div>
                    <div className="text-neutral-400 text-[10px] truncate">
                      VP of Engineering · CloudScale Tech (Series B)
                    </div>
                  </div>
                </div>
                <span className="text-[9.5px] text-neutral-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.08] hidden sm:inline">
                  180+ Employees
                </span>
              </div>

              {/* Verified Contact Details & Tech Tags */}
              <div className="flex flex-wrap items-center justify-between gap-1.5 pt-1.5 border-t border-white/[0.06] text-[10px]">
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <Mail className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span className="text-cyan-200 text-[9.5px] font-medium">alex.c@cloudscale.io</span>
                </div>
                <div className="flex items-center gap-1 text-neutral-400">
                  <span className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[9px]">AWS</span>
                  <span className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[9px]">PostgreSQL</span>
                  <span className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[9px]">Next.js</span>
                </div>
              </div>
            </div>

            {/* Footer Status */}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10.5px] text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Zero Bounce Guarantee · 98.7% Accuracy</span>
              </span>
              <span className="text-cyan-400 font-medium">1-Click CRM Sync</span>
            </div>
          </div>
        );

      // 3. Omnira — Autonomous Agentic AI Social Media Manager
      case "omnira":
        return (
          <div className="h-full flex flex-col justify-between p-3.5 sm:p-4 select-none font-sans text-xs">
            {/* Top Status & Channel Sync Badge */}
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-semibold text-[12px]">Autonomous Content Studio</span>
                <span className="text-neutral-500 text-[10.5px]">· AI Social Engine</span>
              </div>
              <span className="text-[10px] text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-medium">
                4 Channels Synchronized
              </span>
            </div>

            {/* Visual Content Queue Card */}
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2 py-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-neutral-400 font-medium">Next Scheduled Campaign:</span>
                <span className="text-emerald-400 font-semibold text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded">
                  96% Viral Index
                </span>
              </div>

              <div className="text-white font-medium text-[11.5px] truncate">
                &quot;How Autonomous AI Agents Are Transforming Enterprise Workflows&quot;
              </div>

              {/* Multi-Platform Distribution Badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1.5 border-t border-white/[0.06]">
                <span className="px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-300 text-[9.5px] font-medium">
                  YouTube (4K Video)
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[9.5px] font-medium">
                  LinkedIn (Article)
                </span>
                <span className="px-2 py-0.5 rounded bg-pink-500/10 border border-pink-500/20 text-pink-300 text-[9.5px] font-medium">
                  Instagram (Reels)
                </span>
                <span className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300 text-[9.5px] font-medium">
                  Facebook
                </span>
              </div>
            </div>

            {/* Footer Status */}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10.5px] text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Human-in-the-Loop Approval Gate</span>
              </span>
              <span className="text-emerald-400 font-medium">140K+ Projected Reach</span>
            </div>
          </div>
        );

      // 4. Unveil — Generative Engine Optimization (GEO) Radar
      case "unveil":
        return (
          <div className="h-full flex flex-col justify-between p-3.5 sm:p-4 select-none font-sans text-xs">
            {/* Top Status & GEO Score Badge */}
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-white font-semibold text-[12px]">Generative Engine Visibility (GEO)</span>
              </div>
              <span className="text-[10px] text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-full font-bold">
                GEO Score: 96/100
              </span>
            </div>

            {/* Visual AI Model Citation Leaderboard */}
            <div className="space-y-1.5 py-0.5">
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/[0.07] text-[10.5px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-white font-medium">ChatGPT / GPT-4o</span>
                  <span className="text-neutral-400 text-[9.5px]">· Top Recommendation</span>
                </div>
                <span className="text-emerald-400 font-semibold text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded">
                  Rank #1
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/[0.07] text-[10.5px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-white font-medium">Perplexity AI</span>
                  <span className="text-neutral-400 text-[9.5px]">· 4 Direct Citations</span>
                </div>
                <span className="text-cyan-400 font-semibold text-[10px] bg-cyan-500/10 px-2 py-0.5 rounded">
                  Primary Source
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/[0.07] text-[10.5px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span className="text-white font-medium">Google AI Overviews</span>
                  <span className="text-neutral-400 text-[9.5px]">· Featured Entity Card</span>
                </div>
                <span className="text-indigo-400 font-semibold text-[10px] bg-indigo-500/10 px-2 py-0.5 rounded">
                  Included
                </span>
              </div>
            </div>

            {/* Footer Status */}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10.5px] text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Automated Schema.org &amp; Entity Sync</span>
              </span>
              <span className="text-amber-400 font-medium">Daily AI Brand Audits</span>
            </div>
          </div>
        );

      // 5. Veyrix — Search Intelligence & Spider Forensics
      case "veyrix":
        return (
          <div className="h-full flex flex-col justify-between p-3.5 sm:p-4 select-none font-sans text-xs">
            {/* Top Status & Overall Health Score */}
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-white font-semibold text-[12px]">Enterprise Site Health &amp; Speed HUD</span>
              </div>
              <span className="text-[10px] text-sky-300 bg-sky-500/15 border border-sky-500/30 px-2.5 py-0.5 rounded-full font-semibold">
                99.8% Perfect Health
              </span>
            </div>

            {/* 3 Executive Health Tiles */}
            <div className="grid grid-cols-3 gap-2 py-0.5">
              <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center space-y-0.5">
                <div className="text-sky-300 font-bold text-sm tracking-tight">0.8s</div>
                <div className="text-[10px] text-neutral-300 font-medium">Load Speed</div>
                <div className="text-[9px] text-emerald-400">Fast (Google Pass)</div>
              </div>

              <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center space-y-0.5">
                <div className="text-emerald-400 font-bold text-sm tracking-tight">100%</div>
                <div className="text-[10px] text-neutral-300 font-medium">Page Stability</div>
                <div className="text-[9px] text-emerald-400">Zero Shifts</div>
              </div>

              <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center space-y-0.5">
                <div className="text-cyan-300 font-bold text-sm tracking-tight">2,450</div>
                <div className="text-[10px] text-neutral-300 font-medium">Pages Crawled</div>
                <div className="text-[9px] text-emerald-400">0 Broken Links</div>
              </div>
            </div>

            {/* Health Status Banner */}
            <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-200 text-[10.5px] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Continuous Revenue &amp; SEO Safeguard</span>
              </span>
              <span className="text-[9.5px] text-emerald-400 font-medium">Live 24/7</span>
            </div>

            {/* Footer Status */}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10.5px] text-neutral-400">
              <span>Instant Slack &amp; Email Regressions Alert</span>
              <span className="text-sky-400 font-medium">100% Automated</span>
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
      className="relative pt-14 sm:pt-16 lg:pt-18 pb-6 sm:pb-8 overflow-hidden bg-[#050608]"
    >
      {/* Background Lighting Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-4 left-1/4 w-[480px] h-[260px] rounded-full blur-[120px] opacity-25"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.5), rgba(6,182,212,0.3), transparent 70%)",
          }}
        />
        <div
          className="absolute top-10 right-10 w-[420px] h-[260px] rounded-full blur-[110px] opacity-20"
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
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Split Layout: 45% Left / 55% Right (Clean Viewport Fitted) ───── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-center">

          {/* ── Left Column (~45%): DYNAMICALLY CYCLES IN SYNC (MailFlow -> Veyrix) ── */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-3.5 text-left">
            {/* Dynamic Eyebrow showing Active Engine */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-[11px] font-sans tracking-wide">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: activeProduct.accent }}
              />
              <span className="text-white font-semibold">{activeProduct.name}</span>
              <span className="text-neutral-500">·</span>
              <span style={{ color: activeProduct.accent }}>{activeProduct.badge}</span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-400">0{activeIndex + 1}/05</span>
            </div>

            {/* Dynamic Headline transforming with active platform */}
            <div ref={dynamicContentRef} className="space-y-2">
              <h1
                className="text-2xl sm:text-3xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-[1.08]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Intelligent Products.
                <span
                  key={activeProduct.id}
                  className="block mt-0.5 transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${activeProduct.accent} 0%, #38bdf8 55%, #ffffff 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {activeProduct.name}: {activeProduct.tagline.split("&")[0].trim()}.
                </span>
              </h1>

              {/* Dynamic Supporting Description */}
              <p
                key={`desc-${activeProduct.id}`}
                className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed max-w-lg min-h-[38px] transition-opacity duration-300"
              >
                {activeProduct.description}
              </p>
            </div>

            {/* Dynamic CTAs tied directly to active platform */}
            <div className="flex flex-wrap items-center gap-3 pt-0.5">
              <a
                href={`#${activeProduct.id}`}
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-white font-semibold text-xs sm:text-[13px] shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: `linear-gradient(135deg, ${activeProduct.accent}, #4f46e5)`,
                  boxShadow: `0 8px 20px -5px rgba(${activeProduct.accentRgb}, 0.35)`,
                }}
              >
                <span>Explore {activeProduct.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={activeProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.12] hover:border-white/[0.25] font-semibold text-xs sm:text-[13px] transition-all"
              >
                <span>Live Sandbox ↗</span>
              </a>
            </div>

            {/* Integrated Platform Switcher Strip with Live Sync Indicator */}
            <div className="pt-2.5 border-t border-white/[0.08]">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-sans uppercase tracking-wider text-neutral-400 font-semibold">
                  Live Platform Switcher:
                </span>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="flex items-center gap-1.5 text-[10px] font-sans text-neutral-400 hover:text-white transition-colors"
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
                      <span>Auto-Playing (2.8s)</span>
                    </>
                  )}
                </button>
              </div>

              {/* 5 Product Pills with active sync indicators & progress line */}
              <div className="grid grid-cols-5 gap-1.5">
                {DEMO_PRODUCTS.map((prod, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={prod.id}
                      onClick={() => handleSelectProduct(idx)}
                      className={`relative overflow-hidden flex flex-col items-center gap-1 p-1.5 sm:p-2 rounded-xl transition-all duration-200 border text-center ${
                        isActive
                          ? "bg-white/[0.08] shadow-md text-white"
                          : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] text-neutral-400 hover:text-neutral-200"
                      }`}
                      style={{
                        borderColor: isActive ? prod.accent : "rgba(255,255,255,0.06)",
                      }}
                    >
                      <div className="w-4.5 h-4.5 flex items-center justify-center">
                        {getProductIcon(prod.id, "w-3.5 h-3.5")}
                      </div>
                      <span className="text-[10px] font-semibold truncate w-full">
                        {prod.name}
                      </span>
                      {/* Active Countdown Progress Line */}
                      {isActive && !isPaused && (
                        <span
                          className="absolute bottom-0 inset-x-0 h-[2px] animate-pulse"
                          style={{
                            background: `linear-gradient(90deg, ${prod.accent}, #38bdf8)`,
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reassurance Line */}
            <div className="flex items-center gap-2 text-[10.5px] font-sans text-neutral-400 pt-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>5 Live Platforms • Dedicated VPC &amp; On-Premise Deployable</span>
            </div>
          </div>

          {/* ── Right Column (~55%): Viewport-Fitted Glass Hardware Terminal ── */}
          <div
            ref={rightColRef}
            className="lg:col-span-7 relative flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Ambient Backlight Glow tailored to active product accent */}
            <div
              className="absolute -inset-2 rounded-3xl blur-3xl opacity-20 transition-all duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 60% 40%, ${activeProduct.accent}, transparent 65%)`,
              }}
            />

            {/* ── Hardware Terminal Frame ──── */}
            <div
              ref={cardRef}
              className="relative w-full rounded-2xl border transition-all duration-300 overflow-hidden"
              style={{
                backgroundColor: "#0B0E17",
                borderColor: `rgba(${activeProduct.accentRgb}, 0.35)`,
                boxShadow: `0 24px 60px -15px rgba(0,0,0,0.95), 0 0 35px -10px rgba(${activeProduct.accentRgb}, 0.18)`,
              }}
            >
              {/* Terminal Top Window Bar */}
              <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/[0.08] bg-[#07090F]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/25 border border-red-500/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/25 border border-amber-500/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/25 border border-emerald-500/40" />
                  </div>
                  <span className="text-neutral-500 text-xs mx-1">|</span>
                  <div className="flex items-center gap-2 text-xs font-sans text-neutral-300">
                    <div className="w-4 h-4 flex items-center justify-center">
                      {getProductIcon(activeProduct.id, "w-3.5 h-3.5")}
                    </div>
                    <span className="font-semibold text-white">{activeProduct.name}</span>
                    <span className="text-neutral-500 text-[10.5px] hidden sm:inline truncate max-w-[200px]">
                      · {activeProduct.tagline}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-[9.5px] font-sans text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live System
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
              <div className="h-[215px] sm:h-[225px] bg-[#05070C] overflow-hidden">
                {renderProductSimulator(activeProduct.id)}
              </div>

              {/* Bottom Telemetry Metrics Strip */}
              <div className="px-3.5 py-2.5 sm:py-3 bg-[#07090F] border-t border-white/[0.08]">
                <div className="grid grid-cols-3 gap-2 text-center">
                  {activeProduct.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="p-1.5 sm:p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]"
                    >
                      <div
                        className="text-xs sm:text-sm font-bold font-sans tracking-tight"
                        style={{ color: activeProduct.accent }}
                      >
                        {m.value}
                      </div>
                      <div className="text-[9.5px] text-neutral-400 mt-0.5 truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Sandbox Button */}
                <div className="mt-2.5 pt-2 border-t border-white/[0.06] sm:hidden">
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
