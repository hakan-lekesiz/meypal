# Meypal Proje Kuralları ve Tasarım Sistemi (Design Guidelines)

Bu dosya, projede yapılacak tüm geliştirme ve tasarım taleplerinde geçerli olan kuralları içerir. Tüm yeni bileşenler, sayfalar, stil güncellemeleri ve istekler bu kurallara harfiyen uyularak gerçekleştirilmelidir.

---

## 1. Marka Renk Paleti (Brand Colors)

Sitenin iki temel ana rengi bulunmaktadır:
- 🟠 **Turuncu (Primary Accent / CTA):** `#F58220`
  - **Hover:** `#dc6e11`
  - **Light/Soft Tint:** `#fff4ec` / `#feecd9`
  - **Kullanım:** Tüm birincil aksiyon / CTA butonları, vurgu rozetleri (eyebrow text), ikon vurguları, aktif durumlar, hover efektleri.
- 🔵 **Mavi (Primary Brand):** `#006894`
  - **Koyu Ton (Header Top Bar):** `#005073`
  - **Derin Ton (Footer Arka Planı):** `#002f43`
  - **Kullanım:** Header üst bilgi barı, footer ana arka planı, zemin gradyanları, kart başlıkları, link hover renkleri, marka elementleri.

### Yardımcı & Nötr Renkler
- **Metin Renkleri:**
  - Koyu Başlık / Metin: `#0f172a` (slate-900), `#1e293b` (slate-800)
  - Muted / Açıklama Metni: `#64748b` (slate-500)
  - Footer Metinleri: `#c2d7e5` (yumuşak buz mavisi) ve `#8eaebd`
  - Footer Başlıkları: `#ffffff`
- **Kenarlıklar (Borders):**
  - Açık yüzeyler için: `#e2e8f0` (slate-200)
  - Koyu footer yüzeyleri için: `rgba(255, 255, 255, 0.1)`

---

## 2. Logo Kullanımı

- **Logo Dosyası:** Her zaman `public/logo.png` (`/logo.png`) kullanılmalıdır.
- **Boyutlar:** Orijinal resim `572px × 251px` çözünürlüğündedir.
- **Next.js Entegrasyonu:**
  - Kesinlikle native `<img>` etiketi kullanılmamalı, her zaman `next/image` (`<Image />`) bileşeni kullanılmalıdır.
- **Header:**
  - Beyaz arkaplan üzerinde doğrudan `<Image src="/logo.png" alt="Meypal" width={572} height={251} priority className="h-14 w-auto object-contain max-[700px]:h-10" />` şeklinde kullanılır.
- **Footer:**
  - Koyu arkaplan üzerinde logonun mükemmel ve net görünmesi için beyaz yuvarlatılmış kart içinde (`className="inline-flex items-center rounded-xl bg-white px-3 py-2 no-underline shadow-sm transition-transform duration-[160ms] hover:-translate-y-px"`) kullanılır.

---

## 3. Favicon & İkon Standartları

- **Favicon Konumu:** `public/favicon/` klasöründe yer alır.
- **Desteklenen İkonlar:**
  - `favicon.ico` (app/favicon.ico ve public/favicon.ico)
  - `favicon-16x16.png`
  - `favicon-32x32.png`
  - `apple-touch-icon.png` (180x180)
  - `android-chrome-192x192.png` & `android-chrome-512x512.png`
  - `site.webmanifest` & `manifest.json` (Tema rengi: `#006894`)
- **Root Layout Yapılandırması:** `app/[locale]/layout.tsx` dosyasında `metadata.icons` ve `metadata.manifest` olarak tanımlıdır.

---

## 4. Header & Menü Standartları

- **Üst Bilgi Barı (Top Bar):**
  - Arkaplan: `#005073` (koyu mavi)
  - İkonlar: `#F58220` (turuncu)
  - Dil seçimi aktif durum: `[&[aria-current=page]]:text-[#F58220] [&[aria-current=page]]:bg-white/20`
  - Link hover: `hover:text-[#F58220]`
- **Ana Navigasyon:**
  - Header zemin rengi: **Her zaman saf beyaz kalmalıdır (`bg-white`).** Kesinlikle yarı saydam veya backdrop-blur verilmemelidir. Sayfa aşağı scroll edildiğinde de arka plan rengi saf beyaz (`bg-white shadow-sm`) olarak kalmalıdır.
  - Nav linkleri: `#1e293b`, hover rengi: `#006894`
  - Dropdown menü: beyaz zemin, `#e2e8f0` kenarlık, `shadow-[0_16px_40px_rgb(0_104_148_/_12%)]`, hover: `hover:bg-[#006894]/8 hover:text-[#006894]`
- **Header İletişim Butonu:**
  - Arkaplan: `#F58220` (turuncu), hover: `#dc6e11`
  - Metin: Beyaz, `font-semibold`, gölge: `shadow-[0_4px_14px_rgb(245_130_32_/_30%)]`
- **Mobil Menü (Çok Önemli):**
  - **Asla "Menüyü aç" yazısı gösterilmemelidir.**
  - Sadece hamburger ikonu (`FaBars`) gösterilmelidir.
  - Erişilebilirlik için `<summary aria-label={t("header.openMenu")}>` etiketi kullanılmalıdır.
  - İkon rengi: `#006894`, açık menüde `group-open:text-[#F58220]`.

---

## 5. Footer Standartları

- **Arkaplan:** `#002f43` (derin zengin mavi)
- **CTA Banner:** `#006894` ve `#004e70` gradyanı (`bg-[linear-gradient(90deg,_#004e70_5%,_rgb(0_104_148_/_95%)_44%,_rgb(0_104_148_/_30%)_100%),url('/images/fruits/fruit-basket.jpg')]`)
- **Eyebrow / Üst Başlık:** `#F58220` (turuncu), uppercase, font-bold
- **CTA Butonu:** `#F58220`, hover: `#dc6e11`, metin: beyaz, font-bold
- **İletişim İkonları:** Konum, telefon ve e-posta ikonları `#F58220` renginde
- **Link Hoverları:** Tüm footer linkleri hover durumunda `#F58220` rengini alır.

---

## 6. Buton & Tipografi Kuralları

- **Birincil (Primary) Butonlar:**
  - Renk: `#F58220` (Turuncu)
  - Hover: `#dc6e11`
  - Metin: Beyaz, `font-semibold` veya `font-bold`
  - Yuvarlatma: `rounded-full` (veya tasarım durumuna göre `rounded-xl`)
- **İkincil (Secondary) Butonlar:**
  - Renk: `#006894` (Mavi) veya outline `#006894`
  - Hover: `#005073`
- **Yazı Tipi:** `Inter, sans-serif`

---

## 7. Kodlama & Mühendislik Standartları

- **Next.js:** App Router yapısı (Next.js 16+ Turbopack)
- **i18n:** `next-intl` (varsayılan: `tr`, diğer: `en`)
- **Tailwind CSS:** Tailwind v4, `@theme inline` içindeki marka tokenları kullanılabilir.
- **Linter & Formatter:** Biome (`pnpm lint` / `pnpm check`)
  - Semicolons: `asNeeded`
  - Quotes: Double quotes (`"`)
  - `<img>` kullanımı yasak, her zaman `next/image` (`<Image />`)

---

## 8. Statik Render ve Build Mimarisi (SSG - Kesin Kural)

**ÖNEMLİ:** Projedeki anasayfa ve sonradan eklenecek tüm sayfalar **yalnızca build aşamasında derlenmelidir (SSG - Static Site Generation)**. Sayfalar dynamic/SSR olmamalı, kullanıcı her geldiğinde sunucuda yeniden derleme yapılmamalıdır. Tek seferde build sırasında derlenip statik HTML olarak sunulmalıdır.

Tüm sayfa ve layout geliştirmelerinde aşağıdaki kurallara harfiyen uyulmalıdır:
1. **Force Static:** Her `page.tsx` ve dinamik parametre alan `layout.tsx` dosyasında şu yapılandırma yer almalıdır:
   ```ts
   export const dynamic = "force-static"
   export const dynamicParams = false
   ```
2. **generateStaticParams:** Dinamik parametre içeren (`[locale]` vb.) tüm sayfalarda ve layoutlarda `generateStaticParams()` zorunludur:
   ```ts
   export function generateStaticParams() {
     return locales.map((locale) => ({ locale }))
   }
   ```
3. **next-intl setRequestLocale:** `next-intl`'in statik derlemeden çıkmasını (dynamic opt-out) engellemek için, `generateMetadata` fonksiyonu ve sayfa/layout bileşeninin ilk satırında mutlaka `setRequestLocale(locale)` çağrılmalıdır:
   ```ts
   setRequestLocale(locale)
   ```
4. **Build Doğrulaması:** `pnpm build` çalıştırıldığında oluşturulan rotaların yanında **`● (SSG)`** veya **`○ (Static)`** simgesi görünmelidir. Asla **`ƒ (Dynamic)`** olmamalıdır!
5. **Dinamik Fonksiyon Yasağı:** Sayfa seviyesinde statik derlemeyi bozacak `cookies()`, `headers()`, runtime `searchParams` gibi dinamik sunucu fonksiyonları doğrudan kullanılmamalıdır.

---

## 9. SEO & GEO (Coğrafi Hedefleme) Standartları

- **MetadataBase:** `siteOrigin` ("https://meypal.com.tr") temel alınarak yapılandırılmalıdır.
- **Alternates (Hreflang):** Her sayfa için `canonical` ve `languages` (`tr`, `en`, `"x-default": tr`) tanımlanmalıdır.
- **Robots:** `index: true`, `follow: true` ve zengin GoogleBot parametreleri tanımlanmalıdır.
- **GEO Meta Etiketleri:** Şirketin Mersin merkezli konumu için her sayfada `other` alanına aşağıdaki GEO meta etiketleri eklenmelidir:
  - `"geo.region": "TR-33"`
  - `"geo.placename": "Mersin, Türkiye"`
  - `"geo.position": "36.7997;34.6300"`
  - `ICBM: "36.7997, 34.6300"`
- **Structured Data (JSON-LD Schema):**
  - Root Layout'ta ve anasayfada: `Organization`, `LocalBusiness`, `WholesaleStore` şeması, firma adresi, Mersin koordinatları (`GeoCoordinates`), harita URL'i (`hasMap`), telefon, e-posta, servis bölgeleri (`areaServed`) ve `WebSite` şeması yer almalıdır.
  - İç sayfalarda: `BreadcrumbList` ve ilgili sayfa tipi (`AboutPage` vb.) schema işaretlemesi bulunmalıdır.
- **Sitemap & Robots:** `app/sitemap.ts` tüm dillerdeki URL'leri hreflang `alternates`, `lastModified`, `changeFrequency` ve `priority` değerleriyle birlikte statik olarak üretmelidir.

