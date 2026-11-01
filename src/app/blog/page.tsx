import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/breadcrumb";
import { BLOG_POSTS, fetchAllBlogPosts } from "@/data/blog";
import {
  BookOpen,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Blog & Technical Insights",
  description:
    "Explore in-depth articles on Agentic AI, Generative Engine Optimization (GEO), enterprise systems, and autonomous automation engineered by Ashmyra.",
  alternates: {
    canonical: "https://www.ashmyra.com/blog",
  },
  openGraph: {
    title: "Engineering Blog & Technical Insights | Ashmyra",
    description:
      "Explore in-depth articles on Agentic AI, Generative Engine Optimization (GEO), enterprise systems, and autonomous automation engineered by Ashmyra.",
    url: "https://www.ashmyra.com/blog",
    images: [
      {
        url: "/blog/agentic-ai-banner.jpg",
        width: 1200,
        height: 675,
        alt: "Ashmyra Engineering Blog",
      },
    ],
  },
};

export default async function BlogIndexPage() {
  const posts = await fetchAllBlogPosts();
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div
      className="pt-32 pb-24 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-6 flex justify-center">
            <Breadcrumb items={[{ name: "Blog" }]} />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs text-cyan-300 font-mono mb-4">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ashmyra Publication &amp; Technical Insights</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Engineering Blog &amp; Systems Radar
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Practical analyses on Agentic AI architectures, Generative Engine Optimization (GEO), enterprise data integrity, and mission-critical software engineering.
          </p>
        </div>

        {/* Featured Hero Post */}
        {featuredPost && (
          <div className="mb-16">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group relative block rounded-3xl overflow-hidden border border-white/[0.08] bg-neutral-900/40 hover:border-cyan-500/40 transition-all duration-300 glass-panel"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-medium">
                      Featured Analysis
                    </span>
                    <span className="text-neutral-400">{featuredPost.category}</span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-neutral-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      {featuredPost.readTime}
                    </span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-neutral-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                      {featuredPost.date}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {featuredPost.summary}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-md">
                        AT
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{featuredPost.author.name}</div>
                        <div className="text-xs text-neutral-400 font-mono">{featuredPost.author.role}</div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
                    <Image
                      src={featuredPost.bannerImage}
                      alt={featuredPost.bannerAlt}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Latest Technical Publications</h2>
            <span className="text-xs font-mono text-neutral-500">Updated weekly</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between rounded-3xl overflow-hidden border border-white/[0.08] bg-neutral-900/30 hover:border-cyan-500/40 transition-all duration-300 glass-panel"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/[0.08]">
                    <Image
                      src={post.bannerImage}
                      alt={post.bannerAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-xs text-cyan-300 font-mono">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-neutral-300 text-sm leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-white/[0.06] mt-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                      AT
                    </div>
                    <span className="text-xs text-neutral-300 font-medium">{post.author.name}</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                    Read Post <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter / RSS Callout */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-950/20 to-neutral-900/40 glass-panel">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Engineering Intel
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Deploying intelligent systems to production?
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              Discuss enterprise AI architectures, generative engine search audits, and automated workforce pipelines with our engineering team.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-neutral-950 text-xs font-semibold tracking-wide transition-all shadow-lg shadow-cyan-500/20 inline-flex items-center gap-2"
              >
                Schedule Technical Scoping <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/our-work"
                className="px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 text-white text-xs font-medium transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
