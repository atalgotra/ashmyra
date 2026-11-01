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
    id: "obsidian",
    name: "Obsidian Void",
    badge: "Cyber Dark",
    accentColor: "#22D3EE",
    bgColor: "#050608",
    textColor: "#FFFFFF",
    icon: "🌌",
  },
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
  theme: "obsidian",
  setTheme: () => {},
  themes: THEMES,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("obsidian");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read saved theme from localStorage or document attribute
    const saved = localStorage.getItem("ashmyra-theme") as Theme | null;
    if (saved && (saved === "obsidian" || saved === "gold" || saved === "copper" || saved === "platinum")) {
      setThemeState(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "obsidian");
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("ashmyra-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
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
