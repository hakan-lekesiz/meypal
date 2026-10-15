import Link from "next/link"
import { FaChevronRight } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import { getSiteLink, type Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function ReadyToEatHeroSection({ locale, t }: { locale: Locale; t: Translate }) {
  return (
    <header className="pb-8 md:pb-12">
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
          {t("readyToEat.breadcrumb")}
        </Link>
        <FaChevronRight aria-hidden="true" className="text-[10px] text-slate-400" />
        <span aria-current="page" className="font-semibold text-[#0f172a]">
          {t("readyToEat.title")}
        </span>
      </nav>

      {/* Title & Badge */}
      <div>
        <span className="inline-block rounded-full bg-[#006894]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#006894]">
          {t("readyToEat.badge")}
        </span>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
          {t("readyToEat.title")}
        </h1>
        <div
          aria-hidden="true"
          className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#F58220] to-[#006894]"
        />
        <p className="mt-4 max-w-3xl text-base text-[#64748b] sm:text-lg">
          {t("readyToEat.subtitle")}
        </p>
      </div>

      {/* Intro Highlight Box */}
      <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgb(0_104_148_/_4%)] sm:p-8">
        <p className="text-base font-medium leading-relaxed text-[#1e293b] sm:text-lg">
          {t("readyToEat.intro")}
        </p>
      </div>
    </header>
  )
}
