"use client";

import React, { useState } from "react";
import { 
  Search, 
  Users, 
  BarChart3, 
  Zap, 
  ArrowUpRight, 
  ArrowDownRight, 
  CheckCircle, 
  Clock, 
  Calendar, 
  FileText, 
  DollarSign, 
  AlertTriangle,
  Play,
  TrendingUp,
  Cpu
} from "lucide-react";

export function DashboardPreviews() {
  const [activeTab, setActiveTab] = useState<"seo" | "hrms" | "analytics" | "automation">("seo");

  return (
    <div className="bg-[#090c15] border border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/[0.06] rounded-2xl">
          <button
            onClick={() => setActiveTab("seo")}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === "seo"
                ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Ashmyra SEO</span>
          </button>
          <button
            onClick={() => setActiveTab("hrms")}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === "hrms"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Ashmyra HRMS</span>
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === "analytics"
                ? "bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Ashmyra Analytics</span>
          </button>
          <button
            onClick={() => setActiveTab("automation")}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === "automation"
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Automation Builder</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-neutral-500 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
            LIVE UI PREVIEW &bull; DEMO DATA
          </span>
        </div>
      </div>

      {/* Tab 1: Ashmyra SEO Dashboard */}
      {activeTab === "seo" && (
        <div className="pt-6 space-y-6 animate-in fade-in duration-200">
          {/* Top KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">Organic Monthly Traffic</span>
              <div className="flex items-baseline justify-between">
                <span className="text-xl sm:text-2xl font-bold font-mono text-white">482,910</span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center">
                  <ArrowUpRight className="w-3.5 h-3.5" /> +18.4%
                </span>
              </div>
              <span className="text-[10px] text-neutral-500 mt-1 block">vs prior 30 days</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">AI Search &amp; GEO Visibility</span>
              <div className="flex items-baseline justify-between">
                <span className="text-xl sm:text-2xl font-bold font-mono text-sky-400">76.8%</span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center">
                  <ArrowUpRight className="w-3.5 h-3.5" /> +12.1%
                </span>
              </div>
              <span className="text-[10px] text-neutral-500 mt-1 block">ChatGPT &amp; Perplexity citations</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">Keyword Opportunities</span>
              <div className="flex items-baseline justify-between">
                <span className="text-xl sm:text-2xl font-bold font-mono text-white">1,482</span>
                <span className="text-xs font-semibold text-amber-400">High Intent</span>
              </div>
              <span className="text-[10px] text-neutral-500 mt-1 block">KD &lt; 40 / High conversion</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">Technical Health Score</span>
              <div className="flex items-baseline justify-between">
                <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">98 / 100</span>
                <span className="text-xs font-semibold text-neutral-400">0 Critical</span>
              </div>
              <span className="text-[10px] text-neutral-500 mt-1 block">Passing all Core Web Vitals</span>
            </div>
          </div>

          {/* Keyword & SERP Monitoring Table */}
          <div className="bg-[#07090e] border border-white/[0.06] rounded-2xl overflow-x-auto">
            <div className="p-3 border-b border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                Real-Time SERP &amp; Entity Cluster Tracking
              </span>
              <span className="text-[10px] text-neutral-500 font-mono">Updated 14 mins ago</span>
            </div>
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/[0.06] text-neutral-400 font-mono text-[10px] uppercase">
                  <th className="py-2.5 px-4">Entity / Target Keyword</th>
                  <th className="py-2.5 px-4">Cluster Intent</th>
                  <th className="py-2.5 px-4">Google Rank</th>
                  <th className="py-2.5 px-4">AI Engine Citation</th>
                  <th className="py-2.5 px-4">Monthly Vol</th>
                  <th className="py-2.5 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] text-neutral-300">
                <tr>
                  <td className="py-3 px-4 font-medium text-white">autonomous business software</td>
                  <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-mono text-[10px]">Commercial</span></td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-400">#2 (↑3)</td>
                  <td className="py-3 px-4 text-sky-400 font-mono">Cited in 88% queries</td>
                  <td className="py-3 px-4 font-mono">18,200</td>
                  <td className="py-3 px-4"><span className="text-emerald-400 text-[10px] font-mono">Top Authority</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">agentic ai workflow orchestration</td>
                  <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 font-mono text-[10px]">Technical</span></td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-400">#1 (↑1)</td>
                  <td className="py-3 px-4 text-sky-400 font-mono">Featured in Perplexity</td>
                  <td className="py-3 px-4 font-mono">9,400</td>
                  <td className="py-3 px-4"><span className="text-emerald-400 text-[10px] font-mono">Domain Dominant</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">enterprise hrms automated payroll</td>
                  <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-mono text-[10px]">Transactional</span></td>
                  <td className="py-3 px-4 font-mono font-bold text-neutral-200">#4 (↑5)</td>
                  <td className="py-3 px-4 text-neutral-400 font-mono">Cited in 62% queries</td>
                  <td className="py-3 px-4 font-mono">24,500</td>
                  <td className="py-3 px-4"><span className="text-amber-400 text-[10px] font-mono">Surging</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Ashmyra HRMS Dashboard */}
      {activeTab === "hrms" && (
        <div className="pt-6 space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">Total Workforce</span>
              <div className="flex items-baseline justify-between">
                <span className="text-xl sm:text-2xl font-bold font-mono text-white">1,248</span>
                <span className="text-xs font-semibold text-emerald-400">+12 this month</span>
              </div>
              <span className="text-[10px] text-neutral-500 mt-1 block">Across 6 global offices</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">Today&apos;s Attendance</span>
              <div className="flex items-baseline justify-between">
                <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">97.6%</span>
                <span className="text-xs text-neutral-400">On Time</span>
              </div>
              <span className="text-[10px] text-neutral-500 mt-1 block">Biometric &amp; Geo-fence check-ins</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">Monthly Payroll Status</span>
              <div className="flex items-baseline justify-between">
                <span className="text-base sm:text-lg font-bold font-mono text-emerald-400">Ready to Disburse</span>
                <span className="text-xs text-neutral-400 font-mono">100% Tax Compliant</span>
              </div>
              <span className="text-[10px] text-neutral-500 mt-1 block">Auto-reconciliation complete</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">Active ATS Pipeline</span>
              <div className="flex items-baseline justify-between">
                <span className="text-xl sm:text-2xl font-bold font-mono text-indigo-400">38</span>
                <span className="text-xs text-indigo-300">Candidates in review</span>
              </div>
              <span className="text-[10px] text-neutral-500 mt-1 block">Avg time-to-hire: 16 days</span>
            </div>
          </div>

          {/* Quick Workforce Actions & Pending Approvals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#07090e] border border-white/[0.06] space-y-3">
              <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                Pending Leave &amp; Expense Approvals
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div>
                    <span className="font-semibold text-white block">Annual Leave (4 Days)</span>
                    <span className="text-neutral-400 text-[11px]">Engineering &bull; Priya S.</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-2.5 py-1 text-[11px] bg-emerald-500/20 text-emerald-300 rounded-lg hover:bg-emerald-500/30">Approve</button>
                    <button className="px-2.5 py-1 text-[11px] bg-white/[0.05] text-neutral-400 rounded-lg hover:bg-white/[0.1]">Review</button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div>
                    <span className="font-semibold text-white block">Client Travel Reimbursement ($340)</span>
                    <span className="text-neutral-400 text-[11px]">Sales &bull; Marcus R.</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-2.5 py-1 text-[11px] bg-emerald-500/20 text-emerald-300 rounded-lg hover:bg-emerald-500/30">Approve</button>
                    <button className="px-2.5 py-1 text-[11px] bg-white/[0.05] text-neutral-400 rounded-lg hover:bg-white/[0.1]">Receipt</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#07090e] border border-white/[0.06] space-y-3">
              <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                AI HR Assistant Telemetry
              </span>
              <p className="text-xs text-neutral-400 leading-relaxed">
                The embedded conversational HR assistant resolved 312 employee questions automatically over the last 7 days without requiring HR staff intervention.
              </p>
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300">
                <span className="font-bold block mb-1">Top Query This Week:</span>
                &quot;What is the tax exemption limit for remote work allowances in 2025?&quot;
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Ashmyra Analytics */}
      {activeTab === "analytics" && (
        <div className="pt-6 space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">Telemetry Events Ingested</span>
              <span className="text-2xl font-bold font-mono text-white">4.2M / day</span>
              <span className="text-[10px] text-emerald-400 block mt-1">Zero dropped packets</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">AI Anomaly Alerts</span>
              <span className="text-2xl font-bold font-mono text-emerald-400">0 Critical</span>
              <span className="text-[10px] text-neutral-500 block mt-1">1 harmless deviation flagged</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">Query Latency (P99)</span>
              <span className="text-2xl font-bold font-mono text-indigo-400">42ms</span>
              <span className="text-[10px] text-neutral-500 block mt-1">Sub-second execution</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#07090e] border border-white/[0.06] space-y-2">
            <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
              Automated AI Executive Insight Brief:
            </span>
            <p className="text-xs text-neutral-300 leading-relaxed">
              &quot;Enterprise revenue velocity accelerated by 14% week-over-week driven primarily by mid-market B2B conversions. Operational churn declined to an all-time low of 0.4%, and cloud infrastructure costs decreased 8% following automated serverless scaling rules.&quot;
            </p>
          </div>
        </div>
      )}

      {/* Tab 4: Ashmyra Automation Builder */}
      {activeTab === "automation" && (
        <div className="pt-6 space-y-4 animate-in fade-in duration-200">
          <span className="text-xs font-mono uppercase text-neutral-400 block">
            Visual Workflow Pipeline: Invoice Processing &amp; Approval Loop
          </span>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center">
              <span className="text-[10px] font-mono text-neutral-500 uppercase block">Step 01</span>
              <span className="text-xs font-bold text-white block mt-1">Inbound Email / PDF</span>
              <span className="text-[11px] text-neutral-400 mt-1 block">Trigger on attachment</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-center">
              <span className="text-[10px] font-mono text-indigo-400 uppercase block">Step 02</span>
              <span className="text-xs font-bold text-indigo-300 block mt-1">AI OCR &amp; Schema Parse</span>
              <span className="text-[11px] text-neutral-400 mt-1 block">Extract vendor &amp; total</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center">
              <span className="text-[10px] font-mono text-neutral-500 uppercase block">Step 03</span>
              <span className="text-xs font-bold text-white block mt-1">ERP Validation</span>
              <span className="text-[11px] text-neutral-400 mt-1 block">Match PO number</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center">
              <span className="text-[10px] font-mono text-amber-400 uppercase block">Step 04</span>
              <span className="text-xs font-bold text-amber-300 block mt-1">Manager Approval</span>
              <span className="text-[11px] text-neutral-400 mt-1 block">If &gt; $5,000 threshold</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
              <span className="text-[10px] font-mono text-emerald-400 uppercase block">Step 05</span>
              <span className="text-xs font-bold text-emerald-300 block mt-1">Scheduled Payment</span>
              <span className="text-[11px] text-neutral-400 mt-1 block">Execute &amp; notify vendor</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
