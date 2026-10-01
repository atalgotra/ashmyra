"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, ExternalLink, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FoundersHumanStoryPhase5() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".human-fade", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="founders"
      className="relative py-36 px-4 sm:px-6 lg:px-8 bg-[#040508] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        
        {/* Section 22: Ashmyra Name Story (Subtle Emotional Section) */}
        <div className="human-fade max-w-4xl mx-auto text-center space-y-8 p-8 sm:p-12 rounded-3xl bg-[#070912]/80 border border-white/[0.06] backdrop-blur-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-neutral-400">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>The Origin of the Name</span>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-snug">
              &ldquo;A personal name.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-white">
                A technology vision.&rdquo;
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed font-sans">
              Ashmyra was inspired by the personal bond of Ashish and Amyra — evolving into a broader engineering vision for intelligent systems.
            </p>
          </div>

          {/* Typography Equation: ASH + MYRA = ASHMYRA */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xl sm:text-2xl font-extrabold pt-2">
            <div className="flex flex-col items-center">
              <span className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-indigo-300">
                ASH
              </span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1.5 font-normal">
                Ashish
              </span>
            </div>

            <span className="text-neutral-500 font-normal">+</span>

            <div className="flex flex-col items-center">
              <span className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sky-300">
                MYRA
              </span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1.5 font-normal">
                Amyra
              </span>
            </div>

            <span className="text-neutral-500 font-normal">=</span>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600/30 to-sky-600/30 border border-indigo-400/40 text-white shadow-lg">
                <div className="w-5 h-5 rounded overflow-hidden bg-[#07090e] p-0.5 border border-indigo-400/30">
                  <Image
                    src="/brand/ashmyra-icon.png"
                    alt="Ashmyra"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span>ASHMYRA</span>
              </div>
              <span className="text-[10px] text-indigo-300 uppercase tracking-widest mt-1.5 font-normal">
                Technologies
              </span>
            </div>
          </div>
        </div>

        {/* Section 21: Founders & Engineering Leadership (Quiet visual rhythm, large cards) */}
        <div className="human-fade space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">
              LEADERSHIP &amp; ENGINEERING
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              The People Building Ashmyra
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* 1. MANITA — Co-Founder */}
            <div className="p-8 rounded-3xl bg-[#070912] border border-white/[0.08] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono font-bold text-neutral-300 uppercase tracking-widest">
                  Co-Founder
                </div>

                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 border border-white/[0.1] flex items-center justify-center text-white font-mono font-bold text-3xl">
                  M
                </div>

                <div>
                  <h4 className="text-2xl font-black text-white font-sans">MANITA</h4>
                  <div className="text-xs font-mono text-indigo-300 font-semibold mt-0.5">
                    Co-Founder
                  </div>
                  <p className="text-xs text-neutral-400 mt-3 leading-relaxed font-sans">
                    Guiding corporate vision, strategic development, and operational scaling for Ashmyra Technologies.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500">
                Ashmyra Executive Board
              </div>
            </div>

            {/* 2. SWATI — Co-Founder */}
            <div className="p-8 rounded-3xl bg-[#070912] border border-white/[0.08] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono font-bold text-neutral-300 uppercase tracking-widest">
                  Co-Founder
                </div>

                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-white/[0.1] flex items-center justify-center text-white font-mono font-bold text-3xl">
                  S
                </div>

                <div>
                  <h4 className="text-2xl font-black text-white font-sans">SWATI</h4>
                  <div className="text-xs font-mono text-indigo-300 font-semibold mt-0.5">
                    Co-Founder
                  </div>
                  <p className="text-xs text-neutral-400 mt-3 leading-relaxed font-sans">
                    Leading strategic business alliances, enterprise client relations, and delivery excellence.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500">
                Ashmyra Executive Board
              </div>
            </div>

            {/* 3. ASHISH — AI Engineer / Data Scientist (STRICTLY NOT Founder or Co-Founder) */}
            <div className="p-8 rounded-3xl bg-[#090d1e] border border-indigo-500/30 flex flex-col justify-between space-y-6 shadow-xl shadow-indigo-500/10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-[10px] font-mono font-bold text-indigo-300 uppercase tracking-widest">
                  Engineering Lead
                </div>

                {/* Real Approved Portrait Asset */}
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-indigo-400 shadow-lg shadow-indigo-500/30">
                  <Image
                    src="/hero/ashish-portrait.png"
                    alt="Ashish Talgotra - AI Engineer & Data Scientist"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div>
                  <h4 className="text-2xl font-black text-white font-sans">ASHISH</h4>
                  <div className="text-xs font-mono text-indigo-300 font-semibold mt-0.5">
                    AI ENGINEER / DATA SCIENTIST
                  </div>
                  <p className="text-xs text-neutral-300 mt-3 leading-relaxed font-sans">
                    Architecting multi-agent consensus protocols, continuous search intelligence, and deterministic enterprise platforms.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                <span className="text-indigo-400">14+ Years in AI &amp; Data</span>
                <a
                  href="https://www.linkedin.com/in/atalgotra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
