// Musik kontrol
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

music.volume = 0.5;

musicBtn.addEventListener('click', () => {
  if (music.muted) {
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
