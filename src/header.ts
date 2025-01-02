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
          <a href="checkout.html"><i class="fa fa-shopping-cart"></i></a>
        </li>
        </ul>
      </nav>
    `
}