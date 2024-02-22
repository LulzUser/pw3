window.alert(`Olá!`);

let header = document.getElementById("header");
let main = document.getElementById("main");
let footer = document.getElementById("footer");
let intro = document.getElementById("intro");
let btStart = document.getElementById("btStart");
let btCont = document.getElementById("btCont");
let btRest = document.getElementById("btRest");
let txt = document.getElementById("txt");
let cont = document.getElementById("cont");

btStart.addEventListener("click", (event) => {
  header.style.animationName = "up1";
  header.style.animationDuration = "2s";
  header.style.animationName = "up1";
  header.style.animationDuration = "2s";
  header.className = "header";
  main.className = "main";
  main.style.animationName = "up";
  main.style.animationDuration = "2s";

  var delay = 950; //0.95 second

  setTimeout(function () {
    header.className = "invisible";
  }, delay);
});

btCont.addEventListener("click", (event) => {
  footer.className = "footer";
  footer.style.animationName = "up";
  footer.style.animationDuration = "1s";
});

btRest.addEventListener("click", (event) => {
  header.className = "header";
  header.style.animationName = "up";
  header.style.animationDuration = "2s";
  main.style.animationName = "down";
  main.style.animationDuration = "2s";
  footer.style.animationName = "down";
  footer.style.animationDuration = "1s";

  var delay = 950; //0.95 second

  setTimeout(function () {
    main.className = "invisible";
    footer.className = "invisible";
    main.style.animationName = "up";
    footer.style.animationName = "up";
  }, delay);
});
