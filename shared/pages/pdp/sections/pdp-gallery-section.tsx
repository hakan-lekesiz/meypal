import { useId } from "react"
import Image from "next/image"
import type { getTranslator } from "@/i18n/i18n"
import type { ProductDetail } from "@/shared/models"

type Translate = Awaited<ReturnType<typeof getTranslator>>

interface PdpGallerySectionProps {
  product: ProductDetail
  t: Translate
}

export function PdpGallerySection({ product, t }: PdpGallerySectionProps) {
  const headingId = useId()

  if (!product.gallery || product.gallery.length === 0) {
    return null
  }

  return (
    <section aria-labelledby={headingId} className="pb-12 md:pb-16">
      <h2 className="sr-only" id={headingId}>
        {t(product.titleKey)}
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {product.gallery.map((img, idx) => {
          const title = img.titleKey ? t(img.titleKey) : ""
          const alt = t(img.altKey)
          return (
            <figure
              className="group relative overflow-hidden rounded-3xl border border-[#e2e8f0] bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              key={img.src || idx}
            >
              <div className="relative h-64 w-full overflow-hidden sm:h-72">
                <Image
                  alt={alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={img.src}
                  width={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002f43]/85 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {title && (
                  <div className="absolute right-4 bottom-4 left-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
                      Meypal
                    </span>
                    <figcaption className="text-sm font-bold text-white drop-shadow-sm">
                      {title}
                    </figcaption>
                  </div>
                )}
              </div>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
