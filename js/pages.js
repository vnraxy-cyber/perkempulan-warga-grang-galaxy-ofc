function home(){
 return `${hero("Grand Galaxy City<br>Bekasi Selatan","Hunian nyaman, lingkungan asri, dan fasilitas lengkap untuk keluarga yang ingin hidup lebih baik.",REAL.gate)}
 <main>
 <div class="container"><div class="stats">
  <div class="stat-card card"><div class="stat-value">500+ Ha</div><div class="stat-label">Kawasan Terpadu</div></div>
  <div class="stat-card card"><div class="stat-value">24 Jam</div><div class="stat-label">Keamanan Kawasan</div></div>
  <div class="stat-card card"><div class="stat-value">20+</div><div class="stat-label">Fasilitas</div></div>
  <div class="stat-card card"><div class="stat-value">Strategis</div><div class="stat-label">Bekasi Selatan</div></div>
 </div></div>
 <section class="section promo-section"><div class="container">${promoBoxes()}</div></section>
 <section class="section"><div class="container"><div class="section-head"><div><h2>Tenant</h2></div><a class="link-btn" href="#/kawasan">Lihat semua →</a></div>
  <div class="grid-4">${tenants.slice(0,4).map(tenantCard).join("")}</div>
 </div></section>
 <section class="section compact"><div class="container"><div class="cta"><div class="kicker">Temukan Tenant</div><h2>Temukan Tenant Pilihan Anda<br>di Grand Galaxy City</h2><p>Pilih tenant yang sesuai dengan kebutuhan bisnis dan gaya hidup Anda.</p><div class="actions"><a class="btn btn-primary" href="#/kawasan">Jelajahi Kawasan</a><a class="btn btn-outline" href="#/kontak">Hubungi Kami</a></div></div></div></section>
 <section class="section area-section"><div class="container"><div class="section-head"><div><div class="kicker">Kawasan Kami</div><h2>Semua yang Anda Butuhkan</h2></div><a class="link-btn" href="#/kawasan">Lihat detail →</a></div><div class="area-grid">${mapEmbed('Peta Grand Galaxy City')}<div class="area-gallery">${facilities.slice(0,4).map(facilityTile).join("")}</div></div></div></section>
 <section class="section compact"><div class="container"><div class="section-head"><div><div class="kicker">Galeri</div><h2>Suasana Grand Galaxy City</h2></div><a class="link-btn" href="#/galeri">Lihat semua →</a></div><div class="gallery">${[REAL.gate,REAL.clusterStreet,REAL.taman,REAL.mallEntrance,REAL.danau].map((x,i)=>`<div class="g ${i===0?'tall':''}" style="background-image:url('${x}')"></div>`).join("")}</div></div></section>
 <section class="section info-section"><div class="container"><div class="info-grid"><div class="info-col"><div class="section-head"><div><div class="kicker">Berita & Promo</div><h2>Info Terbaru</h2></div></div><div class="news-list">${news.slice(0,2).map(n=>newsRow(n)).join("")}</div></div><div class="info-col"><div class="section-head"><div><div class="kicker">Event Terdekat</div><h2>Festival Kawasan</h2></div></div><div class="event-list">${events.slice(0,3).map(eventRow).join("")}</div></div></div></div></section>
 </main>`;
}

function about(){
 return `${hero("Tentang Kami","Mengenal Grand Galaxy City lebih dekat — kawasan yang dirancang untuk menghadirkan kehidupan modern dan nyaman.",REAL.tentangKami,true)}
 <div class="container"><div class="stats about-stats-float">${[["500+ Ha","Total Kawasan"],["50+","Tenant Usaha"],["20+","Titik Fasilitas"],["10K+","Keluarga Bergabung"]].map(([a,b],i)=>`<div class="stat-card card reveal" style="animation-delay:${i*80}ms"><span class="stat-value">${a}</span><span class="stat-label">${b}</span></div>`).join("")}</div></div>
 <section class="section"><div class="container"><div class="grid-2"><div class="copy reveal"><div class="kicker"><span class="kicker-rule"></span>Sejarah Grand Galaxy City</div><h2>Ruang Hidup yang Tumbuh Bersama Keluarga</h2><div class="copy-accent"><p>Grand Galaxy City merupakan kawasan terpadu di Bekasi Selatan yang menggabungkan hunian, ruang komersial, fasilitas pendidikan, rekreasi, dan ruang terbuka hijau.</p><p>Dengan perencanaan kawasan yang matang, setiap area dirancang agar aktivitas sehari-hari menjadi lebih mudah dan menyenangkan.</p></div><a class="link-btn about-link" href="#/kawasan">Jelajahi Kawasan Kami →</a></div><div class="collage reveal" style="animation-delay:120ms"><div class="collage-a" style="background-image:url('${REAL.gate}')"></div><div class="collage-b" style="background-image:url('${REAL.clusterExterior}')"></div><div class="collage-c" style="background-image:url('${REAL.taman}')"></div><div class="collage-badge"><strong>2016</strong><span>Sejak Berdiri</span></div></div></div></div></section>
 <section class="section compact quote-band"><div class="container"><blockquote class="pull-quote reveal">Grand Galaxy City dibangun bukan sekadar sebagai tempat tinggal, melainkan ruang tumbuh bagi setiap keluarga yang memilihnya.<cite>Pengelola Kawasan Grand Galaxy City</cite></blockquote></div></section>
 <section class="section compact dark-band"><div class="container"><div class="section-head"><div><div class="kicker"><span class="kicker-rule"></span>Perjalanan Kami</div><h2>Tumbuh Bersama Bekasi Selatan</h2></div></div><div class="timeline">${[["2016","Peletakan Batu Pertama","Grand Galaxy City mulai dibangun sebagai kawasan hunian terpadu."],["2019","Fasilitas Utama Rampung","Grand Galaxy Mall dan area komersial resmi beroperasi."],["2022","Ekspansi Kawasan","Penambahan area ruko dan tenant usaha baru dengan konsep modern."],["2026","Kawasan Matang","Ribuan keluarga menetap dengan fasilitas lengkap dan lingkungan asri."]].map(([y,t,d],i)=>`<div class="timeline-item reveal" style="animation-delay:${i*100}ms"><div class="timeline-year">${y}</div><h3>${t}</h3><p>${d}</p></div>`).join("")}</div></div></section>
 <section class="section compact"><div class="container"><div class="section-head"><div><div class="kicker"><span class="kicker-rule"></span>Fondasi Kami</div><h2>Visi, Misi & Nilai</h2></div></div><div class="manifesto">${[["01","assets/icon/visi.png","Visi Kami","Membangun lingkungan hidup yang nyaman dan berkelanjutan."],["02","assets/icon/mission.png","Misi Kami","Menghadirkan hunian dan fasilitas yang mendukung kualitas hidup."],["03","assets/icon/profit.png","Nilai Kami","Kenyamanan, keamanan, kebersamaan, dan pertumbuhan."]].map(([num,icon,a,b],idx)=>`<div class="manifesto-item reveal" data-num="${num}" style="animation-delay:${idx*100}ms"><span class="manifesto-num">${num}</span><span class="manifesto-icon">${iconBox(icon)}</span><h3>${a}</h3><p>${b}</p></div>`).join("")}</div></div></section>
 <section class="section dark-band"><div class="container"><div class="section-head"><div><div class="kicker"><span class="kicker-rule"></span>Komitmen Kami</div><h2>Kawasan untuk Hidup Lebih Baik</h2></div></div><div class="commitment-list">${[["assets/icon/climate.png","Lingkungan Asri","Ruang hijau dan udara segar yang terjaga di setiap sudut kawasan."],["fa-solid fa-shield-halved","Keamanan Terintegrasi","Sistem keamanan 24 jam dengan CCTV dan petugas berpengalaman."],["assets/icon/rest-area.png","Fasilitas Lengkap","Beragam fasilitas modern yang mendukung aktivitas sehari-hari."],["assets/icon/growth.png","Pertumbuhan Berkelanjutan","Pengembangan kawasan yang terus meningkatkan nilai investasi."]].map(([i,a,b],idx)=>`<div class="commitment-row reveal" data-num="${String(idx+1).padStart(2,"0")}" style="animation-delay:${idx*80}ms"><span class="commitment-index">${String(idx+1).padStart(2,"0")}</span><span class="commitment-icon">${iconBox(i)}</span><div class="commitment-text"><h3>${a}</h3><p>${b}</p></div><i class="fa-solid fa-arrow-right commitment-arrow"></i></div>`).join("")}</div></div></section>
 <section class="section compact"><div class="container"><div class="cta reveal"><h2>Bersama Membangun Masa Depan</h2><p>Temukan alasan mengapa banyak keluarga memilih Grand Galaxy City.</p><a class="btn btn-primary" href="#/kawasan">Jelajahi Kawasan</a></div></div></section>`;
}

function kawasan(){
 return `${hero("Tenant Kawasan","Temukan berbagai tenant dan usaha pilihan di kawasan Ruko Grand Galaxy City, Bekasi Selatan.",REAL.tenant,true)}
 <section class="section"><div class="container"><div class="pills">${tenantCategories.map((c,i)=>`<button class="pill ${i===0?'active':''}" onclick="filterTenants('${c}',this)">${c}</button>`).join("")}</div><div id="tenantGrid" class="tenant-scroll">${tenants.map(tenantCard).join("")}</div><p class="scroll-hint">← Geser untuk melihat tenant lainnya →</p></div></section>
 <section class="section compact"><div class="container"><div class="section-head"><div><div class="kicker">Peta Kawasan</div><h2>Lokasi Strategis</h2></div><a class="link-btn" href="${MAP_LINK}" target="_blank" rel="noopener">Buka di Google Maps →</a></div>${mapEmbed('Peta Lokasi Grand Galaxy City')}</div></section>`;
}

function fasilitas(){
 return `${hero("Fasilitas Kawasan","Dilengkapi berbagai fasilitas modern untuk menunjang kebutuhan keluarga.",REAL.fasilitas,true)}
 <section class="section"><div class="container"><div class="pills">${facilityCategories.map((c,i)=>`<button class="pill ${i===0?'active':''}" onclick="filterFacilities('${c}',this)">${c}</button>`).join("")}</div>
 <div class="facility-scroll" id="facilityScroll">${facilities.map(([i,t,p,img])=>`<div class="facility-slide" style="background-image:linear-gradient(180deg,rgba(19,28,27,0) 38%,rgba(19,28,27,.92) 100%),url('${img}')"><span class="facility-slide-icon"><i class="${i}"></i></span><span class="facility-slide-eyebrow">FASILITAS</span><h3>${t}</h3><p>${p}</p></div>`).join("")}</div>
 <p class="scroll-hint">← Geser untuk melihat fasilitas lainnya →</p>
 </div></section>`;
}

function tipsPage(){
 const [first,...rest]=tips;
 return `${hero("Tips & Informasi Hunian","Panduan dan informasi bermanfaat seputar rumah, kawasan, dan gaya hidup keluarga.",REAL.tips,true)}
 <section class="section"><div class="container">
  <a class="tip-featured" href="#/artikel" style="background-image:linear-gradient(90deg,rgba(19,28,27,.86),rgba(19,28,27,.18)),url('${first[2]}')"><span class="tip-tag">${first[3]}</span><h2>${first[0]}</h2><p>${first[1]}</p><span class="link-btn" style="color:#fff">Baca Selengkapnya →</span></a>
  <div class="grid-3 tip-grid">${rest.map(t=>`<a class="card image-card tip-card" href="#/artikel"><div class="pic" style="background-image:url('${t[2]}')"><span class="tip-tag tip-tag-card">${t[3]}</span></div><div class="body"><h3>${t[0]}</h3><p>${t[1]}</p><span class="link-btn">Baca Selengkapnya →</span></div></a>`).join("")}</div>
 </div></section>`;
}

function galleryPage(){
 return `${hero("Galeri","Lihat berbagai suasana hunian, fasilitas, ruang hijau, dan aktivitas di Grand Galaxy City.",REAL.gate,true)}
 <section class="section"><div class="container"><div class="pills">${galleryCategories.map((c,i)=>`<button class="pill ${i===0?'active':''}" onclick="filterGallery('${c}',this)">${c}</button>`).join("")}</div><div id="galleryGrid" class="gallery">${galleryImages.map(galleryItem).join("")}</div></div></section>`;
}

function berita(){
 if(typeof newsCat!=="undefined"){newsCat="Semua";newsSortOrder="terbaru";}
 const [first,...rest]=sortNewsList(news,"terbaru");
 return `${hero("Berita & Promo","Informasi terbaru mengenai Grand Galaxy City, promo hunian, fasilitas, dan aktivitas kawasan.",REAL.danau,true)}
 <section class="section"><div class="container">
 <div class="berita-controls">
  <div class="pills"><button class="pill active" onclick="filterNews('Semua',this)">Semua</button><button class="pill" onclick="filterNews('Berita',this)">Berita</button><button class="pill" onclick="filterNews('Promo',this)">Promo</button><button class="pill" onclick="filterNews('Event',this)">Event</button><button class="pill" onclick="filterNews('Jasa',this)">Jasa</button></div>
  <div class="sort-toggle"><span class="sort-label">Urutkan</span><button class="sort-btn active" onclick="sortNews('terbaru',this)"><i class="fa-solid fa-arrow-down-wide-short"></i> Terbaru</button><button class="sort-btn" onclick="sortNews('terlama',this)"><i class="fa-solid fa-arrow-up-wide-short"></i> Terlama</button></div>
 </div>
 ${newsFeaturedHTML(first)}
 <div id="newsGrid" class="news-list">${rest.map(n=>newsRow(n)).join("")}</div></div></section>`;
}

function eventPage(){
 if(typeof eventSortOrder!=="undefined"){eventSortOrder="terbaru";}
 const sorted = sortEventsList(events,"terbaru");
 return `${hero("Event Terdekat","Jangan lewatkan berbagai aktivitas, festival, dan kegiatan keluarga di Grand Galaxy City.",REAL.event,true)}
 <section class="section"><div class="container">
 <div class="sort-toggle event-sort"><span class="sort-label">Urutkan</span><button class="sort-btn active" onclick="sortEvents('terbaru',this)"><i class="fa-solid fa-arrow-down-wide-short"></i> Terbaru</button><button class="sort-btn" onclick="sortEvents('terlama',this)"><i class="fa-solid fa-arrow-up-wide-short"></i> Terlama</button></div>
 <div id="eventGrid" class="event-list">${sorted.map(eventRow).join("")}</div></div></section>`;
}

function contact(){
 return `${hero("Hubungi Kami","Kami siap membantu Anda mendapatkan informasi mengenai hunian, fasilitas, dan kawasan.",REAL.hubung,true)}
 <section class="section"><div class="container"><div class="grid-2"><div class="contact-info">
 ${[["fa-solid fa-location-dot","Alamat","Grand Galaxy City, Bekasi Selatan, Jawa Barat"],["fa-solid fa-phone","Telepon","021 1234 5678"],["fa-solid fa-envelope","Email","info@grandgalaxycity.id"],["fa-solid fa-clock","Jam Operasional","Senin–Minggu, 09.00–18.00 WIB"]].map(x=>`<div class="contact-item"><div class="facility-icon" style="margin:0"><i class="${x[0]}"></i></div><div><b>${x[1]}</b><span>${x[2]}</span></div></div>`).join("")}
 </div><div class="card" style="padding:22px"><form onsubmit="submitContact(event)"><div class="form-grid"><div class="field"><label>Nama Lengkap</label><input required placeholder="Nama Anda"></div><div class="field"><label>Email</label><input required type="email" placeholder="email@contoh.com"></div><div class="field full"><label>Subjek</label><input required placeholder="Keperluan Anda"></div><div class="field full"><label>Pesan</label><textarea required placeholder="Tulis pertanyaan Anda..."></textarea></div><div class="field full"><button class="btn btn-dark" type="submit">Kirim Pesan</button></div></div></form></div></div></div></section>
 <section class="section compact"><div class="container"><div class="section-head"><div><div class="kicker">Lokasi</div><h2>Temukan Kami di Peta</h2></div><a class="link-btn" href="${MAP_LINK}" target="_blank" rel="noopener">Buka di Google Maps →</a></div>${mapEmbed('Peta Lokasi Kontak Grand Galaxy City')}</div></section>`;
}

function sewaJual(){
 return `${hero("Sewa & Jual Ruko","Temukan unit ruko yang disewakan maupun dijual langsung dari pemilik di kawasan Grand Galaxy City.",REAL.tenant,true)}
 <section class="section"><div class="container"><div class="grid-3">${listings.map(listingCard).join("")}</div></div></section>`;
}

function loginPage(){
 return `<main><section class="auth-shell"><div class="container"><div class="auth-card card">
  <div class="kicker">Grand Galaxy City</div>
  <h2>Masuk ke Akun</h2>
  <p class="auth-sub">Silakan masuk menggunakan email dan kata sandi Anda.</p>
  <form onsubmit="submitLogin(event)" class="auth-form">
   <div class="field"><label>Email</label><input required type="email" placeholder="email@contoh.com"></div>
   <div class="field"><label>Kata Sandi</label><input required type="password" placeholder="Kata sandi Anda"></div>
   <button class="btn btn-dark auth-submit" type="submit">Masuk</button>
  </form>
  <p class="auth-switch">Belum punya akun? <a href="#/register">Daftar di sini</a></p>
 </div></div></section></main>`;
}

function registerPage(){
 return `<main><section class="auth-shell"><div class="container"><div class="auth-card card">
  <div class="kicker">Grand Galaxy City</div>
  <h2>Buat Akun Baru</h2>
  <p class="auth-sub">Lengkapi data di bawah ini untuk mendaftar.</p>
  <form onsubmit="submitRegister(event)" class="auth-form">
   <div class="field"><label>Nama Lengkap</label><input required placeholder="Nama Anda"></div>
   <div class="field"><label>No. Telepon</label><input required placeholder="08xxxxxxxxxx"></div>
   <div class="field"><label>Email</label><input required type="email" placeholder="email@contoh.com"></div>
   <div class="field"><label>Kata Sandi</label><input required type="password" placeholder="Buat kata sandi"></div>
   <div class="field"><label>Konfirmasi Kata Sandi</label><input required type="password" placeholder="Ulangi kata sandi"></div>
   <button class="btn btn-dark auth-submit" type="submit">Daftar</button>
  </form>
  <p class="auth-switch">Sudah punya akun? <a href="#/login">Masuk di sini</a></p>
 </div></div></section></main>`;
}

function struktur(){
 const groups=[
  ["Halaman Utama",[["Beranda","#/"],["Tentang Kami","#/tentang"],["Kawasan","#/kawasan"],["Sewa & Jual","#/sewa-jual"],["Fasilitas","#/fasilitas"]]],
  ["Informasi",[["Tips Hunian","#/tips"],["Galeri","#/galeri"],["Berita & Promo","#/berita"],["Event","#/event"]]],
  ["Akun",[["Masuk","#/login"],["Daftar","#/register"]]],
  ["Lainnya",[["Kontak","#/kontak"],["Struktur Situs","#/struktur"]]]
 ];
 return `${hero("Struktur Situs","Peta seluruh halaman yang tersedia di website Grand Galaxy City.",REAL.jalanKawasan,true)}
 <section class="section"><div class="container"><div class="grid-2">${groups.map(([g,links])=>`<div class="card sitemap-group"><h3>${g}</h3><ul>${links.map(([t,h])=>`<li><a href="${h}">${t}</a></li>`).join("")}</ul></div>`).join("")}</div></div></section>`;
}

function article(){
 return `${hero("Tips Memilih Hunian untuk Keluarga","Panduan singkat agar proses memilih rumah menjadi lebih terarah.",REAL.tips,true)}
 <section class="section"><div class="container article"><div class="breadcrumb">Beranda › Tips › Artikel</div><h2>Mulai dari Kebutuhan, Bukan Sekadar Tampilan</h2><p>Memilih rumah adalah keputusan penting. Tentukan lebih dahulu kebutuhan keluarga, jumlah ruang, aktivitas harian, dan akses yang paling sering digunakan.</p><p>Selanjutnya, perhatikan lingkungan sekitar. Kedekatan dengan sekolah, pusat belanja, ruang terbuka, fasilitas kesehatan, dan akses transportasi dapat membuat rutinitas menjadi jauh lebih praktis.</p><p>Terakhir, bandingkan beberapa pilihan berdasarkan luas, desain, fasilitas, dan rencana keuangan. Dengan begitu, rumah yang dipilih bukan hanya terlihat menarik, tetapi juga nyaman untuk ditempati dalam jangka panjang.</p><a class="btn btn-dark" href="#/tips">← Kembali ke Tips</a></div></section>`;
}

function notFound(){
 return `<main><section class="empty section"><div><div class="empty-icon"><i class="fa-solid fa-signs-post"></i></div><h1>404</h1><h2>Halaman Tidak Ditemukan</h2><p>Maaf, halaman yang Anda cari tidak tersedia atau alamatnya sudah berubah.</p><a class="btn btn-dark" href="#/">Kembali ke Beranda</a></div></section></main>`;
}
function comingSoon(){
 return `<main><section class="empty section"><div><div class="empty-icon"><i class="fa-solid fa-paper-plane"></i></div><h2 style="font-family:'Cormorant Garamond',serif;font-size:35px;color:var(--navy)">Segera Hadir</h2><p>Halaman ini sedang dalam pengembangan. Nantikan informasi terbaru dari kami.</p><a class="btn btn-dark" href="#/">Kembali ke Beranda</a></div></section></main>`;
}

const routes={
 "/":home,"/tentang":about,"/kawasan":kawasan,"/sewa-jual":sewaJual,"/fasilitas":fasilitas,
 "/tips":tipsPage,"/galeri":galleryPage,"/berita":berita,"/event":eventPage,"/kontak":contact,
 "/login":loginPage,"/register":registerPage,"/struktur":struktur,
 "/artikel":article,"/coming-soon":comingSoon
};
