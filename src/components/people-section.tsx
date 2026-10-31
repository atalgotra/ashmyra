"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  Zap,
  ArrowUpRight,
  Layers,
  Terminal,
  Code2,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Data                                                                      */
/* ─────────────────────────────────────────────────────────────────────────── */

const PRINCIPLES = [
  {
    icon: Cpu,
    title: "Applied Intelligence Over Toys",
    desc: "Zero speculative demos. Every system is engineered to integrate with live enterprise data layers, APIs, and operational workflows.",
    accent: "#818cf8",
    accentRgb: "129,140,248",
  },
  {
    icon: ShieldCheck,
    title: "Deterministic Guardrails",
    desc: "Autonomous multi-agent loops governed by strict schema validation, auditable execution traces, and human-in-the-loop controls.",
    accent: "#22d3ee",
    accentRgb: "34,211,238",
  },
  {
    icon: Zap,
    title: "Extreme Execution Velocity",
    desc: "Engineering leads design and deploy system architecture directly. We move platforms from specification to live production with speed.",
    accent: "#a78bfa",
    accentRgb: "167,139,250",
  },
];

const LEADERS = [
  {
    num: "01",
    name: "Swati Arora",
    title: "Founder",
    roleSubtitle: "Business Strategy & Operations",
    bio: "Leads executive leadership, commercial direction, and enterprise partnerships. Ensures every Ashmyra engagement delivers measurable business return, reliable execution, and sustainable operational acceleration.",
    skills: ["Enterprise Strategy", "Commercial Scale", "Strategic Alliances", "Operations Leadership"],
    accent: "#22d3ee",
    accentRgb: "34,211,238",
    photo: null,
    photoPosition: "object-center",
    linkedin: null,
    monogram: "SA",
    roleBadge: "Founder",
    FooterIcon: Layers,
    footerLabel: "Executive Leadership",
  },
  {
    num: "02",
    name: "Ashish Talgotra",
    title: "AI Engineer / Data Scientist",
    roleSubtitle: "Systems & Data Architecture",
    bio: "Architects autonomous multi-agent systems, real-time data pipelines, and deep intelligence layers. Focuses on converting complex enterprise bottlenecks into deterministic, scalable software engines that execute reliably in production.",
    skills: ["Agent Swarm Architecture", "LLM Orchestration", "Real-Time Data Pipelines", "Distributed Systems"],
    accent: "#818cf8",
    accentRgb: "99,102,241",
    photo: "/hero/ashish-portrait.png",
    photoPosition: "object-top",
    linkedin: "https://www.linkedin.com/in/atalgotra/",
    monogram: null,
    roleBadge: "Engineering",
    FooterIcon: Terminal,
    footerLabel: "AI & Data Architecture",
  },
  {
    num: "03",
    name: "Prince Rehan",
    title: "Head — IT & Software Development",
    roleSubtitle: "Infrastructure & Engineering Execution",
    bio: "Directs enterprise cloud infrastructure, software development lifecycles, and technical delivery. Oversees resilient cloud systems, deployment pipelines, and high-concurrency architectures that power operations at scale.",
    skills: ["Cloud Architecture", "Software Engineering", "System Resilience", "Technical Delivery"],
    accent: "#a78bfa",
    accentRgb: "168,85,247",
    photo: "/team/prince-rehan.jpg",
    photoPosition: "object-top",
    linkedin: null,
    monogram: null,
    roleBadge: "IT & Systems",
    FooterIcon: Code2,
    footerLabel: "Software & Cloud Systems",
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
      className="relative bg-[#05070c] overflow-hidden"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
    >
      <div id="founders" className="sr-only" aria-hidden="true" />

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 sm:pt-20 pb-20 sm:pb-28">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-[11px] font-mono font-semibold tracking-wider text-indigo-400 uppercase">
                Leadership &amp; Technical Foundation
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Engineered by practitioners who{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                build for production.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 font-sans max-w-xl leading-relaxed lg:text-right">
            Ashmyra brings together software engineering discipline, applied artificial intelligence,
            and enterprise systems expertise to deliver robust, scalable technology solutions.
          </p>
        </div>

        {/* ── Leadership Cards (3-Column Grid) ──────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {LEADERS.map((leader) => {
            const FooterIcon = leader.FooterIcon;
            return (
              <div
                key={leader.num}
                className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  minHeight: "530px",
                  background: "linear-gradient(165deg, rgba(13, 16, 28, 0.95) 0%, rgba(7, 9, 16, 0.98) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 20px 50px -15px rgba(0, 0, 0, 0.8)",
                }}
              >
                {/* Portrait Area */}
                <div className="relative overflow-hidden shrink-0" style={{ height: "260px" }}>
                  {leader.photo ? (
                    <>
                      <Image
                        src={leader.photo}
                        alt={leader.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={leader.num === "02"}
                        className={`object-cover ${leader.photoPosition} transition-transform duration-700 group-hover:scale-105`}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(7,9,16,0.3) 40%, rgba(7,9,16,0.95) 100%)",
                        }}
                      />
                    </>
                  ) : (
                    /* Monogram frame */
                    <div
                      className="w-full h-full flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: `linear-gradient(145deg, rgba(${leader.accentRgb}, 0.1) 0%, rgba(13, 16, 28, 0.9) 100%)`,
                      }}
                    >
                      <span
                        className="absolute select-none pointer-events-none"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "140px",
                          fontWeight: 900,
                          color: `rgba(${leader.accentRgb}, 0.06)`,
                          lineHeight: 1,
                        }}
                      >
                        {leader.monogram}
                      </span>
                      <div
                        className="relative z-10 w-24 h-24 rounded-2xl flex items-center justify-center"
                        style={{
                          background: `rgba(${leader.accentRgb}, 0.15)`,
                          border: `1px solid rgba(${leader.accentRgb}, 0.35)`,
                        }}
                      >
                        <span
                          className="text-3xl font-bold text-white"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {leader.monogram}
                        </span>
                      </div>
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(to bottom, transparent 40%, rgba(7,9,16,0.95) 100%)",
                        }}
                      />
                    </div>
                  )}

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="text-[10px] font-mono font-semibold tracking-widest px-2.5 py-1 rounded-md"
                      style={{
                        color: leader.accent,
                        background: "rgba(7, 9, 16, 0.75)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {leader.num}
                    </span>
                  </div>
                </div>

                {/* Info Panel */}
                <div className="flex flex-col flex-1 px-6 pb-6 pt-3">
                  <div className="mb-3">
                    <h3
                      className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {leader.name}
                    </h3>
                    <div
                      className="text-xs font-mono font-semibold mt-1"
                      style={{ color: leader.accent }}
                    >
                      {leader.title}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
                      {leader.roleSubtitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-[12.5px] text-neutral-300 leading-relaxed font-sans mb-4 flex-1">
                    {leader.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {leader.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono text-neutral-300 bg-white/[0.04] border border-white/[0.08]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div
                    className="pt-4 flex items-center justify-between gap-2"
                    style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
                  >
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 truncate min-w-0">
                      <FooterIcon className="w-3.5 h-3.5 shrink-0" style={{ color: leader.accent }} />
                      <span className="truncate">{leader.footerLabel}</span>
                    </div>

                    {leader.linkedin ? (
                      <Link
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-mono font-semibold text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all shrink-0"
                      >
                        <span>LinkedIn</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
                      </Link>
                    ) : (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-neutral-400 shrink-0">
                        {leader.roleBadge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subtle border highlight on hover */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    border: `1px solid rgba(${leader.accentRgb}, 0.4)`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* ── Engineering Tenets ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PRINCIPLES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `rgba(${item.accentRgb}, 0.1)`,
                      border: `1px solid rgba(${item.accentRgb}, 0.25)`,
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: item.accent }} />
                  </div>
                  <h4
                    className="text-sm sm:text-base font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
