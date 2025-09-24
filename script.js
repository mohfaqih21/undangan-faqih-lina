document.addEventListener("DOMContentLoaded", function() {
  const splash = document.getElementById("splash");
  const hero = document.getElementById("hero");
  const enterBtn = document.getElementById("enter-btn");
  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");

  // Tombol buka undangan
  enterBtn.addEventListener("click", function() {
    splash.style.display = "none";
    hero.style.display = "block";
    music.play();
  });

  // Tombol mute/unmute musik
  musicBtn.addEventListener("click", function() {
    if (music.paused) {
      music.play();
      musicBtn.textContent = "🔊";
    } else {
      music.pause();
      musicBtn.textContent = "🔈";
    }
  });
});
