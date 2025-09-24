// Ambil elemen
const openBtn = document.getElementById("openBtn");
const overlay = document.getElementById("overlay");

// Musik
const audio = new Audio("lagu.mp3"); 

// Event klik tombol "Buka Undangan"
openBtn.addEventListener("click", () => {
    overlay.style.display = "none";   // Sembunyikan overlay
    audio.play();                     // Putar musik
});

// Smooth scroll untuk navigasi (kalau ada menu)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
