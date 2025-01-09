import { Book } from "./models/Book";

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
          increment(book, myBooks);
          createCart();
          updatePrice();
        });
        
        productInCart.querySelector(".decrement-btn")?.addEventListener("click", () => {
          decrement(book, myBooks)
          createCart()
          updatePrice()
        })
      });
    } else {
      cartItemsContainer.innerHTML = "<li>Din varukorg är tom</li>";
    }
  }
};

export const addToCart = (book: Book) => {
  let myBooks: Book[] = JSON.parse(localStorage.getItem("cartItems") || "[]");
  if (myBooks.some(b => b.name === book.name)) {
    alert(`${book.name} finns redan i varukorgen.`);
  } else {
    myBooks.push(book); 
    localStorage.setItem("cartItems", JSON.stringify(myBooks)); 
    createCart();
    updatePrice(); 
  }
}

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
  
  export const increment = (book:Book, myBooks:Book[]) => {
    book.quantity += 1; 
    localStorage.setItem("cartItems", JSON.stringify(myBooks));
  }
  
  export const decrement = (book:Book, myBooks:Book[]) => {
    if(book.quantity <= 1){
      myBooks = myBooks.filter((item:Book) => item.id !== book.id);
    } else {
      book.quantity -= 1;
    }
    localStorage.setItem("cartItems", JSON.stringify(myBooks));
  }

  