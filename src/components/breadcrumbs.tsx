"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.ashmyra.com",
      },
      ...items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: item.label,
        ...(item.href ? { item: `https://www.ashmyra.com${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <nav
        aria-label="Breadcrumb"
        className={`flex items-center space-x-1.5 text-xs font-mono text-neutral-400 ${className}`}
      >
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-white transition-colors p-1 -m-1 rounded"
          title="Home"
        >
          <Home className="w-3.5 h-3.5 text-neutral-500 hover:text-indigo-400 transition-colors" />
          <span className="sr-only">Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-neutral-600 shrink-0" />
              {isLast || !item.href ? (
                <span
                  className="text-neutral-200 font-semibold truncate max-w-[240px] sm:max-w-md"
                  aria-current="page"
                  title={item.label}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-indigo-300 transition-colors truncate max-w-[180px] sm:max-w-xs"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
