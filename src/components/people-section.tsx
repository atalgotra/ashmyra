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
  Heart,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Data                                                                      */
/* ─────────────────────────────────────────────────────────────────────────── */

const PRINCIPLES = [
  {
    icon: Cpu,
    title: "Applied Intelligence Over Toys",
    desc: "Zero speculative demos. Every agent is built to connect to live enterprise databases, ERPs, and revenue operations from day one.",
    accent: "#818cf8",
    accentRgb: "129,140,248",
  },
  {
    icon: ShieldCheck,
    title: "Deterministic Guardrails",
    desc: "Autonomous reasoning backed by strict schema enforcement, transparent audit logs, and bulletproof human-in-the-loop controls.",
    accent: "#22d3ee",
    accentRgb: "34,211,238",
  },
  {
    icon: Zap,
    title: "Extreme Execution Velocity",
    desc: "No layers of agency bloat. Founders lead system architecture directly, moving platforms from blueprint to live production in weeks.",
    accent: "#a78bfa",
    accentRgb: "167,139,250",
  },
];

const LEADERS = [
  {
    num: "01",
    name: "Ashish Talgotra",
    title: "Founder & Lead AI Architect",
    bio: "14+ years architecting autonomous multi-agent systems, deep data intelligence layers, and enterprise platforms. Specializes in transforming complex enterprise friction into deterministic, self-executing software engines that scale.",
    skills: ["Agent Swarm Architecture", "Enterprise AI & LLMs", "Real-Time Data Systems", "14+ Yrs Tech"],
    accent: "#818cf8",
    accentRgb: "99,102,241",
    photo: "/hero/ashish-portrait.png",
    photoPosition: "object-top",
    linkedin: "https://www.linkedin.com/in/atalgotra/",
    monogram: null,
    roleBadge: "Founder",
    FooterIcon: Terminal,
    footerLabel: "Core System Architecture",
  },
  {
    num: "02",
    name: "Bella",
    title: "Chief Happiness Officer",
    bio: "Head of office morale, belly rubs, and high-frequency tail wagging. Specializes in de-escalating debugging stress, supervising late-night deployments, and keeping team productivity and dopamine at all-time highs.",
    skills: ["Morale Optimization", "Stress De-escalation", "Treat Auditing", "Zero-Bug Mascot"],
    accent: "#fb7185",
    accentRgb: "251,113,133",
    photo: "/team/bella.png",
    photoPosition: "object-top",
    linkedin: null,
    monogram: null,
    roleBadge: "Office Pup 🐾",
    FooterIcon: Heart,
    footerLabel: "Chief Happiness & Morale",
  },
  {
    num: "03",
    name: "Swati Arora",
    title: "Co-Founder & Business Strategy",
    bio: "Directs executive strategy, enterprise market delivery, and commercial alliances. Ensures every Ashmyra product and engagement is grounded in clear business ROI, frictionless client execution, and measurable revenue acceleration.",
    skills: ["Enterprise Strategy", "GTM & Market Scale", "Strategic Alliances", "Operational Delivery"],
    accent: "#22d3ee",
    accentRgb: "34,211,238",
    photo: null,
    photoPosition: "object-center",
    linkedin: null,
    monogram: "SA",
    roleBadge: "Co-Founder",
    FooterIcon: Layers,
    footerLabel: "Commercial Scale & Delivery",
  },
  {
    num: "04",
    name: "Prince Rehan",
    title: "Head — IT & Software Development",
    bio: "Directs enterprise IT infrastructure, technical systems architecture, and end-to-end software delivery. Oversees resilient cloud architecture, engineering execution, and mission-critical systems that power operations at scale.",
    skills: ["IT Infrastructure", "Software Engineering", "Cloud Systems", "Technical Delivery"],
    accent: "#a78bfa",
    accentRgb: "168,85,247",
    photo: "/team/prince-rehan.jpg",
    photoPosition: "object-top",
    linkedin: null,
    monogram: null,
    roleBadge: "Head of IT",
    FooterIcon: Code2,
    footerLabel: "IT & Systems Delivery",
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
      className="relative bg-[#030406] overflow-hidden"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
    >
      <div id="founders" className="sr-only" aria-hidden="true" />

      {/* ── Ambient Atmosphere ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(99,102,241,0.13) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[60vw] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 0% 100%, rgba(34,211,238,0.06) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 sm:pt-20 pb-20 sm:pb-28">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[11px] font-mono font-semibold tracking-wider text-indigo-400 uppercase">
                Leadership &amp; Technical Foundation
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Built by people who&apos;ve{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #818cf8 0%, #22d3ee 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                lived the problem.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 font-sans max-w-xl leading-relaxed lg:text-right">
            Ashmyra was founded by engineering practitioners — leaders who have spent over a decade
            building AI architectures, data platforms, and high-concurrency systems for real-world enterprise operations.
          </p>
        </div>

        {/* ── Leadership Cards ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {LEADERS.map((leader) => {
            const FooterIcon = leader.FooterIcon;
            return (
              <div
                key={leader.num}
                className="group relative rounded-[22px] overflow-hidden flex flex-col"
                style={{
                  minHeight: "540px",
                  background: `linear-gradient(160deg, rgba(14,16,28,0.97) 0%, rgba(6,8,16,0.99) 100%)`,
                  border: `1px solid rgba(${leader.accentRgb}, 0.22)`,
                  boxShadow: `0 30px 70px -20px rgba(0,0,0,0.95), 0 0 50px -15px rgba(${leader.accentRgb}, 0.12)`,
                  transition: "transform 0.45s cubic-bezier(0.23,1,0.32,1), box-shadow 0.45s cubic-bezier(0.23,1,0.32,1), border-color 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-10px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 40px 80px -20px rgba(0,0,0,0.95), 0 0 60px -10px rgba(${leader.accentRgb}, 0.28)`;
                  (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${leader.accentRgb}, 0.55)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 30px 70px -20px rgba(0,0,0,0.95), 0 0 50px -15px rgba(${leader.accentRgb}, 0.12)`;
                  (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${leader.accentRgb}, 0.22)`;
                }}
              >
                {/* ── Portrait / Monogram area ───────────────────────────── */}
                <div className="relative overflow-hidden shrink-0" style={{ height: "272px" }}>
                  {leader.photo ? (
                    <>
                      <Image
                        src={leader.photo}
                        alt={leader.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        priority={leader.num === "01" || leader.num === "02"}
                        className={`object-cover ${leader.photoPosition} transition-transform duration-700 group-hover:scale-[1.06]`}
                      />
                      {/* Bottom-fade overlay so image bleeds into card body */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to bottom,
                            rgba(0,0,0,0.05) 0%,
                            rgba(6,8,16,0) 30%,
                            rgba(6,8,16,0.65) 70%,
                            rgba(6,8,16,0.99) 100%)`,
                        }}
                      />
                      {/* Top-right ambient accent bloom */}
                      <div
                        className="absolute -top-10 -right-10 w-44 h-44 rounded-full pointer-events-none"
                        style={{
                          background: `radial-gradient(circle, rgba(${leader.accentRgb}, 0.35) 0%, transparent 70%)`,
                          filter: "blur(35px)",
                        }}
                      />
                    </>
                  ) : (
                    /* Monogram card (Swati — no photo) */
                    <div
                      className="w-full h-full flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: `linear-gradient(145deg,
                          rgba(${leader.accentRgb}, 0.1) 0%,
                          rgba(99,102,241, 0.06) 50%,
                          rgba(${leader.accentRgb}, 0.13) 100%)`,
                      }}
                    >
                      {/* Large ghost letter */}
                      <span
                        className="absolute select-none pointer-events-none"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "180px",
                          fontWeight: 900,
                          color: `rgba(${leader.accentRgb}, 0.08)`,
                          lineHeight: 1,
                          letterSpacing: "0.1em",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          userSelect: "none",
                        }}
                      >
                        {leader.monogram}
                      </span>
                      {/* Central glowing badge */}
                      <div
                        className="relative z-10 w-28 h-28 rounded-full flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, rgba(${leader.accentRgb}, 0.22) 0%, rgba(99,102,241,0.18) 100%)`,
                          border: `2px solid rgba(${leader.accentRgb}, 0.45)`,
                          boxShadow: `0 0 50px rgba(${leader.accentRgb}, 0.4), inset 0 0 20px rgba(${leader.accentRgb}, 0.08)`,
                        }}
                      >
                        <span
                          className="text-4xl font-black text-white"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {leader.monogram}
                        </span>
                      </div>
                      {/* Grid pattern overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `linear-gradient(rgba(${leader.accentRgb},0.04) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(${leader.accentRgb},0.04) 1px, transparent 1px)`,
                          backgroundSize: "32px 32px",
                        }}
                      />
                      {/* Bottom fade */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to bottom, transparent 40%, rgba(6,8,16,0.99) 100%)`,
                        }}
                      />
                    </div>
                  )}

                  {/* Editorial number tag — top left */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="text-[11px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-lg"
                      style={{
                        color: leader.accent,
                        background: `rgba(${leader.accentRgb}, 0.15)`,
                        border: `1px solid rgba(${leader.accentRgb}, 0.3)`,
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                      }}
                    >
                      {leader.num}
                    </span>
                  </div>
                </div>

                {/* ── Info Panel ─────────────────────────────────────────── */}
                <div className="flex flex-col flex-1 px-5 sm:px-6 pb-6 pt-3">
                  {/* Name */}
                  <h3
                    className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {leader.name}
                  </h3>
                  {/* Title */}
                  <div
                    className="text-[11px] font-mono font-semibold mb-3 tracking-wide"
                    style={{ color: leader.accent }}
                  >
                    {leader.title}
                  </div>
                  {/* Bio */}
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-4 flex-1">
                    {leader.bio}
                  </p>
                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {leader.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-[3px] rounded-md text-[10px] font-mono"
                        style={{
                          color: leader.accent,
                          background: `rgba(${leader.accentRgb}, 0.1)`,
                          border: `1px solid rgba(${leader.accentRgb}, 0.22)`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div
                    className="pt-3.5 flex items-center justify-between gap-2"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-500 truncate min-w-0">
                      <FooterIcon className="w-3.5 h-3.5 shrink-0" style={{ color: leader.accent }} />
                      <span className="truncate">{leader.footerLabel}</span>
                    </div>
                    {leader.linkedin ? (
                      <Link
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold text-neutral-300 hover:text-white transition-all duration-200 shrink-0"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <span>LinkedIn</span>
                        <ArrowUpRight className="w-3.5 h-3.5" style={{ color: leader.accent }} />
                      </Link>
                    ) : (
                      <span
                        className="text-[10px] font-mono px-2 py-0.5 rounded shrink-0 font-medium"
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

                {/* Hover — inner glow ring (top-right corner) */}
                <div
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, rgba(${leader.accentRgb}, 0.18) 0%, transparent 70%)`,
                    filter: "blur(50px)",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* ── Engineering Tenets Strip ───────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {PRINCIPLES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative p-5 sm:p-6 rounded-2xl overflow-hidden group/tenet transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(160deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.012) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `rgba(${item.accentRgb}, 0.12)`,
                      border: `1px solid rgba(${item.accentRgb}, 0.28)`,
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
                {/* Corner accent glow on hover */}
                <div
                  className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full pointer-events-none opacity-0 group-hover/tenet:opacity-100 transition-opacity duration-400"
                  style={{
                    background: `radial-gradient(circle, rgba(${item.accentRgb}, 0.2) 0%, transparent 70%)`,
                    filter: "blur(20px)",
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
