# Monolyth GitHub Pages Template

Single-page, production-style template for Monolyth with a modern defense-tech aesthetic.

## Files

- `index.html` - site structure and copy
- `styles.css` - visual system, responsive layout, animations
- `script.js` - mobile nav toggle, reveal-on-scroll, dynamic footer year
- `assets/monolyth-emblem-gold.png` - optional Monolyth emblem asset
- `assets/mission-ops.webp` - operational hero still image
- `favicon.ico`, `favicon-*.png`, `apple-touch-icon.png`, `android-chrome-*.png` - favicon/app icon set
- `site.webmanifest` - PWA/app metadata
- `robots.txt` - crawl policy + sitemap reference
- `sitemap.xml` - XML sitemap for search indexing
- `assets/og-monolyth.jpg` - social preview image (Open Graph/Twitter)

## Quick start (local)

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Publish on GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub, open `Settings` -> `Pages`.
3. Under `Build and deployment`, set:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` (or your branch), folder `/ (root)`
4. Save and wait for deployment.
5. GitHub will provide the public URL (or attach your custom domain there).

## Customize before launch

1. Replace contact details and copy in `index.html`.
2. Update SEO metadata if your final domain differs:
   - `canonical` URL
   - `og:url`
   - `og:image` absolute URL
   - `sitemap.xml` `<loc>` entries
   - `robots.txt` sitemap line
3. Update metadata:
   - `<title>`
   - `<meta name="description">`
   - Optional social tags (`og:*`, `twitter:*`)
4. Add brand assets (logo, favicon, photography) as needed.

## Optional hardening

1. Add analytics (`Plausible`, `GA4`, etc.).
2. Add a lightweight CSP and security headers if served behind Cloudflare/Vercel/Netlify.
3. Connect form submissions to CRM or ticketing workflow.
