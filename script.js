const backToTop = document.getElementById('toTop');
const darkToggle = document.getElementById('toggle-dark');

document.addEventListener('DOMContentLoaded', function() {
  const track = document.getElementById('carousel-track');
  const slides = document.querySelectorAll('.carousel img');
  const slideCount = slides.length;
  let index = 0;

  track.style.width = `${slideCount * 100}%`;
  slides.forEach(slide => {
    slide.style.width = `${100 / slideCount}%`;
  });

  const carouselInterval = setInterval(() => {
    index = (index + 1) % slideCount;
    updateCarousel();
  }, 4000);

  function updateCarousel() {
    track.style.transform = `translateX(-${index * (100 / slideCount)}%)`;
  }
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  darkToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

emailjs.init('Ctibs3-1u4Gygz28D');

document.getElementById('contact-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitBtn = document.getElementById('submit-btn');
  const successMsg = document.getElementById('success-message');
  const errorMsg = document.getElementById('error-message');
  const errorDetails = document.getElementById('error-details');
  
  successMsg.style.display = 'none';
  errorMsg.style.display = 'none';
  
  // État du bouton pendant l'envoi
  submitBtn.disabled = true;
  submitBtn.textContent = 'Envoi en cours...';
  
  try {
    const response = await emailjs.sendForm(
      'service_1klhp6a',
      'template_teow4jo', // Remplacez par votre vrai Template ID
      form
    );
    
    // Succès
    successMsg.style.display = 'block';
    form.reset();
  } catch (error) {
    // Erreur
    console.error('Erreur EmailJS:', error);
    errorDetails.textContent = error.text || "Service temporairement indisponible";
    errorMsg.style.display = 'block';
  } finally {
    // Réinitialiser le bouton
    submitBtn.disabled = false;
    submitBtn.textContent = 'Envoyer';
  }
});
