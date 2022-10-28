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
            console.log('1: JUGAR');
            console.log('2: ELEGIR LINEAS');
            console.log('3: LEER REGLAS');
            console.log('0: Volver al menú anterior');
            var progressiveOption = readline.questionInt();
            progressiveSlot(progressiveOption);
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
            playReel(value);
            subMenuReel();
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
function playReel(value) {
    var newFounds = main_1.reelSlot1.playReelSlot(value);
    if (newFounds > 0) {
        console.log("Felicidades gan\u00F3 ".concat(newFounds * value, " creditos."));
        founds += newFounds;
    }
    else if (newFounds === 0) {
        console.log("Suerte para la proxima, acaba de perder ".concat(value, " creditos."));
        main_1.newCasino.addAmount(value);
        founds -= value;
    }
    else {
        console.log("Felicidades gano el pozo!! ".concat(main_1.reelSlot1.getWell(), "."));
        founds += main_1.reelSlot1.getWell();
    }
    console.log("Le quedan ".concat(founds, " creditos."));
    return newFounds;
}
function replayReel(times, value) {
    for (var i = 0; i < times; i++) {
        if (founds >= times * value) {
            playReel(value);
        }
        else {
            throw Error('No tiene fondos para esta apuesta.');
        }
    }
}
function subMenuReel() {
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
        replayReel(times, value);
        subMenuReel();
    }
    else if (gameOption === 3) {
        console.log("Se retir\u00F3 con ".concat(founds, " creditos."));
        main();
    }
}
function progressiveSlot(option) {
    switch (option) {
        case 0:
            games();
            break;
        case 1:
            var value = readline.questionInt('Ingrese apuesta ( 1 - 2 - 5 - 10 - 15 ): ');
            playProgressive(value);
            subMenuProgressive();
            break;
        case 2:
            var lines = readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ');
            setSlotLines(lines);
            callGame(2);
            break;
        case 3:
            var text = clasificationText[2].toString();
            console.log(text);
            console.log("1: Volver atras:");
            var backMenu = readline.questionInt();
            callGame(backMenu);
            break;
    }
}
function playProgressive(value) {
    var newFounds = main_1.progressiveSlot1.playProgressiveSlot(value);
    if (newFounds > 0) {
        founds += newFounds;
    }
    else if (newFounds === 0) {
        main_1.newCasino.addAmount(value);
        founds -= value;
    }
    else if (newFounds === -1) {
        console.log("Felicidades acert\u00F3 una linea de 7! Gan\u00F3 ".concat(value * 500, "."));
        founds += value * 500;
    }
    else if (newFounds === -2) {
        console.log("Felicidades acert\u00F3 dos lineas de 7! Gan\u00F3 ".concat(value * 1000, "."));
        founds += value * 1000;
    }
    else if (newFounds === -3) {
        console.log("Felicidades acert\u00F3 tres lineas de 7! Gan\u00F3 ".concat(value * 2000));
        founds += value * 2000;
    }
    else if (newFounds === -4) {
        console.log("Felicidades acert\u00F3 cuatro lineas de 7! Gan\u00F3 ".concat(value * 3000));
        founds += value * 3000;
    }
    else if (newFounds === -5) {
        console.log("\u00A1\u00A1\u00A1Felicidades acert\u00F3 el jackpot!!! Gan\u00F3 ".concat(main_1.progressiveSlot1.getJackpot()));
        founds += value * main_1.progressiveSlot1.getJackpot();
    }
    console.log("Le quedan ".concat(founds, " creditos."));
    return newFounds;
}
function replayProgressive(times, value) {
    for (var i = 0; i < times; i++) {
        if (founds >= times * value * main_1.progressiveSlot1.getPayLine()) {
            playProgressive(value);
        }
        else {
            throw Error('No tiene fondos para esta apuesta.');
        }
    }
    console.log("Le quedan ".concat(founds, " creditos."));
}
function setSlotLines(lines) {
    main_1.progressiveSlot1.setPayLine(lines);
}
function subMenuProgressive() {
    console.log('1: JUGAR OTRA VEZ');
    console.log('2: CAMBIAR LINEAS');
    console.log('3: REPETIR JUGADAS');
    console.log('4: COBRAR Y SALIR');
    var gameOption = readline.questionInt();
    if (gameOption === 1) {
        progressiveSlot(1);
    }
    else if (gameOption === 2) {
        var lines = readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ');
        setSlotLines(lines);
        subMenuProgressive();
    }
    else if (gameOption === 3) {
        var times = readline.questionInt('Ingrese la cantidad de repeticiones:');
        var value = readline.questionInt('Ingrese apuesta ( 1 - 2 - 5 - 10 - 15): ');
        replayProgressive(times, value);
        subMenuProgressive();
    }
    else if (gameOption === 4) {
        console.log("Se retir\u00F3 con ".concat(founds, " creditos."));
        main();
    }
}
welcome();
