// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];


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
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let index = 0; index < amigos.length; index++) {
        const li = document.createElement('li');
        li.innerHTML = amigos[index];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let inputResultado = document.getElementById("resultado");
    //Valida 2 o más amigos para realizar el sorteo
    if ( amigos.length <= 1){
        alert("Lista de amigos incompleta, por favor ingrese al menos dos amigos");
        //Agreagr al input de amigo una aleta en rojo
    } else {
        let numAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoAleatorio = amigos[numAleatorio];
        inputResultado.innerHTML = amigoAleatorio;
    }
}