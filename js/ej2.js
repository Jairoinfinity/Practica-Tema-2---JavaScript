var Zombi = function(nombre, puntosVida, potencia) {
    this.nombre = nombre;
    this.puntosVida = puntosVida;
    this.maxVida = puntosVida;
    this.potencia = potencia;
}

Zombi.prototype.atacar = function(objetivo) {
    console.log(this.nombre + " ataca a " + objetivo + " y le causa " + this.potencia + " puntos de daño");
}

Zombi.prototype.mover = function(tipoTerreno) {
    if (tipoTerreno === "agua") {
        console.log(this.nombre + "No se puede mover a través de estetipo de terreno");
    } else {
        console.log(this.nombre + " se mueve a través del " + tipoTerreno);
    }
}

//Creamos los mostruos
var zombi = new Zombi('Bob', 2, 3);
var zombi2 = new Zombi('Tod', 2, 3);

//Le añadimos sus metodos
zombi.ataqueMultiple = function(objetivo) {
    for(var i = 0; i < 4; i++){
        console.log(this.nombre + " ataca a " + objetivo + " y le causa " + this.potencia + " puntos de daño");
    }
    
}

zombi2.mover = function(tipoTerreno) {
    if (tipoTerreno === "agua") {
        console.log(this.nombre + " nada a través del " + tipoTerreno);
    } else {
        console.log(this.nombre + " No puede mpverse a través del " + tipoTerreno);
    }
}

//Probamos el funcionamiento.
zombi.ataqueMultiple('Javi');
zombi.mover('bosque');


zombi2.atacar("Jugador");
zombi2.mover("agua");