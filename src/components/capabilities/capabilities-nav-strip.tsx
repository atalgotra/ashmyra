"use client";

import React, { useState, useEffect } from "react";
import { Code2, Bot, Search, Globe } from "lucide-react";

interface NavItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "software-saas", name: "Software & SaaS", icon: Code2, accent: "#818cf8" },
  { id: "agentic-ai", name: "Agentic AI", icon: Bot, accent: "#c084fc" },
  { id: "search-geo", name: "Search & GEO", icon: Search, accent: "#38bdf8" },
  { id: "web-digital", name: "Web & Digital Experiences", icon: Globe, accent: "#34d399" },
];

export function CapabilitiesNavStrip() {
  const [activeId, setActiveId] = useState<string>("software-saas");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle initial hash navigation on page load
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      const timer = setTimeout(() => {
        handleScrollTo(hashId);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 130;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <div
      id="capabilities-overview"
      className="sticky top-16 sm:top-[72px] z-40 w-full bg-[#04060a]/90 backdrop-blur-xl border-y border-white/[0.08] shadow-lg shadow-black/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 overflow-x-auto no-scrollbar gap-2 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-max mx-auto sm:mx-0">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white/[0.1] text-white border border-white/[0.18] shadow-md shadow-black/30"
                      : "text-neutral-400 hover:text-white hover:bg-white/[0.04] border border-transparent"
                  }`}
                  style={isActive ? { borderBottomColor: item.accent } : undefined}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? "text-cyan-400" : "text-neutral-500"
                    }`}
                  />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>4 Engineering Disciplines</span>
          </div>
        </div>
      </div>
    </div>
  );
}
