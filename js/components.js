function nav(){
  return `<div class="topbar"><div class="container">Kawasan hunian terpadu & modern di Bekasi Selatan</div></div>
  <header class="navbar"><div class="container nav-inner">
    <a class="logo" href="#/" aria-label="Grand Galaxy City"><img class="logo-img" src="${LOGO}" alt="Perkumpulan Warga Ruko Grand Galaxy City"></a>
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
  <div><a class="logo" href="#/" aria-label="Grand Galaxy City"><span class="logo-chip"><img class="logo-img" src="${LOGO}" alt="Perkumpulan Warga Ruko Grand Galaxy City"></span></a><p>Hunian modern, fasilitas lengkap, dan lingkungan yang dirancang untuk kehidupan keluarga yang lebih nyaman.</p></div>
   <div><h3>Menu</h3><a href="#/tentang">Tentang Kami</a><a href="#/kawasan">Kawasan</a><a href="#/fasilitas">Fasilitas</a><a href="#/galeri">Galeri</a></div>
   <div><h3>Informasi</h3><a href="#/berita">Berita & Promo</a><a href="#/event">Event</a><a href="#/tips">Tips Hunian</a><a href="#/kontak">Kontak</a></div>
   <div><h3>Hubungi Kami</h3><p>Grand Galaxy City, Bekasi Selatan<br>Jawa Barat, Indonesia</p><p>021 1234 5678<br>info@grandgalaxycity.id</p></div>
  </div>
  <div class="footer-bottom"><span>© 2026 Grand Galaxy City. All rights reserved.</span><span>Privacy Policy · Terms</span></div>
 </div></footer>`;
}

function promoGradient(img){
 return `linear-gradient(100deg,rgba(19,28,27,.2) 0%,rgba(19,28,27,.85) 48%,rgba(19,28,27,.97) 70%),url('${img}')`;
}
function promoSlideContent(i){
 const p=promos[i];
 return `<span class="promo-eyebrow">${p[0]}</span><h2>${p[1]}</h2><p class="promo-desc">${p[2]}</p><a class="btn btn-primary" href="${p[4]}">${p[3]}</a>`;
}
function promoBanner(){
 return `<div class="promo-banner" id="promoBanner" data-index="0" style="background-image:${promoGradient(promos[0][5])}">
  <button class="promo-nav prev" onclick="changePromo(-1)" aria-label="Promo sebelumnya">‹</button>
  <div class="promo-content" id="promoContent">${promoSlideContent(0)}</div>
  <button class="promo-nav next" onclick="changePromo(1)" aria-label="Promo berikutnya">›</button>
  <div class="promo-dots" id="promoDots">${promos.map((_,i)=>`<span class="${i===0?'on':''}"></span>`).join("")}</div>
 </div>`;
}

function facilityTile(f){
 return `<div class="facility-tile" style="background-image:linear-gradient(180deg,rgba(19,28,27,0) 40%,rgba(19,28,27,.9) 100%),url('${f[3]}')"><span class="facility-tile-eyebrow">FASILITAS</span><h3>${f[1]}</h3></div>`;
}

function mapEmbed(title){
 return `<div class="map-box map-embed"><iframe src="${MAP_EMBED}" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" title="${title||'Peta Lokasi Grand Galaxy City'}"></iframe></div>`;
}

function hero(title, subtitle, image=REAL.gate, small=false){
 return `<section class="hero ${small?'small':''}" style="background-image:linear-gradient(90deg,rgba(2,29,48,.78),rgba(2,29,48,.25)),url('${image}')"><div class="container"><div class="hero-content reveal"><div class="eyebrow">GRAND GALAXY CITY</div><h1>${title}</h1><p>${subtitle}</p></div></div></section>`;
}

function tenantCard(t){
 return `<a class="tenant-card reveal" href="#/coming-soon"><div class="pic" style="background-image:url('${t[4]}')"><span class="badge tenant-badge">${t[3]}</span></div><div class="body"><h3>${t[0]}</h3><p>${t[1]}</p><span class="tenant-loc">📍 ${t[2]}</span></div></a>`;
}

function newsRow(n){
 return `<article class="news-row"><div class="thumb" style="background-image:url('${n[2]}')"></div><div><h3>${n[0]}</h3><p>Grand Galaxy City · Informasi terbaru kawasan dan hunian.</p></div><span class="date">${n[1]}</span></article>`;
}

function eventRow(e){
 return `<article class="event"><div class="event-thumb" style="background-image:url('${e[5]}')"></div><div class="event-date"><b>${e[0]}</b><span>${e[1]}</span></div><div><h3>${e[2]}</h3><p>${e[3]} · ${e[4]}</p></div><button class="btn btn-dark" onclick="showToast('Event disimpan ke Festival')">Lihat Detail</button></article>`;
}
