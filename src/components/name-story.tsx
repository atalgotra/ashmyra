"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function NameStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const equationRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (equationRef.current && quoteRef.current) {
        gsap.from(equationRef.current.children, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
          opacity: 0,
          scale: 0.85,
          y: 20,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
        });

        gsap.from(quoteRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
          },
          opacity: 0,
          y: 25,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-b border-white/[0.06] overflow-hidden"
    >
      {/* Soft warm/indigo heart glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-sky-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
        
        {/* Subtle Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-neutral-400">
          <Heart className="w-3.5 h-3.5 text-rose-400" />
          <span>The Origin of the Name</span>
        </div>

        {/* The Name Equation Visual (ASH + MYRA = ASHMYRA) */}
        <div
          ref={equationRef}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-mono text-xl sm:text-3xl font-extrabold"
        >
          <div className="flex flex-col items-center">
            <span className="px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-indigo-300 shadow-lg">
              ASH
            </span>
            <span className="text-[10px] text-neutral-500 font-sans uppercase tracking-widest mt-2">
              Ashish
            </span>
          </div>

          <span className="text-neutral-500 font-normal text-2xl">+</span>

          <div className="flex flex-col items-center">
            <span className="px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-sky-300 shadow-lg">
              MYRA
            </span>
            <span className="text-[10px] text-neutral-500 font-sans uppercase tracking-widest mt-2">
              Amyra
            </span>
          </div>

          <span className="text-neutral-500 font-normal text-2xl">=</span>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600/30 via-purple-600/20 to-sky-600/30 border border-indigo-400/40 text-white shadow-[0_0_30px_rgba(99,102,241,0.25)]">
              <div className="w-6 h-6 rounded-md overflow-hidden bg-[#07090e] p-0.5 border border-indigo-400/30">
                <Image
                  src="/brand/ashmyra-icon.png"
                  alt="Ashmyra"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="tracking-wider">ASHMYRA</span>
            </div>
            <span className="text-[10px] text-indigo-300 font-sans uppercase tracking-widest mt-2">
              Technologies
            </span>
          </div>
        </div>

        {/* Emotional Quote */}
        <div ref={quoteRef} className="space-y-4 max-w-xl mx-auto">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            &ldquo;A personal name.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-indigo-100">
              A technology vision.&rdquo;
            </span>
          </h3>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans font-normal">
            Technology that begins with human connection, engineered to turn complexity into autonomous clarity.
          </p>
        </div>

      </div>
    </section>
  );
}
