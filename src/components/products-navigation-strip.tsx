"use client";

import React, { useState, useEffect } from "react";
import { DEMO_PRODUCTS } from "@/data/demos";
import {
  Mail,
  Target,
  Share2,
  Eye,
  Search,
  Sparkles,
} from "lucide-react";

export function ProductsNavigationStrip() {
  const [activeSection, setActiveSection] = useState<string>("mailflow");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const prod of DEMO_PRODUCTS) {
        const el = document.getElementById(prod.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(prod.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getProductIcon = (id: string, cls = "w-4 h-4") => {
    switch (id) {
      case "mailflow":
        return <Mail className={cls} style={{ color: "#818cf8" }} />;
      case "prospectiq":
        return <Target className={cls} style={{ color: "#06b6d4" }} />;
      case "omnira":
        return <Share2 className={cls} style={{ color: "#10b981" }} />;
      case "unveil":
        return <Eye className={cls} style={{ color: "#f59e0b" }} />;
      case "veyrix":
        return <Search className={cls} style={{ color: "#38bdf8" }} />;
      default:
        return <Sparkles className={cls} style={{ color: "#818cf8" }} />;
    }
  };

  const scrollToProduct = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; // offset for sticky navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-16 sm:top-[72px] z-30 bg-[#07090e]/95 backdrop-blur-md border-y border-white/[0.08] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 overflow-x-auto scrollbar-none gap-3">
          <div className="flex items-center gap-2 shrink-0 pr-3 border-r border-white/[0.08] hidden sm:flex">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Live Directory
            </span>
          </div>

          {/* 5 Product Jump Links */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 mx-auto sm:mx-0">
            {DEMO_PRODUCTS.map((prod) => {
              const isActive = activeSection === prod.id;
              return (
                <button
                  key={prod.id}
                  onClick={() => scrollToProduct(prod.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 shrink-0 border ${
                    isActive
                      ? "bg-white/[0.08] text-white border-white/[0.2] shadow-sm"
                      : "bg-transparent text-neutral-400 hover:text-white border-transparent hover:bg-white/[0.03]"
                  }`}
                  aria-label={`Scroll to ${prod.name}`}
                >
                  <div className="w-4 h-4 flex items-center justify-center shrink-0">
                    {getProductIcon(prod.id)}
                  </div>
                  <span>{prod.name}</span>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1 py-0.2 rounded font-medium">
                    Live
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Action Link */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="#solutions"
              className="text-xs font-mono text-neutral-400 hover:text-cyan-300 transition-colors flex items-center gap-1 font-medium"
            >
              <span>Problem Architecture</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
