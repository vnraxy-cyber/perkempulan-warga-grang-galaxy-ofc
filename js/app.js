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
function filterTenants(cat,el){
 el.closest(".pills").querySelectorAll(".pill").forEach(x=>x.classList.remove("active"));el.classList.add("active");
 const list=cat==="Semua"?tenants:tenants.filter(t=>t[3]===cat);
 document.getElementById("tenantGrid").innerHTML=list.map(tenantCard).join("");
}
function filterFacilities(cat,el){
 el.closest(".pills").querySelectorAll(".pill").forEach(x=>x.classList.remove("active"));el.classList.add("active");
 const list=cat==="Semua"?facilities:facilities.filter(f=>f[4]===cat);
 document.getElementById("facilityScroll").innerHTML=list.map(f=>`<div class="facility-slide" style="background-image:linear-gradient(180deg,rgba(19,28,27,0) 38%,rgba(19,28,27,.92) 100%),url('${f[3]}')"><span class="facility-slide-icon">${f[0]}</span><span class="facility-slide-eyebrow">FASILITAS</span><h3>${f[1]}</h3><p>${f[2]}</p></div>`).join("");
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
