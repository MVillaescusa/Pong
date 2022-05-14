window.onload = inicia;

var pelotas = new Array();
var interval;
var jugador1, jugador2;
var tecla = new Array();
var gol1 = 0;
var gol2 = 0;

function inicia() {
    generaPelota();
    jugador1 = new Jugador(20, 100, 20, 70, 5, "./img/jugador.png", "jugador1");
    jugador2 = new Jugador(document.getElementById("lienzo").clientWidth - 40, 100, 20, 70, 5, "./img/jugador.png", "jugador2");

    window.addEventListener("keydown", function(e) {
        tecla[e.keyCode] = true;
    });
    window.addEventListener("keyup", function(e) {
        tecla[e.keyCode] = false;
    });

    intervalo();
}

function generaPelota() {
    var x = document.getElementById("lienzo").clientWidth / 2;
    var y = document.getElementById("lienzo").clientHeight / 2;
    var velX = Math.random() * (10 - 5) + 5;
    var velY = Math.random() * (3 - 1) + 1;
    Math.random() > 0.5 ? (velX = velX) : (velX = velX * -1);
    Math.random() > 0.5 ? (velY = velY) : (velY = velY * -1);
    var imagen = "./img/pelota.png";
    var id = "pelota0";
    var diametro = 25;
    pelotas[0] = new Pelota(x, y, velX, velY, imagen, id, diametro);
}

function intervalo() {
    //interval = setInterval(actualiza, 20);
    actualiza();
}

function reiniciaPelota() {
    var derecha;
    for (var i = 0; i < pelotas.length; i++) {
        if (pelotas[i].getVelX() > 0) {
            derecha = true;
        } else {
            derecha = false;
        }
        pelotas[i].setVelX(Math.random() * (5 - 3) + 3);
        pelotas[i].setVelY(Math.random() * (3 - 1) + 1);
        if (derecha) {
            pelotas[i].setVelX(pelotas[i].getVelX() * -1);
        }
    }
}

function actualiza() {
    for (var i = 0; i < pelotas.length; i++) {
        pelotas[i].setX(pelotas[i].getX() + pelotas[i].getVelX());
        pelotas[i].setY(pelotas[i].getY() + pelotas[i].getVelY());

        if (pelotas[i].getY() + pelotas[i].getVelY() < 0) {
            pelotas[i].setY(0);
            pelotas[i].setVelY(pelotas[i].getVelY() * -1);
        }

        if (
            pelotas[i].diametro + pelotas[i].getY() + pelotas[i].getVelY() >
            document.getElementById("lienzo").clientHeight
        ) {
            pelotas[i].setY(document.getElementById("lienzo").clientHeight - pelotas[i].diametro);
            pelotas[i].setVelY(pelotas[i].getVelY() * -1);
        }
    }

    compruebaTeclas();
    if (pelotas[0].chocaIzq(jugador1)) {
        pelotas[0].setVelX(pelotas[0].getVelX() * -1);
        pelotas[0].setVelX(pelotas[0].getVelX() + 2);
        pelotas[0].setX(jugador1.getX() + jugador1.ancho);
    } else if (pelotas[0].chocaDer(jugador2)) {
        pelotas[0].setVelX(pelotas[0].getVelX() * -1);
        pelotas[0].setVelX(pelotas[0].getVelX() - 2);
        pelotas[0].setX(jugador2.getX() - pelotas[0].ancho);
    } else if (
        pelotas[0].diametro + pelotas[0].getX() + pelotas[0].getVelX() >
        document.getElementById("lienzo").clientWidth
    ) {
        gol1++;
        console.log(gol1 + " - " + gol2);
        pelotas[0].setX(document.getElementById("lienzo").clientWidth / 2);
        reiniciaPelota();
    } else if (pelotas[0].getX() + pelotas[0].getVelX() < 0) {
        gol2++;
        console.log(gol1 + " - " + gol2);
        pelotas[0].setX(document.getElementById("lienzo").clientWidth / 2);
        reiniciaPelota();
    }
    pinta();
    pintaPuntuacion();
    requestAnimationFrame(actualiza);
}

function compruebaTeclas() {
    if (tecla[65] || tecla[97]) {
        jugador1.moveUp();
    }
    if (tecla[90] || tecla[122]) {
        jugador1.moveDown();
    }
    if (tecla[38]) {
        jugador2.moveUp();
    }
    if (tecla[40]) {
        jugador2.moveDown();
    }
}

function pinta() {
    for (var i = 0; i < pelotas.length; i++) {
        document.getElementById(pelotas[i].id).style.left = pelotas[i].getX() + "px";
        document.getElementById(pelotas[i].id).style.top = pelotas[i].getY() + "px";
    }
    document.getElementById("jugador1").style.top = jugador1.getY() + "px";
    document.getElementById("jugador2").style.top = jugador2.getY() + "px";
}

function pintaPuntuacion() {
    document.getElementById("puntuacionJ1").innerHTML = gol1;
    document.getElementById("puntuacionJ2").innerHTML = gol2;
}