"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  {
    label: "Products",
    links: [
      { text: "Agentic AI",        href: "/products/ai" },
      { text: "SEO Intelligence",  href: "/products/seo" },
      { text: "Workforce (HRMS)",  href: "/products/hrms" },
      { text: "Data Intelligence", href: "#" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { text: "AI Engineering",   href: "#" },
      { text: "Software",         href: "#" },
      { text: "Automation",       href: "#" },
      { text: "Integrations",     href: "#" },
    ],
  },
  {
    label: "Company",
    links: [
      { text: "Our Work",  href: "/our-work" },
      { text: "People",   href: "#people" },
      { text: "Contact",  href: "/contact" },
    ],
  },
  {
    label: "Legal",
    links: [
      { text: "Privacy", href: "/legal/privacy" },
      { text: "Terms",   href: "/legal/terms" },
    ],
  },
];

export function FooterMinimal() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#020304", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Top ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[1px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)" }}
      />

      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Brand row */}
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-10"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          <Link href="/" className="group inline-flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl overflow-hidden p-1 transition-all group-hover:scale-105"
              style={{
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.3)",
                boxShadow: "0 0 16px rgba(99,102,241,0.15)",
              }}
            >
              <Image src="/brand/ashmyra-icon.png" alt="Ashmyra" width={40} height={40} className="w-full h-full object-contain" />
            </div>
            <div>
              <div
                className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                ASHMYRA
              </div>
              <div className="section-label text-indigo-500 mt-0.5">Technologies</div>
            </div>
          </Link>

          <div className="section-label text-neutral-600">
            AI &nbsp;·&nbsp; SOFTWARE &nbsp;·&nbsp; INTELLIGENCE
          </div>
        </div>

        {/* Nav grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-10"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          {NAV.map((col) => (
            <div key={col.label}>
              <div className="section-label text-neutral-600 mb-4">{col.label}</div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.text}>
                    <Link
                      href={l.href}
                      className="text-xs text-neutral-500 hover:text-white transition-colors font-sans"
                    >
                      {l.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="section-label text-neutral-700">
            © {new Date().getFullYear()} Ashmyra Technologies. All rights reserved.
          </span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="section-label text-emerald-700">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
