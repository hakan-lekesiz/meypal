import { getTranslator } from "@/i18n/i18n"
import { MainLayout } from "@/shared/components/layouts"
import type { Locale } from "@/shared/config"
import { ContactInfoSection } from "./sections"

export async function ContactPage({ locale }: { locale: Locale }) {
  const t = await getTranslator(locale)

  return (
    <MainLayout currentRoute="contact" locale={locale}>
      <article className="min-h-[70vh] bg-[#fcfdfe] py-12 md:py-20">
        <div className="grid-wrapper">
          <ContactInfoSection locale={locale} t={t} showNav={true} />
        </div>
      </article>
    </MainLayout>
  )
}
