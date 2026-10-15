import { useId } from "react"
import type { getTranslator } from "@/i18n/i18n"
import type { Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function MissionPrinciplesSection({ locale: _locale, t }: { locale: Locale; t: Translate }) {
  const principlesHeadingId = useId()

  const principles = [
    {
      index: t("mission.principles.0.index"),
      title: t("mission.principles.0.title"),
      description: t("mission.principles.0.description"),
    },
    {
      index: t("mission.principles.1.index"),
      title: t("mission.principles.1.title"),
      description: t("mission.principles.1.description"),
    },
    {
      index: t("mission.principles.2.index"),
      title: t("mission.principles.2.title"),
      description: t("mission.principles.2.description"),
    },
    {
      index: t("mission.principles.3.index"),
      title: t("mission.principles.3.title"),
      description: t("mission.principles.3.description"),
    },
    {
      index: t("mission.principles.4.index"),
      title: t("mission.principles.4.title"),
      description: t("mission.principles.4.description"),
    },
    {
      index: t("mission.principles.5.index"),
      title: t("mission.principles.5.title"),
      description: t("mission.principles.5.description"),
    },
  ]

  return (
    <section aria-labelledby={principlesHeadingId} className="pt-6 pb-12 md:pt-8 md:pb-20">
      <div className="max-w-2xl">
        <h2
          className="text-xl font-bold tracking-tight text-[#0f172a] sm:text-2xl"
          id={principlesHeadingId}
        >
          {t("mission.principlesTitle")}
        </h2>
        <p className="mt-2 text-sm text-[#64748b] sm:text-base">
          {t("mission.principlesSubtitle")}
        </p>
      </div>

      <div className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2 md:mt-10">
        {principles.map((item) => (
          <div className="flex gap-4 border-t border-slate-200/80 pt-5" key={item.index}>
            <span className="shrink-0 font-mono text-sm font-black tracking-wider text-[#F58220]">
              {item.index}
            </span>
            <div>
              <h3 className="text-base font-bold text-[#0f172a] sm:text-lg">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#64748b]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Minimal Corporate Footer Signoff */}
      <footer className="mt-16 flex flex-col gap-2 border-t border-slate-200/80 pt-8 text-xs text-[#94a3b8] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
        <span className="font-semibold text-[#006894]">{t("mission.signature")}</span>
        <span>{t("mission.signatureSub")}</span>
      </footer>
    </section>
  )
}
