const slides=[...document.querySelectorAll('.hero-slide')];
const dots=[...document.querySelectorAll('.hero-indicators button')];
let current=0, timer;
function showSlide(i){current=i;slides.forEach((s,n)=>s.classList.toggle('active',n===i));dots.forEach((d,n)=>d.classList.toggle('active',n===i));}
function autoplay(){clearInterval(timer);timer=setInterval(()=>showSlide((current+1)%slides.length),3800)}
dots.forEach((d,i)=>d.addEventListener('click',()=>{showSlide(i);autoplay()})); autoplay();

const menu=document.querySelector('.menu-toggle'); const nav=document.querySelector('.nav-links');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const tabs=[...document.querySelectorAll('.form-tab')];
const residential=document.getElementById('residentialFields'); const commercial=document.getElementById('commercialFields'); const projectType=document.getElementById('projectType');
tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>t.classList.remove('active'));tab.classList.add('active');const isRes=tab.dataset.type==='residential';residential.hidden=!isRes;commercial.hidden=isRes;projectType.value=isRes?'Residential':'Commercial';}));

const roomRows=document.getElementById('roomRows');
document.getElementById('addRoom').addEventListener('click',()=>{
  const row=document.createElement('div');row.className='room-row';row.innerHTML=`
    <label>Room / area name<input name="room_name[]" placeholder="e.g. Living room" /></label>
    <label>Floor area (m²)<input type="number" min="1" step="0.5" name="room_area[]" placeholder="e.g. 24" /></label>
    <label>Ceiling height (m)<input type="number" min="1.8" step="0.1" name="ceiling_height[]" placeholder="e.g. 2.4" /></label>
    <button type="button" class="remove-room" aria-label="Remove room">×</button>`;
  roomRows.appendChild(row);
});
roomRows.addEventListener('click',e=>{if(e.target.classList.contains('remove-room')){const rows=roomRows.querySelectorAll('.room-row');if(rows.length>1)e.target.closest('.room-row').remove();}});

document.getElementById('quoteForm').addEventListener('submit',e=>{
  e.preventDefault();
  document.getElementById('formStatus').textContent='Thanks — the form is working as a website prototype. Connect it to your email/CRM or form service before publishing.';
});
document.getElementById('year').textContent=new Date().getFullYear();
