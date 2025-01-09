const quotes = [
  "“Livets värde mäts inte efter hur många andetag vi tar, utan efter de ögonblick som tar vårt andetag.” – Albert Einstein",
  "“För att lyckas i livet, välj ett jobb du älskar och du behöver aldrig arbeta en dag i ditt liv.” – Mark Twain",
  "“Var dig själv; alla andra är redan upptagna.” – Oscar Wilde",
  "“Vi kanske möter många nederlag, men vi får aldrig bli besegrade.” – Maya Angelou",
  "“De bästa människorna är de som är ofullkomliga och ändå på något sätt fantastiska.” – F. Scott Fitzgerald"
];

  
  function getRandomQuote(): string {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  const quoteElement = document.getElementById("randomqoute");
  const quoteElement1 = document.getElementById("randomqoute1");

  
  if (quoteElement && quoteElement1) {
    quoteElement.textContent = getRandomQuote();
    quoteElement1.textContent = getRandomQuote();
  }
  

  