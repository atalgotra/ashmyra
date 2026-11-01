import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  groups: [
    { name: "content", title: "📝 Article Content", default: true },
    { name: "media", title: "🖼️ Banner & Media" },
    { name: "seo", title: "🔍 SEO & Search Engines" },
    { name: "settings", title: "⚙️ Publishing Details" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Article Title",
      type: "string",
      group: "content",
      description: "The primary headline of the article.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      group: "content",
      description: "Click 'Generate' to create the URL path (e.g. /blog/your-title).",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "content",
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
      name: "summary",
      title: "Executive Summary / Excerpt",
      type: "text",
      group: "content",
      rows: 3,
      description: "1-2 sentence executive summary displayed on cards, social shares, and AI search answers.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Full Editorial Content",
      type: "array",
      group: "content",
      description: "Format headings, body paragraphs, bullet points, quotes, and screenshots.",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2 Section Heading", value: "h2" },
            { title: "H3 Sub-heading", value: "h3" },
            { title: "Quote Callout", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet List", value: "bullet" },
            { title: "Numbered List", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
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
          title: "Inline Diagram / Screenshot",
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

    // MEDIA TAB
    defineField({
      name: "bannerImage",
      title: "Hero Banner Image",
      type: "image",
      group: "media",
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

    // SEO TAB
    defineField({
      name: "metaTitle",
      title: "SEO Meta Title",
      type: "string",
      group: "seo",
      description: "Appears in Google search and browser tabs. Recommended under 48 characters (renders as '{Meta Title} | Ashmyra').",
      validation: (rule) => rule.max(55).warning("Keep under 50 characters to avoid SERP truncation."),
    }),
    defineField({
      name: "metaDesc",
      title: "SEO Meta Description",
      type: "text",
      group: "seo",
      rows: 3,
      description: "Appears under your link in Google search and LLM citations. Keep between 120 and 155 characters.",
      validation: (rule) => rule.max(160).warning("Keep under 155 characters for optimal SERP display."),
    }),
    defineField({
      name: "tags",
      title: "Topic Tags",
      type: "array",
      group: "seo",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    // PUBLISHING SETTINGS TAB
    defineField({
      name: "readTime",
      title: "Estimated Read Time",
      type: "string",
      group: "settings",
      description: "e.g., '5 min read'",
      initialValue: "5 min read",
    }),
    defineField({
      name: "publishedAt",
      title: "Publication Date & Time",
      type: "datetime",
      group: "settings",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author Details",
      type: "object",
      group: "settings",
      fields: [
        { name: "name", title: "Author Name", type: "string", initialValue: "Ashish Talgotra" },
        { name: "role", title: "Author Role", type: "string", initialValue: "Founder & AI Engineer" },
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
        title: title || "Untitled Blog Post",
        subtitle: category,
        media,
      };
    },
  },
});
