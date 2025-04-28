/* ----------------------------------- Variáveis ----------------------------------- */

const body = document.querySelector("body")

const navCategoria = document.getElementById("navCategorias");
const bPrime = document.getElementById("botaoPrime");
const popPrime = document.getElementById("popPrime");

const bContas = document.getElementById("botaoContas");
const navContas = document.getElementById("navContas");

const bCep = document.getElementById("bCep");
const cepPopUp = document.getElementById("cepPopUp");

const heroImgs = document.querySelector("#heroImgs");
const xScrollHero = document.querySelector(".imgHero").offsetWidth;

let isOnNavContas = false;

/* ----------------------------------- Chamadas das funções ----------------------------------- */

posicionarPop(bPrime, popPrime);
adicionarListener(bPrime, popPrime);

posicionarPop(bContas, navContas);
adicionarListener(bContas, navContas);

posicionarPop(bCep, cepPopUp);
adicionarListener(bCep, cepPopUp);

/* ----------------------------------- Declaração das funções ----------------------------------- */

function posicionarPop(acionador, elemento) {
    let xContas = acionador.offsetLeft;
    elemento.style.left = xContas + "px";
    let yContas = acionador.offsetTop + acionador.offsetHeight;
    elemento.style.top = yContas + "px";
}

function adicionarListener(acionador, elemento) {
    acionador.addEventListener("mouseover", e => {
        elemento.style.visibility = 'visible';
    })
    acionador.addEventListener("mouseout", e => {
        elemento.style.visibility = 'hidden';
    })
}

function esconderMenu() {
    navCategoria.style.visibility = 'hidden';
    isOnNavContas = false;
    body.style.overflowY = "scroll"
}

window.onclick = function (event) {
    if (isOnNavContas) {
        if (!event.target.matches('#nav-categorias') && !event.target.matches('#botaoTodos')) {
            esconderMenu();
        }
    }
}

/* Funções associados onclick dos botões */

function slideMoverEsq() {
    let x = heroImgs.scrollLeft >= 10 ? -xScrollHero : xScrollHero * (heroImgs.childElementCount - 1);
    heroImgs.scrollBy(x, 0)

}
function slideMoverDir() {
    let x = heroImgs.scrollLeft < (xScrollHero * (heroImgs.childElementCount - 1) - 10) ? xScrollHero : -xScrollHero * (heroImgs.childElementCount - 1);
    heroImgs.scrollBy(x, 0)
}

function mostrarMenu() {
    navCategoria.style.visibility = 'visible';
    isOnNavContas = true;
    body.style.overflowY = "hidden"
}