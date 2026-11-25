import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TeamScrollHandler } from "@/components/team-scroll-handler";
import { Breadcrumb } from "@/components/breadcrumb";
import {
  ArrowRight,
  ArrowUpRight,
  Terminal,
  Code2,
  Layers,
  Cpu,
  Target,
  Activity,
  ShieldCheck,
  Workflow,
  Sparkles,
  Users,
  Database,
  Bot,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team & Company",
  description:
    "Engineering intelligence. Building what's next. Meet the team, mission, and engineering philosophy behind Ashmyra Technologies.",
  alternates: { canonical: "https://www.ashmyra.com/team" },
  openGraph: {
    title: "Our Team & Company | Ashmyra",
    description:
      "Engineering intelligence. Building what's next. Meet the team, mission, and engineering philosophy behind Ashmyra Technologies.",
    url: "https://www.ashmyra.com/team",
  },
};

/* ── 02: Our Mission Pillars (3 Core Themes) ────────────────────────────── */
const MISSION_PILLARS = [
  {
    icon: Bot,
    title: "Agentic AI",
    desc: "Autonomous multi-agent systems that decompose goals into tool calls, interface with live enterprise databases, and execute workflows safely.",
    tag: "Autonomous Action",
  },
  {
    icon: Code2,
    title: "Intelligent Software",
    desc: "Bespoke platforms engineered from first principles to automate mission-critical operations and eliminate manual cognitive bottlenecks.",
    tag: "Software Engineering",
  },
  {
    icon: Database,
    title: "Data-Driven Systems",
    desc: "Resilient streaming queues, idempotent worker pipelines, and low-latency storage layers ensuring transaction integrity across distributed systems.",
    tag: "Data Infrastructure",
  },
];

/* ── 03: Four Engineering Principles ─────────────────────────────────────────── */
const PHILOSOPHY_PRINCIPLES = [
  {
    num: "01",
    icon: Target,
    title: "Understand the Problem",
    desc: "Before drafting architecture or writing code, interrogate the operational reality, failure modes, data contracts, and the exact business objective.",
  },
  {
    num: "02",
    icon: Layers,
    title: "Design the Right Architecture",
    desc: "Select appropriate data isolation, state management, and latency budgets tailored to genuine enterprise constraints and scaling targets.",
  },
  {
    num: "03",
    icon: Cpu,
    title: "Engineer with Precision",
    desc: "Enforce strict schema contracts, deterministic testing, automated validation guardrails, and immutable audit logging across all services.",
  },
  {
    num: "04",
    icon: Activity,
    title: "Build for Continuous Improvement",
    desc: "Integrate real-time telemetry, error observability, and closed feedback loops to ensure systems evolve, self-heal, and adapt in production.",
  },
];

/* ── 04: Approved Leadership & Team ─────────────────────────────────────────── */
const TEAM_MEMBERS = [
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
    roleBadge: "Founder & Lead Architect",
    FooterIcon: Terminal,
    footerLabel: "AI & Systems Engineering",
  },
] as const;

export default function TeamPage() {
  return (
    <div
      className="flex flex-col min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <TeamScrollHandler />

      {/* Legacy navigation anchor aliases */}
      <div id="about" className="sr-only" aria-hidden="true" />
      <div id="leadership" className="sr-only" aria-hidden="true" />
      <div id="founders" className="sr-only" aria-hidden="true" />
      <div id="approach" className="sr-only" aria-hidden="true" />

      {/* ── SECTION 01 — COMPANY INTRODUCTION ──────────────────────────────── */}
      <section
        className="relative pt-28 pb-12 sm:pt-36 sm:pb-14 border-b overflow-hidden transition-colors"
        style={{ borderColor: "var(--border)" }}
      >
        {/* Ambient lighting & dot background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[85vw] h-[380px]"
            style={{
              background:
                "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(99,102,241,0.08) 0%, rgba(34,211,238,0.04) 45%, transparent 75%)",
              filter: "blur(60px)",
            }}
          />
          <div className="absolute inset-0 dot-bg opacity-15" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
          {/* Breadcrumb Navigation Trail */}
          <div className="mb-6 flex justify-center">
            <Breadcrumb items={[{ name: "Our Team & Company" }]} />
          </div>

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase mb-6 shadow-sm"
            style={{
              backgroundColor: "var(--theme-pill-bg)",
              border: "1px solid var(--theme-pill-border)",
              color: "var(--accent)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent)" }} />
            <span className="font-semibold">ABOUT ASHMYRA TECHNOLOGIES</span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
          >
            Engineering Intelligence.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 50%, var(--accent-cyan) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Building What&apos;s Next.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-sans" style={{ color: "var(--text-muted)" }}>
            Ashmyra Technologies engineers intelligent software, AI-driven systems and digital
            platforms designed around real business challenges.
          </p>

          {/* Page Section Quick-Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#mission"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs transition-all shadow-sm hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              <span>Our Mission</span>
              <ArrowRight className="w-3 h-3" style={{ color: "var(--accent)" }} />
            </a>
            <a
              href="#philosophy"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs transition-all shadow-sm hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              <span>Engineering Philosophy</span>
              <ArrowRight className="w-3 h-3" style={{ color: "var(--accent)" }} />
            </a>
            <a
              href="#team"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs transition-all shadow-sm hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              <span>Meet the Team</span>
              <ArrowRight className="w-3 h-3" style={{ color: "var(--accent)" }} />
            </a>
            <a
              href="#careers"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs transition-all shadow-sm hover:scale-[1.02] font-semibold"
              style={{
                backgroundColor: "var(--theme-pill-bg)",
                border: "1px solid var(--theme-pill-border)",
                color: "var(--accent)",
              }}
            >
              <span>Join Us</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 02 — OUR MISSION ────────────────────────────────────────── */}
      <section
        id="mission"
        className="scroll-mt-28 lg:scroll-mt-36 relative py-20 sm:py-24 border-b transition-colors"
        style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span
              className="text-[11px] font-mono uppercase tracking-widest font-semibold block mb-2"
              style={{ color: "var(--accent)" }}
            >
              OUR MISSION
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight leading-snug mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
            >
              Technology Should Do More Than Respond.
              <br />
              <span style={{ color: "var(--accent)" }}>It Should Act.</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed font-sans" style={{ color: "var(--text-muted)" }}>
              At Ashmyra, we engineer intelligent systems that connect reasoning, business data and
              software workflows — helping organisations move beyond passive digital experiences
              towards purposeful execution.
            </p>
          </div>

          {/* 3 Mission Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MISSION_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 sm:p-7 rounded-2xl transition-all flex flex-col justify-between group shadow-sm hover:scale-[1.01]"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform"
                        style={{
                          backgroundColor: "var(--theme-pill-bg)",
                          border: "1px solid var(--border)",
                          color: "var(--accent)",
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border"
                        style={{
                          backgroundColor: "var(--theme-pill-bg)",
                          borderColor: "var(--border)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {pillar.tag}
                      </span>
                    </div>

                    <h3
                      className="text-lg font-bold transition-colors"
                      style={{ color: "var(--text)" }}
                    >
                      {pillar.title}
                    </h3>

                    <p
                      className="text-xs sm:text-sm leading-relaxed font-sans"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 03 — OUR ENGINEERING PHILOSOPHY ─────────────────────────── */}
      <section
        id="philosophy"
        className="scroll-mt-28 lg:scroll-mt-36 relative py-20 sm:py-24 border-b transition-colors"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span
              className="text-[11px] font-mono uppercase tracking-widest font-bold block mb-2"
              style={{ color: "var(--accent)" }}
            >
              OUR ENGINEERING PHILOSOPHY
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
            >
              Built on Thoughtful Engineering.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed font-sans" style={{ color: "var(--text-muted)" }}>
              Four core principles guiding every architectural decision, data contract, and
              production deployment at Ashmyra.
            </p>
          </div>

          {/* 4 Concise Principles Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PHILOSOPHY_PRINCIPLES.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.num}
                  className="relative p-6 sm:p-7 rounded-2xl transition-all flex flex-col justify-between group shadow-sm hover:scale-[1.01]"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3" style={{ borderBottom: "1px solid var(--border)" }}>
                      <span className="text-xs font-mono font-bold" style={{ color: "var(--accent)" }}>
                        {principle.num}
                      </span>
                      <Icon className="w-4 h-4 transition-colors" style={{ color: "var(--accent)" }} />
                    </div>

                    <h3
                      className="text-base font-bold transition-colors"
                      style={{ color: "var(--text)" }}
                    >
                      {principle.title}
                    </h3>

                    <p className="text-xs sm:text-sm leading-relaxed font-sans" style={{ color: "var(--text-muted)" }}>
                      {principle.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 04 — MEET THE TEAM ──────────────────────────────────────── */}
      <section
        id="team"
        className="scroll-mt-28 lg:scroll-mt-36 relative py-20 sm:py-28 border-b transition-colors"
        style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-16">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3"
                style={{
                  backgroundColor: "var(--theme-pill-bg)",
                  border: "1px solid var(--theme-pill-border)",
                  color: "var(--accent)",
                }}
              >
                <Users className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                <span>Leadership &amp; Technical Foundation</span>
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
              >
                The People Behind the Architecture.
              </h2>
            </div>
            <p className="text-sm sm:text-base font-sans max-w-xl leading-relaxed lg:text-right" style={{ color: "var(--text-muted)" }}>
              Engineered by practitioners who bring together software engineering discipline, applied
              artificial intelligence, and enterprise systems expertise to deliver robust solutions.
            </p>
          </div>

          {/* Leadership Spotlight Card */}
          <div className="max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((leader) => {
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

      {/* ── SECTION 05 — JOIN ASHMYRA (COMPACT CAREERS CTA) ─────────────────── */}
      <section
        id="careers"
        className="scroll-mt-28 lg:scroll-mt-36 relative py-20 sm:py-28 transition-colors"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div
            className="relative rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-sm"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Ambient subtle bloom */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 blur-3xl pointer-events-none opacity-20"
              style={{ backgroundColor: "var(--accent)" }}
            />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span
                className="text-[11px] font-mono uppercase tracking-widest font-semibold block"
                style={{ color: "var(--accent)" }}
              >
                CAREERS &amp; TALENT
              </span>

              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
              >
                Want to Build What&apos;s Next With Us?
              </h2>

              <p
                className="text-sm sm:text-base leading-relaxed font-sans"
                style={{ color: "var(--text-muted)" }}
              >
                We&apos;re always interested in connecting with people who care about thoughtful
                engineering, intelligent systems and meaningful technology.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact?intent=careers"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-xs transition-all shadow-md hover:scale-[1.02] group"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "var(--on-accent)",
                  }}
                >
                  <span className="font-bold">Connect With Ashmyra</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-xs border transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: "var(--theme-pill-bg)",
                    borderColor: "var(--theme-pill-border)",
                    color: "var(--text)",
                  }}
                >
                  <span>Start an Engineering Conversation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
