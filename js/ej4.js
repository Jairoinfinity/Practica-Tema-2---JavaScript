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
var PlantaCurativa = function(nombre,pVida){
    Consumible.apply(this,[nombre,"cura su vida."]);
    this.puntosRegenerar = pVida;
    this.consumir = function(personaje){
        
        var vida = personaje.puntosVida;
        var maxVida = personaje.maxPuntosVida;
        var result = maxVida-vida;
        if(result <= 0){
            console.log("No puedes consumir esta planta porque tu vida esta completa.");
        }else{
            if((pVida + vida) >= 10){
                personaje.puntosVida = maxVida;
            }else{
                personaje.puntosVida += pVida;
            }
            console.log(personaje.nombre + " consume " + this.nombre + " y " +this.efecto);
        }
    }
}
 //Creamos una planta curativa
var lechuga = new PlantaCurativa("Lechuga",1);