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
      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-label",    { opacity: 0, y: 16, duration: 0.6 }, 0.1)
        .from(".hero-line",     { opacity: 0, y: 50, stagger: 0.12, duration: 0.9, ease: "power4.out" }, 0.25)
        .from(subRef.current,   { opacity: 0, y: 20, duration: 0.7 }, 0.75)
        .from(pillsRef.current, { opacity: 0, y: 16, duration: 0.6 }, 0.9)
        .from(ctaRef.current,   { opacity: 0, y: 18, duration: 0.6 }, 1.0)
        .from(statsRef.current, { opacity: 0, y: 14, duration: 0.6 }, 1.1)
        .from(imageRef.current, { opacity: 0, x: 80, scale: 0.94, duration: 1.4, ease: "power2.out" }, 0.3);

      // Ambient glow pulse
      gsap.to(glowRef.current, {
        opacity: 0.7, scale: 1.12, duration: 4.5,
        repeat: -1, yoyo: true, ease: "sine.inOut",
      });

      // Scroll parallax
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate(self) {
          const p = self.progress;
          if (headRef.current)
            gsap.set(headRef.current, { y: -p * 70, opacity: 1 - p * 1.8 });
          if (imageRef.current)
            gsap.set(imageRef.current, { y: p * 40, scale: 1 + p * 0.03 });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050608] text-white overflow-hidden flex flex-col"
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
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#050608] to-transparent" />
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

      {/* ── Main layout ───────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col lg:flex-row flex-1 min-h-screen">

        {/* ─ LEFT ─────────────────────────────────────────────────────────── */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 pb-20 lg:pt-0 lg:w-[52%] xl:w-[50%]">

          {/* Section label */}
          <div className="hero-label flex items-center gap-3 mb-10">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-bright">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="section-label text-emerald-300">Systems Online</span>
            </div>
            <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-white/20 to-transparent" />
            <span className="section-label text-neutral-500">AI · DATA · SOFTWARE</span>
          </div>

          {/* Headline */}
          <div ref={headRef} className="mb-8 space-y-2">
            <div className="hero-line text-[0.7rem] font-mono font-semibold tracking-[0.3em] text-neutral-500 uppercase">
              WE BUILD
            </div>
            <h1 className="hero-headline">
              <div className="hero-line gradient-text-warm">Intelligent</div>
              <div className="hero-line text-white">Systems</div>
              <div
                className="hero-line"
                style={{
                  background: "linear-gradient(135deg, #818cf8 0%, #22d3ee 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                That Act.
              </div>
            </h1>
          </div>

          {/* Sub-copy */}
          <p ref={subRef} className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-md mb-8 font-sans font-light">
            Autonomous AI agents, intelligent software and data systems
            engineered for real-world execution.
          </p>

          {/* Capability pills */}
          <div ref={pillsRef} className="flex flex-wrap gap-2.5 mb-10">
            {PILLS.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-bright text-xs font-medium font-sans"
              >
                <Icon className="w-3.5 h-3.5" style={{ color }} />
                <span className="text-neutral-300">{label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-14">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, #6366f1, #818cf8)",
                boxShadow: "0 0 0 1px rgba(99,102,241,0.4), 0 8px 32px -4px rgba(99,102,241,0.5)",
              }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#what-we-build"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-sm text-neutral-300 hover:text-white glass-bright transition-all duration-300 hover:scale-[1.02]"
            >
              Explore What We Build
            </a>
          </div>

          {/* Stats strip */}
          <div ref={statsRef} className="flex items-center gap-8 pt-6 border-t border-white/[0.06]">
            {STATS.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <div className="w-px h-8 bg-white/[0.08]" />}
                <div>
                  <div className="text-2xl font-bold font-display text-white">{s.value}</div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-0.5">{s.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ─ RIGHT — cinematic product screenshot ───────────────────────────── */}
        <div
          ref={imageRef}
          className="relative flex-1 lg:min-h-screen overflow-hidden hidden lg:block"
          style={{ willChange: "transform, opacity" }}
        >
          {/* The product image */}
          <div className="absolute inset-0">
            <Image
              src="/wow/wow1-social-intelligence.png"
              alt="Ashmyra Agentic Social Intelligence"
              fill
              priority
              sizes="55vw"
              className="object-cover object-left-top"
            />
          </div>

          {/* Gradient overlays for seamless blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608]/60 via-transparent to-[#050608]/20" />
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-[#050608]/30" />

          {/* Floating product badge — top right */}
          <div className="absolute top-8 right-8 glass rounded-2xl px-4 py-3 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono text-emerald-300 font-medium">Autonomous Intelligence Active</span>
          </div>

          {/* Floating agent cards — bottom right */}
          <div className="absolute bottom-10 right-8 flex flex-col gap-3">
            {[
              { label: "TREND AGENT",   val: "+340% Signal Detected",      color: "#22d3ee" },
              { label: "CONTENT AGENT", val: "High-Intent B2B Draft Ready", color: "#a78bfa" },
            ].map(card => (
              <div
                key={card.label}
                className="glass rounded-xl px-3.5 py-2.5 flex items-center gap-3 text-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: card.color }} />
                <span className="font-mono font-bold text-white">{card.label}</span>
                <span className="text-neutral-400 font-sans">{card.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-indigo-400/60 to-indigo-400 animate-pulse" />
        <span className="section-label text-neutral-600">Scroll</span>
      </div>
    </section>
  );
}
