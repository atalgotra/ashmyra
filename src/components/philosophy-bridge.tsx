"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Activity } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function PhilosophyBridge() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="philosophy"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-b border-white/[0.06] overflow-hidden text-center"
    >
      {/* Subtle Stream Path SVG connecting Hero to WOW 1 */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-[1px] h-full bg-gradient-to-b from-indigo-500/30 via-sky-400/20 to-transparent" />
      </div>

      <div ref={textRef} className="max-w-4xl mx-auto relative z-10 space-y-6">
        
        {/* Subtle status tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-neutral-400">
          <Activity className="w-3 h-3 text-indigo-400 animate-pulse" />
          <span>Core Engineering Thesis</span>
        </div>

        {/* Editorial Statement (Requirement 5) */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.08]">
          &ldquo;THE HARDER THE PROBLEM,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-white">
            THE MORE INTERESTING THE SYSTEM.&rdquo;
          </span>
        </h2>

        {/* Supporting Single Sentence (Requirement 5) */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-300 font-sans font-normal leading-relaxed">
          Ashmyra engineers AI agents, software platforms, and data systems that turn complex business problems into executable workflows.
        </p>

        {/* Stream indicator flowing downward into WOW 1 */}
        <div className="pt-4 flex justify-center">
          <a
            href="#wow-1"
            aria-label="Enter WOW 1"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-mono text-indigo-300 hover:bg-indigo-500/20 transition-colors"
          >
            <span>Enter Intelligence Stream</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
}
