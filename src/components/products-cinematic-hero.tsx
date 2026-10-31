"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
  Layers,
} from "lucide-react";

const PRODUCT_IMAGE_MAP: Record<string, string> = {
  mailflow: "/wow/wow6-workplace-communication.png",
  prospectiq: "/wow/wow3-project-management.png",
  omnira: "/wow/wow1-social-intelligence.png",
  unveil: "/wow/wow5-data-intelligence.png",
  veyrix: "/wow/wow2-seo-intelligence.png",
};

export function ProductsCinematicHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const activeProduct: DemoProduct = DEMO_PRODUCTS[activeIndex] || DEMO_PRODUCTS[0];
  const prevProduct: DemoProduct =
    DEMO_PRODUCTS[(activeIndex - 1 + DEMO_PRODUCTS.length) % DEMO_PRODUCTS.length];
  const nextProduct: DemoProduct =
    DEMO_PRODUCTS[(activeIndex + 1) % DEMO_PRODUCTS.length];

  // Auto-cycle through products every 6 seconds unless paused by user
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DEMO_PRODUCTS.length);
    }, 6000);
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
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" }
        );
      }
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { opacity: 0, scale: 0.96, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.15 }
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
      { opacity: 0.85, y: 8 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [activeIndex]);

  const getProductIcon = (id: string, cls = "w-5 h-5") => {
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
    <section
      ref={heroRef}
      className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 overflow-hidden bg-[#050608]"
    >
      {/* Background Lighting Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-12 left-1/4 w-[600px] h-[350px] rounded-full blur-[140px] opacity-25"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.5), rgba(6,182,212,0.3), transparent 70%)",
          }}
        />
        <div
          className="absolute top-28 right-10 w-[500px] h-[350px] rounded-full blur-[130px] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(16,185,129,0.35), transparent 70%)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Split Layout: 45% Left / 55% Right ──────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ── Left Column (~45%) ─────────────────────────────────────────── */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>ASHMYRA PRODUCT ECOSYSTEM</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.08]"
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
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
              Explore Ashmyra&apos;s suite of intelligent software products,
              designed to simplify complex workflows, connect business
              operations and turn technology into practical outcomes.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#explore-products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/contact?intent=demo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.12] hover:border-white/[0.25] font-semibold text-sm transition-all"
              >
                <span>Request a Demo</span>
              </Link>
            </div>

            {/* Interactive Product Tabs Selector */}
            <div className="pt-4 border-t border-white/[0.08]">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Select Live Platform:
                </span>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 hover:text-white transition-colors"
                  aria-label={isPaused ? "Play showcase" : "Pause showcase"}
                >
                  {isPaused ? (
                    <>
                      <Play className="w-3 h-3 text-emerald-400" />
                      <span>Resume Auto-Play</span>
                    </>
                  ) : (
                    <>
                      <Pause className="w-3 h-3 text-cyan-400" />
                      <span>Pause Auto-Play</span>
                    </>
                  )}
                </button>
              </div>

              {/* 5 Product Pills */}
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
                          ? "bg-white/[0.08] border-cyan-500/50 shadow-lg shadow-cyan-500/10 text-white"
                          : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] text-neutral-400 hover:text-neutral-200"
                      }`}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        {getProductIcon(prod.id, "w-4 h-4")}
                      </div>
                      <span className="text-[11px] font-semibold truncate w-full">
                        {prod.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Deployment Reassurance */}
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>5 Live Platforms • Dedicated VPC &amp; On-Premise Deployable</span>
            </div>
          </div>

          {/* ── Right Column (~55%): Cinematic Layered Product Showcase ──── */}
          <div
            ref={rightColRef}
            className="lg:col-span-7 relative flex items-center justify-center min-h-[440px] sm:min-h-[500px]"
          >
            {/* Ambient Backlight Glow */}
            <div
              className="absolute -inset-4 rounded-3xl blur-3xl opacity-30 transition-all duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 60% 40%, ${activeProduct.accent}, transparent 60%)`,
              }}
            />

            {/* Back Panel 1 (Previous Product - Tilted Left) */}
            <div
              className="absolute w-[85%] sm:w-[88%] h-[320px] sm:h-[380px] rounded-2xl border border-white/[0.06] opacity-30 blur-[1px] transform -translate-x-6 -translate-y-6 rotate-[-2deg] pointer-events-none hidden md:block"
              style={{
                backgroundColor: "#0B0E17",
                boxShadow: "0 20px 50px -10px rgba(0,0,0,0.8)",
              }}
            >
              <div className="p-4 flex items-center justify-between border-b border-white/[0.05]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="text-xs font-mono text-neutral-500 font-medium">
                    {prevProduct.name} Telemetry
                  </span>
                </div>
              </div>
            </div>

            {/* Back Panel 2 (Next Product - Tilted Right) */}
            <div
              className="absolute w-[85%] sm:w-[88%] h-[320px] sm:h-[380px] rounded-2xl border border-white/[0.06] opacity-30 blur-[1px] transform translate-x-6 translate-y-6 rotate-[2deg] pointer-events-none hidden md:block"
              style={{
                backgroundColor: "#0B0E17",
                boxShadow: "0 20px 50px -10px rgba(0,0,0,0.8)",
              }}
            >
              <div className="p-4 flex items-center justify-between border-b border-white/[0.05]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="text-xs font-mono text-neutral-500 font-medium">
                    {nextProduct.name} Architecture
                  </span>
                </div>
              </div>
            </div>

            {/* ── Active Primary Showcase Card (Center in Sharp Focus) ──── */}
            <div
              ref={cardRef}
              className="relative w-full max-w-xl rounded-2xl border p-5 sm:p-6 transition-all duration-300"
              style={{
                backgroundColor: "#0B0E17",
                borderColor: `rgba(${activeProduct.accentRgb}, 0.35)`,
                boxShadow: `0 24px 60px -15px rgba(0,0,0,0.95), 0 0 45px -10px rgba(${activeProduct.accentRgb}, 0.25)`,
              }}
            >
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `rgba(${activeProduct.accentRgb}, 0.15)`,
                      border: `1px solid rgba(${activeProduct.accentRgb}, 0.35)`,
                    }}
                  >
                    {getProductIcon(activeProduct.id, "w-5 h-5")}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {activeProduct.name}
                      </h3>
                      <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live Demo
                      </span>
                    </div>
                    <span className="text-xs text-neutral-400 font-mono">
                      {activeProduct.category}
                    </span>
                  </div>
                </div>

                <a
                  href={activeProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all shadow-md"
                  style={{
                    background: `linear-gradient(135deg, ${activeProduct.accent}, #4f46e5)`,
                  }}
                >
                  <span>Launch Sandbox</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Verified Product Interface Visual */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black/60 border border-white/[0.1] mb-4 group/preview">
                <Image
                  src={PRODUCT_IMAGE_MAP[activeProduct.id] || "/wow/wow1-social-intelligence.png"}
                  alt={`${activeProduct.name} Live Interface`}
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover/preview:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                {/* Overlay Telemetry HUD */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="font-mono text-white font-semibold">
                      {activeProduct.name}
                    </span>
                    <span className="text-neutral-400 hidden sm:inline">
                      · {activeProduct.highlight}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">
                    Production Active
                  </span>
                </div>
              </div>

              {/* Tagline & Key Capabilities */}
              <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed mb-4">
                {activeProduct.description}
              </p>

              {/* 3 Telemetry Metrics */}
              <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-white/[0.08]">
                {activeProduct.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]"
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
              <div className="mt-4 pt-3 border-t border-white/[0.08] sm:hidden">
                <a
                  href={activeProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-white transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${activeProduct.accent}, #4f46e5)`,
                  }}
                >
                  <span>Launch {activeProduct.name} Sandbox</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
