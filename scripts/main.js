let lugaresDisponibles = 30;
let anfitrion;
const anfitriones = [];
let mensaje = document.querySelector(".mensaje p"); 
let solicitar = document.querySelector("#solicitud");

function solicitarLugares () {
    if (lugaresDisponibles>0 ) {
        let lugaresSolicitados = prompt ("Ingrese la cantidad de personas que desea invitar al evento")
        reservarLugares(lugaresDisponibles, lugaresSolicitados);
        if (lugaresDisponibles >= lugaresSolicitados){
            lugaresDisponibles = lugaresDisponibles-lugaresSolicitados;
            agregarAnfitriones (anfitrion);
            console.log ("Nos quedan " + lugaresDisponibles + " lugares disponibles")
        }    
    }
}

function reservarLugares (lugaresDisponibles, lugaresSolicitados){
    if (lugaresDisponibles >= lugaresSolicitados) {
        console.log ("Los lugares fueron reservados.");

        anfitrion = {
            nombre: prompt ("Necesitamos registrarte como anfitrion de la lista de invitados, escribe tu nombre") ,
            telefono: prompt ("Gracias, por último necesitamos tu numero de celular") ,
            cantidadDeInvitados: lugaresSolicitados , 
        }
        alert (" Se ha creado la lista de " + anfitrion.cantidadDeInvitados + " invitados a nombre de " + anfitrion.nombre + ", celular: " + anfitrion.telefono);

        return lugaresDisponibles & anfitrion;

    } else {
        console.log ("Solicitud cancelada, cantidad de invitados: " + lugaresSolicitados + ". Lugares disponibles: " + lugaresDisponibles + ".");
        alert ("Lo sentimos, solo tenemos " + lugaresDisponibles + " lugares disponibles.");
    }
}

function agregarAnfitriones (anfitrion) {
        anfitriones.push (anfitrion);
        console.log (anfitriones[anfitriones.length-1]);
}

let texto = "Has click en Ticket para reservar lugares";

mensaje.innerHTML = texto;