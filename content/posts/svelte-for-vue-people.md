---
title: Svelte.js for Vue People
slug: svelte-for-vue-people
date: 2019-10-30
tags: ["svelte", "vue", "tailwind", "purgecss"]
category: Blog Post
description: "Lured by the dark side of Svelte.js, I leave the comfy confines of Vue."
image: "/assets/posts/blur.jpg"
---

Don't get me wrong—I love Vue. But I can't help getting excited by shining new
things (frameworks). I saw Rich Harris' ["Rethinking Reactivity"][] talk on
YouTube and remembered hearing him on Shop Talk. I figured I'd give [Svelte.js][] a
try. Svelte's big thing is that it only works as a compiler, requiring no inclusion
of library code (mostly, anyway) like Vue or React. I'm a minimalist at heart,
so this idea really appealed to me. Svelte even has its own Nuxt-style
framework built on top of Svelte called [Sapper][]. I decided to start there.

<div class="text-gray-700 line-through">
  The biggest issue as of now (April 30, 2019) is that Sapper's master branch
  hasn't updated along with the recent release of Svelte 3. There are Webpack and
  Rollup templates for v3, but you'll have to dig for them. The Webpack one has
  an error whenever hot module reloading is turned on, and I could never get
  Rollup to work with PostCSS. There's a Parcel plugin for Svelte as well, but
  that isn't working with v3 right now either. If you can do without HMR for now, the Webpack v3 template for Sapper works
  well, and getting the usual Webpack-related stuff up-and-running isn't too
  hard.
</div>

I've got a Sapper starter I forked and then updated the PostCSS and Tailwind plugins. [It's up on GitHub.](https://github.com/brandonpittman/sapper-default-starter)

After that, I had a pretty good setup.

[Svelte.js]: https://svelte.dev
["Rethinking Reactivity"]: https://www.youtube.com/watch?v=AdNJ3fydeao
[Sapper]: https://sapper.svelte.technology/
