import { Book } from "./models/Book";

export const updatePrice = () => {
  let totalPrice: number = 0;
  const storedItems = localStorage.getItem("cartItems") || "[]";
  const myBooks = JSON.parse(storedItems);

  for (let i = 0; i < myBooks.length; i++) {
    totalPrice += myBooks[i].price * myBooks[i].quantity;
  }

  const totalPriceElement = document.getElementById("totalPrice");
  if (totalPriceElement) {
    totalPriceElement.innerHTML = `${totalPrice}kr`;
  }
  return totalPrice;
};

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
          <a href="#">Shoppa</a>
        </li>
        <li>
          <a href="about_us">Om oss</a>
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
        <li><a href="checkout.html">Gå till kassa <i class="fa fa-shopping-cart"></i></a></li>
      </ul>
    </div>
      `;
      
      const menuIcon = document.querySelector(".menu-icon"); 
      const menu = document.querySelector(".menu"); 

      menuIcon?.addEventListener("click", () => {
        menuIcon.classList.toggle("open")
        menu?.classList.toggle("active")     
      })
}

export const createCart = () => {
  const cartItemsContainer = document.getElementById("cart-items-container");

  const storedItems = localStorage.getItem("cartItems") || "[]";
  let myBooks: Book[] = JSON.parse(storedItems);
  if (cartItemsContainer) {
    cartItemsContainer.innerHTML = "";
    if (myBooks.length) {
      myBooks.forEach((book: Book) => {
        const productInCart = document.createElement("div");
        productInCart.className = "product-in-cart";
        productInCart.innerHTML = `
        <img src="${book.imgUrl}"> 
        <div>
        <p>${book.name}</p> 
        <p>${book.author}</p> 
        <p>${book.price}kr</p>
        <p>${book.quantity}</p> 
        <button class="increment-btn" data-name="${book.name}">+</button>
        <button class="decrement-btn" data-name="${book.name}">-</button>
        </div>`;
        cartItemsContainer.appendChild(productInCart);

        productInCart.querySelector(".increment-btn")?.addEventListener("click", () => {
          book.quantity += 1; 
          localStorage.setItem("cartItems", JSON.stringify(myBooks));
          createCart();
          updatePrice();
        });
        productInCart.querySelector(".decrement-btn")?.addEventListener("click", () => {
          if (book.quantity <= 1) {
            myBooks = myBooks.filter((item: Book) => item.id !== book.id)
            localStorage.setItem("cartItems", JSON.stringify(myBooks));
            createCart();
            updatePrice();
          } else {
            book.quantity -= 1;
            localStorage.setItem("cartItems", JSON.stringify(myBooks));
            createCart();
            updatePrice();
          }
        })
      });
    } else {
      cartItemsContainer.innerHTML = "<li>Din varukorg är tom</li>";
    }
  }     
}

// Skapar sidebar    
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

// Eventlyssnare
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
