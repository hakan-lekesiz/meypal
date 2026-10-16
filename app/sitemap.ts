import type { MetadataRoute } from "next"
import { getSiteLink, locales, siteLinks, siteOrigin, type SiteRoute } from "@/shared/config"

export const dynamic = "force-static"

// Static last modified baseline date for stable crawl caching (ISO date format)
const LAST_MODIFIED_DATE = new Date("2025-02-01T00:00:00.000Z")

const CATEGORY_ROUTES: SiteRoute[] = [
  "citrus",
  "fruits",
  "vegetables",
  "productLines",
  "readyToEat",
  "organic",
  "excitingFlavors",
]

const PRODUCT_ROUTES: SiteRoute[] = [
  "orange",
  "mandarin",
  "grapefruit",
  "lemon",
  "peach",
  "cherry",
  "quince",
  "fig",
  "pomegranate",
  "grape",
  "apricot",
  "watermelon",
  "melon",
  "tomato",
  "cucumber",
  "eggplant",
  "pepper",
  "cabbage",
  "onion",
  "potato",
  "garlic",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.keys(siteLinks) as SiteRoute[]
  const languageAlternates = (route: SiteRoute) => ({
    languages: Object.fromEntries(
      locales.map((locale) => [locale, `${siteOrigin}${getSiteLink(route, locale)}`]),
    ),
  })

  const getPriority = (route: SiteRoute): number => {
    if (route === "home") return 1.0
    if (["about", "contact", "catalog", ...CATEGORY_ROUTES].includes(route)) {
      return 0.8
    }
    if (PRODUCT_ROUTES.includes(route)) {
      return 0.7
    }
    return 0.6
  }

  const getChangeFrequency = (
    route: SiteRoute,
  ): MetadataRoute.Sitemap[number]["changeFrequency"] => {
    if (route === "home") return "weekly"
    if (CATEGORY_ROUTES.includes(route)) return "weekly"
    if (PRODUCT_ROUTES.includes(route)) return "monthly"
    return "monthly"
  }

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${siteOrigin}${getSiteLink(route, locale)}`,
      lastModified: LAST_MODIFIED_DATE,
      changeFrequency: getChangeFrequency(route),
      priority: getPriority(route),
      alternates: languageAlternates(route),
    })),
  )
}
