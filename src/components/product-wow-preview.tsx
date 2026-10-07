"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Maximize2, 
  Minimize2, 
  Activity, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  Cpu, 
  ShieldCheck,
  Eye,
  Zap,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

interface ProductWowPreviewProps {
  imageSrc: string;
  imageAlt: string;
  productName: string;
  productTagline: string;
  accentColor: string;
  badgeText: string;
  telemetry: {
    label: string;
    value: string;
    detail: string;
  }[];
  capabilities: {
    title: string;
    description: string;
  }[];
}

export function ProductWowPreview({
  imageSrc,
  imageAlt,
  productName,
  productTagline,
  accentColor,
  badgeText,
  telemetry,
  capabilities,
}: ProductWowPreviewProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative w-full my-12">
      {/* ── Ambient Radial Bloom ────────────────────────────────────── */}
      <div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-96 pointer-events-none opacity-25"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          filter: "blur(75px)",
        }}
      />

      {/* ── Main Showcase Window ─────────────────────────────────────── */}
      <div
        className="relative rounded-3xl overflow-hidden glass-bright bg-[#06080e]"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.14)",
          boxShadow: `0 30px 100px -20px rgba(0, 0, 0, 0.95), 0 0 50px -10px ${accentColor}25`,
        }}
      >
        {/* HUD Window Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="hidden sm:inline-block text-neutral-600 font-mono text-xs">|</span>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
              <span>ashmyra.internal::{productName.toLowerCase().replace(/\s+/g, "-")}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider"
              style={{
                border: `1px solid ${accentColor}40`,
                backgroundColor: `${accentColor}15`,
                color: accentColor,
              }}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>{badgeText}</span>
            </div>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-neutral-400 hover:text-white transition-colors"
              title="Toggle Full Preview"
              aria-label="Toggle Full Preview"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Cinematic Canvas Container */}
        {/* Cinematic Canvas Container — 100% Unobstructed Edge-to-Edge */}
        <div className="relative w-full aspect-[16/9] bg-[#030408] overflow-hidden group">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
          />
        </div>

        {/* Clean System Sub-Bar (Directly Below Image — Zero Visual Overlap) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 sm:px-8 py-3.5 bg-black/60 border-t border-white/[0.08]">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ backgroundColor: accentColor }} />
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex-shrink-0">
              Live System Canvas:
            </span>
            <span className="text-xs text-neutral-200 font-medium truncate">
              {productTagline}
            </span>
          </div>

          <Link
            href="/contact?intent=product-demo"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all hover:scale-105 flex-shrink-0 self-start sm:self-auto"
            style={{
              background: `linear-gradient(135deg, ${accentColor}, #818cf8)`,
              boxShadow: `0 0 16px -4px ${accentColor}80`,
            }}
          >
            Request Live Demo
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Live Telemetry Metric Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] border-t border-white/[0.08] bg-white/[0.02]">
          {telemetry.map((t, idx) => (
            <div key={idx} className="p-4 sm:p-5 flex flex-col justify-center">
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                {t.label}
              </span>
              <div className="text-xl sm:text-2xl font-black text-white font-mono mt-0.5 flex items-baseline gap-2">
                {t.value}
                <span className="text-[10px] font-sans font-normal text-emerald-400">Verified</span>
              </div>
              <span className="text-xs text-neutral-400 mt-0.5">{t.detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Interactive Capabilities Breakdown Strip ──────────────── */}
      {capabilities.length > 0 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs"
                  style={{
                    backgroundColor: `${accentColor}15`,
                    color: accentColor,
                    border: `1px solid ${accentColor}30`,
                  }}
                >
                  0{i + 1}
                </div>
                <h4 className="text-sm font-bold text-white tracking-tight">{cap.title}</h4>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* ── Fullscreen Modal Lightbox ──────────────────────────────── */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8"
          onClick={() => setIsFullscreen(false)}
        >
          <div 
            className="relative max-w-7xl w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
            />
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/80 text-white hover:bg-neutral-800 transition-colors border border-white/20"
              aria-label="Close Preview"
            >
              <Minimize2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
