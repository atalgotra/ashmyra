import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
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
  UserCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra HRMS | Intelligent Workforce & Payroll Platform",
  description:
    "Complete enterprise workforce suite: Modern ATS, automated onboarding, biometric attendance, statutory payroll, KRA/KPI tracking, and AI HR assistant.",
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
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300 font-mono mb-6">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span>Complete Workforce Operating System</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Your Entire Workforce.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-emerald-200">
              One Intelligent Platform.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Eliminate disconnected spreadsheets and frustrating legacy HR portals. Ashmyra HRMS unifies recruiting, attendance, payroll, appraisals, and employee support in one modern interface.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=hrms-demo"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-600/30 transition-all"
            >
              Schedule Live HRMS Walkthrough
            </Link>
            <Link
              href="/resources/modernizing-workforce-tech-from-spreadsheets-to-ai"
              className="px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-neutral-200 text-xs border border-white/[0.08] transition-all"
            >
              Read Modern HR Blueprint
            </Link>
          </div>
        </div>

        {/* Complete Employee Lifecycle Banner */}
        <div className="bg-[#090d16] border border-white/[0.08] rounded-3xl p-6 sm:p-8 mb-20 text-center">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-4">
            Unified Employee Lifecycle Coverage
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {["01 Hire", "02 Onboard", "03 Manage", "04 Develop", "05 Engage", "06 Pay", "07 Offboard"].map((step, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs font-medium text-white">
                <span className="text-[10px] text-emerald-400 font-mono block mb-1">Stage {idx + 1}</span>
                {step.substring(3)}
              </div>
            ))}
          </div>
        </div>

        {/* 12 Detailed Modules Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block mb-2">
              Comprehensive Platform
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              12 Enterprise Workforce Modules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hrmsModules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-3xl p-6 flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">{mod.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">{mod.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-white/[0.05] text-[10px] font-mono text-emerald-300">
                    Production Ready &bull; Fully Configurable
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Dashboards Showcase */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
              Live Interface Previews
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Intuitive Dashboards for HR &amp; Employees
            </h2>
          </div>
          <DashboardPreviews />
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-10 rounded-3xl bg-emerald-950/20 border border-emerald-500/30">
          <h3 className="text-2xl font-bold text-white mb-2">
            Ready to streamline your workforce operations?
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Migrate from disjointed tools to Ashmyra HRMS with automated data import and zero operational downtime.
          </p>
          <Link
            href="/contact?intent=hrms"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-600/30 transition-all"
          >
            <span>Request Custom HRMS Demonstration</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
