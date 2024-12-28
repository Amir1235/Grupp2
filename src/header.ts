
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
      <div>
    `
//Skapar sidebar    
const sidebar = document.createElement("div");
sidebar.id = "cart-sidebar";
sidebar.className = "cart-sidebar hidden";
sidebar.innerHTML = `
  <button id="close-cart-sidebar" class="close-btn"><i class="fa fa-close"></i></button>
  <h2>Din varukorg</h2>
  <ul id="cart-items-list"></ul>
  <a href="checkout.html"><button class="to-cart-btn">Till kassa</button></a>
`;
document.body.appendChild(sidebar);

//Eventlyssnare
const cartButton = document.querySelector(".shoppingCart");
cartButton?.addEventListener("click", () => {
  const sidebar = document.getElementById("cart-sidebar");
  const cartItemsList = document.getElementById("cart-items-list");
  if (sidebar && cartItemsList) {
    sidebar.classList.remove("hidden");
    sidebar.classList.add("open");

    const storedItems = localStorage.getItem("cartItems") || "[]";
    const myBooks = JSON.parse(storedItems);

    cartItemsList.innerHTML = myBooks.length ? myBooks.map((book: Book) => `<img src="${book.imgUrl}"><li>${book.name} - ${book.author}</li>`).join("") : "<li>Din varukorg är tom</li>";
  }
});

const closeButton = document.getElementById("close-cart-sidebar");
closeButton?.addEventListener("click", () => {
  const sidebar = document.getElementById("cart-sidebar");
  sidebar?.classList.remove("open");
  setTimeout(() => sidebar?.classList.add("hidden"), 300);
});

}