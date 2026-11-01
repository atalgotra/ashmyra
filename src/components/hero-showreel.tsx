"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Play, Pause, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

export interface ShowreelClip {
  id: string;
  indexStr: string; // e.g. "01 / 07"
  num: string; // e.g. "01"
  shortLabel: string;
  title: string;
  category: string;
  videoSrc: string;
  posterSrc: string;
  duration: number; // in seconds
  accent: string;
  accentGlow: string;
}

export const SHOWREEL_CLIPS: ShowreelClip[] = [
  {
    id: "digital-experiences",
    indexStr: "01 / 07",
    num: "01",
    shortLabel: "3D Web",
    title: "DIGITAL EXPERIENCES",
    category: "3D & GSAP WEB ENGINEERING",
    videoSrc: "/videos/showreel/01-digital-experiences.mp4",
    posterSrc: "/videos/showreel/01-digital-experiences.jpg",
    duration: 6,
    accent: "#818cf8",
    accentGlow: "rgba(129, 140, 248, 0.35)",
  },
  {
    id: "mobile-engineering",
    indexStr: "02 / 07",
    num: "02",
    shortLabel: "Mobile",
    title: "MOBILE APPLICATIONS",
    category: "NATIVE & HYBRID MOBILE PLATFORMS",
    videoSrc: "/videos/showreel/02-mobile-engineering.mp4",
    posterSrc: "/videos/showreel/02-mobile-engineering.jpg",
    duration: 6,
    accent: "#38bdf8",
    accentGlow: "rgba(56, 189, 248, 0.35)",
  },
  {
    id: "crm-platforms",
    indexStr: "03 / 07",
    num: "03",
    shortLabel: "CRM",
    title: "CRM & BUSINESS PLATFORMS",
    category: "PIPELINE & REVENUE INTELLIGENCE",
    videoSrc: "/videos/showreel/03-crm-platforms.mp4",
    posterSrc: "/videos/showreel/03-crm-platforms.jpg",
    duration: 6,
    accent: "#f43f5e",
    accentGlow: "rgba(244, 63, 94, 0.35)",
  },
  {
    id: "enterprise-saas",
    indexStr: "04 / 07",
    num: "04",
    shortLabel: "SaaS",
    title: "ENTERPRISE SAAS",
    category: "WORKFORCE HRMS & WORKFLOW ORCHESTRATION",
    videoSrc: "/videos/showreel/04-enterprise-saas.mp4",
    posterSrc: "/videos/showreel/04-enterprise-saas.jpg",
    duration: 6,
    accent: "#a78bfa",
    accentGlow: "rgba(167, 139, 250, 0.35)",
  },
  {
    id: "agentic-ai",
    indexStr: "05 / 07",
    num: "05",
    shortLabel: "AI Swarm",
    title: "AGENTIC AI & SWARMS",
    category: "AUTONOMOUS REASONING & CONSENSUS",
    videoSrc: "/videos/showreel/05-agentic-ai.mp4",
    posterSrc: "/videos/showreel/05-agentic-ai.jpg",
    duration: 6,
    accent: "#22d3ee",
    accentGlow: "rgba(34, 211, 238, 0.35)",
  },
  {
    id: "data-intelligence",
    indexStr: "06 / 07",
    num: "06",
    shortLabel: "Data",
    title: "DATA INTELLIGENCE",
    category: "STREAMING LAKEHOUSE & SEMANTIC RADAR",
    videoSrc: "/videos/showreel/06-data-intelligence.mp4",
    posterSrc: "/videos/showreel/06-data-intelligence.jpg",
    duration: 7,
    accent: "#34d399",
    accentGlow: "rgba(52, 211, 153, 0.35)",
  },
  {
    id: "technology-ecosystem",
    indexStr: "07 / 07",
    num: "07",
    shortLabel: "Ecosystem",
    title: "SOFTWARE ECOSYSTEMS",
    category: "SYNCHRONIZED MULTI-SURFACE ARCHITECTURE",
    videoSrc: "/videos/showreel/07-technology-ecosystem.mp4",
    posterSrc: "/videos/showreel/07-technology-ecosystem.jpg",
    duration: 5,
    accent: "#fbbf24",
    accentGlow: "rgba(251, 191, 36, 0.35)",
  },
];

export function AshmyraHeroShowreel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentClip = SHOWREEL_CLIPS[currentIndex];

  const goToSlide = useCallback((newIndex: number) => {
    if (videoRef.current && labelRef.current) {
      gsap.to([videoRef.current, labelRef.current], {
        opacity: 0.3,
        scale: 0.985,
        duration: 0.22,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex(newIndex);
          setProgress(0);

          gsap.fromTo(
            [videoRef.current, labelRef.current],
            { opacity: 0.3, scale: 0.985 },
            { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" }
          );
        },
      });
    } else {
      setCurrentIndex(newIndex);
      setProgress(0);
    }
  }, []);

  const handleNext = useCallback(() => {
    goToSlide((currentIndex + 1) % SHOWREEL_CLIPS.length);
  }, [currentIndex, goToSlide]);

  const handlePrev = useCallback(() => {
    goToSlide((currentIndex - 1 + SHOWREEL_CLIPS.length) % SHOWREEL_CLIPS.length);
  }, [currentIndex, goToSlide]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  // Video autoplay & timer management
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.muted = isMuted;
    if (isPlaying) {
      video.play().catch(() => {});
    }

    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);

    if (!isPlaying) return;

    const clipDurationMs = currentClip.duration * 1000;
    const intervalMs = 50;
    let elapsed = 0;

    progressIntervalRef.current = setInterval(() => {
      elapsed += intervalMs;
      const pct = Math.min(100, (elapsed / clipDurationMs) * 100);
      setProgress(pct);
    }, intervalMs);

    timerRef.current = setTimeout(() => {
      handleNext();
    }, clipDurationMs);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isPlaying, isMuted, currentClip.duration, handleNext]);

  return (
    <div className="relative w-full">
      {/* ── Dynamic Ambient Back-Glow (Apple TV / Ambilight Effect) ──────── */}
      <div
        className="absolute -inset-4 sm:-inset-6 rounded-3xl pointer-events-none transition-all duration-700 opacity-60 sm:opacity-75 -z-10"
        style={{
          background: `radial-gradient(ellipse 75% 65% at 50% 50%, ${currentClip.accent} 0%, transparent 70%)`,
          filter: "blur(65px)",
        }}
      />

      {/* ── Main Showreel Hardware Canvas ─────────────────────────────────── */}
      <div
        ref={containerRef}
        data-dark-chassis="true"
        className="dark-media-chassis relative w-full rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-700 select-none"
        style={{
          background: "linear-gradient(160deg, rgba(12, 16, 28, 0.97) 0%, rgba(5, 7, 12, 0.99) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: `0 30px 80px -20px rgba(0, 0, 0, 0.95), 0 0 50px -10px ${currentClip.accentGlow}`,
        }}
      >
        {/* ── Main Cinematic Video Viewport (Full Bleed to Top Rounded Corners) ── */}
        <div
          onClick={togglePlay}
          className="relative aspect-[16/9] w-full overflow-hidden bg-[#04060a] cursor-pointer group"
        >
          {/* Poster Fallback */}
          <Image
            src={currentClip.posterSrc}
            alt={currentClip.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover object-center pointer-events-none"
          />

          {/* Cinematic Video Player */}
          <video
            ref={videoRef}
            key={currentClip.videoSrc}
            src={currentClip.videoSrc}
            poster={currentClip.posterSrc}
            autoPlay
            muted={isMuted}
            playsInline
            loop={false}
            className="relative z-10 w-full h-full object-cover object-center transition-transform duration-700"
          />

          {/* Cinematic Vignette Overlay (Ensures razor-sharp text contrast regardless of video content) */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(4, 6, 10, 0.92) 0%, rgba(4, 6, 10, 0.45) 26%, transparent 55%), linear-gradient(to bottom, rgba(4, 6, 10, 0.4) 0%, transparent 20%)",
            }}
          />

          {/* Capability Label Overlay (Bottom Left) */}
          <div
            ref={labelRef}
            className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-30 pointer-events-none max-w-[65%]"
          >
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span
                className="text-[9.5px] sm:text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded-md"
                style={{
                  color: currentClip.accent,
                  background: "rgba(0, 0, 0, 0.8)",
                  border: `1px solid ${currentClip.accent}66`,
                  backdropFilter: "blur(10px)",
                }}
              >
                SHOWCASE {currentClip.indexStr}
              </span>
              <span
                className="text-[10px] sm:text-[11px] font-mono tracking-wider font-medium hidden sm:inline"
                style={{ color: "#E2E8F0", textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}
              >
                · {currentClip.category}
              </span>
            </div>
            <h2
              className="text-base sm:text-2xl font-bold tracking-tight truncate"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#FFFFFF",
                textShadow: "0 2px 14px rgba(0,0,0,0.95), 0 0 24px rgba(0,0,0,0.85)",
              }}
            >
              {currentClip.title}
            </h2>
          </div>

          {/* ── Frosted-Glass Floating Media Dock (Bottom Right) ──────────── */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-full bg-black/75 hover:bg-black/90 border border-white/20 backdrop-blur-xl shadow-2xl transition-all"
          >
            {/* Audio Toggle */}
            <button
              onClick={toggleMute}
              className="relative p-1.5 sm:p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
              style={{ color: "#E2E8F0" }}
              aria-label={isMuted ? "Unmute showreel audio" : "Mute showreel audio"}
              title={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                </>
              )}
            </button>

            <span className="w-[1px] h-3.5 bg-white/20" />

            {/* Prev */}
            <button
              onClick={handlePrev}
              className="p-1.5 sm:p-2 rounded-full hover:bg-white/10 active:scale-95 transition-all"
              style={{ color: "#E2E8F0" }}
              aria-label="Previous capability"
              title="Previous capability"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            {/* Pause / Play */}
            <button
              onClick={togglePlay}
              className="p-1.5 sm:p-2 rounded-full hover:bg-white/10 active:scale-95 transition-all"
              style={{ color: "#FFFFFF" }}
              aria-label={isPlaying ? "Pause playback" : "Resume playback"}
              title={isPlaying ? "Pause playback" : "Resume playback"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              className="p-1.5 sm:p-2 rounded-full hover:bg-white/10 active:scale-95 transition-all"
              style={{ color: "#E2E8F0" }}
              aria-label="Next capability"
              title="Next capability"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ── Bottom 7-Segment Expanding Accordion Selector ──────────────── */}
        <div
          className="p-2 sm:p-2.5 border-t border-white/[0.08] backdrop-blur-md"
          style={{
            background: "rgba(0, 0, 0, 0.65)",
          }}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 w-full">
            {SHOWREEL_CLIPS.map((clip, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={clip.id}
                  onClick={() => goToSlide(idx)}
                  className={`group relative flex items-center justify-center py-2 sm:py-2.5 rounded-xl transition-all duration-300 ease-out select-none ${
                    isActive
                      ? "flex-[2.4] sm:flex-[2.8] px-2.5 sm:px-3 bg-white/[0.12] shadow-lg overflow-hidden"
                      : "flex-1 px-1 sm:px-2 bg-white/[0.03] hover:bg-white/[0.08]"
                  }`}
                  style={{
                    border: isActive
                      ? `1px solid ${clip.accent}88`
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isActive ? `0 0 20px -5px ${clip.accentGlow}` : "none",
                  }}
                  aria-label={`Select showreel clip ${clip.num}: ${clip.title}`}
                >
                  {/* Micro-Tooltip for Segments (visible on hover) */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 whitespace-nowrap px-2.5 py-1 rounded-lg bg-neutral-900/95 border border-white/20 text-[10px] font-mono shadow-xl backdrop-blur-md -translate-y-1 group-hover:translate-y-0" style={{ color: "#FFFFFF" }}>
                    <span className="font-bold" style={{ color: "#FFFFFF" }}>{clip.num}</span> · {clip.shortLabel}
                  </div>

                  {/* Button Content */}
                  {isActive ? (
                    /* Active Expanded Layout */
                    <div className="flex items-center justify-center gap-1.5 leading-none w-full min-w-0">
                      <span
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0 animate-pulse"
                        style={{ background: clip.accent }}
                      />
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-tight shrink-0" style={{ color: "#FFFFFF" }}>
                        {clip.num}
                      </span>
                      <span className="font-mono text-[9px] shrink-0" style={{ color: "#94A3B8" }}>·</span>
                      <span className="text-[9.5px] sm:text-[10.5px] font-mono font-semibold uppercase tracking-tight truncate" style={{ color: "#FFFFFF" }}>
                        {clip.shortLabel}
                      </span>
                    </div>
                  ) : (
                    /* Inactive Compact Layout */
                    <div className="flex items-center justify-center gap-1 leading-none w-full">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 transition-colors group-hover:bg-white/60"
                        style={{
                          background: "rgba(255, 255, 255, 0.3)",
                        }}
                      />
                      <span className="text-[10px] sm:text-[11px] font-mono font-medium" style={{ color: "#94A3B8" }}>
                        {clip.num}
                      </span>
                    </div>
                  )}

                  {/* Active Segment Integrated Story Progress Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-white/10 overflow-hidden rounded-b-xl">
                      <div
                        className="h-full transition-all duration-75 ease-linear"
                        style={{
                          width: `${progress}%`,
                          background: `linear-gradient(90deg, ${clip.accent}, #ffffff)`,
                          boxShadow: `0 0 10px ${clip.accent}`,
                        }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
