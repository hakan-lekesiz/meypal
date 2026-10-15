import { useId } from "react"
import Image from "next/image"
import type { getTranslator } from "@/i18n/i18n"
import type { Locale } from "@/shared/config"
import type { ProductDetail } from "@/shared/models"

type Translate = Awaited<ReturnType<typeof getTranslator>>

interface PdpAlternatingListSectionProps {
  locale: Locale
  product: ProductDetail
  t: Translate
}

export function PdpAlternatingListSection({ product, t }: PdpAlternatingListSectionProps) {
  const headingId = useId()
  const varieties = product.varieties ?? []

  if (varieties.length === 0) {
    return null
  }

  return (
    <section aria-labelledby={headingId} className="space-y-8 pb-12 md:space-y-10 md:pb-16">
      <h2 className="sr-only" id={headingId}>
        {t("products.mandarin.intro.title")}
      </h2>

      {/* Alternating Varieties List */}
      <div className="space-y-8 md:space-y-10">
        {varieties.map((item, index) => {
          // Even index (0, 2, 4...): Text on left, Image on right
          // Odd index (1, 3, 5...): Image on left, Text on right
          const isEven = index % 2 === 0
          const title = item.name.startsWith("products.") ? t(item.name) : item.name
          const description = item.description.startsWith("products.")
            ? t(item.description)
            : item.description
          const tag = item.tag ? (item.tag.startsWith("products.") ? t(item.tag) : item.tag) : null
          const imageAlt = item.imageAlt
            ? item.imageAlt.startsWith("products.")
              ? t(item.imageAlt)
              : item.imageAlt
            : title

          return (
            <article
              className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_24px_rgb(0_104_148_/_4%)] transition-all duration-300 hover:border-[#006894]/20 hover:shadow-[0_8px_30px_rgb(0_104_148_/_8%)] sm:p-10"
              key={item.id}
            >
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                {/* Text Column */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  {tag && (
                    <span className="inline-block rounded-full bg-[#F58220]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#F58220]">
                      {tag}
                    </span>
                  )}

                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[#64748b] sm:text-base">
                    {description}
                  </p>
                </div>

                {/* Image Column */}
                <div
                  className={`flex justify-center lg:col-span-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative flex h-64 w-full max-w-md items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-md sm:h-72">
                    <Image
                      alt={imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      height={400}
                      sizes="(max-width: 1024px) 100vw, 480px"
                      src={item.image}
                      width={600}
                    />
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
