window.onload=inicio;

let rojo = "rojo.png"
let azul = "azul.png"
let caja;

function inicio () {
    caja=document.querySelector("#caja");
    document.querySelectorAll("button")[0].onclick=imgRoja;
    document.querySelectorAll("button")[1].onclick=imgAzul;
    document.querySelectorAll("button")[2].onclick=modificarAzul;
    document.querySelectorAll("button")[3].onclick=elimininarRojos;
    document.querySelectorAll("button")[4].onclick=vaciar;
}

function imgRoja () {
    caja.insertAdjacentHTML("beforeend", `<img class="roja" src="${rojo}">` );
}

function imgAzul () {

    for (let i = 0; i < 4; i++) {
    caja.insertAdjacentHTML("beforeend", `<img class="azul" src="${azul}">` );
    }
    
}

function modificarAzul () {

    let contar=document.querySelectorAll(".azul").length;

    for (let i=contar -1; i >=0; i--) {
        document.querySelectorAll(".azul")[i].src = rojo;
        document.querySelectorAll(".azul")[i].setAttribute("class", "roja");
    }
}

function elimininarRojos() {
    let contar = document.querySelectorAll(".roja").length;
    for (let i = contar-1; i >=0; i--) {  // Eliminar de manera inversa para evitar errores de índice
        document.querySelectorAll(".roja")[i].remove();
    }
}

function vaciar () {
    caja.innerHTML="";
}