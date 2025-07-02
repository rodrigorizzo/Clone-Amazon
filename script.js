/* ----------------------------------- Variáveis ----------------------------------- */

const body = document.querySelector("body")

const navCategoria = document.getElementById("navCategorias");
const bPrime = document.getElementById("botaoPrime");
const popPrime = document.getElementById("popPrime");

const bContas = document.getElementById("botaoContas");
const navContas = document.getElementById("navContas");

const bCep = document.getElementById("bCep");
const cepPopUp = document.getElementById("cepPopUp");

const heroImgs = document.querySelector("#heroImg");
let heroImgId = 1;

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
/*     console.log(`$(acionador.offsetLeft + elemento.) < $(window.innerWidth)`)
 */    if (acionador.offsetLeft + elemento.offsetWidth < window.innerWidth) {
        let xContas = acionador.offsetLeft;
        elemento.style.left = xContas + "px";
    } else {
        elemento.style.right = 0;
    }
    let yContas = acionador.offsetTop + acionador.offsetHeight;
    elemento.style.top = yContas + "px";
}

function adicionarListener(acionador, elemento) {
    acionador.addEventListener("mouseover", e => {
        elemento.style.visibility = 'visible';
        posicionarPop(acionador, elemento);
    })
    acionador.addEventListener("mouseout", e => {
        elemento.style.visibility = 'hidden';
    })
    elemento.addEventListener("mouseover", e => {
        elemento.style.visibility = 'visible';
    })
    elemento.addEventListener("mouseout", e => {
        elemento.style.visibility = 'hidden';
    })
}


/* function mostrarPop(elemento, isOn){
    elemento.style.visibility = 'visible';
    isOn = true;
    body.style.overflowY = "hidden"
} */

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

function slideAnterior() {
    if (heroImgId != 1) { heroImgId--; }
    else { heroImgId = 5 }
    mostrarImagem();
}

function slideProximo() {
    if (heroImgId != 5) { heroImgId++; }
    else { heroImgId = 1 }

    mostrarImagem();
}

function mostrarImagem() {
    heroImg.setAttribute("src", `src/hero/0${heroImgId}.jpg`)
}


function mostrarMenu() {
    navCategoria.style.visibility = 'visible';
    isOnNavContas = true;
    body.style.overflowY = "hidden"
}