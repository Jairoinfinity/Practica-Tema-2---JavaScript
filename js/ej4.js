var Consumible = function(_nombre, _efecto) {  
    this.nombre = _nombre;  
    this.efecto = _efecto;
}

Consumible.prototype.consumir = function(personaje) {  
    console.log(personaje.nombre + " consume " + this.nombre + " y " +this.efecto);
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

//Planta curativa
var PlantaCurativa = function(nombre,puntosVida){
    Consumible.apply(this,[nombre,"cura su vida."]);
    this.puntosRegenerar = puntosVida;
    this.consumir = function(){
        
    }
}