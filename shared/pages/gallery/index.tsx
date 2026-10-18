import { getTranslator } from "@/i18n/i18n"
import { MainLayout } from "@/shared/components/layouts"
import type { Locale } from "@/shared/config"
import { galleryItems } from "./data"
import { GalleryGrid } from "./gallery-grid"

export async function GalleryPage({ locale }: { locale: Locale }) {
  const t = await getTranslator(locale)

  return (
    <MainLayout currentRoute="gallery" locale={locale}>
      <article className="min-h-[70vh] bg-[#fcfdfe] py-12 md:py-16">
        <div className="grid-wrapper">
          <header className="mb-10 text-center">
            <h1 className="text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
              {t("gallery.title")}
            </h1>
            <div
              aria-hidden="true"
              className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#F58220] to-[#006894]"
            />
          </header>

          <GalleryGrid items={galleryItems} />
        </div>
      </article>
    </MainLayout>
  )
}

export * from "./data"
