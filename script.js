const text = ["Santusht", "a Web Developer", "a CSE Student"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const typed = document.querySelector(".typed-text");

function typeEffect() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
    } else if (isDeleting && j > 0) {
      currentText = text[i].substring(0, j--);
    }

    typed.textContent = currentText;

    if (j === text[i].length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
    setTimeout(typeEffect, isDeleting ? 60 : 120);
  }
}
typeEffect();
