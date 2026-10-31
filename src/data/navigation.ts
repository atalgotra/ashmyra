export interface NavItem {
  title: string;
  href: string;
  description?: string;
  category?: "product" | "service";
}

export interface NavSection {
  title: string;
  href: string;
  featured?: {
    title: string;
    desc: string;
    href: string;
  };
  items?: NavItem[];
}

export const MAIN_NAV: NavSection[] = [
  {
    title: "Products",
    href: "/products",
    featured: {
      title: "Ashmyra Intelligent Operating System",
      desc: "Autonomous multi-agent architectures and enterprise platforms engineered for production execution.",
      href: "/products/ai",
    },
    items: [
      {
        title: "Ashmyra Agentic AI",
        href: "/products/ai",
        description: "Autonomous multi-agent swarms for workflow and operations automation.",
        category: "product",
      },
      {
        title: "Ashmyra SEO",
        href: "/products/seo",
        description: "Deep search telemetry, site crawler & Generative Engine Optimization.",
        category: "product",
      },
      {
        title: "Ashmyra HRMS",
        href: "/products/hrms",
        description: "Workforce management platform with intelligent resume parsing & statutory payroll.",
        category: "product",
      },
      {
        title: "Ashmyra CRM",
        href: "/products/crm",
        description: "Customer intelligence platform with predictive pipeline & workload telemetry.",
        category: "product",
      },
      {
        title: "Ashmyra Analytics",
        href: "/products/analytics",
        description: "Real-time streaming data pipelines, anomaly detection & business intelligence.",
        category: "product",
      },
      {
        title: "Ashmyra Automation",
        href: "/products/automation",
        description: "Enterprise workflow orchestrator with approval gates & document intelligence.",
        category: "product",
      },
      {
        title: "Ashmyra Web",
        href: "/products/web",
        description: "Edge-rendered Next.js digital surfaces and high-performance applications.",
        category: "product",
      },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
  },
  {
    title: "AI",
    href: "/products/ai",
  },
  {
    title: "Services",
    href: "/services",
    items: [
      {
        title: "Custom Software Engineering",
        href: "/services/software-development",
        description: "Bespoke SaaS architectures, cloud platforms & high-concurrency systems.",
        category: "service",
      },
      {
        title: "Agentic AI Architecture",
        href: "/services/ai-development",
        description: "Custom multi-agent swarms, RAG pipelines & fine-tuned domain models.",
        category: "service",
      },
      {
        title: "Technical SEO & GEO Search",
        href: "/services/seo",
        description: "Authoritative knowledge graphs and Generative Engine Optimization.",
        category: "service",
      },
      {
        title: "Modern Web Platforms",
        href: "/services/web-apps",
        description: "High-performance edge applications, design systems & digital experiences.",
        category: "service",
      },
    ],
  },
  {
    title: "Work",
    href: "/our-work",
  },
  {
    title: "Company",
    href: "/team",
  },
];
