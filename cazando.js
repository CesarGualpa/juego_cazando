let canvas;
let ctx;
let puntos = 0;
let tiempo = 15;
let intervalo;

function restarTiempo() {
    tiempo = tiempo - 1;
    mostrarEnSpan("tiempo", tiempo);

    if (tiempo === 0) {
        alert("Game Over");
        clearInterval(intervalo);
    }
}

function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "black");
}

function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "green");
}

// posiciones
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

// tamaños
const ANCHO_GATO = 50;
const ALTO_GATO = 50;
const ANCHO_COMIDA = 20;
const ALTO_COMIDA = 20;

function iniciarJuego() {
    canvas = document.getElementById("areaJuego");
    ctx = canvas.getContext("2d");

    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = (canvas.height / 2) - (ALTO_GATO / 2);

    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;

    graficarGato();
    graficarComida();
    mostrarEnSpan("puntos", puntos);
    mostrarEnSpan("tiempo", tiempo);
    intervalo = setInterval(restarTiempo, 1000);}

    function reiniciarJuego() {
    clearInterval(intervalo);

    puntos = 0;
    tiempo = 15;

    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = (canvas.height / 2) - (ALTO_GATO / 2);

    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;

    limpiarCanva();
    graficarGato();
    graficarComida();

    mostrarEnSpan("puntos", puntos);
    mostrarEnSpan("tiempo", tiempo);

    intervalo = setInterval(restarTiempo, 1000);
}

function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function detectarColision() {
    if (
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY
    ) {
     
        puntos = puntos + 1;
        mostrarEnSpan("puntos", puntos);

        if (puntos === 6) {
            alert("Ganaste");
            clearInterval(intervalo);
        }

        comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
        comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);

        limpiarCanva();
        graficarGato();
        graficarComida();
    }
}

function moverIzquierda() {
    if (gatoX > 0) {
        gatoX = gatoX - 60;
    }
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverDerecha() {
    if (gatoX + ANCHO_GATO < canvas.width) {
        gatoX = gatoX + 60;
    }
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba() {
    if (gatoY > 0) {
        gatoY = gatoY - 60;
    }
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo() {
    if (gatoY + ALTO_GATO < canvas.height) {
        gatoY = gatoY + 60;
    }
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}