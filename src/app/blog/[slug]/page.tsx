import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/breadcrumb";
import {
  BLOG_POSTS,
  getBlogPostBySlug,
  getAllBlogSlugs,
  fetchBlogPostBySlug,
  fetchAllBlogPosts,
} from "@/data/blog";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  Share2,
  CheckCircle2,
  Layers,
  Terminal,
} from "lucide-react";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDesc,
    alternates: {
      canonical: `https://www.ashmyra.com/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.metaTitle} | Ashmyra`,
      description: post.metaDesc,
      url: `https://www.ashmyra.com/blog/${post.slug}`,
      images: [
        {
          url: post.bannerImage,
          width: 1200,
          height: 675,
          alt: post.bannerAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.metaTitle} | Ashmyra`,
      description: post.metaDesc,
      images: [post.bannerImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Schema.org BlogPosting & TechArticle JSON-LD for Search & LLM Engines (GEO)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "description": post.metaDesc,
    "image": `https://www.ashmyra.com${post.bannerImage}`,
    "url": `https://www.ashmyra.com/blog/${post.slug}`,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
      "worksFor": {
        "@type": "Organization",
        "name": "Ashmyra Technologies",
        "url": "https://www.ashmyra.com",
      },
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ashmyra Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ashmyra.com/brand/ashmyra-icon.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.ashmyra.com/blog/${post.slug}`,
    },
  };

  const allPosts = await fetchAllBlogPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article
      className="pt-32 pb-24 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* Inject JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation Trail */}
        <div className="mb-8">
          <Breadcrumb
            items={[
              { name: "Blog", href: "/blog" },
              { name: post.title },
            ]}
          />
        </div>

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-cyan-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to all articles
        </Link>

        {/* Header Metadata */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-medium">
              {post.category}
            </span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              {post.readTime}
            </span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-neutral-500" />
              {post.date}
            </span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.15]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
          >
            {post.title}
          </h1>

          {/* Author info strip */}
          <div className="flex items-center gap-3 pt-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-md">
              AT
            </div>
            <div>
              <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>{post.author.name}</div>
              <div className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{post.author.role}</div>
            </div>
          </div>
        </div>

        {/* Full-width Banner Image */}
        <div
          className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl mb-12"
          style={{ border: "1px solid var(--border)" }}
        >
          <Image
            src={post.bannerImage}
            alt={post.bannerAlt}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Executive Summary Card / TL;DR */}
        <div
          className="p-6 sm:p-7 rounded-2xl mb-12 shadow-sm"
          style={{
            backgroundColor: "var(--theme-pill-bg)",
            border: "1px solid var(--theme-pill-border)",
          }}
        >
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-2 font-bold" style={{ color: "var(--accent)" }}>
            <Sparkles className="w-3.5 h-3.5" /> Executive Summary &amp; Key Finding
          </div>
          <p className="text-sm sm:text-base leading-relaxed font-sans font-medium" style={{ color: "var(--text)" }}>
            {post.summary}
          </p>
        </div>

        {/* Article Body Sections */}
        <div className="space-y-12 text-base leading-relaxed font-sans" style={{ color: "var(--text)" }}>
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2
                className="text-2xl sm:text-3xl font-bold tracking-tight pt-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
              >
                {section.heading}
              </h2>

              <div className="space-y-4">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {p}
                  </p>
                ))}
              </div>

              {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                <div
                  className="mt-6 p-5 rounded-xl space-y-2.5 shadow-sm"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <div className="text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 font-bold" style={{ color: "var(--accent)" }}>
                    <CheckCircle2 className="w-3.5 h-3.5" /> Architecture Takeaways
                  </div>
                  <ul className="space-y-1.5 text-sm pl-1" style={{ color: "var(--text-muted)" }}>
                    {section.keyTakeaways.map((item, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <span className="mt-1 font-bold" style={{ color: "var(--accent)" }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-14 pt-8 flex flex-wrap items-center gap-2" style={{ borderTop: "1px solid var(--border)" }}>
          <span className="text-xs font-mono mr-2 font-medium" style={{ color: "var(--text-muted)" }}>Topic Tags:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-mono font-medium"
              style={{
                backgroundColor: "var(--theme-pill-bg)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div
          className="mt-12 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5"
          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-lg font-bold text-white shadow-lg shrink-0">
            AT
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold" style={{ color: "var(--text)" }}>Written by {post.author.name}</h3>
            <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{post.author.role} • Ashmyra Technologies</p>
            <p className="text-xs leading-relaxed pt-1" style={{ color: "var(--text-muted)" }}>
              Building autonomous multi-agent AI systems, high-throughput search telemetry, and enterprise software. Based in Delhi NCR, engineering solutions globally.
            </p>
          </div>
        </div>

        {/* Technical Scoping CTA */}
        <div
          className="mt-12 p-8 rounded-3xl shadow-md text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            backgroundColor: "var(--theme-pill-bg)",
            border: "1px solid var(--theme-pill-border)",
          }}
        >
          <div>
            <h3
              className="text-xl font-bold mb-1"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
            >
              Have questions about this architecture?
            </h3>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Schedule a technical scoping session with our engineering team.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full text-white text-xs font-semibold tracking-wide transition-all shadow-md shrink-0"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-light))",
            }}
          >
            Contact Engineering
          </Link>
        </div>

        {/* Related Articles */}
        {otherPosts.length > 0 && (
          <div className="mt-20 pt-12 space-y-6" style={{ borderTop: "1px solid var(--border)" }}>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
                Recommended Reading
              </h3>
              <Link href="/blog" className="text-xs font-mono font-semibold" style={{ color: "var(--accent)" }}>
                View all articles &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block p-5 rounded-2xl transition-all shadow-sm hover:scale-[1.01]"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    <Image
                      src={related.bannerImage}
                      alt={related.bannerAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-[11px] font-mono font-bold mb-2 uppercase" style={{ color: "var(--accent)" }}>
                    {related.category}
                  </div>
                  <h4
                    className="text-sm font-bold transition-colors line-clamp-2 mb-2"
                    style={{ color: "var(--text)" }}
                  >
                    {related.title}
                  </h4>
                  <div
                    className="flex items-center justify-between text-xs font-mono pt-2"
                    style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
                  >
                    <span>{related.readTime}</span>
                    <span className="font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      Read &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
