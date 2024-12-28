import { Book } from "./models/Book";

import "./style.css";

export interface IBook {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
  author: string;
  genre: string;
  isInStock: boolean;
}

const book1 = new Book(
  1,
  "https://m.media-amazon.com/images/I/81q77Q39nEL._SY522_.jpg",
  "Harry Potter Book Set",
  500,
  "J.K Rowling",
  "Fantasy",
  true
);
const book2 = new Book(
  2,
  "https://image.bokus.com/images/9789189585973_383x_omgiven-av-idioter-hur-man-forstar-dem-som-inte-gar-att-forsta_pocket",
  "Omgiven av idioter",
  299,
  "Thomas Eriksson",
  "Psykologi",
  true
);
const book3 = new Book(
  3,
  "https://image.bokus.com/images/9789155268282_383x_vargbroder_kartonnage",
  "Vargbröder",
  199,
  "Michelle Paver",
  "Barn",
  true
);
const book4 = new Book(
  4,
  "https://m.media-amazon.com/images/I/91EJQU2B4cL._SY522_.jpg",
  "Eragon",
  300,
  "Christopher Paolini",
  "Fantasy",
  false
);
const book5 = new Book(
  5,
  "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524861759/pride-and-prejudice-9781524861759_hr.jpg",
  "Pride and Prejudice",
  300,
  "Jane  Austen",
  "Romantik",
  false
);
const book6 = new Book(
  6,
  "https://m.media-amazon.com/images/I/515zE1GxvAL._AC_UF1000,1000_QL80_.jpg",
  "Frankenstein",
  350,
  "Mary Shelley",
  "Skräck",
  true
);
const book7 = new Book(
  7,
  "https://image.bokus.com/images/9789129723649_383x_pippi-langstrump-gar-ombord",
  "Pippi Långstrump",
  200,
  "Astrid Lindgren",
  "Barn",
  true
);
const book8 = new Book(
  8,
  "https://image.bokus.com/images/9789137158952_383x_mirage",
  "Mirage",
  245,
  "Camilla Läckberg, Henrik Fexeus",
  "Deckare",
  false
);
const book9 = new Book(
  9,
  "https://imusic.b-cdn.net/images/item/original/138/9781665947138.jpg?lynn-painter-2024-nothing-like-the-movies-better-than-the-movies-inbunden-bok&class=scaled&v=1708417355",
  "Nothing Like the Movies",
  250,
  "Lynn Painter",
  "Young Adult",
  true
);
const book10 = new Book(
  10,
  "https://bilder.akademibokhandeln.se/images_akb/9780349439358_383/taming-7",
  "Taming 7",
  250,
  "Chloe Walsh",
  "Drama",
  true
);

export const products: Book[] = [
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
  book7,
  book8,
  book9,
  book10,
];

const cartItems = localStorage.getItem("cartItems");
const storedItems = cartItems || "[]";
const myBooks: Book[] = JSON.parse(storedItems);

const createBooks = () => {
  const booksContainer = document.createElement("div");
  booksContainer.className = "books-container";

  products.forEach((book) => {
    const bookInfo = document.createElement("div");
    bookInfo.innerHTML = `
        <div class="product-card">
        <img src="${book.imgUrl}" class="book-image">
        <div class="book-info">
            <h3>${book.name}</h3>
            <p>${book.author}</p>
            <p>${book.price} kr</p>
            <p>${book.genre}</p>
            <p>${book.isInStock ? "I lager" : "Ej i lager"}</p> 
            <button class="addBtn" data-id="${
              book.id
            }">Lägg till i varukorg</button>
        </div>
        </div>
        `;

    const bookImage = bookInfo.querySelector(".book-image");

    if (bookImage) {
      bookImage.addEventListener("click", () => {
        window.location.href = `product.html?id=${book.id}`;
      });
    }

    const addButton = bookInfo.querySelector(".addBtn");
    addButton?.addEventListener("click", () => {
      myBooks.push(book);
      const myStringArray = JSON.stringify(myBooks);
      localStorage.setItem("cartItems", myStringArray);
      console.log(myBooks);
    });

    booksContainer.appendChild(bookInfo);
  });
  document.getElementById("app")?.appendChild(booksContainer);
};
createBooks();
