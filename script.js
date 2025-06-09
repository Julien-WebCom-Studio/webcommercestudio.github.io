// Carousel
let index = 0;
setInterval(() => {
  index = (index + 1) % 3;
  document.getElementById('carousel-track').style.transform = `translateX(-${index * 100}%)`;
}, 4000);

// Dark mode
document.getElementById('dark-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Scroll to top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

