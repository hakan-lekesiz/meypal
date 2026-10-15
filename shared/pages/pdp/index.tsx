import { getTranslator } from "@/i18n/i18n"
import { MainLayout } from "@/shared/components/layouts"
import type { Locale } from "@/shared/config"
import type { ProductDetail } from "@/shared/models"
import {
  PdpAboutSection,
  PdpAlternatingListSection,
  PdpFeaturesSection,
  PdpGallerySection,
} from "./sections"

export interface ProductDetailPageProps {
  locale: Locale
  product: ProductDetail
  showAlternatingList?: boolean
}

export async function ProductDetailPage({
  locale,
  product,
  showAlternatingList = false,
}: ProductDetailPageProps) {
  const t = await getTranslator(locale)

  return (
    <MainLayout currentRoute={product.route} locale={locale}>
      <article className="min-h-[60vh] bg-[#fcfdfe] py-10 md:py-16">
        <div className="grid-wrapper">
          <div className="mx-auto max-w-6xl space-y-4">
            {/* 1. Editorial About & Dual Image Showcase */}
            <PdpAboutSection locale={locale} product={product} t={t} />

            {/* 2. Optional Alternating List Section (e.g. Varieties) */}
            {showAlternatingList && (
              <PdpAlternatingListSection locale={locale} product={product} t={t} />
            )}

            {/* 3. Real Photos Gallery */}
            <PdpGallerySection product={product} t={t} />

            {/* 4. Key Features / Health & Culinary Values */}
            <PdpFeaturesSection product={product} t={t} />
          </div>
        </div>
      </article>
    </MainLayout>
  )
}

export * from "./sections"
