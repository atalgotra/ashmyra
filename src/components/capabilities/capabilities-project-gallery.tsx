"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CapabilitiesProjectGallery() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      id="selected-work"
      ref={containerRef}
      className="relative py-16 sm:py-20 overflow-hidden scroll-mt-36"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", borderTop: "1px solid var(--border)" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase mb-3 font-semibold" style={{ backgroundColor: "rgba(2, 132, 199, 0.1)", border: "1px solid var(--border)", color: "#0284c7" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#0284c7" }} />
              APPROVED CLIENT ENGAGEMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
              Systems Engineered in Production.
            </h2>
            <p className="mt-3 text-sm sm:text-base font-light leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Real-world software architectures, 3D web graphics, and operational platforms engineered for confirmed client deployments.
            </p>
          </div>

          <Link
            href="/demos"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold hover:underline transition-colors group shrink-0"
            style={{ color: "#0284c7" }}
          >
            <span>Explore Working Systems</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Cinematic Visual Chassis with Approved Composite Screenshot */}
        <div
          data-dark-chassis="true"
          className="dark-media-chassis rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-8 border border-white/[0.12] bg-[#070b16]"
        >
          {/* OS Window Titlebar */}
          <div className="px-4 py-2.5 bg-[#0A0E1D] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-slate-300 text-[11px] ml-1">ashmyra-client-showcase.runtime.png</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-slate-400">
              <span>FMO</span>
              <span>•</span>
              <span>1A VEDA</span>
              <span>•</span>
              <span>RAMAROMA</span>
              <span>•</span>
              <span>DIVAGAM</span>
            </div>
          </div>

          {/* Genuine Composite Visual Asset */}
          <div className="relative w-full aspect-[21/9] min-h-[260px] sm:min-h-[380px] bg-black">
            <Image
              src="/wow/wow7-engineering-playground.png"
              alt="Ashmyra Technologies Client Deployments - FMO, 1A Veda, Ramaroma Herbs, Divagam"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-center filter contrast-[1.02]"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A14] via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
