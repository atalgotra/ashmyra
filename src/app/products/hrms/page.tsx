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
  Calendar, 
  Clock, 
  FileText, 
  DollarSign, 
  Award, 
  ShieldCheck, 
  HelpCircle, 
  Laptop, 
  Receipt,
  UserCheck,
  TrendingUp,
  ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra HRMS | Intelligent Workforce & Automated Payroll Platform",
  description:
    "Complete enterprise workforce operating system: Modern ATS, automated onboarding, biometric attendance, statutory payroll, KRA/KPI tracking, and 24/7 AI HR assistant.",
  keywords: [
    "Ashmyra HRMS",
    "Workforce Intelligence",
    "Statutory Payroll India",
    "Biometric Attendance System",
    "AI HR Platform",
    "Modern ATS India",
    "Employee Self Service Portal",
    "Performance Management KRA",
  ],
  openGraph: {
    title: "Ashmyra HRMS | Complete Workforce Operating System",
    description:
      "Unify recruiting, attendance, statutory payroll, appraisals, and employee support in one modern, AI-native workforce interface.",
    url: "https://ashmyra.com/products/hrms",
    images: [{ url: "/wow/wow4-intelligent-workforce.png", width: 1200, height: 675, alt: "Ashmyra HRMS Platform Preview" }],
  },
  alternates: {
    canonical: "https://ashmyra.com/products/hrms",
  },
};

export default function AshmyraHrmsPage() {
  const hrmsModules = [
    { title: "Recruitment & ATS", desc: "AI resume parsing, automated applicant screening, interview scheduling, and pipeline stages.", icon: UserCheck },
    { title: "Digital Onboarding", desc: "Self-service employee document collection, e-signatures, automated IT asset requests, and welcoming workflows.", icon: FileText },
    { title: "Biometric & Geo Attendance", desc: "Hardware biometric sync, geo-fenced mobile check-ins, multi-shift management, and overtime calculations.", icon: Clock },
    { title: "Leave & Absence Management", desc: "Configurable annual, sick, and maternity policies with multi-tier managerial approval matrices.", icon: Calendar },
    { title: "Statutory Payroll Engine", desc: "Automated monthly salary calculation, tax withholdings, statutory filings (PF/ESI/TDS), and direct payslips.", icon: DollarSign },
    { title: "Performance, KRA & OKRs", desc: "Continuous goal setting, 360-degree peer reviews, quarterly appraisals, and clear growth roadmaps.", icon: Award },
    { title: "Employee Self Service (ESS)", desc: "Intuitive mobile & web portal for employees to download tax slips, request leaves, and review benefits.", icon: Users },
    { title: "Asset Management", desc: "Track laptops, software licenses, accessories, and physical equipment assigned to each staff member.", icon: Laptop },
    { title: "Expense Management & Reimbursement", desc: "Receipt photo upload with automatic OCR currency extraction and multi-level expense approvals.", icon: Receipt },
    { title: "AI HR Assistant", desc: "Conversational bot answering employee handbook questions, statutory rules, and company policies 24/7.", icon: Sparkles },
    { title: "Enterprise Compliance Vault", desc: "Secure digital document lockers with automated alerts for expiring visas, contracts, and certifications.", icon: ShieldCheck },
    { title: "HR Analytics & Workforce BI", desc: "Attrition forecasting, headcount trends, gender ratio reports, and department-wise payroll telemetry.", icon: HelpCircle },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 01. Hero Header ────────────────────────────────────────── */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300 font-mono mb-6">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span>Complete Workforce Operating System · Hire to Retire</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Your Entire Workforce.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-emerald-200">
              One Intelligent Platform.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Eliminate disconnected spreadsheets and frustrating legacy HR portals. Ashmyra HRMS unifies recruiting, biometric attendance, statutory payroll, appraisals, and employee self-service in one modern interface.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=hrms-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95"
            >
              Schedule Live HRMS Walkthrough
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources/modernizing-workforce-tech-from-spreadsheets-to-ai"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-neutral-200 text-sm border border-white/[0.1] transition-all"
            >
              HR Modernization Guide
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </Link>
          </div>
        </div>

        {/* ── 02. WOW Visual Showcase ─────────────────────────────────── */}
        <ProductWowPreview
          imageSrc="/wow/wow4-intelligent-workforce.png"
          imageAlt="Ashmyra HRMS Intelligent Workforce Platform"
          productName="Ashmyra HRMS Workforce Intelligence"
          productTagline="Complete 7-stage employee lifecycle: recruit, onboard, manage, pay, and grow high-performing teams."
          accentColor="#10b981"
          badgeText="Statutory Payroll & Workforce Engine Live"
          telemetry={[
            { label: "Payroll Processing", value: "<15 Mins", detail: "Automated tax deductions & one-click direct bank dispatch" },
            { label: "Attendance Precision", value: "99.9%", detail: "Biometric & geofenced check-in reconciliation" },
            { label: "Onboarding Cycle", value: "3x Faster", detail: "Self-serve e-KYC, asset routing, and handbook acceptance" },
            { label: "Deliveries via Freelancer", value: "100+", detail: "Enterprise systems proven in production globally" },
          ]}
          capabilities={[
            {
              title: "7-Stage Lifecycle Automation",
              description: "Unified flow from candidate sourcing and digital offer letters to biometric clock-ins, statutory payroll, and annual appraisals.",
            },
            {
              title: "Autonomous Statutory Payroll Engine",
              description: "Handles PF, ESI, TDS, PT, and gratuity calculations with auto-generated Form 16s and encrypted salary slips.",
            },
            {
              title: "AI HR Copilot & Assistant",
              description: "24/7 self-service bot answers employee policy questions, handles leave requests, and flags attrition risk patterns.",
            },
          ]}
        />

        {/* ── 03. Freelancer.com 100+ Delivery Proof Banner ─────────────── */}
        <div className="my-16">
          <FreelancerTrustBanner category="Enterprise HRMS & Workforce Platforms" />
        </div>

        {/* ── 04. Live Interactive Previews Component ──────────────────── */}
        <div className="mb-20">
          <DashboardPreviews />
        </div>

        {/* ── 05. 12 Comprehensive HR Modules ──────────────────────────── */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block mb-2 font-semibold">
              Platform Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              12 Integrated Modules Built for Modern Operations
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Everything your People Operations and Finance teams need under a single login.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hrmsModules.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-emerald-500/35 transition-all flex flex-col justify-between hover:bg-white/[0.04]"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{mod.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">{mod.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[10px] font-mono text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Enterprise Production Ready
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 06. Bottom CTA ──────────────────────────────────────────── */}
        <div className="text-center p-10 sm:p-14 rounded-3xl bg-emerald-950/20 border border-emerald-500/30">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Modernize your workforce operations with Ashmyra HRMS
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Say goodbye to payroll errors and manual attendance logs. See how Ashmyra HRMS simplifies your daily workflows.
          </p>
          <Link
            href="/contact?intent=hrms"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-600/30 transition-all hover:scale-105"
          >
            <span>Book Live HRMS Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
