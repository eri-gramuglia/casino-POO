"use strict";
exports.__esModule = true;
exports.newCasino = exports.progressiveSlot1 = exports.reelSlot1 = void 0;
var progressiveSlot_1 = require("./class/progressiveSlot");
var reelSlot_1 = require("./class/reelSlot");
var casino_1 = require("./class/casino");
var fs = require("fs");
var readline = require('readline-sync');
var information = fs.readFileSync('./files.txt/info.txt', 'utf-8');
var clasificationText = information.split('\\');
var founds = 100000;
var progressiveSlotBet = [1, 2, 5, 10, 15];
var reelSlotBet = [5, 10, 15, 20];
exports.reelSlot1 = new reelSlot_1.ReelSlot(1001, reelSlotBet, "Animal", 9, 20, 3, 10000);
exports.progressiveSlot1 = new progressiveSlot_1.ProgressiveSlot(2001, progressiveSlotBet, "Egipcio", 25, 25, 5, 5, 500000);
var reelSlotList = [exports.reelSlot1];
var progressiveSlotList = [exports.progressiveSlot1];
exports.newCasino = new casino_1.Casino('Atlanta', progressiveSlotList, reelSlotList, 500000);
function welcome() {
    var text = clasificationText[0].toString();
    console.log(text);
    main();
}
function main() {
    console.log('Ingrese 1 y oprima ENTER para acceder al menú del casino.');
    var option = readline.questionInt();
    switch (option) {
        case 1:
            games();
            break;
        default:
            console.log('Ingrese una opción valida');
            main();
    }
}
function games() {
    console.log('Para acceder a un juego ingrese un numero y oprima ENTER.');
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
            console.log('Elija una opción y oprima ENTER');
            console.log('1: JUGAR');
            console.log('2: LEER INFORMACION DEL JUEGO');
            console.log('0: Volver al menú anterior');
            var reelOption = readline.questionInt();
            reelSlot(reelOption);
            break;
        case 2:
            console.log('Elija una opción y oprima ENTER');
            console.log('1: JUGAR');
            console.log('2: ELEGIR LINEAS');
            console.log('3: LEER INFORMACION DEL JUEGO');
            console.log('0: Volver al menú anterior');
            var progressiveOption = readline.questionInt();
            progressiveSlot(progressiveOption);
            break;
        case 3:
            console.log('Elija una opción y oprima ENTER');
            console.log('1: JUGAR');
            console.log('2: LEER INFORMACION DEL JUEGO');
            console.log('0: Volver al menú anterior');
            var rouleteOption = readline.questionInt();
            roullete(rouleteOption);
            break;
        case 4:
            console.log('Elija una opción y oprima ENTER');
            console.log('1: JUGAR');
            console.log('2: LEER INFORMACION DEL JUEGO');
            console.log('0: Volver al menú anterior');
            var crapsOption = readline.questionInt();
            craps(crapsOption);
            break;
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero valido ---");
            games();
    }
}
/* Funcionalidades de tragamonedas tradicional */
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
            console.log("Ingrese 1 para volver al men\u00FA anterior:");
            var backMenu = readline.questionInt();
            callGame(backMenu);
            break;
    }
}
function playReel(value) {
    var newFounds = exports.reelSlot1.playReelSlot(value);
    if (newFounds > 0) {
        founds += newFounds;
        exports.newCasino.subtractAmount(value);
    }
    else {
        exports.newCasino.addAmount(value);
        founds -= value;
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
    console.log('Elija una opción y oprima ENTER');
    console.log('1: JUGAR OTRA VEZ');
    console.log('2: REPETIR JUGADAS');
    console.log('3: COBRAR Y SALIR');
    var gameOption = readline.questionInt();
    switch (gameOption) {
        case 1:
            reelSlot(1);
            break;
        case 2:
            var times = readline.questionInt('Ingrese la cantidad de repeticiones:');
            var value = readline.questionInt('Ingrese apuesta ( 5 - 10 - 15 - 20 ): ');
            replayReel(times, value);
            subMenuReel();
            break;
        case 3:
            console.log("Se retir\u00F3 con ".concat(founds, " creditos."));
            main();
            break;
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero valido ---");
            subMenuReel();
    }
}
/* Funcionalidades de tragamonedas progresivo */
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
            console.log("2: Volver al men\u00FA anterior:");
            var backMenu = readline.questionInt();
            callGame(backMenu);
            break;
    }
}
function playProgressive(value) {
    var newFounds = exports.progressiveSlot1.playProgressiveSlot(value);
    if (newFounds > 0) {
        founds += newFounds;
        exports.newCasino.subtractAmount(value * newFounds);
    }
    else {
        founds -= value * exports.progressiveSlot1.getPayLine();
        exports.newCasino.addAmount(value * founds);
    }
    console.log("Le quedan ".concat(founds, " creditos."));
    return newFounds;
}
function replayProgressive(times, value) {
    for (var i = 0; i < times; i++) {
        if (founds >= times * value * exports.progressiveSlot1.getPayLine()) {
            playProgressive(value);
        }
        else {
            throw Error('No tiene fondos para esta apuesta.');
        }
    }
    console.log("Le quedan ".concat(founds, " creditos."));
}
function setSlotLines(lines) {
    exports.progressiveSlot1.setPayLine(lines);
}
function subMenuProgressive() {
    console.log('Elija una opción y oprima ENTER');
    console.log('1: JUGAR OTRA VEZ');
    console.log('2: CAMBIAR LINEAS');
    console.log('3: REPETIR JUGADAS');
    console.log('4: COBRAR Y SALIR');
    var gameOption = readline.questionInt();
    switch (gameOption) {
        case 1:
            progressiveSlot(1);
            break;
        case 2:
            var lines = readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ');
            setSlotLines(lines);
            subMenuProgressive();
            break;
        case 3:
            var times = readline.questionInt('Ingrese la cantidad de repeticiones:');
            var value = readline.questionInt('Ingrese apuesta ( 1 - 2 - 5 - 10 - 15): ');
            replayProgressive(times, value);
            subMenuProgressive();
        case 4:
            console.log("Se retir\u00F3 con ".concat(founds, " creditos."));
            main();
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero valido ---");
            subMenuProgressive();
    }
}
/* Funcionalidades de ruleta */
function roullete(option) {
    switch (option) {
        case 0:
            games();
            break;
        case 1:
            var value = readline.questionInt('');
            playRoullete(value);
            subMenuRoullete();
            break;
        /* case 3:
        let lines:number=readline.questionInt('')
        setSlotLines(lines);
        callGame(2);
        break;*/
        case 2:
            var text = clasificationText[3].toString();
            console.log(text);
            console.log("2: Volver al men\u00FA anterior:");
            var backMenu = readline.questionInt();
            callGame(backMenu);
            break;
    }
}
function playRoullete(value) {
    console.log("Le quedan ".concat(founds, " creditos."));
}
function replayRoullete(times, value) {
    for (var i = 0; i < times; i++) {
        if (founds >= times * value) {
            playRoullete(value);
        }
        else {
            throw Error('No tiene fondos para esta apuesta.');
        }
    }
    console.log("Le quedan ".concat(founds, " creditos."));
}
/*function setSlotLines(lines:number):void{
    progressiveSlot1.setPayLine(lines);
}*/
function subMenuRoullete() {
    console.log('Elija una opción y oprima ENTER');
    console.log('1: JUGAR OTRA VEZ');
    console.log('2: CAMBIAR LINEAS');
    console.log('3: REPETIR JUGADAS');
    console.log('4: COBRAR Y SALIR');
    var gameOption = readline.questionInt();
    switch (gameOption) {
        case 1:
            roullete(1);
            break;
        case 2:
            var lines = readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ');
            setSlotLines(lines);
            subMenuRoullete();
            break;
        case 3:
            var times = readline.questionInt('Ingrese la cantidad de repeticiones:');
            var value = readline.questionInt('Ingrese apuesta ( 1 - 2 - 5 - 10 - 15): ');
            replayRoullete(times, value);
            subMenuRoullete();
        case 4:
            console.log("Se retir\u00F3 con ".concat(founds, " creditos."));
            main();
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero valido ---");
            subMenuRoullete();
    }
}
/* Funcionalidades de dados */
function craps(option) {
    switch (option) {
        case 0:
            games();
            break;
        case 1:
            var value = readline.questionInt('');
            playCraps(value);
            subMenuCraps();
            break;
        /*case 3:
        let lines:number=readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ')
        setSlotLines(lines);
        callGame(2);
        break;*/
        case 2:
            var text = clasificationText[4].toString();
            console.log(text);
            console.log("2: Volver al men\u00FA anterior:");
            var backMenu = readline.questionInt();
            callGame(backMenu);
            break;
    }
}
function playCraps(value) {
    console.log("Le quedan ".concat(founds, " creditos."));
}
function replayCraps(times, value) {
    for (var i = 0; i < times; i++) {
        if (founds >= times * value) {
            playCraps(value);
        }
        else {
            throw Error('No tiene fondos para esta apuesta.');
        }
    }
    console.log("Le quedan ".concat(founds, " creditos."));
}
/*function setSlotLines(lines:number):void{
    progressiveSlot1.setPayLine(lines);
}*/
function subMenuCraps() {
    console.log('Elija una opción y oprima ENTER');
    console.log('1: JUGAR OTRA VEZ');
    console.log('2: CAMBIAR LINEAS');
    console.log('3: REPETIR JUGADAS');
    console.log('4: COBRAR Y SALIR');
    var gameOption = readline.questionInt();
    switch (gameOption) {
        case 1:
            craps(1);
            break;
        case 2:
            var lines = readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ');
            setSlotLines(lines);
            subMenuCraps();
            break;
        case 3:
            var times = readline.questionInt('Ingrese la cantidad de repeticiones:');
            var value = readline.questionInt('Ingrese apuesta ( 1 - 2 - 5 - 10 - 15): ');
            replayCraps(times, value);
            subMenuCraps();
        case 4:
            console.log(exports.newCasino.getTreasury());
            console.log("Se retir\u00F3 con ".concat(founds, " creditos."));
            main();
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero valido ---");
            subMenuCraps();
    }
}
welcome();
