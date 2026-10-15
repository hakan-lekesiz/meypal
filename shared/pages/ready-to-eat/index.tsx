import { getTranslator } from "@/i18n/i18n"
import { MainLayout } from "@/shared/components/layouts"
import type { Locale } from "@/shared/config"
import { ReadyToEatCtaSection, ReadyToEatHeroSection, ReadyToEatItemsSection } from "./sections"

export async function ReadyToEatPage({ locale }: { locale: Locale }) {
  const t = await getTranslator(locale)

  return (
    <MainLayout currentRoute="readyToEat" locale={locale}>
      <article className="min-h-[70vh] bg-[#fcfdfe] py-12 md:py-20">
        <div className="grid-wrapper">
          <div className="mx-auto max-w-5xl">
            <ReadyToEatHeroSection locale={locale} t={t} />
            <ReadyToEatItemsSection locale={locale} t={t} />
            <ReadyToEatCtaSection locale={locale} t={t} />
          </div>
        </div>
      </article>
    </MainLayout>
  )
}
