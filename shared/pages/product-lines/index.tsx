import { getTranslator } from "@/i18n/i18n"
import { MainLayout } from "@/shared/components/layouts"
import type { Locale } from "@/shared/config"
import {
  ProductLinesCtaSection,
  ProductLinesHeroSection,
  ProductLinesItemsSection,
} from "./sections"

export async function ProductLinesPage({ locale }: { locale: Locale }) {
  const t = await getTranslator(locale)

  return (
    <MainLayout currentRoute="productLines" locale={locale}>
      <article className="min-h-[70vh] bg-[#fcfdfe] py-12 md:py-20">
        <div className="grid-wrapper">
          <div className="mx-auto max-w-5xl">
            <ProductLinesHeroSection locale={locale} t={t} />
            <ProductLinesItemsSection locale={locale} t={t} />
            <ProductLinesCtaSection locale={locale} t={t} />
          </div>
        </div>
      </article>
    </MainLayout>
  )
}
