import { useId } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaFilePdf } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import { getSiteLink, type Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function AboutCtaSection({ locale, t }: { locale: Locale; t: Translate }) {
  const headingId = useId()

  return (
    <section aria-labelledby={headingId} className="bg-white py-16 md:py-24">
      <div className="grid-wrapper">
        <div className="relative overflow-hidden rounded-3xl border border-[#006894]/20 bg-gradient-to-r from-[#002f43] via-[#004e70] to-[#006894] p-8 text-white shadow-2xl sm:p-12 lg:p-16">
          {/* Subtle Ambient Orbs */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#F58220]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          {/* Background image overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay">
            <Image
              alt={t("about.cta.imageAlt")}
              className="h-full w-full object-cover"
              height={1000}
              src="/images/fruits/fresh-fruit-basket.jpg"
              width={1600}
            />
          </div>

          <div className="relative z-10 max-w-3xl">
            <span className="inline-block rounded-full bg-[#F58220]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#F58220]">
              {t("about.cta.badge")}
            </span>

            <h2
              className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl"
              id={headingId}
            >
              {t("about.cta.title")}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
              {t("about.cta.description")}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-[#F58220] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#F58220]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#dc6e11]"
                href={getSiteLink("contact", locale)}
              >
                <span>{t("about.cta.contactBtn")}</span>
                <FaArrowRight aria-hidden="true" className="text-xs" />
              </Link>

              <Link
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/20"
                href={getSiteLink("catalog", locale)}
              >
                <FaFilePdf aria-hidden="true" className="text-[#F58220]" />
                <span>{t("about.cta.catalogBtn")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
