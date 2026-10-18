import type { JSX } from "react"

export type JsonLdProps = {
  data: unknown
}

export function JsonLd({ data }: JsonLdProps): JSX.Element {
  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Needed for JSON-LD structured data with character escaping
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
      type="application/ld+json"
    />
  )
}
