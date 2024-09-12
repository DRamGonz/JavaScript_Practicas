window.onload = inicio;

// Seleccionamos el input correctamente
let dato = document.querySelector(".contenedor__input");

function inicio() {
    dato.focus();
    // Seleccionamos el botón correctamente
    document.querySelector(".contenedor__boton").onclick = accion1;
}

function accion1() {

    if (dato.value.toLowerCase() == "diego") {

        document.querySelector(".caja").innerHTML=`<p>Hola ${dato.value}.</p>`;

    } else {
        document.querySelector(".caja").innerHTML=`Lo sentimos el nombre ${dato.value} no es correcto. Intentelo de nuevo.`;
        dato.value="";
        dato.focus();
    }
}

