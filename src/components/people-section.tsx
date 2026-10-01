"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function PeopleSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".person-card", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        opacity: 0, y: 30, stagger: 0.15, duration: 1.0, ease: "power3.out",
      });
      gsap.from(".people-headline", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        opacity: 0, y: 20, duration: 0.8, ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="people"
      className="relative bg-[#030406] overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Ambient */}
      <div
        className="absolute bottom-0 right-0 w-[50vw] h-[60%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom right, rgba(99,102,241,0.07) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-24">

        {/* Header */}
        <div className="people-headline mb-14">
          <div className="section-label text-neutral-600 mb-3">The Team</div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight max-w-lg"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Built by people who've
            <span
              className="ml-2"
              style={{
                background: "linear-gradient(135deg, #818cf8, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              lived the problem.
            </span>
          </h2>
          <p className="text-sm text-neutral-500 mt-4 max-w-md font-sans leading-relaxed">
            Ashmyra was founded by practitioners — people who've spent years building AI systems, software products and data platforms for real-world businesses.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">

          {/* Swati */}
          <div
            className="person-card relative p-7 rounded-2xl overflow-hidden card-lift"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Avatar */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mb-5"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(34,211,238,0.2))",
                border: "1px solid rgba(99,102,241,0.3)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              S
            </div>

            <div className="mb-3">
              <div
                className="text-2xl font-bold text-white mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Swati
              </div>
              <div className="section-label text-indigo-400">Co-Founder</div>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed font-sans">
              Strategic leadership, enterprise delivery and business alliance excellence. Swati drives the vision and partnerships that bring Ashmyra to market.
            </p>

            {/* Bottom row */}
            <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono"
                style={{ background: "rgba(99,102,241,0.1)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.2)" }}
              >
                Strategy
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono"
                style={{ background: "rgba(34,211,238,0.08)", color: "#22d3ee", border: "1px solid rgba(34,211,238,0.2)" }}
              >
                Enterprise
              </span>
            </div>

            {/* Subtle glow */}
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{ background: "radial-gradient(ellipse at top left, rgba(99,102,241,0.05) 0%, transparent 60%)" }}
            />
          </div>

          {/* Ashish */}
          <div
            className="person-card relative p-7 rounded-2xl overflow-hidden card-lift"
            style={{
              background: "rgba(8, 12, 30, 0.8)",
              border: "1px solid rgba(99,102,241,0.25)",
              boxShadow: "0 0 0 1px rgba(99,102,241,0.1), 0 20px 60px -20px rgba(99,102,241,0.2)",
            }}
          >
            {/* Avatar with photo */}
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden mb-5" style={{ border: "2px solid rgba(99,102,241,0.5)" }}>
              <Image
                src="/hero/ashish-portrait.png"
                alt="Ashish Talgotra"
                fill
                sizes="64px"
                className="object-cover object-top"
              />
            </div>

            <div className="mb-3">
              <div
                className="text-2xl font-bold text-white mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ashish
              </div>
              <div className="section-label text-indigo-400">Co-Founder · AI Engineer</div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Multi-agent architectures, data intelligence systems and enterprise AI engineering. 14+ years turning complex data problems into elegant software.
            </p>

            <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono"
                  style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.25)" }}
                >
                  14+ yrs AI
                </span>
              </div>
              <Link
                href="https://www.linkedin.com/in/atalgotra/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-500 hover:text-indigo-300 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                LinkedIn <ExternalLink className="w-2.5 h-2.5" />
              </Link>
            </div>

            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-[70%] h-[50%] pointer-events-none"
              style={{ background: "radial-gradient(ellipse at top right, rgba(99,102,241,0.1) 0%, transparent 60%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
