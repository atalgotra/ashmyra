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

export function getDemoUrlWithTheme(rawUrl: string, theme?: string): string {
  if (!rawUrl) return "";
  if (!theme) return rawUrl;
  try {
    const url = new URL(rawUrl);
    url.searchParams.set("theme", theme);
    return url.toString();
  } catch {
    const sep = rawUrl.includes("?") ? "&" : "?";
    return `${rawUrl}${sep}theme=${encodeURIComponent(theme)}`;
  }
}

export const DEMO_PRODUCTS: DemoProduct[] = [
  {
    id: "mailflow",
    name: "MailFlow",
    url: "https://mailflow.ashmyra.com/",
    tagline: "Autonomous Cold Email & Deliverability Engine",
    description:
      "AI-driven cold email outreach, automated warmup sequences, mailbox rotation, and conversion-optimized copywriting with real-time inbox health monitoring.",
    category: "Cold Email & Outreach",
    badge: "Email AI",
    accent: "#4f46e5",
    accentRgb: "79, 70, 229",
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
    category: "Lead Intelligence",
    badge: "Lead Intel",
    accent: "#0284c7",
    accentRgb: "2, 132, 199",
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
    category: "Social Media AI Agent",
    badge: "Social AI Agent",
    accent: "#059669",
    accentRgb: "5, 150, 105",
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
    name: "Unveil",
    url: "https://unveil.ashmyra.com/",
    tagline: "AI-Powered Photo & Video Editing Engine",
    description:
      "Remove watermarks, background noise, and unwanted objects from images and videos. Supports multi-file batch processing and moving video watermarks.",
    category: "AI Media & Video Editing",
    badge: "Media AI",
    accent: "#d97706",
    accentRgb: "217, 119, 6",
    features: [
      "AI Watermark & Object Eraser (Images & Videos)",
      "Moving Watermark Removal Across Video Frames",
      "Background Removal & Background Noise Reduction",
      "Multi-File Batch Engine (MP4, MOV, PNG, JPG, WebP)",
    ],
    metrics: [
      { label: "Clean Accuracy", value: "99.6%" },
      { label: "Batch Speed", value: "10× Faster" },
      { label: "Formats", value: "Video + Photo" },
    ],
    highlight: "Moving Watermarks & Batch Multi-File",
  },
  {
    id: "veyrix",
    name: "Veyrix",
    url: "https://veyrix.ashmyra.com/",
    tagline: "Search Intelligence, Deep Spider Forensics & GEO Citation Radar",
    description:
      "Autonomous deep website crawler, multi-agent technical SEO auditing, GSC/GA4 live telemetry, and AI engine citation radar across Perplexity, ChatGPT, and Gemini.",
    category: "Search Intel & SEO",
    badge: "Search Intel",
    accent: "#2563eb",
    accentRgb: "37, 99, 235",
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
