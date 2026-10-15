import { getTranslator } from "@/i18n/i18n"
import { MainLayout } from "@/shared/components/layouts"
import type { Locale } from "@/shared/config"
import { CatalogDownloadSection } from "./sections"

export async function CatalogPage({ locale }: { locale: Locale }) {
  const t = await getTranslator(locale)

  return (
    <MainLayout currentRoute="catalog" locale={locale}>
      <article className="min-h-[70vh] bg-[#fcfdfe]">
        <CatalogDownloadSection locale={locale} t={t} />
      </article>
    </MainLayout>
  )
}
