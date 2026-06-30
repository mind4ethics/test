const year = document.querySelector("#year");
const header = document.querySelector(".site-header");

year.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
});
