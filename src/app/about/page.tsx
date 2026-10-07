import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Eye, 
  Compass, 
  Heart,
  Cpu,
  ExternalLink,
  ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Ashmyra | Founder Ashish Talgotra, Vision & Technology Team",
  description:
    "Ashmyra Technologies is an AI-native company founded by Ashish Talgotra (14+ years in applied AI, distributed data systems) and Co-Founder Swati. We engineer autonomous agent swarms, HRMS platforms, GEO intelligence, and enterprise SaaS that act—not just assist.",
  keywords: [
    "Ashmyra About",
    "Ashish Talgotra",
    "Ashmyra Founder",
    "AI Company India",
    "Swati Co-Founder",
    "Ashmyra Technologies Team",
    "AI-Native Company Delhi NCR",
    "Enterprise AI Founders India",
  ],
  openGraph: {
    title: "About Ashmyra | AI-Native Technology Company Founded by Ashish Talgotra",
    description:
      "Meet the team behind Ashmyra Technologies. Founded by Ashish Talgotra and Co-Founder Swati, Ashmyra engineers AI agents, data pipelines, and enterprise software that transforms how businesses operate.",
    url: "https://ashmyra.com/about",
    images: [
      {
        url: "/brand/ashmyra-og-image.png",
        width: 1200,
        height: 630,
        alt: "About Ashmyra Technologies - Founders and Vision",
      },
    ],
  },
  alternates: {
    canonical: "https://ashmyra.com/about",
  },
};

export default function AboutPage() {
  const technologyAreas = [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Agentic AI",
    "AI Automation",
    "Data Analytics",
    "Intelligent Software Systems",
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Company Origins &amp; Philosophy</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Built by People Who Believe
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">
              Technology Should Work For You.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Ashmyra was founded on a simple conviction: modern businesses shouldn&apos;t have to battle fragmented software, manual spreadsheet handoffs, and fragile tools. We build intelligent systems that turn operational complexity into momentum.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* ASHMYRA NAME STORY                                                        */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-950/30 via-[#0d111c] to-[#07090e] border border-white/[0.08] shadow-2xl overflow-hidden text-center">
            {/* Soft decorative glow */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-80 h-32 bg-indigo-500/10 blur-[90px] pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-2">
                <Heart className="w-3.5 h-3.5 text-indigo-400" />
                <span>The Origin of Ashmyra</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Where the Name Comes From
              </h2>

              <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal max-w-2xl mx-auto pt-2">
                &quot;Ashmyra began with a name inspired by Ashish and Amyra — a small personal connection that became the name of a much larger technology vision.&quot;
              </p>

              <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono text-neutral-400">
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-indigo-300 font-bold">
                  ASH
                </span>
                <span>+</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-sky-300 font-bold">
                  MYRA
                </span>
                <span>=</span>
                <span className="px-3 py-1 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-white font-bold tracking-wider">
                  ASHMYRA
                </span>
              </div>

              {/* Official Brand Identity Showcase */}
              <div className="pt-8 max-w-xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#05070a]/90 p-4 sm:p-5 shadow-2xl shadow-indigo-500/10">
                  <Image
                    src="/brand/ashmyra-logo.jpg"
                    alt="Ashmyra Technologies Official Brand Identity - Ideas / Technology / Impact"
                    width={800}
                    height={533}
                    className="w-full h-auto rounded-xl object-contain"
                  />
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400 border-t border-white/[0.06] pt-2.5 px-1">
                    <span className="text-indigo-300 font-medium">ASHMYRA TECHNOLOGIES</span>
                    <span className="text-neutral-500 tracking-wider">IDEAS / TECHNOLOGY / IMPACT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="glass-panel rounded-3xl p-8 sm:p-10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block font-semibold">
              Our Mission
            </span>
            <h3 className="text-2xl font-bold text-white leading-snug">
              &quot;To make powerful technology accessible, intelligent and useful for businesses of every size.&quot;
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-2">
              We design software that removes friction rather than adding more administrative burden. From startups to growing mid-market enterprises, our systems automate the mundane so people can focus on high-impact work.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-8 sm:p-10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 block font-semibold">
              Our Vision
            </span>
            <h3 className="text-2xl font-bold text-white leading-snug">
              &quot;Build technology that doesn&apos;t just respond — it understands, automates and creates momentum.&quot;
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-2">
              We envision a future where business software operates with autonomous intelligence: proactively detecting bottlenecks, executing multi-step workflows with verified safety, and providing leaders with unambiguous truth.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MEET THE FOUNDER SECTION                                                  */}
        {/* ========================================================================= */}
        <div id="founders" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-2">
              Founding Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The People Behind Ashmyra
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              Guided by purpose &bull; Driven by engineering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* PRIMARY: Ashish Talgotra — Founder & Managing Director */}
            <div className="relative rounded-3xl p-8 sm:p-10 text-center border border-indigo-500/30 bg-gradient-to-b from-indigo-500/[0.07] via-[#0d1120] to-[#07090e] hover:border-indigo-400/60 transition-all duration-500 group overflow-hidden shadow-2xl shadow-indigo-500/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-40 bg-indigo-500/15 blur-[70px] pointer-events-none rounded-full" />

              {/* Founder badge */}
              <div className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-[10px] font-mono font-bold text-indigo-300 uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Founder &amp; Managing Director
              </div>

              {/* Portrait */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-tr from-indigo-400 via-sky-400 to-purple-500 p-[2.5px] mx-auto shadow-2xl shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-500 mb-8">
                <div className="w-full h-full bg-[#0a0d18] rounded-[22px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent" />
                  <span className="relative text-5xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-200">
                    A
                  </span>
                </div>
              </div>

              <div className="relative space-y-2 mb-6">
                <h3 className="text-3xl font-extrabold text-white tracking-tight uppercase font-sans">
                  ASHISH TALGOTRA
                </h3>
                <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-[0.2em] block">
                  Founder &amp; Managing Director
                </span>
              </div>

              <p className="relative text-sm text-neutral-300 leading-relaxed max-w-sm mx-auto font-sans mb-8">
                Visionary technologist and AI architect driving Ashmyra&apos;s mission to build next-generation intelligent software systems that reshape how enterprises operate at scale.
              </p>

              {/* Action row */}
              <div className="relative pt-6 border-t border-indigo-500/15 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Founder &bull; Verified</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/atalgotra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all text-[11px] font-mono font-semibold group/linkedin"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 group-hover/linkedin:translate-x-0.5 group-hover/linkedin:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* SECONDARY: Swati — Co-Founder */}
            <div className="glass-panel rounded-3xl p-8 sm:p-10 text-center space-y-5 border border-white/[0.08] relative overflow-hidden group hover:border-sky-400/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/8 blur-3xl pointer-events-none" />

              <div className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/25 text-[10px] font-mono font-bold text-sky-300 uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                Co-Founder
              </div>

              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-tr from-sky-400 via-indigo-400 to-purple-500 p-[2px] mx-auto shadow-2xl shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#0a0d16] rounded-[22px] flex items-center justify-center text-white font-mono text-5xl sm:text-6xl font-black">
                  S
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight uppercase font-sans">
                  SWATI
                </h3>
                <span className="text-xs text-sky-400 font-mono font-bold uppercase tracking-wider block mt-1">
                  Co-Founder
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-left space-y-2 text-xs text-neutral-300">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase pb-1 border-b border-white/[0.05]">
                  <span>Leadership Profile</span>
                  <span className="text-emerald-400">Verified Entity</span>
                </div>
                <p className="leading-relaxed text-neutral-300">
                  Co-founder committed to product excellence, operational momentum, and delivering reliable software systems that empower enterprises to grow without friction.
                </p>
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 uppercase px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  Co-Founder &bull; Operations &amp; Strategy
                </span>
              </div>
            </div>
          </div>

          {/* Technical Excellence Bar */}
          <div className="mt-10 max-w-5xl mx-auto p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-4 text-xs font-mono text-neutral-300">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-white font-bold block text-sm">AI-Native Engineering Core</span>
                <span className="text-neutral-400">Agentic systems &bull; Machine intelligence &bull; Production-grade SaaS</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Operational</span>
            </div>
          </div>
        </div>

        {/* Grounded Pillars */}
        <div id="why-us" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-2">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              The Tenets That Guide Every Line of Code
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <span className="text-xs font-mono text-indigo-400 font-bold block mb-1">01 &bull; Substance Over Hype</span>
              <h4 className="text-base font-bold text-white">Deterministic Reliability</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We do not build ungrounded chat wrappers. We architect verified systems where every AI action is validated against rigorous schema constraints and business rules.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <span className="text-xs font-mono text-sky-400 font-bold block mb-1">02 &bull; Craftsmanship</span>
              <h4 className="text-base font-bold text-white">Design &amp; Speed Harmony</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Software should feel fast, responsive, and delightful. We adhere to the highest aesthetic and performance standards across desktop, tablet, and mobile devices.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold block mb-1">03 &bull; Integrity</span>
              <h4 className="text-base font-bold text-white">No Fabricated Claims</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We believe trust is earned through verifiable outcomes, transparent technical blueprints, and continuous long-term client stewardship.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-10 rounded-3xl bg-indigo-950/20 border border-indigo-500/30">
          <h3 className="text-2xl font-bold text-white mb-2">
            Build your next software milestone with Ashmyra
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Connect directly with our team to discuss your technology initiatives.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all"
          >
            <span>Talk to Ashmyra</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
