"use strict";
exports.__esModule = true;
var fs = require("fs");
var readline = require('readline-sync');
function welcome() {
    var welcome = fs.readFileSync('./files.txt/info.txt', 'utf-8');
    console.log(welcome);
    main();
}
function main() {
    console.log('1: JUGAR');
    var opcion = readline.questionInt();
    switch (opcion) {
        case 1:
            games();
            break;
        default:
            throw Error('Ingrese una opcion valida');
    }
}
function games() {
    console.log('Elija un juego:');
    console.log('1: TRAGAMONEDAS TRADICIONAL');
    console.log('2: TRAGAMONEDAS PROGRESIVO');
    console.log('3: RULETA');
    console.log('4: DADOS');
    console.log('0: Volver al menu anterior');
    var opcion = readline.questionInt();
    callGame(opcion);
}
function callGame(opcion) {
    switch (opcion) {
        case 0:
            main();
            break;
        case 1:
            console.log('1: ELEGIR APUESTA');
            console.log('2: LEER REGLAS');
            console.log('0: Volver al menu anterior');
            var opcion_1 = readline.questionInt();
            break;
    }
}
welcome();
