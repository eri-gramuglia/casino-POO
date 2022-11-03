"use strict";
exports.__esModule = true;
exports.Craps = void 0;
var Craps = /** @class */ (function () {
    function Craps() {
    }
    Craps.prototype.tirarDados = function () {
        var dado = 0;
        for (var i = 0; i < 6; i++) {
            dado = Math.floor(Math.random() * 6 + 1);
        }
        return dado;
    };
    Craps.prototype.comprobarResultado = function () {
        var pDado1 = this.tirarDados();
        var pDado2 = this.tirarDados();
        var suma = pDado1 + pDado2;
        var aux = 0;
        console.log("La suma de los dados es: ", suma);
        if ((suma == 7) || (suma == 11)) { // el jugador ganó
            console.log("Primer Dado: ", pDado1, " ", "Segundo Dado: ", pDado2);
            // console.log("Ud. ganó: ",);  
            aux = 1;
        }
        else if ((suma == 2) || (suma == 3) || (suma == 12)) { // el jugador perdió
            console.log("El resultado es: ", "Primer Dado: ", pDado1, " ", "Segundo Dado: ", pDado2);
            // console.log("Ud. Perdió: ", pierdeCredito);
            aux = -1;
        }
        else {
            console.log("El resultado es: ", "Primer Dado: ", pDado1, " ", "Segundo Dado: ", pDado2);
            console.log(" Ud. vuelve a tirar el dado!"); //el jugador vuelve a tirar hasta ganar o perder;
        }
        return aux;
    };
    return Craps;
}());
exports.Craps = Craps;
var craps1 = new Craps();
var consulta = craps1.comprobarResultado();
console.log(consulta);
