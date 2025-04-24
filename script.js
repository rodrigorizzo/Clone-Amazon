const navCategoria = document.getElementById("nav-categorias");
const bPrime = document.getElementById("#botaoPrime");
let isOnNavC = false;

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

bPrime.onclick = function (event){
    console.log("Prime")
    bPrime.style.color = "red";
}

