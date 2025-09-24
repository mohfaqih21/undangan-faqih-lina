// === Ambil elemen ===
const openBtn = document.getElementById("openBtn");
const overlay = document.getElementById("overlay");
const body = document.body;

// Musik
const audio = new Audio("lagu.mp3"); 
audio.loop = true; // biar musik terus berulang

// Saat klik tombol "Buka Undangan"
openBtn.addEventListener("click", () => {
    overlay.classList.add("fade-out");  // kasih animasi keluar
    setTimeout(() => {
        overlay.style.display = "none"; // sembunyikan overlay setelah animasi
    }, 800);

    audio.play().catch(() => {
        console.log("Autoplay diblokir, user harus klik dulu.");
    });

    body.classList.add("show-content"); // biar konten bisa muncul dengan animasi
});

// === Smooth Scroll untuk navigasi menu ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// === Animasi saat scroll (fade-in tiap section) ===
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});
