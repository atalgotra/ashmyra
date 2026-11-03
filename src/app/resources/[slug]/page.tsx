import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ARTICLES } from "@/data/resources";
import { Breadcrumb } from "@/components/breadcrumb";
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, Sparkles } from "lucide-react";

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.metaTitle || article.title}`,
    description: article.metaDesc || article.summary,
    alternates: {
      canonical: `https://www.ashmyra.com/resources/${article.slug}`,
    },
    openGraph: {
      title: `${article.metaTitle || article.title}`,
      description: article.metaDesc || article.summary,
      url: `https://www.ashmyra.com/resources/${article.slug}`,
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": article.title,
    "description": article.metaDesc || article.summary,
    "url": `https://www.ashmyra.com/resources/${article.slug}`,
    "datePublished": "2025-01-15T08:00:00+05:30",
    "dateModified": "2026-10-16T12:00:00+05:30",
    "author": {
      "@type": "Person",
      "name": "Ashish Talgotra",
      "jobTitle": "Founder & Lead AI Architect",
      "url": "https://www.ashmyra.com/team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ashmyra Technologies",
      "url": "https://www.ashmyra.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ashmyra.com/brand/ashmyra-icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.ashmyra.com/resources/${article.slug}`
    },
    "articleSection": article.category,
    "inLanguage": "en-US"
  };

  return (
    <article className="pt-32 pb-24 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation Trail */}
        <div className="mb-8">
          <Breadcrumb
            items={[
              { name: "Resources", href: "/resources" },
              { name: article.title },
            ]}
          />
        </div>

        {/* Article Header */}
        <header className="mb-12 pb-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="flex items-center gap-3 text-xs font-mono mb-4" style={{ color: "var(--text-muted)" }}>
            <span className="px-2.5 py-0.5 rounded-full font-semibold" style={{ backgroundColor: "var(--theme-pill-bg, rgba(79,70,229,0.1))", border: "1px solid var(--border)", color: "var(--accent, #4f46e5)" }}>
              {article.category}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span>&bull;</span>
            <span>{article.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
            {article.title}
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-relaxed font-normal" style={{ color: "var(--text-muted)" }}>
            {article.summary}
          </p>

          <div className="mt-6 flex items-center justify-between pt-6 text-xs font-mono" style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}>
            <span>Published by Ashmyra Engineering Research</span>
            <span className="font-semibold" style={{ color: "var(--accent, #4f46e5)" }}>ashmyra.com</span>
          </div>
        </header>

        {/* Article Body */}
        <div className="space-y-10 text-sm sm:text-base leading-relaxed font-sans" style={{ color: "var(--text-muted)" }}>
          {article.sections.map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-3xl text-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>
            Explore how Ashmyra can help implement these principles in your stack
          </h3>
          <p className="text-xs sm:text-sm max-w-lg mx-auto mb-6" style={{ color: "var(--text-muted)" }}>
            Our systems engineers design and deploy tailored architectures for modern teams.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-xs shadow-lg transition-all hover:scale-105"
            style={{ backgroundColor: "var(--accent, #4f46e5)" }}
          >
            <span>Talk to an Architect</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
