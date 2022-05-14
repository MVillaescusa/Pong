class Pelota {
    constructor(x, y, velX, velY, imagen, id, diametro) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.imagen = imagen;
        this.id = id;
        this.diametro = diametro;
        this.ancho = diametro;
        this.alto = diametro;
        var pelota = document.createElement("img");
        pelota.id = id;
        pelota.setAttribute("name", "pelota");
        pelota.style.position = "absolute"; //el lienzo tiene que tener position: relative para que esto funcione
        pelota.style.top = y + "px";
        pelota.style.left = x + "px";
        pelota.width = diametro;
        pelota.height = diametro;
        pelota.src = imagen;
        document.getElementById("lienzo").appendChild(pelota);
    }

    /*constructor(imagen, id){ //Math.random() * (max - min) + min;
        this.x = Math.random() * (document.getElementById("lienzo").clientWidth - 0) + 0;
        this.y = Math.random() * (document.getElementById("lienzo").clientHeight - 0) + 0;
        this.velX = Math.random() * (10 - 1) + 1;
        this.velY = Math.random() * (10 - 1) + 1;
        this.imagen = imagen;
        this.id = id;
        this.diametro = Math.random() * (75 - 5) + 5;
        this.ancho = this.diametro;
        this.alto = this.diametro;
        var pelota = document.createElement("img");
        pelota.id = id;
        pelota.setAttribute("name", "pelota");
        pelota.style.position = "absolute"; //el lienzo tiene que tener position: relative para que esto funcione
        pelota.style.top = this.y + "px";
        pelota.style.left = this.x + "px";
        pelota.width = this.diametro;
        pelota.height = this.diametro;
        pelota.src = imagen;
        document.getElementById("lienzo").appendChild(pelota);
    }*/

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getVelX() {
        return this.velX;
    }

    getVelY() {
        return this.velY;
    }

    getImagen() {
        return this.imagen;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    setVelX(velX) {
        this.velX = velX;
    }

    setVelY(velY) {
        this.velY = velY;
    }

    setImagen(imagen) {
        this.imagen = imagen;
    }

    choca(jugador) {
        var choca = false;
        if (((this.x + this.velX < jugador.getX() + jugador.ancho) && (this.x + this.velX + this.ancho > jugador.x)) && ((this.y < jugador.getY() + jugador.alto) && (this.y + this.alto > jugador.getY()))) {
            choca = true;
        }
        return choca;
    }

    chocaIzq(jugador) {
        var choca = false;
        if ((this.x + this.velX < jugador.getX() + jugador.ancho) && ((this.y < jugador.getY() + jugador.alto) && (this.y + this.alto > jugador.getY()))) {
            choca = true;
        }
        return choca;
    }

    chocaDer(jugador) {
        var choca = false;
        if ((this.x + this.velX + this.ancho >= jugador.getX()) && ((this.y < jugador.getY() + jugador.alto) && (this.y + this.alto > jugador.getY()))) {
            choca = true;
        }
        return choca;
    }
}