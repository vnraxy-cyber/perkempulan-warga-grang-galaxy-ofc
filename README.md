# Grand Galaxy City — HTML/CSS/JS

Website responsive untuk kawasan Grand Galaxy City, Bekasi Selatan.

## Halaman
1. Beranda / Home
2. Tentang Kami
3. Kawasan Kami (direktori tenant per kategori)
4. Fasilitas
5. Tips & Informasi Hunian
6. Galeri
7. Berita & Promo
8. Event
9. Kontak Kami
10. 404 Not Found
11. Coming Soon

Tambahan: halaman artikel untuk contoh detail konten.

## Struktur file
```
index.html
css/
  base.css        variabel, reset, tipografi
  components.css  navbar, footer, card, tombol, form, dll (komponen reusable)
  pages.css       gaya khusus per section (promo banner, tenant card, fasilitas scroll, dll)
  responsive.css  media query mobile & tablet
js/
  data.js         path aset gambar + data konten (tenant, fasilitas, berita, event, tips)
  components.js   fungsi render komponen (nav, footer, hero, card)
  pages.js        fungsi render tiap halaman + daftar routing
  app.js          routing hash, interaksi (menu, toast, form, filter tenant)
assets/images/
  brand/   logo
  real/    foto asli kawasan Grand Galaxy City
  stock/   foto stok pelengkap
```

## Cara menjalankan
Tidak perlu framework atau build tool.

1. Buka `index.html` langsung di browser, atau jalankan local server (mis. `python -m http.server`) lalu buka `http://localhost:PORT`.
2. Navigasi halaman menggunakan menu.

## Catatan
- Semua struktur dibuat dengan HTML, CSS, dan JavaScript vanilla (tanpa build tool).
- Data tenant, fasilitas, berita, event, dan tips berada di `js/data.js` sehingga mudah diedit.
- Halaman Kawasan Kami menampilkan direktori tenant yang bisa difilter per kategori (Kuliner, Pendidikan, Kesehatan & Kecantikan, Retail & Fashion, Jasa & Perkantoran).
- Peta menggunakan embed Google Maps asli (iframe), bukan ilustrasi CSS.
- Desain dibuat responsif untuk desktop, tablet, dan HP.
