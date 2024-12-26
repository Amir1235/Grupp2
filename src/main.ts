import { Book } from './models/Book';
import './style.css'

interface IBook {
    imgUrl: string;
    name: string;
    price: number; 
    author: string;
    genre: string;
    isInStock: boolean; 
}

const book1 = new Book("https://m.media-amazon.com/images/I/81q77Q39nEL._SY522_.jpg", "Harry Potter Book Set", 500, "J.K Rowling", "Fantasy", true);
const book2 = new Book("https://image.bokus.com/images/9789189585973_383x_omgiven-av-idioter-hur-man-forstar-dem-som-inte-gar-att-forsta_pocket", "Omgiven av idioter", 299, "Thomas Eriksson", "Psykologi", true);
const book3 = new Book("https://image.bokus.com/images/9789155268282_383x_vargbroder_kartonnage", "Vargbröder", 199, "Michelle Paver", "Barn", true);
const book4 = new Book("https://m.media-amazon.com/images/I/91EJQU2B4cL._SY522_.jpg", "Eragon", 300, "Christopher Paolini", "Fantasy", false)

//Skapar en lista och lägger in Böckerna som vi skapat
const products = [book1, book2, book3, book4]

const createBooks = () => {
    //Skapar container för alla böckerna
    const booksContainer = document.createElement("div")
    booksContainer.className = "books-container"

    //Loopar genom listan products
    products.forEach((book) => {
        //Skapar en div (bookInfo) och sätter dess innerHTML till den html-struktur man vill ha - funkar precis som html
        const bookInfo = document.createElement("div")
        bookInfo.innerHTML = `
        <div class="product-card">
        <img src="${book.imgUrl}">
        <div class="book-info">
            <h3>${book.name}</h3>
            <p>${book.author}</p>
            <p>${book.price} kr</p>
            <p>${book.genre}</p>
            <p>${book.isInStock ? 'I lager' : 'Ej i lager'}</p> 
            <button id="addBtn">Lägg till i varukorg</button>
        </div>
        </div>
        `
        //Lägger till bookInfo i booksContainer som vi skapade innan loopen
        booksContainer.appendChild(bookInfo)
    })
    //Lägger till booksContainer i app
    document.getElementById("app")?.appendChild(booksContainer)
}
//Anropar funktionen så att den körs
createBooks()
