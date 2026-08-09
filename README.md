# web — monolythtech.com

The Monolyth public website. A single static page, no build step, served by GitHub
Pages straight from `main`.

**This repository is live.** A commit to `main` publishes to
[monolythtech.com](https://monolythtech.com) within a minute or two. There is no staging
environment — work on a branch and merge deliberately.

This repository is public. Everything committed here is readable by anyone — treat it
accordingly, and keep internal detail out of it.

## Before you change the copy

Marketing language is a compliance input, not just copy. Export classification is driven by
described capability, and terms like *counter-UAS*, *SIGINT*, *electronic warfare* and
*threat geolocation* are classification-relevant. Copy changes are reviewed against the
legal and compliance guidance in the internal record before they reach `main`.

## Layout

| Path | What |
|---|---|
| `index.html` | the page — structure and all copy |
| `styles.css` | visual system, responsive layout, animations |
| `script.js` | mobile nav toggle, reveal-on-scroll, footer year |
| `CNAME` | the custom domain — **do not delete**, removing it drops monolythtech.com |
| `assets/` | emblem, hero still, social preview image |
| `favicon.*`, `apple-touch-icon.png`, `android-chrome-*.png`, `site.webmanifest` | icon set and PWA metadata |
| `robots.txt`, `sitemap.xml` | crawl policy and sitemap |

## Working on it

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`. What you see locally is what Pages will serve — same
files, no transform.

To publish: commit to `main` and push. Pages rebuilds on its own. HTTPS is enforced and the
certificate covers both `monolythtech.com` and `www.monolythtech.com`.

If you change the domain, update all of: `CNAME`, the `canonical` link, `og:url`,
the absolute `og:image` URL, `sitemap.xml` `<loc>` entries, and the sitemap line in
`robots.txt`. They are easy to miss individually and wrong metadata outlives the change.

## Open branches

- `draft/site-rewrite` — a repositioning of the copy ("the premier integrator of unmanned
  systems") plus approach/company/contact sections and a rewritten stylesheet. Recovered
  from an uncommitted working tree on the build machine, unreviewed, not merged.
