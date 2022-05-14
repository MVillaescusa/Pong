class Jugador {
	constructor(x, y, ancho, alto, vel, imagen, id) {
		this.x = x;
		this.y = y;
		this.ancho = ancho;
		this.alto = alto;
		this.vel = vel;
		this.imagen = imagen;
		this.id = id;
		var jugador = document.createElement("img");
		jugador.id = id;
		jugador.setAttribute("name", "jugador");
		jugador.style.position = "absolute"; //el lienzo tiene que tener position: relative para que esto funcione
		jugador.style.top = y + "px";
		jugador.style.left = x + "px";
		jugador.width = ancho;
		jugador.height = alto;
		jugador.src = imagen;
		document.getElementById("lienzo").appendChild(jugador);
	}

	getX() {
		return this.x;
	}

	getY() {
		return this.y;
	}

	getVel() {
		return this.vel;
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

	setVel(vel) {
		this.vel = vel;
	}

	setImagen(imagen) {
		this.imagen = imagen;
	}

	moveUp() {
		if (this.y - this.vel >= 0) {
			this.y -= this.vel;
		}
	}

	moveDown() {
		if (this.y + this.alto <= document.getElementById("lienzo").clientHeight) {
			this.y += this.vel;
		}
	}
}
