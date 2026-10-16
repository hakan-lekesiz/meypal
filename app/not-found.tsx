import "./globals.css"
import Link from "next/link"
import { MainLayout } from "@/shared/components/layouts"

export default function NotFound() {
  return (
    <MainLayout currentRoute="home" locale={"tr"}>
      <section className="flex min-h-[60vh] items-center justify-center bg-[#fcfdfe] px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-md text-center">
          <span className="inline-block rounded-full border border-[#F58220]/25 bg-[#fff4ec] px-4 py-1 text-sm font-black tracking-widest text-[#F58220]">
            404
          </span>

          <h1 className="mt-5 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl">
            Sayfa Bulunamadı
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-[#64748b] sm:text-base">
            Aradığınız sayfa taşınmış, silinmiş veya geçici olarak kullanılamıyor olabilir.
          </p>

          <div className="mt-8">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-[#006894] px-7 py-3 text-sm font-bold text-white shadow-md shadow-[#006894]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F58220] hover:shadow-[#F58220]/30"
              href="/"
            >
              Anasayfaya Dön
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
