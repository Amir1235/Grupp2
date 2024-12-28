import "./style.css";
// import { Book } from "./models/Book";
import { IBook } from "./main";

function displayCart() {
  //hämta varukorgen från localstorage
  const LsValue = localStorage.getItem("cartItems");
  const shoppingCart: IBook[] = LsValue ? JSON.parse(LsValue) : [];

  // skapa en container för varukorgen
  const cartContainer = document.createElement("div");
  cartContainer.id = "cartContainer";
  document.getElementById("app")?.appendChild(cartContainer);

  if (shoppingCart.length > 0) {
    shoppingCart.forEach((book) => {
      const diven = document.createElement("div");
      diven.id = "diven";

      diven.innerHTML = `
      <img src="${book.imgUrl}" alt="${book.name}">
      <h3>${book.name}</h3>
      <p>${book.author}</p>
      <p>${book.price} kr</p>
      <p>${book.genre}</p>
    `;

      cartContainer.appendChild(diven);
    });
  }
}
displayCart();
