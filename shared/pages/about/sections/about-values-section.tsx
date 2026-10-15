import { useId } from "react"
import { FaChartLine, FaFlag, FaLightbulb, FaTruckFast } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import type { Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

const valueIcons = [
  { icon: FaFlag, color: "text-[#F58220] bg-[#F58220]/10" },
  { icon: FaChartLine, color: "text-emerald-600 bg-emerald-500/10" },
  { icon: FaLightbulb, color: "text-[#006894] bg-[#006894]/10" },
  { icon: FaTruckFast, color: "text-amber-600 bg-amber-500/10" },
]

export function AboutValuesSection({ locale: _locale, t }: { locale: Locale; t: Translate }) {
  const headingId = useId()

  const values = [
    {
      title: t("about.values.items.0.title"),
      description: t("about.values.items.0.description"),
      ...valueIcons[0],
    },
    {
      title: t("about.values.items.1.title"),
      description: t("about.values.items.1.description"),
      ...valueIcons[1],
    },
    {
      title: t("about.values.items.2.title"),
      description: t("about.values.items.2.description"),
      ...valueIcons[2],
    },
    {
      title: t("about.values.items.3.title"),
      description: t("about.values.items.3.description"),
      ...valueIcons[3],
    },
  ]

  return (
    <section
      aria-labelledby={headingId}
      className="border-t border-[#e2e8f0] bg-slate-50/60 py-16 md:py-24"
    >
      <div className="grid-wrapper">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#F58220]">
            {t("about.values.badge")}
          </span>
          <h2
            className="mt-2 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl"
            id={headingId}
          >
            {t("about.values.title")}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#64748b] sm:text-base">
            {t("about.values.description")}
          </p>
        </div>

        {/* 4 Cards in 2x2 Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {values.map((item) => {
            const IconComp = item.icon
            return (
              <div
                className="group relative flex flex-col justify-between rounded-3xl border border-[#e2e8f0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#006894]/30 hover:shadow-lg sm:p-8"
                key={item.title}
              >
                <div>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <IconComp aria-hidden="true" className="text-xl" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#0f172a] transition-colors group-hover:text-[#006894] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
