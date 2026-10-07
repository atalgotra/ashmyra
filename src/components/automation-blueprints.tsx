"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Database,
  BarChart3,
  Users,
  Activity,
  Layers,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Bot,
  Mail,
  RefreshCw,
  GitBranch,
} from "lucide-react";

interface Blueprint {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  badge: string;
  description: string;
  steps: {
    label: string;
    type: "trigger" | "ai" | "decision" | "action" | "verify";
    detail: string;
  }[];
  impact: string;
}

const BLUEPRINTS: Blueprint[] = [
  {
    id: "sales",
    name: "Sales & Inbound Leads",
    icon: TrendingUp,
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    badge: "Revenue Ops",
    description: "Qualify inbound requests in seconds, score ICP fit, route to the right account executive, and trigger customized outreach.",
    steps: [
      { label: "Website Form / Demo Request", type: "trigger", detail: "Webhook captures inbound lead metadata" },
      { label: "AI ICP & Firmographic Score", type: "ai", detail: "Enriches company size, tech stack, and intent" },
      { label: "Intent > 80 Condition Split", type: "decision", detail: "High-value enterprise vs self-serve tier" },
      { label: "CRM Sync & Rep Calendar Booked", type: "action", detail: "Instantly reserves slot on executive calendar" },
      { label: "Slack / Email Alert Dispatched", type: "verify", detail: "Rep briefed with AI talking points in <45s" },
    ],
    impact: "Lead response time drops from 4 hours to 45 seconds",
  },
  {
    id: "data",
    name: "Data Operations & Hygiene",
    icon: Database,
    color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    badge: "Data Lake",
    description: "Continuous ingestion, schema normalization, multi-layer deduplication, and automated record enrichment.",
    steps: [
      { label: "Scheduled DB Sync & Webhooks", type: "trigger", detail: "Runs delta checks every 15 minutes" },
      { label: "Data Quality & Anomaly Radar", type: "ai", detail: "Detects corrupted schemas and invalid phone/emails" },
      { label: "Fuzzy Entity Match & Dedupe", type: "decision", detail: "Matches against Master Golden Record pool" },
      { label: "Schema Standardized & Upserted", type: "action", detail: "Clean records committed to analytical warehouse" },
      { label: "Hygiene Report Logged", type: "verify", detail: "0 duplicate entities across 500k+ records" },
    ],
    impact: "Over 98% data hygiene maintained autonomously",
  },
  {
    id: "finance",
    name: "Finance & Accounts Payable",
    icon: BarChart3,
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    badge: "FinOps",
    description: "End-to-end invoice ingestion, optical character recognition, GST/vendor validation, and dual-threshold approval routing.",
    steps: [
      { label: "Vendor PDF Email Ingestion", type: "trigger", detail: "Mail listener extracts multi-page PDF attachments" },
      { label: "OCR & Structured Extraction", type: "ai", detail: "Pulls line items, tax IDs, dates and net totals" },
      { label: "Purchase Order & 3-Way Match", type: "decision", detail: "Matches line items against ERP purchase order" },
      { label: "Finance Approval Gate Triggered", type: "action", detail: "Auto-approves <₹50k; routes to CFO if higher" },
      { label: "Payment Queued & Vendor Notified", type: "verify", detail: "ERP payable created with audit hash" },
    ],
    impact: "Invoice processing cycles cut from 8 days to 4 minutes",
  },
  {
    id: "hr",
    name: "HR & People Operations",
    icon: Users,
    color: "text-sky-400 border-sky-500/30 bg-sky-500/10",
    badge: "PeopleOps",
    description: "Multi-channel candidate intake, resume scoring, offer letter generation, and automated cross-department IT/Finance provisioning.",
    steps: [
      { label: "Candidate Applies via Job Portal", type: "trigger", detail: "Intake from LinkedIn, careers page or referral" },
      { label: "Resume Parsing & JD Semantic Fit", type: "ai", detail: "Scores experience, skills, and past tenure" },
      { label: "Interview Screening Qualification", type: "decision", detail: "Auto-routes qualified talent to recruiter review" },
      { label: "Cross-Dept Onboarding Triggered", type: "action", detail: "IT provisions laptop, Finance sets up payroll" },
      { label: "Welcome Portal Access Granted", type: "verify", detail: "Candidate receives personalized orientation plan" },
    ],
    impact: "100% automated handoffs across HR, IT, and Finance",
  },
  {
    id: "operations",
    name: "Operations & Workflows",
    icon: Activity,
    color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    badge: "Internal Ops",
    description: "Coordinate complex cross-system tasks, track task handoffs, enforce SLAs, and auto-escalate bottlenecks.",
    steps: [
      { label: "Client Milestone Completed", type: "trigger", detail: "Event pushed from Jira or internal issue tracker" },
      { label: "Deliverable QA & Checksum Verify", type: "ai", detail: "Checks that all acceptance criteria are met" },
      { label: "Sign-Off Threshold Evaluated", type: "decision", detail: "Branch on project tier and contract clauses" },
      { label: "Next Sprint Tasks Dispatched", type: "action", detail: "Assigns subordinate tickets and dependencies" },
      { label: "Executive Dashboard Updated", type: "verify", detail: "Zero manual status update pings required" },
    ],
    impact: "Eliminates 12+ weekly hours of manual status sync meetings",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: Layers,
    color: "text-orange-400 border-orange-500/30 bg-orange-500/10",
    badge: "Supply Chain",
    description: "Real-time carrier event tracking, customs document verification, delayed transit alerts, and automated customer notifications.",
    steps: [
      { label: "Carrier Telemetry / GPS Ping", type: "trigger", detail: "Ingests tracking updates via logistics API" },
      { label: "ETA Prediction & Weather Analysis", type: "ai", detail: "Detects probable delays against route hazards" },
      { label: "Delay Window > 6h Branch", type: "decision", detail: "Reroute shipment vs alert distribution hub" },
      { label: "Warehouse Dock Slot Rescheduled", type: "action", detail: "Auto-adjusts intake staff and unloading bay" },
      { label: "Customer SMS & Tracking Updated", type: "verify", detail: "Proactive status notification delivered" },
    ],
    impact: "Prevents warehouse dock congestion and delivery disputes",
  },
  {
    id: "support",
    name: "Customer Support & SLA",
    icon: ShieldCheck,
    color: "text-teal-400 border-teal-500/30 bg-teal-500/10",
    badge: "Customer Care",
    description: "Multilingual ticket classification, sentiment scoring, auto-remediation of common issues, and VIP escalation.",
    steps: [
      { label: "New Support Ticket or Chat Message", type: "trigger", detail: "Ingests Zendesk, email, or WhatsApp message" },
      { label: "AI Sentiment & Intent Classification", type: "ai", detail: "Categorizes urgency, sentiment, and core product" },
      { label: "SLA Tier & Account Value Check", type: "decision", detail: "VIP customer branch vs Tier-1 knowledge base" },
      { label: "Instant AI Resolution or Escalation", type: "action", detail: "Drafts proven response or pages on-call engineer" },
      { label: "CSAT Verification & Follow-Up", type: "verify", detail: "Ensures ticket is resolved within agreed SLA" },
    ],
    impact: "First-response latency reduced from 22 minutes to 8 seconds",
  },
  {
    id: "marketing",
    name: "Marketing & Lifecycle",
    icon: Sparkles,
    color: "text-rose-400 border-rose-500/30 bg-rose-500/10",
    badge: "Growth Engine",
    description: "Dynamic segment synchronization, trigger-based multi-channel drip journeys, engagement scoring, and churn alerts.",
    steps: [
      { label: "In-App Milestone or Inactivity Event", type: "trigger", detail: "User unlocks feature or goes silent for 7 days" },
      { label: "Behavioral Intent & Churn Risk AI", type: "ai", detail: "Analyzes usage trajectory and health score" },
      { label: "High Risk vs High Expansion Split", type: "decision", detail: "Routes to Customer Success vs automated guide" },
      { label: "Personalized Educational Email Sent", type: "action", detail: "Context-aware tutorial tailored to user persona" },
      { label: "Engagement Telemetry Monitored", type: "verify", detail: "Measures read rates and feature re-activation" },
    ],
    impact: "Re-activates dormant users without generic spam",
  },
];

const typeStepBadge: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  trigger: { label: "TRIGGER", color: "text-amber-400 bg-amber-500/10 border-amber-500/25", icon: Zap },
  ai: { label: "AI REASONING", color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/25", icon: Bot },
  decision: { label: "DECISION GATE", color: "text-sky-400 bg-sky-500/10 border-sky-500/25", icon: GitBranch },
  action: { label: "SYSTEM ACTION", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25", icon: Mail },
  verify: { label: "VERIFICATION", color: "text-teal-400 bg-teal-500/10 border-teal-500/25", icon: CheckCircle2 },
};

export function AutomationBlueprints() {
  const [activeTab, setActiveTab] = useState<string>("sales");

  const current = BLUEPRINTS.find((b) => b.id === activeTab) || BLUEPRINTS[0];
  const Icon = current.icon;

  return (
    <div className="rounded-3xl border border-white/[0.08] bg-[#08090e] p-6 sm:p-10 shadow-2xl">
      {/* Category selector pills */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-white/[0.06] mb-8">
        {BLUEPRINTS.map((bp) => {
          const BpIcon = bp.icon;
          const isActive = bp.id === activeTab;
          return (
            <button
              key={bp.id}
              onClick={() => setActiveTab(bp.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                isActive
                  ? "bg-amber-500/20 border border-amber-500/40 text-amber-300 shadow-lg shadow-amber-500/10 scale-102"
                  : "bg-white/[0.02] border border-white/[0.06] text-neutral-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              <BpIcon className={`w-3.5 h-3.5 ${isActive ? "text-amber-400" : "text-neutral-500"}`} />
              <span>{bp.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Blueprint View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left summary */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-bold uppercase tracking-wider">
              {current.badge}
            </span>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              INTERACTIVE BLUEPRINT
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${current.color}`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">{current.name}</h3>
              <p className="text-xs text-neutral-400 font-mono">End-to-End Autonomous Pipeline</p>
            </div>
          </div>

          <p className="text-sm text-neutral-300 leading-relaxed pt-2">
            {current.description}
          </p>

          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25">
            <div className="text-[10px] font-mono uppercase text-emerald-400 font-bold mb-1">
              PROVEN BUSINESS OUTCOME
            </div>
            <div className="text-xs text-neutral-200 font-medium">
              {current.impact}
            </div>
          </div>
        </div>

        {/* Right step-by-step pipeline */}
        <div className="lg:col-span-8 space-y-3 font-mono">
          <div className="text-[10px] uppercase text-neutral-500 mb-2 tracking-wider flex items-center justify-between">
            <span>EXECUTABLE PIPELINE FLOW</span>
            <span className="text-amber-400/80">Deterministic &amp; Monitored</span>
          </div>

          <div className="space-y-3">
            {current.steps.map((step, idx) => {
              const meta = typeStepBadge[step.type];
              const StepIcon = meta.icon;
              return (
                <div key={idx} className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-500/30 hover:bg-white/[0.04] transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center text-xs text-neutral-400 flex-shrink-0 font-bold">
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white tracking-wide">{step.label}</div>
                        <div className="text-[11px] text-neutral-400 font-sans mt-0.5">{step.detail}</div>
                      </div>
                    </div>

                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[10px] font-mono font-bold flex-shrink-0 self-start sm:self-center ${meta.color}`}>
                      <StepIcon className="w-3 h-3" />
                      <span>{meta.label}</span>
                    </div>
                  </div>

                  {/* Flow connector line */}
                  {idx < current.steps.length - 1 && (
                    <div className="flex justify-start ml-7 my-1">
                      <div className="w-px h-3 bg-gradient-to-b from-white/20 to-white/5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
