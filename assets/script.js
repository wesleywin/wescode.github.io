// CONFIGURE SEUS CONTATOS ANTES DE PUBLICAR.
// Não use dados pessoais de terceiros sem autorização.
const CONTACT = {
  email: 'wesleywin94@gmail.com',
  whatsapp: '5513988230109' 
};

const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menu');
}));

document.querySelector('#year').textContent = new Date().getFullYear();
const emailLink = document.querySelector('#email-link');
const whatsappLink = document.querySelector('#whatsapp-link');
const contactNote = document.querySelector('#contact-note');
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONTACT.email) && const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONTACT.email);;
const validWhatsapp = /^\d{12,13}$/.test(CONTACT.whatsapp);
if (validEmail) {
  emailLink.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Contato pelo portfólio')}`;
} else {
  emailLink.hidden = true;
}
if (whatsappLink) {
  const numero = CONTACT.whatsapp.replace(/\D/g, '');

  whatsappLink.href = `https://wa.me/${numero}?text=${encodeURIComponent('Olá! Vi seu portfólio WesCode e gostaria de conhecer seus sistemas.')}`;

  whatsappLink.hidden = false;
  whatsappLink.target = '_blank';
  whatsappLink.rel = 'noopener noreferrer';
}
if (validEmail || validWhatsapp) contactNote.hidden = true;
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

// Galeria acessível: ampliar capturas reais, navegar e fechar com Escape.
const galleryLinks = [...document.querySelectorAll('[data-lightbox]')];
const viewer = document.querySelector('#lightbox');
const viewerImage = document.querySelector('#lightbox-image');
const viewerCaption = document.querySelector('#lightbox-caption');
const galleryImages = [
  {src:'assets/screenshots/pdv.png',title:'Ponto de venda'},
  {src:'assets/screenshots/comandas.png',title:'Gestão de comandas'},
  {src:'assets/screenshots/validades.png',title:'Controle de validades'},
  {src:'assets/screenshots/produtos-estoque.png',title:'Produtos e estoque'}
];
let activeImage = 0;
let lastFocused = null;
function showImage(index){
 activeImage = (index + galleryImages.length) % galleryImages.length;
 viewerImage.src = galleryImages[activeImage].src;
 viewerImage.alt = galleryImages[activeImage].title + ' — captura real do Café Local';
 viewerCaption.textContent = galleryImages[activeImage].title;
}
function closeViewer(){viewer.hidden=true;document.body.classList.remove('lightbox-open');lastFocused?.focus();}
galleryLinks.forEach(link=>link.addEventListener('click',event=>{event.preventDefault();lastFocused=link;showImage(Number(link.dataset.lightbox));viewer.hidden=false;document.body.classList.add('lightbox-open');viewer.querySelector('.lightbox-close').focus();}));
viewer.querySelector('.lightbox-close').addEventListener('click',closeViewer);
viewer.querySelector('.lightbox-prev').addEventListener('click',()=>showImage(activeImage-1));
viewer.querySelector('.lightbox-next').addEventListener('click',()=>showImage(activeImage+1));
viewer.addEventListener('click',event=>{if(event.target===viewer)closeViewer();});
document.addEventListener('keydown',event=>{if(viewer.hidden)return;if(event.key==='Escape')closeViewer();if(event.key==='ArrowLeft')showImage(activeImage-1);if(event.key==='ArrowRight')showImage(activeImage+1);if(event.key==='Tab'){const buttons=[...viewer.querySelectorAll('button')];const i=buttons.indexOf(document.activeElement);if(event.shiftKey&&i===0){event.preventDefault();buttons.at(-1).focus();}else if(!event.shiftKey&&i===buttons.length-1){event.preventDefault();buttons[0].focus();}}});
