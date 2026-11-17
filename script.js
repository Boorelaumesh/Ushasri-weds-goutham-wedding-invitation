/* ============ EDIT YOUR DETAILS HERE ============ */
const C = {
  groom: "Gowtham", bride: "Usha Sri",
  groomFull: "Kambampati Gowtham", brideFull: "Boorela Usha Sri",
  groomParents: "Sri Kambampati Chandra Shekar & Smt. Dhanalaxmi",
  brideParents: "Sri Boorela Venkatappaiah (Ganesh) & Smt. Sarala",
  invitePhoto: "images/family.jpg",                              // photo shown beside "Inviting by" (optional)
  invitedBy: [
    {title:"Bride's family", names:"Sri Boorela Venkatappaiah (Ganesh) & Smt. Sarala"},
    {title:"Groom's family", names:"Sri Kambampati Chandra Shekar & Smt. Dhanalaxmi"},
    {title:"Along with", names:"All our relatives & friends"}
  ],
  ganeshaImg: "images/ganesha.png",                              // optional: your own Ganesha image (e.g. "images/ganesha.png"); leave "" to use the built-in drawing
  groomPhoto: "images/groom.jpeg", bridePhoto: "images/bride.jpeg",              // image URLs (optional)
  weddingDate: "2026-11-26T09:22:00",           // main ceremony, local time (26 Nov 2026, morning)
  countdownDate: "2026-11-26T09:22:00",         // "Our Special Day" countdown target
  place: "R.C. Convention Hall, Mahabubabad",
  events: [
    {name:"Wedding Ceremony", day:"Thursday, 26 November", time:"09:22 AM",  place:"R.C. Convention Hall, Mahabubabad", map:"https://share.google/55If2Tg5EypRz2FtD"}
  ],
  bgImages: ["images/bg/bg1.jpeg","images/bg/bg2.jpeg","images/bg/bg3.jpeg"],                                 // optional: image URLs for the hero background slideshow (falls back to photos, then to soft colour scenes)
  photos:["images/gallery1.jpeg","images/gallery4.jpeg","images/gallery5.jpeg","images/gallery6.jpeg","images/gallery7.jpeg"],                  // up to 6 image URLs
  venueName: "R.C. Convention Hall", venueAddr: "Dornakal Road, Mahabubabad",
  mapQuery: "R.C. Convention Hall, Dornakal Road, Mahabubabad",   // used for the embedded map
  mapLink: "https://share.google/55If2Tg5EypRz2FtD",   // opened by the Get directions button
  cardImg: "images/wedding-card.jpeg",              // the wedding card picture shown by the Wedding card button
  song: "music/song.mp3",                          // your music file (mp3) in the same folder, or a full URL; plays when guests tap Open invitation
  toranImg: "",                                 // optional: your own transparent PNG for the hero toran
  sidesImg: "",                                 // optional: one wide transparent PNG with both side garlands
};
/* ================================================= */
const $ = id => document.getElementById(id);
/* ---- Telugu translation (edit the Telugu text here) ---- */
const TE={
  groom:"గౌతమ్", bride:"ఉష శ్రీ",
  groomFull:"కంభంపాటి గౌతమ్", brideFull:"బూరెల ఉషశ్రీ",
  groomParents:"శ్రీ కంభంపాటి చంద్రశేఖర్ & శ్రీమతి ధనలక్ష్మి",
  brideParents:"శ్రీ బూరెల వెంకటప్పయ్య (గణేష్) & శ్రీమతి సరళ",
  place:"ఆర్.సి. కన్వెన్షన్ హాల్, మహబూబాబాద్",
  venueName:"ఆర్.సి. కన్వెన్షన్ హాల్", venueAddr:"డోర్నకల్ రోడ్, మహబూబాబాద్",
  invitedBy:[
    {title:"వధువు కుటుంబం", names:"శ్రీ బూరెల వెంకటప్పయ్య (గణేష్) & శ్రీమతి సరళ"},
    {title:"వరుని కుటుంబం", names:"శ్రీ కంభంపాటి చంద్రశేఖర్ & శ్రీమతి ధనలక్ష్మి"},
    {title:"వీరితో పాటు", names:"మా బంధుమిత్రులందరూ"}
  ],
  events:[
    {name:"వివాహ వేడుక", day:"గురువారం, 26 నవంబర్", time:"ఉదయం 9:22", place:"ఆర్.సి. కన్వెన్షన్ హాల్, మహబూబాబాద్"}
  ]
};
const UI={te:{
  title:"వివాహ ఆహ్వానం", guest:"అతిథి", dear:"ప్రియమైన",
  mantra:"|| శ్రీ గణేశాయ నమః ||", invited:"వీరి వివాహానికి మీకు ఆహ్వానం", open:"ఆహ్వానాన్ని తెరవండి",
  quote:"“రెండు హృదయాలు ఒక్కటై, ఒక అందమైన ప్రయాణం మొదలవుతోంది. జీవితాంతం కలిసి ఉండాలని ఆశీర్వదిస్తున్నాం.”",
  together:"మా కుటుంబ ఆశీస్సులతో", cordial:"మేము పెళ్లి చేసుకుంటున్నాము! మా కొత్త జీవిత ప్రయాణంలో మీ ప్రేమ, ఆశీస్సులతో మా వివాహ వేడుకలో పాల్గొనమని సాదరంగా ఆహ్వానిస్తున్నాము.", vow:"వివాహం అంటే రెండు హృదయాల కలయిక మాత్రమే కాదు, రెండు ఆత్మల, రెండు కుటుంబాల అనుబంధం — ప్రతి కాలంలోనూ ప్రేమ, నమ్మకం, గౌరవంతో కలిసి నడుస్తామనే ఒక వాగ్దానం.", steps:"ఏడడుగులు, ఏడు ప్రమాణాలు — జీవితాంతం ఒక్కటిగా.",
  about:"వధూవరుల పరిచయం", daughter:"కుమార్తె", son:"కుమారుడు",
  events:"వివాహ కార్యక్రమాలు", dir:"మార్గం చూడండి",
  countkick:"వేడుక ప్రారంభానికి ఇంకా", special:"మా ప్రత్యేకమైన రోజు",
  moments:"మధుర క్షణాలు", invkick:"మా కుటుంబాల ఆశీస్సులతో", invby:"ఆహ్వానించువారు",
  invnote:"మీ రాక, మీ ఆశీస్సులతో మా వేడుక సంపూర్ణమవుతుంది.",
  when:"ఎప్పుడు & ఎక్కడ", share:"ఈ ఆహ్వానాన్ని పంచుకోండి",
  card:"వివాహ ఆహ్వాన పత్రిక", cardMissing:"పత్రిక చిత్రం కనిపించలేదు", cal:"గూగుల్ క్యాలెండర్‌లో చేర్చండి", copy:"లింక్ కాపీ చేయండి", copied:"లింక్ కాపీ అయింది",
  thanks:"మా ఆనందంలో భాగమైనందుకు ధన్యవాదాలు",
  fTop:"పైకి", fCouple:"వధూవరులు", fInv:"ఆహ్వానం", fMoments:"క్షణాలు", made:"ప్రేమతో రూపొందించబడింది",
  cd:["రోజులు","గంటలు","నిమిషాలు","సెకన్లు"]
}};
let names,dateStr,lang='en';
try{const q=new URLSearchParams(location.search).get('lang')||localStorage.getItem('lang');if(q==='te'||q==='en')lang=q}catch(_){}
const wd = new Date(C.weddingDate);
const cdDate = new Date(C.countdownDate||C.weddingDate);
const guest = new URLSearchParams(location.search).get('to');
if (guest) $('guest').textContent = guest;
const ph=(el,url,txt,id)=>{el.innerHTML=wreath(url,txt,id)};
/* Plain circular photo frame (static, gold ring) */
(function(){
  const petals=(f,e)=>Array.from({length:11},(_,i)=>`<circle r="6.6" cx="0" cy="-11" transform="rotate(${i*360/11})" fill="${f}" stroke="${e}" stroke-width=".6"/>`).join('');
  $('wdefs').innerHTML=`
   <linearGradient id="lg" x1="0" y1="0" x2="0" y2="-1"><stop offset="0" stop-color="#1b5e20"/><stop offset=".6" stop-color="#3f9a2a"/><stop offset="1" stop-color="#7cc342"/></linearGradient>
   <radialGradient id="phg"><stop offset="0" stop-color="#e8781a"/><stop offset="1" stop-color="#5a0f1e"/></radialGradient>
   <g id="mgO"><circle r="18" fill="#ee7410"/>${petals('#ff9a1f','#d65f08')}<circle r="6" fill="#c9540a"/></g>
   <g id="mgY"><circle r="18" fill="#f2b705"/>${petals('#ffd23a','#e0a400')}<circle r="6" fill="#d99a00"/></g>`;
})();
function wreath(url,initial,id){
  const pic=url
    ? `<image href="${url}" x="-106" y="-106" width="212" height="212" preserveAspectRatio="xMidYMid slice" clip-path="url(#cp${id})"/>`
    : `<circle r="106" fill="url(#phg)"/><text y="26" text-anchor="middle" font-size="80" font-family="Cormorant Garamond,Noto Serif Telugu,serif" font-weight="700" fill="#f0d28a">${initial[0]}</text>`;
  return `<svg class="wreath" viewBox="-112 -112 224 224" role="img" aria-label="${initial}">
    <clipPath id="cp${id}"><circle r="106"/></clipPath>
    ${pic}<circle r="107" fill="none" stroke="#c9973b" stroke-width="4"/></svg>`;
}
$('invPhoto').innerHTML=C.invitePhoto?`<img src="${C.invitePhoto}" alt="Our families">`:`<div class="invph"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46" fill="none" stroke="#c9973b" stroke-width="2"/><path d="M50 72S28 58 28 42a12 12 0 0 1 22-6 12 12 0 0 1 22 6c0 16-22 30-22 30z" fill="#f0d28a"/></svg><span>Family photo</span></div>`;
if(C.ganeshaImg)document.querySelectorAll('svg.cv-ganesha,svg.ganesha,svg.fganesha').forEach(s=>{const i=new Image();i.src=C.ganeshaImg;i.alt='Ganesha';i.className=s.getAttribute('class')+' gimg';i.style.cssText=s.getAttribute('style')||'';s.replaceWith(i)});
const q=encodeURIComponent(C.mapQuery);
$('vMap').src=`https://www.google.com/maps?q=${q}&output=embed`;
$('vDir').href=C.mapLink||`https://www.google.com/maps/search/?api=1&query=${q}`;

(function(){
  const fan=$('fan'),dots=$('dots'),n=C.photos.length,h=Math.floor(n/2);
  const g=[['#f6c26b','#8e1b23'],['#3f9a2a','#0e2a14'],['#e8781a','#5a0f1e'],['#c9973b','#3b0a14'],['#f0d28a','#a35a1a'],['#8e1b23','#1a0408']];
  fan.innerHTML=C.photos.map((p,i)=>`<button class="card" aria-label="Photo ${i+1}">${p?`<img src="${p}" alt="Wedding photo ${i+1}" loading="lazy" draggable="false">`:`<div class="ph" style="background:linear-gradient(160deg,${g[i%6][0]},${g[i%6][1]})">Photo ${i+1}</div>`}</button>`).join('');
  dots.innerHTML=C.photos.map(()=>'<i></i>').join('');
  const cards=[...fan.children],ds=[...dots.children];
  let a=0,moved=false,timer,lbOpen=false;
  function render(){
    cards.forEach((c,i)=>{
      const o=((i-a+n+h)%n)-h,ab=Math.abs(o);
      c.style.transform=`translateX(calc(${o} * var(--w) * .62)) translateY(${ab*16}px) rotate(${o*7}deg) scale(${1-ab*.09})`;
      c.style.zIndex=10-ab;
      c.style.opacity=ab>2?0:1;
      c.style.pointerEvents=ab>2?'none':'auto';
      c.classList.toggle('on',o===0);
    });
    ds.forEach((d,i)=>d.classList.toggle('on',i===a));
  }
  const go=d=>{a=(a+d+n)%n;render()};
  cards.forEach((c,i)=>c.onclick=()=>{if(moved)return;if(i===a)openLb(i);else{a=i;render()}});
  $('next').onclick=()=>go(1); $('prev').onclick=()=>go(-1);
  fan.addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1)});
  let x0=0;
  fan.addEventListener('pointerdown',e=>{x0=e.clientX;moved=false});
  fan.addEventListener('pointerup',e=>{const dx=e.clientX-x0;if(Math.abs(dx)>40){moved=true;go(dx<0?1:-1);setTimeout(()=>moved=false,50)}});
  const play=()=>{clearInterval(timer);if(!lbOpen&&!matchMedia('(prefers-reduced-motion:reduce)').matches)timer=setInterval(()=>go(1),3800)};
  fan.onpointerenter=()=>clearInterval(timer); fan.onpointerleave=play;
  /* Full-screen photo viewer */
  const lb=$('lb'),st=$('lbStage');let last;
  function show(i){
    const k=(i+n)%n,p=C.photos[k];
    st.innerHTML=p?`<img src="${p}" alt="Wedding photo ${k+1}">`:`<div class="ph" style="background:linear-gradient(160deg,${g[k%6][0]},${g[k%6][1]})">Photo ${k+1}</div>`;
    $('lbCount').textContent=`${k+1} / ${n}`;
    a=k;render();
  }
  function openLb(i){
    last=document.activeElement;lbOpen=true;clearInterval(timer);
    lb.hidden=false;requestAnimationFrame(()=>lb.classList.add('show'));
    document.body.style.overflow='hidden';show(i);$('lbClose').focus();
  }
  function closeLb(){
    lbOpen=false;lb.classList.remove('show');
    setTimeout(()=>{if(!lbOpen)lb.hidden=true},350);
    document.body.style.overflow='';
    if(last)last.focus();play();
  }
  $('lbClose').onclick=closeLb;
  $('lbNext').onclick=()=>show(a+1); $('lbPrev').onclick=()=>show(a-1);
  lb.addEventListener('click',e=>{if(e.target===lb||e.target===st)closeLb()});
  document.addEventListener('keydown',e=>{
    if(!lbOpen)return;
    if(e.key==='Escape')closeLb();
    if(e.key==='ArrowRight')show(a+1);
    if(e.key==='ArrowLeft')show(a-1);
    if(e.key==='Tab'){
      const f=[$('lbClose'),$('lbPrev'),$('lbNext')],i=f.indexOf(document.activeElement);
      e.preventDefault();f[(i+(e.shiftKey?-1:1)+f.length)%f.length].focus();
    }
  });
  let lx=0;
  lb.addEventListener('pointerdown',e=>lx=e.clientX);
  lb.addEventListener('pointerup',e=>{const dx=e.clientX-lx;if(Math.abs(dx)>50)show(a+(dx<0?1:-1))});
  render(); play();
})();

/* Opening sequence art */
(function(){
  /* marigold garland strip */
  let g='';const n=Math.ceil(innerWidth/24)+2;
  for(let i=0;i<n;i++){const x=i*24;
    g+=`<g class="gb" style="animation-delay:${(-i*.16).toFixed(2)}s"><path d="M${x+2} 26L${x+22} 26L${x+12} 46Z" fill="#2f7d32"/><use href="#${i%2?'mgY':'mgO'}" transform="translate(${x+12},20) scale(.8)"/><circle cx="${x+24}" cy="34" r="4" fill="#fff"/></g>`;
  }
  $('garland').innerHTML=g;
  /* Sri Venkateswara Swamy temple, Tirumala (animated cover skyline) */
  let t='';
  const lin=(pts,x)=>{for(let i=1;i<pts.length;i++){if(x<=pts[i][0]){const a=pts[i-1],b=pts[i];return a[1]+(b[1]-a[1])*(x-a[0])/(b[0]-a[0])}}return pts[pts.length-1][1]};
  const farH=[[-300,200],[160,120],[480,58],[600,72],[900,46],[1200,110],[1500,170]];
  const nearH=[[-300,225],[240,172],[600,150],[1000,166],[1500,205]];
  const hill=(pts,c1,c2,c3)=>{
    let o=`<path d="M${pts.map(p=>p.join(' ')).join('L')}V275H-300Z" fill="${c1}"/>`;
    for(let i=0;i<=138;i++){const x=-300+i*13,y=lin(pts,x)+(i*7)%5;o+=`<circle cx="${x}" cy="${y+5}" r="${10+(i*7)%5}" fill="${i%3?c1:c2}"/>`}
    for(let i=0;i<110;i++){const x=-300+(i*151)%1800,y=lin(pts,x)+16+(i*37)%55;if(y<258)o+=`<circle cx="${x}" cy="${y}" r="${3+i%3}" fill="${i%2?c3:c2}" opacity=".5"/>`}
    return o};
  t+=hill(farH,'#6f9c44','#86b255','#4d7a2c')+hill(nearH,'#4a7a2b','#5d8d36','#34601f');

  /* distant small white gopurams */
  const mini=(cx,w0,k,h,by)=>{let o='';
    for(let i=0;i<k;i++){const w=w0-i*(w0*.6/k),y=by-(i+1)*h;
      o+=`<rect x="${cx-w/2}" y="${y}" width="${w}" height="${h}" fill="#e6edf1"/><rect x="${cx-w/2-2}" y="${y+h-2}" width="${w+4}" height="2.4" fill="#b9c8d2"/><rect x="${cx-1.5}" y="${y+2}" width="3" height="${h-5}" fill="#8aa0ae"/>`}
    const top=by-k*h;
    return o+`<path d="M${cx-w0*.2} ${top}Q${cx} ${top-12} ${cx+w0*.2} ${top}Z" fill="#e6edf1" stroke="#b9c8d2" stroke-width=".8"/><path d="M${cx} ${top-8}v-6" stroke="#d9a02a" stroke-width="1.4"/><circle cx="${cx}" cy="${top-9}" r="2" fill="url(#cvGold)"/>`};
  t+='<g transform="translate(600 212) scale(1.2) translate(-600 -212)">'+mini(300,46,5,10,212)+mini(360,34,4,9,212)+mini(850,40,5,10,212)+mini(915,48,6,10,212)+mini(1010,34,4,9,212);

  /* golden Ananda Nilayam vimana */
  const vim=(cx,by)=>{let o='',y=by;
    [[64,15],[52,13],[40,13]].forEach(([w,h])=>{y-=h;
      o+=`<rect x="${cx-w/2}" y="${y}" width="${w}" height="${h}" fill="url(#cvGold)" stroke="#8a5a0c" stroke-width=".8"/><rect x="${cx-w/2-3}" y="${y}" width="${w+6}" height="3" fill="#b8801a"/>`;
      for(let j=0;j<Math.floor(w/12);j++)o+=`<rect x="${cx-w/2+6+j*12}" y="${y+5}" width="5" height="${h-7}" fill="#8a5a0c" opacity=".55"/>`});
    const top=y;
    return o+`<path d="M${cx-18} ${top}C${cx-18} ${top-26} ${cx+18} ${top-26} ${cx+18} ${top}Z" fill="url(#cvGold)" stroke="#8a5a0c" stroke-width=".9"/><path d="M${cx-9} ${top}Q${cx-10} ${top-16} ${cx} ${top-20}M${cx+9} ${top}Q${cx+10} ${top-16} ${cx} ${top-20}M${cx} ${top}V${top-20}" fill="none" stroke="#8a5a0c" stroke-width=".7" opacity=".6"/><path d="M${cx} ${top-20}C${cx-4} ${top-24} ${cx-4} ${top-30} ${cx} ${top-36}C${cx+4} ${top-30} ${cx+4} ${top-24} ${cx} ${top-20}Z" fill="url(#cvGold)" stroke="#8a5a0c" stroke-width=".7"/>`};
  t+=vim(462,212)+'</g>';

  /* compound wall, plaza */
  t+=`<rect x="-300" y="212" width="1800" height="12" fill="#f3f0e8"/><rect x="-300" y="222" width="1800" height="40" fill="#b58a5b"/><rect x="-300" y="222" width="1800" height="3" fill="#8f6a40"/>`;
  for(let x=-300;x<1500;x+=16)t+=`<path d="M${x} 212q8 -7 16 0z" fill="#f7f4ec"/>`;
  for(let x=-280;x<1500;x+=64)t+=`<path d="M${x-9} 252V237a9 9 0 0 1 18 0V252Z" fill="#3a8a9a" stroke="#efe9db" stroke-width="2"/><circle cx="${x}" cy="241" r="2.3" fill="#f4efe3"/><rect x="${x-2}" y="243" width="4" height="9" rx="1" fill="#f4efe3"/>`;
  t+=`<rect x="-300" y="262" width="1800" height="8" fill="#3a7f8f"/><rect x="-300" y="270" width="1800" height="30" fill="#d9c9a6"/><rect x="-300" y="270" width="1800" height="2.5" fill="#b9a67c"/>`;

  /* gate block + the great white gopuram */
  t+='<g transform="translate(600 262) scale(1.2) translate(-600 -262)">';
  t+=`<rect x="555" y="222" width="90" height="40" fill="#c7a475" stroke="#8f6a40" stroke-width="1"/><path d="M586 262V246a14 14 0 0 1 28 0V262Z" fill="#3b2a1a"/>`;
  for(let i=0;i<7;i++){const w=150-i*15,by=222-i*17,x=600-w/2,n=Math.floor(w/22);
    t+=`<rect x="${x}" y="${by-17}" width="${w}" height="17" fill="#f4f1ea"/><rect x="600" y="${by-17}" width="${w/2}" height="17" fill="#d9d4c8" opacity=".5"/><rect x="${x-5}" y="${by-3}" width="${w+10}" height="3.4" fill="#cdc7b8"/><rect x="597" y="${by-14}" width="6" height="10" rx="1" fill="#5d574c"/>`;
    for(let j=1;j<=n;j++){const dx=j*(w/2/(n+.6));[-1,1].forEach(s=>{t+=`<rect x="${600+s*dx-2.5}" y="${by-14}" width="5" height="10" rx="2" fill="#dcd7ca"/><circle cx="${600+s*dx}" cy="${by-15.5}" r="1.5" fill="#cfc9bb"/>`})}}
  t+=`<path d="M574 104V92Q574 84 600 84Q626 84 626 92V104Z" fill="#f4f1ea" stroke="#cdc7b8" stroke-width="1"/><path d="M574 92Q564 91 564 79Q570 86 577 86Z" fill="#f4f1ea" stroke="#cdc7b8" stroke-width=".8"/><path d="M626 92Q636 91 636 79Q630 86 623 86Z" fill="#f4f1ea" stroke="#cdc7b8" stroke-width=".8"/>`;
  for(let i=0;i<7;i++)t+=`<g transform="translate(${578+i*7.33},84)"><circle cy="1.5" r="2.6" fill="url(#cvGold)"/><path d="M0 0C-3 -3 -3 -7 0 -12C3 -7 3 -3 0 0Z" fill="url(#cvGold)" stroke="#8a5a0c" stroke-width=".4"/></g>`;

  /* golden gate turrets + flags */
  [510,690].forEach(x=>{
    t+=`<rect x="${x-9}" y="236" width="18" height="26" fill="#b6976a" stroke="#8a6a40" stroke-width=".8"/><rect x="${x-3}" y="242" width="6" height="9" fill="#e0b34a"/><rect x="${x-11}" y="230" width="22" height="7" fill="url(#cvGold)" stroke="#8a5a0c" stroke-width=".6"/><path d="M${x-9} 230Q${x-9} 214 ${x} 212Q${x+9} 214 ${x+9} 230Z" fill="url(#cvGold)" stroke="#8a5a0c" stroke-width=".7"/><path d="M${x} 212V196" stroke="#8a5a0c" stroke-width="1.3"/><path class="tfg" d="M${x} 196L${x+14} 200L${x} 204Z" fill="#e8301f"/>`});

  /* wooden gateway with the Vaishnava namam board */
  t+=`<rect x="571" y="190" width="58" height="6" fill="#a8845a" stroke="#6b4a2a" stroke-width=".8"/><path d="M567 190L575 182H625L633 190Z" fill="#8d6a43"/><rect x="574" y="196" width="4" height="62" fill="#7a5a38"/><rect x="622" y="196" width="4" height="62" fill="#7a5a38"/><rect x="584" y="198" width="32" height="38" fill="#f7f4ec" stroke="#c9a56a" stroke-width="1.4"/><circle cx="600" cy="216" r="12" fill="#b3202e" stroke="#e0b34a" stroke-width="1.6"/><path d="M594 208V218Q594 224 600 224Q606 224 606 218V208" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M600 208V218" stroke="#f2b705" stroke-width="2"/></g>`;

  /* life: pilgrims, diyas, twinkles, petals, doves */
  let ex='';
  const cols=['#c62828','#e8781a','#f2b705','#fffaf0','#2e7d32','#b3202e','#1e88e5','#fffaf0'];
  for(let i=0;i<8;i++){const dir=i%2?-1:1;
    ex+=`<g class="tpil" style="animation-duration:${95+i*9}s;animation-delay:${-i*17}s;${dir<0?'animation-direction:reverse':''}"><g transform="translate(-300,${276-(i%3)*2}) scale(${dir*1.25},1.25)"><g class="tstep" style="animation-delay:${(-i*.2).toFixed(1)}s"><path d="M-4.2 0L-3 -12L3 -12L4.2 0Z" fill="${cols[i]}"/><circle cy="-15" r="2.8" fill="#d09a68"/><path d="M-2.8 -15.5a2.8 2.8 0 0 1 5.6 0z" fill="#2a1408"/></g></g></g>`}
  for(let i=0;i<13;i++){const x=-240+i*135+(i%2)*10,dl=(-(i%5)*.18).toFixed(2);
    ex+=`<g transform="translate(${x},283)"><ellipse class="tgl" style="animation-delay:${(-(i%4)*.35).toFixed(2)}s" cy="-14" rx="17" ry="15" fill="url(#cvGlow)"/><path d="M-10 -1Q-10 8 0 8Q10 8 10 -1Z" fill="#b8460f" stroke="#f0d28a" stroke-width="1.1"/><path class="tfl" style="animation-delay:${dl}s" d="M0 -3C-5 -9 -3 -15 0 -21C3 -15 5 -9 0 -3Z" fill="#ffb21c"/><path class="tfl" style="animation-delay:${dl}s" d="M0 -3C-2.4 -6 -1.6 -9.5 0 -12.5C1.6 -9.5 2.4 -6 0 -3Z" fill="#fff3a0"/></g>`}
  const star='M0 -7L1.8 -1.8L7 0L1.8 1.8L0 7L-1.8 1.8L-7 0L-1.8 -1.8Z';
  [[600,68],[584,72],[616,72],[462,128],[510,208],[690,208]].forEach(([x,y],i)=>{ex+=`<g transform="translate(${x},${y}) scale(.9)"><path class="tsp" style="animation-delay:${(-i*.5).toFixed(1)}s" d="${star}" fill="#fff1a8"/></g>`});
  for(let i=0;i<16;i++){const x=-250+(i*173+40)%1700,y=60+((i*97)%170),sc=(.6+(i%4)*.25).toFixed(2);
    ex+=`<g transform="translate(${x},${y}) scale(${sc})"><path class="tsp" style="animation-delay:${(-i*.45).toFixed(2)}s" d="${star}" fill="#f2c14e"/></g>`}
  for(let i=0;i<10;i++){const x=-250+(i*127+60)%1700,dx=(i%2?1:-1)*(20+(i*13)%40);
    ex+=`<g transform="translate(${x},262)"><path class="trs" style="--dx:${dx}px;animation-duration:${(9+(i%5)*1.6).toFixed(1)}s;animation-delay:${(-i*1.3).toFixed(1)}s" d="M0 0C4 -5 4 -10 0 -14C-4 -10 -4 -5 0 0Z" fill="${i%3?'#f4b73a':'#e8781a'}"/></g>`}
  const dove=(y,dl,sc)=>`<g class="tfly" style="animation-delay:${dl}s"><g transform="translate(0,${y}) scale(${sc})"><g class="tbob"><path d="M0 0C6 -4 15 -4 21 -1C15 3 6 3 0 0Z" fill="#fffaf0" stroke="#d8c8a4" stroke-width=".8"/><circle cx="22" cy="-1.6" r="2.7" fill="#fffaf0" stroke="#d8c8a4" stroke-width=".8"/><path d="M24.4 -1.8L28 -1L24.4 -.2Z" fill="#e8861a"/><path d="M0 0L-9 -2L-8 2Z" fill="#fffaf0" stroke="#d8c8a4" stroke-width=".8"/><path class="twing" d="M9 -1C9 -12 16 -17 22 -19C19 -11 17 -5 15 -1Z" fill="#fff" stroke="#d8c8a4" stroke-width=".8"/></g></g></g>`;
  ex+=dove(58,-6,1.3)+dove(76,-7.4,1);
  $('cvTemple').innerHTML='<defs><radialGradient id="cvGlow"><stop offset="0" stop-color="#ffcf5a" stop-opacity=".75"/><stop offset="1" stop-color="#ffcf5a" stop-opacity="0"/></radialGradient><linearGradient id="cvGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f9e08a"/><stop offset=".5" stop-color="#d9a02a"/><stop offset="1" stop-color="#a8730f"/></linearGradient></defs>'+t+ex;

  /* gold line-art mandala (drawn after the click) */
  let m='<g class="all">';
  for(let k=0;k<8;k++){const a=k*Math.PI/4;m+=`<circle class="d" style="--i:${k}" cx="${(64*Math.sin(a)).toFixed(1)}" cy="${(-64*Math.cos(a)).toFixed(1)}" r="2.4"/>`}
  m+='<path class="s c" pathLength="1" d="M-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0"/><circle class="d" style="--i:4" r="1.8"/>';
  for(let k=0;k<4;k++)m+=`<path class="s p" pathLength="1" transform="rotate(${k*90})" d="M0 -10C11 -22 11 -42 0 -56C-11 -42 -11 -22 0 -10Z"/>`;
  m+='<path class="s q" pathLength="1" d="M0 -58L58 0L0 58L-58 0Z"/>';
  for(let k=0;k<4;k++)m+=`<path class="s q" pathLength="1" transform="rotate(${45+k*90})" d="M0 -12C7 -20 7 -34 0 -42C-7 -34 -7 -20 0 -12Z"/>`;
  $('ldSvg').innerHTML=m+'</g>';
})();

/* Toran (swaying garland) */
document.querySelectorAll('[data-toran]').forEach(el=>{
  const n=14,w=100/n; let s=`<svg viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 1Q50 3 100 1" stroke="#c9973b" stroke-width=".6" fill="none"/>`;
  for(let i=0;i<n;i++){
    const x=i*w,col=i%2?'#2f6b3a':'#e8781a';
    s+=`<g class="tri" style="animation-delay:${(i%5)*-.5}s"><path d="M${x+.4} 1.5L${x+w-.4} 1.5L${x+w/2} ${i%2?15:19}Z" fill="${col}"/><circle cx="${x+w/2}" cy="${i%2?16:20}" r=".9" fill="#f0d28a"/></g>`;
  }
  el.innerHTML=s+'</svg>';
});

/* Hero decor: bouncing marigold toran + hanging side garlands */
(function(){
  const F=(k,sc,x,y,d,b)=>`<g transform="translate(${x},${y})"><g ${b?`class="fb" style="--d:${d}s"`:''}><use href="#${k}" transform="scale(${sc})"/></g></g>`;
  const bell=(x,y,sc)=>`<g transform="translate(${x},${y}) scale(${sc})"><path d="M-7 0C-7 -9 7 -9 7 0L9 8H-9Z" fill="#c8962f"/><circle cy="10" r="2.6" fill="#8a5a0c"/></g>`;
  /* centre toran */
  if(C.toranImg) $('htoran').innerHTML=`<img src="${C.toranImg}" alt="">`;
  else{
    const W=1200,yc=x=>20+120*(x/W)*(1-x/W),xs=Array.from({length:12},(_,i)=>100+i*1000/11);
    let L='',Fw='',S='';
    for(let x=30;x<W;x+=36){ if(xs.some(a=>Math.abs(a-x)<30))continue;
      L+=`<g transform="translate(${x},${yc(x)}) rotate(${((x-600)/600*10).toFixed(1)})"><g class="sw2" style="--d:${-(x%7)*.3}s"><path d="M0 0C11 14 12 44 0 66C-12 44 -11 14 0 0Z" fill="#2e9a3f"/><path d="M0 6V58" stroke="#a6e39b" stroke-width="1" opacity=".7"/></g></g>`}
    for(let x=14,i=0;x<W;x+=29,i++) Fw+=F(i%4?'mgO':'mgY',.82,x,yc(x),i*.09,1);
    xs.forEach((x,i)=>{
      let st='';
      for(let j=0;j<4;j++) st+=`<ellipse cy="${14+j*25+12}" rx="8" ry="3.5" fill="#3a9a3a"/>`+F('mgO',.72,0,14+j*25,i*.15+j*.12,1);
      st+='<rect x="-7" y="102" width="14" height="5" rx="2" fill="#b8892a"/>'+[-4,0,4].map(o=>`<line x1="${o}" y1="107" x2="${o}" y2="150" stroke="#d9a441" stroke-width="1.5" stroke-dasharray="2 2"/>`).join('');
      st+=`<g class="bb" style="--d:${i*.17}s"><circle cx="-6" cy="158" r="7" fill="#ef4b5f"/><circle cx="6" cy="158" r="7" fill="#ef4b5f"/><circle cy="167" r="7" fill="#e86fd0"/></g>`;
      S+=`<g transform="translate(${x},${(yc(x)+10).toFixed(1)})"><g class="sw" style="--d:${-i*.4}s">${st}</g></g>`;
    });
    $('htoran').innerHTML=`<svg viewBox="0 0 1200 250" aria-hidden="true">${L}<path d="M0 20Q600 80 1200 20" fill="none" stroke="#b5483a" stroke-width="2"/>${Fw}${S}</svg>`;
  }
  /* left + right hanging garlands */
  if(C.sidesImg){
    const e=$('hgl');e.className='hgfull';e.innerHTML=`<img src="${C.sidesImg}" alt="">`;$('hgr').remove();
  }else{
    let tg='',beads='',swag='',conf='';
    for(let j=0;j<20;j++) tg+=F(j%3?'mgO':'mgY',.8,0,14+j*16,j*.07,1);
    tg+='<path d="M-9 328L9 328L5 362L0 376L-5 362Z" fill="#e8541a"/>';
    for(let y=10;y<300;y+=11) beads+=`<circle cy="${y}" r="4.4" fill="${(y/11|0)%2?'#f5a300':'#ee7410'}"/>`;
    beads+='<circle cy="312" r="5" fill="#3a9a3a"/>';
    for(let t=.06;t<1;t+=.1){const u=1-t;swag+=F(t*10%2<1?'mgY':'mgO',.38,u*u*70+2*t*u*150+t*t*215,u*u*36+2*t*u*120+t*t*18,0,0)}
    [[100,60],[120,40],[140,80],[160,50],[185,70],[110,110],[150,120],[175,100],[205,60],[90,90]].forEach(([x,y],i)=>conf+=`<path transform="translate(${x},${y}) rotate(${i*47%360})" d="M0 0L7 2L2 8Z" fill="${i%2?'#d62828':'#f08a24'}" opacity=".9"/>`);
    const svg=`<svg viewBox="0 0 220 440" aria-hidden="true"><path d="M70 36Q150 120 215 18" fill="none" stroke="#b5833a" stroke-width="1.4"/>${swag}${conf}
      <g transform="translate(18,0)"><g class="sw" style="--d:-1s">${beads}</g></g>
      <g transform="translate(40,0)"><g class="sw" style="--d:-2s"><line y2="330" stroke="#c62828" stroke-width="1.6"/>${[60,150,250].map(y=>`<circle cy="${y}" r="3.6" fill="#c62828"/>`).join('')}${bell(0,100,1)}${bell(0,300,1)}</g></g>
      <g transform="translate(64,0)"><g class="sw2">${tg}</g></g>
      <g transform="translate(128,0)"><g class="sw" style="--d:-.5s"><line y2="215" stroke="#c9973b" stroke-width="1.3"/>${bell(0,222,1.5)}</g></g></svg>`;
    $('hgl').innerHTML=svg;$('hgr').innerHTML=svg;
  }
})();

/* Falling marigold petals */
$('petals').innerHTML=Array.from({length:14},(_,i)=>`<span style="left:${Math.random()*100}%;animation-duration:${8+Math.random()*8}s;animation-delay:${-Math.random()*12}s;background:${i%3?'#e8781a':'#f0b429'}"></span>`).join('');

/* Open invitation: cover fades -> mandala draws -> page reveals */
/* Background music: starts on the Open invitation tap (a user gesture, so browsers allow it) */
const bgm=$('bgm'),mb=$('mute');
let musicOn=false,fade;
function setMusic(on){
  musicOn=on;mb.classList.toggle('off',!on);
  mb.setAttribute('aria-pressed',on);mb.setAttribute('aria-label',on?'Pause music':'Play music');
  clearInterval(fade);
  if(on){
    bgm.volume=0;
    const r=bgm.play();
    if(r&&r.catch)r.catch(e=>{console.warn('Music could not play:',e.name,e.message);setMusic(false)});
    fade=setInterval(()=>{bgm.volume=Math.min(.7,bgm.volume+.05);if(bgm.volume>=.7)clearInterval(fade)},120);
  }else bgm.pause();
}
mb.onclick=()=>setMusic(!musicOn);
document.addEventListener('visibilitychange',()=>{if(document.hidden)bgm.pause();else if(musicOn)bgm.play().catch(()=>{})});
if(C.song)bgm.src=C.song;
bgm.addEventListener('error',()=>{console.error('Song file not found or unsupported: "'+C.song+'" (resolved to '+bgm.src+'). Check the file name, folder and that it is a real .mp3.');setMusic(false)});
$('openBtn').onclick=()=>{
  if(C.song){mb.hidden=false;setMusic(true)}
  const c=$('cover'),quick=matchMedia('(prefers-reduced-motion:reduce)').matches,T=quick?[200,500]:[3500,4500];
  c.classList.add('go');
  setTimeout(()=>{document.body.classList.add('revealed');document.body.classList.remove('locked');c.classList.add('done')},T[0]);
  setTimeout(()=>c.style.display='none',T[1]);
};

/* Scroll reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

/* Countdown */
const cd=$('count');
function tick(){
  let d=Math.max(0,cdDate-new Date()); const lb=lang==='te'?UI.te.cd:['Days','Hours','Minutes','Seconds'],v=[[lb[0],864e5],[lb[1],36e5],[lb[2],6e4],[lb[3],1e3]];
  cd.innerHTML=v.map(([l,ms])=>{const x=Math.floor(d/ms);d-=x*ms;return `<div class="cd"><b>${String(x).padStart(2,'0')}</b><small>${l}</small></div>`}).join('');
}
tick(); setInterval(tick,1000);

/* Share */
$('shCal').onclick=()=>{
  const f=d=>d.toISOString().replace(/[-:]|\.\d{3}/g,'');
  const end=new Date(wd.getTime()+3*36e5);
  const q=new URLSearchParams({action:'TEMPLATE',text:'Wedding of '+names,dates:f(wd)+'/'+f(end),details:'You are warmly invited to the wedding of '+names+'.',location:C.place,ctz:'Asia/Kolkata'});
  window.open('https://calendar.google.com/calendar/render?'+q.toString(),'_blank','noopener');
};

/* Page background: changes as you scroll */
(function(){
  const box=document.getElementById('bgshow');if(!box)return;
  let imgs=[...(C.bgImages||[]),C.groomPhoto,C.bridePhoto,...(C.photos||[])].filter(Boolean);
  const scenes=['radial-gradient(ellipse at 30% 20%,#ffd08a,transparent 60%),linear-gradient(160deg,#ffb86b,#ffe3b3)',
    'radial-gradient(ellipse at 70% 25%,#ffc2b0,transparent 60%),linear-gradient(160deg,#f4a6a0,#ffe0d2)',
    'radial-gradient(ellipse at 50% 30%,#f7de9a,transparent 60%),linear-gradient(160deg,#e9c46a,#fff1c9)',
    'radial-gradient(ellipse at 30% 30%,#f2b6c6,transparent 60%),linear-gradient(160deg,#d98aa0,#ffe6ec)'];
  const bgs=imgs.length?imgs.map(u=>"url('"+encodeURI(u)+"')"):scenes;
  box.innerHTML=bgs.map(b=>'<div class="bs" style="--img:'+b+'"></div>').join('');
  const sl=[...box.children];let cur=-1;
  function upd(){
    const max=document.documentElement.scrollHeight-innerHeight;
    const pr=max>0?Math.min(Math.max(scrollY/max,0),.9999):0;
    const k=Math.floor(pr*sl.length);
    if(k!==cur){if(cur>=0)sl[cur].classList.remove('on');sl[k].classList.add('on');cur=k}
  }
  addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);upd();
})();

/* Language switch (English <-> Telugu) */
function applyLang(){
  const te=lang==='te',g=k=>te?TE[k]:C[k];
  document.documentElement.lang=lang;
  document.title=te?UI.te.title:'Wedding Invitation';
  names=`${g('bride')} & ${g('groom')}`;
  dateStr=wd.toLocaleDateString(te?'te-IN':'en-IN',{day:'numeric',month:'long',year:'numeric'});
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    if(el.dataset.en===undefined)el.dataset.en=el.textContent;
    el.textContent=te?UI.te[el.dataset.i18n]:el.dataset.en;
  });
  if(!guest)$('guest').textContent=te?UI.te.guest:'Guest';
  ['cvNames','heroNames','bNames','fNames'].forEach(i=>$(i).textContent=names);
  $('gName').textContent=g('groomFull');$('brName').textContent=g('brideFull');
  $('gPar').textContent=g('groomParents');$('brPar').textContent=g('brideParents');
  ph($('gPhoto'),C.groomPhoto,g('groom'),'g');ph($('bPhoto'),C.bridePhoto,g('bride'),'b');
  $('vName').textContent=g('venueName');$('vAddr').textContent=g('venueAddr');
  const inv=C.invitedBy.map((x,i)=>te&&TE.invitedBy[i]?TE.invitedBy[i]:x);
  $('invList').innerHTML=inv.map(x=>`<div class="invitem"><span>${x.title}</span><b>${x.names}</b></div>`).join('');
  const dl=te?UI.te.dir:'Get directions';
  $('events').innerHTML=C.events.map((e,i)=>{const v=te&&TE.events[i]?{...e,...TE.events[i]}:e;
    return `<div class="ev"><h3>${v.name}</h3><p>${v.day}</p><p class="t">${v.time}</p><p>${v.place}</p><a href="${e.map}" target="_blank" rel="noopener">${dl}</a></div>`}).join('');
  const b=$('langBtn');
  b.textContent=te?'View in English':'తెలుగులో చూడండి';
  b.lang=te?'en':'te';
  b.setAttribute('aria-label',te?'View this invitation in English':'ఈ ఆహ్వానాన్ని తెలుగులో చూడండి');
  tick();
}
$('langBtn').onclick=()=>{lang=lang==='te'?'en':'te';try{localStorage.setItem('lang',lang)}catch(_){}applyLang()};
applyLang();

/* Wedding card viewer (opens the card picture full screen) */
(function(){
  const m=$('cardLb'),st=$('cardStage');let last;
  function open(){
    last=document.activeElement;
    const te=lang==='te';
    st.innerHTML='';
    const im=new Image();im.alt=te?UI.te.card:'Wedding card';im.src=C.cardImg||'';
    im.onerror=()=>{st.innerHTML=`<p style="color:var(--gold2);padding:2rem">${te?UI.te.cardMissing:'Wedding card image not found. Check the cardImg path in script.js.'}</p>`};
    st.appendChild(im);
    m.hidden=false;requestAnimationFrame(()=>m.classList.add('show'));
    document.body.style.overflow='hidden';$('cardClose').focus();
  }
  function close(){
    m.classList.remove('show');setTimeout(()=>{if(!m.classList.contains('show'))m.hidden=true},350);
    document.body.style.overflow='';if(last)last.focus();
  }
  $('shCard').onclick=open;$('cardClose').onclick=close;
  m.addEventListener('click',e=>{if(e.target===m||e.target===st)close()});
  document.addEventListener('keydown',e=>{if(!m.hidden&&e.key==='Escape')close();if(!m.hidden&&e.key==='Tab'){e.preventDefault();$('cardClose').focus()}});
})();