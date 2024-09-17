window.onload=inicio;

let reyes=[];

function inicio() {
    document.querySelector(".boton").onclick = agregar;
    document.querySelector(".imput").onkeydown= teclado;

}

function agregar() {
    // el trim lo que hace es quitar los espacios. Lee el contenido:
    let escrito = document.querySelector(".imput").value.trim().toLowerCase();

    // Comprobamos si el nombre existe. El some recorre el array.
    let existe = reyes.some(a => a==escrito);
    // devuelte un true o un false
    if (!existe) {
        reyes.push(escrito);
        mostrar();
    }
    vaciar();
}

function mostrar () {
    document.querySelector(".caja").innerHTML="";
    reyes.forEach(nombre => {
        document.querySelector(".caja").insertAdjacentHTML("beforeend", `<div class="rey">
            <img class="personajes" src="${nombre}.png" onerror="errores(this)"/>
            <div class="nombre">${convertidor(nombre)}</div>
            </div>`);
            let ultimo = document.querySelectorAll(".rey").length-1;
            document.querySelectorAll(".rey")[ultimo].onclick=eliminar;
    });
}

function convertidor (n) {
    return n.substring(0,1).toUpperCase() + n.substring(1).toLowerCase();
}

function vaciar () {
    document.querySelector(".imput").value = "";
    document.querySelector(".imput").focus();
}

function teclado (e) {
    let tecla = e.key;
    
    if (tecla == "Enter") {
        agregar();
    }
}

function errores(e){
    e.src="Defaul.png";
}

function eliminar () {
    let texto = this.querySelector(".nombre").innerText.toLowerCase();
    let buscar= reyes.indexOf(texto);
    reyes.splice(buscar,1);
    this.remove();
}