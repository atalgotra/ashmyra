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
      { label: "Deliverability", value: "99.4%" },
      { label: "Warmup Speed", value: "14 Days" },
      { label: "Open Lift", value: "3.2×" },
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
      "Precision B2B Prospect Search & ICP Filter",
      "Multi-Source Waterfall Email Verification",
      "Automated Company & Tech Stack Enrichment",
      "1-Click Export to CRM & Outbound Pipelines",
    ],
    metrics: [
      { label: "Accuracy", value: "98.7%" },
      { label: "B2B Records", value: "50M+" },
      { label: "Enrichment", value: "<1.2s" },
    ],
    highlight: "Waterfall Verified Contacts",
  },
  {
    id: "omnira",
    name: "Omnira",
    url: "https://omnira.ashmyra.com/",
    tagline: "Autonomous Agentic AI Social Media Manager & Growth Engine",
    description:
      "Autonomous social media manager for YouTube, LinkedIn, Facebook, and Instagram. Deeply audits channel performance, tracks real-time market news and competitor playbooks, and generates detailed, platform-native content with researched hashtag clusters.",
    category: "Agentic Social Media AI Manager",
    badge: "Social AI Agent",
    accent: "#10b981",
    accentRgb: "16, 185, 129",
    features: [
      "Cross-Platform Agents (YouTube, LinkedIn, FB & IG)",
      "Deep Channel Performance & Profile Auditing",
      "Real-Time Market News & Competitor Intelligence",
      "Detailed Strategic Content & Targeted Hashtags",
    ],
    metrics: [
      { label: "Networks", value: "4 Active" },
      { label: "Competitor Radar", value: "24/7 Live" },
      { label: "Content & Tags", value: "Autonomous" },
    ],
    highlight: "Autonomous Social Growth Agent",
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
      "Actionable Schema & Semantic Entity Fixes",
    ],
    metrics: [
      { label: "GEO Score", value: "96/100" },
      { label: "Citations", value: "24+" },
      { label: "Audit Latency", value: "<8s" },
    ],
    highlight: "Generative Search Visibility",
  },
  {
    id: "veyrix",
    name: "Veyrix",
    url: "https://veyrix.ashmyra.com/",
    tagline: "Search Intelligence, Deep Spider Forensics & GEO Citation Radar",
    description:
      "Autonomous deep website crawler, multi-agent technical SEO auditing, GSC/GA4 live telemetry, and AI engine citation radar across Perplexity, ChatGPT, and Gemini.",
    category: "Search Intelligence & Deep SEO Forensics",
    badge: "Search Intel",
    accent: "#38bdf8",
    accentRgb: "56, 189, 248",
    features: [
      "Autonomous Deep Spider Crawler & Forensic Audits",
      "GEO AI Citation Radar (ChatGPT, Perplexity, Gemini)",
      "Live Google Search Console & GA4 Data Streams",
      "Schema Studio, Log Analyzer & Competitor Intel",
    ],
    metrics: [
      { label: "Crawl Engine", value: "Multi-Tier" },
      { label: "Answer Radar", value: "Real-Time" },
      { label: "Telemetry", value: "GSC + GA4" },
    ],
    highlight: "See Beyond the Search",
  },
];
