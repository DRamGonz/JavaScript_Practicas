window.onload=inicio;

let puntos=0;
let monedas = document.querySelector(".monedas");
let informacion = document.querySelector(".informacion");
let respuesta = document.querySelector(".contenido");

function inicio () {
    document.querySelector(".boton").onclick=empezar;
    monedas.innerHTML = `${puntos}`


}

function empezar () {
    let datoUsuario = document.querySelector("#campo").value;

    if (datoUsuario >= 2 && datoUsuario <= 9) {
        let num = getRandomInt(2, 9);
        respuesta.innerHTML="";
        informacion.innerHTML="";
        for (let i = 0; i < datoUsuario; i++) {
            let num = getRandomInt(2, 9);
            if (num == datoUsuario) {
            respuesta.insertAdjacentHTML ("beforeend",`<div class="respuesta correcta">${num}</div>`);
            puntos += 1;
            monedas.innerHTML = `${puntos}`;
            }else{
            respuesta.insertAdjacentHTML ("beforeend",`<div class="respuesta error">${num}</div>`);
            } 
        }
        if (puntos <= 0) {
            puntos = puntos - datoUsuario;
            monedas.innerHTML = `${puntos}`;
        }
        
    } else {
        informacion.innerHTML = `El dato introducido no es correcto. Tiene que introducir un número del 2 al 9.`
    }
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  } 