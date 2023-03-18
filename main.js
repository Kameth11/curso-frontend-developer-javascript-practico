const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const aside = document.querySelector(".product-detail");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const desktopMenu = document.querySelector(".desktop-menu");
const cardContainer = document.querySelector(".cards-container");

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

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Compu",
  price: 620,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardContainer.appendChild(productCard);
  }
}
renderProducts(productList);
