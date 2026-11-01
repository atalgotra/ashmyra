"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { MAIN_NAV, NavSection, NavItem } from "@/data/navigation";
import { ThemeSwitcher, MobileThemeSelector } from "@/components/theme-switcher";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  Mail,
  Target,
  Share2,
  Eye,
  Search,
  TrendingUp,
  Zap,
  Users,
  BarChart3,
  Layers,
  Bot,
  Cpu,
  Database,
  Sparkles,
  Workflow,
  ShieldCheck,
  Rocket,
  Code2,
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Server,
  RefreshCw,
  Briefcase,
  FileText,
  Terminal,
  Building2,
  Compass,
  MessageSquare,
  BookOpen,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDD, setActiveDD] = useState<string | null>(null);
  const [mobileSectionOpen, setMobileSectionOpen] = useState<Record<string, boolean>>({});
  const headerRef = useRef<HTMLElement>(null);
  const menuCardRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll listener for subtle header elevation
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDD(null);
  }, [pathname]);

  // Lock body scroll on mobile drawer
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

  // GSAP animation for mega-menu entrance & exit
  useEffect(() => {
    if (!menuCardRef.current || !activeDD) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(menuCardRef.current, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        menuCardRef.current,
        { opacity: 0, y: -6 },
        { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" }
      );
      const items = menuCardRef.current?.querySelectorAll(".mega-menu-item");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 4 },
          { opacity: 1, y: 0, duration: 0.18, stagger: 0.02, ease: "power1.out" }
        );
      }
    }, menuCardRef);

    return () => ctx.revert();
  }, [activeDD]);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDD(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDD(null);
    }, 240);
  };

  const toggleMobileSection = (title: string) => {
    setMobileSectionOpen((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Consistent icon resolver across all navigation categories
  const getIcon = (title: string) => {
    const cls = "w-4 h-4";
    const t = title.toLowerCase();

    // Products
    if (t.includes("mailflow")) return <Mail className={cls} style={{ color: "#818cf8" }} />;
    if (t.includes("prospect")) return <Target className={cls} style={{ color: "#06b6d4" }} />;
    if (t.includes("omnira")) return <Share2 className={cls} style={{ color: "#10b981" }} />;
    if (t.includes("unveil")) return <Eye className={cls} style={{ color: "#f59e0b" }} />;
    if (t.includes("veyrix")) return <Search className={cls} style={{ color: "#38bdf8" }} />;

    // Solutions
    if (t.includes("workforce") || t.includes("enterprise management")) return <Users className={cls} style={{ color: "#a78bfa" }} />;
    if (t.includes("business operations") || t.includes("automation")) return <Zap className={cls} style={{ color: "#fbbf24" }} />;
    if (t.includes("revenue") || t.includes("sales")) return <TrendingUp className={cls} style={{ color: "#06b6d4" }} />;
    if (t.includes("generative search") || t.includes("search & growth")) return <Search className={cls} style={{ color: "#38bdf8" }} />;
    if (t.includes("logistics") || t.includes("autonomous logistics")) return <Workflow className={cls} style={{ color: "#10b981" }} />;
    if (t.includes("enterprise architecture") || t.includes("security")) return <ShieldCheck className={cls} style={{ color: "#60a5fa" }} />;
    if (t.includes("modernisation") || t.includes("modernization") || t.includes("startups")) return <Layers className={cls} style={{ color: "#818cf8" }} />;
    if (t.includes("consultation") || t.includes("scoping")) return <ShieldCheck className={cls} style={{ color: "#6366f1" }} />;

    // Capabilities - AI & Intelligent Systems
    if (t.includes("agentic ai")) return <Bot className={cls} style={{ color: "#818cf8" }} />;
    if (t.includes("multi-agent")) return <Cpu className={cls} style={{ color: "#a78bfa" }} />;
    if (t.includes("rag") || t.includes("knowledge")) return <Database className={cls} style={{ color: "#06b6d4" }} />;
    if (t.includes("ai integration")) return <Sparkles className={cls} style={{ color: "#fbbf24" }} />;
    if (t.includes("workflow automation")) return <Workflow className={cls} style={{ color: "#34d399" }} />;
    if (t.includes("ai engineering") || t.includes("evaluation")) return <ShieldCheck className={cls} style={{ color: "#f43f5e" }} />;

    // Capabilities - Software & Product Engineering
    if (t.includes("saas")) return <Rocket className={cls} style={{ color: "#6366f1" }} />;
    if (t.includes("custom software")) return <Code2 className={cls} style={{ color: "#38bdf8" }} />;
    if (t.includes("website")) return <Globe className={cls} style={{ color: "#06b6d4" }} />;
    if (t.includes("mobile")) return <Smartphone className={cls} style={{ color: "#10b981" }} />;
    if (t.includes("api")) return <Server className={cls} style={{ color: "#a78bfa" }} />;
    if (t.includes("ui/ux") || t.includes("3d")) return <Palette className={cls} style={{ color: "#ec4899" }} />;

    // Capabilities - Data & Platform Engineering
    if (t.includes("data engineering")) return <Database className={cls} style={{ color: "#38bdf8" }} />;
    if (t.includes("cloud architecture")) return <Cloud className={cls} style={{ color: "#60a5fa" }} />;
    if (t.includes("data pipelines")) return <Workflow className={cls} style={{ color: "#06b6d4" }} />;
    if (t.includes("analytics")) return <BarChart3 className={cls} style={{ color: "#818cf8" }} />;
    if (t.includes("platform modernisation")) return <RefreshCw className={cls} style={{ color: "#34d399" }} />;
    if (t.includes("infrastructure")) return <Server className={cls} style={{ color: "#a78bfa" }} />;

    // Our Work
    if (t.includes("case studies")) return <FileText className={cls} style={{ color: "#22d3ee" }} />;
    if (t.includes("engineering approach")) return <Compass className={cls} style={{ color: "#818cf8" }} />;

    // Blog
    if (t.includes("publication") || t.includes("blog") || t.includes("radar")) return <BookOpen className={cls} style={{ color: "#22d3ee" }} />;
    if (t.includes("chatbots") || t.includes("agentic ai")) return <Bot className={cls} style={{ color: "#818cf8" }} />;
    if (t.includes("geo") || t.includes("generative engine")) return <Search className={cls} style={{ color: "#38bdf8" }} />;
    if (t.includes("hr tech") || t.includes("workforce")) return <Users className={cls} style={{ color: "#a78bfa" }} />;

    // Company
    if (t.includes("about ashmyra") || t.includes("about")) return <Building2 className={cls} style={{ color: "#818cf8" }} />;
    if (t.includes("leadership")) return <Users className={cls} style={{ color: "#06b6d4" }} />;
    if (t.includes("engineering approach") || t.includes("approach")) return <Compass className={cls} style={{ color: "#fbbf24" }} />;
    if (t.includes("contact")) return <MessageSquare className={cls} style={{ color: "#38bdf8" }} />;
    if (t.includes("careers")) return <Sparkles className={cls} style={{ color: "#ec4899" }} />;

    return <Sparkles className={cls} style={{ color: "#818cf8" }} />;
  };

  const activeNavSection = MAIN_NAV.find((n) => n.title === activeDD);

  // Maximum width per menu category
  const getMenuMaxWidth = (title: string) => {
    switch (title) {
      case "Capabilities":
        return "1160px";
      case "Products":
        return "920px";
      case "Solutions":
        return "880px";
      case "Our Work":
        return "640px";
      case "Blog":
        return "700px";
      case "Company":
        return "340px";
      default:
        return "720px";
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur-md"
        style={{
          backgroundColor: "var(--bg-header)",
          borderBottom: "1px solid var(--border)",
          boxShadow: scrolled ? "0 10px 30px -10px rgba(0,0,0,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">

            {/* Ashmyra Brand Logo */}
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
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2"
              role="menubar"
              aria-label="Main Navigation"
            >
              {MAIN_NAV.map((nav) => {
                const open = activeDD === nav.title;
                const isSectionActive =
                  nav.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(nav.href);

                return (
                  <div
                    key={nav.title}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(nav.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={nav.href}
                      onClick={() => setActiveDD(null)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-[13.5px] font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 ${
                        open || isSectionActive
                          ? "text-white bg-white/[0.08]"
                          : "text-neutral-300 hover:text-white hover:bg-white/[0.04]"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={open}
                      role="menuitem"
                    >
                      <span>{nav.title}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${
                          open ? "rotate-180 text-cyan-400" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Theme Switcher & Primary CTA */}
            <div className="flex items-center gap-2.5">
              <ThemeSwitcher />
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent-light))",
                  boxShadow: "0 0 0 1px var(--border-glow), 0 4px 16px -2px var(--border-glow)",
                }}
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Drawer Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl text-neutral-300 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Desktop Mega-Menu Backdrop Scrim ────────────────────────────────────── */}
      {activeDD && (
        <div
          className="hidden lg:block fixed inset-0 top-16 sm:top-[72px] bg-black/60 backdrop-blur-[2px] z-40 transition-opacity duration-200 pointer-events-auto"
          onClick={() => setActiveDD(null)}
          aria-hidden="true"
        />
      )}

      {/* ── Desktop Mega-Menu Container ─────────────────────────────────────────── */}
      {activeDD && activeNavSection && (
        <div
          className="hidden lg:flex fixed top-16 sm:top-[72px] inset-x-0 z-50 justify-center px-4 sm:px-6 pointer-events-none pt-2.5"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={menuCardRef}
            className="pointer-events-auto w-full rounded-2xl p-6 sm:p-7 relative overflow-hidden transition-colors duration-300"
            style={{
              backgroundColor: "var(--theme-popover-bg)",
              color: "var(--text)",
              border: "1px solid var(--theme-popover-border)",
              boxShadow: "0 24px 60px -15px rgba(0,0,0,0.35), 0 0 35px -10px var(--border-glow)",
              maxWidth: getMenuMaxWidth(activeDD),
            }}
            role="menu"
            aria-label={`${activeDD} Mega Menu`}
          >
            {/* 1. PRODUCTS MEGA-MENU */}
            {activeDD === "Products" && (
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300 font-semibold">
                      Verified Production Platforms <span className="text-neutral-500">•</span> 5 Live AI Systems
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/products"
                      onClick={() => setActiveDD(null)}
                      className="text-[11px] font-mono text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors font-semibold group/sub"
                    >
                      <span>Explore All Products</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/sub:translate-x-0.5 transition-transform" />
                    </Link>
                    <span className="text-neutral-600">|</span>
                    <Link
                      href="/demos"
                      onClick={() => setActiveDD(null)}
                      className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors font-semibold group/all"
                    >
                      <span>Live Sandboxes</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Grid: 5 Live Products + 1 Interactive Sandboxes Card */}
                <div className="grid grid-cols-2 gap-2.5">
                  {activeNavSection.items?.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setActiveDD(null)}
                      className="mega-menu-item flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08] transition-all group/item"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all group-hover/item:scale-105"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {getIcon(item.title)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[13px] font-semibold text-white group-hover/item:text-cyan-200 transition-colors truncate">
                            {item.title}
                          </span>
                          <span className="text-[9px] font-mono text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-1.5 py-0.5 rounded font-medium shrink-0 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Live ↗
                          </span>
                        </div>
                        <p className="text-[11.5px] text-neutral-400 mt-1 leading-snug group-hover/item:text-neutral-300 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}

                  {/* 6th Card: Interactive Live Sandboxes Quick Access */}
                  <Link
                    href="/demos"
                    onClick={() => setActiveDD(null)}
                    className="mega-menu-item flex items-start gap-3.5 p-3 rounded-xl bg-gradient-to-br from-indigo-950/40 to-cyan-950/30 border border-cyan-500/20 hover:border-cyan-500/40 transition-all group/sandbox"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: "rgba(6, 182, 212, 0.15)",
                        border: "1px solid rgba(6, 182, 212, 0.35)",
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[13px] font-semibold text-white group-hover/sandbox:text-cyan-300 transition-colors truncate">
                          Interactive Live Sandboxes
                        </span>
                        <span className="text-[9px] font-mono text-cyan-300 bg-cyan-500/20 border border-cyan-500/35 px-1.5 py-0.5 rounded font-medium shrink-0">
                          Production ➔
                        </span>
                      </div>
                      <p className="text-[11.5px] text-neutral-300 mt-1 leading-snug">
                        Test all 5 platforms live with real workloads directly in your browser. Instant access, zero signup.
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Footer Banner */}
                <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 px-1">
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
            )}

            {/* 2. SOLUTIONS MEGA-MENU */}
            {activeDD === "Solutions" && (
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300 font-semibold">
                      Enterprise Business Solutions <span className="text-neutral-500">•</span> Targeted Problem Outcomes
                    </span>
                  </div>
                  <Link
                    href="/solutions"
                    onClick={() => setActiveDD(null)}
                    className="text-[11px] font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors font-semibold group/all"
                  >
                    <span>All Solutions Overview</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Grid: 5 Solutions Categories + 1 Discovery Card */}
                <div className="grid grid-cols-2 gap-2.5">
                  {activeNavSection.items?.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setActiveDD(null)}
                      className="mega-menu-item flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08] transition-all group/item"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all group-hover/item:scale-105"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {getIcon(item.title)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[13px] font-semibold text-white group-hover/item:text-cyan-200 transition-colors block">
                          {item.title}
                        </span>
                        <p className="text-[11.5px] text-neutral-400 mt-1 leading-snug group-hover/item:text-neutral-300 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}

                  {/* 6th Card: Bespoke Enterprise Architecture */}
                  <Link
                    href="/contact?intent=solutions"
                    onClick={() => setActiveDD(null)}
                    className="mega-menu-item flex items-start gap-3.5 p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 hover:border-indigo-500/40 transition-all group/custom"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: "rgba(99, 102, 241, 0.15)",
                        border: "1px solid rgba(99, 102, 241, 0.35)",
                      }}
                    >
                      <ShieldCheck className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[13px] font-semibold text-white group-hover/custom:text-indigo-200 transition-colors block">
                        Enterprise Architecture Scoping
                      </span>
                      <p className="text-[11.5px] text-neutral-300 mt-1 leading-snug">
                        Have a complex operational constraint? Discuss targeted system blueprints with our lead architects.
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Footer Banner */}
                <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 px-1">
                  <span className="flex items-center gap-1.5">
                    <Workflow className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Engineered for 99.99% uptime, strict SOC2/GDPR compliance, and zero data leakage.</span>
                  </span>
                  <Link
                    href="/solutions"
                    onClick={() => setActiveDD(null)}
                    className="text-white hover:text-indigo-300 font-medium underline underline-offset-4 transition-colors shrink-0 ml-3"
                  >
                    Explore Solutions Architecture →
                  </Link>
                </div>
              </div>
            )}

            {/* 3. CAPABILITIES MEGA-MENU */}
            {activeDD === "Capabilities" && (
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300 font-semibold">
                      Engineering Disciplines <span className="text-neutral-500">•</span> Systems Ashmyra Engineers
                    </span>
                  </div>
                  <Link
                    href="/capabilities"
                    onClick={() => setActiveDD(null)}
                    className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors font-semibold group/all"
                  >
                    <span>Capabilities Overview</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* 3-Column Visual Groups */}
                <div className="grid grid-cols-3 gap-6 lg:gap-8">
                  {activeNavSection.groups?.map((group) => {
                    const isAi = group.groupTitle.includes("AI");
                    const isSoftware = group.groupTitle.includes("Software");
                    const accentColor = isAi ? "text-indigo-400" : isSoftware ? "text-cyan-400" : "text-emerald-400";
                    const hoverTitleColor = isAi ? "group-hover/item:text-indigo-200" : isSoftware ? "group-hover/item:text-cyan-200" : "group-hover/item:text-emerald-200";

                    return (
                      <div key={group.groupTitle} className="flex flex-col justify-between">
                        <div>
                          {/* Column Header */}
                          <div className="pb-2.5 mb-2.5 border-b border-white/[0.06]">
                            <div className="flex items-center gap-2 mb-1">
                              {isAi ? (
                                <Bot className={`w-3.5 h-3.5 ${accentColor}`} />
                              ) : isSoftware ? (
                                <Code2 className={`w-3.5 h-3.5 ${accentColor}`} />
                              ) : (
                                <Database className={`w-3.5 h-3.5 ${accentColor}`} />
                              )}
                              <span className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${accentColor}`}>
                                {group.groupTitle}
                              </span>
                            </div>
                            {group.explanation && (
                              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                                {group.explanation}
                              </p>
                            )}
                          </div>

                          {/* 6 Capability Items */}
                          <div className="space-y-1">
                            {group.items.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setActiveDD(null)}
                                className="mega-menu-item flex items-center justify-between px-2.5 py-2 rounded-lg hover:bg-white/[0.04] transition-all group/item focus:outline-none focus:ring-1 focus:ring-cyan-400/40"
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div
                                    className="w-6 h-6 rounded flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-105"
                                    style={{
                                      background: "rgba(255,255,255,0.03)",
                                    }}
                                  >
                                    {getIcon(item.title)}
                                  </div>
                                  <span className={`text-[12.5px] font-medium text-slate-200 ${hoverTitleColor} transition-colors block truncate`}>
                                    {item.title}
                                  </span>
                                </div>
                                <ArrowRight className="w-3 h-3 text-white/0 -translate-x-1 group-hover/item:text-white/40 group-hover/item:translate-x-0 transition-all shrink-0 ml-1.5" />
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Category Overview Link */}
                        {group.overviewHref && (
                          <div className="pt-2 mt-2 border-t border-white/[0.06]">
                            <Link
                              href={group.overviewHref}
                              onClick={() => setActiveDD(null)}
                              className={`text-[11px] font-mono ${accentColor} hover:underline inline-flex items-center gap-1 font-medium transition-colors`}
                            >
                              <span>{group.overviewLabel || "Explore Category →"}</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Footer Banner */}
                <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400 px-1">
                  <span className="flex items-center gap-1.5 font-light">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Disciplined architecture, type-safe codebases, and observable production execution.</span>
                  </span>
                  <Link
                    href="/contact"
                    onClick={() => setActiveDD(null)}
                    className="text-white hover:text-cyan-300 font-medium underline underline-offset-4 transition-colors shrink-0 ml-3 font-mono text-[11px]"
                  >
                    Start an Engineering Conversation →
                  </Link>
                </div>
              </div>
            )}

            {/* 4. OUR WORK MENU */}
            {activeDD === "Our Work" && (
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300 font-semibold">
                      Engineering Case Studies &amp; Architecture
                    </span>
                  </div>
                  <Link
                    href="/our-work"
                    onClick={() => setActiveDD(null)}
                    className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors font-semibold group/all"
                  >
                    <span>Explore Our Work</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Items */}
                <div className="space-y-2">
                  {activeNavSection.items?.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setActiveDD(null)}
                      className="mega-menu-item flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08] transition-all group/item"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all group-hover/item:scale-105"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {getIcon(item.title)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[13px] font-semibold text-white group-hover/item:text-cyan-200 transition-colors block">
                          {item.title}
                        </span>
                        <p className="text-[11.5px] text-neutral-400 mt-1 leading-snug group-hover/item:text-neutral-300 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Footer Banner */}
                <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 px-1">
                  <span>Architectural case studies and core engineering principles.</span>
                  <Link
                    href="/contact"
                    onClick={() => setActiveDD(null)}
                    className="text-white hover:text-cyan-300 font-medium underline underline-offset-4 transition-colors shrink-0 ml-3"
                  >
                    Start an Engineering Conversation →
                  </Link>
                </div>
              </div>
            )}

            {/* 5. BLOG MENU */}
            {activeDD === "Blog" && (
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300 font-semibold">
                      Engineering Blog &amp; Systems Radar
                    </span>
                  </div>
                  <Link
                    href="/blog"
                    onClick={() => setActiveDD(null)}
                    className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors font-semibold group/all"
                  >
                    <span>All Articles &amp; Radar</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {activeNavSection.items?.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setActiveDD(null)}
                      className="mega-menu-item flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08] transition-all group/item"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all group-hover/item:scale-105"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {getIcon(item.title)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[13px] font-semibold text-white group-hover/item:text-cyan-200 transition-colors block">
                          {item.title}
                        </span>
                        <p className="text-[11.5px] text-neutral-400 mt-1 leading-snug group-hover/item:text-neutral-300 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Footer Banner */}
                <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 px-1">
                  <span>Regular technical analyses on Agentic AI, GEO search, and enterprise engineering.</span>
                  <Link
                    href="/blog"
                    onClick={() => setActiveDD(null)}
                    className="text-white hover:text-cyan-300 font-medium underline underline-offset-4 transition-colors shrink-0 ml-3"
                  >
                    Explore Ashmyra Blog →
                  </Link>
                </div>
              </div>
            )}

            {/* 6. COMPANY MENU */}
            {activeDD === "Company" && (
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300 font-semibold">
                      Ashmyra Technologies
                    </span>
                  </div>
                  <Link
                    href="/team"
                    onClick={() => setActiveDD(null)}
                    className="text-[11px] font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors font-semibold"
                  >
                    <span>View Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Single Item: Our Team */}
                <div className="space-y-2">
                  {activeNavSection.items?.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setActiveDD(null)}
                      className="mega-menu-item flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08] transition-all group/item"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all group-hover/item:scale-105"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <Users className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[13px] font-semibold text-white group-hover/item:text-indigo-200 transition-colors block">
                          {item.title}
                        </span>
                        <p className="text-[11.5px] text-neutral-400 mt-1 leading-snug group-hover/item:text-neutral-300 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Mobile Navigation Drawer ────────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-16 z-40 lg:hidden overflow-y-auto"
          style={{
            backgroundColor: "#07090E",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="px-5 py-6 space-y-3 pb-24">
            {MAIN_NAV.map((nav) => {
              const hasItems = (nav.items && nav.items.length > 0) || (nav.groups && nav.groups.length > 0);
              const isOpen = !!mobileSectionOpen[nav.title];

              if (hasItems) {
                return (
                  <div
                    key={nav.title}
                    className="rounded-xl border border-white/[0.08] overflow-hidden bg-white/[0.02]"
                  >
                    <button
                      onClick={() => toggleMobileSection(nav.title)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-semibold text-white hover:text-cyan-300 transition-colors min-h-[44px]"
                      aria-expanded={isOpen}
                    >
                      <span>{nav.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-cyan-400" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-3 pb-3 space-y-1 border-t border-white/[0.05] pt-2">
                        {/* Section overview link */}
                        <Link
                          href={nav.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04] text-xs font-semibold text-cyan-300 hover:text-white border border-white/[0.06] mb-2 min-h-[44px]"
                        >
                          <span>Explore All {nav.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                        </Link>
                        {/* Capabilities visual groups */}
                        {nav.groups ? (
                          nav.groups.map((group) => {
                            const isAi = group.groupTitle.includes("AI");
                            const isSoftware = group.groupTitle.includes("Software");
                            const accentColor = isAi ? "text-indigo-400" : isSoftware ? "text-cyan-400" : "text-emerald-400";
                            return (
                              <div key={group.groupTitle} className="mb-4 last:mb-0 pb-3 border-b border-white/[0.04] last:border-b-0">
                                <div className="px-2.5 py-1 mb-1">
                                  <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold block ${accentColor}`}>
                                    {group.groupTitle}
                                  </span>
                                  {group.explanation && (
                                    <p className="text-[10.5px] text-slate-400 font-light mt-0.5">
                                      {group.explanation}
                                    </p>
                                  )}
                                </div>
                                <div className="space-y-0.5">
                                  {group.items.map((item) => (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/[0.05] text-xs text-neutral-300 hover:text-white min-h-[44px]"
                                    >
                                      <div className="flex items-center gap-2.5 min-w-0">
                                        {getIcon(item.title)}
                                        <div className="min-w-0">
                                          <span className="font-medium truncate block">{item.title}</span>
                                          {item.description && (
                                            <span className="text-[10px] text-slate-400 font-light block truncate">{item.description}</span>
                                          )}
                                        </div>
                                      </div>
                                      <ArrowRight className="w-3.5 h-3.5 text-neutral-500 shrink-0 ml-2" />
                                    </Link>
                                  ))}
                                </div>
                                {group.overviewHref && (
                                  <Link
                                    href={group.overviewHref}
                                    onClick={() => setMobileOpen(false)}
                                    className={`inline-flex items-center gap-1 text-[11px] font-mono ${accentColor} px-2.5 pt-1.5 font-medium`}
                                  >
                                    <span>{group.overviewLabel || "Explore Category →"}</span>
                                  </Link>
                                )}
                              </div>
                            );
                          })
                        ) : (
                          nav.items?.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/[0.05] text-xs text-neutral-300 hover:text-white min-h-[44px]"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                {getIcon(item.title)}
                                <span className="font-medium truncate">{item.title}</span>
                              </div>
                              {item.badge ? (
                                <span className="text-[9px] font-mono text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-1.5 py-0.5 rounded font-medium">
                                  {item.badge} ↗
                                </span>
                              ) : (
                                <ArrowRight className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                              )}
                            </Link>
                          ))
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
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold text-neutral-200 hover:text-white bg-white/[0.02] border border-white/[0.08] min-h-[44px]"
                >
                  <span>{nav.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
                </Link>
              );
            })}

            {/* Mobile Palette Theme Switcher */}
            <div className="pt-3">
              <MobileThemeSelector />
            </div>

            {/* Mobile Primary CTA */}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white shadow-lg shadow-indigo-600/30 min-h-[48px]"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #818cf8)",
                }}
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
