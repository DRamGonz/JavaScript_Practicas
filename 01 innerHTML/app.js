window.onload=inicio;

function inicio(){

    document.getElementById("btn-1").onclick=accion1;
    document.getElementById("btn-2").onclick=accion2;
    document.getElementById("btn-3").onclick=accion3;
    document.getElementById("btn-4").onclick=accion4;
}

function accion1(){
    document.querySelector(".caja").innerHTML="Hola mundo."
}

function accion2 () {
    document.querySelector(".caja").innerHTML="<img src='ico.png'>";
}

function accion3 () {
    document.querySelector(".caja").insertAdjacentHTML("beforeend", "<button class='btn' id='btn-3'>Botón 3</button>");
}

function accion4 () {
    document.querySelector(".caja").innerHTML="";
}