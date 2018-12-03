//Constructor de los jugadores
var Jugador = function(nombre,apellido,ocupacion,nivel,faccion){
    this.Nombre = nombre;
    this.Apellido = apellido;
    this.Ocupacion = ocupacion;
    this.Nivel = nivel;
    this.Faccion = faccion;
}

//Creamos la funcion toString para los jugadores
Jugador.prototype.toString = function(){
    return "Nombre: "+this.Nombre+" "+this.Apellido+", Ocupación: "+this.Ocupacion+", Nivel: "+this.Nivel+", Facción: "+this.Faccion;
}

//Añadimos en un array los jugadores de prueba
var jugadores = [
    new Jugador("Jairo","Bernal","Programador",26,"Azul"), 
    new Jugador("Manuel","Bernal","Soldador",56,"Verde")
];

//Mostramos el funcionamiento de toString
console.log(jugadores[0].toString());
console.log(jugadores[1].toString());

//Eliminamos la facción del segundo jugador
delete jugadores[1].Faccion;

//Mostramo la informacion del jugador 2 para comprobar que se a eliminado la facción
console.log(jugadores[1].toString());