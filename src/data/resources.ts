export interface Article {
  slug: string;
  title: string;
  category: "AI & Agents" | "SEO & Search" | "HR & Workforce" | "Engineering";
  readTime: string;
  date: string;
  summary: string;
  content: string[];
}

export const ARTICLES: Article[] = [
  {
    slug: "agentic-ai-vs-chatbots",
    title: "Why Traditional Chatbots Fail: The Shift to Autonomous Agentic AI",
    category: "AI & Agents",
    readTime: "6 min read",
    date: "March 2025",
    summary: "Chatbots answer questions, but agentic AI completes real business objectives. Here is how modern orchestration turns language models into execution engines.",
    content: [
      "The first generation of corporate AI was dominated by simple chatbot wrappers. While entertaining, conversational interfaces frequently fail enterprise utility tests because conversation alone does not move inventory, reconcile invoices, or update databases.",
      "Agentic AI marks a fundamental architectural shift. Instead of waiting for a human prompt and replying with prose, an agentic system decomposes goals into structured plans, selects tools, interfaces with existing APIs, checks its own work, and only requests human intervention when policy boundaries are reached.",
      "At Ashmyra, our agentic orchestration layer is designed around deterministic verification. By placing strict schema validation between language models and real-world tools, businesses unlock autonomous operations without risking unintended side-effects.",
    ],
  },
  {
    slug: "seo-in-the-age-of-generative-engines",
    title: "Generative Engine Optimization (GEO): Ranking in ChatGPT, Perplexity and Google AI",
    category: "SEO & Search",
    readTime: "8 min read",
    date: "February 2025",
    summary: "When searchers query LLMs instead of typing 3-word keywords into Google, how do you ensure your brand is cited as the definitive source?",
    content: [
      "The search landscape is undergoing its most radical evolution since the invention of PageRank. Over 30% of high-intent B2B research queries are now conducted directly inside generative AI platforms such as Perplexity, ChatGPT, and AI Overviews.",
      "Traditional keyword stuffing and generic backlink farms do not influence generative models. AI answer engines rely on semantic entity authority, knowledge graph coherence, citation consensus, and structured data completeness.",
      "To thrive in this new era, companies must implement Generative Engine Optimization (GEO). This involves structuring company information so AI models recognize your domain as the primary authoritative entity for your product category.",
    ],
  },
  {
    slug: "modernizing-workforce-tech-from-spreadsheets-to-ai",
    title: "The Invisible Cost of Fragmented HR Systems: A Blueprint for Consolidation",
    category: "HR & Workforce",
    readTime: "5 min read",
    date: "January 2025",
    summary: "Running payroll on one system, attendance on another, and performance on spreadsheets creates massive friction. How unified HRMS architectures save thousands of hours.",
    content: [
      "Growing companies frequently adopt point solutions as immediate needs arise: an applicant tracking tool here, biometric clock-in hardware there, and payroll software from a local vendor.",
      "The result is a fragmented data labyrinth. HR administrators spend days manually copying hours from clock-in software into payroll spreadsheets, recalculating overtime errors, and manually chasing leave approvals.",
      "Consolidating the full employee lifecycle—recruitment, onboarding, attendance, payroll, and appraisals—into one intelligent data fabric removes operational friction and provides employees with a unified, professional experience.",
    ],
  },
];

export interface CaseStudyPlaceholder {
  id: string;
  title: string;
  badge: string;
  industry: string;
  status: string;
  challenge: string;
  approach: string;
  solution: string;
  technologies: string[];
}

export const CASE_STUDY_PREVIEWS: CaseStudyPlaceholder[] = [
  {
    id: "logistics-orchestrator",
    title: "Autonomous Logistics Dispatch & Document Processing",
    badge: "Case Study / Architectural Reference",
    industry: "Supply Chain & Freight Logistics",
    status: "Production Deployment",
    challenge: "A mid-sized freight carrier struggled with processing over 800 daily paper and PDF bills of lading, resulting in average dispatch delays of 4.5 hours and frequent data entry mismatches.",
    approach: "Designed a multi-modal Agentic AI pipeline with automated OCR ingestion, semantic line-item extraction, automated rate verification against carrier contracts, and immediate ERP synchronization.",
    solution: "Ashmyra Automation integrated with custom Agentic AI workers to process documents in under 12 seconds with automated exception routing for human review.",
    technologies: ["Ashmyra AI Orchestrator", "Ashmyra Automation", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    id: "enterprise-hrms-consolidation",
    title: "Unified Workforce Management for Multi-Location Operations",
    badge: "Case Study / Architectural Reference",
    industry: "Manufacturing & Retail Operations",
    status: "Enterprise Rollout",
    challenge: "A regional enterprise with 1,800+ employees across 12 facilities used three disparate systems for biometric clock-ins, leave tracking, and payroll, creating recurring statutory calculation discrepancies.",
    approach: "Consolidated all locations onto Ashmyra HRMS with centralized cloud biometric sync, automated shift roster management, and unified one-click payroll generation.",
    solution: "Eliminated manual reconciliation spreadsheets, reduced month-end payroll processing from 5 days to 2 hours, and provided employees with mobile self-service.",
    technologies: ["Ashmyra HRMS", "Biometric Gateway", "Next.js", "Redis", "AWS Cloud"],
  },
];
