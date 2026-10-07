import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductWowPreview } from "@/components/product-wow-preview";
import { FreelancerTrustBanner } from "@/components/freelancer-trust-banner";
import { DashboardPreviews } from "@/components/dashboard-previews";
import { 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  FileText, 
  DollarSign, 
  Award, 
  ShieldCheck, 
  Laptop, 
  UserCheck, 
  TrendingUp, 
  ArrowUpRight,
  Camera,
  AlertTriangle,
  GraduationCap,
  Building2,
  Lock,
  Sliders,
  Check,
  X,
  Zap,
  Activity,
  Radio
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra HRMS | AI Resume Parser, Proctored Quiz & 360° Clearance at 70% Less Cost",
  description:
    "An intelligent workforce operating system unifying AI Resume Parsing, live AI-Proctored Quiz assessments with anti-cheat, cross-department onboarding/offboarding (IT, HR, Finance, Admin), and POSH compliance—at 70% less cost than Workday.",
  keywords: [
    "Ashmyra HRMS",
    "AI Resume Parser",
    "Live Proctored Quiz HR",
    "Online Candidate Assessment Anti-Cheat",
    "Cross-Department Onboarding IT HR Finance",
    "360 Degree Exit Clearance Matrix",
    "POSH Compliance Scheduler",
    "No-Code HRMS India",
    "Workday Alternative 70 Percent Less",
    "BambooHR Alternative",
  ],
  openGraph: {
    title: "Ashmyra HRMS | Intelligent Workforce Operating System",
    description:
      "AI Resume Parser, live webcam-proctored assessments, automated cross-department exit clearance, and POSH compliance at 70% lower cost than legacy HR suites.",
    url: "https://ashmyra.com/products/hrms",
    images: [{ url: "/wow/wow4-intelligent-workforce.png", width: 1200, height: 675, alt: "Ashmyra HRMS Platform Preview" }],
  },
  alternates: {
    canonical: "https://ashmyra.com/products/hrms",
  },
};

export default function AshmyraHrmsPage() {
  const product = PRODUCTS.find((p) => p.id === "hrms")!;

  return (
    <div className="relative pt-32 pb-24 min-h-screen bg-[#050608] overflow-hidden">

      {/* ── 00. Atmospheric Ambient Glow & Perspective Radial Grid ───── */}
      <div className="absolute top-0 left-0 right-0 h-[720px] pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute inset-0 dot-bg opacity-35" 
          style={{
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 25%, #000 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 25%, #000 30%, transparent 80%)",
          }}
        />
        
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[380px] rounded-full animate-pulse-glow"
          style={{
            background: "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.22) 0%, rgba(56, 189, 248, 0.12) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div
          className="absolute top-28 left-1/2 -translate-x-1/2 w-[480px] h-[260px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(ellipse at center, rgba(52, 211, 153, 0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 01. Hero Header (Wider Width & Exactly 2 Clean Lines) ───── */}
        <div className="relative text-center max-w-6xl mx-auto mb-12">

          {/* Status & Real-Time Connection Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300 font-mono backdrop-blur-sm">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>AI-Native Workforce Operating System</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs text-sky-300 font-mono backdrop-blur-sm shadow-sm">
              <Camera className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-white font-semibold">Live Proctored Quiz:</span>
              <span>Anti-Cheat AI Active</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs text-amber-300 font-mono backdrop-blur-sm">
              <DollarSign className="w-3.5 h-3.5 text-amber-400" />
              <span>70% Lower Cost than Workday &amp; BambooHR</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-neutral-300 font-mono backdrop-blur-sm">
              <Sliders className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% No-Code Frontend Setup</span>
            </div>
          </div>

          {/* Headline - Exactly Two Clean Lines */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] font-bold tracking-tight text-white leading-[1.12] font-sans">
            <span className="block">Your Entire Workforce Operating System,</span>
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-emerald-200 animate-[shimmer_6s_linear_infinite] bg-[length:200%_auto]">
              One Intelligent AI-Native Platform.
            </span>
          </h1>

          {/* Adjusted Paragraph Text */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            From date-based <strong className="text-white font-semibold">AI resume scoring</strong> and live webcam-proctored assessments with anti-cheat detection, to automated cross-department onboarding and 360° exit clearance (<strong className="text-white font-semibold">IT, Admin, HR, Finance</strong>), plus recurring POSH compliance—all 100% configurable via no-code UI at <strong className="text-white font-semibold">70% less cost</strong>.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=hrms-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Schedule Live HRMS Walkthrough
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources/modernizing-workforce-tech-from-spreadsheets-to-ai"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-neutral-200 text-sm border border-white/[0.1] transition-all hover:scale-[1.02]"
            >
              Read Workforce AI Whitepaper
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </Link>
          </div>

          {/* Micro-Proof Spec Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>AI Resume Parser &amp; Multi-Tier Sourcing Radar</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>360° Automated Exit Clearance (5 Departments)</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>70% Lower Cost than Workday &amp; BambooHR</span>
            </div>
          </div>
        </div>

        {/* ── 02. WOW Visual Showcase ─────────────────────────────────── */}
        <ProductWowPreview
          imageSrc="/wow/wow4-intelligent-workforce.png"
          imageAlt="Ashmyra HRMS Intelligent Workforce Platform"
          productName="Ashmyra HRMS Workforce Operating System"
          productTagline="AI Resume Parser, live webcam proctored quiz, cross-dept onboarding/offboarding, and dynamic POSH compliance at 70% lower cost."
          accentColor="#10b981"
          badgeText="Workforce Intelligence Core Active • 70% Lower TCO"
          telemetry={[
            { label: "Cost Advantage", value: "70% Less", detail: "Significant savings compared to Workday, BambooHR & Darwinbox" },
            { label: "Proctoring Integrity", value: "99.8%", detail: "1-Laptop/1-Attempt lock with real-time anti-cheat alerts" },
            { label: "Cross-Dept Speed", value: "<24 Hrs", detail: "Automated sync across IT, Admin, HR & Finance" },
            { label: "No-Code Flexibility", value: "100% UI", detail: "Configure policies, quizzes & approvals with zero code" },
          ]}
          capabilities={[
            {
              title: "AI Resume Parser & Multi-Tier Scoring",
              description: "Scans candidate pools on a date basis across job boards, matching JD keywords, semantic relevance, and agentic reasoning with automated human review queues.",
            },
            {
              title: "Live Proctored Quiz & Psychometric Assessments",
              description: "Online testing with live webcam visibility, strict 1-laptop/1-attempt limits, and real-time anti-cheat alerts for mobile phones, books, or looking away.",
            },
            {
              title: "Cross-Dept Onboarding & 360° Exit Clearance",
              description: "Automated routing to IT (assets/credentials), Finance (bank/FnF settlement), Admin (workspace/ID), HR, and Managers with dynamic POSH compliance cycles.",
            },
          ]}
        />

        {/* ── 03. Freelancer.com 100+ Delivery Proof Banner ─────────────── */}
        <div className="my-16">
          <FreelancerTrustBanner category="Enterprise HRMS, ATS & Workforce Platforms" />
        </div>

        {/* ── 04. Comprehensive 6-Pillar Core Engine Showcase ─────────── */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block mb-2 font-semibold">
              Ecosystem Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Unified Tools for Modern People Operations
            </h2>
            <p className="text-base text-neutral-300 mt-3 leading-relaxed">
              Eliminate expensive third-party proctoring, fragmented ATS subscriptions, and manual IT/Finance clearance emails with a single AI-native platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Pillar 1: AI Resume Parser & Date-Based Talent Scoring */}
            <div 
              className="p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/50 hover:bg-white/[0.04] group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                border: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                    01
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                    Multi-Tier Radar
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  AI Resume Parser &amp; Sourcing Radar
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  Scans resumes applied across job boards, referrals, and career sites on a scheduled date basis. Evaluates candidates across <strong className="text-white">JD keyword matching, semantic search, agentic reasoning</strong>, and human review queues.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-emerald-300 flex items-center justify-between">
                <span>Multi-Source Intake</span>
                <span className="text-neutral-400">Instant Ranking</span>
              </div>
            </div>

            {/* Pillar 2: Live AI-Proctored Quiz & Online Assessments */}
            <div 
              className="p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/50 hover:bg-white/[0.04] group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                border: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                    02
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/25">
                    Live Anti-Cheat
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  Live Proctored Quiz &amp; Psychometrics
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  Test candidates with confidence. Features <strong className="text-white">live candidate webcam view</strong>, strict 1-laptop / 1-verified-email / 1-attempt rules, automated psychometric profiling, and instant alerts for mobile phones, books, or looking away.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-sky-300 flex items-center justify-between">
                <span>Computer-Vision Guard</span>
                <span className="text-emerald-400">Zero Impersonation</span>
              </div>
            </div>

            {/* Pillar 3: Automated Onboarding & Post-Offer Document Workflow */}
            <div 
              className="p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/50 hover:bg-white/[0.04] group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                border: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                    03
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/25">
                    Zero Paperwork
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  Automated Onboarding &amp; Document Verification
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  Post-offer documentation is 100% automated: digital signature, e-KYC, address proof verification, and tax declarations. New hires complete paperwork from their phones before day one.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-indigo-300 flex items-center justify-between">
                <span>Self-Serve e-KYC</span>
                <span className="text-neutral-400">Instant Verification</span>
              </div>
            </div>

            {/* Pillar 4: Post-Joining Cross-Department Dispatch (IT, Finance, Admin) */}
            <div 
              className="p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/50 hover:bg-white/[0.04] group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                border: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                    04
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/25">
                    Multi-Team Sync
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  Post-Joining Cross-Dept Dispatch
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  The moment candidate accepts, automated notifications dispatch in parallel: <strong className="text-white">IT</strong> for laptop asset provisioning &amp; software logins; <strong className="text-white">Finance</strong> for payroll direct deposit; <strong className="text-white">Admin</strong> for office badges.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-purple-300 flex items-center justify-between">
                <span>Parallel Workflow</span>
                <span className="text-emerald-400">Day-1 Productivity</span>
              </div>
            </div>

            {/* Pillar 5: 360° Automated Exit Clearance Matrix (5 Departments) */}
            <div 
              className="p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/50 hover:bg-white/[0.04] group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                border: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                    05
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-300 border border-red-500/25">
                    360° Clearance
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  Automated 5-Dept Exit Clearance
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  When HR initiates an exit, clearance tasks dispatch automatically to <strong className="text-white">HR, Manager, IT (hardware recovery &amp; access revoke), Admin, and Finance (FnF settlement &amp; gratuity)</strong> with zero manual chase-up emails.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-red-300 flex items-center justify-between">
                <span>Full &amp; Final Automated</span>
                <span className="text-neutral-400">&lt;24 Hr Cycle</span>
              </div>
            </div>

            {/* Pillar 6: Dynamic Compliance & POSH Cadence (100% No-Code) */}
            <div 
              className="p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/50 hover:bg-white/[0.04] group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                border: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                    06
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/25">
                    100% No-Code
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  POSH Compliance &amp; Dynamic Policies
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  Dynamic policy builder with automated bi-annual compliance schedules (e.g. <strong className="text-white">POSH refresher training &amp; notifications every 6 months</strong>). Every approval rule, question bank, and course is 100% configurable via frontend UI.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-amber-300 flex items-center justify-between">
                <span>Statutory Safe</span>
                <span className="text-emerald-400">Zero Code Required</span>
              </div>
            </div>

          </div>
        </div>

        {/* ── 05. Live Interactive Previews Component ──────────────────── */}
        <div className="mb-24">
          <DashboardPreviews />
        </div>

        {/* ── 06. World-Class Competitive Comparison Table (70% Less Cost) */}
        <div className="bg-[#090d16] border border-emerald-500/25 rounded-3xl p-6 sm:p-12 mb-24 overflow-hidden relative shadow-2xl shadow-emerald-950/20">

          {/* Glow backdrop inside table container */}
          <div 
            className="absolute -top-24 right-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block mb-2 font-semibold">
              Disruptive Market Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ashmyra HRMS vs. Workday, BambooHR, Darwinbox &amp; Rippling
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-2">
              Why pay exorbitant monthly seat taxes and separate fees for ATS, proctoring tools, and LMS when Ashmyra HRMS delivers it all at 70% lower cost?
            </p>
          </div>

          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-left text-xs min-w-[760px]">
              <thead>
                <tr className="border-b border-white/[0.1] text-neutral-400 font-mono text-[11px] uppercase">
                  <th className="py-4 px-4 w-[28%]">Feature / Metric</th>
                  <th className="py-4 px-4 w-[24%] text-emerald-300 bg-emerald-950/40 border-x border-t border-emerald-500/30 rounded-t-xl font-bold">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      Ashmyra HRMS Core
                    </div>
                  </th>
                  <th className="py-4 px-4 w-[12%]">Workday</th>
                  <th className="py-4 px-4 w-[12%]">BambooHR</th>
                  <th className="py-4 px-4 w-[12%]">Darwinbox</th>
                  <th className="py-4 px-4 w-[12%]">Rippling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-neutral-300">

                {/* Row 1: Pricing */}
                <tr className="bg-emerald-500/[0.02]">
                  <td className="py-4 px-4 font-semibold text-white">
                    Total Cost of Ownership (TCO)
                  </td>
                  <td className="py-4 px-4 bg-emerald-950/30 border-x border-emerald-500/30 text-emerald-300 font-mono font-bold text-sm">
                    70% Lower Cost
                    <span className="block text-[10px] text-neutral-400 font-normal">Predictable flat rate • Zero seat penalties</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400 font-mono">
                    $100 – $200/u/mo
                    <span className="block text-[10px] text-neutral-500">+$50k implementation</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400 font-mono">
                    $10 – $18/u/mo
                    <span className="block text-[10px] text-neutral-500">+Add-on fees</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400 font-mono">
                    $6 – $14/u/mo
                    <span className="block text-[10px] text-neutral-500">+Annual lock-in</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400 font-mono">
                    $8 – $25/u/mo
                    <span className="block text-[10px] text-neutral-500">+Modular app fees</span>
                  </td>
                </tr>

                {/* Row 2: AI Resume Parser */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    AI Resume Parser &amp; Sourcing Radar
                  </td>
                  <td className="py-4 px-4 bg-emerald-950/30 border-x border-emerald-500/30 text-emerald-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> Native Multi-Tier Scoring
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-amber-400">Third-party ATS needed</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Basic keyword filter</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Basic text parser</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-amber-400">Separate app module</span>
                  </td>
                </tr>

                {/* Row 3: Live Proctored Quiz */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Live Webcam Proctored Quiz &amp; Anti-Cheat
                  </td>
                  <td className="py-4 px-4 bg-emerald-950/30 border-x border-emerald-500/30 text-emerald-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> Built-In Live Computer-Vision
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Requires Mercer/Mettl
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Not Supported
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Not Supported
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Not Supported
                    </span>
                  </td>
                </tr>

                {/* Row 4: Psychometrics */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Automated Psychometric Evaluations
                  </td>
                  <td className="py-4 px-4 bg-emerald-950/30 border-x border-emerald-500/30 text-emerald-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> Built-In Culture &amp; Cognitive
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Separate integration
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Not Supported
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Not Supported
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Not Supported
                    </span>
                  </td>
                </tr>

                {/* Row 5: Cross-Dept Onboarding */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Cross-Dept Onboarding (IT, Admin, HR, Finance)
                  </td>
                  <td className="py-4 px-4 bg-emerald-950/30 border-x border-emerald-500/30 text-emerald-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> Parallel Automated Dispatch
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Heavy BPM setup</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Manual task checklist</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Basic checklist</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-emerald-400">Strong IT, but costly</span>
                  </td>
                </tr>

                {/* Row 6: 360 Exit Clearance */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    360° Automated Exit Clearance Matrix
                  </td>
                  <td className="py-4 px-4 bg-emerald-950/30 border-x border-emerald-500/30 text-emerald-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> 1-Click 5-Dept Auto-Routing
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Manual multi-step</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Manual email chase-up</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Standard checklist</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">IT auto, Finance manual</span>
                  </td>
                </tr>

                {/* Row 7: POSH & Dynamic Policies */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Dynamic Compliance (POSH 6-Month Cadence)
                  </td>
                  <td className="py-4 px-4 bg-emerald-950/30 border-x border-emerald-500/30 text-emerald-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> Automated 6-Mo Refresher Push
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-amber-400">Paid separate LMS</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Manual tracking
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Basic LMS add-on</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-amber-400">Paid compliance app</span>
                  </td>
                </tr>

                {/* Row 8: 100% No-Code Frontend Setup */}
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    100% No-Code Frontend Administration
                  </td>
                  <td className="py-4 px-4 bg-emerald-950/30 border-x border-b border-emerald-500/30 rounded-b-xl text-emerald-300 font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> All Changes from UI Directly
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-500">
                    <span className="flex items-center gap-1 text-red-400">
                      <X className="w-3.5 h-3.5" /> Certified Devs ($200/hr)
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Limited configuration</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Support ticket needed</span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Semi-customizable settings</span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Pricing Transparent Callout Box */}
          <div className="mt-8 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase text-emerald-400 block mb-1 font-semibold">
                Transparent 70% Cost Advantage:
              </span>
              <p className="text-sm text-neutral-200">
                For a 100-person team, legacy platforms like Workday and BambooHR cost <strong className="text-red-400">$12,000 – $24,000 USD (~₹12 Lakhs – ₹24 Lakhs INR)</strong> annually, plus thousands more for separate proctoring and LMS tools. Ashmyra HRMS unifies everything at <strong className="text-white font-semibold">70% lower total cost of ownership</strong>.
              </p>
            </div>
            <Link
              href="/contact?intent=hrms-pricing"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs whitespace-nowrap shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
            >
              Get Custom 70% Less Quote
            </Link>
          </div>

        </div>

        {/* ── 07. 5-Stage Execution Pipeline ───────────────────────────── */}
        <div className="mb-24 rounded-3xl p-8 sm:p-12 bg-white/[0.02] border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block mb-2 font-semibold">
              Lifecycle Execution
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              From Date-Based Resume Parsing to Automated Exit Clearance
            </h2>
            <p className="text-sm text-neutral-300 mt-2">
              Every workflow step is automated, compliant, and visible across departments in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {product.workflowSteps.map((s, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-black/40 border border-white/[0.08] flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-bold block mb-2">
                    STEP {s.step}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">{s.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Guard
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 08. Bottom CTA ──────────────────────────────────────────── */}
        <div 
          className="text-center p-10 sm:p-16 rounded-3xl relative overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 78, 59, 0.6))",
            border: "1px solid rgba(16, 185, 129, 0.3)",
          }}
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 block mb-3 font-semibold">
              Deploy Ashmyra HRMS
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Ready to modernize workforce ops at 70% lower cost?
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Experience the power of native AI resume parsing, live anti-cheat proctoring, cross-department onboarding, and 360° exit clearance in one intuitive platform.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact?intent=hrms"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-600/30 transition-all hover:scale-105"
              >
                <span>Book Live HRMS Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold text-sm border border-white/10 transition-colors"
              >
                Contact HR Operations Team
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
