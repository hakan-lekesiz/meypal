import { useId } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaCircleCheck, FaFilePdf } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import { getSiteLink, type Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function OperationCtaSection({ locale, t }: { locale: Locale; t: Translate }) {
  const headingId = useId()
  const features = [
    t("home.operationCta.feature1"),
    t("home.operationCta.feature2"),
    t("home.operationCta.feature3"),
    t("home.operationCta.feature4"),
  ]

  return (
    <section aria-labelledby="operation-cta-heading" className="py-16 md:py-24">
      <div className="grid-wrapper">
        <div className="relative overflow-hidden rounded-3xl border border-[#006894]/20 bg-gradient-to-r from-[#002f43] via-[#004e70] to-[#006894] p-8 text-white shadow-2xl sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#F58220]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          {/* Background image overlay with blend */}
          <div className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay">
            <Image
              alt=""
              className="h-full w-full object-cover"
              height={1000}
              src="/images/fruits/fresh-fruit-basket.jpg"
              width={1600}
            />
          </div>

          <div className="relative z-10 max-w-3xl">
            <span className="inline-block rounded-full bg-[#F58220]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#F58220]">
              {t("home.operationCta.badge")}
            </span>

            <h2
              className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl"
              id={headingId}
            >
              {t("home.operationCta.title")}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
              {t("home.operationCta.description")}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  className="flex items-center gap-2.5 text-sm font-semibold text-white/90"
                  key={feature}
                >
                  <FaCircleCheck aria-hidden="true" className="shrink-0 text-[#F58220]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                className="inline-flex items-center gap-2.5 rounded-full bg-[#F58220] px-7 py-3.5 text-sm font-bold text-white shadow-[0_4px_16px_rgb(245_130_32_/_35%)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#dc6e11]"
                href={getSiteLink("contact", locale)}
              >
                <span>{t("home.operationCta.ctaContact")}</span>
                <FaArrowRight aria-hidden="true" className="text-xs" />
              </Link>

              <Link
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-xs transition-all duration-200 hover:bg-white hover:text-[#006894]"
                href={getSiteLink("catalog", locale)}
              >
                <FaFilePdf aria-hidden="true" className="text-sm" />
                <span>{t("home.operationCta.ctaCatalog")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
