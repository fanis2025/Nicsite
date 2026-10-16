const articles = [
 {id:1,category:"Κοινωνία",date:"12 ΟΚΤΩΒΡΙΟΥ 2026",read:"5 ΛΕΠΤΑ",title:"Η πόλη που δεν σταματά ποτέ να αλλάζει",summary:"Πώς οι μικρές αλλαγές στις γειτονιές μας διαμορφώνουν τον τρόπο που ζούμε, κινούνται και συναντιόμαστε.",label:"URBAN NOTES",visual:"#d7fb58",shape:"#272920",body:"Οι πόλεις δεν αλλάζουν μόνο όταν χτίζεται ένα νέο κτίριο ή ανοίγει ένας καινούργιος δρόμος. Αλλάζουν όταν ένα παλιό μαγαζί γίνεται σημείο συνάντησης, όταν μια πλατεία γεμίζει ξανά κόσμο και όταν οι κάτοικοι διεκδικούν χώρο για να ζήσουν. Η καθημερινότητα είναι συχνά ο καλύτερος τρόπος να διαβάσουμε την εξέλιξη μιας πόλης. Το ερώτημα δεν είναι μόνο πόσο γρήγορα αναπτύσσεται, αλλά για ποιον και με ποιους όρους."},
 {id:2,category:"Τεχνολογία",date:"10 ΟΚΤΩΒΡΙΟΥ 2026",read:"6 ΛΕΠΤΑ",title:"Τεχνητή νοημοσύνη: εργαλείο ή καθρέφτης μας;",summary:"Η τεχνολογία προχωρά γρήγορα. Η πραγματική πρόκληση είναι να αποφασίσουμε τι θέλουμε να κάνουμε με αυτή.",label:"FUTURE / HUMAN",visual:"#e5b6a5",shape:"#3e3430",body:"Κάθε νέο τεχνολογικό εργαλείο υπόσχεται να μας εξοικονομήσει χρόνο. Η τεχνητή νοημοσύνη δεν αποτελεί εξαίρεση, όμως μας καλεί να θέσουμε και πιο δύσκολα ερωτήματα: τι αναθέτουμε σε μια μηχανή, ποιος ελέγχει το αποτέλεσμα και ποιες δεξιότητες θέλουμε να διατηρήσουμε; Η χρησιμότητα δεν κρίνεται μόνο από το τι μπορεί να κάνει ένα σύστημα, αλλά και από το πώς επιλέγουμε να το χρησιμοποιούμε."},
 {id:3,category:"Οικονομία",date:"08 ΟΚΤΩΒΡΙΟΥ 2026",read:"4 ΛΕΠΤΑ",title:"Το πραγματικό κόστος της καθημερινότητας",summary:"Από το ενοίκιο μέχρι τον καφέ, οι μικρές δαπάνες αφηγούνται μια μεγαλύτερη οικονομική ιστορία.",label:"MONEY / LIFE",visual:"#c5c8e7",shape:"#343650",body:"Οι οικονομικές πιέσεις γίνονται πιο αισθητές μέσα από τις επαναλαμβανόμενες επιλογές της καθημερινότητας. Το ενοίκιο, οι λογαριασμοί, οι μετακινήσεις και τα ψώνια δεν είναι απλώς αριθμοί σε έναν προϋπολογισμό: καθορίζουν πόσο διαθέσιμο χρόνο και εισόδημα μένει για οτιδήποτε άλλο. Για να καταλάβουμε την οικονομία, χρειάζεται να κοιτάμε όχι μόνο τους μέσους όρους, αλλά και το πώς κατανέμεται το βάρος ανάμεσα σε διαφορετικά νοικοκυριά."},
 {id:4,category:"Πολιτισμός",date:"05 ΟΚΤΩΒΡΙΟΥ 2026",read:"3 ΛΕΠΤΑ",title:"Γιατί επιστρέφουμε στις ίδιες ιστορίες;",summary:"Ταινίες, μουσική και βιβλία που ξαναβρίσκουμε σε διαφορετικές περιόδους της ζωής μας.",label:"CULTURE CLUB",visual:"#f1d27e",shape:"#473a20",body:"Κάποιες ιστορίες δεν τελειώνουν όταν πέσουν οι τίτλοι τέλους ή κλείσει το βιβλίο. Επιστρέφουμε σε αυτές επειδή αλλάζουμε εμείς: μια φράση αποκτά άλλο βάρος, ένας χαρακτήρας γίνεται πιο κατανοητός και μια παλιά μελωδία συνδέεται με μια καινούργια ανάμνηση. Ο πολιτισμός δεν είναι μόνο αυτό που παρακολουθούμε, αλλά και ο τρόπος με τον οποίο ερμηνεύουμε ξανά τον εαυτό μας."},
 {id:5,category:"Γνώμη",date:"02 ΟΚΤΩΒΡΙΟΥ 2026",read:"4 ΛΕΠΤΑ",title:"Δεν χρειάζεται να έχουμε άποψη για όλα",summary:"Σε έναν κόσμο αδιάκοπης ενημέρωσης, το να περιμένουμε πριν μιλήσουμε μπορεί να είναι δύναμη.",label:"OPEN THOUGHTS",visual:"#b9d9c9",shape:"#253b32",body:"Η συνεχής ροή ειδήσεων δημιουργεί την εντύπωση ότι πρέπει να έχουμε άμεση θέση για κάθε θέμα. Όμως η σκέψη χρειάζεται χρόνο, στοιχεία και διάθεση να αλλάξουμε γνώμη. Το να πούμε «δεν γνωρίζω ακόμη» δεν είναι αδυναμία. Μπορεί να είναι η αρχή μιας πιο ουσιαστικής συζήτησης, ειδικά όταν οι εύκολες απαντήσεις ανταμείβονται περισσότερο από τις προσεκτικές ερωτήσεις."},
 {id:6,category:"Κοινωνία",date:"29 ΣΕΠΤΕΜΒΡΙΟΥ 2026",read:"5 ΛΕΠΤΑ",title:"Η αξία μιας συζήτησης πρόσωπο με πρόσωπο",summary:"Μέσα στην ταχύτητα των μηνυμάτων, η προσεκτική ακρόαση παραμένει μια μικρή πράξη ουσίας.",label:"HUMAN CONNECTION",visual:"#e7b5c4",shape:"#452d37",body:"Η επικοινωνία δεν είναι μόνο η ανταλλαγή πληροφοριών. Είναι και οι παύσεις, οι διευκρινίσεις, η δυνατότητα να καταλάβουμε τι εννοεί ο άλλος πριν ετοιμάσουμε την απάντησή μας. Οι ψηφιακές συνομιλίες μάς συνδέουν από απόσταση, αλλά η ουσιαστική ακρόαση εξακολουθεί να απαιτεί προσοχή. Μερικές φορές, η πιο χρήσιμη κίνηση είναι να αφήσουμε το κινητό στην άκρη και να δώσουμε χρόνο στον άνθρωπο απέναντί μας."}
];
const grid=document.getElementById("article-grid");
const search=document.getElementById("search");
const empty=document.getElementById("empty-state");
const count=document.getElementById("result-count");
let activeCategory="Όλα";
function renderArticles(){
 const term=search.value.trim().toLocaleLowerCase("el");
 const filtered=articles.filter(a=>(activeCategory==="Όλα"||a.category===activeCategory)&&[a.title,a.summary,a.category,a.body].some(v=>v.toLocaleLowerCase("el").includes(term)));
 grid.innerHTML=filtered.map(a=>`<article class="article-card" tabindex="0" role="button" aria-label="Διάβασε: ${a.title}" data-id="${a.id}">
   <div class="article-visual" style="--visual:${a.visual};--shape:${a.shape}"><div class="visual-shape"></div><span class="visual-label">${a.label}</span></div>
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
 modal.innerHTML=`<div class="dialog-top"><span class="eyebrow">${a.category.toUpperCase()} · ${a.date}</span><button class="icon-button close-dialog" aria-label="Κλείσιμο">×</button></div><div class="dialog-art" style="--visual:${a.visual};--shape:${a.shape}"><div class="visual-shape"></div><span class="visual-label">${a.label}</span></div><h2>${a.title}</h2><p class="dialog-summary">${a.summary}</p><div class="dialog-body">${a.body}</div><div class="dialog-end">NICSITE. · ΙΔΕΕΣ. ΑΠΟΨΗ. ΠΑΡΑΤΗΡΗΣΗ.</div>`;
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
renderArticles();