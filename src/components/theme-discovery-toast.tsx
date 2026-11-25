"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme, THEMES, Theme } from "@/components/theme-provider";
import { Sparkles, X, Check, ArrowRight, Palette } from "lucide-react";
import gsap from "gsap";

export function ThemeDiscoveryToast() {
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the visitor has already dismissed this discovery pop-up
    try {
      const seen = localStorage.getItem("ashmyra-theme-discovery-seen");
      if (seen === "true") {
        return;
      }
    } catch {
      // Storage access may be restricted in private/iframe browsing
    }

    // On shorter laptop viewports (< 780px), wait for slight scroll so Hero CTAs stay unobstructed
    if (typeof window !== "undefined" && window.innerHeight < 780) {
      const onScroll = () => {
        if (window.scrollY > 80) {
          setIsVisible(true);
          window.removeEventListener("scroll", onScroll);
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    // Delay appearance by 1.4s so the main hero canvas settles first
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  // GSAP spring entrance animation when toast becomes visible
  useEffect(() => {
    if (!isVisible || !toastRef.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(toastRef.current, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        toastRef.current,
        { opacity: 0, y: 40, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: "back.out(1.4)",
        }
      );
    }, toastRef);

    return () => ctx.revert();
  }, [isVisible]);

  const handleDismiss = () => {
    if (!toastRef.current) {
      setIsVisible(false);
      return;
    }

    try {
      localStorage.setItem("ashmyra-theme-discovery-seen", "true");
    } catch {
      // Ignore storage errors
    }

    gsap.to(toastRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.96,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => setIsVisible(false),
    });
  };

  const handleSelectTheme = (selectedId: Theme) => {
    setTheme(selectedId);
    setHasInteracted(true);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="dialog"
      aria-label="Theme Customization Feature Discovery"
      aria-live="polite"
      className="fixed bottom-3 inset-x-3 md:inset-x-auto md:bottom-3.5 md:left-1/2 md:-translate-x-1/2 z-40 flex justify-center pointer-events-none select-none"
    >
      <div
        ref={toastRef}
        className="pointer-events-auto relative max-w-full rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-2xl backdrop-blur-2xl transition-colors duration-300 flex items-center justify-center gap-2 sm:gap-3"
        style={{
          backgroundColor: "var(--bg-card)",
          color: "var(--text)",
          border: "1px solid var(--border-strong)",
          boxShadow:
            "0 16px 40px -12px rgba(0, 0, 0, 0.25), 0 0 24px -8px var(--border-glow)",
        }}
      >
        {/* Label */}
        <div className="flex items-center gap-1.5 shrink-0 pl-1">
          <Sparkles className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--accent)" }} />
          <span
            className="text-[10.5px] font-mono font-bold uppercase tracking-wider whitespace-nowrap"
            style={{ color: "var(--text)" }}
          >
            Theme
          </span>
        </div>

        {/* 4 Live Theme Chips (Single ultra-compact row) */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {THEMES.map((t) => {
            const isSelected = t.id === theme;

            return (
              <button
                key={t.id}
                type="button"
                onClick={() => handleSelectTheme(t.id)}
                title={`${t.name} (${t.badge})`}
                className="group relative flex items-center gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1 rounded-full border text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shrink-0"
                style={{
                  backgroundColor: isSelected
                    ? "var(--theme-pill-bg)"
                    : "transparent",
                  borderColor: isSelected
                    ? "var(--accent)"
                    : "var(--border)",
                }}
              >
                <span className="text-xs leading-none shrink-0">{t.icon}</span>
                <span
                  className="hidden md:inline text-[11px] font-semibold whitespace-nowrap leading-none"
                  style={{
                    color: isSelected ? "var(--accent)" : "var(--text)",
                  }}
                >
                  {t.name}
                </span>
                {isSelected && (
                  <Check
                    className="hidden sm:inline w-3 h-3 shrink-0"
                    style={{ color: "var(--accent)" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Close theme switcher bar"
          className="p-1 rounded-full transition-colors hover:opacity-80 shrink-0"
          style={{ color: "var(--text-muted)" }}
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
