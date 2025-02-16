// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value;

    if (nuevoAmigo === ""){
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nuevoAmigo);
        document.getElementById("amigo").value = "";
    }
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let index = 0; index < amigos.length; index++) {
        const li = document.createElement('li');
        li.innerHTML = amigos[index];
        lista.appendChild(li);
    }
}
