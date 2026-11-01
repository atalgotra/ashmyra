import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ScrollToTopOnMount } from "@/components/scroll-to-top-on-mount";
import { CaseStudyFeature, type CaseStudyData } from "@/components/case-study-feature";
import {
  ArrowRight,
  Workflow,
  Database,
  ShieldCheck,
  Cpu,
  Layers,
  Terminal,
  Activity,
  Code2,
  Server,
  Compass,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Case Studies & Architecture | Ashmyra Technologies",
  description:
    "Explore the architectures, intelligent systems and software engineering behind the solutions Ashmyra builds.",
  alternates: { canonical: "https://www.ashmyra.com/our-work" },
};

/* ── Verified Case Studies Data ─────────────────────────────────────────────── */
const CASE_STUDIES: CaseStudyData[] = [
  {
    id: "logistics-orchestrator",
    badge: "Reference Architecture & Anonymised Deployment",
    industry: "Freight Logistics & Multimodal Supply Chains",
    status: "Verified Architectural Reference",
    title: "Autonomous Logistics Dispatch & Document Processing",
    subtitle:
      "An asynchronous event-driven pipeline parsing complex multimodal shipping documentation and automating legacy ERP freight synchronization.",
    context:
      "Multimodal freight logistics operations manage hundreds of daily paper manifests, bills of lading, and freight invoices originating from diverse regional carriers. Legacy workflows rely on manual data entry, creating operational dispatch delays and frequent tariff reconciliation discrepancies.",
    challenge: {
      title: "Unstructured Document Layouts & Legacy Integration",
      description:
        "High-throughput shipping documentation presents significant format variability, low scan resolutions, and critical requirements for deterministic accuracy.",
      points: [
        "Variable PDF and scanned document layouts with multi-carrier table structures.",
        "Manual rekeying into on-premise legacy ERPs creates 3-5 hour dispatch latency.",
        "Strict zero-hallucination requirement for tariff calculations and hazardous cargo declarations.",
      ],
    },
    approach: {
      title: "Event-Driven Asynchronous OCR & Schema Guardrails",
      description:
        "Architected a decoupled microservice utilizing an optical layout analyzer coupled with bounded language model extraction constrained by immutable Pydantic JSON schemas.",
      points: [
        "Distributed Redis Streams worker queue decoupling upload ingestion from extraction workers.",
        "Strict Pydantic JSON schema validation guaranteeing type safety before database writes.",
        "Automated human-in-the-loop review threshold whenever token confidence scores fall below 95%.",
      ],
    },
    solution: {
      title: "Automated Ingestion Microservice & Webhook Bridge",
      description:
        "Engineered a resilient containerized ingestion engine that parses, validates, and bridges freight manifests into central operational databases via secure bidirectional webhooks, recording cryptographic audit logs for every payload step.",
    },
    impact: {
      metric: "< 15s",
      label: "Document Processing Pipeline",
      description:
        "Deterministic schema extraction with immediate exception escalation for operator review.",
    },
    technologies: [
      "Python",
      "FastAPI",
      "Redis Streams",
      "PostgreSQL",
      "Docker",
      "Document OCR Engine",
    ],
    media: {
      type: "video",
      src: "/videos/solutions/operations.mp4",
      poster: "/analytics/analytics-pipeline-engine.jpg",
      alt: "Autonomous Logistics Dispatch Architecture",
      caption: "Telemetry: Real-time document parsing & queue orchestration",
    },
    reversed: false,
  },
  {
    id: "workforce-intelligence",
    badge: "Enterprise Implementation & Architectural Reference",
    industry: "Distributed Enterprise & Multi-Facility Operations",
    status: "Verified Architectural Reference",
    title: "Intelligent Workforce Management for Multi-Location Operations",
    subtitle:
      "A distributed attendance synchronization platform resolving edge biometric latency, shift concurrency conflicts, and automated statutory payroll.",
    context:
      "Enterprise manufacturing and retail organizations operating across geographically dispersed facilities require unified personnel visibility, accurate shift clock-in consolidation, and compliant statutory payroll calculations across differing regional labor frameworks.",
    challenge: {
      title: "Edge Network Instability & Shift Concurrency Conflicts",
      description:
        "High-density punch-in peaks during shift changeovers across remote terminals frequently encounter network dropouts and conflicting transactional updates.",
      points: [
        "Network latency and intermittent packet drops at remote terminal biometric gateways.",
        "Concurrency race conditions when resolving multi-terminal punches across overlapping shifts.",
        "Complex statutory overtime, deduction rules, and shift differential compliance requirements.",
      ],
    },
    approach: {
      title: "Offline-First Edge Sync Protocol & Idempotent Worker Queues",
      description:
        "Designed an edge-caching hardware daemon with local SQLite buffering, transactional PostgreSQL isolation levels, and an idempotent BullMQ queue architecture.",
      points: [
        "Local terminal edge buffering with cryptographic timestamp hashing for offline punch resilience.",
        "PostgreSQL serializable transaction isolation ensuring zero duplicate shift assignment records.",
        "Asynchronous BullMQ worker queues handling bulk punch-in ingestion, anomaly detection, and payroll calculation.",
      ],
    },
    solution: {
      title: "Centralized Workforce Intelligence & Anomaly Engine",
      description:
        "Implemented a unified workforce engine that continuously ingests biometric events, flags attendance anomalies for supervisory approval, and executes single-click statutory payroll computation with full compliance audit trails.",
    },
    impact: {
      metric: "100%",
      label: "Shift Punch Ingestion Integrity",
      description:
        "Zero dropped biometric events with automated multi-shift anomaly resolution.",
    },
    technologies: [
      "Next.js App Router",
      "Node.js / TypeScript",
      "PostgreSQL",
      "BullMQ",
      "Redis",
      "Hardware Gateway Daemon",
    ],
    media: {
      type: "video",
      src: "/videos/solutions/hr-teams.mp4",
      poster: "/wow/wow4-intelligent-workforce.png",
      alt: "Intelligent Workforce Management Architecture",
      caption: "Telemetry: Multi-facility biometric sync & payroll validation",
    },
    reversed: true,
  },
];

/* ── Complex Engineering Domains (Editorial Strip) ─────────────────────────── */
const ENGINEERING_DOMAINS = [
  {
    num: "01",
    title: "Autonomous AI Systems",
    desc: "Multi-agent coordination, deterministic tool calling, bounded reasoning loops, and human-in-the-loop validation for mission-critical operations.",
    tag: "Agentic AI",
  },
  {
    num: "02",
    title: "Enterprise Software",
    desc: "Distributed microservices, multi-tenant database isolation, resilient transactional APIs, and high-concurrency enterprise backend systems.",
    tag: "Systems Architecture",
  },
  {
    num: "03",
    title: "Data-Intensive Applications",
    desc: "High-throughput streaming queues, idempotent worker pipelines, automated schema validation, and real-time observability telemetry.",
    tag: "Data Engineering",
  },
  {
    num: "04",
    title: "Intelligent Workflow Automation",
    desc: "Low-latency document parsing, edge-sync hardware gateways, event-driven webhooks, and resilient legacy ERP integration bridges.",
    tag: "Process Automation",
  },
];

/* ── Engineering Principles ─────────────────────────────────────────────────── */
const ENGINEERING_PRINCIPLES = [
  {
    num: "01",
    icon: Workflow,
    title: "Reliable Workflow Orchestration",
    desc: "Design workflows with explicit state machines, idempotent worker execution, automated retries with exponential backoff, and human-in-the-loop validation triggers where operational risk is high.",
    points: [
      "Explicit finite state machines for clear process boundaries",
      "Idempotent message handlers preventing duplicate execution",
      "Deterministic human approval checkpoints for sensitive actions",
    ],
  },
  {
    num: "02",
    icon: Database,
    title: "Resilient Data Architecture",
    desc: "Build structured data pipelines with strict schema contracts, transactional isolation, controlled database migrations, point-in-time recovery mechanisms, and full-spectrum observability.",
    points: [
      "Strict schema verification before data persistence",
      "Transactional isolation preventing concurrency conflicts",
      "Immutable audit ledgers tracking data provenance",
    ],
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Security-Conscious Engineering",
    desc: "Apply least-privilege role-based access control, cryptographic payload verification, strict network segmentation, encrypted telemetry logs, and automated secrets rotation across all environments.",
    points: [
      "Role-based access boundaries enforced at the API layer",
      "End-to-end encrypted payloads and secure token management",
      "Comprehensive telemetry and immutable system activity logs",
    ],
  },
];

export default function OurWorkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030408] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <ScrollToTopOnMount />

      {/* ── PHASE 3: REPOSITIONED HERO SECTION ──────────────────────────────── */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-white/[0.06] overflow-hidden">
        {/* Subtle architectural lighting & grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[360px]"
            style={{
              background:
                "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(99,102,241,0.14) 0%, rgba(34,211,238,0.06) 45%, transparent 75%)",
              filter: "blur(60px)",
            }}
          />
          <div className="absolute inset-0 dot-bg opacity-30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-[11px] font-mono tracking-widest text-cyan-300 uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>ENGINEERING CASE STUDIES &amp; ARCHITECTURE</span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Engineering Complex Systems.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-indigo-200">
              Delivering Real Solutions.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-10 font-sans">
            Explore the architectures, intelligent systems and software engineering behind the
            solutions Ashmyra builds.
          </p>

          {/* Quick Anchor Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition-all shadow-lg shadow-cyan-500/20 group"
            >
              <span>Explore Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#engineering-principles"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-neutral-200 hover:text-white font-medium text-xs border border-white/[0.08] hover:border-white/[0.15] transition-all"
            >
              <Compass className="w-3.5 h-3.5 text-indigo-400" />
              <span>Engineering Principles</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── PHASE 4 & 5: ENGINEERING ACROSS COMPLEX DOMAINS ─────────────────── */}
      <section className="relative py-16 sm:py-20 border-b border-white/[0.06] bg-[#05070e]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-10 sm:mb-12 max-w-3xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-semibold block mb-2">
              Capabilities In Practice
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Engineering Across Complex Domains
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 font-sans">
              High-concurrency platforms, deterministic intelligence, and mission-critical workflows
              engineered for real-world enterprise environments.
            </p>
          </div>

          {/* Compact 4-Column Minimal Editorial Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {ENGINEERING_DOMAINS.map((domain) => (
              <div
                key={domain.num}
                className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {domain.num}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.05]">
                      {domain.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white group-hover:text-cyan-200 transition-colors mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    {domain.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHASE 6 & 7: ENGINEERING CASE STUDIES ────────────────────────────── */}
      <section
        id="case-studies"
        className="scroll-mt-28 lg:scroll-mt-36 relative py-20 sm:py-28 border-b border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Heading */}
          <div className="max-w-3xl mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Production Perspectives</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Engineering Case Studies
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
              Detailed engineering perspectives on complex systems, their architectural challenges
              and the solutions designed to address them.
            </p>
          </div>

          {/* Case Studies Presentation */}
          <div className="space-y-12 sm:space-y-16">
            {CASE_STUDIES.map((study) => (
              <CaseStudyFeature key={study.id} data={study} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PHASE 8: ENGINEERING PRINCIPLES ─────────────────────────────────── */}
      <section
        id="engineering-principles"
        className="scroll-mt-28 lg:scroll-mt-36 relative py-20 sm:py-24 border-b border-white/[0.06] bg-[#05070e]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-14 sm:mb-16">
            <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-semibold block mb-2">
              ARCHITECTURAL RIGOR
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Engineering Principles
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
              Our architectural standards for deterministic execution, data integrity, and system
              resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ENGINEERING_PRINCIPLES.map((principle) => {
              const IconComponent = principle.icon;
              return (
                <div
                  key={principle.num}
                  className="rounded-3xl p-6 sm:p-8 bg-white/[0.02] border border-white/[0.07] hover:border-indigo-500/30 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-indigo-400" />
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-500">
                        {principle.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {principle.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                      {principle.desc}
                    </p>

                    <div className="pt-2 space-y-2 border-t border-white/[0.05]">
                      {principle.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PHASE 9: FINAL CTA ──────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-indigo-950/30 via-white/[0.02] to-transparent border border-indigo-500/30 text-center overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
                Next Steps
              </span>

              <h2
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Have a Complex System to Build?
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                Let&apos;s discuss the architecture, engineering and execution behind your next
                project.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs shadow-lg shadow-cyan-500/25 transition-all group"
                >
                  <span>Start an Engineering Conversation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/capabilities"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-neutral-200 hover:text-white font-medium text-xs border border-white/[0.08] hover:border-white/[0.15] transition-all"
                >
                  <span>Explore Our Capabilities</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
