const header = document.getElementById("header");
if(header){
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
          <a href="#">Om oss</a>
        </li>
        <li>
          <a href="#">Kontakt</a>
        </li>
        </ul>
      </nav>
      </div>
      <div class="header-right">
      <div class="search-container"><input type="search"><button><i class="fa fa-search"></i></button></div>
      <a href="checkout.html"><i class="fa fa-shopping-cart"></i></a>
      <div>
    `
}