---
title: Olá, mundo
author: djalmajr
pubDatetime: 2026-05-20T10:00:00Z
featured: true
draft: false
tags:
  - astro
  - i18n
description: Um pequeno post de exemplo que mostra como este blog exibe o conteúdo traduzido por idioma.
---

> Este é o único post de exemplo que acompanha o blog. O mesmo post está
> disponível em inglês, português e espanhol — experimente o seletor de idioma
> no cabeçalho.

## Índice

## Bem-vindo

Olá! Este é um post de exemplo. Seu conteúdo é totalmente traduzido para cada
idioma, então, ao trocar de idioma, o título, a descrição e o corpo mudam
juntos — não apenas a interface ao redor.

## Como funciona

Cada post fica em uma pasta por idioma dentro de `src/content/posts/<idioma>/`.
O segmento do idioma é removido do slug, então todas as traduções compartilham
o mesmo caminho de URL:

- Inglês: `/posts/hello/`
- Português: `/pt/posts/hello/`
- Espanhol: `/es/posts/hello/`

Quando falta a tradução para um determinado idioma, o blog volta para a versão
em inglês, então nada nunca dá 404.

## O que você pode fazer a seguir

- Edite este post em `src/content/posts/pt/hello.md`.
- Traduza-o nas pastas `en/` e `es/` ao lado dele.
- Adicione mais posts da mesma forma — um arquivo por idioma.

Boa escrita!
