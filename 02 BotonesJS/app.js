window.onload=inicio;

function inicio (){

    document.querySelector("body").insertAdjacentHTML("beforeend", `
    <button id="boton1" class="boton">Botón 1</button>
    <button id="boton2" class="boton">Botón 2</button>
    <button id="boton3" class="boton">Botón 3</button>
    <div id="imagen"><img src="ico.png"></div>`)

    document.querySelectorAll(".boton")[0].onclick=accion1;
   document.querySelectorAll(".boton")[1].onclick=accion2;
    document.querySelectorAll(".boton")[2].onclick=accion3;
}

function accion1 () {
    
    let cambio = document.querySelector("#imagen");
    cambio.style.backgroundColor="#1162ac";
    cambio.style.justifyContent = "center";
    cambio.style.alignItems = "center";
    cambio.style.marginTop = "15px";
    cambio.style.border = "1px solid black";

    let imagen = document.querySelector("#imagen");
    imagen.style.display="flex";
    imagen.style.borderRadius = "50%";
    imagen.style.transform="rotate(10deg)";

    document.querySelector("#boton1").style.visibility="hidden";
}

function accion2 () {
    
    if (document.querySelector("#imagen").style.display=="none") {
        document.querySelector("#imagen").style.display="block";
        document.querySelectorAll(".boton")[1].style.backgroundColor="red";
    } else {
        document.querySelector("#imagen").style.display="none";
        document.querySelectorAll(".boton")[1].style.background=null;
    }
}

function accion3 () {
    
    document.querySelector("img").style=null;
    document.querySelector("#imagen").style=null;
    document.querySelectorAll(".boton")[0].style=null;
    document.querySelectorAll(".boton")[1].style=null;
    document.querySelectorAll(".boton")[2].style=null;
}