let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");

let mensaje = document.querySelector("#mensaje");
let contenerdorGanaPunto = document.querySelector("#gana-punto");
let eligeTuArma = document.querySelector("#elige-tu-arma");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e){
   let eleccionPC = Math.floor(Math.random()*3);
   let eleccionUsuario = e.currentTarget.id;
     
   if(eleccionPC === 0){
    eleccionPC = "piedra";
   }else if(eleccionPC === 1){
    eleccionPC = "papel";
   }else if(eleccionPC === 2){
    eleccionPC = "tijera";
   }
   if(
    (eleccionUsuario === "piedra" && eleccionPC === "tijera") || 
    (eleccionUsuario === "papel" && eleccionPC === "piedra") ||
    (eleccionUsuario === "tijera" && eleccionPC === "papel")
  ){
    ganaUsuario();
  }else if(
    (eleccionPC === "piedra" && eleccionUsuario === "tijera") || 
    (eleccionPC === "papel" && eleccionUsuario === "piedra") ||
    (eleccionPC === "tijera" && eleccionUsuario === "papel")
  ){
    ganaPC();
  }else{
    empate();
  }
  mensaje.classList.remove("disabled");
  contenedorEleccionUsuario.innerText = eleccionUsuario;
  contenedorEleccionPC.innerText = eleccionPC;

  if(puntosUsuario === 5 || puntosPC ===5){
    if(puntosUsuario === 5){
        instrucciones.innerText = "Ganaste el juego"
    }
    if(puntosPC === 5){
        instrucciones.innerText = "Perdiste el juego"
    }

    eligeTuArma.classList.add("disabled");
    reiniciar.classList.remove("disabled");
    reiniciar.addEventListener("click",reiniciarJuego);
  }


  function ganaUsuario(){
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenerdorGanaPunto.innerText = "¡Ganaste un punto!";
  }

  function ganaPC(){
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenerdorGanaPunto.innerText = "¡La computadora ganó un punto!";
  }

  function empate(){
    contenerdorGanaPunto.innerText = "¡Empate!";
  }

  function reiniciarJuego(){
    reiniciar.classList.add("disabled");
    eligeTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosUsuario = 0;

    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;
    instrucciones.innerText = "El primero en llegar a 5 puntos gana"
  }
}


