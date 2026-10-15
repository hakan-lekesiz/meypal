import { getTranslator } from "@/i18n/i18n"
import { MainLayout } from "@/shared/components/layouts"
import type { Locale } from "@/shared/config"
import { MissionHeroSection, MissionPrinciplesSection } from "./sections"

export async function MissionPage({ locale }: { locale: Locale }) {
  const t = await getTranslator(locale)

  return (
    <MainLayout currentRoute="mission" locale={locale}>
      <article className="min-h-[70vh] bg-[#fcfdfe] py-12 md:py-20">
        <div className="grid-wrapper">
          <div className="mx-auto max-w-4xl">
            <MissionHeroSection locale={locale} t={t} />
            <MissionPrinciplesSection locale={locale} t={t} />
          </div>
        </div>
      </article>
    </MainLayout>
  )
}
