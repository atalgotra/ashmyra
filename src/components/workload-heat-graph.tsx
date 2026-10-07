"use client";

import React, { useState } from "react";
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  ArrowRight, 
  Clock, 
  Sliders, 
  RotateCcw,
  Zap,
  TrendingUp,
  ShieldAlert,
  Flame,
  Check
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  loadPercentage: number;
  status: "overburdened" | "optimal" | "underburdened";
  activeTasks: number;
  weeklyHours: number;
  focusArea: string;
  burnoutRisk: "High" | "Low" | "None";
  recommendation?: string;
  rebalanced?: boolean;
}

const INITIAL_MEMBERS: TeamMember[] = [
  {
    id: "alex",
    name: "Alex Rivera",
    role: "Lead Backend Architect",
    avatar: "AR",
    loadPercentage: 94,
    status: "overburdened",
    activeTasks: 9,
    weeklyHours: 54,
    focusArea: "Auth Microservice & Postgres Sharding",
    burnoutRisk: "High",
    recommendation: "Deadline collision across 3 releases. Auto-rebalance 2 unassigned tasks to David Chen.",
  },
  {
    id: "priya",
    name: "Priya Sharma",
    role: "Frontend Engineering Lead",
    avatar: "PS",
    loadPercentage: 70,
    status: "optimal",
    activeTasks: 4,
    weeklyHours: 38,
    focusArea: "Design System Tokens & Edge SSR",
    burnoutRisk: "None",
  },
  {
    id: "david",
    name: "David Chen",
    role: "Fullstack Platform Engineer",
    avatar: "DC",
    loadPercentage: 34,
    status: "underburdened",
    activeTasks: 2,
    weeklyHours: 18,
    focusArea: "API Gateway Maintenance",
    burnoutRisk: "None",
    recommendation: "26 hrs available bandwidth. Ready for high-priority backend queue items.",
  },
  {
    id: "elena",
    name: "Elena Rostova",
    role: "Principal Product Designer",
    avatar: "ER",
    loadPercentage: 74,
    status: "optimal",
    activeTasks: 5,
    weeklyHours: 40,
    focusArea: "Interactive Kanban UX & Workload Views",
    burnoutRisk: "None",
  },
  {
    id: "marcus",
    name: "Marcus Vance",
    role: "QA & Automation Engineer",
    avatar: "MV",
    loadPercentage: 28,
    status: "underburdened",
    activeTasks: 2,
    weeklyHours: 15,
    focusArea: "End-to-End Cypress Suites",
    burnoutRisk: "None",
    recommendation: "CI suite green. Available for performance stress test orchestration.",
  },
];

export function WorkloadHeatGraph() {
  const [members, setMembers] = useState<TeamMember[]>(INITIAL_MEMBERS);
  const [filter, setFilter] = useState<"all" | "overburdened" | "optimal" | "underburdened">("all");
  const [isRebalanced, setIsRebalanced] = useState(false);
  const [rebalanceToast, setRebalanceToast] = useState<string | null>(null);

  const handleSimulateRebalance = () => {
    if (!isRebalanced) {
      // Rebalance Alex (overburdened) to David (underburdened)
      setMembers(prev => prev.map(m => {
        if (m.id === "alex") {
          return {
            ...m,
            loadPercentage: 68,
            status: "optimal",
            activeTasks: 6,
            weeklyHours: 37,
            burnoutRisk: "None",
            rebalanced: true,
            recommendation: "Workload rebalanced. Burnout risk mitigated (-26% cognitive load).",
          };
        }
        if (m.id === "david") {
          return {
            ...m,
            loadPercentage: 64,
            status: "optimal",
            activeTasks: 5,
            weeklyHours: 35,
            rebalanced: true,
            recommendation: "Assigned Auth Microservice tickets. Full velocity achieved (+30% capacity).",
          };
        }
        return m;
      }));
      setIsRebalanced(true);
      setRebalanceToast("AI Workload Rebalance Complete: 2 critical tasks successfully transferred to David Chen. Zero team burnout!");
    } else {
      // Reset to original
      setMembers(INITIAL_MEMBERS);
      setIsRebalanced(false);
      setRebalanceToast("Workload telemetry reset to live intake state.");
    }

    setTimeout(() => {
      setRebalanceToast(null);
    }, 4500);
  };

  const filteredMembers = members.filter(m => {
    if (filter === "all") return true;
    return m.status === filter;
  });

  const overburdenedCount = members.filter(m => m.status === "overburdened").length;
  const optimalCount = members.filter(m => m.status === "optimal").length;
  const underburdenedCount = members.filter(m => m.status === "underburdened").length;

  return (
    <div className="relative rounded-3xl bg-[#090b10] border border-white/[0.08] shadow-2xl shadow-rose-950/20 overflow-hidden">
      
      {/* Top Header Bar */}
      <div className="p-6 sm:p-8 border-b border-white/[0.06] bg-gradient-to-r from-rose-950/20 via-neutral-900/40 to-neutral-900/20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
                Live Management Telemetry
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs font-mono text-neutral-400">
                AI Employee Workload Heat Graph
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Real-Time Team Capacity &amp; Burnout Prevention
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
              Unlike Jira where workloads stay hidden inside complex story point estimations, Ashmyra continuously monitors active task weights, deadlines, and bandwidth in real time to show management who is overburdened vs underburdened.
            </p>
          </div>

          {/* AI Rebalance Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleSimulateRebalance}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold font-mono tracking-wide transition-all shadow-lg ${
                isRebalanced
                  ? "bg-neutral-800 hover:bg-neutral-700 text-neutral-300 border border-white/10"
                  : "bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 hover:from-rose-500 hover:to-pink-500 text-white shadow-rose-600/30 hover:scale-105 active:scale-95"
              }`}
            >
              {isRebalanced ? (
                <>
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Workload Model</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
                  <span>Execute AI Rebalance (1-Click)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Rebalance Toast Notification */}
        {rebalanceToast && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-fadeIn">
            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{rebalanceToast}</span>
          </div>
        )}

        {/* Filter Tabs & Summary Counter */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/[0.04]">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                filter === "all"
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-white/[0.02] text-neutral-400 hover:text-white border border-transparent"
              }`}
            >
              All Team Members ({members.length})
            </button>
            <button
              onClick={() => setFilter("overburdened")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                filter === "overburdened"
                  ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                  : "bg-white/[0.02] text-neutral-400 hover:text-rose-300 border border-transparent"
              }`}
            >
              <Flame className="w-3 h-3 text-rose-400" />
              Overburdened ({overburdenedCount})
            </button>
            <button
              onClick={() => setFilter("optimal")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                filter === "optimal"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "bg-white/[0.02] text-neutral-400 hover:text-emerald-300 border border-transparent"
              }`}
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Optimal Bandwidth ({optimalCount})
            </button>
            <button
              onClick={() => setFilter("underburdened")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                filter === "underburdened"
                  ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                  : "bg-white/[0.02] text-neutral-400 hover:text-sky-300 border border-transparent"
              }`}
            >
              <Zap className="w-3 h-3 text-sky-400" />
              Underburdened / Available ({underburdenedCount})
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
            <span>Overall Utilization: <strong className="text-white font-bold">{isRebalanced ? "66.8%" : "60.8%"}</strong></span>
            <span>•</span>
            <span>User Limit: <strong className="text-rose-400 font-bold">Unlimited*</strong></span>
          </div>
        </div>
      </div>

      {/* Heat Graph Member Rows */}
      <div className="divide-y divide-white/[0.05]">
        {filteredMembers.map((member) => {
          const isOver = member.status === "overburdened";
          const isOpt = member.status === "optimal";
          const isUnder = member.status === "underburdened";

          return (
            <div
              key={member.id}
              className={`p-5 sm:p-6 transition-all hover:bg-white/[0.02] ${
                isOver ? "bg-rose-950/[0.06]" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                
                {/* Member Profile */}
                <div className="flex items-start sm:items-center gap-3.5 min-w-[280px]">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-xs font-mono border ${
                      isOver
                        ? "bg-rose-500/15 border-rose-500/40 text-rose-300 shadow-lg shadow-rose-950/40"
                        : isOpt
                        ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-300"
                        : "bg-sky-500/15 border-sky-500/30 text-sky-300"
                    }`}
                  >
                    {member.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {member.name}
                      </h4>
                      {member.rebalanced && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                          AI Rebalanced
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400">{member.role}</p>
                    <p className="text-[11px] font-mono text-neutral-500 mt-0.5">
                      Focus: <span className="text-neutral-300">{member.focusArea}</span>
                    </p>
                  </div>
                </div>

                {/* Heat Bar & Capacity Meter */}
                <div className="flex-1 max-w-xl">
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-neutral-400 flex items-center gap-1.5">
                      Capacity Load:
                      <strong
                        className={
                          isOver ? "text-rose-400 font-bold" : isOpt ? "text-emerald-400 font-bold" : "text-sky-400 font-bold"
                        }
                      >
                        {member.loadPercentage}%
                      </strong>
                    </span>
                    <span className="text-neutral-400">
                      {member.weeklyHours} hrs/wk • {member.activeTasks} Active Tasks
                    </span>
                  </div>

                  {/* Visual Heat Bar */}
                  <div className="w-full h-3 rounded-full bg-white/[0.06] overflow-hidden p-0.5 border border-white/[0.05]">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        isOver
                          ? "bg-gradient-to-r from-orange-500 via-rose-500 to-red-500 shadow-md shadow-rose-500/50"
                          : isOpt
                          ? "bg-gradient-to-r from-emerald-500 to-teal-400"
                          : "bg-gradient-to-r from-sky-500 to-cyan-400"
                      }`}
                      style={{ width: `${member.loadPercentage}%` }}
                    />
                  </div>

                  {/* Recommendation / Warning Note */}
                  {member.recommendation && (
                    <div className="mt-2 flex items-start gap-1.5 text-[11px] text-neutral-300 font-mono bg-white/[0.02] p-2 rounded-lg border border-white/[0.04]">
                      {isOver ? (
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <Sparkles className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span>{member.recommendation}</span>
                    </div>
                  )}
                </div>

                {/* Status Badge */}
                <div className="flex items-center lg:flex-col lg:items-end justify-between lg:justify-center gap-1.5 min-w-[170px]">
                  {isOver && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/35 text-xs font-mono font-bold text-rose-300">
                      <Flame className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                      OVERBURDENED
                    </span>
                  )}
                  {isOpt && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      OPTIMAL FLOW
                    </span>
                  )}
                  {isUnder && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-500/15 border border-sky-500/30 text-xs font-mono font-bold text-sky-300">
                      <Zap className="w-3.5 h-3.5 text-sky-400" />
                      UNDERBURDENED
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-neutral-500">
                    {isOver ? "Burnout Risk: Immediate" : isOpt ? "Steady Delivery State" : "Available Capacity: High"}
                  </span>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="p-4 sm:p-5 bg-black/40 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-rose-400" />
          <span>Real-time algorithm: Calculates cognitive task weight + deadline collision + Git commits.</span>
        </div>
        <div className="text-[11px] text-neutral-500">
          *No maximum user limit: telemetry scales to 500+ team members with 0 lag.
        </div>
      </div>

    </div>
  );
}
