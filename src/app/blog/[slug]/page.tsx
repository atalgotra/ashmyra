import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES } from "@/data/resources";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Share2,
  Sparkles,
  ArrowUpRight,
  UserCheck,
} from "lucide-react";

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
    title: `${article.metaTitle || article.title} | Ashmyra Blog`,
    description: article.metaDesc || article.summary,
    alternates: {
      canonical: `https://www.ashmyra.com/blog/${article.slug}`,
    },
    openGraph: {
      title: `${article.metaTitle || article.title} | Ashmyra Blog`,
      description: article.metaDesc || article.summary,
      url: `https://www.ashmyra.com/blog/${article.slug}`,
    },
  };
}

export default async function BlogPostPage({
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
    headline: article.title,
    description: article.metaDesc || article.summary,
    url: `https://www.ashmyra.com/blog/${article.slug}`,
    datePublished: "2025-01-15T08:00:00+05:30",
    dateModified: "2026-11-01T12:00:00+05:30",
    author: {
      "@type": "Person",
      name: "Ashish Talgotra",
      jobTitle: "Founder & Lead AI Architect",
      url: "https://www.ashmyra.com/team",
    },
    publisher: {
      "@type": "Organization",
      name: "Ashmyra Technologies",
      url: "https://www.ashmyra.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ashmyra.com/brand/ashmyra-icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.ashmyra.com/blog/${article.slug}`,
    },
    articleSection: article.category,
    inLanguage: "en-US",
  };

  return (
    <article className="pt-28 sm:pt-32 pb-24 min-h-screen bg-[#05070c] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Engineering Blog", href: "/blog" },
              { label: article.title },
            ]}
          />
        </div>

        {/* Article Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400 mb-5">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/25">
              {article.category}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-neutral-500" />
              <span>{article.readTime}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-neutral-500" />
              <span>{article.date}</span>
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans border-l-2 border-indigo-500 pl-4 py-1 italic bg-indigo-500/[0.03] rounded-r-xl">
            {article.summary}
          </p>

          {/* Author Badge */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-indigo-500/40 shrink-0">
                <Image
                  src="/team/ashish-talgotra.jpg"
                  alt="Ashish Talgotra"
                  fill
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-tight">
                  Ashish Talgotra
                </div>
                <div className="text-xs font-mono text-indigo-300">
                  Founder &amp; Lead AI Architect
                </div>
              </div>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Articles</span>
            </Link>
          </div>
        </div>

        {/* Article Content */}
        <div className="space-y-10 pt-8 border-t border-white/[0.08]">
          {article.sections.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2
                className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {sec.heading}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-indigo-950/40 via-slate-900/40 to-indigo-950/30 border border-indigo-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3
              className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Want to deploy systems like this?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300">
              Speak directly with our engineering team about your architecture goals.
            </p>
          </div>

          <Link
            href="/contact?intent=discovery"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all shrink-0 shadow-lg shadow-indigo-500/25"
          >
            <span>Book Technical Discovery</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </article>
  );
}
