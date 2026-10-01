/**
 * ASHMYRA CINEMATIC HERO — VIDEO CONFIGURATION
 *
 * Four Flow videos forming one continuous Ashmyra intelligence film.
 * This config drives the entire playback sequence.
 */

export interface VideoConfig {
  id: string;
  label: string;
  src: string;
  poster: string;
  /** Approximate duration in seconds (measured at runtime; used for preload timing) */
  approxDuration: number;
  /** CSS filter / blend overlay for color-grading consistency across clips */
  cssFilter?: string;
}

export interface TextRevealPhase {
  videoIndex: number;
  /** 0–1 within that video's progress when this phase activates */
  progressStart: number;
  content: "eyebrow" | "headline" | "brand" | "cta";
}

export const HERO_VIDEOS: VideoConfig[] = [
  {
    id: "signal",
    label: "THE SIGNAL",
    src: "/videos/hero/v01-signal.mp4",
    poster: "/videos/hero/poster.jpg",
    approxDuration: 8,
    cssFilter: "brightness(0.9) contrast(1.05) saturate(0.85)",
  },
  {
    id: "intelligence",
    label: "INTELLIGENCE NETWORK",
    src: "/videos/hero/v02-intelligence.mp4",
    poster: "/videos/hero/poster.jpg",
    approxDuration: 10,
    cssFilter: "brightness(0.88) contrast(1.08) saturate(0.9)",
  },
  {
    id: "convergence",
    label: "THE CONVERGENCE",
    src: "/videos/hero/v03-convergence.mp4",
    poster: "/videos/hero/poster.jpg",
    approxDuration: 10,
    cssFilter: "brightness(0.9) contrast(1.05) saturate(0.92)",
  },
  {
    id: "reveal",
    label: "ASHMYRA REVEAL",
    src: "/videos/hero/v04-reveal.mp4",
    poster: "/videos/hero/poster.jpg",
    approxDuration: 8,
    cssFilter: "brightness(0.95) contrast(1.0) saturate(1.0)",
  },
];

/** How many seconds before a clip ends to start preloading the next */
export const PRELOAD_AHEAD_SECONDS = 3;

/** Cross-fade duration in ms between videos */
export const CROSSFADE_MS = 600;
