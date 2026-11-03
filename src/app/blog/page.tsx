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

          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-4 shadow-sm"
            style={{
              backgroundColor: "var(--theme-pill-bg)",
              border: "1px solid var(--theme-pill-border)",
              color: "var(--accent-cyan)",
            }}
          >
            <BookOpen className="w-3.5 h-3.5" style={{ color: "var(--accent-cyan)" }} />
            <span className="font-semibold uppercase tracking-wider">Ashmyra Publication &amp; Technical Insights</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
          >
            Engineering Blog &amp; Systems Radar
          </h1>

          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Practical analyses on Agentic AI architectures, Generative Engine Optimization (GEO), enterprise data integrity, and mission-critical software engineering.
          </p>
        </div>

        {/* Featured Hero Post */}
        {featuredPost && (
          <div className="mb-16">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group relative block rounded-3xl overflow-hidden transition-all duration-300 shadow-md hover:scale-[1.01]"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span
                      className="px-2.5 py-1 rounded-md font-bold uppercase tracking-wider text-[11px]"
                      style={{
                        backgroundColor: "var(--theme-pill-bg)",
                        border: "1px solid var(--theme-pill-border)",
                        color: "var(--accent-cyan)",
                      }}
                    >
                      Featured Analysis
                    </span>
                    <span style={{ color: "var(--text-muted)" }}>{featuredPost.category}</span>
                    <span style={{ color: "var(--border-strong)" }}>•</span>
                    <span className="flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
                      <Clock className="w-3.5 h-3.5" style={{ color: "var(--accent-cyan)" }} />
                      {featuredPost.readTime}
                    </span>
                    <span style={{ color: "var(--border-strong)" }}>•</span>
                    <span className="flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
                      <Calendar className="w-3.5 h-3.5" style={{ color: "var(--text-subtle)" }} />
                      {featuredPost.date}
                    </span>
                  </div>

                  <h2
                    className="text-2xl sm:text-4xl font-bold leading-tight transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
                  >
                    {featuredPost.title}
                  </h2>

                  <p className="text-sm sm:text-base leading-relaxed line-clamp-3" style={{ color: "var(--text-muted)" }}>
                    {featuredPost.summary}
                  </p>

                  <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-md">
                        AT
                      </div>
                      <div>
                        <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>{featuredPost.author.name}</div>
                        <div className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{featuredPost.author.role}</div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:translate-x-1 transition-transform" style={{ color: "var(--accent)" }}>
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div
                    className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xl"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    <Image
                      src={featuredPost.bannerImage}
                      alt={featuredPost.bannerAlt}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
            <h2 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
              Latest Technical Publications
            </h2>
            <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>Updated weekly</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between rounded-3xl overflow-hidden transition-all duration-300 shadow-md hover:scale-[1.01]"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden" style={{ borderBottom: "1px solid var(--border)" }}>
                    <Image
                      src={post.bannerImage}
                      alt={post.bannerAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute top-4 left-4 px-2.5 py-1 rounded-md text-xs font-mono font-bold backdrop-blur-md"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "#FFFFFF",
                      }}
                    >
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center gap-3 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" style={{ color: "var(--accent-cyan)" }} />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3
                      className="text-xl font-bold transition-colors leading-snug"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
                    >
                      {post.title}
                    </h3>

                    <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "var(--text-muted)" }}>
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 flex items-center justify-between mt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <div className="flex items-center gap-2.5 pt-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                      AT
                    </div>
                    <span className="text-xs font-semibold" style={{ color: "var(--text)" }}>{post.author.name}</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold group-hover:translate-x-1 transition-transform pt-3" style={{ color: "var(--accent)" }}>
                    Read Post <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter / RSS Callout */}
        <div
          className="mt-20 p-8 sm:p-10 rounded-3xl shadow-md"
          style={{
            backgroundColor: "var(--theme-pill-bg)",
            border: "1px solid var(--theme-pill-border)",
          }}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-2 font-bold" style={{ color: "var(--accent)" }}>
              <Sparkles className="w-3.5 h-3.5" /> Engineering Intel
            </div>
            <h3
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
            >
              Deploying intelligent systems to production?
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              Discuss enterprise AI architectures, generative engine search audits, and automated workforce pipelines with our engineering team.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full font-semibold text-xs tracking-wide transition-all shadow-md inline-flex items-center gap-2 text-white"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent-light))",
                }}
              >
                Schedule Technical Scoping <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/demos"
                className="px-5 py-2.5 rounded-full text-xs font-semibold transition-all"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                }}
              >
                Explore Live Demos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
