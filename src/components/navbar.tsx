"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAV, NavSection, NavItem } from "@/data/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Share2,
  Eye,
  Search,
  Users,
  Target,
  BarChart3,
  Zap,
  Globe,
  Code2,
  Bot,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  Briefcase,
  Building2,
  Workflow,
  Smartphone,
  Palette,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDD, setActiveDD] = useState<string | null>(null);
  const [mobileSectionOpen, setMobileSectionOpen] = useState<Record<string, boolean>>({});
  const headerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDD(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Handle escape key to close dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDD(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDD(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDD(null);
    }, 150);
  };

  const toggleMobileSection = (title: string) => {
    setMobileSectionOpen((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const getIcon = (title: string) => {
    const cls = "w-4 h-4";
    const t = title.toLowerCase();
    if (t.includes("mailflow") || t.includes("email") || t.includes("mail")) {
      return <Mail className={cls} style={{ color: "#818cf8" }} />;
    }
    if (t.includes("prospect") || t.includes("lead")) {
      return <Target className={cls} style={{ color: "#06b6d4" }} />;
    }
    if (t.includes("omnira") || t.includes("social")) {
      return <Share2 className={cls} style={{ color: "#10b981" }} />;
    }
    if (t.includes("unveil") || t.includes("geo")) {
      return <Eye className={cls} style={{ color: "#f59e0b" }} />;
    }
    if (t.includes("veyrix") || t.includes("spider") || t.includes("crawler")) {
      return <Search className={cls} style={{ color: "#38bdf8" }} />;
    }
    if (t.includes("seo") || t.includes("search")) {
      return <Search className={cls} style={{ color: "#22d3ee" }} />;
    }
    if (t.includes("hrms") || t.includes("workforce") || t.includes("people")) {
      return <Users className={cls} style={{ color: "#a78bfa" }} />;
    }
    if (t.includes("crm") || t.includes("pipeline") || t.includes("target")) {
      return <Target className={cls} style={{ color: "#f43f5e" }} />;
    }
    if (t.includes("analytics") || t.includes("data")) {
      return <BarChart3 className={cls} style={{ color: "#a78bfa" }} />;
    }
    if (t.includes("automation") || t.includes("workflow")) {
      return <Zap className={cls} style={{ color: "#fbbf24" }} />;
    }
    if (t.includes("mobile") || t.includes("app")) {
      return <Smartphone className={cls} style={{ color: "#38bdf8" }} />;
    }
    if (t.includes("3d") || t.includes("gsap") || t.includes("design") || t.includes("ui/ux")) {
      return <Palette className={cls} style={{ color: "#ec4899" }} />;
    }
    if (t.includes("web") || t.includes("platform")) {
      return <Globe className={cls} style={{ color: "#38bdf8" }} />;
    }
    if (t.includes("software") || t.includes("engineering") || t.includes("api")) {
      return <Code2 className={cls} style={{ color: "#60a5fa" }} />;
    }
    if (t.includes("agentic") || t.includes("ai") || t.includes("swarm") || t.includes("multi-agent")) {
      return <Bot className={cls} style={{ color: "#818cf8" }} />;
    }
    if (t.includes("work") || t.includes("case") || t.includes("project")) {
      return <Briefcase className={cls} style={{ color: "#34d399" }} />;
    }
    if (t.includes("company") || t.includes("about") || t.includes("leadership") || t.includes("career")) {
      return <Building2 className={cls} style={{ color: "#818cf8" }} />;
    }
    return <Sparkles className={cls} style={{ color: "#818cf8" }} />;
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(5, 7, 12, 0.95)"
            : "rgba(5, 7, 12, 0.82)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.08)"
            : "1px solid rgba(255, 255, 255, 0.05)",
          boxShadow: scrolled ? "0 10px 30px -10px rgba(0,0,0,0.8)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">

            {/* Ashmyra Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none rounded-xl"
              aria-label="Ashmyra Technologies Home"
            >
              <div
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden p-1 transition-transform duration-300 group-hover:scale-105 shrink-0"
                style={{
                  background: "rgba(99, 102, 241, 0.12)",
                  border: "1px solid rgba(99, 102, 241, 0.35)",
                }}
              >
                <Image
                  src="/brand/ashmyra-icon.png"
                  alt="Ashmyra"
                  width={40}
                  height={40}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-[17px] sm:text-[19px] font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  ASHMYRA
                </span>
                <span className="text-[8.5px] tracking-[0.24em] text-neutral-400 uppercase font-mono mt-0.5">
                  Technologies
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {MAIN_NAV.map((nav) => {
                const hasItems = nav.items && nav.items.length > 0;
                const open = activeDD === nav.title;
                const isSectionActive =
                  nav.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(nav.href);

                if (hasItems) {
                  return (
                    <div
                      key={nav.title}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(nav.title)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        onClick={() => setActiveDD(open ? null : nav.title)}
                        className={`flex items-center gap-1.5 px-3.5 py-2 text-[13.5px] font-medium rounded-xl transition-all duration-200 ${
                          open || isSectionActive
                            ? "text-white bg-white/[0.08]"
                            : "text-neutral-300 hover:text-white hover:bg-white/[0.04]"
                        }`}
                        aria-expanded={open}
                      >
                        <span>{nav.title}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${
                            open ? "rotate-180 text-indigo-400" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown / Mega Menu */}
                      {open && (
                        <div
                          className={`absolute top-full pt-2.5 z-50 animate-fadeIn ${
                            nav.title === "Products"
                              ? "left-1/2 -translate-x-1/2 w-[860px]"
                              : nav.title === "Services"
                              ? "left-1/2 -translate-x-1/2 w-[620px]"
                              : nav.title === "Solutions" || nav.title === "AI & Automation"
                              ? "left-1/2 -translate-x-1/2 w-[520px]"
                              : "right-0 w-[380px]"
                          }`}
                        >
                          {nav.title === "Products" ? (
                            /* World-Class Products Mega-Menu */
                            <div
                              className="rounded-2xl p-6 shadow-2xl overflow-hidden relative"
                              style={{
                                background: "rgba(7, 9, 16, 0.98)",
                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                backdropFilter: "blur(30px)",
                                boxShadow: "0 24px 70px -15px rgba(0,0,0,0.95), 0 0 40px -10px rgba(99,102,241,0.15)",
                              }}
                            >
                              {/* Top Bar */}
                              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                                <div className="flex items-center gap-2.5">
                                  <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                  </span>
                                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300 font-semibold">
                                    Flagship Product Suite <span className="text-neutral-500">•</span> 5 Live Production Platforms
                                  </span>
                                </div>
                                <Link
                                  href="/demos"
                                  onClick={() => setActiveDD(null)}
                                  className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors font-semibold group/all"
                                >
                                  <span>Explore All Live Sandboxes</span>
                                  <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-0.5 transition-transform" />
                                </Link>
                              </div>

                              {/* Two-Column Layout */}
                              <div className="grid grid-cols-12 gap-5">
                                {/* Left 7 Cols: Products Grid */}
                                <div className="col-span-7 grid grid-cols-2 gap-2">
                                  {nav.items?.map((item) => (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      onClick={() => setActiveDD(null)}
                                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all group/item"
                                    >
                                      <div
                                        className="p-2.5 rounded-lg mt-0.5 transition-all group-hover/item:scale-105 group-hover/item:border-cyan-500/40 shrink-0"
                                        style={{
                                          background: "rgba(255,255,255,0.04)",
                                          border: "1px solid rgba(255,255,255,0.08)",
                                        }}
                                      >
                                        {getIcon(item.title)}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-1">
                                          <span className="text-[13px] font-semibold text-neutral-200 group-hover/item:text-white transition-colors truncate">
                                            {item.title}
                                          </span>
                                          {item.demoUrl ? (
                                            <span className="text-[9px] font-mono text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 px-1.5 py-0.5 rounded font-medium shrink-0">
                                              Live ↗
                                            </span>
                                          ) : (
                                            <span className="text-[9px] font-mono text-neutral-400 bg-white/[0.04] border border-white/[0.08] px-1.5 py-0.5 rounded shrink-0">
                                              Core
                                            </span>
                                          )}
                                        </div>
                                        {item.description && (
                                          <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1 leading-snug group-hover/item:text-neutral-300 transition-colors">
                                            {item.description}
                                          </p>
                                        )}
                                      </div>
                                    </Link>
                                  ))}
                                </div>

                                {/* Right 5 Cols: Live Sandbox Spotlight */}
                                <div className="col-span-5 flex flex-col">
                                  <div
                                    className="h-full rounded-xl p-4.5 flex flex-col justify-between relative overflow-hidden group/spotlight"
                                    style={{
                                      background: "linear-gradient(145deg, rgba(14, 21, 37, 0.95), rgba(7, 10, 20, 0.98))",
                                      border: "1px solid rgba(6, 182, 212, 0.25)",
                                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 10px 30px -10px rgba(6,182,212,0.2)",
                                    }}
                                  >
                                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />

                                    <div>
                                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 font-medium mb-3">
                                        <Sparkles className="w-3 h-3 text-cyan-400" />
                                        <span>LIVE PRODUCTION SANDBOX</span>
                                      </div>
                                      <h4 className="text-white text-[14px] font-semibold tracking-tight leading-snug">
                                        Experience Our Production AI Platforms in Real-Time
                                      </h4>
                                      <p className="text-neutral-300 text-[11px] leading-relaxed mt-1.5">
                                        Test autonomous email warmups, cross-platform social bots, lead scrapers, and visual verification right in your browser.
                                      </p>
                                    </div>

                                    <div className="mt-4 pt-3 border-t border-white/[0.08]">
                                      <Link
                                        href="/demos"
                                        onClick={() => setActiveDD(null)}
                                        className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-[12px] font-semibold transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35"
                                      >
                                        <span>Launch Interactive Demos</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                      </Link>
                                      <div className="flex items-center justify-center gap-3 text-[10px] font-mono text-neutral-400 mt-2.5">
                                        <span>✓ Zero Signup</span>
                                        <span>•</span>
                                        <span>✓ Live Sandbox</span>
                                        <span>•</span>
                                        <span>✓ Real Engine</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Mega Menu Footer Banner */}
                              <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 px-1">
                                <span className="flex items-center gap-1.5">
                                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                                  <span>All platforms deployable into Dedicated VPC, AWS GovCloud, or On-Premise Air-Gapped Clusters.</span>
                                </span>
                                <Link
                                  href="/contact"
                                  onClick={() => setActiveDD(null)}
                                  className="text-white hover:text-cyan-300 font-medium underline underline-offset-4 transition-colors shrink-0 ml-3"
                                >
                                  Schedule Architecture Discovery →
                                </Link>
                              </div>
                            </div>
                          ) : (
                            /* Standard Dropdown for other sections */
                            <div
                              className="rounded-2xl p-5 shadow-2xl"
                              style={{
                                background: "rgba(7, 9, 16, 0.98)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(30px)",
                                boxShadow: "0 24px 60px -15px rgba(0,0,0,0.9)",
                              }}
                            >
                              {/* Group Header */}
                              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.07] px-1">
                                <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                                  {nav.title === "Solutions"
                                    ? "Enterprise Business Solutions"
                                    : nav.title === "AI & Automation"
                                    ? "Autonomous Intelligence & Swarms"
                                    : nav.title === "Services"
                                    ? "Core Engineering Capabilities"
                                    : nav.title === "Our Work"
                                    ? "Production Systems & Proven Work"
                                    : "Company & Leadership"}
                                </span>
                                <Link
                                  href={nav.href}
                                  onClick={() => setActiveDD(null)}
                                  className="text-[11px] font-mono text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                                >
                                  <span>Overview</span>
                                  <ArrowRight className="w-3 h-3" />
                                </Link>
                              </div>

                              {/* Dropdown Items Grid */}
                              <div
                                className={`grid gap-1.5 ${
                                  nav.title === "Services"
                                    ? "grid-cols-2"
                                    : "grid-cols-1"
                                }`}
                              >
                                {nav.items?.map((item) => (
                                  <Link
                                    key={item.title}
                                    href={item.href}
                                    onClick={() => setActiveDD(null)}
                                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.05] transition-all group/item"
                                  >
                                    <div
                                      className="p-2 rounded-lg mt-0.5 transition-transform group-hover/item:scale-105 shrink-0"
                                      style={{
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.07)",
                                      }}
                                    >
                                      {getIcon(item.title)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between gap-1">
                                        <span className="text-[13px] font-semibold text-neutral-200 group-hover/item:text-white transition-colors truncate">
                                          {item.title}
                                        </span>
                                        {item.demoUrl && (
                                          <span className="text-[9px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-1.5 py-0.2 rounded shrink-0">
                                            Live Demo ↗
                                          </span>
                                        )}
                                      </div>
                                      {item.description && (
                                        <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1 leading-snug">
                                          {item.description}
                                        </p>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={nav.title}
                    href={nav.href}
                    onClick={() => setActiveDD(null)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-[13.5px] font-medium rounded-xl transition-all duration-200 ${
                      isSectionActive
                        ? "text-white bg-white/[0.08]"
                        : "text-neutral-300 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <span>{nav.title}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right: CTA & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #818cf8)",
                  boxShadow: "0 0 0 1px rgba(99,102,241,0.4), 0 4px 16px -2px rgba(99,102,241,0.4)",
                }}
              >
                <span>Let&apos;s Build Something</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl text-neutral-300 hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-16 z-40 lg:hidden overflow-y-auto"
          style={{
            background: "rgba(5, 7, 12, 0.98)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          <div className="px-5 py-6 space-y-3 pb-24">
            {MAIN_NAV.map((nav) => {
              const hasItems = nav.items && nav.items.length > 0;
              const isOpen = !!mobileSectionOpen[nav.title];

              if (hasItems) {
                return (
                  <div
                    key={nav.title}
                    className="rounded-xl border border-white/[0.08] overflow-hidden bg-white/[0.02]"
                  >
                    <button
                      onClick={() => toggleMobileSection(nav.title)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white transition-colors"
                    >
                      <span>{nav.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-indigo-400" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-3 pb-3 space-y-1 border-t border-white/[0.05] pt-2">
                        {nav.items?.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/[0.05] text-xs text-neutral-300 hover:text-white"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              {getIcon(item.title)}
                              <span className="font-medium truncate">{item.title}</span>
                            </div>
                            {item.demoUrl ? (
                              <span className="text-[9px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                                Demo ↗
                              </span>
                            ) : (
                              <ArrowRight className="w-3 h-3 text-neutral-500 shrink-0" />
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={nav.title}
                  href={nav.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold text-neutral-200 hover:text-white bg-white/[0.02] border border-white/[0.08]"
                >
                  <span>{nav.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #818cf8)",
                }}
              >
                <span>Let&apos;s Build Something</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
