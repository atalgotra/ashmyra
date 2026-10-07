"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Cpu,
  Smartphone,
  Box,
  Database,
  Cloud,
  Layers,
  Workflow,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 8 Engineering Capabilities (Requirement 17)
const CAPABILITIES_LIST = [
  { name: "AI & AGENTS", icon: Cpu, desc: "Autonomous multi-agent swarms and deterministic LLM guardrails" },
  { name: "WEB PLATFORMS", icon: Code2, desc: "Ultra-fast Next.js architectures & enterprise SaaS portals" },
  { name: "MOBILE APPS", icon: Smartphone, desc: "High-performance native and cross-platform mobile apps" },
  { name: "3D & INTERACTIVE", icon: Box, desc: "GPU-accelerated WebGL, Three.js, and spatial experiences" },
  { name: "DATA & ANALYTICS", icon: Database, desc: "Real-time streaming pipelines, ETL, and vector databases" },
  { name: "CLOUD & DEVOPS", icon: Cloud, desc: "Zero-downtime microservices and cloud infrastructure" },
  { name: "ENTERPRISE SOFTWARE", icon: Layers, desc: "Secure ERP bridges, RBAC, and mission-critical workflows" },
  { name: "INTEGRATIONS", icon: Workflow, desc: "Bi-directional APIs, webhooks, and third-party sync" },
];

// Approved Project Examples ONLY (Requirement 17: FMO, 1A Veda, Ramaroma Herbs, Divagam — NO Zipaworld/Zippy)
const APPROVED_PROJECTS = [
  {
    name: "FMO",
    domain: "Fashion & Lifestyle",
    desc: "Global fashion catalog with 3D product showcase, order management, and omnichannel marketing automation.",
    tag: "3D & E-Commerce",
  },
  {
    name: "1A Veda",
    domain: "Ayurveda & Wellness",
    desc: "Modern digital health platform featuring product subscriptions, wellness quizzes, and automated CRM retention.",
    tag: "Platform & Subscriptions",
  },
  {
    name: "Ramaroma Herbs",
    domain: "Natural Products & Wellness",
    desc: "Brand catalog, distributor management network, B2B lead generation, and autonomous SEO content engine.",
    tag: "Distributor & SEO Engine",
  },
  {
    name: "Divagam",
    domain: "Spiritual & Lifestyle",
    desc: "Interactive spiritual flagship, marketplace integration, automated inventory synchronization, and digital marketing.",
    tag: "Marketplace & Inventory",
  },
];

export function Wow7EngineeringPlayground() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(visualRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        scale: 0.94,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="wow-7"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">

        {/* Section Header (Requirement 17) */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs text-cyan-300 font-mono">
            <span className="font-bold">WOW 07</span>
            <span>&bull;</span>
            <span>ENGINEERING PLAYGROUND</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            &ldquo;IF IT DOESN&apos;T EXIST,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">
              WE BUILD IT.&rdquo;
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            From AI agents to mobile apps, 3D websites to enterprise platforms — intelligent digital solutions for real businesses.
          </p>
        </div>

        {/* 8 Capabilities Grid (Requirement 17) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {CAPABILITIES_LIST.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.name}
                className="p-3 rounded-2xl bg-[#090c16] border border-white/[0.06] flex flex-col justify-between h-24 text-left"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                <div className="text-[11px] font-bold font-mono text-white leading-tight uppercase">
                  {cap.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* WOW 7 Large Visual Asset Showcase (Requirement 17) */}
        <div
          ref={visualRef}
          className="relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#090c16] shadow-[0_25px_80px_rgba(0,0,0,0.85)]"
        >
          {/* Top Bar */}
          <div className="p-4 bg-[#05070a]/90 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-neutral-300">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="font-bold text-white">Ashmyra Engineering Playground</span>
            </div>
            <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold">
              MULTI-INDUSTRY PROOF
            </span>
          </div>

          {/* Large Image Foundation */}
          <div className="relative w-full aspect-[16/9] min-h-[420px] bg-black">
            <Image
              src="/wow/wow7-engineering-playground.png"
              alt="Ashmyra Engineering Playground - FMO, 1A Veda, Ramaroma Herbs, Divagam"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-center filter contrast-[1.03]"
            />
          </div>

          {/* 4 Approved Projects Proof Strip (Requirement 17 & 20) */}
          <div className="p-6 bg-[#080b15] border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {APPROVED_PROJECTS.map((proj) => (
              <div
                key={proj.name}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400">
                    <span>{proj.tag}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-sans">{proj.name}</h4>
                  <div className="text-[11px] font-mono text-neutral-400">{proj.domain}</div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans pt-1">
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
