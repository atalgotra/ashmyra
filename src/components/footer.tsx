"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Globe,
  Terminal,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#030407] border-t border-white/[0.08] overflow-hidden text-neutral-400">
      {/* ── Ambient Background Glow & Top Beam ──────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top glowing horizon beam */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[85vw] h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.6) 25%, rgba(34,211,238,0.8) 50%, rgba(167,139,250,0.6) 75%, transparent 100%)",
            boxShadow: "0 0 25px 2px rgba(99,102,241,0.5)",
          }}
        />
        {/* Deep ambient radial bloom */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[350px]"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99,102,241,0.12) 0%, rgba(34,211,238,0.04) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="absolute inset-0 dot-bg opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 sm:pt-20 pb-12 space-y-16">

        {/* ── Top Hero Strip: Brand Presence + Live Contact Hub ─────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.07] items-start">

          {/* Left: Brand Identity & Vision (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-5">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-[#070912] border border-indigo-500/40 p-1.5 shadow-2xl shadow-indigo-500/25 group-hover:border-indigo-400 group-hover:scale-105 transition-all">
                <Image
                  src="/brand/ashmyra-icon.png"
                  alt="Ashmyra Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-indigo-200 transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  ASHMYRA
                </span>
                <span className="text-[11px] tracking-[0.25em] text-indigo-400 uppercase font-mono font-bold">
                  Technologies
                </span>
              </div>
            </Link>

            <p className="text-sm sm:text-base text-neutral-300 font-sans max-w-lg leading-relaxed">
              We engineer autonomous AI agents, enterprise software platforms, and real-time data
              systems designed for deterministic execution at scale.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/25">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                AI Agents &bull; Enterprise SaaS &bull; Data
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/25">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open for Engagements
              </span>
            </div>
          </div>

          {/* Right: Direct Enterprise Communication Hub (lg:col-span-6) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-white/[0.04] to-white/[0.015] border border-white/[0.1] shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <span className="text-xs font-mono font-semibold tracking-wider text-indigo-300 uppercase">
                  Direct Executive Contact
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  Response within 4h
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <Link
                  href="mailto:info@ashmyra.com"
                  className="group flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.025] hover:bg-indigo-500/10 border border-white/[0.06] hover:border-indigo-400/35 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Email Us</div>
                    <div className="text-sm font-semibold text-white group-hover:text-indigo-300 truncate transition-colors">
                      info@ashmyra.com
                    </div>
                  </div>
                </Link>

                {/* Telephone */}
                <a
                  href="tel:+919873746467"
                  className="group flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.025] hover:bg-cyan-500/10 border border-white/[0.06] hover:border-cyan-400/35 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Direct Line</div>
                    <div className="text-sm font-semibold font-mono text-white group-hover:text-cyan-300 truncate transition-colors">
                      +91-9873746467
                    </div>
                  </div>
                </a>
              </div>

              {/* Location strip */}
              <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>New Delhi / NCR &bull; Global Operations</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-500">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Worldwide Delivery</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Navigation Grid (High contrast, modern typography) ─────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1 */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span>Core Systems</span>
            </div>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link href="/products/ai" className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Agentic AI Swarms</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                </Link>
              </li>
              <li>
                <Link href="/products/seo" className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>SEO Intelligence</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                </Link>
              </li>
              <li>
                <Link href="/products/hrms" className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Intelligent Workforce (HRMS)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                </Link>
              </li>
              <li>
                <Link href="/products/analytics" className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Data &amp; Analytics Layer</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Capabilities</span>
            </div>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link href="/services/ai-development" className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Multi-Agent Engineering</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link href="/services/software-development" className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Enterprise Software SaaS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Autonomous SEO Pipelines</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link href="/products/web" className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>High-Performance 3D Web</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Organization</span>
            </div>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link href="/our-work" className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Selected Work (Proof)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Founding Team</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/ashmyra" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Company LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Security &amp; Legal</span>
            </div>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link href="/legal/privacy" className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Privacy Policy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Terms of Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                </Link>
              </li>
              <li>
                <Link href="/legal/security" className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Security Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400/90 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Enterprise SLA Grade</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Status, Operational Health & Copyright ─────────────────── */}
        <div className="pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-5 text-xs font-mono text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} Ashmyra Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational &bull; 99.99% Uptime</span>
            </div>
            <span className="hidden md:inline text-neutral-600">&bull;</span>
            <span className="hidden md:inline text-neutral-500">Engineered with Precision</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
