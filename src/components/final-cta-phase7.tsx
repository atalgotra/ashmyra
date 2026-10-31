"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";

export function FinalCtaPhase7() {
  return (
    <section className="relative bg-[#05070c] py-24 sm:py-28 lg:py-32 overflow-hidden text-white">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(99, 102, 241, 0.09) 0%, rgba(34, 211, 238, 0.04) 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="absolute inset-0 dot-bg opacity-15" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono tracking-widest text-indigo-300 uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          Initiate an Engagement
        </div>

        {/* Headline */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Ready to engineer
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            what&apos;s next?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-sans mb-10">
          Whether you need an autonomous multi-agent swarm, an enterprise data intelligence platform, or bespoke SaaS architecture — our engineering team delivers deterministic systems that execute.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
            style={{
              background: "linear-gradient(135deg, #6366f1, #818cf8)",
              boxShadow:
                "0 0 0 1px rgba(99, 102, 241, 0.45), 0 8px 24px -6px rgba(99, 102, 241, 0.5)",
            }}
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/demos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm sm:text-base text-neutral-200 hover:text-white transition-all duration-300 hover:bg-white/[0.06] w-full sm:w-auto"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <span>Explore Live Demos</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-400" />
          </Link>
        </div>

        {/* Direct Email note */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-neutral-400">
          <Mail className="w-3.5 h-3.5 text-indigo-400" />
          <span>Direct Executive Inquiries:</span>
          <a
            href="mailto:info@ashmyra.com"
            className="text-indigo-300 hover:text-white transition-colors underline underline-offset-4"
          >
            info@ashmyra.com
          </a>
        </div>
      </div>
    </section>
  );
}
