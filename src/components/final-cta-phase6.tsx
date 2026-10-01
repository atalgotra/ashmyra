"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FinalCtaPhase6() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-item", {
        scrollTrigger: { trigger: ref.current, start: "top 78%" },
        opacity: 0, y: 32, stagger: 0.12, duration: 1.0, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-[#020304] overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Background: large radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 60%, rgba(99,102,241,0.1) 0%, rgba(34,211,238,0.04) 50%, transparent 75%)",
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Decorative SVG rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          width="800" height="800" viewBox="0 0 800 800"
          fill="none" className="opacity-[0.04]"
        >
          <circle cx="400" cy="400" r="360" stroke="#818cf8" strokeWidth="1" strokeDasharray="8 8" />
          <circle cx="400" cy="400" r="260" stroke="#22d3ee" strokeWidth="0.8" strokeDasharray="5 5" />
          <circle cx="400" cy="400" r="140" stroke="#a78bfa" strokeWidth="1.5" />
          <circle cx="400" cy="400" r="50"  stroke="#818cf8" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center py-32 sm:py-40">

        {/* Icon */}
        <div className="cta-item w-16 h-16 mx-auto mb-8 rounded-2xl overflow-hidden p-1.5 shadow-2xl" style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.4)", boxShadow: "0 0 60px -10px rgba(99,102,241,0.4)" }}>
          <Image
            src="/brand/ashmyra-icon.png"
            alt="Ashmyra"
            width={56} height={56}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Label */}
        <div className="cta-item section-label text-indigo-400 mb-5">
          Let&apos;s Build Something
        </div>

        {/* Headline */}
        <h2
          className="cta-item text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.03] mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          What should we
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #c7d2fe 0%, #818cf8 40%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            build next?
          </span>
        </h2>

        {/* Sub copy */}
        <p className="cta-item text-base sm:text-lg text-neutral-400 font-sans font-light leading-relaxed max-w-md mx-auto mb-12">
          Bring us the problem. We&apos;ll engineer the system that solves it — with intelligence, speed and precision.
        </p>

        {/* CTA buttons */}
        <div className="cta-item flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-semibold text-base text-white transition-all duration-300 hover:scale-[1.04] active:scale-[0.96]"
            style={{
              background: "linear-gradient(135deg, #6366f1, #818cf8)",
              boxShadow: "0 0 0 1px rgba(99,102,241,0.5), 0 12px 40px -8px rgba(99,102,241,0.6)",
            }}
          >
            <MessageSquare className="w-4 h-4" />
            Start a Conversation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="mailto:hello@ashmyra.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-medium text-sm text-neutral-300 hover:text-white transition-all duration-300"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Mail className="w-4 h-4" />
            hello@ashmyra.com
          </Link>
        </div>

        {/* Trust strip */}
        <div className="cta-item mt-16 pt-10 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {[
            { val: "100+", label: "Projects" },
            { val: "14+",  label: "Years" },
            { val: "∞",    label: "Ambition" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold text-white mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.val}
              </div>
              <div className="section-label text-neutral-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
