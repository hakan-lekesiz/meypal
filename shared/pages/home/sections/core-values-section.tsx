import { useId } from "react"
import { FaBoxesStacked, FaLeaf, FaTruckFast } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import type { Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function CoreValuesSection({ t }: { locale: Locale; t: Translate }) {
  const headingId = useId()
  const items = [
    {
      icon: FaLeaf,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
      tag: t("home.coreValues.item1.tag"),
      title: t("home.coreValues.item1.title"),
      description: t("home.coreValues.item1.description"),
      borderColor: "hover:border-emerald-500/30",
    },
    {
      icon: FaTruckFast,
      iconBg: "bg-[#006894]/10",
      iconColor: "text-[#006894]",
      tag: t("home.coreValues.item2.tag"),
      title: t("home.coreValues.item2.title"),
      description: t("home.coreValues.item2.description"),
      borderColor: "hover:border-[#006894]/30",
    },
    {
      icon: FaBoxesStacked,
      iconBg: "bg-[#F58220]/10",
      iconColor: "text-[#F58220]",
      tag: t("home.coreValues.item3.tag"),
      title: t("home.coreValues.item3.title"),
      description: t("home.coreValues.item3.description"),
      borderColor: "hover:border-[#F58220]/30",
    },
  ]

  return (
    <section aria-labelledby={headingId} className="relative -mt-6 z-10 py-12 md:py-16">
      <div className="grid-wrapper">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#F58220]">
            {t("home.coreValues.badge")}
          </span>
          <h2
            className="mt-2 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl"
            id={headingId}
          >
            {t("home.coreValues.title")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#64748b] sm:text-base">
            {t("home.coreValues.subtitle")}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon
            const delayClass = index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""
            return (
              <div
                className={`reveal ${delayClass} group relative rounded-2xl border border-[#e2e8f0] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.borderColor}`}
                key={item.title}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-13 w-13 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon aria-hidden="true" className="text-2xl" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-[#475569]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#0f172a] transition-colors group-hover:text-[#006894]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#64748b]">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
