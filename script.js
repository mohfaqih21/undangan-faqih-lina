// assets/js/script.js

document.addEventListener("DOMContentLoaded", function() {
  const splash = document.getElementById("splash");
  const enterBtn = document.getElementById("enter-btn");
  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");

  // tombol buka undangan
  enterBtn.addEventListener("click", function() {
    splash.style.display = "none"; // hilangin splash
    music.play(); // langsung play musik
  });

  // tombol mute/unmute musik
  musicBtn.addEventListener("click", function() {
    if (music.paused) {
      music.play();
      musicBtn.textContent = "🔊";
    } else {
      music.pause();
      musicBtn.textContent = "🔈";
    }
  });

  // countdown
  const targetDate = new Date("2025-12-25T08:00:00").getTime();
  setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);
});
