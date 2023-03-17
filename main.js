const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const aside = document.querySelector(".product-detail");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCartIcon.addEventListener("click", toggleCartAside);

function toggleDesktopMenu() {
  //aside y desktopmenu tengo que hacer que cuando apreto uno tengo que sacar el otro.
  desktopMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
}
function toggleCartAside() {
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  aside.classList.toggle("inactive");
}
