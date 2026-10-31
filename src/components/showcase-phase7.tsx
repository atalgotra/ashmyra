"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface SlideItem {
  id: number;
  num: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
  accent: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 1,
    num: "01",
    category: "Agentic Social Intelligence",
    title: "Autonomous Multi-Agent Social Engine",
    description: "Multi-agent AI swarms turn raw market signals into content strategy, scheduling, and verified publishing.",
    image: "/wow/wow1-social-intelligence.png",
    href: "/products/ai",
    accent: "#818cf8",
  },
  {
    id: 2,
    num: "02",
    category: "Agentic SEO Intelligence",
    title: "Autonomous Search Telemetry & GEO Radar",
    description: "Deep spider crawling, Generative Engine Optimization (GEO), and citation radar for AI answer engines.",
    image: "/wow/wow2-seo-intelligence.png",
    href: "/products/seo",
    accent: "#22d3ee",
  },
  {
    id: 3,
    num: "03",
    category: "AI Project Management",
    title: "Context-Aware Project & Pipeline Execution",
    description: "Workload telemetry, deterministic task dependencies, and intelligent delivery pipelines without sprint bloat.",
    image: "/wow/wow3-project-management.png",
    href: "/products/crm",
    accent: "#34d399",
  },
  {
    id: 4,
    num: "04",
    category: "Intelligent Workforce (HRMS)",
    title: "Unified Workforce Intelligence Platform",
    description: "End-to-end employee lifecycle with automated resume parsing, proctored assessments, and statutory payroll.",
    image: "/wow/wow4-intelligent-workforce.png",
    href: "/products/hrms",
    accent: "#fb923c",
  },
  {
    id: 5,
    num: "05",
    category: "Data Intelligence",
    title: "Real-Time Streaming Pipelines & Decision Layers",
    description: "High-throughput data ingestion, automated anomaly detection, and executive decision intelligence.",
    image: "/wow/wow5-data-intelligence.png",
    href: "/products/analytics",
    accent: "#f472b6",
  },
  {
    id: 6,
    num: "06",
    category: "Enterprise Communication",
    title: "Unified Omnichannel Communications Stream",
    description: "Consolidated conversational streams across WhatsApp, email, and web chat with intelligent agent copilot.",
    image: "/wow/wow6-workplace-communication.png",
    href: "/products/automation",
    accent: "#38bdf8",
  },
  {
    id: 7,
    num: "07",
    category: "Engineering Playground",
    title: "Custom AI & Bespoke Software Engineering",
    description: "If an off-the-shelf solution does not exist, our engineering team architects and builds it from the ground up.",
    image: "/wow/wow7-engineering-playground.png",
    href: "/services/software-development",
    accent: "#c084fc",
  },
];

const AUTO_PLAY_INTERVAL = 6500;

export function ShowcasePhase7() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = SLIDES.length;
  const slide = SLIDES[current];

  // Advance to next slide
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  // Go to previous slide
  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Go to specific slide
  const goToSlide = (idx: number) => {
    if (idx === current) return;
    setCurrent(idx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Autoplay timer with progress bar animation
  useEffect(() => {
    if (paused) return;

    if (progressRef.current) {
      gsap.killTweensOf(progressRef.current);
      gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.to(progressRef.current, {
        scaleX: 1,
        duration: AUTO_PLAY_INTERVAL / 1000,
        ease: "none",
      });
    }

    timerRef.current = setTimeout(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, nextSlide]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    setPaused(false);
  };

  return (
    <section
      id="what-we-build"
      className="relative bg-[#05070c] py-20 sm:py-24 lg:py-28 overflow-hidden text-white border-b border-white/[0.06]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-[11px] font-mono font-semibold tracking-wider text-indigo-400 uppercase">
                What We Build
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Production Systems &amp; Platforms
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* 01/07 Indicator */}
            <div className="text-xs font-mono text-neutral-400 tracking-wider">
              <span className="text-white font-bold">{slide.num}</span>
              <span className="text-neutral-600 mx-1">/</span>
              <span>0{total}</span>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] flex items-center justify-center text-neutral-300 hover:text-white transition-all active:scale-95"
                aria-label="Previous capability"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] flex items-center justify-center text-neutral-300 hover:text-white transition-all active:scale-95"
                aria-label="Next capability"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Interactive Capability Reel ─────────────────────────────────── */}
        <div
          ref={imageContainerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#070912] border border-white/[0.08] shadow-2xl"
        >
          {/* Main Visual Display */}
          <div className="relative aspect-[16/9] sm:aspect-[16/9] lg:aspect-[21/10] w-full overflow-hidden bg-[#070912]">
            {SLIDES.map((item, idx) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === current ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 1024px) 100vw, 85vw"
                  className="object-cover object-top"
                />
                {/* Editorial Vignette Bottom Gradient */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,7,12,0.92) 0%, rgba(5,7,12,0.4) 40%, transparent 70%)",
                  }}
                />
              </div>
            ))}

            {/* Slide Details Overlay (Bottom) */}
            <div className="absolute bottom-0 inset-x-0 z-20 p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[11px] font-mono font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-md"
                    style={{
                      color: slide.accent,
                      background: "rgba(0,0,0,0.6)",
                      border: `1px solid ${slide.accent}40`,
                    }}
                  >
                    {slide.category}
                  </span>
                </div>
                <h3
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {slide.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans max-w-xl">
                  {slide.description}
                </p>
              </div>

              <Link
                href={slide.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-white/[0.1] hover:bg-white/[0.18] border border-white/[0.15] backdrop-blur-md transition-all self-start sm:self-end shrink-0"
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Minimal Progress Bar */}
          <div className="w-full h-1 bg-white/[0.08] relative">
            <div
              ref={progressRef}
              className="h-full"
              style={{
                backgroundColor: slide.accent,
                transformOrigin: "left center",
              }}
            />
          </div>
        </div>

        {/* ── Slide Quick Selector Pills ──────────────────────────────────── */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {SLIDES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => goToSlide(idx)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                idx === current
                  ? "bg-white/[0.1] text-white border border-white/[0.2] font-semibold"
                  : "bg-white/[0.02] text-neutral-400 hover:text-white border border-white/[0.05]"
              }`}
            >
              <span>{item.num}</span>
              <span className="hidden md:inline text-[11px] truncate max-w-[140px]">
                {item.category}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
