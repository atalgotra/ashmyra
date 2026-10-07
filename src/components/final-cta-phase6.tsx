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

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 text-center py-20 sm:py-28">

        {/* Icon */}
        <div
          className="w-18 h-18 sm:w-20 sm:h-20 mx-auto mb-8 rounded-2xl overflow-hidden p-2 shadow-2xl transition-transform duration-500 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(34,211,238,0.15) 100%)",
            border: "1px solid rgba(99,102,241,0.45)",
            boxShadow: "0 0 70px -10px rgba(99,102,241,0.5)",
          }}
        >
          <Image
            src="/brand/ashmyra-icon.png"
            alt="Ashmyra"
            width={72}
            height={72}
            className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]"
          />
        </div>

        {/* Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs sm:text-sm font-mono font-semibold tracking-wider text-indigo-300 uppercase mb-5">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <span>Let&apos;s Build Something</span>
        </div>

        {/* Headline — Larger & More Dramatic */}
        <h2
          className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-[1.02] mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          What should we
          <br />
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #ffffff 0%, #c7d2fe 40%, #818cf8 80%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            build next?
          </span>
        </h2>

        {/* Sub copy — Increased size */}
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-sans font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Bring us the problem. We&apos;ll engineer the system that solves it — with intelligence, speed and precision.
        </p>

        {/* CTA action buttons — High visibility, larger text */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-16">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl font-bold text-base sm:text-lg text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              background: "linear-gradient(135deg, #6366f1, #818cf8)",
              boxShadow: "0 0 0 1px rgba(99,102,241,0.5), 0 12px 40px -8px rgba(99,102,241,0.6)",
            }}
          >
            <MessageSquare className="w-5 h-5" />
            <span>Start a Conversation</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="mailto:info@ashmyra.com"
            className="inline-flex items-center gap-3 px-7 sm:px-8 py-4 sm:py-4.5 rounded-2xl font-medium text-base sm:text-lg text-neutral-200 hover:text-white glass-bright transition-all duration-300 hover:scale-[1.02]"
            style={{ border: "1px solid rgba(255, 255, 255, 0.15)" }}
          >
            <Mail className="w-5 h-5 text-indigo-400" />
            <span>info@ashmyra.com</span>
          </Link>

          <a
            href="tel:+919873746467"
            className="inline-flex items-center gap-3 px-7 sm:px-8 py-4 sm:py-4.5 rounded-2xl font-mono font-medium text-base sm:text-lg text-neutral-200 hover:text-white glass-bright transition-all duration-300 hover:scale-[1.02]"
            style={{ border: "1px solid rgba(255, 255, 255, 0.15)" }}
          >
            <Phone className="w-5 h-5 text-cyan-400" />
            <span>+91-9873746467</span>
          </a>
        </div>

        {/* ── World-Class Large Stats Strip (Significantly Increased Size) ──── */}
        <div className="pt-12 border-t border-white/[0.08]">
          <div className="grid grid-cols-3 gap-6 sm:gap-12 max-w-3xl mx-auto divide-x divide-white/[0.08]">
            {[
              { val: "100+", label: "Projects Delivered", accent: "#818cf8" },
              { val: "14+",  label: "Years Experience",   accent: "#22d3ee" },
              { val: "∞",    label: "Endless Ambition",   accent: "#c084fc" },
            ].map((item, idx) => (
              <div key={item.label} className={`text-center ${idx !== 0 ? "pl-4 sm:pl-8" : ""}`}>
                <div
                  className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-2 leading-none"
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
                <div className="text-xs sm:text-sm font-mono font-semibold text-neutral-400 uppercase tracking-widest mt-1">
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
