import "./globals.css"

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{props.children}</body>
    </html>
  )
}
