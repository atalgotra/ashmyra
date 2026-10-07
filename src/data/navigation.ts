export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  category?: "product" | "service";
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
    title: "Home",
    href: "/",
  },
  {
    title: "Products & Services",
    href: "/products",
    featured: {
      title: "Ashmyra Agentic Brain",
      desc: "Unified AI-native operating system that acts across your entire business.",
      href: "/products/ai",
    },
    items: [
      // ── Flagship Products ──────────────────────────────────
      {
        title: "Ashmyra Agentic AI",
        href: "/products/ai",
        description: "Autonomous agent swarms for social media, research & workflows.",
        badge: "AI Core",
        category: "product",
      },
      {
        title: "Ashmyra SEO",
        href: "/products/seo",
        description: "Real-time GSC/GA4 crawler, cannibalization radar & GEO readiness.",
        badge: "GEO",
        category: "product",
      },
      {
        title: "Ashmyra HRMS",
        href: "/products/hrms",
        description: "AI resume parser, proctored assessments & 360° exit clearance.",
        badge: "HRMS",
        category: "product",
      },
      {
        title: "Ashmyra CRM",
        href: "/products/crm",
        description: "Better than Jira: no sprints, AI workload heat graph & 70% lower cost.",
        badge: "CRM",
        category: "product",
      },
      {
        title: "Ashmyra Analytics",
        href: "/products/analytics",
        description: "15-stage data-to-revenue engine: scraping, deduplication & calling CRM.",
        badge: "Data",
        category: "product",
      },
      {
        title: "Ashmyra Automation",
        href: "/products/automation",
        description: "Resilient workflow orchestration, approval gates & document intelligence.",
        badge: "Orch",
        category: "product",
      },
      {
        title: "Ashmyra Web",
        href: "/products/web",
        description: "Ultra-fast Next.js edge applications & conversion architecture.",
        badge: "Web",
        category: "product",
      },

      // ── Engineering Services ───────────────────────────────
      {
        title: "Custom Software Engineering",
        href: "/services/software-development",
        description: "Bespoke SaaS architectures, cloud platforms & high-performance apps.",
        badge: "SaaS",
        category: "service",
      },
      {
        title: "Agentic AI Development",
        href: "/services/ai-development",
        description: "Custom LLM orchestration, RAG pipelines & multi-agent swarms.",
        badge: "LLM",
        category: "service",
      },
      {
        title: "Technical SEO & GEO Search",
        href: "/services/seo",
        description: "Next-gen content graphs & Generative Engine Optimization.",
        badge: "Search",
        category: "service",
      },
    ],
  },
  {
    title: "Our Work",
    href: "/#capability",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Our Team",
    href: "/about#founders",
    badge: "Leadership",
  },
];

export const FOOTER_LINKS = {
  products: [
    { name: "Ashmyra AI", href: "/products/ai" },
    { name: "Ashmyra SEO", href: "/products/seo" },
    { name: "Ashmyra HRMS", href: "/products/hrms" },
    { name: "Ashmyra CRM", href: "/products/crm" },
    { name: "Ashmyra Analytics", href: "/products/analytics" },
    { name: "Ashmyra Automation", href: "/products/automation" },
    { name: "Ashmyra Web", href: "/products/web" },
  ],
  solutions: [
    { name: "Startups & Scaleups", href: "/solutions#startups" },
    { name: "SMEs", href: "/solutions#smes" },
    { name: "Enterprises", href: "/solutions#enterprises" },
    { name: "HR & People Ops", href: "/solutions#hr-teams" },
    { name: "Marketing & Growth", href: "/solutions#marketing" },
    { name: "Sales Teams", href: "/solutions#sales" },
    { name: "Operations Teams", href: "/solutions#operations" },
  ],
  services: [
    { name: "Custom Software Development", href: "/services/software-development" },
    { name: "Agentic AI Development", href: "/services/ai-development" },
    { name: "Search & GEO Optimization", href: "/services/seo" },
    { name: "Enterprise Architecture", href: "/services" },
    { name: "API & Data Engineering", href: "/services" },
  ],
  company: [
    { name: "About Ashmyra", href: "/about" },
    { name: "Our Founders & Leadership", href: "/about#founders" },
    { name: "Why Ashmyra", href: "/about#why-us" },
    { name: "Selected Client Work", href: "/#capability" },
    { name: "Contact & Live Demo", href: "/contact" },
  ],
  resources: [
    { name: "Resource Center", href: "/resources" },
    { name: "Agentic AI vs Chatbots", href: "/resources/agentic-ai-vs-chatbots" },
    { name: "SEO in Generative Era", href: "/resources/seo-in-the-age-of-generative-engines" },
    { name: "Modernizing HR Tech", href: "/resources/modernizing-workforce-tech-from-spreadsheets-to-ai" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Security Architecture", href: "/legal/security" },
  ],
};
