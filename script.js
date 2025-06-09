

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

    // Dark mode toggle
    const toggleBtn = document.getElementById("toggle-dark");
    const body = document.body;
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark");
      body.classList.toggle("light");
      toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
    });
