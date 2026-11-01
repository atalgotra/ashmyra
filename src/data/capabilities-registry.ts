export interface CapabilityEntry {
  id: string;
  title: string;
  category: "AI & Intelligent Systems" | "Software & Product Engineering" | "Data & Platform Engineering";
  shortDesc: string;
  iconName: string;
  destinationType: "page" | "anchor";
  href: string;
  detailedPageRef?: string;
}

export interface CapabilityCategoryGroup {
  groupTitle: "AI & Intelligent Systems" | "Software & Product Engineering" | "Data & Platform Engineering";
  explanation: string;
  accentColor: string;
  overviewHref: string;
  overviewLabel: string;
  capabilities: CapabilityEntry[];
}

export const CAPABILITIES_REGISTRY: CapabilityCategoryGroup[] = [
  {
    groupTitle: "AI & Intelligent Systems",
    explanation: "Multi-agent runtimes, custom model integration and reasoning workflows.",
    accentColor: "#818cf8", // Indigo
    overviewHref: "/capabilities#agentic-ai",
    overviewLabel: "Explore AI Capabilities →",
    capabilities: [
      {
        id: "agentic-ai-dev",
        title: "Agentic AI Development",
        category: "AI & Intelligent Systems",
        shortDesc: "Autonomous agent swarms for reasoning and tool use.",
        iconName: "Bot",
        destinationType: "page",
        href: "/capabilities/ai-development",
        detailedPageRef: "/capabilities/ai-development",
      },
      {
        id: "multi-agent-systems",
        title: "Multi-Agent Systems",
        category: "AI & Intelligent Systems",
        shortDesc: "Coordinated agent DAGs and consensus planning.",
        iconName: "Workflow",
        destinationType: "anchor",
        href: "/capabilities#multi-agent",
      },
      {
        id: "rag-knowledge-systems",
        title: "RAG & Knowledge Systems",
        category: "AI & Intelligent Systems",
        shortDesc: "Hybrid dense-lexical vector retrieval engines.",
        iconName: "Database",
        destinationType: "anchor",
        href: "/capabilities#rag-knowledge",
      },
      {
        id: "ai-integration",
        title: "AI Integration",
        category: "AI & Intelligent Systems",
        shortDesc: "Production LLM APIs embedded securely in tech stacks.",
        iconName: "Cpu",
        destinationType: "anchor",
        href: "/capabilities#ai-integration",
      },
      {
        id: "intelligent-workflow-automation",
        title: "Intelligent Workflow Automation",
        category: "AI & Intelligent Systems",
        shortDesc: "Cognitive task routing and document processing.",
        iconName: "Zap",
        destinationType: "anchor",
        href: "/capabilities#workflow-automation",
      },
      {
        id: "ai-engineering-evaluation",
        title: "AI Engineering & Evaluation",
        category: "AI & Intelligent Systems",
        shortDesc: "Automated regression tests and guardrail layers.",
        iconName: "ShieldCheck",
        destinationType: "anchor",
        href: "/capabilities#ai-evaluation",
      },
    ],
  },
  {
    groupTitle: "Software & Product Engineering",
    explanation: "Multi-tenant SaaS, high-concurrency backends and high-performance web surfaces.",
    accentColor: "#22d3ee", // Cyan
    overviewHref: "/capabilities#software-saas",
    overviewLabel: "Explore Software Engineering →",
    capabilities: [
      {
        id: "saas-development",
        title: "SaaS Development",
        category: "Software & Product Engineering",
        shortDesc: "Multi-tenant architecture, billing and seat tiers.",
        iconName: "Layers",
        destinationType: "page",
        href: "/capabilities/software-development",
        detailedPageRef: "/capabilities/software-development",
      },
      {
        id: "custom-software-dev",
        title: "Custom Software Development",
        category: "Software & Product Engineering",
        shortDesc: "Bespoke high-concurrency enterprise services.",
        iconName: "Code2",
        destinationType: "page",
        href: "/capabilities/software-development",
        detailedPageRef: "/capabilities/software-development",
      },
      {
        id: "website-development",
        title: "Website Development",
        category: "Software & Product Engineering",
        shortDesc: "Performant Next.js digital platforms and design systems.",
        iconName: "Globe",
        destinationType: "page",
        href: "/capabilities/web-apps",
        detailedPageRef: "/capabilities/web-apps",
      },
      {
        id: "mobile-app-dev",
        title: "Mobile Application Development",
        category: "Software & Product Engineering",
        shortDesc: "Native iOS/Android and cross-platform apps.",
        iconName: "Smartphone",
        destinationType: "anchor",
        href: "/capabilities#mobile-applications",
      },
      {
        id: "api-system-integration",
        title: "API & System Integration",
        category: "Software & Product Engineering",
        shortDesc: "Event-driven webhooks, REST and messaging buses.",
        iconName: "Network",
        destinationType: "anchor",
        href: "/capabilities#api-integration",
      },
      {
        id: "ui-ux-3d-experiences",
        title: "UI/UX & 3D Experiences",
        category: "Software & Product Engineering",
        shortDesc: "Interactive WebGL, GSAP motion and component tokens.",
        iconName: "Palette",
        destinationType: "page",
        href: "/capabilities/web-apps",
        detailedPageRef: "/capabilities/web-apps",
      },
    ],
  },
  {
    groupTitle: "Data & Platform Engineering",
    explanation: "Scalable cloud architectures, event streaming pipelines and system observability.",
    accentColor: "#34d399", // Emerald
    overviewHref: "/capabilities#tech-foundation",
    overviewLabel: "Explore Platform & Cloud →",
    capabilities: [
      {
        id: "data-engineering",
        title: "Data Engineering",
        category: "Data & Platform Engineering",
        shortDesc: "Distributed batch and real-time streaming architectures.",
        iconName: "Database",
        destinationType: "anchor",
        href: "/capabilities#data-engineering",
      },
      {
        id: "cloud-architecture",
        title: "Cloud Architecture",
        category: "Data & Platform Engineering",
        shortDesc: "Containerized clusters, VPC routing and serverless infra.",
        iconName: "Cloud",
        destinationType: "anchor",
        href: "/capabilities#cloud-architecture",
      },
      {
        id: "data-pipelines",
        title: "Data Pipelines",
        category: "Data & Platform Engineering",
        shortDesc: "ETL ingestion workflows and real-time queues.",
        iconName: "Activity",
        destinationType: "anchor",
        href: "/capabilities#data-pipelines",
      },
      {
        id: "analytics-systems",
        title: "Analytics Systems",
        category: "Data & Platform Engineering",
        shortDesc: "Telemetry dashboards and custom metric calculation.",
        iconName: "BarChart3",
        destinationType: "anchor",
        href: "/capabilities#analytics-systems",
      },
      {
        id: "platform-modernisation",
        title: "Platform Modernisation",
        category: "Data & Platform Engineering",
        shortDesc: "Monolith decoupling and zero-downtime database updates.",
        iconName: "RefreshCw",
        destinationType: "anchor",
        href: "/capabilities#platform-modernisation",
      },
      {
        id: "infrastructure-integration",
        title: "Infrastructure Integration",
        category: "Data & Platform Engineering",
        shortDesc: "CI/CD testing automation and telemetry monitoring.",
        iconName: "Server",
        destinationType: "anchor",
        href: "/capabilities#infrastructure-integration",
      },
    ],
  },
];
