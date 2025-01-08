import { Book } from "./models/Book";
import { createCart, updatePrice } from "./header";
import "./style.css";

//Help-funktioner

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

const book1 = new Book(
  1,
  "https://m.media-amazon.com/images/I/81q77Q39nEL._SY522_.jpg",
  "Harry Potter Book Set",
  500,
  "J.K Rowling",
  "Fantasy",
  true,
  "När ett brev kommer till den olyckliga men vanliga Harry Potter, avslöjas en decennium gammal hemlighet för honom som uppenbarligen är den sista att veta. Hans föräldrar var trollkarlar, dödade av en mörkerherres förbannelse när Harry bara var en bebis, och som han på något sätt överlevde. Harry lämnar sin osympatiska moster och farbror till Hogwarts, en trollkarlsskola full av spöken och förtrollningar, och snubblar över ett olycksbådande mysterium när han hittar en trehövdad hund som vaktar ett rum på tredje våningen. Sedan får han höra om en saknad sten med häpnadsväckande krafter som kan vara värdefull, farlig - eller både och. Ett otroligt äventyr är på väg att börja!",
  "⭐⭐⭐⭐ 70 Recensioner"
);
const book2 = new Book(
  2,
  "https://image.bokus.com/images/9789189585973_383x_omgiven-av-idioter-hur-man-forstar-dem-som-inte-gar-att-forsta_pocket",
  "Omgiven av idioter",
  299,
  "Thomas Eriksson",
  "Psykologi",
  true,
  "Omgiven av idioter beskriver konkret och underhållande en av världens mest spridda metoder för att sortera olikheterna inom mänsklig kommunikation. Med vetenskapliga grund och genom vardagens möten ger den dig konkreta hjälpmedel att förstå de viktigaste skillnaderna mellan olika kommunikationsstilar. Den visar på en av de vanligaste orsakerna till konflikter i vardagen: dålig kommunikation. Och den ger dig som läsare svaret på frågan: Vad gör jag åt det?",
  "⭐⭐⭐ 28 Recensioner"
);
const book3 = new Book(
  3,
  "https://image.bokus.com/images/9789155268282_383x_vargbroder_kartonnage",
  "Vargbröder",
  199,
  "Michelle Paver",
  "Barn",
  true,
  "Toraks far är döende och han själv är skadad efter den stora demonbjörnens attack. Torak blir tvungen att svära på sin fars dödsbädd att han skall söka upp Världsandens berg och befria Storskogen från demonen och dess skapare. En kort tid efter att han flytt från sitt och sin fars läger möter han en vargunge och upptäcker att han kan vargarnas språk. Vargungens föräldrar hade blivit dödade av en översvämning och Torak tar sig an ungen och döper honom till Ulv. Senare, när Torak fortsätter sin färd mot världsandens berg, blir han tillfångatagen av Korpklanen som anklagar honom för att ha stulit deras byte och han blir förd till deras läger.",
  "⭐⭐⭐⭐⭐ 81 Recensioner"
);
const book4 = new Book(
  4,
  "https://m.media-amazon.com/images/I/91EJQU2B4cL._SY522_.jpg",
  "Eragon",
  300,
  "Christopher Paolini",
  "Fantasy",
  false,
  "När Eragon hittar en slipad blå sten i skogen tror han att det är den lyckliga upptäckten av en fattig bondpojke; kanske kommer det att köpa hans familj kött för vintern. Men när stenen ger en drake som kläcks, inser Eragon snart att han har snubblat över ett arv som är nästan lika gammalt som själva imperiet.",
  "⭐⭐⭐⭐⭐ 35 Recensioner"
);
const book5 = new Book(
  5,
  "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524861759/pride-and-prejudice-9781524861759_hr.jpg",
  "Pride and Prejudice",
  300,
  "Jane  Austen",
  "Romantik",
  false,
  "Pride and Prejudice följer det turbulenta förhållandet mellan Elizabeth Bennet, dotter till en herre på landet, och Fitzwilliam Darcy, en rik aristokratisk godsägare. De måste övervinna de titulära synderna av stolthet och fördomar för att bli kära och gifta sig.",
  "⭐⭐⭐ 17 Recensioner"
);
const book6 = new Book(
  6,
  "https://m.media-amazon.com/images/I/515zE1GxvAL._AC_UF1000,1000_QL80_.jpg",
  "Frankenstein",
  350,
  "Mary Shelley",
  "Skräck",
  true,
  "Avskuren från sin familj och ägnade sig åt sitt arbete vid Ingolstadt University, lärde Victor Frankenstein hemligheten med att skapa liv. Efter att ha plundrat kyrkogårdar för mänskliga lemmar och organ, bygger han en varelse och väcker den till liv. När han ser resultatet flyr Frankenstein från sin skapelse i skräck",
  "⭐⭐⭐ 24 Recensioner"
);
const book7 = new Book(
  7,
  "https://image.bokus.com/images/9789129723649_383x_pippi-langstrump-gar-ombord",
  "Pippi Långstrump",
  250,
  "Astrid Lindgren",
  "Barn",
  true,
  "Pippi Långstrump är en nioårig flicka som en dag ensam flyttar in i Villa Villekulla i den lilla staden. Med sig har hon sin apa, Herr Nilsson, och sin häst, Lilla Gubben. Dessutom har hon en kappsäck full med gullpengar. Pippilotta Viktualia Rullgardina Krusmynta Efraimsdotter Långstrump är en märkvärdig flicka.",
  "⭐⭐⭐⭐⭐ 67 Recensioner"
);
const book8 = new Book(
  8,
  "https://image.bokus.com/images/9789137158952_383x_mirage",
  "Mirage",
  245,
  "Camilla Läckberg, Henrik Fexeus",
  "Deckare",
  false,
  "Det är december i Stockholm och Sveriges justitieminister befinner sig under hot. I samma veva hittas en hög människoben nere i Stockholms tunnelbana, och skelettet visar sig komma från en högt uppsatt finansman. Polisinspektör Mina Dabiris grupp är stukad efter den traumatiska händelsen i somras som slutade i en kollegas död, och kallar in mentalisten Vincent Walder för att hjälpa till med fallet. För Vincent känns det som om världen alltmer sluter sig kring honom. När ytterligare en benhög hittas i underjorden sätts gruppen återigen på prov – vad är det som pågår i tunnlarna djupt under Stockholm? Och vem är det som jagar ministern?",
  "⭐⭐ 44 Recensioner"
);
const book9 = new Book(
  9,
  "https://imusic.b-cdn.net/images/item/original/138/9781665947138.jpg?lynn-painter-2024-nothing-like-the-movies-better-than-the-movies-inbunden-bok&class=scaled&v=1708417355",
  "Nothing Like the Movies",
  250,
  "Lynn Painter",
  "Young Adult",
  true,
  "Under några vackra månader hade Wes sin drömtjej: den viljestarka grannetjejen Liz. Men precis när de två skulle ge sig av till college för att börja sitt förstaårsår tillsammans, slog tragedin till. Wes fick ta itu med nedfallet, vilket i slutändan innebar att han förlorade Liz i processen, Blinkar framåt månader senare och Wes och Liz befinner sig på college tillsammans. På en hälsosammare plats nu vet Wes att han krossade Liz hjärta när han avslutade saker, men han är fast besluten att få henne att bli kär i honom igen. Wes känner Liz bättre än någon annan, och han har en idiotsäker plan för att vinna tillbaka henne med rom-com-värdiga stora gester hon älskar. Endast . . . Liz kommer inte ha något av det ! Wes måste planera som en rom-com-hjälte för att komma på hur han ska se henne. Ännu värre, Liz har en ny vän. . . en killkompis . Ändå kommer Wes inte att ge upp, anpassa sina smarta planer och anstränga sig för att få Liz uppmärksamhet och vinna tillbaka hennes tillgivenhet. Men efter att hans bästa ansträngningar inte fått honom någonstans, undrar Wes om deras förhållande verkligen är över för gott.",
  "⭐⭐⭐⭐⭐ 69 Recensioner"
);
const book10 = new Book(
  10,
  "https://bilder.akademibokhandeln.se/images_akb/9780349439358_383/taming-7",
  "Taming 7",
  250,
  "Chloe Walsh",
  "Drama",
  true,
  "Hon är den typiska solskenstjejen. Han är den älskvärda klassens clown. Men stormmoln rullar in, och den här Tommen-pojken är på väg att bli allvar. Tommens fräckaste pojke, Gerard 'Gibsie' Gibson, har alltid varit en komiker, men de flesta ser inte vad som döljer sig under ytan. Han hemsöks av händelser från det förflutna och han använder humor för att klara sig och döljer sitt sanna jag från världen. Claire Biggs, symbolen för solsken, har alltid älskat Gibsie, hennes brors vän och hennes favoritgranne. Hon har alltid sett en sida hos honom som ingen annan verkar lägga märke till. Hon blir fast besluten att tämja sin vilda barndomsbästa vän. När gränserna korsas blir det oklart om Gibsie och Claires vänskap kommer att överleva. Kommer det att blomma ut till något mer, eller kommer de att förlora sig själva i det vilda?",
  "⭐⭐⭐⭐ 52 Recensioner"
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
//export const myBooks: Book[] = JSON.parse(storedItems);
let filteredProducts = [...products];
const booksContainer = document.createElement("div");

const createBooks = () => {
  booksContainer.innerHTML = "";
  booksContainer.className = "books-container";

  filteredProducts.forEach((book) => {
    const bookInfo = document.createElement("div");
    bookInfo.innerHTML = `
        <div class="product-card">
        <img src="${book.imgUrl}" class="book-image">
        <div class="book-info">
            <h3>${book.name}</h3>
            <p>${book.author}</p>
            <p>${book.price} kr</p>
            <button class="addBtn" data-id="${book.id}">Lägg till i varukorg</button>
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
      addToCart(book)
    });
    booksContainer.appendChild(bookInfo);
  });
  document.getElementById("app")?.appendChild(booksContainer);
};
if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
  createBooks();
}
// Sortering
const sortButtons = document.querySelectorAll(".sort-buttons button");
const allBtn = document.getElementById("allBtn");
allBtn?.focus();

sortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const genre = button.textContent?.trim();

    if (genre === "Alla") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => product.genre === genre);
    }
    createBooks();
  });
});
