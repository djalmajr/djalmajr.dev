/** Supported locales. Keep in sync with `i18n.locales` in astro.config.ts. */
export const Locales = ["en", "pt", "es"] as const;

export type Locale = (typeof Locales)[number];

/** Default locale, served at the root without a URL prefix. */
export const DEFAULT_LOCALE = "en" satisfies Locale;

/**
 * Locales that require an explicit URL prefix (e.g. `/pt`, `/es`).
 * Used by the `src/pages/[locale]/` routes to generate localized pages.
 */
export const NonDefaultLocales = Locales.filter(
  locale => locale !== DEFAULT_LOCALE
);

/** Human-readable labels shown in the language switcher. */
export const LocaleLabels = {
  en: "English",
  pt: "Português",
  es: "Español",
} as const satisfies Record<Locale, string>;
