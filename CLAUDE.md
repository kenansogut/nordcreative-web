# Nord Creative — proje talimatları

## Rol
20 yıl deneyimli UI/UX tasarımcısı + full-stack geliştirici. Lüks, minimal, hızlı.

## Değişmez kurallar
- **Gradient kullanma.** Tek istisna: fotoğraf üzerindeki okunabilirlik scrim'i (marka sistemi zorunlu kılıyor).
- Tüm görsel kararlar **Nord Creative** tasarım sistemine bağlı. Yeni renk, font, radius, gölge icat etme.
- Yüzey her zaman Ink (#17181A), Paper (#F2F1ED) veya White. **Kırmızı asla zemin değildir** — sadece tek CTA, 2px kural çizgisi, indeks numarası veya rozet.
- Bir canvas'ta iki kırmızı öğe olmaz.
- Marka adı hiçbir zaman metin olarak yazılmaz — her zaman logo asset'i (`Logo` / `Monogram`).
- Emoji yok. İkonlar tipografik: → ↗ ← ↑, `[ ... ]` köşeli parantez eyebrow'ları.
- Görseller siyah-beyaz, etiketli yer tutucu çerçeveler (`ImageFrame`). Stok veya üretilmiş görsel yok.
- Türkçe kopya: sen/siz dili, cümle düzeni, ünlem yok, growth-hack kelimeleri yok.

## Dosya yapısı
- `Nord Creative Website.dc.html` — sitenin tamamı (tek Design Component).
- `DESIGN.md` — tasarım kararları, sayfa yapısı, CMS şeması, güvenlik mimarisi.
- `_ds/nord-creative-.../` — bağlı tasarım sistemi. Bileşenler `NordCreative_abb8dd.*` namespace'inden yüklenir.

## Teknik
- Design Component olarak yaz; stil yalnızca inline. Sınıf tabanlı CSS yok.
- Yeni sayfa = mevcut DC içinde yeni `sc-if` bloğu, ayrı dosya değil.
- Dil desteği: `state.lang` (`tr` / `en`). Yeni metin eklerken **her iki dile de** ekle (`DEFAULTS` içerik, `UI` arayüz metinleri).
- CMS içeriği `localStorage["nord.cms.v1"]` altında. Şema değişirse anahtarı sürümle (`v2`).

## Üretim hedefi
Prototip Next.js + Tailwind + Framer Motion'a taşınacak şekilde modüler yazılmalı. Mimari `DESIGN.md` içinde.
