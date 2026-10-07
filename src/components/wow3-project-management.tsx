"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Kanban, 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle, 
  Clock, 
  Users, 
  Workflow, 
  Layers
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 9-Stage Sequence (Requirement 13)
const PM_FLOW = [
  "Requirement",
  "AI Understanding",
  "Task Breakdown",
  "Assignment",
  "Dependencies",
  "Progress",
  "Risk Detection",
  "Next Action",
  "Reporting",
];

export function Wow3ProjectManagement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [activeTaskCreated, setActiveTaskCreated] = useState(false);

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
      id="wow-3"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header (Requirement 13) */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs text-amber-300 font-mono">
            <span className="font-bold">WOW 03</span>
            <span>&bull;</span>
            <span>AGENTIC AI PROJECT MANAGEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            PROJECT MANAGEMENT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-200 to-white">
              THAT UNDERSTANDS THE WORK.
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            An AI-native project management system built around context, automation, and execution. From ideas to delivery without manual administrative friction.
          </p>
        </div>

        {/* 9-Stage Visual Sequence Bar (Requirement 13) */}
        <div className="space-y-2">
          <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
            Autonomous Work Lifecycle
          </div>
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2">
            {PM_FLOW.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-neutral-300 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{step}</span>
                </div>
                {idx < PM_FLOW.length - 1 && (
                  <span className="text-neutral-600 font-mono text-xs">&rarr;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* WOW 3 Large Visual Asset Showcase (Requirement 13) */}
        <div 
          ref={visualRef}
          className="relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#090c16] shadow-[0_25px_80px_rgba(0,0,0,0.85)]"
        >
          {/* Top Bar */}
          <div className="p-4 bg-[#05070a]/90 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-neutral-300">
              <Kanban className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-white">Ashmyra WorkHub &bull; Project Intelligence Engine</span>
            </div>
            <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
              DEMO DATA
            </span>
          </div>

          {/* Large Image Foundation */}
          <div className="relative w-full aspect-[16/9] min-h-[420px] bg-black">
            <Image
              src="/wow/wow3-project-management.png"
              alt="Ashmyra Agentic AI Project Management"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-center filter contrast-[1.03]"
            />
          </div>

          {/* Interactive AI Assistant Recommender Overlay (Requirement 13) */}
          <div className="p-5 sm:p-6 bg-[#080b15] border-t border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                <Bot className="w-4 h-4" />
                <span>AI Project Assistant Recommends:</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300">
                &ldquo;Complete payment gateway testing, run automated load test for API endpoints, and advance UAT deployment.&rdquo;
              </p>
            </div>

            <button
              onClick={() => setActiveTaskCreated(!activeTaskCreated)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap self-start md:self-auto ${
                activeTaskCreated
                  ? "bg-emerald-600 text-white font-bold"
                  : "bg-amber-600 hover:bg-amber-500 text-white font-semibold"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeTaskCreated ? "Tasks Created Automatically" : "Create Tasks Automatically"}</span>
            </button>
          </div>

          {/* Bottom Stream Transition Connector (Requirement 26) */}
          <div className="p-3 bg-[#05070a] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>&gt;&gt; Project dependencies translating into workforce talent allocations</span>
            <span className="text-emerald-400 font-semibold">&rarr; WOW 04 Next</span>
          </div>
        </div>

      </div>
    </section>
  );
}
