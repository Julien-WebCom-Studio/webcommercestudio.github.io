

let index = 0;
    setInterval(() => {
      index = (index + 1) % 3;
      document.getElementById('carousel-track').style.transform = `translateX(-${index * 100}%)`;
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

    const darkToggle = document.getElementById('dark-toggle');
    const backToTop = document.getElementById('back-to-top');
    
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      // Change icon from moon to sun
      if (document.body.classList.contains('dark-mode')) {
        darkToggle.textContent = '☀️';
      } else {
        darkToggle.textContent = '🌙';
      }
    });
