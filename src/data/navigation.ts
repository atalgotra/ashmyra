export interface NavItem {
  title: string;
  href: string;
  description?: string;
  demoUrl?: string;
  badge?: string;
  category?: "product" | "service" | "solution" | "ai" | "company";
}

export interface NavGroup {
  groupTitle: string;
  items: NavItem[];
}

export interface NavSection {
  title: string;
  href: string;
  badge?: string;
  featured?: {
    title: string;
    desc: string;
    href: string;
  };
  items?: NavItem[];
  groups?: NavGroup[];
}

export const MAIN_NAV: NavSection[] = [
  {
    title: "Products",
    href: "/products",
    items: [
      {
        title: "MailFlow",
        href: "https://mailflow.ashmyra.com/",
        demoUrl: "https://mailflow.ashmyra.com/",
        description: "Autonomous cold email warmup, mailbox rotation & deliverability engine.",
        badge: "Live",
        category: "product",
      },
      {
        title: "Prospect IQ",
        href: "https://prospectiq.ashmyra.com/",
        demoUrl: "https://prospectiq.ashmyra.com/",
        description: "B2B lead intelligence, waterfall contact scraping & ICP scoring platform.",
        badge: "Live",
        category: "product",
      },
      {
        title: "Omnira",
        href: "https://omnira.ashmyra.com/",
        demoUrl: "https://omnira.ashmyra.com/",
        description: "Agentic AI social media manager for YouTube, LinkedIn, FB & Instagram.",
        badge: "Live",
        category: "product",
      },
      {
        title: "Unveil",
        href: "https://unveil.ashmyra.com/",
        demoUrl: "https://unveil.ashmyra.com/",
        description: "AI photo & video editing — remove watermarks, moving marks & background noise.",
        badge: "Live",
        category: "product",
      },
      {
        title: "Veyrix",
        href: "https://veyrix.ashmyra.com/",
        demoUrl: "https://veyrix.ashmyra.com/",
        description: "Search intelligence, deep spider crawler forensics & GSC/GA4 telemetry.",
        badge: "Live",
        category: "product",
      },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    items: [
      {
        title: "Workforce & Enterprise Management",
        href: "/solutions#workforce-enterprise",
        description: "Resilient HR intelligence, biometric attendance sync, and compliant automated payroll.",
        category: "solution",
      },
      {
        title: "Business Operations & Automation",
        href: "/solutions#business-operations",
        description: "Intelligent process orchestration eliminating manual handoffs across core workflows.",
        category: "solution",
      },
      {
        title: "Revenue & Sales Intelligence",
        href: "/solutions#revenue-growth",
        description: "Autonomous outbound, prospect waterfall enrichment, and pipeline conversion telemetry.",
        category: "solution",
      },
      {
        title: "Generative Search & Growth",
        href: "/solutions#growth-intelligence",
        description: "Full-spectrum SEO and Generative Engine Optimization (GEO) citation tracking.",
        category: "solution",
      },
      {
        title: "Autonomous Logistics & Workflows",
        href: "/solutions#autonomous-logistics",
        description: "Real-time OCR document extraction, exception handling, and automated ERP dispatch.",
        category: "solution",
      },
      {
        title: "Enterprise Architecture & Security",
        href: "/solutions#enterprise-security",
        description: "Private cloud infrastructure, air-gapped zero-trust clusters, and SOC2 governance.",
        category: "solution",
      },
      {
        title: "Digital Modernisation & Startups",
        href: "/solutions#digital-modernisation",
        description: "Transforming legacy software and accelerating early-stage architectures to production.",
        category: "solution",
      },
    ],
  },
  {
    title: "Capabilities",
    href: "/capabilities",
    groups: [
      {
        groupTitle: "AI & Intelligent Systems",
        items: [
          {
            title: "Agentic AI Development",
            href: "/capabilities/ai-development",
            description: "Autonomous multi-agent swarms engineered for reasoning, tool use and execution.",
            category: "ai",
          },
          {
            title: "Multi-Agent Systems",
            href: "/products/ai",
            description: "Consensus-driven agent architectures collaborating across enterprise workflows.",
            category: "ai",
          },
          {
            title: "RAG & Knowledge Systems",
            href: "/capabilities/ai-development",
            description: "Vector databases, semantic retrieval engines & deterministic context pipelines.",
            category: "ai",
          },
          {
            title: "AI Integration",
            href: "/capabilities/ai-development",
            description: "Production LLM and SLM orchestration embedded securely inside enterprise stacks.",
            category: "ai",
          },
          {
            title: "Intelligent Workflow Automation",
            href: "/products/automation",
            description: "Cognitive document intelligence, automated decision trees & exception routing.",
            category: "ai",
          },
          {
            title: "AI Engineering & Evaluation",
            href: "/capabilities/ai-development",
            description: "Model fine-tuning, benchmark evaluations & deterministic guardrail layers.",
            category: "ai",
          },
        ],
      },
      {
        groupTitle: "Software & Product Engineering",
        items: [
          {
            title: "SaaS Development",
            href: "/capabilities/software-development",
            description: "Full-cycle multi-tenant SaaS architecture, billing & subscription infrastructure.",
            category: "service",
          },
          {
            title: "Custom Software Development",
            href: "/capabilities/software-development",
            description: "Bespoke high-concurrency backend services built for mission-critical reliability.",
            category: "service",
          },
          {
            title: "Website Development",
            href: "/capabilities/web-apps",
            description: "Edge-rendered, high-performance Next.js web applications & design systems.",
            category: "service",
          },
          {
            title: "Mobile Application Development",
            href: "/capabilities/software-development",
            description: "Native iOS/Android and Flutter cross-platform mobile engineering.",
            category: "service",
          },
          {
            title: "API & System Integration",
            href: "/capabilities/software-development",
            description: "Cryptographic microservices, event-driven webhooks & legacy bridge APIs.",
            category: "service",
          },
          {
            title: "UI/UX & 3D Experiences",
            href: "/capabilities/web-apps",
            description: "Interactive WebGL, GSAP digital experiences & precision design token systems.",
            category: "service",
          },
        ],
      },
      {
        groupTitle: "Data & Platform Engineering",
        items: [
          {
            title: "Data Engineering",
            href: "/capabilities/software-development",
            description: "Distributed streaming pipelines, lakehouse architectures & automated ETL.",
            category: "service",
          },
          {
            title: "Cloud Architecture",
            href: "/capabilities/software-development",
            description: "Containerized Kubernetes clusters, serverless computing & VPC governance.",
            category: "service",
          },
          {
            title: "Data Pipelines",
            href: "/capabilities/software-development",
            description: "High-throughput telemetry ingestion, schema evolution & real-time queues.",
            category: "service",
          },
          {
            title: "Analytics Systems",
            href: "/products/analytics",
            description: "Executive intelligence dashboards, custom KPI telemetry & cohort analysis.",
            category: "service",
          },
          {
            title: "Platform Modernisation",
            href: "/capabilities/software-development",
            description: "Zero-downtime database migrations & monolith-to-microservice decouplings.",
            category: "service",
          },
          {
            title: "Infrastructure Integration",
            href: "/capabilities/software-development",
            description: "CI/CD automated testing gates, observability stacks & infrastructure as code.",
            category: "service",
          },
        ],
      },
    ],
  },
  {
    title: "Our Work",
    href: "/our-work",
    items: [
      {
        title: "Selected Projects",
        href: "/our-work#selected-projects",
        description: "Verified case studies spanning eCommerce, AI search, and enterprise platforms.",
      },
      {
        title: "Case Studies",
        href: "/our-work#case-studies",
        description: "Technical deep-dives: architecture blueprints, performance gains, and business return.",
      },
      {
        title: "Engineering Showcase",
        href: "/our-work#showcase",
        description: "Interactive breakdown of production platforms engineered and delivered.",
      },
    ],
  },
  {
    title: "Company",
    href: "/team",
    items: [
      {
        title: "About Ashmyra",
        href: "/team#about",
        description: "Engineering practitioners dedicated to high-velocity, real-world software delivery.",
      },
      {
        title: "Leadership",
        href: "/team#leadership",
        description: "Executive and engineering leads steering technical strategy and commercial execution.",
      },
      {
        title: "Engineering Approach",
        href: "/team#approach",
        description: "Rigorous engineering standards, deterministic testing, and zero-compromise execution.",
      },
      {
        title: "Contact",
        href: "/contact",
        description: "Direct engineering discovery: discuss technical scope, timelines, and deliverables.",
      },
      {
        title: "Careers",
        href: "/contact?intent=careers",
        description: "Join our core team building autonomous intelligence and next-generation software.",
      },
    ],
  },
];
