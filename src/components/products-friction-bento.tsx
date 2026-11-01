"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Workflow,
  Target,
  Mail,
  Share2,
  Eye,
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Activity,
  Sparkles,
  RefreshCw,
  Check,
  X,
} from "lucide-react";

type Mode = "solution" | "friction";

export function ProductsFrictionBento() {
  // Global mode allows users to toggle all cards at once, or toggle cards individually
  const [globalMode, setGlobalMode] = useState<Mode>("solution");
  const [cardModes, setCardModes] = useState<Record<string, Mode>>({
    outbound: "solution",
    media: "solution",
    search: "solution",
  });

  const handleGlobalToggle = (newMode: Mode) => {
    setGlobalMode(newMode);
    setCardModes({
      outbound: newMode,
      media: newMode,
      search: newMode,
    });
  };

  const handleCardToggle = (cardId: string) => {
    setCardModes((prev) => ({
      ...prev,
      [cardId]: prev[cardId] === "solution" ? "friction" : "solution",
    }));
  };

  return (
    <section id="solutions" className="py-20 sm:py-24 bg-[#07090e] border-t border-white/[0.08] relative overflow-hidden">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with Global Friction vs. Solution Switcher */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-sans font-medium mb-4 shadow-sm">
            <Workflow className="w-3.5 h-3.5 text-indigo-400" />
            <span>Operational Problem Architecture</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-[1.15] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            How Our Platforms Solve Core Business Friction
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-7 max-w-2xl">
            Real software engineering targets deterministic bottlenecks: customer acquisition latency, unverified lead scraping, viral burnout, and silent SEO regressions.
          </p>

          {/* Interactive Global Perspective Switcher */}
          <div className="inline-flex items-center p-1 rounded-2xl bg-white/[0.04] border border-white/[0.1] shadow-xl backdrop-blur-md">
            <button
              onClick={() => handleGlobalToggle("solution")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all duration-300 ${
                globalMode === "solution"
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Ashmyra Autonomous Solutions</span>
            </button>

            <button
              onClick={() => handleGlobalToggle("friction")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all duration-300 ${
                globalMode === "friction"
                  ? "bg-red-500/20 text-red-300 border border-red-500/30 shadow-lg shadow-red-500/10"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
              <span>The Cost of Manual Friction</span>
            </button>
          </div>
        </div>

        {/* ── 3 High-Impact Interactive Bento Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* ════════════════════════════════════════════════════════════════
              BENTO CARD 1: Outbound Revenue Pipeline (Prospect IQ + MailFlow)
          ═════════════════════════════════════════════════════════════════ */}
          {(() => {
            const isFriction = cardModes.outbound === "friction";
            return (
              <div
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 border overflow-hidden group ${
                  isFriction
                    ? "bg-gradient-to-b from-red-950/20 via-[#0a080d] to-[#07090e] border-red-500/30 shadow-2xl shadow-red-950/20"
                    : "bg-gradient-to-b from-cyan-950/25 via-[#080d16] to-[#07090e] border-cyan-500/30 shadow-2xl shadow-cyan-950/20"
                }`}
              >
                {/* Top Bar with Icon & Individual Mode Toggle */}
                <div>
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isFriction
                            ? "bg-red-500/15 border border-red-500/30 text-red-400"
                            : "bg-cyan-500/15 border border-cyan-500/30 text-cyan-400"
                        }`}
                      >
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10.5px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                          Pipeline Engine
                        </span>
                        <span className="text-xs text-white font-semibold">
                          Prospect IQ + MailFlow
                        </span>
                      </div>
                    </div>

                    {/* Card-Level Interactive Toggle Switch */}
                    <button
                      onClick={() => handleCardToggle("outbound")}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-sans font-semibold transition-all border ${
                        isFriction
                          ? "bg-red-500/20 border-red-500/40 text-red-300 hover:bg-red-500/30"
                          : "bg-cyan-500/20 border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30"
                      }`}
                      aria-label="Toggle view"
                    >
                      {isFriction ? "View Solution ⚡" : "View Friction ⚠️"}
                    </button>
                  </div>

                  {/* Dynamic Content: Friction vs. Solution */}
                  {isFriction ? (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div>
                        <span className="text-[10px] font-mono text-red-400 bg-red-500/15 border border-red-500/25 px-2 py-0.5 rounded font-semibold inline-block mb-2">
                          Legacy Bottleneck
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          Manual SDR Grunt Work &amp; Domain Blacklist Risks
                        </h3>
                        <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                          SDR teams waste 18+ hours weekly scraping stale databases, suffering high bounce rates and ruining primary Google/Outlook domain reputations.
                        </p>
                      </div>

                      {/* Friction Pain Points List */}
                      <div className="space-y-2 pt-2 border-t border-white/[0.06] text-xs">
                        <div className="flex items-start gap-2.5 text-neutral-300 p-2 rounded-xl bg-red-950/20 border border-red-500/20">
                          <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>24% average bounce rates burning company domain reputation</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-neutral-300 p-2 rounded-xl bg-red-950/20 border border-red-500/20">
                          <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>$1.50+ cost per unverified contact from outdated directories</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-neutral-300 p-2 rounded-xl bg-red-950/20 border border-red-500/20">
                          <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>Zero mailbox rotation, causing cold emails to land in spam</span>
                        </div>
                      </div>

                      {/* Friction Impact Cost Badge */}
                      <div className="p-2.5 rounded-xl bg-black/40 border border-red-500/25 text-[11px] text-red-300 font-medium flex items-center justify-between">
                        <span>Cost of Friction:</span>
                        <span className="font-semibold text-red-400">
                          -$4,200/mo Lost Pipeline
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div>
                        <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/15 border border-cyan-500/25 px-2 py-0.5 rounded font-semibold inline-block mb-2">
                          Autonomous Breakthrough
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          Waterfall Lead Discovery &amp; Warm Outbound Delivery
                        </h3>
                        <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                          Prospect IQ verifies high-intent ICP decision-makers in real time; MailFlow executes multi-mailbox sequences with a 99.4% inbox placement guarantee.
                        </p>
                      </div>

                      {/* Interactive Live Micro-HUD */}
                      <div className="p-3 rounded-2xl bg-black/50 border border-cyan-500/20 space-y-2.5 text-xs">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-neutral-400">Live Waterfall Verification:</span>
                          <span className="text-emerald-400 font-semibold flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            100% Deliverable
                          </span>
                        </div>

                        {/* Contact Mini-Row */}
                        <div className="p-2 rounded-lg bg-cyan-950/30 border border-cyan-500/25 flex items-center justify-between text-[11px]">
                          <div className="truncate">
                            <span className="text-white font-semibold">Alex Chen</span>
                            <span className="text-neutral-400 text-[10px]"> · VP Engineering</span>
                          </div>
                          <span className="text-cyan-300 font-mono text-[10px]">0.3s</span>
                        </div>

                        {/* Deliverability Meter */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px]">
                            <span className="text-neutral-400">Primary Inbox Delivery Rate</span>
                            <span className="text-emerald-400 font-bold">99.4% Inbox Placement</span>
                          </div>
                          <div className="w-full bg-white/[0.08] h-1.5 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-700"
                              style={{
                                width: "99.4%",
                                background: "linear-gradient(90deg, #06b6d4, #818cf8, #34d399)",
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Outcome Highlights */}
                      <div className="grid grid-cols-2 gap-2 text-[10.5px]">
                        <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center gap-1.5 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>50M+ B2B Contacts</span>
                        </div>
                        <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center gap-1.5 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>Zero Spam Risk</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-semibold text-cyan-300">
                    Explore Prospect IQ + MailFlow
                  </span>
                  <a
                    href="#prospectiq"
                    className="w-7 h-7 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 flex items-center justify-center transition-all hover:scale-105"
                    aria-label="View ProspectIQ"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })()}

          {/* ════════════════════════════════════════════════════════════════
              BENTO CARD 2: Media Creation & Content Velocity (Omnira + Unveil)
          ═════════════════════════════════════════════════════════════════ */}
          {(() => {
            const isFriction = cardModes.media === "friction";
            return (
              <div
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 border overflow-hidden group ${
                  isFriction
                    ? "bg-gradient-to-b from-red-950/20 via-[#0a080d] to-[#07090e] border-red-500/30 shadow-2xl shadow-red-950/20"
                    : "bg-gradient-to-b from-emerald-950/25 via-[#08120e] to-[#07090e] border-emerald-500/30 shadow-2xl shadow-emerald-950/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isFriction
                            ? "bg-red-500/15 border border-red-500/30 text-red-400"
                            : "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400"
                        }`}
                      >
                        <Share2 className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10.5px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                          Media &amp; Video Engine
                        </span>
                        <span className="text-xs text-white font-semibold">
                          Omnira + Unveil
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCardToggle("media")}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-sans font-semibold transition-all border ${
                        isFriction
                          ? "bg-red-500/20 border-red-500/40 text-red-300 hover:bg-red-500/30"
                          : "bg-emerald-500/20 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30"
                      }`}
                      aria-label="Toggle view"
                    >
                      {isFriction ? "View Solution ⚡" : "View Friction ⚠️"}
                    </button>
                  </div>

                  {isFriction ? (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div>
                        <span className="text-[10px] font-mono text-red-400 bg-red-500/15 border border-red-500/25 px-2 py-0.5 rounded font-semibold inline-block mb-2">
                          Legacy Bottleneck
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          Content Burnout, Slow Agencies &amp; Watermarked Video
                        </h3>
                        <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                          Marketing teams spend thousands on slow agencies with 5-day turnarounds, while raw video footage is cluttered with watermarks, background noise, and unwanted artifacts.
                        </p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-white/[0.06] text-xs">
                        <div className="flex items-start gap-2.5 text-neutral-300 p-2 rounded-xl bg-red-950/20 border border-red-500/20">
                          <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>$4,500/month retainers for slow 3–5 day agency turnarounds</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-neutral-300 p-2 rounded-xl bg-red-950/20 border border-red-500/20">
                          <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>Moving watermarks and background clutter ruining video ads</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-neutral-300 p-2 rounded-xl bg-red-950/20 border border-red-500/20">
                          <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>Founder burnout managing 4 separate social media platforms</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-black/40 border border-red-500/25 text-[11px] text-red-300 font-medium flex items-center justify-between">
                        <span>Cost of Friction:</span>
                        <span className="font-semibold text-red-400">
                          -$3,800/mo &amp; 80h Creative Delay
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div>
                        <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/15 border border-emerald-500/25 px-2 py-0.5 rounded font-semibold inline-block mb-2">
                          Autonomous Breakthrough
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          Agentic Social Swarm &amp; Neural Media Cleaner
                        </h3>
                        <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                          Omnira drafts viral scripts, decks, and multi-channel dispatches; Unveil removes moving watermarks, noise, and objects with batch multi-file processing.
                        </p>
                      </div>

                      {/* Interactive Live Micro-HUD */}
                      <div className="p-3 rounded-2xl bg-black/50 border border-emerald-500/20 space-y-2.5 text-xs">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-neutral-400">Active Unveil Media Cleaner:</span>
                          <span className="text-amber-400 font-semibold text-[10px] bg-amber-500/15 px-2 py-0.5 rounded border border-amber-500/25">
                            Batch Engine (MP4, MOV)
                          </span>
                        </div>

                        {/* Media Cleaning Status */}
                        <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-500/25 space-y-1 text-[10.5px]">
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium truncate">campaign-reel.mp4 (4K)</span>
                            <span className="text-emerald-400 font-semibold text-[9.5px]">Cleaned</span>
                          </div>
                          <div className="text-[9.5px] text-neutral-400">
                            Moving Watermark &amp; Background Noise Erased
                          </div>
                        </div>

                        {/* Omnira Distribution Strip */}
                        <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-1 border-t border-white/[0.06]">
                          <span>YouTube · LinkedIn · IG · FB</span>
                          <span className="text-emerald-400 font-semibold">1-Click Human Gate</span>
                        </div>
                      </div>

                      {/* Outcome Highlights */}
                      <div className="grid grid-cols-2 gap-2 text-[10.5px]">
                        <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center gap-1.5 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>12s Fast Drafts</span>
                        </div>
                        <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center gap-1.5 font-medium">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>Moving Watermarks Removed</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-300">
                    Explore Omnira + Unveil
                  </span>
                  <a
                    href="#omnira"
                    className="w-7 h-7 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 flex items-center justify-center transition-all hover:scale-105"
                    aria-label="View Omnira"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })()}

          {/* ════════════════════════════════════════════════════════════════
              BENTO CARD 3: Search Intelligence & Spider Forensics (Veyrix)
          ═════════════════════════════════════════════════════════════════ */}
          {(() => {
            const isFriction = cardModes.search === "friction";
            return (
              <div
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 border overflow-hidden group ${
                  isFriction
                    ? "bg-gradient-to-b from-red-950/20 via-[#0a080d] to-[#07090e] border-red-500/30 shadow-2xl shadow-red-950/20"
                    : "bg-gradient-to-b from-sky-950/25 via-[#081017] to-[#07090e] border-sky-500/30 shadow-2xl shadow-sky-950/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isFriction
                            ? "bg-red-500/15 border border-red-500/30 text-red-400"
                            : "bg-sky-500/15 border border-sky-500/30 text-sky-400"
                        }`}
                      >
                        <Search className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10.5px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                          Forensics &amp; Revenue
                        </span>
                        <span className="text-xs text-white font-semibold">
                          Veyrix Intelligence
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCardToggle("search")}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-sans font-semibold transition-all border ${
                        isFriction
                          ? "bg-red-500/20 border-red-500/40 text-red-300 hover:bg-red-500/30"
                          : "bg-sky-500/20 border-sky-500/40 text-sky-300 hover:bg-sky-500/30"
                      }`}
                      aria-label="Toggle view"
                    >
                      {isFriction ? "View Solution ⚡" : "View Friction ⚠️"}
                    </button>
                  </div>

                  {isFriction ? (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div>
                        <span className="text-[10px] font-mono text-red-400 bg-red-500/15 border border-red-500/25 px-2 py-0.5 rounded font-semibold inline-block mb-2">
                          Legacy Bottleneck
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          Silent SEO Regressions &amp; Invisible 404 Revenue Leaks
                        </h3>
                        <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                          Websites secretly accumulate broken links, slow Core Web Vitals, and keyword cannibalization that cost thousands in lost organic search traffic before anyone notices.
                        </p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-white/[0.06] text-xs">
                        <div className="flex items-start gap-2.5 text-neutral-300 p-2 rounded-xl bg-red-950/20 border border-red-500/20">
                          <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>Broken 404 links and redirect chains leaking conversion revenue</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-neutral-300 p-2 rounded-xl bg-red-950/20 border border-red-500/20">
                          <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>Quarterly audits that discover technical ranking drops months late</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-neutral-300 p-2 rounded-xl bg-red-950/20 border border-red-500/20">
                          <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>Zero visibility into brand citations on ChatGPT and Perplexity</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-black/40 border border-red-500/25 text-[11px] text-red-300 font-medium flex items-center justify-between">
                        <span>Cost of Friction:</span>
                        <span className="font-semibold text-red-400">
                          -$6,500/mo Lost Organic Traffic
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div>
                        <span className="text-[10px] font-mono text-sky-300 bg-sky-500/15 border border-sky-500/25 px-2 py-0.5 rounded font-semibold inline-block mb-2">
                          Autonomous Breakthrough
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          Deep Spider Forensics &amp; Continuous Revenue Safeguard
                        </h3>
                        <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                          Veyrix continuously crawls 2,450+ URLs, verifies Core Web Vitals, and monitors brand citation supremacy across Perplexity, ChatGPT, and Gemini.
                        </p>
                      </div>

                      {/* Interactive Live Micro-HUD */}
                      <div className="p-3 rounded-2xl bg-black/50 border border-sky-500/20 space-y-2 text-xs">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-neutral-400">Core Web Vitals Speed HUD:</span>
                          <span className="text-emerald-400 font-semibold">Google CWV Passed</span>
                        </div>

                        {/* 3 Metrics Speedometers */}
                        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                          <div className="p-1.5 rounded-lg bg-sky-950/30 border border-sky-500/20">
                            <div className="text-sky-300 font-bold">0.8s</div>
                            <div className="text-[8.5px] text-neutral-400">LCP (Fast)</div>
                          </div>
                          <div className="p-1.5 rounded-lg bg-sky-950/30 border border-sky-500/20">
                            <div className="text-emerald-400 font-bold">100%</div>
                            <div className="text-[8.5px] text-neutral-400">Zero Shifts</div>
                          </div>
                          <div className="p-1.5 rounded-lg bg-sky-950/30 border border-sky-500/20">
                            <div className="text-cyan-300 font-bold">2,450</div>
                            <div className="text-[8.5px] text-neutral-400">0 Errors</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-1 border-t border-white/[0.06]">
                          <span>GSC + GA4 Live Stream</span>
                          <span className="text-sky-400 font-semibold">24/7 Defense</span>
                        </div>
                      </div>

                      {/* Outcome Highlights */}
                      <div className="grid grid-cols-2 gap-2 text-[10.5px]">
                        <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-300 flex items-center gap-1.5 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span>99.8% Site Health</span>
                        </div>
                        <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center gap-1.5 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>Auto Slack Alerts</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-semibold text-sky-300">
                    Explore Veyrix Forensics
                  </span>
                  <a
                    href="#veyrix"
                    className="w-7 h-7 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 flex items-center justify-center transition-all hover:scale-105"
                    aria-label="View Veyrix"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
