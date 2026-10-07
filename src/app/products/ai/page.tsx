import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { ProductWowPreview } from "@/components/product-wow-preview";
import { FreelancerTrustBanner } from "@/components/freelancer-trust-banner";
import { 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  ArrowUpRight, 
  TrendingUp,
  Users,
  Radio,
  Video,
  Calendar,
  Send,
  BarChart3,
  Clock,
  Hash,
  FileText,
  Check,
  ChevronRight,
  Layers,
  Activity,
  Eye,
  Sliders,
  Target
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra AI | Autonomous Social Media Agent Swarm & Multi-Channel Marketing",
  description:
    "An autonomous agentic AI workforce that operates like an elite 7–8 person creative agency. Manages YouTube, Instagram, LinkedIn, and Facebook with dynamic competitor radar, viral trend discovery, end-to-end asset production, and 1-click human approval.",
  keywords: [
    "Ashmyra AI",
    "Agentic AI Social Media Manager",
    "Autonomous Social Media Agency",
    "Multi-Agent Swarm",
    "Competitor Radar AI",
    "Reel Script AI Generator",
    "LinkedIn Carousel AI",
    "Automated Content Calendar",
    "Human in the Loop AI",
  ],
  openGraph: {
    title: "Ashmyra AI | Autonomous Social Media Agent Swarm",
    description:
      "Operates like an elite 7–8 person creative agency. Manages YouTube, Instagram, LinkedIn, and Facebook with competitor radar, reel script generation, and 1-click publishing.",
    url: "https://ashmyra.com/products/ai",
    images: [{ url: "/wow/wow1-social-intelligence.png", width: 1200, height: 675, alt: "Ashmyra AI Autonomous Architecture" }],
  },
  alternates: {
    canonical: "https://ashmyra.com/products/ai",
  },
};

// Clean inline platform badges for maximum visual sharpness
function YouTubeIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export default function AshmyraAiPage() {
  const product = PRODUCTS.find((p) => p.id === "ai")!;

  return (
    <div className="relative pt-32 pb-24 min-h-screen bg-[#050608] overflow-hidden">

      {/* ── 00. Atmospheric Ambient Glow & Perspective Radial Grid ───── */}
      <div className="absolute top-0 left-0 right-0 h-[720px] pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute inset-0 dot-bg opacity-35" 
          style={{
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 25%, #000 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 25%, #000 30%, transparent 80%)",
          }}
        />
        
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[380px] rounded-full animate-pulse-glow"
          style={{
            background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.22) 0%, rgba(34, 211, 238, 0.12) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div
          className="absolute top-28 left-1/2 -translate-x-1/2 w-[480px] h-[260px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(ellipse at center, rgba(167, 139, 250, 0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 01. Hero Header ────────────────────────────────────────── */}
        <div className="relative text-center max-w-4xl mx-auto mb-10">

          {/* Unified System Telemetry & Status Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono backdrop-blur-sm">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>Agentic AI Core OS</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300 font-mono backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              <span className="text-white font-semibold">Swarm:</span>
              <span>7–8 Specialized Agents</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-neutral-300 font-mono backdrop-blur-sm">
              <span className="flex items-center gap-1.5 text-neutral-200">
                <YouTubeIcon className="w-3 h-3 text-red-400" />
                <InstagramIcon className="w-3 h-3 text-pink-400" />
                <LinkedInIcon className="w-3 h-3 text-sky-400" />
                <FacebookIcon className="w-3 h-3 text-blue-400" />
              </span>
              <span className="text-neutral-400 ml-1">4 Platforms Managed</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-400/20 text-xs text-indigo-300 font-mono backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>1-Click Human Approval Enforced</span>
            </div>
          </div>

          {/* Kinetic Headline with Shimmer */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] font-sans">
            Software That Doesn&apos;t Just Execute.
            <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-indigo-400 animate-[shimmer_6s_linear_infinite] bg-[length:200%_auto]">
              It Thinks, Creates & Orchestrates.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ashmyra AI functions like an elite <strong className="text-white font-semibold">7–8 person human creative agency</strong> operating in an autonomous swarm. From real-time competitor radar and market trend scanning to complete reel scripts, carousels, Midjourney prompts, and 1-click publishing across <strong className="text-white font-semibold">YouTube, Instagram, LinkedIn, and Facebook</strong>.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=ai-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Deploy Ashmyra AI in Your Stack
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources/agentic-ai-vs-chatbots"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-neutral-200 text-sm border border-white/[0.1] transition-all hover:scale-[1.02]"
            >
              Read Agentic AI Whitepaper
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </Link>
          </div>

          {/* Micro-Proof Spec Strip Below Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Full Asset Packaging (Hooks, Scripts, Prompts)</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <Radio className="w-3.5 h-3.5 text-cyan-400" />
              <span>24/7 Dynamic Competitor Radar</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>1-Click Human Clearance Gate</span>
            </div>
          </div>
        </div>

        {/* ── 02. WOW Visual Showcase ─────────────────────────────────── */}
        <ProductWowPreview
          imageSrc="/wow/wow1-social-intelligence.png"
          imageAlt="Ashmyra AI Social Media Agency Swarm Orchestrator"
          productName="Ashmyra AI Social Media Swarm"
          productTagline="Autonomous 7–8 agent team operating YouTube, Instagram, LinkedIn, and Facebook with competitor radar, full asset production, and 1-click approval."
          accentColor="#818cf8"
          badgeText="7–8 Agent Specialist Swarm Active"
          telemetry={[
            { label: "Platforms Managed", value: "4 Active", detail: "YouTube, Instagram, LinkedIn, Facebook" },
            { label: "Agency Specialist Roles", value: "7–8 Agents", detail: "Scouts, scriptwriters, carousel architects, and dispatchers" },
            { label: "Asset Packaging", value: "100% Ready", detail: "Hooks, timed scripts, carousels, prompts, tags, and peak timing" },
            { label: "Human Verification", value: "1-Click", detail: "Deterministic clearance gate before publishing" },
          ]}
          capabilities={[
            {
              title: "Autonomous 7–8 Agent Specialist Swarm",
              description: "Coordinates dedicated agents (Trend Scout, Copywriter, Reel Scriptwriter, Carousel Architect, Visual Prompt Engineer, Tag Strategist, Dispatcher) acting as a complete digital marketing agency.",
            },
            {
              title: "Dynamic Competitor Radar & Market News",
              description: "Dynamically add competitors to continuously monitor their posting velocity, viral spikes (>300%), content gaps, and breaking industry news across all 4 channels.",
            },
            {
              title: "Complete Master Deliverables & 1-Click Clearance",
              description: "Produces tested psychological hooks, timed 0–60s reel scripts with visual cues, multi-slide carousels, Midjourney prompts, and hashtags with 1-click human clearance.",
            },
          ]}
        />

        {/* ── 03. Freelancer.com 100+ Delivery Proof Banner ─────────────── */}
        <div className="my-16">
          <FreelancerTrustBanner category="Agentic AI & Social Media Autonomous Systems" />
        </div>

        {/* ── 04. System Architecture: The 4 World-Class Pillars ──────────── */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-2 font-semibold">
              Autonomous Agency Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              The 4 Pillars of Ashmyra AI Social Media Swarm
            </h2>
            <p className="text-base text-neutral-300 mt-3 leading-relaxed">
              Replacing the complexity and overhead of an entire 7–8 person human marketing department with specialized, interconnected autonomous agents equipped with deterministic governance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* ── PILLAR 1: 7-8 Autonomous Agent Swarm Team ─────────────── */}
            <div 
              className="group rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10"
              style={{
                background: "linear-gradient(180deg, rgba(17, 24, 39, 0.75) 0%, rgba(10, 13, 20, 0.95) 100%)",
                border: "1px solid rgba(129, 140, 248, 0.2)",
              }}
            >
              <div>
                {/* Visual Header with Real Generated Dashboard Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/60">
                  <Image
                    src="/products/ai/pillar-1-swarm-team.jpg"
                    alt="Ashmyra AI 7-8 Agent Swarm Architecture"
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* High-tech Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/40 to-black/30 pointer-events-none" />

                  {/* Header Overlay Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-400/40 text-[11px] font-mono text-indigo-200 backdrop-blur-md shadow-md">
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                      PILLAR 01 // SWARM TEAM
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-[11px] font-mono text-emerald-300 backdrop-blur-md">
                      8 Agents Collaborating
                    </span>
                  </div>

                  {/* Platform Pills Overlay at Bottom of Visual */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/70 border border-red-500/40 text-[10px] font-mono text-red-300 backdrop-blur-md">
                      <YouTubeIcon className="w-2.5 h-2.5 text-red-400" /> YouTube
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/70 border border-pink-500/40 text-[10px] font-mono text-pink-300 backdrop-blur-md">
                      <InstagramIcon className="w-2.5 h-2.5 text-pink-400" /> Instagram
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/70 border border-sky-500/40 text-[10px] font-mono text-sky-300 backdrop-blur-md">
                      <LinkedInIcon className="w-2.5 h-2.5 text-sky-400" /> LinkedIn
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/70 border border-blue-500/40 text-[10px] font-mono text-blue-300 backdrop-blur-md">
                      <FacebookIcon className="w-2.5 h-2.5 text-blue-400" /> Facebook
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-2 text-indigo-400 text-xs font-mono uppercase tracking-wider font-semibold">
                    <Users className="w-4 h-4" />
                    Autonomous Human Agency Replacement
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                    Multi-Agent Specialist Swarm (7–8 Roles)
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    Rather than a singular generic chatbot, Ashmyra AI orchestrates a synchronized swarm of 7–8 specialized autonomous agents. Each agent operates with distinct cognitive responsibilities, collaborating asynchronously to deliver world-class creative assets.
                  </p>

                  {/* Agent Roster Breakdown */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Active Agent Roster:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2 text-neutral-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <div>
                          <strong className="text-white block font-medium">Trend & News Scout</strong>
                          <span className="text-[11px] text-neutral-400">Scans global events 24/7</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2 text-neutral-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <div>
                          <strong className="text-white block font-medium">Viral Hook Copywriter</strong>
                          <span className="text-[11px] text-neutral-400">Psychology-backed openers</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2 text-neutral-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <div>
                          <strong className="text-white block font-medium">Reel & Script Agent</strong>
                          <span className="text-[11px] text-neutral-400">0–60s video dialogue & cues</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2 text-neutral-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <div>
                          <strong className="text-white block font-medium">Carousel Architect</strong>
                          <span className="text-[11px] text-neutral-400">5–10 slide layouts & copy</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2 text-neutral-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <div>
                          <strong className="text-white block font-medium">Visual Prompt Engineer</strong>
                          <span className="text-[11px] text-neutral-400">Midjourney & Flux prompts</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2 text-neutral-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <div>
                          <strong className="text-white block font-medium">Tag & Dispatch Agent</strong>
                          <span className="text-[11px] text-neutral-400">Hashtags + Peak scheduling</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Telemetry */}
              <div className="px-6 sm:px-8 py-4 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-indigo-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  Deterministic Swarm Orchestration
                </span>
                <span className="text-neutral-400">1.2s Inter-Agent Latency</span>
              </div>
            </div>

            {/* ── PILLAR 2: Dynamic Competitor & Viral Market Radar ────── */}
            <div 
              className="group rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{
                background: "linear-gradient(180deg, rgba(17, 24, 39, 0.75) 0%, rgba(10, 13, 20, 0.95) 100%)",
                border: "1px solid rgba(34, 211, 238, 0.2)",
              }}
            >
              <div>
                {/* Visual Header with Real Generated Dashboard Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/60">
                  <Image
                    src="/products/ai/pillar-2-competitor-radar.jpg"
                    alt="Ashmyra AI Competitor & Viral Market Radar"
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/40 to-black/30 pointer-events-none" />

                  {/* Header Overlay Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-[11px] font-mono text-cyan-200 backdrop-blur-md shadow-md">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      PILLAR 02 // COMPETITOR RADAR
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-400/40 text-[11px] font-mono text-red-300 backdrop-blur-md">
                      Surge Alert: +312%
                    </span>
                  </div>

                  {/* Radar Status Overlay at Bottom */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/75 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
                      <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                      Live Polling: YouTube • Insta • LI • Facebook
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 hidden sm:inline">24/7 Scraping & API Feed</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-2 text-cyan-400 text-xs font-mono uppercase tracking-wider font-semibold">
                    <Target className="w-4 h-4" />
                    24/7 Competitive Telemetry & News Ingestion
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                    Dynamic Competitor & Market Trend Radar
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    Dynamically add any competitor by channel URL or handle. Ashmyra AI continuously monitors rival posting velocities, engagement spikes, audience sentiment shifts, and breaking industry news across YouTube, Instagram, LinkedIn, and Facebook.
                  </p>

                  {/* Feature Highlights Grid */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Radar Capabilities:</div>
                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-3">
                        <div className="p-1 rounded-md bg-cyan-500/10 text-cyan-400 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <strong className="text-white block font-medium">Dynamic Competitor Ingestion</strong>
                          <span className="text-neutral-400">Add rival accounts on-the-fly; the radar begins scraping views, engagement, and frequency within seconds.</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-3">
                        <div className="p-1 rounded-md bg-cyan-500/10 text-cyan-400 mt-0.5">
                          <TrendingUp className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <strong className="text-white block font-medium">Viral Spike Detection & Anomaly Alerts</strong>
                          <span className="text-neutral-400">Identifies competitor posts surging &gt;300% within 60 minutes so your team can capitalize before the wave fades.</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-3">
                        <div className="p-1 rounded-md bg-cyan-500/10 text-cyan-400 mt-0.5">
                          <Radio className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <strong className="text-white block font-medium">Real-Time News & Content Gap Discovery</strong>
                          <span className="text-neutral-400">Ingests live industry news feeds and maps untapped content gaps where your brand can win the conversation.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Telemetry */}
              <div className="px-6 sm:px-8 py-4 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-cyan-300">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  Real-Time Competitor Ingestion Active
                </span>
                <span className="text-neutral-400">Zero Manual Research</span>
              </div>
            </div>

            {/* ── PILLAR 3: Full Asset Production Studio ─────────────────── */}
            <div 
              className="group rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10"
              style={{
                background: "linear-gradient(180deg, rgba(17, 24, 39, 0.75) 0%, rgba(10, 13, 20, 0.95) 100%)",
                border: "1px solid rgba(192, 132, 252, 0.2)",
              }}
            >
              <div>
                {/* Visual Header with Real Generated Dashboard Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/60">
                  <Image
                    src="/products/ai/pillar-3-asset-studio.jpg"
                    alt="Ashmyra AI End-to-End Asset Production Studio"
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/40 to-black/30 pointer-events-none" />

                  {/* Header Overlay Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-400/40 text-[11px] font-mono text-purple-200 backdrop-blur-md shadow-md">
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                      PILLAR 03 // ASSET STUDIO
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-mono text-white backdrop-blur-md">
                      Not Just Topics • Full Deliverables
                    </span>
                  </div>

                  {/* Studio Asset Badges Overlay at Bottom */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/70 border border-purple-500/40 text-[10px] font-mono text-purple-300 backdrop-blur-md">
                      <Sparkles className="w-2.5 h-2.5 text-purple-400" /> 3x Hook Formulas
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/70 border border-purple-500/40 text-[10px] font-mono text-purple-300 backdrop-blur-md">
                      <Video className="w-2.5 h-2.5 text-purple-400" /> Timed Reel Script
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/70 border border-purple-500/40 text-[10px] font-mono text-purple-300 backdrop-blur-md">
                      <Layers className="w-2.5 h-2.5 text-purple-400" /> Multi-Slide Carousels
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/70 border border-purple-500/40 text-[10px] font-mono text-purple-300 backdrop-blur-md">
                      <Hash className="w-2.5 h-2.5 text-purple-400" /> Algorithmic Hashtags
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-2 text-purple-400 text-xs font-mono uppercase tracking-wider font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Deep End-to-End Asset Generation
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                    Full Asset Production Studio (Not Just Topics!)
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    Never receive vague bullet lists or generic one-sentence ideas. Ashmyra AI produces ready-to-produce master assets complete with tested hooks, shot-by-shot video scripts, visual carousel decks, and Midjourney image generation prompts.
                  </p>

                  {/* Production Package Deliverables */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Packaged Deliverables per Post:</div>
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">1</span>
                          <div>
                            <strong className="text-white block font-medium">Psychological Hooks</strong>
                            <span className="text-[11px] text-neutral-400">Curiosity Gap, Pattern Interrupt & Conflict formulas</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-400/30">3 Variants</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">2</span>
                          <div>
                            <strong className="text-white block font-medium">Complete Reel & Short Scripts</strong>
                            <span className="text-[11px] text-neutral-400">0–60s timed dialogue, visual scene directions & B-roll audio notes</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-400/30">0:30–0:60s</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">3</span>
                          <div>
                            <strong className="text-white block font-medium">Multi-Slide Educational Carousels</strong>
                            <span className="text-[11px] text-neutral-400">5 to 10 slides with headline, copy, and layout placement</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-400/30">LinkedIn & IG</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">4</span>
                          <div>
                            <strong className="text-white block font-medium">Visual AI Prompts & Hashtag Stacks</strong>
                            <span className="text-[11px] text-neutral-400">Copy-ready Midjourney / Flux prompts + peak posting hour</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-400/30">Peak GMT/EST</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Telemetry */}
              <div className="px-6 sm:px-8 py-4 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-purple-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  100% Ready-to-Produce Master Assets
                </span>
                <span className="text-neutral-400">Zero Halved Drafts</span>
              </div>
            </div>

            {/* ── PILLAR 4: Calendar, Approval & Multi-Platform Dispatch ──── */}
            <div 
              className="group rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10"
              style={{
                background: "linear-gradient(180deg, rgba(17, 24, 39, 0.75) 0%, rgba(10, 13, 20, 0.95) 100%)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <div>
                {/* Visual Header with Real Generated Dashboard Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/60">
                  <Image
                    src="/products/ai/pillar-4-calendar-dispatch.jpg"
                    alt="Ashmyra AI Content Calendar, Human Clearance and Telemetry"
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/40 to-black/30 pointer-events-none" />

                  {/* Header Overlay Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-[11px] font-mono text-emerald-200 backdrop-blur-md shadow-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      PILLAR 04 // CALENDAR & DISPATCH
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-400/40 text-[11px] font-mono text-amber-300 backdrop-blur-md">
                      1-Click Human Clearance Gate
                    </span>
                  </div>

                  {/* Live Metric Overlay at Bottom */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/75 border border-emerald-500/40 text-[11px] font-mono text-emerald-300 backdrop-blur-md">
                      <BarChart3 className="w-3 h-3 text-emerald-400" />
                      1.4M+ Impressions Monitored
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 hidden sm:inline">99.8% On-Time API Lock</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold">
                    <Calendar className="w-4 h-4" />
                    Automated Orchestration with Complete Governance
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                    Content Calendar & Human-in-the-Loop Dispatch
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    Maintain a synchronized 30-day cross-platform editorial calendar. Choose between fully autonomous posting or enforced 1-click human clearance via Web, Slack, or WhatsApp before any post goes live. Continuously monitors impressions and subscriber growth.
                  </p>

                  {/* Governance & Growth Highlights */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Publishing & Growth Control:</div>
                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-3">
                        <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5">
                          <Calendar className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <strong className="text-white block font-medium">Full Editorial Calendar Generation</strong>
                          <span className="text-neutral-400">Maps out weekly and monthly release dates across YouTube, Instagram, LinkedIn, and Facebook at peak audience hours.</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-3">
                        <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5">
                          <ShieldCheck className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <strong className="text-white block font-medium">1-Click Human Approval or Autonomous Mode</strong>
                          <span className="text-neutral-400">Review full creative packages with one tap. Zero unauthorized posts ever publish without explicit clearance.</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-3">
                        <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5">
                          <BarChart3 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <strong className="text-white block font-medium">Multi-Platform Growth & Telemetry Loops</strong>
                          <span className="text-neutral-400">Monitors views, impressions, retention, and subscriber surge curves, feeding insights back into the next calendar cycle.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Telemetry */}
              <div className="px-6 sm:px-8 py-4 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-emerald-300">
                <span className="flex items-center gap-1.5">
                  <Send className="w-4 h-4 text-emerald-400" />
                  YouTube • Meta • LinkedIn API Dispatched
                </span>
                <span className="text-neutral-400">Closed-Loop Feedback</span>
              </div>
            </div>

          </div>
        </div>

        {/* ── 05. 5-Stage Execution Pipeline ───────────────────────────── */}
        <div className="mb-24 rounded-3xl p-8 sm:p-12 bg-white/[0.02] border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-2 font-semibold">
              Autonomous Lifecycle
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              From Real-Time Market Radar to Verified Production Dispatch
            </h2>
            <p className="text-sm text-neutral-300 mt-2">
              Every workflow step is autonomously coordinated, schema-verified, and recorded with full telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {product.workflowSteps.map((s, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-black/40 border border-white/[0.08] flex flex-col justify-between hover:border-indigo-500/40 transition-colors"
              >
                <div>
                  <span className="text-xs font-mono text-indigo-400 font-bold block mb-2">
                    STEP {s.step}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">{s.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Guard
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 06. Key Capabilities Checklist ───────────────────────────── */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-2 font-semibold">
              Enterprise Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Production Capabilities Built for High-Growth Brands
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.keyCapabilities.map((cap, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex items-start gap-3.5 hover:bg-white/[0.04] transition-colors"
              >
                <div className="p-1 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5 flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm text-neutral-300 leading-snug">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 07. Final Bottom CTA ────────────────────────────────────── */}
        <div
          className="rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(30, 27, 75, 0.4))",
            border: "1px solid rgba(99, 102, 241, 0.3)",
          }}
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-300 block mb-3 font-semibold">
              Deploy Ashmyra AI Social Media Swarm
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to replace agency overhead with an autonomous 7–8 agent team?
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed">
              Join high-growth brands managing YouTube, Instagram, LinkedIn, and Facebook at scale with real-time competitor intelligence and 1-click publishing governance.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact?intent=ai-demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
              >
                Schedule an Engineering Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold text-sm border border-white/10 transition-colors"
              >
                Contact Ashmyra Team
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
