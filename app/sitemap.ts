import type { MetadataRoute } from "next"
import { getSiteLink, locales, siteLinks, siteOrigin, type SiteRoute } from "@/shared/config"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.keys(siteLinks) as SiteRoute[]
  const languageAlternates = (route: SiteRoute) => ({
    languages: Object.fromEntries(
      locales.map((locale) => [locale, `${siteOrigin}${getSiteLink(route, locale)}`]),
    ),
  })

  const getPriority = (route: SiteRoute): number => {
    if (route === "home") return 1.0
    if (["about", "citrus", "fruits", "vegetables", "productLines", "catalog"].includes(route)) {
      return 0.8
    }
    return 0.6
  }

  const getChangeFrequency = (
    route: SiteRoute,
  ): MetadataRoute.Sitemap[number]["changeFrequency"] => {
    if (route === "home") return "daily"
    if (["about", "citrus", "fruits", "vegetables"].includes(route)) return "weekly"
    return "monthly"
  }

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${siteOrigin}${getSiteLink(route, locale)}`,
      lastModified: new Date(),
      changeFrequency: getChangeFrequency(route),
      priority: getPriority(route),
      alternates: languageAlternates(route),
    })),
  )
}
