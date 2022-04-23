let lugaresDisponibles = 8;
let anfitrion;
const anfitriones = [];
let mensaje = document.querySelector(".mensaje p"); 
let solicitar = document.querySelector("#solicitud");
const suscripciones = [];

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

function cargarSuscripcion () {
    let suscripcion = document.querySelector("#emailSuscripcion").value;
    if (suscripcion != '') {
    suscripciones.push (suscripcion);
    console.log (suscripciones);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Suscripción exitosa',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes cargar un correo electrónico para suscribirte',
          })
    }
}

let texto = "Has click en Ticket para reservar lugares";

mensaje.innerHTML = texto;

let eventos = document.querySelector(".clickeventos");
eventos.addEventListener('click', ()=> {
    fetch('datos/eventos.json')
        .then((evento)=> {
            return evento.json()
        })
        .then((eventoJson)=>{
            mostrarEventos(eventoJson)
        })
        .catch(()=>{
            console.log("error json")
        })
})

function mostrarEventos (eventosJson) {
    let res = document.querySelector(".eventos");

    let eventohtml = '';
    
    eventosJson.forEach(element => {
        const {nombre, fecha, lugar, capacidad, link} = element; 

        eventohtml += `
            <div class="evento">    
                <h3> ${nombre} </h3>
                <p> ${fecha} </p>
                <p> ${lugar} </p>
                <a href="${link}"> ${link} </a>
            </div>
            `
    });

    res.innerHTML = eventohtml;
}