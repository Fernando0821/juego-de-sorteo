let amigos = [];

// Capturar el valor del campo de entrada
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombreAmigo = input.value.trim();

    // Validar la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista de amigos en el HTML
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista existente

    // Iterar sobre el arreglo y agregar elementos a la lista
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para seleccionar un amigo aleatoriamente
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

// Asignar la función al botón de agregar
document.querySelector('.button-add').addEventListener('click', agregarAmigo);

// Asignar la función al botón de sortear
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);