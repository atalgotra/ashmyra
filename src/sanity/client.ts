import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId, useCdn, isSanityConfigured } from "./env";

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
    })
  : null;

const imageBuilder = isSanityConfigured
  ? createImageUrlBuilder({
      projectId,
      dataset,
    })
  : null;

// Helper to resolve Sanity image asset URLs with optimal web dimensions
export function urlForImage(source: any) {
  if (!imageBuilder || !source) return null;
  return imageBuilder.image(source).auto("format").fit("max");
}
