"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Layers,
  Workflow,
  ShieldCheck,
  Server,
  Database,
  Terminal,
  Activity,
  Code2,
} from "lucide-react";

export interface CaseStudyData {
  id: string;
  badge: string;
  industry: string;
  status: string;
  title: string;
  subtitle: string;
  context: string;
  challenge: {
    title: string;
    description: string;
    points: string[];
  };
  approach: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
  };
  impact: {
    metric: string;
    label: string;
    description: string;
  };
  technologies: string[];
  media: {
    type: "video";
    src: string;
    poster: string;
    alt: string;
    caption: string;
  };
  reversed?: boolean;
}

export function CaseStudyFeature({ data }: { data: CaseStudyData }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<"architecture" | "challenge" | "solution">("architecture");

  useEffect(() => {
    // Attempt auto-play when video is mounted
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <article
      id={data.id}
      className="relative rounded-3xl transition-all duration-300 p-6 sm:p-8 lg:p-10 backdrop-blur-md overflow-hidden"
      style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
    >
      {/* Ambient background glow */}
      <div
        className={`absolute -top-32 ${
          data.reversed ? "-left-32" : "-right-32"
        } w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none`}
        style={{ backgroundColor: "var(--accent, #4f46e5)" }}
      />

      <div className="relative z-10 flex flex-col gap-8 lg:gap-12">
        {/* Header Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wide" style={{ backgroundColor: "rgba(2, 132, 199, 0.1)", border: "1px solid var(--border)", color: "#0284c7" }}>
              {data.industry}
            </span>
            <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wide" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
              {data.badge}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-semibold" style={{ backgroundColor: "rgba(5, 150, 105, 0.1)", border: "1px solid rgba(5, 150, 105, 0.3)", color: "#059669" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#059669" }} />
            <span>{data.status}</span>
          </div>
        </div>

        {/* Main Editorial Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
            data.reversed ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
          }`}
        >
          {/* Column 1: Editorial Deep Dive (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3
                className="text-2xl sm:text-3xl lg:text-3xl font-bold tracking-tight leading-tight mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
              >
                {data.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed font-sans" style={{ color: "var(--text-muted)" }}>
                {data.subtitle}
              </p>
            </div>

            {/* Context Callout */}
            <div className="p-4 sm:p-5 rounded-2xl text-xs sm:text-sm leading-relaxed" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider block mb-1.5" style={{ color: "var(--text)" }}>
                Project Context &amp; Domain
              </span>
              <p>{data.context}</p>
            </div>

            {/* Interactive Tabbed Detail View */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-1" style={{ borderBottom: "1px solid var(--border)" }}>
                <button
                  type="button"
                  onClick={() => setActiveTab("architecture")}
                  className={`px-3 py-2 text-xs font-mono font-semibold rounded-t-lg transition-all relative ${
                    activeTab === "architecture"
                      ? "border-b-2"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  style={{
                    color: activeTab === "architecture" ? "var(--accent, #4f46e5)" : "var(--text-muted)",
                    borderColor: activeTab === "architecture" ? "var(--accent, #4f46e5)" : "transparent",
                    backgroundColor: activeTab === "architecture" ? "var(--theme-pill-bg, rgba(79,70,229,0.1))" : "transparent",
                  }}
                >
                  Architecture &amp; Approach
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("challenge")}
                  className={`px-3 py-2 text-xs font-mono font-semibold rounded-t-lg transition-all relative ${
                    activeTab === "challenge"
                      ? "border-b-2"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  style={{
                    color: activeTab === "challenge" ? "var(--accent, #4f46e5)" : "var(--text-muted)",
                    borderColor: activeTab === "challenge" ? "var(--accent, #4f46e5)" : "transparent",
                    backgroundColor: activeTab === "challenge" ? "var(--theme-pill-bg, rgba(79,70,229,0.1))" : "transparent",
                  }}
                >
                  Engineering Challenge
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("solution")}
                  className={`px-3 py-2 text-xs font-mono font-semibold rounded-t-lg transition-all relative ${
                    activeTab === "solution"
                      ? "border-b-2"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  style={{
                    color: activeTab === "solution" ? "var(--accent, #4f46e5)" : "var(--text-muted)",
                    borderColor: activeTab === "solution" ? "var(--accent, #4f46e5)" : "transparent",
                    backgroundColor: activeTab === "solution" ? "var(--theme-pill-bg, rgba(79,70,229,0.1))" : "transparent",
                  }}
                >
                  Implemented Solution
                </button>
              </div>

              {/* Tab Content Panels */}
              <div className="min-h-[170px]">
                {activeTab === "architecture" && (
                  <div className="space-y-3 p-4 rounded-2xl" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: "#0284c7" }}>
                      <Workflow className="w-3.5 h-3.5" style={{ color: "#0284c7" }} />
                      <span>{data.approach.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {data.approach.description}
                    </p>
                    <ul className="space-y-2 pt-1">
                      {data.approach.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "#0284c7" }} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "challenge" && (
                  <div className="space-y-3 p-4 rounded-2xl" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: "#e11d48" }}>
                      <Layers className="w-3.5 h-3.5" style={{ color: "#e11d48" }} />
                      <span>{data.challenge.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {data.challenge.description}
                    </p>
                    <ul className="space-y-2 pt-1">
                      {data.challenge.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "#e11d48" }} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "solution" && (
                  <div className="space-y-3 p-4 rounded-2xl" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: "#059669" }}>
                      <Cpu className="w-3.5 h-3.5" style={{ color: "#059669" }} />
                      <span>{data.solution.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {data.solution.description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Architectural Impact Strip */}
            <div className="p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold block mb-0.5" style={{ color: "var(--accent, #4f46e5)" }}>
                  Verified Architectural Impact
                </span>
                <span className="text-xs block" style={{ color: "var(--text-muted)" }}>
                  {data.impact.description}
                </span>
              </div>
              <div className="shrink-0 text-right sm:text-right">
                <span className="text-lg sm:text-xl font-bold font-mono block" style={{ color: "var(--text)" }}>
                  {data.impact.metric}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                  {data.impact.label}
                </span>
              </div>
            </div>

            {/* Technology Foundation */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider font-bold flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
                <Terminal className="w-3.5 h-3.5" />
                <span>Technology Foundation</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {data.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-lg transition-colors font-medium"
                    style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Architectural Media / Video Viewport (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3">
            <div data-dark-chassis="true" className="dark-media-chassis relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#070912] shadow-2xl group">
              {/* Top window mock header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-black/60 border-b border-white/[0.08] backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-[10px] font-mono text-neutral-400 truncate max-w-[140px] sm:max-w-[200px]">
                    sys://preview/{data.id}.arch
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider">
                    Telemetry Live
                  </span>
                </div>
              </div>

              {/* Video container */}
              <div className="relative aspect-[16/10] sm:aspect-video w-full bg-neutral-950 overflow-hidden">
                <video
                  ref={videoRef}
                  src={data.media.src}
                  poster={data.media.poster}
                  loop
                  muted={isMuted}
                  playsInline
                  autoPlay
                  onLoadedData={() => setIsVideoLoaded(true)}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />

                {/* Media Playback Overlay Controls */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2 z-20">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause Video" : "Play Video"}
                    className="w-8 h-8 rounded-lg bg-black/70 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-105"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                    className="w-8 h-8 rounded-lg bg-black/70 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-105"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Media Footer Caption */}
              <div className="px-4 py-2.5 bg-black/50 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span className="truncate">{data.media.caption}</span>
                <span className="shrink-0 text-cyan-400/80 ml-2">Verified Spec</span>
              </div>
            </div>

            {/* Architectural Sub-notes */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] font-mono text-neutral-400 leading-normal flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                System components deployed on isolated VPC infrastructure with audited logging pipelines and deterministic recovery bounds.
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
