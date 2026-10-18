import { useId } from "react"
import Image from "next/image"
import { FaQuoteLeft } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import type { Locale } from "@/shared/config"
import type { ProductDetail } from "@/shared/models"

type Translate = Awaited<ReturnType<typeof getTranslator>>

interface PdpAboutSectionProps {
  locale: Locale
  product: ProductDetail
  t: Translate
}

export function PdpAboutSection({ product, t }: PdpAboutSectionProps) {
  const headingId = useId()
  const p1Key = `products.${product.id}.aboutParagraph1`
  const p2Key = `products.${product.id}.aboutParagraph2`
  const p3Key = `products.${product.id}.aboutParagraph3`
  const quoteKey = `products.${product.id}.quote`

  // Default gallery fallback if needed
  const primaryImage = product.gallery?.[0]?.src || product.image
  const secondaryImage = product.gallery?.[1]?.src || product.image
  const primaryAltKey = product.gallery?.[0]?.altKey || product.titleKey
  const secondaryAltKey = product.gallery?.[1]?.altKey || product.titleKey

  return (
    <section aria-labelledby={headingId} className="pb-12 md:pb-16">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Rich editorial text */}
        <div className="lg:col-span-7">
          <h1
            className="mt-3 text-2xl font-black tracking-tight text-[#0f172a] sm:text-3xl lg:text-4xl"
            id={headingId}
          >
            {t(product.titleKey)}
          </h1>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#475569] sm:text-base">
            <p>{t(p1Key)}</p>
            <p>{t(p2Key)}</p>
            <p>{t(p3Key)}</p>
          </div>

          {/* Inspirational / Sensory Quote Box */}
          <div className="relative mt-8 overflow-hidden rounded-2xl border-l-4 border-[#F58220] bg-gradient-to-r from-[#fff4ec] to-[#feecd9]/40 p-5 sm:p-6">
            <FaQuoteLeft
              aria-hidden="true"
              className="absolute right-4 bottom-2 text-4xl text-[#F58220]/15"
            />
            <p className="relative z-10 text-sm font-semibold italic text-[#1e293b] sm:text-base">
              "{t(quoteKey)}"
            </p>
          </div>
        </div>

        {/* Right Column: Visual Composition with 2 images and clean shadow cards */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-[480px]">
            {/* Primary Featured Image Card */}
            <div className="relative overflow-hidden rounded-3xl border border-[#e2e8f0] bg-white shadow-xl">
              <Image
                alt={t(primaryAltKey)}
                className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[380px]"
                height={600}
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                src={primaryImage}
                width={800}
              />
            </div>

            {/* Overlapping Secondary Card */}
            <div className="absolute -bottom-8 -left-4 w-3/5 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl sm:-bottom-10 sm:-left-6">
              <Image
                alt={t(secondaryAltKey)}
                className="h-[140px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[180px]"
                height={400}
                sizes="(max-width: 640px) 160px, 260px"
                src={secondaryImage}
                width={500}
              />
            </div>

            {/* Subtle Brand Accent Card */}
            <div className="absolute -right-3 -top-3 rounded-2xl bg-[#006894] px-4 py-2.5 text-white shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
                {t("products.common.freshBadge")}
              </span>
              <p className="text-xs font-semibold text-white/90">
                {t("products.common.qualityBadge")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
