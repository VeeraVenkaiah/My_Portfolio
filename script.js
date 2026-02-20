// Simple typing effect (optional)
const text = document.querySelector(".highlight");
const words = ["Cloud Engineer", "DevOps Engineer", "AWS Architect"];
let i = 0;

setInterval(() => {
  text.textContent = words[i];
  i = (i + 1) % words.length;
}, 2500);
