import { useId } from "react"
import { FaCertificate, FaFlask, FaShieldHalved } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import type { Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function OrganicDedicationSection({ locale: _locale, t }: { locale: Locale; t: Translate }) {
  const dedicationHeadingId = useId()

  const icons = [
    <FaFlask key="flask" className="text-xl text-[#006894]" />,
    <FaShieldHalved key="shield" className="text-xl text-[#F58220]" />,
    <FaCertificate key="cert" className="text-xl text-emerald-600" />,
  ]

  const items = [
    {
      id: "demo-fields",
      title: t("organic.dedication.items.0.title"),
      description: t("organic.dedication.items.0.description"),
      icon: icons[0],
      bg: "bg-[#006894]/10",
    },
    {
      id: "disease-resistance",
      title: t("organic.dedication.items.1.title"),
      description: t("organic.dedication.items.1.description"),
      icon: icons[1],
      bg: "bg-[#F58220]/10",
    },
    {
      id: "regulatory-compliance",
      title: t("organic.dedication.items.2.title"),
      description: t("organic.dedication.items.2.description"),
      icon: icons[2],
      bg: "bg-emerald-50",
    },
  ]

  return (
    <section aria-labelledby={dedicationHeadingId} className="py-8 md:py-12">
      <div className="max-w-3xl">
        <span className="inline-block rounded-full bg-[#F58220]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#F58220]">
          {t("organic.dedication.tag")}
        </span>
        <h2
          id={dedicationHeadingId}
          className="mt-3 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl"
        >
          {t("organic.dedication.title")}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#64748b]">
          {t("organic.dedication.description")}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_20px_rgb(0_104_148_/_3%)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_8px_24px_rgb(0_104_148_/_6%)]"
          >
            <div
              className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
            >
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-[#0f172a]">{item.title}</h3>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#64748b]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
