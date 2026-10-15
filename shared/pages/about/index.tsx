import { getTranslator } from "@/i18n/i18n"
import { MainLayout } from "@/shared/components/layouts"
import type { Locale } from "@/shared/config"
import {
  AboutCtaSection,
  AboutGlobalHubsSection,
  AboutHeroSection,
  AboutStorySection,
  AboutTimelineSection,
  AboutValuesSection,
} from "./sections"

export async function AboutPage({ locale }: { locale: Locale }) {
  const t = await getTranslator(locale)

  return (
    <MainLayout currentRoute="about" locale={locale}>
      <AboutHeroSection locale={locale} t={t} />
      <AboutStorySection locale={locale} t={t} />
      <AboutTimelineSection locale={locale} t={t} />
      <AboutGlobalHubsSection locale={locale} t={t} />
      <AboutValuesSection locale={locale} t={t} />
      <AboutCtaSection locale={locale} t={t} />
    </MainLayout>
  )
}
