# Nord Creative — tasarım ve sistem dokümanı

## 1. Tasarım dili

| Karar | Değer |
| --- | --- |
| Yüzeyler | Ink `#17181A`, Coal `#232528`, Paper `#F2F1ED`, White `#FFFFFF` |
| Vurgu | Nord Red `#EF3E36` (basılı hâl `#C92A23`) — yalnızca tek CTA, 2px kural, indeks, rozet |
| Nötr | grey-100…600, sıcak kaydırılmış |
| Tipografi | Saldo (display 800, gövde 400–500), aksan serif Playfair italic yalnız PullQuote'ta |
| Ölçek | 180 / 96 / 72 / 56 / 40 / 30 / 24 / 20 / 17 / 15 / 13 / 11 |
| Radius | Kontroller pill; yüzeyler 0 / 12 / 24 / 40 |
| Gölge | Varsayılan düz. Kart yalnız fotoğraf/koyu zemin üzerinde yükselir |
| Hareket | 120ms durum, 220ms giriş, 420ms geçiş — `cubic-bezier(.22,.61,.36,1)` |
| Gradient | **Yok.** Tek istisna fotoğraf scrim'i |

Boşluk stratejisi: dikey ritim 110–130px bölüm dolgusu, 40px kenar payı, bölümler 1px hairline ile ayrılır. Hiçbir şey ortalanmaz.

## 2. Sayfa yapısı

| Sayfa | İçerik |
| --- | --- |
| Ana sayfa | Hero (tam ekran sinematik kare + scrim + mega tipografi) → 3'lü istatistik şeridi → "Ne yapıyoruz" iki sütun → hover ile açılan hizmet akordeonu → asimetrik iş grid'i → 6 sütunlu referans duvarı → ink CTA bandı |
| Hizmetler | Mega başlık + 2 sütun kart grid'i (hairline kart, 2px kırmızı üst kural) |
| Çalışmalarımız | Kategori filtresi + 6 kolonluk asimetrik grid (span 4/2/3/3/2/4), hover'da koyu filtre ile proje bilgisi |
| Blog | Editoryal liste: tarih sütunu / başlık + özet / okuma süresi, satır aralarında hairline |
| İletişim | Split: solda ink panel (başlık, e-posta, telefon, güvenlik notları), sağda paper form |
| İçerik paneli | Sidebar + alan editörü (bkz. bölüm 4) |

Header her sayfada sticky: logo, 4 bağlantı, TR/EN, içerik paneli, kırmızı CTA.

Animasyon: giriş için `fade-in-up` (16px, 500ms), IntersectionObserver ile tetiklenir, her öğe bir kez. Kaydırma yumuşatması `scroll-behavior: smooth`; üretimde Lenis ile değiştirilir (`lenis.raf` + `prefers-reduced-motion` kontrolü).

## 3. Bileşen kullanımı

Tasarım sisteminden: `Logo`, `Monogram`, `Eyebrow`, `Button`, `Badge`, `Card`, `IconButton`, `ImageFrame`, `StatFigure`, `PullQuote`, `Input`, `Select`, `Checkbox`. Hiçbiri yeniden çizilmedi.

## 4. CMS mimarisi

### 4.1 Prototipteki panel
`/admin` görünümü sitenin içinde çalışır. Sekmeler: Ana sayfa, Hizmetler, Çalışmalar, Blog, İletişim. Liste tipi içerikte satır ekleme/silme ve alan düzenleme var. Düzenlenen dil TR/EN anahtarıyla seçilir. "Yayınla" içeriği `localStorage["nord.cms.v1"]` içine yazar; "Varsayılana dön" temizler.

### 4.2 Üretim şeması (Sanity önerilir)

```
siteSettings   { logo, navigation[], footer, seoDefaults }
localeString   { tr: string, en: string }          // her metin alanı bu tipte
homePage       { hero{title,sub,cta,image}, about{title,lead,body}, stats[] }
service        { order, title, description, tags[], image }
project        { client, title, type, year, summary, cover, gallery[], category }
post           { title, kicker, slug, date, readTime, excerpt, body(portableText), cover }
contactPage    { title, sub, email, phone, consentText }
brand          { name, logo, order }
```

Neden Sanity: gerçek zamanlı önizleme, `localeString` ile temiz TR/EN, görsel CDN'i (`?w=1600&fm=webp&q=75`) ve rol bazlı erişim. Alternatif Strapi (self-host, KVKK için veriyi yurt içinde tutmak gerekiyorsa) veya Supabase (form kayıtlarını da aynı yerde tutmak isteniyorsa).

Next.js tarafı: App Router, `generateStaticParams` ile ISR (`revalidate: 60`), görseller `next/image` + AVIF/WebP, yazı tipleri `next/font/local` ile Saldo (`display: swap`, subset latin-ext — Türkçe diakritikler için zorunlu).

## 5. Güvenlik mimarisi

### 5.1 Formda görünen davranış (prototipte çalışıyor)
- Görünmez honeypot alanı (`company_url`, ekran dışında, `tabindex=-1`, `autocomplete=off`) — doluysa istek reddedilir.
- Zaman kontrolü: sayfa yüklendikten sonraki ilk 2 saniyede gelen gönderim bot sayılır.
- İstemci tarafı doğrulama: ad ≥ 2, e-posta regex, mesaj ≥ 12 karakter, açık rıza onayı zorunlu.
- Alan uzunluk sınırları (80 / 120 / 1000) ve gönderim öncesi HTML kaçışlama.
- Rate limit: aynı oturumdan dakikada bir gönderim.

### 5.2 Üretimde eklenecekler
| Katman | Uygulama |
| --- | --- |
| Bot | Cloudflare Turnstile (görünmez) + honeypot + zaman kontrolü |
| XSS | Girdi `zod` ile şemaya göre doğrulanır, çıktı React ile kaçışlanır, zengin metin `DOMPurify` ile temizlenir |
| CSRF | `SameSite=Lax` + `__Host-` önekli oturum çerezi, POST'larda double-submit token; Server Action'larda origin kontrolü |
| Rate limit | Upstash Redis, IP + e-posta anahtarı: 1/dk, 10/saat, 30/gün |
| Başlıklar | CSP (`default-src 'self'`, nonce'lu script), HSTS, `X-Content-Type-Options`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` |
| API | Form uçları POST-only, boyut sınırı 16 KB, `Content-Type` kontrolü, hata mesajlarında detay sızdırma yok |
| Admin | CMS oturumları SSO/2FA, rol bazlı yetki, denetim kaydı |
| Veri | KVKK: rıza metni saklanır, brief kayıtları 24 ay sonra silinir, e-posta iletiminde TLS zorunlu |
| İzleme | Sentry (PII maskeli), audit log, bağımlılıklarda Dependabot |

## 6. Instagram akışı (footer)

Prototipte gönderi kareleri etiketli yer tutucu; başlıktaki `@nordcreative.co`, kareler ve iki buton `https://www.instagram.com/nordcreative.co` adresine gidiyor (`target="_blank"`, `rel="noopener noreferrer"`).

Gerçek gönderileri çekmek tarayıcıdan mümkün değil — Instagram herkese açık bir uç sunmuyor, token istemciye gömülemez. Üretimde iki yol var:

**A. Kendi sunucun (önerilen).** Instagram Graph API + Facebook'a bağlı bir **Business/Creator** hesabı gerekiyor.
1. Hesabı Business'a çevir ve bir Facebook sayfasına bağla.
2. Meta for Developers'da uygulama aç, `instagram_basic` + `pages_show_list` izinlerini al.
3. Uzun ömürlü token'ı (60 gün, cron ile yenilenir) **sadece sunucuda** sakla: `INSTAGRAM_TOKEN` env değişkeni.
4. `GET /me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&limit=12` çağrısını bir Next.js route handler'ında yap, sonucu 1 saat cache'le (`revalidate: 3600`).
5. Footer bileşeni kendi API rotandan okur; token asla tarayıcıya inmez. `media_url` CDN linkleri süreli olduğu için görselleri kendi tarafında proxy'le veya kopyala.

**B. Üçüncü parti gömme (kodsuz).** Behold, EmbedSocial veya LightWidget hesabı aç, Instagram'ı bağla, verdikleri script'i footer'a koy. Token yönetimi onlarda kalır; karşılığında dış script ve aylık ücret gelir. CSP'ye ilgili alan adını eklemek gerekir.

Her iki yolda da `alt` metni caption'dan üretilmeli ve akış boş dönerse yer tutucu kareler gösterilmeli.

## 7. Yer tutucular
Tüm görsel alanları etiketli çerçeve. Telefon `+90 000 000 00 00` ve e-posta adresleri örnektir; yayına almadan önce gerçek değerlerle değiştirilmeli.
