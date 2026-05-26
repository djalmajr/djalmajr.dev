---
title: Hello, world
author: djalmajr
pubDatetime: 2026-05-20T10:00:00Z
featured: true
draft: false
tags:
  - astro
  - i18n
description: A short example post showing how this blog renders content translated per locale.
---

> This is the single example post that ships with the blog. The same post is
> available in English, Portuguese and Spanish — try the language switcher in
> the header.

## Table of contents

## Welcome

Hello! This is an example post. Its content is fully translated for each
locale, so when you switch languages the title, description and body all change
together — not just the surrounding interface.

## How it works

Each post lives in a per-locale folder under `src/content/posts/<locale>/`. The
locale segment is stripped from the slug, so every translation shares the same
URL path:

- English: `/posts/hello/`
- Portuguese: `/pt/posts/hello/`
- Spanish: `/es/posts/hello/`

When a translation is missing for a given locale, the blog falls back to the
English version, so nothing ever 404s.

## What you can do next

- Edit this post in `src/content/posts/en/hello.md`.
- Translate it in the `pt/` and `es/` folders next to it.
- Add more posts the same way — one file per locale.

Happy writing!
