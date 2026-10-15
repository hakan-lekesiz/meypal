import Image from "next/image"
import { FaCheck } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import type { Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

type ItemData = {
  id: string
  tag: string
  title: string
  description: string
  image: string
  imageAlt: string
  width: number
  height: number
  highlight: string
}

export function ExcitingFlavorsItemsSection({
  locale: _locale,
  t,
}: {
  locale: Locale
  t: Translate
}) {
  const items: ItemData[] = [
    {
      id: "distinctive-flavor",
      tag: t("excitingFlavors.items.0.tag"),
      title: t("excitingFlavors.items.0.title"),
      description: t("excitingFlavors.items.0.description"),
      image: "/images/exciting-flavors/image-10.png",
      imageAlt: t("excitingFlavors.items.0.imageAlt"),
      width: 594,
      height: 219,
      highlight: t("excitingFlavors.items.0.highlight"),
    },
    {
      id: "distinct-platform",
      tag: t("excitingFlavors.items.1.tag"),
      title: t("excitingFlavors.items.1.title"),
      description: t("excitingFlavors.items.1.description"),
      image: "/images/exciting-flavors/image-11.png",
      imageAlt: t("excitingFlavors.items.1.imageAlt"),
      width: 142,
      height: 123,
      highlight: t("excitingFlavors.items.1.highlight"),
    },
    {
      id: "exciting-snacks",
      tag: t("excitingFlavors.items.2.tag"),
      title: t("excitingFlavors.items.2.title"),
      description: t("excitingFlavors.items.2.description"),
      image: "/images/exciting-flavors/image-12.png",
      imageAlt: t("excitingFlavors.items.2.imageAlt"),
      width: 559,
      height: 219,
      highlight: t("excitingFlavors.items.2.highlight"),
    },
    {
      id: "healthy-snacking",
      tag: t("excitingFlavors.items.3.tag"),
      title: t("excitingFlavors.items.3.title"),
      description: t("excitingFlavors.items.3.description"),
      image: "/images/exciting-flavors/image-13.png",
      imageAlt: t("excitingFlavors.items.3.imageAlt"),
      width: 148,
      height: 148,
      highlight: t("excitingFlavors.items.3.highlight"),
    },
  ]

  return (
    <section aria-label={t("excitingFlavors.title")} className="space-y-8 md:space-y-12">
      {items.map((item, index) => {
        const isEven = index % 2 === 0

        return (
          <article
            className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_24px_rgb(0_104_148_/_4%)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0_104_148_/_8%)] sm:p-10"
            key={item.id}
          >
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Text Column */}
              <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <span className="inline-block rounded-full bg-[#F58220]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#F58220]">
                  {item.tag}
                </span>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
                  {item.title}
                </h2>

                <p className="mt-4 text-base leading-relaxed text-[#64748b]">{item.description}</p>

                {/* Highlight Feature Badge */}
                <div className="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-[#feecd9] bg-[#fff4ec] px-4 py-2.5 text-xs font-semibold text-[#dc6e11] sm:text-sm">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F58220] text-white">
                    <FaCheck className="text-[10px]" />
                  </span>
                  <span>{item.highlight}</span>
                </div>
              </div>

              {/* Image Column */}
              <div
                className={`flex justify-center lg:col-span-5 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative flex h-64 w-full max-w-sm items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-slate-100/60 p-6 shadow-inner sm:h-72">
                  <Image
                    alt={item.imageAlt}
                    className="max-h-52 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    height={item.height}
                    src={item.image}
                    width={item.width}
                  />
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}
