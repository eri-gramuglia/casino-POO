"use strict";
exports.__esModule = true;
var main_1 = require("./main");
var fs = require("fs");
var readline = require('readline-sync');
var information = fs.readFileSync('./files.txt/info.txt', 'utf-8');
var clasificationText = information.split('\\');
var founds = 100000;
function welcome() {
    var text = clasificationText[0].toString();
    console.log(text);
    main();
}
function main() {
    console.log('1: MENU');
    var option = readline.questionInt();
    switch (option) {
        case 1:
            games();
            break;
        default:
            throw Error('Ingrese una opción valida');
    }
}
function games() {
    console.log('Elija una opción:');
    console.log('1: TRAGAMONEDAS TRADICIONAL');
    console.log('2: TRAGAMONEDAS PROGRESIVO');
    console.log('3: RULETA');
    console.log('4: DADOS');
    console.log('0: Volver al inicio');
    var option = readline.questionInt();
    callGame(option);
}
function callGame(option) {
    switch (option) {
        case 0:
            main();
            break;
        case 1:
            console.log('1: JUGAR');
            console.log('2: LEER REGLAS');
            console.log('0: Volver al menú anterior');
            var reelOption = readline.questionInt();
            reelSlot(reelOption);
            break;
        case 2:
            console.log('1: ELEGIR APUESTA');
            console.log('2: LEER REGLAS');
            console.log('0: Volver al inicio');
            var progressiveOption = readline.questionInt();
            break;
    }
}
function reelSlot(option) {
    switch (option) {
        case 0:
            games();
            break;
        case 1:
            var value = readline.questionInt('Ingrese apuesta ( 5 - 10 - 15 - 20 ): ');
            play(value);
            subMenu();
            break;
        case 2:
            var text = clasificationText[1].toString();
            console.log(text);
            console.log("1: Volver atras:");
            var backMenu = readline.questionInt();
            callGame(backMenu);
            break;
    }
}
function play(value) {
    var newFounds = main_1.reelSlot1.playReelSlot(value);
    if (newFounds > 0) {
        founds += newFounds;
    }
    else if (newFounds === 0) {
        main_1.newCasino.addAmount(value);
        founds -= value;
    }
    else {
        founds += main_1.reelSlot1.getWell();
    }
    console.log("Le quedan ".concat(founds, " creditos."));
    return newFounds;
}
function replay(times, value) {
    for (var i = 0; i < times; i++) {
        if (founds >= times * value) {
            play(value);
        }
        else {
            throw Error('No tiene fondos para esta apuesta.');
        }
    }
    console.log("Le quedan ".concat(founds, " creditos."));
}
function subMenu() {
    console.log('1: JUGAR OTRA VEZ');
    console.log('2: REPETIR JUGADAS');
    console.log('3: COBRAR Y SALIR');
    var gameOption = readline.questionInt();
    if (gameOption === 1) {
        reelSlot(1);
    }
    else if (gameOption === 2) {
        var times = readline.questionInt('Ingrese la cantidad de repeticiones:');
        var value = readline.questionInt('Ingrese apuesta ( 5 - 10 - 15 - 20 ): ');
        replay(times, value);
        subMenu();
    }
    else if (gameOption === 3) {
        7;
        console.log("Se retir\u00F3 con ".concat(founds, " creditos."));
        main();
    }
}
welcome();
