export interface DemoProduct {
  id: string;
  name: string;
  url: string;
  tagline: string;
  description: string;
  category: string;
  badge: string;
  accent: string;
  accentRgb: string;
  features: string[];
  metrics: { label: string; value: string }[];
  highlight: string;
}

export const DEMO_PRODUCTS: DemoProduct[] = [
  {
    id: "mailflow",
    name: "Ashmyra MailFlow",
    url: "https://mailflow.ashmyra.com/",
    tagline: "Autonomous Cold Email & Deliverability Engine",
    description:
      "AI-driven cold email outreach, automated warmup sequences, mailbox rotation, and conversion-optimized copywriting with real-time inbox health monitoring.",
    category: "Cold Email & Outreach Automation",
    badge: "Email AI",
    accent: "#818cf8",
    accentRgb: "129, 140, 248",
    features: [
      "Dynamic Multi-Inbox Warmup & Smart Rotation",
      "Conversion-Trained AI Copywriting Engine",
      "Real-Time SPF / DKIM / DMARC Health Radar",
      "Automated Multi-Stage Followup Sequences",
    ],
    metrics: [
      { label: "Deliverability Rate", value: "99.4%" },
      { label: "Warmup Velocity", value: "14 Days" },
      { label: "Open Rate Lift", value: "3.2×" },
    ],
    highlight: "Zero Spam-Folder Risk",
  },
  {
    id: "prospectiq",
    name: "Prospect IQ",
    url: "https://prospectiq.ashmyra.com/",
    tagline: "B2B Lead Intelligence & Prospect Discovery Platform",
    description:
      "Deep lead discovery, automated enrichment, verified contact scraping, ICP scoring, and multichannel prospect routing designed for high-velocity outbound teams.",
    category: "Lead Intelligence & Scraping",
    badge: "Lead Intel",
    accent: "#06b6d4",
    accentRgb: "6, 182, 212",
    features: [
      "Precision B2B Prospect Search & Filter",
      "Multi-Source Waterfall Email Verification",
      "Automated Company & Tech Stack Enrichment",
      "1-Click Export to CRM & Outbound Pipelines",
    ],
    metrics: [
      { label: "Email Accuracy", value: "98.7%" },
      { label: "Verified Data Points", value: "50M+" },
      { label: "Enrichment Speed", value: "<1.2s" },
    ],
    highlight: "Waterfall Verified Contacts",
  },
  {
    id: "omnira",
    name: "Omnira",
    url: "https://omnira.ashmyra.com/",
    tagline: "Unified Omnichannel AI Communications & Orchestration",
    description:
      "Consolidate customer touchpoints into a unified intelligence hub. Seamlessly unifies WhatsApp, Email, Web Chat, and tickets with autonomous agent handoffs.",
    category: "Omnichannel Communications Hub",
    badge: "Omnichannel",
    accent: "#10b981",
    accentRgb: "16, 185, 129",
    features: [
      "Unified WhatsApp, Email & Web Inbox Stream",
      "Autonomous Agentic Copilot & Instant Resolution",
      "Smart Multi-Tier Routing & Escalation Logic",
      "Real-Time SLA & Customer Sentiment Radar",
    ],
    metrics: [
      { label: "Response Velocity", value: "85% faster" },
      { label: "Autonomous Resolution", value: "72%" },
      { label: "Channel Sync", value: "Real-time" },
    ],
    highlight: "Unified Conversation Stream",
  },
  {
    id: "unveil",
    name: "Ashmyra Unveil",
    url: "https://unveil.ashmyra.com/",
    tagline: "AI Search, Competitor Intelligence & GEO Discovery",
    description:
      "Audit and optimize your digital presence for the generative AI era. Analyzes brand visibility across Perplexity, ChatGPT, Gemini, and Google AI Overviews with live audits.",
    category: "GEO & Search Intelligence",
    badge: "GEO Intelligence",
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    features: [
      "Generative Engine Optimization (GEO) Radar",
      "AI Overviews & LLM Citation Footprint",
      "Real-Time Competitor Market Positioning",
      "Actionable Schema & Semantic Architecture Fixes",
    ],
    metrics: [
      { label: "GEO Readiness", value: "96/100" },
      { label: "Citation Signals", value: "24+" },
      { label: "Audit Latency", value: "<8s" },
    ],
    highlight: "Generative Search Visibility",
  },
];
