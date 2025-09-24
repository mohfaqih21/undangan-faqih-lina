// Splash / Buka Undangan
const splash = document.getElementById('splash');
const openBtn = document.getElementById('open-invite');
const mainContent = document.getElementById('main-content');
const music = document.getElementById('bg-music');

openBtn.addEventListener('click', () => {
  splash.style.display = 'none';
  mainContent.style.display = 'block';
  music.volume = 0.5;
  music.play().catch(()=>{});
});

// Musik kontrol
const musicBtn = document.getElementById('music-btn');
musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "🔊 Mute";
  } else if (music.muted) {
    music.muted = false;
    musicBtn.textContent = "🔊 Mute";
  } else {
    music.muted = true;
    musicBtn.textContent = "🔈 Unmute";
  }
});

// Ucapan tamu
const form = document.getElementById('ucapanForm');
const daftarUcapan = document.getElementById('daftarUcapan');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const nama = document.getElementById('nama').value;
  const pesan = document.getElementById('pesan').value;

  const div = document.createElement('div');
  div.classList.add('ucapan-item');
  div.innerHTML = `<p><strong>${nama}:</strong> ${pesan}</p>`;

  daftarUcapan.appendChild(div);
  form.reset();
});

// Particles di Hero
tsParticles.load("particles-js", {
  background: { color: "transparent" },
  particles: {
    number: { value: 50 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 1 }
  }
});
