import { getTranslator } from "@/i18n/i18n"
import { MainLayout } from "@/shared/components/layouts"
import type { Locale } from "@/shared/config"
import { VisionHeroSection, VisionPrinciplesSection } from "./sections"

export async function VisionPage({ locale }: { locale: Locale }) {
  const t = await getTranslator(locale)

  return (
    <MainLayout currentRoute="vision" locale={locale}>
      <article className="min-h-[70vh] bg-[#fcfdfe] py-12 md:py-20">
        <div className="grid-wrapper">
          <div className="mx-auto max-w-4xl">
            <VisionHeroSection locale={locale} t={t} />
            <VisionPrinciplesSection locale={locale} t={t} />
          </div>
        </div>
      </article>
    </MainLayout>
  )
}
