"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAV, NavItem } from "@/data/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Cpu,
  Search,
  Users,
  Zap,
  BarChart3,
  Target,
  Globe,
  Code2,
  Bot,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDD, setActiveDD] = useState<string | null>(null);
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

  const getIcon = (title: string) => {
    const cls = "w-4 h-4";
    const t = title.toLowerCase();
    if (t.includes("seo") || t.includes("search") || t.includes("geo")) {
      return <Search className={cls} style={{ color: "#22d3ee" }} />;
    }
    if (t.includes("hrms") || t.includes("workforce") || t.includes("human")) {
      return <Users className={cls} style={{ color: "#10b981" }} />;
    }
    if (t.includes("crm") || t.includes("project") || t.includes("target")) {
      return <Target className={cls} style={{ color: "#f43f5e" }} />;
    }
    if (t.includes("analytics") || t.includes("data")) {
      return <BarChart3 className={cls} style={{ color: "#a78bfa" }} />;
    }
    if (t.includes("automation") || t.includes("orchestration")) {
      return <Zap className={cls} style={{ color: "#fbbf24" }} />;
    }
    if (t.includes("web") || t.includes("platform")) {
      return <Globe className={cls} style={{ color: "#38bdf8" }} />;
    }
    if (t.includes("software") || t.includes("engineering")) {
      return <Code2 className={cls} style={{ color: "#60a5fa" }} />;
    }
    if (t.includes("agentic") || t.includes("ai")) {
      return <Bot className={cls} style={{ color: "#818cf8" }} />;
    }
    return <Sparkles className={cls} style={{ color: "#818cf8" }} />;
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(5, 6, 8, 0.96)"
            : "rgba(5, 6, 8, 0.88)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.06)",
          boxShadow: scrolled ? "0 8px 32px -8px rgba(0,0,0,0.7)" : "0 4px 20px -4px rgba(0,0,0,0.4)",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[70px]">

            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl"
            >
              <div
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden p-1 transition-all duration-300 group-hover:scale-105 flex-shrink-0"
                style={{
                  background: "rgba(99,102,241,0.15)",
                  border: "1px solid rgba(99,102,241,0.4)",
                  boxShadow: "0 0 20px rgba(99,102,241,0.25)",
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
                <span className="text-[8.5px] tracking-[0.22em] text-indigo-400 uppercase font-mono mt-0.5">
                  Technologies
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {MAIN_NAV.map((nav) => {
                // Dropdown for Products & Services
                if (nav.items) {
                  const open = activeDD === nav.title;
                  const isSectionActive = pathname.startsWith("/products") || pathname.startsWith("/services");
                  const products = nav.items.filter((item) => item.category === "product");
                  const services = nav.items.filter((item) => item.category === "service");

                  return (
                    <div
                      key={nav.title}
                      className="relative"
                      onMouseEnter={() => setActiveDD(nav.title)}
                      onMouseLeave={() => setActiveDD(null)}
                    >
                      <button
                        onClick={() => setActiveDD(open ? null : nav.title)}
                        className={`flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium rounded-xl transition-all duration-200 ${
                          open || isSectionActive
                            ? "text-white bg-white/[0.08]"
                            : "text-neutral-300 hover:text-white hover:bg-white/[0.05]"
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

                      {/* Mega-menu dropdown */}
                      {open && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[780px] z-50 animate-fadeIn">
                          <div
                            className="rounded-3xl p-6 shadow-2xl"
                            style={{
                              background: "#07090f",
                              border: "1px solid rgba(255,255,255,0.12)",
                              backdropFilter: "blur(32px)",
                              boxShadow: "0 24px 64px -12px rgba(0,0,0,0.95), 0 0 0 1px rgba(99,102,241,0.25)",
                            }}
                          >
                            <div className="grid grid-cols-12 gap-6">

                              {/* Left Column: Flagship Products (7 cols) */}
                              <div className="col-span-7 pr-2 border-r border-white/[0.07]">
                                <div className="flex items-center justify-between mb-3 px-2">
                                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                                    Flagship AI &amp; SaaS Products
                                  </span>
                                  <Link
                                    href="/products"
                                    onClick={() => setActiveDD(null)}
                                    className="text-[11px] font-mono text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                                  >
                                    <span>All Products</span>
                                    <ArrowRight className="w-3 h-3" />
                                  </Link>
                                </div>

                                <div className="space-y-1">
                                  {products.map((item) => (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      onClick={() => setActiveDD(null)}
                                      className="flex items-start gap-3 p-2 rounded-xl hover:bg-white/[0.05] transition-all group/item"
                                    >
                                      <div
                                        className="p-2 rounded-lg mt-0.5 transition-all group-hover/item:scale-105 flex-shrink-0"
                                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                                      >
                                        {getIcon(item.title)}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-1.5">
                                          <span className="text-[12.5px] font-bold text-neutral-200 group-hover/item:text-white transition-colors truncate">
                                            {item.title}
                                          </span>
                                          {item.badge && (
                                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/15 border border-amber-500/20 text-amber-300">
                                              {item.badge}
                                            </span>
                                          )}
                                        </div>
                                        {item.description && (
                                          <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                                            {item.description}
                                          </p>
                                        )}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Right Column: Spotlight & Engineering Services (5 cols) */}
                              <div className="col-span-5 space-y-4">
                                {/* Featured Spotlight */}
                                {nav.featured && (
                                  <Link
                                    href={nav.featured.href}
                                    onClick={() => setActiveDD(null)}
                                    className="block p-3.5 rounded-2xl group/feat transition-all duration-200 hover:scale-[1.01]"
                                    style={{
                                      background: "linear-gradient(135deg, rgba(99,102,241,0.18), rgba(139,92,246,0.1))",
                                      border: "1px solid rgba(99,102,241,0.35)",
                                    }}
                                  >
                                    <div className="flex items-center gap-2 mb-1">
                                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                                      <span className="text-xs font-bold text-white">{nav.featured.title}</span>
                                      <span className="ml-auto text-[9px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/25 text-indigo-300 uppercase font-bold tracking-wider">
                                        Flagship
                                      </span>
                                    </div>
                                    <p className="text-[11px] text-neutral-300 leading-snug">
                                      {nav.featured.desc}
                                    </p>
                                  </Link>
                                )}

                                {/* Engineering Services */}
                                <div>
                                  <div className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-bold mb-2 px-1">
                                    Engineering Services
                                  </div>
                                  <div className="space-y-1">
                                    {services.map((item) => (
                                      <Link
                                        key={item.title}
                                        href={item.href}
                                        onClick={() => setActiveDD(null)}
                                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.05] transition-all group/svc"
                                      >
                                        <div
                                          className="p-1.5 rounded-lg mt-0.5 flex-shrink-0"
                                          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                                        >
                                          {getIcon(item.title)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center gap-1.5">
                                            <span className="text-[12px] font-bold text-neutral-200 group-hover/svc:text-white transition-colors truncate">
                                              {item.title}
                                            </span>
                                          </div>
                                          {item.description && (
                                            <p className="text-[10.5px] text-neutral-400 mt-0.5 line-clamp-1">
                                              {item.description}
                                            </p>
                                          )}
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* Proof Trust Badge */}
                                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-neutral-400 px-1">
                                  <span className="flex items-center gap-1 text-emerald-400">
                                    <ShieldCheck className="w-3 h-3" />
                                    100+ Deliveries
                                  </span>
                                  <Link
                                    href="/services"
                                    onClick={() => setActiveDD(null)}
                                    className="text-indigo-300 hover:text-white transition-colors"
                                  >
                                    All Services →
                                  </Link>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                // Regular Top-Level Nav Links
                const isItemActive =
                  nav.href === "/"
                    ? pathname === "/"
                    : !nav.href.includes("#") && pathname === nav.href;

                return (
                  <Link
                    key={nav.title}
                    href={nav.href}
                    onClick={() => setActiveDD(null)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium rounded-xl transition-all duration-200 ${
                      isItemActive
                        ? "text-white bg-white/[0.08]"
                        : "text-neutral-300 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    <span>{nav.title}</span>
                    {nav.badge && (
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 uppercase tracking-wider font-bold">
                        {nav.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #818cf8)",
                  boxShadow: "0 0 0 1px rgba(99,102,241,0.5), 0 4px 20px -4px rgba(99,102,241,0.5)",
                }}
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl text-neutral-400 hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 flex flex-col pt-[70px]"
          style={{
            background: "rgba(5, 6, 8, 0.98)",
            backdropFilter: "blur(24px)",
          }}
        >
          <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
            {MAIN_NAV.map((nav) => {
              if (nav.items) {
                return (
                  <div key={nav.title} className="pb-3 border-b border-white/[0.06]">
                    <div className="px-3 py-2 text-xs font-mono uppercase text-amber-400 font-bold tracking-wider">
                      {nav.title}
                    </div>

                    <div className="mt-1 space-y-1 pl-2">
                      <div className="text-[10px] font-mono text-neutral-500 uppercase px-3 pt-1">
                        Flagship Products
                      </div>
                      {nav.items
                        .filter((i) => i.category === "product")
                        .map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-between px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
                          >
                            <span>{sub.title}</span>
                            {sub.badge && (
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.05] text-neutral-400">
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        ))}

                      <div className="text-[10px] font-mono text-neutral-500 uppercase px-3 pt-2">
                        Engineering Services
                      </div>
                      {nav.items
                        .filter((i) => i.category === "service")
                        .map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-between px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
                          >
                            <span>{sub.title}</span>
                            {sub.badge && (
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.05] text-neutral-400">
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={nav.title}
                  href={nav.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-white hover:bg-white/[0.05] transition-colors"
                >
                  <span>{nav.title}</span>
                  {nav.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                      {nav.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="p-6 border-t border-white/[0.08]">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-2xl text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #6366f1, #818cf8)",
                boxShadow: "0 8px 32px -8px rgba(99,102,241,0.6)",
              }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
