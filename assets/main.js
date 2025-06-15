/* ===== MENU MOBILE ===== */
const navToggle = document.querySelector('.nav-toggle');
const navMobile = document.querySelector('.nav-mobile');
navToggle.addEventListener('click', () =>
  navMobile.classList.toggle('hidden')
);

/* ===== MULTI CAROUSELS ===== */
document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const dotsContainer = carousel.querySelector('.dots');
  let currentIndex = 0;

  // Créer les dots
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToSlide(i));
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.children);

  function moveToSlide(index) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
    dots[currentIndex].classList.remove('active');
    dots[index].classList.add('active');
    currentIndex = index;
  }

  // Auto-slide (optionnel)
  setInterval(() => {
    let next = (currentIndex + 1) % slides.length;
    moveToSlide(next);
  }, 6000);
});
