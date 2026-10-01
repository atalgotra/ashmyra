"use client";

import React, { useState } from "react";
import { 
  Users, 
  UserCheck, 
  Calendar, 
  DollarSign, 
  Award, 
  Bot, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  FileText,
  Briefcase
} from "lucide-react";

const LIFECYCLE_STEPS = [
  { id: "candidate", label: "Candidate", subtitle: "AI Screen & Ranking", metric: "98% Match" },
  { id: "hire", label: "Hire", subtitle: "1-Click Offer Contract", metric: "Instant NDA" },
  { id: "onboard", label: "Onboard", subtitle: "Auto-Provisioning", metric: "< 24 hrs" },
  { id: "manage", label: "Manage", subtitle: "Attendance & Geo-fence", metric: "99.2% Presence" },
  { id: "develop", label: "Develop", subtitle: "Skill Graph Matrix", metric: "14 Paths" },
  { id: "performance", label: "Performance", subtitle: "KRA / KPI AI Rubric", metric: "Q3 Calibrated" },
  { id: "payroll", label: "Payroll", subtitle: "Statutory & Tax Filing", metric: "100% On-Time" },
  { id: "growth", label: "Growth", subtitle: "Succession Mapping", metric: "Top 5% Retained" },
];

export function HrmsExperience() {
  const [activeStepIndex, setActiveStepIndex] = useState(3); // default Manage / Attendance
  const activeStep = LIFECYCLE_STEPS[activeStepIndex];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-b border-white/[0.06] overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-emerald-500/10 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300 font-mono">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Workforce Experience</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            THE EMPLOYEE LIFECYCLE.
          </h2>

          <p className="text-xs sm:text-sm font-mono text-neutral-400 uppercase tracking-widest">
            From candidate sourcing to automated payroll &amp; leadership growth.
          </p>
        </div>

        {/* ================================================================= */}
        {/* INTERACTIVE LIFECYCLE SCRUBBER BAR                                */}
        {/* ================================================================= */}
        <div className="mb-10 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center gap-2 min-w-[760px] justify-between p-2 rounded-2xl bg-[#090c16] border border-white/[0.08]">
            {LIFECYCLE_STEPS.map((step, idx) => {
              const isSelected = idx === activeStepIndex;
              const isPassed = idx < activeStepIndex;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  data-cursor="explore"
                  className={`flex-1 py-3 px-2 rounded-xl text-center transition-all duration-300 relative ${
                    isSelected
                      ? "bg-emerald-500/20 border border-emerald-400 text-white shadow-lg shadow-emerald-500/20"
                      : isPassed
                      ? "text-neutral-300 hover:text-white hover:bg-white/[0.03]"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    {isPassed ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <span className="text-[10px] font-mono font-bold">0{idx + 1}</span>
                    )}
                  </div>
                  <span className="text-xs font-bold block font-mono uppercase tracking-wider">
                    {step.label}
                  </span>
                  <span className="text-[9px] font-mono text-neutral-400 block mt-0.5 truncate">
                    {step.metric}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================= */}
        {/* DYNAMIC REVEALED HRMS INTERFACE (ONE UNIFIED SYSTEM)             */}
        {/* ================================================================= */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/[0.1] bg-[#080c18]/95 shadow-2xl space-y-6">
          
          {/* Top Stage Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/15 text-emerald-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase">
                  Active Lifecycle Module &bull; 0{activeStepIndex + 1}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Ashmyra HRMS &mdash; {activeStep.label} Intelligence
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Realtime Demo Data</span>
            </div>
          </div>

          {/* Dynamic Module Content Based On Step */}
          {activeStepIndex === 3 && ( // MANAGE (ATTENDANCE & LEAVES)
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">Total Headcount</span>
                  <div className="text-2xl font-bold text-white mt-1">248 Active</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">Present Today</span>
                  <div className="text-2xl font-bold text-emerald-400 mt-1">242 (97.5%)</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">On Approved Leave</span>
                  <div className="text-2xl font-bold text-amber-400 mt-1">6 Employees</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">Geo-Fence Checkins</span>
                  <div className="text-2xl font-bold text-sky-400 mt-1">100% Verified</div>
                </div>
              </div>

              {/* Attendance Log Table */}
              <div className="rounded-2xl border border-white/[0.06] bg-[#05070a] p-4 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-neutral-500 text-[10px] pb-2 border-b border-white/[0.06]">
                  <span>EMPLOYEE</span>
                  <span>DEPARTMENT</span>
                  <span>CHECK-IN</span>
                  <span>METHOD</span>
                  <span>STATUS</span>
                </div>
                {[
                  { name: "Devon Vance", role: "AI Research", time: "08:58 AM", method: "Biometric AI", status: "On Time" },
                  { name: "Aria Thorne", role: "Frontend Eng", time: "09:02 AM", method: "Mobile Geo-Fence", status: "On Time" },
                  { name: "Julian Gray", role: "Product Lead", time: "09:12 AM", method: "Remote Web", status: "Present" }
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02]">
                    <span className="text-white font-bold">{row.name}</span>
                    <span className="text-neutral-400">{row.role}</span>
                    <span className="text-sky-300">{row.time}</span>
                    <span className="text-neutral-400">{row.method}</span>
                    <span className="text-emerald-400 font-semibold">{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeStepIndex === 6 && ( // PAYROLL
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">Gross Salary Disbursed</span>
                  <div className="text-2xl font-bold text-white mt-1">$482,500.00</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">Statutory Tax &amp; TDS</span>
                  <div className="text-2xl font-bold text-indigo-300 mt-1">$96,400.00</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">Reconciliation Status</span>
                  <div className="text-2xl font-bold text-emerald-400 mt-1">100% Balanced</div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 flex items-center justify-between">
                <span>Direct Bank Transfer Gateway: Connected (ACH, RTGS, SWIFT)</span>
                <span className="text-white font-bold">1-Click Run Ready</span>
              </div>
            </div>
          )}

          {activeStepIndex !== 3 && activeStepIndex !== 6 && (
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center space-y-4 animate-in fade-in duration-300">
              <Sparkles className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-bold text-white font-mono uppercase">
                {activeStep.label} Lifecycle Engine Active
              </h4>
              <p className="text-sm text-neutral-300 max-w-lg mx-auto">
                Autonomous workflow active for {activeStep.label.toLowerCase()} operations. AI Assistant auto-syncs telemetry across ATS, ERP, and compliance ledgers.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 text-xs font-mono">
                <span>Telemetry Metric:</span>
                <strong>{activeStep.metric}</strong>
              </div>
            </div>
          )}

          {/* AI HR Assistant Bar at Bottom of UI */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-neutral-300">
              <Bot className="w-4 h-4 text-emerald-400" />
              <span>Ashmyra AI HR Assistant: &quot;All 12 modules operating in compliance.&quot;</span>
            </div>
            <span className="text-indigo-400 font-semibold cursor-pointer hover:underline">
              Ask AI Assistant &rarr;
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
