"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "obsidian" | "gold" | "copper" | "platinum";

export interface ThemeConfig {
  id: Theme;
  name: string;
  badge: string;
  accentColor: string;
  bgColor: string;
  textColor: string;
  icon: string;
}

export const THEMES: ThemeConfig[] = [
  {
    id: "gold",
    name: "Champagne Gold",
    badge: "Warm Luxury",
    accentColor: "#C5A059",
    bgColor: "#FAF7F2",
    textColor: "#19140E",
    icon: "🏛️",
  },
  {
    id: "obsidian",
    name: "Obsidian Void",
    badge: "Cyber Dark",
    accentColor: "#22D3EE",
    bgColor: "#050608",
    textColor: "#FFFFFF",
    icon: "🌌",
  },
  {
    id: "copper",
    name: "Brushed Copper",
    badge: "Earthy Tech",
    accentColor: "#C86D51",
    bgColor: "#F7F3EE",
    textColor: "#221A15",
    icon: "🏺",
  },
  {
    id: "platinum",
    name: "Platinum Titanium",
    badge: "Modern Light",
    accentColor: "#2563EB",
    bgColor: "#FAFAFC",
    textColor: "#0F172A",
    icon: "🪞",
  },
];

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "gold",
  setTheme: () => {},
  themes: THEMES,
});

export function syncThemeCookie(newTheme: Theme) {
  if (typeof document === "undefined") return;
  try {
    const isAshmyraDomain =
      typeof window !== "undefined" &&
      window.location.hostname.endsWith("ashmyra.com");
    const domainAttr = isAshmyraDomain ? "; domain=.ashmyra.com" : "";
    document.cookie = `ashmyra-theme=${encodeURIComponent(
      newTheme
    )}${domainAttr}; path=/; max-age=31536000; SameSite=Lax`;
  } catch {
    // Ignore cross-origin / private mode cookie write failures
  }
}

export function readSharedTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const validThemes: Theme[] = ["gold", "obsidian", "copper", "platinum"];

  try {
    // 1. Check URL query override (?theme=...)
    const params = new URLSearchParams(window.location.search);
    const queryTheme = params.get("theme") as Theme | null;
    if (queryTheme && validThemes.includes(queryTheme)) {
      return queryTheme;
    }

    // 2. Check localStorage
    const saved = localStorage.getItem("ashmyra-theme") as Theme | null;
    if (saved && validThemes.includes(saved)) {
      return saved;
    }

    // 3. Check shared root cookie (set across .ashmyra.com)
    const match = document.cookie.match(/(?:^|;\s*)ashmyra-theme=([^;]+)/);
    if (match && match[1]) {
      const cookieTheme = decodeURIComponent(match[1]) as Theme;
      if (validThemes.includes(cookieTheme)) {
        return cookieTheme;
      }
    }
  } catch {
    // Fall back
  }
  return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("gold");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const resolved = readSharedTheme() || "gold";
    setThemeState(resolved);
    document.documentElement.setAttribute("data-theme", resolved);
    localStorage.setItem("ashmyra-theme", resolved);
    syncThemeCookie(resolved);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("ashmyra-theme", newTheme);
      syncThemeCookie(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
