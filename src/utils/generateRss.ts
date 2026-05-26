import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPostUrl } from "@/utils/getPostPaths";
import config from "@/config";

/**
 * Builds the RSS feed response for a given locale. Post links are routed
 * through the locale so `/pt/rss.xml` points to `/pt/posts/...`.
 */
export async function generateRss(locale: string = config.site.lang) {
  const posts = await getCollection("posts");
  const sortedPosts = getSortedPosts(posts);
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
