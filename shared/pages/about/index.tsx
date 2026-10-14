import { getTranslator } from "@/i18n/i18n"
import { MainLayout } from "@/shared/components/layouts"
import type { Locale } from "@/shared/config"

export async function AboutPage({ locale }: { locale: Locale }) {
  const t = await getTranslator(locale)

  return (
    <MainLayout currentRoute="about" locale={locale}>
      <section className="grid-wrapper">{t("about.title")}</section>
    </MainLayout>
  )
}
