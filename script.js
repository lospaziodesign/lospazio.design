// ==========================================================
// LO SPAZIO — site behavior
// Three small things: mobile menu, project lightbox, footer year.
// ==========================================================

document.getElementById('year').textContent = new Date().getFullYear();

// --- Mobile menu ---
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav__links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('is-open'));
});

// --- Project lightbox ---
// Reads data-title / data-tag / data-desc from whichever
// .work__item was clicked, and the image already on the card.
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTag = document.getElementById('lightboxTag');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.work__item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('.work__image img');
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxTag.textContent = item.dataset.tag || '';
    lightboxTitle.textContent = item.dataset.title || '';
    lightboxDesc.textContent = item.dataset.desc || '';
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('is-open');
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
