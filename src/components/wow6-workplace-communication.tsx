"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  MessageSquare, 
  Bot, 
  PhoneCall, 
  Video, 
  Share2, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Kanban,
  Sparkles
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 5-Stage Context Ingestion Flow (Requirement 16)
const CONTEXT_FLOW = [
  { step: "01", title: "Message Stream", desc: "Team discusses new design requirement" },
  { step: "02", title: "AI Context Ingestion", desc: "Copilot extracts intent, urgency & assets" },
  { step: "03", title: "Autonomous Task Created", desc: "Sub-task generated with exact deliverables" },
  { step: "04", title: "Task Assigned", desc: "Routed to responsible lead with context payload" },
  { step: "05", title: "Project Board Updated", desc: "Kanban syncs automatically with zero friction" },
];

export function Wow6WorkplaceCommunication() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(2);

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
      id="wow-6"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#05070a] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header (Requirement 16) */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/25 text-xs text-pink-300 font-mono">
            <span className="font-bold">WOW 06</span>
            <span>&bull;</span>
            <span>INTELLIGENT WORKPLACE COMMUNICATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            COMMUNICATION
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-200 to-white">
              WITHOUT CONTEXT SWITCHING.
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            An intelligent workplace communication platform. Chat, video, screen share, and AI copilot working in unison with your project architecture.
          </p>
        </div>

        {/* Feature Capabilities Ribbon (Requirement 16: Chat, Channels, Files, AI, Voice, Video, Screen Sharing, Tasks) */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
          {[
            "Chat & Channels",
            "Files & Knowledge",
            "AI Assistant",
            "Voice & Video",
            "Screen Sharing",
            "Automated Tasks",
          ].map((item) => (
            <span
              key={item}
              className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-neutral-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* WOW 6 Large Visual Asset Showcase (Requirement 16) */}
        <div 
          ref={visualRef}
          className="relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#090c16] shadow-[0_25px_80px_rgba(0,0,0,0.85)]"
        >
          {/* Top Bar */}
          <div className="p-4 bg-[#05070a]/90 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-neutral-300">
              <MessageSquare className="w-4 h-4 text-pink-400" />
              <span className="font-bold text-white">Ashmyra Connect &bull; Intelligent Communication Platform</span>
            </div>
            <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
              DEMO DATA
            </span>
          </div>

          {/* Large Image Foundation */}
          <div className="relative w-full aspect-[16/9] min-h-[420px] bg-black">
            <Image
              src="/wow/wow6-workplace-communication.png"
              alt="Ashmyra Intelligent Workplace Communication"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-center filter contrast-[1.03]"
            />
          </div>

          {/* Context Ingestion Pipeline Interactive Showcase (Requirement 16) */}
          <div className="p-6 bg-[#080b15] border-t border-white/[0.08] space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-pink-400 font-bold">
              Autonomous In-Stream Context Resolution:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs font-mono">
              {CONTEXT_FLOW.map((f, idx) => (
                <div
                  key={f.title}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    activeStep === idx
                      ? "bg-pink-500/[0.1] border-pink-400 text-white"
                      : "bg-white/[0.02] border-white/[0.04] text-neutral-400"
                  }`}
                >
                  <span className="text-[10px] text-pink-400 font-bold block">{f.step}</span>
                  <div className="font-bold text-white mt-0.5">{f.title}</div>
                  <div className="text-[10px] text-neutral-400 mt-1 line-clamp-2">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stream Transition Connector (Requirement 26) */}
          <div className="p-3 bg-[#05070a] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>&gt;&gt; Communication signals converging into Engineering Playground</span>
            <span className="text-cyan-400 font-semibold">&rarr; WOW 07 Next</span>
          </div>
        </div>

      </div>
    </section>
  );
}
