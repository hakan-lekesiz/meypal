import Link from "next/link"
import { FaCertificate, FaChevronRight, FaLeaf, FaSeedling } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import { getSiteLink, type Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function OrganicHeroSection({ locale, t }: { locale: Locale; t: Translate }) {
  return (
    <header className="pb-10 md:pb-14">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="mb-8 inline-flex items-center gap-2 text-xs text-[#64748b]"
      >
        <Link className="transition-colors hover:text-[#006894]" href={getSiteLink("home", locale)}>
          {t("navigation.home")}
        </Link>
        <FaChevronRight aria-hidden="true" className="text-[10px] text-slate-400" />
        <Link
          className="transition-colors hover:text-[#006894]"
          href={getSiteLink("productLines", locale)}
        >
          {t("organic.breadcrumb")}
        </Link>
        <FaChevronRight aria-hidden="true" className="text-[10px] text-slate-400" />
        <span aria-current="page" className="font-semibold text-[#0f172a]">
          {t("organic.title")}
        </span>
      </nav>

      {/* Title & Badge */}
      <div>
        <span className="inline-block rounded-full bg-[#006894]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#006894]">
          {t("organic.badge")}
        </span>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
          {t("organic.title")}
        </h1>
        <div
          aria-hidden="true"
          className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#F58220] to-[#006894]"
        />
        <p className="mt-4 max-w-3xl text-base text-[#64748b] sm:text-lg">
          {t("organic.subtitle")}
        </p>
      </div>

      {/* Intro Highlight Box */}
      <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgb(0_104_148_/_4%)] sm:p-8">
        <p className="text-base font-medium leading-relaxed text-[#1e293b] sm:text-lg">
          {t("organic.intro")}
        </p>
      </div>

      {/* 3 Trust Metric Cards */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-[0_2px_12px_rgb(0_104_148_/_3%)]">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#006894]/10 text-[#006894]">
            <FaSeedling className="text-lg" />
          </div>
          <div>
            <div className="text-base font-bold text-[#0f172a] sm:text-lg">
              {t("organic.stats.exp.value")}
            </div>
            <div className="text-xs text-[#64748b]">{t("organic.stats.exp.label")}</div>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-[0_2px_12px_rgb(0_104_148_/_3%)]">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F58220]/10 text-[#F58220]">
            <FaCertificate className="text-lg" />
          </div>
          <div>
            <div className="text-base font-bold text-[#0f172a] sm:text-lg">
              {t("organic.stats.cert.value")}
            </div>
            <div className="text-xs text-[#64748b]">{t("organic.stats.cert.label")}</div>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-[0_2px_12px_rgb(0_104_148_/_3%)]">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <FaLeaf className="text-lg" />
          </div>
          <div>
            <div className="text-base font-bold text-[#0f172a] sm:text-lg">
              {t("organic.stats.clean.value")}
            </div>
            <div className="text-xs text-[#64748b]">{t("organic.stats.clean.label")}</div>
          </div>
        </div>
      </div>
    </header>
  )
}
