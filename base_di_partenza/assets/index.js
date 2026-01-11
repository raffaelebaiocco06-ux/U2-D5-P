const navbar = document.querySelector("nav");
const btn = document.querySelector("nav button");

window.addEventListener("scroll", () => {
  const soglia = window.innerHeight * 0.7;
  if (window.scrollY > soglia) {
    navbar.classList.add("scrolled");
    btn.classList.add("scrolled");
    navbar.classList.remove("scrolled2");
    btn.classList.remove("scrolled2");
  } else {
    navbar.classList.remove("scrolled");
    btn.classList.remove("scrolled");
    navbar.classList.add("scrolled2");
    btn.classList.add("scrolled2");
  }
});

const M = document.querySelectorAll("svg path");
function lampeggio() {
  const tot = 15;
  for (let i = 0; i < tot; i++) {
    const conta = Math.floor(Math.random() * M.length);
    const app = M[conta];
    app.style.opacity = 1;
    setTimeout(() => {
      app.style.opacity = 0;
    }, Math.random() * 1000);
  }
}
setInterval(lampeggio, 1000);
