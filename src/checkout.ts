import "./style.css";
import { Book } from "./models/Book";

function displayCart() {
  //hämta varukorgen från localstorage
  const LsValue = localStorage.getItem("cartItems");
  const shoppingCart: Book[] = LsValue ? JSON.parse(LsValue) : [];

  // skapa en container för varukorgen
  const cartContainer = document.createElement("div");
  cartContainer.id = "cartContainer";
  document.getElementById("app")?.appendChild(cartContainer);

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
    `;

      cartContainer.appendChild(containerItems);
    });
  }
}
displayCart();

function personalInfo() {
  const app = document.getElementById("app");

  //Postnummer
  const zipContainer = document.createElement("div");
  zipContainer.id = "zipContainer";
  zipContainer.innerHTML = `
    <div class="zipfield">
    <h1>Leveranssätt</h1>
    <h2>Postnummer</h2>
      <input type="text">
    </div>
      <div class="delivery-options">
      <div class="delopt1">
        <h3>Hemleverans på morgonen<p>39 kr<img src="https://cdn.ingrid.com/static/shipping-logos/logo-early-bird-round-30.svg"></p></h3>
        <p>Leveras på torsdag den 16 januari</p>
        <div class="click"></div>
      </div>
      <div class="delopt2">        
        <h3>Leverans till paketskåp<p>39 kr<img src="https://cdn.ingrid.com/static/shipping-logos/logo-instabox-round-30.svg"></p></h3>
        <p>Leveras på torsdag den 16 januari</p>
        <div class="click"></div>

      </div>
      <div class="delopt3">        
        <h3>Leverans till ombud<p>39 kr<img src="https://cdn.ingrid.com/static/shipping-logos/logo-db-schenker-round-30.svg"></p></h3>
        <p>Leveras på torsdag den 16 januari</p>
        <div class="click"></div>
        </div>
      </div>
      <div class="delopt4">        
        <h3>Hemleverans på kvällen<p>59 kr<img src="https://cdn.ingrid.com/static/shipping-logos/logo-airmee-round-30.svg"></p></h3>             
        <p>Leveras på torsdag den 16 januari mellan 17:00 - 22:00</p>
        <div class="click"></div>
      </div>
      <div class="delopt5">        
       <h3>Ekonomifrakt <p>35 kr</p></h3>
        <p>Leveras på torsdag den 16 januari<p>35 kr</p></p>
        <div class="click">
        </div>

      </div>

    </div>
  `;

  app?.appendChild(zipContainer);

  const click = document.querySelector("click");


  click?.addEventListener("click", () => {
    click.className = "fill";
  })
  //Ange personuppgifter
  const infoContainer = document.createElement("div");
  infoContainer.id = "infoContainer";

  app?.appendChild(infoContainer);
    
  infoContainer.innerHTML = `
      <h1 class="infoh1">Personuppgifter</h1>
      <h3 class="infoh3">Namn</h3>
      <input type="text" placeholder="För- och Efternamn">
      <h3 class="infoh3">Epostadress</h3>
      <input type="text" placeholder="Epostadress"> 
      <h3 class="infoh3">Telefonummer</h3>
      <input type="text" placeholder="Telefonummer">
      <br>
      <button>Slutför köp</button>
    `;

    //
    
}

personalInfo();
