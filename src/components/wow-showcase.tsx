"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Slide Data ───────────────────────────────────────────────────────────────
const SLIDES = [
  {
    id: 1,
    tag: "01 / AGENTIC SOCIAL INTELLIGENCE",
    headline: "What Should We\nPost Next?",
    sub: "Multi-agent social intelligence that scans trends, analyzes competitors, and creates content — autonomously.",
    image: "/wow/wow1-social-intelligence.png",
    accent: "#38bdf8",
    accentDark: "rgba(56,189,248,0.12)",
  },
  {
    id: 2,
    tag: "02 / AGENTIC SEO INTELLIGENCE",
    headline: "SEO That Doesn't\nJust Audit.",
    sub: "Real-time semantic analysis, gap detection, and automated fix-generation — from signal to ranked.",
    image: "/wow/wow2-seo-intelligence.png",
    accent: "#a78bfa",
    accentDark: "rgba(167,139,250,0.12)",
  },
  {
    id: 3,
    tag: "03 / AGENTIC AI PROJECT MANAGEMENT",
    headline: "Project Management\nThat Understands the Work.",
    sub: "An intelligent orchestration layer that plans, assigns, monitors, and closes the loop — without manual intervention.",
    image: "/wow/wow3-project-management.png",
    accent: "#34d399",
    accentDark: "rgba(52,211,153,0.12)",
  },
  {
    id: 4,
    tag: "04 / INTELLIGENT WORKFORCE",
    headline: "From Hiring\nto Growth.",
    sub: "AI-native HRMS that automates recruitment pipelines, performance cycles, and employee intelligence.",
    image: "/wow/wow4-intelligent-workforce.png",
    accent: "#fb923c",
    accentDark: "rgba(251,146,60,0.12)",
  },
  {
    id: 5,
    tag: "05 / DATA INTELLIGENCE PLATFORM",
    headline: "Turn Raw Data\ninto Intelligence.",
    sub: "End-to-end data pipelines with autonomous anomaly detection, insight surfacing, and executive dashboards.",
    image: "/wow/wow5-data-intelligence.png",
    accent: "#f472b6",
    accentDark: "rgba(244,114,182,0.12)",
  },
  {
    id: 6,
    tag: "06 / INTELLIGENT WORKPLACE COMMUNICATION",
    headline: "Communication Without\nContext Switching.",
    sub: "AI-assisted messaging, smart threading, and meeting intelligence — built for teams that move fast.",
    image: "/wow/wow6-workplace-communication.png",
    accent: "#22d3ee",
    accentDark: "rgba(34,211,238,0.12)",
  },
  {
    id: 7,
    tag: "07 / ENGINEERING PLAYGROUND",
    headline: "If It Doesn't Exist,\nWe Build It.",
    sub: "From 3D e-commerce to quantum-ready architectures — Ashmyra's real engineering projects prove the thesis.",
    image: "/wow/wow7-engineering-playground.png",
    accent: "#c084fc",
    accentDark: "rgba(192,132,252,0.12)",
  },
];

const AUTO_ADVANCE_MS = 6500;

export function WowShowcase() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressTweenRef = useRef<gsap.core.Tween | null>(null);

  const slide = SLIDES[current];

  // ── Progress bar ──────────────────────────────────────────────────────────
  const startProgress = useCallback(() => {
    if (!progressRef.current) return;
    gsap.killTweensOf(progressRef.current);
    gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left center" });
    progressTweenRef.current = gsap.to(progressRef.current, {
      scaleX: 1,
      duration: AUTO_ADVANCE_MS / 1000,
      ease: "none",
    });
  }, []);

  // ── Go to a specific slide ────────────────────────────────────────────────
  const goTo = useCallback(
    (nextIndex: number, direction: "forward" | "backward" = "forward") => {
      if (isAnimating || nextIndex === current) return;
      setIsAnimating(true);

      if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
      if (progressTweenRef.current) progressTweenRef.current.kill();

      const outEl = imageRefs.current[current];
      const inEl = imageRefs.current[nextIndex];

      const tl = gsap.timeline({
        onComplete: () => {
          setCurrent(nextIndex);
          setIsAnimating(false);
          startProgress();
        },
      });

      // Text exit
      if (textRef.current) {
        tl.to(
          Array.from(textRef.current.children),
          {
            opacity: 0,
            y: direction === "forward" ? -24 : 24,
            stagger: 0.04,
            duration: 0.4,
            ease: "power2.in",
          },
          0
        );
      }

      // Image cross-dissolve
      if (outEl) {
        tl.to(outEl, { opacity: 0, scale: 1.05, duration: 0.8, ease: "power2.inOut" }, 0);
      }
      if (inEl) {
        gsap.set(inEl, { opacity: 0, scale: direction === "forward" ? 0.97 : 1.03, zIndex: 5 });
        tl.to(inEl, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }, 0.12);
      }

      // Text entrance
      if (textRef.current) {
        tl.fromTo(
          Array.from(textRef.current.children),
          { opacity: 0, y: direction === "forward" ? 36 : -36 },
          { opacity: 1, y: 0, stagger: 0.07, duration: 0.6, ease: "power3.out" },
          0.5
        );
      }
    },
    [current, isAnimating, startProgress]
  );

  // ── Sync zIndex after current changes ────────────────────────────────────
  useEffect(() => {
    imageRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { zIndex: i === current ? 5 : 0 });
    });
  }, [current]);

  // ── Auto-advance ──────────────────────────────────────────────────────────
  useEffect(() => {
    startProgress();
    autoTimerRef.current = setTimeout(() => {
      goTo((current + 1) % SLIDES.length, "forward");
    }, AUTO_ADVANCE_MS);
    return () => {
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  // ── Keyboard navigation ───────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo((current + 1) % SLIDES.length, "forward");
      if (e.key === "ArrowLeft") goTo((current - 1 + SLIDES.length) % SLIDES.length, "backward");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo]);

  // ── Touch swipe ───────────────────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0
        ? goTo((current + 1) % SLIDES.length, "forward")
        : goTo((current - 1 + SLIDES.length) % SLIDES.length, "backward");
    }
    setTouchStart(null);
  };

  // ── Section entrance ──────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 88%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="what-we-build"
      ref={sectionRef}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative w-full bg-[#05070a] border-t border-white/[0.06] overflow-hidden"
    >
      {/* ── Section Label ─────────────────────────────────────────────────── */}
      <div className="relative z-20 flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-14 pb-3 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-3">
          <span
            className="w-2 h-2 rounded-full animate-pulse transition-colors duration-500"
            style={{ backgroundColor: slide.accent }}
          />
          <span className="text-xs font-mono tracking-[0.22em] uppercase text-neutral-500 font-semibold">
            What We Build
          </span>
        </div>
        <span className="text-xs font-mono text-neutral-600 hidden sm:block">
          {String(current + 1).padStart(2, "0")} &nbsp;/&nbsp; {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── Full-Screen Slide Stack ───────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: "min(87vh, 820px)" }}>
        {/* Image Layers */}
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            ref={(el) => { imageRefs.current[i] = el; }}
            className="absolute inset-0"
            style={{ opacity: i === 0 ? 1 : 0, zIndex: i === 0 ? 5 : 0, willChange: "transform, opacity" }}
          >
            <Image
              src={s.image}
              alt={s.tag}
              fill
              sizes="100vw"
              priority={i <= 1}
              className="object-cover object-center"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05070a]/65 via-transparent to-[#05070a]/20" />
            {/* Accent glow */}
            <div
              className="absolute bottom-0 left-0 w-[700px] h-[320px] blur-[140px] pointer-events-none transition-colors duration-1000"
              style={{ background: s.accentDark }}
            />
          </div>
        ))}

        {/* ── Text Content ─────────────────────────────────────────────── */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-16 sm:pb-20 px-6 sm:px-10 lg:px-16 max-w-screen-2xl mx-auto pointer-events-none">
          <div ref={textRef} className="space-y-3 sm:space-y-5 max-w-2xl">
            {/* Category tag */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase"
              style={{
                borderColor: `${slide.accent}45`,
                color: slide.accent,
                backgroundColor: slide.accentDark,
              }}
            >
              {slide.tag}
            </div>

            {/* Main headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.04] whitespace-pre-line">
              {slide.headline}
            </h2>

            {/* Supporting text */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-normal leading-relaxed max-w-xl">
              {slide.sub}
            </p>

            {/* CTA */}
            <div className="pointer-events-auto pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold font-mono uppercase tracking-wider text-black transition-all hover:scale-105 active:scale-95 shadow-lg"
                style={{ backgroundColor: slide.accent }}
              >
                Build This With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Arrow controls ────────────────────────────────────────────── */}
        <button
          onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length, "backward")}
          aria-label="Previous slide"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 border border-white/[0.14] backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => goTo((current + 1) % SLIDES.length, "forward")}
          aria-label="Next slide"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 border border-white/[0.14] backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* ── Dot navigation ────────────────────────────────────────────── */}
        <div className="absolute bottom-7 right-6 sm:right-10 lg:right-16 z-30 flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i, i > current ? "forward" : "backward")}
              aria-label={`Slide ${i + 1}`}
              className="relative rounded-full transition-all duration-400"
              style={{
                width: i === current ? 28 : 6,
                height: 6,
                backgroundColor: i === current ? s.accent : "rgba(255,255,255,0.22)",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Progress Bar ─────────────────────────────────────────────────── */}
      <div className="relative h-[2px] w-full bg-white/[0.05]">
        <div
          ref={progressRef}
          className="absolute inset-y-0 left-0 w-full transition-colors duration-500"
          style={{ backgroundColor: slide.accent, transformOrigin: "left center", transform: "scaleX(0)" }}
        />
      </div>

      {/* ── Desktop Thumbnail Strip ───────────────────────────────────────── */}
      <div className="hidden lg:flex items-stretch divide-x divide-white/[0.06] border-t border-white/[0.06]">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i, i > current ? "forward" : "backward")}
            className={`group flex-1 flex flex-col gap-1.5 px-5 py-4 text-left transition-all duration-300 ${
              i === current ? "bg-white/[0.045]" : "hover:bg-white/[0.02] opacity-55 hover:opacity-85"
            }`}
          >
            <span
              className="text-[9px] font-mono tracking-[0.2em] uppercase font-bold transition-colors duration-300"
              style={{ color: i === current ? s.accent : "#6b7280" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[11px] font-semibold text-white leading-tight line-clamp-2">
              {s.headline.replace("\n", " ")}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
