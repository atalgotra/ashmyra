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
      ref={toastRef}
      role="dialog"
      aria-label="Theme Customization Feature Discovery"
      aria-live="polite"
      className="fixed bottom-5 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[410px] select-none"
    >
      <div
        className="relative rounded-3xl p-5 sm:p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300"
        style={{
          backgroundColor: "var(--bg-card)",
          color: "var(--text)",
          border: "1px solid var(--border-strong)",
          boxShadow:
            "0 24px 65px -15px rgba(0, 0, 0, 0.28), 0 0 40px -10px var(--border-glow)",
        }}
      >
        {/* Top Glowing Laser Hairline */}
        <div
          className="absolute top-0 inset-x-8 h-[2px] rounded-full opacity-80 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--accent), var(--accent-light), transparent)",
          }}
        />

        {/* Ambient Corner Glow */}
        <div
          className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "var(--accent)" }}
        />

        {/* Header Row: Badge & Dismiss Icon */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold"
            style={{
              backgroundColor: "var(--theme-pill-bg)",
              border: "1px solid var(--theme-pill-border)",
              color: "var(--accent)",
            }}
          >
            <Sparkles className="w-3 h-3 animate-pulse" />
            <span>Interactive Experience</span>
          </div>

          <button
            onClick={handleDismiss}
            aria-label="Close feature discovery notification"
            className="p-1 rounded-lg text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
            style={{ color: "var(--text-muted)" }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Headline & Body Text */}
        <h3
          className="text-base sm:text-lg font-bold tracking-tight mb-1"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "var(--text)",
          }}
        >
          Tailor Your Visual Atmosphere
        </h3>
        <p
          className="text-xs sm:text-[13px] leading-relaxed mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          Ashmyra is engineered with a live aesthetic engine. Tap any palette below to transform the entire website instantly:
        </p>

        {/* 4 Live Theme Swatches (2x2 Grid) */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {THEMES.map((t) => {
            const isSelected = t.id === theme;

            return (
              <button
                key={t.id}
                type="button"
                onClick={() => handleSelectTheme(t.id)}
                className="group relative flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  backgroundColor: isSelected
                    ? "var(--theme-pill-bg)"
                    : "transparent",
                  borderColor: isSelected
                    ? "var(--accent)"
                    : "var(--border)",
                  boxShadow: isSelected
                    ? "0 0 16px -2px var(--border-glow)"
                    : "none",
                }}
              >
                {/* Theme Color Indicator Swatch */}
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs shadow-sm"
                  style={{
                    backgroundColor: t.bgColor,
                    border: `1px solid ${t.accentColor}55`,
                  }}
                >
                  <span>{t.icon}</span>
                </div>

                <div className="min-w-0 flex-1">
                  <div
                    className="text-[12px] font-semibold truncate leading-tight"
                    style={{
                      color: isSelected ? "var(--accent)" : "var(--text)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-[9.5px] font-mono truncate"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {t.badge}
                  </div>
                </div>

                {isSelected && (
                  <Check
                    className="w-3.5 h-3.5 shrink-0"
                    style={{ color: "var(--accent)" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Micro-hint & Footer Actions */}
        <div
          className="pt-3 flex items-center justify-between gap-3 border-t text-[11px]"
          style={{ borderColor: "var(--border)" }}
        >
          <span
            className="flex items-center gap-1.5 font-mono text-[10.5px] truncate"
            style={{ color: "var(--text-muted)" }}
          >
            <Palette className="w-3 h-3 shrink-0" style={{ color: "var(--accent)" }} />
            <span>Switch anytime in navbar</span>
          </span>

          <button
            type="button"
            onClick={handleDismiss}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:scale-[1.03] active:scale-[0.97] shrink-0 shadow-sm"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-light))",
              color: "#FFFFFF",
            }}
          >
            <span>{hasInteracted ? "Apply & Continue" : "Got It"}</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </aside>
  );
}
