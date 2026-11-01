import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/breadcrumb";
import { BLOG_POSTS, getBlogPostBySlug, getAllBlogSlugs } from "@/data/blog";
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
  const post = getBlogPostBySlug(slug);
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
  const post = getBlogPostBySlug(slug);

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

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="pt-32 pb-24 min-h-screen">
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

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            {post.title}
          </h1>

          {/* Author info strip */}
          <div className="flex items-center gap-3 pt-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-md">
              AT
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{post.author.name}</div>
              <div className="text-xs text-neutral-400 font-mono">{post.author.role}</div>
            </div>
          </div>
        </div>

        {/* Full-width Banner Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl mb-12 glass-panel">
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
        <div className="p-6 sm:p-7 rounded-2xl border border-cyan-500/20 bg-cyan-950/10 mb-12 glass-panel">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Executive Summary &amp; Key Finding
          </div>
          <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-sans">
            {post.summary}
          </p>
        </div>

        {/* Article Body Sections */}
        <div className="space-y-12 text-base text-neutral-300 leading-relaxed font-sans">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-4">
                {section.heading}
              </h2>

              <div className="space-y-4">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed text-neutral-300">
                    {p}
                  </p>
                ))}
              </div>

              {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                <div className="mt-6 p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] space-y-2.5">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Architecture Takeaways
                  </div>
                  <ul className="space-y-1.5 text-sm text-neutral-300 pl-1">
                    {section.keyTakeaways.map((item, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
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
        <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-neutral-500 mr-2">Topic Tags:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-neutral-900/40 glass-panel flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-lg font-bold text-white shadow-lg shrink-0">
            AT
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">Written by {post.author.name}</h3>
            <p className="text-xs text-neutral-400 font-mono">{post.author.role} • Ashmyra Technologies</p>
            <p className="text-xs text-neutral-300 leading-relaxed pt-1">
              Building autonomous multi-agent AI systems, high-throughput search telemetry, and enterprise software. Based in Delhi NCR, engineering solutions globally.
            </p>
          </div>
        </div>

        {/* Technical Scoping CTA */}
        <div className="mt-12 p-8 rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-cyan-950/25 to-neutral-900/60 glass-panel text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Have questions about this architecture?
            </h3>
            <p className="text-xs text-neutral-300">
              Schedule a technical scoping session with our engineering team.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-neutral-950 text-xs font-semibold tracking-wide transition-all shadow-lg shadow-cyan-500/20 shrink-0"
          >
            Contact Engineering
          </Link>
        </div>

        {/* Related Articles */}
        {otherPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-white/[0.08] space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Recommended Reading</h3>
              <Link href="/blog" className="text-xs text-cyan-400 hover:text-cyan-300 font-mono">
                View all articles &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block p-5 rounded-2xl border border-white/[0.08] bg-neutral-900/30 hover:border-cyan-500/40 transition-all glass-panel"
                >
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 border border-white/[0.06]">
                    <Image
                      src={related.bannerImage}
                      alt={related.bannerAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400 mb-2">{related.category}</div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 mb-2">
                    {related.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-neutral-500 font-mono pt-2 border-t border-white/[0.06]">
                    <span>{related.readTime}</span>
                    <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
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
