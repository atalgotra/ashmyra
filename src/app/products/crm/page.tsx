import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductWowPreview } from "@/components/product-wow-preview";
import { FreelancerTrustBanner } from "@/components/freelancer-trust-banner";
import { WorkloadHeatGraph } from "@/components/workload-heat-graph";
import { 
  Kanban, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Activity, 
  Users, 
  Sliders, 
  DollarSign, 
  Zap, 
  Clock, 
  Layers, 
  ShieldCheck, 
  X, 
  Check, 
  Flame, 
  Cpu, 
  Workflow, 
  GitBranch, 
  TrendingUp, 
  Code,
  ShieldAlert,
  FolderGit2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra Work & Project Intelligence | Better Than Jira for High-Velocity Teams",
  description:
    "Built by founders and developers tired of Jira's tedious story and epic overhead. Clean Workspace → Project → Task hierarchy, real-time AI employee workload heat graph, 100% no-code frontend workflows, no maximum user limit*, and 70% lower cost + one-time lifetime plan.",
  keywords: [
    "Better than Jira",
    "Jira Alternative",
    "Ashmyra Project Management",
    "AI Workload Heat Graph",
    "Overburdened Underburdened Heatmap",
    "Workspace Project Task Hierarchy",
    "No Sprint Bloat",
    "No Maximum User Limit",
    "100% No-Code Workflow Customization",
    "70% Cheaper than Jira",
    "One-Time Lifetime Project Management Plan",
  ],
  openGraph: {
    title: "Ashmyra Work & Project Intelligence | Better Than Jira",
    description:
      "Zero tedious Jira stories or sprint ceremonies. Clean 3-tier hierarchy, real-time AI employee workload heatmaps, unlimited users*, and 70% lower cost + lifetime license.",
    url: "https://ashmyra.com/products/crm",
    images: [{ url: "/wow/wow3-project-management.png", width: 1200, height: 675, alt: "Ashmyra Work & Project Intelligence Preview" }],
  },
  alternates: {
    canonical: "https://ashmyra.com/products/crm",
  },
};

export default function AshmyraCrmPage() {
  const product = PRODUCTS.find((p) => p.id === "crm")!;

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
            background: "radial-gradient(ellipse at center, rgba(244, 63, 94, 0.22) 0%, rgba(236, 72, 153, 0.14) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div
          className="absolute top-28 left-1/2 -translate-x-1/2 w-[480px] h-[260px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 01. Hero Header (Wider Width & Exactly 2 Clean Lines) ───── */}
        <div className="relative text-center max-w-6xl mx-auto mb-12">

          {/* Status & Real-Time Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-xs text-rose-300 font-mono backdrop-blur-sm">
              <Kanban className="w-3.5 h-3.5 text-rose-400" />
              <span>Better Than Jira: Zero Story/Epic Bloat</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300 font-mono backdrop-blur-sm shadow-sm">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-white font-semibold">AI Workload Heat Graph:</span>
              <span>Overburden Telemetry</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/25 text-xs text-fuchsia-300 font-mono backdrop-blur-sm">
              <Users className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>No Maximum User Limit*</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs text-amber-300 font-mono backdrop-blur-sm">
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              <span>100% No-Code Frontend Administration</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-neutral-300 font-mono backdrop-blur-sm">
              <DollarSign className="w-3.5 h-3.5 text-rose-400" />
              <span>70% Lower Cost + One-Time Lifetime Plan</span>
            </div>
          </div>

          {/* Headline - Exactly Two Clean Lines */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] font-bold tracking-tight text-white leading-[1.12] font-sans">
            <span className="block">Better Than Jira. Built for High-Velocity Teams,</span>
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-200 animate-[shimmer_6s_linear_infinite] bg-[length:200%_auto]">
              Zero-Bloat Work &amp; Project Intelligence.
            </span>
          </h1>

          {/* Adjusted Paragraph Text */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Conceived by a founder and developer who experienced the exhausting grind of adding Jira stories, epics, and sprint ceremonies. We put ourselves in the shoes of the builder: intuitive <strong className="text-white font-semibold">Workspace → Project → Task</strong> clarity, real-time <strong className="text-white font-semibold">AI Workload Heat Graphs</strong> for management to balance overburden vs underburden, <strong className="text-white font-semibold">100% no-code frontend customization</strong>, and <strong className="text-white font-semibold">no maximum user limit*</strong>—all at <strong className="text-white font-semibold">70% lower cost</strong> with an optional One-Time Lifetime Plan.
          </p>

          {/* Asterisk Footnote */}
          <div className="mt-4 text-xs font-mono text-neutral-400 max-w-2xl mx-auto">
            <span className="text-rose-400 font-bold">*</span> <strong className="text-neutral-300">No maximum user limit:</strong> Add unlimited engineers, designers, operations staff, and external client guests without arbitrary per-seat billing penalties.
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=crm-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 hover:from-rose-500 hover:to-pink-500 text-white font-semibold text-sm shadow-xl shadow-rose-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <span>Request Project Engine Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact?intent=lifetime-crm"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm border border-white/10 hover:border-rose-500/30 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Explore One-Time Lifetime Plan (70% Less Cost)</span>
            </Link>
          </div>
        </div>

        {/* ── 02. WOW Visual Showcase ─────────────────────────────────── */}
        <ProductWowPreview
          imageSrc="/wow/wow3-project-management.png"
          imageAlt="Ashmyra Work & AI Project Management Platform"
          productName="Ashmyra Work & Project Intelligence"
          productTagline="Frictionless Workspace → Project → Task flow with real-time employee workload capacity heatmaps."
          accentColor="#f43f5e"
          badgeText="Zero Sprint Bloat • AI Workload Heat Graph"
          telemetry={[
            { label: "Workload Heat Graph", value: "Real-Time", detail: "Live overburdened vs underburdened detection" },
            { label: "Hierarchy Depth", value: "3 Tiers Clean", detail: "Workspace → Project → Task (No Jira epics/sprints)" },
            { label: "Cost vs Jira/Asana", value: "70% Less", detail: "Plus One-Time Lifetime Plan option" },
            { label: "Max User Limit", value: "Unlimited*", detail: "Zero arbitrary per-user seat tax gates" },
          ]}
          capabilities={[
            {
              title: "Developer-First Simplicity (Zero Epic/Sprint Overhead)",
              description: "Eliminate tedious Jira story point estimation, epics, and sprint planning overhead in favor of rapid, frictionless delivery. Ship code instead of filing tickets.",
            },
            {
              title: "Real-Time AI Employee Workload Heat Graph",
              description: "Live management telemetry continuously monitors active task weights, deadlines, and bandwidth to instantly highlight who is overburdened (burnout risk) vs underburdened (available bandwidth).",
            },
            {
              title: "100% No-Code Frontend Administration",
              description: "Modify workflow steps, process stages, task types, tags, and automation rules directly in the frontend UI without touching code or waiting on engineering cycles.",
            },
          ]}
        />

        {/* ── 03. Live Interactive AI Workload Heat Graph Section ─────── */}
        <div className="my-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-rose-400 block mb-2 font-semibold">
              Live Interactive Management Dashboard
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Real-Time AI Employee Workload Heat Graph
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
              In Jira, team bandwidth remains trapped in abstract story points until retrospectives. Ashmyra gives management a live visual heat graph to see who is drowning in work and who is ready for new challenges.
            </p>
          </div>

          <WorkloadHeatGraph />
        </div>

        {/* ── 04. Why We Replaced Jira: Built for the Builders ─────────── */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08]">
          <div className="max-w-4xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-mono text-rose-300 mb-6">
              <Code className="w-3.5 h-3.5 text-rose-400" />
              <span>Founder &amp; Developer Pain Point Solved</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              From the Shoes of the Employee:
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-200">
                Why Jira Stories and Sprint Rituals Are Broken
              </span>
            </h2>

            <div className="mt-6 p-6 rounded-2xl bg-rose-950/20 border border-rose-500/25 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p className="italic text-rose-100">
                &ldquo;When I was building software as an engineer and tech lead, my biggest productivity killer was never the complexity of our codebase—it was Jira. Filing a simple bug or feature required navigating 15 dropdown fields, tagging epics, estimating story points in poker ceremonies, and waiting two weeks for a sprint boundary to close. As a founder and inventor, I designed Ashmyra by stepping directly into the shoes of the builder: remove all the bureaucratic bloat, keep the hierarchy dead simple, and give leadership real-time clarity.&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-rose-500/20 flex items-center justify-between text-xs font-mono text-rose-300">
                <span>— Ashmyra Engineering Philosophy</span>
                <span>Zero Story Overhead • 100% Delivery Velocity</span>
              </div>
            </div>

            {/* Side-by-Side Hierarchy Comparison */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Jira Clutter */}
              <div className="p-6 rounded-2xl bg-red-950/10 border border-red-500/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase mb-3">
                    <X className="w-4 h-4" />
                    <span>The Jira Bureaucracy (11 Complex Steps)</span>
                  </div>
                  <p className="text-xs text-neutral-400 mb-4">
                    Rigid ceremony that burns hours of developer focus and requires full-time agile coaches:
                  </p>
                  <div className="space-y-2 text-xs font-mono text-neutral-400">
                    <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] line-through text-neutral-500">
                      1. Organization &rarr; Atlassian Cloud Instance
                    </div>
                    <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] line-through text-neutral-500">
                      2. Software Project &rarr; Scrum/Kanban Board Scheme
                    </div>
                    <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] line-through text-neutral-500">
                      3. Epics &rarr; Sprints &rarr; User Stories (15 fields)
                    </div>
                    <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] line-through text-neutral-500">
                      4. Story Point Poker &rarr; Sub-tasks &rarr; Issue Links
                    </div>
                    <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] line-through text-neutral-500">
                      5. Burndown Velocity Chart Ceremonies
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-[11px] font-mono text-red-400/80 bg-red-500/10 p-2.5 rounded-lg border border-red-500/20">
                  Result: Engineers spend up to 20% of their weekly time maintaining tickets instead of writing code.
                </div>
              </div>

              {/* Ashmyra Elegance */}
              <div className="p-6 rounded-2xl bg-emerald-950/15 border border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase mb-3">
                    <Check className="w-4 h-4" />
                    <span>The Ashmyra Paradigm (Clean 3-Tier Hierarchy)</span>
                  </div>
                  <p className="text-xs text-neutral-300 mb-4">
                    Dead simple structure that anyone can understand and manage in seconds:
                  </p>
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200">
                      <strong className="text-white block font-sans text-sm">Tier 1: Workspace</strong>
                      <span>Company or Client Hub with unlimited team members* and guest reviewers.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200">
                      <strong className="text-white block font-sans text-sm">Tier 2: Project</strong>
                      <span>High-level deliverable or product roadmap milestone with live velocity.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200">
                      <strong className="text-white block font-sans text-sm">Tier 3: Task</strong>
                      <span>Crisp execution ticket with markdown notes, code snippets, checklists, and status.</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-[11px] font-mono text-emerald-300 bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
                  Result: Instant task creation in 5 seconds. High team momentum with zero administrative fatigue.
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ── 05. 100% No-Code Frontend Administration ────────────────── */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2 font-semibold">
              Complete Visual Freedom
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              100% No-Code Frontend Administration
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
              In Jira, configuring custom fields, issue types, or workflow schemes requires administrative privileges, complex XML/JSON schemes, or paid third-party plugins. In Ashmyra, everything is configurable right from the UI without code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-amber-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-4 font-mono font-bold text-sm">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Custom Workflow Steps &amp; Stages
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Drag, reorder, and rename project pipeline stages directly in the frontend UI. Create custom approval gates, staging checklists, and deployment handoffs without contacting IT.
                </p>
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] text-[11px] font-mono text-neutral-300 space-y-1">
                  <div className="text-amber-400 font-semibold">• Backlog &rarr; In Dev &rarr; QA Gate &rarr; Production Edge</div>
                  <div className="text-neutral-500 text-[10px]">Zero code changes required</div>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-xs font-mono text-amber-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                Live Frontend Configurator
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-rose-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 mb-4 font-mono font-bold text-sm">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Dynamic Task Types &amp; Fields
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Add custom task types (Features, Hotfixes, Security Audits, Design Tokens, Client Requests) with tailored badge colors, icon sets, priority tiers, and custom metadata attributes.
                </p>
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] text-[11px] font-mono text-neutral-300 space-y-1">
                  <div className="text-rose-400 font-semibold">• Custom Task Schema: 1-Click Creation</div>
                  <div className="text-neutral-500 text-[10px]">Visual schema builder in settings</div>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-xs font-mono text-rose-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
                Instant UI Application
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-4 font-mono font-bold text-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Automated Rules &amp; Heat Triggering
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Set visual triggers: when a task is moved to &apos;Code Review&apos;, auto-ping team leads; when a developer receives more than 5 high-priority tickets, auto-flag in the Workload Heat Graph.
                </p>
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] text-[11px] font-mono text-neutral-300 space-y-1">
                  <div className="text-emerald-400 font-semibold">• Overburden Trigger: Auto Heat Spike Alert</div>
                  <div className="text-neutral-500 text-[10px]">Real-time telemetry event bus</div>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-xs font-mono text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Autonomous Event Sync
              </div>
            </div>

          </div>
        </div>

        {/* ── 06. 6 Core Architectural Pillars ────────────────────────── */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-rose-400 block mb-2 font-semibold">
              The 6 Core Architectural Pillars
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Engineered for Builder Velocity &amp; Management Clarity
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
              Every pillar is designed around zero-friction execution, honest capacity telemetry, and unbeatable cost efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Pillar 1 */}
            <div className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-rose-500/40 transition-all flex flex-col justify-between hover:bg-white/[0.03]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 mb-4 font-mono font-bold text-sm">
                  01
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Founder-Born Developer Relief
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Eliminates the tedious chore of writing Jira stories, grooming sprint backlogs, and estimating story points. Direct task creation with clean markdown, code block embeds, and instant assignees.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-xs font-mono text-rose-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
                Zero Sprint Ceremonies
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-rose-500/40 transition-all flex flex-col justify-between hover:bg-white/[0.03]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 mb-4 font-mono font-bold text-sm">
                  02
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  AI Real-Time Workload Heat Graph
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Instant visual radar for management displaying who is overburdened (overloaded, deadline collisions, burnout risk) vs underburdened (available bandwidth). Rebalance work with 1-click AI suggestions.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-xs font-mono text-emerald-300">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                Burnout Early Warning
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-rose-500/40 transition-all flex flex-col justify-between hover:bg-white/[0.03]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 mb-4 font-mono font-bold text-sm">
                  03
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  No Maximum User Limit*
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Stop dreading per-seat subscription invoices. Add your entire company—engineering, design, product, operations, and external client collaborators—with zero artificial seat tier caps.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-xs font-mono text-fuchsia-300">
                <Users className="w-3.5 h-3.5 text-fuchsia-400" />
                Unlimited Collaborators*
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-rose-500/40 transition-all flex flex-col justify-between hover:bg-white/[0.03]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 mb-4 font-mono font-bold text-sm">
                  04
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  100% No-Code Frontend Administration
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Configure every workflow step, pipeline stage, task category, custom field, and notification trigger directly from the user interface. No code modifications or IT tickets required.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-xs font-mono text-amber-300">
                <Sliders className="w-3.5 h-3.5 text-amber-400" />
                Visual UI Customizer
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-rose-500/40 transition-all flex flex-col justify-between hover:bg-white/[0.03]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 mb-4 font-mono font-bold text-sm">
                  05
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Automated Dependency &amp; Blocker Routing
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  When a foundational task is stuck, downstream tasks automatically flag blocked dependencies and elevate alerts to project leads, preventing hidden project schedule slip.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-xs font-mono text-sky-300">
                <GitBranch className="w-3.5 h-3.5 text-sky-400" />
                Critical Path Radar
              </div>
            </div>

            {/* Pillar 6 */}
            <div className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-rose-500/40 transition-all flex flex-col justify-between hover:bg-white/[0.03]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 mb-4 font-mono font-bold text-sm">
                  06
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  70% Lower Cost + One-Time Lifetime Plan
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Slash software spend by 70% compared to Jira, Asana, and Monday. Take advantage of an optional One-Time Lifetime Plan to own your workspace forever with zero recurring monthly bills.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-xs font-mono text-rose-300">
                <DollarSign className="w-3.5 h-3.5 text-rose-400" />
                One-Time Ownership Available
              </div>
            </div>

          </div>
        </div>

        {/* ── 07. World-Class Head-to-Head Comparison Table ───────────── */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-rose-400 block mb-2 font-semibold">
              The Empirical Difference
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Ashmyra vs Jira vs Asana vs Monday.com
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
              Compare feature flexibility, real-time workload heat telemetry, no-code autonomy, and transparent pricing.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/[0.08] bg-[#08090d] shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                  <th className="py-5 px-6 text-xs font-mono uppercase text-neutral-400 tracking-wider">
                    Feature &amp; Capability
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-rose-400 font-mono bg-rose-950/20 border-x border-rose-500/30">
                    Ashmyra Work Intelligence
                  </th>
                  <th className="py-5 px-6 text-xs font-mono uppercase text-neutral-400 tracking-wider">
                    Atlassian Jira
                  </th>
                  <th className="py-5 px-6 text-xs font-mono uppercase text-neutral-400 tracking-wider">
                    Asana
                  </th>
                  <th className="py-5 px-6 text-xs font-mono uppercase text-neutral-400 tracking-wider">
                    Monday.com / Linear
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-xs sm:text-sm">
                
                {/* Row 1: Hierarchy */}
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-white font-medium">
                    <div>Structure &amp; Usability</div>
                    <div className="text-xs text-neutral-400">Task breakdown depth</div>
                  </td>
                  <td className="py-4 px-6 font-mono text-rose-300 font-bold bg-rose-950/15 border-x border-rose-500/20">
                    <div className="flex items-center gap-1.5 text-white">
                      <Check className="w-4 h-4 text-rose-400" />
                      <span>Workspace &rarr; Project &rarr; Task</span>
                    </div>
                    <div className="text-[11px] text-rose-300/80 font-normal mt-0.5">Zero epics or story points bloat</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div>Epics, Sprints, Stories, Sub-tasks</div>
                    <div className="text-[11px] text-red-400">Heavy administrative ceremony</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div>Portfolios, Projects, Sections, Tasks</div>
                    <div className="text-[11px] text-neutral-500">Rigid nested hierarchy</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div>Boards, Groups, Pulse Items</div>
                    <div className="text-[11px] text-neutral-500">Generic spreadsheet layout</div>
                  </td>
                </tr>

                {/* Row 2: User Limit */}
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-white font-medium">
                    <div>User Seat Limit</div>
                    <div className="text-xs text-neutral-400">Team scaling policy</div>
                  </td>
                  <td className="py-4 px-6 font-mono text-rose-300 font-bold bg-rose-950/15 border-x border-rose-500/20">
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>No Maximum User Limit*</span>
                    </div>
                    <div className="text-[11px] text-neutral-400 font-normal mt-0.5">Unlimited team seats &amp; guests</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div>Strict Per-User Invoicing</div>
                    <div className="text-[11px] text-neutral-500">$8.15 &ndash; $16.00/user/month</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div>Aggressive Per-User Seat Caps</div>
                    <div className="text-[11px] text-neutral-500">$13.49 &ndash; $30.49/user/month</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div>Minimum 3&ndash;5 Seat Blocks</div>
                    <div className="text-[11px] text-neutral-500">$12.00 &ndash; $24.00/user/month</div>
                  </td>
                </tr>

                {/* Row 3: Workload Heat Graph */}
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-white font-medium">
                    <div>Real-Time Workload Heat Graph</div>
                    <div className="text-xs text-neutral-400">Overburden &amp; underburden telemetry</div>
                  </td>
                  <td className="py-4 px-6 font-mono text-rose-300 font-bold bg-rose-950/15 border-x border-rose-500/20">
                    <div className="flex items-center gap-1.5 text-white">
                      <Flame className="w-4 h-4 text-rose-400" />
                      <span>Native AI Heat Graph</span>
                    </div>
                    <div className="text-[11px] text-rose-300 font-normal mt-0.5">Real-time burnout detection &amp; 1-click rebalance</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <X className="w-3.5 h-3.5 text-red-400" />
                      <span>Requires Jira Plans ($$$)</span>
                    </div>
                    <div className="text-[11px] text-neutral-500">Relies on manual story estimation</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <X className="w-3.5 h-3.5 text-amber-400" />
                      <span>Enterprise Tier Only</span>
                    </div>
                    <div className="text-[11px] text-neutral-500">Locked behind $30+/user pricing</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <X className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Basic static capacity widget</span>
                    </div>
                    <div className="text-[11px] text-neutral-500">No automated AI burnout rebalance</div>
                  </td>
                </tr>

                {/* Row 4: No-Code Frontend Setup */}
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-white font-medium">
                    <div>100% No-Code Frontend Administration</div>
                    <div className="text-xs text-neutral-400">Steps, stages, task types customization</div>
                  </td>
                  <td className="py-4 px-6 font-mono text-rose-300 font-bold bg-rose-950/15 border-x border-rose-500/20">
                    <div className="flex items-center gap-1.5 text-amber-300">
                      <Check className="w-4 h-4 text-amber-400" />
                      <span>100% Visual UI Config</span>
                    </div>
                    <div className="text-[11px] text-neutral-400 font-normal mt-0.5">Zero code or DevOps intervention</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div className="text-red-400">Complex Admin Schemes</div>
                    <div className="text-[11px] text-neutral-500">Requires ScriptRunner / XML schemes</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div>Custom fields only</div>
                    <div className="text-[11px] text-neutral-500">Workflow transitions restricted</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div>Board column limits</div>
                    <div className="text-[11px] text-neutral-500">Template based lock-in</div>
                  </td>
                </tr>

                {/* Row 5: Story Creation Friction */}
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-white font-medium">
                    <div>Task Entry Speed</div>
                    <div className="text-xs text-neutral-400">Time to log and execute an item</div>
                  </td>
                  <td className="py-4 px-6 font-mono text-rose-300 font-bold bg-rose-950/15 border-x border-rose-500/20">
                    <div className="text-white">&lt; 5 Seconds</div>
                    <div className="text-[11px] text-emerald-400 font-normal mt-0.5">Clean markdown, code snippets, instant done</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div className="text-red-400">3&ndash;5 Minutes per story</div>
                    <div className="text-[11px] text-neutral-500">15 required fields, epics, sprint tags</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div>1&ndash;2 Minutes</div>
                    <div className="text-[11px] text-neutral-500">Form modal clutter</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div>30&ndash;60 Seconds</div>
                    <div className="text-[11px] text-neutral-500">Manual spreadsheet cell filling</div>
                  </td>
                </tr>

                {/* Row 6: Pricing Model */}
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-white font-medium">
                    <div>Pricing Structure</div>
                    <div className="text-xs text-neutral-400">Lifetime vs recurring SaaS rent</div>
                  </td>
                  <td className="py-4 px-6 font-mono text-rose-300 font-bold bg-rose-950/15 border-x border-rose-500/20">
                    <div className="text-emerald-400">70% Less Cost + Lifetime Plan</div>
                    <div className="text-[11px] text-rose-300/90 font-normal mt-0.5">One-time buyout or disruptive cloud tier</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div>Per-User Monthly Rent</div>
                    <div className="text-[11px] text-neutral-500">Mandatory recurring Atlassian bills</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div>Annual Locked Contract</div>
                    <div className="text-[11px] text-neutral-500">Strict minimum commit tiers</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div>Seat bundle lock-in</div>
                    <div className="text-[11px] text-neutral-500">Prices escalate on add-ons</div>
                  </td>
                </tr>

                {/* Row 7: Annual TCO 50 Users */}
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-white font-medium">
                    <div>Annual Cost (50-User Team)</div>
                    <div className="text-xs text-neutral-400">Total cost of ownership</div>
                  </td>
                  <td className="py-4 px-6 font-mono text-rose-300 font-bold bg-rose-950/15 border-x border-rose-500/20">
                    <div className="text-lg text-emerald-400">~$2,880/yr or Lifetime</div>
                    <div className="text-[11px] text-rose-200 font-normal mt-0.5">Save $6,700+ to $15,000+ annually</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400 font-mono">
                    <div className="text-red-400">~$9,600 &ndash; $14,000/yr</div>
                    <div className="text-[10px] text-neutral-500">Excluding Jira Plans add-ons</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400 font-mono">
                    <div className="text-red-400">~$18,294/yr</div>
                    <div className="text-[10px] text-neutral-500">Asana Business plan</div>
                  </td>
                  <td className="py-4 px-6 text-neutral-400 font-mono">
                    <div className="text-red-400">~$14,400/yr</div>
                    <div className="text-[10px] text-neutral-500">Monday Pro tier</div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="mt-4 text-xs font-mono text-neutral-500 text-center">
            *No maximum user limit: All Ashmyra workspaces support unlimited team members, guest reviewers, and stakeholders without per-seat penalty tiers.
          </div>
        </div>

        {/* ── 08. Cost Advantage & Lifetime Plan Highlight Card ───────── */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-rose-950/20 via-pink-950/15 to-neutral-900/30 border border-rose-500/30 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-xs font-mono text-rose-300 mb-4">
                <DollarSign className="w-3.5 h-3.5 text-rose-400" />
                <span>70% Cost Advantage &amp; Perpetual Ownership</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Stop Paying Perpetual SaaS Rent for Project Management
              </h3>
              <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                Why pay thousands of dollars every month to Atlassian or Asana just to create tasks? Ashmyra gives you the exact same high-velocity project management at <strong className="text-white font-semibold">70% less cost</strong>, plus an optional <strong className="text-white font-semibold">One-Time Lifetime Plan</strong> where you own the workspace forever with zero recurring invoices.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                  <div className="text-xs font-mono text-rose-400 font-bold uppercase mb-1">
                    Option A: Cloud Subscription
                  </div>
                  <div className="text-xl font-bold text-white">70% Less than Jira</div>
                  <p className="text-xs text-neutral-400 mt-1">
                    Unlimited team members* with fully managed cloud, AI workload heat telemetry, and weekly updates.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase mb-1">
                    Option B: One-Time Lifetime Plan
                  </div>
                  <div className="text-xl font-bold text-white">Pay Once &bull; Own Forever</div>
                  <p className="text-xs text-neutral-400 mt-1">
                    Private cloud deployment, custom database connection, unlimited seats*, and zero monthly rent.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-black/50 border border-rose-500/25 text-center min-w-[280px]">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                Typical Annual Savings
              </span>
              <div className="text-4xl sm:text-5xl font-black text-rose-400 tracking-tight my-2">
                70% OFF
              </div>
              <span className="text-xs font-mono text-emerald-400 block mb-6">
                Save $6,000 to $15,000 / year
              </span>
              <Link
                href="/contact?intent=lifetime-crm"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs font-mono shadow-lg shadow-rose-600/30 transition-all hover:scale-105"
              >
                <span>Inquire Lifetime Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── 09. Freelancer.com 100+ Delivery Proof Banner ─────────────── */}
        <div className="my-16">
          <FreelancerTrustBanner category="Project Management &amp; Agile Operating Systems" />
        </div>

        {/* ── 10. Bottom Call to Action ───────────────────────────────── */}
        <div className="text-center p-10 sm:p-14 rounded-3xl bg-rose-950/20 border border-rose-500/30">
          <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            Ready to ditch Jira&apos;s story point ceremonies?
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Switch to Ashmyra Work &amp; Project Intelligence. Experience clean Workspace &rarr; Project &rarr; Task flow, live AI employee workload heat graphs, and no maximum user limit* at 70% less cost.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=crm-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-semibold text-sm shadow-xl shadow-rose-600/30 transition-all hover:scale-105"
            >
              <span>Schedule Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact?intent=lifetime-crm"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm border border-white/10 hover:border-rose-500/30 transition-all"
            >
              <span>Explore Lifetime License</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
