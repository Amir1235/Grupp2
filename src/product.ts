import { addToCart, products } from './main'

const params = new URLSearchParams(window.location.search);
const bookId = Number(params.get('id'));

const book = products.find((b) => b.id === bookId);

const app = document.getElementById("app");

if (book && app) {
    app.innerHTML = `
    <div class="product">
        <img src="${book.imgUrl}" alt="${book.name}">
        <div class="product-info">
        <h1>${book.name}</h1>
        <p>Rating: ${book.rating}</p> 
        <p>Författare: ${book.author}</p>
        <p>Pris: ${book.price} kr</p>
        <p>Genre: ${book.genre}</p>
        <p>${book.isInStock ? 'I lager' : 'Ej i lager'}</p>
        <p><strong>Plot:</strong> ${book.plot}</p>
        <button id="addBtn">Köp nu</button>
    </div>
    `;

    const addButton = document.getElementById("addBtn");
    addButton?.addEventListener("click", () => {
        addToCart(book)
    });
} 