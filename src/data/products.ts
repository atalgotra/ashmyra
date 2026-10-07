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
    category: "AI Search, Technical Audit & GEO Intelligence",
    tagline: "Enterprise SEO & GEO intelligence with direct GSC/GA4 sync at ₹0.25 ($0.0025) per page.",
    shortDesc: "A next-generation SEO intelligence engine connecting directly to GSC & GA4 APIs. Delivers real-time streaming page crawls, keyword cannibalization detection with solutions, render-blocking resource & uncompressed image analysis, auto-generated Schema.org JSON-LD, PageRank equity optimization, and humanized content generation—at a fraction of Semrush/Ahrefs cost.",
    longDesc: "Traditional SEO platforms charge hundreds of dollars monthly for outdated keyword counts and static warning lists. Ashmyra SEO syncs directly with Google Search Console and GA4 APIs to deliver real-time search telemetry, live page crawl streaming, exact code-level fixes for technical regressions, keyword cannibalization resolution, and Generative Engine Optimization (GEO) tracking across ChatGPT, Perplexity, and Gemini—all for just ₹0.25 INR ($0.0025 USD) per page.",
    badge: "Next-Gen SEO & GEO",
    heroHighlight: "Direct GSC/GA4 API & Code-Level Audit Engine",
    colorAccent: "#38BDF8",
    iconName: "Search",
    keyCapabilities: [
      "Direct Google Search Console (GSC) & Google Analytics 4 (GA4) API Real-Time Sync",
      "Keyword Telemetry with Actionable Fixes (identifies which queries to improve & exact steps)",
      "Keyword Cannibalization Detector with automated canonical & consolidation solutions",
      "Full Website Audit with Code-Level Fixes (H1, meta tags, alt tags, render-blocking scripts)",
      "Real-Time Live Streaming Crawler with progress waterfall streamed directly to UI",
      "Render-Blocking Resource Detection & Uncompressed Image Optimization with byte savings",
      "Auto-Generating Schema.org JSON-LD (Articles, Organizations, Products, FAQPage)",
      "Search Intent & AI Content Quality Score assessing semantic depth and entity coverage",
      "PageRank Equity Optimization: Automated internal link and anchor text recommendations",
      "Humanized AI Blog & High-CTR Meta Title & Description Generator",
      "White-Label Executive PDF & DOCX Audit Dossier Export",
      "Disruptive Pricing: Complete enterprise audits at just ₹0.25 INR ($0.0025 USD) per page",
    ],
    modules: [
      { 
        title: "Direct GSC & GA4 Real-Time Sync", 
        desc: "Pipes verified Google Search Console and Google Analytics 4 telemetry directly into your workspace for instant clicks, impressions, CTR, and visitor flow." 
      },
      { 
        title: "Actionable Keyword & Cannibalization Engine", 
        desc: "Detects underperforming queries and pages fighting for identical intents, delivering concrete canonical solutions, content mergers, and title rewrites." 
      },
      { 
        title: "Live Streaming Crawler & Code-Level Fixes", 
        desc: "Streams crawled pages in real time while diagnosing render-blocking JS/CSS, uncompressed images, missing tags, and outputting copy-paste code snippets." 
      },
      { 
        title: "GEO Radar, Schema & Internal Link Mesh", 
        desc: "Tracks AI answer citations (ChatGPT, Perplexity, Gemini), auto-generates Schema.org JSON-LD markup, and rebalances PageRank equity across internal links." 
      },
    ],
    workflowSteps: [
      { step: "01", title: "Direct GSC & GA4 API Connection", desc: "Instantly binds to Google Search Console and Google Analytics 4 for live verified search telemetry." },
      { step: "02", title: "Real-Time Streaming Crawl", desc: "Dispatches high-speed headless crawlers streaming page status, render-blocking scripts, and image weights live to UI." },
      { step: "03", title: "Cannibalization & Intent Diagnosis", desc: "Identifies query collisions, semantic content gaps, and scores search intent match quality." },
      { step: "04", title: "Code Fix & Schema Synthesis", desc: "Generates production-ready JSON-LD schemas, meta tags, and code diffs to resolve errors immediately." },
      { step: "05", title: "PageRank Rebalance & Dossier Export", desc: "Recommends internal linking anchor pairings and outputs branded White-Label PDF/DOCX audit dossiers." },
    ],
    problemSolved: "Enterprise SEO teams spend thousands of dollars on Semrush or Ahrefs only to get vague warnings without actual code fixes or GEO tracking. Ashmyra SEO provides real-time API accuracy, automated code-level solutions, and pay-as-you-go pricing at ₹0.25 INR ($0.0025 USD) per page.",
    aiAdvantage: "Unlike legacy tools that output passive warning lists, Ashmyra SEO generates the exact code snippets, JSON-LD schemas, and humanized content necessary to fix issues in minutes.",
    demoDataSummary: {
      metric1: { label: "Pages Crawled Real-Time", value: "248,500+", change: "Zero latency stream" },
      metric2: { label: "Average Audit Cost", value: "₹0.25 ($0.0025)", change: "Per page flat rate" },
      metric3: { label: "Code-Level Fix Accuracy", value: "99.4%", change: "Validated schema & HTML" },
    },
  },
  {
    id: "hrms",
    slug: "hrms",
    name: "Ashmyra HRMS",
    category: "Intelligent Workforce Operating System",
    tagline: "Your entire workforce operating system. One intelligent platform at 70% lower cost.",
    shortDesc: "Complete enterprise workforce platform unifying AI Resume Parsing, live AI-Proctored Assessments, automated cross-department onboarding/offboarding (IT, HR, Finance, Admin), dynamic compliance (POSH), and 100% no-code UI administration—at 70% less cost than legacy suites.",
    longDesc: "Ashmyra HRMS unifies the entire employee lifecycle into an intelligent, no-code operating system. From date-based AI resume parsing across multiple channels and live webcam-proctored online assessments with anti-cheat detection, to automated multi-department post-joining and exit clearance workflows, and bi-annual POSH compliance cycles—all fully configurable directly from the frontend UI at 70% lower cost than Workday and BambooHR.",
    badge: "AI Workforce Core",
    heroHighlight: "AI ATS, Live Proctored Quiz & 360° Clearance",
    colorAccent: "#10B981",
    iconName: "Users",
    keyCapabilities: [
      "AI Resume Parser with date-based multi-tier scoring (JD keywords, semantic search, agentic ranking & human review)",
      "Live AI-Proctored Quiz & Assessments (live webcam view, 1-laptop/1-email/1-attempt lock, automated psychometrics)",
      "Anti-Cheat Violation Engine (instant alerts for looking away, mobile devices, books, or background audio)",
      "Automated Post-Offer Onboarding with instant document collection, verification & e-signatures",
      "Cross-Dept Post-Joining Dispatch (auto-triggers IT for assets/access, Finance for payroll/bank, Admin for workspace)",
      "360° Automated Exit Clearance Matrix (instant parallel clearance routing to HR, Manager, IT, Admin & Finance)",
      "Dynamic Company Policies & Development Courses (automated 6-month POSH training & compliance reminders)",
      "100% No-Code Frontend Administration (all question banks, workflows, and policies manageable in UI)",
      "Disruptive 70% Cost Advantage over Workday, BambooHR, Darwinbox, and Rippling",
    ],
    modules: [
      { 
        title: "AI Resume Parser & Talent Radar", 
        desc: "Date-based multi-channel resume intake scoring applicants across JD keyword alignment, semantic entity match, agentic reasoning, and human review queues." 
      },
      { 
        title: "Live Proctored Quiz & Psychometrics", 
        desc: "Secure online candidate assessment with live webcam observation, strict 1-laptop/1-attempt enforcement, automated psychometric evaluation, and real-time anti-cheat alerts." 
      },
      { 
        title: "Cross-Dept Onboarding & IT Asset Dispatch", 
        desc: "Automated post-offer documentation triggering parallel workflows to IT for asset prep and account provisioning, Finance for payroll setup, and Admin for facility access." 
      },
      { 
        title: "360° Exit Clearance & Compliance Engine", 
        desc: "Automated exit clearance routing across HR, Manager, IT (asset recovery & access revoke), Admin, and Finance (FnF settlement), plus bi-annual POSH policy automation." 
      },
    ],
    workflowSteps: [
      { step: "01", title: "Date-Based Resume Ingestion", desc: "AI parser scans all applicant resumes across sources, scoring against JD keywords, semantic relevance, and agentic criteria." },
      { step: "02", title: "Live Proctored Online Assessment", desc: "Candidates take tests under live AI proctoring with 1-laptop locking, anti-cheat detection, and automated psychometric evaluation." },
      { step: "03", title: "Automated Post-Offer Onboarding", desc: "Digital document verification triggers automated IT asset dispatch, software credentials, and Finance bank account mapping." },
      { step: "04", title: "Dynamic Policies & POSH Compliance", desc: "Automated bi-annual compliance cycles deliver refresher training and policy notifications directly to employee portals." },
      { step: "05", title: "360° Automated Exit Clearance", desc: "Initiating an exit auto-dispatches parallel tasks to HR, Manager, IT, Admin, and Finance for zero-chase clearance and FnF settlement." },
    ],
    problemSolved: "Enterprises pay tens of thousands of dollars for fragmented tools (separate ATS, proctoring software, HRMS, and compliance LMS) while struggling with manual handoffs between IT, HR, and Finance. Ashmyra HRMS unifies the entire ecosystem at 70% lower cost.",
    aiAdvantage: "Native AI combines semantic applicant scoring, live computer-vision proctoring with cheating detection, and zero-code cross-departmental workflow orchestration in a single interface.",
    demoDataSummary: {
      metric1: { label: "Assessment Cheating Deterrence", value: "99.8%", change: "Real-time webcam AI" },
      metric2: { label: "Cost Savings vs Workday", value: "70%", change: "Lower total cost of ownership" },
      metric3: { label: "Exit Clearance Cycle", value: "<24 Hrs", change: "Automated 5-dept sync" },
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
    category: "Data Intelligence & Revenue Operations",
    tagline: "Turn raw data into revenue-ready intelligence. From raw data to revenue — automatically.",
    shortDesc: "An intelligent, end-to-end Data Intelligence & Revenue Operations Platform to collect, clean, enrich, score, segment, activate, and convert data into pipeline revenue from a single place.",
    longDesc: "Ashmyra Analytics replaces the fragmented stack of scrapers, Excel files, data cleaning tools, enrichment services, lead scoring, calling software, and sales CRMs. Discover data 24/7 across open sources, ingest into standardized models, deduplicate with 4-tier fuzzy/ML algorithms, synthesize Golden Records, dynamically score leads, route through built-in Calling CRM, manage sales opportunities, and power closed-loop revenue intelligence.",
    badge: "Data-to-Revenue Platform",
    heroHighlight: "Autonomous 15-Stage Data-to-Revenue Engine",
    colorAccent: "#8B5CF6",
    iconName: "TrendingUp",
    keyCapabilities: [
      "24/7 Automated Multi-Source Collection across public directories, competitor signals, and web metadata",
      "Multi-Layer Deduplication Engine (Exact, Normalized, Fuzzy similarity, and Multi-attribute AI/ML matching)",
      "Consolidated Golden Record Creation synthesizing fragmented inputs into a single master entity with Quality Score",
      "AI Data Completeness & Intelligent Enrichment Studio with automated high-priority work queues",
      "Dynamic Lead Scoring & Prioritization ('Call These 500 First' based on conversion probability x deal value)",
      "Unified Calling CRM & Sales Opportunity Pipeline with automated disposition movement and closed-loop feedback",
    ],
    modules: [
      { 
        title: "Data Discovery & Collection Engine", 
        desc: "24/7 scheduled harvesting across open sources, business registries, and competitor channels with freshness tracking and incremental syncing." 
      },
      { 
        title: "Deduplication & Golden Record Studio", 
        desc: "4-tier matching (Exact, Normalized, Levenshtein fuzzy, and ML) that merges duplicate records into high-confidence master profiles with quality ratings." 
      },
      { 
        title: "Lead Intelligence & Dynamic Segmentation", 
        desc: "AI lead scoring (Hot 90+, Warm 70+) and dynamic audiences that automatically enroll matching entities as data is enriched and validated." 
      },
      { 
        title: "Calling CRM & Closed-Loop Revenue Engine", 
        desc: "Integrated caller workspace with one-click dispositions ('Interested' auto-routes to Sales CRM) and feedback loops that teach scrapers what converts." 
      },
    ],
    workflowSteps: [
      { step: "01", title: "Discover & Ingest", desc: "24/7 automated collection across permitted open sources, directories, and web signals with schema normalization." },
      { step: "02", title: "Clean & Golden Record", desc: "4-layer deduplication and validation synthesize fragmented rows into a unified, high-confidence master entity." },
      { step: "03", title: "Enrich & Lead Score", desc: "Automated gap identification and AI lead scoring (Hot 90+, Warm 70+) calculate conversion probabilities." },
      { step: "04", title: "Calling & Sales CRM", desc: "Callers receive prioritized daily queues ('Call These 500 First'); interested prospects auto-escalate to Sales Pipeline." },
      { step: "05", title: "Closed-Loop Learning", desc: "Closed deals analyze customer DNA and feed insights back to optimize future data discovery and collection." },
    ],
    problemSolved: "Enterprises waste thousands of hours across a fragmented mess of 8+ disconnected tools: scrapers, spreadsheets, email verifiers, manual data cleaners, external lead scoring, calling dialers, and separate sales CRMs. Data decays, duplicates proliferate, and sales reps waste time calling dead records.",
    aiAdvantage: "An autonomous 15-stage Data-to-Revenue Flywheel that connects discovery directly to closed sales, using closed-loop conversion telemetry to continuously improve data discovery and lead prioritization.",
    demoDataSummary: {
      metric1: { label: "Data-to-Revenue Pipeline", value: "15 Stages", change: "Discover to Closed-Loop" },
      metric2: { label: "Deduplication Accuracy", value: "98.8%", change: "4-layer AI Golden Record" },
      metric3: { label: "Conversion Lift", value: "+340%", change: "Call Prioritized 500 First" },
    },
  },
  {
    id: "crm",
    slug: "crm",
    name: "Ashmyra Work & Project Intelligence",
    category: "AI Work & Project Management",
    tagline: "Better than Jira. Zero bloat, no forced sprints, and real-time employee workload heatmaps.",
    shortDesc: "A developer-first project and work operating system that replaces Jira's tedious story and epic overhead with a clean Workspace → Project → Task flow, real-time workload heat graphs, and no maximum user limit*.",
    longDesc: "Born from real developer and founder pain points, Ashmyra Work eliminates the exhausting overhead of Jira epics, story points, and sprint ceremonies. Built around a clean 3-tier hierarchy (Workspace → Project → Task), management gets real-time AI workload heat graphs to instantly spot overburdened vs underburdened team members, while all workflow steps, processes, and task types are 100% configurable via no-code UI—at 70% less cost than Jira, with an available one-time lifetime plan.",
    badge: "Better Than Jira",
    heroHighlight: "AI Workload Heat Graph & Zero-Bloat Hierarchy",
    colorAccent: "#f43f5e",
    iconName: "Kanban",
    keyCapabilities: [
      "Frictionless 3-Tier Hierarchy (Workspace → Project → Task) with zero tedious epics or sprint ceremony bloat",
      "Real-Time AI Workload Heat Graph for management to instantly identify overburdened vs underburdened team members",
      "No Maximum User Limit* (unlimited seats and cross-functional collaborators with zero arbitrary per-user tax)",
      "100% No-Code Frontend Customization for all workflow steps, process stages, and task types",
      "Automated Dependency Routing & Blocker Detection with real-time critical path acceleration",
      "Disruptive 70% Cost Advantage over Jira, Asana, and Monday, plus an optional One-Time Lifetime Plan",
    ],
    modules: [
      { 
        title: "Zero-Bloat Hierarchy (Workspace → Project → Task)", 
        desc: "Designed by developers for developers. Eliminate tedious Jira story point estimation, epics, and sprint planning overhead in favor of rapid, frictionless delivery." 
      },
      { 
        title: "Real-Time AI Workload Heat Graph", 
        desc: "Live capacity visualization displaying team bandwidth, active task weights, and burnout indicators to help managers rebalance workloads between overburdened and underburdened staff." 
      },
      { 
        title: "100% No-Code Frontend Administration", 
        desc: "Empower project leads to add, rename, and reorder workflow steps, approval gates, task categories, and custom fields directly in the UI without developer intervention." 
      },
      { 
        title: "Unlimited Collaboration & 70% Savings", 
        desc: "Zero arbitrary per-user license gates. Scale across engineering, design, operations, and external clients at 70% lower TCO, backed by a One-Time Lifetime Plan option." 
      },
    ],
    workflowSteps: [
      { step: "01", title: "Frictionless Workspace Setup", desc: "Create an organization workspace in seconds with unlimited users* and role-based permissions without per-seat billing stress." },
      { step: "02", title: "Streamlined Project Scoping", desc: "Group deliverables into clear visual projects without complex epics, arbitrary sprint boundaries, or bureaucratic ceremonies." },
      { step: "03", title: "Direct Task Execution", desc: "Developers create and close tasks in seconds with markdown notes, code snippet embeds, checklist items, and instant assignees." },
      { step: "04", title: "Live Workload Heat Graph", desc: "Managers monitor real-time capacity heatmaps to immediately spot team members facing burnout and redistribute unassigned work." },
      { step: "05", title: "Visual No-Code Evolution", desc: "Modify workflow steps, stages, status triggers, and task types directly from the frontend dashboard as team processes evolve." },
    ],
    problemSolved: "Founders and developers waste countless hours in Jira filling out bloated story templates, grooming backlogs, and running sprint poker ceremonies. Meanwhile, engineering leads lack clear real-time visibility into who is drowning under too many tasks and who has available bandwidth.",
    aiAdvantage: "Native AI analyzes live task velocity, deadline collisions, and complexity to generate an automated Workload Heat Graph, intelligently rebalancing assignments and flagging bottlenecks before they cause project delays.",
    demoDataSummary: {
      metric1: { label: "Workload Balancing Efficiency", value: "98.4%", change: "Real-time AI heat graph" },
      metric2: { label: "Cost Savings vs Jira/Asana", value: "70%", change: "Plus Lifetime Plan option" },
      metric3: { label: "User Seat Restriction", value: "Unlimited*", change: "No maximum user cap" },
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
