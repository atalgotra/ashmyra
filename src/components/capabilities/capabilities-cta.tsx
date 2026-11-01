"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, Terminal } from "lucide-react";

export function CapabilitiesCTA() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={containerRef}
      className="relative py-18 sm:py-24 bg-[#030408] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Architectural Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-violet-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Terminal / Code Icon Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/[0.05] text-[11px] font-mono tracking-wider text-cyan-400 uppercase mb-8">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>DIRECT ARCHITECTURE CONSULTATION</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12] max-w-3xl mx-auto">
          Have a Complex Problem to Engineer?
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          Let&apos;s turn your business requirements into a well-engineered digital solution. Direct dialogue with engineering leads—no sales fluff.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm transition-all duration-300 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 group cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-cyan-200" />
            <span>Start an Engineering Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/our-work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.1] font-medium text-sm transition-all duration-300 cursor-pointer"
          >
            <span>Explore Our Work</span>
          </Link>
        </div>

        {/* Engineering Response Promise */}
        <div className="mt-12 flex items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Technical responses within 24h</span>
          </div>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>NDA Protected Consultations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
