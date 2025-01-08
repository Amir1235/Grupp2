import "./style.css";

const aboutUs = document.createElement("div");
aboutUs.id = "aboutUs";
aboutUs.innerHTML = `
    <div class="mainContainer">
        <div id="about-Hero">
        <img id="about-Heroimg" src="https://images.pexels.com/photos/5084674/pexels-photo-5084674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="girl reading" height="600px" width="400px">
        <h1 id="quote">"Böcker är nycklar till magiska världar och spännande berättelser. Låt oss guida dig till din nästa stora läsupplevelse.</h1>
        </div>
        <h2 id="aboutHeader">Om oss – Bokshoppen.se</h2>
        <p id="aboutParagraph">med en enkel men kraftfull idé: att göra böcker tillgängliga för alla och inspirera människor att utforska världar fyllda av berättelser, kunskap och fantasi. Vi startade som en liten bokhandel med ett stort hjärta för läsning och har sedan dess växt till att bli en av de mest älskade bokbutikerna online i Sverige. Under åren har vi anpassat oss till en snabbt föränderlig värld. När internet blev en del av vardagen var vi bland de första som lanserade en digital bokhandel. Det var ett stort steg, men det gjorde det möjligt för oss att nå läsare långt utanför vår ursprungliga butik. Sedan dess har vi ständigt utvecklats för att skapa en smidig och inspirerande shoppingupplevelse för våra kunder. Vårt mål är detsamma idag som när vi började – att främja läsglädje och ge bokälskare tillgång till sina favoritböcker på ett enkelt och bekvämt sätt. Vi erbjuder ett brett sortiment, från klassiska romaner och bästsäljare till fackböcker och barnböcker, noga utvalda för att passa alla åldrar och intressen. Vi brinner för kvalitet och service. Med snabba leveranser, inspirerande rekommendationer och ett kundfokus i allt vi gör, strävar vi efter att vara den bästa partnern för dina litterära äventyr.Tack för att du är en del av Bokshoppen.se-familjen – där varje bok är en ny början på en fantastisk resa!
      </p>
    </div>
    `;
document.getElementById("app")?.appendChild(aboutUs);
