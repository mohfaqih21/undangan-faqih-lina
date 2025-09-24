const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

function openInvitation() {
  // Sembunyikan welcome screen dengan transisi
  document.getElementById("welcome").style.display = "none";

  // Tampilkan undangan
  const invitation = document.getElementById("invitation");
  invitation.style.display = "block";
  invitation.classList.add("fade-in");

  // Mainkan musik
  music.play();

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
