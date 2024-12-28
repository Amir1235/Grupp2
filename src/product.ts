import { products } from './main'

const params = new URLSearchParams(window.location.search);
const bookId = Number(params.get('id'));


const book = products.find((b) => b.id === bookId);

const app = document.getElementById("app");

if (book && app) {
    app.innerHTML = `
    <div class="product">
        <img src="${book.imgUrl}" alt="${book.name}">
        <h1>${book.name}</h1>
        <p>Author: ${book.author}</p>
        <p>Price: ${book.price} kr</p>
        <p>Genre: ${book.genre}</p>
        <p>${book.isInStock ? 'In stock' : 'Out of stock'}</p>
        <p><strong>Plot:</strong> ${book.plot}</p>


        <button>Buy Now</button>
    </div>
    `;
} else if (app) {
    app.innerHTML = `<p>Book not found</p>`;
}
