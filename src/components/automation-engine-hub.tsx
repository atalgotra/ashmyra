"use client";

import React, { useState, useEffect } from "react";
import {
  Database,
  Building2,
  Cpu,
  FileText,
  Bot,
  Mail,
  Server,
  Users,
  Layers,
  ArrowRight,
  Zap,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface SatelliteNode {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  category: string;
}

const SATELLITE_NODES: SatelliteNode[] = [
  { id: "data", name: "DATA LAKES", icon: Database, color: "border-sky-500/40 text-sky-400 bg-sky-500/10", category: "Raw Feeds" },
  { id: "crm", name: "CRM SYSTEMS", icon: Users, color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10", category: "Records" },
  { id: "erp", name: "ENTERPRISE ERP", icon: Building2, color: "border-amber-500/40 text-amber-400 bg-amber-500/10", category: "Operations" },
  { id: "api", name: "EXTERNAL APIS", icon: Cpu, color: "border-indigo-500/40 text-indigo-400 bg-indigo-500/10", category: "Endpoints" },
  { id: "docs", name: "DOCUMENTS & PDF", icon: FileText, color: "border-teal-500/40 text-teal-400 bg-teal-500/10", category: "Unstructured" },
  { id: "ai", name: "AI AGENTS", icon: Bot, color: "border-purple-500/40 text-purple-400 bg-purple-500/10", category: "Reasoning" },
  { id: "email", name: "EMAIL & COMMS", icon: Mail, color: "border-rose-500/40 text-rose-400 bg-rose-500/10", category: "Messaging" },
  { id: "database", name: "SQL & NOSQL", icon: Server, color: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10", category: "Storage" },
  { id: "people", name: "TEAMS & PEOPLE", icon: Users, color: "border-fuchsia-500/40 text-fuchsia-400 bg-fuchsia-500/10", category: "Approvals" },
  { id: "internal", name: "INTERNAL APPS", icon: Layers, color: "border-orange-500/40 text-orange-400 bg-orange-500/10", category: "Custom Stack" },
];

const EVENT_PIPELINE = [
  { stage: "NEW INBOUND EVENT", desc: "Webhook trigger detected", icon: Zap, color: "text-amber-400" },
  { stage: "AI CLASSIFICATION", desc: "Propensity & entity resolution", icon: Bot, color: "text-indigo-400" },
  { stage: "CONTEXT ENRICHMENT", desc: "Hydrated from CRM & DB", icon: Database, color: "text-sky-400" },
  { stage: "LEAD / RISK SCORING", desc: "Deterministic policy check", icon: Sparkles, color: "text-purple-400" },
  { stage: "AUTONOMOUS DECISION", desc: "Branching: Call vs Nurture", icon: CheckCircle2, color: "text-emerald-400" },
];

export function AutomationEngineHub() {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [activeSatellite, setActiveSatellite] = useState<string>("ai");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEventIndex((prev) => (prev + 1) % EVENT_PIPELINE.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const currentEvent = EVENT_PIPELINE[activeEventIndex];

  return (
    <div className="relative rounded-3xl border border-white/[0.08] bg-[#06080e] p-6 sm:p-10 shadow-2xl overflow-hidden my-12">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-amber-500/10 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[200px] bg-indigo-500/10 blur-[80px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Top telemetry strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06] mb-8 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-bold uppercase tracking-wider">ASHMYRA ORCHESTRATION MESH</span>
            <span className="text-neutral-500 text-[10px]">· 10 Interconnected Subsystems</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-neutral-400">
            <span className="text-neutral-500">ACTIVE FLOW:</span>
            <span className={`font-bold ${currentEvent.color}`}>{currentEvent.stage}</span>
            <span className="text-neutral-600">→</span>
            <span className="text-neutral-400">{currentEvent.desc}</span>
          </div>
        </div>

        {/* Central visual grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Satellites (5 nodes) */}
          <div className="lg:col-span-3 space-y-2.5">
            {SATELLITE_NODES.slice(0, 5).map((node) => {
              const Icon = node.icon;
              const isActive = activeSatellite === node.id;
              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setActiveSatellite(node.id)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? `${node.color} shadow-lg scale-102`
                      : "border-white/[0.06] bg-white/[0.02] text-neutral-400 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">{node.name}</div>
                      <div className="text-[10px] text-neutral-500">{node.category}</div>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500">LINKED</div>
                </div>
              );
            })}
          </div>

          {/* Central Engine Core (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-black/80 border border-amber-500/30 text-center relative shadow-2xl">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-3xl border border-amber-500/20 animate-pulse pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] font-mono text-amber-300 font-bold mb-4">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>CENTRAL EVENT BUS &amp; REASONING CORE</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
              ASHMYRA AUTOMATION ENGINE
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed mb-6">
              A high-throughput event mesh that synchronizes enterprise applications, executes AI reasoning, and triggers verified actions with zero code drift.
            </p>

            {/* Live event stream pipeline */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-left font-mono text-xs space-y-2">
              <div className="text-[10px] uppercase text-neutral-500 tracking-wider flex items-center justify-between">
                <span>EVENT PROPAGATION TRAJECTORY</span>
                <span className="text-amber-400 font-bold">Step {activeEventIndex + 1} of 5</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2">
                {EVENT_PIPELINE.map((ev, i) => {
                  const isCurrent = i === activeEventIndex;
                  const isPassed = i < activeEventIndex;
                  const EvIcon = ev.icon;
                  return (
                    <div
                      key={ev.stage}
                      className={`flex-1 p-2 rounded-xl border text-center transition-all ${
                        isCurrent
                          ? "border-amber-500/60 bg-amber-500/15 text-white scale-105 shadow-md shadow-amber-950/40"
                          : isPassed
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                          : "border-white/[0.05] bg-white/[0.01] text-neutral-600"
                      }`}
                    >
                      <EvIcon className={`w-3.5 h-3.5 mx-auto mb-1 ${isCurrent ? "text-amber-400" : isPassed ? "text-emerald-400" : "text-neutral-600"}`} />
                      <div className="text-[9px] font-bold truncate">{ev.stage.split(" ")[0]}</div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 text-center text-[11px] text-neutral-400">
                Action Outlets: <span className="text-emerald-400">CALL ENGINE</span> · <span className="text-sky-400">SALES CRM</span> · <span className="text-indigo-400">NURTURE LOOP</span>
              </div>
            </div>
          </div>

          {/* Right Satellites (5 nodes) */}
          <div className="lg:col-span-3 space-y-2.5">
            {SATELLITE_NODES.slice(5, 10).map((node) => {
              const Icon = node.icon;
              const isActive = activeSatellite === node.id;
              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setActiveSatellite(node.id)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? `${node.color} shadow-lg scale-102`
                      : "border-white/[0.06] bg-white/[0.02] text-neutral-400 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">{node.name}</div>
                      <div className="text-[10px] text-neutral-500">{node.category}</div>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500">LINKED</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
