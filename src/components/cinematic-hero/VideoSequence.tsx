"use client";

/**
 * ASHMYRA VIDEO SEQUENCE ENGINE
 *
 * Manages four-clip playback as one continuous film:
 *   v01-signal → v02-intelligence → v03-convergence → v04-reveal
 *
 * Architecture:
 * - Two hidden <video> elements double-buffer (current / next)
 * - Cross-fade via opacity transition
 * - Preloads the next clip PRELOAD_AHEAD_SECONDS before current ends
 * - Fires callbacks so HeroOverlay can sync text phases
 * - Respects prefers-reduced-motion: shows poster frame instead
 */

import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from "react";
import {
  HERO_VIDEOS,
  PRELOAD_AHEAD_SECONDS,
  CROSSFADE_MS,
} from "./heroVideoConfig";

export interface VideoSequenceHandle {
  getCurrentVideoIndex: () => number;
  getCurrentProgress: () => number; // 0-1 within the current clip
  getOverallProgress: () => number; // 0-1 across all 4 clips
}

interface VideoSequenceProps {
  onPhaseChange?: (videoIndex: number) => void;
  onSequenceComplete?: () => void;
  onOverallProgress?: (progress: number) => void;
  reducedMotion?: boolean;
}

const VideoSequence = forwardRef<VideoSequenceHandle, VideoSequenceProps>(
  function VideoSequence(
    { onPhaseChange, onSequenceComplete, onOverallProgress, reducedMotion },
    ref
  ) {
    const videoARef = useRef<HTMLVideoElement>(null);
    const videoBRef = useRef<HTMLVideoElement>(null);

    // Which slot is "active": "a" | "b"
    const activeSlot = useRef<"a" | "b">("a");
    const currentIndex = useRef(0);
    const isTransitioning = useRef(false);
    const hasCompleted = useRef(false);
    const preloadTriggered = useRef(false);
    const rafId = useRef<number>(0);

    // Track overall cumulative progress
    const clipDurations = useRef<number[]>([]);
    const totalDuration = useRef(0);
    const elapsedBeforeCurrent = useRef(0);

    const getActive = useCallback(
      () => (activeSlot.current === "a" ? videoARef.current : videoBRef.current),
      []
    );
    const getStandby = useCallback(
      () => (activeSlot.current === "a" ? videoBRef.current : videoARef.current),
      []
    );

    useImperativeHandle(ref, () => ({
      getCurrentVideoIndex: () => currentIndex.current,
      getCurrentProgress: () => {
        const v = getActive();
        if (!v || !v.duration || isNaN(v.duration)) return 0;
        return v.currentTime / v.duration;
      },
      getOverallProgress: () => {
        const v = getActive();
        if (!v || !v.duration || isNaN(v.duration)) return 0;
        const elapsed = elapsedBeforeCurrent.current + v.currentTime;
        const total = totalDuration.current || 1;
        return Math.min(elapsed / total, 1);
      },
    }));

    // Crossfade to next clip
    const advanceToNext = useCallback(() => {
      if (hasCompleted.current || isTransitioning.current) return;
      const nextIndex = currentIndex.current + 1;

      if (nextIndex >= HERO_VIDEOS.length) {
        hasCompleted.current = true;
        onSequenceComplete?.();
        return;
      }

      isTransitioning.current = true;

      const active = getActive();
      const standby = getStandby();

      // Record duration of current clip
      if (active && !isNaN(active.duration)) {
        clipDurations.current[currentIndex.current] = active.duration;
        elapsedBeforeCurrent.current += active.duration;
        // Recalculate total
        totalDuration.current = clipDurations.current.reduce(
          (s, d) => s + d,
          0
        );
      }

      currentIndex.current = nextIndex;
      preloadTriggered.current = false;

      // Standby should already be loaded (preloaded ahead of time)
      if (standby) {
        standby.style.opacity = "0";
        standby.style.transition = "none";

        // Apply the next clip's color grading filter
        const nextFilter = HERO_VIDEOS[nextIndex]?.cssFilter ?? "brightness(0.9)";
        standby.style.filter = nextFilter;

        // Ensure it's playing from start
        standby.currentTime = 0;
        const playPromise = standby.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }

        // Cross-fade: fade in standby, fade out active
        requestAnimationFrame(() => {
          standby.style.transition = `opacity ${CROSSFADE_MS}ms ease`;
          standby.style.opacity = "1";
          if (active) {
            active.style.transition = `opacity ${CROSSFADE_MS}ms ease`;
            active.style.opacity = "0";
          }

          setTimeout(() => {
            // After fade, pause & reset the now-inactive slot
            if (active) {
              active.pause();
              active.currentTime = 0;
            }
            activeSlot.current = activeSlot.current === "a" ? "b" : "a";
            isTransitioning.current = false;
            onPhaseChange?.(nextIndex);
          }, CROSSFADE_MS + 50);
        });
      }
    }, [getActive, getStandby, onPhaseChange, onSequenceComplete]);

    // Preload the upcoming clip into the standby slot
    const preloadNext = useCallback(
      (nextIndex: number) => {
        if (nextIndex >= HERO_VIDEOS.length) return;
        const standby = getStandby();
        if (!standby) return;
        const cfg = HERO_VIDEOS[nextIndex];
        if (standby.dataset.loadedSrc !== cfg.src) {
          standby.src = cfg.src;
          standby.dataset.loadedSrc = cfg.src;
          standby.load();
        }
      },
      [getStandby]
    );

    // RAF-based progress loop
    const tick = useCallback(() => {
      const v = getActive();
      if (v && !isNaN(v.duration) && v.duration > 0) {
        const remaining = v.duration - v.currentTime;

        // Preload next when PRELOAD_AHEAD_SECONDS before end
        if (!preloadTriggered.current && remaining <= PRELOAD_AHEAD_SECONDS) {
          const nextIdx = currentIndex.current + 1;
          preloadNext(nextIdx);
          preloadTriggered.current = true;
        }

        // Trigger advance slightly before ended to avoid black frame
        if (!isTransitioning.current && remaining <= 0.15) {
          advanceToNext();
        }

        // Emit overall progress
        if (onOverallProgress) {
          const elapsed = elapsedBeforeCurrent.current + v.currentTime;
          const total = totalDuration.current || 1;
          onOverallProgress(Math.min(elapsed / total, 1));
        }
      }

      rafId.current = requestAnimationFrame(tick);
    }, [getActive, preloadNext, advanceToNext, onOverallProgress]);

    useEffect(() => {
      if (reducedMotion) return;

      const vA = videoARef.current;
      const vB = videoBRef.current;
      if (!vA || !vB) return;

      // Initial setup
      const cfg0 = HERO_VIDEOS[0];
      vA.src = cfg0.src;
      vA.dataset.loadedSrc = cfg0.src;
      vA.style.opacity = "1";
      vB.style.opacity = "0";

      vA.load();

      const startPlay = () => {
        const p = vA.play();
        if (p !== undefined) p.catch(() => {});
        onPhaseChange?.(0);

        // Estimate total duration from config for initial overall progress calc
        const approxTotal = HERO_VIDEOS.reduce(
          (s, c) => s + c.approxDuration,
          0
        );
        totalDuration.current = approxTotal;

        rafId.current = requestAnimationFrame(tick);
      };

      vA.addEventListener("canplay", startPlay, { once: true });

      return () => {
        cancelAnimationFrame(rafId.current);
        vA.removeEventListener("canplay", startPlay);
        vA.pause();
        vB.pause();
      };
    }, [reducedMotion, tick, onPhaseChange]);

    if (reducedMotion) {
      // Static poster fallback — no video
      return (
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/videos/hero/poster.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.85) contrast(1.05)" }}
          />
        </div>
      );
    }

    // Shared video element styles
    const videoStyle: React.CSSProperties = {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      willChange: "opacity",
    };

    const getFilter = (index: number) =>
      HERO_VIDEOS[index]?.cssFilter ?? "brightness(0.9)";

    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#07090e]">
        {/* Poster image shown immediately, underneath video elements */}
        <img
          src="/videos/hero/poster.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.8)", zIndex: 0 }}
        />

        {/* Video Slot A */}
        <video
          ref={videoARef}
          muted
          playsInline
          preload="auto"
          poster="/videos/hero/poster.jpg"
          style={{
            ...videoStyle,
            filter: getFilter(0),
            zIndex: 1,
          }}
          aria-hidden="true"
        />

        {/* Video Slot B */}
        <video
          ref={videoBRef}
          muted
          playsInline
          preload="none"
          style={{
            ...videoStyle,
            filter: getFilter(1),
            opacity: 0,
            zIndex: 2,
          }}
          aria-hidden="true"
        />
      </div>
    );
  }
);

export default VideoSequence;
