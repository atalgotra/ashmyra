"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative bg-[#040508] border-t border-white/[0.08] pt-20 pb-12 overflow-hidden text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Minimal Block: Large Ashmyra Logo + Short Statement (Requirement 30) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Large Logo */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-[#07090e] border border-indigo-500/35 p-1.5 shadow-xl shadow-indigo-500/20 group-hover:border-indigo-400 transition-all">
                <Image
                  src="/brand/ashmyra-icon.png"
                  alt="Ashmyra Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-white group-hover:text-indigo-200 transition-colors font-sans">
                  ASHMYRA
                </span>
                <span className="text-xs tracking-[0.25em] text-indigo-400 uppercase font-mono font-bold">
                  Technologies
                </span>
              </div>
            </Link>
          </div>

          {/* Short Statement: AI. SOFTWARE. INTELLIGENCE. (Requirement 30) */}
          <div className="font-mono text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-widest uppercase">
            AI &bull; SOFTWARE &bull; INTELLIGENCE.
          </div>

        </div>

        {/* Concise Navigation (Requirement 30: "Then concise navigation. Do not create a huge sitemap.") */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs font-mono">
          <div>
            <span className="text-white font-bold uppercase tracking-wider block mb-3 text-neutral-300">
              Core Systems
            </span>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/products/ai" className="hover:text-white transition-colors">Agentic AI</Link></li>
              <li><Link href="/products/seo" className="hover:text-white transition-colors">SEO Intelligence</Link></li>
              <li><Link href="/products/hrms" className="hover:text-white transition-colors">Unified HRMS</Link></li>
              <li><Link href="#systems" className="hover:text-white transition-colors">Project Management</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-white font-bold uppercase tracking-wider block mb-3 text-neutral-300">
              Capabilities
            </span>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="#agentic-systems" className="hover:text-white transition-colors">Social Platform</Link></li>
              <li><Link href="#capabilities" className="hover:text-white transition-colors">Android &amp; 3D Apps</Link></li>
              <li><Link href="#capabilities" className="hover:text-white transition-colors">Enterprise Portals</Link></li>
              <li><Link href="#capabilities" className="hover:text-white transition-colors">Data Pipelines</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-white font-bold uppercase tracking-wider block mb-3 text-neutral-300">
              Organization
            </span>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="#about" className="hover:text-white transition-colors">Human Story</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">Founders</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Start a Conversation</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-white font-bold uppercase tracking-wider block mb-3 text-neutral-300">
              Legal &amp; Privacy
            </span>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal/security" className="hover:text-white transition-colors">Security Architecture</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Status & Copyright */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Ashmyra Technologies. All rights reserved.
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>All Intelligent Systems Operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
