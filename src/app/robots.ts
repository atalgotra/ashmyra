import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all major search engines full access
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/favicon.ico"],
      },
      // Allow Google's AI crawlers (SGE, Gemini training, etc.)
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      // Allow Bing AI / Copilot crawler
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/"],
      },
      // Explicitly allow ChatGPT / OpenAI crawler
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      // Allow Perplexity AI crawler
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Allow Claude / Anthropic crawler
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      // Allow Anthropic's crawler
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      // Allow Common Crawl (used by many AI training sets)
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // Allow Meta AI crawlers
      {
        userAgent: "FacebookBot",
        allow: "/",
      },
      // Allow Apple Intelligence crawler
      {
        userAgent: "Applebot",
        allow: "/",
      },
      // Explicitly allow Gemini / Google Bard
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Allow YouBot (You.com AI search)
      {
        userAgent: "YouBot",
        allow: "/",
      },
    ],
    sitemap: "https://ashmyra.com/sitemap.xml",
    host: "https://ashmyra.com",
  };
}
