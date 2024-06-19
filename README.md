# 🪩 IT Portal frontend using 11ty/Bootstrap/Alpine.js/Axios (and maybe Flowbite, GSAP, Swiper)

![IT Portal](https://www.itportal.com/v3/images/logos/itportal-blue_logo_feb2022-large.gif)

This boilerplate/skeleton uses bits and pieces from the [Minimal 11ty Starter](https://github.com/tomreinert/minimal-11ty-tailwind-starter), please check it out first for the basics.

## 🔗 Demo

https://TODO.vercel.app/

## 🚶 Getting started

1. git clone the repository
2. `cd itportal-11ty-alpinejs-bootstrap` (or the name of the folder you've cloned into)
3. install dependencies with `npm install`
4. watch for changes and serve locally on http://localhost:8080 with `npm run start`
5. compile the website with `npm run build` and serve it from the `_site` folder.
6. You can serve the compiled websiteffrom `_site` with `npx @11ty/eleventy --serve`.

## 🖱️ UI Library

Take a look at the reusable snippets at http://localhost:8080/ui-library/

## 👨‍💻 Development notes

* the top navbar (and the footer) uses semantic, auto-generated nested navigation. It is based on the folder structure, the template `/src/_includes/components/navigation.njk` and the front matter in individual files, e.g.

```
---
title: Fibonacci Calculator
date: 2024-02-18
excerpt: "TODO"
layout: layouts/toc.njk
permalink: /tools/calculators/fibonacci-calculator/
eleventyNavigation:
  key: Fibonacci Calculator
  parent: Calculators
  url: /tools/calculators/fibonacci-calculator/
tags: ["tools", "calculators"]
---

<p>Lorem ipsum content...</p>
```

* For generic top/bottom section spacers use the `.py-section` class.
* Place individual SVG icons into the `/src/img/icons` folder and run `npm run svg` in order to generate `/src/img/icons/symbol/svg/sprite.css.svg`, use them as
```
<svg class="text-tertiary" aria-hidden="true" width="24" height="24">
  <use href="/img/icons/symbol/svg/sprite.css.svg#hamburger"></use>
</svg>
```

* All URLs must end with `/`, e.g. `permalink: "/sample-category/sample-page/"`
* The single most important way to group items is:

  ```
  ---
  tags: ["tools", "calculators"]
  ---
  ```

* ...this will create `collections.tools` and `collections.calculators` collections which you can iterate through later with e.g. `{% for item in collections.tools %}`.
* `src/sitemap.njk` is responsible for generating the `sitemap.xml`, double-check its conditions in case you want to exclude some pages, collections from it.
* `TODO`: Update the `robots.txt` once deployed to production.
* The main entry point for all CSS work is in `/src/sass/main.scss`. The order of `@import`-s is important.
