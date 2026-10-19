import Link from "next/link"
import {
  FaArrowUpRightFromSquare,
  FaChevronRight,
  FaEnvelope,
  FaLocationDot,
  FaMobileScreenButton,
  FaPhone,
} from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import { contactConfig, getSiteLink, type Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function ContactInfoSection({
  locale,
  t,
  showNav,
}: {
  locale: Locale
  t: Translate
  showNav: boolean
}) {
  return (
    <div className="mx-auto max-w-5xl">
      {/* Breadcrumb Navigation */}
      {showNav && (
        <nav
          aria-label="Breadcrumb"
          className="mb-8 inline-flex items-center gap-2 text-xs text-[#64748b]"
        >
          <Link
            className="transition-colors hover:text-[#006894]"
            href={getSiteLink("home", locale)}
          >
            {t("navigation.home")}
          </Link>
          <FaChevronRight aria-hidden="true" className="text-[10px] text-slate-400" />
          <span aria-current="page" className="font-semibold text-[#0f172a]">
            {t("contact.badge")}
          </span>
        </nav>
      )}

      {/* Header */}
      <header className="mb-10">
        <span className="inline-block rounded-full bg-[#006894]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#006894]">
          {t("contact.badge")}
        </span>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
          {t("contact.title")}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64748b] sm:text-lg">
          {t("contact.subtitle")}
        </p>
        <div
          aria-hidden="true"
          className="mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-[#F58220] to-[#006894]"
        />
      </header>

      {/* Contact Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1: Merkez Ofis */}
        <section
          aria-label={t("contact.hq.tag")}
          className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7 md:col-span-2 lg:col-span-1"
        >
          <div>
            <h2 className="flex min-h-[5.5rem] items-center text-sm font-bold uppercase tracking-wide text-[#0f172a] leading-snug">
              {t("contact.hq.company")}
            </h2>

            <div className="mt-6 space-y-4 text-sm text-[#334155]">
              <div className="flex items-start gap-3">
                <FaLocationDot
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#F58220] text-sm"
                />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#64748b]">
                    {t("contact.labels.address")}
                  </span>
                  <a
                    className="group mt-0.5 flex min-h-[4rem] items-start gap-1.5 leading-relaxed text-[#1e293b] transition-colors hover:text-[#006894]"
                    href={contactConfig.maps.mersinHq}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>{t("contact.hq.address")}</span>
                    <FaArrowUpRightFromSquare
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-[11px] text-slate-400 transition-colors group-hover:text-[#006894]"
                    />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaPhone aria-hidden="true" className="mt-1 shrink-0 text-[#006894] text-sm" />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#64748b]">
                    {t("contact.labels.phone")}
                  </span>
                  <a
                    className="mt-0.5 inline-block font-semibold text-[#006894] hover:underline"
                    href="tel:+903242380438"
                  >
                    +90 324 238 04 38
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope aria-hidden="true" className="mt-1 shrink-0 text-[#006894] text-sm" />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#64748b]">
                    {t("contact.labels.email")}
                  </span>
                  <a
                    className="mt-0.5 inline-block font-semibold text-[#006894] hover:underline"
                    href="mailto:info@meypal.com.tr"
                  >
                    info@meypal.com.tr
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-100 pt-5">
            <a
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#006894] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#005073]"
              href="tel:+903242380438"
            >
              {t("contact.labels.callNow")}
            </a>
          </div>
        </section>

        {/* Card 2: İngiltere Ofisi */}
        <section
          aria-label={t("contact.uk.tag")}
          className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7"
        >
          <div>
            <h2 className="flex min-h-[5.5rem] items-center text-lg font-bold text-[#0f172a]">
              {t("contact.uk.title")}
            </h2>

            <div className="mt-6 space-y-4 text-sm text-[#334155]">
              <div className="flex items-start gap-3">
                <FaLocationDot
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#F58220] text-sm"
                />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#64748b]">
                    {t("contact.labels.address")}
                  </span>
                  <a
                    className="group mt-0.5 flex min-h-[4rem] items-start gap-1.5 leading-relaxed text-[#1e293b] transition-colors hover:text-[#006894]"
                    href={contactConfig.maps.londonUk}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>{t("contact.uk.address")}</span>
                    <FaArrowUpRightFromSquare
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-[11px] text-slate-400 transition-colors group-hover:text-[#006894]"
                    />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaMobileScreenButton
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#006894] text-sm"
                />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#64748b]">
                    {t("contact.labels.mobile")}
                  </span>
                  <a
                    className="mt-0.5 inline-block font-semibold text-[#006894] hover:underline"
                    href="tel:+447828785301"
                  >
                    +44 782 878 53 01
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope aria-hidden="true" className="mt-1 shrink-0 text-[#006894] text-sm" />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#64748b]">
                    {t("contact.labels.email")}
                  </span>
                  <a
                    className="mt-0.5 inline-block font-semibold text-[#006894] hover:underline"
                    href="mailto:sazimet@meypal.co.uk"
                  >
                    sazimet@meypal.co.uk
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-100 pt-5">
            <a
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#F58220] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#dc6e11]"
              href="tel:+447828785301"
            >
              {t("contact.labels.callNow")}
            </a>
          </div>
        </section>

        {/* Card 3: Antalya Şubesi */}
        <section
          aria-label={t("contact.branch.tag")}
          className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7"
        >
          <div>
            <h2 className="flex min-h-[5.5rem] items-center text-base font-bold text-[#0f172a] leading-snug">
              {t("contact.branch.title")}
            </h2>

            <div className="mt-6 space-y-4 text-sm text-[#334155]">
              <div className="flex items-start gap-3">
                <FaLocationDot
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#F58220] text-sm"
                />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#64748b]">
                    {t("contact.labels.address")}
                  </span>
                  <a
                    className="group mt-0.5 flex min-h-[4rem] items-start gap-1.5 leading-relaxed text-[#1e293b] transition-colors hover:text-[#006894]"
                    href={contactConfig.maps.antalyaBranch}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>{t("contact.branch.address")}</span>
                    <FaArrowUpRightFromSquare
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-[11px] text-slate-400 transition-colors group-hover:text-[#006894]"
                    />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaPhone aria-hidden="true" className="mt-1 shrink-0 text-[#006894] text-sm" />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#64748b]">
                    {t("contact.labels.phone")}
                  </span>
                  <a
                    className="mt-0.5 inline-block font-semibold text-[#006894] hover:underline"
                    href="tel:+905425483838"
                  >
                    0542 548 38 38
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope aria-hidden="true" className="mt-1 shrink-0 text-[#006894] text-sm" />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#64748b]">
                    {t("contact.labels.email")}
                  </span>
                  <a
                    className="mt-0.5 inline-block font-semibold text-[#006894] hover:underline"
                    href="mailto:info@meypal.com.tr"
                  >
                    info@meypal.com.tr
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-100 pt-5">
            <a
              className="inline-flex w-full items-center justify-center rounded-xl border border-[#006894] px-4 py-2.5 text-xs font-bold text-[#006894] transition-colors hover:bg-[#006894]/10"
              href="tel:+905425483838"
            >
              {t("contact.labels.callNow")}
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
