"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Bot, 
  Search, 
  Globe, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Terminal, 
  Database,
  Network,
  Zap,
  Activity,
  Workflow,
  Share2,
  FileCode2
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CapabilitiesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const sections = containerRef.current?.querySelectorAll(".capability-block");
      sections?.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="space-y-16 sm:space-y-24 py-12 sm:py-16">

      {/* ─────────────────────────────────────────────────────────────
          CAPABILITY 01 — CUSTOM SOFTWARE & SaaS ENGINEERING
          Layout: Text & Deliverables (Left) + Architecture & Video Chassis (Right)
         ───────────────────────────────────────────────────────────── */}
      <section
        id="software-saas"
        className="capability-block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-mono text-indigo-300">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>CAPABILITY 01 &bull; APPLICATION ARCHITECTURE</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Software Built Around the Way Your Business Works.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans">
              We design and engineer custom software products and SaaS platforms that bring business processes, users and systems together.
            </p>

            {/* Deliverables Checklist (Phase 7: Clean 2-column list) */}
            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Verified Engineering Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { text: "Multi-tenant SaaS architecture", id: "saas-architecture" },
                  { text: "Subscription and billing systems" },
                  { text: "Role-based access control (RBAC)" },
                  { text: "Enterprise application development", id: "platform-modernisation" },
                  { text: "Workflow automation & orchestration" },
                  { text: "API and system integration", id: "api-integration" },
                  { text: "Mobile & cross-platform engineering", id: "mobile-applications" },
                  { text: "Scalable backend engineering" },
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    id={item.id}
                    className={`flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-200 ${item.id ? "scroll-mt-28" : ""}`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Use Cases */}
            <div className="pt-4 border-t border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                Representative Deployments
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { title: "B2B SaaS Platforms", desc: "Multi-tenant subscription architectures with automated seat management." },
                  { title: "Internal Operations", desc: "Unified dashboards consolidating legacy databases and operational silos." },
                  { title: "Custom Enterprise Apps", desc: "High-concurrency business applications with strict audit-trail integrity." },
                ].map((uc, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.07] space-y-1">
                    <div className="text-xs font-bold text-white">{uc.title}</div>
                    <div className="text-[11px] text-neutral-400 leading-relaxed">{uc.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deep-Dive Action */}
            <div className="pt-2">
              <Link
                href="/capabilities/software-development"
                className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 hover:text-indigo-300 font-semibold group/link"
              >
                <span>Explore Technical SaaS Architecture Scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Storytelling Chassis (5 cols) */}
          <div className="lg:col-span-5">
            <div data-dark-chassis="true" className="dark-media-chassis rounded-3xl border border-white/[0.12] bg-[#070a14] overflow-hidden shadow-2xl space-y-0">
              {/* Titlebar */}
              <div className="px-4 py-2.5 bg-[#0a0f1d] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500/80" />
                  <span className="text-neutral-300 text-[11px]">saas-runtime.topology.svg</span>
                </div>
                <span className="text-[10px] text-indigo-300">MODULAR STACK</span>
              </div>

              {/* Video Player Asset */}
              <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
                <video
                  src="/videos/capabilities/04-enterprise-saas.mp4"
                  poster="/videos/capabilities/04-enterprise-saas.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a14] via-transparent to-transparent" />
              </div>

              {/* Architectural Topology Nodes */}
              <div className="p-5 space-y-3 bg-[#070a14] border-t border-white/[0.06]">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Engineered Subsystems:
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <span className="text-white">Frontend Client</span>
                    <span className="text-indigo-400">Next.js App Router / SSR</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <span className="text-white">API &amp; Auth Gateway</span>
                    <span className="text-cyan-400">JWT &bull; OAuth2 &bull; RBAC</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <span className="text-white">Database &amp; Ledger</span>
                    <span className="text-emerald-400">PostgreSQL &bull; Redis Cache</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CAPABILITY 02 — AGENTIC AI & MACHINE LEARNING SYSTEMS
          Layout: Alternate (Visual on Left, Content on Right)
         ───────────────────────────────────────────────────────────── */}
      <section
        id="agentic-ai"
        className="capability-block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual Storytelling Multi-Agent Flow (5 cols on lg) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div data-dark-chassis="true" className="dark-media-chassis rounded-3xl border border-white/[0.12] bg-[#070a14] overflow-hidden shadow-2xl">
              {/* Titlebar */}
              <div className="px-4 py-2.5 bg-[#0a0f1d] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500/80" />
                  <span className="text-neutral-300 text-[11px]">agent-swarm.orchestrator.ts</span>
                </div>
                <span className="text-[10px] text-purple-300">DETERMINISTIC COGNITION</span>
              </div>

              {/* Video Player Asset */}
              <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
                <video
                  src="/videos/capabilities/05-agentic-ai.mp4"
                  poster="/videos/capabilities/05-agentic-ai.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a14] via-transparent to-transparent" />
              </div>

              {/* 6-Step Multi-Agent Execution Pipeline (Conceptual Architecture) */}
              <div className="p-4 sm:p-5 space-y-2 bg-[#070a14] border-t border-white/[0.06] text-xs font-mono">
                <div className="flex items-center justify-between text-purple-300 font-semibold mb-2">
                  <div className="flex items-center gap-2">
                    <Workflow className="w-3.5 h-3.5" />
                    <span>Multi-Agent Execution Pipeline</span>
                  </div>
                  <span className="text-[9px] font-mono text-purple-400/80 bg-purple-500/10 px-2 py-0.5 rounded">
                    Conceptual Topology
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-[11px]">
                    <span className="text-white">01. Request</span>
                    <span className="text-slate-400">Task Ingestion &amp; Intent Parsing</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-[11px]">
                    <span className="text-white">02. Planning</span>
                    <span className="text-purple-400">Context Decomposition &amp; DAG Router</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-[11px]">
                    <span className="text-white">03. Specialised Agents</span>
                    <span className="text-indigo-400">Domain Swarms &amp; Tool Assignment</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-[11px]">
                    <span className="text-white">04. Tool Execution</span>
                    <span className="text-sky-400">API Calls, DB Queries &amp; Vector RAG</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-[11px]">
                    <span className="text-white">05. Verification</span>
                    <span className="text-amber-400">Guardrails &amp; Human-in-the-Loop</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-[11px]">
                    <span className="text-white">06. Output</span>
                    <span className="text-emerald-400">Deterministic Action &amp; Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-mono text-purple-300">
              <Bot className="w-3.5 h-3.5 text-purple-400" />
              <span>CAPABILITY 02 &bull; COGNITIVE ARCHITECTURE</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Beyond Chatbots. Into Intelligent Execution.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans">
              We engineer AI systems that combine language models, business data, specialised tools and controlled workflows to perform meaningful business tasks.
            </p>

            {/* Deliverables Checklist with Anchor IDs */}
            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Verified Engineering Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { text: "Multi-agent orchestration", id: "multi-agent" },
                  { text: "Retrieval-Augmented Generation (RAG)", id: "rag-knowledge" },
                  { text: "Knowledge retrieval systems" },
                  { text: "Tool calling and API execution", id: "ai-integration" },
                  { text: "AI workflow automation", id: "workflow-automation" },
                  { text: "Domain-specific model integration" },
                  { text: "Human-in-the-loop controls" },
                  { text: "AI evaluation and guardrails", id: "ai-evaluation" },
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    id={item.id}
                    className={`flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-200 ${item.id ? "scroll-mt-28" : ""}`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Use Cases */}
            <div className="pt-4 border-t border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                Representative Deployments
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { title: "Autonomous Workflows", desc: "Agents parsing customer inquiries, verifying records, and drafting actions." },
                  { title: "Knowledge Retrieval", desc: "Private RAG pipelines answering complex queries across internal document lakes." },
                  { title: "Intelligent Data Analysis", desc: "Proactive agents monitoring database anomaly thresholds in real time." },
                ].map((uc, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.07] space-y-1">
                    <div className="text-xs font-bold text-white">{uc.title}</div>
                    <div className="text-[11px] text-neutral-400 leading-relaxed">{uc.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deep-Dive Action */}
            <div className="pt-2">
              <Link
                href="/capabilities/ai-development"
                className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:text-purple-300 font-semibold group/link"
              >
                <span>Explore Agentic AI Engineering Scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CAPABILITY 03 — SEARCH & GENERATIVE ENGINE OPTIMIZATION (GEO)
          Layout: Text (Left) + Semantic Knowledge Visual (Right)
         ───────────────────────────────────────────────────────────── */}
      <section
        id="search-geo"
        className="capability-block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs font-mono text-sky-300">
              <Search className="w-3.5 h-3.5 text-sky-400" />
              <span>CAPABILITY 03 &bull; SEARCH &amp; DISCOVERY</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Engineering Visibility for the Next Era of Search.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans">
              We engineer technical search foundations, structured digital experiences and AI discovery strategies that help businesses improve how their information is understood and discovered.
            </p>

            {/* Deliverables Checklist */}
            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Verified Engineering Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Technical SEO & Core Web Vitals",
                  "Semantic HTML architecture",
                  "Structured data & Schema.org",
                  "Search crawling & indexing optimization",
                  "Entity and knowledge graph architecture",
                  "Generative Engine Optimization (GEO)",
                  "Content architecture & clustering",
                  "Competitor & search visibility analysis",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Use Cases */}
            <div className="pt-4 border-t border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                Representative Deployments
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { title: "Technical SEO Modernisation", desc: "Resolving crawl bottlenecks, indexing gaps, and rendering delays." },
                  { title: "Semantic Content Architecture", desc: "Topic clustering and entity mapping structured for search engine crawlers." },
                  { title: "AI Search Visibility Strategy", desc: "Formatting facts and authority signals for generative synthesis models." },
                ].map((uc, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.07] space-y-1">
                    <div className="text-xs font-bold text-white">{uc.title}</div>
                    <div className="text-[11px] text-neutral-400 leading-relaxed">{uc.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deep-Dive Action */}
            <div className="pt-2">
              <Link
                href="/capabilities/seo"
                className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 hover:text-sky-300 font-semibold group/link"
              >
                <span>Explore Technical SEO &amp; GEO Architecture Scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Semantic Knowledge Graph Chassis (5 cols) */}
          <div className="lg:col-span-5">
            <div data-dark-chassis="true" className="dark-media-chassis rounded-3xl border border-white/[0.12] bg-[#070a14] overflow-hidden shadow-2xl">
              {/* Titlebar */}
              <div className="px-4 py-2.5 bg-[#0a0f1d] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500/80" />
                  <span className="text-neutral-300 text-[11px]">schema-graph.entity-mesh.json</span>
                </div>
                <span className="text-[10px] text-sky-300">SEMANTIC WEB</span>
              </div>

              {/* Video Player Asset */}
              <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
                <video
                  src="/videos/capabilities/06-data-intelligence.mp4"
                  poster="/videos/capabilities/06-data-intelligence.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a14] via-transparent to-transparent" />
              </div>

              {/* Entity Schema Graph Overlay */}
              <div className="p-5 space-y-3 bg-[#070a14] border-t border-white/[0.06] text-xs font-mono">
                <div className="flex items-center gap-2 text-sky-300 font-semibold mb-1">
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Knowledge Graph &amp; Citation Pathways</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <span className="text-white">Structured Entities</span>
                    <span className="text-sky-400">Organization &bull; SoftwareApplication</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <span className="text-white">Crawler Discovery</span>
                    <span className="text-emerald-400">Optimized Crawl Budget &bull; Low-Latency TTFB</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <span className="text-white">Answer Synthesis</span>
                    <span className="text-indigo-400">Semantic Authority Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CAPABILITY 04 — MODERN WEB & ENTERPRISE PORTAL ENGINEERING
          Layout: Alternate (Visual on Left, Content on Right)
         ───────────────────────────────────────────────────────────── */}
      <section
        id="web-digital"
        className="capability-block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual Storytelling Web Performance Chassis (5 cols on lg) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div data-dark-chassis="true" className="dark-media-chassis rounded-3xl border border-white/[0.12] bg-[#070a14] overflow-hidden shadow-2xl">
              {/* Titlebar */}
              <div className="px-4 py-2.5 bg-[#0a0f1d] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-neutral-300 text-[11px]">web-surface.audit.metrics</span>
                </div>
                <span className="text-[10px] text-emerald-300 font-mono">Targeting WCAG 2.2 AA</span>
              </div>

              {/* Video Player Asset */}
              <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
                <video
                  src="/videos/capabilities/01-digital-experiences.mp4"
                  poster="/videos/capabilities/01-digital-experiences.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a14] via-transparent to-transparent" />
              </div>

              {/* Performance Metrics strip */}
              <div className="p-5 space-y-3 bg-[#070a14] border-t border-white/[0.06] text-xs font-mono">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-white font-semibold">Optimized Interaction Latency</span>
                  </div>
                  <span className="text-emerald-400 font-bold">GPU-Accelerated</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-neutral-400 block text-[10px]">Rendering Engine</span>
                    <span className="text-white font-semibold">Next.js Edge &bull; React</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-neutral-400 block text-[10px]">Motion Choreography</span>
                    <span className="text-white font-semibold">GSAP ScrollTrigger</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-300">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>CAPABILITY 04 &bull; DIGITAL SURFACES</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Digital Experiences That Perform as Well as They Look.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans">
              We design and engineer modern digital experiences, enterprise portals and high-performance web applications with thoughtful UX and robust engineering foundations.
            </p>

            {/* Deliverables Checklist */}
            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Verified Engineering Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Modern website development",
                  "Enterprise portals & client portals",
                  "Responsive web applications",
                  "Interactive 3D experiences & WebGL",
                  "GSAP animation & motion systems",
                  "Frontend architecture (Next.js / TS)",
                  "Accessibility-focused engineering, targeting WCAG 2.2 AA",
                  "Core Web Vitals performance optimisation",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Use Cases */}
            <div className="pt-4 border-t border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                Representative Deployments
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { title: "Enterprise Websites", desc: "Flagship brand surfaces with sub-second LCP and international localization." },
                  { title: "Customer & Partner Portals", desc: "Authenticated self-service dashboards with granular permission controls." },
                  { title: "Interactive Digital Experiences", desc: "Three.js and GSAP visual storytelling designed for modern web engagement." },
                ].map((uc, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.07] space-y-1">
                    <div className="text-xs font-bold text-white">{uc.title}</div>
                    <div className="text-[11px] text-neutral-400 leading-relaxed">{uc.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deep-Dive Action */}
            <div className="pt-2">
              <Link
                href="/capabilities/web-apps"
                className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold group/link"
              >
                <span>Explore Modern Web &amp; Portal Scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
