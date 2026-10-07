"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone, MessageSquare } from "lucide-react";

export function FinalCtaPhase6() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      className="relative bg-[#020304] overflow-hidden"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
    >
      {/* ── Background: large radial gradient & ambient atmosphere ────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(99,102,241,0.14) 0%, rgba(34,211,238,0.05) 50%, transparent 75%)",
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Decorative concentric rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          width="900" height="900" viewBox="0 0 900 900"
          fill="none" className="opacity-[0.05]"
        >
          <circle cx="450" cy="450" r="400" stroke="#818cf8" strokeWidth="1" strokeDasharray="8 8" />
          <circle cx="450" cy="450" r="290" stroke="#22d3ee" strokeWidth="0.8" strokeDasharray="6 6" />
          <circle cx="450" cy="450" r="160" stroke="#a78bfa" strokeWidth="1.5" />
          <circle cx="450" cy="450" r="60"  stroke="#818cf8" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center py-14 sm:py-20">

        {/* Icon — compact */}
        <div
          className="w-12 h-12 mx-auto mb-5 rounded-xl overflow-hidden p-1.5 transition-transform duration-500 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(34,211,238,0.1) 100%)",
            border: "1px solid rgba(99,102,241,0.35)",
            boxShadow: "0 0 40px -8px rgba(99,102,241,0.45)",
          }}
        >
          <Image
            src="/brand/ashmyra-icon.png"
            alt="Ashmyra"
            width={40}
            height={40}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono font-semibold tracking-widest text-indigo-300 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span>Let&apos;s Build Something</span>
        </div>

        {/* Headline */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          What should we{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #c7d2fe 0%, #818cf8 60%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            build next?
          </span>
        </h2>

        {/* Sub copy */}
        <p className="text-sm sm:text-base text-neutral-400 font-sans font-normal leading-relaxed max-w-xl mx-auto mb-8">
          Bring us the problem. We&apos;ll engineer the system that solves it — with intelligence, speed and precision.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #6366f1, #818cf8)",
              boxShadow: "0 0 0 1px rgba(99,102,241,0.45), 0 8px 28px -6px rgba(99,102,241,0.5)",
            }}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="mailto:info@ashmyra.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-neutral-300 hover:text-white glass-bright transition-all duration-300 hover:scale-[1.02]"
            style={{ border: "1px solid rgba(255, 255, 255, 0.12)" }}
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>info@ashmyra.com</span>
          </Link>

          <a
            href="tel:+919873746467"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono font-medium text-sm text-neutral-300 hover:text-white glass-bright transition-all duration-300 hover:scale-[1.02]"
            style={{ border: "1px solid rgba(255, 255, 255, 0.12)" }}
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>+91-9873746467</span>
          </a>
        </div>

        {/* Stats strip */}
        <div className="pt-8 border-t border-white/[0.07]">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto divide-x divide-white/[0.07]">
            {[
              { val: "100+", label: "Projects Delivered", accent: "#818cf8" },
              { val: "14+",  label: "Years Experience",   accent: "#22d3ee" },
              { val: "∞",    label: "Endless Ambition",   accent: "#c084fc" },
            ].map((item, idx) => (
              <div key={item.label} className={`text-center ${idx !== 0 ? "pl-3 sm:pl-6" : ""}`}>
                <div
                  className="text-2xl sm:text-4xl font-bold tracking-tight mb-1 leading-none"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    backgroundImage: `linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, ${item.accent} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.val}
                </div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-0.5">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
