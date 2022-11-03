"use strict";
exports.__esModule = true;
exports.Craps = void 0;
var Craps = /** @class */ (function () {
    function Craps(pApuesta) {
        this.apuesta = pApuesta;
    }
    Craps.prototype.getCredito = function () {
        return this.apuesta;
    };
    Craps.prototype.setCredito = function (pApuesta) {
        this.apuesta = pApuesta;
    };
    Craps.prototype.tirarDados = function () {
        var dado = 0;
        for (var i = 0; i < 6; i++) {
            dado = Math.floor(Math.random() * 6 + 1);
        }
        return dado;
    };
    Craps.prototype.restarCredito = function (pApuesta) {
        pApuesta = this.apuesta * 0.95;
        return pApuesta;
    };
    Craps.prototype.sumarCredito = function (pApuesta) {
        pApuesta = this.apuesta * 2;
        return pApuesta;
    };
    Craps.prototype.comprobarResultado = function () {
        // let ganaCredito = this.sumarCredito(this.apuesta);
        // let pierdeCredito = this.restarCredito(this.apuesta);
        var pDado1 = this.tirarDados();
        var pDado2 = this.tirarDados();
        var suma = pDado1 + pDado2;
        var aux = 0;
        console.log("La suma de los dados es: ", suma);
        if ((suma == 7) || (suma == 11)) { // el jugador ganó
            console.log("Primer Dado: ", pDado1, " ", "Segundo Dado: ", pDado2);
            //console.log("Ud. ganó: ", ganaCredito);  
            aux = -1;
        }
        else if ((suma == 2) || (suma == 3) || (suma == 12)) { // el jugador perdió
            console.log("El resultado es: ", "Primer Dado: ", pDado1, " ", "Segundo Dado: ", pDado2);
            //console.log("Ud. Perdió: ", pierdeCredito);
            aux = 1;
        }
        else {
            console.log("El resultado es: ", "Primer Dado: ", pDado1, " ", "Segundo Dado: ", pDado2);
            console.log(" Ud. vuelve a tirar el dado!"); //el jugador vuelve a tirar hasta ganar o perder;
        }
        console.log(aux);
        return aux;
    };
    return Craps;
}());
exports.Craps = Craps;
var juego1 = new Craps(140);
console.log("-------------------------------------------------");
console.log("Ud. Ingresó ", juego1.getCredito(), " créditos");
console.log("-------------------------------------------------");
juego1.comprobarResultado();
console.log("-------------------------------------------------");
juego1.comprobarResultado();
