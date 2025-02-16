// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];
let inputAmigo;
let inputResultado;

// Cargar el DOM para asignar inputAmigo y inputResultado (No repetir la declaración en cada función)
document.addEventListener('DOMContentLoaded', (event) => {
    inputAmigo = document.getElementById("amigo");
    inputResultado = document.getElementById("resultado");
});

function agregarAmigo() {
    if (inputAmigo.value === "") {
        cambiarPlaceholder("Por favor, inserte el nombre de un amigo.");
    } else {
        amigos.push(inputAmigo.value);
        limpiarInput(); // Restaurar input
        inputResultado.innerHTML = ""; // Limpia el contenido del input resultado
    }
    // Si se cumple, actualiza la lista con el nombre ingresado
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    // Ciclo for => anexa un nombre al array amigos
    for (let index = 0; index < amigos.length; index++) {
        const li = document.createElement('li');
        li.innerHTML = amigos[index];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Valida 2 o más amigos para realizar el sorteo
    if (amigos.length <= 1) {
        cambiarPlaceholder("Por favor, ingrese más de dos amigos");
    } else {
        limpiarInput(); // Restaurar input
        let numAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoAleatorio = amigos[numAleatorio];
        const li = document.createElement('li');
        li.innerHTML = `¡Tu amigo secreto es: ${amigoAleatorio}!`;
        inputResultado.appendChild(li);
    }
}

// Modifica el placeholder y la propiedad border-line del input
function cambiarPlaceholder(texto) {
    inputAmigo.placeholder = texto;
    inputAmigo.classList.add("alert");
}

// Restaura las propiedades cuando se validan los escenarios
function limpiarInput() {
    inputAmigo.value = ""; // Limpiar el campo de entrada
    inputAmigo.placeholder = "Nombre del amigo"; // Restaurar placeholder
    inputAmigo.classList.remove("alert"); // Eliminar clase
}