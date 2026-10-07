"use client";

/**
 * ASHMYRA CINEMATIC HERO — MAIN ORCHESTRATOR
 *
 * Composes:
 *   - VideoSequence (double-buffered video engine)
 *   - HeroOverlay (4-phase GSAP text reveal)
 *   - GSAP ScrollTrigger: scale-down exit + bridge reveal
 *
 * After the 4-clip sequence completes → static Ashmyra brand state
 * ScrollTrigger: hero compresses, intelligence stream words emerge
 */

import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoSequence, { VideoSequenceHandle } from "./VideoSequence";
import { HeroOverlay } from "./HeroOverlay";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CinematicHero() {
  const containerRef     = useRef<HTMLDivElement>(null);
  const heroSectionRef   = useRef<HTMLElement>(null);
  const videoWrapperRef  = useRef<HTMLDivElement>(null);
  const seqRef           = useRef<VideoSequenceHandle>(null);

  const [videoIndex, setVideoIndex]             = useState(0);
  const [overallProgress, setOverallProgress]   = useState(0);
  const [sequenceComplete, setSequenceComplete] = useState(false);
  const [reducedMotion, setReducedMotion]       = useState(false);

  // ── Detect prefers-reduced-motion ────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ── Callbacks ─────────────────────────────────────────────────────────
  const handlePhaseChange = useCallback((idx: number) => {
    setVideoIndex(idx);
  }, []);

  const handleSequenceComplete = useCallback(() => {
    setSequenceComplete(true);
    setOverallProgress(1);
  }, []);

  const handleOverallProgress = useCallback((p: number) => {
    setOverallProgress(p);
  }, []);

  // ── GSAP ScrollTrigger: hero compression on scroll ───────────────────
  useEffect(() => {
    if (!heroSectionRef.current || !videoWrapperRef.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      // Video wrapper gently scales down as user scrolls
      gsap.to(videoWrapperRef.current, {
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.8,
        },
        scale: 0.9,
        borderRadius: "28px",
        filter: "brightness(0.6) blur(1px)",
        ease: "none",
      });

      // Intelligence stream words stagger in during scroll
      gsap.fromTo(".hero-stream-word",
        { opacity: 0, y: 25 },
        {
          scrollTrigger: {
            trigger: ".hero-bridge-section",
            start: "top 85%",
            end: "center center",
            scrub: 1.2,
          },
          opacity: 1,
          y: 0,
          stagger: 0.04,
          ease: "none",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div ref={containerRef} className="relative w-full">

      {/* ================================================================ */}
      {/* HERO — FULL VIEWPORT                                             */}
      {/* ================================================================ */}
      <section
        ref={heroSectionRef}
        className="relative w-full overflow-hidden bg-[#07090e] cinematic-hero-height"
        aria-label="Ashmyra cinematic introduction"
      >
        {/* Video wrapper (transformed by ScrollTrigger on scroll) */}
        <div
          ref={videoWrapperRef}
          className="absolute inset-0 overflow-hidden"
          style={{ willChange: "transform, filter, border-radius" }}
        >
          <VideoSequence
            ref={seqRef}
            onPhaseChange={handlePhaseChange}
            onSequenceComplete={handleSequenceComplete}
            onOverallProgress={handleOverallProgress}
            reducedMotion={reducedMotion}
          />
        </div>

        {/* Overlay: gradient + logo + text + CTAs */}
        <HeroOverlay
          videoIndex={videoIndex}
          overallProgress={reducedMotion ? 1 : overallProgress}
          sequenceComplete={sequenceComplete || reducedMotion}
          reducedMotion={reducedMotion}
        />
      </section>

      {/* ================================================================ */}
      {/* BRIDGE — Intelligence equation streams out from hero              */}
      {/* Scroll-controlled reveal; creates visual continuity              */}
      {/* ================================================================ */}
      <section className="hero-bridge-section relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-b border-white/[0.05] overflow-hidden">

        {/* Background ambience */}
        <div className="absolute inset-0 tech-grid-pattern opacity-[0.06] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[420px] bg-gradient-radial from-indigo-600/6 to-transparent blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">

          {/* Minimal statement */}
          <div className="hero-stream-word">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/70 leading-relaxed max-w-3xl mx-auto">
              Complexity is everywhere.
              <br />
              <span className="text-white font-semibold">
                We build the intelligence to simplify it.
              </span>
            </p>
          </div>

          {/* AI + SOFTWARE + DATA + AUTOMATION = ASHMYRA equation */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 text-[11px] sm:text-xs md:text-sm font-mono">
            {(["AI AGENTS", "SOFTWARE", "DATA", "AUTOMATION"] as const).map(
              (word, i) => (
                <React.Fragment key={word}>
                  <span className="hero-stream-word px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white/65 font-bold tracking-widest hover:border-indigo-500/40 hover:text-white transition-all duration-300 cursor-default">
                    {word}
                  </span>
                  {i < 3 && (
                    <span className="hero-stream-word text-indigo-500/40 font-bold text-xl leading-none">
                      +
                    </span>
                  )}
                </React.Fragment>
              )
            )}
            <span className="hero-stream-word text-sky-400/50 font-bold text-xl mx-1 leading-none">=</span>
            <span className="hero-stream-word px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-indigo-500/15 to-sky-500/15 border border-indigo-500/30 text-white font-black tracking-[0.18em] shadow-[0_0_30px_rgba(99,102,241,0.18)]">
              ASHMYRA
            </span>
          </div>

          {/* Sub-description */}
          <p className="hero-stream-word text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Autonomous agentic workflows designed to remove operational friction
            so humans focus on high-impact strategy.
          </p>
        </div>
      </section>
    </div>
  );
}
