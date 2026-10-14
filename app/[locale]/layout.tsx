import { NextIntlClientProvider } from "next-intl"
import "../globals.css"
import { getMessages } from "next-intl/server"
import { locales } from "@/shared/config"
import { notFound } from "next/navigation"

export default async function RootLayout(props: { children: React.ReactNode; params: any }) {
  const params = await props.params
  const { locale } = params
  const messages = await getMessages({ locale })
  if (!locales.includes(locale as any)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
