var Jugador = function(nombre, apellido, ocupacion, nivel, faccion){
    var n = nombre;
    var a = apellido;
    var o = ocupacion;
    var ni = nivel;
    var f = faccion;
    this.incrementarNivel = function(){
        ni++;
    }
    this.toString = function(){
        return n + ' ' + a + '. '+ o + ', nivel ' + ni + ' (' + f +')';
    }
}