window.onload = inicio;

let valor1 = Math.floor(Math.random() * 100);
let valor2 = Math.floor(Math.random() * 100);

function inicio() {
    // Asigna el valor generado a los inputs correspondientes
    document.getElementById("valor1").value = valor1;
    document.getElementById("valor2").value = valor2;
    if (valor1 < valor2) {
        document.getElementById("valor1R").value = valor2;
        document.getElementById("valor2R").value = valor1;
    } else {
    document.getElementById("valor1R").value = valor1;
    document.getElementById("valor2R").value = valor2;
    }
    document.getElementById("valor1M").value = valor1;
    document.getElementById("valor2M").value = valor2;

    // Asigna la función comprobar al botón
    document.querySelector(".button__suma").onclick = comprobarSuma;
    document.querySelector(".respuesta__suma").onkeydown=teclado;
    document.querySelector(".button__resta").onclick = comprobarResta;
    document.querySelector(".respuesta__resta").onkeydown=tecladoResta;
    document.querySelector(".button__multiplicar").onclick = comprobarMultiplicar;
    document.querySelector(".respuesta__multiplicar").onkeydown=tecladoMulti;
    document.querySelector(".button__recetear").onclick = resetear;
    
}

function comprobarSuma() {
    // Obtiene el valor de la respuesta del input
    let respuesta = document.querySelector(".respuesta__suma").value;
    let resultadoOp = valor1 + valor2;

    // Comprueba si el resultado es correcto o incorrecto
    let resultadoDiv = document.querySelector(".resultado.respuesta__suma");

    if (resultadoOp == respuesta) {
        resultadoDiv.style.color = "#00ff00"; // Cambia el color a verde para correcto
        resultadoDiv.innerHTML = "El resultado introducido es correcto. ¡Enhorabuena!";
    } else {
        resultadoDiv.style.color = "red"; // Cambia el color a rojo para incorrecto
        resultadoDiv.innerHTML = "El resultado introducido es incorrecto. El resultado correcto de la suma " + valor1 + " + " + valor2 + " es: " + resultadoOp + ".";
    }
}

function comprobarResta() {
    // Obtiene el valor de la respuesta del input
    let respuesta = document.querySelector(".respuesta__resta").value;
    let resultadoOp;
    if (valor1 < valor2) {
        resultadoOp = valor2 - valor1;
    } else {
        resultadoOp = valor1 - valor2;
    }

    console.log(respuesta);
    console.log(resultadoOp);

    // Comprueba si el resultado es correcto o incorrecto
    let resultadoDiv = document.querySelector(".resultado.respuesta__resta");
    if (resultadoOp == respuesta) {
        resultadoDiv.style.color = "#00ff00"; // Cambia el color a verde para correcto
        resultadoDiv.innerHTML = "El resultado introducido es correcto. ¡Enhorabuena!";
    } else {
        resultadoDiv.style.color = "red"; // Cambia el color a rojo para incorrecto
        resultadoDiv.innerHTML = "El resultado introducido es incorrecto. El resultado correcto de la suma " + valor1 + " - " + valor2 + " es: " + resultadoOp + ".";
        
    }
}

function comprobarMultiplicar() {
    // Obtiene el valor de la respuesta del input
    let respuesta = document.querySelector(".respuesta__multiplicar").value;
    let resultadoOp;
    
    if (valor1 < valor2) {
        resultadoOp = valor2 * valor1;
    } else {
        resultadoOp = valor1 * valor2;
    }

    console.log(respuesta);
    console.log(resultadoOp);

    // Comprueba si el resultado es correcto o incorrecto
    let resultadoDiv = document.querySelector(".resultado.respuesta__multiplicar");
    if (resultadoOp == respuesta) {
        resultadoDiv.style.color = "#00ff00"; // Cambia el color a verde para correcto
        resultadoDiv.innerHTML = "El resultado introducido es correcto. ¡Enhorabuena!";
    } else {
        resultadoDiv.style.color = "red"; // Cambia el color a rojo para incorrecto
        resultadoDiv.innerHTML = "El resultado introducido es incorrecto. El resultado correcto de la suma " + valor1 + " * " + valor2 + " es: " + resultadoOp + ".";
    }
}

function teclado(e) {
    let teclado=e.key;
    if (teclado=="Enter") {
        comprobarSuma();
    }
}

function tecladoResta(e) {
    let teclado=e.key;
    if (teclado=="Enter") {
        comprobarResta();
    }
}

function tecladoMulti(e) {
    let teclado=e.key;
    if (teclado=="Enter") {
        comprobarMultiplicar();
    }
}

function resetear() {
    location.reload()
}