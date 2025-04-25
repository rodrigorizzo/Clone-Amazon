const navCategoria = document.getElementById("navCategorias");
const bPrime = document.getElementById("botaoPrime");
const popPrime = document.getElementById("popPrime");

const bContas = document.getElementById("botaoContas");
const navContas = document.getElementById("navContas")

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
}

function esconderMenu() {
    navCategoria.style.visibility = 'hidden';
    isOnNavC = false;
}

window.onclick = function (event) {
    console.log(isOnNavC);
    if (isOnNavC) {
        if (!event.target.matches('#nav-categorias') && !event.target.matches('#botaoTodos')) {
            esconderMenu();
        }
    }
}

bPrime.addEventListener("mouseenter", e => {
    popPrime.style.visibility = 'visible';
})

bPrime.addEventListener("mouseout", e => {
    popPrime.style.visibility = 'hidden';
})

bContas.addEventListener("mouseenter", e => {
    navContas.style.visibility = 'visible';
})

bContas.addEventListener("mouseout", e => {
    navContas.style.visibility = 'hidden';
})