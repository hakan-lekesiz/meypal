# Meypal Project Architecture & AI Agent Instructions

This document summarizes the codebase architecture, existing progress, and rules for creating new pages and components. It is written in English for AI agents working on this repository.

---

## 1. Project Overview & Core Philosophy

- **Framework:** Next.js 16 (App Router + Turbopack), React 19, TypeScript.
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`).
- **Internationalization:** `next-intl` (Default: `tr`, Secondary: `en`, `localePrefix: "never"`).
- **Linter & Formatter:** Biome (run `pnpm lint` or `pnpm lint:fix`).
  - Formatting rules: Double quotes (`"`), no semicolons (`asNeeded`).
  - Native `<img>` is prohibited; always use `next/image` (`<Image />`).
- **Deployment & Rendering Mode:** **Strict Static Site Generation (SSG)**.
  - Zero dynamic runtime / SSR allowed. Every page must compile statically during `pnpm build`.
  - Output routes in build logs must display `● (SSG)` or `○ (Static)`. Never `ƒ (Dynamic)`.

---

## 2. Work Done So Far

1. **Global Layout & Shell:**
   - `shared/components/layouts/main-layout/MainLayout.tsx` wraps every page.
   - Header: Top contact/language bar (`#005073`), solid white main bar (`bg-white`), responsive mobile drawer with hamburger-only button.
   - Footer: Deep navy (`#002f43`), CTA banner with gradient, logo in white rounded card, dynamic contact links, company & product link columns.
2. **SEO & Structured Data:**
   - Reusable SEO engine in `shared/utils/seo`: `createPageMetadata`, `createRootLayoutMetadata`, `JsonLd`, and Schema.org generators.
   - GEO tags for Mersin, Turkey headquarters (`TR-33`, lat/long coordinates) applied globally.
   - `app/sitemap.ts` and `app/robots.ts` fully automated with multilingual hreflang alternates.
3. **Routing & Navigation Registry:**
   - `shared/config/index.ts`: Central source of truth for `PAGES`, `navigationConfig`, `footerCompanyLinks`, `footerProductLinks`, and `contactConfig`.
   - `i18n/routing.ts`: Path mappings between Turkish and English slugs.
4. **Pages Implemented:**
   - **Home Page** (`app/[locale]/page.tsx` -> `shared/pages/home/index.tsx`): 6 modular sections (`HeroSection` with Swiper, `CoreValuesSection`, `CitrusShowcaseSection`, `MissionStatsSection`, `AboutCompanySection`, `OperationCtaSection`).
   - **About Page Scaffold** (`app/[locale]/about/page.tsx` -> `shared/pages/about/index.tsx`): baseline established with Breadcrumb schema and layout.

---

## 3. Directory & Architectural Pattern

Follow this strict separation of concerns:

```text
app/
  [locale]/
    layout.tsx               # Root locale shell (HTML lang, font, ThemeProvider, root metadata)
    page.tsx                 # Home page route wrapper (SSG + metadata + JsonLd)
    [route]/
      page.tsx               # Route wrapper (SSG + metadata + JsonLd)
shared/
  config/
    index.ts                 # PAGES mapping, nav items, contact details, locales
  pages/
    [page]/
      index.tsx              # Page container component (<MainLayout>)
      sections/              # Page-specific modular section components
  components/
    layouts/                 # MainLayout, Header, Footer
    ui/                      # Reusable atom/molecule components
    client-actions/          # Interactive client widgets (e.g. WhatsApp button)
  utils/
    seo/                     # Metadata creators, Schema.org generators, JsonLd component
messages/
  tr.json                    # Turkish translations (UI copy & metadata)
  en.json                    # English translations (UI copy & metadata)
```

---

## 4. Brand Design Tokens & UI Guidelines

- **Primary Colors:**
  - 🟠 **Orange (Primary CTA / Accents):** `#F58220` (Hover: `#dc6e11`, Light tint: `#fff4ec` / `#feecd9`).
  - 🔵 **Blue (Primary Brand / Headers):** `#006894` (Header top bar: `#005073`, Footer background: `#002f43`).
- **Typography & Text:**
  - Font: `Inter, sans-serif`.
  - Dark Headings: `#0f172a` (slate-900), `#1e293b` (slate-800).
  - Body / Muted: `#64748b` (slate-500).
- **Buttons:**
  - Primary: `bg-[#F58220] hover:bg-[#dc6e11] text-white font-semibold rounded-full`.
  - Secondary: `border border-[#006894] text-[#006894] hover:bg-[#006894]/10 rounded-full`.
- **Layouts & Containers:**
  - Use `grid-wrapper` utility class for standardized horizontal max-width and responsive padding.
- **Logo:**
  - File: `public/logo.png` (`572px × 251px`).
  - Header: Pure white background, `h-14 w-auto object-contain`.
  - Footer: Inset in white rounded container `rounded-xl bg-white px-3 py-2`.

---

## 5. Guide: Creating a New Page (Agent Checklist)

When tasked with adding a new page (e.g., `citrus`, `contact`, `mission`), execute the following steps in order:

### Step 1: Register Route in Config & Routing
1. Check `shared/config/index.ts`:
   - Ensure the page key and localized slugs exist in `PAGES` (e.g., `citrus: { tr: "/narenciye", en: "/citrus" }`).
   - Ensure `pageTitleKeys` contains the translation key mapping.
2. Check `i18n/routing.ts`:
   - Ensure `routing.pathnames` has the matching route mapping.

### Step 2: Add Translations
Add keys to both `messages/tr.json` and `messages/en.json`:
- **SEO Metadata:** Under `metadata.<routeKey>`:
  ```json
  "metadata": {
    "myRoute": {
      "title": "Page Title | Meypal",
      "description": "Page description...",
      "keywords": "keyword1, keyword2"
    }
  }
  ```
- **Page Content:** Under a dedicated top-level namespace (e.g., `"myRoute": { ... }`).

### Step 3: Define Structured Data (JSON-LD)
In `shared/utils/seo/structured-data.ts`:
- Create an async function `get<Name>StructuredData(locale: Locale)`.
- Include `BreadcrumbList` schema and a relevant Schema.org entity (`WebPage`, `AboutPage`, `ContactPage`, `ItemPage`, etc.).
- Re-export the helper in `shared/utils/index.ts`.

### Step 4: Create Page UI Component
Create `shared/pages/<page-name>/index.tsx`:
- Keep it an async Server Component by default.
- Fetch translations with `const t = await getTranslator(locale)`.
- Wrap page in `<MainLayout currentRoute="<routeKey>" locale={locale}>`.
- Break large pages into sub-components inside `shared/pages/<page-name>/sections/`.
- Only use `"use client"` on leaf components that need browser events or hooks.

### Step 5: Create App Router Entrypoint
Create `app/[locale]/<route-folder>/page.tsx`. This file must be a thin wrapper with exact SSG requirements:

```tsx
import { isLocale, locales, type Locale } from "@/shared/config"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import { createPageMetadata, get<Name>StructuredData, JsonLd } from "@/shared/utils"
import { <Name>Page } from "@/shared/pages/<page-name>"

// 1. Force static generation
export const dynamic = "force-static"
export const dynamicParams = false

// 2. Generate params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type PageProps = { params: Promise<{ locale: string }> }

// 3. Dynamic metadata via createPageMetadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: routeLocale } = await params
  if (!isLocale(routeLocale)) notFound()

  const locale: Locale = routeLocale
  setRequestLocale(locale) // Required for static next-intl

  return createPageMetadata({
    locale,
    route: "<routeKey>",
  })
}

// 4. Default export page component
export default async function Page({ params }: PageProps) {
  const { locale: routeLocale } = await params
  if (!isLocale(routeLocale)) notFound()

  const locale: Locale = routeLocale
  setRequestLocale(locale) // Required for static next-intl

  const structuredData = await get<Name>StructuredData(locale)

  return (
    <>
      <JsonLd data={structuredData} />
      <<Name>Page locale={locale} />
    </>
  )
}
```

---

## 6. SEO, GEO & Semantic HTML Standards (Mandatory)

Whenever creating or modifying components, pages, metadata, or sitemaps:

1. **Semantic Heading Hierarchy (`h1` -> `h2` -> `h3`):**
   - Every route/page **must have exactly one `<h1>` element**.
   - In Product Detail Pages (`PDP`), the main product title in `PdpAboutSection` is the single `<h1>`. Sub-sections, feature titles, and alternating varieties must use `<h2>` or `<h3>`.
   - In Category/PLP pages, the category title in `PlpHeroSection` is the single `<h1>`. Product grid sections and cards use `<h2>` and `<h3>`.
   - Never skip heading levels (e.g., do not place `<h4>` directly under `<h2>`).

2. **Image Accessibility & SEO:**
   - **Never leave `alt=""` empty** on visible or background imagery that carries brand or contextual meaning.
   - All `Image` components must provide localized, keyword-rich, and descriptive `alt` attributes (e.g., Turkish: *"Meypal Akdeniz taze meyve ve sebze ihracat sepeti"*, English: *"Meypal fresh fruits and vegetables export produce basket"*).
   - Use `priority` only on above-the-fold hero images to optimize Largest Contentful Paint (LCP).

3. **Sitemap (`app/sitemap.ts`) Integrity:**
   - All categories and individual product detail routes (e.g. orange, mandarin, lemon, grapefruit, tomato, pepper, peach, grape, etc.) must be registered in the sitemap.
   - Use a fixed/stable `lastModified` date (e.g., release/content baseline date) instead of `new Date()`. Dynamic `new Date()` invalidates Googlebot crawl cache on every hit and consumes crawl budget unnecessarily.
   - Differentiate priorities: Home `1.0`, Main corporate/categories `0.8`, Products `0.7`, Secondary `0.6`.

4. **GEO (Geotargeting) & Local Business Entities:**
   - Keep global GEO metadata in `shared/utils/seo/constants.ts` (`geo.region: "TR-33"`, `geo.placename: "Mersin, Türkiye"`, `ICBM`, lat/long).
   - Corporate Schema.org (`LocalBusiness` / `Organization`) must include:
     - Accurate `address`, `geo: GeoCoordinates`, `foundingLocation`, `areaServed`, `hasMap`.
     - Official digital presence in `sameAs` array (Google Maps profile, LinkedIn, etc.) to reinforce Knowledge Graph entity connection.

---

## 7. Strict Verification Commands

Before concluding any task or PR:
1. `pnpm.cmd lint` (or `cmd /c pnpm lint`) — Ensure Biome passes with 0 warnings/errors. Run `pnpm.cmd lint:fix` to auto-fix formatting issues.
2. `pnpm.cmd build` (or `cmd /c pnpm build`) — Verify Turbopack builds successfully and all generated routes are marked with `● (SSG)` or `○ (Static)`.


