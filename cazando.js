let canvas;
let ctx;

function graficarGato() {
    canvas = document.getElementById("areaJuego");
    ctx = canvas.getContext("2d");
    ctx.fillRect(225, 225, 50, 50);
}