import { getTranslator } from "@/i18n/i18n"
import { MainLayout } from "@/shared/components/layouts"
import type { Locale } from "@/shared/config"

export async function HomePage({ locale }: { locale: Locale }) {
  const t = await getTranslator(locale)

  return (
    <MainLayout currentRoute="home" locale={locale}>
      <section className={`grid-wrapper`}>{t("home.title")}</section>
    </MainLayout>
  )
}
