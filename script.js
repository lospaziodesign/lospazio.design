// ==========================================================
// LO SPAZIO — site behavior
// Four things: mobile menu, footer year, work filters, carousels.
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

// --- Work filters ---
// Click a tab, show only posts whose data-category matches it
// (or everything, for "All").
const filterButtons = document.querySelectorAll('.work__filters button');
const posts = document.querySelectorAll('.post');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const filter = btn.dataset.filter;

    posts.forEach(post => {
      const show = filter === 'all' || post.dataset.category === filter;
      post.classList.toggle('is-hidden', !show);
    });
  });
});

// --- Carousels ---
// Every .post__carousel is independent: it reads however many
// <img> tags are inside its .post__track, builds that many dots,
// wires up the arrows, and autoplays on the interval given in its
// data-autoplay attribute (milliseconds). Add a new post with more
// or fewer images and this just works — nothing to edit here.
document.querySelectorAll('.post__carousel').forEach(carousel => {
  const track = carousel.querySelector('.post__track');
  const images = track.querySelectorAll('img');
  const count = images.length;
  carousel.dataset.count = count;

  if (count <= 1) return; // nothing to slide

  const dotsWrap = carousel.querySelector('.post__dots');
  const prevBtn = carousel.querySelector('.post__arrow--prev');
  const nextBtn = carousel.querySelector('.post__arrow--next');
  let index = 0;
  let timer = null;

  // Build one dot per image
  const dots = [];
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', 'Go to image ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
    dots.push(dot);
  }

  function render() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
  }

  function goTo(i) {
    index = (i + count) % count;
    render();
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  prevBtn.addEventListener('click', () => { prev(); restartAutoplay(); });
  nextBtn.addEventListener('click', () => { next(); restartAutoplay(); });

  function startAutoplay() {
    const interval = parseInt(carousel.dataset.autoplay, 10) || 5000;
    timer = setInterval(next, interval);
  }
  function stopAutoplay() { clearInterval(timer); }
  function restartAutoplay() { stopAutoplay(); startAutoplay(); }

  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);

  // Basic swipe support for touch devices
  let touchStartX = 0;
  carousel.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    stopAutoplay();
  }, { passive: true });
  carousel.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (diff > 40) prev();
    else if (diff < -40) next();
    startAutoplay();
  }, { passive: true });

  render();
  startAutoplay();
});
