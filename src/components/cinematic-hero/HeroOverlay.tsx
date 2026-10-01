"use client";

/**
 * ASHMYRA HERO OVERLAY
 *
 * Layered UI system that sits above the cinematic video.
 *
 * TEXT TIMELINE (aligned to overallProgress 0–1):
 *   0–20%   → Only video. Subtle Ashmyra mark top-center.
 *   20–45%  → Eyebrow appears: AI • SOFTWARE • AUTOMATION
 *   45–70%  → Primary headline reveals: TECHNOLOGY THAT THINKS BEYOND SOFTWARE.
 *   70–100% → Brand tagline + CTA + scroll indicator (VIDEO 04 emotional payoff)
 *
 * LOGO BEHAVIOUR:
 *   Phase 0–2 → Subtle, centered, grows slightly each phase
 *   Phase 3   → Becomes the visual focal point (large, glowing, sharp)
 *
 * All animations via GSAP. Reduced-motion shows everything immediately.
 */

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { HERO_VIDEOS } from "./heroVideoConfig";

interface HeroOverlayProps {
  videoIndex: number;
  overallProgress: number; // 0–1 across all 4 clips
  sequenceComplete: boolean;
  reducedMotion: boolean;
}

export function HeroOverlay({
  videoIndex,
  overallProgress,
  sequenceComplete,
  reducedMotion,
}: HeroOverlayProps) {
  // Element refs
  const eyebrowRef   = useRef<HTMLDivElement>(null);
  const headlineRef  = useRef<HTMLDivElement>(null);
  const taglineRef   = useRef<HTMLDivElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);
  const logoWrapRef  = useRef<HTMLDivElement>(null);
  const scrollRef    = useRef<HTMLDivElement>(null);

  // Animation-fired flags
  const eyebrowDone  = useRef(false);
  const headlineDone = useRef(false);
  const brandDone    = useRef(false);

  // ── Phase computation ────────────────────────────────────────────────
  const phase =
    overallProgress < 0.2 ? 0 :
    overallProgress < 0.45 ? 1 :
    overallProgress < 0.7 ? 2 : 3;

  // ── Reduced-motion: instant reveal of everything ─────────────────────
  useEffect(() => {
    if (!reducedMotion) return;
    [eyebrowRef, headlineRef, taglineRef, ctaRef, logoWrapRef].forEach(r => {
      if (r.current) (r.current as HTMLElement).style.opacity = "1";
    });
  }, [reducedMotion]);

  // ── GSAP: Logo scale-up pulses as phase advances ─────────────────────
  useEffect(() => {
    if (reducedMotion || !logoWrapRef.current) return;
    const scales = [0.55, 0.7, 0.85, 1.0];
    const glows  = [
      "drop-shadow(0 0 20px rgba(99,102,241,0.35))",
      "drop-shadow(0 0 28px rgba(99,102,241,0.5))",
      "drop-shadow(0 0 40px rgba(56,189,248,0.55))",
      "drop-shadow(0 0 60px rgba(99,102,241,0.8))",
    ];
    gsap.to(logoWrapRef.current, {
      scale: scales[phase],
      filter: glows[phase],
      duration: phase === 3 ? 2.0 : 0.9,
      ease: phase === 3 ? "power2.out" : "power2.inOut",
    });
  }, [phase, reducedMotion]);

  // ── GSAP: Phase 1 — eyebrow ──────────────────────────────────────────
  useEffect(() => {
    if (reducedMotion || phase < 1 || eyebrowDone.current || !eyebrowRef.current) return;
    eyebrowDone.current = true;
    gsap.fromTo(eyebrowRef.current,
      { opacity: 0, y: 20, filter: "blur(6px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.6, ease: "power3.out" }
    );
  }, [phase, reducedMotion]);

  // ── GSAP: Phase 2 — headline staggered lines ─────────────────────────
  useEffect(() => {
    if (reducedMotion || phase < 2 || headlineDone.current || !headlineRef.current) return;
    headlineDone.current = true;
    const lines = headlineRef.current.querySelectorAll(".hl");
    gsap.fromTo(lines,
      { opacity: 0, y: 50, filter: "blur(12px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.8, stagger: 0.22, ease: "power4.out" }
    );
  }, [phase, reducedMotion]);

  // ── GSAP: Phase 3 — tagline + CTA ────────────────────────────────────
  useEffect(() => {
    if (reducedMotion || phase < 3 || brandDone.current) return;
    brandDone.current = true;

    const tl = gsap.timeline();

    if (taglineRef.current) {
      tl.fromTo(taglineRef.current,
        { opacity: 0, letterSpacing: "0.5em", filter: "blur(8px)" },
        { opacity: 1, letterSpacing: "0.35em", filter: "blur(0px)", duration: 2.0, ease: "power4.out" }
      );
    }
    if (ctaRef.current) {
      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        "-=0.9"
      );
    }
    if (scrollRef.current) {
      tl.fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.0, ease: "power2.out" },
        "-=0.5"
      );
    }
  }, [phase, reducedMotion]);

  // ── Scroll indicator bounce ───────────────────────────────────────────
  useEffect(() => {
    if (!scrollRef.current || reducedMotion || !sequenceComplete) return;
    gsap.to(scrollRef.current.querySelector(".scroll-dot"), {
      y: 6, repeat: -1, yoyo: true, duration: 1.1, ease: "sine.inOut",
    });
  }, [sequenceComplete, reducedMotion]);

  const phaseLabel = HERO_VIDEOS[videoIndex]?.label ?? "ASHMYRA";

  return (
    <>
      {/* ─── VIDEO GRADIENT OVERLAY ─────────────────────────────────────── */}
      {/* Subtle — keeps video visible. Bottom darkens for text legibility. */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: [
            "linear-gradient(to bottom,",
            "  rgba(7,9,14,0.28) 0%,",
            "  rgba(7,9,14,0.04) 35%,",
            "  rgba(7,9,14,0.04) 55%,",
            "  rgba(7,9,14,0.68) 85%,",
            "  rgba(7,9,14,0.88) 100%",
            ")",
          ].join(""),
        }}
      />

      {/* ─── PHASE TELEMETRY (subtle top-right, desktop only) ───────────── */}
      <div
        className="absolute top-28 right-6 z-30 hidden xl:flex items-center gap-2 text-[10px] font-mono text-white/25 uppercase tracking-[0.25em] select-none pointer-events-none"
        aria-hidden="true"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/40 animate-pulse" />
        {phaseLabel}
      </div>

      {/* ─── LOGO — center stage, grows with each phase ─────────────────── */}
      {/* Positioned absolutely at vertical center, moves up as text reveals */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none select-none">
        <div
          ref={logoWrapRef}
          style={{
            transform: "scale(0.55)",
            marginBottom: phase >= 3 ? "260px" : phase >= 2 ? "220px" : phase >= 1 ? "180px" : "0px",
            transition: "margin-bottom 1.4s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <Image
            src="/brand/ashmyra-icon.png"
            alt="Ashmyra"
            width={120}
            height={120}
            priority
            className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
          />
        </div>
      </div>

      {/* ─── TEXT SYSTEM — stacked in the lower-center ──────────────────── */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-20 sm:pb-24 md:pb-28 px-4 text-center select-none pointer-events-none">

        {/* Phase 1: AI • SOFTWARE • AUTOMATION eyebrow */}
        <div
          ref={eyebrowRef}
          className="mb-5 sm:mb-6"
          style={{ opacity: reducedMotion ? 1 : 0 }}
        >
          <p className="inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-sm font-mono uppercase tracking-[0.32em] text-white/55">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse shrink-0" />
            AI
            <span className="text-white/20">•</span>
            SOFTWARE
            <span className="text-white/20">•</span>
            AUTOMATION
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse shrink-0" />
          </p>
        </div>

        {/* Phase 2: Primary headline */}
        <div
          ref={headlineRef}
          className="mb-5 sm:mb-6 space-y-1"
          style={{ opacity: reducedMotion ? 1 : 0 }}
        >
          <h1 className="font-extrabold tracking-tight leading-[1.01] uppercase">
            <span className="hl block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
              TECHNOLOGY THAT
            </span>
            <span className="hl block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-indigo-200">
              THINKS BEYOND
            </span>
            <span className="hl block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-indigo-100">
              SOFTWARE.
            </span>
          </h1>
        </div>

        {/* Phase 3: AI. Software. Intelligence. tagline */}
        <div
          ref={taglineRef}
          className="mb-7 sm:mb-8"
          style={{ opacity: reducedMotion ? 1 : 0 }}
        >
          <p className="text-[11px] sm:text-sm font-mono text-white/45 uppercase tracking-[0.35em]">
            AI. Software. Intelligence.
          </p>
        </div>

        {/* Phase 3: CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pointer-events-auto"
          style={{ opacity: reducedMotion ? 1 : 0 }}
        >
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm shadow-[0_0_44px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_rgba(99,102,241,0.7)] transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Explore Ashmyra</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/[0.07] hover:bg-white/[0.13] border border-white/[0.18] hover:border-white/35 text-white font-semibold text-sm backdrop-blur-xl transition-all duration-300"
          >
            <span>Start a Conversation</span>
          </Link>
        </div>
      </div>

      {/* ─── SCROLL INDICATOR (appears after sequence completes) ────────── */}
      <div
        ref={scrollRef}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none select-none"
        style={{ opacity: (sequenceComplete || reducedMotion) ? 1 : 0 }}
        aria-hidden="true"
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/25">
          Scroll to explore
        </span>
        <div className="w-[18px] h-[30px] rounded-full border border-white/20 flex items-start justify-center pt-[5px]">
          <div className="scroll-dot w-1 h-2 rounded-full bg-indigo-400/60" />
        </div>
      </div>

      {/* ─── ACCESSIBLE SCREEN READER CONTENT ───────────────────────────── */}
      <div className="sr-only">
        <h1>Ashmyra — Technology That Thinks Beyond Software</h1>
        <p>AI. Software. Intelligence. Automation.</p>
        <p>
          Ashmyra creates AI-powered software, SaaS platforms, and intelligent
          autonomous systems that turn complex enterprise operations into
          scalable workflows.
        </p>
      </div>
    </>
  );
}
