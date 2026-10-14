import { defineRouting } from "next-intl/routing"
import { CONFIG } from "@/shared/config"

export const routing = defineRouting({
  locales: CONFIG.locales,
  defaultLocale: CONFIG.defaultLocale,
  localePrefix: "as-needed",
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/about": {
      tr: "/hakkimizda",
      en: "/about",
    },
    "/mission": {
      tr: "/misyon",
      en: "/mission",
    },
    "/vision": {
      tr: "/vizyon",
      en: "/vision",
    },
  },
})
