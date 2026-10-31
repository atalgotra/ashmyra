export interface NavItem {
  title: string;
  href: string;
  description?: string;
  demoUrl?: string;
  badge?: string;
  category?: "product" | "service" | "solution" | "ai" | "company";
}

export interface NavSection {
  title: string;
  href: string;
  badge?: string;
  isDirectLink?: boolean;
  featured?: {
    title: string;
    desc: string;
    href: string;
    badge?: string;
  };
  items?: NavItem[];
}

export const MAIN_NAV: NavSection[] = [
  {
    title: "Products",
    href: "/products",
    featured: {
      title: "Production Software Deployments",
      desc: "Test working production platforms connected to live agent swarms, crawlers, and data pipelines.",
      href: "/demos",
      badge: "5 Live Demos",
    },
    items: [
      {
        title: "MailFlow",
        href: "/demos#mailflow",
        description: "Autonomous cold email warmup, mailbox rotation & deliverability engine.",
        demoUrl: "https://mailflow.ashmyra.com/",
        badge: "Cold Email AI",
      },
      {
        title: "Prospect IQ",
        href: "/demos#prospectiq",
        description: "B2B lead discovery, contact scraping & multi-source waterfall verification.",
        demoUrl: "https://prospectiq.ashmyra.com/",
        badge: "Lead Intel",
      },
      {
        title: "Omnira",
        href: "/demos#omnira",
        description: "Agentic AI social media manager for YouTube, LinkedIn, FB & IG.",
        demoUrl: "https://omnira.ashmyra.com/",
        badge: "Social AI",
      },
      {
        title: "Unveil",
        href: "/demos#unveil",
        description: "Generative Engine Optimization (GEO) & brand citation footprint radar.",
        demoUrl: "https://unveil.ashmyra.com/",
        badge: "GEO Radar",
      },
      {
        title: "Veyrix",
        href: "/demos#veyrix",
        description: "Deep spider crawler, multi-agent technical SEO & live search telemetry.",
        demoUrl: "https://veyrix.ashmyra.com/",
        badge: "Deep SEO",
      },
    ],
  },
  {
    title: "Live Demos",
    href: "/demos",
    badge: "5 Live",
    isDirectLink: true,
  },
  {
    title: "Our Work",
    href: "/our-work",
    isDirectLink: true,
  },
  {
    title: "Blog",
    href: "/blog",
    badge: "New",
    isDirectLink: true,
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
        description: "Ashish Talgotra (Founder & Lead Architect) and engineering practitioners.",
      },
      {
        title: "Direct Discovery",
        href: "/contact?intent=discovery",
        description: "Discuss system specifications, architecture blueprints, and delivery scope.",
      },
      {
        title: "Careers",
        href: "/contact?intent=careers",
        description: "Join our core engineering studio building autonomous AI and distributed systems.",
      },
    ],
  },
];
