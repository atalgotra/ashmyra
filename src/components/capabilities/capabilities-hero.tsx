"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Cpu, Layers, Shield, Sparkles, ArrowDown } from "lucide-react";
import gsap from "gsap";
import { Breadcrumb } from "@/components/breadcrumb";

export function CapabilitiesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // Hero entrance reveal
      gsap.from(leftColRef.current?.children || [], {
        opacity: 0,
        y: 28,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(rightColRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 20,
        duration: 1.1,
        delay: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToOverview = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("capabilities-overview");
    if (target) {
      const navOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* Ambient background lighting */}
      <div className="absolute top-12 left-1/4 w-[700px] h-[350px] opacity-15 rounded-full blur-[160px] pointer-events-none" style={{ backgroundColor: "var(--accent, #4f46e5)" }} />
      <div className="absolute inset-0 dot-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split-Layout: Desktop Left ~48%, Right ~52% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (lg:col-span-6 / ~48%) */}
          <div ref={leftColRef} className="lg:col-span-6 space-y-6">
            {/* Breadcrumb Navigation Trail */}
            <div>
              <Breadcrumb items={[{ name: "Capabilities" }]} />
            </div>

            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm"
              style={{ backgroundColor: "var(--theme-pill-bg, rgba(79,70,229,0.1))", border: "1px solid var(--border)", color: "var(--accent, #4f46e5)" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent, #4f46e5)" }} />
              <span className="text-[11px] font-mono tracking-wider uppercase font-semibold" style={{ color: "var(--accent, #4f46e5)" }}>
                DISCIPLINED SOFTWARE ENGINEERING
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.12]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
            >
              We Engineer the Systems{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-500 font-extrabold">
                Behind Your Next Move.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg leading-relaxed font-sans max-w-xl" style={{ color: "var(--text-muted)" }}>
              From autonomous AI and enterprise software to data-driven platforms and digital experiences, we engineer technology designed around real business challenges.
            </p>

            {/* Dual CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#capabilities-overview"
                onClick={handleScrollToOverview}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white shadow-xl transition-all hover:scale-105 group"
                style={{ backgroundColor: "var(--accent, #4f46e5)" }}
              >
                <span>Explore Capabilities</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)" }}
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust Points */}
            <div className="pt-6 grid grid-cols-3 gap-3 text-xs font-mono" style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}>
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--accent, #4f46e5)" }} />
                <span className="truncate">Modular Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 shrink-0" style={{ color: "#0284c7" }} />
                <span className="truncate">Zero Hacks</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 shrink-0" style={{ color: "#059669" }} />
                <span className="truncate">Observable Cloud</span>
              </div>
            </div>
          </div>

          {/* Right Column (lg:col-span-6 / ~52%) — 3D Architecture Visual Chassis */}
          <div ref={rightColRef} className="lg:col-span-6">
            <div data-dark-chassis="true" className="dark-media-chassis relative rounded-3xl overflow-hidden border border-white/[0.14] bg-[#070b16] shadow-2xl shadow-indigo-950/40 group">
              {/* Terminal OS Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f1d] border-b border-white/[0.08] text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-neutral-400 text-[11px] truncate">
                    sys-architecture.prod.mesh // active
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-400 text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>CONNECTED</span>
                </div>
              </div>

              {/* Video Player Visual with Gradient Scrim */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <video
                  src="/videos/capabilities/07-software-ecosystems.mp4"
                  poster="/videos/capabilities/07-software-ecosystems.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle vignette and contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b16] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#070b16]/60 via-transparent to-[#070b16]/60" />

                {/* Architecture Nodes Floating Overlays */}
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-black/70 border border-white/[0.14] backdrop-blur-md text-[11px] font-mono shadow-xl space-y-1">
                  <div className="text-neutral-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Layer 01 &bull; Next.js Client Surface</span>
                  </div>
                  <div className="text-white font-semibold">Sub-Second Interactive LCP</div>
                </div>

                <div className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-black/70 border border-white/[0.14] backdrop-blur-md text-[11px] font-mono shadow-xl space-y-1">
                  <div className="text-neutral-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Layer 04 &bull; Event &amp; Data Pipeline</span>
                  </div>
                  <div className="text-white font-semibold">Deterministic Execution Mesh</div>
                </div>
              </div>

              {/* Chassis Footer Strip */}
              <div className="px-5 py-3 bg-[#0a0f1d] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Cloud Mesh: Multi-Region Kubernetes</span>
                </div>
                <div className="text-emerald-400 font-semibold">Verified Architecture</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
