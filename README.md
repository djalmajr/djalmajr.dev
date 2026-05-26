# djalmajr.dev

Personal blog of **Djalma Jr.** — [djalmajr.dev](https://djalmajr.dev)

Built with [Astro](https://astro.build) on top of the [AstroPaper](https://github.com/satnaing/astro-paper) theme (v6), with multi-language support and deployed to [Cloudflare Pages](https://pages.cloudflare.com/).

## ✨ Features

- Astro 6 + Tailwind CSS 4
- Light & dark mode
- Multi-language (`en`, `pt`, `es`) with URL-prefixed routing for SEO
- Fuzzy search via [Pagefind](https://pagefind.app/)
- Dynamic OG image generation
- RSS feed & sitemap

## 🌍 Internationalization

UI strings are translated per locale in `src/i18n/lang/<locale>.ts` (`en` is the base).
Routing uses Astro's native i18n:

- `en` (default): served at the root, no prefix — e.g. `/posts`
- `pt` (Brazilian Portuguese): `/pt/posts`
- `es`: `/es/posts`

The default-locale pages live at `src/pages/`. Non-default locales are generated
by thin wrappers under `src/pages/[locale]/` that reuse those pages (via
`NonDefaultLocales` in `src/i18n/locales.ts`), so the **UI chrome is translated**
while post/page **content is shared** until a localized version is authored. The
language switcher lives in the header (`src/components/LangSwitcher.astro`).

To add a language: create `src/i18n/lang/<locale>.ts`, then add the locale to
`Locales` in `src/i18n/locales.ts` and to `i18n.locales` in `astro.config.ts`.

## 🚀 Commands

All commands use [Bun](https://bun.sh):

| Command           | Action                                            |
| ----------------- | ------------------------------------------------- |
| `bun install`     | Install dependencies                              |
| `bun run dev`     | Start local dev server at `localhost:4321`        |
| `bun run build`   | Type-check, build to `./dist/` and index Pagefind |
| `bun run preview` | Preview the production build locally              |
| `bun run lint`    | Run ESLint                                        |
| `bun run format`  | Format with Prettier                              |

## 🛫 Deployment — Cloudflare Pages

The site is a static build deployed to Cloudflare Pages via Git integration:

- **Framework preset:** None / Astro
- **Build command:** `bun run build`
- **Build output directory:** `dist`
- **Node version:** `26` (pinned in `.nvmrc`; or set `NODE_VERSION=26`)

See `wrangler.toml` for the Pages output directory configuration.

## 📜 Credits & License

Theme based on [AstroPaper](https://github.com/satnaing/astro-paper) by
[Sat Naing](https://satnaing.dev), used under the MIT License.
This project is also licensed under the [MIT License](LICENSE).
