var Consumible = function(_nombre, _efecto) {
    this.nombre = _nombre;
    this.efecto = _efecto;
}

Consumible.prototype.consumir = function(personaje) {
    console.log(personaje.nombre + " consume " + this.nombre + " y " + this.efecto);
}

var manzana = new Consumible('Manzana', 'no tiene ningún efecto');

var ricardo = {
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 8,
    maxPuntosVida: 10,
    consumir: function(consumible) {
        consumible.consumir(this);
    }
}


ricardo.consumir(manzana);

//Constructor Planta curativa
var PlantaCurativa = function(nombre, pVida) {
        Consumible.apply(this, [nombre, "cura su vida."]);
        this.pVida = pVida;
}


PlantaCurativa.prototype = Object.create(Consumible.prototype);

PlantaCurativa.prototype.consumir = function(personaje) {

    var vida = personaje.puntosVida;
    var maxVida = personaje.maxPuntosVida;
    var result = maxVida - vida;
    if (result <= 0) {
        console.log("No puedes consumir esta planta porque tu vida esta completa.");
    } else {
        if ((this.pVida + vida) >= maxVida) {
            personaje.puntosVida = maxVida;
        } else {
            personaje.puntosVida += this.pVida;
        }
        console.log(personaje.nombre + " consume " + this.nombre + " y " + this.efecto);
    }
}

//Creamos una planta curativa
var lechuga = new PlantaCurativa("Lechuga", 1);


//Constructor Pastilla
var Pastilla = function(nombre, pPotencia) {
    Consumible.apply(this, [nombre, "aumenta su potencia pero reduce su vida maxima."]);
    this.pPotencia = pPotencia;
}

Pastilla.prototype = Object.create(Consumible.prototype);

Pastilla.prototype.consumir = function(personaje) {
    var vida = personaje.puntosVida;
    var maxVida = personaje.maxPuntosVida;

    if (maxVida > 1) {
        
        var potencia = personaje.potencia + this.pPotencia;
        if((maxVida - potencia) < 1){
            personaje.potencia = 10;
            personaje.maxPuntosVida = 1;
            personaje.puntosVida = 1;
        }else{
            personaje.potencia = potencia;
            personaje.maxPuntosVida -= this.pPotencia;
            
            if (personaje.puntosVida > personaje.maxPuntosVida) {
                personaje.puntosVida = personaje.maxPuntosVida;
            }
        }

        console.log(personaje.nombre + " consume " + this.nombre + " y " + this.efecto);
    } else {
        console.log("No puedes consumir la pastilla porque ya estas al minimo de vida y al máximo de potencia.");
    }
}

//Creamos una pastilla
var pasti = new Pastilla("Paracetamol",5);