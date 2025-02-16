// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];
let inputAmigo;
let inputResultado;
//Valor máximo permitido de amigos
const maximoAmigosPermitidos = 5;

// Cargar el DOM para asignar inputAmigo y inputResultado (No repetir la declaración en cada función)
document.addEventListener('DOMContentLoaded', (event) => {
    inputAmigo = document.getElementById("amigo");
    inputResultado = document.getElementById("resultado");
});

function agregarAmigo() {
    let nombreAmigo = inputAmigo.value;
    if (nombreAmigo === "" || nombreAmigo.length > 35) {
        cambiarPlaceholder("Inserte un nombre válido: No Vacío y menor de 35 caracteres");
        inputAmigo.value = "";
    } else if (amigos.length >= maximoAmigosPermitidos) {
        cambiarPlaceholder(`Amigos permitidos: ${maximoAmigosPermitidos}`);
        inputAmigo.value = "";
    } else {
        amigos.push(nombreAmigo); // Usa la variable nombreAmigo
        limpiarInput(); // Restaurar input
        inputResultado.innerHTML = ""; // Limpia el contenido del input resultado
        actualizarListaAmigos(); // Actualiza la lista de amigos
    }
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    // Ciclo for => anexa un nombre al array amigos
    for (let index = 0; index < amigos.length; index++) {
        const li = document.createElement('li');
        li.innerHTML = `${index + 1}.  ${amigos[index]}`;
        const buttonEliminar = document.createElement('button');
        buttonEliminar.classList.add("buttom-eliminated")
        buttonEliminar.innerText = 'X';
        buttonEliminar.onclick = () => eliminarAmigo(index);
        li.appendChild(buttonEliminar);
        lista.appendChild(li);
        
    }
}

function sortearAmigo() {
    // Valida 2 o más amigos para realizar el sorteo
    if (amigos.length <= 1) {
        cambiarPlaceholder("Ingrese más de dos amigos");
        inputAmigo.value = ""; // Restaurar input
        inputResultado.innerHTML = "";
    } else {
        limpiarInput(); // Restaurar input solo una vez
        inputResultado.innerHTML = ""; // Limpiar resultados anteriores
        let numAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoAleatorio = amigos[numAleatorio];
        const li = document.createElement('li');
        li.innerHTML = `¡Tu amigo secreto es: ${amigoAleatorio}!`;
        inputResultado.appendChild(li);
    }
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
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