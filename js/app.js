function render(){
 const path=location.hash.replace("#","")||"/";
 const tenantMatch=path.match(/^\/tenant\/(\d+)$/);
 const page=tenantMatch?()=>tenantDetail(parseInt(tenantMatch[1])):(routes[path]||notFound);
 document.getElementById("app").innerHTML=nav()+page()+footer();
 document.querySelectorAll(".promo-track").forEach(promoSync);
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
function filterNews(cat,el){
 el.closest(".pills").querySelectorAll(".pill").forEach(x=>x.classList.remove("active"));el.classList.add("active");
 const featured=document.getElementById("newsFeatured");
 if(cat==="Semua"){
  featured.style.display="";
  document.getElementById("newsGrid").innerHTML=news.slice(1).map(n=>newsRow(n)).join("");
  return;
 }
 featured.style.display="none";
 const list=news.filter(n=>n[4]===cat);
 document.getElementById("newsGrid").innerHTML=list.length?list.map(n=>newsRow(n)).join(""):`<p style="color:var(--muted);padding:24px 0">Belum ada konten untuk kategori ini.</p>`;
}
/* Carousel promo: slide aktif di tengah, parallax foto, autoplay, swipe/drag/panah/dots */
let promoDrag=null,promoDragEnd=0,promoHold=0,promoHover=false;
const promoSlides=t=>[...t.querySelectorAll(".promo-slide")];
const promoActive=t=>Math.max(0,promoSlides(t).findIndex(s=>s.classList.contains("is-active")));
function promoCenter(t,s){t.scrollTo({left:s.offsetLeft-(t.clientWidth-s.offsetWidth)/2,behavior:"smooth"})}
function promoScroll(btn,dir){
 const t=btn.closest(".promo-carousel").querySelector(".promo-track"),s=promoSlides(t);
 promoHold=Date.now()+8000;
 promoCenter(t,s[Math.max(0,Math.min(s.length-1,promoActive(t)+dir))]);
}
function promoGo(btn,i){
 const t=btn.closest(".promo-carousel").querySelector(".promo-track");
 promoHold=Date.now()+8000;
 promoCenter(t,promoSlides(t)[i]);
}
function promoSync(t){
 const c=t.closest(".promo-carousel");if(!c)return;
 const s=promoSlides(t),mid=t.scrollLeft+t.clientWidth/2;
 let best=0,bd=Infinity;
 s.forEach((el,i)=>{
  const d=el.offsetLeft+el.offsetWidth/2-mid;
  el.style.setProperty("--p",Math.max(-1.5,Math.min(1.5,d/el.offsetWidth)).toFixed(3));
  if(Math.abs(d)<bd){bd=Math.abs(d);best=i}
 });
 s.forEach((el,i)=>el.classList.toggle("is-active",i===best));
 c.querySelectorAll(".promo-dot").forEach((d,i)=>d.classList.toggle("active",i===best));
 c.querySelector(".promo-count b").textContent=String(best+1).padStart(2,"0");
 const [prev,next]=c.querySelectorAll(".promo-arrow");
 prev.disabled=best===0;next.disabled=best===s.length-1;
}
let promoRaf=0;
document.addEventListener("scroll",e=>{
 const t=e.target;
 if(t.classList&&t.classList.contains("promo-track")){cancelAnimationFrame(promoRaf);promoRaf=requestAnimationFrame(()=>promoSync(t))}
},true);
window.addEventListener("resize",()=>document.querySelectorAll(".promo-track").forEach(promoSync));
document.addEventListener("pointerdown",e=>{
 const t=e.target.closest(".promo-track");
 if(t)promoHold=Date.now()+8000;
 if(!t||e.pointerType!=="mouse"||e.button!==0)return;
 promoDrag={t,x:e.clientX,left:t.scrollLeft,moved:false};
});
document.addEventListener("pointermove",e=>{
 if(!promoDrag)return;
 const dx=e.clientX-promoDrag.x;
 if(!promoDrag.moved&&Math.abs(dx)>5){promoDrag.moved=true;promoDrag.t.classList.add("dragging")}
 if(promoDrag.moved)promoDrag.t.scrollLeft=promoDrag.left-dx;
});
function promoDragStop(){
 if(!promoDrag)return;
 const {t,moved}=promoDrag;promoDrag=null;
 if(!moved)return;
 promoDragEnd=Date.now();
 t.classList.remove("dragging");
 const s=promoSlides(t);
 if(s.length)promoCenter(t,s.reduce((a,b)=>Math.abs(a.offsetLeft+a.offsetWidth/2-t.scrollLeft-t.clientWidth/2)<Math.abs(b.offsetLeft+b.offsetWidth/2-t.scrollLeft-t.clientWidth/2)?a:b));
}
document.addEventListener("pointerup",promoDragStop);
document.addEventListener("pointercancel",promoDragStop);
document.addEventListener("click",e=>{
 const slide=e.target.closest(".promo-slide");
 if(!slide)return;
 if(Date.now()-promoDragEnd<120){e.preventDefault();e.stopPropagation();return}
 if(!slide.classList.contains("is-active")){e.preventDefault();promoHold=Date.now()+8000;promoCenter(slide.closest(".promo-track"),slide)}
},true);
document.addEventListener("dragstart",e=>{if(e.target.closest&&e.target.closest(".promo-track"))e.preventDefault()});
document.addEventListener("mouseover",e=>{if(e.target.closest(".promo-carousel"))promoHover=true});
document.addEventListener("mouseout",e=>{if(e.target.closest(".promo-carousel")&&!(e.relatedTarget&&e.relatedTarget.closest&&e.relatedTarget.closest(".promo-carousel")))promoHover=false});
setInterval(()=>{
 if(promoHover||promoDrag||document.hidden||Date.now()<promoHold||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
 const t=document.querySelector(".promo-track");if(!t)return;
 const r=t.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;
 const s=promoSlides(t);
 promoCenter(t,s[(promoActive(t)+1)%s.length]);
},5000);
/* Halaman detail tenant: tab menempel, penanda bagian aktif, dan tombol bagikan */
function tdScroll(id){
 const el=document.getElementById(id);
 if(el)window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-160,behavior:"smooth"});
}
window.addEventListener("scroll",()=>{
 const tabs=[...document.querySelectorAll(".td-tab:not([data-nospy])")];
 if(!tabs.length)return;
 let cur=tabs[0];
 tabs.forEach(t=>{const el=document.getElementById(t.dataset.target);if(el&&el.getBoundingClientRect().top<=180)cur=t});
 document.querySelectorAll(".td-tab").forEach(t=>t.classList.toggle("active",t===cur));
},{passive:true});
function shareTenant(){
 const url=location.href,title=document.querySelector(".td-hero h1")?.textContent||document.title;
 if(navigator.share)navigator.share({title,url}).catch(()=>{});
 else if(navigator.clipboard)navigator.clipboard.writeText(url).then(()=>showToast("Tautan tenant disalin"),()=>showToast(url));
 else showToast(url);
}
window.addEventListener("hashchange",render); window.addEventListener("DOMContentLoaded",render);
