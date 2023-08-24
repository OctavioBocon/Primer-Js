//Esto es una prueba de crear el famoso juego de "Ta Te Ti"//


const tablero = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let jugadorActual = 'X';  // Inicializamos con el jugador 'X'

let nombre = prompt("Ingrese su nombre:");
let X = prompt("Has elegido X:");
let O = prompt("Has elegido O");
if (X === O) {
    console.log("Has elegido el X-O");
    console.log("¿Estás listo?");
}

function mostrarTablero() {
    const tableroJuego = document.getElementById('tableroJuego');
    tableroJuego.innerHTML = ''; 
    
    for (let fila = 0; fila < 3; fila++) {
        for (let col = 0; col < 3; col++) {
            const celda = document.createElement('div');
            celda.className = 'celda';
            celda.textContent = tablero[fila][col];
            celda.addEventListener('click', () => jugar(fila, col));
            tableroJuego.appendChild(celda);  
        }
    }
}

function jugar(fila, col) {
    if (tablero[fila][col] === '') {
        tablero[fila][col] = jugadorActual;
        mostrarTablero();
        jugadorActual = jugadorActual === 'X' ? 'O' : 'X'; //Aca cambiaria el jugador actual
    } else {
        alert('¡Esa celda ya está ocupada!');
    }
}

mostrarTablero();
    //Todavia no esta terminado pero para las 3ra entrega tengo pensado agregar un carrito de comprar para tener diferentes aspectos tanto para el tablero como para la X y la O//