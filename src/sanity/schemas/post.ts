import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Article Title",
      type: "string",
      description: "The primary headline of the article.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      description: "The URL path segment (e.g., 'agentic-ai-vs-chatbots' becomes /blog/agentic-ai-vs-chatbots).",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "metaTitle",
      title: "SEO Meta Title",
      type: "string",
      description: "Appears in Google search and browser tabs. Recommended under 48 characters (renders as '{Meta Title} | Ashmyra').",
      validation: (rule) => rule.max(55).warning("Keep under 50 characters to avoid SERP truncation."),
    }),
    defineField({
      name: "metaDesc",
      title: "SEO Meta Description",
      type: "text",
      rows: 3,
      description: "Appears under your link in Google search and LLMs. Keep between 120 and 155 characters.",
      validation: (rule) => rule.max(160).warning("Keep under 155 characters for optimal SERP display."),
    }),
    defineField({
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      description: "16:9 widescreen banner image displayed on the blog card and article hero header.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Crucial for SEO and accessibility (e.g. 'Autonomous AI Agent Architecture Diagram').",
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Agentic AI", value: "Agentic AI" },
          { title: "Search & GEO", value: "Search & GEO" },
          { title: "Enterprise Tech", value: "Enterprise Tech" },
          { title: "Architecture", value: "Architecture" },
          { title: "Product Updates", value: "Product Updates" },
        ],
      },
      initialValue: "Agentic AI",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Estimated Read Time",
      type: "string",
      description: "e.g., '5 min read'",
      initialValue: "5 min read",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author Details",
      type: "object",
      fields: [
        { name: "name", title: "Author Name", type: "string", initialValue: "Ashish Talgotra" },
        { name: "role", title: "Author Role", type: "string", initialValue: "Founder & AI Engineer" },
      ],
    }),
    defineField({
      name: "summary",
      title: "Executive Summary / Excerpt",
      type: "text",
      rows: 3,
      description: "1-2 sentence executive summary displayed on cards, social shares, and LLM answers.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Topic Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "body",
      title: "Article Content",
      type: "array",
      description: "Full editorial content with headings, paragraphs, lists, and quote callouts.",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2 Heading", value: "h2" },
            { title: "H3 Heading", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "bannerImage",
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: category,
        media,
      };
    },
  },
});
