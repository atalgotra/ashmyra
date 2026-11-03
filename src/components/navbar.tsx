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

  // Rich metadata for products (icons, squircle styling, badges, taglines)
  const getProductMeta = (title: string) => {
    const cls = "w-5 h-5";
    const t = title.toLowerCase();

    if (t.includes("mailflow")) {
      return {
        icon: <Mail className={cls} style={{ color: "#818cf8" }} />,
        bgColor: "rgba(129, 140, 248, 0.12)",
        borderColor: "rgba(129, 140, 248, 0.28)",
        badgeBg: "rgba(129, 140, 248, 0.10)",
        badgeColor: "#818cf8",
        badgeBorder: "rgba(129, 140, 248, 0.25)",
        pillText: "Email Deliverability",
        liveLabel: "Mail Engine",
      };
    }
    if (t.includes("prospect")) {
      return {
        icon: <Target className={cls} style={{ color: "#06b6d4" }} />,
        bgColor: "rgba(6, 182, 212, 0.12)",
        borderColor: "rgba(6, 182, 212, 0.28)",
        badgeBg: "rgba(6, 182, 212, 0.10)",
        badgeColor: "#06b6d4",
        badgeBorder: "rgba(6, 182, 212, 0.25)",
        pillText: "B2B Intelligence",
        liveLabel: "Scraper IQ",
      };
    }
    if (t.includes("omnira")) {
      return {
        icon: <Share2 className={cls} style={{ color: "#10b981" }} />,
        bgColor: "rgba(16, 185, 129, 0.12)",
        borderColor: "rgba(16, 185, 129, 0.28)",
        badgeBg: "rgba(16, 185, 129, 0.10)",
        badgeColor: "#10b981",
        badgeBorder: "rgba(16, 185, 129, 0.25)",
        pillText: "Social AI Swarms",
        liveLabel: "Swarm AI",
      };
    }
    if (t.includes("unveil")) {
      return {
        icon: <Eye className={cls} style={{ color: "#f59e0b" }} />,
        bgColor: "rgba(245, 158, 11, 0.12)",
        borderColor: "rgba(245, 158, 11, 0.28)",
        badgeBg: "rgba(245, 158, 11, 0.10)",
        badgeColor: "#f59e0b",
        badgeBorder: "rgba(245, 158, 11, 0.25)",
        pillText: "Computer Vision",
        liveLabel: "Vision Model",
      };
    }
    return {
      icon: <Search className={cls} style={{ color: "#38bdf8" }} />,
      bgColor: "rgba(56, 189, 248, 0.12)",
      borderColor: "rgba(56, 189, 248, 0.28)",
      badgeBg: "rgba(56, 189, 248, 0.10)",
      badgeColor: "#38bdf8",
      badgeBorder: "rgba(56, 189, 248, 0.25)",
      pillText: "Search Forensics",
      liveLabel: "Audit Engine",
    };
  };

  // Rich metadata for solutions (icons, squircle styling)
  const getSolutionMeta = (title: string) => {
    const cls = "w-4 h-4";
    const t = title.toLowerCase();

    if (t.includes("workforce")) {
      return {
        icon: <Users className={cls} style={{ color: "#a78bfa" }} />,
        bgColor: "rgba(167, 139, 250, 0.12)",
        borderColor: "rgba(167, 139, 250, 0.28)",
      };
    }
    if (t.includes("business operations") || t.includes("automation")) {
      return {
        icon: <Zap className={cls} style={{ color: "#fbbf24" }} />,
        bgColor: "rgba(251, 191, 36, 0.12)",
        borderColor: "rgba(251, 191, 36, 0.28)",
      };
    }
    if (t.includes("revenue") || t.includes("sales")) {
      return {
        icon: <TrendingUp className={cls} style={{ color: "#06b6d4" }} />,
        bgColor: "rgba(6, 182, 212, 0.12)",
        borderColor: "rgba(6, 182, 212, 0.28)",
      };
    }
    if (t.includes("generative search") || t.includes("growth")) {
      return {
        icon: <Search className={cls} style={{ color: "#38bdf8" }} />,
        bgColor: "rgba(56, 189, 248, 0.12)",
        borderColor: "rgba(56, 189, 248, 0.28)",
      };
    }
    if (t.includes("logistics")) {
      return {
        icon: <Workflow className={cls} style={{ color: "#10b981" }} />,
        bgColor: "rgba(16, 185, 129, 0.12)",
        borderColor: "rgba(16, 185, 129, 0.28)",
      };
    }
    if (t.includes("enterprise architecture & security") || t.includes("security")) {
      return {
        icon: <ShieldCheck className={cls} style={{ color: "#60a5fa" }} />,
        bgColor: "rgba(96, 165, 250, 0.12)",
        borderColor: "rgba(96, 165, 250, 0.28)",
      };
    }
    if (t.includes("modernisation") || t.includes("startups")) {
      return {
        icon: <Layers className={cls} style={{ color: "#818cf8" }} />,
        bgColor: "rgba(129, 140, 248, 0.12)",
        borderColor: "rgba(129, 140, 248, 0.28)",
      };
    }
    return {
      icon: <ShieldCheck className={cls} style={{ color: "#c084fc" }} />,
      bgColor: "rgba(192, 132, 252, 0.12)",
      borderColor: "rgba(192, 132, 252, 0.28)",
    };
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
    if (t.includes("team") || t.includes("leadership")) return <Users className={cls} style={{ color: "#818cf8" }} />;
    if (t.includes("philosophy") || t.includes("approach")) return <Compass className={cls} style={{ color: "#fbbf24" }} />;
    if (t.includes("mission") || t.includes("pillars")) return <Target className={cls} style={{ color: "#06b6d4" }} />;
    if (t.includes("careers") || t.includes("culture") || t.includes("join")) return <Sparkles className={cls} style={{ color: "#ec4899" }} />;
    if (t.includes("about ashmyra") || t.includes("about")) return <Building2 className={cls} style={{ color: "#818cf8" }} />;
    if (t.includes("contact")) return <MessageSquare className={cls} style={{ color: "#38bdf8" }} />;

    return <Sparkles className={cls} style={{ color: "#818cf8" }} />;
  };

  const activeNavSection = MAIN_NAV.find((n) => n.title === activeDD);

  // Maximum width per menu category
  const getMenuMaxWidth = (title: string) => {
    switch (title) {
      case "Capabilities":
        return "1160px";
      case "Products":
        return "760px";
      case "Solutions":
        return "800px";
      case "Blog":
        return "720px";
      case "Company":
        return "600px";
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
              className="group relative flex items-center gap-3 sm:gap-3.5 focus:outline-none rounded-xl py-1 transition-all duration-300"
              title="Ashmyra Technologies — Return to Home"
              aria-label="Ashmyra Technologies — Return to Home"
            >
              {/* Ambient Hover Backglow */}
              <div
                className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-lg"
                style={{
                  background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
                }}
              />

              <div
                className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden p-1.5 transition-all duration-300 group-hover:scale-105 shrink-0 shadow-sm"
                style={{
                  backgroundColor: "var(--theme-pill-bg)",
                  border: "1px solid var(--border-strong)",
                  boxShadow: "0 4px 14px -3px var(--border-glow)",
                }}
              >
                <Image
                  src="/brand/ashmyra-icon.png"
                  alt="Ashmyra Technologies"
                  width={48}
                  height={48}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-[20px] sm:text-[22px] font-extrabold tracking-tight transition-colors duration-200"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "var(--text)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  ASHMYRA
                </span>
                <span
                  className="text-[9.5px] sm:text-[10px] tracking-[0.28em] uppercase font-mono font-bold mt-1 transition-colors duration-200"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
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
                const hasDropdown = Boolean(
                  (nav.items && nav.items.length > 0) ||
                  (nav.groups && nav.groups.length > 0)
                );
                const open = activeDD === nav.title;
                const isSectionActive =
                  nav.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(nav.href);

                return (
                  <div
                    key={nav.title}
                    className="relative"
                    onMouseEnter={() => {
                      if (hasDropdown) handleMouseEnter(nav.title);
                    }}
                    onMouseLeave={hasDropdown ? handleMouseLeave : undefined}
                  >
                    <Link
                      href={nav.href}
                      onClick={() => setActiveDD(null)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-[13.5px] font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 ${
                        open || isSectionActive
                          ? "text-white bg-white/[0.08]"
                          : "text-neutral-300 hover:text-white hover:bg-white/[0.04]"
                      }`}
                      aria-haspopup={hasDropdown ? "true" : undefined}
                      aria-expanded={hasDropdown ? open : undefined}
                      role="menuitem"
                    >
                      <span>{nav.title}</span>
                      {hasDropdown && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${
                            open ? "rotate-180 text-cyan-400" : ""
                          }`}
                          aria-hidden="true"
                        />
                      )}
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
            {/* 1. PRODUCTS DROPDOWN */}
            {activeDD === "Products" && (
              <div>
                {/* Header */}
                <div
                  className="flex items-center justify-between pb-2.5 mb-3"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "var(--accent)" }}></span>
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "var(--accent)" }}></span>
                    </span>
                    <span
                      className="text-[11px] font-mono uppercase tracking-wider font-bold"
                      style={{ color: "var(--text)" }}
                    >
                      Production AI Platforms
                    </span>
                  </div>
                  <span
                    className="text-[11px] font-mono font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    5 Verified Engines
                  </span>
                </div>

                {/* Grid: 2 columns of clean, refined product tiles */}
                <div className="grid grid-cols-2 gap-2.5">
                  {activeNavSection.items?.map((item) => {
                    const meta = getProductMeta(item.title);
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setActiveDD(null)}
                        className="group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 border border-transparent hover:border-[var(--border)] hover:bg-[var(--theme-pill-bg)]"
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-105"
                          style={{
                            backgroundColor: meta.bgColor,
                            border: `1px solid ${meta.borderColor}`,
                          }}
                        >
                          {meta.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1.5">
                            <span
                              className="text-[13px] font-semibold transition-colors group-hover:text-[var(--accent)] truncate"
                              style={{ color: "var(--text)" }}
                            >
                              {item.title}
                            </span>
                            <span
                              className="text-[9.5px] font-mono px-1.5 py-0.5 rounded-md font-medium shrink-0"
                              style={{
                                backgroundColor: meta.badgeBg,
                                color: meta.badgeColor,
                                border: `1px solid ${meta.badgeBorder}`,
                              }}
                            >
                              {item.badge || meta.pillText}
                            </span>
                          </div>
                          <p
                            className="text-[11.5px] mt-1 leading-snug line-clamp-2 transition-colors group-hover:text-[var(--text)]"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}

                  {/* 6th Slot: Custom AI Engine */}
                  <Link
                    href="/contact"
                    onClick={() => setActiveDD(null)}
                    className="group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 border border-transparent hover:border-[var(--border)] hover:bg-[var(--theme-pill-bg)]"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-105"
                      style={{
                        backgroundColor: "rgba(168, 85, 247, 0.12)",
                        border: "1px solid rgba(168, 85, 247, 0.28)",
                      }}
                    >
                      <Terminal className="w-4 h-4" style={{ color: "#c084fc" }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1.5">
                        <span
                          className="text-[13px] font-semibold transition-colors group-hover:text-[var(--accent)] truncate"
                          style={{ color: "var(--text)" }}
                        >
                          Custom AI Engine
                        </span>
                        <span
                          className="text-[9.5px] font-mono px-1.5 py-0.5 rounded-md font-medium shrink-0"
                          style={{
                            backgroundColor: "rgba(168, 85, 247, 0.10)",
                            color: "#c084fc",
                            border: "1px solid rgba(168, 85, 247, 0.25)",
                          }}
                        >
                          Enterprise
                        </span>
                      </div>
                      <p
                        className="text-[11.5px] mt-1 leading-snug line-clamp-2 transition-colors group-hover:text-[var(--text)]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Bespoke models, autonomous agents & dedicated private VPC deployments.
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Clean, Refined Footer Strip */}
                <div
                  className="mt-3 pt-2.5 flex items-center justify-between text-xs"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <Link
                    href="/demos"
                    onClick={() => setActiveDD(null)}
                    className="group flex items-center gap-1.5 text-[11.5px] font-medium transition-colors"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                    <span className="group-hover:underline">Interactive live sandboxes available for all 5 platforms</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" style={{ color: "var(--accent)" }} />
                  </Link>

                  <Link
                    href="/products"
                    onClick={() => setActiveDD(null)}
                    className="flex items-center gap-1 text-[11.5px] font-semibold transition-opacity hover:opacity-80"
                    style={{ color: "var(--accent)" }}
                  >
                    <span>All Products</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}

            {/* 2. SOLUTIONS MEGA-MENU */}
            {activeDD === "Solutions" && (
              <div>
                {/* Header */}
                <div
                  className="flex items-center justify-between pb-2.5 mb-3"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "var(--accent)" }}></span>
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "var(--accent)" }}></span>
                    </span>
                    <span
                      className="text-[11px] font-mono uppercase tracking-wider font-bold"
                      style={{ color: "var(--text)" }}
                    >
                      Enterprise Business Solutions <span className="opacity-40">•</span> Targeted Outcomes
                    </span>
                  </div>
                  <Link
                    href="/solutions"
                    onClick={() => setActiveDD(null)}
                    className="text-[11px] font-mono flex items-center gap-1 font-semibold transition-opacity hover:opacity-80"
                    style={{ color: "var(--accent)" }}
                  >
                    <span>All Solutions Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Grid: 7 Solutions Categories + 1 Architecture Scoping Card */}
                <div className="grid grid-cols-2 gap-2.5">
                  {activeNavSection.items?.map((item) => {
                    const meta = getSolutionMeta(item.title);
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setActiveDD(null)}
                        className="group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 border border-transparent hover:border-[var(--border)] hover:bg-[var(--theme-pill-bg)]"
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-105"
                          style={{
                            backgroundColor: meta.bgColor,
                            border: `1px solid ${meta.borderColor}`,
                          }}
                        >
                          {meta.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <span
                            className="text-[13px] font-semibold transition-colors group-hover:text-[var(--accent)] block"
                            style={{ color: "var(--text)" }}
                          >
                            {item.title}
                          </span>
                          <p
                            className="text-[11.5px] mt-1 leading-snug line-clamp-2 transition-colors group-hover:text-[var(--text)]"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}

                  {/* 8th Slot: Architecture Scoping */}
                  <Link
                    href="/contact?intent=solutions"
                    onClick={() => setActiveDD(null)}
                    className="group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 border border-transparent hover:border-[var(--border)] hover:bg-[var(--theme-pill-bg)]"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-105"
                      style={{
                        backgroundColor: "rgba(168, 85, 247, 0.12)",
                        border: "1px solid rgba(168, 85, 247, 0.28)",
                      }}
                    >
                      <ShieldCheck className="w-4 h-4" style={{ color: "#c084fc" }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1.5">
                        <span
                          className="text-[13px] font-semibold transition-colors group-hover:text-[var(--accent)]"
                          style={{ color: "var(--text)" }}
                        >
                          Enterprise Architecture Scoping
                        </span>
                        <span
                          className="text-[9.5px] font-mono px-1.5 py-0.5 rounded-md font-medium shrink-0"
                          style={{
                            backgroundColor: "rgba(168, 85, 247, 0.10)",
                            color: "#c084fc",
                            border: "1px solid rgba(168, 85, 247, 0.25)",
                          }}
                        >
                          Lead Architect
                        </span>
                      </div>
                      <p
                        className="text-[11.5px] mt-1 leading-snug line-clamp-2 transition-colors group-hover:text-[var(--text)]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Discuss targeted system blueprints and operational constraints with our lead architects.
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Footer Banner */}
                <div
                  className="mt-3 pt-2.5 flex items-center justify-between text-xs px-1"
                  style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
                >
                  <span className="flex items-center gap-1.5 font-mono text-[10.5px]">
                    <Workflow className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                    <span>99.99% SLA • Strict SOC2 & GDPR Compliance • Zero Data Leakage</span>
                  </span>
                  <Link
                    href="/solutions"
                    onClick={() => setActiveDD(null)}
                    className="flex items-center gap-1 text-[11.5px] font-semibold transition-opacity hover:opacity-80 shrink-0 ml-3"
                    style={{ color: "var(--accent)" }}
                  >
                    <span>Explore Solutions Architecture</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}

            {/* 3. CAPABILITIES MEGA-MENU */}
            {activeDD === "Capabilities" && (
              <div>
                {/* Header */}
                <div
                  className="flex items-center justify-between pb-2.5 mb-3"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "var(--accent)" }}></span>
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "var(--accent)" }}></span>
                    </span>
                    <span
                      className="text-[11px] font-mono uppercase tracking-wider font-bold"
                      style={{ color: "var(--text)" }}
                    >
                      Engineering Disciplines <span className="opacity-40">•</span> Core Technical Capabilities
                    </span>
                  </div>
                  <Link
                    href="/capabilities"
                    onClick={() => setActiveDD(null)}
                    className="text-[11px] font-mono flex items-center gap-1 font-semibold transition-opacity hover:opacity-80"
                    style={{ color: "var(--accent)" }}
                  >
                    <span>Capabilities Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* 3-Column Visual Groups */}
                <div className="grid grid-cols-3 gap-6">
                  {activeNavSection.groups?.map((group) => {
                    const isAi = group.groupTitle.includes("AI");
                    const isSoftware = group.groupTitle.includes("Software");
                    const accentColor = isAi
                      ? "var(--nav-col-ai)"
                      : isSoftware
                      ? "var(--nav-col-software)"
                      : "var(--nav-col-data)";

                    return (
                      <div key={group.groupTitle} className="flex flex-col justify-between">
                        <div>
                          {/* Column Header */}
                          <div
                            className="pb-2.5 mb-2.5"
                            style={{ borderBottom: "1px solid var(--border-strong)" }}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              {isAi ? (
                                <Bot className="w-4 h-4 shrink-0" style={{ color: accentColor }} />
                              ) : isSoftware ? (
                                <Code2 className="w-4 h-4 shrink-0" style={{ color: accentColor }} />
                              ) : (
                                <Database className="w-4 h-4 shrink-0" style={{ color: accentColor }} />
                              )}
                              <span
                                className="text-[12px] font-mono uppercase tracking-wider font-bold"
                                style={{ color: accentColor }}
                              >
                                {group.groupTitle}
                              </span>
                            </div>
                            {group.explanation && (
                              <p
                                className="text-[11.5px] font-normal leading-relaxed mt-1"
                                style={{ color: "var(--text-muted)" }}
                              >
                                {group.explanation}
                              </p>
                            )}
                          </div>

                          {/* Capability Items */}
                          <div className="space-y-1">
                            {group.items.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setActiveDD(null)}
                                className="group/item flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-all border border-transparent hover:border-[var(--border)] hover:bg-[var(--theme-pill-bg)] focus:outline-none"
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div
                                    className="w-6 h-6 rounded flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-105"
                                    style={{
                                      backgroundColor: "var(--theme-pill-bg)",
                                      border: "1px solid var(--border)",
                                    }}
                                  >
                                    {getIcon(item.title)}
                                  </div>
                                  <span
                                    className="text-[12.5px] font-medium transition-colors block truncate group-hover/item:text-[var(--accent)]"
                                    style={{ color: "var(--text)" }}
                                  >
                                    {item.title}
                                  </span>
                                </div>
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-70 group-hover/item:translate-x-0 transition-all shrink-0 ml-1.5" style={{ color: "var(--accent)" }} />
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Category Overview Link */}
                        {group.overviewHref && (
                          <div
                            className="pt-2 mt-2"
                            style={{ borderTop: "1px solid var(--border)" }}
                          >
                            <Link
                              href={group.overviewHref}
                              onClick={() => setActiveDD(null)}
                              className="text-[11px] font-mono inline-flex items-center gap-1 font-medium transition-opacity hover:opacity-80"
                              style={{ color: accentColor }}
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
                <div
                  className="mt-4 pt-3 flex items-center justify-between text-[11px] px-1"
                  style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
                >
                  <span className="flex items-center gap-1.5 font-light font-mono text-[10.5px]">
                    <Cpu className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                    <span>Disciplined architecture, type-safe codebases, and observable production execution.</span>
                  </span>
                  <Link
                    href="/contact"
                    onClick={() => setActiveDD(null)}
                    className="flex items-center gap-1 text-[11.5px] font-semibold transition-opacity hover:opacity-80 shrink-0 ml-3"
                    style={{ color: "var(--accent)" }}
                  >
                    <span>Start an Engineering Conversation</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}

            {/* 5. BLOG MENU */}
            {activeDD === "Blog" && (
              <div>
                {/* Header */}
                <div
                  className="flex items-center justify-between pb-2.5 mb-3"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "var(--accent)" }}></span>
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "var(--accent)" }}></span>
                    </span>
                    <span
                      className="text-[11px] font-mono uppercase tracking-wider font-bold"
                      style={{ color: "var(--text)" }}
                    >
                      Engineering Blog &amp; Systems Radar
                    </span>
                  </div>
                  <Link
                    href="/blog"
                    onClick={() => setActiveDD(null)}
                    className="text-[11px] font-mono flex items-center gap-1 font-semibold transition-opacity hover:opacity-80"
                    style={{ color: "var(--accent)" }}
                  >
                    <span>All Articles &amp; Radar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {activeNavSection.items?.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setActiveDD(null)}
                      className="group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 border border-transparent hover:border-[var(--border)] hover:bg-[var(--theme-pill-bg)]"
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-105"
                        style={{
                          backgroundColor: "var(--theme-pill-bg)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {getIcon(item.title)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span
                          className="text-[13px] font-semibold transition-colors group-hover:text-[var(--accent)] block"
                          style={{ color: "var(--text)" }}
                        >
                          {item.title}
                        </span>
                        <p
                          className="text-[11.5px] mt-1 leading-snug line-clamp-2 transition-colors group-hover:text-[var(--text)]"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Footer Banner */}
                <div
                  className="mt-3 pt-2.5 flex items-center justify-between text-xs px-1"
                  style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
                >
                  <span className="font-mono text-[10.5px]">Regular technical analyses on Agentic AI, GEO search, and enterprise engineering.</span>
                  <Link
                    href="/blog"
                    onClick={() => setActiveDD(null)}
                    className="flex items-center gap-1 text-[11.5px] font-semibold transition-opacity hover:opacity-80 shrink-0 ml-3"
                    style={{ color: "var(--accent)" }}
                  >
                    <span>Explore Ashmyra Blog</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}

            {/* 6. COMPANY MENU */}
            {activeDD === "Company" && (
              <div>
                {/* Header */}
                <div
                  className="flex items-center justify-between pb-2.5 mb-3"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "var(--accent)" }}></span>
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "var(--accent)" }}></span>
                    </span>
                    <span
                      className="text-[11px] font-mono uppercase tracking-wider font-bold"
                      style={{ color: "var(--text)" }}
                    >
                      Ashmyra Technologies <span className="opacity-40">•</span> Leadership &amp; Engineering Culture
                    </span>
                  </div>
                  <Link
                    href="/team#team"
                    onClick={() => setActiveDD(null)}
                    className="text-[11px] font-mono flex items-center gap-1 font-semibold transition-opacity hover:opacity-80"
                    style={{ color: "var(--accent)" }}
                  >
                    <span>View All Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* 2-Column Grid: 4 items (Team, Philosophy, Mission, Careers) */}
                <div className="grid grid-cols-2 gap-2.5">
                  {activeNavSection.items?.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setActiveDD(null)}
                      className="group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 border border-transparent hover:border-[var(--border)] hover:bg-[var(--theme-pill-bg)]"
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-105"
                        style={{
                          backgroundColor: "var(--theme-pill-bg)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {getIcon(item.title)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1.5">
                          <span
                            className="text-[13px] font-semibold transition-colors group-hover:text-[var(--accent)] truncate"
                            style={{ color: "var(--text)" }}
                          >
                            {item.title}
                          </span>
                          {item.badge && (
                            <span
                              className="text-[9.5px] font-mono px-1.5 py-0.5 rounded-md font-medium shrink-0"
                              style={{
                                backgroundColor: "var(--theme-pill-bg)",
                                color: "var(--accent)",
                                border: "1px solid var(--border)",
                              }}
                            >
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p
                          className="text-[11.5px] mt-1 leading-snug line-clamp-2 transition-colors group-hover:text-[var(--text)]"
                          style={{ color: "var(--text-muted)" }}
                        >
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
