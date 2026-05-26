import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPostsByLocale } from "@/utils/getPostsByLocale";
import { getPostUrl } from "@/utils/getPostPaths";
import config from "@/config";

/**
 * Builds the RSS feed response for a given locale. Post content and links are
 * localized so `/pt/rss.xml` lists the Portuguese posts pointing to
 * `/pt/posts/...` (falling back to English where a translation is missing).
 */
export async function generateRss(locale: string = config.site.lang) {
  const posts = await getCollection("posts");
  const sortedPosts = getSortedPosts(getPostsByLocale(posts, locale));
  return rss({
    title: config.site.title,
    description: config.site.description,
    site: config.site.url,
    items: sortedPosts.map(({ data, id, filePath }) => ({
      link: getPostUrl(id, filePath, locale),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
  });
}
