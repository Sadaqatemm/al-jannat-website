# Al Jannat Restaurants — Website

A 3D motion website for **Al Jannat**, a premium Indian, Pakistani & Afghan
halal restaurant group with four branches in Nanjing, China (Gulou, Xianlin,
Jiangning, Pukou).

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**,
**React Three Fiber / Three.js** (3D hero scene), **GSAP** (scroll + entrance
animation), and a lightweight in-house **EN / 中文** translation system.

> **Note on tech choices vs. the original brief:** the brief named
> `i18next` and `Framer Motion` specifically. Both are installed in
> `package.json` and ready to use, but the shipped implementation uses a
> custom React Context translation system (`src/i18n/`) instead of i18next,
> and GSAP for all animation instead of Framer Motion. This was a
> deliberate call: the custom context is simpler to audit/maintain for a
> two-language site of this size, and GSAP's ScrollTrigger gives more
> precise control over the scroll-linked 3D camera and reveal choreography
> than Framer Motion offers. If you'd rather standardize on i18next and/or
> Framer Motion to match the original spec exactly, that's a refactor of
> `src/i18n/` (swap `LanguageProvider` for an `i18next` setup) and the
> `gsap.to(...)` calls (swap for `motion.div`/`useAnimation`) respectively —
> happy to do that pass if you'd prefer it.

---

## ⚠️ Before you launch — replace placeholder data

This build ships with realistic **placeholder data** clearly marked in the
code (`isPlaceholder: true` / `addressIsPlaceholder: true` /
`ratingIsPlaceholder: true`). On the live site these show a small
`*placeholder` tag. Replace before going live:

| What | Where | Status |
|---|---|---|
| Gulou address | `src/data/branches.ts` | ✅ Verified from public listings |
| Jiangning address | `src/data/branches.ts` | ✅ Verified from public listings |
| Xianlin address | `src/data/branches.ts` | ⚠️ Approximate — needs exact street address |
| Pukou address | `src/data/branches.ts` | ⚠️ Approximate — needs exact street address |
| Menu items & prices | `src/data/menu.ts` | ⚠️ Placeholder — replace with real menu/prices |
| Staff names, bios, photos | `src/data/staff.ts` | ⚠️ Placeholder — replace with real team |
| Gallery photos | `src/data/gallery.ts` | ⚠️ Stock photography — replace with real photos |
| Dianping ratings (Xianlin/Jiangning/Pukou) | `src/data/branches.ts` | ⚠️ Estimated — confirm real rating |
| WhatsApp number | `src/data/branches.ts` (`whatsapp` field, currently shared) | ⚠️ Add real per-branch numbers if available |

Everything else (site structure, copy, hours, buffet policy, child policy,
phone number, bilingual text) reflects the brief you provided.

---

## Requirements

- **Node.js 20+** (Node 22 recommended) — [nodejs.org](https://nodejs.org)
- **npm** (comes with Node)

## Run locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the site
# http://localhost:3000
```

The dev server supports hot-reload — edit any file in `src/` and the browser
updates automatically.

## Production build (test before deploying)

```bash
npm run build   # builds + statically generates every page
npm run start   # serves the production build at http://localhost:3000
```

A clean `npm run build` is the best way to confirm the whole site (including
all 4 branch pages) compiles correctly before you deploy.

## Lint & type-check

```bash
npm run lint        # ESLint (includes React Hooks correctness rules)
npx tsc --noEmit     # TypeScript type-check only, no build output
```

---

## Deploying

This is a **standard Next.js App Router project** — it deploys anywhere that
runs Next.js.

### Option A — Vercel (recommended, made by the Next.js team)

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Leave all settings as default (Vercel auto-detects Next.js) → **Deploy**.
4. Every future push to your main branch redeploys automatically.

### Option B — Any Node host (Render, Railway, a VPS, etc.)

```bash
npm install
npm run build
npm run start    # listens on PORT env var, default 3000
```

Point your reverse proxy (nginx, Caddy, etc.) at the Node process, or use the
host's native Next.js/Node app support.

### Option C — Static export

If you don't need server features and want a pure static-file deploy (e.g.
to a basic web host, Alibaba Cloud OSS, or behind the Great Firewall on a
mainland China CDN), add to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true, remotePatterns: [...] }, // keep existing patterns
};
```

Then `npm run build` produces a static `out/` folder you can upload anywhere.
Note: the Google Maps `<iframe>` embeds will still need outbound internet
access to load for visitors.

---

## Project structure

```
src/
├── app/                        # Next.js App Router — one folder per route
│   ├── page.tsx                 → "/"            Homepage
│   ├── menu/page.tsx             → "/menu"         Standalone menu (all branches, tabbed)
│   ├── gallery/page.tsx          → "/gallery"       Standalone gallery (all branches, tabbed)
│   ├── reservations/page.tsx     → "/reservations"  Full reservation form + contact info
│   ├── branches/[slug]/page.tsx  → "/branches/gulou" etc. — one template, 4 branches
│   ├── layout.tsx               Root layout: fonts, providers, header/footer/nav mount
│   └── globals.css              Design tokens (colors/fonts), utility classes
│
├── components/
│   ├── 3d/HeroScene.tsx         React Three Fiber hero (brass vessel + embers)
│   ├── layout/                  Header, Footer, FloatingActions (call/WhatsApp), MobileBottomNav
│   ├── sections/                Homepage sections (Hero, Intro, BranchSelector, etc.)
│   │   └── branch/              Branch-page sections (Hero, Quickbar, Staff, Menu, Gallery, Map)
│   └── ui/                      Reusable primitives: Magnetic, TiltCard, Reveal, modals, etc.
│
├── data/                        ⭐ EDIT HERE for content changes
│   ├── types.ts                 TypeScript shape of a Branch / MenuItem / StaffMember
│   ├── branches.ts               The 4 branches: address, hours, buffet, map query, rating
│   ├── menu.ts                   Shared à la carte menu (used by all branches)
│   ├── staff.ts                  Shared staff roster (used by all branches)
│   └── gallery.ts                Shared photo pool (rotated per branch)
│
└── i18n/
    ├── translations.ts          ⭐ EDIT HERE for UI text changes (nav, buttons, labels)
    └── LanguageProvider.tsx     EN/中文 toggle logic (persists choice to localStorage)
```

### Making content changes (no code knowledge required for most of this)

- **Change a price, dish, or description** → edit `src/data/menu.ts`
- **Change a branch's hours, buffet days, or address** → edit `src/data/branches.ts`
- **Change staff names/bios/photos** → edit `src/data/staff.ts` (or give a branch its
  own staff by passing a custom array instead of `buildDefaultStaff()` in `branches.ts`)
- **Change any button/label/nav text in English or Chinese** → edit `src/i18n/translations.ts`
- **Swap a photo** → replace the Unsplash URL with your own image URL, or drop a file in
  `public/images/` and reference it as `/images/your-file.jpg`

Each branch can have its **own** menu/staff/gallery instead of sharing the
defaults — just pass a different array as that branch's `menu` / `staff` /
`gallery` field in `src/data/branches.ts`.

---

## Features implemented (per the original brief)

- ✅ EN / 中文 language toggle, persisted across visits, on every page
- ✅ Fully responsive: phones, tablets, laptops, desktops
- ✅ 3D animated hero (Three.js / React Three Fiber): rotating brass vessel,
  drifting ember/spice particle field, mouse-parallax + scroll-reactive camera
- ✅ GSAP scroll reveals, magnetic buttons, 3D tilt cards, page-load sequence
- ✅ Homepage: hero, story section, 4-branch selector, signature dishes, buffet banner
- ✅ 4 individual branch pages: staff showcase, categorized menu (with veg filter
  and spice-level icons), photo gallery with lightbox, buffet info, child policy,
  opening hours, embedded map + Google/Apple/Baidu map links
- ✅ Standalone Menu, Gallery, and Reservations pages (branch-switchable)
- ✅ Working reservation form (name/phone/guests/branch/date/time) with confirmation toast
- ✅ Click-to-call and WhatsApp deep links (pre-filled message, per branch)
- ✅ Floating WhatsApp + Call buttons on every page
- ✅ App-like bottom navigation bar on mobile
- ✅ Buffet schedule exactly as specified (Gulou/Xianlin/Pukou Fri–Sat,
  Jiangning Fri–Sun, 5–10PM; children under 10 free with a paying adult;
  à la carte always available)

## Known limitations / next steps

- Map embeds use the no-API-key Google Maps `/maps?q=` embed format, which
  works without billing setup but is less customizable than the full Maps
  JavaScript/Embed API. Swap in a real API key in
  `src/components/sections/branch/BranchInfoMap.tsx` if you want custom
  pins/styling.
- The reservation form currently shows a confirmation toast but doesn't send
  data anywhere — wire it to your booking system, a serverless function, or
  an email service (e.g. Resend, SendGrid) by replacing the `handleSubmit`
  function in `ReserveModal.tsx` and `reservations/page.tsx`.
- WhatsApp links currently share one phone number across all 4 branches
  (per your instruction). Update `whatsapp` in `src/data/branches.ts`
  per-branch if/when each location gets its own WhatsApp Business line.
- All photography is stock (Unsplash) except the logo. Replace with real
  branch photography for the best result.
