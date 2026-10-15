import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import "../globals.css"
import { getMessages, setRequestLocale } from "next-intl/server"
import { isLocale, locales, type Locale } from "@/shared/config"
import { notFound } from "next/navigation"
import { createRootLayoutMetadata, getCorporateStructuredData, JsonLd } from "@/shared/utils"

export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: routeLocale } = await params
  const locale: Locale = isLocale(routeLocale) ? routeLocale : "tr"
  setRequestLocale(locale)

  return createRootLayoutMetadata(locale)
}

export default async function RootLayout(props: LayoutProps) {
  const params = await props.params
  const { locale } = params

  if (!isLocale(locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages({ locale })
  const corporateStructuredData = getCorporateStructuredData(locale)

  return (
    <html lang={locale}>
      <head>
        <JsonLd data={corporateStructuredData} />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
