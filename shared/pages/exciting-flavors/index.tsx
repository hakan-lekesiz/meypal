import { getTranslator } from "@/i18n/i18n"
import { MainLayout } from "@/shared/components/layouts"
import type { Locale } from "@/shared/config"
import {
  ExcitingFlavorsCtaSection,
  ExcitingFlavorsHeroSection,
  ExcitingFlavorsItemsSection,
} from "./sections"

export async function ExcitingFlavorsPage({ locale }: { locale: Locale }) {
  const t = await getTranslator(locale)

  return (
    <MainLayout currentRoute="excitingFlavors" locale={locale}>
      <article className="min-h-[70vh] bg-[#fcfdfe] py-12 md:py-20">
        <div className="grid-wrapper">
          <div className="mx-auto max-w-5xl">
            <ExcitingFlavorsHeroSection locale={locale} t={t} />
            <ExcitingFlavorsItemsSection locale={locale} t={t} />
            <ExcitingFlavorsCtaSection locale={locale} t={t} />
          </div>
        </div>
      </article>
    </MainLayout>
  )
}
