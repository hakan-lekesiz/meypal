import Link from "next/link"
import { FaChevronRight, FaQuoteLeft } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import { getSiteLink, type Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function MissionHeroSection({ locale, t }: { locale: Locale; t: Translate }) {
  return (
    <section aria-label={t("mission.title")} className="pb-6 md:pb-8">
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
          href={getSiteLink("about", locale)}
        >
          {t("mission.breadcrumb")}
        </Link>
        <FaChevronRight aria-hidden="true" className="text-[10px] text-slate-400" />
        <span aria-current="page" className="font-semibold text-[#0f172a]">
          {t("mission.title")}
        </span>
      </nav>

      {/* Header Section */}
      <header className="mb-10">
        <span className="inline-block rounded-full bg-[#006894]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#006894]">
          {t("mission.badge")}
        </span>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
          {t("mission.title")}
        </h1>
        <div
          aria-hidden="true"
          className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#F58220] to-[#006894]"
        />
      </header>

      {/* Main Mission Manifesto Card */}
      <div className="relative rounded-3xl border border-slate-200/90 bg-white p-8 shadow-[0_12px_36px_rgb(0_104_148_/_4%)] sm:p-12 md:p-14">
        {/* Quote Icon */}
        <div
          aria-hidden="true"
          className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F58220]/10 text-[#F58220]"
        >
          <FaQuoteLeft className="text-xl" />
        </div>

        {/* Statement */}
        <blockquote className="text-xl font-medium leading-relaxed text-[#1e293b] sm:text-2xl sm:leading-relaxed md:text-[1.75rem] md:leading-relaxed">
          &ldquo;{t("mission.statement")}&rdquo;
        </blockquote>

        {/* Subtext */}
        <p className="mt-8 border-t border-slate-100 pt-6 text-base leading-relaxed text-[#64748b] sm:text-lg">
          {t("mission.subtext")}
        </p>
      </div>
    </section>
  )
}
