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

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const submitBtn = document.getElementById('submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Envoi en cours...';
  
  emailjs.sendForm('VOTRE_SERVICE_ID', 'VOTRE_TEMPLATE_ID', this)
    .then(function() {
      document.getElementById('success-message').style.display = 'block';
      document.getElementById('contact-form').reset();
    }, function(error) {
      document.getElementById('error-message').style.display = 'block';
      console.error('Erreur:', error);
    })
    .finally(function() {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Envoyer';
    });
});
