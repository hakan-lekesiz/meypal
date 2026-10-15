import { useId } from "react"
import Image from "next/image"
import {
  FaCircleCheck,
  FaGlobe,
  FaLocationDot,
  FaPlane,
  FaShip,
  FaTruckFast,
  FaWarehouse,
} from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import type { Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function AboutGlobalHubsSection({ locale: _locale, t }: { locale: Locale; t: Translate }) {
  const headingId = useId()

  const turkeyCities = ["Mersin", "Antalya", "Denizli", "Manisa", "Bursa"]
  const ukImportRegions = [
    t("about.globalHubs.uk.regions.0"),
    t("about.globalHubs.uk.regions.1"),
    t("about.globalHubs.uk.regions.2"),
    t("about.globalHubs.uk.regions.3"),
    t("about.globalHubs.uk.regions.4"),
  ]

  return (
    <section aria-labelledby={headingId} className="bg-white py-16 md:py-24">
      <div className="grid-wrapper">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#F58220]">
            {t("about.globalHubs.badge")}
          </span>
          <h2
            className="mt-2 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl"
            id={headingId}
          >
            {t("about.globalHubs.title")}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#475569] sm:text-base">
            {t("about.globalHubs.description")}
          </p>
        </div>

        {/* 2 Hub Cards Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Hub 1: Turkey Meypal */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-[#e2e8f0] bg-gradient-to-b from-white to-slate-50/60 p-6 shadow-lg transition-all duration-300 hover:border-[#006894]/40 hover:shadow-xl sm:p-8">
            <div>
              {/* Header with Flag */}
              <div className="flex items-center justify-between gap-4 border-b border-[#e2e8f0] pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-slate-200 shadow-sm sm:h-12 sm:w-12">
                    <Image
                      alt="Türkiye"
                      className="h-full w-full object-cover"
                      height={64}
                      src="/images/flags/turkey.png"
                      width={64}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#0f172a] sm:text-2xl">
                      {t("about.globalHubs.turkey.title")}
                    </h3>
                    <p className="text-xs font-semibold text-[#006894] sm:text-sm">
                      {t("about.globalHubs.turkey.tagline")}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-[#006894]/10 px-3 py-1 text-xs font-bold text-[#006894]">
                  {t("about.globalHubs.turkey.badge")}
                </span>
              </div>

              {/* Main Narrative Paragraph */}
              <p className="mt-5 text-sm leading-relaxed text-[#334155] sm:text-base">
                {t("about.globalHubs.turkey.description")}
              </p>

              {/* Facilities / Cities */}
              <div className="mt-6 rounded-2xl bg-slate-100/70 p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#64748b]">
                  <FaWarehouse aria-hidden="true" className="text-[#006894]" />
                  <span>{t("about.globalHubs.turkey.facilitiesTitle")}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {turkeyCities.map((city) => (
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-[#0f172a] shadow-xs"
                      key={city}
                    >
                      <FaLocationDot aria-hidden="true" className="text-[10px] text-[#F58220]" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Logistics & Standards Bottom Bar */}
            <div className="mt-6 space-y-3 border-t border-[#e2e8f0] pt-5">
              <div className="flex items-start gap-3">
                <div className="flex gap-1.5 pt-0.5 text-sm text-[#006894]">
                  <FaTruckFast aria-hidden="true" title="Kara Yolu" />
                  <FaShip aria-hidden="true" title="Deniz Yolu" />
                  <FaPlane aria-hidden="true" title="Hava Yolu" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0f172a] sm:text-sm">
                    {t("about.globalHubs.turkey.logisticsTitle")}
                  </h4>
                  <p className="text-xs text-[#64748b]">{t("about.globalHubs.turkey.logistics")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaCircleCheck
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-emerald-600 text-sm"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#0f172a] sm:text-sm">
                    {t("about.globalHubs.turkey.standardTitle")}
                  </h4>
                  <p className="text-xs text-[#64748b]">{t("about.globalHubs.turkey.standard")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hub 2: UK Meypal */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-[#e2e8f0] bg-gradient-to-b from-white to-slate-50/60 p-6 shadow-lg transition-all duration-300 hover:border-[#F58220]/40 hover:shadow-xl sm:p-8">
            <div>
              {/* Header with Flag */}
              <div className="flex items-center justify-between gap-4 border-b border-[#e2e8f0] pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-slate-200 shadow-sm sm:h-12 sm:w-12">
                    <Image
                      alt="United Kingdom"
                      className="h-full w-full object-cover"
                      height={64}
                      src="/images/flags/united-kingdom.png"
                      width={64}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#0f172a] sm:text-2xl">
                      {t("about.globalHubs.uk.title")}
                    </h3>
                    <p className="text-xs font-semibold text-[#F58220] sm:text-sm">
                      {t("about.globalHubs.uk.tagline")}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-[#F58220]/10 px-3 py-1 text-xs font-bold text-[#F58220]">
                  {t("about.globalHubs.uk.badge")}
                </span>
              </div>

              {/* Main Narrative Paragraph */}
              <p className="mt-5 text-sm leading-relaxed text-[#334155] sm:text-base">
                {t("about.globalHubs.uk.description")}
              </p>

              {/* London Address Badge */}
              <div className="mt-6 rounded-2xl bg-amber-50/60 border border-amber-100 p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b45309]">
                  <FaLocationDot aria-hidden="true" className="text-[#F58220]" />
                  <span>{t("about.globalHubs.uk.addressTitle")}</span>
                </div>
                <p className="mt-2 text-xs font-bold text-[#1e293b] sm:text-sm">
                  {t("about.globalHubs.uk.address")}
                </p>
              </div>
            </div>

            {/* Sourcing Regions & Coverage Bottom Bar */}
            <div className="mt-6 space-y-3 border-t border-[#e2e8f0] pt-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#64748b]">
                  <FaGlobe aria-hidden="true" className="text-[#006894]" />
                  <span>{t("about.globalHubs.uk.importRegionsTitle")}</span>
                </div>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {ukImportRegions.map((region) => (
                    <span
                      className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-0.5 text-xs font-semibold text-[#0f172a] shadow-xs"
                      key={region}
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <FaCircleCheck
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-emerald-600 text-sm"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#0f172a] sm:text-sm">
                    {t("about.globalHubs.uk.distributionTitle")}
                  </h4>
                  <p className="text-xs text-[#64748b]">{t("about.globalHubs.uk.distribution")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
