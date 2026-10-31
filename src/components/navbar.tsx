"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAV, NavSection } from "@/data/navigation";
import {
  Menu,
  X,
  ChevronDown,
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
  Layers,
  Sparkles,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeDD, setActiveDD] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDD(null);
    setMobileProductsOpen(false);
    setMobileServicesOpen(false);
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

  const getIcon = (title: string) => {
    const cls = "w-4 h-4";
    const t = title.toLowerCase();
    if (t.includes("seo") || t.includes("search") || t.includes("geo")) {
      return <Search className={cls} style={{ color: "#22d3ee" }} />;
    }
    if (t.includes("hrms") || t.includes("workforce") || t.includes("human")) {
      return <Users className={cls} style={{ color: "#10b981" }} />;
    }
    if (t.includes("crm") || t.includes("pipeline") || t.includes("target")) {
      return <Target className={cls} style={{ color: "#f43f5e" }} />;
    }
    if (t.includes("analytics") || t.includes("data")) {
      return <BarChart3 className={cls} style={{ color: "#a78bfa" }} />;
    }
    if (t.includes("automation") || t.includes("orchestrator")) {
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

  const productsNav = MAIN_NAV.find((n) => n.title === "Products");
  const servicesNav = MAIN_NAV.find((n) => n.title === "Services");

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(5, 7, 12, 0.94)"
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

            {/* Logo */}
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
                      onMouseEnter={() => setActiveDD(nav.title)}
                      onMouseLeave={() => setActiveDD(null)}
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

                      {/* Dropdown Menu */}
                      {open && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[560px] z-50 animate-fadeIn">
                          <div
                            className="rounded-2xl p-5 shadow-2xl"
                            style={{
                              background: "rgba(7, 9, 16, 0.98)",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              backdropFilter: "blur(30px)",
                              boxShadow: "0 24px 60px -15px rgba(0,0,0,0.9)",
                            }}
                          >
                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.07] px-1">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                                {nav.title === "Products" ? "Enterprise Software & AI Platforms" : "Engineering Capabilities"}
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

                            <div className="grid grid-cols-1 gap-1">
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
                                    <div className="text-[13px] font-semibold text-neutral-200 group-hover/item:text-white transition-colors truncate">
                                      {item.title}
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
                    className={`px-3.5 py-2 text-[13.5px] font-medium rounded-xl transition-all duration-200 ${
                      isSectionActive
                        ? "text-white bg-white/[0.08]"
                        : "text-neutral-300 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {nav.title}
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
                <span>Start a Conversation</span>
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

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 flex flex-col pt-20"
          style={{
            background: "rgba(5, 7, 12, 0.98)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-2">

            {/* Products Accordion */}
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-left text-sm font-semibold text-white"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-400 transition-transform ${
                    mobileProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileProductsOpen && (
                <div className="px-3 pb-3 space-y-1 border-t border-white/[0.06] pt-2">
                  {productsNav?.items?.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block p-2 rounded-lg text-xs text-neutral-300 hover:text-white hover:bg-white/[0.04]"
                    >
                      <div className="font-medium text-white">{item.title}</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">{item.description}</div>
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    onClick={() => setMobileOpen(false)}
                    className="block pt-2 text-xs font-mono text-indigo-300"
                  >
                    All Products →
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions */}
            <Link
              href="/solutions"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold text-neutral-200 hover:text-white bg-white/[0.02] border border-white/[0.08]"
            >
              <span>Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
            </Link>

            {/* AI */}
            <Link
              href="/products/ai"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold text-neutral-200 hover:text-white bg-white/[0.02] border border-white/[0.08]"
            >
              <span>AI</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
            </Link>

            {/* Services Accordion */}
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-left text-sm font-semibold text-white"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-400 transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="px-3 pb-3 space-y-1 border-t border-white/[0.06] pt-2">
                  {servicesNav?.items?.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block p-2 rounded-lg text-xs text-neutral-300 hover:text-white hover:bg-white/[0.04]"
                    >
                      <div className="font-medium text-white">{item.title}</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">{item.description}</div>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="block pt-2 text-xs font-mono text-indigo-300"
                  >
                    All Services →
                  </Link>
                </div>
              )}
            </div>

            {/* Work */}
            <Link
              href="/our-work"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold text-neutral-200 hover:text-white bg-white/[0.02] border border-white/[0.08]"
            >
              <span>Work</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
            </Link>

            {/* Company */}
            <Link
              href="/team"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold text-neutral-200 hover:text-white bg-white/[0.02] border border-white/[0.08]"
            >
              <span>Company</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
            </Link>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #818cf8)",
                }}
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </nav>
        </div>
      )}
    </>
  );
}
