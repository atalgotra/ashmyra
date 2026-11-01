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
  explanation?: string;
  overviewHref?: string;
  overviewLabel?: string;
  accentColor?: string;
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

import { CAPABILITIES_REGISTRY } from "./capabilities-registry";

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
    groups: CAPABILITIES_REGISTRY.map((group) => ({
      groupTitle: group.groupTitle,
      explanation: group.explanation,
      overviewHref: group.overviewHref,
      overviewLabel: group.overviewLabel,
      accentColor: group.accentColor,
      items: group.capabilities.map((c) => ({
        title: c.title,
        href: c.href,
        description: c.shortDesc,
        category: c.category === "AI & Intelligent Systems" ? "ai" : "service",
      })),
    })),
  },
  {
    title: "Our Work",
    href: "/our-work",
    items: [
      {
        title: "Case Studies",
        href: "/our-work#case-studies",
        description: "Technical breakdowns of complex enterprise systems and production architectures.",
      },
      {
        title: "Engineering Approach",
        href: "/our-work#engineering-principles",
        description: "Our architectural standards for workflow reliability, data integrity, and security.",
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
