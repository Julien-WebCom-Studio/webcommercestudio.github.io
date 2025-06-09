

let index = 0;
    setInterval(() => {
      index = (index + 1) % 3;
      document.getElementById('carousel-track').style.transform = `translateX(-${index * 100}%)`;
    }, 4000);

    // Bouton retour haut
    const toTop = document.getElementById("toTop");
    window.addEventListener("scroll", () => {
      toTop.style.display = window.scrollY > 300 ? "block" : "none";
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
