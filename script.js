const crash = document.querySelector(".crash");
const kick = document.querySelector(".kick");
const snare = document.querySelector(".snare");
const tom = document.querySelector(".tom");
const h1 = document.querySelector("h1");

crash.addEventListener("click", () => {
  const audio = new Audio("./Sounds/crash.mp3");
  audio.play();
  h1.style.animation = 'tilt-shaking 0.3s infinite';
  setTimeout(() => {
    h1.style.animation = '';
  }, 300);
});

kick.addEventListener("click", () => {
  const audio = new Audio("./Sounds/kick.mp3");
  audio.play();
  h1.style.animation = 'tilt-shaking 0.3s infinite';
  setTimeout(() => {
    h1.style.animation = '';
  }, 300);
});

snare.addEventListener("click", () => {
  const audio = new Audio("./Sounds/snare.mp3");
  audio.play();
  h1.style.animation = 'tilt-shaking 0.3s infinite';
  setTimeout(() => {
    h1.style.animation = '';
  }, 300);
});

tom.addEventListener("click", () => {
  const audio = new Audio("./Sounds/tom.mp3");
  audio.play();
  h1.style.animation = 'tilt-shaking 0.3s infinite';
  setTimeout(() => {
    h1.style.animation = '';
  }, 300);
});