import { useId } from "react"
import { FaLeaf, FaSnowflake } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import type { Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

const VARIETY_COUNT = 15

export function OrganicVarietiesSection({ locale: _locale, t }: { locale: Locale; t: Translate }) {
  const varietiesHeadingId = useId()

  const varieties = Array.from({ length: VARIETY_COUNT }, (_, i) =>
    t(`organic.varieties.items.${i}`),
  )

  return (
    <section aria-labelledby={varietiesHeadingId} className="py-8 md:py-12">
      <div className="max-w-3xl">
        <span className="inline-block rounded-full bg-[#006894]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#006894]">
          {t("organic.varieties.tag")}
        </span>
        <h2
          id={varietiesHeadingId}
          className="mt-3 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl"
        >
          {t("organic.varieties.title")}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#64748b]">
          {t("organic.varieties.description")}
        </p>
      </div>

      {/* Varieties Grid */}
      <div className="mt-8 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_24px_rgb(0_104_148_/_4%)] sm:p-8">
        <div className="mb-6 flex flex-col justify-between gap-2 border-b border-slate-100 pb-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-bold text-[#0f172a]">{t("organic.varieties.listTitle")}</h3>
            <p className="text-xs text-[#64748b] sm:text-sm">
              {t("organic.varieties.listSubtitle")}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 sm:self-auto">
            <FaLeaf className="text-[10px]" />
            <span>{t("organic.stats.clean.label")}</span>
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {varieties.map((variety) => (
            <div
              key={variety}
              className="group flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/60 px-3.5 py-3 transition-colors duration-200 hover:border-[#006894]/30 hover:bg-[#006894]/5"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-600 shadow-sm transition-transform duration-200 group-hover:scale-110">
                <FaLeaf className="text-[11px]" />
              </span>
              <span className="truncate text-sm font-semibold text-[#1e293b] group-hover:text-[#006894]">
                {variety}
              </span>
            </div>
          ))}
        </div>

        {/* Natural Preservation & Industry Support Box */}
        <div className="mt-8 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 to-white p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#006894]/10 text-[#006894]">
              <FaSnowflake className="text-base" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0f172a]">
                {t("organic.varieties.preservationTitle")}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
                {t("organic.varieties.preservationNote")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
