export interface NavItem {
  title: string;
  href: string;
  description?: string;
  demoUrl?: string;
  category?: "product" | "service" | "solution" | "ai" | "company";
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
}

export const MAIN_NAV: NavSection[] = [
  {
    title: "Products",
    href: "/products",
    featured: {
      title: "Ashmyra Intelligent Operating System",
      desc: "Autonomous multi-agent architectures and enterprise software platforms engineered for production execution.",
      href: "/products/ai",
    },
    items: [
      {
        title: "Agentic Social Intelligence",
        href: "/products/ai",
        description: "Autonomous multi-agent swarms orchestrating cross-platform signals and content generation.",
        category: "product",
      },
      {
        title: "Agentic SEO Intelligence",
        href: "/products/seo",
        description: "Deep search telemetry, site crawler forensics and Generative Engine Optimization (GEO).",
        demoUrl: "https://veyrix.ashmyra.com/",
        category: "product",
      },
      {
        title: "AI Project Management",
        href: "/products/automation",
        description: "Enterprise workflow orchestrator with automated milestones and approval gates.",
        category: "product",
      },
      {
        title: "HRMS",
        href: "/products/hrms",
        description: "Workforce intelligence platform with resume parsing, statutory payroll and talent analytics.",
        category: "product",
      },
      {
        title: "Enterprise Communication",
        href: "/products/web",
        description: "Omnichannel customer communication stream unifying WhatsApp, Email and live messaging.",
        demoUrl: "https://omnira.ashmyra.com/",
        category: "product",
      },
      {
        title: "Data Intelligence",
        href: "/products/analytics",
        description: "Real-time streaming data pipelines, golden record synthesis and anomaly detection.",
        category: "product",
      },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    items: [
      {
        title: "Business Automation",
        href: "/solutions#business-automation",
        description: "End-to-end operational automation cutting manual overhead across business units.",
        category: "solution",
      },
      {
        title: "Enterprise Systems",
        href: "/solutions#enterprise-systems",
        description: "Mission-critical architectures engineered for 99.99% uptime and high transaction throughput.",
        category: "solution",
      },
      {
        title: "Intelligent Workflows",
        href: "/solutions#intelligent-workflows",
        description: "Self-healing business processes with automated exception routing and audit verification.",
        category: "solution",
      },
      {
        title: "Digital Transformation",
        href: "/solutions#digital-transformation",
        description: "Modernizing legacy stacks into responsive, event-driven cloud-native platforms.",
        category: "solution",
      },
      {
        title: "Custom Business Platforms",
        href: "/solutions#custom-platforms",
        description: "Tailored software ecosystems solving unique enterprise operational constraints.",
        category: "solution",
      },
    ],
  },
  {
    title: "AI & Automation",
    href: "/products/ai",
    items: [
      {
        title: "Agentic AI Development",
        href: "/services/ai-development",
        description: "Custom autonomous agent swarms engineered for reasoning, tool use and execution.",
        category: "ai",
      },
      {
        title: "Multi-Agent Systems",
        href: "/products/ai",
        description: "Consensus-driven multi-agent swarms collaborating across enterprise tasks.",
        category: "ai",
      },
      {
        title: "AI Integration",
        href: "/services/ai-development",
        description: "Embedding LLMs, specialized SLMs and vector databases into live production software.",
        category: "ai",
      },
      {
        title: "AI Workflow Automation",
        href: "/products/automation",
        description: "Document intelligence, automated decision trees and cognitive business workflows.",
        category: "ai",
      },
      {
        title: "AI Engineering",
        href: "/services/ai-development",
        description: "Model fine-tuning, RAG pipeline architecture and deterministic guardrail layers.",
        category: "ai",
      },
    ],
  },
  {
    title: "Services",
    href: "/services",
    items: [
      {
        title: "Website Development",
        href: "/services/web-apps",
        description: "High-performance edge-rendered Next.js digital platforms and design systems.",
        category: "service",
      },
      {
        title: "3D / GSAP Experiences",
        href: "/services/web-apps",
        description: "Award-winning WebGL, Three.js and GSAP kinetic digital experiences.",
        category: "service",
      },
      {
        title: "Mobile Application Development",
        href: "/services/software-development",
        description: "Native iOS/Android and Flutter cross-platform mobile engineering.",
        category: "service",
      },
      {
        title: "SaaS Development",
        href: "/services/software-development",
        description: "Full-cycle multi-tenant SaaS architecture, billing and subscription infrastructure.",
        category: "service",
      },
      {
        title: "Custom Software Development",
        href: "/services/software-development",
        description: "Bespoke high-concurrency software built for specific operational scaling.",
        category: "service",
      },
      {
        title: "Data Engineering",
        href: "/services/software-development",
        description: "Streaming pipelines, lakehouses, ETL automation and data modeling.",
        category: "service",
      },
      {
        title: "API Development",
        href: "/services/software-development",
        description: "High-throughput REST and GraphQL microservices with cryptographic security.",
        category: "service",
      },
      {
        title: "UI/UX Design",
        href: "/services/web-apps",
        description: "Precision enterprise product design systems, user flows and design tokens.",
        category: "service",
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
        description: "Verified case studies spanning eCommerce, AI search and enterprise platforms.",
      },
      {
        title: "Case Studies",
        href: "/our-work#case-studies",
        description: "Technical deep-dives: architecture blueprints, performance gains and business return.",
      },
      {
        title: "Engineering Showcase",
        href: "/our-work#showcase",
        description: "Interactive breakdown of platforms engineered and delivered to production.",
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
        title: "Contact",
        href: "/contact",
        description: "Direct engineering discovery: discuss technical scope, timelines and deliverables.",
      },
      {
        title: "Careers",
        href: "/contact?intent=careers",
        description: "Join our core team building autonomous intelligence and next-generation software.",
      },
    ],
  },
];
