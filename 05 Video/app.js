window.onload = inicio;

let rotacion = 0;
let sumar= true;

function inicio() {
  document.querySelector(".boton1").onclick = girar;
}

function girar() {
  document.querySelector(".flecha").style.transform = `rotate(${rotacion}deg)`;
  document.querySelector(".porcentaje").innerHTML = `${rotacion}º`;
  if (sumar == true) {
    if (rotacion < 360){
        rotacion += 20;
    } else {
        sumar=false;
    }
  } else {
    if (rotacion > 0) {
    rotacion -=20;
    } else {
        sumar = true;
    }
  }
}
