const track = document.getElementById('carousel-track');
const backToTop = document.getElementById('toTop');
const darkToggle = document.getElementById('toggle-dark');

let index = 0;
const slides = track.children.length;

setInterval(() => {
  index = (index + 1) % slides;
  track.style.transform = `translateX(-${index * 100}%)`;
}, 4000);

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

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Change icon from moon to sun
  if (document.body.classList.contains('dark')) {
    darkToggle.textContent = '☀️';
  } else {
    darkToggle.textContent = '🌙';
  }
});
