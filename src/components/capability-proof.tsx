"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Database, Globe, Zap, ArrowUpRight, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CAPS = [
  {
    icon: Cpu,
    title: "AI Engineering",
    desc: "Multi-agent systems, LLM pipelines and autonomous decision loops built for enterprise scale.",
    accent: "#818cf8",
    tag: "Agentic AI",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    desc: "Real-time pipelines, anomaly detection, executive dashboards and deep insight layers.",
    accent: "#34d399",
    tag: "Data",
  },
  {
    icon: Globe,
    title: "Software Engineering",
    desc: "Enterprise platforms, SaaS products and scalable APIs engineered to last.",
    accent: "#38bdf8",
    tag: "SaaS",
  },
  {
    icon: Zap,
    title: "Digital Experiences",
    desc: "3D interfaces, high-performance web and interactive product design that wows.",
    accent: "#c084fc",
    tag: "Web",
  },
];

const PROJECTS = [
  { name: "FMO",           cat: "Fashion & 3D Web",            accent: "#c084fc", year: "2024" },
  { name: "1A Veda",       cat: "Ayurveda & Wellness",         accent: "#34d399", year: "2023" },
  { name: "ramaroma herbs",cat: "Natural Products",            accent: "#38bdf8", year: "2024" },
  { name: "Divagam",       cat: "Spiritual & Lifestyle",       accent: "#f59e0b", year: "2025" },
];

const METRICS = [
  { value: "100+", label: "Projects Delivered" },
  { value: "14+",  label: "Years Experience" },
  { value: "7",    label: "AI Products" },
  { value: "3×",   label: "Avg ROI" },
];

export function CapabilityProof() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Metrics row
      gsap.from(".metric-item", {
        scrollTrigger: { trigger: ".metric-item", start: "top 85%" },
        opacity: 0, y: 20, stagger: 0.1, duration: 0.8, ease: "power3.out",
      });
      // Capability cards
      gsap.from(".cap-card", {
        scrollTrigger: { trigger: ".cap-card", start: "top 82%" },
        opacity: 0, y: 32, stagger: 0.12, duration: 0.9, ease: "power3.out",
      });
      // Project cards
      gsap.from(".proj-card", {
        scrollTrigger: { trigger: ".proj-card", start: "top 85%" },
        opacity: 0, y: 24, stagger: 0.1, duration: 0.8, ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="capability"
      className="relative bg-[#040508] overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-24 space-y-24">

        {/* ── Metric bar ────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="metric-item py-8 px-6 flex flex-col items-center text-center"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div
                className="text-4xl sm:text-5xl font-bold mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif", background: "linear-gradient(135deg, #c7d2fe, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                {m.value}
              </div>
              <div className="section-label text-neutral-500">{m.label}</div>
            </div>
          ))}
        </div>

        {/* ── Capabilities ──────────────────────────────────────────────────── */}
        <div>
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="section-label text-neutral-600 mb-2">Engineering Discipline</div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Built to Solve Complex Problems
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAPS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="cap-card group relative p-6 rounded-2xl card-lift cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Top: icon + tag */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${c.accent}15`, border: `1px solid ${c.accent}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: c.accent }} />
                    </div>
                    <span
                      className="section-label"
                      style={{ color: `${c.accent}cc` }}
                    >
                      {c.tag}
                    </span>
                  </div>
                  <div
                    className="text-base font-semibold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {c.title}
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed">{c.desc}</p>

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                    style={{ background: `radial-gradient(ellipse at top left, ${c.accent}08 0%, transparent 60%)` }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Selected Work ─────────────────────────────────────────────────── */}
        <div>
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="section-label text-neutral-600 mb-2">Verified Implementations</div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Selected Work
              </h3>
            </div>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-indigo-300 transition-colors uppercase tracking-wider"
            >
              All Projects <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROJECTS.map((p) => (
              <div
                key={p.name}
                className="proj-card group relative p-6 rounded-2xl card-lift cursor-default overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {/* Year tag */}
                <div className="section-label text-neutral-600 mb-4">{p.year}</div>
                {/* Accent dot */}
                <div className="w-2 h-2 rounded-full mb-4" style={{ backgroundColor: p.accent }} />
                <div
                  className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {p.name}
                </div>
                <div className="section-label" style={{ color: `${p.accent}cc` }}>{p.cat}</div>

                {/* Arrow on hover */}
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-4 h-4 text-neutral-500" />
                </div>

                {/* Background glow */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at bottom right, ${p.accent}10 0%, transparent 65%)` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA strip ─────────────────────────────────────────────────────── */}
        <div
          className="rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(34,211,238,0.05) 100%)",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
        >
          <div>
            <div className="section-label text-indigo-300 mb-2">Ready to Build?</div>
            <h3
              className="text-2xl sm:text-3xl font-bold text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Bring us the hard problem.
            </h3>
            <p className="text-sm text-neutral-400 mt-2 font-sans">
              We&apos;ll engineer the system that solves it.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl font-semibold text-sm text-white transition-all hover:scale-[1.03] active:scale-[0.97] whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, #6366f1, #818cf8)",
              boxShadow: "0 0 0 1px rgba(99,102,241,0.5), 0 8px 32px -4px rgba(99,102,241,0.5)",
            }}
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
