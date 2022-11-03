"use strict";
exports.__esModule = true;
exports.welcome = void 0;
var progressiveSlot_1 = require("./class/progressiveSlot");
var reelSlot_1 = require("./class/reelSlot");
var roulette_1 = require("./class/roulette");
var casino_1 = require("./class/casino");
var player_1 = require("./class/player");
var TurningTurn_1 = require("./class/TurningTurn");
//Modulos
var fs = require("fs");
var readline = require('readline-sync');
var information = fs.readFileSync('./files.txt/info.txt', 'utf-8');
var clasificationText = information.split('\\');
//Instancia Jugador
var playerOne;
//Instancias tragamonedas
var progressiveSlotBet = [1, 2, 5, 10, 15];
var reelSlotBet = [5, 10, 15, 20];
var reelSlotOne = new reelSlot_1.ReelSlot(1001, reelSlotBet, "Animal", 9, 20, 3, 10000);
var progressiveSlotOne = new progressiveSlot_1.ProgressiveSlot(2001, progressiveSlotBet, "Egipcio", 25, 25, 5, 2, 500000);
var reelSlotList = [reelSlotOne];
var progressiveSlotList = [progressiveSlotOne];
//Instancia ruleta
var countTurns = 0;
var numberRed = new Array(1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36);
var rouletteOne = new roulette_1.Roulette(1, numberRed, 0);
var rouletteList = [rouletteOne];
//Instancia casino
var newCasino = new casino_1.Casino('Atlanta', progressiveSlotList, reelSlotList, rouletteList, 500000);
//Informacion del casino
function welcome() {
    gameInformation(0);
    newPlayer();
    console.log("Bienvenido ".concat(playerOne.getName(), "."));
    main();
}
exports.welcome = welcome;
// Funcion para carga de jugador
function newPlayer() {
    var age = readline.questionInt("Ingrese su edad para verificar si es mayor: ");
    if (age >= 18) {
        var name_1 = readline.question("Ingrese su nombre: ");
        var surname = readline.question("Ingrese su apellido: ");
        var founds = readline.questionInt("Ingrese sus los fondos que desea utilizar:");
        playerOne = new player_1.Player(age, name_1, surname, founds);
        console.log(playerOne);
    }
    else {
        throw console.error('Debe ser mayor de edad para ingresar al casino.');
    }
}
// Funcion de inicio para el menu del casino
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
// Menu de juegos
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
// Llamado a cada juego
function callGame(option) {
    switch (option) {
        case 0:
            main();
            break;
        case 1:
            gameOptions();
            var reelOption = readline.questionInt();
            reelSlotMenu(reelOption);
            break;
        case 2:
            gameOptions();
            var progressiveOption = readline.questionInt();
            progressiveSlotMenu(progressiveOption);
            break;
        case 3:
            gameOptions();
            var rouleteOption = readline.questionInt();
            rouletteMenu(rouleteOption);
            break;
        case 4:
            gameOptions();
            var crapsOption = readline.questionInt();
            crapsMenu(crapsOption);
            break;
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero v\u00E1lido ---");
            games();
    }
}
// Opciones de cada
function gameOptions() {
    console.log('Elija una opción. \n 1: JUGAR \n 2: LEER INFORMACION DEL JUEGO \n 0: Volver al menú anterior');
}
/* Funcionalidades de tragamonedas tradicional */
function reelSlotMenu(option) {
    switch (option) {
        case 0:
            games();
            break;
        case 1:
            var value = readline.questionInt('Ingrese apuesta ( 5 - 10 - 15 - 20 ): ');
            if (reelSlotOne.verifyBet(value)) {
                playGame(1, value);
            }
            subMenuReel();
            break;
        case 2:
            gameInformation(1);
            callGame(1);
            break;
    }
}
function subMenuReel() {
    console.log('1: JUGAR \n2: MULTIPLICAR JUGADAS \n3: COBRAR Y SALIR');
    var gameOption = readline.questionInt();
    switch (gameOption) {
        case 1:
            reelSlotMenu(1);
            break;
        case 2:
            var times = readline.questionInt('Ingrese la cantidad de repeticiones:');
            var value = readline.questionInt('Ingrese su apuesta ( 5 - 10 - 15 - 20 ): ');
            if (reelSlotOne.verifyBet(value)) {
                replayGame(1, times, value);
            }
            subMenuReel();
            break;
        case 3:
            console.log("".concat(playerOne.getName(), " se retir\u00F3 con ").concat(playerOne.getFoundsAvailable(), " cr\u00E9ditos."));
            break;
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero valido ---");
            subMenuReel();
    }
}
/* Funcionalidades de tragamonedas progresivo */
function progressiveSlotMenu(option) {
    switch (option) {
        case 0:
            games();
            break;
        case 1:
            var lines = readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ');
            if (progressiveSlotOne.verifyLines(lines)) {
                var value = readline.questionInt('Ingrese su apuesta ( 1 - 2 - 5 - 10 - 15 ): ');
                if (progressiveSlotOne.verifyBet(value)) {
                    setSlotLines(lines);
                    playGame(2, value);
                }
            }
            subMenuProgressiveSlot();
            break;
        case 2:
            gameInformation(2);
            callGame(2);
            break;
    }
}
function setSlotLines(lines) {
    progressiveSlotOne.setPayLine(lines);
}
function subMenuProgressiveSlot() {
    console.log('1: JUGAR \n2: MULTIPLICAR JUGADAS \n3: COBRAR Y SALIR');
    var gameOption = readline.questionInt();
    switch (gameOption) {
        case 1:
            progressiveSlotMenu(1);
            break;
        case 2:
            var times = readline.questionInt('Ingrese la cantidad de repeticiones:');
            var lines = readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ');
            if (progressiveSlotOne.verifyLines(lines)) {
                var value = readline.questionInt('Ingrese apuesta ( 1 - 2 - 5 - 10 - 15): ');
                if (progressiveSlotOne.verifyBet(value)) {
                    replayGame(2, times, value);
                    setSlotLines(lines);
                }
            }
            subMenuProgressiveSlot();
            break;
        case 3:
            console.log("".concat(playerOne.getName(), " se retir\u00F3 con ").concat(playerOne.getFoundsAvailable(), " cr\u00E9ditos."));
            break;
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero valido ---");
            subMenuProgressiveSlot();
    }
}
/* Funcionalidades de ruleta */
function rouletteMenu(option) {
    switch (option) {
        case 0:
            games();
            break;
        case 1:
            var value = readline.questionInt('Ingrese su apuesta: ');
            while (value > playerOne.getFoundsAvailable()) {
                console.log("Fondos Insuficientes");
                value = readline.questionInt('Ingrese su apuesta nuevamente: ');
            }
            var pleno = readline.questionInt('Ingrese Numero entre 1 y 36 para PLENO: ');
            while (pleno < 1 || pleno > 36) {
                pleno = readline.questionInt('Ingrese Numero entre 1 y 36 para PLENO: ');
            }
            var color = undefined;
            var p_color = readline.questionInt('Ingrese Color para Jugar, Para ROJO (1), para NEGRO (2) o Pasar (3): ');
            switch (p_color) {
                case 1:
                    color = "ROJO";
                    break;
                case 2:
                    color = "NEGRO";
                    break;
                case 3:
                    color = undefined;
                    break;
                default:
                    console.log("El valor Ingresado es Invalido, no se jugara por este Item");
                    break;
            }
            var parOinpar = readline.question('Ingrese PAR o IMPAR, o solo deje Vacio: ');
            if (parOinpar === "") {
                parOinpar = undefined;
            }
            var docena = readline.question('Ingrese 1ra Docena, 2da Docena o 3ra Docena, o solo deje Vacio: ');
            if (docena === "") {
                docena = undefined;
            }
            var altoObajo = readline.question('Ingrese Numero ALTO o Numero BAJO, o solo deje Vacio: ');
            if (altoObajo === "") {
                altoObajo = undefined;
            }
            var turningTurnOne = new TurningTurn_1.TurningTurn(countTurns + 1, newCasino, rouletteOne, playerOne, value, pleno, color, parOinpar, docena, altoObajo);
            turningTurnOne.turning();
            console.log("----------------------------------------------------------------");
            subMenuRoulette();
            //callGame(3)
            //playGame(3,value);
            break;
        case 2:
            gameInformation(3);
            callGame(3);
            break;
    }
}
function subMenuRoulette() {
    console.log('1: JUGAR \n2: COBRAR Y SALIR \n3: Volver al menú anterior');
    var gameOption = readline.questionInt();
    switch (gameOption) {
        case 1:
            rouletteMenu(1);
            break;
        case 2:
            console.log("----------------------------------------------------------------");
            console.log("Su saldo actual es de: ".concat(playerOne.getFoundsAvailable()));
            console.log("----------------------------------------------------------------");
            //console.log(`Se retiró con ${founds} creditos.`);
            break;
        case 3:
            games();
            break;
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero valido ---");
            subMenuRoulette();
    }
}
/* Funcionalidades de dados */
function crapsMenu(option) {
    switch (option) {
        case 0:
            games();
            break;
        case 1:
            var value = readline.questionInt('');
            playGame(4, value);
            subMenuCraps();
            break;
        case 2:
            gameInformation(4);
            callGame(4);
            break;
    }
}
function subMenuCraps() {
    console.log('Elija una opción');
    console.log('1: JUGAR OTRA VEZ');
    console.log('2: COBRAR Y SALIR');
    var gameOption = readline.questionInt();
    switch (gameOption) {
        case 1:
            crapsMenu(1);
            break;
        case 2:
            console.log("Se retir\u00F3 con ".concat(playerOne.getFoundsAvailable(), " cr\u00E9ditos."));
            break;
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero valido ---");
            subMenuCraps();
    }
}
function playGame(game, value) {
    var aux = false;
    var newFounds = 0;
    if (playerOne.getFoundsAvailable() >= value) {
        aux = true;
    }
    if (aux) {
        switch (game) {
            case 1:
                newFounds = reelSlotOne.playReelSlot(value);
                break;
            case 2:
                newFounds = progressiveSlotOne.playProgressiveSlot(value);
                break;
            /*case 3:
                newFounds=roulette1.playRoulette(value);
                break;
            case 4:
                newFounds=craps1.playCraps(value);
        break;*/
        }
    }
    else {
        console.log("No tiene fondos para esta apuesta");
    }
    playerOne.setFoundsAvailable(newFounds);
    newCasino.setTreasury(newFounds);
    console.log("Le quedan ".concat(playerOne.getFoundsAvailable(), " cr\u00E9ditos."));
}
function replayGame(game, times, value) {
    for (var i = 0; i < times; i++) {
        if (playerOne.getFoundsAvailable() >= times * value) {
            playGame(game, value);
        }
        else {
            console.log("No tiene fondos para esta apuesta.");
        }
    }
}
function gameInformation(index) {
    var text = clasificationText[index].toString();
    console.log(text);
}
