"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAV } from "@/data/navigation";
import gsap from "gsap";
import {
  Menu, X, ChevronDown, Sparkles, ArrowRight,
  Cpu, Search, Users, Zap, BarChart3, Target, Globe
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeDD, setActiveDD]       = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDD(null);
  }, [pathname]);

  // Navbar stays permanently visible with full opacity at all times
  // No GSAP opacity animation to prevent React/HMR disappearing header bug

  const getIcon = (title: string) => {
    const cls = "w-4 h-4";
    switch (title) {
      case "Ashmyra AI":         return <Cpu       className={cls} style={{ color: "#818cf8" }} />;
      case "Ashmyra SEO":        return <Search    className={cls} style={{ color: "#22d3ee" }} />;
      case "Ashmyra HRMS":       return <Users     className={cls} style={{ color: "#10b981" }} />;
      case "Ashmyra Automation": return <Zap       className={cls} style={{ color: "#fbbf24" }} />;
      case "Ashmyra Analytics":  return <BarChart3 className={cls} style={{ color: "#a78bfa" }} />;
      case "Ashmyra CRM":        return <Target    className={cls} style={{ color: "#f43f5e" }} />;
      case "Ashmyra Web":        return <Globe     className={cls} style={{ color: "#38bdf8" }} />;
      default:                   return <Sparkles  className={cls} style={{ color: "#818cf8" }} />;
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(5, 6, 8, 0.95)"
            : "rgba(5, 6, 8, 0.88)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.06)",
          boxShadow: scrolled ? "0 8px 32px -8px rgba(0,0,0,0.7)" : "0 4px 20px -4px rgba(0,0,0,0.4)",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16 sm:h-[70px]">

            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl"
            >
              <div
                className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden p-1 transition-all duration-300 group-hover:scale-105"
                style={{
                  background: "rgba(99,102,241,0.15)",
                  border: "1px solid rgba(99,102,241,0.4)",
                  boxShadow: "0 0 20px rgba(99,102,241,0.25)",
                }}
              >
                <Image
                  src="/brand/ashmyra-icon.png"
                  alt="Ashmyra"
                  width={44}
                  height={44}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[18px] sm:text-[20px] font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  ASHMYRA
                </span>
                <span className="text-[9px] tracking-[0.22em] text-indigo-400 uppercase font-mono mt-0.5">
                  Technologies
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {MAIN_NAV.map((nav) => {
                if (nav.items) {
                  const open = activeDD === nav.title;
                  return (
                    <div
                      key={nav.title}
                      className="relative"
                      onMouseEnter={() => setActiveDD(nav.title)}
                      onMouseLeave={() => setActiveDD(null)}
                    >
                      <button
                        onClick={() => setActiveDD(open ? null : nav.title)}
                        className={`flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium rounded-xl transition-all duration-200 ${
                          open ? "text-white bg-white/[0.1]" : "text-neutral-200 hover:text-white hover:bg-white/[0.06]"
                        }`}
                        aria-expanded={open}
                      >
                        {nav.title}
                        <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${open ? "rotate-180 text-indigo-400" : ""}`} />
                      </button>

                      {open && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[560px] z-50">
                          <div
                            className="rounded-2xl p-4 shadow-2xl"
                            style={{
                              background: "#080a12",
                              border: "1px solid rgba(255,255,255,0.12)",
                              backdropFilter: "blur(30px)",
                              boxShadow: "0 24px 64px -12px rgba(0,0,0,0.95), 0 0 0 1px rgba(99,102,241,0.25)",
                            }}
                          >
                            {nav.featured && (
                              <Link
                                href={nav.featured.href}
                                className="block p-3 rounded-xl mb-3 group/feat transition-all duration-200 hover:scale-[1.01]"
                                style={{
                                  background: "linear-gradient(135deg, rgba(99,102,241,0.18), rgba(139,92,246,0.1))",
                                  border: "1px solid rgba(99,102,241,0.3)",
                                }}
                              >
                                <div className="flex items-center gap-2 mb-0.5">
                                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                                  <span className="text-xs font-semibold text-white">{nav.featured.title}</span>
                                  <span className="ml-auto text-[9px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/25 text-indigo-300 uppercase tracking-wider">Flagship</span>
                                </div>
                                <p className="text-[11px] text-neutral-400">{nav.featured.desc}</p>
                              </Link>
                            )}
                            <div className="grid grid-cols-2 gap-1.5">
                              {nav.items.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.07] transition-all group/item"
                                >
                                  <div
                                    className="p-2 rounded-lg mt-0.5 transition-all group-hover/item:scale-110"
                                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                                  >
                                    {getIcon(item.title)}
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[12px] font-semibold text-neutral-200 group-hover/item:text-white transition-colors">
                                        {item.title}
                                      </span>
                                      {item.badge && (
                                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                    {item.description && (
                                      <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">{item.description}</p>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = pathname === nav.href;
                return (
                  <Link
                    key={nav.title}
                    href={nav.href}
                    className={`px-4 py-2 text-[13px] font-medium rounded-xl transition-all duration-200 ${
                      isActive ? "text-white bg-white/[0.1]" : "text-neutral-200 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {nav.title}
                    {nav.badge && (
                      <span className="ml-1.5 text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 uppercase tracking-wider">
                        {nav.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #818cf8)",
                  boxShadow: "0 0 0 1px rgba(99,102,241,0.5), 0 4px 20px -4px rgba(99,102,241,0.5)",
                }}
              >
                Start a Conversation
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-xl text-neutral-400 hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 flex flex-col pt-[70px]"
          style={{
            background: "rgba(5, 6, 8, 0.97)",
            backdropFilter: "blur(24px)",
          }}
        >
          <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
            {MAIN_NAV.map((nav) => (
              <div key={nav.title}>
                <Link
                  href={nav.href}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-white hover:bg-white/[0.05] transition-colors"
                >
                  {nav.title}
                  {nav.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                      {nav.badge}
                    </span>
                  )}
                </Link>
                {nav.items && (
                  <div className="pl-4 mt-1 space-y-1">
                    {nav.items.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-neutral-500 hover:text-indigo-300 transition-colors rounded-lg"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="px-6 pb-10">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl text-base font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #6366f1, #818cf8)", boxShadow: "0 8px 32px -8px rgba(99,102,241,0.6)" }}
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
