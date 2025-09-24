// === Ambil elemen ===
const openBtn = document.getElementById("openBtn");
const overlay = document.getElementById("overlay");
const music = document.getElementById("bg-music");

// === Event tombol buka undangan ===
openBtn.addEventListener("click", () => {
  overlay.classList.add("fade-out");

  setTimeout(() => {
    overlay.style.display = "none"; // hilangkan overlay
  }, 1000);

  music.volume = 0.6; // volume musik
  music.play();
});

// === Smooth Scroll (kalau ada menu navigasi) ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// === Animasi muncul saat scroll ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// === Cegah musik berhenti ketika pindah tab ===
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    music.pause();
  } else {
    music.play();
  }
});
