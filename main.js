"use strict";
exports.__esModule = true;
exports.newCasino = void 0;
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
var reelSlot1 = new reelSlot_1.ReelSlot(1001, reelSlotBet, "Animal", 9, 20, 3, 10000);
var progressiveSlot1 = new progressiveSlot_1.ProgressiveSlot(2001, progressiveSlotBet, "Egipcio", 25, 25, 5, 2, 500000);
var reelSlotList = [reelSlot1];
var progressiveSlotList = [progressiveSlot1];
exports.newCasino = new casino_1.Casino('Atlanta', progressiveSlotList, reelSlotList, 500000);
function welcome() {
    var text = clasificationText[0].toString();
    console.log(text);
    main();
}
function main() {
    console.log('Oprima 1 para empezar a jugar.');
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
    console.log('Elija su juego.');
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
            console.log('Elija una opción.');
            console.log('1: JUGAR');
            console.log('2: LEER INFORMACION DEL JUEGO');
            console.log('0: Volver al menú anterior');
            var reelOption = readline.questionInt();
            reelSlotMenu(reelOption);
            break;
        case 2:
            console.log('Elija una opción.');
            console.log('1: JUGAR');
            console.log('2: ELEGIR LINEAS');
            console.log('3: LEER INFORMACION DEL JUEGO');
            console.log('0: Volver al menú anterior');
            var progressiveOption = readline.questionInt();
            progressiveSlot(progressiveOption);
            break;
        case 3:
            console.log('Elija una opción.');
            console.log('1: JUGAR');
            console.log('2: LEER INFORMACION DEL JUEGO');
            console.log('0: Volver al menú anterior');
            var rouleteOption = readline.questionInt();
            roullete(rouleteOption);
            break;
        case 4:
            console.log('Elija una opción.');
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
function reelSlotMenu(option) {
    switch (option) {
        case 0:
            games();
            break;
        case 1:
            var value = readline.questionInt('Ingrese apuesta ( 5 - 10 - 15 - 20 ): ');
            playGame(1, value);
            subMenuReel();
            break;
        case 2:
            var text = clasificationText[1].toString();
            console.log(text);
            console.log("Volver al men\u00FA anterior:");
            readline.questionInt();
            callGame(1);
            break;
    }
}
function playGame(game, value) {
    var newFounds = 0;
    switch (game) {
        case 1:
            newFounds = reelSlot1.playReelSlot(value);
            break;
        case 2:
            newFounds = progressiveSlot1.playProgressiveSlot(value);
            break;
        /*case 3:
            newFounds=roullete1.playRoullete(value);
            break;
        case 4:
            newFounds=craps1.playCraps(value);
            break;*/
    }
    if (newFounds > 0) {
        founds += newFounds;
        exports.newCasino.setTreasury(value);
    }
    else {
        exports.newCasino.setTreasury(value);
        founds -= value;
    }
    console.log("Le quedan ".concat(founds, " creditos."));
    return newFounds;
}
function replayGame(game, times, value) {
    for (var i = 0; i < times; i++) {
        if (founds >= times * value) {
            playGame(game, value);
        }
        else {
            console.log("No tiene fondos para esta apuesta.");
            subMenuReel();
        }
    }
}
function subMenuReel() {
    console.log('Elija una opción.');
    console.log('1: JUGAR');
    console.log('2: MULTIPLICAR JUGADAS');
    console.log('3: COBRAR Y SALIR');
    var gameOption = readline.questionInt();
    switch (gameOption) {
        case 1:
            reelSlotMenu(1);
            break;
        case 2:
            var times = readline.questionInt('Ingrese la cantidad de repeticiones:');
            var value = readline.questionInt('Ingrese su apuesta ( 5 - 10 - 15 - 20 ): ');
            replayGame(1, times, value);
            subMenuReel();
            break;
        case 3:
            console.log("Se retir\u00F3 con ".concat(founds, " cr\u00E9ditos."));
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
            var value = readline.questionInt('Ingrese su apuesta ( 1 - 2 - 5 - 10 - 15 ): ');
            playGame(2, value);
            subMenuProgressive();
            break;
        case 2:
            var lines = readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ');
            setSlotLines(lines);
            progressiveSlot(1);
            subMenuProgressive();
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
function setSlotLines(lines) {
    progressiveSlot1.setPayLine(lines);
}
function subMenuProgressive() {
    console.log('Elija una opción.');
    console.log('1: JUGAR');
    console.log('2: ELEGIR CANTIDAD DE LINEAS');
    console.log('3: MULTIPLICAR JUGADAS');
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
            replayGame(2, times, value);
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
            playGame(3, value);
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
            replayGame(3, times, value);
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
            playGame(4, value);
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
            replayGame(4, times, value);
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
