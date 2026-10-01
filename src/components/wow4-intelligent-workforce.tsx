"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Bot, CheckCircle2, ArrowRight, Activity, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 7-Stage Workforce Lifecycle (Requirement 14)
const HR_LIFECYCLE = [
  { step: "01", name: "DISCOVER", desc: "Find right talent" },
  { step: "02", name: "HIRE", desc: "Screen & select" },
  { step: "03", name: "ONBOARD", desc: "Automate & guide" },
  { step: "04", name: "MANAGE", desc: "Engage & support" },
  { step: "05", name: "PERFORM", desc: "Track & grow" },
  { step: "06", name: "DEVELOP", desc: "Skills & learning" },
  { step: "07", name: "RETAIN", desc: "People analytics" },
];

// 8 Specialized Agents (Requirement 14)
const HR_AGENTS = [
  "Recruitment Agent",
  "Onboarding Agent",
  "Employee Support Agent",
  "Attendance Agent",
  "Payroll Agent",
  "Performance Agent",
  "Development Agent",
  "Analytics Agent",
];

export function Wow4IntelligentWorkforce() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
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
      id="wow-4"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header (Requirement 14) */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300 font-mono">
            <span className="font-bold">WOW 04</span>
            <span>&bull;</span>
            <span>INTELLIGENT WORKFORCE / HRMS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            FROM HIRING
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-white">
              TO GROWTH.
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            One unified employee lifecycle powered by autonomous agents. A more productive, engaged, and growing team.
          </p>
        </div>

        {/* 7-Stage Visual Lifecycle (Requirement 14) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {HR_LIFECYCLE.map((stage) => (
            <div
              key={stage.name}
              className="p-3.5 rounded-2xl bg-[#090c16] border border-white/[0.06] text-center space-y-1"
            >
              <span className="text-[10px] font-mono text-emerald-400 font-bold block">
                {stage.step}
              </span>
              <div className="text-xs font-bold font-mono text-white uppercase">
                {stage.name}
              </div>
              <div className="text-[10px] text-neutral-400 line-clamp-1">
                {stage.desc}
              </div>
            </div>
          ))}
        </div>

        {/* WOW 4 Large Visual Asset Showcase (Requirement 14) */}
        <div 
          ref={visualRef}
          className="relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#090c16] shadow-[0_25px_80px_rgba(0,0,0,0.85)]"
        >
          {/* Top Bar */}
          <div className="p-4 bg-[#05070a]/90 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-neutral-300">
              <Users className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white">Ashmyra HRMS &bull; Intelligent Workforce Matrix</span>
            </div>
            <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
              DEMO DATA
            </span>
          </div>

          {/* Large Image Foundation */}
          <div className="relative w-full aspect-[16/9] min-h-[420px] bg-black">
            <Image
              src="/wow/wow4-intelligent-workforce.png"
              alt="Ashmyra Intelligent Workforce HRMS"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-center filter contrast-[1.03]"
            />
          </div>

          {/* 8 Specialized Agents Tag Ribbon (Requirement 14) */}
          <div className="p-4 bg-[#080b15] border-t border-white/[0.08] flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-[10px] text-neutral-400 uppercase tracking-wider mr-2 font-bold">
              Specialized Agents:
            </span>
            {HR_AGENTS.map((agent) => (
              <span
                key={agent}
                className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px]"
              >
                {agent}
              </span>
            ))}
          </div>

          {/* Bottom Stream Transition Connector (Requirement 26) */}
          <div className="p-3 bg-[#05070a] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>&gt;&gt; Workforce data streams syncing with global data intelligence pipelines</span>
            <span className="text-purple-400 font-semibold">&rarr; WOW 05 Next</span>
          </div>
        </div>

      </div>
    </section>
  );
}
