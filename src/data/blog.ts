export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  keyTakeaways?: string[];
  codeSnippet?: {
    language: string;
    code: string;
    caption?: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  bannerImage: string;
  bannerAlt: string;
  category: "Agentic AI" | "Search & GEO" | "Enterprise Tech" | "Architecture";
  readTime: string;
  date: string;
  publishedAt: string; // ISO date format for JSON-LD schema
  updatedAt: string;   // ISO date format for JSON-LD schema
  author: BlogAuthor;
  summary: string;
  sections: BlogSection[];
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "agentic-ai-vs-chatbots",
    title: "Why Traditional Chatbots Fail: The Shift to Autonomous Agentic AI",
    metaTitle: "Agentic AI vs Chatbots | Systems That Act",
    metaDesc: "Discover why conversation-only chatbots fail enterprise tests and how autonomous agentic AI executes real-world business workflows safely.",
    bannerImage: "/blog/agentic-ai-banner.jpg",
    bannerAlt: "Autonomous AI agent network orchestrating workflows across neural data nodes",
    category: "Agentic AI",
    readTime: "6 min read",
    date: "March 2025",
    publishedAt: "2025-03-15T09:00:00+05:30",
    updatedAt: "2026-10-20T14:30:00+05:30",
    author: {
      name: "Ashish Talgotra",
      role: "Founder & AI Engineer",
      avatar: "/brand/ashish-talgotra.png",
    },
    summary:
      "Chatbots answer questions, but agentic AI completes real business objectives. Here is how modern orchestration turns language models into execution engines.",
    tags: ["Agentic AI", "Autonomous Agents", "Enterprise Automation", "LLM Orchestration"],
    sections: [
      {
        heading: "The Limits of Conversational Chatbots",
        paragraphs: [
          "The first generation of corporate AI was dominated by simple chatbot wrappers. While entertaining, conversational interfaces frequently fail enterprise utility tests because conversation alone does not move inventory, reconcile invoices, or update live databases.",
          "Most internal chatbots become expensive search boxes that summarize text without the ability to interact with transactional ERPs, ticketing software, or CRM pipelines. When user intent requires complex multi-step execution, passive chatbots hit an architectural dead end.",
        ],
        keyTakeaways: [
          "Conversational wrappers provide text synthesis, but cannot execute stateful, multi-step actions.",
          "Enterprise ROI requires deterministic execution, not open-ended chat sessions.",
        ],
      },
      {
        heading: "Architectural Foundations of Agentic AI",
        paragraphs: [
          "Agentic AI marks a fundamental architectural shift. Instead of waiting for a human prompt and replying with prose, an agentic system decomposes goals into structured plans, selects tools, interfaces with existing APIs, checks its own work, and only requests human intervention when policy boundaries are reached.",
          "Unlike stateless prompts, agent swarms maintain durable state across asynchronous milestones. If an external API errors out or returns malformed payloads, autonomous agents retry, find alternate routing paths, and self-heal without crashing business workflows.",
        ],
      },
      {
        heading: "Deterministic Guardrails for Production Safety",
        paragraphs: [
          "At Ashmyra, our agentic orchestration layer is designed around deterministic verification. By placing strict schema validation and permission walls between language models and real-world tools, businesses unlock autonomous operations without risking unintended side-effects.",
          "Every tool invocation is logged into an immutable audit trail, complete with token telemetry, latency tracking, and cryptographic step receipts. This allows enterprise risk officers to audit autonomous actions with complete transparency.",
        ],
        keyTakeaways: [
          "Tool permissions must be isolated through sandboxed execution environments.",
          "Cryptographic audit logs ensure full regulatory compliance across automated actions.",
        ],
      },
    ],
  },
  {
    slug: "seo-in-the-age-of-generative-engines",
    title: "Generative Engine Optimization (GEO): Ranking in ChatGPT, Perplexity and Google AI",
    metaTitle: "GEO Guide: Ranking in ChatGPT & Perplexity",
    metaDesc: "Learn Generative Engine Optimization (GEO) strategies to ensure your enterprise brand is cited accurately across ChatGPT, Perplexity, and AI Overviews.",
    bannerImage: "/blog/geo-search-banner.jpg",
    bannerAlt: "Generative Engine Optimization network citation nodes and semantic search intelligence",
    category: "Search & GEO",
    readTime: "8 min read",
    date: "February 2025",
    publishedAt: "2025-02-10T10:00:00+05:30",
    updatedAt: "2026-10-18T16:00:00+05:30",
    author: {
      name: "Ashish Talgotra",
      role: "Founder & AI Engineer",
      avatar: "/brand/ashish-talgotra.png",
    },
    summary:
      "When searchers query LLMs instead of typing 3-word keywords into Google, how do you ensure your brand is cited as the definitive source?",
    tags: ["GEO", "Generative Engine Optimization", "Perplexity AI", "Search Intelligence", "AI Overviews"],
    sections: [
      {
        heading: "The Paradigm Shift: From Blue Links to AI Answers",
        paragraphs: [
          "The search landscape is undergoing its most radical evolution since the invention of PageRank. Over 30% of high-intent B2B research queries are now conducted directly inside generative AI platforms such as Perplexity, ChatGPT, and Google AI Overviews.",
          "Users no longer browse through lists of ten search results. Instead, generative answer engines synthesize real-time summaries and cite only the top two or three trusted authorities as source material.",
        ],
      },
      {
        heading: "Why Traditional SEO Tactics Fall Short in LLMs",
        paragraphs: [
          "Traditional keyword stuffing, superficial blog filler, and generic backlink networks do not influence generative models. AI answer engines rely on semantic entity authority, knowledge graph coherence, citation consensus, and structured schema completeness.",
          "Large language models build vector associations between problems and commercial brands. If your domain lacks clear entity definitions and structured data, generative engines cannot resolve your company as the authoritative answer.",
        ],
      },
      {
        heading: "Core Tenets of Generative Engine Optimization",
        paragraphs: [
          "To thrive in this new era, companies must implement Generative Engine Optimization (GEO). This involves structuring company information so AI models recognize your domain as the primary authoritative entity for your product category.",
          "Key tactical pillars include comprehensive JSON-LD entity schemas, high-density factual content tables, direct quotes from verified domain experts, and machine-readable API documentation that crawlers can index instantaneously.",
        ],
        keyTakeaways: [
          "Entities replace keywords: LLMs index relationships and semantic truth consensus.",
          "Deep JSON-LD schemas give LLM crawlers unambiguous corporate facts.",
        ],
      },
    ],
  },
  {
    slug: "modernizing-workforce-tech-from-spreadsheets-to-ai",
    title: "The Invisible Cost of Fragmented HR Systems: A Blueprint for Consolidation",
    metaTitle: "Modernizing HR Tech: Spreadsheets to AI",
    metaDesc: "Explore how fragmented HR software costs enterprises thousands of hours and learn the blueprint for consolidating workforce systems with AI automation.",
    bannerImage: "/blog/hrms-tech-banner.jpg",
    bannerAlt: "Enterprise HRMS workforce architecture dashboard with biometric attendance and telemetry",
    category: "Enterprise Tech",
    readTime: "5 min read",
    date: "January 2025",
    publishedAt: "2025-01-20T08:30:00+05:30",
    updatedAt: "2026-10-15T11:00:00+05:30",
    author: {
      name: "Ashish Talgotra",
      role: "Founder & AI Engineer",
      avatar: "/brand/ashish-talgotra.png",
    },
    summary:
      "Running payroll on one system, attendance on another, and performance on spreadsheets creates massive friction. How unified HRMS architectures save thousands of hours.",
    tags: ["HRMS", "Workforce Automation", "Enterprise Software", "Payroll Automation"],
    sections: [
      {
        heading: "The Fragmented HR Application Sprawl",
        paragraphs: [
          "Growing companies frequently adopt point solutions as immediate needs arise: an applicant tracking tool here, biometric clock-in hardware there, and payroll software from a local vendor.",
          "The result is a fragmented data labyrinth. HR administrators spend days manually copying hours from clock-in software into payroll spreadsheets, recalculating overtime errors, and manually chasing leave approvals via email chains.",
        ],
      },
      {
        heading: "Hidden Operational and Compliance Costs",
        paragraphs: [
          "Manual spreadsheet reconciliation introduces statutory payroll calculation discrepancies, delayed onboarding provisioning, and security loopholes during employee offboarding.",
          "When an employee departs, failing to immediately revoke access across multi-department systems (IT laptops, cloud logins, payroll tokens) exposes companies to severe compliance and intellectual property hazards.",
        ],
      },
      {
        heading: "The Blueprint for AI-Native Workforce Consolidation",
        paragraphs: [
          "Consolidating the full employee lifecycle—recruitment, onboarding, attendance, payroll, and appraisals—into one intelligent data fabric removes operational friction and provides employees with a unified, professional experience.",
          "By introducing automated AI resume parsing, live proctored skill assessments, and unified one-click statutory payroll, modern operations teams save hundreds of hours every month while boosting employee retention.",
        ],
        keyTakeaways: [
          "Unifying attendance with payroll eliminates reconciliation cycle delays.",
          "Automated RBAC role provisioning protects company security during onboarding and exits.",
        ],
      },
    ],
  },
];

import { client } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";

export async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  if (isSanityConfigured && client) {
    try {
      const sanityPosts = await client.fetch<any[]>(
        `*[_type == "post"] | order(publishedAt desc) {
          "slug": slug.current,
          title,
          metaTitle,
          metaDesc,
          "bannerImage": bannerImage.asset->url,
          "bannerAlt": bannerImage.alt,
          category,
          readTime,
          publishedAt,
          "updatedAt": _updatedAt,
          author,
          summary,
          tags,
          sections
        }`
      );
      if (sanityPosts && sanityPosts.length > 0) {
        return sanityPosts.map((p) => ({
          slug: p.slug,
          title: p.title,
          metaTitle: p.metaTitle || p.title,
          metaDesc: p.metaDesc || p.summary,
          bannerImage: p.bannerImage || "/brand/ashmyra-og-image.png",
          bannerAlt: p.bannerAlt || p.title,
          category: p.category || "Agentic AI",
          readTime: p.readTime || "5 min read",
          date: p.publishedAt
            ? new Date(p.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })
            : "Recent",
          publishedAt: p.publishedAt || new Date().toISOString(),
          updatedAt: p.updatedAt || new Date().toISOString(),
          author: p.author || {
            name: "Ashish Talgotra",
            role: "Founder & AI Engineer",
          },
          summary: p.summary || "",
          sections: p.sections || [],
          tags: p.tags || [],
        }));
      }
    } catch (err) {
      console.warn("Sanity fetch error, falling back to static posts", err);
    }
  }
  return BLOG_POSTS;
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await fetchAllBlogPosts();
  return posts.find((p) => p.slug === slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
