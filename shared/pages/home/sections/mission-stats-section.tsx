import { useId } from "react"
import { FaAward, FaCircleCheck, FaQuoteLeft, FaShip, FaUsers } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import type { Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function MissionStatsSection({ t }: { locale: Locale; t: Translate }) {
  const headingId = useId()
  const stats = [
    {
      value: t("home.missionStats.statSatisfaction"),
      label: t("home.missionStats.statSatisfactionLabel"),
      sub: t("home.missionStats.statSatisfactionSub"),
      icon: FaUsers,
      color: "text-[#F58220]",
    },
    {
      value: t("home.missionStats.statExperience"),
      label: t("home.missionStats.statExperienceLabel"),
      sub: t("home.missionStats.statExperienceSub"),
      icon: FaAward,
      color: "text-amber-400",
    },
    {
      value: t("home.missionStats.statShipment"),
      label: t("home.missionStats.statShipmentLabel"),
      sub: t("home.missionStats.statShipmentSub"),
      icon: FaShip,
      color: "text-sky-400",
    },
    {
      value: t("home.missionStats.statDelivery"),
      label: t("home.missionStats.statDeliveryLabel"),
      sub: t("home.missionStats.statDeliverySub"),
      icon: FaCircleCheck,
      color: "text-emerald-400",
    },
  ]

  return (
    <section
      aria-labelledby={headingId}
      className="relative overflow-hidden bg-gradient-to-br from-[#002f43] via-[#00425e] to-[#005073] py-16 text-white md:py-24"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F58220]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#006894]/30 blur-3xl" />

      <div className="grid-wrapper relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#F58220]">
            {t("home.missionStats.badge")}
          </span>
          <h2
            className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
            id={headingId}
          >
            {t("home.missionStats.title")}
          </h2>
        </div>

        {/* Mission statement quote block */}
        <div className="reveal mx-auto mt-10 max-w-4xl rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F58220]/20 text-[#F58220]">
              <FaQuoteLeft aria-hidden="true" className="text-xl" />
            </div>
            <p className="text-base font-medium leading-relaxed text-white/90 sm:text-lg">
              &ldquo;{t("home.missionStats.missionQuote")}&rdquo;
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const delayClass =
              index === 1
                ? "reveal-delay-1"
                : index === 2
                  ? "reveal-delay-2"
                  : index === 3
                    ? "reveal-delay-3"
                    : ""
            return (
              <div
                className={`reveal ${delayClass} group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs transition-all duration-300 hover:border-[#F58220]/40 hover:bg-white/10`}
                key={stat.label}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${stat.color}`}
                  >
                    {stat.value}
                  </span>
                  <div className="flex max-md:hidden h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/80 transition-transform group-hover:scale-110">
                    <Icon aria-hidden="true" className="text-lg" />
                  </div>
                </div>
                <h3 className="mt-3 text-sm font-bold text-white sm:text-base">{stat.label}</h3>
                <p className="mt-1 text-xs text-white/60">{stat.sub}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
