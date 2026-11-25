"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Terminal,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Data                                                                      */
/* ─────────────────────────────────────────────────────────────────────────── */

const LEADERS = [
  {
    num: "01",
    name: "Ashish Talgotra",
    title: "Founder | AI Architect & Data Scientist",
    roleSubtitle: "Systems, Data & Intelligent Architecture",
    bio: "Specializes in AI engineering, data science, intelligent software systems, automation and technical architecture. Focuses on architecting autonomous multi-agent pipelines and resilient software engines that execute reliably in production.",
    skills: [
      "AI Engineering",
      "Data Science",
      "Multi-Agent Systems",
      "Technical Architecture",
    ],
    accent: "#4f46e5",
    accentRgb: "79, 70, 229",
    photo: "/team/ashish-talgotra.jpg",
    monogram: null,
    photoPosition: "object-[center_20%]",
    linkedin: "https://www.linkedin.com/in/atalgotra/",
    roleBadge: "AI & Data Architecture",
    FooterIcon: Terminal,
    footerLabel: "AI & Systems Engineering",
  },
] as const;

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Component                                                                  */
/* ─────────────────────────────────────────────────────────────────────────── */

export function PeopleSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="people"
      className="relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg)",
        borderTop: "1px solid var(--border)",
        color: "var(--text)",
      }}
    >
      <div id="founders" className="sr-only" aria-hidden="true" />
      <div id="about" className="sr-only" aria-hidden="true" />
      <div id="leadership" className="sr-only" aria-hidden="true" />
      <div id="approach" className="sr-only" aria-hidden="true" />

      {/* ── Ambient Atmosphere ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-bg opacity-15" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[75vw] h-[450px]"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-20 sm:pb-28">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
              <span className="text-[11px] font-mono font-semibold tracking-wider uppercase" style={{ color: "var(--accent)" }}>
                Leadership &amp; Technical Foundation
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight transition-colors duration-300"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
            >
              Engineered by practitioners who{" "}
              <span
                style={{
                  background: "var(--hero-headline-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                build for production.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base font-sans max-w-xl leading-relaxed lg:text-right transition-colors duration-300" style={{ color: "var(--text-muted)" }}>
            Ashmyra brings together software engineering discipline, applied
            artificial intelligence, and enterprise systems expertise to deliver
            robust, scalable technology solutions.
          </p>
        </div>

        {/* ── Leadership Spotlight Card ──────────────────────────────────── */}
        <div className="max-w-5xl mx-auto">
          {LEADERS.map((leader) => {
            const FooterIcon = leader.FooterIcon;

            return (
              <div
                key={leader.num}
                className="group relative rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: `1px solid rgba(${leader.accentRgb}, 0.28)`,
                  boxShadow: "0 20px 50px -15px rgba(0, 0, 0, 0.08), 0 0 0 1px var(--border)",
                }}
              >
                {/* Top Glowing Laser Hairline */}
                <div
                  className="absolute top-0 inset-x-8 h-[1px] opacity-40 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${leader.accent}, transparent)`,
                  }}
                />

                {/* Ambient Backlight Glow */}
                <div
                  className="absolute -top-12 -right-12 w-56 h-56 rounded-full blur-3xl opacity-15 pointer-events-none group-hover:opacity-35 transition-opacity"
                  style={{ background: leader.accent }}
                />

                {/* Portrait Area */}
                <div className="relative overflow-hidden md:col-span-5 min-h-[320px] sm:min-h-[380px] md:min-h-[420px]">
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                    className={`object-cover ${leader.photoPosition} transition-transform duration-700 group-hover:scale-105`}
                  />

                  {/* Subtle Edge Gradient Blend */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, transparent 55%, var(--bg-card) 100%)",
                    }}
                  />

                  {/* Top Left: High-Contrast Role Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full shadow-md transition-colors"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        border: `1px solid rgba(${leader.accentRgb}, 0.45)`,
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 shadow-[0_0_8px_currentColor]"
                        style={{ background: leader.accent, color: leader.accent }}
                      />
                      <span
                        className="text-[11px] font-mono font-bold tracking-wider uppercase"
                        style={{ color: "var(--text)" }}
                      >
                        {leader.roleBadge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info Panel */}
                <div className="md:col-span-7 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <div className="mb-4">
                      <h3
                        className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug transition-colors font-display"
                        style={{ color: "var(--text)" }}
                      >
                        {leader.name}
                      </h3>
                      <div
                        className="text-xs sm:text-sm font-mono font-semibold mt-1"
                        style={{ color: leader.accent }}
                      >
                        {leader.title}
                      </div>
                      <div className="text-xs font-mono mt-0.5" style={{ color: "var(--text-muted)" }}>
                        {leader.roleSubtitle}
                      </div>
                    </div>

                    <p className="text-sm sm:text-[15px] leading-relaxed font-sans mb-6" style={{ color: "var(--text-muted)" }}>
                      {leader.bio}
                    </p>

                    {/* Competencies / Skills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {leader.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-md text-[11px] font-mono border transition-colors"
                          style={{
                            backgroundColor: "var(--theme-pill-bg)",
                            borderColor: "var(--border)",
                            color: "var(--text)",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div
                    className="pt-5 flex items-center justify-between gap-3 mt-auto"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    <div className="flex items-center gap-2 text-xs font-mono truncate min-w-0" style={{ color: "var(--text-muted)" }}>
                      <FooterIcon
                        className="w-4 h-4 shrink-0"
                        style={{ color: leader.accent }}
                      />
                      <span className="truncate">{leader.footerLabel}</span>
                    </div>

                    {leader.linkedin ? (
                      <Link
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all shrink-0 hover:scale-105"
                        style={{
                          backgroundColor: "var(--theme-pill-bg)",
                          border: "1px solid var(--theme-pill-border)",
                          color: "var(--text)",
                        }}
                      >
                        <span>LinkedIn</span>
                        <ArrowUpRight className="w-3.5 h-3.5" style={{ color: leader.accent }} />
                      </Link>
                    ) : (
                      <span
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full shrink-0 font-medium"
                        style={{
                          color: leader.accent,
                          background: `rgba(${leader.accentRgb}, 0.1)`,
                          border: `1px solid rgba(${leader.accentRgb}, 0.22)`,
                        }}
                      >
                        {leader.roleBadge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subtle border highlight on hover */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    border: `1px solid rgba(${leader.accentRgb}, 0.4)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
