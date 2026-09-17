function render(){
 const path=location.hash.replace("#","")||"/";
 const page=routes[path]||notFound;
 document.getElementById("app").innerHTML=nav()+page()+footer();
 document.querySelectorAll("[data-route]").forEach(a=>a.classList.toggle("active",a.getAttribute("href")===`#${path}`));
 syncThemeIcon();
 window.scrollTo(0,0);
 document.getElementById("navLinks")?.classList.remove("open");
}
function applyTheme(theme){
 document.documentElement.setAttribute("data-theme",theme);
 localStorage.setItem("theme",theme);
}
function toggleTheme(){
 applyTheme(document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark");
 syncThemeIcon();
}
function syncThemeIcon(){
 const btn=document.querySelector(".theme-toggle i");
 if(!btn)return;
 const dark=document.documentElement.getAttribute("data-theme")==="dark";
 btn.className=dark?"fa-solid fa-sun":"fa-solid fa-moon";
}
applyTheme(localStorage.getItem("theme")||"light");
function toggleMenu(){document.getElementById("navLinks").classList.toggle("open")}
function showToast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
function submitContact(e){e.preventDefault();e.target.reset();showToast("Pesan berhasil dikirim. Terima kasih!")}
function submitLogin(e){e.preventDefault();e.target.reset();showToast("Berhasil masuk. Selamat datang kembali!")}
function submitRegister(e){e.preventDefault();e.target.reset();showToast("Pendaftaran berhasil. Silakan masuk.");location.hash="#/login"}
function filterTenants(cat,el){
 el.closest(".pills").querySelectorAll(".pill").forEach(x=>x.classList.remove("active"));el.classList.add("active");
 const list=cat==="Semua"?tenants:tenants.filter(t=>Array.isArray(t[3])?t[3].includes(cat):t[3]===cat);
 document.getElementById("tenantGrid").innerHTML=list.map(tenantCard).join("");
}
function filterFacilities(cat,el){
 el.closest(".pills").querySelectorAll(".pill").forEach(x=>x.classList.remove("active"));el.classList.add("active");
 const list=cat==="Semua"?facilities:facilities.filter(f=>f[4]===cat);
 document.getElementById("facilityScroll").innerHTML=list.map(f=>`<div class="facility-slide" style="background-image:linear-gradient(180deg,rgba(19,28,27,0) 38%,rgba(19,28,27,.92) 100%),url('${f[3]}')"><span class="facility-slide-icon"><i class="${f[0]}"></i></span><span class="facility-slide-eyebrow">FASILITAS</span><h3>${f[1]}</h3><p>${f[2]}</p></div>`).join("");
}
function filterGallery(cat,el){
 el.closest(".pills").querySelectorAll(".pill").forEach(x=>x.classList.remove("active"));el.classList.add("active");
 const list=cat==="Semua"?galleryImages:galleryImages.filter(g=>g[1]===cat);
 document.getElementById("galleryGrid").innerHTML=list.map(galleryItem).join("");
}
function changePromo(dir){
 const el=document.getElementById("promoBanner");
 if(!el)return;
 const idx=(parseInt(el.dataset.index)+dir+promos.length)%promos.length;
 el.dataset.index=idx;
 el.style.backgroundImage=promoGradient(promos[idx][5]);
 document.getElementById("promoContent").innerHTML=promoSlideContent(idx);
 document.querySelectorAll("#promoDots span").forEach((d,i)=>d.classList.toggle("on",i===idx));
}
window.addEventListener("hashchange",render); window.addEventListener("DOMContentLoaded",render);
