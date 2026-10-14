import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import "../globals.css"
import { getMessages } from "next-intl/server"
import { locales } from "@/shared/config"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/favicon/site.webmanifest",
}

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
