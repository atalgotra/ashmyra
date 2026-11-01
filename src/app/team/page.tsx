import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollToTopOnMount } from "@/components/scroll-to-top-on-mount";
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
  Heart,
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

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030408] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <ScrollToTopOnMount />

      {/* Legacy navigation anchor aliases */}
      <div id="about" className="sr-only" aria-hidden="true" />
      <div id="leadership" className="sr-only" aria-hidden="true" />
      <div id="founders" className="sr-only" aria-hidden="true" />
      <div id="approach" className="sr-only" aria-hidden="true" />

      {/* ── SECTION 01 — COMPANY INTRODUCTION ──────────────────────────────── */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-14 border-b border-white/[0.06] overflow-hidden">
        {/* Ambient lighting & dot background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[85vw] h-[380px]"
            style={{
              background:
                "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(99,102,241,0.15) 0%, rgba(34,211,238,0.06) 45%, transparent 75%)",
              filter: "blur(60px)",
            }}
          />
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
          {/* Breadcrumb Navigation Trail */}
          <div className="mb-6 flex justify-center">
            <Breadcrumb items={[{ name: "Our Team & Company" }]} />
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-[11px] font-mono tracking-widest text-cyan-300 uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>ABOUT ASHMYRA TECHNOLOGIES</span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Engineering Intelligence.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-indigo-200">
              Building What&apos;s Next.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
            Ashmyra Technologies engineers intelligent software, AI-driven systems and digital
            platforms designed around real business challenges.
          </p>

          {/* Page Section Quick-Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#mission"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 hover:text-white font-mono text-xs border border-white/[0.08] hover:border-white/[0.15] transition-all"
            >
              <span>Our Mission</span>
              <ArrowRight className="w-3 h-3 text-cyan-400" />
            </a>
            <a
              href="#philosophy"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 hover:text-white font-mono text-xs border border-white/[0.08] hover:border-white/[0.15] transition-all"
            >
              <span>Engineering Philosophy</span>
              <ArrowRight className="w-3 h-3 text-indigo-400" />
            </a>
            <a
              href="#team"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 hover:text-white font-mono text-xs border border-white/[0.08] hover:border-white/[0.15] transition-all"
            >
              <span>Meet the Team</span>
              <ArrowRight className="w-3 h-3 text-cyan-400" />
            </a>
            <a
              href="#careers"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 font-mono text-xs border border-cyan-500/30 transition-all"
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
        className="scroll-mt-28 lg:scroll-mt-36 relative py-20 sm:py-24 border-b border-white/[0.06] bg-[#05070e]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold block mb-2">
              OUR MISSION
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Technology Should Do More Than Respond.
              <br />
              <span className="text-cyan-300">It Should Act.</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
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
                  className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.05]">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
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
        className="scroll-mt-28 lg:scroll-mt-36 relative py-20 sm:py-24 border-b border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-semibold block mb-2">
              OUR ENGINEERING PHILOSOPHY
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Built on Thoughtful Engineering.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
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
                  className="relative p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-indigo-500/35 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                      <span className="text-xs font-mono font-bold text-indigo-400">
                        {principle.num}
                      </span>
                      <Icon className="w-4 h-4 text-neutral-400 group-hover:text-indigo-400 transition-colors" />
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {principle.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
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
        className="scroll-mt-28 lg:scroll-mt-36 relative py-20 sm:py-28 border-b border-white/[0.06] bg-[#05070c]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-3">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span>Leadership &amp; Technical Foundation</span>
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                The People Behind the Architecture.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-400 font-sans max-w-xl leading-relaxed lg:text-right">
              Engineered by practitioners who bring together software engineering discipline, applied
              artificial intelligence, and enterprise systems expertise to deliver robust solutions.
            </p>
          </div>

          {/* Balanced 3-Column Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TEAM_MEMBERS.map((leader) => {
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

                    {/* Top Right: Role Badge */}
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

      {/* ── SECTION 05 — JOIN ASHMYRA (COMPACT CAREERS CTA) ─────────────────── */}
      <section id="careers" className="scroll-mt-28 lg:scroll-mt-36 relative py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-indigo-950/30 via-white/[0.02] to-transparent border border-indigo-500/30 text-center overflow-hidden">
            {/* Ambient subtle bloom */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
                CAREERS &amp; TALENT
              </span>

              <h2
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Want to Build What&apos;s Next With Us?
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                We&apos;re always interested in connecting with people who care about thoughtful
                engineering, intelligent systems and meaningful technology.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact?intent=careers"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs shadow-lg shadow-cyan-500/25 transition-all group"
                >
                  <span>Connect With Ashmyra</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-neutral-200 hover:text-white font-medium text-xs border border-white/[0.08] hover:border-white/[0.15] transition-all"
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
