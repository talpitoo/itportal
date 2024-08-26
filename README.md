# 🪩 IT Portal frontend using 11ty/Bootstrap

![IT Portal](https://www.itportal.com/v3/images/logos/itportal-blue_logo_feb2022-large.gif)

This boilerplate/skeleton uses bits and pieces from the [Minimal 11ty Starter](https://github.com/tomreinert/minimal-11ty-tailwind-starter), please check it out first for the basics.

## 🔗 Demo

https://itportal.vercel.app/

## 🚶 Getting started

1. git clone the repository
2. `cd itportal-11ty-alpinejs-bootstrap` (or the name of the folder you've cloned into)
3. install dependencies with `npm install`
4. watch for changes and serve locally on http://localhost:8080 with `npm run start`
5. compile the website with `npm run build` and serve it from the `_site` folder.
6. You can serve the compiled website from `_site` with `npx @11ty/eleventy --serve`.

## 👨‍💻 Development notes

* the top navbar uses semantic, auto-generated nested navigation. It is based on the folder structure, the template `/src/_includes/components/navigation-dynamic.njk` and the front matter in individual files, e.g.

```
---
title: Integrations
excerpt: TODO
layout: layouts/layout-base.njk
permalink: /integrations/
eleventyNavigation:
  key: Integrations
  order: 3
bodyClass: page-integrations
---

<p>Lorem ipsum content...</p>
```

* Place individual SVG icons into the `/src/img/icons` folder and run `npm run svg` in order to generate `/src/img/icons/symbol/svg/sprite.css.svg`, use them as
```
<svg class="text-tertiary" aria-hidden="true" width="24" height="24">
  <use href="/img/icons/symbol/svg/sprite.css.svg#hamburger"></use>
</svg>
```

* All URLs must end with `/`, e.g. `permalink: "/sample-category/sample-page/"`
* `src/sitemap.njk` is responsible for generating the `sitemap.xml`, double-check its conditions in case you want to exclude some pages, collections from it.
* `TODO`: Update the `robots.txt` once deployed to production.
* The main entry point for all CSS work is in `/src/sass/main.scss`. The order of `@import`-s is important.
