"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Send, CheckCircle2, ShieldCheck, Mail, Sparkles } from "lucide-react";

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
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again or email info@ashmyra.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-experience" className="relative bg-[#05070c] py-24 sm:py-28 lg:py-32 overflow-hidden text-white border-t border-white/[0.06]">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[450px]"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(99, 102, 241, 0.1) 0%, rgba(34, 211, 238, 0.04) 50%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div className="absolute inset-0 dot-bg opacity-15" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Heading & Positioning */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono tracking-widest text-indigo-300 uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              DIRECT ENGINEERING DISCOVERY
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.06] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              WHAT SHOULD WE
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                BUILD NEXT?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans mb-8">
              Bring us the problem. Let&apos;s engineer the system.
            </p>

            <div className="space-y-4 pt-6 border-t border-white/[0.08] text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Direct technical engagement with core engineering leads</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>NDA protected · Zero speculative sales agency bloat</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Turnaround response within 24 business hours</span>
              </div>
            </div>

            {/* Direct Email Link */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-neutral-400">
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>Direct inquiries:</span>
              <a
                href="mailto:info@ashmyra.com"
                className="text-indigo-300 hover:text-white transition-colors underline underline-offset-4"
              >
                info@ashmyra.com
              </a>
            </div>
          </div>

          {/* Right Column: Clean Working Enquiry Form */}
          <div className="lg:col-span-7">
            <div
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/[0.1] shadow-2xl relative"
              style={{
                background: "linear-gradient(160deg, rgba(14, 18, 30, 0.95) 0%, rgba(6, 8, 14, 0.98) 100%)",
                boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9)",
              }}
            >
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you. Your project brief has been logged with Ashmyra&apos;s engineering team. A principal engineer will reach out within 24 hours.
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
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-mono text-neutral-400 hover:text-white bg-white/[0.04] border border-white/[0.08]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Anti-bot honeypot */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-indigo-500 focus:bg-white/[0.06] text-white text-sm outline-none transition-all placeholder:text-neutral-500"
                      />
                    </div>

                    {/* Business Email */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-indigo-500 focus:bg-white/[0.06] text-white text-sm outline-none transition-all placeholder:text-neutral-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Global Inc."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-indigo-500 focus:bg-white/[0.06] text-white text-sm outline-none transition-all placeholder:text-neutral-500"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                        Project Type *
                      </label>
                      <select
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090c14] border border-white/[0.08] focus:border-indigo-500 text-white text-sm outline-none transition-all"
                      >
                        <option value="Agentic AI / Automation">Agentic AI / Multi-Agent Swarms</option>
                        <option value="Enterprise SaaS / Software">Enterprise SaaS / Custom Software</option>
                        <option value="Mobile App Development">Mobile App (iOS / Android)</option>
                        <option value="3D Web / GSAP Experiences">3D Web / GSAP High-Performance Site</option>
                        <option value="Data Intelligence / GEO">Data Intelligence & GEO / SEO</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Project Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe the operational bottleneck, architecture goals, or system you want engineered..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-indigo-500 focus:bg-white/[0.06] text-white text-sm outline-none transition-all placeholder:text-neutral-500 resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #818cf8)",
                      boxShadow: "0 0 0 1px rgba(99,102,241,0.45), 0 8px 20px -4px rgba(99,102,241,0.5)",
                    }}
                  >
                    <span>{isSubmitting ? "Transmitting..." : "Let's Build Something"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
