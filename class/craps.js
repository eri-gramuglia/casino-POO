"use strict";
exports.__esModule = true;
exports.Craps = void 0;
var fs = require("fs");
var Craps = /** @class */ (function () {
    function Craps(pId) {
        this.id = pId;
    }
    Craps.prototype.getId = function () {
        return this.id;
    };
    Craps.prototype.tirarDados = function () {
        var dado = 0;
        for (var i = 0; i < 6; i++) {
            dado = Math.floor(Math.random() * 6) + 1;
        }
        return dado;
    };
    Craps.prototype.comprobarResultado = function () {
        var pDado1 = this.tirarDados();
        var pDado2 = this.tirarDados();
        var suma = pDado1 + pDado2;
        var aux = 0;
        console.log("La suma de los dados es: ", suma);
        if ((suma == 7) || (suma == 11)) {
            console.log("Primer Dado: ", pDado1, " ", "Segundo Dado: ", pDado2);
            aux = -1;
        }
        else if ((suma == 2) || (suma == 3) || (suma == 12)) {
            console.log("El resultado es: ", "Primer Dado: ", pDado1, " ", "Segundo Dado: ", pDado2);
            aux = 1;
        }
        else {
            console.log("El resultado es: ", "Primer Dado: ", pDado1, " ", "Segundo Dado: ", pDado2);
            console.log("No hay ganadores.");
        }
        return aux;
    };
    Craps.prototype.obtenerPremio = function (apuesta) {
        var estadistica;
        var aux = this.comprobarResultado();
        var premio = 0;
        if (aux === -1) {
            console.log("Usted gan\u00F3 ".concat(apuesta * 2, "."));
            premio = apuesta * 2;
        }
        else if (aux === 1) {
            console.log("Perdi\u00F3 ".concat(apuesta, " cr\u00E9ditos."));
            premio -= apuesta;
        }
        else {
            premio = 0;
        }
        if (premio > 0) {
            estadistica = "\nLa mesa de dados entreg\u00F3 ".concat(premio, " cr\u00E9ditos. ");
            this.imprimirEstadisticas(estadistica);
        }
        else if (premio < 0) {
            estadistica = "\nLa mesa de dados gan\u00F3 ".concat(apuesta, " cr\u00E9ditos. ");
            this.imprimirEstadisticas(estadistica);
        }
        return premio;
    };
    Craps.prototype.imprimirEstadisticas = function (valor) {
        fs.appendFile('./files.txt/crapsStatistics.txt', valor, { encoding: 'utf8' }, function (error) {
            if (error) {
                console.log("Error: ".concat(error));
            }
        });
    };
    return Craps;
}());
exports.Craps = Craps;
