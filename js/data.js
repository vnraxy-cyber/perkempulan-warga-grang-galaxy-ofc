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
  gate:"assets/images/real/04_gate_kawasan.jpg",
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
  mallMalam:"assets/images/real/16_mall_malam.jpg"
};

const LOGO = "assets/images/brand/logo-perkumpulan.png";
const LOGO_LIGHT = "assets/images/brand/logo-perkumpulan-light.png";

const MAP_EMBED = "https://www.google.com/maps?q=Grand+Galaxy+City,+Bekasi+Selatan,+Jawa+Barat&output=embed";
const MAP_LINK = "https://www.google.com/maps/search/Grand+Galaxy+City+Bekasi+Selatan";

const tenantCategories = ["Semua","Kawasan","Traveling","Makanan & Minuman","Fashion","Skincare & Kosmetik","Beauty & Salon","Kesehatan & Apotek","Elektronik & Gadget","Furniture & Interior","Kebutuhan Rumah Tangga","Grocery & Sembako","Fashion Anak","Mainan & Anak","Sepatu & Tas","Perhiasan & Aksesoris","Olahraga & Fitness","Pet Shop & Pet Care","Otomotif","Jasa Keuangan","Pendidikan & Bimbel","Tempat Keagamaan","Hiburan","Gift & Hampers","Stationery & Buku","Laundry","Barbershop","Café & Coffee Shop","Bakery & Dessert","Properti","Jasa Profesional","Florist & Tanaman","Lifestyle & Hobi"];

const facilityCategories = ["Semua","Pendidikan","Kesehatan","Komersial","Rekreasi","Ibadah"];

const galleryCategories = ["Semua","Kawasan","Fasilitas","Event","Aktivitas"];

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
  ["✦ Event Spesial","Festival Kuliner Akhir Pekan","Nikmati beragam kuliner favorit dari tenant kawasan setiap akhir pekan di area komersial.","Lihat Jadwal Event","#/event", REAL.mallMalam]
];

const news = [
  ["Grand Galaxy City Gelar Family Day 2024", "12 Mei 2024", REAL.taman],
  ["Promo Spesial Akhir Tahun", "03 Desember 2024", REAL.clusterStreet],
  ["Peningkatan Fasilitas Taman Kota", "21 November 2024", REAL.danau],
  ["Grand Galaxy Mall Hadirkan Tenant Baru", "15 Oktober 2024", REAL.mallMalam],
  ["Festival Kuliner Grand Galaxy", "28 September 2024", REAL.ruko]
];

const tips = [
  ["Tips Memilih Rumah untuk Keluarga Muda", "Kenali kebutuhan ruang, akses, dan fasilitas sebelum memilih hunian.", REAL.clusterExterior, "Panduan"],
  ["Cara Menjaga Keamanan Rumah", "Mulai dari pencahayaan, kunci, hingga kebiasaan sederhana sehari-hari.", REAL.clusterGate, "Keamanan"],
  ["Manfaat Tinggal di Kawasan Terpadu", "Akses fasilitas yang dekat membuat aktivitas keluarga lebih praktis.", REAL.taman, "Gaya Hidup"],
  ["Tips Dekorasi Rumah Minimalis", "Gunakan furnitur fungsional dan pencahayaan yang membuat ruang terasa nyaman.", IMG.interior, "Interior"],
  ["Investasi Properti di Bekasi Selatan", "Pertimbangkan lokasi, akses, fasilitas, dan perkembangan kawasan.", REAL.jalanUtama, "Investasi"]
];

const events = [
  ["15","AUG","Grand Galaxy Run","Taman Kota","06.00–10.00 WIB", REAL.taman],
  ["22","AUG","Bazaar & Kuliner Nusantara","Food Festival","10.00–21.00 WIB", REAL.ruko],
  ["28","AUG","Konser Musik Akustik","Live Performance","19.00–21.00 WIB", REAL.mallMalam],
  ["05","SEP","Lomba Mewarnai Anak","Grand Galaxy Mall","09.00–12.00 WIB", REAL.playground]
];

/* [nama toko, deskripsi, lokasi, kategori, foto, link eksternal (opsional), kontak WA (opsional)] */
const tenants = [
  ["Haltev.id", "Digital growth & revenue optimization untuk bisnis Anda.", "Ruko Blok A No. 1", "Kawasan", "assets/images/real/ruko_haltev.png", "https://haltev.id/digital-growth-revenue-optimation/", "6287800092728"],
  ["Kawasan Travel & Tour", "Layanan tiket, tur, dan perjalanan wisata untuk warga kawasan.", "Ruko Blok A No. 2", "Traveling", IMG.modern, null, "6287800092728"],
  ["Kafe Kopi Nusantara", "Tempat nongkrong nyaman dengan racikan kopi khas Nusantara.", "Ruko Blok A No. 5", "Café & Coffee Shop", IMG.interior, null, "6287800092728"],
  ["Restoran Nusantara Rasa", "Sajian masakan rumahan dengan cita rasa autentik Nusantara.", "Ruko Blok A No. 8", "Makanan & Minuman", REAL.ruko, null, "6287800092728"],
  ["Toko Buku Ilmu", "Menyediakan buku, alat tulis, dan kebutuhan edukasi keluarga.", "Ruko Blok B No. 12", "Stationery & Buku", IMG.building, null, "6287800092728"],
  ["Bimbingan Belajar Cerdas", "Program belajar tambahan untuk siswa SD hingga SMA.", "Ruko Blok B No. 14", "Pendidikan & Bimbel", IMG.modern, null, "6287800092728"],
  ["Apotek Sehat Keluarga", "Layanan obat dan konsultasi kesehatan untuk warga kawasan.", "Ruko Blok C No. 3", "Kesehatan & Apotek", IMG.modern, null, "6287800092728"],
  ["Griya Cantik Salon & Spa", "Perawatan kecantikan dan relaksasi untuk keluarga modern.", "Ruko Blok A No. 9", "Beauty & Salon", IMG.house, null, "6287800092728"],
  ["Butik Fashion Elegan", "Koleksi busana kasual dan formal untuk pria dan wanita.", "Ruko Blok D No. 2", "Fashion", IMG.villa, null, "6287800092728"],
  ["Griya Elektronik Modern", "Pusat elektronik dan gadget dengan garansi resmi.", "Ruko Blok D No. 6", "Elektronik & Gadget", IMG.building, null, "6287800092728"],
  ["Laundry Kilat Bersih", "Layanan cuci dan setrika cepat untuk kebutuhan harian.", "Ruko Blok E No. 1", "Laundry", IMG.interior, null, "6287800092728"],
  ["Kantor Notaris & PPAT", "Layanan legalitas dan administrasi properti terpercaya.", "Ruko Blok E No. 4", "Jasa Profesional", IMG.building, null, "6287800092728"]
];

/* Struktur Organisasi — [jabatan, nama] */
const orgStructure = [
 ["Ketua", "Bapak Hendra Wijaya"],
 ["Wakil Ketua", "Bapak Susanto Halim"],
 ["Sekretaris", "Ibu Ratna Kusuma"],
 ["Bendahara", "Ibu Melinda Sari"],
 ["Koordinator Keamanan", "Bapak Agus Prasetyo"],
 ["Koordinator Lingkungan", "Ibu Dewi Anggraini"]
];

/* Sewa / Jual — [nama tempat, tipe ("Disewakan"/"Dijual"), luas bangunan, harga, kontak (nomor WA), foto] */
const listings = [
  ["Ruko 2 Lantai Blok A No. 5", "Disewakan", "72 m²", "Rp 45 Juta / tahun", "6281234500001", REAL.ruko],
  ["Ruko Sudut Blok D No. 2", "Dijual", "96 m²", "Rp 2.1 Miliar", "6281234500002", REAL.jalanKawasan],
  ["Ruko 3 Lantai Blok B No. 12", "Disewakan", "84 m²", "Rp 65 Juta / tahun", "6281234500003", REAL.mall],
  ["Ruko Blok E No. 4", "Dijual", "60 m²", "Rp 1.5 Miliar", "6281234500004", REAL.clusterStreet]
];
