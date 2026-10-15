import { getTranslator } from "@/i18n/i18n"
import { MainLayout } from "@/shared/components/layouts"
import type { Locale } from "@/shared/config"
import {
  OrganicCtaSection,
  OrganicDedicationSection,
  OrganicFeaturesSection,
  OrganicHeroSection,
  OrganicVarietiesSection,
} from "./sections"

export async function OrganicPage({ locale }: { locale: Locale }) {
  const t = await getTranslator(locale)

  return (
    <MainLayout currentRoute="organic" locale={locale}>
      <article className="min-h-[70vh] bg-[#fcfdfe] py-12 md:py-20">
        <div className="grid-wrapper">
          <div className="mx-auto max-w-5xl">
            <OrganicHeroSection locale={locale} t={t} />
            <OrganicDedicationSection locale={locale} t={t} />
            <OrganicVarietiesSection locale={locale} t={t} />
            <OrganicFeaturesSection locale={locale} t={t} />
            <OrganicCtaSection locale={locale} t={t} />
          </div>
        </div>
      </article>
    </MainLayout>
  )
}
