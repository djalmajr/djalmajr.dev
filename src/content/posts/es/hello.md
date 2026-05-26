---
title: Hola, mundo
author: djalmajr
pubDatetime: 2026-05-20T10:00:00Z
featured: true
draft: false
tags:
  - astro
  - i18n
description: Una breve entrada de ejemplo que muestra cómo este blog representa el contenido traducido por idioma.
---

> Esta es la única entrada de ejemplo que viene con el blog. La misma entrada
> está disponible en inglés, portugués y español — prueba el selector de idioma
> en el encabezado.

## Tabla de contenidos

## Bienvenido

¡Hola! Esta es una entrada de ejemplo. Su contenido está completamente traducido
para cada idioma, así que al cambiar de idioma el título, la descripción y el
cuerpo cambian juntos — no solo la interfaz que lo rodea.

## Cómo funciona

Cada entrada vive en una carpeta por idioma dentro de
`src/content/posts/<idioma>/`. El segmento del idioma se elimina del slug, por
lo que todas las traducciones comparten la misma ruta de URL:

- Inglés: `/posts/hello/`
- Portugués: `/pt/posts/hello/`
- Español: `/es/posts/hello/`

Cuando falta la traducción para un idioma determinado, el blog vuelve a la
versión en inglés, así que nada da nunca un 404.

## Qué puedes hacer a continuación

- Edita esta entrada en `src/content/posts/es/hello.md`.
- Tradúcela en las carpetas `en/` y `pt/` junto a ella.
- Agrega más entradas de la misma forma — un archivo por idioma.

¡Feliz escritura!
