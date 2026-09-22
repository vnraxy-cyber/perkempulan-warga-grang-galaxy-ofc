function nav(){
  return `<div class="topbar"><div class="container">Kawasan hunian terpadu & modern di Bekasi Selatan</div></div>
  <header class="navbar"><div class="container nav-inner">
    <a class="logo" href="#/" aria-label="Grand Galaxy City"><img class="logo-img logo-on-light" src="${LOGO}" alt="Perkumpulan Warga Ruko Grand Galaxy City"><img class="logo-img logo-on-dark" src="${LOGO_LIGHT}" alt="Perkumpulan Warga Ruko Grand Galaxy City"></a>
    <nav class="nav-links" id="navLinks">
      ${[
        ["Beranda","#/"],["Tentang","#/tentang"],["Tenant","#/kawasan"],["Sewa & Jual","#/sewa-jual"],["Fasilitas","#/fasilitas"],
        ["Tips","#/tips"],["Galeri","#/galeri"],["Berita","#/berita"],["Event","#/event"],["Kontak","#/kontak"]
      ].map(([x,y])=>`<a href="${y}" data-route="${y}">${x}</a>`).join("")}
      <div class="nav-links-auth"><a href="#/login" data-route="#/login">Masuk / Daftar</a></div>
    </nav>
    <div class="nav-utility">
      <div class="nav-auth-group">
        <a class="nav-auth-desktop" href="#/login">Masuk</a>
      </div>
      <button class="theme-toggle" onclick="toggleTheme()" aria-label="Ganti mode terang/gelap"><i class="fa-solid fa-moon"></i></button>
      <button class="menu" onclick="toggleMenu()">☰</button>
    </div>
    <a class="nav-cta" href="#/kawasan">Jelajahi Tenant</a>
  </div></header>`;
}

function footer(){
 return `<footer class="footer"><div class="container">
  <div class="footer-grid">
  <div><a class="logo" href="#/" aria-label="Grand Galaxy City"><img class="logo-img" src="${LOGO_LIGHT}" alt="Perkumpulan Warga Ruko Grand Galaxy City"></a><p>Hunian modern, fasilitas lengkap, dan lingkungan yang dirancang untuk kehidupan keluarga yang lebih nyaman.</p></div>
   <div><h3>Menu</h3><a href="#/tentang">Tentang Kami</a><a href="#/kawasan">Kawasan</a><a href="#/sewa-jual">Sewa & Jual</a><a href="#/fasilitas">Fasilitas</a><a href="#/galeri">Galeri</a></div>
   <div><h3>Informasi</h3><a href="#/berita">Berita & Promo</a><a href="#/event">Event</a><a href="#/tips">Tips Hunian</a><a href="#/kontak">Kontak</a><a href="#/struktur">Struktur Situs</a></div>
   <div><h3>Hubungi Kami</h3><p>Grand Galaxy City, Bekasi Selatan<br>Jawa Barat, Indonesia</p><p>021 1234 5678<br>info@grandgalaxycity.id</p></div>
  </div>
  <div class="footer-bottom"><span>© 2026 Grand Galaxy City. All rights reserved.</span><span>Privacy Policy · Terms</span></div>
 </div></footer>`;
}

function promoBox([eyebrow,title,desc,btnText,href,img],i){
 return `<article class="promo-slide" data-index="${i}">
  <div class="promo-bg" style="background-image:url('${img}')"></div>
  <div class="promo-shade"></div>
  <span class="promo-num">${String(i+1).padStart(2,"0")}</span>
  <div class="promo-box-content"><span class="promo-eyebrow">${eyebrow}</span><h3>${title}</h3><p class="promo-desc">${desc}</p><a class="btn btn-primary promo-box-btn" href="${href}">${btnText} <i class="fa-solid fa-arrow-right"></i></a></div>
 </article>`;
}
function promoBoxes(){
 return `<div class="promo-carousel">
  <div class="promo-head">
   <div><div class="promo-kicker"><i class="fa-solid fa-gift"></i> Promo & Penawaran</div><h2>Penawaran Spesial Untuk Anda</h2><p>Promo, event, dan penawaran pilihan dari kawasan Grand Galaxy City. Geser untuk melihat semuanya.</p></div>
   <div class="promo-ctrl"><span class="promo-count"><b>01</b> / ${String(promos.length).padStart(2,"0")}</span>
    <div class="promo-arrows"><button class="promo-arrow" onclick="promoScroll(this,-1)" aria-label="Promo sebelumnya"><i class="fa-solid fa-chevron-left"></i></button><button class="promo-arrow" onclick="promoScroll(this,1)" aria-label="Promo berikutnya"><i class="fa-solid fa-chevron-right"></i></button></div>
   </div>
  </div>
  <div class="promo-track" tabindex="0" aria-label="Daftar promo, geser untuk melihat lainnya">${promos.map(promoBox).join("")}</div>
  <div class="promo-dots">${promos.map((_,i)=>`<button class="promo-dot" onclick="promoGo(this,${i})" aria-label="Promo ${i+1}"></button>`).join("")}</div>
 </div>`;
}

function iconBox(icon){
 return icon.startsWith("assets/")?`<span class="facility-icon-img" style="-webkit-mask-image:url('${icon}');mask-image:url('${icon}')"></span>`:`<i class="${icon}"></i>`;
}

function galleryItem([img],i){
 return `<div class="g zoom ${i===0?'tall':''}" style="background-image:url('${img}')"></div>`;
}

function facilityTile(f){
 return `<div class="facility-tile" style="background-image:url('${f[3]}')"><span class="facility-tile-eyebrow">FASILITAS</span><h3>${f[1]}</h3></div>`;
}

function listingCard([nama,tipe,luas,harga,kontak,foto]){
 const waLink=`https://wa.me/${kontak}?text=${encodeURIComponent('Halo, saya tertarik dengan '+nama+' yang '+tipe.toLowerCase()+'. Apakah masih tersedia?')}`;
 return `<div class="listing-card"><div class="pic" style="background-image:url('${foto}')"><span class="badge listing-badge ${tipe==='Dijual'?'listing-badge-sale':''}">${tipe}</span></div><div class="body"><h3>${nama}</h3><div class="listing-meta"><span><i class="fa-solid fa-ruler-combined"></i> ${luas}</span></div><div class="listing-price">${harga}</div></div><a class="btn btn-dark card-cta-btn" href="${waLink}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Hubungi via WhatsApp</a></div>`;
}

function mapEmbed(title,src=MAP_EMBED){
 return `<div class="map-box map-embed"><iframe src="${src}" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" title="${title||'Peta Lokasi Grand Galaxy City'}"></iframe></div>`;
}

function hero(title, subtitle, image=REAL.gate, small=false){
 return `<section class="hero ${small?'small':''}" style="background-image:linear-gradient(90deg,rgba(2,29,48,.78),rgba(2,29,48,.25)),url('${image}')"><div class="container"><div class="hero-content reveal"><div class="eyebrow">GRAND GALAXY CITY</div><h1>${title}</h1><p>${subtitle}</p></div></div></section>`;
}

function tenantCard(t){
 const [nama,desc,lokasi,kategori,foto] = t;
 const idx = tenants.indexOf(t);
 const badge = Array.isArray(kategori) ? kategori.join(" / ") : kategori;
 const href = `#/tenant/${idx}`;
 const inner = `<div class="pic" style="background-image:url('${foto}')"><span class="badge tenant-badge">${badge}</span></div><div class="body"><h3>${nama}</h3><p>${desc}</p><span class="tenant-loc"><i class="fa-solid fa-location-dot"></i> ${lokasi}</span></div>`;
 return `<div class="tenant-card reveal"><a class="tenant-card-link" href="${href}">${inner}</a><a class="tenant-cta" href="${href}" aria-label="Lihat detail ${nama}"><span>Lihat Detail</span><i class="fa-solid fa-arrow-right"></i></a></div>`;
}

const SOSMED_ICONS = {instagram:"fa-brands fa-instagram", facebook:"fa-brands fa-facebook", tiktok:"fa-brands fa-tiktok"};
const SOSMED_NAMES = {instagram:"Instagram", facebook:"Facebook", tiktok:"TikTok"};

/* Ikon produk dipilih dari kata kunci nama produk/layanan */
const PRODUK_ICONS = [
 [/kopi|coffee|mocktail|non-coffee/i,"fa-mug-hot"],
 [/camilan|snack|roti|kue/i,"fa-cookie-bite"],
 [/nasi|lauk|sambal|catering|prasmanan|kuliner|makan/i,"fa-utensils"],
 [/obat|vitamin|apoteker|kesehatan/i,"fa-pills"],
 [/tiket|pesawat|kereta/i,"fa-ticket"],
 [/tur|wisata|hotel|reservasi/i,"fa-plane-departure"],
 [/buku|alat tulis|perlengkapan sekolah/i,"fa-book-open"],
 [/marketing|seo|digital service/i,"fa-chart-line"],
 [/sertifikasi|sertifikat|bnsp/i,"fa-certificate"],
 [/corporate|training/i,"fa-briefcase"],
 [/bootcamp|kursus|kelas|bimbel|ujian|belajar|programming/i,"fa-graduation-cap"],
 [/konsultasi|office/i,"fa-headset"],
 [/rambut|wajah|kuku|spa|pijat|styling/i,"fa-spa"],
 [/busana|fashion|jahit|aksesoris/i,"fa-shirt"],
 [/smartphone|laptop|elektronik|servis|garansi/i,"fa-laptop"],
 [/cuci|setrika|dry clean|laundry/i,"fa-soap"],
 [/akta|balik nama|sertifikat|badan usaha|legalisasi/i,"fa-file-signature"]
];
const produkIcon = p => { const s = typeof p==="string"?p:p.nama; return (PRODUK_ICONS.find(([re])=>re.test(s))||[0,"fa-star"])[1]; };
/* Foto pelengkap: bila tenant belum punya foto per produk, foto tenant dipotong di titik berbeda agar tiap kartu tampil unik */
const PRODUK_CROPS = ["18% 30%","82% 40%","50% 85%","28% 70%","70% 15%","40% 50%"];

/* Status buka/tutup dihitung dari jam operasional (format "08.00–20.00 WIB") memakai waktu Jakarta */
function tenantOpenStatus(jam){
 const m = String(jam||"").match(/(\d{1,2})[.:](\d{2})\s*[–-]\s*(\d{1,2})[.:](\d{2})/);
 if(!m) return null;
 const [oh,om,ch,cm] = m.slice(1).map(Number);
 const parts = new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Jakarta",hour:"2-digit",minute:"2-digit",hour12:false}).formatToParts(new Date());
 const get = t => parseInt(parts.find(p=>p.type===t).value,10);
 const now = (get("hour")%24)*60 + get("minute");
 const open = oh*60+om, close = ch*60+cm;
 const pad = n => String(n).padStart(2,"0");
 const isOpen = now>=open && now<close;
 return {isOpen, text: isOpen ? `Buka · tutup pukul ${pad(ch)}.${pad(cm)}` : `Tutup · buka pukul ${pad(oh)}.${pad(om)}`};
}

function tenantDetail(idx){
 const t = tenants[idx];
 if(!t) return notFound();
 const [nama,desc,lokasi,kategori,foto,link,kontak,jam,produk=[],sosmed={},marketplace={},produkFoto=[]] = t;
 const cats = Array.isArray(kategori) ? kategori : [kategori];
 const jamWeekday = jam || "09.00–18.00 WIB";
 const jamWeekend = jam || "09.00–18.00 WIB";
 const waUrl = msg => `https://wa.me/${kontak}?text=${encodeURIComponent(msg)}`;
 const waLink = kontak?waUrl('Halo, saya tertarik dengan '+nama+'. Boleh info lebih lanjut?'):null;
 const status = tenantOpenStatus(jamWeekday);
 const statusPill = status?`<span class="td-status ${status.isOpen?'is-open':'is-closed'}"><i></i>${status.text}</span>`:"";
 const socials = Object.entries(sosmed).map(([k,v])=>{
  const handle = v.split("/").filter(Boolean).pop();
  return `<a class="td-social" href="https://${v}" target="_blank" rel="noopener"><span class="td-social-icon"><i class="${SOSMED_ICONS[k]||'fa-solid fa-link'}"></i></span><span><b>${SOSMED_NAMES[k]||k}</b><small>${handle.startsWith('@')?handle:'@'+handle}</small></span><i class="fa-solid fa-arrow-up-right-from-square td-social-go"></i></a>`;
 }).join("");
 const marketplaces = Object.entries(marketplace).filter(([,url])=>url).map(([k,url])=>{
  const [label,icon] = MARKETPLACE_META[k]||[k,"fa-solid fa-cart-shopping"];
  return `<a class="td-marketplace" href="${url}" target="_blank" rel="noopener"><span class="td-marketplace-icon"><i class="${icon}"></i></span><span>${label}</span><i class="fa-solid fa-arrow-up-right-from-square"></i></a>`;
 }).join("");
 /* Tenant lain: prioritaskan kategori yang sama, sisanya menyusul */
 const others = tenants.filter(x=>x!==t);
 const sameCat = others.filter(x=>[].concat(x[3]).some(c=>cats.includes(c)));
 const related = sameCat.concat(others.filter(x=>!sameCat.includes(x))).slice(0,4);
 const produkCard = (p,i) => {
  const pNama = typeof p==="string"?p:p.nama;
  const pDesc = typeof p==="string"?`Tersedia di ${nama}, ${lokasi}.`:p.desc;
  const pLink = typeof p==="string"?null:(p.link||link);
  const own = produkFoto[i];
  const style = own?`background-image:url('${own}')`:`background-image:url('${foto}');background-size:230%;background-position:${PRODUK_CROPS[i%PRODUK_CROPS.length]}`;
  return `<article class="td-product reveal" style="animation-delay:${i*70}ms">
   <div class="td-product-img" style="${style}"><span class="td-product-num">${String(i+1).padStart(2,"0")}</span><span class="td-product-icon"><i class="fa-solid ${produkIcon(p)}"></i></span></div>
   <div class="td-product-body"><h3>${pNama}</h3><p>${pDesc}</p>
    <div class="td-product-actions">
    ${pLink?`<a class="td-product-link" href="${pLink}" target="_blank" rel="noopener">Lihat Kelas <i class="fa-solid fa-arrow-right"></i></a>`:""}
    ${kontak?`<a class="td-product-link td-product-link-outline" href="${waUrl('Halo, saya ingin tanya tentang '+pNama+' di '+nama+'.')}" target="_blank" rel="noopener">Tanya via WhatsApp <i class="fa-solid fa-arrow-right"></i></a>`:""}
    </div>
   </div>
  </article>`;
 };

 return `<section class="td-hero">
  <div class="td-hero-bg" style="background-image:url('${foto}')"></div>
  <div class="container td-hero-inner">
   <div class="breadcrumb td-breadcrumb"><a href="#/">Beranda</a> › <a href="#/kawasan">Tenant</a> › ${nama}</div>
   <div class="td-hero-grid">
    <div class="td-hero-body reveal">
     <div class="td-tags">${cats.map(c=>`<span class="td-tag">${c}</span>`).join("")}${statusPill}</div>
     <h1>${nama}</h1>
     <p>${desc}</p>
     <div class="td-hero-actions">
      ${waLink?`<a class="btn btn-primary" href="${waLink}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Hubungi via WhatsApp</a>`:""}
      ${link?`<a class="btn btn-outline" href="${link}" target="_blank" rel="noopener"><i class="fa-solid fa-globe"></i> Kunjungi Website</a>`:""}
     </div>
    </div>
    <div class="td-hero-photo reveal" style="animation-delay:.12s">
     <div class="td-photo-frame" style="background-image:url('${foto}')"></div>
     <div class="td-photo-badge"><span><i class="fa-solid fa-location-dot"></i></span><div><small>Lokasi</small><b>${lokasi}</b></div></div>
    </div>
   </div>
  </div>
 </section>

 <div class="container">
  <div class="td-facts card">
   <div class="td-fact"><span class="td-fact-icon"><i class="fa-solid fa-location-dot"></i></span><div><small>Lokasi</small><b>${lokasi}</b></div></div>
  <div class="td-fact"><span class="td-fact-icon"><i class="fa-solid fa-clock"></i></span><div><small>Jam Operasional</small><b>Weekday & Weekend</b></div></div>
   <div class="td-fact"><span class="td-fact-icon"><i class="fa-solid fa-tag"></i></span><div><small>Kategori</small><b>${cats.join(" · ")}</b></div></div>
   <div class="td-fact"><span class="td-fact-icon"><i class="fa-solid fa-bag-shopping"></i></span><div><small>Produk & Layanan</small><b>${produk.length} Pilihan</b></div></div>
  </div>
 </div>

 <nav class="td-tabs" aria-label="Navigasi halaman tenant"><div class="container td-tabs-inner">
  <button class="td-tab active" data-target="td-tentang" onclick="tdScroll('td-tentang')"><i class="fa-solid fa-circle-info"></i> Tentang</button>
  ${produk.length?`<button class="td-tab" data-target="td-produk" onclick="tdScroll('td-produk')"><i class="fa-solid fa-bag-shopping"></i> Produk & Layanan</button>`:""}
  <button class="td-tab" data-target="td-galeri" onclick="tdScroll('td-galeri')"><i class="fa-solid fa-images"></i> Suasana</button>
  <button class="td-tab" data-target="td-lokasi" onclick="tdScroll('td-lokasi')"><i class="fa-solid fa-location-dot"></i> Lokasi</button>
  <button class="td-tab" data-target="td-kontak" data-nospy="1" onclick="tdScroll('td-kontak')"><i class="fa-solid fa-headset"></i> Kontak</button>
 </div></nav>

 <section class="section td-section"><div class="container td-layout">
  <div class="td-main">
   <div class="td-panel reveal" id="td-tentang">
    <div class="kicker">Tentang Tenant</div>
    <h2>Mengenal ${nama}</h2>
    <p class="td-lead">${desc}</p>
    <p>${nama} berlokasi di <b>${lokasi}</b>, kawasan Ruko Grand Galaxy City, Bekasi Selatan, dan melayani pelanggan sesuai jadwal berikut.</p>
    <div class="td-highlights">
     <div class="td-hl"><span><i class="fa-solid fa-map-location-dot"></i></span><div><b>Lokasi Strategis</b><small>${lokasi}, kawasan Grand Galaxy City</small></div></div>
    <div class="td-hl"><span><i class="fa-solid fa-clock"></i></span><div><b>Jam Layanan</b><small>Weekday ${jamWeekday}<br>Weekend ${jamWeekend}</small></div></div>
     <div class="td-hl"><span><i class="fa-brands fa-whatsapp"></i></span><div><b>Mudah Dihubungi</b><small>Chat langsung ke admin via WhatsApp</small></div></div>
    </div>
   </div>

   ${produk.length?`<div class="td-panel reveal" id="td-produk">
    <div class="td-panel-head"><div><div class="kicker">Yang Kami Tawarkan</div><h2>Produk & Layanan</h2></div><span class="td-count">${produk.length} pilihan</span></div>
    <div class="td-products">${produk.map(produkCard).join("")}</div>
   </div>`:""}

   <div class="td-panel reveal" id="td-galeri">
    <div class="td-panel-head"><div><div class="kicker">Galeri</div><h2>Suasana & Lingkungan</h2></div></div>
    <div class="td-gallery">
     <div class="td-g td-g-big"><div class="td-g-bg" style="background-image:url('${foto}')"></div><span>${nama}</span></div>
     <div class="td-g"><div class="td-g-bg" style="background-image:url('${REAL.ruko}')"></div><span>Area Ruko</span></div>
     <div class="td-g"><div class="td-g-bg" style="background-image:url('${REAL.jalanKawasan}')"></div><span>Jalan Kawasan</span></div>
    </div>
   </div>

   <div class="td-panel td-panel-map reveal" id="td-lokasi">
    <div class="section-head"><div><div class="kicker">Lokasi</div><h2>Peta Lokasi</h2></div><a class="link-btn" href="${HALTEV_MAP_LINK}" target="_blank" rel="noopener">Buka di Google Maps →</a></div>
    ${mapEmbed('Lokasi '+nama, HALTEV_MAP_EMBED)}
    <p class="td-address"><i class="fa-solid fa-location-dot"></i> ${lokasi}, Grand Galaxy City, Bekasi Selatan</p>
   </div>
  </div>

  <aside class="td-side" id="td-kontak">
   <div class="td-contact reveal">
    <div class="kicker">Hubungi Tenant</div>
    <h3>Tertarik dengan ${nama}?</h3>
    <p>Tanyakan produk, layanan, atau jadwal kunjungan langsung ke admin tenant.</p>
    ${kontak?`<div class="td-wa-number"><i class="fa-brands fa-whatsapp"></i><div><small>WhatsApp Admin</small><b>+${kontak}</b></div></div>`:""}
    <div class="td-contact-actions">
     ${waLink?`<a class="btn btn-primary" href="${waLink}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Chat WhatsApp</a>`:""}
     ${link?`<a class="btn btn-outline-navy" href="${link}" target="_blank" rel="noopener"><i class="fa-solid fa-globe"></i> Kunjungi Website</a>`:""}
     <button class="btn btn-outline-navy" onclick="shareTenant()"><i class="fa-solid fa-share-nodes"></i> Bagikan Tenant</button>
    </div>
    <div class="td-hours">
      <div class="td-hours-title"><i class="fa-solid fa-clock"></i> Jam Operasional</div>
      <div class="td-hours-row"><span>Weekday</span><b>${jamWeekday}</b></div>
      <div class="td-hours-row"><span>Weekend</span><b>${jamWeekend}</b></div>
     ${statusPill?`<div class="td-hours-row">${statusPill}</div>`:""}
    </div>
        ${marketplaces?`<div class="td-marketplaces"><div class="td-side-label">Pesan & Belanja Online</div>${marketplaces}</div>`:""}
    ${socials?`<div class="td-socials"><div class="td-side-label">Ikuti Kami</div>${socials}</div>`:""}
   </div>
  </aside>
 </div></section>

 <section class="section compact td-cta-wrap"><div class="container">
  <div class="td-cta" style="background-image:linear-gradient(90deg,rgba(19,28,27,.97) 20%,rgba(19,28,27,.72)),url('${foto}')">
   <div><div class="kicker">Kunjungi Kami</div><h2>Siap berkunjung ke ${nama}?</h2><p>Hubungi admin untuk info produk, harga, dan jadwal kunjungan. Kami siap membantu.</p></div>
   <div class="td-cta-actions">
    ${waLink?`<a class="btn btn-primary" href="${waLink}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Chat WhatsApp</a>`:""}
    <a class="btn btn-outline" href="${HALTEV_MAP_LINK}" target="_blank" rel="noopener"><i class="fa-solid fa-route"></i> Petunjuk Arah</a>
   </div>
  </div>
 </div></section>

 ${related.length?`<section class="section compact td-related"><div class="container">
  <div class="section-head"><div><div class="kicker">Jelajahi Lainnya</div><h2>Tenant Lainnya</h2></div><a class="link-btn" href="#/kawasan">Lihat semua →</a></div>
  <div class="grid-4">${related.map(tenantCard).join("")}</div>
 </div></section>`:""}

 ${waLink?`<div class="td-mobile-bar"><a class="btn btn-primary" href="${waLink}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Hubungi via WhatsApp</a></div>`:""}`;
}

function newsRow(n){
 const [judul,sumber,foto,url,,tanggal] = n;
 const tag = url?`<a class="news-row" href="${url}" target="_blank" rel="noopener">`:`<div class="news-row">`;
 const closeTag = url?"</a>":"</div>";
 const caption = url?"Grand Galaxy City · Baca selengkapnya di sumber asli.":"Grand Galaxy City · Dokumentasi kegiatan warga.";
 return `${tag}${tanggal?`<span class="news-date-badge"><i class="fa-regular fa-calendar"></i> ${tanggal}</span>`:""}<div class="thumb"><div class="thumb-img" style="background-image:url('${foto}')"></div></div><div class="news-body"><span class="date"><i class="fa-regular fa-newspaper"></i> ${sumber}</span><h3>${judul}</h3><p>${caption}</p></div>${closeTag}`;
}

function eventRow(e){
 return `<article class="event"><div class="event-thumb" style="background-image:url('${e[5]}')"></div><div class="event-date"><b>${e[0]}</b><span>${e[1]}</span></div><div class="event-info"><h3>${e[2]}</h3><p>${e[3]} · ${e[4]}</p></div><button class="btn btn-primary" onclick="showToast('Event disimpan ke Festival')">Lihat Detail</button></article>`;
}
