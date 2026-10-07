"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SLIDES = [
  {
    id: 1, num: "01",
    category: "AGENTIC SOCIAL INTELLIGENCE",
    headline: "Multiple AI agents turn social signals into strategy.",
    sub: "Research · Create · Schedule · Optimise — automatically across every platform.",
    image: "/wow/wow1-social-intelligence.png",
    accent: "#22d3ee",
    bg: "rgba(34,211,238,0.06)",
  },
  {
    id: 2, num: "02",
    category: "AGENTIC SEO INTELLIGENCE",
    headline: "From crawl to recommendation, intelligence becomes action.",
    sub: "Crawl, audit, fix and rank — a full SEO system driven by AI agents.",
    image: "/wow/wow2-seo-intelligence.png",
    accent: "#a78bfa",
    bg: "rgba(167,139,250,0.06)",
  },
  {
    id: 3, num: "03",
    category: "AI PROJECT MANAGEMENT",
    headline: "Context-aware planning, automation and execution.",
    sub: "Tasks, timelines and team intelligence woven into a single intelligent layer.",
    image: "/wow/wow3-project-management.png",
    accent: "#34d399",
    bg: "rgba(52,211,153,0.06)",
  },
  {
    id: 4, num: "04",
    category: "INTELLIGENT WORKFORCE",
    headline: "One connected system across the employee lifecycle.",
    sub: "HRMS reimagined with AI — hire, onboard, manage and retain at scale.",
    image: "/wow/wow4-intelligent-workforce.png",
    accent: "#fb923c",
    bg: "rgba(251,146,60,0.06)",
  },
  {
    id: 5, num: "05",
    category: "DATA INTELLIGENCE",
    headline: "Turn raw data into insight and opportunity.",
    sub: "Real-time pipelines, anomaly detection and decision dashboards.",
    image: "/wow/wow5-data-intelligence.png",
    accent: "#f472b6",
    bg: "rgba(244,114,182,0.06)",
  },
  {
    id: 6, num: "06",
    category: "INTELLIGENT WORKPLACE",
    headline: "Communication, collaboration and execution in one place.",
    sub: "A single intelligent layer connecting your entire team and workflow.",
    image: "/wow/wow6-workplace-communication.png",
    accent: "#38bdf8",
    bg: "rgba(56,189,248,0.06)",
  },
  {
    id: 7, num: "07",
    category: "ENGINEERING PLAYGROUND",
    headline: "If it doesn't exist, we build it.",
    sub: "Custom-engineered AI, software and data systems for hard problems.",
    image: "/wow/wow7-engineering-playground.png",
    accent: "#c084fc",
    bg: "rgba(192,132,252,0.06)",
  },
];

const AUTO_MS = 7000;

export function WowShowcasePhase6() {
  const [current, setCurrent]         = useState(0);
  const [animating, setAnimating]     = useState(false);
  const [paused, setPaused]           = useState(false);
  const [touchStart, setTouchStart]   = useState<number | null>(null);

  const sectionRef    = useRef<HTMLElement>(null);
  const imageRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const textRef       = useRef<HTMLDivElement>(null);
  const progressRef   = useRef<HTMLDivElement>(null);
  const autoTimer     = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressTween = useRef<gsap.core.Tween | null>(null);
  const kbTween       = useRef<gsap.core.Tween | null>(null);

  const slide = SLIDES[current];

  const startKenBurns = useCallback((idx: number) => {
    const el = imageRefs.current[idx];
    if (!el) return;
    if (kbTween.current) kbTween.current.kill();
    gsap.set(el, { scale: 1, x: 0 });
  }, []);

  const startProgress = useCallback(() => {
    if (!progressRef.current) return;
    if (progressTween.current) progressTween.current.kill();
    gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left center" });
    progressTween.current = gsap.to(progressRef.current, { scaleX: 1, duration: AUTO_MS / 1000, ease: "none" });
  }, []);

  const goTo = useCallback((nextIdx: number, dir: "forward" | "backward" = "forward") => {
    if (animating || nextIdx === current) return;
    setAnimating(true);
    setPaused(true);

    if (autoTimer.current) clearTimeout(autoTimer.current);
    if (progressTween.current) progressTween.current.kill();
    if (kbTween.current) kbTween.current.kill();

    const outEl = imageRefs.current[current];
    const inEl  = imageRefs.current[nextIdx];

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrent(nextIdx);
        setAnimating(false);
        startProgress();
        setTimeout(() => setPaused(false), 4000);
      },
    });

    // Image out
    if (outEl) {
      tl.to(outEl, { opacity: 0, duration: 0.5, ease: "power2.inOut" }, 0);
    }

    // Image in
    if (inEl) {
      gsap.set(inEl, { opacity: 0, scale: 1, x: 0, zIndex: 10 });
      tl.to(inEl, { opacity: 1, duration: 0.5, ease: "power2.out" }, 0.05);
    }
  }, [current, animating, startProgress]);

  useEffect(() => {
    imageRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { zIndex: i === current ? 5 : 0, opacity: i === current ? 1 : 0 });
    });
  }, [current]);

  useEffect(() => {
    if (paused) return;
    startProgress();
    autoTimer.current = setTimeout(() => {
      goTo((current + 1) % SLIDES.length, "forward");
    }, AUTO_MS);
    return () => { if (autoTimer.current) clearTimeout(autoTimer.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo((current + 1) % SLIDES.length, "forward");
      if (e.key === "ArrowLeft")  goTo((current - 1 + SLIDES.length) % SLIDES.length, "backward");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo]);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      const match = hash.match(/#wow-(\d+)/);
      if (match) {
        const slideIdx = parseInt(match[1], 10) - 1;
        if (slideIdx >= 0 && slideIdx < SLIDES.length) {
          goTo(slideIdx);
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [goTo]);

  return (
    <section
      id="what-we-build"
      ref={sectionRef}
      className="relative w-full bg-[#040508] select-none pt-6 sm:pt-8 pb-3 sm:pb-4"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
      onMouseEnter={() => { setPaused(true); progressTween.current?.pause(); }}
      onMouseLeave={() => { setPaused(false); progressTween.current?.resume(); }}
      onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart === null) return;
        const d = touchStart - e.changedTouches[0].clientX;
        if (Math.abs(d) > 45) {
          d > 0
            ? goTo((current + 1) % SLIDES.length, "forward")
            : goTo((current - 1 + SLIDES.length) % SLIDES.length, "backward");
        }
        setTouchStart(null);
      }}
    >
      {/* Anchor targets for direct deep-linking and browser navigation */}
      <div id="systems" className="sr-only" aria-hidden="true" />
      <div id="agentic-brain" className="sr-only" aria-hidden="true" />
      <div id="wow-1" className="sr-only" aria-hidden="true" />
      <div id="wow-2" className="sr-only" aria-hidden="true" />
      <div id="wow-3" className="sr-only" aria-hidden="true" />
      <div id="wow-4" className="sr-only" aria-hidden="true" />
      <div id="wow-5" className="sr-only" aria-hidden="true" />
      <div id="wow-6" className="sr-only" aria-hidden="true" />

      {/* ── Section Header with Active Slide Info ─────────────────────────── */}
      <div className="relative z-20 px-6 sm:px-10 lg:px-16 pb-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="section-label text-neutral-500">WHAT WE BUILD</span>
              <span className="text-neutral-600">·</span>
              <span
                className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase"
                style={{ border: `1px solid ${slide.accent}50`, color: slide.accent, background: slide.bg }}
              >
                {slide.category}
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {slide.headline}
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 font-sans max-w-2xl">
              {slide.sub}
            </p>
          </div>

          <div className="flex items-center gap-4 self-start lg:self-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold font-mono uppercase tracking-wider text-black transition-all hover:scale-[1.03] active:scale-[0.97]"
              style={{ backgroundColor: slide.accent, boxShadow: `0 0 24px -4px ${slide.accent}70` }}
            >
              Explore This
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Slide Canvas — Exact 16:9 Aspect Ratio (Zero Text Slicing) ──────── */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div
          className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden glass-bright bg-[#07090f]"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: `0 25px 80px -15px rgba(0, 0, 0, 0.95), 0 0 50px -10px ${slide.accent}20`,
          }}
        >
          {/* Images */}
          {SLIDES.map((s, i) => (
            <div
              key={s.id}
              ref={(el) => { imageRefs.current[i] = el; }}
              className="absolute inset-0"
              style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 5 : 0 }}
            >
              <Image
                src={s.image}
                alt={s.category}
                fill
                sizes="(min-width: 1280px) 1200px, 95vw"
                priority={i <= 1}
                loading={i <= 1 ? "eager" : "lazy"}
                className="object-contain"
              />
            </div>
          ))}

          {/* Prev / Next controls */}
          <button
            onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length, "backward")}
            aria-label="Previous slide"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
            style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(12px)" }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => goTo((current + 1) % SLIDES.length, "forward")}
            aria-label="Next slide"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
            style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(12px)" }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* ── Progress bar ──────────────────────────────────────────────────── */}
        <div className="h-[2px] w-full bg-white/[0.04] mt-5 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full origin-left transition-colors duration-700"
            style={{ backgroundColor: slide.accent, transform: "scaleX(0)" }}
          />
        </div>

        {/* ── Step dots & Category ──────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i, i > current ? "forward" : "backward")}
                aria-label={`Slide ${i + 1}`}
                className="flex items-center gap-1.5 py-1.5 group shrink-0"
              >
                <span
                  className="text-[10px] font-mono font-bold transition-colors duration-300"
                  style={{ color: i === current ? s.accent : "rgba(255,255,255,0.25)" }}
                >
                  {s.num}
                </span>
                <div
                  className="h-[3px] rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "36px" : "10px",
                    backgroundColor: i === current ? s.accent : "rgba(255,255,255,0.1)",
                  }}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: slide.accent }} />
            <span className="text-[11px] sm:text-xs font-mono text-neutral-400 font-medium tracking-wider uppercase truncate">
              {slide.category}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
