"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Clock,
  AlertTriangle,
  RefreshCw,
  User,
  Zap,
  Database,
  Bot,
  Mail,
  Shield,
  ChevronRight,
  Loader2,
} from "lucide-react";

type StepStatus = "idle" | "running" | "completed" | "waiting" | "failed" | "retrying" | "escalated";

interface WorkflowStep {
  id: number;
  name: string;
  type: "trigger" | "ai" | "condition" | "action" | "human" | "verification" | "notification";
  icon: React.ElementType;
  description: string;
  output?: string;
  delay: number; // ms before this step starts
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  { id: 1, name: "Form Submitted", type: "trigger", icon: Zap, description: "New customer onboarding request received", output: "Event payload validated", delay: 0 },
  { id: 2, name: "AI Validates Data", type: "ai", icon: Bot, description: "AI cross-checks completeness, formats and detects anomalies", output: "Data quality: 96/100", delay: 900 },
  { id: 3, name: "Duplicate Check", type: "ai", icon: Database, description: "Searches existing records for matching entities", output: "No duplicates found", delay: 1800 },
  { id: 4, name: "Risk Evaluation", type: "ai", icon: Shield, description: "AI evaluates customer risk profile and compliance flags", output: "Risk: LOW — Auto-approve eligible", delay: 2700 },
  { id: 5, name: "CRM Record Created", type: "action", icon: Database, description: "New account created in the CRM with enriched firmographics", output: "Account ID: CRM-94821", delay: 3600 },
  { id: 6, name: "Human Approval Gate", type: "human", icon: User, description: "Credit limit above ₹2L — escalated to Finance Manager", output: "Awaiting decision…", delay: 4500 },
  { id: 7, name: "Welcome Email Sent", type: "notification", icon: Mail, description: "Personalized onboarding email generated and dispatched", output: "Delivered: john@company.com", delay: 5400 },
  { id: 8, name: "Task Assigned", type: "action", icon: CheckCircle2, description: "Internal task created and assigned to Account Manager", output: "Task ID: TSK-20481", delay: 6300 },
  { id: 9, name: "Workflow Complete", type: "verification", icon: CheckCircle2, description: "All steps executed successfully. Audit log sealed.", output: "Duration: 8.2s — 0 retries", delay: 7200 },
];

const statusColors: Record<StepStatus, string> = {
  idle: "border-white/[0.08] bg-white/[0.02] text-neutral-500",
  running: "border-indigo-500/50 bg-indigo-500/10 text-white shadow-lg shadow-indigo-950/40",
  completed: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  waiting: "border-amber-500/50 bg-amber-500/10 text-amber-300",
  failed: "border-red-500/50 bg-red-500/10 text-red-300",
  retrying: "border-orange-500/40 bg-orange-500/10 text-orange-300",
  escalated: "border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-300",
};

const statusIcon: Record<StepStatus, React.ElementType> = {
  idle: ChevronRight,
  running: Loader2,
  completed: CheckCircle2,
  waiting: Clock,
  failed: AlertTriangle,
  retrying: RefreshCw,
  escalated: User,
};

const typeColors: Record<WorkflowStep["type"], string> = {
  trigger: "text-amber-400 bg-amber-500/10 border-amber-500/25",
  ai: "text-indigo-400 bg-indigo-500/10 border-indigo-500/25",
  condition: "text-sky-400 bg-sky-500/10 border-sky-500/25",
  action: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
  human: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/25",
  verification: "text-teal-400 bg-teal-500/10 border-teal-500/25",
  notification: "text-purple-400 bg-purple-500/10 border-purple-500/25",
};

interface ConsoleLog {
  time: string;
  message: string;
  level: "info" | "success" | "warn" | "ai";
}

export function AutomationEngineDemo() {
  const [stepStatuses, setStepStatuses] = useState<Record<number, StepStatus>>(() =>
    Object.fromEntries(WORKFLOW_STEPS.map((s) => [s.id, "idle"]))
  );
  const [isRunning, setIsRunning] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [logs, setLogs] = useState<ConsoleLog[]>([]);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const addLog = useCallback((message: string, level: ConsoleLog["level"] = "info") => {
    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
    setLogs((prev) => [...prev.slice(-8), { time, message, level }]);
  }, []);

  const reset = useCallback(() => {
    setStepStatuses(Object.fromEntries(WORKFLOW_STEPS.map((s) => [s.id, "idle"])));
    setIsRunning(false);
    setIsDone(false);
    setLogs([]);
  }, []);

  const run = useCallback(() => {
    if (isRunning || isDone) return;
    setIsRunning(true);
    addLog("ENGINE STARTED — Processing customer onboarding event", "info");

    const timers: ReturnType<typeof setTimeout>[] = [];

    WORKFLOW_STEPS.forEach((step) => {
      // Start running
      timers.push(
        setTimeout(() => {
          setStepStatuses((prev) => ({ ...prev, [step.id]: step.type === "human" ? "waiting" : "running" }));
          if (step.type === "ai") {
            addLog(`AI — ${step.name}: ${step.description}`, "ai");
          } else if (step.type === "human") {
            addLog(`APPROVAL GATE — ${step.name}: Awaiting Finance Manager decision`, "warn");
          } else {
            addLog(`${step.name}: ${step.description}`, "info");
          }
        }, step.delay)
      );

      // Complete
      const completionDelay = step.type === "human" ? step.delay + 1400 : step.delay + 700;
      timers.push(
        setTimeout(() => {
          setStepStatuses((prev) => ({ ...prev, [step.id]: "completed" }));
          if (step.output) addLog(`✓ ${step.output}`, "success");
        }, completionDelay)
      );
    });

    // All done
    timers.push(
      setTimeout(() => {
        setIsRunning(false);
        setIsDone(true);
        addLog("WORKFLOW COMPLETE — Audit log sealed. All 9 steps passed.", "success");
      }, WORKFLOW_STEPS[WORKFLOW_STEPS.length - 1].delay + 1600)
    );

    return () => timers.forEach(clearTimeout);
  }, [isRunning, isDone, addLog]);

  const logLevelColor: Record<ConsoleLog["level"], string> = {
    info: "text-neutral-400",
    success: "text-emerald-400",
    warn: "text-amber-400",
    ai: "text-indigo-300",
  };

  return (
    <div className="rounded-3xl border border-white/[0.08] bg-[#08090e] shadow-2xl overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/[0.06] bg-black/40">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
            Ashmyra Automation — Interactive Demo
          </span>
          <span className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-[10px] font-mono text-amber-300">
            SIMULATED WORKFLOW
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={reset}
            className="p-2 rounded-lg hover:bg-white/[0.05] text-neutral-400 hover:text-white transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={isDone ? reset : run}
            disabled={isRunning}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
              isRunning
                ? "bg-white/[0.04] text-neutral-500 cursor-not-allowed"
                : isDone
                ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black shadow-lg shadow-amber-600/30 hover:scale-105"
            }`}
          >
            {isRunning ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Running…</span>
              </>
            ) : isDone ? (
              <>
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Run Again</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>▶ Run Simulation</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5">

        {/* Left: Workflow Canvas */}
        <div className="lg:col-span-3 p-5 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
          <div className="mb-4 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
            Scenario: Customer Onboarding — 9 Steps
          </div>

          <div className="space-y-2">
            {WORKFLOW_STEPS.map((step, idx) => {
              const status = stepStatuses[step.id];
              const Icon = step.icon;
              const StatusIcon = statusIcon[status];
              const isHovered = hoveredStep === step.id;

              return (
                <div key={step.id}>
                  <div
                    className={`relative flex items-center gap-3 p-3.5 rounded-2xl border transition-all duration-500 cursor-default ${statusColors[status]}`}
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Step number / Icon */}
                    <div className={`flex-shrink-0 w-9 h-9 rounded-xl border flex items-center justify-center ${typeColors[step.type]}`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white truncate">{step.name}</span>
                          <span className={`hidden sm:flex px-1.5 py-0.5 rounded-full border text-[9px] font-mono uppercase ${typeColors[step.type]}`}>
                            {step.type}
                          </span>
                        </div>
                        <StatusIcon
                          className={`w-3.5 h-3.5 flex-shrink-0 ${status === "running" ? "animate-spin text-indigo-400" : status === "retrying" ? "animate-spin" : ""}`}
                        />
                      </div>

                      {/* Expanded detail on hover or completion */}
                      {(isHovered || status === "running" || status === "waiting") && (
                        <div className="mt-1 text-[11px] text-neutral-400 leading-snug font-mono">
                          {step.description}
                        </div>
                      )}
                      {status === "completed" && step.output && (
                        <div className="mt-1 text-[11px] text-emerald-400 font-mono">{step.output}</div>
                      )}
                    </div>
                  </div>

                  {/* Connector arrow */}
                  {idx < WORKFLOW_STEPS.length - 1 && (
                    <div className={`flex justify-center my-0.5 transition-all duration-700 ${
                      stepStatuses[step.id] === "completed" ? "opacity-100" : "opacity-20"
                    }`}>
                      <div className={`w-px h-4 transition-colors duration-500 ${
                        stepStatuses[step.id] === "completed" ? "bg-gradient-to-b from-emerald-500/60 to-emerald-500/20" : "bg-white/10"
                      }`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {isDone && (
            <div className="mt-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">Workflow Completed</div>
                <div className="text-xs font-mono text-emerald-300">9 steps • 0 failures • Fully audited</div>
              </div>
            </div>
          )}
        </div>

        {/* Right: Execution Console */}
        <div className="lg:col-span-2 p-5 sm:p-6 flex flex-col">
          <div className="mb-4 flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isRunning ? "bg-amber-400 animate-pulse" : isDone ? "bg-emerald-400" : "bg-neutral-600"}`} />
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
              Execution Log
            </span>
          </div>

          <div className="flex-1 bg-black/60 rounded-2xl border border-white/[0.05] p-4 min-h-[300px] font-mono overflow-y-auto">
            {logs.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-neutral-600 text-xs text-center">
                <Play className="w-8 h-8 mb-3 opacity-30" />
                <div>Press ▶ Run Simulation</div>
                <div className="text-[10px] mt-1 opacity-60">to observe the workflow execute</div>
              </div>
            ) : (
              <div className="space-y-2">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-2 text-[11px]">
                    <span className="text-neutral-600 flex-shrink-0">{log.time}</span>
                    <span className={logLevelColor[log.level]}>{log.message}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Human Approval Preview */}
          {stepStatuses[6] === "waiting" && (
            <div className="mt-4 p-4 rounded-2xl bg-fuchsia-950/30 border border-fuchsia-500/40 animate-fadeIn">
              <div className="text-xs font-mono text-fuchsia-300 font-bold uppercase mb-2">
                Human Approval Required
              </div>
              <div className="text-sm text-white font-semibold mb-1">Credit Limit Request</div>
              <div className="text-xs text-neutral-400 font-mono mb-1">Customer: Priya Sharma · ₹5,00,000</div>
              <div className="text-[11px] text-neutral-400 mb-3">
                <span className="text-fuchsia-300">AI Recommendation:</span> Approve — Risk score LOW, profile verified
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-lg bg-emerald-600/80 text-white text-xs font-mono font-bold">APPROVE</button>
                <button className="px-3 py-1.5 rounded-lg bg-red-600/60 text-white text-xs font-mono">REJECT</button>
                <button className="px-3 py-1.5 rounded-lg bg-white/[0.06] text-neutral-300 text-xs font-mono border border-white/10">REVIEW</button>
              </div>
            </div>
          )}

          {/* Legend */}
          <div className="mt-4 pt-4 border-t border-white/[0.05] grid grid-cols-3 gap-2">
            {(["running", "waiting", "completed"] as StepStatus[]).map((s) => {
              const Icon = statusIcon[s];
              const labels: Record<string, string> = { running: "Active", waiting: "Approval", completed: "Done" };
              return (
                <div key={s} className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                  <Icon className={`w-3 h-3 ${s === "running" ? "text-indigo-400 animate-spin" : s === "waiting" ? "text-amber-400" : "text-emerald-400"}`} />
                  <span>{labels[s]}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
