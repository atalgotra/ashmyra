"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Zap, Brain, Globe } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { value: "100+", label: "Digital Experiences" },
  { value: "14+",  label: "Years in AI & Data" },
  { value: "7",    label: "Intelligent Products" },
];

const PILLS = [
  { icon: Brain,  label: "Agentic AI",      color: "#818cf8" },
  { icon: Zap,    label: "Automation",       color: "#22d3ee" },
  { icon: Globe,  label: "Enterprise SaaS",  color: "#10b981" },
];

export function HeroPhase6() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headRef     = useRef<HTMLDivElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);
  const pillsRef    = useRef<HTMLDivElement>(null);
  const imageRef    = useRef<HTMLDivElement>(null);
  const glowRef     = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const ctx = gsap.context(() => {
      // Entrance timeline using fromTo so opacity always resolves cleanly
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(headRef.current,  { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" }, 0.1)
        .fromTo(subRef.current,   { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.25)
        .fromTo(pillsRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, 0.4)
        .fromTo(ctaRef.current,   { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6 }, 0.55)
        .fromTo(statsRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, 0.7)
        .fromTo(imageRef.current, { opacity: 0, x: 40, scale: 0.96 }, { opacity: 1, x: 0, scale: 1, duration: 1.0, ease: "power2.out" }, 0.2);

      // Ambient glow pulse
      gsap.to(glowRef.current, {
        opacity: 0.7, scale: 1.12, duration: 4.5,
        repeat: -1, yoyo: true, ease: "sine.inOut",
      });

      // Scroll parallax - smooth fade out on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate(self) {
          const p = self.progress;
          if (headRef.current)
            gsap.set(headRef.current, { opacity: Math.max(0, 1 - p * 1.6) });
          if (imageRef.current)
            gsap.set(imageRef.current, { y: p * 30, scale: 1 + p * 0.02, opacity: Math.max(0, 1 - p * 1.6) });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#050608] text-white overflow-hidden flex flex-col pt-24 sm:pt-28 pb-8 sm:pb-12"
      style={{ isolation: "isolate" }}
    >
      {/* ── Background atmosphere ──────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050608] via-[#07090f] to-[#050608]" />
        {/* Dot grid */}
        <div className="absolute inset-0 dot-bg opacity-50" />
        {/* Right quadrant glow */}
        <div className="absolute top-0 right-0 w-[65%] h-full bg-[radial-gradient(ellipse_90%_80%_at_85%_30%,rgba(99,102,241,0.12)_0%,transparent_60%)]" />
        {/* Left accent */}
        <div className="absolute bottom-0 left-0 w-[50%] h-[60%] bg-[radial-gradient(ellipse_70%_60%_at_0%_100%,rgba(34,211,238,0.05)_0%,transparent_70%)]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#050608] to-transparent" />
      </div>

      {/* ── Ambient glow ──────────────────────────────────────────────────── */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none"
        style={{
          right: "-10%",
          top: "5%",
          width: "55vw",
          height: "65vh",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, rgba(34,211,238,0.06) 50%, transparent 70%)",
          filter: "blur(60px)",
          opacity: 0.5,
        }}
      />

      {/* ── Main layout — Compact, zero dead space, 100% visible above fold ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

          {/* ─ LEFT: Headline, copy, CTAs, Stats ────────────────────────────── */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">

            {/* Headline */}
            <div ref={headRef} className="mb-4 sm:mb-5">
              <div className="text-[11px] font-mono font-semibold tracking-[0.25em] text-indigo-400 uppercase mb-2">
                WE BUILD
              </div>
              <h1
                className="text-4xl sm:text-5xl xl:text-[3.4rem] font-bold tracking-tight leading-[1.06]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="gradient-text-warm">Intelligent</span>{" "}
                <span className="text-white">Systems</span><br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #818cf8 0%, #22d3ee 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  That Act.
                </span>
              </h1>
            </div>

            {/* Sub-copy */}
            <p ref={subRef} className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-md mb-5 font-normal">
              Autonomous AI agents, intelligent software and data systems
              engineered for real-world execution.
            </p>

            {/* Capability pills */}
            <div ref={pillsRef} className="flex flex-wrap gap-2 mb-6">
              {PILLS.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-bright text-xs font-medium"
                >
                  <Icon className="w-3.5 h-3.5" style={{ color }} />
                  <span className="text-neutral-200">{label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-3.5 mb-6 sm:mb-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #818cf8)",
                  boxShadow: "0 0 0 1px rgba(99,102,241,0.5), 0 8px 24px -4px rgba(99,102,241,0.5)",
                }}
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#what-we-build"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-neutral-300 hover:text-white glass-bright transition-all duration-300 hover:scale-[1.02]"
              >
                Explore What We Build
              </a>
            </div>

            {/* Stats strip */}
            <div ref={statsRef} className="flex items-center gap-6 sm:gap-8 pt-4 border-t border-white/[0.08]">
              {STATS.map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && <div className="w-px h-7 bg-white/[0.08]" />}
                  <div>
                    <div className="text-xl sm:text-2xl font-bold font-display text-white">{s.value}</div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-0.5">{s.label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ─ RIGHT: Proportional, uncut high-resolution product canvas ──────── */}
          <div className="lg:col-span-7 xl:col-span-7 hidden lg:flex items-center justify-center pl-2 xl:pl-4">
            <div
              ref={imageRef}
              className="relative w-full max-w-[760px] xl:max-w-[820px] rounded-2xl overflow-hidden glass-bright"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 25px 80px -15px rgba(0, 0, 0, 0.95), 0 0 60px -10px rgba(99, 102, 241, 0.25)",
                willChange: "transform, opacity",
              }}
            >
              {/* Product Visual Area — Exact native resolution: zero crop, zero fill warnings */}
              <div className="relative w-full bg-[#07090f] overflow-hidden rounded-2xl">
                <Image
                  src="/wow/wow1-social-intelligence.png"
                  alt="Ashmyra Agentic Social Intelligence"
                  width={1672}
                  height={941}
                  priority
                  sizes="(min-width: 1280px) 58vw, 55vw"
                  className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
