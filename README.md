# Subbun landing site

Marketing site for Subbun, the Chrome extensions for Japanese video and forms. Built with Astro + Tailwind, deployed to Vercel.

## Pages

- `/` — Hero, click-count comparison, features, pricing, FAQ
- `/privacy` — Privacy policy (Chrome Web Store + Lemon Squeezy require it)
- `/terms` — Terms of service
- `/help` — Setup, troubleshooting, FAQ

## Scope

Currently launches Subbun for Video only. Subbun for Forms is built and ready in the main repo but intentionally not promoted on the landing site until it's ready to ship as its own product. To bring it back, restore the index/header/footer changes from git history (commit before this change).

## Local development

```bash
npm install
npm run dev
# → opens http://localhost:4321
```

Edit any `.astro` file under `src/` — Astro hot-reloads instantly.

## Production build

```bash
npm run build
npm run preview
# → static files in ./dist
```

## Deploy to Vercel

The fastest path:

1. **Push this folder to a new GitHub repo.**
   ```bash
   cd subbun-landing
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   gh repo create subbun-landing --public --source=. --push
   # (or use the GitHub web UI if you don't have the gh CLI)
   ```

2. **Import in Vercel.**
   Sign in at [vercel.com](https://vercel.com), click "Add New Project,"
   pick the GitHub repo. Vercel auto-detects Astro and uses the
   default settings. Click Deploy.

3. **Point your domain at Vercel.**
   In the Vercel project → Settings → Domains, add `getsubbun.com`. Vercel
   tells you which DNS records to set; add them at your registrar
   (Namecheap, Cloudflare, etc.). HTTPS is auto-provisioned within a
   couple of minutes.

4. **(Optional) Set up automatic redeploys.**
   Already on by default — every push to `main` rebuilds and deploys.

The whole flow is ~5 minutes once the GitHub repo exists.

## Things to update before launch

- `src/pages/index.astro`: replace the `VIDEO_STORE` constant at the top with the real Chrome Web Store URL once the listing is live.
- Demo video: the placeholder box in the feature section — record a 30-second screencap of the product in action and drop the `.mp4` into `public/`, then embed it with a `<video>` tag.
- `public/og-image.png`: drop a 1200×630 social-card image here. Without one, Twitter/LinkedIn previews fall back to no image.
- `src/components/Footer.astro`: update the year if you launch in a new year.
- `src/pages/privacy.astro` and `terms.astro`: review the "Last updated" date and adjust if you change anything material.
- `src/components/Header.astro` and `Footer.astro`: replace the `あ` logo placeholder with the actual Subbun icon SVG if you want.

## Style guide

Tailwind utility classes throughout. Custom CSS lives in `src/styles/global.css` as component classes (`.btn`, `.btn-primary`, `.container-narrow`, `.prose-doc`). Brand color is `#ff6f4d` (Tailwind: `accent`).

## What this site does not need

- A CMS (content is static, you update by editing `.astro` files)
- A database (no signups, no forms — Chrome Web Store handles install / sales handled by Lemon Squeezy)
- Server-side rendering (everything is pre-rendered to static HTML)
- Analytics (consider Plausible or Vercel Analytics later, but optional)

## License

Proprietary — for Subbun's use only.
