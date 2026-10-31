"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Play, Pause, ChevronLeft, ChevronRight, Volume2, VolumeX, Maximize2 } from "lucide-react";

export interface ShowreelClip {
  id: string;
  indexStr: string; // e.g. "01 / 07"
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
    title: "DIGITAL EXPERIENCES",
    category: "3D & GSAP WEB ENGINEERING",
    videoSrc: "/videos/showreel/01-digital-experiences.mp4",
    posterSrc: "/videos/showreel/01-digital-experiences.jpg",
    duration: 6,
    accent: "#818cf8",
    accentGlow: "rgba(129, 140, 248, 0.22)",
  },
  {
    id: "mobile-engineering",
    indexStr: "02 / 07",
    title: "MOBILE APPLICATIONS",
    category: "NATIVE & HYBRID MOBILE PLATFORMS",
    videoSrc: "/videos/showreel/02-mobile-engineering.mp4",
    posterSrc: "/videos/showreel/02-mobile-engineering.jpg",
    duration: 6,
    accent: "#38bdf8",
    accentGlow: "rgba(56, 189, 248, 0.22)",
  },
  {
    id: "crm-platforms",
    indexStr: "03 / 07",
    title: "CRM & BUSINESS PLATFORMS",
    category: "PIPELINE & REVENUE INTELLIGENCE",
    videoSrc: "/videos/showreel/03-crm-platforms.mp4",
    posterSrc: "/videos/showreel/03-crm-platforms.jpg",
    duration: 6,
    accent: "#f43f5e",
    accentGlow: "rgba(244, 63, 94, 0.22)",
  },
  {
    id: "enterprise-saas",
    indexStr: "04 / 07",
    title: "ENTERPRISE SAAS",
    category: "WORKFORCE HRMS & WORKFLOW ORCHESTRATION",
    videoSrc: "/videos/showreel/04-enterprise-saas.mp4",
    posterSrc: "/videos/showreel/04-enterprise-saas.jpg",
    duration: 6,
    accent: "#a78bfa",
    accentGlow: "rgba(167, 139, 250, 0.22)",
  },
  {
    id: "agentic-ai",
    indexStr: "05 / 07",
    title: "AGENTIC AI & SWARMS",
    category: "AUTONOMOUS REASONING & CONSENSUS",
    videoSrc: "/videos/showreel/05-agentic-ai.mp4",
    posterSrc: "/videos/showreel/05-agentic-ai.jpg",
    duration: 6,
    accent: "#22d3ee",
    accentGlow: "rgba(34, 211, 238, 0.22)",
  },
  {
    id: "data-intelligence",
    indexStr: "06 / 07",
    title: "DATA INTELLIGENCE",
    category: "STREAMING LAKEHOUSE & SEMANTIC RADAR",
    videoSrc: "/videos/showreel/06-data-intelligence.mp4",
    posterSrc: "/videos/showreel/06-data-intelligence.jpg",
    duration: 7,
    accent: "#34d399",
    accentGlow: "rgba(52, 211, 153, 0.22)",
  },
  {
    id: "technology-ecosystem",
    indexStr: "07 / 07",
    title: "SOFTWARE ECOSYSTEMS",
    category: "SYNCHRONIZED MULTI-SURFACE ARCHITECTURE",
    videoSrc: "/videos/showreel/07-technology-ecosystem.mp4",
    posterSrc: "/videos/showreel/07-technology-ecosystem.jpg",
    duration: 5,
    accent: "#fbbf24",
    accentGlow: "rgba(251, 191, 36, 0.22)",
  },
];

export function AshmyraHeroShowreel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentClip = SHOWREEL_CLIPS[currentIndex];

  const goToSlide = useCallback((newIndex: number) => {
    // GSAP cinematic transition out
    if (videoRef.current && labelRef.current) {
      gsap.to([videoRef.current, labelRef.current], {
        opacity: 0.3,
        scale: 0.985,
        duration: 0.25,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex(newIndex);
          setProgress(0);

          // Once state updates, fade back in
          gsap.fromTo(
            [videoRef.current, labelRef.current],
            { opacity: 0.3, scale: 0.985 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
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

  // Video autoplay & timer management
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
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
  }, [currentIndex, isPlaying, currentClip.duration, handleNext]);

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden transition-shadow duration-700 select-none"
      style={{
        background: "linear-gradient(160deg, rgba(12, 16, 28, 0.96) 0%, rgba(5, 7, 12, 0.98) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: `0 25px 70px -15px rgba(0, 0, 0, 0.95), 0 0 50px -10px ${currentClip.accentGlow}`,
      }}
    >
      {/* ── Top Bar: Capability index & Live indicator ──────────────────────── */}
      <div
        className="px-4 sm:px-6 py-3 flex items-center justify-between border-b backdrop-blur-md"
        style={{
          borderColor: "rgba(255, 255, 255, 0.07)",
          background: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: currentClip.accent }}
          />
          <span className="text-[11px] font-mono tracking-widest text-neutral-300 font-semibold">
            {currentClip.indexStr}
          </span>
          <span className="text-neutral-600">·</span>
          <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 font-medium">
            {currentClip.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-emerald-400 font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">Production Verified</span>
          </span>
        </div>
      </div>

      {/* ── Main Cinematic Video Viewport ─────────────────────────────────── */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#04060a]">
        {/* Poster Fallback / Image */}
        <Image
          src={currentClip.posterSrc}
          alt={currentClip.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-center pointer-events-none"
        />

        {/* Cinematic Video Player */}
        <video
          ref={videoRef}
          key={currentClip.videoSrc}
          src={currentClip.videoSrc}
          poster={currentClip.posterSrc}
          autoPlay
          muted
          playsInline
          loop={false}
          className="relative z-10 w-full h-full object-cover object-center transition-transform duration-700"
        />

        {/* Restrained cinematic vignette overlay */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(4, 6, 10, 0.75) 0%, transparent 25%), linear-gradient(to bottom, rgba(4, 6, 10, 0.3) 0%, transparent 15%)",
          }}
        />

        {/* Capability Label Overlay (Bottom Left) */}
        <div
          ref={labelRef}
          className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-30 pointer-events-none"
        >
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded"
              style={{
                color: currentClip.accent,
                background: "rgba(0, 0, 0, 0.6)",
                border: `1px solid ${currentClip.accent}44`,
                backdropFilter: "blur(8px)",
              }}
            >
              SHOWCASE {currentClip.indexStr}
            </span>
          </div>
          <h2
            className="text-lg sm:text-2xl font-bold tracking-tight text-white drop-shadow-md"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {currentClip.title}
          </h2>
        </div>

        {/* Video Controls (Bottom Right) */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center gap-1.5 sm:gap-2">
          {/* Pause / Play */}
          <button
            onClick={togglePlay}
            className="p-2 sm:p-2.5 rounded-xl text-neutral-300 hover:text-white transition-all bg-black/60 hover:bg-black/80 border border-white/10 backdrop-blur-md"
            aria-label={isPlaying ? "Pause video showreel" : "Play video showreel"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          {/* Prev */}
          <button
            onClick={handlePrev}
            className="p-2 sm:p-2.5 rounded-xl text-neutral-300 hover:text-white transition-all bg-black/60 hover:bg-black/80 border border-white/10 backdrop-blur-md"
            aria-label="Previous showreel video"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          {/* Next */}
          <button
            onClick={handleNext}
            className="p-2 sm:p-2.5 rounded-xl text-neutral-300 hover:text-white transition-all bg-black/60 hover:bg-black/80 border border-white/10 backdrop-blur-md"
            aria-label="Next showreel video"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ── Slide Progress Bar ────────────────────────────────────────────── */}
      <div className="w-full h-1 bg-white/[0.06] relative overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full transition-all duration-75 ease-linear"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${currentClip.accent}, #ffffff)`,
            boxShadow: `0 0 10px ${currentClip.accent}`,
          }}
        />
      </div>

      {/* ── Bottom Strip: 7 Capability Selectors ───────────────────────────── */}
      <div
        className="px-3 sm:px-6 py-3 flex items-center justify-between gap-1 sm:gap-2 border-t overflow-x-auto scrollbar-none"
        style={{
          borderColor: "rgba(255, 255, 255, 0.06)",
          background: "rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="flex items-center gap-1 sm:gap-2 min-w-max">
          {SHOWREEL_CLIPS.map((clip, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={clip.id}
                onClick={() => goToSlide(idx)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10.5px] font-mono transition-all duration-200 ${
                  isActive
                    ? "text-white bg-white/[0.12] shadow-sm font-semibold"
                    : "text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.04]"
                }`}
                style={{
                  border: isActive
                    ? `1px solid ${clip.accent}66`
                    : "1px solid transparent",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{
                    background: isActive ? clip.accent : "rgba(255,255,255,0.2)",
                  }}
                />
                <span className="hidden md:inline">{clip.title}</span>
                <span className="md:hidden">0{idx + 1}</span>
              </button>
            );
          })}
        </div>

        <span className="text-[10px] font-mono text-neutral-500 hidden xl:inline shrink-0">
          7 Production Showreels
        </span>
      </div>
    </div>
  );
}
