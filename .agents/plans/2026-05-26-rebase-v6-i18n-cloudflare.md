# Plano: Rebase no AstroPaper v6 + multi-language (en/pt/es) + deploy Cloudflare

## Contexto

- **Estado atual**: o repositório `djalmajr.dev` está no AstroPaper **v4** (Astro `4.2.1`, Tailwind 3, busca via React + `fuse.js`). O conteúdo é praticamente o demo do template.
- **Template upstream**: agora é o AstroPaper **v6** (`astro-paper-v6`) — Astro `6.3.3`, **Tailwind 4** (`@tailwindcss/vite`), sem React, busca via **pagefind**, MDX, Node ≥ 22, gerenciador **pnpm**. Já é "i18n ready" e o README aponta deploy em **Cloudflare Pages**.
- **Homepage do repo no GitHub**: hoje aponta para `https://djalmajr-dev.vercel.app` (precisa virar `https://djalmajr.dev`).

### Decisões já confirmadas
- Adotar o template v6 direto (conteúdo atual descartável; conteúdo novo entra por cima).
- i18n com **URL por idioma** (i18n nativo do Astro), locales: `en` (base, sem prefixo), `pt` (conteúdo em pt-BR, mas código de locale `pt`), `es`.
- Atualizar **homepage do GitHub + links internos** para `https://djalmajr.dev`.
- Deploy no **Cloudflare**.

### Decisões adotadas neste plano
- **Gerenciador de pacotes**: `bun` (igual ao asciimark) — substitui `package-lock.json` por `bun.lock`; scripts adaptados (`bun run ...`). Adiciono `bunfig.toml` se necessário.
- **Deploy Cloudflare**: **Cloudflare Pages com integração Git** (build na nuvem). Adiciono `wrangler.toml` (`pages_build_output_dir = "dist"`) e documento os passos de dashboard (criar projeto, build command `bun run build`, env vars, domínio `djalmajr.dev`) — exigem sua ação/credenciais.
- **Locale `pt`**: código de rota `pt`, conteúdo escrito em pt-BR, `html lang="pt-BR"` para o locale `pt`.

## Arquivos

Como é um rebase no template, a maior parte de `src/` será **substituída** pela versão v6. Destaques de criação/edição:

**Criar**
- `astro-paper.config.ts` (config do site — adaptada do v6)
- `src/i18n/lang/pt.ts`, `src/i18n/lang/es.ts` (traduções de UI)
- `src/components/LangSwitcher.astro` (seletor de idioma no header)
- Rotas localizadas (`pt`/`es`) — estrutura definida na etapa 5
- `src/content/posts/pt/*`, `src/content/posts/es/*` e `src/content/pages/{pt,es}/about.md` (conteúdo inicial por idioma)
- `wrangler.toml` (deploy Cloudflare Pages)
- `.github/workflows/` ajustes se necessário

**Editar**
- `astro.config.ts` → `i18n.locales: ["en","pt","es"]`, `defaultLocale: "en"`, `prefixDefaultLocale: false`
- `src/components/Header.astro` → incluir `LangSwitcher`
- `package.json` → nome `djalmajr.dev`, scripts do v6, metadados
- `README.md` → reescrever para o projeto (remover marketing do AstroPaper, manter créditos/licença), links → `djalmajr.dev`
- `LICENSE` → manter atribuição original do AstroPaper conforme exigido + autoria

**Remover** (legado v4)
- `tailwind.config.cjs`, `.eslintrc.js`/`.eslintignore` (migram para `eslint.config.js` flat), `package-lock.json`, componentes React (`Card.tsx`, `Search.tsx`, `Datetime.tsx`), `src/config.ts` antigo, posts demo v4.

## Detalhes

### 1. Branch e segurança
- Criar branch `feat/rebase-v6-i18n` a partir de `main`. Nada é commitado/empurrado sem seu "y".

### 2. Importar o template v6
- Trazer `src/`, `public/`, `astro.config.ts`, `astro-paper.config.ts`, `package.json`, `tsconfig.json`, `eslint.config.js`, `Dockerfile`/`docker-compose.yml`, `cz.yaml` do v6, preservando `.git`.
- Instalar deps com `pnpm install` (peço autorização antes de instalar).

### 3. Config do site (`astro-paper.config.ts`)
- `site.url`: `https://djalmajr.dev/`
- `site.title`: `Djalma Jr.` · `site.author`: `djalmajr` · `site.description`: blog pessoal
- `site.lang`: `en` (default) · `timezone`: `America/Sao_Paulo`
- `socials`: `github → https://github.com/djalmajr`, `x → https://x.com/dj4lm4jr`
- `features.editPost.url`: `https://github.com/djalmajr/djalmajr.dev/edit/main/`

### 4. i18n — strings de UI
- Criar `src/i18n/lang/pt.ts` (pt-BR) e `src/i18n/lang/es.ts` espelhando a interface `UIStrings` de `en.ts`. Chaves em ordem alfabética por nível.

### 5. i18n — roteamento por idioma
- `astro.config.ts`: locales `["en","pt","es"]`, default `en` sem prefixo (`/`), demais com prefixo (`/pt/...`, `/es/...`).
- Gerar **estaticamente** as rotas de cada locale (home, posts, lista de posts, tags, archives, about, search, 404, rss, og). Abordagem: parametrizar as páginas/`getStaticPaths` por `locale` (e/ou criar diretórios `src/pages/pt`, `src/pages/es` que reaproveitam os componentes locale-aware já existentes). A forma exata será validada via `astro build` + preview (ver Verificação).
- **Conteúdo por idioma**: posts/páginas ganham dimensão de locale (subpastas `posts/pt/`, `posts/es/`; `pages/pt/about.md`, etc.), filtrados por locale na coleção. Posts sem tradução: fallback para o conteúdo base (en).
- `LangSwitcher.astro` no `Header`: alterna o idioma preservando a rota atual usando `getRelativeLocaleUrl` + `stripLocale`.

### 6. Link do repo + docs
- GitHub: `gh repo edit djalmajr/djalmajr.dev --homepage https://djalmajr.dev` (peço "y" antes — é alteração no GitHub).
- `README.md` e quaisquer links internos: remover refs a `satnaing`/`astro-paper.pages.dev`/`vercel`, apontar para `djalmajr.dev`. Manter crédito ao tema AstroPaper (exigência da licença MIT).

### 7. Deploy Cloudflare Pages
- Saída estática (sem adapter SSR). Build: `pnpm build` (inclui `astro check` + `pagefind`). Output: `dist`.
- Adicionar `wrangler.toml` com `pages_build_output_dir = "dist"`.
- Documentar passos de dashboard (criar projeto Pages conectado ao repo, build command, env vars, domínio `djalmajr.dev`). Esses passos exigem suas credenciais/ação — não executo sozinho.

## Tasks

- [ ] 1. Criar branch `feat/rebase-v6-i18n`
- [ ] 2. Importar template v6 (src/public/configs), remover legado v4
- [ ] 3. Migrar para bun + instalar deps (após autorização)
- [ ] 4. Adaptar `astro-paper.config.ts` (url, title, author, socials, editPost)
- [ ] 5. Criar `src/i18n/lang/pt.ts` e `es.ts`
- [ ] 6. Ativar locales no `astro.config.ts`
- [ ] 7. Implementar rotas localizadas + fallback de conteúdo
- [ ] 8. Criar `LangSwitcher.astro` e plugar no `Header`
- [ ] 9. Conteúdo inicial por idioma (about + 1 post de exemplo por locale)
- [ ] 10. Reescrever `README.md` + ajustar links internos
- [ ] 11. Adicionar `wrangler.toml` + doc de deploy Cloudflare Pages
- [ ] 12. Atualizar homepage do GitHub para `djalmajr.dev` (após autorização)
- [ ] 13. Verificação (check, lint, build, preview /pt /es)

## Verificação

- `bun run astro check` → 0 erros de tipos.
- `bun run lint` → 0 erros.
- `bun run build` → build estático conclui (inclui pagefind).
- Preview manual: `/`, `/pt/`, `/es/` renderizam; switcher troca idioma preservando rota; posts/about traduzidos aparecem; fallback funciona para post sem tradução.
- `sitemap-index.xml`/`rss.xml` gerados sem erro.
- Relatório final via `/agile-status` (closure): arquivos alterados, testes/checks, breaking changes, próximos passos (passos de dashboard Cloudflare + DNS do domínio).

## Observações / riscos

- O ponto técnico mais sensível é a **geração estática das rotas por locale** no AstroPaper v6; será validado empiricamente no build.
- Passos que **exigem você**: credenciais/ação no Cloudflare (projeto Pages, domínio, DNS) e a alteração da homepage no GitHub (faço com sua autorização).
- Migração Tailwind 3→4 e remoção do React são absorvidas ao adotar o template v6 (não há customização visual atual a preservar).
