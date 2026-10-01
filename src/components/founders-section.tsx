"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Cpu, ArrowUpRight, ExternalLink } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FoundersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.from(".leadership-card", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          opacity: 0,
          y: 50,
          scale: 0.95,
          stagger: 0.2,
          duration: 1.2,
          ease: "power3.out",
        });

        gsap.from(".leader-badge", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
          opacity: 0,
          scale: 0.8,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.4,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="founders"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-b border-white/[0.06] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-indigo-600/8 via-purple-500/5 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 tech-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Leadership &amp; Vision</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase leading-tight">
            THE PEOPLE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-indigo-100">
              BEHIND ASHMYRA.
            </span>
          </h2>

          <p className="text-xs sm:text-sm font-mono text-neutral-400 uppercase tracking-widest">
            Guided by purpose &bull; Driven by engineering excellence
          </p>
        </div>

        {/* Leadership Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* PRIMARY: Ashish Talgotra — Founder & Managing Director */}
          <div className="leadership-card relative rounded-3xl p-8 sm:p-10 text-center border border-indigo-500/30 bg-gradient-to-b from-indigo-500/[0.07] via-[#0d1120] to-[#07090e] hover:border-indigo-400/60 transition-all duration-500 group overflow-hidden shadow-2xl shadow-indigo-500/10">

            {/* Glow aura */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-56 bg-indigo-500/20 blur-[60px] pointer-events-none rounded-full" />
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-sky-500/10 blur-[50px] pointer-events-none" />

            {/* Founder badge */}
            <div className="leader-badge absolute top-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-[10px] font-mono font-bold text-indigo-300 uppercase tracking-widest whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Founder &amp; Managing Director
            </div>

            {/* Portrait */}
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-tr from-indigo-400 via-sky-400 to-purple-500 p-[2.5px] mx-auto shadow-2xl shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-500 mt-10 mb-8">
              <div className="w-full h-full bg-[#0a0d18] rounded-[22px] flex items-center justify-center text-white font-mono font-extrabold relative overflow-hidden">
                {/* Subtle inner gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent" />
                <span className="relative text-5xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-200">
                  A
                </span>
              </div>
            </div>

            <div className="relative space-y-2">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-sans">
                ASHISH
                <br />
                <span className="text-2xl sm:text-3xl text-indigo-200">TALGOTRA</span>
              </h3>
              <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-[0.2em] block">
                Founder &amp; Managing Director
              </span>
            </div>

            <p className="relative mt-6 text-sm text-neutral-300 leading-relaxed max-w-sm mx-auto font-sans">
              Visionary technologist and AI architect driving Ashmyra's mission to build next-generation intelligent software systems that reshape how enterprises operate at scale.
            </p>

            {/* Action row */}
            <div className="relative pt-8 border-t border-indigo-500/15 mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Founder &bull; Verified</span>
              </div>
              <a
                href="https://www.linkedin.com/in/atalgotra/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all text-[11px] font-mono font-semibold group/linkedin"
              >
                <ExternalLink className="w-3 h-3" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 group-hover/linkedin:translate-x-0.5 group-hover/linkedin:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* SECONDARY: Swati — Co-Founder */}
          <div className="leadership-card relative glass-panel rounded-3xl p-8 sm:p-10 text-center border border-white/[0.08] hover:border-sky-400/30 transition-all duration-500 group overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/8 blur-3xl pointer-events-none" />

            {/* Co-founder badge */}
            <div className="leader-badge absolute top-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/25 text-[10px] font-mono font-bold text-sky-300 uppercase tracking-widest whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              Co-Founder
            </div>

            {/* Portrait */}
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-tr from-sky-400 via-indigo-400 to-purple-500 p-[2px] mx-auto shadow-2xl shadow-sky-500/20 group-hover:scale-105 transition-transform duration-500 mt-10 mb-8">
              <div className="w-full h-full bg-[#0a0d16] rounded-[22px] flex items-center justify-center text-white font-mono font-extrabold text-5xl sm:text-6xl font-black">
                S
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-sans">
                SWATI
              </h3>
              <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-[0.2em] block">
                Co-Founder
              </span>
            </div>

            <p className="mt-6 text-sm text-neutral-300 leading-relaxed max-w-sm mx-auto font-sans">
              Committed to product excellence, operational momentum, and delivering reliable software systems that empower enterprises to grow without friction.
            </p>

            <div className="pt-8 border-t border-white/[0.06] mt-8 flex items-center justify-center gap-2 text-[10px] font-mono text-neutral-500 uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Co-Founder &bull; Verified Entity</span>
            </div>
          </div>

        </div>

        {/* Technical Excellence Bar */}
        <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-bold block text-sm">AI-Native Engineering</span>
              <span className="text-[11px] text-neutral-500">Purpose-built agentic systems &bull; Autonomous intelligence &bull; Production-grade SaaS</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Operational</span>
          </div>
        </div>

      </div>
    </section>
  );
}
