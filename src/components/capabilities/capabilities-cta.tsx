"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, Terminal } from "lucide-react";

export function CapabilitiesCTA() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={containerRef}
      className="relative py-18 sm:py-24 overflow-hidden"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", borderTop: "1px solid var(--border)" }}
    >
      {/* Background Architectural Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] opacity-15 blur-[120px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, var(--accent, #4f46e5), transparent)" }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Terminal / Code Icon Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wider uppercase mb-8 font-semibold" style={{ backgroundColor: "var(--theme-pill-bg, rgba(79,70,229,0.1))", border: "1px solid var(--border)", color: "var(--accent, #4f46e5)" }}>
          <Terminal className="w-3.5 h-3.5" style={{ color: "var(--accent, #4f46e5)" }} />
          <span>DIRECT ARCHITECTURE CONSULTATION</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] max-w-3xl mx-auto" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
          Have a Complex Problem to Engineer?
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Let&apos;s turn your business requirements into a well-engineered digital solution. Direct dialogue with engineering leads—no sales fluff.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-white font-semibold text-sm transition-all duration-300 shadow-xl group cursor-pointer hover:scale-105"
            style={{ backgroundColor: "var(--accent, #4f46e5)" }}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Start an Engineering Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/demos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer hover:scale-105"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)" }}
          >
            <span>Explore Live Demos</span>
          </Link>
        </div>

        {/* Engineering Response Promise */}
        <div className="mt-12 flex items-center justify-center gap-6 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#059669" }} />
            <span>Technical responses within 24h</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent, #4f46e5)" }} />
            <span>NDA Protected Consultations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
