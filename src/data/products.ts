export interface ProductDetail {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  badge: string;
  heroHighlight: string;
  colorAccent: string;
  iconName: string;
  keyCapabilities: string[];
  modules?: { title: string; desc: string }[];
  workflowSteps: { step: string; title: string; desc: string }[];
  problemSolved: string;
  aiAdvantage: string;
  demoDataSummary: {
    metric1: { label: string; value: string; change: string };
    metric2: { label: string; value: string; change: string };
    metric3: { label: string; value: string; change: string };
  };
}

export const PRODUCTS: ProductDetail[] = [
  {
    id: "ai",
    slug: "ai",
    name: "Ashmyra AI",
    category: "Autonomous Agentic AI & Social Media Swarm",
    tagline: "Software that doesn't just execute. It thinks, acts, and orchestrates.",
    shortDesc: "An autonomous agentic AI workforce that acts like a real 7–8 person creative agency. Manages YouTube, Instagram, LinkedIn, and Facebook with dynamic competitor radar, viral trend discovery, end-to-end asset production, and 1-click human approval.",
    longDesc: "Ashmyra AI deploys autonomous multi-agent swarms that completely operate multi-channel social media marketing like a dedicated human agency of 7–8 specialists. It dynamically tracks your competitors, ingests breaking news and viral market trends, and outputs complete publishing deliverables—including high-converting hooks, timed reel scripts, multi-slide carousels, Midjourney/Flux prompts, hashtag clusters, and peak posting windows—with optional 1-click human verification before automated dispatch.",
    badge: "Agentic AI Core",
    heroHighlight: "Autonomous 7–8 Agent Social Media Swarm",
    colorAccent: "#6366F1",
    iconName: "Cpu",
    keyCapabilities: [
      "Autonomous 7–8 Specialist Agent Swarm operating as a full creative department",
      "Dynamic Competitor Ingestion & 24/7 Viral Radar across YouTube, Insta, LinkedIn, Facebook",
      "End-to-End Asset Generation (Hooks, Timed Reel Scripts, Multi-Slide Carousels, Image Prompts)",
      "Automated Editorial Content Calendar with peak engagement time-slotting",
      "1-Click Human-in-the-Loop Approval Gate or hands-free autonomous dispatch",
      "Real-time Growth & Engagement Telemetry tracking subscribers, reach, and impressions",
    ],
    modules: [
      { 
        title: "Autonomous 7–8 Agent Swarm Team", 
        desc: "Coordinated micro-agents operating asynchronously as specialized roles (Trend Scout, Viral Copywriter, Reel Scriptwriter, Carousel Architect, Visual Prompt Engineer, Tag Strategist, Dispatcher)." 
      },
      { 
        title: "Dynamic Competitor & Viral Market Radar", 
        desc: "Dynamically add competitors to track their video velocity, viral engagement spikes, sentiment shifts, and breaking news 24/7 across YouTube, Instagram, LinkedIn, and Facebook." 
      },
      { 
        title: "Full Asset Production Studio", 
        desc: "Generates complete master assets, not vague ideas: tested psychological hooks, 0–60s timed scripts with visual cues, slide-by-slide carousels, image prompts, and optimal post timings." 
      },
      { 
        title: "Calendar, Approval & Multi-Platform Dispatch", 
        desc: "Maintains a 30-day cross-platform editorial calendar with 1-click user clearance, direct API publishing, and continuous subscriber and impression telemetry feedback loops." 
      },
    ],
    workflowSteps: [
      { step: "01", title: "Market Radar & Competitor Ingestion", desc: "Agents monitor competitor moves, viral anomalies, and breaking news across YouTube, Instagram, LinkedIn, and Facebook." },
      { step: "02", title: "Swarm Strategy & Calendar Synthesis", desc: "The swarm decomposes findings into a structured monthly editorial calendar with optimal peak-hour time slots." },
      { step: "03", title: "End-to-End Asset Production", desc: "Specialist agents draft psychological hooks, timed reel scripts, multi-slide carousels, image prompts, and hashtags in parallel." },
      { step: "04", title: "1-Click Human Clearance Gate", desc: "Assets are queued for review; approve with a single tap or let vetted routines dispatch autonomously." },
      { step: "05", title: "Multi-Platform Dispatch & Telemetry", desc: "Deterministic API publishing across all 4 platforms with real-time impression, subscriber, and reach monitoring." },
    ],
    problemSolved: "Managing high-velocity social media across 4 platforms requires a 7–8 person team costing hundreds of thousands annually. Ashmyra AI automates the entire cognitive lifecycle without compromising brand voice or publishing safety.",
    aiAdvantage: "Instead of basic chatbots that output generic bullet points, Ashmyra AI produces fully packaged production assets with visual cues, scripts, carousels, and 1-click publishing governance.",
    demoDataSummary: {
      metric1: { label: "Cross-Platform Impressions", value: "1,420,000+", change: "+42% this quarter" },
      metric2: { label: "Average Dispatch Latency", value: "14ms", change: "Deterministic API lock" },
      metric3: { label: "Human Verification Accuracy", value: "100%", change: "Enforced clearance gate" },
    },
  },
  {
    id: "seo",
    slug: "seo",
    name: "Ashmyra SEO",
    category: "AI Search Intelligence",
    tagline: "SEO intelligence built for the generative search era.",
    shortDesc: "An AI-native SEO intelligence platform built for modern search visibility — encompassing Google, Bing, ChatGPT search, Perplexity and generative answer engines.",
    longDesc: "Traditional SEO platforms were built for keyword counts in 2012. Ashmyra SEO is engineered from the ground up for semantic entity graphs, topic clustering, and Generative Engine Optimization (GEO). It monitors both organic SERP rankings and how modern LLMs reference and cite your brand.",
    badge: "Next-Gen SEO Suite",
    heroHighlight: "Generative Engine Optimization (GEO) & SERP AI",
    colorAccent: "#38BDF8",
    iconName: "Search",
    keyCapabilities: [
      "AI Search & LLM citation tracking (ChatGPT, Perplexity, Gemini, Copilot)",
      "Intelligent semantic keyword clustering and intent mapping",
      "Automated technical SEO auditing with priority code fixes",
      "Competitor content gap analysis and topical authority mapping",
      "Real-time SERP volatility and rank fluctuation monitoring",
      "AI SEO Copilot that diagnoses traffic shifts and recommends proactive updates",
      "Automated structured data (Schema.org) generation and entity linking",
    ],
    modules: [
      { title: "Generative Engine Intelligence (GEO)", desc: "Analyzes how AI models synthesize and cite your brand across generative search engines." },
      { title: "Semantic Topic Clustering", desc: "Groups thousands of search terms into coherent topic clusters using semantic embeddings rather than exact-match strings." },
      { title: "AI SEO Copilot", desc: "Interactive conversational co-pilot that investigates algorithm updates, traffic anomalies, and technical issues instantly." },
      { title: "Technical Health Scanner", desc: "Deep crawl inspection covering Core Web Vitals, canonical links, indexation traps, and schema hierarchy." },
    ],
    workflowSteps: [
      { step: "01", title: "Domain Entity Ingestion", desc: "Ashmyra maps your domain architecture, crawl paths, and knowledge graph entities." },
      { step: "02", title: "Multi-Engine Monitoring", desc: "Tracks traditional SERP rankings alongside generative AI answer citations." },
      { step: "03", title: "Gap & Anomaly Detection", desc: "Pinpoints high-value content gaps and sudden drop-offs before traffic degrades." },
      { step: "04", title: "Automated Strategy Delivery", desc: "Generates clear action items, meta updates, and internal link suggestions." },
    ],
    problemSolved: "Search is undergoing its biggest transformation in 25 years. Brands optimizing only for legacy keywords are disappearing from generative search engines. Ashmyra SEO bridges both worlds.",
    aiAdvantage: "Directly audits and tracks generative search citations while automating time-consuming keyword clustering and technical root-cause analysis.",
    demoDataSummary: {
      metric1: { label: "Tracked Keywords & Entities", value: "38,420", change: "+1,240 new rankings" },
      metric2: { label: "LLM Citation Share", value: "76.4%", change: "+14.2% AI visibility" },
      metric3: { label: "Technical Health Score", value: "98/100", change: "Zero critical crawl errors" },
    },
  },
  {
    id: "hrms",
    slug: "hrms",
    name: "Ashmyra HRMS",
    category: "Intelligent Workforce Platform",
    tagline: "Your entire workforce. One intelligent, unified platform.",
    shortDesc: "Complete enterprise HR suite spanning recruitment (ATS), automated onboarding, biometric attendance, compliant payroll, KRA/KPI performance, and an AI HR assistant.",
    longDesc: "Ashmyra HRMS eliminates fragmented spreadsheets and outdated legacy HR portals. From hire to retire, every stage of the employee lifecycle is unified in a sleek, intuitive platform with built-in automation for approvals, compliance, payroll calculations, and talent analytics.",
    badge: "12+ Workforce Modules",
    heroHighlight: "Unified Workforce Operating System",
    colorAccent: "#10B981",
    iconName: "Users",
    keyCapabilities: [
      "Modern Applicant Tracking System (ATS) with automated candidate scoring",
      "Digital self-service onboarding with automated document verification",
      "Geo-fenced mobile & biometric attendance with shift management",
      "Flexible leave policies, multi-tier approvals & statutory compliance",
      "One-click compliant payroll engine with tax, bonus & deduction rules",
      "Objective-driven performance management (OKRs, KRAs, KPIs & 360 reviews)",
      "Employee self-service portal, digital asset management & expense approvals",
      "AI HR Assistant for instant policy queries, leave requests & ticket resolution",
    ],
    modules: [
      { title: "Recruitment & ATS", desc: "Automated job distribution, resume parsing, candidate scoring, and interview scheduling." },
      { title: "Core HR & Directory", desc: "Single source of truth for organization structure, employee records, and digital documentation." },
      { title: "Attendance & Shifts", desc: "Real-time biometric sync, geo-fenced mobile check-ins, overtime rules, and rotational shift rosters." },
      { title: "Statutory Payroll", desc: "Automated salary processing, payslip distribution, tax deductions, PF, ESI, and compliance filing." },
      { title: "Performance & OKRs", desc: "Continuous goal tracking, milestone reviews, self-evaluations, and peer feedback cycles." },
      { title: "AI HR Assistant", desc: "Instant conversational helper answering employee questions regarding leaves, benefits, and handbooks." },
    ],
    workflowSteps: [
      { step: "01", title: "Recruit & Screen", desc: "AI parser screens applicant pool and ranks candidates based on role requirements." },
      { step: "02", title: "Frictionless Onboarding", desc: "New hires complete paperwork, sign digital agreements, and receive assets automatically." },
      { step: "03", title: "Daily Operations", desc: "Attendance, leave, and expenses flow through automated approval matrices." },
      { step: "04", title: "Payroll & Compliance", desc: "One-click automated payout calculations with statutory accuracy." },
      { step: "05", title: "Performance & Growth", desc: "Transparent review cycles with data-driven KRA metrics and growth plans." },
    ],
    problemSolved: "HR teams waste up to 40% of their time on manual administrative tasks like reconciling attendance records, calculating payroll taxes, and answering repetitive policy inquiries.",
    aiAdvantage: "An integrated AI HR Assistant handles tier-1 employee inquiries and flags compliance discrepancies before payroll executes.",
    demoDataSummary: {
      metric1: { label: "Active Employees Managed", value: "2,450", change: "100% on-time payroll" },
      metric2: { label: "HR Admin Time Saved", value: "38 hrs/mo", change: "Per HR professional" },
      metric3: { label: "Employee Engagement Rate", value: "94.2%", change: "+12% portal adoption" },
    },
  },
  {
    id: "automation",
    slug: "automation",
    name: "Ashmyra Automation",
    category: "Workflow & Business Rules",
    tagline: "Turn complex, manual operations into automated, reliable workflows.",
    shortDesc: "Visual business process automation platform connecting tools, APIs, AI agents, and human approvals into resilient operational pipelines.",
    longDesc: "Ashmyra Automation bridges the gap between disconnected software tools. Build logic-driven pipelines with scheduled triggers, document parsing, conditional routing, and automated webhook execution — without requiring dedicated DevOps engineers for every workflow.",
    badge: "Operational Efficiency",
    heroHighlight: "Low-Latency Workflow Orchestration",
    colorAccent: "#F59E0B",
    iconName: "Zap",
    keyCapabilities: [
      "Visual drag-and-drop workflow canvas with branching and loops",
      "Native integrations with CRMs, ERPs, databases, and communication tools",
      "Intelligent document processing (PDF parsing, invoice extraction, OCR)",
      "Configurable approval gates with email and messaging action buttons",
      "High-reliability queueing with automatic exponential retry mechanisms",
      "Custom Python and JavaScript code step support for complex logic",
    ],
    modules: [
      { title: "Visual Logic Canvas", desc: "Design complex conditional branches, loops, delays, and error handling seamlessly." },
      { title: "Document Intelligence", desc: "Extract structured JSON from scanned invoices, receipts, contracts, and IDs using AI." },
      { title: "Webhook & API Gateway", desc: "Trigger flows via inbound webhooks or connect securely to existing enterprise APIs." },
      { title: "Human Approval Flow", desc: "Pause executions automatically until a manager approves via Slack, email, or dashboard." },
    ],
    workflowSteps: [
      { step: "01", title: "Define Event Trigger", desc: "Inbound webhook, new database row, schedule, or agent action triggers the flow." },
      { step: "02", title: "Transform & Process", desc: "Normalize data, run business validations, and process attached documents." },
      { step: "03", title: "Evaluate Rules", desc: "Route execution based on dollar values, customer tiers, or risk levels." },
      { step: "04", title: "Sync & Notify", desc: "Update connected systems (CRM, ERP, Billing) and notify team members instantly." },
    ],
    problemSolved: "Disjointed SaaS tools create data silos and require error-prone manual data entry between platforms.",
    aiAdvantage: "Embeds intelligent AI extraction and decision steps directly into traditional conditional workflows.",
    demoDataSummary: {
      metric1: { label: "Automations Running Daily", value: "85,200", change: "99.98% execution uptime" },
      metric2: { label: "Average Execution Time", value: "185ms", change: "Ultra-fast execution" },
      metric3: { label: "Manual Data Entry Eliminated", value: "92%", change: "Reported efficiency" },
    },
  },
  {
    id: "analytics",
    slug: "analytics",
    name: "Ashmyra Analytics",
    category: "Business Intelligence & Telemetry",
    tagline: "Understand what changes. Act on what matters.",
    shortDesc: "Real-time business intelligence and telemetry platform with predictive forecasting, AI anomaly detection, and unified executive dashboards.",
    longDesc: "Ashmyra Analytics turns raw corporate data streams into actionable intelligence. Connect databases, transaction logs, and web analytics into unified real-time dashboards with automatic anomaly alerts that proactively notify managers of sudden drops or surges.",
    badge: "Real-Time BI",
    heroHighlight: "Predictive Analytics & Anomaly Detection",
    colorAccent: "#8B5CF6",
    iconName: "BarChart3",
    keyCapabilities: [
      "Real-time event stream ingestion and sub-second query latency",
      "Automated anomaly detection with statistical baseline algorithms",
      "Predictive revenue, churn, and operational capacity forecasting",
      "Customizable executive dashboards with granular role-based permissions",
      "Automated weekly executive briefs generated by AI intelligence",
      "Direct SQL query editor and scheduled CSV/PDF reporting pipelines",
    ],
    modules: [
      { title: "Unified Data Fabric", desc: "Combines transactional data, marketing metrics, and product events into a unified semantic layer." },
      { title: "Anomaly Detection Engine", desc: "Monitors metric thresholds 24/7 to alert teams of irregular traffic, conversions, or revenue changes." },
      { title: "AI Executive Briefs", desc: "Summarizes multi-department performance trends into clear, bulleted executive narratives." },
      { title: "Custom Dashboard Builder", desc: "Drag-and-drop charts, heatmaps, cohort tables, and gauges tailored to every team." },
    ],
    workflowSteps: [
      { step: "01", title: "Stream Ingestion", desc: "Connect data lakes, relational databases, and third-party APIs." },
      { step: "02", title: "Semantic Modeling", desc: "Define company-wide metric definitions once for unified reporting across all teams." },
      { step: "03", title: "Automated Analysis", desc: "AI models scan historical patterns to forecast trajectories and detect anomalies." },
      { step: "04", title: "Proactive Distribution", desc: "Dashboards, alerts, and executive summaries sent to the right stakeholders on schedule." },
    ],
    problemSolved: "Leaders wait days for business analysts to prepare retrospective reports, missing critical moments to react to market changes.",
    aiAdvantage: "Replaces static charts with active surveillance that explains *why* numbers changed and what actions to take next.",
    demoDataSummary: {
      metric1: { label: "Events Ingested Per Second", value: "24,000+", change: "Zero latency lag" },
      metric2: { label: "Anomalies Proactively Flagged", value: "14", change: "Prevented revenue leakage" },
      metric3: { label: "Dashboard Query Speed", value: "< 95ms", change: "Sub-second response" },
    },
  },
  {
    id: "crm",
    slug: "crm",
    name: "Ashmyra CRM",
    category: "Customer Relationship & Pipeline",
    tagline: "Build deeper relationships. Close faster with AI sales intelligence.",
    shortDesc: "A modern, clutter-free CRM engineered for modern high-velocity sales teams with automated pipeline tracking, contact enrichment, and AI follow-up assistants.",
    longDesc: "Ashmyra CRM replaces bloated legacy CRMs with a fast, modern system that sales reps actually love using. Track deals visually, automate pipeline progression, enrich incoming leads with verified firmographic data, and let AI draft personalized follow-ups.",
    badge: "Sales Intelligence",
    heroHighlight: "Modern Pipeline & Deal Acceleration",
    colorAccent: "#EC4899",
    iconName: "Target",
    keyCapabilities: [
      "Visual Kanban deal pipelines with customizable sales stages",
      "Automated lead scoring based on firmographic and behavioral intent signals",
      "AI Sales Assistant for email personalization and call transcript summaries",
      "Two-way email and calendar sync with automated activity logging",
      "Revenue forecasting based on historical win rates and deal velocity",
      "Omnichannel communication history (email, notes, calls, tasks)",
    ],
    modules: [
      { title: "Pipeline Command Center", desc: "Intuitive drag-and-drop deal management with stage conversion tracking and deal rotting alerts." },
      { title: "Smart Lead Scoring", desc: "Prioritizes high-intent prospects using behavioral signals and demographic matching." },
      { title: "AI Follow-Up Copilot", desc: "Suggests context-aware email replies and follow-ups based on prospect replies and meeting notes." },
      { title: "Account 360", desc: "Consolidated timeline of all touches, support tickets, and invoices for every client account." },
    ],
    workflowSteps: [
      { step: "01", title: "Capture & Enrich", desc: "Inbound leads automatically enriched with company data and social profiles." },
      { step: "02", title: "Intelligent Routing", desc: "Leads scored and assigned to the right account executive instantly." },
      { step: "03", title: "Accelerated Engagement", desc: "AI assists with personalized outreach, meeting prep notes, and objection handling." },
      { step: "04", title: "Close & Retain", desc: "Seamless handover to onboarding and customer success teams with full activity history." },
    ],
    problemSolved: "Sales reps spend over half their time entering manual data into clunky CRMs instead of closing deals.",
    aiAdvantage: "Automates CRM updates from email and calendar events so sales teams focus entirely on building customer trust.",
    demoDataSummary: {
      metric1: { label: "Pipeline Velocity", value: "+28%", change: "Faster deal cycle" },
      metric2: { label: "Outreach Response Rate", value: "34.8%", change: "+11.4% with AI prompts" },
      metric3: { label: "Data Entry Time Saved", value: "6.5 hrs", change: "Per rep per week" },
    },
  },
  {
    id: "web",
    slug: "web",
    name: "Ashmyra Web",
    category: "Digital Platforms & Engineering",
    tagline: "World-class digital platforms engineered for conversion and speed.",
    shortDesc: "High-performance web applications, enterprise portals, and SaaS interfaces engineered with cutting-edge architectures and uncompromising aesthetic standards.",
    longDesc: "Ashmyra Web combines elite design craft with modern web engineering. We build lightning-fast web applications, corporate digital headquarters, customer portals, and headless commerce platforms optimized for Core Web Vitals, conversion, and global scale.",
    badge: "High-Performance Web",
    heroHighlight: "Design Excellence & Global Cloud Architecture",
    colorAccent: "#14B8A6",
    iconName: "Globe",
    keyCapabilities: [
      "Ultra-responsive Next.js, React and modern edge architecture",
      "Bespoke design systems with custom tokens, animations, and micro-interactions",
      "Perfect Core Web Vitals (sub-second LCP, zero CLS, instant INP)",
      "Enterprise security, SSL, CDN caching, and DDoS mitigation",
      "Headless CMS integration for frictionless content publishing",
      "Deep SEO architecture with semantic HTML and Schema.org integration",
    ],
    modules: [
      { title: "Design System Engineering", desc: "Reusable component libraries tailored to brand guidelines, ensuring long-term design consistency." },
      { title: "Edge Performance Stack", desc: "Serverless and edge-rendered architectures guaranteeing instant loading from 300+ global edge nodes." },
      { title: "Headless Content Mesh", desc: "Empower non-technical marketing teams to manage content without touching production code." },
      { title: "Conversion Optimization", desc: "Built-in A/B testing infrastructure, event telemetry, and accessible UX flows." },
    ],
    workflowSteps: [
      { step: "01", title: "Information Architecture", desc: "Map user journeys, conversion funnels, and technical constraints." },
      { step: "02", title: "Fidelity Prototyping", desc: "High-fidelity interactive designs with custom micro-interactions." },
      { step: "03", title: "Modern Code Craft", desc: "Type-safe, componentized frontend engineering backed by automated CI/CD." },
      { step: "04", title: "Edge Deployment & Audit", desc: "Comprehensive testing across 15+ screen sizes, devices, and browsers." },
    ],
    problemSolved: "Slow, generic website templates fail to communicate company caliber and suffer from poor mobile conversions and bad SEO ranking.",
    aiAdvantage: "Engineered specifically to satisfy both human buyers and generative AI search indexing engines.",
    demoDataSummary: {
      metric1: { label: "Lighthouse Performance", value: "99/100", change: "Core Web Vitals green" },
      metric2: { label: "Global Edge TTFB", value: "32ms", change: "Sub-50ms response" },
      metric3: { label: "Conversion Lift", value: "+42%", change: "Measured UX improvement" },
    },
  },
];
