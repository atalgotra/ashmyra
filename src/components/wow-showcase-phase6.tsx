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
    gsap.set(el, { scale: 1.06, x: "-0.5%" });
    kbTween.current = gsap.to(el, { scale: 1.0, x: "0.5%", duration: AUTO_MS / 1000, ease: "none" });
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
        startKenBurns(nextIdx);
        setTimeout(() => setPaused(false), 4000);
      },
    });

    // Text exit
    if (textRef.current) {
      tl.to(
        Array.from(textRef.current.querySelectorAll(".stxt")),
        { opacity: 0, y: dir === "forward" ? -22 : 22, stagger: 0.05, duration: 0.35, ease: "power2.in" },
        0
      );
    }

    // Image out
    if (outEl) {
      tl.to(outEl, { opacity: 0, x: dir === "forward" ? "-3%" : "3%", scale: 1.04, duration: 1.0, ease: "power2.inOut" }, 0);
    }

    // Image in
    if (inEl) {
      gsap.set(inEl, {
        opacity: 1, scale: 1.08, x: dir === "forward" ? "4%" : "-4%",
        clipPath: dir === "forward" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
        zIndex: 10,
      });
      tl.to(inEl, { scale: 1.06, x: "-0.5%", clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power2.out" }, 0.06);
    }

    // Text in
    if (textRef.current) {
      tl.fromTo(
        Array.from(textRef.current.querySelectorAll(".stxt")),
        { opacity: 0, y: dir === "forward" ? 30 : -30 },
        { opacity: 1, y: 0, stagger: 0.09, duration: 0.7, ease: "power3.out" },
        0.5
      );
    }
  }, [current, animating, startProgress, startKenBurns]);

  useEffect(() => {
    imageRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { zIndex: i === current ? 5 : 0 });
    });
  }, [current]);

  useEffect(() => {
    if (paused) return;
    startProgress();
    startKenBurns(current);
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

  // Section entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 92%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="what-we-build"
      ref={sectionRef}
      className="relative w-full bg-[#040508] select-none"
      onMouseEnter={() => { setPaused(true); progressTween.current?.pause(); kbTween.current?.pause(); }}
      onMouseLeave={() => { setPaused(false); progressTween.current?.resume(); kbTween.current?.resume(); }}
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
      {/* ── Section header ────────────────────────────────────────────────── */}
      <div className="relative z-20 px-6 sm:px-10 lg:px-16 pt-20 pb-6 max-w-screen-2xl mx-auto">
        <div className="flex items-end justify-between">
          <div>
            <div className="section-label text-neutral-600 mb-2">ASHMYRA TECHNOLOGY</div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              What We Build
            </h2>
            <p className="text-sm text-neutral-500 mt-2 font-sans max-w-sm">
              Intelligent systems across AI, data, software and automation.
            </p>
          </div>
          {/* Slide counter */}
          <div
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: slide.accent }} />
            <span className="text-neutral-500">{slide.num} / 07</span>
          </div>
        </div>
      </div>

      {/* ── Full-bleed slide area ──────────────────────────────────────────── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(480px, 86vh, 900px)" }}
      >
        {/* Image stack */}
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            ref={(el) => { imageRefs.current[i] = el; }}
            className="absolute inset-0"
            style={{ opacity: i === 0 ? 1 : 0, zIndex: i === 0 ? 5 : 0, willChange: "transform, opacity, clip-path" }}
          >
            <Image
              src={s.image}
              alt={s.category}
              fill
              sizes="100vw"
              priority={i <= 1}
              loading={i <= 1 ? "eager" : "lazy"}
              className="object-cover object-center"
            />
            {/* Cinematic overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040508] via-[#040508]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040508]/70 via-[#040508]/15 to-transparent" />
            {/* Accent color wash */}
            <div
              className="absolute bottom-0 left-0 w-[55%] h-[45%] blur-[120px] pointer-events-none"
              style={{ background: s.bg, opacity: 0.8 }}
            />
          </div>
        ))}

        {/* Text overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 sm:px-10 lg:px-16 pb-14 pointer-events-none max-w-screen-2xl mx-auto">
          <div ref={textRef} className="max-w-2xl space-y-4">
            {/* Number + category */}
            <div className="stxt flex items-center gap-4">
              <span
                className="text-6xl sm:text-7xl font-black font-mono leading-none"
                style={{ color: slide.accent, opacity: 0.18 }}
              >
                {slide.num}
              </span>
              <div
                className="px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-[0.18em] uppercase"
                style={{
                  border: `1px solid ${slide.accent}50`,
                  color: slide.accent,
                  background: slide.bg,
                }}
              >
                {slide.category}
              </div>
            </div>

            {/* Headline */}
            <h3
              className="stxt text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.08]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {slide.headline}
            </h3>

            {/* Sub copy */}
            <p className="stxt text-sm sm:text-base text-neutral-400 font-sans font-light leading-relaxed max-w-lg">
              {slide.sub}
            </p>

            {/* CTA */}
            <div className="stxt pointer-events-auto pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-bold font-mono uppercase tracking-wider text-black transition-all hover:scale-[1.04] active:scale-[0.96]"
                style={{ backgroundColor: slide.accent, boxShadow: `0 0 32px -4px ${slide.accent}80` }}
              >
                Explore This
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <button
          onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length, "backward")}
          aria-label="Previous slide"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
          style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" }}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => goTo((current + 1) % SLIDES.length, "forward")}
          aria-label="Next slide"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
          style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" }}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* ── Progress bar ──────────────────────────────────────────────────── */}
      <div className="h-[2px] w-full bg-white/[0.04]">
        <div
          ref={progressRef}
          className="h-full origin-left transition-colors duration-700"
          style={{ backgroundColor: slide.accent, transform: "scaleX(0)" }}
        />
      </div>

      {/* ── Step dots ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-6 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i, i > current ? "forward" : "backward")}
              aria-label={`Slide ${i + 1}`}
              className="flex items-center gap-1.5 group"
            >
              <span
                className="text-[9px] font-mono font-bold transition-colors duration-300"
                style={{ color: i === current ? s.accent : "rgba(255,255,255,0.18)" }}
              >
                {s.num}
              </span>
              <div
                className="h-[3px] rounded-full transition-all duration-500"
                style={{
                  width: i === current ? "40px" : "10px",
                  backgroundColor: i < current
                    ? "rgba(255,255,255,0.2)"
                    : i === current
                    ? s.accent
                    : "rgba(255,255,255,0.08)",
                }}
              />
            </button>
          ))}
        </div>
        <div className="hidden sm:block section-label text-neutral-600">{slide.category}</div>
      </div>
    </section>
  );
}
