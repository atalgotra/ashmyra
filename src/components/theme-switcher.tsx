"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme, THEMES, Theme } from "@/components/theme-provider";
import { ChevronDown, Check, Sparkles } from "lucide-react";

export function ThemeSwitcher({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const currentTheme = THEMES.find((t) => t.id === theme) || THEMES[0];

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Pill Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 border focus:outline-none focus:ring-1 focus:ring-indigo-500/50 shadow-sm"
        style={{
          background: "var(--theme-pill-bg, rgba(255, 255, 255, 0.05))",
          borderColor: "var(--theme-pill-border, rgba(255, 255, 255, 0.12))",
          color: "var(--text, #f1f5f9)",
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select website aesthetic theme"
      >
        <span className="text-sm leading-none" role="img" aria-label={currentTheme.name}>
          {currentTheme.icon}
        </span>
        <span
          className="w-2 h-2 rounded-full shadow-sm shrink-0"
          style={{ backgroundColor: currentTheme.accentColor }}
        />
        <span className="hidden xl:inline tracking-tight font-sans text-[12.5px]">
          {currentTheme.name}
        </span>
        <ChevronDown
          className={`w-3 h-3 opacity-60 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Popover Dropdown */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-2 w-64 rounded-2xl p-2 z-50 border shadow-2xl backdrop-blur-2xl animate-fadeIn space-y-1"
          style={{
            backgroundColor: "var(--theme-popover-bg, #0B0E17)",
            borderColor: "var(--theme-popover-border, rgba(255, 255, 255, 0.12))",
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)",
          }}
        >
          <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-neutral-400 flex items-center justify-between border-b border-white/[0.08] mb-1">
            <span>Aesthetic Finish</span>
            <Sparkles className="w-3 h-3 text-cyan-400" />
          </div>

          {THEMES.map((t) => {
            const isSelected = t.id === theme;
            return (
              <button
                key={t.id}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all group ${
                  isSelected
                    ? "bg-white/[0.1] border border-white/[0.15]"
                    : "hover:bg-white/[0.05] border border-transparent"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Swatch circle */}
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs shadow-inner shrink-0 border"
                    style={{
                      background: t.bgColor,
                      borderColor: t.accentColor,
                      color: t.textColor,
                    }}
                  >
                    <span>{t.icon}</span>
                  </div>

                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-white group-hover:text-cyan-200 transition-colors flex items-center gap-1.5">
                      <span className="truncate">{t.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 block">
                      {t.badge}
                    </span>
                  </div>
                </div>

                {isSelected && (
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Compact horizontal row for Mobile Navigation Drawer
export function MobileThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-2 pt-2 border-t border-white/[0.08]">
      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5 px-1">
        <Sparkles className="w-3 h-3 text-cyan-400" />
        <span>Palette Theme</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {THEMES.map((t) => {
          const isSelected = t.id === theme;
          return (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium transition-all ${
                isSelected
                  ? "bg-white/[0.12] border border-white/20 text-white shadow-sm"
                  : "bg-white/[0.03] border border-white/[0.06] text-neutral-300 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              <span className="text-sm leading-none">{t.icon}</span>
              <div className="text-left min-w-0">
                <div className="text-[11px] font-semibold truncate leading-tight">{t.name}</div>
                <div className="text-[9px] font-mono opacity-60 leading-none mt-0.5">{t.badge}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
