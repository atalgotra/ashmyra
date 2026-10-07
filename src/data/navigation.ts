export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
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
      title: "Ashmyra Agentic Brain",
      desc: "Unified AI-native operating system for modern business operations.",
      href: "/products/ai",
    },
    items: [
      {
        title: "Ashmyra AI",
        href: "/products/ai",
        description: "Specialized autonomous agents, social intelligence & content workflows.",
        badge: "Core",
      },
      {
        title: "Ashmyra SEO",
        href: "/products/seo",
        description: "Continuous crawler, PageRank rebalancer & GEO answer engine readiness.",
        badge: "GEO",
      },
      {
        title: "Ashmyra CRM",
        href: "/products/crm",
        description: "Contextual task breakdown, dependency routing & predictive pipeline velocity.",
        badge: "CRM",
      },
      {
        title: "Ashmyra HRMS",
        href: "/products/hrms",
        description: "Complete 7-stage employee lifecycle: recruit, onboard, manage, pay, grow.",
        badge: "HRMS",
      },
      {
        title: "Ashmyra Analytics",
        href: "/products/analytics",
        description: "Multi-source scraping, cleaning, enrichment & real-time telemetry.",
        badge: "Data",
      },
      {
        title: "Ashmyra Automation",
        href: "/products/automation",
        description: "Intelligent workflows, event pipelines & enterprise tool orchestration.",
        badge: "Auto",
      },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    items: [
      {
        title: "For Startups",
        href: "/solutions#startups",
        description: "Launch MVPs and scale with AI-native architecture and rapid deployment.",
      },
      {
        title: "For SMEs",
        href: "/solutions#smes",
        description: "Modernize legacy systems and automate everyday manual operations.",
      },
      {
        title: "For Enterprises",
        href: "/solutions#enterprises",
        description: "Secure, compliant, high-throughput digital systems and agentic workflows.",
      },
    ],
  },
  {
    title: "AI",
    href: "/products/ai",
    badge: "Core",
  },
  {
    title: "Services",
    href: "/services",
    items: [
      {
        title: "Custom Software Engineering",
        href: "/services/software-development",
        description: "Bespoke SaaS products, cloud native platforms & high-performance apps.",
      },
      {
        title: "Agentic AI Development",
        href: "/services/ai-development",
        description: "Custom AI agents, LLM orchestration, RAG & autonomous workflow bots.",
      },
      {
        title: "Search & GEO Engineering",
        href: "/services/seo",
        description: "Next-gen technical SEO, content graph architecture & LLM answer engine readiness.",
      },
    ],
  },
  {
    title: "Work",
    href: "/#capability",
    badge: "Selected",
  },
  {
    title: "Company",
    href: "/about",
  },
];

export const FOOTER_LINKS = {
  products: [
    { name: "Ashmyra AI", href: "/products/ai" },
    { name: "Ashmyra SEO", href: "/products/seo" },
    { name: "Ashmyra HRMS", href: "/products/hrms" },
    { name: "Ashmyra Automation", href: "/products/automation" },
    { name: "Ashmyra Analytics", href: "/products/analytics" },
    { name: "Ashmyra CRM", href: "/products/crm" },
    { name: "Ashmyra Web", href: "/products/web" },
  ],
  solutions: [
    { name: "Startups & Scaleups", href: "/solutions#startups" },
    { name: "SMEs", href: "/solutions#smes" },
    { name: "Enterprises", href: "/solutions#enterprises" },
    { name: "HR Teams", href: "/solutions#hr-teams" },
    { name: "Marketing & Growth", href: "/solutions#marketing" },
    { name: "Sales Teams", href: "/solutions#sales" },
    { name: "Operations Teams", href: "/solutions#operations" },
  ],
  services: [
    { name: "Custom Software Development", href: "/services/software-development" },
    { name: "Agentic AI Development", href: "/services/ai-development" },
    { name: "Search & GEO Optimization", href: "/services/seo" },
    { name: "SaaS Architecture", href: "/services" },
    { name: "API & Data Engineering", href: "/services" },
    { name: "UI/UX Engineering", href: "/services" },
  ],
  company: [
    { name: "About Ashmyra", href: "/about" },
    { name: "Founders", href: "/about#founders" },
    { name: "Why Ashmyra", href: "/about#why-us" },
    { name: "Careers", href: "/about#careers" },
    { name: "Contact & Demo", href: "/contact" },
  ],
  resources: [
    { name: "Resource Center", href: "/resources" },
    { name: "AI & Agentic Guides", href: "/resources" },
    { name: "SEO in AI Search Era", href: "/resources" },
    { name: "HR Tech Modernization", href: "/resources" },
    { name: "Engineering Blog", href: "/resources" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Cookie Preferences", href: "/legal/privacy#cookies" },
    { name: "Security Architecture", href: "/legal/security" },
  ],
};
