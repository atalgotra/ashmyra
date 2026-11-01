export interface SolutionMetric {
  label: string;
  value: string;
  sublabel?: string;
}

export interface SolutionItem {
  id: string;
  category: "role" | "company-stage" | "industry";
  categoryLabel: string;
  title: string;
  targetAudience: string;
  badge: string;
  accentColor: "indigo" | "cyan" | "sky" | "emerald" | "violet" | "amber" | "rose";
  videoUrl: string;
  problemTitle: string;
  problem: string;
  solutionTitle: string;
  ashmyraSolution: string;
  workflow: string[];
  technology: string[];
  operationalBenefit: string;
  statHighlight: {
    value: string;
    label: string;
  };
  hudMetrics: SolutionMetric[];
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "startups",
    category: "company-stage",
    categoryLabel: "By Company Scale",
    title: "High-Velocity Startups",
    targetAudience: "Seed to Series B Founders & Technical Leaders",
    badge: "Scale Rapidly",
    accentColor: "indigo",
    videoUrl: "/videos/solutions/startups.mp4",
    problemTitle: "The High-Velocity Chasm",
    problem: "Early-stage teams need to launch production-grade products quickly without accumulating crippling technical debt, hiring bloated engineering teams, or burning runway on boilerplate.",
    solutionTitle: "Modular AI-Native Architecture",
    ashmyraSolution: "We architect and deploy AI-native SaaS products and scalable microservices that allow startups to punch far above their weight and scale to millions of users with zero architectural rework.",
    workflow: [
      "Rapid architectural blueprinting and zero-friction data schema design",
      "Production-ready Next.js / Python core build with integrated auth & enterprise billing",
      "Continuous CI/CD deployment with automated regression testing and live telemetry",
    ],
    technology: ["Next.js 15+", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS", "Vercel"],
    operationalBenefit: "Cut time-to-market by over 50% with an enterprise-ready codebase built to attract institutional investors and early enterprise customers.",
    statHighlight: {
      value: "-50% TTM",
      label: "Time-to-Market Reduction",
    },
    hudMetrics: [
      { label: "Core Architecture", value: "AI-Native Microservices", sublabel: "Zero Tech Debt" },
      { label: "CI/CD Pipeline", value: "Automated Zero-Downtime", sublabel: "Continuous Deploy" },
      { label: "Scale Readiness", value: "Series A/B Concurrency", sublabel: "Multi-Region Ready" },
    ],
  },
  {
    id: "smes",
    category: "company-stage",
    categoryLabel: "By Company Scale",
    title: "Growing SMEs",
    targetAudience: "Growing Companies & Mid-Market Operations",
    badge: "Modernize Operations",
    accentColor: "cyan",
    videoUrl: "/videos/solutions/smes.mp4",
    problemTitle: "The Operational Silo Bottleneck",
    problem: "Operational bottlenecks arise when teams rely on disjointed software tools, manual spreadsheet handoffs, and outdated legacy software that trap key company data.",
    solutionTitle: "Unified Business Operating System",
    ashmyraSolution: "Ashmyra replaces manual operational friction with custom automation, integrated HRMS, and unified business intelligence dashboards that synchronize real-time operations.",
    workflow: [
      "Audit existing manual handoffs, data silos, and administrative bottlenecks",
      "Deploy Ashmyra HRMS and Automation pipelines to connect core disparate systems",
      "Provide real-time telemetry dashboards for executive clarity and zero data loss",
    ],
    technology: ["Ashmyra HRMS", "Ashmyra Automation", "Ashmyra Analytics", "REST / Webhooks", "PostgreSQL"],
    operationalBenefit: "Eliminate repetitive administrative tasks, reduce human error, and achieve total operational visibility across all branch and departmental operations.",
    statHighlight: {
      value: "85% Cut",
      label: "Manual Admin Time Eliminated",
    },
    hudMetrics: [
      { label: "Connected Pipelines", value: "HRMS + CRM + Automation", sublabel: "Full Telemetry" },
      { label: "Data Integrity", value: "Zero Manual Hand-off", sublabel: "Bi-directional Sync" },
      { label: "Operations HUD", value: "Real-time Synchronized", sublabel: "All Branches" },
    ],
  },
  {
    id: "enterprises",
    category: "company-stage",
    categoryLabel: "By Company Scale",
    title: "Large Enterprises",
    targetAudience: "Chief Technology Officers & Enterprise Architects",
    badge: "Security & Scale",
    accentColor: "sky",
    videoUrl: "/videos/solutions/enterprises.mp4",
    problemTitle: "The Governance & Modernization Dilemma",
    problem: "Enterprises need to modernize legacy systems, automate complex departmental handoffs, and adopt Agentic AI without compromising strict data compliance, SOC2, or HIPAA mandates.",
    solutionTitle: "Private AI Orchestration & VPC Infrastructure",
    ashmyraSolution: "We engineer private, secure AI orchestration layers, microservice architectures, and dedicated cloud pipelines tailored to strict enterprise governance with air-gapped options.",
    workflow: [
      "Rigorous compliance and security scoping (SOC2, GDPR, ISO, HIPAA standards)",
      "Design zero-trust agentic AI workflows with strict human approval gates",
      "Phased zero-downtime deployment with dedicated private cloud / AWS GovCloud options",
    ],
    technology: ["Ashmyra AI Orchestrator", "Private LLMs", "AWS / Azure Cloud", "Kubernetes", "PostgreSQL"],
    operationalBenefit: "Safe enterprise adoption of autonomous agentic workflows with granular audit logs, KMS encryption, and air-gapped data isolation.",
    statHighlight: {
      value: "Zero Trust",
      label: "SOC2 & Air-Gapped Ready",
    },
    hudMetrics: [
      { label: "Deployment Model", value: "Dedicated VPC / GovCloud", sublabel: "On-Premise Ready" },
      { label: "Security Layer", value: "Hardware Enclave & KMS", sublabel: "Strict Isolation" },
      { label: "Audit Telemetry", value: "Immutable Log Stream", sublabel: "100% Traceability" },
    ],
  },
  {
    id: "sales",
    category: "role",
    categoryLabel: "By Functional Team",
    title: "Sales & Revenue Operations",
    targetAudience: "CROs, Sales Directors & RevOps Leads",
    badge: "Revenue Intelligence",
    accentColor: "rose",
    videoUrl: "/videos/solutions/sales.mp4",
    problemTitle: "The Stalled Pipeline & Data Lag",
    problem: "Sales reps spend hours updating CRMs, chasing unqualified leads with inaccurate contact data, and manually compiling proposal documents instead of closing deals.",
    solutionTitle: "Autonomous Revenue Pipeline & Intent Scoring",
    ashmyraSolution: "Ashmyra CRM and sales AI agents automate pipeline enrichment, meeting prep briefs, and proposal drafts directly from real-time customer data and waterfall verification.",
    workflow: [
      "Real-time prospect intent scoring and CRM auto-population from verified sources",
      "Automated proposal drafting and contract review checklists generated in seconds",
      "AI workload distribution across account executives with predictive conversion telemetry",
    ],
    technology: ["Ashmyra CRM", "Prospect IQ Engine", "Agentic Copilot", "Sales Telemetry", "Proposal Generator"],
    operationalBenefit: "Cut CRM administration time by 75% and boost lead response velocity to under 5 minutes.",
    statHighlight: {
      value: "< 5 Min",
      label: "Lead Response Velocity",
    },
    hudMetrics: [
      { label: "Prospect Intent", value: "Real-time Waterfall Match", sublabel: "99.4% Validated" },
      { label: "CRM Hygiene", value: "Auto-Populated & Enriched", sublabel: "Zero Manual Entry" },
      { label: "Proposal Engine", value: "One-Click AI Briefs", sublabel: "75% Faster Cycles" },
    ],
  },
  {
    id: "marketing",
    category: "role",
    categoryLabel: "By Functional Team",
    title: "Marketing & Growth Teams",
    targetAudience: "CMOs, Growth Leads & SEO Managers",
    badge: "Generative Search Visibility",
    accentColor: "violet",
    videoUrl: "/videos/solutions/marketing.mp4",
    problemTitle: "The Generative AI Visibility Blindspot",
    problem: "Traditional SEO tools do not show how modern generative AI engines (ChatGPT, Perplexity, Gemini) interpret, answer, and cite brands, leaving organic growth vulnerable to disruption.",
    solutionTitle: "Generative Engine Optimization (GEO) Radar",
    ashmyraSolution: "Ashmyra SEO provides full-spectrum search intelligence, tracking traditional SERPs alongside LLM citation share with automated semantic topic clustering.",
    workflow: [
      "Ingest brand entities and benchmark search visibility across LLM answer engines",
      "Generate semantic topic clusters and detect high-value content gaps",
      "Deploy AI SEO Copilot to investigate traffic volatility and recommend immediate actions",
    ],
    technology: ["Ashmyra SEO Intelligence", "Generative Engine Optimization", "Entity Graph Analysis", "Schema Automator"],
    operationalBenefit: "Dominate both traditional Google search rankings and new generative AI answer recommendations.",
    statHighlight: {
      value: "3.8x Lift",
      label: "AI Engine Citation Share",
    },
    hudMetrics: [
      { label: "Engine Radar", value: "Perplexity, Gemini, ChatGPT", sublabel: "Real-time Scrapes" },
      { label: "Entity Clusters", value: "Semantic Knowledge Graph", sublabel: "Automated Silos" },
      { label: "Volatility HUD", value: "Live SERP & Citation Tracking", sublabel: "Instant Alerts" },
    ],
  },
  {
    id: "operations",
    category: "role",
    categoryLabel: "By Functional Team",
    title: "Operations & Logistics Teams",
    targetAudience: "COOs, Operations VPs & Process Managers",
    badge: "Autonomous Workflows",
    accentColor: "amber",
    videoUrl: "/videos/solutions/operations.mp4",
    problemTitle: "The Manual Paperwork & Verification Latency",
    problem: "Manual verification of purchase orders, supply chain updates, and customer communications slows down fulfillment and creates costly administrative errors.",
    solutionTitle: "Autonomous Agentic Swarms & Instant OCR Routing",
    ashmyraSolution: "Ashmyra Automation and specialized Agentic AI agents automate document extraction, approval escalations, and system updates in real time with millisecond precision.",
    workflow: [
      "Automated OCR and AI document parsing of vendor documents and shipping manifests",
      "Multi-step verification with automatic threshold checks and exception routing",
      "Instant routing to ERP and warehouse management systems with bi-directional confirmation",
    ],
    technology: ["Ashmyra Automation", "Agentic Orchestrator", "Document OCR", "ERP Connectors", "FastAPI"],
    operationalBenefit: "Process orders and operational events in milliseconds with zero manual data entry errors.",
    statHighlight: {
      value: "400ms",
      label: "Event Ingestion & Routing",
    },
    hudMetrics: [
      { label: "Document AI", value: "99.8% OCR Precision", sublabel: "Bills & Invoices" },
      { label: "Agentic Swarm", value: "Multi-Step Escalation", sublabel: "Human-in-the-Loop" },
      { label: "ERP Connector", value: "Instant Webhook Push", sublabel: "Zero Lag" },
    ],
  },
  {
    id: "hr-teams",
    category: "role",
    categoryLabel: "By Functional Team",
    title: "HR & People Teams",
    targetAudience: "Chief People Officers, HR Directors & People Ops",
    badge: "Workforce Efficiency",
    accentColor: "emerald",
    videoUrl: "/videos/solutions/hr-teams.mp4",
    problemTitle: "The Administrative Attendance & Payroll Friction",
    problem: "HR teams spend up to 40% of their time manually reconciling attendance, calculating tax deductions, and fielding repetitive policy questions across scattered channels.",
    solutionTitle: "Unified Workforce Intelligence & Biometric Sync",
    ashmyraSolution: "Ashmyra HRMS unites recruitment, onboarding, biometric attendance, compliant payroll, and performance into one intuitive platform with an AI HR Copilot.",
    workflow: [
      "Automated job distribution and AI resume scoring via ATS with candidate scoring",
      "Frictionless digital self-onboarding and instant document verification",
      "Automated monthly payroll processing with statutory compliance (PF, ESI, TDS)",
      "Instant 24/7 employee support via AI HR Assistant",
    ],
    technology: ["Ashmyra HRMS", "Biometric Integration", "Statutory Compliance Engine", "AI HR Assistant", "PostgreSQL"],
    operationalBenefit: "100% on-time payroll accuracy, zero document loss, and hours of admin time returned to strategic employee development.",
    statHighlight: {
      value: "100%",
      label: "On-Time Compliant Payroll",
    },
    hudMetrics: [
      { label: "Biometric Ingestion", value: "Real-time Attendance Sync", sublabel: "Branch & Remote" },
      { label: "Statutory Filing", value: "Auto-Generated Compliances", sublabel: "Zero Penalties" },
      { label: "Copilot Assistant", value: "24/7 Policy AI Support", sublabel: "Instant Resolution" },
    ],
  },
];

export const INDUSTRIES = [
  { name: "Logistics & Supply Chain", desc: "Automate bill of lading extraction, dispatch routing, shipment tracking, and warehouse staff management." },
  { name: "Education & EdTech", desc: "Intelligent student lifecycle management, faculty attendance, automated grading workflows, and portal engineering." },
  { name: "Healthcare & Life Sciences", desc: "HIPAA-conscious workflow automation, patient intake portals, compliant staff rostering, and telemetry." },
  { name: "Retail & E-commerce", desc: "Omnichannel inventory sync, AI customer engagement agents, automated returns, and high-conversion storefronts." },
  { name: "Professional Services", desc: "Client billing automation, project time tracking, secure client document vaults, and CRM pipelines." },
  { name: "Manufacturing", desc: "Shop-floor shift management, preventive maintenance telemetry, supply chain automation, and quality analytics." },
  { name: "Financial Services", desc: "KYC document extraction, regulatory compliance workflows, transaction anomaly detection, and secure portals." },
  { name: "Real Estate", desc: "Property listing syndication, tenant lease workflows, maintenance ticketing, and AI lead qualification." },
  { name: "Technology & Software", desc: "Developer tools, internal platform engineering, automated release workflows, and multi-tenant SaaS architecture." },
];
