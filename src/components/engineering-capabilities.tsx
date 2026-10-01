"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Cpu, 
  Smartphone, 
  Box, 
  Layers, 
  Building2, 
  ClipboardCheck, 
  Mail, 
  Database, 
  Zap, 
  ArrowUpRight,
  Code2
} from "lucide-react";

interface CapabilityExample {
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  tech: string;
  color: string;
}

const CAPABILITY_EXAMPLES: CapabilityExample[] = [
  {
    title: "AI Applications",
    category: "Intelligent Systems",
    icon: Cpu,
    tagline: "Autonomous agent swarms, deterministic LLM routers, and vector RAG pipelines.",
    tech: "Next.js &bull; Python &bull; LangChain &bull; FastAPI",
    color: "#818cf8",
  },
  {
    title: "Android Apps",
    category: "Mobile Engineering",
    icon: Smartphone,
    tagline: "High-performance native and hybrid Android applications with offline sync.",
    tech: "Kotlin &bull; Jetpack Compose &bull; React Native",
    color: "#34d399",
  },
  {
    title: "3D Websites & WebGL",
    category: "Interactive 3D",
    icon: Box,
    tagline: "GPU-accelerated Three.js, GSAP, and WebGL digital product showcases.",
    tech: "Three.js &bull; React Three Fiber &bull; GLSL Shaders",
    color: "#38bdf8",
  },
  {
    title: "Enterprise Portals",
    category: "Core Infrastructure",
    icon: Layers,
    tagline: "Custom role-based internal platforms with cryptographic audit logging.",
    tech: "TypeScript &bull; Next.js App Router &bull; Postgres",
    color: "#c084fc",
  },
  {
    title: "Vendor Platforms",
    category: "B2B Ecosystems",
    icon: Building2,
    tagline: "Multi-tenant supply chain and vendor management portals.",
    tech: "Microservices &bull; Redis &bull; GraphQL",
    color: "#fb923c",
  },
  {
    title: "Assessment Systems",
    category: "Evaluation Tech",
    icon: ClipboardCheck,
    tagline: "Automated proctoring, psychometric tests, and candidate rubric matching.",
    tech: "AI Evaluators &bull; WebRTC &bull; Analytics Engine",
    color: "#f43f5e",
  },
  {
    title: "Email Infrastructure",
    category: "High Deliverability",
    icon: Mail,
    tagline: "Autonomous transactional delivery nodes, warmup sequences, and spam telemetry.",
    tech: "SMTP Relays &bull; DNS DKIM/DMARC &bull; Event Webhooks",
    color: "#facc15",
  },
  {
    title: "Data Systems",
    category: "Analytics & ETL",
    icon: Database,
    tagline: "Real-time streaming telemetry, ETL pipelines, and high-dimensional indexes.",
    tech: "Kafka &bull; ClickHouse &bull; Vector Databases",
    color: "#2dd4bf",
  },
  {
    title: "Automation Platforms",
    category: "Process Robotics",
    icon: Zap,
    tagline: "Self-healing enterprise workflows that connect legacy software with modern APIs.",
    tech: "Event-Driven &bull; Webhooks &bull; Autonomous Retries",
    color: "#a855f7",
  },
];

export function EngineeringCapabilities() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <section 
      id="capabilities"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header (Requirement 20: "IF IT CAN BE ENGINEERED, WE CAN EXPLORE IT.") */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono">
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Broad-Spectrum Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            IF IT CAN BE ENGINEERED,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-white">
              WE CAN EXPLORE IT.
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            From low-level data pipelines to high-fidelity 3D interfaces, we explore challenging technical frontiers and convert them into operational reality.
          </p>
        </div>

        {/* Visual Capabilities Cards Grid (Requirement 20) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITY_EXAMPLES.map((item) => {
            const Icon = item.icon;
            const isHovered = activeItem === item.title;

            return (
              <div
                key={item.title}
                onMouseEnter={() => setActiveItem(item.title)}
                onMouseLeave={() => setActiveItem(null)}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-6 ${
                  isHovered
                    ? "bg-[#0c1020] border-indigo-500/50 shadow-xl shadow-indigo-500/10 scale-[1.02]"
                    : "bg-[#080b15] border-white/[0.08] hover:border-white/[0.18]"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      {item.category}
                    </span>
                    <div
                      className="p-2.5 rounded-xl transition-transform"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span 
                    className="text-[10px] font-mono text-neutral-500"
                    dangerouslySetInnerHTML={{ __html: item.tech }}
                  />
                  <Link
                    href="/contact"
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 hover:text-white transition-all"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
