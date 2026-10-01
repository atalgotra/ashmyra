import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ARTICLES } from "@/data/resources";
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
    title: `${article.title} | Ashmyra Insights`,
    description: article.summary,
    alternates: {
      canonical: `https://ashmyra.com/resources/${article.slug}`,
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

  return (
    <article className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Resources</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12 border-b border-white/[0.08] pb-10">
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-4">
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
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

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {article.title}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            {article.summary}
          </p>

          <div className="mt-6 flex items-center justify-between pt-6 border-t border-white/[0.05] text-xs text-neutral-500 font-mono">
            <span>Published by Ashmyra Engineering Research</span>
            <span>Domain: ashmyra.com</span>
          </div>
        </header>

        {/* Article Body */}
        <div className="space-y-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
          {article.content.map((paragraph, index) => (
            <p key={index} className="p-1">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-indigo-950/20 border border-indigo-500/30 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Explore how Ashmyra can help implement these principles in your stack
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto mb-6">
            Our systems engineers design and deploy tailored architectures for modern teams.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all"
          >
            <span>Talk to an Architect</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
