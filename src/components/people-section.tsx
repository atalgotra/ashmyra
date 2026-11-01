"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Terminal,
  Code2,
  Layers,
  Heart,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Data                                                                      */
/* ─────────────────────────────────────────────────────────────────────────── */

const LEADERS = [
  {
    num: "01",
    name: "Ashish Talgotra",
    title: "AI Engineer / Data Scientist",
    roleSubtitle: "Systems, Data & Intelligent Architecture",
    bio: "Specializes in AI engineering, data science, intelligent software systems, automation and technical architecture. Focuses on architecting autonomous multi-agent pipelines and resilient software engines that execute reliably in production.",
    skills: [
      "AI Engineering",
      "Data Science",
      "Multi-Agent Systems",
      "Technical Architecture",
    ],
    accent: "#818cf8",
    accentRgb: "129, 140, 248",
    photo: "/team/ashish-talgotra.jpg",
    monogram: null,
    photoPosition: "object-[center_20%]",
    linkedin: "https://www.linkedin.com/in/atalgotra/",
    roleBadge: "AI & Data Architecture",
    FooterIcon: Terminal,
    footerLabel: "AI & Systems Engineering",
  },
  {
    num: "02",
    name: "Prince Rehan",
    title: "Head — IT & Software Development",
    roleSubtitle: "Infrastructure & Engineering Execution",
    bio: "Directs enterprise software engineering, technology development and technical execution. Oversees resilient cloud systems, deployment pipelines and high-concurrency architectures that power operations at scale.",
    skills: [
      "Software Engineering",
      "Cloud Architecture",
      "Technical Execution",
      "System Resilience",
    ],
    accent: "#a78bfa",
    accentRgb: "168, 85, 247",
    photo: "/team/prince-rehan.jpg",
    monogram: null,
    photoPosition: "object-top",
    linkedin: null,
    roleBadge: "Head of IT & Software",
    FooterIcon: Code2,
    footerLabel: "IT & Software Development",
  },
  {
    num: "03",
    name: "Bella",
    title: "Chief Happiness Officer",
    roleSubtitle: "Studio Morale & Well-being",
    bio: "Keeping spirits high, bringing a little joy to the everyday, and reminding us that great work deserves a happy workplace.",
    skills: [
      "Morale Optimization",
      "Stress De-escalation",
      "Team Well-being",
      "Happy Workplace",
    ],
    accent: "#fb7185",
    accentRgb: "251, 113, 133",
    photo: "/team/bella.png",
    monogram: null,
    photoPosition: "object-top",
    linkedin: null,
    roleBadge: "Chief Happiness Officer",
    FooterIcon: Heart,
    footerLabel: "Chief Happiness Officer",
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

        {/* ── Leadership & Team Cards (Balanced 3-Column Grid) ─────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {LEADERS.map((leader) => {
            const FooterIcon = leader.FooterIcon;
            const isBella = leader.num === "03";

            return (
              <div
                key={leader.num}
                className="group relative rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  minHeight: "560px",
                  background: isBella
                    ? "linear-gradient(165deg, rgba(20, 13, 24, 0.95) 0%, rgba(10, 7, 14, 0.98) 100%)"
                    : "linear-gradient(165deg, rgba(13, 16, 28, 0.95) 0%, rgba(7, 9, 16, 0.98) 100%)",
                  border: isBella
                    ? "1px solid rgba(251, 113, 133, 0.22)"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isBella
                    ? "0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 40px -20px rgba(251, 113, 133, 0.12)"
                    : "0 20px 50px -15px rgba(0, 0, 0, 0.8)",
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
                  className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none group-hover:opacity-35 transition-opacity"
                  style={{ background: leader.accent }}
                />

                {/* Portrait Area */}
                <div className="relative overflow-hidden shrink-0" style={{ height: "310px" }}>
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={leader.num === "01" || leader.num === "02"}
                    className={`object-cover ${leader.photoPosition} transition-transform duration-700 group-hover:scale-105`}
                  />
                  {/* Cinematic Bottom Gradient Fade */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(7,9,16,0.3) 55%, rgba(7,9,16,0.98) 100%)",
                    }}
                  />


                  {/* Top Right: High-Contrast Role Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
                      style={{
                        background: isBella ? "rgba(18, 10, 20, 0.92)" : "rgba(5, 7, 12, 0.92)",
                        border: `1px solid rgba(${leader.accentRgb}, 0.5)`,
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 shadow-[0_0_8px_currentColor]"
                        style={{ background: leader.accent, color: leader.accent }}
                      />
                      <span className="text-[11px] font-mono font-bold tracking-wider text-white uppercase">
                        {leader.roleBadge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info Panel */}
                <div className="flex flex-col flex-1 px-6 pb-6 pt-3">
                  <div className="mb-3">
                    <h3
                      className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-white transition-colors"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {leader.name}
                    </h3>
                    <div
                      className="text-xs sm:text-[13px] font-mono font-semibold mt-1"
                      style={{ color: leader.accent }}
                    >
                      {leader.title}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
                      {leader.roleSubtitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-sans mb-5 flex-1">
                    {leader.bio}
                  </p>

                  {/* Competencies / Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {leader.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[10.5px] font-mono text-neutral-300 bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.2] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div
                    className="pt-4 flex items-center justify-between gap-2 mt-auto"
                    style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 truncate min-w-0">
                      <FooterIcon
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: leader.accent }}
                      />
                      <span className="truncate">{leader.footerLabel}</span>
                    </div>

                    {leader.linkedin ? (
                      <Link
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold text-neutral-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] transition-all shrink-0 hover:scale-105"
                      >
                        <span>LinkedIn</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
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
