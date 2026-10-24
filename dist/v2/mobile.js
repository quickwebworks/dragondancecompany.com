(()=>{
const host=document.querySelector('#services .wrap');
document.querySelector('.service-grid').hidden=true;document.querySelector('.service-explorer').hidden=true;clearInterval(detailTimer);
const app=document.createElement('div');app.className='experience-app';host.append(app);
let category='bollywood',index=null,tab='overview';const labels={bollywood:'Bollywood',weddings:'Wedding',corporate:'Corporate'};
const cover={bollywood:'assets/wedding-group.jpg',weddings:'assets/wedding-couple.jpg',corporate:'assets/bhangra-group.jpg'};
function navigate(c,i=null){category=c;index=i;tab='overview';render();app.scrollIntoView({block:'start',behavior:'smooth'});}
function render(){
app.classList.remove('compact-open');
const group=collections[category];
app.innerHTML=`<div class="app-heading"><span>EXPLORE THE EXPERIENCE · V2</span><h3>Your occasion.<br>Your kind of show.</h3></div><nav class="app-categories" aria-label="Event category">${Object.keys(labels).map(c=>`<button data-category="${c}" aria-pressed="${c===category}">${labels[c]} <small>${collections[c].services.length}</small></button>`).join('')}</nav><div class="app-body"></div>`;
app.querySelectorAll('[data-category]').forEach(b=>b.onclick=()=>navigate(b.dataset.category));
if(index===null)directory();else detail();
}
function directory(){const body=app.querySelector('.app-body');body.innerHTML=`<div class="app-search"><label>Find your performance<input type="search" placeholder="Try Sangeet, entry, dance…"></label><p>${collections[category].services.length} experiences to explore</p></div><div class="app-grid"></div>`;
function draw(q=''){const matches=collections[category].services.map((s,i)=>({s,i})).filter(x=>x.s[0].toLowerCase().includes(q.toLowerCase()));body.querySelector('.app-grid').innerHTML=matches.map(({s,i})=>`<button class="experience-card" data-index="${i}"><div class="experience-cover"><img loading="lazy" src="${cover[category]}" alt="Company ${labels[category]} portfolio"><span>${String(i+1).padStart(2,'0')}</span></div><div><small>${labels[category].toUpperCase()} EXPERIENCE</small><h4>${s[0]}</h4><p>${s[1]}</p><b>See experience <span>↗</span></b></div></button>`).join('')||'<p>No matching services. Try another search.</p>';body.querySelectorAll('[data-index]').forEach(b=>b.onclick=()=>navigate(category,Number(b.dataset.index)));}body.querySelector('input').oninput=e=>draw(e.target.value);draw();}
function detail(){
const group=collections[category],[name,description]=group.services[index],[subtitle,info]=serviceDetails[category][index],media=getServiceMedia(category,index);
const highlights=serviceArtDirection[category][index][2].split(' · ');
const booking=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hello Dragon Dance Company, I would like to enquire about '+name+'. Please share availability and details.')}`;
app.classList.add('compact-open');
const body=app.querySelector('.app-body');
body.innerHTML=`<div class="compact-top"><button class="app-back">← All services</button><span>${index+1} / ${group.services.length}</span></div><div class="compact-layout"><div class="compact-photos" aria-label="Swipe service photos">${media.photos.map((p,i)=>`<figure><img src="${p}" alt="${media.photoLabel} ${i+1}"><figcaption>${i+1} / 4 · Swipe to explore</figcaption></figure>`).join('')}</div><div class="compact-copy"><small>${labels[category].toUpperCase()} EXPERIENCE</small><h3>${name}</h3><p class="compact-intro">${subtitle}</p><ul class="compact-highlights">${highlights.map(h=>`<li><span>✦</span>${h}</li>`).join('')}</ul><details class="compact-disclosure"><summary>About this experience <span>＋</span></summary><p>${description}</p><p>${info}</p></details><details class="compact-disclosure compact-watch"><summary>Watch videos <span>▶ &nbsp; 2</span></summary><div class="compact-video-slots"></div><p class="media-help">${media.note}</p></details><p class="compact-caption">${media.photoLabel}. Ask for media of your selected act.</p></div></div><div class="experience-actions"><div><button data-step="-1" ${index===0?'disabled':''}>← Previous</button><button class="all-services">All services</button><button data-step="1" ${index===group.services.length-1?'disabled':''}>Next →</button></div><a href="${booking}" target="_blank" rel="noopener">Enquire about this service ↗</a></div>`;
const watch=body.querySelector('.compact-watch');watch.addEventListener('toggle',()=>{const slots=watch.querySelector('.compact-video-slots');slots.innerHTML=watch.open?media.videos.map(v=>`<article><iframe src="https://www.youtube-nocookie.com/embed/${v.id}?rel=0" title="${v.title}" allowfullscreen></iframe><p>${v.title}</p></article>`).join(''):'';});
body.querySelector('.app-back').onclick=body.querySelector('.all-services').onclick=()=>navigate(category);body.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>navigate(category,index+Number(b.dataset.step)));
}
// Keep every in-page menu and service shortcut within V2.
document.querySelectorAll('a[href^="#"]').forEach(a=>a.setAttribute('href','/v2/'+a.getAttribute('href')));
document.addEventListener('click',e=>{const a=e.target.closest('a');if(!a)return;const hash=new URL(a.href,location.href).hash.slice(1);if(collections[hash]){e.preventDefault();navigate(hash);}},true);
document.querySelectorAll('[data-open-service]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.openService)));
render();
})();
