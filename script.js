const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
const welcome = document.getElementById("welcome");
const invitation = document.getElementById("invitation");

function openInvitation() {
  // Sembunyikan welcome screen
  welcome.style.display = "none";
  // Tampilkan undangan
  invitation.style.display = "block";
  // Mainkan musik
  music.play().catch(err => {
    console.log("Autoplay diblokir, user harus interaksi:", err);
  });
  // Tampilkan tombol musik
  musicBtn.style.display = "flex";
}

// Tombol mute/unmute
let isPlaying = true;
musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "🔇";
  } else {
    music.play();
    musicBtn.textContent = "🎵";
  }
  isPlaying = !isPlaying;
});
