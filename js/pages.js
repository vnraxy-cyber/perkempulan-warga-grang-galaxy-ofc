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
 <section class="section info-section"><div class="container"><div class="info-grid"><div class="info-col"><div class="section-head"><div><div class="kicker">Berita & Promo</div><h2>Info Terbaru</h2></div><a class="link-btn" href="#/update">Lihat semua →</a></div><div class="news-list">${news.slice(0,2).map(n=>newsRow(n)).join("")}</div></div><div class="info-col"><div class="section-head"><div><div class="kicker">Event Terdekat</div><h2>Festival Kawasan</h2></div><a class="link-btn" href="#/update">Lihat semua →</a></div><div class="event-list">${events.slice(0,3).map(eventRow).join("")}</div></div></div></div></section>
 </main>`;
}

function kawasan(){
 tenantCat="Semua";
 return `${hero("Tenant Kawasan","Temukan berbagai tenant dan usaha pilihan di kawasan Ruko Grand Galaxy City, Bekasi Selatan.",REAL.tenant,true)}
 <section class="section"><div class="container"><form class="tenant-search" role="search" onsubmit="event.preventDefault();searchTenants()"><i class="fa-solid fa-magnifying-glass"></i><input id="tenantSearch" type="search" placeholder="Cari nama tenant, produk, atau lokasi..." aria-label="Cari tenant" oninput="searchTenants()" autocomplete="off"><button type="submit" class="tenant-search-btn">Cari</button></form><div class="pills">${tenantCategories.map((c,i)=>`<button class="pill ${i===0?'active':''}" onclick="filterTenants('${c}',this)">${c}</button>`).join("")}</div><div id="tenantGrid" class="tenant-scroll">${tenants.map(tenantCard).join("")}</div><p id="tenantEmpty" class="tenant-empty" hidden>Tenant tidak ditemukan. Coba kata kunci atau kategori lain.</p><p class="scroll-hint">← Geser untuk melihat tenant lainnya →</p></div></section>
 <section class="section compact"><div class="container"><div class="section-head"><div><div class="kicker">Peta Kawasan</div><h2>Lokasi Strategis</h2></div><a class="link-btn" href="${MAP_LINK}" target="_blank" rel="noopener">Buka di Google Maps →</a></div>${mapEmbed('Peta Lokasi Grand Galaxy City')}</div></section>`;
}

function fasilitas(){
 return `${hero("Fasilitas Kawasan","Dilengkapi berbagai fasilitas modern untuk menunjang kebutuhan keluarga.",REAL.fasilitas,true)}
 <section class="section"><div class="container"><div class="pills">${facilityCategories.map((c,i)=>`<button class="pill ${i===0?'active':''}" onclick="filterFacilities('${c}',this)">${c}</button>`).join("")}</div>
 <div class="facility-scroll" id="facilityScroll">${facilities.map(([i,t,p,img])=>`<div class="facility-slide" style="background-image:linear-gradient(180deg,rgba(19,28,27,0) 38%,rgba(19,28,27,.92) 100%),url('${img}')"><span class="facility-slide-icon"><i class="${i}"></i></span><span class="facility-slide-eyebrow">FASILITAS</span><h3>${t}</h3><p>${p}</p></div>`).join("")}</div>
 <p class="scroll-hint">← Geser untuk melihat fasilitas lainnya →</p>
 </div></section>`;
}

function updatePage(){
 newsCat="Semua";newsSortOrder="terbaru";eventSortOrder="terbaru";
 const [first,...rest]=sortNewsList(news,"terbaru");
 return `${hero("Update","Berita, promo, dan event terbaru seputar kawasan Grand Galaxy City dalam satu tempat.",REAL.danau,true)}
 <section class="section"><div class="container">
 <div class="section-head"><div><div class="kicker">Berita & Promo</div><h2>Kabar Terbaru</h2></div></div>
 <div class="berita-controls">
  <div class="pills"><button class="pill active" onclick="filterNews('Semua',this)">Semua</button><button class="pill" onclick="filterNews('Berita',this)">Berita</button><button class="pill" onclick="filterNews('Promo',this)">Promo</button><button class="pill" onclick="filterNews('Event',this)">Kegiatan Warga</button><button class="pill" onclick="filterNews('Jasa',this)">Jasa</button></div>
  <div class="sort-toggle"><span class="sort-label">Urutkan</span><button class="sort-btn active" onclick="sortNews('terbaru',this)"><i class="fa-solid fa-arrow-down-wide-short"></i> Terbaru</button><button class="sort-btn" onclick="sortNews('terlama',this)"><i class="fa-solid fa-arrow-up-wide-short"></i> Terlama</button></div>
 </div>
 ${newsFeaturedHTML(first)}
 <div id="newsGrid" class="news-list">${rest.map(n=>newsRow(n)).join("")}</div></div></section>
 <section class="section compact"><div class="container">
 <div class="section-head"><div><div class="kicker">Event Terdekat</div><h2>Agenda Kawasan</h2></div>
 <div class="sort-toggle event-sort"><span class="sort-label">Urutkan</span><button class="sort-btn active" onclick="sortEvents('terbaru',this)"><i class="fa-solid fa-arrow-down-wide-short"></i> Terbaru</button><button class="sort-btn" onclick="sortEvents('terlama',this)"><i class="fa-solid fa-arrow-up-wide-short"></i> Terlama</button></div></div>
 <div id="eventGrid" class="event-list">${sortEventsList(events,"terbaru").map(eventRow).join("")}</div></div></section>`;
}

function merchPage(){
 const m=merchProduct;
 merchSize="";merchQty=1;
 return `${hero("Merchandise","Seluruh keuntungan penjualan akan masuk ke kas perkumpulan.",REAL.tenant,true)}
 <section class="section"><div class="container"><div class="merch-product">
  <div class="merch-gallery">
   <div class="merch-main"><img id="merchMain" src="${m.foto[0][0]}" alt="${m.nama} — ${m.foto[0][1]}"></div>
   <div class="merch-thumbs">${m.foto.map(([src,label],i)=>`<button class="merch-thumb ${i===0?'active':''}" onclick="merchPhoto(${i},this)" aria-label="Lihat foto ${label}"><img src="${src}" alt="" loading="lazy"><span>${label}</span></button>`).join("")}</div>
  </div>
  <div class="merch-detail">
   <div class="kicker">Merchandise Resmi</div>
   <h2>${m.nama}</h2>
   <div class="merch-price">${m.harga}</div>
   <p class="merch-lead">${m.desc}</p>
   <ul class="merch-features">${m.fitur.map(f=>`<li><i class="fa-solid fa-check"></i> ${f}</li>`).join("")}</ul>
   <div class="merch-opt"><div class="merch-opt-label">Warna <b>${m.warna}</b></div><span class="merch-swatch" style="background:${m.warnaHex}" title="${m.warna}"></span></div>
   <div class="merch-opt"><div class="merch-opt-label">Ukuran <b id="merchSizeLabel">Pilih ukuran</b><a href="#merchSizeChart" onclick="event.preventDefault();document.getElementById('merchSizeChart').scrollIntoView({behavior:'smooth',block:'center'})">Panduan ukuran</a></div>
    <div class="merch-sizes">${m.ukuran.map(u=>`<button class="merch-size" onclick="merchPickSize('${u}',this)">${u}</button>`).join("")}</div>
   </div>
   <div class="merch-opt"><div class="merch-opt-label">Jumlah</div>
    <div class="merch-qty"><button onclick="merchStep(-1)" aria-label="Kurangi jumlah"><i class="fa-solid fa-minus"></i></button><span id="merchQty">1</span><button onclick="merchStep(1)" aria-label="Tambah jumlah"><i class="fa-solid fa-plus"></i></button></div>
   </div>
   <button class="btn btn-primary merch-buy" onclick="orderMerch()"><i class="fa-brands fa-whatsapp"></i> Pesan Sekarang via WhatsApp</button>
   <p class="merch-hint"><i class="fa-solid fa-circle-info"></i> Pesanan dikirim ke WhatsApp admin perkumpulan (+${MERCH_WA}) untuk konfirmasi stok dan pembayaran.</p>
  </div>
 </div></div></section>
 <section class="section compact"><div class="container"><div class="grid-2 merch-info">
  <div class="card merch-panel"><div class="kicker">Cara Pemesanan</div><h2>Pesan dalam 4 Langkah</h2><ol class="merch-steps">${[["Pilih ukuran & jumlah","Cek panduan ukuran agar polo pas di badan."],["Klik Pesan Sekarang","WhatsApp terbuka otomatis dengan detail pesanan Anda."],["Konfirmasi dengan admin","Admin akan mengonfirmasi ketersediaan stok dan cara pembayaran."],["Terima pesanan","Atur pengambilan atau pengiriman langsung dengan admin."]].map(([a,b])=>`<li><b>${a}</b><span>${b}</span></li>`).join("")}</ol></div>
  <div class="card merch-panel" id="merchSizeChart"><div class="kicker">Panduan Ukuran</div><h2>T-Shirt & Polo Shirt</h2><div class="merch-table-wrap"><table class="merch-table"><thead><tr><th>Ukuran</th><th>Panjang Badan</th><th>Lebar Dada</th><th>Panjang Lengan</th></tr></thead><tbody>${[["S","63","45","19"],["M","64","48","20"],["L","69","52","21"],["XL","70","55","22"],["XXL (2XL)","74","58","23"],["XXXL (3XL)","77","61","24"],["XXXXL (4XL)","78","63","25"]].map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div><p class="merch-note">Ukuran dalam cm, toleransi 1–2 cm.</p></div>
 </div></div></section>
 <section class="section compact"><div class="container"><div class="section-head"><div><div class="kicker">FAQ</div><h2>Pertanyaan Umum</h2></div></div><div class="merch-faq">${[["Apakah bisa pesan dalam jumlah banyak?","Bisa. Untuk pemesanan kolektif (komunitas, acara, atau kantor), sampaikan jumlah dan ukurannya ke admin melalui WhatsApp."],["Berapa lama proses pesanan?","Admin akan menginformasikan ketersediaan stok dan estimasi waktu saat mengonfirmasi pesanan Anda."],["Bagaimana cara pembayarannya?","Metode pembayaran akan diinformasikan oleh admin saat konfirmasi pesanan."],["Apakah bisa dikirim?","Bisa diambil langsung atau dikirim. Detail pengiriman dan ongkos kirim diatur bersama admin."]].map(([q,a])=>`<details class="merch-q"><summary>${q}<i class="fa-solid fa-chevron-down"></i></summary><p>${a}</p></details>`).join("")}</div></div></section>
 <section class="section compact"><div class="container"><div class="cta"><div class="kicker">Ada Pertanyaan?</div><h2>Tanya Soal Merchandise</h2><p>Admin kami siap membantu soal stok, ukuran, dan pemesanan kolektif.</p><div class="actions"><a class="btn btn-primary" href="https://wa.me/${MERCH_WA}?text=${encodeURIComponent("Halo Admin, saya ingin bertanya tentang merchandise Perkumpulan Warga Ruko Grand Galaxy City.")}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Chat Admin</a><a class="btn btn-outline" href="#/kontak">Hubungi Kami</a></div></div></div></section>`;
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
  ["Halaman Utama",[["Beranda","#/"],["Kawasan","#/kawasan"],["Sewa & Jual","#/sewa-jual"],["Fasilitas","#/fasilitas"],["Merchandise","#/merch"]]],
  ["Informasi",[["Update (Berita, Promo & Event)","#/update"]]],
  ["Akun",[["Masuk","#/login"],["Daftar","#/register"]]],
  ["Lainnya",[["Kontak","#/kontak"],["Struktur Situs","#/struktur"]]]
 ];
 return `${hero("Struktur Situs","Peta seluruh halaman yang tersedia di website Grand Galaxy City.",REAL.jalanKawasan,true)}
 <section class="section"><div class="container"><div class="grid-2">${groups.map(([g,links])=>`<div class="card sitemap-group"><h3>${g}</h3><ul>${links.map(([t,h])=>`<li><a href="${h}">${t}</a></li>`).join("")}</ul></div>`).join("")}</div></div></section>`;
}

function notFound(){
 return `<main><section class="empty section"><div><div class="empty-icon"><i class="fa-solid fa-signs-post"></i></div><h1>404</h1><h2>Halaman Tidak Ditemukan</h2><p>Maaf, halaman yang Anda cari tidak tersedia atau alamatnya sudah berubah.</p><a class="btn btn-dark" href="#/">Kembali ke Beranda</a></div></section></main>`;
}
function comingSoon(){
 return `<main><section class="empty section"><div><div class="empty-icon"><i class="fa-solid fa-paper-plane"></i></div><h2 style="font-family:'Cormorant Garamond',serif;font-size:35px;color:var(--navy)">Segera Hadir</h2><p>Halaman ini sedang dalam pengembangan. Nantikan informasi terbaru dari kami.</p><a class="btn btn-dark" href="#/">Kembali ke Beranda</a></div></section></main>`;
}

const routes={
 "/":home,"/kawasan":kawasan,"/sewa-jual":sewaJual,"/fasilitas":fasilitas,
 "/update":updatePage,"/merch":merchPage,"/kontak":contact,
 "/login":loginPage,"/register":registerPage,"/struktur":struktur,
 "/coming-soon":comingSoon
};
