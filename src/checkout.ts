import "./style.css";
import { Book } from "./models/Book";
import { createCart, decrement, increment, updatePrice } from "./header";

function displayCart() {
  //hämta varukorgen från localstorage
  const LsValue = localStorage.getItem("cartItems");
  const shoppingCart: Book[] = LsValue ? JSON.parse(LsValue) : [];

  // skapa en container för varukorgen

  let cartContainer = document.getElementById("cartContainer");

  if(!cartContainer){
    cartContainer = document.createElement("div");
    cartContainer.id = "cartContainer";
    document.getElementById("app")?.appendChild(cartContainer);
  }

  cartContainer.innerHTML = "";

  if (shoppingCart.length > 0) {
    shoppingCart.forEach((book) => {
      const containerItems = document.createElement("div");
      containerItems.id = "containerItems";

      containerItems.innerHTML = `
      <img src="${book.imgUrl}" alt="${book.name}">
      <h3>${book.name}</h3>
      <p>${book.author}</p>
      <p>${book.price} kr</p>
      <p>${book.genre}</p>
      <p>${book.quantity}</p> 
      <button class="increment-btn" data-name="${book.name}">+</button>
      <button class="decrement-btn" data-name="${book.name}">-</button>
    `;

    containerItems.querySelector(".increment-btn")?.addEventListener("click", () => {
      increment(book, shoppingCart);
      displayCart();
      createCart();
      updatePrice();
    });

    containerItems.querySelector(".decrement-btn")?.addEventListener("click", () => {
      decrement(book, shoppingCart);
      displayCart();
      createCart();
      updatePrice();
    });

      cartContainer.appendChild(containerItems);
    });
  }
}
displayCart();
