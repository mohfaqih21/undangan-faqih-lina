// Splash buka undangan
const splash = document.getElementById('splash');
const enterBtn = document.getElementById('enter-btn');
enterBtn.addEventListener('click', () => {
  splash.style.display = 'none';
});

// Musik
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
music.volume = 0.75;

musicBtn.addEventListener('click', () => {
  if (music.muted) {
    music.muted = false;
  } else {
    music.muted = true;
  }
});

// Countdown
const countdownDate = new Date("Dec 25, 2025 08:00:00").getTime();
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  if(distance<0) return;

  const days = Math.floor(distance/(1000*60*60*24));
  const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
  const seconds = Math.floor((distance%(1000*60))/1000);

  daysEl.innerText = days.toString().padStart(2,'0');
  hoursEl.innerText = hours.toString().padStart(2,'0');
  minutesEl.innerText = minutes.toString().padStart(2,'0');
  secondsEl.innerText = seconds.toString().padStart(2,'0');
}, 1000);
