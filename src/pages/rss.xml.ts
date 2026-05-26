import type { APIRoute } from "astro";
import { generateRss } from "@/utils/generateRss";
import config from "@/config";

export const GET: APIRoute = ({ currentLocale }) =>
  generateRss(currentLocale ?? config.site.lang);
