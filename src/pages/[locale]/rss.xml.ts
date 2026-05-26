import type { APIRoute, GetStaticPaths } from "astro";
import { NonDefaultLocales } from "@/i18n/locales";
import { generateRss } from "@/utils/generateRss";
import config from "@/config";

export const getStaticPaths = (() =>
  NonDefaultLocales.map(locale => ({
    params: { locale },
  }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ currentLocale }) =>
  generateRss(currentLocale ?? config.site.lang);
