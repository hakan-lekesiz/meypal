import { useId } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaCheck } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import { getSiteLink, type Locale } from "@/shared/config"
import type { CategoryDetail, ProductDetail } from "@/shared/models"

type Translate = Awaited<ReturnType<typeof getTranslator>>

interface PlpProductGridSectionProps {
  category: CategoryDetail
  locale: Locale
  t: Translate
}

export function PlpProductGridSection({ category, locale, t }: PlpProductGridSectionProps) {
  const sectionId = useId()
  const products = category.products

  const productsCountText = t.has(`categories.${category.id}.productsCount`)
    ? t(`categories.${category.id}.productsCount`, { count: products.length })
    : t("categories.common.productsCount", { count: products.length })

  return (
    <section aria-labelledby={sectionId} className="relative">
      {/* Section Header */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-end">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
            {t("categories.common.allProducts")}
          </span>
          <h2
            className="mt-1 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl"
            id={sectionId}
          >
            {productsCountText}
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-[#64748b]">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{t("categories.common.freshGuarantee")}</span>
        </div>
      </div>

      {/* Modern Product Cards Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product: ProductDetail) => {
          const productHref = getSiteLink(product.route, locale)
          const title = t(product.titleKey)
          const varietyCount = product.varieties?.length
          const quoteKey = `products.${product.id}.quote`

          return (
            <article
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#006894]/40 hover:shadow-xl"
              key={product.id}
            >
              {/* Product Visual Container */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-100 sm:h-72">
                <Image
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  src={product.image}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90"
                />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#006894] shadow-xs backdrop-blur-xs">
                    {t("products.common.freshBadge")}
                  </span>

                  {varietyCount ? (
                    <span className="rounded-full bg-[#006894]/90 px-3 py-1 text-[11px] font-bold text-white shadow-xs backdrop-blur-xs">
                      {t("categories.common.varieties", { count: varietyCount })}
                    </span>
                  ) : null}
                </div>

                {/* Scientific Botanical Name Pill */}
                {product.scientificName && (
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block rounded-md bg-black/40 px-2 py-0.5 text-xs italic font-medium text-white/90 backdrop-blur-xs">
                      {product.scientificName}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Content Details */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[#0f172a] transition-colors group-hover:text-[#006894]">
                    <Link className="after:absolute after:inset-0" href={productHref}>
                      {title}
                    </Link>
                  </h3>

                  {/* Sensory Quote / Teaser */}
                  <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-[#64748b]">
                    "{t(quoteKey)}"
                  </p>

                  {/* Highlights / Features mini tags */}
                  {product.features && product.features.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {product.features.slice(0, 2).map((feat) => (
                        <li
                          className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 text-[11px] font-medium text-[#475569] border border-slate-100"
                          key={feat.titleKey}
                        >
                          <FaCheck aria-hidden="true" className="text-[9px] text-[#F58220]" />
                          <span>{t(feat.titleKey)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* CTA Action Button */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#006894] py-2.5 px-4 text-xs font-bold text-white shadow-xs transition-all duration-200 group-hover:bg-[#F58220]">
                    <span>{t("categories.common.viewProduct")}</span>
                    <FaArrowRight
                      aria-hidden="true"
                      className="text-[10px] transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
