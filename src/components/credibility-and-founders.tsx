"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ShieldCheck, 
  Cpu, 
  ExternalLink, 
  Heart, 
  Sparkles, 
  Award, 
  CheckCircle2,
  Terminal,
  Code2
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CredibilityAndFounders() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-b border-white/[0.06] overflow-hidden"
    >
      {/* Background Volumetric Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-950/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        
        {/* Supporting Proof Points (Requirements 21 & 22) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Proof 1: 100+ Digital Experiences Built (Requirement 21) */}
          <div className="p-8 rounded-3xl bg-[#080b15] border border-white/[0.08] flex items-center gap-6">
            <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300 font-mono">
              100+
            </div>
            <div className="space-y-1">
              <div className="text-sm font-mono uppercase tracking-wider text-white font-bold">
                Digital Experiences Built
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Enterprise portals, web platforms, and intelligent client architectures deployed with measured performance.
              </p>
            </div>
          </div>

          {/* Proof 2: 14+ Years Human Credibility (Requirement 22) */}
          <div className="p-8 rounded-3xl bg-[#080b15] border border-white/[0.08] flex items-center gap-6">
            <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300 font-mono">
              14+
            </div>
            <div className="space-y-1">
              <div className="text-sm font-mono uppercase tracking-wider text-white font-bold">
                Years Technical Experience
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Data Science &bull; AI &bull; Prompt Engineering &bull; Intelligent Systems architecture and real-world deployment.
              </p>
            </div>
          </div>

        </div>

        {/* Human Story & Origin of the Name (Requirement 23) */}
        <div className="max-w-4xl mx-auto text-center space-y-8 p-8 sm:p-12 rounded-3xl bg-[#080b15]/70 border border-white/[0.08] backdrop-blur-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-neutral-400">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>The Human Story</span>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
              &ldquo;A personal name.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-white">
                A much bigger technology vision.&rdquo;
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
              Ashmyra is inspired by the fusion of personal connection and bold technological ambition.
            </p>
          </div>

          {/* The Equation: ASH (Ashish) + MYRA (Amyra) = ASHMYRA */}
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

        {/* Leadership & Engineering Team (Requirement 23) */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">
              ORGANIZATIONAL FOUNDATION
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Founders &amp; Engineering Leadership
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* 1. MANITA — Co-Founder (Requirement 23) */}
            <div className="p-8 rounded-3xl bg-[#080b15] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono font-bold text-neutral-300 uppercase tracking-widest">
                  Co-Founder
                </div>

                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 border border-white/[0.1] flex items-center justify-center text-white font-mono font-bold text-2xl">
                  M
                </div>

                <div>
                  <h4 className="text-2xl font-black text-white font-sans">MANITA</h4>
                  <div className="text-xs font-mono text-indigo-300 font-semibold mt-0.5">
                    Co-Founder
                  </div>
                  <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                    Guiding strategic corporate direction, governance, and operational expansion for Ashmyra Technologies.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500">
                Ashmyra Executive Board
              </div>
            </div>

            {/* 2. SWATI — Co-Founder (Requirement 23) */}
            <div className="p-8 rounded-3xl bg-[#080b15] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono font-bold text-neutral-300 uppercase tracking-widest">
                  Co-Founder
                </div>

                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-white/[0.1] flex items-center justify-center text-white font-mono font-bold text-2xl">
                  S
                </div>

                <div>
                  <h4 className="text-2xl font-black text-white font-sans">SWATI</h4>
                  <div className="text-xs font-mono text-indigo-300 font-semibold mt-0.5">
                    Co-Founder
                  </div>
                  <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                    Driving business partnerships, client engagement, and scaling sustainable enterprise technology delivery.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500">
                Ashmyra Executive Board
              </div>
            </div>

            {/* 3. ASHISH — AI Engineer / Data Scientist (Requirement 23: DO NOT call Founder or Co-Founder) */}
            <div className="p-8 rounded-3xl bg-[#0c1022] border border-indigo-500/30 hover:border-indigo-400/60 transition-all flex flex-col justify-between space-y-6 shadow-xl shadow-indigo-500/10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-[10px] font-mono font-bold text-indigo-300 uppercase tracking-widest">
                  Technology Lead
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
                  <p className="text-xs text-neutral-300 mt-3 leading-relaxed">
                    Architecting multi-agent orchestration swarms, high-dimensional vector search, deterministic safety guardrails, and enterprise software platforms.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                <span className="text-indigo-400">14+ Years in Data &amp; AI</span>
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
