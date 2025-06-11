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

  submitBtn.disabled = true;
  submitBtn.textContent = 'Envoi en cours...';
  
  try {
    const response = await emailjs.sendForm(
      'service_1klhp6a',
      'template_teow4jo',
      form
    );
    
    successMsg.style.display = 'block';
    form.reset();
  } catch (error) {
    console.error('Erreur EmailJS:', error);
    errorDetails.textContent = error.text || "Service temporairement indisponible";
    errorMsg.style.display = 'block';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Envoyer';
  }
});
