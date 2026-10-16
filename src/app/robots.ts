import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all major search engines full access to pages and static assets
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Googlebot full indexing
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      // Bingbot & Bing AI / Copilot
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/"],
      },
      // OpenAI ChatGPT crawler & SearchGPT crawler
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      // Perplexity AI crawler
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Anthropic Claude crawlers
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      // Common Crawl (used by foundational LLMs)
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // Meta AI crawlers
      {
        userAgent: "FacebookBot",
        allow: "/",
      },
      // Apple Intelligence crawlers
      {
        userAgent: "Applebot",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      // Google Gemini / Bard
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // ByteDance / TikTok crawler
      {
        userAgent: "Bytespider",
        allow: "/",
      },
      // Amazon Alexa & Bedrock crawler
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
      // You.com AI search
      {
        userAgent: "YouBot",
        allow: "/",
      },
    ],
    sitemap: "https://www.ashmyra.com/sitemap.xml",
    host: "https://www.ashmyra.com",
  };
}
