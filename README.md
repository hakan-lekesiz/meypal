# Meypal

Meypal web sitesi Next.js App Router ile oluşturulur ve tamamen statik olarak dışa aktarılır.

## Geliştirme ve dağıtım

- `pnpm dev`: yerel geliştirme sunucusu
- `pnpm build`: statik siteyi `out/` klasörüne üretir
- Dağıtımda `out/` içeriğini statik hosting'e yükleyin. Node.js sunucusu veya API ortam değişkeni gerekmez.

## Diller ve bağlantılar

- Desteklenen diller ve her dildeki site bağlantıları `shared/config/site.ts` içinde tanımlanır.
- Navigation ve diğer arayüz metinleri `shared/i18n/locales/tr/common.json` ve `shared/i18n/locales/en/common.json` dosyalarındadır.
- i18next çevirileri sunucu bileşenlerinde build sırasında kullanır; dil sayfaları `/tr/` ve `/en/` yollarında statik üretilir.
