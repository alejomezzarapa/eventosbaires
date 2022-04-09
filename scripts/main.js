let lugaresDisponibles = 8;
let anfitrion;
const anfitriones = [];
let mensaje = document.querySelector(".mensaje p"); 
let solicitar = document.querySelector("#solicitud");

document.addEventListener('DOMContentLoaded', ()=>{
    tweets = JSON.parse( localStorage.getItem('anfitriones') )
} )

let sumatoria = JSON.parse(localStorage.getItem('anfitriones'))

function abrirFormulario () {
    let formulario = document.querySelector (".ventanaFormulario");
    formulario.className = "ventanaFormulario abierta"
}

function cerrarFormulario () {
    let formulario = document.querySelector (".ventanaFormulario")
    formulario.className = "ventanaFormulario cerrada"
}

function cargarSolicitud (){
    let nombreSolicitud = document.querySelector("#inputName").value;
    let mailSolicitud = document.querySelector("#inputEmail").value;
    let lugaresSolicitados = document.querySelector("#disabledSelect").value;
     if (lugaresDisponibles >= lugaresSolicitados) {
        lugaresDisponibles = lugaresDisponibles - lugaresSolicitados;
        anfitrion = {
            nombre: nombreSolicitud,
            mail: mailSolicitud,
            cantidadDeInvitados: lugaresSolicitados,
        }
        let alerta = document.querySelector(".alertaLugares");
        let mensajeAlert = ("Reserva exitosa")
        alerta.innerHTML = mensajeAlert;
        agregarAnfitriones (anfitrion);
    } else {
        let alerta = document.querySelector(".alertaLugares");
        let mensajeAlert = ("Tenemos " + lugaresDisponibles + " lugares disponibles")
        alerta.innerHTML = mensajeAlert;
    }
}

function agregarAnfitriones (anfitrion) {
        anfitriones.push (anfitrion);
        console.log (anfitriones[anfitriones.length-1]);
        sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('anfitriones', JSON.stringify(anfitriones));
}

let texto = "Has click en Ticket para reservar lugares";

mensaje.innerHTML = texto;