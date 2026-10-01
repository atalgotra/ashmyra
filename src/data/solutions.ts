export interface SolutionItem {
  id: string;
  category: "role" | "company-stage" | "industry";
  title: string;
  targetAudience: string;
  badge: string;
  problem: string;
  ashmyraSolution: string;
  workflow: string[];
  technology: string[];
  operationalBenefit: string;
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "startups",
    category: "company-stage",
    title: "High-Velocity Startups",
    targetAudience: "Seed to Series B Founders & Technical Leaders",
    badge: "Scale Rapidly",
    problem: "Early-stage teams need to launch production-grade products quickly without accumulating crippling technical debt or hiring large bloated dev teams.",
    ashmyraSolution: "We architect and deploy AI-native SaaS products and scalable microservices that allow startups to punch far above their weight and scale to millions of users.",
    workflow: [
      "Rapid architectural blueprinting and data schema design",
      "Production-ready Next.js / Python core build with integrated auth & billing",
      "Continuous CI/CD deployment with automated testing and observability",
    ],
    technology: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS", "Vercel"],
    operationalBenefit: "Cut time-to-market by over 50% with an enterprise-ready codebase built to attract investors and early enterprise customers.",
  },
  {
    id: "smes",
    category: "company-stage",
    title: "Growing SMEs",
    targetAudience: "Growing Companies & Mid-Market Operations",
    badge: "Modernize Operations",
    problem: "Operational bottlenecks arise when teams rely on disjointed software tools, manual spreadsheet handoffs, and outdated legacy software.",
    ashmyraSolution: "Ashmyra replaces manual operational friction with custom automation, integrated HRMS, and unified business intelligence dashboards.",
    workflow: [
      "Audit existing manual handoffs, data silos, and administrative bottlenecks",
      "Deploy Ashmyra HRMS and Automation pipelines to connect core systems",
      "Provide real-time telemetry dashboards for executive clarity",
    ],
    technology: ["Ashmyra HRMS", "Ashmyra Automation", "Ashmyra Analytics", "REST / Webhooks"],
    operationalBenefit: "Eliminate repetitive administrative tasks, reduce human error, and achieve visibility across all branch and departmental operations.",
  },
  {
    id: "enterprises",
    category: "company-stage",
    title: "Large Enterprises",
    targetAudience: "Chief Technology Officers & Enterprise Architects",
    badge: "Security & Scale",
    problem: "Enterprises need to modernize legacy systems, automate complex departmental handoffs, and adopt Agentic AI without compromising strict data compliance.",
    ashmyraSolution: "We engineer private, secure AI orchestration layers, microservice architectures, and dedicated cloud pipelines tailored to strict enterprise governance.",
    workflow: [
      "Rigorous compliance and security scoping (SOC2, GDPR, ISO)",
      "Design zero-trust agentic AI workflows with strict human approval gates",
      "Phased zero-downtime deployment with dedicated private cloud options",
    ],
    technology: ["Ashmyra AI Orchestrator", "Private LLMs", "AWS / Azure Cloud", "Kubernetes", "PostgreSQL"],
    operationalBenefit: "Safe enterprise adoption of autonomous agentic workflows with granular audit logs and air-gapped data isolation.",
  },
  {
    id: "hr-teams",
    category: "role",
    title: "HR & People Teams",
    targetAudience: "Chief People Officers, HR Directors & People Ops",
    badge: "Workforce Efficiency",
    problem: "HR teams spend up to 40% of their time manually reconciling attendance, calculating tax deductions, and fielding repetitive policy questions.",
    ashmyraSolution: "Ashmyra HRMS unites recruitment, onboarding, biometric attendance, compliant payroll, and performance into one intuitive platform with an AI HR Copilot.",
    workflow: [
      "Automated job distribution and AI resume scoring via ATS",
      "Frictionless digital self-onboarding and document verification",
      "Automated monthly payroll processing with statutory compliance",
      "Instant 24/7 employee support via AI HR Assistant",
    ],
    technology: ["Ashmyra HRMS", "Biometric Integration", "Statutory Compliance Engine", "AI HR Assistant"],
    operationalBenefit: "100% on-time payroll accuracy, zero document loss, and hours of admin time returned to strategic employee development.",
  },
  {
    id: "marketing",
    category: "role",
    title: "Marketing & Growth Teams",
    targetAudience: "CMOs, Growth Leads & SEO Managers",
    badge: "Generative Search Visibility",
    problem: "Traditional SEO tools do not show how modern generative AI engines (ChatGPT, Perplexity, Gemini) interpret, answer, and cite brands.",
    ashmyraSolution: "Ashmyra SEO provides full-spectrum search intelligence, tracking traditional SERPs alongside LLM citation share with automated topic clustering.",
    workflow: [
      "Ingest brand entities and benchmark search visibility across engines",
      "Generate semantic topic clusters and detect high-value content gaps",
      "Deploy AI SEO Copilot to investigate traffic volatility and recommend actions",
    ],
    technology: ["Ashmyra SEO Intelligence", "Generative Engine Optimization", "Entity Graph Analysis", "Schema Automator"],
    operationalBenefit: "Dominate both traditional Google search rankings and new generative AI answer recommendations.",
  },
  {
    id: "operations",
    category: "role",
    title: "Operations & Logistics Teams",
    targetAudience: "COOs, Operations VPs & Process Managers",
    badge: "Autonomous Workflows",
    problem: "Manual verification of purchase orders, supply chain updates, and customer communications slows down fulfillment and creates costly errors.",
    ashmyraSolution: "Ashmyra Automation and specialized Agentic AI agents automate document extraction, approval escalations, and system updates in real time.",
    workflow: [
      "Automated OCR and AI document parsing of vendor documents",
      "Multi-step verification with automatic threshold checks",
      "Instant routing to ERP and warehouse management systems",
    ],
    technology: ["Ashmyra Automation", "Agentic Orchestrator", "Document OCR", "ERP Connectors"],
    operationalBenefit: "Process orders and operational events in milliseconds with zero manual data entry errors.",
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
