  /* ===== MENU MOBILE ===== */
  const navToggle = document.querySelector('.nav-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  navToggle.addEventListener('click', () =>
    navMobile.classList.toggle('hidden')
  );

  /* ===== CAROUSEL ===== */
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const dotsContainer = document.querySelector('.dots');
  let currentIndex = 0;

  // create dots
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

  // auto-play (6 s)
  setInterval(() => {
    let next = currentIndex + 1 === slides.length ? 0 : currentIndex + 1;
    moveToSlide(next);
  }, 6000);