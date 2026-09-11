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

const MAP_EMBED = "https://www.google.com/maps?q=Grand+Galaxy+City,+Bekasi+Selatan,+Jawa+Barat&output=embed";
const MAP_LINK = "https://www.google.com/maps/search/Grand+Galaxy+City+Bekasi+Selatan";

const tenantCategories = ["Semua","Kuliner","Pendidikan","Kesehatan & Kecantikan","Retail & Fashion","Jasa & Perkantoran"];

const facilityCategories = ["Semua","Pendidikan","Kesehatan","Komersial","Rekreasi","Ibadah"];

/* [emoji, judul, deskripsi, foto, kategori] */
const facilities = [
  ["🏫","Sekolah & Ibadah","Fasilitas pendidikan dan tempat ibadah untuk mendukung keluarga.", REAL.signage, "Pendidikan"],
  ["🏬","Grand Galaxy Mall","Pusat belanja, kuliner, dan hiburan.", REAL.mall, "Komersial"],
  ["🛒","Pasar","Pusat kebutuhan sehari-hari yang mudah dijangkau warga.", REAL.ruko, "Komersial"],
  ["🏢","Ruko & Office","Area komersial untuk kebutuhan bisnis.", REAL.jalanKawasan, "Komersial"],
  ["🕌","Tempat Ibadah","Akses tempat ibadah yang nyaman.", REAL.clusterGate, "Ibadah"],
  ["🏃","Sarana Olahraga","Fasilitas untuk menjaga gaya hidup aktif.", REAL.lapangan, "Rekreasi"],
  ["🏥","Fasilitas Kesehatan","Pilihan layanan kesehatan di sekitar kawasan.", IMG.interior, "Kesehatan"],
  ["🚗","Akses Strategis","Terhubung ke berbagai area penting Bekasi.", REAL.jalanUtama, "Komersial"],
  ["🎪","Taman Bermain Anak","Area bermain aman dan nyaman untuk anak-anak.", REAL.playground, "Rekreasi"],
  ["🏊","Kolam Renang","Fasilitas kolam renang untuk keluarga dan komunitas.", IMG.pool, "Rekreasi"],
  ["🍽️","Foodcourt","Beragam pilihan kuliner dalam satu area yang nyaman.", REAL.ruko, "Komersial"],
  ["🏥","Klinik 24 Jam","Layanan kesehatan darurat siap sedia setiap saat.", IMG.modern, "Kesehatan"]
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

/* [nama toko, deskripsi, lokasi, kategori, foto] */
const tenants = [
  ["Kafe Kopi Nusantara", "Tempat nongkrong nyaman dengan racikan kopi khas Nusantara.", "Ruko Blok A No. 5", "Kuliner", IMG.interior],
  ["Restoran Nusantara Rasa", "Sajian masakan rumahan dengan cita rasa autentik Nusantara.", "Ruko Blok A No. 8", "Kuliner", REAL.ruko],
  ["Toko Buku Ilmu", "Menyediakan buku, alat tulis, dan kebutuhan edukasi keluarga.", "Ruko Blok B No. 12", "Pendidikan", IMG.building],
  ["Bimbingan Belajar Cerdas", "Program belajar tambahan untuk siswa SD hingga SMA.", "Ruko Blok B No. 14", "Pendidikan", IMG.modern],
  ["Apotek Sehat Keluarga", "Layanan obat dan konsultasi kesehatan untuk warga kawasan.", "Ruko Blok C No. 3", "Kesehatan & Kecantikan", IMG.modern],
  ["Griya Cantik Salon & Spa", "Perawatan kecantikan dan relaksasi untuk keluarga modern.", "Ruko Blok A No. 9", "Kesehatan & Kecantikan", IMG.house],
  ["Butik Fashion Elegan", "Koleksi busana kasual dan formal untuk pria dan wanita.", "Ruko Blok D No. 2", "Retail & Fashion", IMG.villa],
  ["Griya Elektronik Modern", "Pusat elektronik dan gadget dengan garansi resmi.", "Ruko Blok D No. 6", "Retail & Fashion", IMG.building],
  ["Laundry Kilat Bersih", "Layanan cuci dan setrika cepat untuk kebutuhan harian.", "Ruko Blok E No. 1", "Jasa & Perkantoran", IMG.interior],
  ["Kantor Notaris & PPAT", "Layanan legalitas dan administrasi properti terpercaya.", "Ruko Blok E No. 4", "Jasa & Perkantoran", IMG.building]
];
