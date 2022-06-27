const btn = document.querySelector("#mobileMenuBtn");
const menu = document.querySelector("#mobileMenu");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
