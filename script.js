let articles = [];
const grid=document.getElementById("article-grid");
const search=document.getElementById("search");
const empty=document.getElementById("empty-state");
const count=document.getElementById("result-count");
let activeCategory="Όλα";
function renderArticles(){
 const term=search.value.trim().toLocaleLowerCase("el");
 const filtered=articles.filter(a=>(activeCategory==="Όλα"||a.category===activeCategory)&&[a.title,a.summary,a.category,a.body].some(v=>v.toLocaleLowerCase("el").includes(term)));
 grid.innerHTML=filtered.map(a=>`<article class="article-card" tabindex="0" role="button" aria-label="Διάβασε: ${a.title}" data-id="${a.id}">
   <div class="article-visual ${a.image ? "has-cover" : ""}" style="--visual:${a.visual};--shape:${a.shape}">${a.image ? `<img class="article-cover" src="${a.image}" alt="${a.title}" loading="lazy">` : ""}<div class="visual-shape"></div><span class="visual-label">${a.label}</span></div>
   <div class="card-meta"><span class="card-category">${a.category.toUpperCase()}</span><span>${a.read}</span></div>
   <h3>${a.title}</h3><p>${a.summary}</p><div class="read-more"><span>ΔΙΑΒΑΣΕ ΤΟ ΑΡΘΡΟ</span><span>↗</span></div>
 </article>`).join("");
 empty.hidden=filtered.length!==0;
 count.textContent=String(filtered.length).padStart(2,"0")+" ΑΡΘΡΑ";
 grid.querySelectorAll(".article-card").forEach(card=>{
  const open=()=>showArticle(Number(card.dataset.id));
  card.addEventListener("click",open);
  card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}});
 });
}
function showArticle(id){
 const a=articles.find(item=>item.id===id);if(!a)return;
 const modal=document.createElement("dialog");modal.className="article-dialog";
 modal.innerHTML=`<div class="dialog-top"><span class="eyebrow">${a.category.toUpperCase()} · ${a.date}</span><button class="icon-button close-dialog" aria-label="Κλείσιμο">×</button></div><div class="dialog-art ${a.image ? "has-cover" : ""}" style="--visual:${a.visual};--shape:${a.shape}">${a.image ? `<img class="article-cover" src="${a.image}" alt="${a.title}">` : ""}<div class="visual-shape"></div><span class="visual-label">${a.label}</span></div><h2>${a.title}</h2><p class="dialog-summary">${a.summary}</p><div class="dialog-body">${a.body}</div><div class="dialog-end">NICSITE. · ΙΔΕΕΣ. ΑΠΟΨΗ. ΠΑΡΑΤΗΡΗΣΗ.</div>`;
 document.body.appendChild(modal);modal.showModal();
 modal.querySelector(".close-dialog").addEventListener("click",()=>modal.close());
 modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});
 modal.addEventListener("close",()=>modal.remove());
}
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{
 activeCategory=button.dataset.category;
 document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b===button));
 renderArticles();
}));
search.addEventListener("input",renderArticles);
document.getElementById("theme-toggle").addEventListener("click",()=>{document.body.classList.toggle("dark");document.querySelector('meta[name="theme-color"]').content=document.body.classList.contains("dark")?"#1d1e1a":"#f5f3ee"});
document.addEventListener("keydown",e=>{if(e.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){e.preventDefault();search.focus()}});
document.getElementById("year").textContent=new Date().getFullYear();
const extraStyles=document.createElement("style");
extraStyles.textContent=`.article-dialog{width:min(680px,calc(100% - 28px));max-height:90vh;overflow:auto;border:1px solid var(--line);background:var(--paper);color:var(--ink);padding:clamp(20px,5vw,42px)}.article-dialog::backdrop{background:#111b;backdrop-filter:blur(4px)}.dialog-top{display:flex;justify-content:space-between;align-items:center;gap:15px}.dialog-top .eyebrow{margin:0}.close-dialog{font-size:25px;flex-shrink:0}.dialog-art{margin:24px 0;min-height:180px;background:var(--visual);display:grid;place-items:center;position:relative;overflow:hidden}.dialog-art .visual-shape{width:28%;background:var(--shape)}.dialog-art .visual-label{color:var(--shape)}.article-dialog h2{font-size:clamp(28px,5vw,42px);line-height:1.15;letter-spacing:-1.5px;margin:15px 0}.dialog-summary{font-size:17px;line-height:1.7;color:var(--muted)}.dialog-body{font-size:15px;line-height:2;white-space:normal;margin-top:25px}.dialog-end{margin-top:35px;padding-top:15px;border-top:1px solid var(--line);font:9px var(--mono);letter-spacing:1px;color:var(--muted)}`;
document.head.appendChild(extraStyles);
fetch("content/articles.json")
  .then(response => {
    if (!response.ok) throw new Error("Δεν ήταν δυνατή η φόρτωση των άρθρων.");
    return response.json();
  })
  .then(data => {
    articles = Array.isArray(data.articles) ? data.articles : [];
    renderArticles();
  })
  .catch(error => {
    console.error("Nicsite articles:", error);
    empty.hidden = false;
    empty.textContent = "Δεν ήταν δυνατή η φόρτωση των άρθρων. Δοκίμασε ξανά αργότερα.";
    count.textContent = "ΣΦΑΛΜΑ";
  });
