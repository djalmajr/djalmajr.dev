import type { CollectionEntry } from "astro:content";
import { DEFAULT_LOCALE, Locales, type Locale } from "@/i18n/locales";
import { getPostSlug } from "./getPostPaths";

/**
 * Returns the locale a post belongs to, derived from its top-level folder
 * (`src/content/posts/<locale>/...`). Falls back to the default locale when the
 * folder is not a known locale.
 */
export function getPostLocale(post: CollectionEntry<"posts">): Locale {
  const segment = post.id.split("/")[0];
  return (Locales as readonly string[]).includes(segment)
    ? (segment as Locale)
    : DEFAULT_LOCALE;
}

/**
 * Selects the posts to show for a given locale. Posts authored in that locale
 * win; for any slug missing a translation, the default-locale (English) version
 * is used as a fallback. The result therefore always covers the full set of
 * slugs, regardless of which translations exist.
 */
export function getPostsByLocale(
  posts: CollectionEntry<"posts">[],
  locale: string = DEFAULT_LOCALE
): CollectionEntry<"posts">[] {
  const bySlug = new Map<string, CollectionEntry<"posts">>();
  for (const post of posts) {
    const slug = getPostSlug(post.id, post.filePath);
    const postLocale = getPostLocale(post);
    const existing = bySlug.get(slug);
    if (postLocale === locale) {
      bySlug.set(slug, post);
    } else if (
      postLocale === DEFAULT_LOCALE &&
      (!existing || getPostLocale(existing) !== locale)
    ) {
      bySlug.set(slug, post);
    }
  }
  return [...bySlug.values()];
}
