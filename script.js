const IMG = {
  city:"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=82",
  house:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=82",
  modern:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=82",
  villa:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=82",
  interior:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=82",
  building:"https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=82",
  nature:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=82",
  pool:"https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=900&q=82",
  park:"https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=82"
};

const clusters = [
  ["Cluster Galaxy", IMG.modern, "Modern family cluster dengan lingkungan hijau.", "Mulai Rp 1,8 M"],
  ["Cluster Aralia", IMG.villa, "Hunian nyaman dengan desain tropis modern.", "Mulai Rp 2,1 M"],
  ["Cluster Cattleya", IMG.house, "Pilihan elegan untuk keluarga berkembang.", "Mulai Rp 2,4 M"],
  ["Cluster The GA", IMG.building, "Rumah premium dengan area komunal.", "Mulai Rp 3,2 M"],
  ["Cluster Acacia", IMG.modern, "Lingkungan asri dan akses mudah.", "Mulai Rp 1,9 M"],
  ["Cluster Maple", IMG.house, "Konsep rumah compact yang fungsional.", "Mulai Rp 1,6 M"]
];

const facilities = [
  ["🏫","Sekolah & Al-Azhar","Fasilitas pendidikan untuk mendukung keluarga."],
  ["🏊","Grand Galaxy Mall","Pusat belanja, kuliner, dan hiburan."],
  ["🌳","Taman Modern","Ruang hijau untuk olahraga dan aktivitas keluarga."],
  ["🏢","Ruko & Office","Area komersial untuk kebutuhan bisnis."],
  ["🕌","Tempat Ibadah","Akses tempat ibadah yang nyaman."],
  ["🏃","Sarana Olahraga","Fasilitas untuk menjaga gaya hidup aktif."],
  ["🏥","Fasilitas Kesehatan","Pilihan layanan kesehatan di sekitar kawasan."],
  ["🚗","Akses Strategis","Terhubung ke berbagai area penting Bekasi."]
];

const news = [
  ["Grand Galaxy City Gelar Family Day 2024", "12 Mei 2024", IMG.park],
  ["Promo Spesial Akhir Tahun", "03 Desember 2024", IMG.house],
  ["Peningkatan Fasilitas Taman Kota", "21 November 2024", IMG.nature],
  ["Grand Galaxy Mall Hadirkan Tenant Baru", "15 Oktober 2024", IMG.building],
  ["Festival Kuliner Grand Galaxy", "28 September 2024", IMG.pool]
];

const tips = [
  ["Tips Memilih Rumah untuk Keluarga Muda", "Kenali kebutuhan ruang, akses, dan fasilitas sebelum memilih hunian.", IMG.house],
  ["Cara Menjaga Keamanan Rumah", "Mulai dari pencahayaan, kunci, hingga kebiasaan sederhana sehari-hari.", IMG.modern],
  ["Manfaat Tinggal di Kawasan Terpadu", "Akses fasilitas yang dekat membuat aktivitas keluarga lebih praktis.", IMG.park],
  ["Tips Dekorasi Rumah Minimalis", "Gunakan furnitur fungsional dan pencahayaan yang membuat ruang terasa nyaman.", IMG.interior],
  ["Investasi Properti di Bekasi Selatan", "Pertimbangkan lokasi, akses, fasilitas, dan perkembangan kawasan.", IMG.building]
];

const events = [
  ["15","AUG","Grand Galaxy Run","Taman Kota","06.00–10.00 WIB"],
  ["22","AUG","Bazaar & Kuliner Nusantara","Food Festival","10.00–21.00 WIB"],
  ["28","AUG","Konser Musik Akustik","Live Performance","19.00–21.00 WIB"],
  ["05","SEP","Lomba Mewarnai Anak","Grand Galaxy Mall","09.00–12.00 WIB"]
];

function nav(){
  return `<div class="topbar"><div class="container">Kawasan hunian terpadu & modern di Bekasi Selatan</div></div>
  <header class="navbar"><div class="container nav-inner">
    <a class="logo" href="#/" aria-label="Grand Galaxy City"><span class="logo-mark" aria-hidden="true"><span class="logo-orbit"></span></span><span class="logo-wordmark"><b>GRAND <em>GALAXY</em> CITY</b><small>Hidup Lebih Baik</small></span></a>
    <button class="menu" onclick="toggleMenu()">☰</button>
    <nav class="nav-links" id="navLinks">
      ${[
        ["Beranda","#/"],["Tentang","#/tentang"],["Kawasan","#/kawasan"],["Fasilitas","#/fasilitas"],
        ["Tips","#/tips"],["Galeri","#/galeri"],["Berita","#/berita"],["Event","#/event"],["Kontak","#/kontak"]
      ].map(([x,y])=>`<a href="${y}" data-route="${y}">${x}</a>`).join("")}
    </nav>
    <a class="nav-cta" href="#/kawasan">Jelajahi Kawasan</a>
  </div></header>`;
}

function footer(){
 return `<footer class="footer"><div class="container">
  <div class="footer-grid">
  <div><a class="logo" href="#/" style="color:#fff" aria-label="Grand Galaxy City"><span class="logo-mark" aria-hidden="true"><span class="logo-orbit"></span></span><span class="logo-wordmark"><b>GRAND <em>GALAXY</em> CITY</b><small style="color:#b8a47a">Hidup Lebih Baik</small></span></a><p>Hunian modern, fasilitas lengkap, dan lingkungan yang dirancang untuk kehidupan keluarga yang lebih nyaman.</p></div>
   <div><h3>Menu</h3><a href="#/tentang">Tentang Kami</a><a href="#/kawasan">Kawasan</a><a href="#/fasilitas">Fasilitas</a><a href="#/galeri">Galeri</a></div>
   <div><h3>Informasi</h3><a href="#/berita">Berita & Promo</a><a href="#/event">Event</a><a href="#/tips">Tips Hunian</a><a href="#/kontak">Kontak</a></div>
   <div><h3>Hubungi Kami</h3><p>Grand Galaxy City, Bekasi Selatan<br>Jawa Barat, Indonesia</p><p>021 1234 5678<br>info@grandgalaxycity.id</p></div>
  </div>
  <div class="footer-bottom"><span>© 2026 Grand Galaxy City. All rights reserved.</span><span>Privacy Policy · Terms</span></div>
 </div></footer>`;
}

function hero(title, subtitle, image=IMG.city, small=false){
 return `<section class="hero ${small?'small':''}" style="background-image:linear-gradient(90deg,rgba(2,29,48,.78),rgba(2,29,48,.25)),url('${image}')"><div class="container"><div class="hero-content reveal"><div class="eyebrow">GRAND GALAXY CITY</div><h1>${title}</h1><p>${subtitle}</p></div></div></section>`;
}

function home(){
 return `${hero("Grand Galaxy City<br>Bekasi Selatan","Hunian nyaman, lingkungan asri, dan fasilitas lengkap untuk keluarga yang ingin hidup lebih baik.","https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1800&q=85")}
 <main>
 <div class="container"><div class="stats">
  <div class="stat card"><strong>± 500 Ha</strong><span>Kawasan Terpadu</span></div><div class="stat card"><strong>24 Jam</strong><span>Keamanan Kawasan</span></div><div class="stat card"><strong>20+</strong><span>Fasilitas</span></div><div class="stat card"><strong>Strategis</strong><span>Bekasi Selatan</span></div>
 </div></div>
 <section class="section"><div class="container"><div class="section-head"><div><div class="kicker">Hunian Pilihan</div><h2>Pilih Rumah Impian Anda</h2></div><a class="link-btn" href="#/kawasan">Lihat semua →</a></div>
  <div class="grid-4">${clusters.slice(0,4).map(clusterCard).join("")}</div>
 </div></section>
 <section class="section compact"><div class="container"><div class="cta"><div class="kicker">Temukan Hunian</div><h2>Temukan Rumah Impian Anda<br>di Grand Galaxy City</h2><p>Pilih cluster yang sesuai dengan kebutuhan dan gaya hidup keluarga Anda.</p><div class="actions"><a class="btn btn-primary" href="#/kawasan">Jelajahi Kawasan</a><a class="btn btn-outline" href="#/kontak">Hubungi Kami</a></div></div></div></section>
 <section class="section"><div class="container"><div class="section-head"><div><div class="kicker">Kawasan Kami</div><h2>Semua yang Anda Butuhkan</h2></div><a class="link-btn" href="#/kawasan">Lihat detail →</a></div><div class="grid-2"><div class="map-box"><div class="map-legend"><b>Area Grand Galaxy City</b><div>🔵 Hunian</div><div>🟢 Taman</div><div>🟡 Komersial</div><div>🔴 Fasilitas</div></div></div><div class="grid-2">${facilities.slice(0,4).map(([i,t,p])=>`<div class="card facility"><div class="facility-icon">${i}</div><h3>${t}</h3><p>${p}</p></div>`).join("")}</div></div></div></section>
 <section class="section compact"><div class="container"><div class="section-head"><div><div class="kicker">Galeri</div><h2>Suasana Grand Galaxy City</h2></div><a class="link-btn" href="#/galeri">Lihat semua →</a></div><div class="gallery">${[IMG.city,IMG.house,IMG.park,IMG.building].map((x,i)=>`<div class="g ${i===0?'tall':''}" style="background-image:url('${x}')"></div>`).join("")}</div></div></section>
 <section class="section"><div class="container"><div class="grid-2"><div><div class="section-head"><div><div class="kicker">Berita & Promo</div><h2>Info Terbaru</h2></div></div><div class="news-list">${news.slice(0,2).map(n=>newsRow(n)).join("")}</div></div><div><div class="section-head"><div><div class="kicker">Event Terdekat</div><h2>Agenda Kawasan</h2></div></div><div class="event-list">${events.slice(0,3).map(eventRow).join("")}</div></div></div></div></section>
 </main>`;
}

function about(){
 return `${hero("Tentang Kami","Mengenal Grand Galaxy City lebih dekat — kawasan yang dirancang untuk menghadirkan kehidupan modern dan nyaman.",IMG.modern,true)}
 <section class="section"><div class="container"><div class="grid-2"><div class="copy"><div class="kicker">Sejarah Grand Galaxy City</div><h2>Ruang Hidup yang Tumbuh Bersama Keluarga</h2><p>Grand Galaxy City merupakan kawasan terpadu di Bekasi Selatan yang menggabungkan hunian, ruang komersial, fasilitas pendidikan, rekreasi, dan ruang terbuka hijau.</p><p>Dengan perencanaan kawasan yang matang, setiap area dirancang agar aktivitas sehari-hari menjadi lebih mudah dan menyenangkan.</p></div><div class="split-image" style="background-image:url('${IMG.city}')"></div></div></div></section>
 <section class="section compact"><div class="container"><div class="grid-3">${[["Visi Kami","Membangun lingkungan hidup yang nyaman dan berkelanjutan."],["Misi Kami","Menghadirkan hunian dan fasilitas yang mendukung kualitas hidup."],["Nilai Kami","Kenyamanan, keamanan, kebersamaan, dan pertumbuhan."]].map(([a,b])=>`<div class="card facility"><div class="facility-icon">✦</div><h3>${a}</h3><p>${b}</p></div>`).join("")}</div></div></section>
 <section class="section"><div class="container"><div class="section-head"><div><div class="kicker">Komitmen Kami</div><h2>Kawasan untuk Hidup Lebih Baik</h2></div></div><div class="grid-2">${["Lingkungan Asri","Fasilitas Lengkap","Keamanan Terintegrasi","Pertumbuhan Berkelanjutan"].map((x,i)=>`<div class="check"><b>${["◉","⌂","◈","✦"][i]} ${x}</b>Dirancang agar kebutuhan penghuni dapat terpenuhi dengan nyaman.</div>`).join("")}</div></div></section>
 <section class="section compact"><div class="container"><div class="cta"><h2>Bersama Membangun Masa Depan</h2><p>Temukan alasan mengapa banyak keluarga memilih Grand Galaxy City.</p><a class="btn btn-primary" href="#/kawasan">Jelajahi Kawasan</a></div></div></section>`;
}

function kawasan(){
 return `${hero("Kawasan Kami","Jelajahi beragam cluster hunian, fasilitas, dan area komersial di Grand Galaxy City.",IMG.building,true)}
 <section class="section"><div class="container"><div class="pills"><button class="pill active" onclick="filterClusters('all',this)">Pilih Kawasan</button><button class="pill" onclick="filterClusters('family',this)">Cluster</button><button class="pill" onclick="filterClusters('premium',this)">Pilihan Selek</button></div><div id="clusterGrid" class="grid-2">${clusters.map(clusterCard).join("")}</div></div></section>
 <section class="section compact"><div class="container"><div class="section-head"><div><div class="kicker">Peta Kawasan</div><h2>Lokasi Strategis</h2></div></div><div class="map-box"><div class="map-legend"><b>Grand Galaxy City</b><div>🔵 Cluster Hunian</div><div>🟢 Ruang Terbuka</div><div>🟡 Area Komersial</div><div>🔴 Fasilitas</div></div></div></div></section>`;
}

function clusterCard(c){
 return `<article class="card image-card cluster-card reveal"><div class="pic" style="background-image:url('${c[1]}')"></div><div class="body"><span class="badge">Cluster</span><h3>${c[0]}</h3><p>${c[2]}</p><div class="price">${c[3]}</div><a class="btn btn-dark" href="#/cluster">Lihat Detail</a></div></article>`;
}

function clusterDetail(){
 return `${hero("Cluster Galaxy","Hunian modern dengan lingkungan hijau, akses mudah, dan fasilitas kawasan yang lengkap.",IMG.modern,true)}
 <section class="section"><div class="container"><div class="breadcrumb">Beranda › Kawasan Kami › Cluster Galaxy</div><div class="grid-2"><div class="copy"><h2>Cluster Galaxy</h2><p>Cluster Galaxy menghadirkan rumah dengan desain modern dan lingkungan yang nyaman untuk keluarga. Setiap unit dirancang fungsional dengan ruang yang mendukung aktivitas sehari-hari.</p></div><div class="grid-2">${[["Tipe Rumah","Beragam tipe"],["Luas Tanah","Mulai 90 m²"],["Luas Bangunan","Mulai 70 m²"],["Jumlah Unit","Terbatas"]].map(x=>`<div class="card stat"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join("")}</div></div></div></section>
 <section class="section compact"><div class="container"><div class="section-head"><div><div class="kicker">Fasilitas Cluster</div><h2>Nyaman untuk Keluarga</h2></div></div><div class="grid-4">${["One Gate System","Keamanan 24 Jam","Taman Bermain","Jalan Lingkungan Lebar","Lingkungan Asri","Area Parkir"].map(x=>`<div class="card facility"><div class="facility-icon">✓</div><h3>${x}</h3><p>Fasilitas pendukung untuk kehidupan yang praktis dan aman.</p></div>`).join("")}</div></div></section>
 <section class="section"><div class="container"><div class="section-head"><div><div class="kicker">Gallery</div><h2>Suasana Cluster</h2></div></div><div class="gallery">${[IMG.modern,IMG.house,IMG.villa,IMG.park,IMG.interior,IMG.building].map((x,i)=>`<div class="g" style="background-image:url('${x}')"></div>`).join("")}</div></div></section>
 <section class="section compact"><div class="container"><div class="grid-2"><div><div class="kicker">Lokasi Cluster</div><h2 style="font-family:'Playfair Display';color:var(--navy)">Dekat dengan Berbagai Fasilitas</h2><p style="color:var(--muted);font-size:13px;line-height:1.7">Akses mudah menuju pusat perbelanjaan, pendidikan, kuliner, dan area rekreasi.</p><a class="btn btn-dark" href="#/kontak">Tanya Lokasi</a></div><div class="map-box"></div></div></div></section>`;
}

function fasilitas(){
 return `${hero("Fasilitas Kawasan","Dilengkapi berbagai fasilitas modern untuk menunjang kebutuhan keluarga.",IMG.park,true)}
 <section class="section"><div class="container"><div class="pills"><button class="pill active">Semua</button><button class="pill">Pendidikan</button><button class="pill">Kesehatan</button><button class="pill">Komersial</button><button class="pill">Rekreasi</button><button class="pill">Ibadah</button></div><div class="grid-3">${facilities.map(([i,t,p])=>`<div class="card image-card"><div class="pic" style="background-image:url('${[IMG.building,IMG.park,IMG.house,IMG.nature,IMG.city,IMG.pool,IMG.interior,IMG.modern][Math.floor(Math.random()*8)]}')"></div><div class="body"><h3>${t}</h3><p>${p}</p></div></div>`).join("")}</div></div></section>`;
}

function tipsPage(){
 return `${hero("Tips & Informasi Hunian","Panduan dan informasi bermanfaat seputar rumah, kawasan, dan gaya hidup keluarga.",IMG.interior,true)}
 <section class="section"><div class="container"><div class="news-list">${tips.map(t=>`<article class="news-row"><div class="thumb" style="background-image:url('${t[2]}')"></div><div><h3>${t[0]}</h3><p>${t[1]}</p></div><a class="link-btn" href="#/artikel">Baca Selengkapnya →</a></article>`).join("")}</div></div></section>`;
}

function galleryPage(){
 let imgs=[IMG.city,IMG.house,IMG.villa,IMG.modern,IMG.park,IMG.building,IMG.nature,IMG.pool,IMG.interior,IMG.house,IMG.city,IMG.modern];
 return `${hero("Galeri","Lihat berbagai suasana hunian, fasilitas, ruang hijau, dan aktivitas di Grand Galaxy City.",IMG.city,true)}
 <section class="section"><div class="container"><div class="pills"><button class="pill active">Semua</button><button class="pill">Kawasan</button><button class="pill">Fasilitas</button><button class="pill">Event</button><button class="pill">Aktivitas</button></div><div class="gallery">${imgs.map((x,i)=>`<div class="g ${i===0?'tall':''}" style="background-image:url('${x}')"></div>`).join("")}</div></div></section>`;
}

function berita(){
 return `${hero("Berita & Promo","Informasi terbaru mengenai Grand Galaxy City, promo hunian, fasilitas, dan aktivitas kawasan.",IMG.city,true)}
 <section class="section"><div class="container"><div class="pills"><button class="pill active">Semua</button><button class="pill">Berita</button><button class="pill">Promo</button><button class="pill">Event</button></div><div class="news-list">${news.map(n=>newsRow(n)).join("")}</div></div></section>`;
}

function newsRow(n){
 return `<article class="news-row"><div class="thumb" style="background-image:url('${n[2]}')"></div><div><h3>${n[0]}</h3><p>Grand Galaxy City · Informasi terbaru kawasan dan hunian.</p></div><span class="date">${n[1]}</span></article>`;
}

function eventPage(){
 return `${hero("Event Terdekat","Jangan lewatkan berbagai aktivitas, festival, dan kegiatan keluarga di Grand Galaxy City.",IMG.city,true)}
 <section class="section"><div class="container"><div class="event-list">${events.map(eventRow).join("")}</div></div></section>`;
}
function eventRow(e){
 return `<article class="event"><div class="event-date"><b>${e[0]}</b><span>${e[1]}</span></div><div><h3>${e[2]}</h3><p>${e[3]} · ${e[4]}</p></div><button class="btn btn-dark" onclick="showToast('Event disimpan ke agenda')">Lihat Detail</button></article>`;
}

function contact(){
 return `${hero("Hubungi Kami","Kami siap membantu Anda mendapatkan informasi mengenai hunian, cluster, fasilitas, dan kawasan.",IMG.modern,true)}
 <section class="section"><div class="container"><div class="grid-2"><div class="contact-info">
 ${[["📍","Alamat","Grand Galaxy City, Bekasi Selatan, Jawa Barat"],["☎","Telepon","021 1234 5678"],["✉","Email","info@grandgalaxycity.id"],["◷","Jam Operasional","Senin–Minggu, 09.00–18.00 WIB"]].map(x=>`<div class="contact-item"><div class="facility-icon" style="margin:0">${x[0]}</div><div><b>${x[1]}</b><span>${x[2]}</span></div></div>`).join("")}
 </div><div class="card" style="padding:22px"><form onsubmit="submitContact(event)"><div class="form-grid"><div class="field"><label>Nama Lengkap</label><input required placeholder="Nama Anda"></div><div class="field"><label>Email</label><input required type="email" placeholder="email@contoh.com"></div><div class="field"><label>Subjek</label><input required placeholder="Keperluan Anda"></div><div class="field"><label>Cluster</label><select><option>Cluster Galaxy</option><option>Cluster Aralia</option><option>Cluster Cattleya</option><option>Belum tahu</option></select></div><div class="field full"><label>Pesan</label><textarea required placeholder="Tulis pertanyaan Anda..."></textarea></div><div class="field full"><button class="btn btn-dark" type="submit">Kirim Pesan</button></div></div></form></div></div></div></section>
 <section class="section compact"><div class="container"><div class="map-box"></div></div></section>`;
}

function article(){
 return `${hero("Tips Memilih Hunian untuk Keluarga","Panduan singkat agar proses memilih rumah menjadi lebih terarah.",IMG.house,true)}
 <section class="section"><div class="container article"><div class="breadcrumb">Beranda › Tips › Artikel</div><h2>Mulai dari Kebutuhan, Bukan Sekadar Tampilan</h2><p>Memilih rumah adalah keputusan penting. Tentukan lebih dahulu kebutuhan keluarga, jumlah ruang, aktivitas harian, dan akses yang paling sering digunakan.</p><p>Selanjutnya, perhatikan lingkungan sekitar. Kedekatan dengan sekolah, pusat belanja, ruang terbuka, fasilitas kesehatan, dan akses transportasi dapat membuat rutinitas menjadi jauh lebih praktis.</p><p>Terakhir, bandingkan beberapa pilihan berdasarkan luas, desain, fasilitas, dan rencana keuangan. Dengan begitu, rumah yang dipilih bukan hanya terlihat menarik, tetapi juga nyaman untuk ditempati dalam jangka panjang.</p><a class="btn btn-dark" href="#/tips">← Kembali ke Tips</a></div></section>`;
}

function notFound(){
 return `<main><section class="empty section"><div><div class="empty-icon">🪧</div><h1>404</h1><h2>Halaman Tidak Ditemukan</h2><p>Maaf, halaman yang Anda cari tidak tersedia atau alamatnya sudah berubah.</p><a class="btn btn-dark" href="#/">Kembali ke Beranda</a></div></section></main>`;
}
function comingSoon(){
 return `<main><section class="empty section"><div><div class="empty-icon">✈️</div><h2 style="font-family:'Playfair Display';font-size:35px;color:var(--navy)">Segera Hadir</h2><p>Halaman ini sedang dalam pengembangan. Nantikan informasi terbaru dari kami.</p><a class="btn btn-dark" href="#/">Kembali ke Beranda</a></div></section></main>`;
}

const routes={
 "/":home,"/tentang":about,"/kawasan":kawasan,"/cluster":clusterDetail,"/fasilitas":fasilitas,
 "/tips":tipsPage,"/galeri":galleryPage,"/berita":berita,"/event":eventPage,"/kontak":contact,
 "/artikel":article,"/coming-soon":comingSoon
};

function render(){
 const path=location.hash.replace("#","")||"/";
 const page=routes[path]||notFound;
 document.getElementById("app").innerHTML=nav()+page()+footer();
 document.querySelectorAll("[data-route]").forEach(a=>a.classList.toggle("active",a.getAttribute("href")===`#${path}`));
 window.scrollTo(0,0);
 document.getElementById("navLinks")?.classList.remove("open");
}
function toggleMenu(){document.getElementById("navLinks").classList.toggle("open")}
function showToast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
function submitContact(e){e.preventDefault();e.target.reset();showToast("Pesan berhasil dikirim. Terima kasih!")}
function filterClusters(type,el){
 document.querySelectorAll(".pills .pill").forEach(x=>x.classList.remove("active"));el.classList.add("active");
 const list=type==="all"?clusters:(type==="premium"?clusters.slice(2):clusters.slice(0,4));
 document.getElementById("clusterGrid").innerHTML=list.map(clusterCard).join("");
}
window.addEventListener("hashchange",render); window.addEventListener("DOMContentLoaded",render);
