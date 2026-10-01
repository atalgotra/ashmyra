export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  technologies: string[];
  useCases: { title: string; desc: string }[];
}

export const ENGINEERING_PROCESS = [
  {
    step: "01",
    phase: "Discover",
    title: "Domain & Objective Immersion",
    desc: "We analyze business constraints, user personas, technical dependencies, and core unit economics before writing a single line of code.",
    outputs: ["Technical Feasibility Doc", "User Flow Diagrams", "Security & Compliance Requirements"],
  },
  {
    step: "02",
    phase: "Architect",
    title: "System & Data Topology",
    desc: "Design modular, scalable database schemas, microservice contracts, AI orchestration pipelines, and cloud infrastructure budgets.",
    outputs: ["System Architecture Blueprints", "API Contracts (OpenAPI)", "Data Entity Relationship Diagrams"],
  },
  {
    step: "03",
    phase: "Design",
    title: "Design System & Micro-Interactions",
    desc: "Craft high-fidelity design tokens, interactive component states, accessible contrast ratios, and intuitive user workflows.",
    outputs: ["Figma Design System", "Interactive Prototype", "Accessibility & Responsive Guidelines"],
  },
  {
    step: "04",
    phase: "Build",
    title: "Production-Grade Engineering",
    desc: "Execute clean, type-safe, componentized frontend and backend code with rigorous automated testing and CI/CD pipelines.",
    outputs: ["Type-Safe Codebases", "Unit & Integration Tests", "Automated Build Pipelines"],
  },
  {
    step: "05",
    phase: "Test",
    title: "Multi-Tier Verification & Security",
    desc: "End-to-end user path simulation, load and concurrency testing, penetration assessments, and cross-browser audits.",
    outputs: ["Performance & Load Audit", "Vulnerability Reports", "Cross-Device Validation Matrix"],
  },
  {
    step: "06",
    phase: "Deploy",
    title: "Zero-Downtime Production Release",
    desc: "Automated blue-green deployments, global edge CDN cache configuration, database migration verification, and live telemetry setup.",
    outputs: ["Cloud Infrastructure Provisioning", "CDN & DNS Configuration", "Telemetry & Alert Dashboards"],
  },
  {
    step: "07",
    phase: "Scale",
    title: "Continuous Observability & Growth",
    desc: "Real-time error tracking, query optimization, automated scale triggers, and iterative product enhancements based on user metrics.",
    outputs: ["24/7 Telemetry Monitoring", "Cost Optimization Audits", "Feature Iteration Backlog"],
  },
];

export const SERVICES: ServiceDetail[] = [
  {
    id: "software-development",
    slug: "software-development",
    title: "Custom Software & SaaS Engineering",
    tagline: "High-scale, bespoke software engineered for market dominance.",
    shortDesc: "End-to-end custom software development from initial architecture to global multi-tenant SaaS deployment.",
    longDesc: "We partner with visionary founders and enterprise leaders to architect, build, and scale resilient software products. We don't build disposable MVPs; we engineer scalable foundations that support rapid iteration, high concurrency, and seamless enterprise integrations.",
    deliverables: [
      "Multi-tenant SaaS application architectures",
      "Event-driven microservices and serverless backends",
      "Role-based access control (RBAC) and enterprise SSO",
      "Stripe and international billing integration",
      "Automated CI/CD and GitOps infrastructure",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "Python / FastAPI", "PostgreSQL", "Redis", "Docker", "AWS / GCP"],
    useCases: [
      { title: "B2B SaaS Platforms", desc: "Build subscription-ready software with customer organizations, licensing tiers, and usage-based billing." },
      { title: "Internal Operations Hubs", desc: "Consolidate fragmented spreadsheets and internal tooling into secure, modern web portals." },
      { title: "High-Volume Transaction Engines", desc: "Reliable APIs capable of handling millions of requests with sub-100ms response times." },
    ],
  },
  {
    id: "ai-development",
    slug: "ai-development",
    title: "Agentic AI & Machine Learning Systems",
    tagline: "Software that reasons, plans, and completes end-to-end workflows.",
    shortDesc: "Architecting autonomous AI agents, enterprise RAG pipelines, fine-tuned domain models, and intelligent business automations.",
    longDesc: "Move past generic chatbot wrappers. We build enterprise-grade agentic systems that combine LLMs with deterministic code, private database connectors, and verified tool-calling routines to perform real business operations autonomously.",
    deliverables: [
      "Multi-agent orchestration engines with human-in-the-loop controls",
      "Enterprise Retrieval-Augmented Generation (RAG) with hybrid search",
      "Custom domain tool calling and API execution sandboxes",
      "Fine-tuned models for specialized industry classification",
      "Safety guardrails, token efficiency controls, and latency optimization",
    ],
    technologies: ["OpenAI", "Anthropic Claude", "LangChain / LlamaIndex", "Pinecone / pgvector", "Python", "Celery", "FastAPI"],
    useCases: [
      { title: "Autonomous Operations Agents", desc: "Agents that monitor inboxes, parse purchase orders, verify inventory, and trigger shipping." },
      { title: "Knowledge Retrieval Engines", desc: "Ask complex multi-document questions across thousands of internal PDFs, wikis, and contracts." },
      { title: "Proactive Data Analyzers", desc: "AI agents that continuously audit database tables and alert executives of anomalies." },
    ],
  },
  {
    id: "seo",
    slug: "seo",
    title: "Search & Generative Engine Optimization (GEO)",
    tagline: "Engineering maximum search visibility for both Google and AI answer engines.",
    shortDesc: "Next-generation technical SEO, semantic content graph architecture, and optimization for ChatGPT, Perplexity, and Gemini citations.",
    longDesc: "Modern search is no longer just ten blue links on Google. Consumers and B2B buyers now query AI models directly. We build semantic web architectures that secure top organic rankings on search engines while maximizing brand citation frequency in generative answer engines.",
    deliverables: [
      "Comprehensive technical SEO and Core Web Vitals audit",
      "Semantic entity mapping and Schema.org structured data hierarchy",
      "Generative Engine Optimization (GEO) strategy and citation tracking",
      "Topical authority content architecture and programmatic clustering",
      "Automated rank tracking and competitor displacement analysis",
    ],
    technologies: ["Semantic HTML5", "JSON-LD Schema", "Next.js SSR/SSG", "Edge Caching", "Custom SERP Crawlers"],
    useCases: [
      { title: "Enterprise Organic Expansion", desc: "Scale high-intent organic search traffic through programmatic and entity-first page architectures." },
      { title: "AI Model Brand Citations", desc: "Structure web content so AI synthesis engines cite your company as the authoritative answer." },
      { title: "Technical Recovery", desc: "Resolve crawling bottlenecks, indexing exclusions, and canonical confusion across large sites." },
    ],
  },
  {
    id: "web-apps",
    slug: "web-apps",
    title: "Modern Web & Enterprise Portal Engineering",
    tagline: "Lightning-fast digital platforms that convert visitors and delight users.",
    shortDesc: "Crafting beautiful, accessible, ultra-responsive web applications with world-class aesthetics and sub-second load times.",
    longDesc: "Your digital surface is the single most important representation of your brand caliber. We design and engineer web applications that combine modern graphic elegance with flawless software engineering, ensuring immediate engagement and high conversion rates.",
    deliverables: [
      "Custom responsive web applications with flawless mobile fidelity",
      "Interactive product dashboards and client self-service portals",
      "Headless CMS integration (Sanity, Strapi, Contentful)",
      "Strict WCAG 2.2 AA accessibility compliance",
      "Sub-second global Edge delivery via modern cloud CDNs",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel / Cloudflare Edge"],
    useCases: [
      { title: "Product-Led Growth Websites", desc: "Interactive marketing sites with live calculators, interactive demos, and frictionless signups." },
      { title: "Client Portals & Dashboards", desc: "Secure interfaces where customers manage their subscriptions, tickets, and assets." },
    ],
  },
];
