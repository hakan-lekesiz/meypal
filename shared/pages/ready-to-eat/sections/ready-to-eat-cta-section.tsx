import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import { getSiteLink, type Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function ReadyToEatCtaSection({ locale, t }: { locale: Locale; t: Translate }) {
  return (
    <aside className="mt-12 md:mt-16">
      <div className="relative overflow-hidden rounded-3xl border border-[#006894]/20 bg-gradient-to-r from-[#002f43] via-[#004e70] to-[#006894] p-8 text-white shadow-xl sm:p-10 lg:p-12">
        {/* Subtle Ambient Orbs */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#F58220]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {t("readyToEat.contactCta.title")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
              {t("readyToEat.contactCta.description")}
            </p>
          </div>

          <Link
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F58220] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#F58220]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#dc6e11]"
            href={getSiteLink("contact", locale)}
          >
            <span>{t("readyToEat.contactCta.button")}</span>
            <FaArrowRight aria-hidden="true" className="text-xs" />
          </Link>
        </div>
      </div>
    </aside>
  )
}
