import { createCart, decrement, increment, updatePrice } from "./helpers";


const header = document.getElementById("header");
if (header) {
  header.innerHTML = `
    <div class="header-left">
      <div class="logo"><a href="index.html">Bokshoppen📚</a></div>
        <nav>
        <ul>
        <li>
          <a href="index.html">Hem</a>
        </li>
        <li>
          <a href="#shoppa">Shoppa</a>
        </li>
        <li>
          <a href="about_us">Om oss</a>
        </li>
        <li>
          <a href="contact.html">Kontakt</a>
        </li>
        </ul>
      </nav>
      </div>
      <div class="header-right">
      <div class="search-container"><input type="search"><button><i class="fa fa-search"></i></button></div>
      <a href="#" class="shoppingCart"><i class="fa fa-shopping-cart"></i></a>
      <!-- Hamburger Menu -->
    <div>
      <div class="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="menu">
        <li><a href="index.html">Hem</a></li>
        <li><a href="#shoppa">Shoppa</a></li>
        <li><a href="about_us.html">Om oss</a></li>
        <li><a href="contact.html">Kontakt</a></li>
        <li><a href="checkout.html">Gå till kassa <i class="fa fa-shopping-cart"></i></a></li>
      </ul>
    </div>
      `;

  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");

  menuIcon?.addEventListener("click", () => {
    menuIcon.classList.toggle("open");
    menu?.classList.toggle("active");
  });
}

const sidebar = document.createElement("div");
sidebar.id = "cart-sidebar";
sidebar.className = "cart-sidebar hidden";
sidebar.innerHTML = `
  <button id="close-cart-sidebar" class="close-btn"><i class="fa fa-close"></i></button>
  <h2>Din varukorg</h2>
  <div id="cart-items-container"></div>
  <h2>Totalpris inkl. moms:</h2>
  <p id="totalPrice"></p>
  <a href="checkout.html"><button class="to-cart-btn">Till kassa</button></a>
`;
document.body.appendChild(sidebar);

const cartButton = document.querySelector(".shoppingCart");
cartButton?.addEventListener("click", () => {
  const cartSideBar = document.getElementById("cart-sidebar");
  const cartItemsContainer = document.getElementById("cart-items-container");

  if (cartSideBar && cartItemsContainer) {
    cartSideBar.classList.add("open");
    createCart();
    updatePrice();
  }
});

const closeButton = document.getElementById("close-cart-sidebar");
closeButton?.addEventListener("click", () => {
  const sidebar = document.getElementById("cart-sidebar");
  sidebar?.classList.remove("open");
});
