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
