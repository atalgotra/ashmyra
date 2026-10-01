"use client";

import React, { useState } from "react";
import { 
  Bot, 
  User, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Search, 
  Terminal,
  ArrowRight
} from "lucide-react";

interface PromptScenario {
  id: string;
  query: string;
  category: string;
  response: {
    statusSteps: string[];
    summary: string;
    metrics: { label: string; value: string; badge: string }[];
    recommendations: string[];
  };
}

const PRESET_QUERIES: PromptScenario[] = [
  {
    id: "traffic-drop",
    category: "Traffic Diagnostic",
    query: "Why did organic traffic to /products drop 8% over the last 14 days?",
    response: {
      statusSteps: [
        "Analyzing 14,280 tracked keyword entities across Google & Bing...",
        "Cross-referencing 3 recent generative AI answer engine updates...",
        "Inspecting HTTP response headers, canonical tags & Core Web Vitals...",
        "Identifying competitor movement and search intent drift...",
      ],
      summary: "Diagnostic identified 2 root causes: 1) Competitor published a comprehensive comparative entity guide capturing 3 primary high-volume clusters. 2) Missing hreflang tag caused temporary canonical confusion on international subdomains.",
      metrics: [
        { label: "Impacted Keyword Clusters", value: "3 Primary", badge: "High Priority" },
        { label: "Competitor Citation Share", value: "+4.8%", badge: "Observed" },
        { label: "Crawl Error Risk", value: "Zero 5xx", badge: "Stable" },
      ],
      recommendations: [
        "Consolidate 4 related sub-articles into 1 comprehensive topical authority guide with Schema.org FAQ markup.",
        "Fix missing hreflang annotations in next deployment cycle.",
        "Request re-crawl via Google Search Console and monitor Perplexity answer citations.",
      ],
    },
  },
  {
    id: "geo-citations",
    category: "AI Search & GEO",
    query: "How frequently is Ashmyra cited in ChatGPT and Perplexity for 'enterprise AI agents'?",
    response: {
      statusSteps: [
        "Scanning LLM answer responses across 500 prompt permutations...",
        "Evaluating knowledge graph entity prominence & citation grounding...",
        "Calculating brand share-of-voice vs legacy enterprise competitors...",
      ],
      summary: "Ashmyra is cited in 74.2% of generative answer responses for 'autonomous agentic enterprise workflows', ranking #2 in citation frequency behind established open-source frameworks.",
      metrics: [
        { label: "AI Engine Visibility", value: "74.2%", badge: "Citation Share" },
        { label: "Primary Source Citations", value: "184 URLs", badge: "Indexed" },
        { label: "Entity Confidence Score", value: "0.94 / 1.0", badge: "High Authority" },
      ],
      recommendations: [
        "Publish technical whitepaper on deterministic verification to capture deeper enterprise technical citations.",
        "Add explicit Product and Organization JSON-LD schemas to all product documentation pages.",
      ],
    },
  },
  {
    id: "keyword-opportunities",
    category: "Content Gap",
    query: "Identify high-intent content gaps our competitors are ranking for in B2B HR automation.",
    response: {
      statusSteps: [
        "Auditing competitor organic SERP footprints across 22 competitor domains...",
        "Extracting search terms with >1,000 monthly search volume and KD < 45...",
        "Clustering opportunities by buyer stage and commercial intent...",
      ],
      summary: "Discovered 5 high-converting keyword clusters with high purchase intent that competitors have neglected or poorly covered.",
      metrics: [
        { label: "Uncontested Keyword Clusters", value: "5 Clusters", badge: "High Commercial Intent" },
        { label: "Estimated Incremental Visits", value: "+12,400/mo", badge: "Opportunity" },
        { label: "Avg Keyword Difficulty", value: "38 / 100", badge: "Low Competition" },
      ],
      recommendations: [
        "Generate automated topic cluster for 'Biometric attendance compliance rules 2025'.",
        "Deploy comparative feature matrix landing page for enterprise workforce management.",
      ],
    },
  },
];

export function InteractiveCopilot() {
  const [selectedScenario, setSelectedScenario] = useState<PromptScenario>(PRESET_QUERIES[0]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleSelectScenario = (scenario: PromptScenario) => {
    setIsProcessing(true);
    setSelectedScenario(scenario);
    setTimeout(() => {
      setIsProcessing(false);
    }, 600);
  };

  return (
    <div className="bg-[#0a0d16] border border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Demo Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-sky-400" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              Ashmyra AI SEO Copilot
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-mono">
                Interactive Preview
              </span>
            </h4>
            <p className="text-xs text-neutral-400">
              Test real diagnostic workflows using simulated enterprise telemetry.
            </p>
          </div>
        </div>

        <span className="text-[10px] text-neutral-500 font-mono bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">
          DEMO DATA ENVIRONMENT
        </span>
      </div>

      {/* Preset Query Buttons */}
      <div className="my-6">
        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
          Select an AI Diagnostic Query:
        </label>
        <div className="flex flex-wrap gap-2">
          {PRESET_QUERIES.map((scenario) => {
            const isActive = selectedScenario.id === scenario.id;
            return (
              <button
                key={scenario.id}
                onClick={() => handleSelectScenario(scenario)}
                className={`text-xs px-3.5 py-2 rounded-xl border transition-all text-left ${
                  isActive
                    ? "bg-sky-500/15 border-sky-500/50 text-white shadow-md shadow-sky-500/10 font-medium"
                    : "bg-white/[0.03] border-white/[0.06] text-neutral-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <span className="text-[10px] block opacity-60 font-mono">{scenario.category}</span>
                <span className="line-clamp-1">{scenario.query}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Conversation Console */}
      <div className="space-y-4 bg-[#07090e] border border-white/[0.06] rounded-2xl p-4 sm:p-6 font-mono text-xs">
        {/* User Prompt Box */}
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-md bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
            <User className="w-3.5 h-3.5 text-neutral-300" />
          </div>
          <div className="bg-white/[0.05] border border-white/[0.06] rounded-xl px-4 py-2.5 text-neutral-200 w-full">
            <span className="text-[10px] text-neutral-500 block mb-0.5">USER PROMPT</span>
            {selectedScenario.query}
          </div>
        </div>

        {/* AI Agent Execution Response */}
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-md bg-sky-500/20 border border-sky-500/30 flex items-center justify-center shrink-0 mt-0.5">
            <Bot className="w-3.5 h-3.5 text-sky-400" />
          </div>
          <div className="bg-sky-950/20 border border-sky-500/20 rounded-xl p-4 text-neutral-200 w-full space-y-4">
            <div className="flex items-center justify-between text-[10px] text-sky-400 border-b border-sky-500/20 pb-2">
              <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
                <Terminal className="w-3 h-3" />
                Ashmyra Reasoning Engine
              </span>
              <span>Execution: 240ms</span>
            </div>

            {/* Simulated Live Reasoning Steps */}
            <div className="space-y-1.5 text-[11px] text-neutral-400">
              {selectedScenario.response.statusSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="line-clamp-1">{step}</span>
                </div>
              ))}
            </div>

            {/* Findings Summary */}
            <div className="p-3 bg-white/[0.03] border border-white/[0.06] rounded-lg">
              <span className="text-[10px] text-neutral-400 font-bold block mb-1 uppercase tracking-wider">
                Synthesis &amp; Root Cause Analysis:
              </span>
              <p className="text-xs text-neutral-200 font-sans leading-relaxed">
                {selectedScenario.response.summary}
              </p>
            </div>

            {/* Telemetry Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {selectedScenario.response.metrics.map((metric, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-black/40 border border-white/[0.05]">
                  <span className="text-[10px] text-neutral-400 block">{metric.label}</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-sm font-bold text-white">{metric.value}</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300">
                      {metric.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Recommendations */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 block mb-1.5">
                Recommended Autonomous Next Steps:
              </span>
              <ul className="space-y-1 text-xs text-neutral-300 font-sans">
                {selectedScenario.response.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sky-400 font-mono mt-0.5">→</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
