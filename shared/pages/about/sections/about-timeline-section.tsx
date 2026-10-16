import { useId } from "react"
import { FaBuilding, FaCalendarCheck, FaEarthAmericas, FaRoute, FaTruckFast } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import type { Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

const milestoneIcons = [FaCalendarCheck, FaRoute, FaTruckFast, FaEarthAmericas, FaBuilding]

export function AboutTimelineSection({ locale: _locale, t }: { locale: Locale; t: Translate }) {
  const headingId = useId()

  const milestones = [
    {
      year: t("about.timeline.milestones.0.year"),
      title: t("about.timeline.milestones.0.title"),
      description: t("about.timeline.milestones.0.description"),
      icon: milestoneIcons[0],
    },
    {
      year: t("about.timeline.milestones.1.year"),
      title: t("about.timeline.milestones.1.title"),
      description: t("about.timeline.milestones.1.description"),
      icon: milestoneIcons[1],
    },
    {
      year: t("about.timeline.milestones.2.year"),
      title: t("about.timeline.milestones.2.title"),
      description: t("about.timeline.milestones.2.description"),
      icon: milestoneIcons[2],
    },
    {
      year: t("about.timeline.milestones.3.year"),
      title: t("about.timeline.milestones.3.title"),
      description: t("about.timeline.milestones.3.description"),
      icon: milestoneIcons[3],
    },
    {
      year: t("about.timeline.milestones.4.year"),
      title: t("about.timeline.milestones.4.title"),
      description: t("about.timeline.milestones.4.description"),
      icon: milestoneIcons[4],
    },
  ]

  return (
    <section
      aria-labelledby={headingId}
      className="border-y border-[#e2e8f0] bg-slate-50/60 py-16 md:py-24"
    >
      <div className="grid-wrapper">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#c2410c]">
            {t("about.timeline.badge")}
          </span>
          <h2
            className="mt-2 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl"
            id={headingId}
          >
            {t("about.timeline.title")}
          </h2>
          <p className="mt-3 text-sm text-[#64748b] sm:text-base">{t("about.timeline.subtitle")}</p>
        </div>

        {/* Desktop / Tablet Timeline Grid */}
        <div className="relative mt-16">
          {/* Connecting line on desktop */}
          <div
            aria-hidden="true"
            className="absolute top-7 left-12 right-12 hidden h-0.5 bg-gradient-to-r from-[#006894] via-[#F58220] to-[#006894] lg:block"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {milestones.map((milestone, idx) => {
              const IconComp = milestone.icon
              return (
                <div
                  className="group relative flex flex-col rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#006894]/40 hover:shadow-lg sm:p-6"
                  key={milestone.year}
                >
                  {/* Top Icon Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex rounded-full bg-[#F58220]/10 px-3 py-1 text-xs font-black tracking-wide text-[#F58220]">
                      {milestone.year}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#006894]/10 text-[#006894] transition-colors group-hover:bg-[#006894] group-hover:text-white">
                      <IconComp aria-hidden="true" className="text-sm" />
                    </div>
                  </div>

                  {/* Step sequence label */}
                  <div className="mt-4 text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">
                    0{idx + 1}
                  </div>

                  {/* Content */}
                  <h3 className="mt-1 text-base font-bold text-[#0f172a] group-hover:text-[#006894]">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#64748b] sm:text-sm">
                    {milestone.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
