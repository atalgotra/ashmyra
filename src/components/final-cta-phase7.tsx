"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Mail,
  Lock,
  Clock,
  Sparkles,
  Terminal,
  UserCheck,
  Layers,
} from "lucide-react";

const PROJECT_TYPES = [
  { id: "Agentic AI / Automation", label: "Agentic AI Swarms", icon: "🤖" },
  { id: "Enterprise SaaS / Software", label: "Enterprise Software", icon: "⚡" },
  { id: "Data Intelligence / GEO", label: "Data & GEO Radar", icon: "🌐" },
  { id: "Mobile App Development", label: "Mobile Ecosystem", icon: "📱" },
  { id: "3D Web / GSAP Experiences", label: "3D / GSAP Web", icon: "✨" },
  { id: "Custom AI Architecture", label: "Custom Architecture", icon: "⚙️" },
];

export function FinalCtaPhase7() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    requirement: "Agentic AI / Automation",
    message: "",
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please provide your name, business email, and a brief description of your project.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not specified",
          requirement: formData.requirement,
          message: formData.message,
          timeline: "Within 1 - 3 months",
          budgetRange: "Enterprise Discovery",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send inquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email info@ashmyra.com directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-experience"
      className="relative py-24 sm:py-28 lg:py-32 overflow-hidden border-t transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
    >
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(99, 102, 241, 0.12) 0%, rgba(34, 211, 238, 0.05) 50%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div className="absolute inset-0 dot-bg opacity-15" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Heading, Practitioner Direct Value & Founder Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Executive Glowing Eyebrow */}
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase mb-6 shadow-sm"
                style={{
                  background: "var(--theme-pill-bg)",
                  border: "1px solid var(--theme-pill-border)",
                  color: "var(--accent)",
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent-emerald)" }} />
                <span>Direct Founder Access · Technical Discovery</span>
              </div>

              <h2
                className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight leading-[1.05] mb-6 transition-colors duration-300"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
              >
                WHAT SHOULD WE
                <br />
                <span
                  style={{
                    background: "var(--hero-headline-gradient)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  BUILD NEXT?
                </span>
              </h2>

              <p className="text-base sm:text-lg leading-relaxed font-sans mb-8 transition-colors duration-300" style={{ color: "var(--text-muted)" }}>
                Bring us your operational bottleneck or bold product vision. Speak
                directly with engineering practitioners who architect and deploy systems
                into production.
              </p>

              {/* 3 Practitioner Guarantees */}
              <div className="space-y-3 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
                <div
                  className="flex items-start gap-3 p-3 rounded-xl transition-all"
                  style={{ background: "var(--theme-pill-bg)", border: "1px solid var(--border)" }}
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center shrink-0 mt-0.5 text-indigo-400">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: "var(--text)" }}>
                      Direct Practitioner Engagement
                    </div>
                    <div className="text-xs mt-0.5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      Zero sales gatekeepers or agency bloat. You collaborate directly with principal systems architects.
                    </div>
                  </div>
                </div>

                <div
                  className="flex items-start gap-3 p-3 rounded-xl transition-all"
                  style={{ background: "var(--theme-pill-bg)", border: "1px solid var(--border)" }}
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: "var(--text)" }}>
                      Strict Mutual NDA Protection
                    </div>
                    <div className="text-xs mt-0.5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      100% intellectual property protection with auditable data isolation for enterprise roadmaps.
                    </div>
                  </div>
                </div>

                <div
                  className="flex items-start gap-3 p-3 rounded-xl transition-all"
                  style={{ background: "var(--theme-pill-bg)", border: "1px solid var(--border)" }}
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: "var(--text)" }}>
                      24-Hour Feasibility Review
                    </div>
                    <div className="text-xs mt-0.5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      Receive structured technical feedback and system architecture feasibility within 24 business hours.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Founder Channel Badge */}
            <div
              className="mt-8 p-4 rounded-2xl border backdrop-blur-md flex items-center gap-4 shadow-sm"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-indigo-400/40 shadow-inner">
                <Image
                  src="/team/ashish-talgotra.jpg"
                  alt="Ashish Talgotra"
                  fill
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-mono font-semibold uppercase tracking-widest flex items-center gap-1.5" style={{ color: "var(--accent-emerald)" }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent-emerald)" }} />
                  <span>Direct Founder Channel</span>
                </div>
                <div className="text-sm font-bold tracking-tight truncate" style={{ color: "var(--text)" }}>
                  Ashish Talgotra
                </div>
                <div className="text-xs truncate" style={{ color: "var(--text-muted)" }}>
                  Founder &amp; Lead AI Architect · Personal Technical Review
                </div>
              </div>
              <a
                href="mailto:info@ashmyra.com"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  backgroundColor: "var(--theme-pill-bg)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                <Mail className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Executive Architecture Terminal */}
          <div className="lg:col-span-7">
            <div
              className="group relative rounded-3xl p-7 sm:p-9 border shadow-2xl overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                boxShadow:
                  "0 25px 70px -15px rgba(0, 0, 0, 0.12), 0 0 45px -15px var(--border-glow)",
              }}
            >
              {/* Top Laser Accent Line */}
              <div
                className="absolute top-0 inset-x-8 h-[1px] opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--accent), var(--accent-light), transparent)",
                }}
              />

              {/* Ambient Terminal Corner Bloom */}
              <div
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-35 transition-opacity"
                style={{ background: "var(--accent)" }}
              />

              {/* Terminal Header Bar */}
              <div
                className="flex items-center justify-between pb-4 mb-6 border-b transition-colors"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span
                    className="text-[11px] font-mono font-semibold ml-2 tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    SYS_ID: ASHMYRA_INGEST_V2.4
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  <Lock className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  <span>256-BIT TLS ENCRYPTED</span>
                </div>
              </div>

              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.25)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
                  >
                    Brief Transmitted Successfully
                  </h3>
                  <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Thank you. Your architecture brief has been delivered directly to
                    Ashish Talgotra and the senior engineering team. A principal engineer
                    will return technical feasibility within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        requirement: "Agentic AI / Automation",
                        message: "",
                        honeypot: "",
                      });
                    }}
                    className="mt-6 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all"
                    style={{
                      backgroundColor: "var(--theme-pill-bg)",
                      borderColor: "var(--border)",
                      color: "var(--text)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Anti-bot honeypot */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) =>
                      setFormData({ ...formData, honeypot: e.target.value })
                    }
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-mono">
                      {errorMsg}
                    </div>
                  )}

                  {/* Interactive Architecture Scope Selection */}
                  <div>
                    <label
                      className="block text-[11px] font-mono uppercase tracking-wider mb-2.5 font-semibold"
                      style={{ color: "var(--text)" }}
                    >
                      System Architecture Scope *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {PROJECT_TYPES.map((pt) => {
                        const active = formData.requirement === pt.id;
                        return (
                          <button
                            key={pt.id}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, requirement: pt.id })
                            }
                            className="px-3 py-2.5 rounded-xl text-xs font-mono font-medium text-left transition-all duration-200 border flex items-center gap-2"
                            style={{
                              backgroundColor: active ? "var(--theme-pill-bg)" : "transparent",
                              borderColor: active ? "var(--accent)" : "var(--border)",
                              color: active ? "var(--accent)" : "var(--text-muted)",
                              boxShadow: active ? "0 0 15px -3px var(--border-glow)" : "none",
                            }}
                          >
                            <span>{pt.icon}</span>
                            <span className="truncate font-semibold">{pt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 1: Name + Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-[11px] font-mono uppercase tracking-wider mb-1.5 font-semibold"
                        style={{ color: "var(--text)" }}
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all placeholder:text-neutral-400"
                        style={{
                          backgroundColor: "var(--theme-pill-bg)",
                          border: "1px solid var(--border)",
                          color: "var(--text)",
                        }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-[11px] font-mono uppercase tracking-wider mb-1.5 font-semibold"
                        style={{ color: "var(--text)" }}
                      >
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all placeholder:text-neutral-400"
                        style={{
                          backgroundColor: "var(--theme-pill-bg)",
                          border: "1px solid var(--border)",
                          color: "var(--text)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Row 2: Company */}
                  <div>
                    <label
                      className="block text-[11px] font-mono uppercase tracking-wider mb-1.5 font-semibold"
                      style={{ color: "var(--text)" }}
                    >
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Acme Global Inc. / Startup Studio"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all placeholder:text-neutral-400"
                      style={{
                        backgroundColor: "var(--theme-pill-bg)",
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                      }}
                    />
                  </div>

                  {/* Row 3: Project Description / Technical Brief */}
                  <div>
                    <label
                      className="block text-[11px] font-mono uppercase tracking-wider mb-1.5 font-semibold"
                      style={{ color: "var(--text)" }}
                    >
                      Technical Problem / System Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe the operational bottleneck, architecture objectives, or software platform you need engineered..."
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all placeholder:text-neutral-400 resize-none leading-relaxed"
                      style={{
                        backgroundColor: "var(--theme-pill-bg)",
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                      }}
                    />
                  </div>

                  {/* Submit CTA Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-semibold text-sm sm:text-base text-white flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.015] active:scale-[0.985] disabled:opacity-60 shadow-xl group/cta"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
                      boxShadow:
                        "0 0 0 1px var(--border-glow), 0 12px 30px -6px var(--border-glow)",
                    }}
                  >
                    <span>
                      {isSubmitting
                        ? "Transmitting Architecture Brief..."
                        : "Transmit Project Brief"}
                    </span>
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
                  </button>

                  {/* Security & Verification Footer */}
                  <div
                    className="flex flex-wrap items-center justify-center gap-3 pt-2 text-[11px] font-mono"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                      <span>Strict Mutual NDA</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                      <span>24h Architecture Review</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                      <span>Zero Spam Guarantee</span>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
