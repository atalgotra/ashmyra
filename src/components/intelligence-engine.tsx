"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";

const NODES = [
  {
    id: "data",
    label: "Data Intelligence",
    shortLabel: "DATA",
    angle: 315,
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.28)",
    description: "Real-time pipelines, semantic lakes, golden-record synthesis",
    logs: ["→ Ingesting 2.4M records/min", "→ Schema evolution detected", "→ Semantic index rebuilt", "→ Anomaly score: 0.003"],
  },
  {
    id: "ai",
    label: "Agentic AI",
    shortLabel: "AGENTS",
    angle: 45,
    color: "#818cf8",
    glow: "rgba(129,140,248,0.28)",
    description: "Autonomous agent swarms, multi-model orchestration, RAG loops",
    logs: ["→ Agent-7 spawned", "→ Memory context: 98k tokens", "→ Reasoning chain: 14 steps", "→ Task completed ✓"],
  },
  {
    id: "automation",
    label: "Automation Mesh",
    shortLabel: "MESH",
    angle: 225,
    color: "#f472b6",
    glow: "rgba(244,114,182,0.28)",
    description: "Event-driven triggers, workflow orchestration, zero-touch ops",
    logs: ["→ Trigger: invoice_received", "→ Routing to: approval_flow", "→ ERP sync initiated", "→ Workflow closed in 1.2s"],
  },
  {
    id: "saas",
    label: "Enterprise SaaS",
    shortLabel: "SAAS",
    angle: 135,
    color: "#10b981",
    glow: "rgba(16,185,129,0.28)",
    description: "HRMS, CRM, custom platforms — AI-native from the ground up",
    logs: ["→ HRMS: 840 employees synced", "→ AI insight: churn risk ↑12%", "→ Auto-action: follow-up sent", "→ Platform health: 99.97%"],
  },
] as const;

const CX = 160;
const CY = 160;
const ORBIT_R = 105;
const SVG_SIZE = 320;

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

function PulseDot({ from, to, color, delay }: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  color: string;
  delay: number;
}) {
  const dotRef = useRef<SVGCircleElement>(null);
  useEffect(() => {
    if (!dotRef.current) return;
    const tl = gsap.timeline({ repeat: -1, delay });
    tl.set(dotRef.current, { attr: { cx: from.x, cy: from.y }, opacity: 0 })
      .to(dotRef.current, { opacity: 1, duration: 0.15 })
      .to(dotRef.current, { attr: { cx: to.x, cy: to.y }, duration: 1.2, ease: "power1.inOut" })
      .to(dotRef.current, { opacity: 0, duration: 0.15 }, "-=0.15")
      .to(dotRef.current, { duration: 0.7 });
    return () => { tl.kill(); };
  }, [from.x, from.y, to.x, to.y, delay]);
  return <circle ref={dotRef} r={2.5} fill={color} style={{ filter: `drop-shadow(0 0 4px ${color})` }} />;
}

export function AshmyraIntelligenceEngine() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [logLines, setLogLines] = useState<string[]>([
    "INTELLIGENCE ENGINE v2.0",
    "→ All systems nominal",
    "→ Hover a node to inspect",
  ]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const logIdxRef = useRef(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  const idleLogs = [
    "→ System heartbeat: OK",
    "→ 14 microservices active",
    "→ Data pipeline: LIVE",
    "→ Agent mesh: READY",
    "→ Uptime: 99.97%",
    "→ Latency p99: 38ms",
  ];

  const startIdleCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setLogLines(prev => {
        const next = [...prev];
        if (next.length >= 5) next.shift();
        next.push(idleLogs[logIdxRef.current % idleLogs.length]);
        logIdxRef.current++;
        return next;
      });
    }, 1800);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    startIdleCycle();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startIdleCycle]);

  useEffect(() => {
    if (!wrapRef.current) return;
    gsap.fromTo(wrapRef.current, { opacity: 0, scale: 0.96 }, {
      opacity: 1, scale: 1, duration: 1.0, ease: "power3.out", delay: 0.3,
    });
  }, []);

  const handleNodeEnter = useCallback((nodeId: string) => {
    setActiveNode(nodeId);
    if (intervalRef.current) clearInterval(intervalRef.current);
    const node = NODES.find(n => n.id === nodeId);
    if (!node) return;
    setLogLines([`■ ${node.label.toUpperCase()}`, ...node.logs]);
  }, []);

  const handleNodeLeave = useCallback(() => {
    setActiveNode(null);
    setLogLines(["INTELLIGENCE ENGINE v2.0", "→ All systems nominal", "→ Hover a node to inspect"]);
    startIdleCycle();
  }, [startIdleCycle]);

  const activeNodeData = NODES.find(n => n.id === activeNode);

  return (
    <div
      ref={wrapRef}
      className="relative w-full flex flex-col items-center select-none"
      style={{ opacity: 0 }}
    >
      {/* Header badge */}
      <div className="flex items-center gap-2 mb-1.5">
        <div
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: "#22d3ee", boxShadow: "0 0 6px #22d3ee" }}
        />
        <span
          className="text-[9px] font-mono tracking-[0.22em] uppercase"
          style={{ color: "rgba(34,211,238,0.7)" }}
        >
          Ashmyra Intelligence Engine
        </span>
      </div>

      {/* SVG — compact height */}
      <div className="w-full max-w-[280px] mx-auto">
        <svg viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`} width="100%" height="100%" style={{ overflow: "visible" }}>
          <defs>
            <filter id="hub-glow-ie" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            {NODES.map(n => (
              <filter key={n.id} id={`ng-ie-${n.id}`} x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            ))}
          </defs>

          <circle cx={CX} cy={CY} r={ORBIT_R} fill="none" stroke="rgba(99,102,241,0.13)" strokeWidth="1" strokeDasharray="3 5" />

          {NODES.map(node => {
            const pos = polar(node.angle, ORBIT_R);
            const isActive = activeNode === node.id;
            return (
              <line key={node.id} x1={CX} y1={CY} x2={pos.x} y2={pos.y}
                stroke={isActive ? node.color : "rgba(255,255,255,0.07)"}
                strokeWidth={isActive ? 1.5 : 0.8}
                style={{ transition: "stroke 0.3s" }}
              />
            );
          })}

          {NODES.map((node, i) => {
            const pos = polar(node.angle, ORBIT_R);
            return (
              <React.Fragment key={node.id}>
                <PulseDot from={{ x: CX, y: CY }} to={pos} color={node.color} delay={i * 0.6} />
                <PulseDot from={pos} to={{ x: CX, y: CY }} color={node.color} delay={i * 0.6 + 1.2} />
              </React.Fragment>
            );
          })}

          {/* Center hub */}
          <g filter="url(#hub-glow-ie)">
            <circle cx={CX} cy={CY} r={24} fill="none" stroke="rgba(99,102,241,0.3)" strokeWidth="1.2" />
            <circle cx={CX} cy={CY} r={18} fill="rgba(8,10,20,0.95)" stroke="rgba(99,102,241,0.55)" strokeWidth="1.2" />
            <text x={CX} y={CY} textAnchor="middle" dominantBaseline="central"
              fill="rgba(129,140,248,0.9)" fontSize="13" fontFamily="Space Grotesk, sans-serif" fontWeight="700">A</text>
          </g>

          {/* Perimeter nodes */}
          {NODES.map(node => {
            const pos = polar(node.angle, ORBIT_R);
            const isActive = activeNode === node.id;
            const rad = (node.angle * Math.PI) / 180;
            const lx = pos.x + 28 * Math.cos(rad);
            const ly = pos.y + 28 * Math.sin(rad);
            return (
              <g key={node.id} style={{ cursor: "pointer" }}
                onMouseEnter={() => handleNodeEnter(node.id)}
                onMouseLeave={handleNodeLeave}>
                {isActive && <circle cx={pos.x} cy={pos.y} r={20} fill={node.glow} />}
                <circle cx={pos.x} cy={pos.y} r={14}
                  fill="rgba(8,10,18,0.95)"
                  stroke={isActive ? node.color : "rgba(255,255,255,0.12)"}
                  strokeWidth={isActive ? 1.8 : 0.8}
                  filter={isActive ? `url(#ng-ie-${node.id})` : undefined}
                  style={{ transition: "stroke 0.25s" }}
                />
                <text x={pos.x} y={pos.y} textAnchor="middle" dominantBaseline="central"
                  fill={isActive ? node.color : "rgba(255,255,255,0.4)"}
                  fontSize="5.5" fontFamily="monospace" fontWeight="700"
                  style={{ transition: "fill 0.2s" }}>
                  {node.shortLabel}
                </text>
                <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central"
                  fill={isActive ? node.color : "rgba(255,255,255,0.36)"}
                  fontSize="7.5" fontFamily="Space Grotesk, sans-serif"
                  fontWeight={isActive ? "700" : "500"}
                  style={{ transition: "fill 0.2s" }}>
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Description strip */}
      <div
        className="w-full max-w-[280px] mx-auto px-3 py-1.5 rounded-lg text-center transition-all duration-300"
        style={{
          minHeight: "26px",
          marginTop: "2px",
          background: activeNodeData ? "rgba(8,10,18,0.8)" : "transparent",
          border: activeNodeData ? `1px solid ${activeNodeData.color}20` : "1px solid transparent",
        }}
      >
        {activeNodeData ? (
          <p className="text-[10px] leading-snug" style={{ color: activeNodeData.color }}>
            {activeNodeData.description}
          </p>
        ) : (
          <p className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.15)" }}>
            hover a node to inspect
          </p>
        )}
      </div>

      {/* Log terminal */}
      <div
        className="w-full max-w-[280px] mx-auto rounded-xl overflow-hidden"
        style={{
          marginTop: "8px",
          background: "rgba(4,5,10,0.92)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 6px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        <div
          className="flex items-center gap-1.5 px-2.5 py-1.5 border-b"
          style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#ef4444", opacity: 0.7 }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#f59e0b", opacity: 0.7 }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e", opacity: 0.7 }} />
          <span className="ml-2 text-[8px] font-mono tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.14)" }}>
            system log — live
          </span>
          <div className="ml-auto w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#22d3ee" }} />
        </div>
        <div className="px-2.5 py-2 space-y-px font-mono text-[9.5px] leading-[1.65]">
          {logLines.map((line, i) => (
            <div key={i} style={{
              color: i === 0
                ? (activeNodeData?.color ?? "rgba(129,140,248,0.85)")
                : "rgba(148,163,184,0.6)",
              fontWeight: i === 0 ? 700 : 400,
            }}>{line}</div>
          ))}
          <span style={{
            display: "inline-block",
            width: 4,
            height: 9,
            marginLeft: 2,
            background: activeNodeData?.color ?? "#6366f1",
            verticalAlign: "middle",
            animation: "blink 1s step-end infinite",
          }} />
        </div>
      </div>

      <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
    </div>
  );
}
