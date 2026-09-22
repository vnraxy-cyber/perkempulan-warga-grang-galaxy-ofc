/* Asset paths — foto pelengkap generik (dipakai hanya untuk foto toko/interior tanpa referensi asli) */
const IMG = {
  house:"assets/images/stock/house.jpg",
  modern:"assets/images/stock/modern.jpg",
  villa:"assets/images/stock/villa.jpg",
  interior:"assets/images/stock/interior.jpg",
  building:"assets/images/stock/building.jpg",
  pool:"assets/images/stock/pool.jpg"
};

const REAL = {
  mall:"assets/images/real/01_grand_galaxy_mall.jpg",
  mallEntrance:"assets/images/real/02_entrance_mall.jpg",
  jalanUtama:"assets/images/real/03_jalan_utama.jpg",
  gate:"assets/images/real/grand.png",
  clusterExterior:"assets/images/real/05_cluster_perumahan.jpg",
  clusterStreet:"assets/images/real/06_suasana_cluster.jpg",
  clusterGate:"assets/images/real/07_pintu_cluster.jpg",
  taman:"assets/images/real/08_taman_kawasan.jpg",
  danau:"assets/images/real/09_danau_grand_galaxy.jpg",
  danauArea:"assets/images/real/10_area_danau.jpg",
  playground:"assets/images/real/11_playground.jpg",
  lapangan:"assets/images/real/12_lapangan_olahraga.jpg",
  signage:"assets/images/real/13_signage_grand_galaxy.jpg",
  ruko:"assets/images/real/14_ruko_area_komersial.jpg",
  jalanKawasan:"assets/images/real/15_jalan_kawasan.jpg",
  mallMalam:"assets/images/real/16_mall_malam.jpg",
  tentangKami:"assets/images/real/tentang_kami.png",
  tenant:"assets/images/real/tenant.png",
  fasilitas:"assets/images/real/fasilitas.png",
  tips:"assets/images/real/tips.png",
  event:"assets/images/real/event.png",
  hubung:"assets/images/real/hubung.png",
  tenantKitaSteamboat:"assets/images/real/Kita Steamboat & Yakiniku.png",
  tenantOutdare:"assets/images/real/Outdare.png",
  tenantSinarasa:"assets/images/real/Sinarasa - Suguhan Nusantara.jpg",
  tenantBanTruk:"assets/images/real/Ban Truk Grand Galaxy.png",
  tenantPrizyEatery:"assets/images/real/Prizy Eatery.png",
  tenantSanset:"assets/images/real/sanset.jpg",
  tenantMieAyamBangka:"assets/images/real/Mie ayam Bangka Chandra.png"
};

const LOGO = "assets/images/brand/logo-perkumpulan.png";
const LOGO_LIGHT = "assets/images/brand/logo-perkumpulan-light.png";

const MAP_EMBED = "https://www.google.com/maps/embed?pb=!4v1789964640343!6m8!1m7!1sx3i4cHqZL0ZonYTjFxvPeg!2m2!1d-6.277537280499284!2d106.9742500059473!3f295.1359!4f0!5f0.7820865974627469";
const MAP_LINK = "https://maps.app.goo.gl/vTGbumhpAfJ3SvA26";

/* Lokasi HalteV — dipakai sebagai peta di setiap halaman detail tenant */
const HALTEV_MAP_EMBED = MAP_EMBED;
const HALTEV_MAP_LINK = MAP_LINK;

/* Ikon & label platform pesan/belanja online — ditampilkan per tenant hanya jika tenant punya link-nya di field "marketplace" */
const MARKETPLACE_META = {
  shopeefood: ["ShopeeFood", "fa-solid fa-bowl-food"],
  grabfood: ["GrabFood", "fa-solid fa-motorcycle"],
  shopee: ["Shopee", "fa-solid fa-cart-shopping"],
  bukalapak: ["Bukalapak", "fa-solid fa-bag-shopping"],
  tokopedia: ["Tokopedia", "fa-solid fa-store"]
};

const tenantCategories = ["Semua","Traveling","Makanan & Minuman","Fashion","Skincare & Kosmetik","Beauty & Salon","Kesehatan & Apotek","Elektronik & Gadget","Furniture & Interior","Kebutuhan Rumah Tangga","Grocery & Sembako","Fashion Anak","Mainan & Anak","Sepatu & Tas","Perhiasan & Aksesoris","Olahraga & Fitness","Pet Shop & Pet Care","Otomotif","Jasa Keuangan","Pendidikan & Bimbel","Tempat Keagamaan","Hiburan","Gift & Hampers","Stationery & Buku","Laundry","Barbershop","Café & Coffee Shop","Bakery & Dessert","Properti","Jasa Profesional","Agency Digital Marketing","Florist & Tanaman","Lifestyle & Hobi"];

const facilityCategories = ["Semua","Pendidikan","Kesehatan","Komersial","Rekreasi","Ibadah"];

const galleryCategories = ["Semua","Kawasan","Fasilitas","Event","Aktivitas"];

const eventCategories = ["Semua","Segera"];

/* [foto, kategori] */
const galleryImages = [
 [REAL.gate,"Kawasan"],
 [REAL.mall,"Fasilitas"],
 [REAL.clusterExterior,"Kawasan"],
 [REAL.clusterStreet,"Kawasan"],
 [REAL.taman,"Fasilitas"],
 [REAL.danau,"Fasilitas"],
 [REAL.playground,"Aktivitas"],
 [REAL.lapangan,"Aktivitas"],
 [REAL.ruko,"Fasilitas"],
 [REAL.jalanUtama,"Kawasan"],
 [REAL.mallMalam,"Event"],
 [REAL.signage,"Kawasan"],
 [REAL.mallEntrance,"Fasilitas"],
 [REAL.clusterGate,"Kawasan"],
 [REAL.danauArea,"Aktivitas"],
 [REAL.jalanKawasan,"Kawasan"]
];

/* [emoji, judul, deskripsi, foto, kategori] */
const facilities = [
  ["fa-solid fa-school","Sekolah & Ibadah","Fasilitas pendidikan dan tempat ibadah untuk mendukung keluarga.", REAL.signage, "Pendidikan"],
  ["fa-solid fa-store","Grand Galaxy Mall","Pusat belanja, kuliner, dan hiburan.", REAL.mall, "Komersial"],
  ["fa-solid fa-cart-shopping","Pasar","Pusat kebutuhan sehari-hari yang mudah dijangkau warga.", REAL.ruko, "Komersial"],
  ["fa-solid fa-building","Ruko & Office","Area komersial untuk kebutuhan bisnis.", REAL.jalanKawasan, "Komersial"],
  ["fa-solid fa-mosque","Tempat Ibadah","Akses tempat ibadah yang nyaman.", REAL.clusterGate, "Ibadah"],
  ["fa-solid fa-person-running","Sarana Olahraga","Fasilitas untuk menjaga gaya hidup aktif.", REAL.lapangan, "Rekreasi"],
  ["fa-solid fa-hospital","Fasilitas Kesehatan","Pilihan layanan kesehatan di sekitar kawasan.", IMG.interior, "Kesehatan"],
  ["fa-solid fa-car","Akses Strategis","Terhubung ke berbagai area penting Bekasi.", REAL.jalanUtama, "Komersial"],
  ["fa-solid fa-child-reaching","Taman Bermain Anak","Area bermain aman dan nyaman untuk anak-anak.", REAL.playground, "Rekreasi"],
  ["fa-solid fa-person-swimming","Kolam Renang","Fasilitas kolam renang untuk keluarga dan komunitas.", IMG.pool, "Rekreasi"],
  ["fa-solid fa-utensils","Foodcourt","Beragam pilihan kuliner dalam satu area yang nyaman.", REAL.ruko, "Komersial"],
  ["fa-solid fa-truck-medical","Klinik 24 Jam","Layanan kesehatan darurat siap sedia setiap saat.", IMG.modern, "Kesehatan"]
];

/* Slide promo — [eyebrow, judul, deskripsi, teks tombol, tautan, foto] */
const promos = [
  ["✦ Promo Terbatas","Bebas Biaya AJB & BPHTB","Wujudkan rumah idaman tanpa beban biaya tambahan. Proses cepat, transparan, dan didampingi tim profesional dari awal hingga serah terima kunci.","Klaim Promo Sekarang","#/kontak", REAL.clusterExterior],
  ["✦ Promo Spesial","Cashback Renovasi Ruko","Dapatkan cashback menarik untuk renovasi ruko Anda bersama mitra kontraktor terpercaya kami.","Pelajari Lebih Lanjut","#/kontak", REAL.ruko],
  ["✦ Event Spesial","Festival Kuliner Akhir Pekan","Nikmati beragam kuliner favorit dari tenant kawasan setiap akhir pekan di area komersial.","Lihat Jadwal Event","#/event", REAL.mallMalam],
  ["✦ Penawaran Ruko","Sewa Ruko Strategis","Pilihan ruko siap pakai di lokasi ramai dengan akses mudah untuk memulai atau mengembangkan usaha Anda.","Lihat Sewa & Jual","#/sewa-jual", REAL.jalanKawasan],
  ["✦ Gaya Hidup","Nikmati Taman & Danau Kawasan","Ruang terbuka hijau yang asri untuk berolahraga, bersantai, dan berkumpul bersama keluarga.","Jelajahi Fasilitas","#/fasilitas", REAL.danau],
  ["✦ Tenant Pilihan","Temukan Tenant Favorit Anda","Dari kuliner, kesehatan, hingga edukasi — semua kebutuhan tersedia dalam satu kawasan.","Jelajahi Tenant","#/kawasan", REAL.mall]
];

/* [judul, sumber, foto, link ke artikel asli (null jika dokumentasi internal), kategori pill: "Berita"/"Promo"/"Event"] */
const news = [
  ["Konflik Tata Ruang Kota Bekasi, 13 Tahun PSU GGC Belum Serah Terima", "Bekasi Satu", "assets/images/real/news-psu-ggc-belum-serah-terima.jpg", "https://bekasisatu.com/konflik-tata-ruang-kota-bekasi-13-tahun-psu-ggc-belum-serah-terima/", "Berita", "30 Apr 2026"],
  ["Perkumpulan Warga Ruko GGC Kecewa Mediasi Parkir Berbayar Berakhir Deadlock", "Berita Bekasi", "assets/images/real/news-mediasi-parkir-deadlock.jpg", "https://beritabekasi.co.id/2026/04/28/perkumpulan-warga-ruko-ggc-kecewa-mediasi-parkir-berbayar-berakhir-deadlock/", "Berita", "28 Apr 2026"],
  ["Dishub Kota Bekasi Buka Suara Soal Polemik Parkir Berbayar di Ruko Grand Galaxy City", "Radarbekasi.id", "assets/images/real/news-dishub-parkir-berbayar.jpg", "https://radarbekasi.id/2026/05/27/dishub-kota-bekasi-buka-suara-soal-polemik-parkir-berbayar-di-ruko-grand-galaxy-city/", "Berita", "27 Mei 2026"],
  ["Penghuni dan Pelaku Usaha Demo Jilid 2 Tolak Portal Parkir Berbayar di Grand Galaxy City Bekasi", "MDI News", "assets/images/real/news-demo-tolak-portal-parkir.jpg", "https://www.mdi.news/penghuni-dan-pelaku-usaha-demo-jilid-2-tolak-portal-parkir-berbayar-di-grand-galaxy-city-bekasi/", "Berita", "22 Mei 2026"],
  ["Warga Rukan Grand Galaxy City Tolak Kenaikan IPL Secara Sepihak oleh Pihak Pengelola", "Tagar.id", REAL.clusterStreet, "https://www.tagar.id/warga-rukan-grand-galaxy-city-tolak-kenaikan-ipl-secara-sepihak-oleh-pihak-pengelola", "Berita"],
  ["Tuntut Serahkan PSU ke Pemkot", "Radarbekasi.id", "assets/images/berita&event/berita_5.jpeg", "https://radarbekasi.id/2023/11/14/tuntut-serahkan-psu-ke-pemkot/", "Berita", "14 Nov 2023"],
  ["Pengembang Diduga Lakukan Pungli, Warga dan Pemilik Ruko Grand Galaxy City Mengadu Ke DPRD Kota Bekasi", "Palapapos", "assets/images/real/news-pengembang-diduga-pungli.jpg", "https://palapapos.co.id/news/detail/pengembang-diduga-lakukan-pungli-warga-dan-pemilik-ruko-grand-galaxy-city-mengadu-ke-dprd-kota-bekasi", "Berita", "4 Des 2023"],
  ["Warga Grand Galaxy Mengadu ke DPRD Kota Bekasi, Keluhkan Pengelolaan Fasos Fasum Amburadul", "Radarbekasi.id", "assets/images/real/news-warga-mengadu-dprd.jpg", "https://radarbekasi.id/2023/12/04/warga-grand-galaxy-mengadu-ke-dprd-kota-bekasi-keluhkan-pengelolaan-fasos-fasum-amburadul/", "Berita", "4 Des 2023"],
  ["DPRD Kota Bekasi Bahas Masalah Grand Galaxy City", "Kompas.com", "assets/images/real/news-dprd-bahas-ggc.jpg", "https://lifestyle.kompas.com/read/2013/02/19/12181657/dprd-kota-bekasi-bahas-masalah-grand-galaxy-city", "Berita", "19 Feb 2013"],
  ["Terkait Fasos Fasum Grand Galaxy, Anggota DPRD Nicodemus Godjang Pinta Pemkot Bekasi Agar Tegas", "Klise", "assets/images/real/news-nico-pinta-pemkot-tegas.jpg", "https://klise.news/terkait-fasos-fasum-grand-galaxy-anggota-dprd-nicodemus-godjang-pinta-pemkot-bekasi-agar-tegas/", "Berita", "4 Des 2023"],
  ["Jalan Grand Galaxy Dibongkar karena Tak Penuhi Standar Geometrik, Ini Penjelasan Pemkot Bekasi", "Wartakota", "assets/images/real/Pembongkaran-jalan-Grand-Galaxy-Bekasi.webp", "https://wartakota.tribunnews.com/bekasi/894833/jalan-grand-galaxy-dibongkar-karena-tak-penuhi-standar-geometrik-ini-penjelasan-pemkot-bekasi", "Berita"],
  ["Soal Lahan Fasosfasum Di Grand Galaxy, Nico: Pemkot Bekasi Bisa Ambil Alih Paksa", "Berita Bekasi", REAL.taman, "https://beritabekasi.co.id/0000/00/00/soal-lahan-fasosfasum-di-grand-galaxy-nico-pemkot-bekasi-bisa-ambil-alih-paksa/", "Berita"],
  ["Warga Pasang Spanduk Penolakan IPL Sepihak dan Parkir Berbayar di Area Ruko", "Dokumentasi Warga GGC", "assets/images/berita&event/berita_2.jpeg", null, "Event"],
  ["Warga Geruduk Kantor Pengelola Grand Galaxy City, Aparat Turun Jaga Ketertiban", "Dokumentasi Warga GGC", "assets/images/berita&event/berita_11.jpeg", null, "Event"],
  ["Massa Warga Ruko/Rukan GGC Berdialog dengan Aparat Kepolisian di Lokasi Aksi", "Dokumentasi Warga GGC", "assets/images/berita&event/berita_7.jpeg", null, "Event"],
  ["Perkumpulan Warga Ruko GGC Audiensi dengan Jajaran Pemkot Bekasi", "Dokumentasi Warga GGC", "assets/images/berita&event/berita_3.jpeg", null, "Event"],
  ["Pengurus Perkumpulan Warga Rapat Koordinasi Bahas Langkah Advokasi Selanjutnya", "Dokumentasi Warga GGC", "assets/images/berita&event/berita_5.jpeg", null, "Event"],
  ["Silaturahmi dan Koordinasi Internal Pengurus Perkumpulan Warga Ruko GGC", "Dokumentasi Warga GGC", "assets/images/berita&event/berita_9.jpeg", null, "Event"],
  ["Bebas Biaya AJB & BPHTB untuk Pembelian Rumah di Grand Galaxy City", "Promo Grand Galaxy City", REAL.clusterExterior, "#/kontak", "Promo"],
  ["Cashback Menarik untuk Renovasi Ruko Bersama Mitra Kontraktor Terpercaya", "Promo Grand Galaxy City", REAL.ruko, "#/kontak", "Promo"],
  ["Digitalisasi UMKM Bersama Haltev.id", "Haltev.id", "assets/images/real/ruko_haltev.png", "https://haltev.id/digitalisasi-umkm", "Jasa"],
  ["Digital Growth & Revenue Optimization Bersama Haltev.id", "Haltev.id", "assets/images/real/ruko_haltev.png", "https://haltev.id/digital-growth-revenue-optimation/", "Jasa"]
];

const tips = [
  ["Tips Memilih Rumah untuk Keluarga Muda", "Kenali kebutuhan ruang, akses, dan fasilitas sebelum memilih hunian.", REAL.clusterExterior, "Panduan"],
  ["Cara Menjaga Keamanan Rumah", "Mulai dari pencahayaan, kunci, hingga kebiasaan sederhana sehari-hari.", REAL.clusterGate, "Keamanan"],
  ["Manfaat Tinggal di Kawasan Terpadu", "Akses fasilitas yang dekat membuat aktivitas keluarga lebih praktis.", REAL.taman, "Gaya Hidup"],
  ["Tips Dekorasi Rumah Minimalis", "Gunakan furnitur fungsional dan pencahayaan yang membuat ruang terasa nyaman.", IMG.interior, "Interior"],
  ["Investasi Properti di Bekasi Selatan", "Pertimbangkan lokasi, akses, fasilitas, dan perkembangan kawasan.", REAL.jalanUtama, "Investasi"]
];

const events = [
  ["15","AUG","Grand Galaxy Run","Taman Kota","06.00–10.00 WIB", "assets/images/berita&event/berita_2.jpeg"],
  ["22","AUG","Bazaar & Kuliner Nusantara","Food Festival","10.00–21.00 WIB", "assets/images/berita&event/berita_7.jpeg"],
  ["28","AUG","Konser Musik Akustik","Live Performance","19.00–21.00 WIB", "assets/images/berita&event/berita_9.jpeg"],
  ["05","SEP","Lomba Mewarnai Anak","Grand Galaxy Mall","09.00–12.00 WIB", "assets/images/berita&event/berita_11.jpeg"]
];

/* [nama toko, deskripsi, lokasi, kategori, foto, link eksternal (opsional), kontak WA (opsional), jam operasional, produk tersedia, sosial media, link pesan/belanja online (opsional)] */
const tenants = [
  ["Haltev.id", "Digital growth & revenue optimization untuk bisnis Anda.", "Grand Galaxy City, Jl. Boulevard Raya Blok RGA No.30, Bekasi Selatan ", ["Pendidikan & Bimbel","Agency Digital Marketing"], "assets/images/real/ruko_haltev.png", "https://haltev.id/digital-growth-revenue-optimation/", "62878000927286", "08.00–20.00 WIB", [
    {nama:"Bootcamp Program", desc:"Program bootcamp intensif terintegrasi AI untuk mempercepat pemahaman, adaptif, persiapan karier hingga penyaluran magang dan kerja."},
    {nama:"Program Kursus Unggulan", desc:"Menyediakan pilihan berbagai kelas dengan kurikulum terintegrasi AI dengan waktu belajar yang fleksibel sesuai pilihan dan passionmu."},
    {nama:"Digitalisasi UMKM", desc:"Pendampingan digitalisasi usaha UMKM, mulai dari branding online, digital marketing, hingga sistem penjualan digital untuk mempercepat pertumbuhan bisnis.", link:"https://haltev.id/digitalisasi-umkm"},
    {nama:"Digital Growth & Revenue Optimization", desc:"Layanan pengembangan website, manajemen media sosial & iklan digital, serta keamanan siber dengan dukungan AI untuk optimasi performa, efisiensi, dan hasil yang terukur.", link:"https://haltev.id/digital-growth-revenue-optimation/"},
    {nama:"Corporate Training", desc:"Pelatihan perusahaan terintegrasi AI untuk pengembangan kompetensi strategis dan peningkatan kinerja tim secara adaptif dan terukur."},
    {nama:"Sertifikasi BNSP & Internasional", desc:"Sertifikasi kompetensi dapat meningkatkan kredibilitas, peluang karier, gaji dan imbalan lainnya, menjaga kualitas kerja."},
    {nama:"Belajar Mandiri (haltevacademy.com)", desc:"Platform pelatihan online yang menyediakan kursus Programming & Digital Skill dengan metode belajar fleksibel: video, live session, atau hybrid."}
  ], {instagram:"instagram.com/haltev.id", tiktok:"tiktok.com/@haltev.id"}],
  ["Kita Steamboat & Yakiniku", "Steamboat dan yakiniku ala rumahan dengan bahan segar dan bumbu pilihan.", "Jl. Boulevard Raya Blok RGA No. 58-59", "Makanan & Minuman", REAL.tenantKitaSteamboat, null, "6281973949494", "10.00–22.00 WIB", ["Paket Steamboat Keluarga","Aneka Yakiniku","Menu All You Can Eat","Minuman & Dessert"], {instagram:"instagram.com/kitasteamboat", tiktok:"tiktok.com/@kitasteamboat"}],
  ["Outdare", "Brand fashion streetwear lokal dengan desain kasual dan berkualitas.", "Jl. Boulevard Raya Blok RGA No. 58", "Fashion", REAL.tenantOutdare, "https://outdare.id", "6281973949494", "10.00–21.00 WIB", ["Kaos & Hoodie","Jaket Streetwear","Aksesoris Fashion","Koleksi Terbaru"], {instagram:"instagram.com/outdare"}, {shopee:"https://shopee.co.id/outdarebekasi"}],
  ["Sinarasa - Suguhan Nusantara", "Warung makan dengan sajian khas Nusantara untuk santap harian keluarga.", "Jl. Boulevard Raya Blok RGA No. 59", "Makanan & Minuman", REAL.tenantSinarasa, null, "6281973949494", "08.00–20.00 WIB", ["Nasi & Lauk Nusantara","Aneka Lauk Pilihan","Paket Hemat","Menu Kekinian"], {instagram:"instagram.com/sinarasa"}],
  ["Ban Truk Grand Galaxy", "Pusat ban truk dan kendaraan komersial dengan berbagai merek terpercaya.", "Jl. Boulevard Raya Blok RSNB 08", "Otomotif", REAL.tenantBanTruk, "https://pusatbantruk.com", "62818622919", "08.00–17.00 WIB", ["Ban Truk & Niaga","Velg & Aksesoris","Jasa Pemasangan","Konsultasi Ban"], {instagram:"instagram.com/pusatbantruk", tiktok:"tiktok.com/@pusatbantruk"}, {shopee:"https://shopee.co.id/3qNAd7VAcR"}],
  ["Prizy Eatery", "Cafe kekinian dengan menu kopi, makanan ringan, dan tempat nongkrong nyaman.", "Jl. Boulevard Raya Barat Blok RGA 53", "Café & Coffee Shop", REAL.tenantPrizyEatery, null, "6281219067973", "09.00–22.00 WIB", ["Kopi & Non-Coffee","Menu Sarapan & Snack","Dessert Kekinian","Paket Nongkrong"], {instagram:"instagram.com/prizy.eatery"}],
  ["Sanset Music Store, Studio & Cafe", "Toko alat musik, studio latihan, dan cafe santai dalam satu tempat.", "RRGB 28", ["Lifestyle & Hobi","Café & Coffee Shop"], REAL.tenantSanset, null, "6282125000706", "10.00–21.00 WIB", ["Alat Musik & Aksesoris","Sewa Studio Latihan","Servis Alat Musik","Menu Cafe"], {instagram:"instagram.com/sansetmusicstore"}],
  ["Mie Ayam Bangka Chandra", "Mie ayam khas Bangka dengan cita rasa autentik dan porsi mengenyangkan.", "Jl. Rose Garden 3 Blok RRG3 No. 10", "Makanan & Minuman", REAL.tenantMieAyamBangka, null, "6281388222138", "09.00–20.00 WIB", ["Mie Ayam Original","Mie Ayam Bakso","Pangsit Goreng & Rebus","Es Teh & Minuman"], {}],
  ["Sepatu Pengaman Kings & Alat Safety", "Penyedia sepatu safety dan perlengkapan keselamatan kerja berkualitas.", "Jl. RSN 2 Blok RRG2 No. 33", "Sepatu & Tas", IMG.building, "https://lestariid.com", "6281999817618", "08.00–17.00 WIB", ["Sepatu Safety","Helm & APD","Sarung Tangan Kerja","Perlengkapan K3"], {}]
];

/* Sewa / Jual — [nama tempat, tipe ("Disewakan"/"Dijual"), luas bangunan, harga, kontak (nomor WA), foto] */
const listings = [
  ["Ruko 2 Lantai Blok A No. 5", "Disewakan", "72 m²", "Rp 45 Juta / tahun", "6281234500001", REAL.tenant],
  ["Ruko Sudut Blok D No. 2", "Dijual", "96 m²", "Rp 2.1 Miliar", "6281234500002", REAL.tenant],
  ["Ruko 3 Lantai Blok B No. 12", "Disewakan", "84 m²", "Rp 65 Juta / tahun", "6281234500003", REAL.tenant],
  ["Ruko Blok E No. 4", "Dijual", "60 m²", "Rp 1.5 Miliar", "6281234500004", REAL.tenant]
];
