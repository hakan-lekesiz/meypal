import type { JSX } from "react"

export type JsonLdProps = {
  data: unknown
}

export function JsonLd({ data }: JsonLdProps): JSX.Element {
  return <script type="application/ld+json">{JSON.stringify(data)}</script>
}
