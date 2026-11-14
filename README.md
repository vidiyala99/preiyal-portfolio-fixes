# Preiyal Bhalla portfolio, fixes

Unofficial concept rebuild of [preiyalbhalla.com](https://preiyalbhalla.com) (Framer) that keeps the original look and fixes the differences between the desktop, tablet, and phone versions.

Built as an outreach demo. All pages are `noindex`.

## Pages

- `index.html` — fixed homepage (Work)
- `about.html` — About page on the same header and design system
- `before-after.html` — before/after evidence pairs and the full list of Framer changes
- `mockups.html` — header mockups from the design round (not deployed)

## What was fixed

- Phone project cards now show the correct logos and images (Catchback and Twitch cards previously showed Airtel assets copied from the Airtel card).
- One email behavior everywhere: a real `mailto:` link that also copies the address.
- Job title is "Senior Product Designer" on every breakpoint.
- One navigation set on every breakpoint: Work, About, Resume, LinkedIn, plus Email.
- Airtel card title no longer breaks mid-word on phones; cards stack instead of squeezing.
- "Coming soon" contrast raised, real headings (`h1`/`h2`), alt text on all images, meta description, and accessible labels added.
- Sticky top bar with identity and contact icons (Email, Resume, LinkedIn, X) in the same place on every page; Resume opens in an in-page viewer.

See `before-after.html` for screenshots and the per-fix list, and `DESIGN-BRIEF.md` for the design decisions.

## Run locally

No build step. Serve the folder with any static server:

```bash
npx serve .
# or
python -m http.server 5173
```

Then open `http://localhost:5173` (or the port shown).

## Deploy

Static site, deploys as-is to Vercel / Netlify / GitHub Pages. On Vercel:

```bash
npm i -g vercel
vercel deploy --prod
```

Videos load from the original Framer CDN; images are in `assets/`.
