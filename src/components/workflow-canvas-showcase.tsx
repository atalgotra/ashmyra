"use client";

import React, { useState } from "react";
import {
  Webhook,
  ShieldCheck,
  Bot,
  GitBranch,
  Flame,
  Send,
  Database,
  Bell,
  CheckCircle2,
  Clock,
  AlertTriangle,
  RefreshCw,
  User,
  Info,
} from "lucide-react";

type ExecutionState = "RUNNING" | "COMPLETED" | "WAITING" | "FAILED" | "RETRYING" | "ESCALATED";

interface CanvasNode {
  id: string;
  name: string;
  type: string;
  icon: React.ElementType;
  defaultStatus: ExecutionState;
  input: string;
  process: string;
  output: string;
}

const CANVAS_NODES: CanvasNode[] = [
  {
    id: "webhook",
    name: "Inbound Webhook",
    type: "TRIGGER",
    icon: Webhook,
    defaultStatus: "COMPLETED",
    input: "POST /v1/webhooks/inbound-lead payload (JSON)",
    process: "Signature verification (HMAC-SHA256) & rate limit check",
    output: "Validated payload dispatched to context engine",
  },
  {
    id: "validate",
    name: "Validate Data Schema",
    type: "TRANSFORM",
    icon: ShieldCheck,
    defaultStatus: "COMPLETED",
    input: "Raw payload: { name, email, phone, size, query }",
    process: "Regex schema validation, MX record check, sanitization",
    output: "Normalized entity with zero schema violations",
  },
  {
    id: "ai-classify",
    name: "AI Intent & ICP Scoring",
    type: "INTELLIGENCE",
    icon: Bot,
    defaultStatus: "COMPLETED",
    input: "Clean contact + firmographic domain metadata",
    process: "LLM semantic scoring & buyer propensity classification",
    output: "ICP Tier: Enterprise (Score: 92/100, Intent: Buy)",
  },
  {
    id: "condition",
    name: "Decision Branch",
    type: "ROUTING",
    icon: GitBranch,
    defaultStatus: "COMPLETED",
    input: "Intent score: 92/100, Revenue: >$10M",
    process: "Evaluates policy rule: IF score >= 80 -> HIGH PRIORITY",
    output: "Branch evaluated: Path [A] High Priority Sales Route",
  },
  {
    id: "sales-action",
    name: "High Priority Route",
    type: "ACTION",
    icon: Flame,
    defaultStatus: "RUNNING",
    input: "Qualified enterprise buyer entity",
    process: "Schedules immediate round-robin executive discovery call",
    output: "Calendar invite generated & meeting slot reserved",
  },
  {
    id: "crm-update",
    name: "CRM Golden Record Sync",
    type: "ACTION",
    icon: Database,
    defaultStatus: "WAITING",
    input: "Lead record + enriched firmographics",
    process: "Upsert into CRM table with deduplicated hash key",
    output: "Awaiting approval / commit lock",
  },
  {
    id: "notification",
    name: "Multi-Channel Alert",
    type: "NOTIFICATION",
    icon: Bell,
    defaultStatus: "WAITING",
    input: "Sales pipeline update event",
    process: "Broadcasts deal packet to Slack VIP channel & rep email",
    output: "Pending preceding sync step",
  },
  {
    id: "complete",
    name: "Workflow Sealed",
    type: "AUDIT",
    icon: CheckCircle2,
    defaultStatus: "WAITING",
    input: "Execution telemetry & duration metrics",
    process: "Encrypts immutable run log & publishes metrics",
    output: "Execution sealed with tamper-evident signature",
  },
];

const stateStyles: Record<ExecutionState, { badge: string; border: string; bg: string; dot: string; label: string; icon: React.ElementType }> = {
  RUNNING: {
    badge: "text-indigo-300 bg-indigo-500/10 border-indigo-500/30",
    border: "border-indigo-500/50 hover:border-indigo-400",
    bg: "bg-indigo-950/20",
    dot: "bg-indigo-400 animate-pulse",
    label: "Running",
    icon: Clock,
  },
  COMPLETED: {
    badge: "text-emerald-300 bg-emerald-500/10 border-emerald-500/30",
    border: "border-emerald-500/30 hover:border-emerald-400",
    bg: "bg-emerald-950/15",
    dot: "bg-emerald-400",
    label: "Completed",
    icon: CheckCircle2,
  },
  WAITING: {
    badge: "text-amber-300 bg-amber-500/10 border-amber-500/30",
    border: "border-amber-500/30 hover:border-amber-400",
    bg: "bg-amber-950/15",
    dot: "bg-amber-400",
    label: "Waiting",
    icon: Clock,
  },
  FAILED: {
    badge: "text-rose-300 bg-rose-500/10 border-rose-500/30",
    border: "border-rose-500/40 hover:border-rose-400",
    bg: "bg-rose-950/20",
    dot: "bg-rose-400",
    label: "Failed",
    icon: AlertTriangle,
  },
  RETRYING: {
    badge: "text-orange-300 bg-orange-500/10 border-orange-500/30",
    border: "border-orange-500/40 hover:border-orange-400",
    bg: "bg-orange-950/20",
    dot: "bg-orange-400 animate-spin",
    label: "Retrying",
    icon: RefreshCw,
  },
  ESCALATED: {
    badge: "text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-500/30",
    border: "border-fuchsia-500/40 hover:border-fuchsia-400",
    bg: "bg-fuchsia-950/20",
    dot: "bg-fuchsia-400",
    label: "Escalated",
    icon: User,
  },
};

export function WorkflowCanvasShowcase() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("ai-classify");
  const [previewState, setPreviewState] = useState<ExecutionState | null>(null);

  const selectedNode = CANVAS_NODES.find((n) => n.id === selectedNodeId) || CANVAS_NODES[2];
  const activeState = previewState || selectedNode.defaultStatus;
  const currentStyle = stateStyles[activeState];

  return (
    <div className="rounded-3xl border border-white/[0.08] bg-[#07090e] p-6 sm:p-10 shadow-2xl space-y-8">
      {/* Canvas top bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-bold uppercase">
              STUDIO CANVAS
            </span>
            <span className="text-xs font-mono text-neutral-400">Pipeline ID: #ORCH-90214</span>
          </div>
          <h3 className="text-lg font-bold text-white mt-1">Enterprise Lead Ingestion &amp; Autonomous Routing</h3>
        </div>

        {/* State filter buttons */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
          <span className="text-neutral-500 text-[10px] uppercase mr-1">Simulate State:</span>
          {(["COMPLETED", "RUNNING", "WAITING", "FAILED", "RETRYING", "ESCALATED"] as ExecutionState[]).map((state) => {
            const st = stateStyles[state];
            const isActive = previewState === state;
            return (
              <button
                key={state}
                onClick={() => setPreviewState(previewState === state ? null : state)}
                className={`px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1.5 ${
                  isActive ? `${st.bg} ${st.border} text-white font-bold` : "bg-white/[0.02] border-white/[0.06] text-neutral-400 hover:text-white"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />
                <span>{st.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid: Canvas Node Graph + Inspector Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Node Flow (Left 8 cols) */}
        <div className="lg:col-span-8 space-y-3 font-mono">
          <div className="text-[10px] uppercase text-neutral-500 tracking-wider flex items-center justify-between mb-2">
            <span>WORKFLOW GRAPH NODES (CLICK TO INSPECT)</span>
            <span className="text-neutral-500">8 Connected Steps</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CANVAS_NODES.map((node) => {
              const NodeIcon = node.icon;
              const isSelected = node.id === selectedNodeId;
              const nodeState = previewState || node.defaultStatus;
              const st = stateStyles[nodeState];

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer relative group ${st.bg} ${st.border} ${
                    isSelected ? "ring-2 ring-amber-500/50 shadow-xl shadow-amber-950/20" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-white">
                        <NodeIcon className="w-4 h-4 text-amber-400" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-neutral-300">
                        {node.type}
                      </span>
                    </div>

                    <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-mono font-bold ${st.badge}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />
                      <span>{st.label}</span>
                    </div>
                  </div>

                  <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                    {node.name}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-sans mt-1 line-clamp-1">
                    {node.process}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Node Inspector (4 cols) */}
        <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/[0.08] font-mono text-xs space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-400" />
              <span className="text-[10px] uppercase text-neutral-400 font-bold tracking-wider">NODE TELEMETRY</span>
            </div>
            <div className={`px-2 py-0.5 rounded-md border text-[10px] font-bold ${currentStyle.badge}`}>
              {currentStyle.label}
            </div>
          </div>

          <div>
            <div className="text-sm font-bold text-white">{selectedNode.name}</div>
            <div className="text-[10px] text-amber-400/80 mt-0.5">TYPE: {selectedNode.type}</div>
          </div>

          <div className="space-y-3 pt-1">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1 font-bold">INPUT PAYLOAD</div>
              <div className="text-[11px] text-neutral-300 font-sans leading-relaxed break-words">{selectedNode.input}</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1 font-bold">PROCESS LOGIC</div>
              <div className="text-[11px] text-neutral-300 font-sans leading-relaxed">{selectedNode.process}</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[10px] text-emerald-400 uppercase tracking-wider mb-1 font-bold">OUTPUT EMITTED</div>
              <div className="text-[11px] text-emerald-300 font-sans leading-relaxed break-words">{selectedNode.output}</div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-neutral-500">
            <span>Latency: 42ms</span>
            <span>Retries: 0 / 3</span>
            <span>Deterministic</span>
          </div>
        </div>
      </div>
    </div>
  );
}
