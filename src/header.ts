
import { Book } from "./models/Book";

const header = document.getElementById("header");
if(header){
    header.innerHTML = `
    <div class="header-left">
      <div class="logo"><a href="index.html">Bokshoppen📚</a></div>
      <nav>
        <ul>
        <li>
          <a href="index.html">Hem</a>
        </li>
        <li>
          <a href="#">Shoppa</a>
        </li>
        <li>
          <a href="#">Om oss</a>
        </li>
        <li>
          <a href="#">Kontakt</a>
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
        <li><a href="#">Shoppa</a></li>
        <li><a href="#">Om oss</a></li>
        <li><a href="#">Kontakt</a></li>
        <li><a href="product.html">Gå till kassa <i class="fa fa-shopping-cart"></i></a></li>
      </ul>
    </div>

      `;
      
      const menuIcon = document.querySelector(".menu-icon"); 
      const menu = document.querySelector(".menu"); 


      menuIcon?.addEventListener("click", () => {
        menu?.classList.toggle("active")      
      })
//Skapar sidebar    
const sidebar = document.createElement("div");
sidebar.id = "cart-sidebar";
sidebar.className = "cart-sidebar hidden";
sidebar.innerHTML = `
  <button id="close-cart-sidebar" class="close-btn"><i class="fa fa-close"></i></button>
  <h2>Din varukorg</h2>
  <div id="cart-items-container"></div>
  <a href="checkout.html"><button class="to-cart-btn">Till kassa</button></a>
`;
document.body.appendChild(sidebar);

//Eventlyssnare
const cartButton = document.querySelector(".shoppingCart");
cartButton?.addEventListener("click", () => {
  const sidebar = document.getElementById("cart-sidebar");
  const cartItemsContainer = document.getElementById("cart-items-container");

  if (sidebar && cartItemsContainer) {
    sidebar.classList.add("open");

    const storedItems = localStorage.getItem("cartItems") || "[]";
    const myBooks = JSON.parse(storedItems);

    cartItemsContainer.innerHTML = "";
    if (myBooks.length) {
      myBooks.forEach((book:Book) => {
        const productInCart = document.createElement("div");
        productInCart.className = "product-in-cart"
        productInCart.innerHTML = `<img src="${book.imgUrl}"> <div><p>${book.name}</p> <p>${book.author}</p></div>`;
        cartItemsContainer.appendChild(productInCart);
      });
    } else {
      cartItemsContainer.innerHTML = "<li>Din varukorg är tom</li>";
    }
  }
});


const closeButton = document.getElementById("close-cart-sidebar");
closeButton?.addEventListener("click", () => {
  const sidebar = document.getElementById("cart-sidebar");
  sidebar?.classList.remove("open");
});

}