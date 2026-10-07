"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FinalCta() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        gsap.from(headlineRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
          opacity: 0,
          y: 40,
          duration: 1.2,
          ease: "power3.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#07090e] via-[#05070a] to-[#040508] overflow-hidden text-center"
    >
      {/* Background Volumetric Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-indigo-600/20 via-sky-500/15 to-purple-600/20 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        
        {/* Subtle Brand Mark Visual */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl overflow-hidden bg-[#07090e] border border-indigo-500/40 p-1.5 shadow-2xl shadow-indigo-500/30">
          <Image
            src="/brand/ashmyra-icon.png"
            alt="Ashmyra Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]"
          />
        </div>

        {/* Dramatic Editorial Headline (Requirement 29) */}
        <h2
          ref={headlineRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase leading-[1.02]"
        >
          WHAT SHOULD WE
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-white">
            BUILD NEXT?
          </span>
        </h2>

        {/* Supporting Copy (Requirement 29) */}
        <div className="space-y-1 max-w-lg mx-auto">
          <p className="text-base sm:text-lg text-white font-medium">
            Tell us the problem.
          </p>
          <p className="text-sm sm:text-base font-mono text-neutral-400 uppercase tracking-widest">
            We will explore the technology.
          </p>
        </div>

        {/* Action Buttons (Requirement 29) */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-white text-black hover:bg-neutral-200 font-extrabold text-sm sm:text-base uppercase tracking-wider font-mono shadow-[0_0_50px_rgba(255,255,255,0.25)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href="#systems"
            className="inline-flex items-center gap-2 px-7 py-4 sm:py-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.12] font-semibold text-sm sm:text-base uppercase tracking-wider font-mono transition-all hover:scale-105 active:scale-95"
          >
            <span>Explore Our Systems</span>
          </a>
        </div>

      </div>
    </section>
  );
}
