

## Problem

This is a client-side React SPA — without JavaScript, the `<div id="root"></div>` is empty, so crawlers and AI agents see no content.

## Solution: Pre-render at build time

Use the **`vite-plugin-prerender`** (formerly `preact-cli-prerender` / `vite-ssg`) or more specifically **`vite-plugin-ssr-prerender`**. The simplest and most battle-tested option for this use case is **`vite-plugin-prerender`** which uses Puppeteer to render the page at build time and writes the resulting HTML into the `dist/` folder.

However, since this is a single-page portfolio with all content on `/`, a simpler and zero-dependency approach is better:

### Approach: Inject a `<noscript>` block with full semantic content into `index.html`

This adds a comprehensive `<noscript>` section containing all the site's key content as semantic HTML directly in `index.html`. Crawlers and AI agents that don't execute JavaScript will see this content. It also adds structured data (JSON-LD) in the `<head>` which is always visible regardless of JS.

### Changes

1. **`index.html`** — Add:
   - JSON-LD structured data (`Person` + `Organization` schema) in a `<script type="application/ld+json">` tag in `<head>`
   - A `<noscript>` block inside `<body>` containing all key content: name, tagline, summary, skills, selected assignments, employment history, courses, education, and contact info — all using semantic HTML (`h1`, `h2`, `article`, `ul`, etc.)

2. **No other files change.** The React app still renders normally with JS enabled; the noscript content is invisible to regular users.

### Why this approach over pre-rendering plugins

- Zero dependencies — no Puppeteer/Chromium needed in CI
- No build complexity — works with any static host including Netlify
- Full control over exactly what crawlers see
- Structured data (JSON-LD) is read by all major search engines and AI systems regardless of JS

