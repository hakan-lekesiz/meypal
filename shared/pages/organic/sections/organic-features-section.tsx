import { useId } from "react"
import { FaCheck, FaHandshake, FaShieldHalved } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import type { Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function OrganicFeaturesSection({ locale: _locale, t }: { locale: Locale; t: Translate }) {
  const featuresHeadingId = useId()

  return (
    <section aria-labelledby={featuresHeadingId} className="py-8 md:py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Card 1: Belirli Özellikler */}
        <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_24px_rgb(0_104_148_/_4%)] sm:p-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#006894]/10 text-[#006894]">
                <FaShieldHalved className="text-lg" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#006894]">
                  {t("organic.features.tag")}
                </span>
                <h3
                  id={featuresHeadingId}
                  className="text-xl font-bold tracking-tight text-[#0f172a] sm:text-2xl"
                >
                  {t("organic.features.title")}
                </h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#64748b] sm:text-base">
              {t("organic.features.intro")}
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F58220] text-white">
                    <FaCheck className="text-[10px]" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0f172a]">
                      {t("organic.features.items.0.title")}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#64748b] sm:text-sm">
                      {t("organic.features.items.0.description")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F58220] text-white">
                    <FaCheck className="text-[10px]" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0f172a]">
                      {t("organic.features.items.1.title")}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#64748b] sm:text-sm">
                      {t("organic.features.items.1.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: İş Ortaklarımız & Beraber Çalışma */}
        <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_24px_rgb(0_104_148_/_4%)] sm:p-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F58220]/10 text-[#F58220]">
                <FaHandshake className="text-lg" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
                  {t("organic.partnership.tag")}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#0f172a] sm:text-2xl">
                  {t("organic.partnership.title")}
                </h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#64748b] sm:text-base">
              {t("organic.partnership.description")}
            </p>

            <div className="mt-6 rounded-2xl border border-[#feecd9] bg-[#fff4ec]/60 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#dc6e11]">
                {t("organic.partnership.futureTitle")}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#1e293b]">
                {t("organic.partnership.futureGoal")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
