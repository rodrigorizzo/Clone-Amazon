const body = document.querySelector("body")

const navCategoria = document.getElementById("navCategorias");
const bPrime = document.getElementById("botaoPrime");
const popPrime = document.getElementById("popPrime");

const bContas = document.getElementById("botaoContas");
const navContas = document.getElementById("navContas");

const heroImgs = document.querySelector("#heroImgs");
const xScrollHero = document.querySelector(".imgHero").offsetWidth;

let isOnNavC = false;

function posicionarPop() {
    let xPrime = bPrime.offsetLeft;
    popPrime.style.left = xPrime + "px";

    let xContas = bContas.offsetLeft;
    navContas.style.left = xContas + "px";
    let yContas = bContas.offsetTop + bContas.offsetHeight;
    navContas.style.top = yContas + "px";
}

posicionarPop();

function mostrarMenu() {
    navCategoria.style.visibility = 'visible';
    isOnNavC = true;
    body.style.overflowY = "hidden"
}

function esconderMenu() {
    navCategoria.style.visibility = 'hidden';
    isOnNavC = false;
    body.style.overflowY = "scroll"
}

window.onclick = function (event) {
    if (isOnNavC) {
        if (!event.target.matches('#nav-categorias') && !event.target.matches('#botaoTodos')) {
            esconderMenu();
        }
    }
}

bPrime.addEventListener("mouseover", e => {
    popPrime.style.visibility = 'visible';
})

bPrime.addEventListener("mouseout", e => {
    popPrime.style.visibility = 'hidden';
})

bContas.addEventListener("mouseover", e => {
    navContas.style.visibility = 'visible';
})

bContas.addEventListener("mouseout", e => {
    navContas.style.visibility = 'hidden';
})

function slideMoverEsq(){
    console.log(heroImgs.scrollLeft);
    
    let x = heroImgs.scrollLeft >= 10 ? -xScrollHero : xScrollHero*4;
    heroImgs.scrollBy(x,0)

}
function slideMoverDir(){
    console.log(heroImgs.scrollLeft);
    let x = heroImgs.scrollLeft < 3900 ? xScrollHero : (-xScrollHero*4);

    heroImgs.scrollBy(x,0)

}