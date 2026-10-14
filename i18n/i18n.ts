import { getTranslations } from "next-intl/server"
import type { Locale } from "@/shared/config"

export function getTranslator(locale: Locale) {
  return getTranslations({ locale })
}
