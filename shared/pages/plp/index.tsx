import { getTranslator } from "@/i18n/i18n"
import { MainLayout } from "@/shared/components/layouts"
import type { Locale } from "@/shared/config"
import type { CategoryDetail } from "@/shared/models"
import { PlpHeroSection, PlpProductGridSection } from "./sections"

export interface CategoryListingPageProps {
  locale: Locale
  category: CategoryDetail
}

export async function CategoryListingPage({ locale, category }: CategoryListingPageProps) {
  const t = await getTranslator(locale)

  return (
    <MainLayout currentRoute={category.route} locale={locale}>
      <article className="min-h-[70vh] bg-[#fcfdfe]">
        {/* 1. Category Hero with Breadcrumbs & Overview */}
        <PlpHeroSection category={category} locale={locale} t={t} />

        <div className="grid-wrapper pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl">
            {/* 2. Modern Product Grid */}
            <PlpProductGridSection category={category} locale={locale} t={t} />
          </div>
        </div>
      </article>
    </MainLayout>
  )
}

export * from "./sections"
