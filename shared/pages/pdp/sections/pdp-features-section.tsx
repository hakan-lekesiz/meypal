import { useId } from "react"
import { FaBoxOpen, FaHeartPulse, FaSun, FaWineGlass } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import type { ProductDetail } from "@/shared/models"

type Translate = Awaited<ReturnType<typeof getTranslator>>

interface PdpFeaturesSectionProps {
  product: ProductDetail
  t: Translate
}

const iconMap: Record<string, typeof FaHeartPulse> = {
  FaHeartPulse,
  FaSun,
  FaWineGlass,
  FaBoxOpen,
}

export function PdpFeaturesSection({ product, t }: PdpFeaturesSectionProps) {
  const headingId = useId()

  if (!product.features || product.features.length === 0) {
    return null
  }

  return (
    <section aria-labelledby={headingId} className="pt-16 pb-12">
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
          {t("products.common.featuresTitle")}
        </span>
        <h2
          className="mt-2 text-2xl font-black tracking-tight text-[#0f172a] sm:text-3xl"
          id={headingId}
        >
          {t("products.common.featuresHeading", { name: t(product.titleKey) })}
        </h2>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {product.features.map((item, index) => {
          const IconComponent = iconMap[item.icon] || FaHeartPulse
          return (
            <div
              className="group relative flex flex-col justify-between rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#006894]/30 hover:shadow-xl"
              key={item.titleKey || index}
            >
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff4ec] text-[#F58220] transition-colors duration-300 group-hover:bg-[#006894] group-hover:text-white">
                  <IconComponent aria-hidden="true" className="text-xl" />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#0f172a] transition-colors group-hover:text-[#006894]">
                  {t(item.titleKey)}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
                  {t(item.descriptionKey)}
                </p>
              </div>

              <div
                aria-hidden="true"
                className="mt-5 h-1 w-8 rounded-full bg-[#e2e8f0] transition-all duration-300 group-hover:w-16 group-hover:bg-[#F58220]"
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
